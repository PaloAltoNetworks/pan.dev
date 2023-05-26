import React from "react";

export const SWFW_METADATA = {
  title: "Software Firewall with Terraform",
  description:
    "Palo Alto Networks as Code, deploy, configure, and orchestrate hybrid-cloud security with Terraform",
};

export const SWFW_HERO_CONTENT = {
  anchorLink: "#providers-container",
  product: "terraform",
  header: (
    <h1>
      <span>Reference Architectures</span> Software NGFW with Terraform
    </h1>
  ),
  subheader: (
    <p>
      Leverage tested Reference Architectures and Terraform modules for easy and
      successful deployment of your Software NGFW
    </p>
  ),
};

export const SWFW_CLOUDS = [
  {
    title: "AWS",
    subtitle: "For VM-Series and CloudNGFW",
    link: "/terraform/docs/swfw/aws/vmseries/overview/",
    text: "Palo Alto Networks validated Reference Architectures for your AWS environment using Terraform. Deploy, configure, and orchestrate VM-Series NGFW instances and CloudNGFW service.",
  },
  {
    title: "Azure",
    subtitle: "For VM-Series and CloudNGFW",
    link: "/terraform/docs/swfw/azure/vmseries/overview/",
    text: "Some amazing Azure text here",
  },
  {
    title: "GCP",
    subtitle: "For VM-Series",
    link: "/terraform/docs/swfw/gcp/vmseries/overview/",
    text: ",",
  },
];

export const SWFW_LINKS = [
  {
    title: (
      <>
        <span className="highlight">Deploy</span> VM-Series
      </>
    ),
    subtitle: "Terraform Modules to deploy a custom secure architecture",
    links: [
      {
        text: "Modules for AWS",
        url: "/terraform/docs/swfw/aws/vmseries/modules/",
      },
      {
        text: "Modules for Azure",
        url: "/terraform/docs/swfw/azure/vmseries/modules/",
      },
      {
        text: "Modules for GCP",
        url: "/terraform/docs/swfw/gcp/vmseries/modules/",
      },
    ],
  },
  {
    title: (
      <>
        <span className="highlight">Configure</span> VM-Series
      </>
    ),
    subtitle: "Leverage Terraform to declare firewall policy",
    links: [
      {
        text: "Provider for PAN-OS",
        url: "/terraform/docs/panos/",
      },
    ],
  },
  {
    title: (
      <>
        <span className="highlight">Orchestrate</span> CloudNGFW
      </>
    ),
    subtitle: "NGFW as a Service deployed and managed by Terraform",
    links: [
      {
        text: "Provider for CloudNGFW for AWS",
        url: "/terraform/docs/cloudngfw/",
      },
      {
        text: "Modules for CloudNGFW for AWS",
        url: "terraform/docs/cloudngfw/aws/modules/",
      },
      {
        text: "Modules for CloudNGFW for Azure",
        url: "terraform/docs/cloudngfw/azure/modules/",
      },
    ],
  },
  {
    title: (
      <>
        <span className="highlight">Learn</span> More
      </>
    ),
    subtitle: "Find out more ways to automate security",
    links: [
      {
        text: "Palo Alto Networks and Terraform",
        url: "/terraform/",
      },
      // {
      //   text: "Palo Alto Networks and Consul",
      //   url: "#",
      // },
      // {
      //   text: "Automation Community",
      //   url: "#",
      // },
    ],
  },
];
