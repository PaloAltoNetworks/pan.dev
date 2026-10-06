import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

// Every Prisma Browser specific component is gated on this site path.
export const PB_BASE = "/prisma-browser";

// Docusaurus route pathnames and blog permalinks include the site baseUrl.
// pan.dev builds at "/", but internal previews build under a subpath, where a
// bare startsWith("/prisma-browser") never matches. Strip the baseUrl first so
// the PB checks see the same site path in every build.
export function stripBaseUrl(pathname, baseUrl) {
  const path = String(pathname || "");
  const base = String(baseUrl || "/").replace(/\/+$/, "");
  if (!base) return path;
  if (path === base) return "/";
  return path.startsWith(`${base}/`) ? path.slice(base.length) : path;
}

// Segment boundary: "/prisma-browser-legacy/" must not count as a PB route.
export const isPBPath = (sitePath) => {
  const p = String(sitePath || "");
  return p === PB_BASE || p.startsWith(`${PB_BASE}/`);
};

// The current route as a site path (baseUrl removed).
export function usePBSitePath() {
  const { pathname } = useLocation();
  return stripBaseUrl(pathname, useBaseUrl("/"));
}
