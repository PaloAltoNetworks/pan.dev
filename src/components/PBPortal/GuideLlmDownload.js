import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {
  LLMS_FULL_URL,
  LLMS_DOWNLOAD_NAME,
  LLMS_PAGE_MD_BASE,
} from "./portalConfig";

// Slug = last path segment of the guide route, e.g.
// /prisma-browser/guide/authentication -> "authentication".
function slugFromPath(pathname) {
  return (pathname || "").replace(/\/+$/, "").split("/").pop();
}

const COPY_ICON = { idle: "fa-copy", copied: "fa-check", failed: "fa-xmark" };
const COPY_LABEL = {
  idle: "Copy for AI",
  copied: "Copied",
  failed: "Copy failed",
};

// Page-header "for AI" control: a split button rendered beside the guide H1.
// Primary click copies the current page as Markdown; the caret opens a menu
// with the per-page and full-guide downloads. Copy and per-page download both
// use the same generated file (/prisma-browser/guide-md/<slug>.md) so the
// Markdown is identical.
export function GuideAiMenu({ pathname }) {
  const slug = slugFromPath(pathname);
  const [open, setOpen] = useState(false);
  // "idle" | "copied" | "failed"
  const [copyState, setCopyState] = useState("idle");
  const ref = useRef(null);
  // The generated files are static assets, so prefix the site baseUrl for
  // subpath builds. Hooks stay above the early return below.
  const pageUrl = useBaseUrl(`${LLMS_PAGE_MD_BASE}/${slug}.md`);
  const fullUrl = useBaseUrl(LLMS_FULL_URL);

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!slug) return null;

  const copyPage = async () => {
    // Safari only allows a clipboard write that starts inside the click, so
    // hand the clipboard a pending item now and let the fetch resolve into it.
    const text = fetch(pageUrl).then((res) => {
      if (!res.ok) throw new Error(`${res.status} fetching ${pageUrl}`);
      return res.text();
    });
    try {
      if (typeof ClipboardItem === "function" && navigator.clipboard.write) {
        const blob = text.then((t) => new Blob([t], { type: "text/plain" }));
        await navigator.clipboard.write([
          new ClipboardItem({ "text/plain": blob }),
        ]);
      } else {
        await navigator.clipboard.writeText(await text);
      }
      setCopyState("copied");
    } catch (err) {
      console.error("Copy for AI failed", err);
      setCopyState("failed");
    }
    setTimeout(() => setCopyState("idle"), 1600);
  };

  return (
    <div className="pb-ai" ref={ref}>
      <div className="pb-ai-split">
        <button
          type="button"
          className={clsx("pb-ai-main", copyState === "copied" && "is-copied")}
          onClick={copyPage}
          title="Copy this page as Markdown to use with ChatGPT, Claude, or any LLM."
        >
          <i
            className={`fa-solid ${COPY_ICON[copyState]}`}
            aria-hidden="true"
          />
          <span>{COPY_LABEL[copyState]}</span>
        </button>
        <button
          type="button"
          className="pb-ai-caret"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="More options for AI"
          onClick={() => setOpen((o) => !o)}
        >
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </button>
      </div>
      {open && (
        <div className="pb-ai-menu" role="menu">
          <a
            role="menuitem"
            className="pb-ai-item"
            href={pageUrl}
            download={`${slug}.md`}
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-file-arrow-down" aria-hidden="true" />
            <span>Download this page (.md)</span>
          </a>
          <a
            role="menuitem"
            className="pb-ai-item"
            href={fullUrl}
            download={LLMS_DOWNLOAD_NAME}
            onClick={() => setOpen(false)}
          >
            <i className="fa-solid fa-download" aria-hidden="true" />
            <span>Download full guide (.md)</span>
          </a>
        </div>
      )}
    </div>
  );
}
