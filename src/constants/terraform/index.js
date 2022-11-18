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
      <span>Palo Alto Networks</span> as Code as Terraform
    </h1>
  ),
  subheader: (
    <p>
      Hashicorp's Terraform is widely used to build and deploy infrastructure safely and efficiently with high levels of automation and integration.
    </p>
  ),
  sliderCards: [
    {
      title: "Technology Partner of The Year",
      description: "The Technology Partner Awards celebrate HashiCorp technology partners who have expanded ecosystem solutions for customers through new integrations, co-engineered solutions, and participated in joint marketing initiatives.",
      cta: {
        type: 'single',
        content: {
          link: "https://www.hashicorp.com/blog/announcing-the-2022-hashicorp-technology-partner-award-winners",
          text: "See More",
        }
      },
      image: {
        src: "img/product-landing/terraform/technology-partner-award.jpg",
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
        src: "img/product-landing/terraform/terraform-article.jpeg",
        alt: "Technology Partner of The Year"
      },
    },
  ],
}

// Props used in src/components/ProductLandingPage/Providers.js
export const TERRAFORM_PROVIDER_CONTENT = {
  header: (
    <h1>Palo Alto Networks Terraform Providers</h1>
  ),
  subheader: (
    <p>
      Palo Alto Networks makes Terraform providers and modules freely available to assist anyone who wants to deploy and configure their security stack as code, alongside the rest of their infrastructure.
    </p>
  ),
  providerCards: [
    {
      title: "Terraform for PAN-OS",
      version: "v.1.11.0",
      description: "You can configure PAN-OS with Terraform, allowing your configuration to be defined and managed as code, facilitating automated operations.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest",
            logoSrc: "img/product-landing/terraform/terraform-logo.png"
          },
          {
            link: "/terraform/docs/panos",
            text: "Docs"
          }
        ]
      },
    },
    {
      title: "Terraform for Cloud NGFW",
      version: "v.1.0.8",
      description: "You can configure Cloud NGFW with Terraform, allowing your configuration to be defined and managed as code, facilitating automated operations.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/cloudngfwaws/latest",
            logoSrc: "img/product-landing/terraform/terraform-logo.png"
          },
          {
            link: "/terraform/docs/cloudngfw",
            text: "Docs"
          }
        ]
      },
    },
    {
      title: "Terraform for Prisma Cloud",
      version: "v.1.2.10",
      description: "You can configure Prisma Cloud with Terraform, allowing your configuration to be defined and managed as code, facilitating automated operations.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloud/latest",
            logoSrc: "img/product-landing/terraform/terraform-logo.png"
          },
          {
            link: "/terraform/docs/cloudngfw",
            text: "Docs"
          }
        ]
      },
    },
    {
      title: "Terraform for Prisma Cloud Compute",
      version: "v.0.7.0",
      description: "You can configure Prisma Cloud Compute with Terraform, allowing your configuration to be defined and managed as code, facilitating automated operations.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/providers/PaloAltoNetworks/prismacloudcompute/latest",
            logoSrc: "img/product-landing/terraform/terraform-logo.png"
          },
          {
            link: "/terraform/docs/cloudngfw",
            text: "Docs"
          }
        ]
      },
    },
    {
      title: "Terraform for Bridgecrew",
      version: "v0.3.7",
      description: "You can configure Bridgecrew with Terraform, allowing your configuration to be defined and managed as code, facilitating automated operations.",
      cta: {
        type: 'double',
        content: [
          {
            icon: "https://registry.terraform.io/providers/PaloAltoNetworks/bridgecrew/latest",
            logoSrc: "img/product-landing/terraform/terraform-logo.png"
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
      Palo Alto Networks makes Terraform providers and modules freely available to assist anyone who wants to deploy and configure their security stack as code, alongside the rest of their infrastructure.
    </p>
  ),
  useCaseCards: [
    {
      title: "Define network security policy with Terraform",
      cta: {
        type: "single",
        content: {
          link: "https://registry.terraform.io/search/providers?namespace=PaloAltoNetworks",
          logoSrc: "img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo"
        }
      },
      links: [
        {
          path: "/terraform/docs/panos/tutorials/config-secpol-and-objs",
          text: "PAN-OS - Guide"
        },
        {
          path: "/terraform/docs/panos/info/background",
          text: "PAN-OS - Background"
        }
      ]
    },
    {
      title: "Construct cloud security posture as code with Terraform",
      cta: {
        type: "single",
        content: {
          link: "https://prisma.pan.dev/docs/cloud/cspm/tf/tf_example1",
          logoSrc: "img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo"
        }
      },
      links: [
        {
          path: "https://prisma.pan.dev/docs/cloud/cspm/tf/tf_example1",
          text: "PC - Examples"
        },
      ]
    },
    {
      title: "Configure code security policies with Terraform",
      cta: {
        type: "single",
        content: {
          link: "https://registry.terraform.io/search/providers?namespace=PaloAltoNetworks",
          logoSrc: "img/product-landing/terraform/terraform-logo.png",
          logoAlt: "Terraform Logo"
        }
      },
      links: [
        {
          path: "https://bridgecrew.io/blog/bridgecrew-configuration-as-code-new-bridgecrew-terraform-provider/",
          text: "Bridgecrew - Guide"
        },
        {
          path: "https://github.com/bridgecrewio/terraform-provider-bridgecrew/tree/main/terraform",
          text: "Bridgecrew - Examples"
        }
      ]
    },
  ]
}

// Feeds.js 