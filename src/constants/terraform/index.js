import React from "react";
import Link from "@docusaurus/Link";
// Terraform Landing Page Constants Template
// Usage: Define your constants with their respective data for each component and import them into your desired landing page within src/pages. Follow terraform.js for reference to how each constant can be used as props within their respective components.

export const TERRAFORM_METADATA = {
  title: "Palo Alto Networks as Code with Terraform",
  description: "Palo Alto Networks as Code with Terraform",
};

// Props used in src/components/ProductLandingPage/Hero.js
export const TERRAFORM_HERO_CONTENT = {
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

// Props used in src/components/ProductLandingPage/Providers.js
export const TERRAFORM_PROVIDER_CONTENT = {
  header: <h1>Terraform Providers from Palo Alto Networks</h1>,
  subheader: (
    <p>
      Palo Alto Networks develops Terraform providers which are freely available
      to assist anyone who wants to deploy and configure their security stack as
      code, alongside the rest of their infrastructure.
    </p>
  ),
  providerCards: [
    {
      title: "PAN-OS",
      latestTag: "v1.11.0",
      description:
        "Define and manage your network security configuration as code, including Panorama, PA-Series, VM-Series and CN-Series.",
      cta: {
        type: "double",
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo",
          },
          {
            link: "/terraform/docs/panos",
            text: "Docs",
          },
        ],
      },
    },
    {
      title: "Cloud NGFW",
      latestTag: "v1.0.8",
      description:
        "Deploy and manage NGFW functionality, delivered as a cloud-native service within your public cloud tenants, using Terraform.",
      cta: {
        type: "double",
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/cloudngfwaws/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo",
          },
          {
            link: "/terraform/docs/cloudngfw",
            text: "Docs",
          },
        ],
      },
    },
    {
      title: "Prisma Cloud",
      latestTag: "v1.2.10",
      description:
        "Configure your cloud-native security with Prisma Cloud using Terraform, facilitating automated cloud security operations.",
      cta: {
        type: "double",
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloud/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo",
          },
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloud/latest/docs",
            text: "Docs",
          },
        ],
      },
    },
    {
      title: "Prisma Cloud Compute",
      latestTag: "v0.7.0",
      description:
        "Define your cloud workload protection suing Terraform, to protect your host, container and serverless deployments in any cloud.",
      cta: {
        type: "double",
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloudcompute/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo",
          },
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloudcompute/latest/docs",
            text: "Docs",
          },
        ],
      },
    },
    {
      title: "Bridgecrew",
      latestTag: "v0.3.7",
      description:
        "Automate your security engineering by identifying and remediating misconfigurations and vulnerabilities, across code, secrets and images, all defined with Terraform.",
      cta: {
        type: "double",
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/bridgecrew/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo",
          },
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/bridgecrew/latest/docs",
            text: "Docs",
          },
        ],
      },
    },
  ],
};

// Props used in src/components/UseCases.js
export const TERRAFORM_USE_CASES_CONTENT = {
  header: <h1>Use Cases</h1>,
  subheader: (
    <p>
      Looking for inspiration, or just not sure where to start? Here are some
      common use cases where organizations have used Terraform to deploy,
      configure and maintain their security stack using Terraform.
    </p>
  ),
  useCaseCards: [
    {
      title: "Define your network security policies with Terraform",
      cta: {
        type: "single",
        content: {
          link: "/terraform/docs/panos",
          logoSrc: "/img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo",
        },
      },
      links: [
        {
          path: "/terraform/docs/panos/tutorials/config-secpol-and-objs",
          text: "Configuring next-generation firewall objects and rules",
        },
        {
          path: "/terraform/docs/panos/tutorials/config-networking/",
          text: "Defining next-generation firewall networking configuration",
        },
        {
          path: "/terraform/docs/panos/guides/panorama-config/",
          text: "Using Panorama to define configuration for multiple next-generation firewalls",
        },
      ],
    },
    {
      title: "Construct your cloud security posture as code with Terraform",
      cta: {
        type: "single",
        content: {
          link: "https://prisma.pan.dev/docs/cloud/cspm/tf/provider_doc",
          logoSrc: "/img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo",
        },
      },
      links: [
        {
          path: "https://prisma.pan.dev/docs/cloud/cspm/tf/tf_example1",
          text: "Provision compliance standard (and requirement/sections), with saved searches and policies",
        },
      ],
    },
    {
      title:
        "Define your policies for secure coding, secrets protection and more with Terraform",
      cta: {
        type: "single",
        content: {
          link: "https://registry.terraform.io/search/providers?namespace=PaloAltoNetworks",
          logoSrc: "/img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo",
        },
      },
      links: [
        {
          path: "https://bridgecrew.io/blog/bridgecrew-configuration-as-code-new-bridgecrew-terraform-provider/",
          text: "Get started with the Bridgecrew Terraform provider",
        },
        {
          path: "https://github.com/bridgecrewio/terraform-provider-bridgecrew/tree/main/terraform",
          text: "Examples of Bridgecrew Terraform provider usage",
        },
      ],
    },
  ],
};

