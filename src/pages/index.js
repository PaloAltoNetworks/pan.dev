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
import Particles from "react-particles-js";
import ScrollUpButton from "react-scroll-up-button";
import styles from "./styles.module.css";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.2,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#ffffff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.4
        }
      }
    }
  },
  retina_detect: true
};

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
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div>
            <Particles className="particles" params={particlesOptions} />
          </div>
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
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="img/devin.png" alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide"/>
          </div>
        </div>
      </div>
      </main>
      <main>
        <section className={styles.tools} ref={toolsRef}>
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
