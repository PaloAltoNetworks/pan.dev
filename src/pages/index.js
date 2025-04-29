/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BackToTopButton from "@theme/BackToTopButton";
import Featured from "../components/Featured";
import HomepageBanner from "../components/HomepageBanner/HomepageBanner";
import HomepageHero from "../components/HompageHero/HomepageHero";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Medium from "../components/Medium";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const blogImageSrc = "img/homepage-banner/2.svg";

  const partnerTools = [
    {
      colorClass: "terraform",
      title: " Software Firewall deployment with Terraform",
      description:
        "Leverage validated Terraform Reference Architectures and Modules for VM-Series and CloudNGFW firewalls for rapid and reliable security in the cloud.",
      cta: {
        text: "Learn More",
        src: "/swfw",
      },
      logo: "/img/terraform-logo.png",
    },
    {
      colorClass: "terraform",
      title: "Palo Alto Networks as Code with Terraform",
      description:
        "Hashicorp's Terraform is widely used to build and deploy infrastructure, safely and efficiently, with high levels of automation and integration.",
      cta: {
        text: "Learn More",
        src: "/terraform",
      },
      logo: "/img/terraform-logo.png",
    },
    {
      colorClass: "ansible",
      title: "Ansible at Palo Alto Networks",
      description:
        "The collection of Ansible modules for PAN-OS has been officially certified by the Red Hat Ansible team (list of Ansible certified content) since version 2.12.2.",
      cta: {
        text: "Learn More",
        src: "/ansible",
      },
      logo: "/img/ansible-logo.png",
    },
  ];

  return (
    <Layout
      title={`${siteConfig.themeConfig.navbar.title}`}
      description="The hub for Palo Alto Networks developer documentation, including API reference docs, quickstarts, tutorials, tools and open-source projects."
      wrapperClassName="homepage"
    >
      <HomepageHero />
      <main>
        <section
          id="developer-docs-section"
          className={styles.featuredContainer}
        >
          <Featured />
          <span>Test</span>
          <BackToTopButton />
        </section>
        <section className="container">
          <HomepageBanner text="Explore our Partner Tools" />
          <div className={styles.toolsContainer}>
            {partnerTools.map((partner, i) => {
              return (
                <div
                  key={i}
                  className={clsx(styles.toolCardContainer, partner.colorClass)}
                >
                  <h2 className={styles.toolCardTitle}>{partner.title}</h2>
                  <p className={styles.toolCardDescription}>
                    {partner.description}
                  </p>
                  <div className={styles.toolCardFooter}>
                    <Link className={styles.toolCardLink} to={partner.cta.src}>
                      <span>{partner.cta.text}</span>
                    </Link>
                    <img src={partner.logo} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <HomepageBanner
            imgSrc={blogImageSrc}
            text="Read our latest Developer Blogs"
          />
          <Medium />
        </section>
      </main>
    </Layout>
  );
}

export default Home;
