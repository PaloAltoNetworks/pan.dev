module.exports = [
  { type: "doc", id: "access/api/ztna/ztna-connector-apis" },
  {
    type: "category",
    label: "Applications",
    items: [
      {
        type: "doc",
        id: "access/api/ztna/get-applications",
        label: "Get all applications",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/create-application",
        label: "Create applications",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/ztna/delete-application",
        label: "Delete an application",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-application",
        label: "Get an application",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/update-application",
        label: "Update an application",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-discovered-applications",
        label: "Get all discovered applications",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "ConnectorGroups",
    items: [
      {
        type: "doc",
        id: "access/api/ztna/get-connector-groups",
        label: "Get all connector groups",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/create-connector-group",
        label: "Create connector groups",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/ztna/delete-connector-group",
        label: "Delete a connector group",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-connector-group",
        label: "Get a connector group",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/update-connector-group",
        label: "Update a connector group",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-applications-per-connector-group",
        label: "Get applications in the group",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-connectors-per-connector-group",
        label: "Get connectors in the group",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-scheduled-upgrades-per-connector-group",
        label: "Get scheduled upgrades per Connector Group",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/post-scheduled-upgrades-per-connector-group",
        label: "Post scheduled upgrades per Connector Group",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/ztna/put-scheduled-upgrades-per-connector-group",
        label: "Put scheduled upgrades per Connector Group",
        className: "api-method put",
      },
    ],
  },
  {
    type: "category",
    label: "Connectors",
    items: [
      {
        type: "doc",
        id: "access/api/ztna/get-connectors",
        label: "Get all connectors",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/create-connector",
        label: "Create connectors",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/ztna/delete-connector",
        label: "Delete a connector",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-connector",
        label: "Get a connector",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/update-connector",
        label: "Update a connector",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "access/api/ztna/delete-scheduled-upgrade",
        label: "Delete the scheduled upgrade",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-connector-scheduled-upgrade",
        label: "Get the scheduled upgrade",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/create-connector-scheduled-upgrade",
        label: "Create a scheduled upgrade",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/ztna/update-connector-scheduled-upgrade",
        label: "Modify the scheduled upgrade",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-connector-scheduled-upgrade-status",
        label: "Gets the scheduled upgrade status of the connector",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/ztna/get-connector-upgradeable-versions",
        label: "Gets a list of upgradable versions for this connector",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Licensing",
    items: [
      {
        type: "doc",
        id: "access/api/ztna/get-license",
        label: "Get license",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Tenant",
    items: [
      {
        type: "doc",
        id: "access/api/ztna/start-tenant-onboarding",
        label: "Start tenant onboarding",
        className: "api-method post",
      },
    ],
  },
];
