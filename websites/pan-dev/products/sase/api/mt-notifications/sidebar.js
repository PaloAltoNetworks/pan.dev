module.exports = [
  {
    type: "category",
    label: "NotificationProfiles",
    link: {
      type: "doc",
      id: "sase/api/mt-notifications/multi-tenant-notifications-api",
    },
    items: [
      {
        type: "doc",
        id: "sase/api/mt-notifications/list-notification-profiles",
        label: "List Notification Profiles",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/create-a-notification-profile",
        label: "Create a Notification Profile",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/get-a-tenants-notification-profile",
        label: "Get a Tenant's Notification Profile",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/delete-a-notification-profile",
        label: "Delete a Notification Profile",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/enable-disable-profile",
        label: "Enable / Disable Profile",
        className: "api-method put",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/retrieve-notification-types",
        label: "Retrieve Notification Types",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/webhook-connectivity-check",
        label: "Webhook Connectivity Check",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/incident-profile-retry-operation",
        label: "Incident Profile Retry Operation",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Notifications",
    link: {
      type: "doc",
      id: "sase/api/mt-notifications/multi-tenant-notifications-api",
    },
    items: [
      {
        type: "doc",
        id: "sase/api/mt-notifications/list-notifications",
        label: "List Notifications",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/notification-count",
        label: "Notification Count",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/set-read-state",
        label: "Set Read State",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-notifications/get-read-state",
        label: "Get Read State",
        className: "api-method get",
      },
    ],
  },
];
