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
      defaultMode: "light"
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
        facetFilters: [["tags:pandev"]]
      }
    },
    hideOnScroll: true,
    navbar: {
      title: "",
      logo: {
        alt: "Palo Alto Networks for Developers",
        src: "img/pan_dev_black.svg",
        srcDark: "img/pan_dev_white.svg"
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
              description: "Learn how to make the most of the PAN-OS APIs, Expedition, Terraform, Ansible, and more.",
              products: [
                {
                  label: "Cloud NGFW",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "Cloud NGFW",
                      to: "cloudngfw/docs",
                      icon: "doc"
                    }
                  ],
                  apiDocs: [
                    {
                      to: "cloudngfw/aws/api/",
                      label: "Cloud NGFW for AWS API",
                      icon: "api-doc"
                    }
                  ]
                },
                {
                  label: "PAN-OS",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "PAN-OS ",
                      to: "panos/docs",
                      icon: "doc"
                    }
                  ],
                  apiDocs: [
                    {
                      to: "panos/docs/apis/",
                      label: "PAN-OS APIs and SDKs",
                      icon: "api-doc"
                    }
                  ]
                },
                {
                  label: "Cloud-Delivered Security Services",
                  to: "#",
                  logoClass: "panos",
                  docs: [
                    {
                      label: "Cloud-Delivered Security Services",
                      to: "cdss/threat-vault/docs/getstarted",
                      icon: "doc"
                    }
                  ],
                  apiDocs: [
                    {
                      to: "cloudngfw/aws/api/",
                      label: "Cloud NGFW for AWS API",
                      icon: "api-doc"
                    }
                  ]
                },
                {
                  label: "Expedition",
                  to: "#",
                  logoClass: "cortex",
                  docs: [
                    {
                      label: "Expedition",
                      to: "expedition/docs",
                      icon: "doc"
                    }
                  ],
                  apiDocs: [
                    {
                      to: "cdss/threat-vault/api",
                      label: "Threat Vault API",
                      icon: "api-doc"
                    }
                  ]
                }
              ]
            },
            {
              label: "Security Access Service Edge",
              to: "#",
              colorclass: "sase",
              description: "Discover Prisma SASE APIs, including Prisma Access and Prisma SD-WAN.",
              products: [
                {
                  label: "Prisma SASE",
                  to: "#",
                  logoClass: "prisma",
                  docs: [
                    {
                      to: "sase/docs",
                      label: "Prisma SASE Overview",
                      icon: "doc"
                    }
                  ],
                  apiDocs: [
                    {
                      to: "sase/api/tenancy",
                      label: "Tenancy Service",
                      icon: "api-doc"
                    },
                    {
                      to: "sase/api/iam",
                      label: "Identity and Access Management",
                      icon: "api-doc"
                    },
                    {
                      to: "sase/api/auth",
                      label: "Authentication Service",
                      icon: "api-doc"
                    },
                    {
                      to: "sase/api/subscription",
                      label: "Subscription Service",
                      icon: "api-doc"
                    },
                    {
                      to: "sase/api/mt-monitor",
                      label: "Aggregate Monitoring",
                      icon: "api-doc"
                    },
                    {
                      to: "sase/api/prisma-access-config",
                      label: "Prisma Access Configuration API",
                      icon: "api-doc"
                    },
                    {
                      to: "category/sase/api/insights/2.0/v-2-0/data-resource/",
                      label: "Prisma Access Insights API",
                      icon: "api-doc"
                    },
                    {
                      to: "sase/api/sdwan",
                      label: "Prisma SD-WAN API",
                      icon: "api-doc"
                    }
                  ]
                },
                {
                  label: "Prisma Access Configuration",
                  to: "#",
                  logoClass: "prisma",
                  docs: [
                    {
                      label: "Prisma Access Configuration",
                      to: "sase/docs/prisma-access-config",
                      icon: "doc"
                    }
                  ],
                  apiDocs: [
                    {
                      to: "sase/api/prisma-access-config",
                      label: "Prisma Access Configuration APIs",
                      icon: "api-doc"
                    }
                  ]
                },
                {
                  label: "Prisma Access Insights",
                  to: "#",
                  logoClass: "prisma",
                  docs: [
                    {
                      label: "Get Started 2.0",
                      to: "sase/docs/insights/getting_started-20",
                      icon: "doc"
                    }
                  ],
                  apiDocs: [
                    {
                      to: "sase/docs/insights",
                      label: "Prisma Access Insights APIs",
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
                      to: "sase/docs/sdwan",
                      icon: "doc"
                    }
                  ],
                  apiDocs: [
                    {
                      to: "sase/api/sdwan",
                      label: "Prisma SD-WAN Unified",
                      icon: "api-doc"
                    },
                    {
                      to: "sase/api/sdwan/legacy",
                      label: "Prisma SD-WAN Legacy",
                      icon: "api-doc"
                    }
                  ]
                }
              ]
            },
            {
              label: "Cloud Native Security",
              to: "#",
              colorclass: "cloud-native-security",
              description: "Discover the APIs, tools and techniques necessary for bringing DevOps practices to the cloud.",
              products: [
                {
                  to: "https://prisma.pan.dev/docs/cloud/cspm/cspm-gs",
                  label: "Cloud Security Posture Management",
                  logoClass: "prisma",
                  apiDocs: [
                    {
                      to: "https://prisma.pan.dev/api/cloud/cspm/",
                      label: "CSPM API",
                      icon: "api-doc"
                    }
                  ],
                  docs: [
                    {
                      to: "https://prisma.pan.dev/docs/cloud/cspm/cspm-gs",
                      label: "Getting Started",
                      icon: "doc"
                    }
                  ]
                },
                {
                  label: "Cloud Workload Protection Platform",
                  to: "#",
                  logoClass: "prisma",
                  apiDocs: [
                    {
                      to: "https://prisma.pan.dev/api/cloud/cwpp",
                      label: "CWPP API",
                      icon: "api-doc"
                    }
                  ],
                  docs: [
                    {
                      to: "https://prisma.pan.dev/docs/cloud/cwpp/cwpp-gs",
                      label: "Getting Started",
                      icon: "doc"
                    }
                  ]
                }
              ]
            },
            {
              label: "Security Operations",
              to: "#",
              colorclass: "security-operations",
              description: "Browse reference docs, tutorials, the XSOAR Marketplace and more.",
              products: [
                {
                  to: "#",
                  label: "Cortex XSOAR",
                  logoClass: "xsoar",
                  apiDocs: [
                    {
                      label: "XSOAR (Demoisto) API",
                      to: "https://xsoar.pan.dev/docs/reference/api/demisto-class",
                      icon: "api-doc"
                    }
                  ],
                  docs: [
                    {
                      label: "Cortex XSOAR Developer Hub",
                      to: "https://xsoar.pan.dev/docs/welcome",
                      icon: "doc"
                    }
                  ]
                },
                {
                  label: "Cortex",
                  to: "#",
                  logoClass: "cortex",
                  apiDocs: [
                    {
                      label: "Expander API",
                      to: "https://cortex.pan.dev/api/expander/annotations-api",
                      icon: "api-doc"
                    }
                  ],
                  docs: [
                    {
                      label: "Xpanse Python SDK",
                      to: "https://cortex-xpanse-python-sdk.readthedocs.io/en/latest/",
                      icon: "doc"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          to: "https://gallery.pan.dev",
          className: "header-github-link",
          position: "right"
        },
        {
          href: "https://medium.com/palo-alto-networks-developer-blog",
          className: "header-blog-link",
          position: "right",
          "aria-label": "Palo Alto Networks Developer Blog"
        }
      ]
    },
    footer: {
      style: "light",
      logo: {
        alt: "Palo Alto Networks for developers",
        src: "img/PANW_Parent_Logo_White.svg"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`
    }
  },
  themes: ["docusaurus-theme-openapi-docs"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./docs/sidebars.js"),
          docItemComponent: "@theme/ApiItem",
          remarkPlugins: [],
          editUrl: "https://github.com/PaloAltoNetworks/pan.dev/tree/master",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")]
        },
        gtag: {
          trackingID: "GTM-PLXD79N",
          anonymizeIP: true
        }
      }
    ]
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      { id: "apis", docsPluginId: "docs", config: require("./api.config") }
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        id: "pan-sitemap",
        changefreq: "weekly",
        priority: 0.5
      }
    ],
    [
      require.resolve("./plugin-sitemap-coveo/src/index.cjs"),
      {
        id: "coveo-sitemap",
        changefreq: "weekly",
        priority: 0.5
      }
    ],
    "docusaurus-plugin-sass"
  ],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css",
      type: "text/css",
      rel: "stylesheet"
    }
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
        target: isServer ? "node12" : "es2017"
      }
    })
  }
};

async function createConfig() {
  //const mdxMermaid = await import("mdx-mermaid");
  // @ts-expect-error: we know it exists, right
  // config.presets[0][1].docs.remarkPlugins.push(mdxMermaid.default);
  return config;
}

module.exports = createConfig;
