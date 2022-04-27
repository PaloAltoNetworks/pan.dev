module.exports = {
  sase_docs: [
    {
      type: "doc",
      id: "docs/home",
    },
    {
        type: "category",
        label: "Get Started",
        collapsed: true,
        items: [
            {
              type: "doc",
              id: "docs/getstarted",
            },
            {
              type: "doc",
              id: "docs/tenant-service-groups",
            },
            {
              type: "doc",
              id: "docs/service-accounts",
            },
              {
                  type: "category",
                  label: "Roles",
                  collapsed: true,
                  items: [
                        {
                          type: "doc",
                          id: "docs/roles-overview",
                        },
                        {
                          type: "doc",
                          id: "docs/roles-assign",
                        },
                        {
                          type: "doc",
                          id: "docs/all-roles",
                        },
                  ]
              },
            {
                  type: "category",
                  label: "Access Tokens",
                  collapsed: true,
                  items: [
                        {
                          type: "doc",
                          id: "docs/access-tokens",
                        },
                        {
                          type: "doc",
                          id: "docs/scope",
                        },
                  ]
              },
            {
              type: "doc",
              id: "docs/api-call",
            },
        ]
    },
    {
      type: "category",
      label: "Prisma Access Configuration",
      collapsed: true,
      items: ["docs/prisma-access-config/prisma-access-config",
      ],
    },
    {
      type: "category",
      label: "Aggregate Monitoring",
      collapsed: true,
      items: ["docs/mt-monitor/mt-monitor",
              "docs/mt-monitor/parameters",      
              "docs/mt-monitor/filters"
      ],
    },
    {
      type: "category",
      label: "Prisma Access Insights",
      collapsed: true,
      items: [
          "docs/insights/insights",
          "docs/insights/getting_started-20",
          "docs/insights/getting_started-10",
          {
              type: "category",
              label: "Query Language",
              collapsed: true,
              items: [
                  "docs/insights/pai_query_language",
                  "docs/insights/query_language_resources",
                  "docs/insights/query_properties",
                  "docs/insights/query_filters"
              ]
          }
      ],
    },
    {
      type: "category",
      label: "Prisma SASE API Release Notes",
      collapsed: true,
      items: ["docs/release-notes/release-notes",
              "docs/release-notes/changelog"
      ],
    },
  ],
  iam_api: require("../static/sase/spec/iam/sidebar_builder").sidebar,
  tenancy_api: require("../static/sase/spec/tenancy/sidebar_builder").sidebar,
  auth_api: require("../static/sase/spec/auth/sidebar_builder").sidebar,
  pa_config_api: require("../static/sase/spec/prisma-access-config/sidebar_builder").sidebar,
  msp_api: require("../static/sase/spec/mt-monitor/sidebar_builder").sidebar,
  subscription_api: require("../static/sase/spec/subscription/sidebar_builder").sidebar,
  pai_api_10: require("../static/sase/spec/insights/1.0/sidebar_builder").sidebar,
  pai_api_20: require("../static/sase/spec/insights/2.0/sidebar_builder").sidebar,
};
