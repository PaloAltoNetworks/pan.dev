/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BackToTopButton from "@theme/BackToTopButton";
import Featured from "../components/Featured";
import HomepageBanner from "../components/HomepageBanner/HomepageBanner";
import Layout from "@theme/Layout";
import Medium from "../components/Medium";
import { PartnerTools } from "../components/AceternityUI/PartnerTools";
import styles from "./styles.module.css";
import { HeroSectionOne } from "../components/AceternityUI/Hero";
import { AnimatedTestimonials } from "../components/AceternityUI/AnimatedTestimonials";
import { TabsDemo } from "../components/AceternityUI/AnimatedTabs";
import { motion } from "motion/react";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const blogImageSrc = "img/homepage-banner/2.svg";

  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="The hub for Palo Alto Networks developer documentation, including API reference docs, quickstarts, tutorials, tools and open-source projects."
      wrapperClassName="homepage"
    >
      <main style={{ backgroundColor: "#000000" }}>
        <HeroSectionOne />
        <motion.div
          className="container"
          style={{ marginTop: "-30rem" }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
        >
          <TabsDemo />
        </motion.div>
        <section
          id="developer-docs-section"
          className={styles.featuredContainer}
        >
          <HomepageBanner text="Developer Docs and API References" />
          <Featured />
          {/* <BackToTopButton /> */}
        </section>
        <section className="container">
          <HomepageBanner text="Explore our Partner Tools" />
          <PartnerTools />
        </section>
        <section>
          <HomepageBanner
            imgSrc={blogImageSrc}
            text="Read our latest Developer Blogs"
          />
          <AnimatedTestimonials />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
