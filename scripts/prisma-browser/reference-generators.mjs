// Generators for the Prisma Browser API reference ("browsermgmt" instance in
// docusaurus.config.ts). Both run at `gen-api-docs` time, so nothing here ships
// to the browser.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createApiPageMD } from "docusaurus-plugin-openapi-docs/lib/markdown/index.js";
import {
  PREVIEW_GUIDE_ROUTE,
  PREVIEW_MARKER,
  findPreviewGuide,
  readPreviewMarker,
} from "./preview.mjs";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../.."
);
const guideRoot = path.join(repoRoot, "src/components/PBPortal/guides");

// sync-spec.mjs pushes a path-level marker down onto each operation, because
// the plugin's loader drops path-level extensions, so the operation is enough.
function previewFeatureName(api) {
  return readPreviewMarker(api)?.featureName;
}

// MDX treats these as syntax, so a feature name can never break the page.
function escapeMdx(text) {
  return text.replace(/[&<>{}]/g, (c) => `&#${c.charCodeAt(0)};`);
}

// Sidebar item builder. It reproduces the plugin's createDocItem (not
// exported; check-theme-pin.mjs guards the copy on plugin bumps) and adds the
// feature name to customProps for a preview endpoint. src/theme/DocSidebarItem/
// Link turns that into the "Preview" label. A className would not work:
// Docusaurus resolves `frontMatter.sidebar_class_name ?? item.className`, and
// the plugin writes sidebar_class_name into every generated operation page.
// `sidebar.ts` is only written when absent, so run `yarn re-gen` after changing
// this, not `yarn gen-all`.
export function createPrismaBrowserDocItem(item, { sidebarOptions, basePath }) {
  const id = item.type === "schema" ? `schemas/${item.id}` : item.id;
  const featureName =
    item.type === "api" ? previewFeatureName(item.api) : undefined;
  return {
    type: "doc",
    id: basePath ? `${basePath}/${id}` : id,
    label: item.frontMatter?.sidebar_label ?? item.title ?? id,
    customProps: featureName
      ? { ...sidebarOptions?.customProps, pbPreviewFeature: featureName }
      : sidebarOptions?.customProps,
  };
}

// API page builder: the plugin's page, plus a banner on a preview endpoint
// naming the header to send. Added when the page is generated, the way the
// plugin adds its deprecation notice, and linked to the Preview features guide
// only once that guide is published, so the link is never a 404.
export function createPrismaBrowserApiPageMD(pageData) {
  const page = createApiPageMD(pageData);
  const featureName = previewFeatureName(pageData.api);
  if (!featureName) return page;

  const header = escapeMdx(`${PREVIEW_MARKER}: ${featureName}`);
  const guideLink = findPreviewGuide(guideRoot)
    ? ` <a href="${PREVIEW_GUIDE_ROUTE}">How preview features work</a>`
    : "";
  const banner =
    `<div className="pb-preview-banner" role="note">` +
    `<span className="pb-preview-banner__tag">Preview</span>` +
    `<p className="pb-preview-banner__body">` +
    `This endpoint is published ahead of general availability. Send the header ` +
    `<code>${header}</code> on every request, or it returns <code>400</code>. ` +
    `Its shape can still change.${guideLink}</p></div>\n\n`;

  // After the imports, ahead of the page heading.
  const imports = /^(?:import [^\n]*\n)+\n?/.exec(page);
  const at = imports ? imports[0].length : 0;
  return page.slice(0, at) + banner + page.slice(at);
}
