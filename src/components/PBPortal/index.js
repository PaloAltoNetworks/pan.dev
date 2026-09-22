import React from "react";
import Layout from "@theme/Layout";
import { useLocation } from "@docusaurus/router";
import { PBPrevNext } from "./PrevNext";
import { PBRailNav } from "./RailNav";
import { GuideAiMenu } from "./GuideLlmDownload";
import TOCNav from "./TOCNav";
import "./pb-portal.scss";

export default function PBPortal({
  surface,
  title,
  description,
  heading,
  sidebar,
  children,
}) {
  const { pathname } = useLocation();
  const isGuide = surface === "guide";
  const withRail = isGuide || Boolean(sidebar);

  // The surface switcher and data-pab-theme sync now live in the swizzled
  // Navbar (src/theme/Navbar), so the navbar + switcher share one sticky
  // container across every Prisma Browser surface.

  return (
    <Layout title={title} description={description}>
      <div className="pb-portal" data-surface={surface}>
        {withRail ? (
          <div className={`pb-shell${isGuide ? " pb-shell--with-toc" : ""}`}>
            {isGuide ? <PBRailNav pathname={pathname} /> : sidebar}
            <main className="pb-main">
              {isGuide ? (
                <>
                  <article className="pb-doc markdown">
                    {heading && (
                      <div className="pb-doc-header">
                        <h1 className="pb-doc-h1">{heading}</h1>
                        <GuideAiMenu pathname={pathname} />
                      </div>
                    )}
                    {children}
                  </article>
                  <PBPrevNext pathname={pathname} />
                </>
              ) : (
                children
              )}
            </main>
            {isGuide && <TOCNav />}
          </div>
        ) : (
          <main className="pb-wide">{children}</main>
        )}
      </div>
    </Layout>
  );
}
