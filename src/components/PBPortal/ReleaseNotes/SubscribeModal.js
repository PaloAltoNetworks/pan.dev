import React, { useState } from "react";
import clsx from "clsx";
import { PBButton } from "@site/src/components/PBPortal/ui";

function CopyField({ value, mono }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="pb-copyfield">
      <input
        className={clsx(mono && "mono")}
        type="text"
        readOnly
        value={value}
        onFocus={(e) => e.target.select()}
      />
      <button
        type="button"
        className={clsx("mini-btn", copied && "copied")}
        onClick={() => {
          navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
          });
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function SubscribeModal({ feedUrl, open, onClose }) {
  if (!open) return null;
  const feedly = `https://feedly.com/i/subscription/feed/${encodeURIComponent(
    feedUrl
  )}`;
  const inoreader = `https://www.inoreader.com/?add_feed=${encodeURIComponent(
    feedUrl
  )}`;
  const slackCmd = `/feed subscribe ${feedUrl}`;

  return (
    <div
      className="pb-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Subscribe to release notes"
      onClick={onClose}
    >
      <div className="pb-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="pb-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          &times;
        </button>
        <h2>Subscribe to release notes</h2>
        <p className="pb-modal-sub">
          Get an update whenever we publish new Prisma Browser API release
          notes. Add the feed to your reader, Slack, or Microsoft Teams.
        </p>

        <div className="pb-sub-section">
          <div className="pb-sub-label">Feed URL</div>
          <CopyField value={feedUrl} mono />
        </div>

        <div className="pb-sub-section">
          <div className="pb-sub-label">Feed readers</div>
          <div className="pb-sub-readers">
            <PBButton href={feedly} external variant="ghost">
              Add to Feedly
            </PBButton>
            <PBButton href={inoreader} external variant="ghost">
              Add to Inoreader
            </PBButton>
          </div>
        </div>

        <div className="pb-sub-section">
          <div className="pb-sub-label">Slack</div>
          <p className="pb-sub-hint">Run this in any channel:</p>
          <CopyField value={slackCmd} mono />
        </div>

        <div className="pb-sub-section">
          <div className="pb-sub-label">Microsoft Teams</div>
          <ol className="pb-sub-steps">
            <li>
              Open the <b>Workflows</b> app in Teams.
            </li>
            <li>
              Choose the template{" "}
              <b>Post a channel message when a new RSS feed is published</b>.
            </li>
            <li>Paste the feed URL above and pick your channel.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
