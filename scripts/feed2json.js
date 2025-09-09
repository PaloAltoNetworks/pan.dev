// rssParser.js
// Plain HTTP(S) fetch -> parse RSS/Atom to JSON Feed.
// Playwright fallback ONLY when Vercel challenge is detected (429 + challenge headers).

const fs = require("fs");
const https = require("https");
const http = require("http");
const { URL } = require("url");
const xml2js = require("xml2js");

const VERBOSE = process.env.FEED_DEBUG === "1";
const STORAGE_STATE_PATH = "./.playwright-storage.json";

// ---------------- Helper: plain fetch (KEEPING ORIGINAL BEHAVIOR) ----------------
function fetchXmlFromUrl(feedUrl) {
  return new Promise((resolve, reject) => {
    const url = new URL(feedUrl);
    const client = url.protocol === "https:" ? https : http;

    const req = client.get(feedUrl, (res) => {
      if (VERBOSE) {
        console.error("[plain] status:", res.statusCode);
        console.error("[plain] headers:", res.headers);
      }

      if (res.statusCode !== 200) {
        const err = new Error(`Request failed with status ${res.statusCode}`);
        // attach headers so caller can decide if it's a Vercel challenge
        err.statusCode = res.statusCode;
        err.headers = res.headers;
        res.resume(); // drain
        return reject(err);
      }

      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
}

// ---------------- Vercel challenge detection (strict) ----------------
function isVercelChallenge(errOrHeaders) {
  const headers = errOrHeaders?.headers || errOrHeaders || {};
  const status = errOrHeaders?.statusCode;
  const mitigated = (headers["x-vercel-mitigated"] || "")
    .toString()
    .toLowerCase();
  const challenge = headers["x-vercel-challenge-token"];
  return status === 429 && (!!challenge || mitigated === "challenge");
}

// ---------------- Playwright fallback (ephemeral, no Keychain) ----------------
async function fetchXmlWithPlaywright(feedUrl, opts = {}) {
  const { chromium, devices } = require("playwright");

  const u = new URL(feedUrl);
  const isHashi = /(^|\.)hashicorp\.com$/i.test(u.hostname);
  const prewarmUrl =
    opts.prewarmUrl || (isHashi ? `${u.origin}/en/blog/all` : u.origin);
  const storageStatePath = opts.storageStatePath || STORAGE_STATE_PATH;

  const browser = await chromium.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-renderer-backgrounding",
      "--disable-features=UseKeychain", // macOS hint to avoid Keychain
      "--use-mock-keychain", // macOS hint
      "--password-store=basic", // Linux: avoid Keyring/KWallet
    ],
  });

  const contextOptions = {
    userAgent:
      devices["Desktop Chrome"]?.userAgent ||
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
    viewport: { width: 900, height: 700 },
    javaScriptEnabled: true,
  };
  if (fs.existsSync(storageStatePath)) {
    contextOptions.storageState = storageStatePath; // reuse cookies if we have them
  }
  const context = await browser.newContext(contextOptions);

  // Speed: block heavy/irrelevant resource types
  await context.route("**/*", (route) => {
    const type = route.request().resourceType();
    const url = route.request().url();
    if (
      type === "image" ||
      type === "media" ||
      type === "font" ||
      type === "stylesheet"
    ) {
      return route.abort();
    }
    if (
      /\b(googletagmanager|google-analytics|doubleclick|segment|mixpanel|hotjar|sentry)\b/i.test(
        url
      )
    ) {
      return route.abort();
    }
    return route.continue();
  });

  try {
    const page = await context.newPage();

    // If no cookies yet, prewarm once so any JS challenge runs
    if (!fs.existsSync(storageStatePath)) {
      if (VERBOSE) console.error("[pw] prewarming:", prewarmUrl);
      await page.goto(prewarmUrl, {
        waitUntil: "domcontentloaded",
        timeout: 45000,
      });
      await page
        .waitForLoadState("networkidle", { timeout: 8000 })
        .catch(() => {});
      try {
        const state = await context.storageState();
        fs.writeFileSync(storageStatePath, JSON.stringify(state, null, 2));
        if (VERBOSE) console.error("[pw] storageState saved (after prewarm)");
      } catch {}
    }

    if (VERBOSE) console.error("[pw] fetching feed:", feedUrl);
    const resp = await page.goto(feedUrl, {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });
    if (!resp) throw new Error("[pw] No response for feed URL");

    const status = resp.status();
    const headers = resp.headers();
    if (VERBOSE) console.error("[pw] status:", status, "headers:", headers);

    if (status !== 200) {
      // Try one refresh cycle if stored cookies are stale
      if (fs.existsSync(storageStatePath)) {
        if (VERBOSE)
          console.error("[pw] stale cookies? retrying with fresh prewarm…");
        await context.clearCookies();
        await context.clearPermissions();
        await page.goto(prewarmUrl, {
          waitUntil: "domcontentloaded",
          timeout: 45000,
        });
        await page
          .waitForLoadState("networkidle", { timeout: 8000 })
          .catch(() => {});
        const resp2 = await page.goto(feedUrl, {
          waitUntil: "domcontentloaded",
          timeout: 45000,
        });
        if (resp2 && resp2.status() === 200) {
          const xml2 = await resp2.text();
          try {
            const state2 = await context.storageState();
            fs.writeFileSync(storageStatePath, JSON.stringify(state2, null, 2));
            if (VERBOSE) console.error("[pw] storageState refreshed");
          } catch {}
          await browser.close();
          return xml2;
        }
      }
      const e = new Error(`[pw] Feed request failed: ${status}`);
      e.statusCode = status;
      e.headers = headers;
      throw e;
    }

    const xml = await resp.text();
    try {
      const state = await context.storageState();
      fs.writeFileSync(storageStatePath, JSON.stringify(state, null, 2));
      if (VERBOSE) console.error("[pw] storageState saved");
    } catch {}

    await browser.close();
    return xml;
  } catch (e) {
    try {
      await browser.close();
    } catch {}
    throw e;
  }
}

// ---------------- RSS/Atom → JSON Feed ----------------
async function parseRSS(source) {
  try {
    let xml;

    if (source.startsWith("http://") || source.startsWith("https://")) {
      // ORIGINAL PATH FIRST (unchanged behavior for Medium & others)
      try {
        xml = await fetchXmlFromUrl(source);
      } catch (err) {
        // If the site is Vercel and challenged us, use the Playwright fallback
        if (isVercelChallenge(err)) {
          if (VERBOSE)
            console.error(
              "[main] Vercel 429 challenge → falling back to Playwright"
            );
          xml = await fetchXmlWithPlaywright(source);
        } else if (err && err.code === "SELF_SIGNED_CERT_IN_CHAIN") {
          // original graceful handling
          return {
            version: "https://jsonfeed.org/version/1",
            title: "",
            home_page_url: source,
            description: "",
            items: [],
          };
        } else {
          // Not a Vercel case → bubble up (preserves original behavior)
          throw err;
        }
      }
    } else {
      // Local file path (original behavior)
      xml = fs.readFileSync(source, "utf-8");
    }

    const parser = new xml2js.Parser({
      explicitArray: false,
      mergeAttrs: true,
      preserveChildrenOrder: true,
      charsAsChildren: false,
      xmlns: false,
      explicitRoot: true,
    });

    const result = await parser.parseStringPromise(xml);

    if (result.rss?.channel) {
      // RSS 2.0 Format
      const channel = result.rss.channel;
      const items = Array.isArray(channel.item) ? channel.item : [channel.item];

      return {
        version: "https://jsonfeed.org/version/1",
        title: channel.title,
        home_page_url: channel.link,
        description: channel.description,
        author: channel.webMaster ? { name: channel.webMaster } : undefined,
        items: items.filter(Boolean).map((item) => ({
          guid: item.guid,
          url: item.link,
          title: item.title,
          content_html: item["content:encoded"] || item.description || "",
          date_published: item.pubDate
            ? new Date(item.pubDate).toISOString()
            : undefined,
          author: item["dc:creator"] ? { name: item["dc:creator"] } : undefined,
        })),
      };
    } else if (result.feed) {
      // Atom Format
      const feed = result.feed;
      const entries = Array.isArray(feed.entry) ? feed.entry : [feed.entry];

      return {
        version: "https://jsonfeed.org/version/1",
        title: feed.title,
        home_page_url: Array.isArray(feed.link)
          ? feed.link.find((l) => l.rel === "alternate")?.href ||
            feed.link[0]?.href ||
            feed.link[0]
          : feed.link?.href || feed.link,
        description: feed.subtitle,
        favicon: feed.icon,
        author: feed.author?.name ? { name: feed.author.name } : undefined,
        items: entries.filter(Boolean).map((entry) => ({
          guid: entry.id,
          url: entry.link?.href || entry.link,
          title: entry.title?._ || entry.title,
          content_html: entry.content?._ || entry.content || "",
          summary: entry.summary?._ || entry.summary || "",
          date_published: entry.updated
            ? new Date(entry.updated).toISOString()
            : undefined,
          author: entry.author?.name ? { name: entry.author.name } : undefined,
        })),
      };
    } else {
      console.error(
        "Unexpected XML structure:",
        JSON.stringify(result, null, 2)
      );
      throw new Error("Unrecognized feed format. Expected RSS or Atom.");
    }
  } catch (error) {
    console.error("Error parsing feed:", error);
    throw error;
  }
}

// ---------------- Example usage ----------------
(async () => {
  const source = process.argv[2] || "example.xml"; // File path or URL passed via CLI
  const jsonOutput = await parseRSS(source);
  console.log(JSON.stringify(jsonOutput, null, 2));
})();

module.exports = { parseRSS };
