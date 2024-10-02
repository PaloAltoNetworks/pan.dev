module.exports = {
  scm_docs: [
    {
      type: "doc",
      id: "scm/docs/home",
    },
    {
      type: "category",
      label: "Get Started",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/docs/getstarted",
        },
        {
          type: "doc",
          id: "scm/docs/tenant-service-groups",
        },
        {
          type: "doc",
          id: "scm/docs/service-accounts",
        },
        {
          type: "category",
          label: "Roles",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/docs/roles-overview",
            },
            {
              type: "doc",
              id: "scm/docs/roles-assign",
            },
            {
              type: "doc",
              id: "scm/docs/all-roles",
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
              id: "scm/docs/access-tokens",
            },
            {
              type: "doc",
              id: "scm/docs/scope",
            },
          ],
        },
        {
          type: "doc",
          id: "scm/docs/api-call",
        },
        {
          type: "doc",
          id: "scm/docs/user-accounts",
        },
      ],
    },
    {
      type: "category",
      label: "Strata Cloud Manager API Release Notes",
      collapsed: true,
      items: [
        "scm/docs/release-notes/changelog",
        "scm/docs/release-notes/release-notes",
      ],
    },
  ],
  scmauth: ["scm/api/auth/auth-api", require("./api/auth/sidebar")],
  scmiam: ["scm/api/iam/iam-api", require("./api/iam/sidebar")],
  scmsubscription: [
    "scm/api/subscription/subscription-api",
    require("./api/subscription/sidebar"),
  ],
  scmtenancy: ["scm/api/tenancy/tenancy-api", require("./api/tenancy/sidebar")],
  scmconfigsetup: [
    "scm/api/config/setup/setup-api",
    require("./api/config/setup/sidebar"),
  ],
  scmconfigdeployment: [
    "scm/api/config/deployment/deployment-api",
    require("./api/config/deployment/sidebar"),
  ],
  scmconfigidentity: [
    "scm/api/config/identity/identity-api",
    require("./api/config/identity/sidebar"),
  ],
  scmconfigmobileagent: [
    "scm/api/config/mobileagent/mobileagent-api",
    require("./api/config/mobileagent/sidebar"),
  ],
  scmconfignetwork: [
    "scm/api/config/network/network-api",
    require("./api/config/network/sidebar"),
  ],
  scmconfigobjects: [
    "scm/api/config/objects/objects-api",
    require("./api/config/objects/sidebar"),
  ],
  scmconfigoperations: [
    "scm/api/config/operations/operations-api",
    require("./api/config/operations/sidebar"),
  ],
  scmconfigsecurity: [
    "scm/api/config/security/security-api",
    require("./api/config/security/sidebar"),
  ],
};
