module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  splunkSideBar: [
    "splunk/docs/splunk-intro",
    {
      type: "category",
      label: "OVERVIEW",
      collapsed: false,
      items: ["splunk/docs/faq", "splunk/docs/release-notes"],
    },
    {
      type: "category",
      label: "GETTING STARTED",
      collapsed: false,
      items: [
        "splunk/docs/installation",
        {
          "Getting Data Into Splunk": [
            {
              type: "doc",
              id: "splunk/docs/getting-data-in",
              label: "Summary",
            },
            "splunk/docs/firewalls-panorama",
            "splunk/docs/cortex-xdr",
            "splunk/docs/cortex-hec",
            "splunk/docs/aperture",
            "splunk/docs/autofocus-and-minemeld",
            "splunk/docs/iot-security",
            "splunk/docs/universal-forwarder",
          ],
        },
        "splunk/docs/log-correlation",
      ],
    },
    {
      type: "category",
      label: "CONFIGURATION",
      collapsed: false,
      items: [
        "splunk/docs/tune-or-reduce-firewall-logs",
        "splunk/docs/enterprise-security",
        "splunk/docs/lookups",
      ],
    },
    {
      type: "category",
      label: "ADVANCED FEATURES",
      collapsed: false,
      items: [
        "splunk/docs/adaptive-response",
        "splunk/docs/threat-intelligence",
        "splunk/docs/external-search",
        "splunk/docs/userid",
        "splunk/docs/commands",
      ],
    },
    {
      type: "category",
      label: "SUPPORT",
      collapsed: false,
      items: [
        "splunk/docs/troubleshooting",
        "splunk/docs/health-checks",
        "splunk/docs/support",
      ],
    },
  ],
};
