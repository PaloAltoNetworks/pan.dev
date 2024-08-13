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
      value: versionCrumb(`32-07`),
    },
    "compute/api/compute-api-reference-home",
    "compute/api/access-api-self-hosted",
    "compute/api/set-up-console",
    "compute/api/stable-endpoints",
    require("./api/sidebar"),
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
  compute_3203: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 32.03",
      collapsed: true,
      items: [
        "compute/api/32-03/compute-api-reference-home",
        "compute/api/32-03/access-api-self-hosted",
        "compute/api/32-03/set-up-console",
        "compute/api/32-03/stable-endpoints",
        require("./api/32-03/sidebar"),
      ],
    },
  ],
  compute_3204: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 32.04",
      collapsed: true,
      items: [
        "compute/api/32-04/compute-api-reference-home",
        "compute/api/32-04/access-api-self-hosted",
        "compute/api/32-04/set-up-console",
        "compute/api/32-04/stable-endpoints",
        require("./api/32-04/sidebar"),
      ],
    },
  ],
  compute_3205: [
    {
      type: "category",
      label: "Prisma Cloud Compute Edition - 32.05",
      collapsed: true,
      items: [
        "compute/api/32-05/compute-api-reference-home",
        "compute/api/32-05/access-api-self-hosted",
        "compute/api/32-05/set-up-console",
        "compute/api/32-05/stable-endpoints",
        require("./api/32-05/sidebar"),
      ],
    },
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
};
