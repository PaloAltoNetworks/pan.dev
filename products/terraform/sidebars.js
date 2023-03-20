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
            "terraform/docs/panos/tutorials/info-gather-secrules",
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "Configuration Tasks",
          items: [
            "terraform/docs/panos/tutorials/config-secpol-and-objs",
            "terraform/docs/panos/tutorials/config-networking",
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
        "terraform/docs/panos/guides/panorama-config",
        "terraform/docs/panos/guides/policy-from-yaml",
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
        "terraform/docs/panos/info/panorama-resources",
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
        {
          type: "category",
          collapsed: true,
          label: "Getting Started Tutorial",
          items: [
            "terraform/docs/cloudngfw/aws/tutorials/intro",
            "terraform/docs/cloudngfw/aws/tutorials/prepare-aws",
            "terraform/docs/cloudngfw/aws/tutorials/prepare-cloudngfw",
            "terraform/docs/cloudngfw/aws/tutorials/create-rulestack",
            "terraform/docs/cloudngfw/aws/tutorials/commit-rulestack",
            "terraform/docs/cloudngfw/aws/tutorials/create-cloudngfws",
            "terraform/docs/cloudngfw/aws/tutorials/review",
          ],
        },
        // {
        //   type: "category",
        //   collapsed: true,
        //   label: "How-To Guides",
        //   items: ["terraform/docs/cloudngfw/aws/guides/guide"],
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
