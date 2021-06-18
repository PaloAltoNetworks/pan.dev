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
import styles from "./styles.module.css";
import SearchBar from "../theme/SearchBar";

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
      <header className={classnames("hero hero--dark", styles.heroBanner)}>
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.heroInner}>
              <div className="row">
                <div className={classnames("col col--12")}>
                  <h1 className={styles.heroProjectTagline}>
                    The home of{" "}
                    <span className={styles.heroProjectKeywords}>
                      {" "}
                      Palo Alto Networks{" "}
                    </span>{" "}
                    Developers
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className={classnames("col col--12")}>
                  <h4 className={styles.heroProjectTagline}>
                    What{" "}
                    <span className={styles.heroProjectKeywords}>
                      {" "}
                      developer docs{" "}
                    </span>{" "}
                    can we help you find?{" "}
                  </h4>
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
            <Featured />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
