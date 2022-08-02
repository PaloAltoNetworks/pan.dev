import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function DocSidebarVersionDropdown({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}) {
  const { siteConfig } = useDocusaurusContext();
  const api_sidebar = item.customProps.version;
  const api_versions = siteConfig.customFields[api_sidebar];

  // Mobile sidebar not visible on hydration: can avoid SSR rendering

  return (
    <div
      className="menu__list-item dropdown dropdown--right dropdown--hoverable button button--block button--secondary"
      style={{
        padding: "-.5rem 0 0 0",
        height: "40px",
        position: "sticky",
        top: "-.5rem",
        zIndex: "200",
        marginBottom: "0",
        borderRadius: "0",
        backgroundColor: "var(--ifm-font-color-base)",
      }}
    >
      <a
        className="menu__link"
        style={{
          color: "var(--ifm-color-emphasis-0)",
        }}
      >
        Select API Version: &ensp;
        <b>{item.label} ▼</b>
      </a>
      <ul className="dropdown__menu">
        {api_versions.map((Ver, i) => (
          <li key={i}>
            <Link
              className={
                "dropdown__link " +
                (item.label === Ver.version ? "dropdown__link--active" : "")
              }
              to={Ver.to}
            >
              {Ver.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
