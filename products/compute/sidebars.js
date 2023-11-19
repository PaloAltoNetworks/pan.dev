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
      value: versionCrumb(`31-03`),
    },
    "compute/api/compute-api-reference-home",
    "compute/api/access-api-self-hosted",
    "compute/api/set-up-console",
    "compute/api/stable-endpoints",
    require("./api/sidebar"),
  ],
  compute_3003: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`30-03`),
    },
    "compute/api/30-03/compute-api-reference-home",
    "compute/api/30-03/access-api-self-hosted",
    "compute/api/30-03/set-up-console",
    "compute/api/30-03/stable-endpoints",
    require("./api/30-03/sidebar"),
  ],
  compute_2212: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`22-12`),
    },
    "compute/api/22-12/compute-api-reference-home",
    "compute/api/22-12/access-api-self-hosted",
    "compute/api/22-12/set-up-console",
    "compute/api/22-12/stable-endpoints",
    require("./api/22-12/sidebar"),
  ],
  compute_31: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 31.00",
      collapsed: true,
      items: [
        "compute/api/31-00/stable-endpoints",
        require("./api/31-00/sidebar"),
      ],
    },
  ],
  compute_3002: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 30.02",
      collapsed: true,
      items: [
        "compute/api/30-02/stable-endpoints",
        require("./api/30-02/sidebar"),
      ],
    },
  ],
  compute_3001: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 30.01",
      collapsed: true,
      items: [
        "compute/api/30-01/stable-endpoints",
        require("./api/30-01/sidebar"),
      ],
    },
  ],
  compute_30: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 30.00",
      collapsed: true,
      items: [
        "compute/api/30-00/stable-endpoints",
        require("./api/30-00/sidebar"),
      ],
    },
  ],
};
