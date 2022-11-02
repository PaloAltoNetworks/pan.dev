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
          label: "Operations Tasks",
          items: ["ansible/docs/panos/tutorials/operations-checkready"],
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
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "Operations Tasks",
          items: ["ansible/docs/panos/guides/upgrade-single"],
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
        "ansible/docs/panos/info/gathered-filter",
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
