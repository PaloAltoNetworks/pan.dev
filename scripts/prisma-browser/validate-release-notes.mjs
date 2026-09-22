import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

// Guardrail: keep release notes in sync with the published Prisma Browser spec.
//
// Every release note is an MDX file whose front matter describes API changes. It
// is easy to write about (or link to) an endpoint that is not actually in the
// published spec yet, which produces dead links and promises the API does not
// keep. This script fails the build when a note references something that is not
// in the spec, so the spec must be synced first.
//
// Two checks per change entry:
//   1. `to` links into /prisma-browser/api/* must resolve to a generated API
//      reference page (products/prisma-browser/api/<id>.api.mdx). A page only
//      exists when the operation is in the synced spec.
//   2. Every /seb-api/... path mentioned in `text` or `example` must exist as a
//      real path in the synced spec (static/spec/prisma-browser-management.yaml).
//
// Disable for local testing with SKIP_RELEASE_NOTES_VALIDATION=1.

const skip = process.env.SKIP_RELEASE_NOTES_VALIDATION;
if (skip && skip !== "0" && skip !== "false") {
  console.warn(
    "[release-notes] validation skipped (SKIP_RELEASE_NOTES_VALIDATION set)"
  );
  process.exit(0);
}

const notesDir = path.join(
  repoRoot,
  "src/components/PBPortal/release-notes"
);
const apiDocsDir = path.join(repoRoot, "products/prisma-browser/api");
const syncedSpec = path.join(
  repoRoot,
  "static/spec/prisma-browser-management.yaml"
);
const sourceSpec = path.join(
  repoRoot,
  "openapi-specs/prisma-browser/PrismaAccess-Browser-Management-latest.yaml"
);

const API_LINK_PREFIX = "/prisma-browser/api/";
const VALID_TYPES = [
  "breaking",
  "new",
  "changed",
  "deprecated",
  "removed",
  "fixed",
];
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
// Any /seb-api/... reference, stopping at whitespace, quotes, backslashes, or
// closing markup so inline <code>...</code> and shell examples both work.
const SPEC_PATH_RE = /\/seb-api\/[^\s"'`\\<>)]+/g;

function fail(errors) {
  console.error(
    `\n[release-notes] validation FAILED with ${errors.length} problem(s):\n`
  );
  for (const e of errors) console.error(`  - ${e}`);
  console.error(
    "\nSync the Prisma Browser spec so it contains these endpoints before " +
      "publishing the note, or fix the reference. To bypass locally, run with " +
      "SKIP_RELEASE_NOTES_VALIDATION=1.\n"
  );
  process.exit(1);
}

// Build the set of valid API reference route ids from the generated docs.
function generatedApiIds() {
  if (!fs.existsSync(apiDocsDir)) return null;
  const ids = new Set();
  for (const f of fs.readdirSync(apiDocsDir)) {
    if (f.endsWith(".api.mdx")) ids.add(f.slice(0, -".api.mdx".length));
  }
  return ids.size ? ids : null;
}

// Build path matchers from the spec. `{param}` segments match any single path
// segment, so both templated ({providerId}) and concrete references validate.
function specPathMatchers() {
  const specFile = fs.existsSync(syncedSpec) ? syncedSpec : sourceSpec;
  if (!fs.existsSync(specFile)) {
    fail([
      `Prisma Browser spec not found (looked for ${path.relative(
        repoRoot,
        syncedSpec
      )} and ${path.relative(repoRoot, sourceSpec)}). Run \`yarn gen-pb\` first.`,
    ]);
  }
  const spec = yaml.load(fs.readFileSync(specFile, "utf8"));
  const paths = Object.keys(spec?.paths ?? {});
  return {
    specFile,
    matchers: paths.map((p) => {
      const re = p
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .replace(/\\\{[^}]+\\\}/g, "[^/]+");
      return new RegExp(`^${re}$`);
    }),
    knownPaths: paths,
  };
}

function parseFrontMatter(raw, rel) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) {
    throw new Error(`${rel}: missing front matter (--- ... --- block)`);
  }
  return yaml.load(m[1]);
}

function normalizeSpecRef(ref) {
  // Drop query strings and trailing slashes/punctuation.
  return ref.replace(/[?#].*$/, "").replace(/\/+$/, "");
}

const errors = [];
const apiIds = generatedApiIds();
const { specFile, matchers } = specPathMatchers();

if (!apiIds) {
  console.warn(
    "[release-notes] no generated API docs found under " +
      `${path.relative(repoRoot, apiDocsDir)}; skipping \`to\` link checks. ` +
      "Run `yarn gen-pb && yarn gen-all` for full validation."
  );
}

const files = fs.existsSync(notesDir)
  ? fs
      .readdirSync(notesDir)
      .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
  : [];

if (!files.length) {
  console.log("[release-notes] no release notes to validate.");
  process.exit(0);
}

for (const file of files) {
  const rel = path.join("src/components/PBPortal/release-notes", file);
  let fm;
  try {
    fm = parseFrontMatter(fs.readFileSync(path.join(notesDir, file), "utf8"), rel);
  } catch (e) {
    errors.push(e.message);
    continue;
  }

  for (const field of ["title", "date", "slug", "summary"]) {
    if (!fm?.[field]) errors.push(`${rel}: missing required front matter \`${field}\``);
  }
  // js-yaml parses an unquoted `2026-07-16` into a Date (valid); only a quoted
  // string needs the YYYY-MM-DD shape check.
  if (fm?.date && !(fm.date instanceof Date) && !DATE_RE.test(String(fm.date))) {
    errors.push(`${rel}: \`date\` must be YYYY-MM-DD (got "${fm.date}")`);
  }
  if (!Array.isArray(fm?.changes) || fm.changes.length === 0) {
    errors.push(`${rel}: \`changes\` must be a non-empty list`);
    continue;
  }

  fm.changes.forEach((change, i) => {
    const at = `${rel} change[${i}]`;
    if (!change || typeof change !== "object") {
      errors.push(`${at}: must be an object`);
      return;
    }
    if (!VALID_TYPES.includes(change.type)) {
      errors.push(
        `${at}: \`type\` must be one of ${VALID_TYPES.join(", ")} (got "${change.type}")`
      );
    }
    if (!change.text) errors.push(`${at}: missing \`text\``);

    // Check 1: `to` API links resolve to a generated reference page.
    if (typeof change.to === "string" && change.to.startsWith(API_LINK_PREFIX)) {
      if (apiIds) {
        const id = change.to
          .slice(API_LINK_PREFIX.length)
          .replace(/[?#].*$/, "")
          .replace(/\/+$/, "");
        if (!apiIds.has(id)) {
          errors.push(
            `${at}: \`to\` points to "${change.to}" but no API reference page ` +
              `"${id}.api.mdx" exists. The endpoint is not in the published spec.`
          );
        }
      }
    }

    // Check 2: every /seb-api/... path in text + example exists in the spec.
    const haystack = [change.text, change.example].filter(Boolean).join("\n");
    const refs = new Set(
      (haystack.match(SPEC_PATH_RE) || []).map(normalizeSpecRef)
    );
    for (const ref of refs) {
      const ok = matchers.some((re) => re.test(ref));
      if (!ok) {
        errors.push(
          `${at}: references "${ref}" which is not a path in the spec ` +
            `(${path.relative(repoRoot, specFile)}). Sync the spec first.`
        );
      }
    }
  });
}

if (errors.length) fail(errors);

console.log(
  `[release-notes] OK: ${files.length} note(s) validated against ` +
    `${path.relative(repoRoot, specFile)}.`
);
