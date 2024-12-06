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
        {
          type: "doc",
          id: "cloudngfw/docs/getstarted_azure",
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
        {
          type: "link",
          label: "Cloud NGFW for Azure",
          href: "https://docs.paloaltonetworks.com/cloud-ngfw/azure/cloud-ngfw-for-azure",
        },
        {
          type: "link",
          label: "Terraform for Cloud NGFW for AWS",
          href: "/terraform/docs/cloudngfw/",
        },
        {
          type: "link",
          label: "Terraform for Cloud NGFW for Azure",
          href: "https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/palo_alto_local_rulestack",
        },
      ],
    },
  ],
  cloudngfwforaws_api: [
    {
      type: "doc",
      id: "cloudngfw/api/aws/awsapi",
    },
    require("./api/aws/sidebar"),
  ],
};
