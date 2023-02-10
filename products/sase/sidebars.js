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
      items: ["access/docs/prisma-access-config/prisma-access-config"],
    },
    {
      type: "category",
      label: "Prisma SD-WAN",
      collapsed: true,
      items: [
        "sdwan/docs/sdwan",
        "sdwan/docs/legacy_getstarted",
        "sdwan/docs/prismasdwanconfig",
        "sdwan/docs/sdwan_gsg_sdk",
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
        "access/docs/insights/insights",
        "access/docs/insights/getting_started-20",
        "access/docs/insights/getting_started-10",
        {
          type: "category",
          label: "Query Language",
          collapsed: true,
          items: [
            "access/docs/insights/pai_query_language",
            "access/docs/insights/query_language_resources",
            "access/docs/insights/query_properties",
            "access/docs/insights/query_filters",
          ],
        },
        {
          type: "category",
          label: "Examples",
          collapsed: true,
          items: [
            "access/docs/insights/examples/examples",
            {
              type: "category",
              label: "Alerts",
              collapsed: true,
              items: [
                "access/docs/insights/examples/alerts-dashboard/alerts-dashboard",
                "access/docs/insights/examples/alerts-dashboard/external-alerts-current",
                "access/docs/insights/examples/alerts-dashboard/current-alerts-generated",
                "access/docs/insights/examples/alerts-dashboard/open-alerts",
                "access/docs/insights/examples/alerts-dashboard/raised-alerts",
                "access/docs/insights/examples/alerts-dashboard/cleared-alerts",
              ],
            },
            {
              type: "category",
              label: "Mobile Users",
              collapsed: true,
              items: [
                "access/docs/insights/examples/mobile-users-dashboard/mobile-users-dashboard",
                "access/docs/insights/examples/mobile-users-dashboard/connected-user-count",
                "access/docs/insights/examples/mobile-users-dashboard/current-connected-user-list",
                "access/docs/insights/examples/mobile-users-dashboard/mu-users-list",
              ],
            },
            {
              type: "category",
              label: "Prisma Access Locations",
              collapsed: true,
              items: [
                "access/docs/insights/examples/pa-locations-dashboard/pa-locations-dashboard",
                "access/docs/insights/examples/pa-locations-dashboard/location-mu-status",
                "access/docs/insights/examples/pa-locations-dashboard/location-gp-mobile-users-logins",
                "access/docs/insights/examples/pa-locations-dashboard/location-rn-status",
                "access/docs/insights/examples/pa-locations-dashboard/location-rn-bandwidth",
                "access/docs/insights/examples/pa-locations-dashboard/location-sc-bandwidth",
                "access/docs/insights/examples/pa-locations-dashboard/location-sc-status",
                "access/docs/insights/examples/pa-locations-dashboard/location-ep-status",
              ],
            },
            {
              type: "category",
              label: "Remote Networks",
              collapsed: true,
              items: [
                "access/docs/insights/examples/remote-networks-dashboard/remote-networks-dashboard",
                "access/docs/insights/examples/remote-networks-dashboard/rn-tunnel-status",
                "access/docs/insights/examples/remote-networks-dashboard/rn-bandwidth-allocated",
                "access/docs/insights/examples/remote-networks-dashboard/rn-list",
              ],
            },
            {
              type: "category",
              label: "Service Connections",
              collapsed: true,
              items: [
                "access/docs/insights/examples/service-connections-dashboard/service-connections-dashboard",
                "access/docs/insights/examples/service-connections-dashboard/sc_list",
                "access/docs/insights/examples/service-connections-dashboard/sc-bandwidth-consumption",
              ],
            },
            {
              type: "category",
              label: "Tunnels",
              collapsed: true,
              items: [
                "access/docs/insights/examples/tunnels-dashboard/tunnel-dashboard",
                "access/docs/insights/examples/tunnels-dashboard/tunnel_list",
              ],
            },
          ],
        },
        "access/docs/insights/pai-faqs",
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
  saseauth: ["sase/api/auth/auth-api", require("./api/auth/sidebar")],
  saseiam: ["sase/api/iam/iam-api", require("./api/iam/sidebar")],
  sasemt: ["sase/api/mt-monitor/msp-api", require("./api/mt-monitor/sidebar")],
  sasesubscription: [
    "sase/api/subscription/subscription-api",
    require("./api/subscription/sidebar"),
  ],
  sasetenancy: [
    "sase/api/tenancy/tenancy-api",
    require("./api/tenancy/sidebar"),
  ],
};
