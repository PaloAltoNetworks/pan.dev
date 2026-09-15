import React, { useState } from "react";
import { IconRss } from "@tabler/icons-react";
import PBPortal from "@site/src/components/PBPortal";
import { RELEASE_NOTES_CONTENT } from "@site/src/components/PBPortal/portalConfig";
import { ReleaseBox } from "./ReleaseBox";
import { prettyDate } from "./helpers";
import SubscribeModal from "./SubscribeModal";

// Full release-notes surface: left-bar date timeline + collapsible per-release
// cards, driven entirely by the `releases` array (mapped from MDX front matter
// by the swizzled blog list page). Keeps the pre-blog custom UI intact.
export default function ReleaseNotesView({ releases, feedUrl }) {
  const [open, setOpen] = useState(
    () => new Set(releases[0] ? [releases[0].date] : [])
  );
  const [subOpen, setSubOpen] = useState(false);

  function toggle(date) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(date)) next.delete(date);
      else next.add(date);
      return next;
    });
  }
  function expandAll() {
    setOpen(new Set(releases.map((r) => r.date)));
  }
  function collapseAll() {
    setOpen(new Set());
  }
  function jump(date) {
    setOpen((prev) => new Set(prev).add(date));
    requestAnimationFrame(() => {
      const el = document.getElementById(`pb-d-${date}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const rail = (
    <aside className="pb-rail">
      <div className="pb-rail-actions">
        <button className="mini-btn" type="button" onClick={expandAll}>
          Expand all
        </button>
        <button className="mini-btn" type="button" onClick={collapseAll}>
          Collapse all
        </button>
      </div>
      <nav className="pb-datelist" aria-label="Releases by date">
        {releases.map((r) => (
          <a
            key={r.date}
            href={`#pb-d-${r.date}`}
            onClick={(e) => {
              e.preventDefault();
              jump(r.date);
            }}
          >
            <span>{prettyDate(r.date)}</span>
            <span className="n">{r.changes.length}</span>
          </a>
        ))}
      </nav>
    </aside>
  );

  return (
    <PBPortal
      surface="release-notes"
      title={RELEASE_NOTES_CONTENT.title}
      description={RELEASE_NOTES_CONTENT.description}
      sidebar={rail}
    >
      <div className="pb-rn-head">
        <h1 className="pb-doc-h1">{RELEASE_NOTES_CONTENT.heading}</h1>
        <button
          type="button"
          className="pb-bar-btn primary pb-bar-btn-rss pb-bar-cta"
          title="Subscribe to release notes"
          onClick={() => setSubOpen(true)}
        >
          <IconRss size={15} stroke={2.2} aria-hidden="true" />
          Subscribe for updates
        </button>
      </div>
      <p className="pb-rn-lead">{RELEASE_NOTES_CONTENT.lead}</p>

      {releases.length === 0 ? (
        <p className="pb-rn-empty">No release notes published yet.</p>
      ) : (
        releases.map((r) => (
          <ReleaseBox
            key={r.date}
            release={r}
            changes={r.changes}
            open={open.has(r.date)}
            onToggle={toggle}
          />
        ))
      )}

      <SubscribeModal
        feedUrl={feedUrl}
        open={subOpen}
        onClose={() => setSubOpen(false)}
      />
    </PBPortal>
  );
}
