import React from "react";
import ApiItem from "@theme-original/ApiItem";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import { ungzip } from "pako";
import "@site/src/components/PBPortal/pb-portal.scss";

// The generator packs the whole operation object into the page's `api`
// frontmatter as gzipped base64 (see the upstream ApiItem, which decodes it the
// same way to feed the explorer). Decoding it here is what lets a spec marker
// reach the page without owning the page generator. Any failure falls through
// to no banner rather than breaking the page.
function decodeApi(api) {
  if (!api || typeof api !== "string") return undefined;
  try {
    const binary = atob(api);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return JSON.parse(new TextDecoder().decode(ungzip(bytes)));
  } catch {
    return undefined;
  }
}

// Endpoints published ahead of GA carry this marker, which is also the name of
// the header a caller has to send. sync-spec.mjs pushes a path-level marker down
// onto each operation first, because the openapi plugin drops path-level
// extensions before the page is generated.
function previewFeatureName(props) {
  const api = decodeApi(props?.content?.frontMatter?.api);
  const name = api?.["x-prisma-browser-preview"]?.featureName;
  return typeof name === "string" && name.length > 0 ? name : undefined;
}

// Scoped wrapper around the OpenAPI reference item. The surface switcher now
// lives in the swizzled Navbar (grouped with the pan.dev navbar), so here we
// paint the Prisma Browser API-surface background behind the native reference
// UI and flag preview endpoints, both only on /prisma-browser/api pages. All
// other API pages fall straight through to the original component.
export default function ApiItemWrapper(props) {
  const { pathname } = useLocation();
  const onBrowserMgmt = pathname.startsWith("/prisma-browser/api");

  if (!onBrowserMgmt) return <ApiItem {...props} />;

  const featureName = previewFeatureName(props);

  return (
    <>
      <div className="pb-portal" data-surface="api" aria-hidden="true" />
      {featureName && (
        <div className="pb-preview-banner" role="note">
          <span className="pb-preview-banner__tag">Preview</span>
          <p className="pb-preview-banner__body">
            This endpoint is published ahead of general availability. Send the
            header <code>x-prisma-browser-preview: {featureName}</code> on every
            request, or it returns <code>400</code>. Its shape can still change.{" "}
            <Link to="/prisma-browser/guide/preview-features">
              How preview features work
            </Link>
          </p>
        </div>
      )}
      <ApiItem {...props} />
    </>
  );
}
