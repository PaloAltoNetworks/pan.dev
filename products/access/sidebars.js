const insightsVersions = require("./api/insights/versions.json");
const {
  versionSelector,
  versionCrumb
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

module.exports = {
  saseinsightsv1: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(insightsVersions),
      className: "version-button"
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1.0`)
    },
    require("./api/insights/1.0/sidebar")
  ],
  saseinsightsv2: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(insightsVersions),
      className: "version-button"
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0`)
    },
    require("./api/insights/sidebar")
  ],
  saseprismaaccess: [
    "access/api/prisma-access-config/config-api",
    require("./api/prisma-access-config/sidebar")
  ]
};
