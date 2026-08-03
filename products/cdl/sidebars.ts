module.exports = {
  cdl_logforwarding_docs: [
    "cdl/docs/logforwarding/home",
    "cdl/docs/logforwarding/getstarted_lf",
    "cdl/docs/logforwarding/specifylogs_lf",
    "cdl/docs/logforwarding/syslog_lf",
    "cdl/docs/logforwarding/https_lf",
    {
      type: "category",
      label: "Log Forwarding Release Notes",
      items: [
        {
          type: "doc",
          id: "cdl/docs/logforwarding/release-notes/changelog",
        },
        {
          type: "doc",
          id: "cdl/docs/logforwarding/release-notes/relnotes",
        },
      ],
    },
  ],
  cdl_logforwarding_api: [
    "cdl/api/logforwarding/logforwardingapi",
    require("./api/logforwarding/sidebar"),
  ],
};
