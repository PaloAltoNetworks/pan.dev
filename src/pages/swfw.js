import React from "react";
// components
// import Card from "../components/ProductLandingPage/Cards/Card"
import Hero from "../components/ProductLandingPage/Hero/Hero";
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
// constants
import { SWFW_HERO_CONTENT, SWFW_METADATA } from "../constants/swfw";
import "./swfw.scss";

export default function SWFWLandingPage() {
  return (
    <Layout description={SWFW_METADATA.description} title={SWFW_METADATA.title}>
      <Hero
        anchorLink={SWFW_HERO_CONTENT.anchorLink}
        header={SWFW_HERO_CONTENT.header}
        product={SWFW_HERO_CONTENT.product}
        sliderCards={SWFW_HERO_CONTENT.sliderCards}
        subheader={SWFW_HERO_CONTENT.subheader}
      />
      <div className="providers-container">
        <div className="container swfw-container">
          <h1 className="swfw-header">Choose your Cloud Provider</h1>
          <Tabs className="swfw-tabs-container">
            <TabItem
              attributes={{ className: "swfw-tabs__item-aws" }}
              label=""
              value=""
            >
              <section className="swfw-cards-section aws">
                <h2 className="swfw-card-section-header">
                  Software Firewall Reference Architectures <br /> with
                  Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">
                      <span className="product-color">AWS</span> VM-Series
                    </h3>
                    <p className="card-item__description">
                      Reference Architectures
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/aws-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/vm-series.png"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">
                      <span className="product-color">AWS</span> Cloud NGFW
                    </h3>
                    <p className="card-item__description">
                      Reference Architectures
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/aws-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/ngfw.png"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="swfw-cards-section aws">
                <h2 className="swfw-card-section-header">
                  <span className="product-color">Deploy</span> your own
                  Software Firewall architecture <br /> with Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">VM-Series</h3>
                    <h3 className="card-item__title">
                      <span className="product-color">AWS</span> Modules{" "}
                      <span className="card-title__latest-tag">v0.4.1</span>
                    </h3>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/aws-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">Cloud NGFW</h3>
                    <h3>
                      <span className="product-color">AWS</span> Modules{" "}
                      <span className="card-title__latest-tag">v?.?.?</span>
                    </h3>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/aws-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="swfw-cards-section aws">
                <h2 className="swfw-card-section-header">
                  <span className="product-color">Configure</span> your Software
                  Firewall <br /> with Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">VM-Series</h3>
                    <h3 className="card-item__title">
                      PAN-OS{" "}
                      <span className="card-title__latest-tag">v0.4.1</span>
                    </h3>
                    <p className="card-item__description">
                      Define and manage your VM-Series network security
                      configuration as code
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">Cloud NGFW</h3>
                    <h3 className="card-item__title">
                      AWS <span className="card-title__latest-tag">v1.0.8</span>
                    </h3>
                    <p className="card-item__description">
                      Deploy and configure NGFW functionality as a cloud-native
                      service
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </TabItem>
            <TabItem
              attributes={{ className: "swfw-tabs__item-azure" }}
              label=""
              value="azure"
            >
              {/* Azure */}
              <section className="swfw-cards-section azure">
                <h2 className="swfw-card-section-header">
                  Software Firewall Reference Architectures <br /> with
                  Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">
                      <span className="product-color">Azure</span> VM-Series
                    </h3>
                    <p className="card-item__description">
                      Reference Architectures
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/azure-logo.svg"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/vm-series.png"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">
                      <span className="product-color">Azure</span> Cloud NGFW
                    </h3>
                    <p className="card-item__description">
                      Reference Architectures
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/azure-logo.svg"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/ngfw.png"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="swfw-cards-section azure">
                <h2 className="swfw-card-section-header">
                  <span className="product-color">Deploy</span> your own
                  Software Firewall architecture <br /> with Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">VM-Series</h3>
                    <h3 className="card-item__title">
                      <span className="product-color">Azure</span> Modules{" "}
                      <span className="card-title__latest-tag">v0.4.1</span>
                    </h3>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/azure-logo.svg"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">Cloud NGFW</h3>
                    <h3>
                      <span className="product-color">Azure</span> Modules{" "}
                      <span className="card-title__latest-tag">v?.?.?</span>
                    </h3>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/azure-logo.svg"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="swfw-cards-section azure">
                <h2 className="swfw-card-section-header">
                  <span className="product-color">Configure</span> your Software
                  Firewall <br /> with Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">VM-Series</h3>
                    <h3 className="card-item__title">
                      PAN-OS{" "}
                      <span className="card-title__latest-tag">v0.4.1</span>
                    </h3>
                    <p className="card-item__description">
                      Define and manage your VM-Series network security
                      configuration as code
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">Cloud NGWFW</h3>
                    <h3 className="card-item__title">
                      Azure{" "}
                      <span className="card-title__latest-tag">v1.0.8</span>
                    </h3>
                    <p className="card-item__description">
                      Deploy and configure NGFW functionality as a cloud-native
                      service
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </TabItem>
            <TabItem
              attributes={{ className: "swfw-tabs__item-gcp" }}
              label=""
              value="gcp"
            >
              {/* GCP */}
              <section className="swfw-cards-section gcp">
                <h2 className="swfw-card-section-header">
                  Software Firewall Reference Architectures <br /> with
                  Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">
                      <span className="product-color">GCP</span> VM-Series
                    </h3>
                    <p className="card-item__description">
                      Reference Architectures
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/gcp-logo.svg"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/vm-series.png"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">
                      <span className="product-color">GCP</span> Cloud NGFW
                    </h3>
                    <p className="card-item__description">
                      Reference Architectures
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/gcp-logo.svg"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/ngfw.png"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="swfw-cards-section gcp">
                <h2 className="swfw-card-section-header">
                  <span className="product-color">Deploy</span> your own
                  Software Firewall architecture <br /> with Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">VM-Series</h3>
                    <h3 className="card-item__title">
                      <span className="product-color">GCP</span> Modules{" "}
                      <span className="card-title__latest-tag">v0.4.1</span>
                    </h3>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/gcp-logo.svg"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">Cloud NGFW</h3>
                    <h3>
                      <span className="product">GCP</span> Modules{" "}
                      <span className="card-title__latest-tag">v?.?.?</span>
                    </h3>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/gcp-logo.svg"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="swfw-cards-section gcp">
                <h2 className="swfw-card-section-header">
                  <span className="product-color">Configure</span> your Software
                  Firewall <br /> with Terraform
                </h2>
                <div className="swfw-cards-container">
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">VM-Series</h3>
                    <h3 className="card-item__title">
                      PAN-OS{" "}
                      <span className="card-title__latest-tag">v0.4.1</span>
                    </h3>
                    <p className="card-item__description">
                      Define and manage your VM-Series network security
                      configuration as code
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                  <div className="swfw-info-card-container">
                    <h3 className="card-item__title">VM-Series</h3>
                    <h3 className="card-item__title">
                      GCP <span className="card-title__latest-tag">v1.0.8</span>
                    </h3>
                    <p className="card-item__description">
                      Deploy and configure NGFW functionality as a cloud-native
                      service
                    </p>
                    <div className="card-item__footer-logos-container">
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/terraform-logo.png"
                      />
                      <img
                        className="card-item__footer-logo"
                        src="/product-logos/panw-logo.svg"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
