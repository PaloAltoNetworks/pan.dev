module.exports = {
  expedition: [
    "docs/home",
    "docs/expedition_qs",
    "docs/expedition_export",
    {
      type: "category",
      collapsed: false,
      label: "Expedition-API",
      items: [
        "docs/expedition_apiint",
        {
          type: "category",
          collapsed: false,
          label: "General Actions",
          items: [
            "docs/creating_credentials",
            "docs/managing_expedition_agent",
            "docs/managing_jobs",
          ],
        },
        "docs/expedition_workflow_filters",
        {
          type: "category",
          collapsed: false,
          label: "Expedition-API Use Cases",
          items: [
            "docs/expedition_workflow_migration",
            "docs/expedition_workflow_removeunused",
            "docs/expedition_workflow_bulkchange",
          ],
        },
      ],
    },
    "docs/expedition_contact",
  ],
};
