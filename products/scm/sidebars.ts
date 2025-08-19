module.exports = {
  scm_docs: [
    {
      type: "doc",
      id: "scm/docs/home",
    },
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
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
        {
          type: "category",
          label: "Release Notes",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/docs/release-notes/release-notes",
            },
            {
              type: "doc",
              id: "scm/docs/release-notes/november2024",
            },
          ],
        },
      ],
    },
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
              id: "scm/api/config/sase/operations/operations-api",
            },
      
            require("./api/config/sase/operations/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Configuration Setup",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/setup/setup-api",
            },
            {
              type: "doc",
              id: "scm/api/config/sase/setup/snippet-sharing",
            },
            require("./api/config/sase/setup/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Network Deployment",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/deployment/deployment-api",
            },
            require("./api/config/sase/deployment/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Identity Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/identity/identity-api",
            },
            require("./api/config/sase/identity/sidebar"),
          ],
        },
        {
          type: "category",
          label: "GlobalProtect",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/mobileagent/mobileagent-api",
            },
            require("./api/config/sase/mobileagent/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Objects",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/objects/objects-api",
            },
            require("./api/config/sase/objects/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Security Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/security/security-api",
            },
            require("./api/config/sase/security/sidebar"),
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
              id: "scm/api/config/ngfw/operations/operations-api-ngfw",
            },
            require("./api/config/ngfw/operations/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Configuration Setup",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/setup/setup-api-ngfw",
            },
            {
              type: "doc",
              id: "scm/api/config/ngfw/setup/snippet-sharing",
            },
            require("./api/config/ngfw/setup/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Identity Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/identity/identity-api-ngfw",
            },
            require("./api/config/ngfw/identity/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Device Configuration",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/device/device-api",
            },
            require("./api/config/ngfw/device/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Network Configuration",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/network/network-api",
            },
            require("./api/config/ngfw/network/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Objects",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/objects/objects-api-ngfw",
            },
            require("./api/config/ngfw/objects/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Security Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/security/security-api-ngfw",
            },
            require("./api/config/ngfw/security/sidebar"),
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
              id: "scm/api/config/cloudngfw/operations/operations-api-cloud-ngfw",
            },
            require("./api/config/cloudngfw/operations/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Configuration Setup",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/setup/setup-api-cloud-ngfw",
            },
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/setup/snippet-sharing",
            },
            require("./api/config/cloudngfw/setup/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Identity Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/identity/identity-api-cloud-ngfw",
            },
            require("./api/config/cloudngfw/identity/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Objects",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/objects/objects-api-cloud-ngfw",
            },
            require("./api/config/cloudngfw/objects/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Security Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/security/security-api-cloud-ngfw",
            },
            require("./api/config/cloudngfw/security/sidebar"),
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
};
