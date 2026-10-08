// Swizzled (replaced) blog list page for the Prisma Browser release notes.
// The blog plugin owns the content (MDX) and the RSS feed; this component
// renders the release notes in the custom PBPortal shell (left-bar timeline +
// collapsible per-release cards) instead of the default blog layout.
//
// Scoped to the pb-release-notes blog instance only. Any other blog instance
// (present or future) falls through to the stock theme component untouched.
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useRouteContext from "@docusaurus/useRouteContext";
import BlogListPageOriginal from "@theme-original/BlogListPage";
import ReleaseNotesView from "@site/src/components/PBPortal/ReleaseNotes/ReleaseNotesView";

const PB_RELEASE_NOTES_ID = "pb-release-notes";
const PB_RELEASE_NOTES_BASE = "/prisma-browser/release-notes";

function toRelease({ content }) {
  const fm = content.frontMatter || {};
  const meta = content.metadata || {};
  const rawDate = typeof fm.date === "string" ? fm.date : meta.date || "";
  return {
    date: String(rawDate).slice(0, 10),
    summary: fm.summary || meta.description || "",
    changes: Array.isArray(fm.changes) ? fm.changes : [],
    permalink: meta.permalink,
  };
}

export default function BlogListPage(props) {
  const { items } = props;
  const { siteConfig } = useDocusaurusContext();
  const { plugin } = useRouteContext();
  const feedUrl =
    siteConfig.url + useBaseUrl(`${PB_RELEASE_NOTES_BASE}/rss.xml`);

  if (plugin.id !== PB_RELEASE_NOTES_ID) {
    return <BlogListPageOriginal {...props} />;
  }

  const releases = (items || [])
    .map(toRelease)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

  return <ReleaseNotesView releases={releases} feedUrl={feedUrl} />;
}
