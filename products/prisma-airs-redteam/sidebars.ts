module.exports = {
    aiintegration_api: [
      // 1. Overview Doc
      {
        type: "doc",
        id: "prisma-airs-redteam/api/ai-integration/aiintegration",
      },
      {
        type: "doc",
        id: "prisma-airs-redteam/api/ai-integration/errorcodes",
      }, 
      // 3. Management API Category
      {
        label: "Management API",
        type: "category",
        collapsed: false,
        items: [
          {
            type: "doc",
            id: "prisma-airs-redteam/api/ai-integration/aiintegration",
          },
          ...require("./api/ai-integration/management/sidebar"),
        ],
      },
  
      // 4. DataPlane API Category
      {
        label: "DataPlane API",
        type: "category",
        collapsed: false,
        items: require("./api/ai-integration/data-plane/sidebar"),
      },
    ],
  };