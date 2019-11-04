/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Build Security",
  tagline: "Explore our API Doc, Quickstarts, and Blog or dive right in and play in our sandbox. We have all the tools you needs to make the next big security innovation. SDKs in your favorite languages, detailed walk-throughs for sample apps, and all the resources you’ll need to flourish.",
  url: "https://pan.dev",
  baseUrl: "/",
  favicon: "img/panospeelable.png",
  organizationName: "PaloAltoNetworks", // Usually your GitHub org/user name.
  projectName: "pan.dev", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Palo Alto Networks for Developers",
        src: "img/pandev.png"
      },
      links: [
        {
          href: "panos.pan.dev",
          label: "PAN-OS",
          position: "left"
        },
        {
          href: "cortex.pan.dev",
          label: "Cortex",
          position: "left"
        },
        {
          href: "demisto.pan.dev",
          label: "Demisto",
          position: "left"
        },
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          label: "Blog",
          position: "left"
        },
        {
          href: "https://github.com/PaloAltoNetworks",
          label: "GitHub",
          position: "left"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "APIs and SDKs",
              to: "docs/panos_api"
            },
            {
              label: "Automation",
              to: "docs/automation"
            },
            {
              label: "Cloud Templates",
              to: "docs/cloud"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Automation and API",
              href:
                "https://live.paloaltonetworks.com/t5/Automation-API/ct-p/automation"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://medium.com/palo-alto-networks-developer-blog"
            }
          ]
        }
      ],
      logo: {
        alt: "Palo Alto Networks for developers",
        src: "img/pandev.png"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`
    }
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl:
          //   "https://github.com/PaloAltoNetworks/panos.pan.dev/tree/master/docs",
          routeBasePath: "docs",
          include: ["**/*.md", "**/*.mdx"], // Extensions to include.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/DocItem",
          remarkPlugins: [],
          rehypePlugins: [],
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  plugins: [
    "@docusaurus/plugin-sitemap",
    {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: "weekly",
      priority: 0.5
    }
  ]
};
