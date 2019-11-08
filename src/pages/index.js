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
import ControlledCarousel from "./carousel";
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
        <section className={styles.carousel} ref={toolsRef}>
          <div className="container">
              <h1 className="text--center"> What's Possible? </h1>
            <div className="row">
              <ControlledCarousel></ControlledCarousel>
            </div>
          </div>
        </section>
        <section className={styles.toolsslant} ref={toolsRef }>
          <div className="container">
            <div className="row">
              {/* PAN-OS */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/panospeelable.png"
                    alt="PAN-OS"
                  />
                </div>
                <h3>PAN-OS</h3>
                <p className="text text--seconday">
                  Build next-gen automation with the worlds only next-generation
                  security platform
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--primary button--md",
                      styles.panos
                    )}
                    href="https://panos.pan.dev"
                  >
                    PAN-OS For Developers
                  </Link>
                </div>
              </div>

              {/* Demisto */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/demistopeelable.png"
                    alt="PAN-OS"
                  />
                </div>
                <h3>Demisto</h3>
                <p className="text text--seconday">
                  Develop new integrations, automations, playbooks, reports and
                  more
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--primary button--md",
                      styles.demisto
                    )}
                    href="https://demisto.pan.dev"
                  >
                    Demisto For Developers
                  </Link>
                </div>
              </div>

              {/* Cortex */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/cortexpeelable.png"
                    alt="PAN-OS"
                  />
                </div>
                <h3>Cortex</h3>
                <p className="text text--seconday">
                  An open, continuous security platform to integrate rich
                  context from cloud, endpoint and network data.
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--primary button--md",
                      styles.cortex
                    )}
                    href="https://cortex.pan.dev"
                  >
                    Cortex For Developers
                  </Link>
                </div>
              </div>

              {/* {Prisma} */}
              <div className={classnames("col col--3", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/prismapeelable.png"
                    alt="PAN-OS"
                  />
                </div>
                <h3>Prisma</h3>
                <p className="text text--seconday">
                  Protection for branches, mobile users, SaaS, and apps in
                  private and public clouds
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--primary button--md",
                      styles.prisma
                    )}
                    href="https://prisma.pan.dev"
                  >
                    Prisma For Developers
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
