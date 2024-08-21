import React from "react";
// components
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import Layout from "@theme/Layout";
import SCMCard from "./SCMCard";
import "./scm.scss";
export default function SCMLandingPage() {
  const heroHeader = "Strata Cloud Manager";
  const heroDescription = "Strata Cloud Manager description";
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
        {
          label: "Release Notes",
          to: "scm/docs/release-notes/release-notes",
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
      docs: [
        {
          to: "scm/api/security-services/security-services-api",
          label: "Security Services",
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
      <div className="scm-cards-container container">
        {scmCards.map((card, i) => (
          <SCMCard
            key={i}
            description={card.description}
            label={card.label}
            docs={card.docs}
            colorclass="scm"
          />
        ))}
      </div>
      {/* <UseCases
        header={TERRAFORM_USE_CASES_CONTENT.header}
        subheader={TERRAFORM_USE_CASES_CONTENT.subheader}
        useCaseCards={TERRAFORM_USE_CASES_CONTENT.useCaseCards}
      /> */}
    </Layout>
  );
}
