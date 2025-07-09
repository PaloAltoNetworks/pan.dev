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
    require("./api/airuntimesecurity/sidebar"),
  ],
};