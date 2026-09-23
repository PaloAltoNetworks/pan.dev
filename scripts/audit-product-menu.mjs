/**
 * Checks the product menu roster in src/data/products.ts against a running
 * site. The roster feeds both the navbar drawer and the homepage card grid,
 * so a bad entry is visible in two places at once.
 *
 *   node scripts/audit-product-menu.mjs                     # against pan.dev
 *   node scripts/audit-product-menu.mjs --base <url>        # a deploy preview
 *   node scripts/audit-product-menu.mjs --offline           # structure only
 *
 * Exits non-zero on any failure, so it can gate a merge.
 */

import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CONCURRENCY = 8;

/**
 * Destinations that are known to 404 upstream. Listed so the audit stays
 * green on a fault it is not this repo's job to fix, and so the entry has to
 * be deleted deliberately once the page lands.
 */
const KNOWN_BROKEN = new Map([
  [
    "/sase/api/activation/",
    "Added to the navbar by #1416; the page does not exist on production yet.",
  ],
]);

function parseArgs(argv) {
  const args = { base: "https://pan.dev", offline: false };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--base") {
      args.base = argv[i + 1]?.replace(/\/$/, "") ?? args.base;
      i += 1;
    } else if (argv[i] === "--offline") {
      args.offline = true;
    }
  }
  return args;
}

/**
 * products.ts is data with type annotations rather than a module that needs
 * compiling, so the annotation is dropped and the literal imported as-is.
 * This avoids a TypeScript dependency the repo does not otherwise have.
 */
async function loadRoster() {
  const file = resolve(root, "src/data/products.ts");
  const src = readFileSync(file, "utf8");
  const start = src.indexOf("export const MENU_GROUPS");
  if (start === -1) {
    throw new Error(`MENU_GROUPS not found in ${file}`);
  }
  const body = src
    .slice(start)
    .replace(
      /^export const MENU_GROUPS\s*:\s*MenuGroup\[\]\s*=/,
      "export const MENU_GROUPS ="
    );
  const mod = await import(`data:text/javascript,${encodeURIComponent(body)}`);
  return mod.MENU_GROUPS;
}

/** Every link in the roster, with enough context to name it in a failure. */
function collect(groups) {
  const out = [];
  for (const group of groups) {
    for (const product of group.products) {
      const where = `${group.label} / ${product.label}`;
      out.push({ to: product.overview, label: "overview", where });
      for (const link of product.docs ?? []) {
        out.push({ to: link.to, label: link.label, where });
      }
      for (const link of product.apiDocs ?? []) {
        out.push({ to: link.to, label: link.label, where });
      }
    }
  }
  return out;
}

/** Shape the drawer and the homepage cards both rely on. */
function checkStructure(groups) {
  const failures = [];
  const seenProducts = new Set();

  for (const group of groups) {
    const where = group.label;
    // The homepage card reads both of these directly.
    if (!group.colorclass) {
      failures.push(`${where}: missing colorclass, the homepage card needs it`);
    }
    if (!group.description) {
      failures.push(
        `${where}: missing description, the homepage card needs it`
      );
    }
    if (!group.products?.length) {
      failures.push(`${where}: no products`);
    }

    for (const product of group.products ?? []) {
      const name = `${where} / ${product.label}`;
      if (seenProducts.has(product.label)) {
        // Submenu ids are derived from the label, so duplicates collide.
        failures.push(`${name}: duplicate product label`);
      }
      seenProducts.add(product.label);

      if (!product.overview) {
        failures.push(`${name}: no overview destination`);
      }
      const links = [...(product.docs ?? []), ...(product.apiDocs ?? [])];
      if (links.length === 0) {
        // The homepage renders the product heading with an empty list.
        failures.push(
          `${name}: no docs or apiDocs, its homepage card is empty`
        );
      }
      for (const link of links) {
        const external = /^https?:\/\//.test(link.to);
        if (external && !link.external) {
          failures.push(
            `${name}: "${link.label}" leaves pan.dev but is not marked external`
          );
        }
        if (!external && link.external) {
          failures.push(
            `${name}: "${link.label}" is marked external but is an internal path`
          );
        }
      }
      if (/^https?:\/\//.test(product.overview) && !product.overviewExternal) {
        failures.push(
          `${name}: overview leaves pan.dev but is not marked overviewExternal`
        );
      }
    }
  }
  return failures;
}

