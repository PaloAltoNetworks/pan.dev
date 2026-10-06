import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const yaml = require("js-yaml");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

// The docusaurus-theme-openapi-docs schema renderer merges a schema's `allOf`
// members with `allof-merge` before listing properties. When two `allOf`
// branches BOTH declare `additionalProperties: false` (the pattern used by the
// policy rule request bodies: BasePostRuleRequest + an inline object), each
// branch's `additionalProperties: false` forbids the other branch's properties,
// so the merge collapses to an object with NO properties and the reference page
// renders only the body description. Stripping `additionalProperties: false`
// from `allOf` members (never from standalone objects) lets the merge compose
// the full property set. This only affects the generated docs copy, not the
// authoritative source spec.
function refName(ref) {
  return typeof ref === "string" ? ref.split("/").pop() : undefined;
}

const METHODS = new Set([
  "get",
  "put",
  "post",
  "delete",
  "patch",
  "head",
  "options",
  "trace",
]);

// Preview features carry `x-prisma-browser-preview: { featureName: <slug> }`,
// set in the upstream spec on a path or on a single operation. The API rejects
// a call to such an endpoint without the opt-in header. The marker is published
// as is: it names the request header a caller has to send, and `featureName` is
// the value to send.
// Everything downstream of this script (the reference sidebar, the endpoint
// banner, the LLM bundles, and the Preview features guide) reads it.
const PREVIEW_MARKER = "x-prisma-browser-preview";

function previewFeatureName(node) {
  const name = node?.[PREVIEW_MARKER]?.featureName;
  return typeof name === "string" && name.length > 0 ? name : undefined;
}

// The reference code samples and the "Send API request" panel are built from the
// operation's declared parameters, and they ignore `x-` extensions. Without a
// declared header, every sample for a preview endpoint omits the opt-in header
// and returns 400 when copied. Declare it as a required header parameter,
// prefilled with the feature name, so samples, the request panel, and clients
// generated from the downloaded spec all send it.
function addPreviewHeaderParameter(operation, featureName) {
  const parameters = Array.isArray(operation.parameters) ? operation.parameters : [];
  const declared = parameters.some(
    (p) => p?.in === "header" && p?.name?.toLowerCase() === PREVIEW_MARKER
  );
  if (declared) return;
  operation.parameters = [
    ...parameters,
    {
      name: PREVIEW_MARKER,
      in: "header",
      required: true,
      description: `Opts in to the \`${featureName}\` preview feature. Send \`${featureName}\`, a comma-separated list that includes it, or \`true\` for every preview feature. Without it the request returns \`400\`.`,
      schema: { type: "string", default: featureName, example: featureName },
    },
  ];
}

function stripAdditionalPropsInAllOf(node, allOfRefTargets) {
  if (Array.isArray(node)) {
    node.forEach((n) => stripAdditionalPropsInAllOf(n, allOfRefTargets));
    return;
  }
  if (node && typeof node === "object") {
    if (Array.isArray(node.allOf)) {
      for (const member of node.allOf) {
        if (member && typeof member === "object") {
          // Inline branch: strip directly.
          if (member.additionalProperties === false) {
            delete member.additionalProperties;
          }
          // $ref branch: record the target component so we can strip it after
          // it gets inlined during gen-api-docs dereferencing.
          const name = refName(member.$ref);
          if (name) allOfRefTargets.add(name);
        }
      }
    }
    for (const key of Object.keys(node)) {
      stripAdditionalPropsInAllOf(node[key], allOfRefTargets);
    }
  }
}

// Single source of truth for the Prisma Browser Management API spec. The
// docusaurus openapi instance ("browsermgmt") generates the API reference from
// this file, and the portal's "Download spec" link serves the copy under
// static/. We generate the static copy from the source so the two never drift,
// and so updating the spec only ever touches Prisma Browser outputs.
const sourceSpec = path.join(
  repoRoot,
  "openapi-specs/prisma-browser/PrismaAccess-Browser-Management-latest.yaml"
);
const staticSpec = path.join(
  repoRoot,
  "static/spec/prisma-browser-management.yaml"
);
// Flat list of the preview endpoints found in the spec, consumed by
// build-guide-index.mjs so the LLM bundles can name them without the model
// having to download and parse the YAML. Rewritten on every run, including as
// an empty list, so a feature reaching GA clears it.
const previewManifest = path.join(
  repoRoot,
  "static/prisma-browser/preview-manifest.json"
);

if (!fs.existsSync(sourceSpec)) {
  throw new Error(`Prisma Browser spec not found at ${sourceSpec}`);
}

fs.mkdirSync(path.dirname(staticSpec), { recursive: true });

const spec = yaml.load(fs.readFileSync(sourceSpec, "utf8"));
const allOfRefTargets = new Set();
stripAdditionalPropsInAllOf(spec, allOfRefTargets);
// Components used as allOf branches (e.g. BasePostRuleRequest) are inlined by
// gen-api-docs; their own `additionalProperties: false` would re-break the merge
// once inlined, so strip it from those component roots too.
const componentSchemas = spec.components?.schemas ?? {};
for (const name of allOfRefTargets) {
  const component = componentSchemas[name];
  if (component && component.additionalProperties === false) {
    delete component.additionalProperties;
  }
}

