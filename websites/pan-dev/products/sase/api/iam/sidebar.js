module.exports = [
  {
    type: "category",
    label: "AccessPolicies",
    link: { type: "doc", id: "sase/api/iam/access-policies" },
    items: [
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-access-policies",
        label: "List all access policies",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/post-iam-v-1-access-policies",
        label: "Assign an access policy",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/iam/delete-iam-v-1-access-policies-id",
        label: "Delete an access policy",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-access-policies-id",
        label: "Get an access policy",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "CustomRoles",
    link: { type: "doc", id: "sase/api/iam/custom-roles" },
    items: [
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-custom-roles",
        label: "List custom roles",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/post-iam-v-1-custom-roles",
        label: "Create a custom role",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/iam/delete-iam-v-1-custom-roles-name",
        label: "Delete a custom role",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-custom-roles-name",
        label: "Get a Custom Role",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/put-iam-v-1-custom-roles-name",
        label: "Update a Custom Role",
        className: "api-method put",
      },
    ],
  },
  {
    type: "category",
    label: "PermissionSets",
    link: { type: "doc", id: "sase/api/iam/permission-sets" },
    items: [
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-permission-sets",
        label: "List permission sets",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-permission-sets-name",
        label: "Get a permission set",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Permissions",
    link: { type: "doc", id: "sase/api/iam/permissions" },
    items: [
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-permissions",
        label: "List all access permissions",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-permissions-name",
        label: "Get a permission",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Roles",
    link: { type: "doc", id: "sase/api/iam/roles" },
    items: [
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-roles",
        label: "List all roles",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-roles-name",
        label: "Get a role",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "ServiceAccounts",
    link: { type: "doc", id: "sase/api/iam/service-accounts" },
    items: [
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-service-accounts",
        label: "List all service accounts",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/post-iam-v-1-service-accounts",
        label: "Create a service account",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/iam/delete-iam-v-1-service-accounts-id",
        label: "Delete a service account",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-service-accounts-id",
        label: "Get a service account",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/put-iam-v-1-service-accounts-id",
        label: "Update a service account",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "sase/api/iam/post-iam-v-1-service-accounts-id-operations-reset",
        label: "Reset a service account",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "UserAccounts",
    link: { type: "doc", id: "sase/api/iam/user-accounts" },
    items: [
      {
        type: "doc",
        id: "sase/api/iam/get-iam-v-1-sso-users",
        label: "Verify a user account",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/iam/post-iam-v-1-sso-users",
        label: "Create an SSO account",
        className: "api-method post",
      },
    ],
  },
];
