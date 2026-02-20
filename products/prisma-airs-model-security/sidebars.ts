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
    
    // 3. Management API Category
    {
      label: "Management Plane API",
      type: "category",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "prisma-airs-model-security/api/aisecuritymodel/management/introduction-management",
        },
        // FIX: Add the spread operator (...) 
        ...require("./api/aisecuritymodel/management/sidebar"),
      ],
    },

    // 4. DataPlane API Category
    {
      label: "Data Plane API",
      type: "category",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "prisma-airs-model-security/api/aisecuritymodel/dataplane/introduction-dataplane",
        },
        // FIX: Add the spread operator (...)
        ...require("./api/aisecuritymodel/dataplane/sidebar"),
      ],
    },
  
]
};