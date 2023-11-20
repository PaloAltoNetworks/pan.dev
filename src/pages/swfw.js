import React from "react";
// components
// import Card from "../components/ProductLandingPage/Cards/Card"
import Hero from "../components/ProductLandingPage/Hero/Hero";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
// constants
import {
  SWFW_CLOUDS,
  SWFW_HERO_CONTENT,
  SWFW_LINKS,
  SWFW_METADATA,
} from "../constants/swfw";
import "./swfw.scss";
import CloudCard from "../components/CloudCard";
import LinkList from "../components/LinkList";
import CertExpireBanner from "../components/CertExpireBanner";

export default function SWFWLandingPage() {
  return (
    <Layout
      description={SWFW_METADATA.description}
      title={SWFW_METADATA.title}
      wrapperClassName="swfw-landing-page"
    >
      <CertExpireBanner />
      <div className="swfw-landing-page__container">
        <section className={`product-hero-container swfw swfw-hero-container`}>
          <div className={`product-hero__inner-content swfw`}>
            <div className={`product-hero__inner-left swfw`}>
              <header className="inner-left__header">
                {SWFW_HERO_CONTENT.header}
                {SWFW_HERO_CONTENT.subheader}
              </header>
            </div>
            <div className="product-hero__inner-right swfw">
              <img
                src="/swfw/landing-image.png"
                alt="SWFW with Terraform"
                width={550}
              />
            </div>
          </div>
        </section>
        <section className="clouds-container">
          {SWFW_CLOUDS.map((cloud) => (
            <CloudCard
              key={cloud.title}
              title={cloud.title}
              subtitle={cloud.subtitle}
              link={cloud.link}
              text={cloud.text}
            />
          ))}
        </section>
        <section className="swfw-landing-page__content">
          <div className="container swfw-container">
            {SWFW_LINKS.map((link) => (
              <LinkList
                key={link.title}
                title={link.title}
                subtitle={link.subtitle}
                links={link.links}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
