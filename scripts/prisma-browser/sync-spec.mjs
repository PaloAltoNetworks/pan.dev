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
// The "browsermgmt" instance groups paths by `tagGroup`, and in that mode the
// sidebar generator walks `x-tagGroups` and nothing else: a tag that no group
// claims contributes no sidebar entry, and a spec with no groups at all yields
// an empty sidebar. That failure is silent, because an empty sidebar is valid
// to Docusaurus, so the build still succeeds and the reference ships with no
// navigation while every endpoint page is still generated and routable. Sweep
// unclaimed tags into a trailing group so an upstream spec that predates
// `x-tagGroups`, or one that adds a tag without placing it, degrades to a
// visible section instead of a missing one.
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

// The page template reads `x-prisma-browser-preview` from the operation, but the
// plugin's loader drops path item extensions, so a marker on a path item never
// reaches its operations. Copy a valid path marker onto every operation under it
// that has no valid marker of its own (an operation's own marker wins). A marker
// with an invalid featureName is removed with a warning, never fatal, since this
// script runs in every site build.
//
// The page template writes featureName into MDX, where `{` or `}` would break
// the page and with it the whole build, so only a plain token is valid.
const PREVIEW = "x-prisma-browser-preview";
const FEATURE_NAME = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
const isValidPreview = (marker) =>
  typeof marker?.featureName === "string" &&
  FEATURE_NAME.test(marker.featureName);

let propagated = 0;
for (const [route, pathItem] of Object.entries(spec.paths ?? {})) {
  if (!pathItem || typeof pathItem !== "object") continue;
  let pathMarker;
  if (PREVIEW in pathItem) {
    if (isValidPreview(pathItem[PREVIEW])) {
      pathMarker = pathItem[PREVIEW];
    } else {
      console.warn(`sync-spec: ignoring invalid ${PREVIEW} on path ${route}`);
      delete pathItem[PREVIEW];
    }
  }
  for (const [method, operation] of Object.entries(pathItem)) {
    if (!METHODS.has(method) || !operation || typeof operation !== "object") {
      continue;
    }
    if (isValidPreview(operation[PREVIEW])) continue;
    if (PREVIEW in operation) {
      // Drop it so the template does not render a banner for it.
      console.warn(
        `sync-spec: ignoring invalid ${PREVIEW} on ${method.toUpperCase()} ${route}`
      );
      delete operation[PREVIEW];
    }
    if (pathMarker) {
      operation[PREVIEW] = { ...pathMarker };
      propagated++;
    }
  }
}

if (propagated > 0) {
  console.log(
    `sync-spec: copied path-level ${PREVIEW} onto ${propagated} operation(s)`
  );
}

fs.writeFileSync(staticSpec, yaml.dump(spec, { lineWidth: -1, noRefs: true }));

console.log(
  `Synced ${path.relative(repoRoot, sourceSpec)} -> ${path.relative(repoRoot, staticSpec)} (allOf additionalProperties normalized)`
);
