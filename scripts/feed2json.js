// rssParser.js
// Plain HTTP(S) fetch -> parse RSS/Atom to JSON Feed.
// Playwright fallback ONLY when Vercel challenge is detected (429 + challenge headers).
// Improvements: no blocking during prewarm, stronger waits, retry loop, optional soft-fail.

const fs = require("fs");
const https = require("https");
const http = require("http");
const zlib = require("zlib");
const { URL } = require("url");
const xml2js = require("xml2js");

const VERBOSE = process.env.FEED_DEBUG === "1";
const STORAGE_STATE_PATH = "./.playwright-storage.json";
// return empty feed instead of throw on persistent 429
const FEED_SOFT_FAIL =
  process.env.FEED_SOFT_FAIL === undefined
    ? true
    : process.env.FEED_SOFT_FAIL === "1";

// ---------------- Helper: plain fetch (original behavior) ----------------
function fetchXmlFromUrl(feedUrl) {
  return new Promise((resolve, reject) => {
    const url = new URL(feedUrl);
    const client = url.protocol === "https:" ? https : http;

    const options = {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "application/rss+xml, application/xml, application/atom+xml, text/xml, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
      },
    };

    const req = client.get(feedUrl, options, (res) => {
      if (VERBOSE) {
        console.error("[plain] status:", res.statusCode);
        console.error("[plain] headers:", res.headers);
      }

      if (res.statusCode !== 200) {
        const err = new Error(`Request failed with status ${res.statusCode}`);
        err.statusCode = res.statusCode;
        err.headers = res.headers;
        res.resume();
        return reject(err);
      }

      // Handle content-encoding (gzip, deflate, br)
      let stream = res;
      const encoding = (res.headers["content-encoding"] || "").toLowerCase();
      if (encoding === "gzip") {
        stream = res.pipe(zlib.createGunzip());
      } else if (encoding === "deflate") {
        stream = res.pipe(zlib.createInflate());
      } else if (encoding === "br") {
        stream = res.pipe(zlib.createBrotliDecompress());
      }

      let data = "";
      stream.on("data", (chunk) => (data += chunk));
      stream.on("end", () => resolve(data));
      stream.on("error", (err) => reject(err));
    });

    req.on("error", (err) => reject(err));
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

// ---------------- Cloudflare challenge detection ----------------
function isCloudflareChallenge(errOrHeaders) {
  const headers = errOrHeaders?.headers || errOrHeaders || {};
  const status = errOrHeaders?.statusCode;
  const cfMitigated = (headers["cf-mitigated"] || "").toString().toLowerCase();
  const server = (headers["server"] || "").toString().toLowerCase();
  return (
    (status === 403 || status === 503) &&
    (cfMitigated === "challenge" || server === "cloudflare")
  );
}

// Small helper: sleep
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

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
      "--disable-features=UseKeychain",
      "--use-mock-keychain",
      "--password-store=basic",
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
    contextOptions.storageState = storageStatePath; // reuse cookies
  }
  const context = await browser.newContext(contextOptions);

  // Route blocking: OFF during prewarm (allow challenge to load everything)
  // We'll enable blocking only for the XML fetch step.
  const enableBlocking = async () => {
    await context.unroute("**/*").catch(() => {});
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
  };

  const page = await context.newPage();

  async function prewarmOnce() {
    if (VERBOSE) console.error("[pw] prewarming:", prewarmUrl);
    await context.unroute("**/*").catch(() => {}); // make sure nothing is blocked

    try {
      // Try with 'load' first (less strict than 'networkidle')
      const resp = await page.goto(prewarmUrl, {
        waitUntil: "load",
        timeout: 45000,
      });
      if (VERBOSE) {
        console.error("[pw] prewarm status:", resp?.status?.());
      }
      // A tiny idle to allow any post-load challenge work to complete
      await delay(2000);
    } catch (err) {
      if (VERBOSE) {
        console.error(
          "[pw] prewarm failed, trying with minimal wait:",
          err.message
        );
      }
      // Fallback: try with just 'domcontentloaded'
      try {
        await page.goto(prewarmUrl, {
          waitUntil: "domcontentloaded",
          timeout: 30000,
        });
        await delay(3000); // Give more time for challenge to complete
      } catch (err2) {
        if (VERBOSE) {
          console.error("[pw] prewarm fallback also failed:", err2.message);
        }
        // Continue anyway - maybe we don't need prewarming
      }
    }

    // Save cookies/state for reuse
    try {
      const state = await context.storageState();
      fs.writeFileSync(storageStatePath, JSON.stringify(state, null, 2));
      if (VERBOSE) console.error("[pw] storageState saved (after prewarm)");
    } catch {}
  }

  async function tryFetchFeedOnce() {
    await enableBlocking(); // now speed up the feed request
    const resp = await page.goto(feedUrl, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });
    if (!resp) throw new Error("[pw] No response for feed URL");
    const status = resp.status();
    const headers = resp.headers();
    if (VERBOSE) console.error("[pw] feed status:", status, headers);
    return { status, headers, text: status === 200 ? await resp.text() : null };
  }

  try {
    let needsPrewarm = !fs.existsSync(storageStatePath);
    let attempt = 0;
    let last = null;
    const maxAttempts = 3;

    while (attempt < maxAttempts) {
      attempt++;

      // Do prewarm if needed (first attempt without cookies, or after challenge)
      if (needsPrewarm && attempt > 1) {
        if (VERBOSE)
          console.error(`[pw] Prewarming before attempt ${attempt}...`);
        await prewarmOnce();
        needsPrewarm = false;
      }

      const { status, headers, text } = await tryFetchFeedOnce();
      if (status === 200 && text) {
        // Success! Refresh stored state (keeps cookies fresh)
        try {
          const state = await context.storageState();
          fs.writeFileSync(storageStatePath, JSON.stringify(state, null, 2));
          if (VERBOSE) console.error("[pw] storageState saved");
        } catch {}
        await browser.close();
        return text;
      }

      last = { status, headers };

      // Check if we need to prewarm and retry
      if (
        (status === 429 &&
          isVercelChallenge({ statusCode: status, headers })) ||
        (status === 403 &&
          isCloudflareChallenge({ statusCode: status, headers }))
      ) {
        if (VERBOSE)
          console.error(
            `[pw] Challenge detected (${status}) on attempt ${attempt}, will retry with prewarm...`
          );
        // clear and prepare to re-warm on next iteration
        await context.clearCookies();
        await context.clearPermissions();
        needsPrewarm = true;
        await delay(1000); // small delay before retry
        continue;
      }

      // Not a challenge we can handle → break
      if (VERBOSE)
        console.error(`[pw] Unhandled response status ${status}, giving up`);
      break;
    }

    // If we get here, we failed to get 200
    const e = new Error(
      `[pw] Feed request failed: ${last?.status ?? "unknown"}`
    );
    e.statusCode = last?.status;
    e.headers = last?.headers;
    throw e;
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
      // ORIGINAL PATH FIRST
      try {
        xml = await fetchXmlFromUrl(source);
      } catch (err) {
        if (isVercelChallenge(err) || isCloudflareChallenge(err)) {
          const challengeType = isVercelChallenge(err)
            ? "Vercel"
            : "Cloudflare";
          if (VERBOSE)
            console.error(
              `[main] ${challengeType} challenge (${err.statusCode}) → Playwright fallback`
            );
          try {
            xml = await fetchXmlWithPlaywright(source);
          } catch (pwErr) {
            if (
              FEED_SOFT_FAIL &&
              (isVercelChallenge(pwErr) || isCloudflareChallenge(pwErr))
            ) {
              // Return an empty feed so CI can proceed
              console.error(
                `[main] Soft-failing on persistent ${challengeType} challenge (returning empty feed).`
              );
              return {
                version: "https://jsonfeed.org/version/1",
                title: "",
                home_page_url: source,
                description: "",
                items: [],
              };
            }
            throw pwErr;
          }
        } else if (err && err.code === "SELF_SIGNED_CERT_IN_CHAIN") {
          return {
            version: "https://jsonfeed.org/version/1",
            title: "",
            home_page_url: source,
            description: "",
            items: [],
          };
        } else {
          throw err;
        }
      }
    } else {
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
      // RSS 2.0
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
      // Atom
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
  const source = process.argv[2] || "example.xml";
  const jsonOutput = await parseRSS(source);
  console.log(JSON.stringify(jsonOutput, null, 2));
})();

module.exports = { parseRSS };
