// Every Prisma Browser specific component is gated on this site path. Compare
// it against useSitePath() (baseUrl removed), not the raw route pathname.
export const PB_BASE = "/prisma-browser";

// Segment boundary: "/prisma-browser-legacy/" must not count as a PB route.
export const isPBPath = (sitePath) => {
  const p = String(sitePath || "");
  return p === PB_BASE || p.startsWith(`${PB_BASE}/`);
};

// First segment under PB_BASE ("api", "guide", ...): "" on the PB root, null
// off PB routes.
export function pbSection(sitePath) {
  if (!isPBPath(sitePath)) return null;
  return String(sitePath).slice(PB_BASE.length).split("/")[1] ?? "";
}
