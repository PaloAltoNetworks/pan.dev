/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sdwanVersions = require("./sase/api/sdwan/unified/versions.json");
const insightsVersions = require("./sase/api/insights/2.0/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

const sidebars = {
  sase_docs: require("./sase/sidebar"),
  saseauth: ["sase/api/auth/auth-api"].concat(
    require("./sase/api/auth/sidebar")
  ),
  saseiam: ["sase/api/iam/iam-api"].concat(require("./sase/api/iam/sidebar")),
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
  ].concat(require("./sase/api/insights/1.0/sidebar")),
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
  ].concat(require("./sase/api/insights/2.0/sidebar")),
  sasemt: ["sase/api/mt-monitor/msp-api"].concat(
    require("./sase/api/mt-monitor/sidebar")
  ),
  saseprismaaccess: ["sase/api/prisma-access-config/config-api"].concat(
    require("./sase/api/prisma-access-config/sidebar")
  ),
  sasesubscription: require("./sase/api/subscription/sidebar"),
  sasetenancy: ["sase/api/tenancy/tenancy-api"].concat(
    require("./sase/api/tenancy/sidebar")
  ),
  cloudngfwdocs: require("./cloudngfw/sidebar"),
  cloudngfwforaws_api: ["sase/api/auth/auth-api"].concat(
    require("./cloudngfw/api/aws/sidebar")
  ),
  sdwan_unified: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(sdwanVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`Unified`),
    },
    "sase/api/sdwan/unified/unified",
  ].concat(require("./sase/api/sdwan/unified/sidebar")),
  sdwan_legacy: [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(sdwanVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`Legacy`),
    },
    "sase/api/sdwan/legacy/legacy",
  ].concat(require("./sase/api/sdwan/legacy/sidebar")),
};

module.exports = sidebars;
