import { useState, useEffect } from "react";

export default function TOCNav() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".pb-doc h2"));
    const items = els
      .map((el) => ({
        id: el.id,
        text: el.textContent.replace(/\u200B/g, "").trim(),
        level: el.tagName,
      }))
      .filter((h) => h.id);

    setHeadings(items);

    if (items.length < 2) return;

    const OFFSET = 120; // px below viewport top to trigger activation

    const onScroll = () => {
      // When the user has scrolled to (or near) the bottom, always activate
      // the last heading so it can actually be highlighted.
      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        setActiveId(items[items.length - 1].id);
        return;
      }

      // Otherwise find the last heading whose top edge has passed OFFSET.
      const scrollY = window.scrollY + OFFSET;
      let current = items[0].id;
      for (const h of items) {
        const el = document.getElementById(h.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= scrollY) {
          current = h.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial state on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (headings.length < 2) return null;

  return (
    <nav className="pb-toc" aria-label="On this page">
      <p className="pb-toc-title">On This Page</p>
      <ul className="pb-toc-list">
        {headings.map((h) => (
          <li
            key={h.id}
            className={[
              "pb-toc-item",
              `pb-toc-${h.level.toLowerCase()}`,
              activeId === h.id ? "pb-toc-item--active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
