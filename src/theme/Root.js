import React, { useEffect } from "react";
import StackdriverErrorReporter from "stackdriver-errors-js";

import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import CookieConsent from "@site/src/components/CookieConsent";

// Everything in this file that is Prisma Browser specific is gated on this
// prefix, so no other product on pan.dev is affected by it.
const PB_BASE = "/prisma-browser";

const isPBRoute = (pathname) => String(pathname || "").startsWith(PB_BASE);

// Fire a GA4 custom event. window.gtag is installed by docusaurus-plugin-gtm
// and gated by the cookie-consent banner, so events queue behind the visitor's
// analytics choice and this no-ops until (and unless) consent is granted.
function track(name, params) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params || {});
  }
}

// Collapse a malformed/duplicated ?ref=nav query into a single clean one.
// The API-reference landing links carry ?ref=nav (see portalConfig API_REF_URL);
// certain client-side re-navigations can stack it onto the current URL, yielding
// e.g. "/prisma-browser/api/list-users/?ref=nav?ref=nav", which splits analytics
// and looks broken in the address bar. This only rewrites URLs that are actually
// duplicated/malformed (a second "?" or more than one ref=nav); valid single-tag
// URLs are left untouched, so it can never regress a clean navigation. Callers
// must gate on isPBRoute: a non-PB URL may legitimately carry a nested "?" in a
// query value (e.g. ?redirect=/x?y=1), which this would rewrite.
function normalizeNavRef() {
  if (typeof window === "undefined" || !window.history || !window.location) {
    return;
  }
  const { pathname, search, hash } = window.location;
  if (!search) return;
  const hasStrayQuestion = search.indexOf("?", 1) !== -1;
  const refCount = (search.match(/ref=nav/g) || []).length;
  if (!hasStrayQuestion && refCount <= 1) return; // already clean

  const others = search
    .replace(/[?&]ref=nav/g, "") // drop every ref=nav
    .replace(/\?/g, "&") // any stray "?" becomes a separator
    .replace(/&+/g, "&") // collapse repeats
    .replace(/^&|&$/g, ""); // trim edges
  const newSearch = others ? `?${others}&ref=nav` : "?ref=nav";
  const next = pathname + newSearch + hash;
  if (next !== pathname + search + hash) {
    window.history.replaceState(window.history.state, "", next);
  }
}

const truncate = (s, n = 90) =>
  String(s || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, n);

