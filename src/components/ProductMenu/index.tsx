import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import IconExternalLink from "@theme/Icon/ExternalLink";

import {
  MENU_GROUPS,
  type MenuGroup,
  type MenuLink,
  type MenuProduct,
} from "@site/src/data/products";
import styles from "./styles.module.css";

const trimSlash = (path: string) => path.replace(/\/+$/, "");
const isInternal = (to: string) => to.startsWith("/");

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Hands a query to the navbar's Algolia modal instead of the /search page.
 * The modal mounts lazily on first open, so the input is polled for rather
 * than read straight after the click. Returns false when DocSearch is not on
 * the page, which leaves the caller's /search link to handle it.
 */
function openSiteSearch(query: string): boolean {
  const button = document.querySelector<HTMLButtonElement>(".DocSearch-Button");
  if (!button) {
    return false;
  }
  // The drawer marks the page inert while open, and the button lives inside it.
  document.getElementById("__docusaurus")?.removeAttribute("inert");
  button.click();

  const deadline = Date.now() + 2000;
  const seed = () => {
    const input = document.querySelector<HTMLInputElement>(".DocSearch-Input");
    if (!input) {
      if (Date.now() < deadline) {
        window.requestAnimationFrame(seed);
      } else {
        // The modal never mounted its input in time; fall back to the search
        // page rather than leaving the user in an empty modal with a lost term.
        window.location.assign(`/search?q=${encodeURIComponent(query)}`);
      }
      return;
    }
    // React tracks the input's value, so assigning through the native setter
    // is what makes it register the change.
    Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    )?.set?.call(input, query);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus();
  };
  window.requestAnimationFrame(seed);
  return true;
}

/**
 * Most products repeat their landing page as the first guide. Showing both
 * would duplicate the row, and showing a generic "Overview" would throw away
 * the descriptive label the duplicate carries.
 */
function productLinks(product: MenuProduct): {
  overviewLabel: string;
  docs: MenuLink[];
  apiDocs: MenuLink[];
} {
  const overview = trimSlash(product.overview);
  const sameTarget = (link: MenuLink) => trimSlash(link.to) === overview;
  const duplicate = [...product.docs, ...product.apiDocs].find(sameTarget);
  return {
    overviewLabel: duplicate?.label ?? "Overview",
    docs: product.docs.filter((l) => !sameTarget(l)),
    apiDocs: product.apiDocs.filter((l) => !sameTarget(l)),
  };
}

/** Searches the group and product names plus every link label beneath them. */
function searchGroups(query: string): MenuGroup[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    return MENU_GROUPS;
  }
  return MENU_GROUPS.map((group) => ({
    ...group,
    products: group.products.filter((product) =>
      [
        product.label,
        group.label,
        ...product.docs.map((l) => l.label),
        ...product.apiDocs.map((l) => l.label),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    ),
  })).filter((group) => group.products.length > 0);
}

/** The product owning the longest internal path that prefixes the route. */
function productForPath(pathname: string): string | null {
  const here = trimSlash(pathname) || "/";
  let best: { label: string; length: number } | null = null;
  for (const group of MENU_GROUPS) {
    for (const product of group.products) {
      for (const to of [
        product.overview,
        ...product.docs.map((l) => l.to),
        ...product.apiDocs.map((l) => l.to),
      ]) {
        if (!isInternal(to)) {
          continue;
        }
        const base = trimSlash(to);
        if (base && (here === base || here.startsWith(`${base}/`))) {
          if (!best || base.length > best.length) {
            best = { label: product.label, length: base.length };
          }
        }
      }
    }
  }
  return best?.label ?? null;
}

