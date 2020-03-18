/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import classnames from "classnames";
import React, { useRef } from "react";
import ScrollUpButton from "react-scroll-up-button";
import styles from "./styles.module.css";


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth" });
  const vertificalsRef = useRef(null);
  const toolsRef = useRef(null);
  const scrollToVerticals = () => scrollToRef(vertificalsRef);
  const scrollToTools = () => scrollToRef(toolsRef);
  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="Palo Alto Networks for Developers"
    >
      <ScrollUpButton />
      <header className={classnames("hero hero--primary heroTilted", styles.heroBanner)}>
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.heroInner}>
              <h1 className={styles.heroProjectTagline}>
                <img
                  alt="Devin the Developer Advocate"
                  className={styles.heroLogo}
                  src={useBaseUrl("img/dev-wave.png")}
                />
                Develop the{" "}
                <span className={styles.heroProjectKeywords}>
                  next generation
                </span>{" "}
                of <span className={styles.heroProjectKeywords}>security</span>{" "}
                with powerful APIs and SDKs
              </h1>
              <div className={styles.indexCtas}>
                <Link
                  className={classnames(
                    "button button--outline button--secondary button--lg",
                    styles.indexCtasGetStartedButton
                  )}
                  to="#"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>

        <section className={styles.toolsslant} ref={toolsRef }>
          <div className="container">
            <div className="row">

              {/* Cortex */}
              <div className={classnames("col col--4", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/Cortex-green.svg"
                    alt="Cortex"
                  />
                </div>
                <h3>Cortex</h3>
                <p className="text text--seconday">
                  An open, continuous security platform to integrate rich
                  context from cloud, endpoint and network data
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--primary button--md",
                      styles.cortex
                    )}
                    href="https://cortex.pan.dev"
                  >
                    Cortex for Developers
                  </Link>
                </div>
              </div>

              {/* PAN-OS */}
              <div className={classnames("col col--4", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/Strata-yellow.svg"
                    alt="Strata"
                  />
                </div>
                <h3>Strata</h3>
                <p className="text text--seconday">
                  Build next-gen automation with the worlds only next-generation
                  security platform
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--primary button--md",
                      styles.strata
                    )}
                    href="https://strata.pan.dev"
                  >
                    Strata for Developers
                  </Link>
                </div>
              </div>

              {/* Cortex XSOAR */}
              <div className={classnames("col col--4", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/Cortex-XSOAR-product-green.svg"
                    alt="Cortex XSOAR"
                  />
                </div>
                <h3>Cortex XSOAR</h3>
                <p className="text text--seconday">
                  Develop new integrations, automations, playbooks, reports and
                  more
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--primary button--md",
                      styles.cortex
                    )}
                    href="https://xsoar.pan.dev"
                  >
                    Cortex XSOAR 
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