// Delegated click handler covering the Prisma Browser (PBPortal) interactive
// surfaces that GA4 does not capture automatically. Keyed on stable classNames
// so it survives content changes and ports cleanly to pan.dev. Ordered
// most-specific first; each branch returns to avoid double-counting.
function handleClick(e) {
  const t = e.target;
  if (!t || typeof t.closest !== "function") return;
  const path =
    typeof window !== "undefined" && window.location
      ? window.location.pathname
      : "";

  // Spec download: anchor with a download attribute (e.g. the .yaml OpenAPI
  // spec). GA4 enhanced measurement does not auto-track .yaml downloads.
  const dl = t.closest("a[download]");
  if (dl) {
    const href = dl.getAttribute("href") || "";
    const file = href.split("/").pop() || href;
    const ext = file.includes(".") ? file.split(".").pop().toLowerCase() : "";
    // Guide "for AI" Markdown downloads (per-page + full guide) live in the
    // .pb-ai-item menu. Give them a dedicated event so they don't co-mingle
    // with the OpenAPI spec download; split page vs full via the href.
    if (dl.closest(".pb-ai-item")) {
      const isPage = href.includes("/guide-md/");
      track("guide_md_download", {
        scope: isPage ? "page" : "full_guide",
        page_path: path,
        guide: isPage ? file.replace(/\.md$/, "") : "full_guide",
        file_name: file,
      });
      return;
    }
    track("spec_download", {
      file_name: file,
      file_extension: ext,
      link_url: href,
    });
    return;
  }

  // "Copy for AI" split-button primary action: copies the current guide page as
  // Markdown to the clipboard. No navigation or download fires, so it needs
  // explicit tracking. Fires on click (intent to copy) via delegation.
  if (t.closest(".pb-ai-main")) {
    const slug = path.replace(/\/+$/, "").split("/").pop() || "";
    track("guide_copy_md", { scope: "page", page_path: path, guide: slug });
    return;
  }

  // Subscribe modal open (release notes RSS).
  if (t.closest(".pb-bar-btn-rss")) {
    track("subscribe_open", {});
    return;
  }

  // Feed-reader subscribe outbound links inside the Subscribe modal.
  const feedProvider = t.closest(
    'a[href*="feedly.com"], a[href*="inoreader.com"]'
  );
  if (feedProvider) {
    const href = feedProvider.getAttribute("href") || "";
    track("feed_subscribe", {
      provider: href.includes("feedly.com") ? "feedly" : "inoreader",
    });
    return;
  }

  // Copy buttons inside the Subscribe modal. Fire a distinct event per target
  // (RSS feed URL vs the Slack /feed command) so the two are separable in
  // reports without registering the copy_kind custom dimension. copy_kind is
  // kept as a param for continuity with historical feed_copy data.
  const copyField = t.closest(".pb-copyfield");
  if (copyField && t.closest(".mini-btn")) {
    const input = copyField.querySelector("input");
    const val = input ? input.value : "";
    const isSlack = val.startsWith("/feed");
    track(isSlack ? "rss_slack_copy" : "rss_url_copy", {
      copy_kind: isSlack ? "slack_command" : "feed_url",
    });
    return;
  }

  // Release-notes rail: Expand all / Collapse all.
  const railBtn = t.closest(".pb-rail-actions .mini-btn");
  if (railBtn) {
    const label = (railBtn.textContent || "").toLowerCase();
    track("release_notes_bulk_toggle", {
      action: label.includes("expand") ? "expand_all" : "collapse_all",
    });
    return;
  }

  // Release-notes date-timeline jump link.
  const jump = t.closest(".pb-datelist a");
  if (jump) {
    const href = jump.getAttribute("href") || "";
    track("release_note_jump", { release_date: href.replace(/^#pb-d-/, "") });
    return;
  }

  // Per-date release card expand/collapse. Class flips after React updates, so
  // the current state at click time tells us which way we're headed.
  const head = t.closest(".pb-box-head");
  if (head) {
    const box = head.closest(".pb-box");
    const id = box ? box.id : "";
    track("release_note_toggle", {
      release_date: id.replace(/^pb-d-/, ""),
      action: box && box.classList.contains("open") ? "collapse" : "expand",
    });
    return;
  }

  // Endpoint deep-link inside a release note change.
  const endpoint = t.closest("a.pb-endpoint");
  if (endpoint) {
    track("endpoint_click", {
      endpoint: truncate(endpoint.textContent, 60),
      link_url: endpoint.getAttribute("href") || "",
    });
    return;
  }

  // Copy-code buttons. Two different buttons exist and only one carries
  // .copy-btn, so matching that alone missed every copy of a guide example:
  //   - PBCodePanel (release-note examples) renders button.copy-btn
  //   - a fenced code block renders Docusaurus's own button, which shares
  //     .clean-btn with the word-wrap toggle beside it in the same button
  //     group. Excluding the toggle by class is stable across locales and
  //     across the CSS-module hash, unlike matching its aria-label.
  const exampleCopy = t.closest(".copy-btn");
  const codeBlockCopy =
    !exampleCopy &&
    t.closest('[class*="buttonGroup"] button:not([class*="toggleButton"])');
  if (exampleCopy || codeBlockCopy) {
    track("code_copy", {
      page_path: path,
      source: exampleCopy ? "example_panel" : "code_block",
    });
    return;
  }

  // API "Try it" console: Send API Request. Capture which endpoint it was
  // fired on (path segment + page heading) so usage is attributable per API.
  if (t.closest(".openapi-explorer__request-btn")) {
    const endpoint = path.replace(/\/+$/, "").split("/").pop() || "";
    const h1 = document.querySelector("h1");
    track("api_try_send", {
      page_path: path,
      endpoint,
      endpoint_title: h1 ? truncate(h1.textContent, 80) : "",
    });
    return;
  }

  // Surface switcher tabs (Overview / Developer guide / API reference / ...).
  const tab = t.closest(".pb-tab");
  if (tab) {
    const params = { tab: truncate(tab.textContent, 40) };
    if (tab.classList.contains("pb-tab--soon")) params.state = "coming_soon";
    track("nav_tab_click", params);
    return;
  }

  // Guide left-rail navigation links.
  const navLink = t.closest(".pb-nav-link");
  if (navLink) {
    track("guide_nav_click", {
      guide: truncate(navLink.textContent, 60),
      link_url: navLink.getAttribute("href") || "",
    });
    return;
  }

  // Landing-page CTA cards and use-case rows.
  const card = t.closest(".pb-card, .pb-uc-item");
  if (card) {
    const heading = card.querySelector("h2, h3, h4");
    const link =
      card.getAttribute("href") ||
      (card.querySelector("a") &&
        card.querySelector("a").getAttribute("href")) ||
      "";
    track("cta_click", {
      label: truncate(heading ? heading.textContent : card.textContent, 60),
      link_url: link,
    });
    return;
  }
}

// Error Reporter
export default function Root({ children }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const errorReporterApiKey = customFields.errorReporterApiKey;
  const { pathname, search } = useLocation();

  // Keep ?ref=nav single on every route change (and initial load), on Prisma
  // Browser routes only.
  useEffect(() => {
    if (!isPBRoute(pathname)) return;
    normalizeNavRef();
  }, [pathname, search]);

  if (ExecutionEnvironment.canUseDOM && errorReporterApiKey) {
    const errorHandler = new StackdriverErrorReporter();
    errorHandler.start({
      key: errorReporterApiKey,
      projectId: "pan-dev-f1b58",
      service: "pan-dev-frontend",
      reportUncaughtExceptions: true,
      reportUnhandledPromiseRejections: true,
    });

    const originalReport = errorHandler.report.bind(errorHandler);
    errorHandler.report = (err, options) => {
      const msg = typeof err === "string" ? err : err?.message || "";
      const name = typeof err === "object" && err ? err.name : "";
      if (name === "ChunkLoadError" || msg.includes("ChunkLoadError")) {
        return Promise.resolve(null);
      }
      return originalReport(err, options);
    };
  }

  // GA4 custom-event instrumentation for PBPortal surfaces. page_view and
  // acquisition are handled automatically by the GTM container; this adds the
  // interactions gtag can't see on its own (spec download, RSS/subscribe,
  // release-note toggles, nav/CTA clicks, API "Try it", copy, and Algolia
  // search terms).
  //
  // Gated on Prisma Browser routes: the listeners are delegated on `document`,
  // so without the gate they would also capture search terms and API-explorer
  // clicks on every other product's pages.
  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    if (!isPBRoute(pathname)) return undefined;

    // Algolia DocSearch is client-side (no ?q= param), so GA4 can't capture
    // search terms automatically. Debounce input to log the settled term once.
    let searchTimer = null;
    let lastSearch = "";
    const logSearch = (el) => {
      if (!el || !el.classList || !el.classList.contains("DocSearch-Input")) {
        return;
      }
      const term = (el.value || "").trim();
      if (term.length >= 3 && term !== lastSearch) {
        lastSearch = term;
        track("search", { search_term: truncate(term, 100) });
      }
    };
    const handleInput = (e) => {
      const el = e.target;
      if (!el || !el.classList || !el.classList.contains("DocSearch-Input")) {
        return;
      }
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => logSearch(el), 1500);
    };
    const handleKeydown = (e) => {
      if (e.key === "Enter") {
        clearTimeout(searchTimer);
        logSearch(e.target);
      }
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("input", handleInput, true);
    document.addEventListener("keydown", handleKeydown, true);
    return () => {
      clearTimeout(searchTimer);
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("input", handleInput, true);
      document.removeEventListener("keydown", handleKeydown, true);
    };
  }, [pathname]);

  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
