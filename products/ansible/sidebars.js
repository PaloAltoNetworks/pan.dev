module.exports = {
  ansiblepanos: [
    "ansible/docs/panos/intro",
    {
      type: "category",
      collapsed: true,
      label: "Getting Started Tutorials",
      items: [
        "ansible/docs/panos/tutorials/setup",
        {
          type: "category",
          collapsed: true,
          label: "Information Gathering Tasks",
          items: [
            "ansible/docs/panos/tutorials/info-gather-sysinfo",
            "ansible/docs/panos/tutorials/info-gather-secrules",
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "Configuration Tasks",
          items: [
            "ansible/docs/panos/tutorials/config-secpol-and-objs",
            "ansible/docs/panos/tutorials/config-networking",
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "Operations Tasks",
          items: [
            "ansible/docs/panos/tutorials/operations-checkready",
            "ansible/docs/panos/tutorials/operations-upgrade-firewall",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "How-To Guides",
      items: [
        {
          type: "category",
          collapsed: true,
          label: "Configuration and Commit Tasks",
          items: [
            "ansible/docs/panos/guides/config-xpath",
            "ansible/docs/panos/guides/panorama-push",
            "ansible/docs/panos/guides/use-config-lock",
            "ansible/docs/panos/guides/import-load-config",
            "ansible/docs/panos/guides/csv-address-objects",
            "ansible/docs/panos/guides/search-and-remove",
            "ansible/docs/panos/guides/eda-decryption-remediation",
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "Operations Tasks",
          items: ["ansible/docs/panos/guides/offline-content-software-upgrade"],
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Background Information",
      items: [
        "ansible/docs/panos/info/background",
        "ansible/docs/panos/info/connectivity",
        "ansible/docs/panos/info/pan-os-rbac",
        "ansible/docs/panos/info/gathered-filter",
        "ansible/docs/panos/info/nat_rule_v3",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Reference",
      items: ["ansible/docs/panos/reference/modules"],
    },
  ],
};
