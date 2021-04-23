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
                  <div className={styles.heroLogo}>
                    <img src="/img/PANW_Parent_Brand_Peelable_RGB_Red.svg" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className={classnames("col col--12")}>
                  <h1 className={styles.heroProjectTagline}>
                    The hub of{" "}
                    <span className={styles.heroProjectKeywords}>
                      {" "}
                      developer docs{" "}
                    </span>{" "}
                    for{" "}
                    <span className={styles.heroProjectKeywords}>
                      Palo Alto Networks.
                    </span>
                  </h1>
                </div>
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
