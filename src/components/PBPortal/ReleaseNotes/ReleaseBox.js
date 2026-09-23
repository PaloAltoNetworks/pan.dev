import React from "react";
import clsx from "clsx";
import { API_REF_URL } from "@site/src/components/PBPortal/portalConfig";
import { PBCodePanel } from "@site/src/components/PBPortal/ui";
import { TYPE_ORDER, TYPE_LABEL, prettyDate, richText } from "./helpers";

export function Change({ ch }) {
  return (
    <div className="pb-change">
      <div className="pb-change-row">
        <div>
          <span className={clsx("pb-badge", ch.type)}>
            <span className="bd" />
            {TYPE_LABEL[ch.type]}
          </span>
        </div>
        <div className="pb-change-main">
          <p
            className="pb-change-text"
            dangerouslySetInnerHTML={{ __html: richText(ch.text) }}
          />
          {ch.endpoint ? (
            <a className="pb-endpoint" href={ch.to || API_REF_URL}>
              {ch.endpoint}
            </a>
          ) : null}
          {ch.todo ? (
            <div className="pb-todo">
              <b>What you need to do:</b>{" "}
              <span dangerouslySetInnerHTML={{ __html: richText(ch.todo) }} />
            </div>
          ) : null}
          {ch.before && ch.after ? (
            <div className="pb-diff">
              <div className="line del">
                <span className="gut">-</span>
                {ch.before}
              </div>
              <div className="line add">
                <span className="gut">+</span>
                {ch.after}
              </div>
            </div>
          ) : null}
          {ch.example ? (
            <PBCodePanel copyText={ch.example}>{ch.example}</PBCodePanel>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function ReleaseBox({ release, changes, open, onToggle }) {
  const counts = {};
  changes.forEach((c) => {
    counts[c.type] = (counts[c.type] || 0) + 1;
  });
  const chips = TYPE_ORDER.filter((t) => counts[t]);
  const groups = TYPE_ORDER.filter((t) => changes.some((c) => c.type === t));
  return (
    <article
      className={clsx("pb-box", open && "open")}
      id={`pb-d-${release.date}`}
    >
      <div className="pb-box-head" onClick={() => onToggle(release.date)}>
        <svg
          className="pb-chev"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
        <div className="pb-box-date">{prettyDate(release.date)}</div>
        <div className="pb-box-headmain">
          <div className="pb-counters">
            {chips.map((t) => (
              <span className="pb-chip" key={t}>
                <span className={clsx("dot", `dot-${t}`)} />
                <span className="cn">{counts[t]}</span> {TYPE_LABEL[t]}
              </span>
            ))}
          </div>
          <div className="pb-summary">{release.summary}</div>
        </div>
      </div>
      {open && (
        <div className="pb-box-body">
          {groups.map((t) => (
            <div className="pb-group" key={t}>
              <div className="pb-group-label">{TYPE_LABEL[t]}</div>
              {changes
                .filter((c) => c.type === t)
                .map((c, i) => (
                  <Change ch={c} key={i} />
                ))}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
