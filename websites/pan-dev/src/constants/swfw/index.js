import React from "react";

export const SWFW_METADATA = {
  title: "Software Firewall Automation HUB",
  description:
    "Palo Alto Networks as Code, deploy, configure, and orchestrate hybrid-cloud security with Terraform",
};

export const SWFW_HERO_CONTENT = {
  anchorLink: "#providers-container",
  product: "terraform",
  header: (
    <h1>
      Deploy and manage Software Firewalls with familiar cloud automation tools
      taking an infrastructure-as-code approach
    </h1>
  ),
  subheader: (
    <>
      <p>
        Leverage validated <span>reference architectures</span> and Terraform
        modules for easy and successful deployment of your Software Firewalls,
        or use pre-built <span>code modules</span> to easily deploy a software
        NGFW in custom cloud architectures.
      </p>
    </>
  ),
};

export const SWFW_CLOUDS = [
  {
    title: "AWS",
    subtitle: "VM-Series virtual firewalls and Cloud NGFW for AWS",
    link: "/terraform/docs/swfw/aws/vmseries/overview/",
    text: "Deploy and configure VM-Series Virtual Next-Generation Firewalls or Cloud NGFW for AWS as code on the AWS Application Platform using the Terraform examples and modules that help you realize the Palo Alto Networks validated reference architectures.",
  },
  {
    title: "Azure",
    subtitle: "VM-Series virtual firewalls and Cloud NGFW for Azure",
    link: "/terraform/docs/swfw/azure/vmseries/overview/",
    text: "Deploy and configure VM-Series Virtual Next-Generation Firewalls or Cloud NGFW for Azure as code on Microsoft Azure Cloud Computing Services using the Terraform examples and modules that help you realize the Palo Alto Networks validated reference architectures.",
  },
  {
    title: "GCP",
    subtitle: "VM-Series virtual firewalls for Google Cloud",
    link: "/terraform/docs/swfw/gcp/vmseries/overview/",
    text: "Deploy and configure VM-Series Virtual Next-Generation Firewalls as code on the Google Cloud Platform using the Terraform examples and modules that help you realize the Palo Alto Networks validated reference architectures.",
  },
];

export const SWFW_LINKS = [
  {
    title: (
      <>
        <span className="highlight">Deploy</span> VM-Series virtual firewalls
      </>
    ),
    subtitle: "Terraform modules to deploy a custom secure architecture",
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
        <span className="highlight">Configure</span> VM-Series virtual firewalls
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
        <span className="highlight">Managed</span> Cloud Firewalls
      </>
    ),
    subtitle: "NGFW as a managed service by Palo Alto Networks",
    links: [
      {
        text: "Provider for CloudNGFW for AWS",
        url: "/terraform/docs/cloudngfw/",
      },
      // {
      //   text: "Modules for CloudNGFW for AWS",
      //   url: "terraform/docs/cloudngfw/aws/modules/",
      // },
      // {
      //   text: "Modules for CloudNGFW for Azure",
      //   url: "terraform/docs/cloudngfw/azure/modules/",
      // },
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
      {
        text: "Terraform for PAN-OS",
        url: "/terraform/docs/panos/",
      },
      {
        text: "Ansible and Palo Alto Networks",
        url: "/ansible/",
      },
      {
        text: "Ansible for PAN-OS",
        url: "/ansible/docs/panos/",
      },
      {
        text: "APIs and SDKs for PAN-OS",
        url: "/panos/docs/",
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
