import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { PORTAL_TABS, SPEC_URL } from "./portalConfig";

export default function Switcher({ surface }) {
  const logo = useBaseUrl("/img/prisma-browser-logo.png");
  const spec = useBaseUrl(SPEC_URL);
  return (
    <div className="pb-switcher">
      <div className="pb-switcher-inner">
        <Link className="pb-switcher-brand" to="/prisma-browser">
          <img className="pb-mark" src={logo} alt="Prisma Browser" />
        </Link>
        <span className="pb-switcher-sep" aria-hidden="true" />
        <nav className="pb-switcher-links" aria-label="Prisma Browser sections">
          {PORTAL_TABS.map((it) =>
            it.comingSoon ? (
              <span
                key={it.label}
                className="pb-tab pb-tab--soon"
                aria-disabled="true"
                title="Coming soon"
              >
                {it.label}
                <span className="pb-soon-pill">Coming soon</span>
              </span>
            ) : it.external ? (
              <a
                key={it.label}
                className="pb-tab"
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {it.label} &#8599;
              </a>
            ) : (
              <Link
                key={it.label}
                className={clsx("pb-tab", surface === it.surface && "active")}
                to={it.to}
              >
                {it.label}
              </Link>
            )
          )}
        </nav>
        <span className="pb-switcher-spacer" />
        {surface === "api" && (
          <a
            className="pb-bar-btn primary pb-bar-cta"
            href={spec}
            download=""
            title="Download the OpenAPI spec"
          >
            Download spec &darr;
          </a>
        )}
      </div>
    </div>
  );
}
