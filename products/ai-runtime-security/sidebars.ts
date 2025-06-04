module.exports = {
  airuntimesecurity_api: [
    {
      type: "doc",
      id: "ai-runtime-security/api/airuntimesecurityapi",
    },
    {
      type: "doc",
      id: "ai-runtime-security/api/usecases",
    },
    {
      label: "Python SDK",
      type: "category",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "ai-runtime-security/api/pythonsdk",
        },
        {
          type: "doc",
          id: "ai-runtime-security/api/pythonsdkusage",
        },
        {
          type: "doc",
          id: "ai-runtime-security/api/pythonsdkasynciousage",
        },
      ],      
    },
    require("./api/sidebar"),
  ],
};