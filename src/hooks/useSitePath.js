import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

// Docusaurus route pathnames include the site baseUrl. pan.dev builds at "/",
// but internal previews build under a subpath, where a bare startsWith("/x")
// never matches. Strip the baseUrl first so path checks see the same site path
// in every build.
function stripBaseUrl(pathname, baseUrl) {
  const path = String(pathname || "");
  const base = String(baseUrl || "/").replace(/\/+$/, "");
  if (!base) return path;
  if (path === base) return "/";
  return path.startsWith(`${base}/`) ? path.slice(base.length) : path;
}

// The current route as a site path (baseUrl removed).
export function useSitePath() {
  const { pathname } = useLocation();
  return stripBaseUrl(pathname, useBaseUrl("/"));
}
