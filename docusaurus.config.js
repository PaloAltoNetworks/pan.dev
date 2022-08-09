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

module.exports = {
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
    colorMode: {
      defaultMode: "light",
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
          label: "Network Security",
          items: [
            {
              to: "cloudngfw/docs",
              label: "Cloud NGFW",
              logoClass: "panos",
              docs: [
                {
                  to: "cloudngfw/docs",
                  label: "Cloud NGFW Doc 1"
                },
                {
                  to: "cloudngfw/docs",
                  label: "Cloud NGFW Doc 2"
                },
                {
                  to: "cloudngfw/docs",
                  label: "Cloud NGFW Doc 3"
                },
              ],
              apidocs: [
                {
                  to: "cloudfw/docs",
                  label: "Cloud NGFW API Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "Cloud NGFW API Doc 2"
                },
                {
                  to: "cloudfw/docs",
                  label: "Cloud NGFW API Doc 3"
                },
              ]
            },
            {
              to: "panos/docs",
              label: "PAN-OS",
              logoClass: "panos",
              docs: [
                {
                  to: "cloudfw/docs",
                  label: "PAN-OS Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "PAN-OS Doc 2"
                },
                {
                  to: "cloudfw/docs",
                  label: "PAN-OS Doc 3"
                },
              ],
              apidocs: [
                {
                  to: "cloudfw/docs",
                  label: "PAN-OS API Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "PAN-OS API Doc 2"
                },
                {
                  to: "cloudfw/docs",
                  label: "PAN-OS API Doc 3"
                },
              ]
            },
            {
              to: "cloudngfw/aws/api",
              label: "Cloud NGFW for AWS",
              logoClass: "panos",
              docs: [
                {
                  to: "cloudfw/docs",
                  label: "Cloud AWS Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "Cloud AWS Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "Cloud AWS Doc 1"
                },
              ],
              apidocs: [
                {
                  to: "cloudfw/docs",
                  label: "Cloud AWS API Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "Cloud AWS API Doc 2"
                },
                {
                  to: "cloudfw/docs",
                  label: "Cloud AWS API Doc 3"
                },
              ]
            },
            {
              to: "cdss/iot/api/iot-public-api-headers",
              label: "IoT API",
              logoClass: "panos",
              docs: [
                {
                  to: "cloudfw/docs",
                  label: "IoT Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "IoT Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "IoT Doc 1"
                },
              ],
              apidocs: [
                {
                  to: "cloudfw/docs",
                  label: "IoT API Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "IoT API Doc 2"
                },
                {
                  to: "cloudfw/docs",
                  label: "IoT API Doc 3"
                },
              ]
            },
            {
              to: "cdss/tp/api",
              label: "Threat Prevention API",
              logoClass: "panos",
              docs: [
                {
                  to: "cloudfw/docs",
                  label: "TP Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "TP Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "TP Doc 1"
                },
              ],
              apidocs: [
                {
                  to: "cloudfw/docs",
                  label: "TP API Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "TP API Doc 2"
                },
                {
                  to: "cloudfw/docs",
                  label: "TP API Doc 3"
                },
              ]
            },
            {
              to: "expedition/docs",
              label: "Expedition",
              logoClass: "cortex",
              docs: [
                {
                  to: "cloudfw/docs",
                  label: "Expedition Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "Expedition Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "Expedition Doc 1"
                },
              ],
              apidocs: [
                {
                  to: "cloudfw/docs",
                  label: "Expedition API Doc 1"
                },
                {
                  to: "cloudfw/docs",
                  label: "Expedition API Doc 2"
                },
                {
                  to: "cloudfw/docs",
                  label: "Expedition API Doc 3"
                },
              ]
            },
          ],
        },
        {
          label: "Secure Access Service Edge",
          to: "sase",
          items: [
            {
              to: "sase/docs",
              label: "Prisma SASE",
              logoClass: "prisma",
              docs: [
                {
                  to: "sase/docs",
                  label: "Prisma SASE Developer's Guide"
                },
                {
                  to: "/sase/docs/release-notes/changelog",
                  label: "Prisma SASE Changelog",
                },
                {
                  to: "/sase/docs/release-notes/release-notes",
                  label: "Prisma SASE Release Notes",
                }
              ],
              apidocs: [
                {
                  to: "sase/api/tenancy",
                  label: "Tenancy Service",
                },
                {
                  to: "sase/api/iam",
                  label: "Identity and Access Management",
                },
                {
                  to: "sase/api/auth",
                  label: "Authentication Service",
                },
                {
                  to: "sase/api/subscription",
                  label: "Subscription Service",
                },
                {
                  to: "sase/api/prisma-access-config",
                  label: "Prisma Access Configuration",
                },
                {
                  to: "sase/api/mt-monitor",
                  label: "Aggregate Monitoring",
                },
                {
                  to: "sase/api/insights/1.0",
                  label: "Prisma Access Insights",
                },
              ]
            }
          ],
        },
        {
          label: "Other Developer Docs",
          position: "right",
          items: [
            {
              href: "https://cortex.pan.dev",
              label: "Cortex Data Lake",
              logo: "/img/cortexfavicon.png",
            },
            {
              href: "https://xsoar.pan.dev",
              label: "Cortex XSOAR",
              logo: "/img/Cortex-XSOAR-product-green.svg",
            },
            {
              href: "https://panos.pan.dev",
              label: "PAN-OS",
              logo: "/img/strata_favicon.png",
            },
            {
              href: "https://prisma.pan.dev",
              label: "Prisma",
              logo: "/img/prismafavicon.png",
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
  themes: [
    "docusaurus-theme-openapi-docs",
    require.resolve("./docusaurus-plugin-panw/src/index.cjs"),
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./docs/sidebar.js"),
          docItemComponent: "@theme/ApiItem",
          remarkPlugins: [require("mdx-mermaid")],
          editUrl: "https://github.com/PaloAltoNetworks/pan.dev/tree/master",
        },
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
      "docusaurus-plugin-openapi-docs",
      { id: "apis", docsPluginId: "docs", config: require("./api.config") },
    ],
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sase",
        path: "sase",
        routeBasePath: "sase",
        sidebarPath: require.resolve("./sase/sidebar.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cloudngfw",
        path: "cloudngfw",
        routeBasePath: "cloudngfw",
        sidebarPath: require.resolve("./cloudngfw/sidebar.js"),
      },
    ],
    "docusaurus-plugin-sass",
  ],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css",
      type: "text/css",
      rel: "stylesheet",
    },
  ],
  customFields: {
    pai_versions: [
      {
        label: "Version 1.0",
        to: "/sase/api/insights/1.0",
        version: "1.0",
      },
      {
        label: "Version 2.0",
        to: "/sase/api/insights/2.0",
        version: "2.0",
      },
    ],
  },
  onDuplicateRoutes: "warn",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
};
