module.exports = {
    ansiblepanos: [
        "ansible/panos/docs/intro",
        {
            type: "category",
            collapsed: true,
            label: "Getting Started Tutorials",
            items: [
                "ansible/panos/docs/tutorials/setup",
                {
                    type: "category",
                    collapsed: true,
                    label: "Information Gathering Tasks",
                    items: [
                        "ansible/panos/docs/tutorials/info-gather-sysinfo",
                        "ansible/panos/docs/tutorials/info-gather-secrules"
                    ],
                },
                {
                    type: "category",
                    collapsed: true,
                    label: "Operations Tasks",
                    items: [
                        "ansible/panos/docs/tutorials/operations-checkready"
                    ],
                }
            ]
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
                        "ansible/panos/docs/guides/config-xpath",
                        "ansible/panos/docs/guides/panorama-push"
                    ],
                },
                {
                    type: "category",
                    collapsed: true,
                    label: "Operations Tasks",
                    items: [
                        "ansible/panos/docs/guides/upgrade-single"
                    ],
                },
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "Background Information",
            items: [
                "ansible/panos/docs/info/background",
                "ansible/panos/docs/info/gathered-filter"
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "Reference",
            items: [
                "ansible/panos/docs/reference/modules"
            ],
        }
    ],
  };