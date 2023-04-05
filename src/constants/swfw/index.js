import React from "react";
import Link from "@docusaurus/Link";

export const SWFW_METADATA = {
  title: "Palo Alto Networks as Code with Terraform",
  description: "Palo Alto Networks as Code with Terraform",
};

export const SWFW_HERO_CONTENT = {
  anchorLink: "#providers-container",
  product: "terraform",
  header: (
    <h1>
      <span>Palo Alto Networks</span> as Code with Terraform
    </h1>
  ),
  subheader: (
    <p>
      Hashicorp's Terraform is widely used to build and deploy infrastructure,
      safely and efficiently, with high levels of automation and integration.
    </p>
  ),
  sliderCards: [
    {
      title: "The New Cloud Operating Model - White Paper",
      description:
        "Scale and secure your cloud operations with HashiCorp and Palo Alto Networks. This new white paper lays out the advantages and considerations for people, processes, and tools.",
      cta: {
        type: "single",
        content: {
          link: "https://www.hashicorp.com/resources/the-cloud-operating-model-with-palo-alto-networks-and-hashicorp",
          text: "See More",
        },
      },
      image: {
        src: "/img/product-landing/terraform/cloud-op-model.png",
        alt: "Technology Partner of The Year",
      },
    },
    {
      title: "Hashicorp Technology Partner of The Year",
      description:
        "The Technology Partner Awards celebrate HashiCorp technology partners who have expanded ecosystem solutions for customers through new integrations, co-engineered solutions, and participated in joint marketing initiatives.",
      cta: {
        type: "single",
        content: {
          link: "https://www.hashicorp.com/blog/announcing-the-2022-hashicorp-technology-partner-award-winners",
          text: "See More",
        },
      },
      image: {
        src: "/img/product-landing/terraform/technology-partner-award.jpg",
        alt: "Technology Partner of The Year",
      },
    },
    {
      title: "Terraform 1.3 Improves Extensibility and Maintainability",
      description:
        "Now generally available, HashiCorp Terraform 1.3 introduces optional object type attributes with defaults, and enhancements to moved blocks, improving extensibility and maintainability of Terraform modules.",
      cta: {
        type: "single",
        content: {
          link: "https://www.hashicorp.com/blog/terraform-1-3-improves-extensibility-and-maintainability-of-terraform-modules",
          text: "See More",
        },
      },
      image: {
        src: "/img/product-landing/terraform/terraform-article.jpeg",
        alt: "Technology Partner of The Year",
      },
    },
  ],
};
