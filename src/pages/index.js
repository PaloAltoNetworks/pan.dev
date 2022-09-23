/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import BackToTopButton from "@theme/BackToTopButton";
import Featured from "../components/Featured";
import HomepageHero from "../components/HompageHero/HomepageHero";
import HomepageBanner from '../components/HomepageBanner/HomepageBanner';
import Medium from "../components/Medium";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const exploreImageSrc = 'img/homepage-banner/1.svg';
  const blogImageSrc = 'img/homepage-banner/2.svg';

  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="The hub for Palo Alto Networks developer documentation, including API reference docs, quickstarts, tutorials, tools and open-source projects."
      wrapperClassName="homepage"
    >
      <HomepageHero />
      <main>
        <section id="developer-docs-section" className={styles.featuredContainer}>
          <HomepageBanner imgSrc={exploreImageSrc} text="Explore our Developer Docs" />
          <Featured />
          <BackToTopButton />
        </section>
        <section>
          <HomepageBanner imgSrc={blogImageSrc} text="Read our latest Developer Blogs" />
          <Medium />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
