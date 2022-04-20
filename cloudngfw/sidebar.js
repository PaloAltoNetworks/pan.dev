module.exports = {
  cloudngfw_docs: [
    {
        type: "doc",
        id: "docs/home"
    },
    {
        label: "Get Started",
        type: "category",
        collapsed: false,
        items: [
            {
                type: "doc",
                id: "docs/getstarted_aws"
            },
        ]
    },
    {
        label: "Other Documentation",
        type: "category",
        collapsed: true,
        items: [
				{
                        type: "link",
                        label: "Cloud NGFW for AWS",
                        href: 'https://docs.paloaltonetworks.com/cloud-ngfw/aws/cloud-ngfw-on-aws'
                    },
            
                ]
    },
  ],
   cloudngfwforaws_api: require("../static/cloudngfw/aws/spec/sidebar_builder").sidebar,
};
