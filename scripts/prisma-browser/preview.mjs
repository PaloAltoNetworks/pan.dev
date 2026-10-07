// Shared rules for Prisma Browser preview endpoints, used by sync-spec.mjs,
// check-preview-headers.mjs, build-guide-index.mjs and the reference page
// generators, so every consumer reads the marker the same way.
//
// An endpoint in preview carries `x-prisma-browser-preview: { featureName }` on
// its path item or on a single operation. The marker also names the request
// header a caller has to send, with `featureName` as the value.
import fs from "node:fs";
import path from "node:path";

export const PREVIEW_MARKER = "x-prisma-browser-preview";
export const PREVIEW_GUIDE_ROUTE = "/prisma-browser/guide/preview-features";

export const HTTP_METHODS = new Set([
  "get",
  "put",
  "post",
  "delete",
  "patch",
  "head",
  "options",
  "trace",
]);

// Reads the marker on a path item or an operation.
// Returns { featureName } for a valid marker, { invalid } when the marker is
// present but `featureName` is not a non-empty string (for example an unquoted
// YAML number), and undefined when there is no marker.
export function readPreviewMarker(node) {
  if (!node || typeof node !== "object" || !(PREVIEW_MARKER in node)) {
    return undefined;
  }
  const featureName = node[PREVIEW_MARKER]?.featureName;
  if (typeof featureName === "string" && featureName.trim().length > 0) {
    return { featureName };
  }
  return { invalid: node[PREVIEW_MARKER] };
}

// Follows a local `#/components/parameters/<name>` reference.
export function resolveParameter(spec, parameter) {
  const ref = parameter?.$ref;
  if (typeof ref !== "string") return parameter;
  const match = /^#\/components\/parameters\/(.+)$/.exec(ref);
  return match ? spec?.components?.parameters?.[match[1]] : undefined;
}

// True for an inline or referenced declaration of the preview header.
export function isPreviewHeader(spec, parameter) {
  const resolved = resolveParameter(spec, parameter);
  return (
    resolved?.in === "header" &&
    typeof resolved.name === "string" &&
    resolved.name.toLowerCase() === PREVIEW_MARKER
  );
}

// The header declaration every preview operation gets, so code samples, the
// request panel and generated clients all send it.
export function previewHeaderParameter(featureName) {
  return {
    name: PREVIEW_MARKER,
    in: "header",
    required: true,
    description:
      `Opts in to the \`${featureName}\` preview feature. Send ` +
      `\`${featureName}\`, a comma-separated list that includes it, or ` +
      `\`true\` for every preview feature. Without it the request returns ` +
      `\`400\`.`,
    schema: { type: "string", default: featureName, example: featureName },
  };
}

// Every operation in the spec with the feature it is in preview for, if any.
// An operation's own valid marker wins over its path's.
export function* previewOperations(spec) {
  for (const [route, pathItem] of Object.entries(spec?.paths ?? {})) {
    if (!pathItem || typeof pathItem !== "object") continue;
    const pathMarker = readPreviewMarker(pathItem);
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!HTTP_METHODS.has(method)) continue;
      if (!operation || typeof operation !== "object") continue;
      const ownMarker = readPreviewMarker(operation);
      const featureName =
        ownMarker?.featureName ?? pathMarker?.featureName ?? undefined;
      yield {
        route,
        pathItem,
        method,
        operation,
        ownMarker,
        pathMarker,
        featureName,
      };
    }
  }
}

// The published Preview features guide, wherever authors put it in the guide
// tree. Guide routes use only the file name, so any folder works.
export function findPreviewGuide(guideRoot) {
  if (!fs.existsSync(guideRoot)) return undefined;
  const stack = [guideRoot];
  while (stack.length > 0) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.name === "preview-features.mdx") return full;
    }
  }
  return undefined;
}
