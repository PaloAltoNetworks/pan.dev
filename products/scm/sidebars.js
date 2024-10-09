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
      label: "Release Information",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/docs/release-notes/changelog",
        },
      ],
    },
    {
      type: "category",
      label: "Platform Configuration",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "SASE Configuration",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Configuration Operations",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/operations/operations-api",
                },
                require("./api/config/operations/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Configuration Setup",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/setup/setup-api",
                },
                require("./api/config/setup/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Deployment Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/deployment/deployment-api",
                },
                require("./api/config/deployment/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Identity Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/identity/identity-api",
                },
                require("./api/config/identity/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Mobile Agent Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/mobileagent/mobileagent-api",
                },
                require("./api/config/mobileagent/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Object Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/objects/objects-api",
                },
                require("./api/config/objects/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Security Profiles",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/security/security-api",
                },
                require("./api/config/security/sidebar"),
              ],
            },
          ],
        },
        {
          type: "category",
          label: "NGFW Configuration",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Configuration Operations",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/operations/operations-api-ngfw",
                },
                require("./api/config/operations/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Configuration Setup",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/setup/setup-api",
                },
                require("./api/config/setup/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Identity Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/identity/identity-api",
                },
                require("./api/config/identity/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Network Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/network/network-api",
                },
                require("./api/config/network/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Object Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/objects/objects-api",
                },
                require("./api/config/objects/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Security Profiles",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/security/security-api",
                },
                require("./api/config/security/sidebar"),
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Cloud NGFW Configuration",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Configuration Operations",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/operations/operations-api-cloud-ngfw",
                },
                require("./api/config/operations/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Configuration Setup",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/setup/setup-api",
                },
                require("./api/config/setup/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Identity Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/identity/identity-api",
                },
                require("./api/config/identity/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Object Configuration",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/objects/objects-api",
                },
                require("./api/config/objects/sidebar"),
              ],
            },
            {
              type: "category",
              label: "Security Profiles",
              items: [
                {
                  type: "doc",
                  id: "scm/api/config/security/security-api",
                },
                require("./api/config/security/sidebar"),
              ],
            },
          ],
        },
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
  scmconfignetwork: [
    "scm/api/config/network/network-api",
    require("./api/config/network/sidebar"),
  ],
};
