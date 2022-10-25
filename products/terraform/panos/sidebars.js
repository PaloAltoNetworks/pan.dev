module.exports = {
    terraformpanos: [
        "terraform/panos/docs/intro",
        {
            type: "category",
            collapsed: true,
            label: "Getting Started Tutorials",
            items: [
                "terraform/panos/docs/tutorials/setup",
                {
                    type: "category",
                    collapsed: true,
                    label: "Information Gathering Tasks",
                    items: [
                        "terraform/panos/docs/tutorials/info-gather-sysinfo"
                    ],
                },
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "How-To Guides",
            items: [
                "terraform/panos/docs/guides/commits",
                "terraform/panos/docs/guides/auditcomments"
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "Background Information",
            items: [
                "terraform/panos/docs/info/background",
                "terraform/panos/docs/info/connectivity",
                "terraform/panos/docs/info/parallelism",
                "terraform/panos/docs/info/create-before-destroy",
                "terraform/panos/docs/info/panos-versions"
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "Reference",
            items: [
                "terraform/panos/docs/reference/provider"
            ],
        }
    ],
  };