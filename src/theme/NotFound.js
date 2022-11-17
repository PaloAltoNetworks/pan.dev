import React, { useEffect, useState } from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import algoliaSearch from "algoliasearch/lite";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function NotFound() {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    algolia: { appId, apiKey, indexName, externalUrlRegex },
  } = themeConfig;

  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation().pathname.split("/").join(" ");

  const client = algoliaSearch(appId, apiKey);
  const index = client.initIndex(indexName);

  useEffect(() => {
    async function getResults() {
      const results = await Promise.resolve(
        index.search(location, {
          hitsPerPage: 5,
          facetFilters: [["tags:pandev"]],
        })
      );
      setSearchResults(results.hits);
    }

    getResults();
  }, []);

  return (
    <>
      <PageMetadata title="Page Not Found" />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h1 className="hero__title">
                Sorry, we have a broken link or this URL doesn't exist.
              </h1>
              <h4>Our team has been notified of this error.</h4>
            </div>
          </div>
          {searchResults.length > 0 && (
            <div>
              <div className="row">
                <div className="col col--8 col--offset-2">
                  <h2>Here are some suggested pages to visit: </h2>
                  {searchResults.map((result) => (
                    <div className="row" key={result.objectID}>
                      <div className="result">
                        <a href={result.url}>
                          {result.hierarchy.lvl0}
                          {" > "}
                          {result.hierarchy.lvl1 ??
                            result.hierarchy.lvl2 ??
                            result.herarchy.lvl3 ??
                            result.hierarchy.lvl4}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="row">
                <div className="col col--8 col--offset-2 padding-top--lg">
                  <h3>
                    or{" "}
                    <Link
                      uppercase="false"
                      href={useBaseUrl("/#developer-docs-section")}
                    >
                      {" "}
                      Explore all of our developer docs{" "}
                    </Link>{" "}
                    to find what you're looking for.
                  </h3>
                </div>
              </div>
            </div>
          )}
          {searchResults.length < 1 && (
            <div className="row">
              <div className="col col--8 col--offset-2 padding-top--lg">
                <h3>
                  <Link
                    uppercase="false"
                    href={useBaseUrl("/#developer-docs-section")}
                  >
                    {" "}
                    Explore all of our developer docs{" "}
                  </Link>{" "}
                  to find what you're looking for.
                </h3>
              </div>
            </div>
          )}
        </main>
      </Layout>
    </>
  );
}
