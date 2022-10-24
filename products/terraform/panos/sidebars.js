module.exports = {
    terraformpanos: [
        "terraform/panos/docs/intro",
        {
            type: "category",
            collapsed: true,
            label: "Tutorials",
            items: [
            "terraform/panos/docs/tutorials/setup",
            "terraform/panos/docs/tutorials/first-plan"
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "How-To Guides",
            items: [
            "terraform/panos/docs/guides/something",
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "Background Information",
            items: [
            "terraform/panos/docs/info/background"
            ],
        },
        {
            type: "category",
            collapsed: true,
            label: "Reference Documentation",
            items: [
            "terraform/panos/docs/reference/provider"
            ],
        }
    ],
  };