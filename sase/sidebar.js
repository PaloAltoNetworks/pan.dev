module.exports = {
  sase_docs: [
    {
      type: "doc",
      id: "docs/home",
    },
    {
      type: "doc",
      id: "docs/getstarted",
    },
    {
      type: "category",
      label: "Prisma Access Configuration",
      collapsed: true,
      items: ["docs/prisma-access-config/prisma-access-config",
      ],
    },
    {
      type: "category",
      label: "Prisma SASE Multitenant Platform",
      collapsed: true,
      items: ["docs/msp/msp",
              "docs/msp/parameters",      
              "docs/msp/filters"
      ],
    },
  ],
  pa_config_api: require("../static/sase/spec/prisma-access-config/sidebar_builder").sidebar,
  msp_api: require("../static/sase/spec/msp/sidebar_builder").sidebar,
};
