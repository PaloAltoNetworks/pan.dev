/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import classnames from "classnames";
import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import Featured from "../components/Featured";
import Medium from "../components/Medium";
import SearchBar from "../theme/SearchBar";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="The hub for Palo Alto Networks developer documentation, including API reference docs, quickstarts, tutorials, tools and open-source projects."
      wrapperClassName="homepage"
    >
      <ScrollUpButton />
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.heroInner}>
              <div className="row">
                <div className={classnames("col col--12")}>
                  <h1 className={styles.heroProjectTagline}>
                    What{" "}
                    <span className={styles.heroProjectKeywords}>
                      {" "}
                      developer docs{" "}
                    </span>{" "}
                    can we help you find?{" "}
                  </h1>
                </div>
              </div>
              <div className="row">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="featuredContainer">
          <div className="container">
            <h1 className={styles.heroProjectTaglineDark}>
              Explore our Developer Docs Sites
            </h1>
            <Featured />
          </div>
        </section>
      </main>
      <main>
        <section>
          <Medium></Medium>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
