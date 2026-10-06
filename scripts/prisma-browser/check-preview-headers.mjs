import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

// Guards the published spec that sync-spec.mjs writes, which drives the
// reference code samples and the "Send API request" panel. An operation must
// declare the x-prisma-browser-preview header parameter if and only if it
// carries the preview marker (on itself or its path), with the feature name as
// the default. A missing parameter means copied samples return 400; a leftover
// one, after a feature reaches GA, teaches callers a header they no longer need.
const PREVIEW = "x-prisma-browser-preview";
const METHODS = new Set(["get", "put", "post", "delete", "patch", "head", "options", "trace"]);

const specPath = path.resolve(
  repoRoot,
  process.argv[2] ?? "static/spec/prisma-browser-management.yaml"
);
const spec = yaml.load(fs.readFileSync(specPath, "utf8"));

const problems = [];
let gated = 0;
for (const [route, pathItem] of Object.entries(spec.paths ?? {})) {
  const pathFeature = pathItem?.[PREVIEW]?.featureName;
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!METHODS.has(method) || !operation || typeof operation !== "object") continue;
    const where = `${method.toUpperCase()} ${route}`;
    const feature = operation[PREVIEW]?.featureName ?? pathFeature;
    const header = (operation.parameters ?? []).find(
      (p) => p?.in === "header" && p?.name?.toLowerCase() === PREVIEW
    );
    if (feature) gated += 1;
    if (feature && !header) {
      problems.push(`${where}: preview feature "${feature}" but no ${PREVIEW} header parameter`);
    } else if (feature && header.schema?.default !== feature) {
      problems.push(`${where}: header default is "${header.schema?.default}", expected "${feature}"`);
    } else if (feature && !header.required) {
      problems.push(`${where}: ${PREVIEW} header parameter must be required`);
    } else if (!feature && header) {
      problems.push(`${where}: not in preview, but still declares the ${PREVIEW} header parameter`);
    }
  }
}

if (problems.length > 0) {
  console.error(`check-preview-headers: ${problems.length} problem(s) in ${path.relative(repoRoot, specPath)}`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(`check-preview-headers: ${gated} preview operation(s), each with its ${PREVIEW} header`);
