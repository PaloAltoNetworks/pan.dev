const computeVersions = require("./api/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

module.exports = {
  compute: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`34-00`),
    },
    "compute/api/compute-api-reference-home",
    "compute/api/access-api-self-hosted",
    "compute/api/set-up-console",
    "compute/api/stable-endpoints",
    require("./api/sidebar"),
  ],
  compute_3207: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`32-07`),
    },
    "compute/api/32-07/compute-api-reference-home",
    "compute/api/32-07/access-api-self-hosted",
    "compute/api/32-07/set-up-console",
    "compute/api/32-07/stable-endpoints",
    require("./api/32-07/sidebar"),
  ],
  compute_3102: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`31-02`),
    },
    "compute/api/31-02/compute-api-reference-home",
    "compute/api/31-02/access-api-self-hosted",
    "compute/api/31-02/set-up-console",
    "compute/api/31-02/stable-endpoints",
    require("./api/31-02/sidebar"),
  ],
  compute_3206: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 32.06",
      collapsed: true,
      items: [
        "compute/api/32-06/compute-api-reference-home",
        "compute/api/32-06/access-api-self-hosted",
        "compute/api/32-06/set-up-console",
        "compute/api/32-06/stable-endpoints",
        require("./api/32-06/sidebar"),
      ],
    },
  ],
  compute_3300: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 33.00",
      collapsed: true,
      items: [
        "compute/api/33-00/compute-api-reference-home",
        "compute/api/33-00/access-api-self-hosted",
        "compute/api/33-00/set-up-console",
        "compute/api/33-00/stable-endpoints",
        require("./api/33-00/sidebar"),
      ],
    },
  ],
  compute_3301: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 33.01",
      collapsed: true,
      items: [
        "compute/api/33-01/compute-api-reference-home",
        "compute/api/33-01/access-api-self-hosted",
        "compute/api/33-01/set-up-console",
        "compute/api/33-01/stable-endpoints",
        require("./api/33-01/sidebar"),
      ],
    },
  ],
  compute_3302: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 33.02",
      collapsed: true,
      items: [
        "compute/api/33-02/compute-api-reference-home",
        "compute/api/33-02/access-api-self-hosted",
        "compute/api/33-02/set-up-console",
        "compute/api/33-02/stable-endpoints",
        require("./api/33-02/sidebar"),
      ],
    },
  ],
  compute_3303: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 33.03",
      collapsed: true,
      items: [
        "compute/api/33-03/compute-api-reference-home",
        "compute/api/33-03/access-api-self-hosted",
        "compute/api/33-03/set-up-console",
        "compute/api/33-03/stable-endpoints",
        require("./api/33-03/sidebar"),
      ],
    },
  ],
};
