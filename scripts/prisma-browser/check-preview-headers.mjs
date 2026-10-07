import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import {
  PREVIEW_MARKER,
  isPreviewHeader,
  previewOperations,
  resolveParameter,
} from "./preview.mjs";

const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

// Guards the published spec that sync-spec.mjs writes, which drives the
// reference code samples and the "Send API request" panel. sync-spec normalizes
// the header, so a failure here means sync-spec itself is broken, not that the
// upstream spec drifted. Each operation must declare the preview header exactly
// once if it is in preview (required, defaulting to the feature name) and not
// at all otherwise. A missing header means copied samples return 400; a
// leftover one teaches callers a header they no longer need.
const specPath = path.resolve(
  repoRoot,
  process.argv[2] ?? "static/spec/prisma-browser-management.yaml"
);
const spec = yaml.load(fs.readFileSync(specPath, "utf8"));

const problems = [];
let gated = 0;
for (const [route, pathItem] of Object.entries(spec.paths ?? {})) {
  if ((pathItem?.parameters ?? []).some((p) => isPreviewHeader(spec, p))) {
    problems.push(`${route}: declares ${PREVIEW_MARKER} at path level`);
  }
}
for (const op of previewOperations(spec)) {
  const { route, method, operation, featureName } = op;
  const where = `${method.toUpperCase()} ${route}`;
  const headers = (operation.parameters ?? [])
    .filter((p) => isPreviewHeader(spec, p))
    .map((p) => resolveParameter(spec, p));
  if (featureName) gated += 1;

  if (featureName && headers.length === 0) {
    problems.push(`${where}: in preview ("${featureName}") but no header`);
  } else if (headers.length > 1) {
    problems.push(`${where}: declares the header ${headers.length} times`);
  } else if (featureName && headers[0].schema?.default !== featureName) {
    const actual = headers[0].schema?.default;
    problems.push(
      `${where}: header default is "${actual}", expected "${featureName}"`
    );
  } else if (featureName && headers[0].required !== true) {
    problems.push(`${where}: header must be required`);
  } else if (!featureName && headers.length > 0) {
    problems.push(`${where}: not in preview, but declares the header`);
  }
}

const shown = path.relative(repoRoot, specPath);
if (problems.length > 0) {
  console.error(
    `check-preview-headers: ${problems.length} problem(s) in ${shown}`
  );
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(
  `check-preview-headers: ${gated} preview operation(s), each with its header`
);
