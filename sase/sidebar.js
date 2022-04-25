module.exports = {
  sase_docs: [
    {
      type: "doc",
      id: "docs/home"
    },
    {
      type: "category",
      label: "Get Started",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "docs/getstarted"
        },
        {
          type: "doc",
          id: "docs/tenant-service-groups"
        },
        {
          type: "doc",
          id: "docs/service-accounts"
        },
        {
          type: "category",
          label: "Roles",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "docs/roles-overview"
            },
            {
              type: "doc",
              id: "docs/roles-assign"
            },
            {
              type: "doc",
              id: "docs/all-roles"
            }
          ]
        },
        {
          type: "category",
          label: "Access Tokens",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "docs/access-tokens"
            },
            {
              type: "doc",
              id: "docs/scope"
            }
          ]
        },
        {
          type: "doc",
          id: "docs/api-call"
        }
      ]
    },
    {
      type: "category",
      label: "Prisma Access Configuration",
      collapsed: true,
      items: ["docs/prisma-access-config/prisma-access-config"]
    },
    {
      type: "category",
      label: "Aggregate Monitoring",
      collapsed: true,
      items: [
        "docs/mt-monitor/mt-monitor",
        "docs/mt-monitor/parameters",
        "docs/mt-monitor/filters"
      ]
    },
    {
      type: "category",
      label: "Prisma SASE API Release Notes",
      collapsed: true,
      items: [
        "docs/release-notes/release-notes",
        "docs/release-notes/changelog"
      ]
    }
  ],
  sase_api: [
    {
      label: "SASE API",
      type: "category",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "SASE API",
        slug: "/category/sase-api-docs"
      },
      items: [
        {
          label: "Tenancy Service",
          type: "category",
          collapsed: true,
          link: { type: "doc", id: "api/tenancy/tenancy-api" },
          items: require("../static/sase/spec/tenancy/sidebar_builder").sidebar
        },
        {
          label: "Identity and Access Management",
          type: "category",
          collapsed: true,
          link: { type: "doc", id: "api/iam/iam-api" },
          items: require("../static/sase/spec/iam/sidebar_builder").sidebar
        },
        {
          label: "Authentication Service",
          type: "category",
          collapsed: true,
          link: { type: "doc", id: "api/auth/auth-api" },
          items: require("../static/sase/spec/auth/sidebar_builder").sidebar
        },
        {
          label: "Subscription Service",
          type: "category",
          collapsed: true,
          link: { type: "doc", id: "api/subscription/subscription-api" },
          items: require("../static/sase/spec/subscription/sidebar_builder")
            .sidebar
        },
        {
          label: "Prisma Access Configuration",
          type: "category",
          collapsed: true,
          link: { type: "doc", id: "api/prisma-access-config/config-api" },
          items:
            require("../static/sase/spec/prisma-access-config/sidebar_builder")
              .sidebar
        },
        {
          label: "Aggregate Monitoring",
          type: "category",
          collapsed: true,
          link: { type: "doc", id: "api/mt-monitor/msp-api" },
          items: require("../static/sase/spec/mt-monitor/sidebar_builder")
            .sidebar
        }
      ]
    }
  ]
};
