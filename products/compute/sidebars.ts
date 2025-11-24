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
      value: versionCrumb(`34-03`),
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
  compute_3303: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`33-03`),
    },
    "compute/api/33-03/compute-api-reference-home",
    "compute/api/33-03/access-api-self-hosted",
    "compute/api/33-03/set-up-console",
    "compute/api/33-03/stable-endpoints",
    require("./api/33-03/sidebar"),
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
  compute_3400: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 34.00",
      collapsed: true,
      items: [
        "compute/api/34-00/compute-api-reference-home",
        "compute/api/34-00/access-api-self-hosted",
        "compute/api/34-00/set-up-console",
        "compute/api/34-00/stable-endpoints",
        require("./api/34-00/sidebar"),
      ],
    },
  ],
  compute_3401: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 34.01",
      collapsed: true,
      items: [
        "compute/api/34-01/compute-api-reference-home",
        "compute/api/34-01/access-api-self-hosted",
        "compute/api/34-01/set-up-console",
        "compute/api/34-01/stable-endpoints",
        require("./api/34-01/sidebar"),
      ],
    },
  ],
   compute_3402: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 34.02",
      collapsed: true,
      items: [
        "compute/api/34-02/compute-api-reference-home",
        "compute/api/34-02/access-api-self-hosted",
        "compute/api/34-02/set-up-console",
        "compute/api/34-02/stable-endpoints",
        require("./api/34-02/sidebar"),
      ],
    },
  ],
};
