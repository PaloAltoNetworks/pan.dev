module.exports = [
  { type: "doc", id: "access/api/insights/palo-alto-networks-3-0-apis" },
  {
    type: "category",
    label: "Application",
    items: [
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-applications-application-list",
        label: "Application list",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Location",
    items: [
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-locations-location-current-status-count",
        label: "Current location count",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-locations-location-gp-mobile-users-logins",
        label: "Global-Protect mobile users login location",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-locations-noc-location-list-rn-sc",
        label: "Location and data center sites details",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "MobileUsers",
    items: [
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-mobileusers-connected-entity-count",
        label: "Total number of connected entities",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-mobileusers-gp-noc-current-connected-user-list",
        label: "User connected list",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-mobileusers-user-list",
        label: "Mobile users list",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "Sites",
    items: [
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-sites-rn-list",
        label: "List of branch sites",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-sites-sc-list",
        label: "Status of Branch Site and Data Center",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "access/api/insights/post-insights-v-3-0-resource-query-sites-site-status",
        label: "List of Data Centers",
        className: "api-method post",
      },
    ],
  },
];
