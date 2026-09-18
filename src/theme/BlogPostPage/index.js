// Swizzled (replaced) individual release-note page. Renders the single release
// (expanded) inside the PBPortal shell, matching the on-site timeline styling.
//
// Scoped to the pb-release-notes blog instance only. Any other blog instance
// (present or future) falls through to the stock theme component untouched.
import React from "react";
import Link from "@docusaurus/Link";
import BlogPostPageOriginal from "@theme-original/BlogPostPage";
import PBPortal from "@site/src/components/PBPortal";
import { RELEASE_NOTES_CONTENT } from "@site/src/components/PBPortal/portalConfig";
import { ReleaseBox } from "@site/src/components/PBPortal/ReleaseNotes/ReleaseBox";

const PB_RELEASE_NOTES_BASE = "/prisma-browser/release-notes";

export default function BlogPostPage(props) {
  const BlogPostContent = props.content;
  const meta = BlogPostContent.metadata || {};

  if (!String(meta.permalink || "").startsWith(PB_RELEASE_NOTES_BASE)) {
    return <BlogPostPageOriginal {...props} />;
  }

  const fm = BlogPostContent.frontMatter || {};
  const rawDate = typeof fm.date === "string" ? fm.date : meta.date || "";
  const release = {
    date: String(rawDate).slice(0, 10),
    summary: fm.summary || meta.description || "",
    changes: Array.isArray(fm.changes) ? fm.changes : [],
  };

  return (
    <PBPortal
      surface="release-notes"
      title={meta.title || RELEASE_NOTES_CONTENT.title}
      description={RELEASE_NOTES_CONTENT.description}
    >
      <p className="pb-rn-back">
        <Link to="/prisma-browser/release-notes">
          &#8592; All release notes
        </Link>
      </p>
      <ReleaseBox
        release={release}
        changes={release.changes}
        open={true}
        onToggle={() => {}}
      />
    </PBPortal>
  );
}
