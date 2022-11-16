import React from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import SearchBar from "@theme/SearchBar";

export default function NotFound() {
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
              <p>Our team has been notified of this error.</p>
              <h3>
                Use the search bar below or{" "}
                <a href="https://pan.dev/#developer-docs-section">
                  {" "}
                  explore our developer docs{" "}
                </a>{" "}
                to find what you're looking for.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col col--2 col--offset-5 padding-bottom--lg padding-top-md">
              <SearchBar />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
