module.exports = {
  airuntimesecurity_api: [
    {
      type: "doc",
      id: "prisma-airs/api/airuntimesecurity/airuntimesecurityapi",
    },
    {
      type: "doc",
      id: "prisma-airs/api/airuntimesecurity/errorcodes",
    },
    {
      type: "doc",
      id: "prisma-airs/api/airuntimesecurity/usecases",
    },
    {
      label: "Python SDK",
      type: "category",
      collapsed: true,
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
    {
      label: "AI Runtime Security API",
      type: "category",
      collapsed: false,
      items: require("./api/airuntimesecurity/scan/sidebar"),
    },
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
            ...require("./api/airuntimesecurity/management/sidebar"),
          ],
    },
  ],
};
