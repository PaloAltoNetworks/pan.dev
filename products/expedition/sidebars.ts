module.exports = {
  expedition: [
    "expedition/docs/home",
    "expedition/docs/expedition_qs",
    "expedition/docs/expedition_export",
    {
      type: "category",
      collapsed: false,
      label: "Expedition-API",
      items: [
        "expedition/docs/expedition_apiint",
        {
          type: "category",
          collapsed: false,
          label: "General Actions",
          items: [
            "expedition/docs/creating_credentials",
            "expedition/docs/managing_expedition_agent",
            "expedition/docs/managing_jobs",
          ],
        },
        "expedition/docs/expedition_workflow_filters",
        {
          type: "category",
          collapsed: false,
          label: "Expedition-API Use Cases",
          items: [
            "expedition/docs/expedition_workflow_migration",
            "expedition/docs/expedition_workflow_removeunused",
            "expedition/docs/expedition_workflow_bulkchange",
            "expedition/docs/expedition_workflow_searchrule",
          ],
        },
      ],
    },
    "expedition/docs/expedition_contact",
  ],
};
