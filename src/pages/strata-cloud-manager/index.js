import React from "react";
// components
import Layout from "@theme/Layout";
import SCMCard from "./SCMCard";
import "./scm.scss";
export default function SCMLandingPage() {
  const heroHeader = "Strata Cloud Manager";
  const heroDescription =
    "Strata Cloud Manager™ enables you to easily manage your Palo Alto Networks Network Security infrastructure—including NGFWs and SASE environment—from the cloud, via one unified management interface.";
  const scmCards = [
    {
      label: "Developer's Guide",
      description: "",
      docs: [
        {
          to: "scm/docs/home",
          label: "Strata Cloud Manager Developer's Guide",
          icon: "doc",
        },
        {
          label: "Tenant Service Groups",
          to: "scm/docs/tenant-service-groups",
          icon: "doc",
        },
        {
          label: "Service Accounts",
          to: "scm/docs/service-accounts",
          icon: "doc",
        },
        {
          label: "Roles",
          to: "scm/docs/all-roles",
          icon: "doc",
        },
        {
          label: "Changelog",
          to: "scm/docs/release-notes/changelog",
          icon: "doc",
        },
      ],
    },
    {
      label: "Authentication",
      description: "",
      docs: [
        {
          to: "scm/api/tenancy/tenancy-api",
          label: "Tenancy Service",
          icon: "api-doc",
        },
        {
          to: "scm/api/iam/iam-api",
          label: "Identity and Access Management",
          icon: "api-doc",
        },
        {
          to: "scm/api/auth/auth-api",
          label: "Authentication Service",
          icon: "api-doc",
        },
        {
          to: "scm/api/subscription/subscription-api",
          label: "Subscription Service",
          icon: "api-doc",
        },
      ],
    },
    {
      label: "Configuration",
      description: "",
      type: "hierarchy",
      docs: {
        "SASE Configuration": [
          {
            to: "scm/api/config/sase/operations/operations-api",
            label: "Configuration Operations",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/sase/setup/setup-api",
            label: "Configuration Setup",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/sase/deployment/deployment-api",
            label: "Network Deployment",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/sase/identity/identity-api",
            label: "Identity Services",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/sase/mobileagent/mobileagent-api",
            label: "GlobalProtect",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/sase/objects/objects-api",
            label: "Objects",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/sase/security/security-api",
            label: "Security Services",
            icon: "api-doc",
          },
        ],
        "NGFW Configuration": [
          {
            to: "scm/api/config/ngfw/operations/operations-api-ngfw",
            label: "Configuration Operations",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/ngfw/setup/setup-api-ngfw",
            label: "Configuration Setup",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/ngfw/identity/identity-api-ngfw",
            label: "Identity Services",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/ngfw/device/device-api",
            label: "Device Configuration",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/ngfw/network/network-api",
            label: "Network Configuration",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/ngfw/objects/objects-api-ngfw",
            label: "Objects",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/ngfw/security/security-api-ngfw",
            label: "Security Services",
            icon: "api-doc",
          },
        ],
        "Cloud NGFW Configuration": [
          {
            to: "scm/api/config/cloudngfw/operations/operations-api-cloud-ngfw",
            label: "Configuration Operations",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/cloudngfw/setup/setup-api-cloud-ngfw",
            label: "Configuration Setup",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/cloudngfw/identity/identity-api-cloud-ngfw",
            label: "Identity Services",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/cloudngfw/objects/objects-api-cloud-ngfw",
            label: "Objects",
            icon: "api-doc",
          },
          {
            to: "scm/api/config/cloudngfw/security/security-api-cloud-ngfw",
            label: "Security Services",
            icon: "api-doc",
          },
        ],
        "Other Configuration": [
          {
            to: "/access/api/browser-mgmt",
            label: "Prisma Access Browser",
            icon: "api-doc",
          },
          {
            to: "/access/api/ztna/ztna-connector-apis",
            label: "ZTNA Connector",
            icon: "api-doc",
          },
          {
            to: "sdwan/api",
            label: "Prisma SD-WAN",
            icon: "api-doc",
          },
          {
            label: "Log Forwarding",
            to: "cdl/api/log-forwarding",
            icon: "api-doc",
          },
        ],
      },
    },
    {
      label: "Monitoring",
      description: "",
      docs: [
        {
          to: "sase/api/mt-monitor",
          label: "Aggregate Monitoring",
          icon: "api-doc",
        },
        {
          to: "sase/api/mt-notifications",
          label: "Multitenant Notifications",
          icon: "api-doc",
        },
        {
          to: "sase/api/mt-interconnect",
          label: "Multitenant Interconnect",
          icon: "api-doc",
        },
        {
          to: "access/api/adem/autonomous-dem-api",
          label: "Autonomous DEM",
          icon: "api-doc",
        },
        {
          to: "access/api/insights",
          label: "Prisma Access Insights",
          icon: "api-doc",
        },
      ],
    },
  ];

  return (
    <Layout
      description="Strata Cloud Manager description"
      title="Strata Cloud Manager"
    >
      <section className="scm-hero-container">
        <h1>{heroHeader}</h1>
        <p>{heroDescription}</p>
      </section>
      <section className="scm-bg">
        <div className="scm-cards-container container">
          {scmCards.map((card, i) => (
            <SCMCard
              key={i}
              description={card.description}
              label={card.label}
              docs={card.docs}
              type={card.type}
              colorclass="scm"
            />
          ))}
        </div>
      </section>
      {/* <UseCases
        header={TERRAFORM_USE_CASES_CONTENT.header}
        subheader={TERRAFORM_USE_CASES_CONTENT.subheader}
        useCaseCards={TERRAFORM_USE_CASES_CONTENT.useCaseCards}
      /> */}
    </Layout>
  );
}
