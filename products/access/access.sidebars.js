const insightsVersions = require("./access/api/insights/2.0/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

module.exports = {
  saseinsightsv1: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(insightsVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1.0`),
    },
  ].concat(require("./access/api/insights/1.0/sidebar")),
  saseinsightsv2: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(insightsVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0`),
    },
  ].concat(require("./access/api/insights/2.0/sidebar")),
  saseprismaaccess: ["access/api/prisma-access-config/config-api"].concat(
    require("./access/api/prisma-access-config/sidebar")
  ),
};
