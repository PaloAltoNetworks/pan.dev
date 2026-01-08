module.exports = {
    aiintegration_api: [
      // 1. Overview Doc
      {
        type: "doc",
        id: "prisma-airs-redteam/api/ai-integration/introduction",
      },
      {
        type: "doc",
        id: "prisma-airs-redteam/api/ai-integration/errorcodes",
      }, 
      {
        type: "doc",
        id: "prisma-airs-redteam/api/ai-integration/aiintegration",
      }, 
      // 3. Management API Category
      {
        label: "Management Plane API",
        type: "category",
        collapsed: false,
        items: [
          {
            type: "doc",
            id: "prisma-airs-redteam/api/ai-integration/management/managementplane",
          },
          ...require("./api/ai-integration/management/sidebar"),
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
            id: "prisma-airs-redteam/api/ai-integration/data-plane/dataplane",
          },
          ...require("./api/ai-integration/data-plane/sidebar"),
        ],
      },
    
  ]
  
  };