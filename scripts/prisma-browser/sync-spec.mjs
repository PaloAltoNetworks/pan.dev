import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

import {
  HTTP_METHODS as METHODS,
  PREVIEW_MARKER,
  isPreviewHeader,
  previewHeaderParameter,
  previewOperations,
} from "./preview.mjs";

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

// Index the preview markers for the reference UI and the LLM bundles, and
// normalize the preview header so the published spec is always consistent.
//
// A marker sits on a path or on a single operation. The openapi plugin's loader
// destructures the path item and iterates only HTTP methods, so a path-level
// extension is dropped before anything downstream can see it and the marked
// endpoints would render as generally available. Push the path-level marker
// down onto each operation under it as well, letting an operation that declares
// its own marker keep it, so both authoring shapes reach the reference UI.
//
// The reference code samples and the "Send API request" panel are built from
// declared parameters and ignore `x-` extensions, so every preview operation
// gets exactly one inline, required header parameter defaulting to its feature
// name. Any declaration the upstream spec already has (inline or `$ref`, on the
// operation or its path) is replaced by that one, and a declaration left on an
// operation that is not in preview is removed. Upstream drift is fixed here
// with a warning rather than failing the build, because gen-pb runs in every
// pan.dev build, not only Prisma Browser ones.
const previewEndpoints = [];
const notes = { propagated: 0, replaced: 0, removed: 0, invalid: [] };

function withoutPreviewHeader(parameters) {
  if (!Array.isArray(parameters)) return { kept: parameters, dropped: 0 };
  const kept = parameters.filter((p) => !isPreviewHeader(spec, p));
  return { kept, dropped: parameters.length - kept.length };
}

for (const op of previewOperations(spec)) {
  const { route, method, operation, ownMarker, pathMarker, featureName } = op;
  const where = `${method.toUpperCase()} ${route}`;
  if (ownMarker?.invalid !== undefined) {
    notes.invalid.push(`${where}: ${JSON.stringify(ownMarker.invalid)}`);
    if (!featureName) delete operation[PREVIEW_MARKER];
  }

  const { kept, dropped } = withoutPreviewHeader(operation.parameters);
  if (dropped > 0) operation.parameters = kept;

  if (!featureName) {
    notes.removed += dropped;
    continue;
  }
  if (!ownMarker?.featureName) notes.propagated += 1;
  notes.replaced += dropped;

  // Keep any other fields upstream puts on the marker.
  operation[PREVIEW_MARKER] = {
    ...(pathMarker?.featureName ? op.pathItem[PREVIEW_MARKER] : {}),
    ...(ownMarker?.featureName ? operation[PREVIEW_MARKER] : {}),
    featureName,
  };
  operation.parameters = [
    ...(operation.parameters ?? []),
    previewHeaderParameter(featureName),
  ];
  previewEndpoints.push({
    method: method.toUpperCase(),
    route,
    operationId: operation.operationId,
    summary: operation.summary,
    featureName,
  });
}

for (const [route, pathItem] of Object.entries(spec.paths ?? {})) {
  if (!pathItem || typeof pathItem !== "object") continue;
  // A path-level header declaration would apply to every operation under the
  // path, including ones not in preview. Each preview operation now declares
  // its own, so drop it here.
  const { kept, dropped } = withoutPreviewHeader(pathItem.parameters);
  if (dropped > 0) {
    if (kept.length > 0) pathItem.parameters = kept;
    else delete pathItem.parameters;
    notes.replaced += dropped;
  }
  const marker = pathItem[PREVIEW_MARKER];
  if (marker === undefined) continue;
  if (typeof marker?.featureName !== "string" || !marker.featureName.trim()) {
    notes.invalid.push(`${route}: ${JSON.stringify(marker)}`);
    delete pathItem[PREVIEW_MARKER];
    continue;
  }
  // Keep the path-level marker ahead of the operations, so the published spec
  // reads the way the guide documents it.
  spec.paths[route] = { [PREVIEW_MARKER]: marker, ...pathItem };
}

if (notes.propagated > 0) {
  console.warn(
    `sync-spec: propagated a path-level preview marker onto ${notes.propagated} operation(s)`
  );
}
if (notes.replaced > 0 || notes.removed > 0) {
  console.warn(
    `sync-spec: normalized the ${PREVIEW_MARKER} header (${notes.replaced} upstream declaration(s) replaced, ${notes.removed} removed from operations not in preview)`
  );
}
for (const entry of notes.invalid) {
  console.warn(
    `sync-spec: ignored a ${PREVIEW_MARKER} marker whose featureName is not a non-empty string: ${entry}`
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
