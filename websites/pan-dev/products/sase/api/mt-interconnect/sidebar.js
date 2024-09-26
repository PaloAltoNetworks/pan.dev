module.exports = [
  { type: "doc", id: "sase/api/mt-interconnect/multitenant-interconnect-apis" },
  {
    type: "category",
    label: "Backbone",
    items: [
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-backbones",
        label: "List backbones",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-backbones",
        label: "Create backbone",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/delete-mt-monitor-v-1-interconnect-backbones-backboneid",
        label: "Delete backbone",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-backbones-backboneid",
        label: "Backbone details",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Connection",
    items: [
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-backbones-backboneid-connections",
        label: "Connection details",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-backbones-backboneid-connections",
        label: "Create Connection",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/delete-mt-monitor-v-1-interconnect-backbones-backboneid-connections-connectionid",
        label: "Delete Connection",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-backbones-backboneid-connections-connectionid",
        label: "Connection details by ID",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "IPPool",
    items: [
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-ip-pool",
        label: "IP Pools details",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-ip-pool",
        label: "Create IP Pool",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-ip-pool-assign",
        label: "Assign IP Pool",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-ip-pool-region",
        label: "IP Pool regions",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/delete-mt-monitor-v-1-interconnect-ip-pool-ippoolid",
        label: "Delete IP Pool",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-ip-pool-ippoolid",
        label: "IP Pool by ID",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/put-mt-monitor-v-1-interconnect-ip-pool-ippoolid",
        label: "Update IP Pool",
        className: "api-method put",
      },
    ],
  },
  {
    type: "category",
    label: "BackboneMonitoring",
    items: [
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-monitor-backbones-theatres",
        label: "Monitor regions",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-monitor-backbones-throughput",
        label: "Ingress/Egress throughput",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-monitor-backbones-throughput-tsgid",
        label: "Ingress/Egress throughput by tenant",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-monitor-backbones-traffic",
        label: "Ingress/Egress traffic",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-monitor-backbones-traffic-tsgid",
        label: "Ingress/Egress traffic by tenant",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "ConnectionMonitoring",
    items: [
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-monitor-connections-connectionstats",
        label: "Connection statistics",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-monitor-connections-latency",
        label: "Latency materics",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-monitor-connections-throughput",
        label: "Ingress/Egress throughput",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "sase/api/mt-interconnect/post-mt-monitor-v-1-interconnect-monitor-connections-traffic",
        label: "Ingress/Egress traffic",
        className: "api-method post",
      },
    ],
  },
  {
    type: "category",
    label: "IPPoolMonitor",
    items: [
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-monitor-ip-pool-usage",
        label: "IP Pool usage",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Region",
    items: [
      {
        type: "doc",
        id: "sase/api/mt-interconnect/get-mt-monitor-v-1-interconnect-regions",
        label: "Supported regions",
        className: "api-method get",
      },
    ],
  },
];
