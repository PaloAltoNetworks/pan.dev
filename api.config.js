module.exports = {
  iot: {
    specPath: "static/cdss/iot/iot.yaml",
    outputDir: "docs/cdss/iot/api",
  },
  tp: {
    specPath: "static/cdss/threat-vault/spec",
    outputDir: "docs/cdss/threat-vault/api",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
  },
};
