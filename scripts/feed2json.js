// rssParser.js
const fs = require("fs");
const https = require("https");
const http = require("http");
const { URL } = require("url");
const xml2js = require("xml2js");

// Helper to fetch XML from URL
function fetchXmlFromUrl(feedUrl) {
  return new Promise((resolve, reject) => {
    const url = new URL(feedUrl);
    const client = url.protocol === "https:" ? https : http;

    const req = client.get(feedUrl, (res) => {
      if (res.statusCode !== 200) {
        return reject(
          new Error(`Request failed with status ${res.statusCode}`)
        );
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

// Function to convert XML feed (RSS 2.0 or Atom) to JSON Feed format
async function parseRSS(source) {
  try {
    let xml;
    if (source.startsWith("http://") || source.startsWith("https://")) {
      try {
        xml = await fetchXmlFromUrl(source);
      } catch (err) {
        if (err.code === "SELF_SIGNED_CERT_IN_CHAIN") {
          return {
            version: "https://jsonfeed.org/version/1",
            title: "",
            home_page_url: source,
            description: "",
            items: [],
          };
        }
        throw err;
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
      // RSS 2.0 Format
      const channel = result.rss.channel;
      const items = Array.isArray(channel.item) ? channel.item : [channel.item];

      return {
        version: "https://jsonfeed.org/version/1",
        title: channel.title,
        home_page_url: channel.link,
        description: channel.description,
        author: { name: channel.webMaster },
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

// Example usage:
(async () => {
  const source = process.argv[2] || "example.xml"; // File path or URL passed via CLI
  const jsonOutput = await parseRSS(source);
  console.log(JSON.stringify(jsonOutput, null, 2));
})();

// Export function if needed for external usage
module.exports = { parseRSS };
