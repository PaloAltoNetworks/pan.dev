import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
// Guide MDX is authored in src/components/PBPortal/guides so Docusaurus does
// not auto-route it through the global MDXPage theme. We generate thin route
// wrappers instead, so the Prisma Browser guide shell is scoped to PB routes
// and never intercepts other pages.
//
// The authored location sits outside every content plugin's directory, so the
// MDX loader that compiles it runs without the plugins those directories
// configure, and admonitions (:::note, :::tip, :::caution) never transform:
// they render as literal ":::" text. To fix that we stage a copy under
// src/pages, where plugin-content-pages compiles MDX with admonitions: true.
// The staging directory is underscore-prefixed, so GlobExcludeDefault's
// '**/_*/**' keeps it out of routing and marks it an MDX partial. Wrappers
// import the staged copy rather than the authored file.
const guideRoot = path.join(repoRoot, "src/components/PBPortal/guides");
const pagesRoot = path.join(repoRoot, "src/pages/prisma-browser/guide");
const mdxStageRoot = path.join(pagesRoot, "_mdx");
const guideImportBase = "@site/src/pages/prisma-browser/guide/_mdx";
const outFile = path.join(
  repoRoot,
  "src/components/PBPortal/generated/guideIndex.js"
);
const basePath = "/prisma-browser/guide/";

// Where the generated LLM bundles are written. They are served as static
// assets at /prisma-browser/llms.txt and /prisma-browser/llms-full.txt,
// mirroring how static/spec/*.yaml is served at /spec/*.yaml.
const staticOut = path.join(repoRoot, "static/prisma-browser");
// Absolute base for rewriting site-relative links so an LLM sees real URLs.
// The env vars carry a pages URL on GitLab CI and a per-PR Firebase channel on
// preview builds, so a preview bundle links itself rather than production. The
// fallback is the public beta host, which is what live builds and local runs
// emit; on GA, point the env var at the pan.dev production domain.
const SITE_URL = (
  process.env.GL_PAGES_URL ||
  process.env.CI_PAGES_URL ||
  "https://prisma-browser-api-beta.pan.dev"
).replace(/\/+$/, "");
// Served copy of the OpenAPI spec (see sync-spec.mjs). The LLM bundles link it
// so a model fed the guides can still resolve fields the guides do not list.
const SPEC_PATH = "/spec/prisma-browser-management.yaml";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".mdx") ? [full] : [];
  });
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  return trimmed.replace(/^['"]|['"]$/g, "");
}

function parseFrontMatter(raw, file) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error(`${file} is missing frontmatter`);

  const root = {};
  let currentObject = null;
  for (const line of match[1].split("\n")) {
    if (!line.trim()) continue;
    const nested = line.match(/^  ([A-Za-z0-9_-]+):\s*(.*)$/);
    if (nested && currentObject) {
      currentObject[nested[1]] = parseScalar(nested[2]);
      continue;
    }
    const top = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!top) continue;
    if (!top[2]) {
      root[top[1]] = {};
      currentObject = root[top[1]];
    } else {
      root[top[1]] = parseScalar(top[2]);
      currentObject = null;
    }
  }
  return root;
}

// Docusaurus rejects front matter in MDX partials, and the staged copies are
// partials by virtue of the _mdx prefix. The generator has already parsed the
// front matter into `pages`, and the wrapper inlines the fields it needs, so
// the staged body can drop it.
function stripFrontMatter(raw) {
  return raw.replace(/^---\n[\s\S]*?\n---\n?/, "");
}

function routeFor(file) {
  return basePath + path.basename(file, ".mdx");
}

// --- LLM bundle generation --------------------------------------------------

const ADMONITION_LABELS = {
  note: "Note",
  tip: "Tip",
  info: "Info",
  warning: "Warning",
  caution: "Caution",
  danger: "Danger",
};

// Convert Docusaurus admonitions (:::note ... :::) to plain Markdown so they
// survive as readable text for an LLM. Handled line-by-line (opener -> bold
// label, closer -> removed) rather than as a paired block, so admonitions that
// wrap a fenced code block are converted correctly even after the body has been
// split out as a separate code segment. Handles `:::note Title` and
// `:::note[Title]` opener forms.
function convertAdmonitions(text) {
  return text
    .replace(
      /^:::(note|tip|info|warning|caution|danger)(?:\[([^\]]*)\]|[ \t]+([^\n]*))?[ \t]*$/gm,
      (_m, type, bracketTitle, inlineTitle) => {
        const label = (bracketTitle || inlineTitle || ADMONITION_LABELS[type]).trim();
        return `**${label}**\n`;
      }
    )
    .replace(/^:::[ \t]*$/gm, "");
}

// Rewrite site-relative Markdown links ](/path) to absolute ](SITE_URL/path).
// Protocol-relative links (//host) are left untouched. The pathname:// prefix
// is a Docusaurus directive that stops the MDX loader from rewriting a link to
// a static file into a hashed webpack asset; it is meaningless outside the
// site, so strip it here and absolutize what it wraps.
function absolutizeLinks(text) {
  return text.replace(
    /\]\((?:pathname:\/\/)?(\/(?!\/)[^)\s]*)\)/g,
    (_m, p) => `](${SITE_URL}${p})`
  );
}

