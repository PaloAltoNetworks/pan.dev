module.exports = {
  terraformpanos: [
    "terraform/docs/panos/intro",
    {
      type: "category",
      collapsed: true,
      label: "Getting Started Tutorials",
      items: [
        "terraform/docs/panos/tutorials/setup",
        {
          type: "category",
          collapsed: true,
          label: "Information Gathering Tasks",
          items: ["terraform/docs/panos/tutorials/info-gather-sysinfo"],
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "How-To Guides",
      items: [
        "terraform/docs/panos/guides/commits",
        "terraform/docs/panos/guides/auditcomments",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Background Information",
      items: [
        "terraform/docs/panos/info/background",
        "terraform/docs/panos/info/connectivity",
        "terraform/docs/panos/info/parallelism",
        "terraform/docs/panos/info/create-before-destroy",
        "terraform/docs/panos/info/panos-versions",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Reference",
      items: ["terraform/docs/panos/reference/provider"],
    },
  ],
};
