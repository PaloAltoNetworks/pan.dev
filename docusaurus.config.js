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
          label: "Developer Docs",
          className: "margin-left--lg",
          megaNav: true,
          items: [
            {
              label: "Network Security",
              to: "#",
              className: "dropdown__category-title",
              children: [
                {
                  label: "Cloud NGFW",
                  to: "cloudngfw/docs",
                },
                {
                  label: "PAN-OS ",
                  to: "panos/docs",
                },
                {
                  label: "Cloud-Delivered Security Services",
                  to: "cdss/threat-vault/docs/getstarted",
                },
                {
                  label: "Expedition",
                  to: "expedition/docs",
                },
              ],
            },
            {
              label: "Security Access Service Edge",
              to: "#",
              className: "dropdown__category-title",
              children: [
                {
                  to: "sase/docs",
                  label: "Prisma SASE",
                },
                {
                  to: "sase/docs/prisma-access-config/prisma-access-config",
                  label: "Prisma Access Configuration",
                },
                {
                  to: "sase/docs/insights",
                  label: "Prisma Access Insights",
                },
                {
                  to: "sase/docs/sdwan",
                  label: "Prisma SD-WAN",
                },
              ],
            },
            {
              label: "Cloud Native Security",
              to: "#",
              className: "dropdown__category-title",
              children: [
                {
                  to: "https://prisma.pan.dev/docs/cloud/cspm/cspm-gs",
                  label: "Cloud Security Posture Management",
                },
                {
                  to: "https://prisma.pan.dev/docs/cloud/cwpp/cwpp-gs",
                  label: "Cloud Workload Protection Platform",
                },
              ],
            },
            {
              label: "Security Operations",
              to: "#",
              className: "dropdown__category-title",
              children: [
                {
                  to: "https://xsoar.pan.dev/docs/welcome",
                  label: "Cortex XSOAR",
                },
                {
                  to: "https://cortex-xpanse-python-sdk.readthedocs.io/en/latest/",
                  label: "Xpanse Python SDK",
                },
              ],
            },
          ],
        },
        {
          label: "API Reference",
          className: "margin-left--lg",
          to: "sase",
          megaNav: true,
          items: [
            {
              label: "Network Security",
              to: "#",
              className: "dropdown__category-title",
              children: [
                {
                  to: "cloudngfw/aws/api/",
                  label: "Cloud NGFW for AWS API",
                },
                {
                  to: "panos/docs/apis/",
                  label: "PAN-OS APIs and SDKs",
                },
                {
                  to: "cdss/iot/api/iot-public-api-headers",
                  label: "IoT API",
                },
                {
                  to: "cdss/threat-vault/api",
                  label: "Threat Vault API",
                },
              ],
            },
            {
              label: "Security Access Service Edge",
              to: "#",
              className: "dropdown__category-title",
              children: [
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
                  to: "sase/api/mt-monitor",
                  label: "Aggregate Monitoring",
                },
                {
                  to: "sase/api/prisma-access-config",
                  label: "Prisma Access Configuration API",
                },
                {
                  to: "sase/api/insights/2.0",
                  label: "Prisma Access Insights API",
                },
                {
                  to: "sase/api/sdwan/unified",
                  label: "Prisma SD-WAN API",
                },
              ],
            },
            {
              label: "Cloud Native Security",
              to: "#",
              className: "dropdown__category-title",
              children: [
                {
                  to: "https://prisma.pan.dev/api/cloud/cspm",
                  label: "CSPM API",
                },
                {
                  to: "https://prisma.pan.dev/api/cloud/cwpp",
                  label: "CWPP API",
                },
                {
                  to: "https://prisma.pan.dev/api/cloud/code",
                  label: "Code Security API",
                },
              ],
            },
            {
              label: "Security Operations",
              to: "#",
              className: "dropdown__category-title",
              children: [
                {
                  to: "https://xsoar.pan.dev/docs/reference/api/demisto-class",
                  label: "XSOAR (Demisto) API",
                },
                {
                  to: "https://cortex.pan.dev/api/expander/annotations-api",
                  label: "Expander API",
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
        docs: {
          id: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./docs/sidebar.js"),
          docItemComponent: "@theme/ApiItem",
          remarkPlugins: [],
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
    "docusaurus-plugin-sass",
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

async function createConfig() {
  //const mdxMermaid = await import("mdx-mermaid");
  // @ts-expect-error: we know it exists, right
  // config.presets[0][1].docs.remarkPlugins.push(mdxMermaid.default);
  return config;
}

module.exports = createConfig;
