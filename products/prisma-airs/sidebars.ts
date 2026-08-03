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
    // Management API (foundational setup)
    {
      label: "Management API", 
      type: "category",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/prismaairsmanagementapi",
        },
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/oauth-based-authentication",
        },
        require("./api/airuntimesecurity/management/sidebar"),
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
      label: "AI Runtime Security Python SDK",
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

    // SDKs (implementation details)
    {
      label: "Management API Python SDK",
      type: "category",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/management/mgmt-python-sdk",
        },
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/management/mgmt-python-inlinesdk",
        },
        {
          type: "doc",
          id: "prisma-airs/api/airuntimesecurity/management/mgmt-python-asynciosdk",
        },
      ],      
    },
  ],
};
