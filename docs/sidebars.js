/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sase_docs: require("./sase/sidebar"),
  saseauth: ["sase/api/auth/auth-api"].concat(
    require("./sase/api/auth/sidebar")
  ),
  saseiam: ["sase/api/iam/iam-api"].concat(require("./sase/api/iam/sidebar")),
  saseinsightsv1: require("./sase/api/insights/1.0/sidebar"),
  saseinsightsv2: require("./sase/api/insights/2.0/sidebar"),
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
  sdwan_unified: ["sase/api/sdwan/unified/unified"].concat(
    require("./sase/api/sdwan/unified/sidebar")
  ),
  sdwan_legacy: ["sase/api/sdwan/legacy/legacy"].concat(
    require("./sase/api/sdwan/legacy/sidebar")
  ),
};

module.exports = sidebars;