/**
 * The roster replaced a navbar mega menu, and the homepage grid used to read
 * that menu. A link added back to the navbar config would render nowhere, so
 * this fails if product links reappear there.
 */
function checkNavbarDrift() {
  const src = readFileSync(resolve(root, "docusaurus.config.ts"), "utf8");
  const failures = [];
  if (!src.includes('type: "custom-productMenu"')) {
    failures.push(
      "docusaurus.config.ts: the custom-productMenu navbar item is gone"
    );
  }
  if (src.includes("megaNav")) {
    failures.push(
      "docusaurus.config.ts: a megaNav item is back; product links belong in src/data/products.ts"
    );
  }
  if (/\n\s*products:\s*\[/.test(src)) {
    failures.push(
      "docusaurus.config.ts: a navbar item carries a products list; it will not render anywhere"
    );
  }
  return failures;
}

async function checkReachable(links, base) {
  const unique = [...new Map(links.map((l) => [l.to, l])).values()];
  const broken = [];
  const redirected = [];
  const known = [];
  const queue = [...unique];

  const worker = async () => {
    while (queue.length > 0) {
      const link = queue.shift();
      const internal = link.to.startsWith("/");
      const url = internal ? base + link.to : link.to;
      try {
        const res = await fetch(url, {
          // Internal links are checked for the exact trailing-slash form, so a
          // hop is a fault this repo can fix. External hosts canonicalize
          // freely (e.g. the Terraform registry "latest" 301), so those are
          // followed and judged only on where they land.
          redirect: internal ? "manual" : "follow",
          headers: { "user-agent": "pan.dev-nav-audit" },
        });
        if (internal && res.status >= 300 && res.status < 400) {
          // trailingSlash is on, so a hop here means the roster is off by one
          // character and every visitor pays for it.
          redirected.push({
            ...link,
            status: res.status,
            to2: res.headers.get("location"),
          });
        } else if (res.status >= 400) {
          const reason = KNOWN_BROKEN.get(link.to);
          (reason ? known : broken).push({
            ...link,
            status: res.status,
            reason,
          });
        }
      } catch (error) {
        broken.push({ ...link, status: error.message.slice(0, 60) });
      }
    }
  };

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return { total: unique.length, broken, redirected, known };
}

const args = parseArgs(process.argv.slice(2));
const groups = await loadRoster();
const links = collect(groups);
const products = groups.reduce((n, g) => n + g.products.length, 0);

console.log(
  `roster: ${groups.length} groups, ${products} products, ${links.length} links` +
    (args.offline ? "" : `\ntarget: ${args.base}`)
);

let failed = 0;

const structure = [...checkStructure(groups), ...checkNavbarDrift()];
if (structure.length > 0) {
  failed += structure.length;
  console.log(`\nstructure: ${structure.length} problem(s)`);
  for (const line of structure) {
    console.log(`  ${line}`);
  }
} else {
  console.log("\nstructure: ok");
}

if (!args.offline) {
  const { total, broken, redirected, known } = await checkReachable(
    links,
    args.base
  );
  failed += broken.length + redirected.length;

  console.log(`\nreachability: ${total} unique destinations`);
  if (broken.length > 0) {
    console.log(`  broken: ${broken.length}`);
    for (const l of broken) {
      console.log(`    ${l.status}  ${l.to}  (${l.where})`);
    }
  }
  if (redirected.length > 0) {
    console.log(
      `  redirected: ${redirected.length}, point the roster at the final url`
    );
    for (const l of redirected) {
      console.log(`    ${l.status}  ${l.to} -> ${l.to2}`);
    }
  }
  for (const l of known) {
    console.log(`  known upstream failure: ${l.to}\n    ${l.reason}`);
  }
  if (broken.length === 0 && redirected.length === 0) {
    console.log("  all resolve, no redirects");
  }
}

console.log(failed === 0 ? "\nPASS" : `\nFAIL: ${failed} problem(s)`);
process.exit(failed === 0 ? 0 : 1);
