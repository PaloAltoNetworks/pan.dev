module.exports = {
  sase_services_docs : [
    {
      type: "doc",
      id: "docs/home",
    },
      {
          type: "category",
          label: "Authentication",
          collapsed: true,
          items: [
                {
                  type: "doc",
                  id: "docs/authentication-overview",
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
  ],
  iam_api: require("../static/sase-services/spec/identity-and-access-management/sidebar_builder").sidebar,
  auth_service_api: require("../static/sase-services/spec/auth-service/sidebar_builder").sidebar,
  tenancy_service_api: require("../static/sase-services/spec/tenancy-service/sidebar_builder").sidebar,
};
