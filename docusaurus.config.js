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
  themeConfig: {
    prism: {
      additionalLanguages: ["ruby", "csharp", "php"]
    },
    colorMode: {
      defaultMode: "light",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    algolia: {
      apiKey: "6869800b232f5f8362e83901d79110ee",
      appId: "XC7919KOX3",
      indexName: "pan",
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
              label: "Network Security",
              to: "#",
              colorclass: "network-security",
              description:
                "Learn how to make the most of the PAN-OS APIs, Expedition, Terraform, Ansible, and more.",
              products: [
                {
                  label: "Cloud NGFW",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "Cloud NGFW",
                      to: "cloudngfw/docs",
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
                  label: "Cloud-Delivered Security Services",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "Cloud-Delivered Security Services",
                      to: "/threat-vault/docs",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
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
                      icon: "doc"
                    },
                    {
                      to: "sase/docs/release-notes/changelog",
                      label: "Prisma SASE Changelog",
                      icon: "doc"
                    },
                    {
                      to: "sase/docs/release-notes",
                      label: "Prisma SASE Release Notes",
                      icon: "doc"
                    }
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
                      to: "access/api/prisma-access-config",
                      label: "Prisma Access Configuration",
                      icon: "api-doc"
                    },
                    {
                      to: "sdwan/api/unified/unified",
                      label: "Prisma SD-WAN",
                      icon: "api-doc"
                    },
                    {
                      to: "sase/api/mt-monitor",
                      label: "Aggregate Monitoring",
                      icon: "api-doc"
                    },
                    {
                      to: "access/api/insights",
                      label: "Prisma Access Insights",
                      icon: "api-doc"
                    },
                  ]
                },
                {
                  label: "Prisma Access Configuration",
                  to: "#",
                  logoClass: "prisma",
                  docs: [
                    {
                      label: "Prisma Access Configuration",
                      to: "access/docs/prisma-access-config",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      to: "access/api/prisma-access-config",
                      label: "Prisma Access Configuration APIs",
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
                      icon: "doc"
                    },
                    {
                      label: "Get Started 2.0",
                      to: "access/docs/insights/getting_started-20",
                      icon: "doc",
                    },
                  ],
                  apiDocs: [
                    {
                      to: "access/api/insights/1.0",
                      label: "Prisma Access Insights 1.0",
                      icon: "api-doc"
                    },
                    {
                      to: "access/api/insights",
                      label: "Prisma Access Insights 2.0",
                      icon: "api-doc"
                    }
                  ]
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
                      to: "/sdwan/api/unified/unified",
                      label: "Prisma SD-WAN Unified",
                      icon: "api-doc",
                    },
                    {
                      to: "/sdwan/api/legacy/legacy",
                      label: "Prisma SD-WAN Legacy",
                      icon: "api-doc",
                    },
                  ],
                },
              ],
            },
            {
              label: "Cloud Native Security",
              to: "#",
              colorclass: "cloud-native-security",
              description:
                "Discover the APIs, tools and techniques necessary for bringing DevOps practices to the cloud.",
              products: [
                {
                  to: "https://prisma.pan.dev/docs/cloud/cspm/cspm-gs",
                  label: "Cloud Security Posture Management",
                  logoClass: "prisma",
                  apiDocs: [
                    {
                      to: "https://prisma.pan.dev/api/cloud/cspm/",
                      label: "CSPM API",
                      icon: "api-doc",
                    },
                  ],
                  docs: [
                    {
                      to: "https://prisma.pan.dev/docs/cloud/cspm/cspm-gs",
                      label: "Getting Started",
                      icon: "doc",
                    },
                  ],
                },
                {
                  label: "Cloud Workload Protection Platform",
                  to: "#",
                  logoClass: "prisma",
                  apiDocs: [
                    {
                      to: "https://prisma.pan.dev/api/cloud/cwpp",
                      label: "CWPP API",
                      icon: "api-doc",
                    },
                  ],
                  docs: [
                    {
                      to: "https://prisma.pan.dev/docs/cloud/cwpp/cwpp-gs",
                      label: "Getting Started",
                      icon: "doc",
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
                      label: "XSOAR (Demoisto) API",
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
  themes: ["docusaurus-theme-openapi-docs"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
        gtag: {
          trackingID: "GTM-PLXD79N",
          anonymizeIP: true,
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
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          iam: {
            specPath: "openapi-specs/sase/iam",
            outputDir: "products/sase/api/iam",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          insights: {
            specPath: "openapi-specs/access/insights/2.0",
            outputDir: "products/access/api/insights",
            sidebarOptions: { groupPathsBy: "tag" },
            version: "2.0",
            label: "v2.0",
            baseUrl: "/category/access/api/insights/v-2-0/data-resource/",
            versions: {
              "1.0": {
                specPath: "openapi-specs/access/insights/1.0",
                outputDir: "products/access/api/insights/1.0",
                label: "v1.0",
                baseUrl:
                  "/category/access/api/insights/1.0/v-1-0/data-resource/",
              },
            },
          },
          mtmonitor: {
            specPath: "openapi-specs/sase/mt-monitor",
            outputDir: "products/sase/api/mt-monitor",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          access: {
            specPath: "openapi-specs/access/prisma-access-config",
            outputDir: "products/access/api/prisma-access-config",
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
            sidebarOptions: { groupPathsBy: "tag" },
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
          cloudngfw: {
            specPath: "openapi-specs/cloudngfw/aws",
            outputDir: "products/cloudngfw/api/aws",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          iot: {
            specPath: "openapi-specs/iot/iot.yaml",
            outputDir: "products/iot/api",
          },
          "threat-vault": {
            specPath: "openapi-specs/threat-vault/",
            outputDir: "products/threat-vault/api",
            sidebarOptions: { groupPathsBy: "tag" },
          },
          "dns-security": {
            specPath: "openapi-specs/dns-security/dns-security.yaml",
            outputDir: "products/dns-security/api",
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
  ],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css",
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
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        format: isServer ? "cjs" : undefined,
        target: isServer ? "node12" : "es2017",
      },
    }),
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
