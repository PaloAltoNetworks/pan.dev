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
import Particles from "react-particles-js";

const particlesOptions = {
  "particles":{
    "number":{
      "value":185,
      "density":{
        "enable":true,
        "value_area":1341.5509907748635
      }
    },
"color":{
  "value":"#FA582D"
},
"shape":{
  "type":"circle",
  "stroke":{
    "width":0,
    "color":"#000000"
  },
  "polygon":{
    "nb_sides":5
  },
  "image":{
    "src":"","width":100,
    "height":100
  }
},
"opacity":{
  "value":1,
  "random":true,
  "anim":{
    "enable":true,
    "speed":0.8120772123013451,
    "opacity_min":0,
    "sync":false
  }
},
"size":{
  "value":5,
  "random":true,
  "anim":{
    "enable":false,
  "speed":2,
  "size_min":0.3,
  "sync":false
}
},
"line_linked":{
  "enable":false,
  "distance":150,
  "color":"#ffffff",
  "opacity":0.4,
  "width":1
},
"move":{
  "enable":true,
  "speed":1,
  "direction":"none",
  "random":true,
  "straight":false,
  "out_mode":"out",
  "bounce":false,
  "attract":{
    "enable":false,
    "rotateX":600,
    "rotateY":600
  }
}
},
"interactivity":{
  "detect_on":"canvas",
  "events":{
    "onhover":{
      "enable":false,
      "mode":"grab"
    },
    "onclick":{
      "enable":true,
      "mode":"push"
    },
    "resize":true
  },"modes":{
    "grab":{
      "distance":400,
      "line_linked":{
        "opacity":1
      }
    },
"bubble":{
  "distance":316.71011279752463,
  "size":0,
  "duration":6.252994534720358,
  "opacity":0,
  "speed":3
},
"repulse":{
  "distance":535.9709601188878,
  "duration":0.4
},
"push":{
  "particles_nb":4
},
"remove":{
  "particles_nb":2
}
}
},
"retina_detect":true
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const scrollToRef = ref => ref.current.scrollIntoView({ behavior: "smooth" });
  const vertificalsRef = useRef(null);
  const scrollToVerticals = () => scrollToRef(vertificalsRef);
  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="Palo Alto Networks for Developers"
    >
      <ScrollUpButton />
      <header
        className={classnames(
          "hero hero--primary heroTilted",
          styles.heroBanner
        )}
      >
        <div className="container">
          <div className={styles.hero}>
            <div className={styles.heroInner}>
              <h1 className={styles.heroProjectTagline}>
                <div>
                  <Particles className="particles" params={particlesOptions} />
                </div>
                <img
                  alt="Devin the Developer Advocate"
                  className={styles.heroLogo}
                  src={useBaseUrl("img/devin-wave.svg")}
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
                    "button button--primary button--lg",
                    styles.indexCtasGetStartedButton
                  )}
                  onClick={scrollToVerticals}
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.toolsslant} ref={vertificalsRef}>
          <div className="container">
            <h1 className={styles.toolTag}> Develop with... </h1>
            <div className="row">
              {/* Cortex */}
              <div className={classnames("col col--6", styles.tools)}>
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
              <div className={classnames("col col--6", styles.tools)}>
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
              <div className={classnames("col col--6", styles.tools)}>
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

              {/* Prisms */}
              <div className={classnames("col col--6", styles.tools)}>
                <div className="text--center">
                  <img
                    className={styles.toolImage}
                    src="img/prismalogo.png"
                    alt="Prisma"
                  />
                </div>
                <h3>Prisma Cloud</h3>
                <p className="text text--seconday">
                Develop for the journey to the cloud with Prisma
                </p>
                <div className={styles.buttons}>
                  <Link
                    className={classnames(
                      "button button--primary button--md",
                      styles.prisma
                    )}
                    href="https://prisma.pan.dev/"
                  >
                    Prisma Cloud
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
