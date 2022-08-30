module.exports = {
  subscription_docs: [
    {
      type: "doc",
      id: "threat-vault/docs/home",
    },
    {
      type: "category",
      label: "Get Started",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "threat-vault/docs/getstarted",
        },
        {
          type: "doc",
          id: "threat-vault/docs/authentication",
        },
        {
          type: "doc",
          id: "threat-vault/docs/api-key-management",
        },
        {
          type: "doc",
          id: "threat-vault/docs/api-call",
        },
      ],
    },
    {
      type: "category",
      label: "Access Limits",
      items: [
        {
          type: "doc",
          id: "threat-vault/docs/access-limits/threat-vault",
        },
        {
          type: "doc",
          id: "threat-vault/docs/access-limits/dns-security",
        },
      ],
    },
    {
      type: "doc",
      id: "threat-vault/docs/best-practices",
    },
    {
        type: "category",
        label: "Examples",
        collapsed: true,
        items: [
              {
                  type: "category",
                  label: "Threat Vault API Examples",
                  collapsed: true,
          items: [
            {
              type: "doc",
              id: "threat-vault/docs/examples/threat-vault/get-threat-signature-metadata-ips",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/threat-vault/get-threat-signature-metadata-antivirus",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/threat-vault/get-threat-signature-metadata",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/threat-vault/get-threat-signature-history",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/threat-vault/get-atp-report",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/threat-vault/get-atp-report-pcap",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/threat-vault/get-content-release-notes",
            },
          ],  
              },
            {
                  type: "category",
                  label: "DNS Security API Examples",
                  collapsed: true,
          items: [
            {
              type: "doc",
              id: "threat-vault/docs/examples/dns-security/request-domain-information",
            },

          ], 
              },

        ]
    },
    {
      type: "category",
      label: "Response Fields",
      items: [
        {
          type: "doc",
          id: "threat-vault/docs/response-fields/threat-vault-response-fields",
        },
      ],
    },

    {
      type: "category",
      label: "Security Subscription Release Notes",
      items: [
        {
          type: "doc",
          id: "threat-vault/docs/release-notes/changelog",
        },
        {
          type: "doc",
          id: "threat-vault/docs/release-notes/release-notes",
        },
      ],
    },
  ],
  dns_security_api: require("../static/cdss/dns-security/spec/sidebar_builder").sidebar,
  threat_vault_api: require("../static/cdss/threat-vault/spec/sidebar_builder").sidebar,
};
