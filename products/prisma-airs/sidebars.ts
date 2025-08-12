module.exports = {
  airuntimesecurity_api: [
    // Overview and Getting Started
    {
      type: "doc",
      id: "prisma-airs/api/airuntimesecurity/airuntimesecurityapi",
    },
    {
      type: "doc",
      id: "prisma-airs/api/airuntimesecurity/usecases",
    },
    {
      type: "doc",
      id: "prisma-airs/api/airuntimesecurity/errorcodes",
    },
    
    // Authentication (should come early)
    {
      type: "doc",
      id: "prisma-airs/api/airuntimesecurity/oauth-based-authentication",
    },
    
    // Management API (foundational setup)
    {
      label: "Management API", 
      type: "category",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/prismaairsmanagementapi",
        },
        ...require("./api/airuntimesecurity/management/sidebar"),
      ],
    },
    
    // Core Runtime Security API (main functionality)
    {
      label: "AI Runtime Security API",
      type: "category",
      collapsed: false,
      items: require("./api/airuntimesecurity/scan/sidebar"),
    },
    
    // SDKs (implementation details)
    {
      label: "Python SDK",
      type: "category",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/pythonsdk",
        },
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/pythonsdkusage",
        },
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/pythonsdkasynciousage",
        },
      ],      
    },
  ],
};
