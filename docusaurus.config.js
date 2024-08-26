/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.CI_MERGE_REQUEST_IID) {
  if (process.env.CI_PROJECT_DIR == "dev") {
    baseUrl = "/";
  } else {
    baseUrl =
      process.env.GL_PAGES_BASE_URL ??
      `/-/${process.env.CI_PROJECT_NAME}/-/jobs/${process.env.CI_JOB_ID}/artifacts/public/`;
  }
} else {
  baseUrl = process.env.GL_PAGES_BASE_URL ?? "/";
}

const config = {
  title: "Develop with Palo Alto Networks",
  tagline:
    "Explore our API Doc, Quickstarts, and Blog or dive right in and play in our sandbox. We have all the tools you needs to make the next big security innovation. SDKs in your favorite languages, detailed walk-throughs for sample apps, and all the resources you’ll need to flourish.",
  url: process.env.GL_PAGES_URL
    ? process.env.GL_PAGES_URL
    : process.env.CI_PAGES_URL ?? "https://pan.dev",
  baseUrl: baseUrl,
  favicon: "img/PANW_Parent_Glyph_Red.svg",
  organizationName: "PaloAltoNetworks",
  projectName: "pan.dev",
  markdown: { format: "detect" },
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp", "php", "hcl"],
    },
    languageTabs: [
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
    ],
    colorMode: {
      defaultMode: "light",
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    algolia: {
      apiKey: "6869800b232f5f8362e83901d79110ee",
      appId: "XC7919KOX3",
      indexName: "pan",
      externalUrlRegex:
        "cortex.pan.dev|xsoar.pan.dev|prisma.pan.dev|gallery.pan.dev|panos.pan.dev",
      searchParameters: {
        typoTolerance: false,
        facetFilters: [["tags:pandev"]],
      },
    },
    hideOnScroll: true,
    navbar: {
      title: "",
      logo: {
        alt: "Palo Alto Networks for Developers",
        src: "img/pan_dev_black.svg",
        srcDark: "img/pan_dev_white.svg",
      },
      items: [
        {
          label: "Developer Docs",
          className: "margin-left--lg",
          megaNav: true,
          items: [
            {
              label: "Cloud Native Security",
              to: "#",
              colorclass: "cloud-native-security",
              description:
                "Discover the APIs, tools and techniques necessary for bringing DevOps practices to the cloud.",
              products: [
                {
                  label: "Prisma Cloud Enterprise Edition",
                  to: "#",
                  logoClass: "prisma",
                  apiDocs: [
                    {
                      to: "/prisma-cloud/api",
                      label: "Prisma Cloud",
                      icon: "api-doc",
                    },
                  ],
                  docs: [
                    {
                      to: "/prisma-cloud/docs",
                      label: "API Workflows",
                      icon: "doc",
                    },
                  ],
                },
                {
                  label: "Prisma Cloud Compute Edition",
                  to: "#",
                  logoClass: "prisma",
                  apiDocs: [
                    {
                      to: "/compute/api/",
                      label: "Compute Edition",
                      icon: "api-doc",
                    },
                  ],
                },
              ],
            },
            {
              label: "Security Operations",
              to: "#",
              colorclass: "security-operations",
              description:
                "Browse reference docs, tutorials, the XSOAR Marketplace and more.",
              products: [
                {
                  to: "#",
                  label: "Cortex XSOAR",
                  logoClass: "xsoar",
                  apiDocs: [
                    {
                      label: "XSOAR (Demisto) API",
                      to: "https://xsoar.pan.dev/docs/reference/api/demisto-class",
                      icon: "api-doc",
                    },
                  ],
                  docs: [
                    {
                      label: "Cortex XSOAR Developer Hub",
                      to: "https://xsoar.pan.dev/docs/welcome",
                      icon: "doc",
                    },
                  ],
                },
                {
                  label: "Cortex",
                  to: "#",
                  logoClass: "cortex",
                  apiDocs: [
                    {
                      label: "Expander API",
                      to: "https://cortex.pan.dev/api/expander/annotations-api",
                      icon: "api-doc",
                    },
                  ],
                  docs: [
                    {
                      label: "Xpanse Python SDK",
                      to: "https://cortex-xpanse-python-sdk.readthedocs.io/en/latest/",
                      icon: "doc",
                    },
                  ],
                },
              ],
            },
            {
              label: "Network Security",
              to: "#",
              colorclass: "network-security",
              description:
                "Learn how to make the most of the PAN-OS APIs, SDKs, Expedition, Terraform, Ansible, and more.",
              products: [
                {
                  label: "PAN-OS",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "APIs, SDKs, & Tutorials",
                      to: "panos/docs",
                      icon: "doc",
                    },
                    {
                      label: "Terraform for VM-Series",
                      to: "swfw",
                      icon: "doc",
                    },
                    {
                      label: "Terraform for PAN-OS",
                      to: "terraform/docs/panos",
                      icon: "doc",
                    },
                    {
                      label: "Ansible",
                      to: "ansible/docs/panos",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      label: "Ansible Module Reference",
                      to: "https://galaxy.ansible.com/ui/repo/published/paloaltonetworks/panos/docs",
                      icon: "api-doc",
                    },
                    {
                      label: "Terraform Provider Reference",
                      to: "https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest/docs",
                      icon: "api-doc",
                    },
                  ],
                },
                {
                  label: "Cloud NGFW",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "Introduction",
                      to: "cloudngfw/docs",
                      icon: "doc",
                    },
                    {
                      label: "Terraform - AWS",
                      to: "terraform/docs/cloudngfw",
                      icon: "doc",
                    },
                    {
                      label: "Terraform - Azure",
                      to: "terraform/docs/cloudngfw",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      to: "cloudngfw/aws/api/",
                      label: "Cloud NGFW for AWS API",
                      icon: "api-doc",
                    },
                  ],
                },
                {
                  label: "Strata Logging Service",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "Log Forwarding Developer's Guide",
                      to: "cdl/docs/log-forwarding",
                      icon: "doc",
                    },
                    {
                      label: "Log Forwarding Change Log",
                      to: "cdl/docs/logforwarding/release-notes/changelog",
                      icon: "doc",
                    },
                    {
                      label: "Log Forwarding Release Notes",
                      to: "cdl/docs/logforwarding/release-notes/relnotes",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      label: "Log Forwarding",
                      to: "cdl/api/log-forwarding",
                      icon: "api-doc",
                    },
                  ],
                },
                {
                  label: "Cloud-Delivered Security Services",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "Cloud-Delivered Security Services",
                      to: "/cdss/docs",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      to: "/aiops-ngfw-bpa/api",
                      label: "AIOps for NGFW Best Practice Assessment API",
                      icon: "api-doc",
                    },
                    {
                      to: "/threat-vault/api",
                      label: "Threat Vault APIs",
                      icon: "api-doc",
                    },
                    {
                      to: "/iot/api",
                      label: "IoT API",
                      icon: "api-doc",
                    },
                    {
                      to: "/dns-security/api",
                      label: "DNS Security API",
                      icon: "api-doc",
                    },
                    {
                      to: "dlp/api",
                      label: "Data Loss Prevention API",
                      icon: "api-doc",
                    },
                    {
                      to: "email-dlp/api",
                      label: "Email Data Loss Prevention API",
                      icon: "api-doc",
                    },
                    {
                      to: "https://docs.paloaltonetworks.com/saas-security/saas-security-admin/saas-security-api",
                      label: "SaaS Security API",
                      icon: "api-doc",
                    },
                    {
                      to: "https://docs.paloaltonetworks.com/wildfire/u-v/wildfire-api",
                      label: "WildFire API",
                      icon: "api-doc",
                    },
                  ],
                },
                {
                  label: "Expedition",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "Expedition",
                      to: "expedition/docs",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [],
                },
              ],
            },
            {
              label: "Secure Access Service Edge",
              to: "#",
              colorclass: "sase",
              description:
                "Discover Prisma SASE APIs, including Prisma Access and Prisma SD-WAN.",
              products: [
                {
                  label: "Prisma SASE",
                  to: "#",
                  logoClass: "prisma",
                  docs: [
                    {
                      to: "sase/docs",
                      label: "Prisma SASE Developer's Guide",
                      icon: "doc",
                    },
                    {
                      to: "/sase/docs/release-notes/changelog",
                      label: "Prisma SASE Changelog",
                      icon: "doc",
                    },
                    {
                      to: "sase/docs/release-notes/release-notes",
                      label: "Prisma SASE Release Notes",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      to: "sase/api/tenancy",
                      label: "Tenancy Service",
                      icon: "api-doc",
                    },
                    {
                      to: "sase/api/iam",
                      label: "Identity and Access Management",
                      icon: "api-doc",
                    },
                    {
                      to: "sase/api/auth",
                      label: "Authentication Service",
                      icon: "api-doc",
                    },
                    {
                      to: "sase/api/subscription",
                      label: "Subscription Service",
                      icon: "api-doc",
                    },
                    {
                      to: "/access/api/prisma-access-config",
                      label: "Prisma Access Configuration",
                      icon: "api-doc",
                    },
                    {
                      to: "/access/api/ztna/ztna-connector-apis",
                      label: "ZTNA Connector",
                      icon: "api-doc",
                    },
                    {
                      to: "sdwan/api",
                      label: "Prisma SD-WAN",
                      icon: "api-doc",
                    },
                    {
                      to: "sase/api/mt-monitor",
                      label: "Aggregate Monitoring",
                      icon: "api-doc",
                    },
                    {
                      to: "sase/api/mt-notifications",
                      label: "Multitenant Notifications",
                      icon: "api-doc",
                    },
                    {
                      to: "sase/api/mt-interconnect",
                      label: "Multitenant Interconnect",
                      icon: "api-doc",
                    },
                    {
                      to: "access/api/adem/autonomous-dem-api",
                      label: "Autonomous DEM",
                      icon: "api-doc",
                    },
                    {
                      label: "Log Forwarding",
                      to: "cdl/api/log-forwarding",
                      icon: "api-doc",
                    },
                  ],
                },
                {
                  label: "Prisma Access Configuration",
                  to: "#",
                  logoClass: "prisma",
                  docs: [
                    {
                      label: "Prisma Access Configuration Developer's Guide",
                      to: "access/docs/prisma-access-config",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      to: "access/api/prisma-access-config",
                      label: "Prisma Access Configuration",
                      icon: "api-doc",
                    },
                  ],
                },
                {
                  label: "Prisma Access Insights",
                  to: "#",
                  logoClass: "prisma",
                  docs: [
                    {
                      label: "Get Started 1.0",
                      to: "access/docs/insights/getting_started-10",
                      icon: "doc",
                    },
                    {
                      label: "Get Started 2.0",
                      to: "access/docs/insights/getting_started-20",
                      icon: "doc",
                    },
                    {
                      label: "Get Started 3.0",
                      to: "access/docs/insights/getting_started-30",
                      icon: "doc",
                    },
                    {
                      label: "API FAQs",
                      to: "access/docs/insights/pai-faqs",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      to: "access/api/insights/1.0",
                      label: "Prisma Access Insights 1.0",
                      icon: "api-doc",
                    },
                    {
                      to: "access/api/insights/2.0",
                      label: "Prisma Access Insights 2.0",
                      icon: "api-doc",
                    },
                    {
                      to: "access/api/insights",
                      label: "Prisma Access Insights 3.0",
                      icon: "api-doc",
                    },
                  ],
                },
                {
                  label: "Prisma SD-WAN",
                  to: "#",
                  logoClass: "prisma",
                  docs: [
                    {
                      label: "Prisma SD-WAN Overview",
                      to: "/sdwan/docs",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      to: "sdwan/api",
                      label: "Prisma SD-WAN Unified",
                      icon: "api-doc",
                    },
                    {
                      to: "sdwan/api/legacy",
                      label: "Prisma SD-WAN Legacy",
                      icon: "api-doc",
                    },
                  ],
                },
              ],
            },
            {
              label: "Partner Integrations",
              to: "#",
              colorclass: "partner-integrations",
              description: "Discover technology partner integrations.",
              products: [
                {
                  label: "Automation",
                  to: "#",
                  docs: [
                    {
                      label: "Terraform for Software NGFW",
                      to: "swfw",
                      icon: "doc",
                    },
                    {
                      label: "Terraform and Palo Alto Networks",
                      to: "terraform",
                      icon: "doc",
                    },
                    {
                      label: "Ansible",
                      to: "ansible",
                      icon: "doc",
                    },
                  ],
                },
                {
                  label: "SIEM",
                  to: "#",
                  docs: [
                    {
                      label: "Splunk App/Add-on",
                      to: "splunk/docs",
                      icon: "doc",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          to: "https://gallery.pan.dev",
          className: "header-github-link",
          position: "right",
        },
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          className: "header-blog-link",
          position: "right",
          "aria-label": "Palo Alto Networks Developer Blog",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Palo Alto Networks for developers",
        src: "img/PANW_Parent_Logo_White.svg",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: ["docusaurus-theme-openapi-docs", "@docusaurus/theme-mermaid"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-sitemap",
      {
        id: "pan-sitemap",
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
    [
      require.resolve("./plugin-sitemap-coveo/src/index.cjs"),
      {
        id: "coveo-sitemap",
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "default",
        docsPluginId: "default",
        config: {
          auth: {
            specPath: "openapi-specs/sase/auth",
            outputDir: "products/sase/api/auth",
            proxy: "https://cors.pan.dev",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          iam: {
            specPath: "openapi-specs/sase/iam",
            outputDir: "products/sase/api/iam",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "info" },
          },
          adem: {
            specPath: "openapi-specs/access/adem",
            outputDir: "products/access/api/adem",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
          },
          insights: {
            specPath: "openapi-specs/access/insights/3.0",
            outputDir: "products/access/api/insights",
            sidebarOptions: { groupPathsBy: "tag" },
            version: "3.0",
            label: "v3.0",
            baseUrl: "/access/api/insights/",
            versions: {
              "2.0": {
                specPath: "openapi-specs/access/insights/2.0",
                outputDir: "products/access/api/insights/2.0",
                label: "v2.0",
                baseUrl: "/access/api/insights/2.0",
              },
              "1.0": {
                specPath: "openapi-specs/access/insights/1.0",
                outputDir: "products/access/api/insights/1.0",
                label: "v1.0",
                baseUrl: "/access/api/insights/1.0/",
              },
            },
          },
          mtmonitor: {
            specPath: "openapi-specs/sase/mt-monitor",
            outputDir: "products/sase/api/mt-monitor",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "info" },
          },
          mtnotifications: {
            specPath: "openapi-specs/sase/mt-notifications",
            outputDir: "products/sase/api/mt-notifications",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "info" },
          },
          mtinterconnect: {
            specPath: "openapi-specs/sase/mt-interconnect",
            outputDir: "products/sase/api/mt-interconnect",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          access: {
            specPath: "openapi-specs/access/prisma-access-config",
            outputDir: "products/access/api/prisma-access-config",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          ztna: {
            specPath: "openapi-specs/access/ztna",
            outputDir: "products/access/api/ztna",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          sub: {
            specPath: "openapi-specs/sase/subscription",
            outputDir: "products/sase/api/subscription",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          tenancy: {
            specPath: "openapi-specs/sase/tenancy",
            outputDir: "products/sase/api/tenancy",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          sdwan: {
            specPath: "openapi-specs/sdwan/unified",
            outputDir: "products/sdwan/api",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "info" },
            version: "Unified",
            label: "Unified",
            baseUrl: "/sdwan/api/",
            versions: {
              legacy: {
                specPath: "openapi-specs/sdwan/legacy",
                outputDir: "products/sdwan/api/legacy",
                label: "Legacy",
                baseUrl: "/sdwan/api/legacy/",
              },
            },
          },
          "aiops-ngfw-bpa": {
            specPath: "openapi-specs/aiops-ngfw-bpa/BPAReportAPI.yaml",
            outputDir: "products/aiops-ngfw-bpa/api",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          "email-dlp": {
            specPath: "openapi-specs/email-dlp/EmailDLPAPI.yaml",
            outputDir: "products/email-dlp/api",
            proxy: "https://cors.pan.dev",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          dlp: {
            specPath: "openapi-specs/dlp/DLPAPI.yaml",
            outputDir: "products/dlp/api",
            proxy: "https://cors.pan.dev",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          cloudngfw: {
            specPath: "openapi-specs/cloudngfw/aws",
            outputDir: "products/cloudngfw/api/aws",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "info" },
          },
          iot: {
            specPath: "openapi-specs/iot/iot.yaml",
            outputDir: "products/iot/api",
          },
          "threat-vault": {
            specPath: "openapi-specs/threat-vault/",
            outputDir: "products/threat-vault/api",
            proxy: "https://cors.pan.dev",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "info" },
          },
          "dns-security": {
            specPath: "openapi-specs/dns-security/dns-security.yaml",
            outputDir: "products/dns-security/api",
            proxy: "https://cors.pan.dev",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          cdl: {
            specPath: "openapi-specs/cdl/logforwarding",
            outputDir: "products/cdl/api/logforwarding",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "info" },
          },
          cwpp: {
            specPath: "openapi-specs/cwpp",
            outputDir: "products/prisma-cloud/api/cwpp",
            showExtensions: true,
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            baseUrl: "/prisma-cloud/api/",
            hideSendButton: true,
          },
          cspm: {
            specPath: "openapi-specs/cspm",
            outputDir: "products/prisma-cloud/api/cspm",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            hideSendButton: true,
          },
          code: {
            specPath: "openapi-specs/code",
            outputDir: "products/prisma-cloud/api/code",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            hideSendButton: true,
          },
          compute: {
            specPath: "openapi-specs/compute",
            outputDir: "products/compute/api",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            version: "32.07",
            label: "v32.07",
            showExtensions: true,
            hideSendButton: true,
            baseUrl: "/compute/api/",
            versions: {
              31.02: {
                specPath: "openapi-specs/compute/31-02",
                outputDir: "products/compute/api/31-02",
                label: "v31.02",
                baseUrl: "/compute/api/31-02/",
              },
              30.03: {
                specPath: "openapi-specs/compute/30-03",
                outputDir: "products/compute/api/30-03",
                label: "v30.03",
                baseUrl: "/compute/api/30-03/",
              },
            },
          },
          compute_3203: {
            specPath: "openapi-specs/compute/32-03",
            outputDir: "products/compute/api/32-03",
            showExtensions: true,
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            baseUrl: "/compute/api/32-03/",
          },
          compute_3204: {
            specPath: "openapi-specs/compute/32-04",
            outputDir: "products/compute/api/32-04",
            showExtensions: true,
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            baseUrl: "/compute/api/32-04/",
          },
          compute_3205: {
            specPath: "openapi-specs/compute/32-05",
            outputDir: "products/compute/api/32-05",
            showExtensions: true,
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            baseUrl: "/compute/api/32-05/",
          },
          compute_3206: {
            specPath: "openapi-specs/compute/32-06",
            outputDir: "products/compute/api/32-06",
            showExtensions: true,
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            baseUrl: "/compute/api/32-06/",
          },
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "default",
        routeBasePath: "/",
        path: "products",
        sidebarPath: "./sidebars.js",
        editUrl: "https://github.com/PaloAltoNetworks/pan.dev/tree/master",
        include: ["**/*.{md,mdx}"],
        docItemComponent: "@theme/ApiItem",
      },
    ],
    [
      require.resolve("./docusaurus-plugin-gtm/index.js"),
      {
        gtm: "GTM-PLXD79N",
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v6.2.0/css/all.css",
      type: "text/css",
      rel: "stylesheet",
    },
  ],
  onDuplicateRoutes: "warn",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2019",
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  customFields: {
    firebaseApiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    recaptchaApiKey: process.env.REACT_APP_RECAPTCHA_APIKEY,
    errorReporterApiKey: process.env.REACT_APP_ERROR_REPORTER_APIKEY,
  },
};

/*
Takes in list of products to filter based on directory, outputs list of globby include for the doc plugin
*/
function docsPluginInclude(filters) {
  include = [];
  filters.forEach((product) => {
    let product_include = product + "/**/*.{md,mdx}";
    include.push(product_include);
  });
  return include;
}

async function createConfig() {
  let filters =
    process.env.PRODUCTS_INCLUDE && process.env.PRODUCTS_INCLUDE.split(",");
  if (filters) {
    config.plugins[4][1].include = docsPluginInclude(filters);
  }
  return config;
}

module.exports = createConfig;
