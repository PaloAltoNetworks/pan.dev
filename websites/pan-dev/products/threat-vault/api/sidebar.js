module.exports = [
  {
    type: "category",
    label: "Advanced Threat Prevention",
    link: { type: "doc", id: "threat-vault/api/advanced-threat-prevention" },
    items: [
      {
        type: "doc",
        id: "threat-vault/api/postatpreportsbatchmode",
        label: "Request Advanced Threat Prevention Report in Batch Mode",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "threat-vault/api/getatppcaps",
        label: "Request Advanced Threat Prevention Report PCAP",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "Threat Prevention",
    link: { type: "doc", id: "threat-vault/api/threat-prevention" },
    items: [
      {
        type: "doc",
        id: "threat-vault/api/releasenotes",
        label: "Request Content Release Notes",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "threat-vault/api/threats",
        label: "Request Threat Metadata",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "threat-vault/api/threatsbatch",
        label: "Request Threat Signature Metadata in Batch Mode",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "threat-vault/api/threatshistory",
        label: "Request Threat Signature Release History",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "threat-vault/api/edl",
        label: "Request Predefined EDL Content",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "threat-vault/api/ip-feed",
        label: "Request IP Feed Information",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "threat-vault/api/ip-feed-batch",
        label: "Request IP Feed Information in Batch Mode",
        className: "api-method post",
      },
    ],
  },
];
