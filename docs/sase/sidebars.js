const sdwanVersions = require("./api/sdwan/unified/versions.json");
const insightsVersions = require("./api/insights/2.0/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

module.exports = {
  sase_docs: [
    {
      type: "doc",
      id: "sase/docs/home",
    },
    {
      type: "category",
      label: "Get Started",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "sase/docs/getstarted",
        },
        {
          type: "doc",
          id: "sase/docs/tenant-service-groups",
        },
        {
          type: "doc",
          id: "sase/docs/service-accounts",
        },
        {
          type: "category",
          label: "Roles",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "sase/docs/roles-overview",
            },
            {
              type: "doc",
              id: "sase/docs/roles-assign",
            },
            {
              type: "doc",
              id: "sase/docs/all-roles",
            },
          ],
        },
        {
          type: "category",
          label: "Access Tokens",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "sase/docs/access-tokens",
            },
            {
              type: "doc",
              id: "sase/docs/scope",
            },
          ],
        },
        {
          type: "doc",
          id: "sase/docs/api-call",
        },
        {
          type: "doc",
          id: "sase/docs/user-accounts",
        },
      ],
    },
    {
      type: "category",
      label: "Prisma Access Configuration",
      collapsed: true,
      items: ["sase/docs/prisma-access-config/prisma-access-config"],
    },
    {
      type: "category",
      label: "Prisma SD-WAN",
      collapsed: true,
      items: [
        "sase/docs/sdwan/sdwan",
        "sase/docs/sdwan/legacy_getstarted",
        "sase/docs/sdwan/prismasdwanconfig",
        "sase/docs/sdwan/sdwan_gsg_sdk",
      ],
    },
    {
      type: "category",
      label: "Aggregate Monitoring",
      collapsed: true,
      items: [
        "sase/docs/mt-monitor/mt-monitor",
        "sase/docs/mt-monitor/parameters",
        "sase/docs/mt-monitor/filters",
      ],
    },
    {
      type: "category",
      label: "Prisma Access Insights",
      collapsed: true,
      items: [
        "sase/docs/insights/insights",
        "sase/docs/insights/getting_started-20",
        "sase/docs/insights/getting_started-10",
        {
          type: "category",
          label: "Query Language",
          collapsed: true,
          items: [
            "sase/docs/insights/pai_query_language",
            "sase/docs/insights/query_language_resources",
            "sase/docs/insights/query_properties",
            "sase/docs/insights/query_filters",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Prisma SASE API Release Notes",
      collapsed: true,
      items: [
        "sase/docs/release-notes/changelog",
        "sase/docs/release-notes/release-notes",
      ],
    },
  ],
  saseauth: ["sase/api/auth/auth-api"].concat(require("./api/auth/sidebar")),
  saseiam: ["sase/api/iam/iam-api"].concat(require("./api/iam/sidebar")),
  saseinsightsv1: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(insightsVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1.0`),
    },
  ].concat(require("./api/insights/1.0/sidebar")),
  saseinsightsv2: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(insightsVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0`),
    },
  ].concat(require("./api/insights/2.0/sidebar")),
  sasemt: ["sase/api/mt-monitor/msp-api"].concat(
    require("./api/mt-monitor/sidebar")
  ),
  saseprismaaccess: ["sase/api/prisma-access-config/config-api"].concat(
    require("./api/prisma-access-config/sidebar")
  ),
  sasesubscription: require("./api/subscription/sidebar"),
  sasetenancy: ["sase/api/tenancy/tenancy-api"].concat(
    require("./api/tenancy/sidebar")
  ),
  sdwan_unified: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(sdwanVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`Unified`),
    },
    "sase/api/sdwan/unified/unified",
  ].concat(require("./api/sdwan/unified/sidebar")),
  sdwan_legacy: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(sdwanVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`Legacy`),
    },
    "sase/api/sdwan/legacy/legacy",
  ].concat(require("./api/sdwan/legacy/sidebar")),
};
