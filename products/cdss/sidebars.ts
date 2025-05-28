/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  cdss_docs: [
    {
      type: "doc",
      id: "cdss/docs/home",
    },
    {
      type: "category",
      label: "Get Started",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "cdss/docs/getstarted",
        },
        {
          type: "doc",
          id: "cdss/docs/authentication",
        },
        {
          type: "doc",
          id: "cdss/docs/api-key-management",
        },
        {
          type: "doc",
          id: "cdss/docs/api-call",
        },
      ],
    },
    {
      type: "category",
      label: "Access Limits",
      items: [
        {
          type: "doc",
          id: "threat-vault/docs/access-limits",
        },
        {
          type: "doc",
          id: "dns-security/docs/access-limits",
        },
      ],
    },
    {
      type: "doc",
      id: "cdss/docs/best-practices",
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
              id: "threat-vault/docs/examples/get-threat-signature-metadata-ips",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-threat-signature-metadata-antivirus",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-threat-signature-metadata",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-threat-signature-history",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-atp-report",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-predefined-edl-content",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-atp-report-pcap",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-content-release-notes",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-ip-feed-information",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-ip-feed-batch-mode",
            },
            {
              type: "doc",
              id: "threat-vault/docs/examples/get-cve-coverage-information",
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
              id: "dns-security/docs/examples/request-domain-information",
            },
            {
              type: "doc",
              id: "dns-security/docs/examples/request-domain-categorization-change",
            },
          ],
        },
      ],
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
          id: "cdss/docs/release-notes/changelog",
        },
        {
          type: "doc",
          id: "cdss/docs/release-notes/release-notes",
        },
      ],
    },
  ],
};