function MenuAnchor({
  to,
  external,
  className,
  children,
  onClick,
  tabIndex,
}: {
  to: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  tabIndex?: number;
}): JSX.Element {
  if (external) {
    return (
      <a
        className={className}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        tabIndex={tabIndex}
      >
        {children}
        <span aria-hidden="true" className={styles.externalIcon}>
          <IconExternalLink />
        </span>
        <span className={styles.srOnly}>(opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link className={className} to={to} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </Link>
  );
}

function LinkSection({
  title,
  links,
  linkClassName,
  titleClassName,
  onNavigate,
}: {
  title: string;
  links: MenuLink[];
  linkClassName: string;
  titleClassName: string;
  onNavigate?: () => void;
}): JSX.Element | null {
  if (links.length === 0) {
    return null;
  }
  return (
    <>
      <p className={titleClassName}>{title}</p>
      <ul className={styles.linkList}>
        {links.map((link) => (
          <li key={`${link.label}:${link.to}`}>
            <MenuAnchor
              className={linkClassName}
              to={link.to}
              external={link.external}
              onClick={onNavigate}
            >
              {link.label}
            </MenuAnchor>
          </li>
        ))}
      </ul>
    </>
  );
}

function ProductSubmenu({
  product,
  submenuId,
  onNavigate,
  onMouseEnter,
  onKeyDown,
}: {
  product: MenuProduct;
  submenuId: string;
  onNavigate: () => void;
  onMouseEnter?: () => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}): JSX.Element {
  const { overviewLabel, docs, apiDocs } = productLinks(product);
  return (
    <div
      className={styles.submenu}
      id={submenuId}
      onMouseEnter={onMouseEnter}
      onKeyDown={onKeyDown}
    >
      <p className={styles.submenuTitle}>{product.label}</p>
      <ul className={styles.linkList}>
        <li>
          <MenuAnchor
            className={styles.link}
            to={product.overview}
            external={product.overviewExternal}
            onClick={onNavigate}
          >
            {overviewLabel}
          </MenuAnchor>
        </li>
      </ul>
      <LinkSection
        title="Developer guides"
        links={docs}
        linkClassName={styles.link}
        titleClassName={styles.sectionTitle}
        onNavigate={onNavigate}
      />
      <LinkSection
        title="API reference"
        links={apiDocs}
        linkClassName={styles.link}
        titleClassName={styles.sectionTitle}
        onNavigate={onNavigate}
      />
    </div>
  );
}

function ProductMenuDesktop(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const drawerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef(new Map<string, HTMLButtonElement>());
  const [moreBelow, setMoreBelow] = useState(false);
  const { pathname } = useLocation();

  const groups = useMemo(() => searchGroups(query), [query]);
  const visible = useMemo(
    () => groups.flatMap((g) => g.products.map((p) => p.label)),
    [groups]
  );
  const currentProduct = useMemo(() => productForPath(pathname), [pathname]);
  const active = groups
    .flatMap((g) => g.products)
    .find((p) => p.label === activeProduct);

  // Roving tabindex: exactly one product row is in the tab sequence.
  const rovedProduct = activeProduct ?? visible[0] ?? null;

  const close = useCallback(() => {
    setOpen(false);
    setActiveProduct(null);
    setQuery("");
  }, []);

  const closeAndRefocus = useCallback(() => {
    close();
    // The trigger sits inside the inert subtree, so focus only lands after the
    // cleanup below has removed the attribute.
    window.requestAnimationFrame(() => buttonRef.current?.focus());
  }, [close]);

  useEffect(() => {
    setOpen(false);
    setActiveProduct(null);
    setQuery("");
  }, [pathname]);

  const focusRow = useCallback((label: string) => {
    setActiveProduct(label);
    window.requestAnimationFrame(() => rowRefs.current.get(label)?.focus());
  }, []);

  const moveRow = useCallback(
    (from: string, delta: number) => {
      const i = visible.indexOf(from);
      if (i === -1) {
        // The row was filtered out from under us; nothing to move relative to.
        return;
      }
      const next = visible[(i + delta + visible.length) % visible.length];
      focusRow(next);
    },
    [visible, focusRow]
  );

  // Set when a keyboard action asks to move focus into a submenu. The focus can
  // only happen after the submenu has rendered, so it is deferred to the effect
  // below rather than guessed at with a single animation frame.
  const enterOnRender = useRef<string | null>(null);

  const enterSubmenu = useCallback((label: string) => {
    enterOnRender.current = label;
    setActiveProduct(label);
  }, []);

  useEffect(() => {
    const label = enterOnRender.current;
    if (!label || activeProduct !== label) {
      return;
    }
    enterOnRender.current = null;
    const panel = drawerRef.current?.querySelector<HTMLElement>(
      `#${submenuIdFor(label)} a`
    );
    panel?.focus();
  }, [activeProduct]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    searchRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const page = document.getElementById("__docusaurus");
    page?.setAttribute("inert", "");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAndRefocus();
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }
      // Keep focus inside the dialog, which aria-modal already promises.
      // The tabIndex test is what drops the roving rows: the selector's button
      // clause matches them even though tabindex="-1" makes them untabbable.
      const items = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.tabIndex >= 0 && el.offsetParent !== null);
      if (items.length === 0) {
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      page?.removeAttribute("inert");
    };
  }, [open, closeAndRefocus]);

  // Drop the open submenu when the filter no longer lists that product.
  useEffect(() => {
    if (activeProduct && !visible.includes(activeProduct)) {
      setActiveProduct(null);
    }
  }, [visible, activeProduct]);

  // Whether anything sits below the fold, which drives the bottom fade. The
  // list scrolls on every viewport under about 1080px tall.
  const measureOverflow = useCallback(() => {
    const el = scrollerRef.current;
    setMoreBelow(
      el ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : false
    );
  }, []);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    measureOverflow();
    window.addEventListener("resize", measureOverflow);
    return () => window.removeEventListener("resize", measureOverflow);
  }, [open, groups, measureOverflow]);

  const openDrawer = () => {
    setActiveProduct(currentProduct);
    setOpen(true);
  };

  return (
    <div className={styles.root}>
      <button
        type="button"
        ref={buttonRef}
        className={clsx(styles.trigger, open && styles.triggerOpen)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Browse developer docs"
        title="Browse developer docs"
        onClick={() => (open ? closeAndRefocus() : openDrawer())}
      >
        <span className={styles.triggerIcon} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {open &&
        createPortal(
          <div
            className={styles.overlay}
            onMouseDown={(event) => {
              if (!drawerRef.current?.contains(event.target as Node)) {
                closeAndRefocus();
              }
            }}
          >
            <div
              className={clsx(styles.drawer, active && styles.drawerWide)}
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Developer docs"
            >
              <div className={styles.listPane}>
                <div className={styles.drawerHeader}>
                  <input
                    ref={searchRef}
                    className={styles.search}
                    type="text"
                    value={query}
                    placeholder="Filter products"
                    aria-label="Filter products"
                    autoComplete="off"
                    spellCheck={false}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <button
                    type="button"
                    className={styles.closeButton}
                    aria-label="Close menu"
                    title="Close menu"
                    onClick={closeAndRefocus}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 4l8 8M12 4l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={styles.scroller}
                  ref={scrollerRef}
                  onScroll={measureOverflow}
                >
                  <p className={styles.srOnly} role="status">
                    {query.trim()
                      ? `${visible.length} products match`
                      : `${visible.length} products`}
                  </p>

                  {groups.length === 0 ? (
                    <p className={styles.noResults}>
                      No products match {`"${query.trim()}"`}.
                    </p>
                  ) : (
                    <nav className={styles.groups} aria-label="Products">
                      {groups.map((group) => (
                        <div className={styles.group} key={group.label}>
                          <h2 className={styles.groupTitle}>{group.label}</h2>
                          <ul className={styles.productList}>
                            {group.products.map((product) => {
                              const isActive = activeProduct === product.label;
                              const isCurrent =
                                currentProduct === product.label;
                              const submenuId = submenuIdFor(product.label);
                              return (
                                <li
                                  className={clsx(
                                    styles.productItem,
                                    isActive && styles.productItemActive,
                                    isCurrent && styles.productItemCurrent
                                  )}
                                  key={product.label}
                                  onMouseEnter={() =>
                                    setActiveProduct(product.label)
                                  }
                                >
                                  <button
                                    type="button"
                                    ref={(el) => {
                                      if (el) {
                                        rowRefs.current.set(product.label, el);
                                      } else {
                                        rowRefs.current.delete(product.label);
                                      }
                                    }}
                                    className={styles.product}
                                    aria-expanded={isActive}
                                    aria-controls={
                                      isActive ? submenuId : undefined
                                    }
                                    aria-current={
                                      isCurrent ? "true" : undefined
                                    }
                                    tabIndex={
                                      rovedProduct === product.label ? 0 : -1
                                    }
                                    onFocus={() =>
                                      setActiveProduct(product.label)
                                    }
                                    onClick={() =>
                                      setActiveProduct(
                                        isActive ? null : product.label
                                      )
                                    }
                                    onKeyDown={(event) => {
                                      const k = event.key;
                                      if (k === "ArrowDown") {
                                        event.preventDefault();
                                        moveRow(product.label, 1);
                                      } else if (k === "ArrowUp") {
                                        event.preventDefault();
                                        moveRow(product.label, -1);
                                      } else if (k === "Home") {
                                        event.preventDefault();
                                        focusRow(visible[0]);
                                      } else if (k === "End") {
                                        event.preventDefault();
                                        focusRow(visible[visible.length - 1]);
                                      } else if (
                                        k === "ArrowRight" ||
                                        k === "Enter" ||
                                        k === " "
                                      ) {
                                        // preventDefault stops Enter and Space
                                        // from firing onClick, which would
                                        // close the submenu being entered.
                                        event.preventDefault();
                                        enterSubmenu(product.label);
                                      }
                                    }}
                                  >
                                    {product.label}
                                    <span
                                      className={styles.caret}
                                      aria-hidden="true"
                                    />
                                  </button>

                                  {isActive && (
                                    <ProductSubmenu
                                      product={product}
                                      submenuId={submenuId}
                                      onNavigate={close}
                                      onKeyDown={(event) => {
                                        if (event.key === "ArrowLeft") {
                                          event.preventDefault();
                                          focusRow(product.label);
                                        }
                                      }}
                                    />
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </nav>
                  )}

                  {query.trim() && (
                    <Link
                      className={styles.searchAll}
                      to={`/search?q=${encodeURIComponent(query.trim())}`}
                      onClick={(event) => {
                        // Modified clicks keep the plain /search navigation so
                        // the result page can still be opened in a new tab.
                        if (
                          event.metaKey ||
                          event.ctrlKey ||
                          event.shiftKey ||
                          event.altKey
                        ) {
                          close();
                          return;
                        }
                        const term = query.trim();
                        close();
                        window.requestAnimationFrame(() => {
                          if (!openSiteSearch(term)) {
                            window.location.assign(
                              `/search?q=${encodeURIComponent(term)}`
                            );
                          }
                        });
                        event.preventDefault();
                      }}
                    >
                      Search all docs for {`"${query.trim()}"`}
                    </Link>
                  )}
                </div>
                {moreBelow && (
                  <div className={styles.scrollFade} aria-hidden="true" />
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

function submenuIdFor(label: string): string {
  return `product-submenu-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function ProductMenuMobile(): JSX.Element {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const groups = useMemo(() => searchGroups(query), [query]);

  return (
    <>
      <li className="menu__list-item">
        <input
          className={styles.mobileSearch}
          type="text"
          value={query}
          placeholder="Filter products"
          aria-label="Filter products"
          autoComplete="off"
          spellCheck={false}
          onChange={(event) => setQuery(event.target.value)}
        />
      </li>
      {groups.length === 0 && (
        <li className="menu__list-item">
          <p className={styles.noResults}>
            No products match {`"${query.trim()}"`}.
          </p>
        </li>
      )}
      {groups.map((group) => (
        <li className="menu__list-item" key={group.label}>
          <h2 className={styles.mobileGroupTitle}>{group.label}</h2>
          <ul className="menu__list">
            {group.products.map((product) => {
              const isOpen = expanded === product.label;
              const { overviewLabel, docs, apiDocs } = productLinks(product);
              return (
                <li className="menu__list-item" key={product.label}>
                  <button
                    type="button"
                    className={clsx(
                      "menu__link menu__link--sublist",
                      styles.mobileProduct
                    )}
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : product.label)}
                  >
                    {product.label}
                  </button>
                  {isOpen && (
                    <ul className="menu__list">
                      <li className="menu__list-item">
                        <MenuAnchor
                          className="menu__link"
                          to={product.overview}
                          external={product.overviewExternal}
                        >
                          {overviewLabel}
                        </MenuAnchor>
                      </li>
                      <LinkSection
                        title="Developer guides"
                        links={docs}
                        linkClassName="menu__link"
                        titleClassName={styles.mobileSectionTitle}
                      />
                      <LinkSection
                        title="API reference"
                        links={apiDocs}
                        linkClassName="menu__link"
                        titleClassName={styles.mobileSectionTitle}
                      />
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </li>
      ))}
      {query.trim() && (
        <li className="menu__list-item">
          <Link
            className="menu__link"
            to={`/search?q=${encodeURIComponent(query.trim())}`}
          >
            Search all docs for {`"${query.trim()}"`}
          </Link>
        </li>
      )}
    </>
  );
}

export default function ProductMenu({
  mobile = false,
}: {
  mobile?: boolean;
}): JSX.Element {
  return mobile ? <ProductMenuMobile /> : <ProductMenuDesktop />;
}