// Index the preview markers for the reference UI and the LLM bundles.
//
// A marker sits on a path or on a single operation. The openapi plugin's loader
// destructures the path item and iterates only HTTP methods, so a path-level
// extension is dropped before anything downstream can see it and the marked
// endpoints would render as generally available. Push the path-level marker
// down onto each operation under it as well, letting an operation that declares
// its own marker keep it, so both authoring shapes reach the reference UI.
const previewEndpoints = [];
let propagatedPreviews = 0;

for (const [route, pathItem] of Object.entries(spec.paths ?? {})) {
  if (!pathItem || typeof pathItem !== "object") continue;
  const pathFeature = previewFeatureName(pathItem);

  for (const [method, operation] of Object.entries(pathItem)) {
    if (!METHODS.has(method) || !operation || typeof operation !== "object") {
      continue;
    }
    const ownFeature = previewFeatureName(operation);
    const featureName = ownFeature ?? pathFeature;
    if (!featureName) continue;
    if (!ownFeature) propagatedPreviews += 1;

    operation[PREVIEW_MARKER] = { featureName };
    addPreviewHeaderParameter(operation, featureName);
    previewEndpoints.push({
      method: method.toUpperCase(),
      route,
      operationId: operation.operationId,
      summary: operation.summary,
      featureName,
    });
  }

  // Re-add a path-level marker ahead of the operations, so the published spec
  // reads the way the guide documents it. A plain assignment would append the
  // new key after every method instead.
  if (pathFeature) {
    spec.paths[route] = { [PREVIEW_MARKER]: { featureName: pathFeature }, ...pathItem };
  }
}

if (propagatedPreviews > 0) {
  console.warn(
    `sync-spec: propagated a path-level preview marker onto ${propagatedPreviews} operation(s)`
  );
}

// The "browsermgmt" instance groups paths by `tagGroup`, and in that mode the
// sidebar generator walks `x-tagGroups` and nothing else: a tag that no group
// claims contributes no sidebar entry, and a spec with no groups at all yields
// an empty sidebar. That failure is silent, because an empty sidebar is valid
// to Docusaurus, so the build still succeeds and the reference ships with no
// navigation while every endpoint page is still generated and routable. Sweep
// unclaimed tags into a trailing group so an upstream spec that predates
// `x-tagGroups`, or one that adds a tag without placing it, degrades to a
// visible section instead of a missing one.
const tagsWithOperations = [];
for (const pathItem of Object.values(spec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!METHODS.has(method) || !operation || typeof operation !== "object") {
      continue;
    }
    for (const tag of operation.tags ?? []) {
      if (typeof tag === "string" && !tagsWithOperations.includes(tag)) {
        tagsWithOperations.push(tag);
      }
    }
  }
}

// A group resolves its members against the root `tags` list, not against the tags
// operations carry, so an undeclared tag is dropped even when a group names it.
// Declare the missing ones, appending so authored order and descriptions survive.
const declaredTags = Array.isArray(spec.tags) ? spec.tags : [];
const declaredNames = new Set(
  declaredTags.map((tag) => tag?.name).filter((name) => typeof name === "string")
);
const undeclared = tagsWithOperations.filter((tag) => !declaredNames.has(tag));

if (undeclared.length > 0) {
  spec.tags = [...declaredTags, ...undeclared.map((name) => ({ name }))];
  console.warn(
    `sync-spec: ${undeclared.length} tag(s) used by operations but not declared, synthesized: ${undeclared.join(", ")}`
  );
}

const tagGroups = Array.isArray(spec["x-tagGroups"]) ? spec["x-tagGroups"] : [];
const grouped = new Set(
  tagGroups.flatMap((group) =>
    Array.isArray(group?.tags) ? group.tags : []
  )
);
const ungrouped = tagsWithOperations.filter((tag) => !grouped.has(tag));

if (ungrouped.length > 0) {
  // With no groups at all every tag is unclaimed, so the sweep is the whole
  // navigation rather than a remainder, and the label should not imply leftovers.
  tagGroups.push({
    name: tagGroups.length === 0 ? "API Reference" : "Other",
    tags: ungrouped,
  });
  spec["x-tagGroups"] = tagGroups;
  console.warn(
    `sync-spec: ${ungrouped.length} tag(s) not in x-tagGroups, swept into "${tagGroups[tagGroups.length - 1].name}": ${ungrouped.join(", ")}`
  );
}

fs.writeFileSync(staticSpec, yaml.dump(spec, { lineWidth: -1, noRefs: true }));

previewEndpoints.sort(
  (a, b) => a.route.localeCompare(b.route) || a.method.localeCompare(b.method)
);
fs.mkdirSync(path.dirname(previewManifest), { recursive: true });
fs.writeFileSync(
  previewManifest,
  `${JSON.stringify({ endpoints: previewEndpoints }, null, 2)}\n`
);

console.log(
  `Synced ${path.relative(repoRoot, sourceSpec)} -> ${path.relative(repoRoot, staticSpec)} (allOf additionalProperties normalized, ${previewEndpoints.length} preview endpoint(s))`
);
