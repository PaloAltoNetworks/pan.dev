/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const blogs = (module.exports = {
  title: "Develop with Palo Alto Networks",
  tagline:
    "Explore our API Doc, Quickstarts, and Blog or dive right in and play in our sandbox. We have all the tools you needs to make the next big security innovation. SDKs in your favorite languages, detailed walk-throughs for sample apps, and all the resources you’ll need to flourish.",
  url: "https://pan.dev",
  baseUrl: "/",
  favicon: "img/parent_favicon.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "pan.dev", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    algolia: {
      apiKey: "cc0f2da5c80d2fb8dedb7ef9b56b52f2",
      indexName: "pan",
      searchParameters: {
        typoTolerance: false,
        facetFilters: [
          ["tags:prisma", "tags:strata", "tags:xsoar", "tags:cortex"],
        ],
      }, // Optional, if provided by Algolia
    },
    hideOnScroll: true,
    sidebarCollapsible: true,
    navbar: {
      title: "",
      logo: {
        alt: "Palo Alto Networks for Developers",
        src: "img/PANW_Parent_Logo_White.svg",
      },
      items: [
        {
          to: "https://gallery.pan.dev",
          label: "Code Gallery",
          position: "right",
        },
        {
          to: "https://medium.com/palo-alto-networks-developer-blog",
          label: "Blog",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      logo: {
        alt: "Palo Alto Networks for developers",
        src: "img/PANW_Parent_Logo_Black.svg",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
    },
    gtag: {
      trackingID: "GTM-PLXD79N",
    },
  },
  themes: [require.resolve("@docusaurus/theme-live-codeblock")],
  presets: [
    [
      require.resolve("@docusaurus/preset-classic"),
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/PaloAltoNetworks/prisma.pan.dev/tree/master/",
          routeBasePath: "docs",
          include: ["**/*.md", "**/*.mdx"], // Extensions to include.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/DocItem",
          remarkPlugins: [],
          rehypePlugins: [],
          path: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-sitemap",
      {
        id: "prisma-sitemap",
        changefreq: "weekly",
        priority: 0.5,
      },
    ],
  ],
});
