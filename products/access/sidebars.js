const insightsVersions = require("./api/insights/versions.json");
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
    "access/api/insights/1.0/insights-api",
    require("./api/insights/1.0/sidebar"),
  ],
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
    "access/api/insights/insights-api",
    require("./api/insights/2.0/sidebar"),
  ],
  saseinsightsv3: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(insightsVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v3.0`),
    },
    "access/api/insights/insights-api",
    require("./api/insights/sidebar"),
  ],
  sasebrowsermgmt: [
    "access/api/browser-mgmt/browser-mgmt-api",
    require("./api/browser-mgmt/sidebar"),
  ],
  saseprismaaccess: [
    "access/api/prisma-access-config/config-api",
    require("./api/prisma-access-config/sidebar"),
  ],
  adem: [require("./api/adem/sidebar")],
  ztna: [require("./api/ztna/sidebar")],
};
