/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import SearchBar from "@theme/SearchBar";
import classnames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import Toggle from "react-toggle";
import styles from "./styles.module.css";

function NavLink(props) {
  const toUrl = useBaseUrl(props.to);
  return (
    <Link
      className="navbar__item navbar__link"
      {...props}
      {...(props.href
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            href: props.href
          }
        : {
            activeClassName: "navbar__link--active",
            to: toUrl
          })}
    >
      {props.label}
    </Link>
  );
}

function NavMenu(props) {
  return (
    <div className="navbar__item dropdown dropdown--hoverable">
      <a class="navbar__link" href="#">
        {props.label} &#9662;
      </a>
      <ul class="dropdown__menu">
        {props.items.map((linkItem, i) => (
          <li>
            <NavLink {...linkItem} key={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

//const Moon = () => <span className={classnames(styles.toggle, styles.moon)} />;
//const Sun = () => <span className={classnames(styles.toggle, styles.sun)} />;
const Moon = () => (
  <span>
    <img src="/img/tp.png" />
  </span>
);
const Sun = () => (
  <span>
    <img src="/img/devin.png" />
  </span>
);

function Navbar() {
  const context = useDocusaurusContext();
  const [sidebarShown, setSidebarShown] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const currentTheme =
    typeof document !== "undefined"
      ? document.querySelector("html").getAttribute("data-theme")
      : "";
  const [theme, setTheme] = useState(currentTheme);
  const { siteConfig = {} } = context;
  const { baseUrl, themeConfig = {} } = siteConfig;
  const { algolia, navbar = {} } = themeConfig;
  const { title, logo = {}, links = [], menus = [] } = navbar;

  const showSidebar = useCallback(() => {
    setSidebarShown(true);
  }, [setSidebarShown]);
  const hideSidebar = useCallback(() => {
    setSidebarShown(false);
  }, [setSidebarShown]);

  useEffect(() => {
    try {
      const localStorageTheme = localStorage.getItem("theme");
      setTheme(localStorageTheme);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onToggleChange = e => {
    const nextTheme = e.target.checked ? "dark" : "";
    setTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (err) {
      console.error(err);
    }
  };

  const logoUrl = useBaseUrl(logo.src);
  return (
    <React.Fragment>
      <Head>
        {/* TODO: Do not assume that it is in english language */}
        <html lang="en" data-theme={theme} />
      </Head>
      <nav
        className={classnames("navbar", "navbar--light", "navbar--fixed-top", {
          "navbar--sidebar-show": sidebarShown
        })}
      >
        <div className="navbar__inner">
          <div className="navbar__items">
            <div
              aria-label="Navigation bar toggle"
              className="navbar__toggle"
              role="button"
              tabIndex={0}
              onClick={showSidebar}
              onKeyDown={showSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                role="img"
                focusable="false"
              >
                <title>Menu</title>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </div>
            <Link className="navbar__brand" to={baseUrl}>
              {logo != null && (
                <img className="navbar__logo" src={logoUrl} alt={logo.alt} />
              )}
              {title != null && (
                <strong
                  className={isSearchBarExpanded ? styles.hideLogoText : ""}
                >
                  {title}
                </strong>
              )}
            </Link>
            {menus
              .filter(menuItem => menuItem.position !== "right")
              .map((menuItem, i) => (
                <NavMenu {...menuItem} key={i} />
              ))}
            {links
              .filter(linkItem => linkItem.position !== "right")
              .map((linkItem, i) => (
                <NavLink {...linkItem} key={i} />
              ))}
          </div>
          <div className="navbar__items navbar__items--right">
            {menus
              .filter(menuItem => menuItem.position === "right")
              .map((menuItem, i) => (
                <NavMenu {...menuItem} key={i} />
              ))}
            {links
              .filter(linkItem => linkItem.position === "right")
              .map((linkItem, i) => (
                <NavLink {...linkItem} key={i} />
              ))}
            <Toggle
              className={styles.displayOnlyInLargeViewport}
              aria-label="Dark mode toggle"
              checked={theme === "dark"}
              onChange={onToggleChange}
              icons={{
                checked: <Moon />,
                unchecked: <Sun />
              }}
            />
            {algolia && (
              <div className="navbar__search" key="search-box">
                <SearchBar
                  handleSearchBarToggle={setIsSearchBarExpanded}
                  isSearchBarExpanded={isSearchBarExpanded}
                />
              </div>
            )}
          </div>
        </div>
        <div
          role="presentation"
          className="navbar__sidebar__backdrop"
          onClick={() => {
            setSidebarShown(false);
          }}
        />
        <div className="navbar__sidebar">
          <div className="navbar__sidebar__brand">
            <Link className="navbar__brand" onClick={hideSidebar} to={baseUrl}>
              {logo != null && (
                <img className="navbar__logo" src={logoUrl} alt={logo.alt} />
              )}
              {title != null && <strong>{title}</strong>}
            </Link>
            {sidebarShown && (
              <Toggle
                aria-label="Dark mode toggle in sidebar"
                checked={theme === "dark"}
                onChange={onToggleChange}
                icons={{
                  checked: <Moon />,
                  unchecked: <Sun />
                }}
              />
            )}
          </div>
          <div className="navbar__sidebar__items">
            <div className="menu">
              <ul className="menu__list">
                {menus.map((menuItem, i) => (
                  <li className="menu__list-item" key={i}>
                    <a className="menu__link menu__link--sublist">
                      {menuItem.label}
                    </a>
                    <ul class="menu__list">
                      {menuItem.items.map((item, i) => (
                        <li class="menu__list-item">
                          <a
                            class="menu__link"
                            key={i}
                            href={item.to}
                            activeClassName="navbar__link--active"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                {links.map((linkItem, i) => (
                  <li className="menu__list-item" key={i}>
                    <NavLink
                      className="menu__link"
                      {...linkItem}
                      onClick={hideSidebar}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
