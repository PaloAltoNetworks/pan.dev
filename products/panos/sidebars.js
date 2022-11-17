module.exports = {
  panos: [
    "panos/docs/intro",
    {
      type: "category",
      collapsed: false,
      label: "APIs",
      items: ["panos/docs/xmlapi", "panos/docs/restapi"],
    },
    {
      type: "category",
      collapsed: false,
      label: "SDKs",
      items: [
        "panos/docs/panospython",
        "panos/docs/panpython",
        "panos/docs/panosgo",
        "panos/docs/panosphp",
      ],
    },
    {
      type: "category",
      collapsed: false,
      label: "Tutorials",
      items: [
        "panos/docs/tutorials/automating-ip-blocking",
        "panos/docs/tutorials/rule-hit-counts",
        "panos/docs/tutorials/uid-monitor",
        "panos/docs/tutorials/working-with-address-groups",
        "panos/docs/tutorials/rulebase-to-csv",
        "panos/docs/tutorials/redundant-internet",
      ],
    },
  ],
};
