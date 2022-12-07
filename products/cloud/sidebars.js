module.exports = {
  prismacloudapi: [
    "cloud/api/intro",
    {
      type: "category",
      label: "CSPM",
      collapsed: true,
      items: [require("../cspm/api/sidebar")],
    },
    {
      type: "category",
      label: "CWPP",
      collapsed: true,
      items: [require("../cwpp/api/sidebar")],
    },
    {
      type: "category",
      label: "Code",
      collapsed: true,
      items: [require("../code/api/sidebar")],
    },
  ],
};
