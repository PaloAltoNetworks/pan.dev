module.exports = {
  aisecuritymodel_api: [
    // 1. Overview Doc
    {
      type: "doc",
      id: "prisma-airs-model-security/api/aisecuritymodel/aisecuritymodel",
    },
    {
      type: "doc",
      id: "prisma-airs-model-security/api/aisecuritymodel/errorcodes",
    }, 
    
    // 3. Management API Category (Folder only, no intro doc)
    {
      label: "Management Plane API",
      type: "category",
      collapsed: false,
      items: [
        // CRITICAL FIX: .default is required so the build doesn't crash
        ...require("./api/aisecuritymodel/management/sidebar").default,
      ],
    },

    // 4. DataPlane API Category (Folder only, no intro doc)
    {
      label: "Data Plane API",
      type: "category",
      collapsed: false,
      items: [
        // CRITICAL FIX: .default is required so the build doesn't crash
        ...require("./api/aisecuritymodel/dataplane/sidebar").default,
      ],
    },
  ]
};