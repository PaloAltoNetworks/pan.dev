const computeVersions = require("./api/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

module.exports = {
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
    "compute/api/compute-api-reference-home",
    "compute/api/access-api-self-hosted",
    "compute/api/set-up-console",
    "compute/api/stable-endpoints",
    require("./api/sidebar"),
  ],
  compute_2206: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`22-06`),
    },
    "compute/api/22-06/compute-api-reference-home",
    "compute/api/22-06/access-api-self-hosted",
    "compute/api/22-06/set-up-console",
    "compute/api/22-06/stable-endpoints",
    require("./api/22-06/sidebar"),
  ],
  compute_2201: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(computeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`22-01`),
    },
    "compute/api/22-01/compute-api-reference-home",
    "compute/api/22-01/access-api-self-hosted",
    "compute/api/22-01/set-up-console",
    "compute/api/22-01/stable-endpoints",
    require("./api/22-01/sidebar"),
  ],
};
