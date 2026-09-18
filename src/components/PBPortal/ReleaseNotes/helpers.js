// Shared helpers + change-type vocabulary for the Prisma Browser release notes.
// Extracted from the former release-notes page so the same rendering engine can
// be driven by MDX front matter via the swizzled blog theme components.

export const TYPE_ORDER = [
  "breaking",
  "new",
  "changed",
  "deprecated",
  "removed",
  "fixed",
];

export const TYPE_LABEL = {
  breaking: "Breaking",
  new: "New",
  changed: "Changed",
  deprecated: "Sunset",
  removed: "Removed",
  fixed: "Fixed",
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// "2026-06-25" -> "June 25th, 2026"
export function prettyDate(iso) {
  const [y, m, d] = String(iso).split("-").map(Number);
  return `${MONTHS[m - 1]} ${ordinal(d)}, ${y}`;
}

// Allow intentional <code>/<b> markup in change text while escaping the rest.
export function richText(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&lt;code&gt;/g, "<code>")
    .replace(/&lt;\/code&gt;/g, "</code>")
    .replace(/&lt;b&gt;/g, "<b>")
    .replace(/&lt;\/b&gt;/g, "</b>");
}
