import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { GUIDE_NAV } from "./guideNav";

const norm = (p) => (p || "").replace(/\/+$/, "");
const groupKey = (g, gi) => g.key || g.label || `g${gi}`;

// Each guide page mounts a fresh PBPortal, so persist the rail's scroll
// position at module scope and restore it before paint.
let guideRailScroll = 0;
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Caret = () => (
  <svg
    className="pb-nav-caret"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    aria-hidden="true"
  >
    <path
      d="M2 3.5 L5 6.5 L8 3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function PBRailNav({ pathname }) {
  const [q, setQ] = useState("");
  // Accordion: only one level-2 section is open at a time. `undefined` means
  // untouched (open the section of the current page); `null` means all closed;
  // otherwise it's the single open section key. Sub-groups (level 3) default to
  // only the active one open.
  const [openSection, setOpenSection] = useState(undefined);
  const [openSubs, setOpenSubs] = useState(null);
  const railRef = useRef(null);
  const here = norm(pathname);
  const needle = q.trim().toLowerCase();

  useIsoLayoutEffect(() => {
    if (railRef.current) railRef.current.scrollTop = guideRailScroll;
  }, []);

  const groups = useMemo(() => {
    if (!needle) return GUIDE_NAV;
    return GUIDE_NAV.map((g) => {
      const items = g.items
        .map((i) => {
          if (i.items) {
            const kids = i.items.filter((c) =>
              c.label.toLowerCase().includes(needle)
            );
            return kids.length ? { ...i, items: kids } : null;
          }
          return i.label.toLowerCase().includes(needle) ? i : null;
        })
        .filter(Boolean);
      return { ...g, items };
    }).filter((g) => g.items.length > 0);
  }, [needle]);

  const activeSubKey = useMemo(() => {
    for (const g of GUIDE_NAV) {
      for (const i of g.items) {
        if (i.items && i.items.some((c) => norm(c.to) === here))
          return i.subgroup;
      }
    }
    return null;
  }, [here]);

  const activeSectionKey = useMemo(() => {
    for (let gi = 0; gi < GUIDE_NAV.length; gi++) {
      const g = GUIDE_NAV[gi];
      for (const i of g.items) {
        if (i.items) {
          if (i.items.some((c) => norm(c.to) === here)) return groupKey(g, gi);
        } else if (norm(i.to) === here) {
          return groupKey(g, gi);
        }
      }
    }
    return null;
  }, [here]);

  const isSectionOpen = (key) => {
    if (needle) return true; // expand everything while filtering
    const current = openSection === undefined ? activeSectionKey : openSection;
    return current === key;
  };

  const toggleSection = (key) =>
    setOpenSection((cur) => {
      const current = cur === undefined ? activeSectionKey : cur;
      return current === key ? null : key;
    });

  const isSubOpen = (subgroup) => {
    if (needle) return true;
    if (openSubs === null) return subgroup === activeSubKey;
    return openSubs.has(subgroup);
  };

  const toggleSub = (subgroup) =>
    setOpenSubs((cur) => {
      const base =
        cur === null
          ? new Set(activeSubKey ? [activeSubKey] : [])
          : new Set(cur);
      if (base.has(subgroup)) base.delete(subgroup);
      else base.add(subgroup);
      return base;
    });

  const renderLink = (i) => (
    <Link
      key={i.to}
      className={clsx("pb-nav-link", norm(i.to) === here && "active")}
      to={i.to}
      title={i.summary}
    >
      {i.label}
    </Link>
  );

  const renderSubgroup = (sub) => {
    const open = isSubOpen(sub.subgroup);
    return (
      <div
        className={clsx("pb-nav-subgroup", open && "is-open")}
        key={`sub:${sub.subgroup}`}
      >
        <button
          type="button"
          className="pb-nav-sublabel"
          aria-expanded={open}
          onClick={() => toggleSub(sub.subgroup)}
        >
          <span>{sub.label}</span>
        </button>
        <div className="pb-nav-subitems">
          <div className="pb-nav-group-items-inner">
            {sub.items.map(renderLink)}
          </div>
        </div>
      </div>
    );
  };

  const renderItems = (items) =>
    items.map((i) => (i.items ? renderSubgroup(i) : renderLink(i)));

  return (
    <aside
      className="pb-rail"
      ref={railRef}
      onScroll={(e) => {
        guideRailScroll = e.currentTarget.scrollTop;
      }}
    >
      <input
        className="pb-filter"
        type="search"
        placeholder="Filter pages..."
        aria-label="Filter guide pages"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <nav aria-label="Developer guide">
        {groups.length === 0 && <div className="pb-nav-empty">No matches.</div>}
        {groups.map((g, gi) => {
          const key = groupKey(g, gi);

          // Groups without a heading (top-level links) are always shown.
          if (!g.label) {
            return (
              <div className="pb-nav-group" key={key}>
                {renderItems(g.items)}
              </div>
            );
          }

          const open = isSectionOpen(key);
          return (
            <div
              className={clsx(
                "pb-nav-group",
                "is-collapsible",
                open && "is-open"
              )}
              key={key}
            >
              <button
                type="button"
                className="pb-nav-label"
                aria-expanded={open}
                onClick={() => toggleSection(key)}
              >
                <span>{g.label}</span>
                <Caret />
              </button>
              <div className="pb-nav-group-items">
                <div className="pb-nav-group-items-inner">
                  {renderItems(g.items)}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
