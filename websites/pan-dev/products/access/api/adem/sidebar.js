module.exports = [
  { type: "doc", id: "access/api/adem/autonomous-dem-api" },
  {
    type: "category",
    label: "AgentController",
    link: { type: "doc", id: "access/api/adem/agent-controller" },
    items: [
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-agent-properties",
        label: "Get agent properties",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-agent-metric",
        label: "Get agent metrics",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-agent-score",
        label: "Get agent scores",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "ApplicationController",
    link: { type: "doc", id: "access/api/adem/application-controller" },
    items: [
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-application-metric",
        label: "Get application metrics",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-application-score",
        label: "Get application scores",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "InternetController",
    link: { type: "doc", id: "access/api/adem/internet-controller" },
    items: [
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-internet-metric",
        label: "Get internet metrics",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "NavController",
    link: { type: "doc", id: "access/api/adem/nav-controller" },
    items: [
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-nav-traffic",
        label: "Get traffic flow measurements",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "RouteController",
    link: { type: "doc", id: "access/api/adem/route-controller" },
    items: [
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-route-hops",
        label: "Get traceroute details",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "ZoomParticipantController",
    link: { type: "doc", id: "access/api/adem/zoom-participant-controller" },
    items: [
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-zoom-participant",
        label: "Get Zoom participants",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-zoom-participant-score",
        label: "Get Zoom participant scores",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "ZoomQoSController",
    link: { type: "doc", id: "access/api/adem/zoom-qo-s-controller" },
    items: [
      {
        type: "doc",
        id: "access/api/adem/get-adem-telemetry-v-2-measure-zoom-qos",
        label: "Get Zoom QoS",
        className: "api-method get",
      },
    ],
  },
];
