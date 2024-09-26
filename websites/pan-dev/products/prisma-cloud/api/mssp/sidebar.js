module.exports = [
  {
    type: "doc",
    id: "prisma-cloud/api/mssp/prisma-cloud-managed-security-service-provider-mssp",
  },
  {
    type: "category",
    label: "Policy Group to Tenant Group Management",
    link: {
      type: "doc",
      id: "prisma-cloud/api/mssp/policy-group-to-tenant-group-management",
    },
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/add-tenant-group-policy-group-mapping",
        label: "Associate policy groups to selected tenant group",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/delete-tenant-group-policy-group-mapping",
        label: "Delete an association of policy group from tenant group",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "Policy Group Lifecycle Endpoints",
    link: {
      type: "doc",
      id: "prisma-cloud/api/mssp/policy-group-lifecycle-endpoints",
    },
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-policy-group-by-id",
        label: "Get the details of an existing policy group",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/update-policy-group",
        label: "Update a policy group",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/delete-policy-group",
        label: "Delete an existing policy group",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-all-policy-groups",
        label: "Get the details of all existing policy groups",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/create-policy-group",
        label: "Create a policy group",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "User Management",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/reset-password",
        label: "Change Password",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-user",
        label: "Get User by username",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/update-user",
        label: "Update an existing user",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/delete-user",
        label: "Delete an existing user",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/validate-token",
        label: "Validate Forgot Password Token",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/list-users",
        label: "List users",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/create-user",
        label: "Create a new user",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/reset-token",
        label: "Generate password reset token",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "MSSP Account Management",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/tos-acceptance",
        label: "Terms of Service",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-mssp",
        label: "Get the details of an existing MSSP",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-mssp-operations",
        label: "Get the operation list for an MSSP",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-mssp-license-pools",
        label: "Get the license pool details of an existing MSSP",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Tenant Group Lifecycle Endpoints",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-tenant-groups-by-mssp-id",
        label: "Get the tenant group list for an MSSP",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/create-tenant-group",
        label: "Create a tenant group",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-tenant-group-by-id",
        label: "Get the tenant group by id",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/delete-tenant-group-by-id",
        label: "Delete an existing tenant group",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/patch-tenant-group-by-id",
        label: "Modify the tenant group by id",
        className: "api-method patch",
      },
    ],
  },
  {
    type: "category",
    label: "MSSP Operations Retry",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/retry-operation",
        label: "API to retry failed operation",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "MSSP Managed Tenant Lifecycle Endpoints",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-managed-tenants",
        label: "Get the managed tenants for an MSSP",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/create-managed-tenant",
        label: "Create a new managed tenant",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-managed-tenant-by-id",
        label: "Get the details of an existing managed tenant",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/soft-delete-managed-tenant",
        label: "Delete a managed tenant",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/update-managed-tenant",
        label: "Modify an existing managed tenant",
        className: "api-method patch",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/seamless-login",
        label: "Seamless login",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "User Authentication",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/process-login",
        label: "Login with username and password",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/refresh-token",
        label: "Refresh User JWT",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Mssp License Endpoints",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-mssp-license-usage-v-1",
        label: "Get the license Usage for MSSP",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/get-mssp-license-info-v-1",
        label: "Get the license info for MSSP",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Stack Details Endpoint",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/request-stack-mapping",
        label: "Get list of stacks and api hosts",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Proxy Endpoint Provider",
    items: [
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/proxy-request",
        label: "summary needed",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/proxy-request-3",
        label: "proxyRequest_3",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/proxy-request-2",
        label: "proxyRequest_2",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/proxy-request-5",
        label: "proxyRequest_5",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/proxy-request-6",
        label: "proxyRequest_6",
        className: "api-method options",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/proxy-request-1",
        label: "proxyRequest_1",
        className: "api-method head",
      },
      {
        type: "doc",
        id: "prisma-cloud/api/mssp/proxy-request-4",
        label: "proxyRequest_4",
        className: "api-method patch",
      },
    ],
  },
];
