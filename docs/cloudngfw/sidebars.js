module.exports = {
  cloudngfwdocs: [
    {
      type: "doc",
      id: "cloudngfw/docs/home",
    },
    {
      label: "Get Started",
      type: "category",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "cloudngfw/docs/getstarted_aws",
        },
      ],
    },
    {
      label: "Other Documentation",
      type: "category",
      collapsed: true,
      items: [
        {
          type: "link",
          label: "Cloud NGFW for AWS",
          href: "https://docs.paloaltonetworks.com/cloud-ngfw/aws/cloud-ngfw-on-aws",
        },
      ],
    },
  ],
  cloudngfwforaws_api: ["cloudngfw/api/aws/awsapi"].concat(
    require("./api/aws/sidebar")
  ),
};
