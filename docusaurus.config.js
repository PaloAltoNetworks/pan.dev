/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
  title: "Develop with Palo Alto Networks",
  tagline:
    "Explore our API Doc, Quickstarts, and Blog or dive right in and play in our sandbox. We have all the tools you needs to make the next big security innovation. SDKs in your favorite languages, detailed walk-throughs for sample apps, and all the resources you’ll need to flourish.",
  url: "https://pan.dev",
  baseUrl: "/",
  favicon: "img/PANW_Parent_Glyph_Red.svg",
  organizationName: "PaloAltoNetworks",
  projectName: "pan.dev",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
    },
    /*
    algolia: {
      apiKey: "6869800b232f5f8362e83901d79110ee",
      appId: "XC7919KOX3",
      indexName: "pan",
      searchParameters: {
        typoTolerance: false,
        facetFilters: [
          ["tags:prisma", "tags:strata", "tags:xsoar", "tags:cortex"],
        ],
      }, // Optional, if provided by Algolia
    },
    */
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
          to: "cloudngfw",
          items: [
            {
              to: "#",
              label: "Docs",
              className: "section__docs",
            },
            {
              to: "cloudngfw/docs",
              label: "Cloud NGFW",
              className: "indent",
            },
            {
              to: "#",
              label: "API Reference",
              className: "section__docs",
            },
            {
              to: "cloudngfw/aws/api",
              label: "Cloud NGFW for AWS",
              className: "indent",
            },
          ],
        },
        {
          label: "SASE",
          to: "sase",
          items: [
            {
              to: "#",
              label: "Docs",
              className: "section__docs",
            },
            {
              to: "sase/docs",
              label: "Prisma SASE",
              className: "indent",
            },
            {
              to: "#",
              label: "Prisma SASE API Reference",
              className: "section__docs",
            },
            {
              to: "sase/api/tenancy",
              label: "Tenancy Service",
              className: "indent",
            },
            {
              to: "sase/api/iam",
              label: "Identity and Access Management",
              className: "indent",
            },
            {
              to: "sase/api/auth",
              label: "Authentication Service",
              className: "indent",
            },
            {
              to: "sase/api/subscription/introduction",
              label: "Subscription Service",
              className: "indent",
            },
            {
              to: "sase/api/prisma-access-config",
              label: "Prisma Access Configuration",
              className: "indent",
            },
            {
              to: "sase/api/mt-monitor",
              label: "Aggregate Monitoring",
              className: "indent",
            },
            {
              to: "sase/api/insights/2.0/introduction",
              label: "Prisma Access Insights",
              className: "indent",
            },
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
    [
      require.resolve("./docusaurus-plugin-panw/src/index.cjs"),
      {
        gtm: "GTM-PLXD79N",
      },
    ],
    "docusaurus-theme-openapi-docs",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "docs",
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./docs/sidebars.js"),
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "apis",
        config: {
          auth: {
            specPath: "static/sase/spec/auth",
            outputDir: "docs/sase/api/auth",
            sidebarOptions: {
              groupPathsBy: "tags",
              categoryLinkSource: "info",
            },
          },
          iam: {
            specPath: "static/sase/spec/iam",
            outputDir: "docs/sase/api/iam",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          insightsv1: {
            specPath: "static/sase/spec/insights/1.0",
            outputDir: "docs/sase/api/insights/1.0",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          insightsv2: {
            specPath: "static/sase/spec/insights/2.0",
            outputDir: "docs/sase/api/insights/2.0",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          mtmonitor: {
            specPath: "static/sase/spec/mt-monitor",
            outputDir: "docs/sase/api/mt-monitor",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          access: {
            specPath: "static/sase/spec/prisma-access-config",
            outputDir: "docs/sase/api/prisma-access-config",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          sub: {
            specPath: "static/sase/spec/subscription",
            outputDir: "docs/sase/api/subscription",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          tenancy: {
            specPath: "static/sase/spec/tenancy",
            outputDir: "docs/sase/api/tenancy",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          cloudngfw: {
            specPath: "static/cloudngfw/aws/spec/api",
            outputDir: "docs/cloudngfw/api/aws",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
        },
      },
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
        label: "Version 2.0",
        to: "/sase/api/insights/2.0",
        version: "2.0",
      },
      {
        label: "Version 1.0",
        to: "/sase/api/insights/1.0",
        version: "1.0",
      },
    ],
  },
  onDuplicateRoutes: "throw",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: true,
};
