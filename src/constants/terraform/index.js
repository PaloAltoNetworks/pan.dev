import React from "react"
// Terraform Landing Page Constants Template
// Usage: Define your constants with their respective data for each component and import them into your desired landing page within src/pages. Follow terraform.js for reference to how each constant can be used as props within their respective components.

export const TERRAFORM_METADATA = {
  title: "Palo Alto Networks as Code with Terraform",
  description: "Palo Alto Networks as Code with Terraform"
}

// Props used in src/components/ProductLandingPage/Hero.js
export const TERRAFORM_HERO_CONTENT = {
  product: 'terraform',
  header: (
    <h1>
      <span>Palo Alto Networks</span> as Code with Terraform
    </h1>
  ),
  subheader: (
    <p>
      Hashicorp's Terraform is widely used to build and deploy infrastructure, safely and efficiently, with high levels of automation and integration.
    </p>
  ),
  sliderCards: [
    {
      title: " Hashicorp Technology Partner of The Year",
      description: "The Technology Partner Awards celebrate HashiCorp technology partners who have expanded ecosystem solutions for customers through new integrations, co-engineered solutions, and participated in joint marketing initiatives.",
      cta: {
        type: 'single',
        content: {
          link: "https://www.hashicorp.com/blog/announcing-the-2022-hashicorp-technology-partner-award-winners",
          text: "See More",
        }
      },
      image: {
        src: "/img/product-landing/terraform/technology-partner-award.jpg",
        alt: "Technology Partner of The Year"
      },
    },
    {
      title: "Terraform 1.3 Improves Extensibility and Maintainability",
      description: "Now generally available, HashiCorp Terraform 1.3 introduces optional object type attributes with defaults, and enhancements to moved blocks, improving extensibility and maintainability of Terraform modules.",
      cta: {
        type: 'single',
        content: {
          link: "https://www.hashicorp.com/blog/terraform-1-3-improves-extensibility-and-maintainability-of-terraform-modules",
          text: "See More",
        }
      },
      image: {
        src: "/img/product-landing/terraform/terraform-article.jpeg",
        alt: "Technology Partner of The Year"
      },
    },
  ],
}

// Props used in src/components/ProductLandingPage/Providers.js
export const TERRAFORM_PROVIDER_CONTENT = {
  header: (
    <h1>Terraform Providers from Palo Alto Networks</h1>
  ),
  subheader: (
    <p>
      Palo Alto Networks develops Terraform providers which are freely available to assist anyone who wants to deploy and configure their security stack as code, alongside the rest of their infrastructure.
    </p>
  ),
  providerCards: [
    {
      title: "PAN-OS",
      version: "v.1.11.0",
      description: "Define and manage your network security configuration as code, including Panorama, PA-Series, VM-Series and CN-Series.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo"
          },
          {
            link: "/terraform/docs/panos",
            text: "Docs"
          }
        ]
      },
    },
    {
      title: "Cloud NGFW",
      version: "v.1.0.8",
      description: "Deploy and manage NGFW functionality, delivered as a cloud-native service within your public cloud tenants, using Terraform.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/cloudngfwaws/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo"
          },
          {
            link: "/terraform/docs/cloudngfw",
            text: "Docs"
          }
        ]
      },
    },
    {
      title: "Prisma Cloud",
      version: "v.1.2.10",
      description: "Configure your cloud-native security with Prisma Cloud using Terraform, facilitating automated cloud security operations.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloud/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo"
          },
          {
            link: "/terraform/docs/cloudngfw",
            text: "Docs"
          }
        ]
      },
    },
    {
      title: "Prisma Cloud Compute",
      version: "v.0.7.0",
      description: "Define your cloud workload protection suing Terraform, to protect your host, container and serverless deployments in any cloud.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloudcompute/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo"
          },
          {
            link: "/terraform/docs/cloudngfw",
            text: "Docs"
          }
        ]
      },
    },
    {
      title: "Bridgecrew",
      version: "v0.3.7",
      description: "Automate your security engineering by identifying and remediating misconfigurations and vulnerabilities, across code, secrets and images, all defined with Terraform.",
      cta: {
        type: 'double',
        content: [
          {
            icon: "https://registry.terraform.io/providers/PaloAltoNetworks/bridgecrew/latest",
            logoSrc: "/img/product-landing/terraform/terraform-logo.png",
            logoAlt: "Terraform Logo"
          },
          {
            link: "/terraform/docs/cloudngfw",
            text: "Docs"
          }
        ]
      },
    },
  ]
}

// Props used in src/components/UseCases.js
export const TERRAFORM_USE_CASES_CONTENT = {
  header: (
    <h1>Use Cases</h1>
  ),
  subheader: (
    <p>
      Looking for inspiration, or just not sure where to start? Here are some common use cases where organizations have used Terraform to deploy, configure and maintain their security stack using Terraform.
    </p>
  ),
  useCaseCards: [
    {
      title: "Define your network security policies with Terraform",
      cta: {
        type: "single",
        content: {
          link: "https://registry.terraform.io/search/providers?namespace=PaloAltoNetworks",
          logoSrc: "/img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo"
        }
      },
      links: [
        {
          path: "/terraform/docs/panos/tutorials/config-secpol-and-objs",
          text: "Configuring objects and rules for PAN-OS next-generation firewalls"
        },
        {
          path: "/terraform/docs/panos/tutorials/config-networking/",
          text: "Defining firewall networking configuration"
        },
        {
          path: "/terraform/docs/panos/guides/panorama-config/",
          text: "Using Panorama to define configuration for multiple next-generation firewalls"
        }
      ]
    },
    {
      title: "Construct your cloud security posture as code with Terraform",
      cta: {
        type: "single",
        content: {
          link: "https://prisma.pan.dev/docs/cloud/cspm/tf/tf_example1",
          logoSrc: "/img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo"
        }
      },
      links: [
        {
          path: "https://prisma.pan.dev/docs/cloud/cspm/tf/tf_example1",
          text: "Examples of Prisma Cloud Terraform usage"
        },
      ]
    },
    {
      title: "Define your policies for secure coding, secrets protection and more with Terraform",
      cta: {
        type: "single",
        content: {
          link: "https://registry.terraform.io/search/providers?namespace=PaloAltoNetworks",
          logoSrc: "/img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo"
        }
      },
      links: [
        {
          path: "https://bridgecrew.io/blog/bridgecrew-configuration-as-code-new-bridgecrew-terraform-provider/",
          text: "Get started with the Bridgecrew Terraform provider"
        },
        {
          path: "https://github.com/bridgecrewio/terraform-provider-bridgecrew/tree/main/terraform",
          text: "Examples of Bridgecrew Terraform provider usage"
        }
      ]
    },
  ]
}

// Feeds.js 