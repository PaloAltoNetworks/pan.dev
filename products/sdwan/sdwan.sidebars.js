const sdwanVersions = require("./api/unified/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

module.exports = {
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
    "sdwan/api/unified/unified",
  ].concat(require("./api/unified/sidebar")),
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
    "sdwan/api/legacy/legacy",
  ].concat(require("./api/legacy/sidebar")),
};
