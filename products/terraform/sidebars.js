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
          items: [
            "terraform/docs/panos/tutorials/info-gather-sysinfo",
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "Configuration Tasks",
          items: [
            "terraform/docs/panos/tutorials/config-secpol-and-objs",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "How-To Guides",
      items: [
        "terraform/docs/panos/guides/commits",
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
        "terraform/docs/panos/info/auditcomments",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Reference",
      items: ["terraform/docs/panos/reference/provider"],
    },
  ],
  terraformcloudngfw: [
    "terraform/docs/cloudngfw/intro",
    {
      type: "category",
      collapsed: false,
      label: "AWS",
      items: [
        // {
        //   type: "category",
        //   collapsed: true,
        //   label: "Getting Started Tutorials",
        //   items: ["terraform/cloudngfw/aws/tutorials/tutorial"],
        // },
        // {
        //   type: "category",
        //   collapsed: true,
        //   label: "How-To Guides",
        //   items: ["terraform/cloudngfw/aws/guides/guide"],
        // },
        // {
        //   type: "category",
        //   collapsed: true,
        //   label: "Background Information",
        //   items: ["terraform/cloudngfw/aws/info/info"],
        // },
        {
          type: "category",
          collapsed: true,
          label: "Reference",
          items: ["terraform/docs/cloudngfw/aws/reference/provider"],
        },
      ],
    },
  ],
};
