import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
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

// Page-header "for AI" control: a split button rendered beside the guide H1.
// Primary click copies the current page as Markdown; the caret opens a menu
// with the per-page and full-guide downloads. Copy and per-page download both
// use the same generated file (/prisma-browser/guide-md/<slug>.md) so the
// Markdown is identical.
export function GuideAiMenu({ pathname }) {
  const slug = slugFromPath(pathname);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

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
  const pageUrl = `${LLMS_PAGE_MD_BASE}/${slug}.md`;

  const copyPage = async () => {
    try {
      const res = await fetch(pageUrl);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error("Copy for AI failed", err);
    }
  };

  return (
    <div className="pb-ai" ref={ref}>
      <div className="pb-ai-split">
        <button
          type="button"
          className={clsx("pb-ai-main", copied && "is-copied")}
          onClick={copyPage}
          title="Copy this page as Markdown to use with ChatGPT, Claude, or any LLM."
        >
          <i
            className={`fa-solid ${copied ? "fa-check" : "fa-copy"}`}
            aria-hidden="true"
          />
          <span>{copied ? "Copied" : "Copy for AI"}</span>
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
            href={LLMS_FULL_URL}
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
