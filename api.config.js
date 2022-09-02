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
  auth: {
    specPath: "static/sase/spec/auth",
    outputDir: "docs/sase/api/auth",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
  },
  iam: {
    specPath: "static/sase/spec/iam",
    outputDir: "docs/sase/api/iam",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
  },
  insights: {
    specPath: "static/sase/spec/insights/2.0",
    outputDir: "docs/sase/api/insights/2.0",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
    version: "2.0",
    label: "v2.0",
    baseUrl: "/category/sase/api/insights/2.0/v-2-0/data-resource/",
    versions: {
      "1.0": {
        specPath: "static/sase/spec/insights/1.0",
        outputDir: "docs/sase/api/insights/1.0",
        label: "v1.0",
        baseUrl: "/category/sase/api/insights/1.0/v-1-0/data-resource/",
      },
    },
  },
  mtmonitor: {
    specPath: "static/sase/spec/mt-monitor",
    outputDir: "docs/sase/api/mt-monitor",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
  },
  access: {
    specPath: "static/sase/spec/prisma-access-config",
    outputDir: "docs/sase/api/prisma-access-config",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
  },
  sub: {
    specPath: "static/sase/spec/subscription",
    outputDir: "docs/sase/api/subscription",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
  },
  tenancy: {
    specPath: "static/sase/spec/tenancy",
    outputDir: "docs/sase/api/tenancy",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
  },
  cloudngfw: {
    specPath: "static/cloudngfw/aws/spec/api",
    outputDir: "docs/cloudngfw/api/aws",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
  },
  sdwan_versions: {
    specPath: "static/sase/spec/sdwan/unified",
    outputDir: "docs/sase/api/sdwan/unified",
    sidebarOptions: {
      groupPathsBy: "tag",
    },
    version: "Unified",
    label: "Unified",
    baseUrl: "/sase/api/sdwan",
    versions: {
      legacy: {
        specPath: "static/sase/spec/sdwan/legacy",
        outputDir: "docs/sase/api/sdwan/legacy",
        label: "Legacy",
        baseUrl: "/sase/api/sdwan/legacy",
      },
    },
  },
  dns_security: {
    specPath: "static/cdss/dns-security/spec/dns-security.yaml",
    outputDir: "docs/cdss/dns-security/api",
  },
};
