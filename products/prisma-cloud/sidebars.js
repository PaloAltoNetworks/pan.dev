module.exports = {
  prismacloudapi: [
    "prisma-cloud/api/api-reference-home",
    {
      type: "category",
      label: "Cloud Security Posture Management",
      collapsed: true,
      items: [
        "cspm/api/cspm-api",
        "cspm/api/api-urls",
        "cspm/api/api-headers",
        "cspm/api/rate-limits",
        "cspm/api/api-time-range-model",
        "cspm/api/api-integration-config",
        "cspm/api/api-errors",
        "cspm/api/prisma-cloud-see-also",
        require("../cspm/api/sidebar")
      ],
    },
    {
      type: "category",
      label: "Cloud Workload Protection",
      collapsed: true,
      items: [
        "cwpp/api/cwpp-home",
        "cwpp/api/stable-endpoints",
        "cwpp/api/curl-examples",
        "cwpp/api/how-to-eval-console",
        "cwpp/api/api-limits",
        require("../cwpp/api/sidebar")
      ],
    },
    {
      type: "category",
      label: "Cloud Code Security",
      collapsed: true,
      items: [
        "code/api/code",
        "code/api/basic-request",
        "code/api/api-headers",
        require("../code/api/sidebar")
      ],
    },
  ],
  clouddocs: [
    "prisma-cloud/docs/home",
    "prisma-cloud/docs/export-compliance-standard",
    "prisma-cloud/docs/prisma-cloud-see-also",
  ],
};
