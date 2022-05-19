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
console.log(baseUrl);
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
          label: "Secure Access Service Edge",
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
              to: "sase-old/api/tenancy",
              label: "Tenancy Service",
              className: "indent",
            },
            {
              to: "sase-old/api/iam",
              label: "Identity and Access Management",
              className: "indent",
            },
            {
              to: "sase-old/api/auth",
              label: "Authentication Service",
              className: "indent",
            },
            {
              to: "sase-old/api/subscription",
              label: "Subscription Service",
              className: "indent",
            },
            {
              to: "sase-old/api/prisma-access-config",
              label: "Prisma Access Configuration",
              className: "indent",
            },
            {
              to: "sase-old/api/mt-monitor",
              label: "Aggregate Monitoring",
              className: "indent",
            },
            {
              to: "sase-old/api/insights/2.0",
              label: "Prisma Access Insights",
              className: "indent",
            },
          ],
        },
        {
          label: "New SASE",
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
              to: "sase/api/tenancy/introduction",
              label: "Tenancy Service",
              className: "indent",
            },
            {
              to: "sase/api/iam/introduction",
              label: "Identity and Access Management",
              className: "indent",
            },
            {
              to: "sase/api/auth/introduction",
              label: "Authentication Service",
              className: "indent",
            },
            {
              to: "sase/api/subscription/introduction",
              label: "Subscription Service",
              className: "indent",
            },
            {
              to: "sase/api/prisma-access-config/introduction",
              label: "Prisma Access Configuration",
              className: "indent",
            },
            {
              to: "sase/api/mt-monitor/introduction",
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
    "docusaurus-theme-openapi-docs"
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./contributing/sidebars.js"),
          path: "contributing",
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
        id: "sase",
        config: {
          auth: {
            specPath: "static/sase/spec/auth",
            outputDir: "products/sase/api/auth",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          iam: {
            specPath: "static/sase/spec/iam",
            outputDir: "products/sase/api/iam",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          insights: {
            specPath: "static/sase/spec/insights",
            outputDir: "products/sase/api/insights",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          mtmonitor: {
            specPath: "static/sase/spec/mt-monitor",
            outputDir: "products/sase/api/mt-monitor",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          access: {
            specPath: "static/sase/spec/prisma-access-config",
            outputDir: "products/sase/api/prisma-access-config",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          sub: {
            specPath: "static/sase/spec/subscription",
            outputDir: "products/sase/api/subscription",
            sidebarOptions: {
              groupPathsBy: "tags",
            },
          },
          tenancy: {
            specPath: "static/sase/spec/tenancy",
            outputDir: "products/sase/api/tenancy",
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sase",
        path: "sase",
        routeBasePath: "sase-old",
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "products",
        path: "products",
        routeBasePath: "/",
        sidebarPath: require.resolve("./products/sidebars.js"),
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
};