// Transform one guide's raw MDX into clean Markdown. Fenced code blocks are
// left byte-for-byte intact (they contain Python `import ...` lines and example
// URLs that must not be rewritten); only prose segments are transformed.
function transformBody(raw) {
  const withoutFrontMatter = raw.replace(/^---\n[\s\S]*?\n---\n?/, "").trim();
  return withoutFrontMatter
    .split(/(```[\s\S]*?```)/g)
    .map((segment, i) =>
      i % 2 === 1 ? segment : absolutizeLinks(convertAdmonitions(segment))
    )
    .join("");
}

function writeLlmBundles(sortedPages) {
  // Stamped on every run, into all three surfaces (index, full bundle, per-page
  // files), so a model can tell how fresh the copy in front of it is. Minute
  // precision in UTC: a date alone can read as a day stale on an evening build.
  const generated = `${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC`;
  const pageMdDir = path.join(staticOut, "guide-md");

  // llms-full.txt: every page, in nav order, concatenated. The guides explain
  // the API but do not enumerate every field, so point readers at the spec for
  // the authoritative per-endpoint schema.
  const fullHeader =
    `# Prisma Browser Management API: Developer Guide (full text)\n\n` +
    `> The complete Prisma Browser Management API developer guide, concatenated into one Markdown file for use with ChatGPT, Claude, or any LLM.\n` +
    `> Source: ${SITE_URL}${basePath}guide-overview\n` +
    `> Generated: ${generated}\n` +
    `>\n` +
    `> How to use this file. It is the developer guide, not the API reference.\n` +
    `> The guides teach the request shapes and the workflows, and they name only\n` +
    `> a few controls, fields and enum values as examples. Every list of controls\n` +
    `> or fields here is illustrative, never exhaustive, and it can lag a release.\n` +
    `>\n` +
    `> The OpenAPI specification is the authoritative and current catalog of every\n` +
    `> endpoint, control, field, enum value and validation rule:\n` +
    `> ${SITE_URL}${SPEC_PATH}\n` +
    `>\n` +
    `> Before telling a user that a control, field or endpoint does not exist,\n` +
    `> check the specification. Absence from this file means only that no guide\n` +
    `> page happens to mention it.\n`;

  // Build each page's clean Markdown once, reused for the full bundle and for
  // the per-page download files served at /prisma-browser/guide-md/<slug>.md.
  fs.mkdirSync(pageMdDir, { recursive: true });
  const sections = sortedPages.map((p) => {
    const raw = fs.readFileSync(path.join(guideRoot, p.rel), "utf8");
    const section =
      `# ${p.title}\n\n_Source: ${SITE_URL}${p.to} | Generated: ${generated}_\n\n` +
      `_Guide page: the controls, fields and enum values named here are examples, ` +
      `not a complete list. The OpenAPI specification at ${SITE_URL}${SPEC_PATH} ` +
      `is the authoritative catalog._\n\n` +
      `${transformBody(raw)}`;
    const slug = path.basename(p.rel, ".mdx");
    fs.writeFileSync(path.join(pageMdDir, `${slug}.md`), `${section}\n`);
    return section;
  });

  const fullText = `${fullHeader}\n---\n\n${sections.join("\n\n---\n\n")}\n`;

  // llms.txt: an index of links + summaries, per the llmstxt.org convention.
  const indexLines = [
    "# Prisma Browser Management API",
    "",
    "> One REST API to manage and safely roll out everything you configure in the Prisma Browser console.",
    "",
    `> The guide pages below teach the workflows and name only a few controls and fields as examples. The OpenAPI specification at ${SITE_URL}${SPEC_PATH} is the authoritative, current catalog of every endpoint, control, field and enum value, so consult it before concluding that something does not exist.`,
    `> Generated: ${generated}`,
  ];
  let currentGroup = null;
  for (const p of sortedPages) {
    if (p.group !== currentGroup) {
      currentGroup = p.group;
      indexLines.push("", `## ${currentGroup}`);
    }
    indexLines.push(`- [${p.title}](${SITE_URL}${p.to}): ${p.summary}`);
  }
  indexLines.push(
    "",
    "## API reference",
    `- [OpenAPI specification](${SITE_URL}${SPEC_PATH}): Every endpoint, request and response field, enum and validation rule. The guides do not enumerate all fields, so load this for anything the guide pages leave out.`,
    `- [Endpoint reference](${SITE_URL}/prisma-browser/api/list-users): The same specification rendered page by page, one page per endpoint.`,
    "",
    "## Full text",
    `- [Full guide (single Markdown file)](${SITE_URL}/prisma-browser/llms-full.txt): Every guide page concatenated for LLM ingestion.`,
    ""
  );

  fs.mkdirSync(staticOut, { recursive: true });
  fs.writeFileSync(path.join(staticOut, "llms-full.txt"), fullText);
  fs.writeFileSync(path.join(staticOut, "llms.txt"), indexLines.join("\n"));

  return sections.length;
}

