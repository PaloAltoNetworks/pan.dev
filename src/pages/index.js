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
      value: 355,
      density: {
        enable: true,
        value_area: 789.1476416322727
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
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "in",
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
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
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
      description="All things related to automation and development with PAN-OS®"
    >
      <ScrollUpButton />
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div>
            <Particles className="particles" params={particlesOptions} />
          </div>
          <img 
            className={styles.headerLogo}
            src="img/dev-wave.png">
          </img>
          <p className="hero__subtitle">
          Learn how to Developer the Enterprise, Develop the Cloud, and Developer the Future
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              onClick={scrollToTools}
            >
              Explore our Products
            </Link>
          </div>
        </div>
      </header>
      <main> 
        <section className={styles.tools} ref={toolsRef}>
          <div className="container">
            <div className="text--center">
                  <h2>Develop with...</h2>
              </div>
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
                Build next-gen automation with the worlds only next-generation security platform
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
                <h3>
                  Demisto
                </h3>
                <p className="text text--seconday"> 
                Develop new integrations, automations, playbooks, reports and more
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
                <h3>
                  Cortex
                </h3>
                <p className="text text--seconday"> 
                An open, continuous security platform to integrate rich context from cloud, endpoint and network data.
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
                <h3>
                  Prisma
                </h3>
                <p className="text text--seconday"> 
                Protection for branches, mobile users, SaaS, and apps in private and public clouds
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
