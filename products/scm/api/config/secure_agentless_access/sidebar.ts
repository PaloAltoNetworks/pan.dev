import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "scm/api/config/secure_agentless_access/secure-agentless-access-saa-configuration",
    },
    {
      type: "category",
      label: "Application Groups",
      items: [
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/list-application-groups",
          label: "List application groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/create-application-group",
          label: "Create application group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/delete-application-group-by-id",
          label: "Delete application group by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/get-application-group-by-id",
          label: "Get application group by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/update-application-group-by-id",
          label: "Update application group by ID",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Application Policies",
      items: [
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/list-application-policies",
          label: "List application policies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/create-application-policy",
          label: "Create application policy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/delete-application-policy-by-id",
          label: "Delete application policy by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/get-application-policy-by-id",
          label: "Get application policy by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/update-application-policy-by-id",
          label: "Update application policy by ID",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Application Profiles",
      items: [
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/list-application-profiles",
          label: "List application profiles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/create-application-profile",
          label: "Create application profile",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/delete-application-profile-by-id",
          label: "Delete application profile by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/get-application-profile-by-id",
          label: "Get application profile by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/update-application-profile-by-id",
          label: "Update application profile by ID",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Applications",
      items: [
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/list-applications",
          label: "List applications",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/create-application",
          label: "Create application",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/delete-application-by-id",
          label: "Delete application by ID",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/get-application-by-id",
          label: "Get application by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/update-application-by-id",
          label: "Update application by ID",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/delete-applications",
          label: "Delete multiple applications",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Sessions",
      items: [
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/list-active-sessions",
          label: "List all active sessions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/disconnect-active-sessions",
          label: "Disconnect a given list of active sessions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "scm/api/config/secure_agentless_access/disconnect-all-active-sessions",
          label: "Disconnect all active sessions",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