const files = walk(guideRoot);

// Lint: reject any MDX file that contains a deep (folder-based) guide link.
// All cross-links must use the flat form /prisma-browser/guide/<page-name>.
const deepLinkPattern = /\/prisma-browser\/guide\/[a-z-]+\/[a-z-]/g;
for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const bad = [...content.matchAll(deepLinkPattern)];
  if (bad.length) {
    throw new Error(
      `${path.relative(guideRoot, file)} contains deep guide links (${bad.map((m) => m[0]).join(", ")}). ` +
        `Use the flat form /prisma-browser/guide/<page-name> instead.`
    );
  }
}

const pages = files.map((file) => {
  const fm = parseFrontMatter(fs.readFileSync(file, "utf8"), file);
  const guide = fm.pb_guide;
  if (!guide) throw new Error(`${file} is missing pb_guide frontmatter`);
  for (const key of ["group", "groupOrder", "order", "summary"]) {
    if (guide[key] === undefined || guide[key] === "") {
      throw new Error(`${file} is missing pb_guide.${key}`);
    }
  }
  return {
    rel: path.relative(guideRoot, file).replace(/\\/g, "/"),
    to: routeFor(file),
    label: fm.sidebar_label || fm.title,
    title: fm.title,
    description: fm.description || "",
    summary: guide.summary,
    group: guide.group,
    groupOrder: guide.groupOrder,
    order: guide.order,
    subgroup: guide.subgroup || null,
  };
});

pages.sort((a, b) => {
  if (a.groupOrder !== b.groupOrder) return a.groupOrder - b.groupOrder;
  if (a.order !== b.order) return a.order - b.order;
  return a.label.localeCompare(b.label);
});

const groups = [];
for (const page of pages) {
  let group = groups.find((g) => g.key === page.group);
  if (!group) {
    group = {
      key: page.group,
      label: page.group === "Start here" ? undefined : page.group,
      order: page.groupOrder,
      items: [],
    };
    groups.push(group);
  }
  const link = {
    to: page.to,
    label: page.label,
    title: page.title,
    summary: page.summary,
  };
  if (page.subgroup) {
    // Nest the page under an expandable sub-group container (level 3). Pages
    // are pre-sorted by (groupOrder, order), so the container is created the
    // first time a member is seen and lands at that member's position.
    let sub = group.items.find((i) => i.subgroup === page.subgroup);
    if (!sub) {
      sub = { subgroup: page.subgroup, label: page.subgroup, items: [] };
      group.items.push(sub);
    }
    sub.items.push(link);
  } else {
    group.items.push(link);
  }
}

const file = `// This file is generated by scripts/prisma-browser/build-guide-index.mjs.
// Do not edit by hand. Update guide MDX frontmatter and rerun the generator.

export const GUIDE_NAV = ${JSON.stringify(groups, null, 2)};

export const GUIDE_FLAT = GUIDE_NAV.flatMap((g) =>
  g.items.flatMap((i) => (i.items ? i.items : [i]))
);
`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, file);

// Generate one thin route wrapper per guide page under src/pages so each guide
// renders inside the Prisma Browser portal shell without swizzling the global
// MDXPage theme. The pages/guide tree is fully owned by this generator: it is
// wiped and rebuilt on every run so removed guides never leave stale routes.
fs.rmSync(pagesRoot, { recursive: true, force: true });
for (const page of pages) {
  const wrapperFile = path.join(pagesRoot, path.basename(page.rel, ".mdx") + ".js");
  const stagedMdx = path.join(mdxStageRoot, page.rel);
  fs.mkdirSync(path.dirname(stagedMdx), { recursive: true });
  fs.writeFileSync(
    stagedMdx,
    stripFrontMatter(fs.readFileSync(path.join(guideRoot, page.rel), "utf8"))
  );
  const importPath = `${guideImportBase}/${page.rel}`;
  const wrapper = `// This file is generated by scripts/prisma-browser/build-guide-index.mjs.
// Do not edit by hand. Edit the guide MDX in src/components/PBPortal/guides.
import React from "react";
import PBPortal from "@site/src/components/PBPortal";
import MDXContent from "@theme/MDXContent";
import GuideContent from "${importPath}";

const title = ${JSON.stringify(page.title)};
const description = ${JSON.stringify(page.description)};

export default function GuidePage() {
  return (
    <PBPortal
      surface="guide"
      title={title}
      description={description}
      heading={title}
    >
      <MDXContent>
        <GuideContent />
      </MDXContent>
    </PBPortal>
  );
}
`;
  fs.mkdirSync(path.dirname(wrapperFile), { recursive: true });
  fs.writeFileSync(wrapperFile, wrapper);
}

const llmPageCount = writeLlmBundles(pages);

console.log(
  `Generated ${path.relative(repoRoot, outFile)} and ${pages.length} guide route wrappers under ${path.relative(repoRoot, pagesRoot)}`
);
console.log(
  `Generated LLM bundles from ${llmPageCount} guides: llms.txt, llms-full.txt, and ${llmPageCount} per-page files under ${path.relative(repoRoot, path.join(staticOut, "guide-md"))}`
);