export const TERRAFORM_MODULES_CONTENT = {
  header: <h1>Terraform Modules from Palo Alto Networks</h1>,
  modules: {
    terraform: [
      {
        tabLabel: "AWS",
        title: "Terraform Reusable Modules for VM-Series on AWS",
        link: "https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/aws/latest",
        latestTag: "v0.4.0",
        description: (
          <p>
            A set of modules for using Palo Alto Networks VM-Series firewalls to
            provide control and protection to your applications running in
            Amazon Web Services (AWS). It deploys VM-Series as virtual machine
            instances and it configures aspects such as Transit Gateway
            connectivity, VPCs, IAM access, Panorama virtual machine instances,
            and more.
          </p>
        ),
        footerLogos: [
          {
            logoSrc: "/img/product-landing/terraform/panw-logo.svg",
            logoAlt: "Palo Alto Networks logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/aws-logo.png",
            logoAlt: "Amazon Web Services logo",
          },
        ],
      },
      {
        tabLabel: "GCP",
        title: "Terraform Reusable Modules for VM-Series on GCP",
        link: "https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/google/latest",
        latestTag: "v0.4.1",
        description: (
          <p>
            A set of modules for using Palo Alto Networks VM-Series firewalls to
            provide control and protection to your applications running on
            Google Cloud Platform (GCP). It deploys VM-Series as virtual machine
            instances and it configures aspects such as Shared VPC connectivity,
            IAM access, Service Accounts, Panorama virtual machine instances,
            and more.
          </p>
        ),
        footerLogos: [
          {
            logoSrc: "/img/product-landing/terraform/panw-logo.svg",
            logoAlt: "Palo Alto Networks logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/gcp-logo.svg",
            logoAlt: "Google Cloud Platform logo",
          },
        ],
      },
      {
        tabLabel: "Azure",
        title: "Terraform Reusable Modules for VM-Series on Azure",
        link: "https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/azurerm/latest",
        latestTag: "v0.5.0",
        description: (
          <p>
            A set of modules for using Palo Alto Networks VM-Series firewalls to
            provide control and protection to your applications running on Azure
            Cloud. It deploys VM-Series as virtual machines and it configures
            aspects such as virtual networks, subnets, network security groups,
            storage accounts, service principals, Panorama virtual machine
            instances, and more.
          </p>
        ),
        footerLogos: [
          {
            logoSrc: "/img/product-landing/terraform/panw-logo.svg",
            logoAlt: "Palo Alto Networks logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/azure-logo.svg",
            logoAlt: "Azure logo",
          },
        ],
      },
    ],
    consulTerraform: [
      {
        tabLabel: "Static Address Groups",
        title: "Consul-Terraform-Sync Modules for PAN-OS",
        link: "https://registry.terraform.io/modules/PaloAltoNetworks/ag-dag-nia/panos/latest",
        latestTag: "v0.1.0",
        description: (
          <p>
            This Terraform module allows users to support Dynamic Firewalling by
            integrating <Link to="https://www.consul.io/">Consul</Link> with
            Palo Alto Networks PAN-OS based{" "}
            <Link to="https://www.paloaltonetworks.com/network-security/next-generation-firewall">
              PA-Series and VM-Series NGFW
            </Link>{" "}
            devices to dynamically manage the Address Objects based on service
            definition in Consul catalog. In addition, this module also manages
            dynamic registration/de-registration of Dynamic Address Group (DAG)
            tags based on services in Consul catalog.
          </p>
        ),
        footerLogos: [
          {
            logoSrc: "/img/product-landing/terraform/panw-logo.svg",
            logoAlt: "Palo Alto Networks logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/consul-logo.png",
            logoAlt: "Azure logo",
          },
        ],
      },
      {
        tabLabel: "Dynamic Address Groups",
        title: "Consul-Terraform-Sync Modules for PAN-OS",
        link: "https://registry.terraform.io/modules/PaloAltoNetworks/dag-nia/panos/latest",
        latestTag: "v0.2.0",
        description: (
          <p>
            This Terraform module allows users to support Dynamic Firewalling by
            integrating <Link to="https://www.consul.io/">Consul</Link> with
            Palo Alto Networks PAN-OS based{" "}
            <Link to="https://www.paloaltonetworks.com/network-security/next-generation-firewall">
              PA-Series and VM-Series NGFW
            </Link>{" "}
            devices to dynamically manage dynamic registration/de-registration
            of Dynamic Address Group (DAG) tags based on services in Consul
            catalog.
          </p>
        ),
        footerLogos: [
          {
            logoSrc: "/img/product-landing/terraform/panw-logo.svg",
            logoAlt: "Palo Alto Networks logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform logo",
          },
          {
            logoSrc: "/img/product-landing/terraform/consul-logo.png",
            logoAlt: "Azure logo",
          },
        ],
      },
    ],
  },
};
