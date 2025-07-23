import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import SearchBar from "@theme/SearchBar";
import algoliaSearch from "algoliasearch/lite";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { PageMetadata } from "@docusaurus/theme-common";
import { useLocation } from "@docusaurus/router";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import TurndownService from "turndown";

export default function NotFound() {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    algolia: { appId, apiKey, indexName, externalUrlRegex },
  } = themeConfig;

  const [searchResults, setSearchResults] = useState([]);
  const [markdown, setMarkdown] = useState(null);
  const isMdPath =
    ExecutionEnvironment.canUseDOM && window.location.pathname.endsWith(".md");
  const location = useLocation().pathname.split("/").join(" ");

  const client = algoliaSearch(appId, apiKey);
  const index = client.initIndex(indexName);

  useEffect(() => {
    if (isMdPath) {
      const htmlPath = window.location.pathname.replace(/\.md$/, "");
      fetch(htmlPath)
        .then((res) => res.text())
        .then((html) => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          const container =
            doc.querySelector(".openapi-left-panel__container") ||
            doc.querySelector(".theme-doc-markdown");
          if (!container) return;
          const turndown = new TurndownService();
          setMarkdown(turndown.turndown(container.innerHTML));
        })
        .catch(() => {});
      return;
    }

    async function getResults() {
      const results = await Promise.resolve(
        index.search(location, {
          distinct: 1,
          hitsPerPage: 5,
          facetFilters: [["tags:pandev"]],
        })
      );
      setSearchResults(results.hits);
    }

    getResults();
  }, []);

  if (isMdPath) {
    return (
      <>
        <PageMetadata title="Raw Markdown" />
        <pre
          style={{
            fontFamily: "monospace",
            whiteSpace: "pre-wrap",
            margin: "1rem",
          }}
        >
          {markdown ?? ""}
        </pre>
      </>
    );
  }

  return (
    <>
      <PageMetadata title="Page Not Found" />
      <Layout>
        <main>
          <div className="container hero-container">
            <div
              className="hero-content-container"
              style={{ paddingBottom: "1rem" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col col--4">
                    <img src="/img/404_Page.svg" alt="Page not found" />
                  </div>
                  <div className="col col--8">
                    <h1 className="hero__title">
                      Sorry, we have a broken link or this URL doesn't exist.
                    </h1>
                    <p className="hero__subtitle">
                      Our team has been notified of this error.
                    </p>
                    <h3 className="padding-vert--md">
                      <Link
                        uppercase="false"
                        href={useBaseUrl("/#developer-docs-section")}
                      >
                        EXPLORE OUR DEVELOPER DOCS
                      </Link>{" "}
                      or use our{" "}
                      <span
                        className="dummy-search"
                        style={{
                          display: "inline-block",
                        }}
                      >
                        <SearchBar />
                      </span>{" "}
                      to find what you're looking for.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {searchResults.length > 0 && (
            <div className="padding-vert--lg padding--lg">
              <hr />
              <div className="row">
                <div className="col col--12 col--offset-1">
                  <h2>
                    We found some pages that might match what you're looking
                    for:{" "}
                  </h2>
                  {searchResults.map((result) => (
                    <div className="row" key={result.objectID}>
                      <div className="result">
                        <a href={result.url}>
                          {result.hierarchy.lvl0}
                          {" > "}
                          {result.hierarchy.lvl1 ??
                            result.hierarchy.lvl2 ??
                            result.hierarchy.lvl3 ??
                            result.hierarchy.lvl4}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="padding-vert--lg padding--lg">
            <div className="row">
              <div className="col col--12 col--offset-1">
                <h2>Still not finding what you're looking for?</h2>
                <p>
                  Visit our{" "}
                  <a href="https://docs.paloaltonetworks.com">TechDocs</a> site
                  for additional API and product documentation.{" "}
                </p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
