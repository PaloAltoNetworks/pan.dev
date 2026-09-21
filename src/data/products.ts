/**
 * The product menu tree: portfolios, the products in each, and the guide and
 * API links that make up a product's submenu.
 *
 * Internal paths carry a leading slash. The navbar config stored several of
 * them relative ("panos/docs"), which resolves against whatever page the menu
 * is open on.
 */

export type MenuLink = {
  label: string;
  to: string;
  external?: boolean;
};

export type MenuProduct = {
  label: string;
  /** Where the product name itself goes: its landing page, or its first doc. */
  overview: string;
  overviewExternal?: boolean;
  docs: MenuLink[];
  apiDocs: MenuLink[];
};

export type MenuGroup = {
  label: string;
  /** Theme class the homepage cards colour themselves with. */
  colorclass: string;
  /** Shown on the homepage card, not in the drawer. */
  description: string;
  products: MenuProduct[];
};

export const MENU_GROUPS: MenuGroup[] = [
  {
    label: "Cloud Native Security",
    colorclass: "cloud-native-security",
    description:
      "Discover the APIs, tools and techniques necessary for bringing DevOps practices to the cloud.",
    products: [
      {
        label: "Prisma Cloud Enterprise Edition",
        overview: "/prisma-cloud/docs",
        docs: [{ label: "API Workflows", to: "/prisma-cloud/docs" }],
        apiDocs: [{ label: "Prisma Cloud API", to: "/prisma-cloud/api" }],
      },
      {
        label: "Prisma Cloud Compute Edition",
        overview: "/compute/api/",
        docs: [],
        apiDocs: [{ label: "Compute Edition", to: "/compute/api/" }],
      },
    ],
  },
  {
    label: "Security Operations",
    colorclass: "security-operations",
    description:
      "Browse reference docs, tutorials, the XSOAR Marketplace and more.",
    products: [
      {
        label: "Cortex XSOAR",
        overview: "https://xsoar.pan.dev/docs/welcome",
        overviewExternal: true,
        docs: [
          {
            label: "Cortex XSOAR Developer Hub",
            to: "https://xsoar.pan.dev/docs/welcome",
            external: true,
          },
        ],
        apiDocs: [
          {
            label: "XSOAR (Demisto) API",
            to: "https://xsoar.pan.dev/docs/reference/api/demisto-class",
            external: true,
          },
        ],
      },
      {
        label: "Cortex",
        overview: "https://cortex-docs.paloaltonetworks.com/",
        overviewExternal: true,
        docs: [
          {
            label: "Cortex Developer Docs",
            to: "https://cortex-docs.paloaltonetworks.com/",
            external: true,
          },
        ],
        apiDocs: [],
      },
    ],
  },
  {
    label: "Network Security",
    colorclass: "network-security",
    description:
      "Learn how to make the most of the PAN-OS APIs, SDKs, Expedition, Terraform, Ansible, and more.",
    products: [
      {
        label: "Prisma AIRS",
        overview: "/airs",
        docs: [{ label: "Prisma AIRS", to: "/airs" }],
        apiDocs: [
          {
            label: "Prisma AIRS AI Runtime: API Intercept",
            to: "/prisma-airs/api/airuntimesecurity/airuntimesecurityapi",
          },
          {
            label: "Prisma AIRS AI Red Teaming",
            to: "/prisma-airs-redteam/api/ai-integration/introduction",
          },
          {
            label: "Prisma AIRS AI Model Security",
            to: "/prisma-airs-model-security/api/aisecuritymodel/aisecuritymodel",
          },
        ],
      },
      {
        label: "PAN-OS",
        overview: "/panos/docs",
        docs: [
          { label: "APIs, SDKs, & Tutorials", to: "/panos/docs" },
          { label: "Terraform for VM-Series", to: "/swfw" },
          { label: "Terraform for PAN-OS", to: "/terraform/docs/panos" },
          { label: "Ansible", to: "/ansible/docs/panos" },
        ],
        apiDocs: [
          {
            label: "Ansible Module Reference",
            to: "https://galaxy.ansible.com/ui/repo/published/paloaltonetworks/panos/docs",
            external: true,
          },
          {
            label: "Terraform Provider Reference",
            to: "https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest/docs",
            external: true,
          },
        ],
      },
      {
        label: "Cloud NGFW",
        overview: "/cloudngfw/docs",
        docs: [
          { label: "Introduction", to: "/cloudngfw/docs" },
          { label: "Terraform - AWS", to: "/terraform/docs/cloudngfw" },
          { label: "Terraform - Azure", to: "/terraform/docs/cloudngfw" },
        ],
        apiDocs: [
          { label: "Cloud NGFW for AWS API", to: "/cloudngfw/aws/api/" },
        ],
      },
      {
        label: "Strata Logging Service",
        overview: "/cdl/docs/log-forwarding",
        docs: [
          {
            label: "Log Forwarding Developer's Guide",
            to: "/cdl/docs/log-forwarding",
          },
          {
            label: "Log Forwarding Change Log",
            to: "/cdl/docs/logforwarding/release-notes/changelog",
          },
          {
            label: "Log Forwarding Release Notes",
            to: "/cdl/docs/logforwarding/release-notes/relnotes",
          },
        ],
        apiDocs: [{ label: "Log Forwarding", to: "/cdl/api/log-forwarding" }],
      },
      {
        label: "Cloud-Delivered Security Services",
        overview: "/cdss/docs",
        docs: [
          { label: "Cloud-Delivered Security Services", to: "/cdss/docs" },
        ],
        apiDocs: [
          {
            label: "AIOps for NGFW Best Practice Assessment API",
            to: "/aiops-ngfw-bpa/api",
          },
          { label: "Threat Vault APIs", to: "/threat-vault/api" },
          { label: "IoT API", to: "/iot/api" },
          { label: "DNS Security API", to: "/dns-security/api" },
          { label: "Data Loss Prevention API", to: "/dlp/api" },
          { label: "Email Data Loss Prevention API", to: "/email-dlp/api" },
          {
            label: "SaaS Security API",
            to: "https://docs.paloaltonetworks.com/saas-security/data-security/add-cloud-apps-to-saas-security-api",
            external: true,
          },
          {
            label: "WildFire API",
            to: "https://docs.paloaltonetworks.com/wildfire/u-v/wildfire-api",
            external: true,
          },
        ],
      },
      {
        label: "Expedition",
        overview: "/expedition/docs",
        docs: [{ label: "Expedition", to: "/expedition/docs" }],
        apiDocs: [],
      },
    ],
  },
  {
    label: "Strata Cloud Manager",
    colorclass: "scm",
    description: "Discover Strata Cloud Manager APIs.",
    products: [
      {
        label: "Strata Cloud Manager",
        overview: "/strata-cloud-manager",
        docs: [
          { label: "Home Page", to: "/strata-cloud-manager" },
          { label: "Developer's Guide", to: "/scm/docs/home" },
          {
            label: "Strata Cloud Manager API Best Practices",
            to: "/scm/docs/api-best-practices",
          },
        ],
        apiDocs: [],
      },
    ],
  },
  {
    label: "Secure Access Service Edge",
    colorclass: "sase",
    description:
      "Discover Prisma SASE APIs, including Prisma Access and Prisma SD-WAN.",
    products: [
      {
        label: "Prisma SASE",
        overview: "/sase/docs",
        docs: [
          { label: "Prisma SASE Developer's Guide", to: "/sase/docs" },
          {
            label: "Prisma SASE Release Notes",
            to: "/sase/docs/release-notes/release-notes",
          },
        ],
        apiDocs: [
          { label: "Tenancy Service", to: "/sase/api/tenancy" },
          { label: "Identity and Access Management", to: "/sase/api/iam" },
          { label: "Authentication Service", to: "/sase/api/auth" },
          { label: "Subscription Service", to: "/sase/api/subscription" },
          {
            label: "Prisma Access Configuration",
            to: "/access/api/prisma-access-config",
          },
          {
            label: "ZTNA Connector",
            to: "/access/api/ztna/ztna-connector-api",
          },
          { label: "Prisma SD-WAN", to: "/sdwan/api" },
          { label: "Aggregate Monitoring", to: "/sase/api/mt-monitor" },
          {
            label: "Multitenant Notifications",
            to: "/sase/api/mt-notifications",
          },
          {
            label: "Service Provider Interconnect",
            to: "/sase/api/mt-interconnect/introduction",
          },
          {
            label: "Prisma Browser for MSPs",
            to: "/sase/api/pab-msp/pab-msp-api",
          },
          {
            label: "SASE 5G Manage Services",
            to: "/sase/api/manage-services-5g/introduction",
          },
          {
            label: "SASE 5G Monitor Services",
            to: "/sase/api/monitor-services-5g/introduction-monitor",
          },
          {
            label: "Prisma Access Configuration Orchestration",
            to: "/sase/api/introduction",
          },
          { label: "SaaS Security Posture Management", to: "/sase/api/sspm" },
          {
            label: "Identity Security Posture Management",
            to: "/sase/api/identity-sspm",
          },
          { label: "Autonomous DEM", to: "/access/api/adem/introduction" },
          { label: "Log Forwarding", to: "/cdl/api/log-forwarding" },
        ],
      },
      {
        label: "Prisma Access Configuration",
        overview: "/access/docs/prisma-access-config",
        docs: [
          {
            label: "Prisma Access Configuration Developer's Guide",
            to: "/access/docs/prisma-access-config",
          },
        ],
        apiDocs: [
          {
            label: "Prisma Access Configuration",
            to: "/access/api/prisma-access-config",
          },
        ],
      },
      {
        label: "Prisma Browser Management",
        overview: "/prisma-browser",
        docs: [
          { label: "Overview", to: "/prisma-browser" },
          {
            label: "Developer Guide",
            to: "/prisma-browser/guide/guide-overview",
          },
          { label: "Release Notes", to: "/prisma-browser/release-notes" },
        ],
        apiDocs: [
          {
            label: "Prisma Browser Management",
            to: "/prisma-browser/api/list-users?ref=nav",
          },
        ],
      },
      {
        label: "Prisma Access Insights",
        overview: "/access/docs/insights",
        docs: [
          {
            label: "Get Started 1.0",
            to: "/access/docs/insights/getting_started-10",
          },
          {
            label: "Get Started 2.0",
            to: "/access/docs/insights/getting_started-20",
          },
          {
            label: "Get Started 3.0",
            to: "/access/docs/insights/getting_started-30",
          },
          { label: "API FAQs", to: "/access/docs/insights/pai-faqs" },
        ],
        apiDocs: [
          {
            label: "Prisma Access Insights 1.0",
            to: "/access/api/insights/1.0",
          },
          {
            label: "Prisma Access Insights 2.0",
            to: "/access/api/insights/2.0",
          },
          { label: "Prisma Access Insights 3.0", to: "/access/api/insights" },
        ],
      },
      {
        label: "Prisma SD-WAN",
        overview: "/sdwan/docs",
        docs: [{ label: "Prisma SD-WAN Overview", to: "/sdwan/docs" }],
        apiDocs: [
          { label: "Prisma SD-WAN Unified", to: "/sdwan/api" },
          { label: "Prisma SD-WAN Legacy", to: "/sdwan/api/legacy" },
        ],
      },
      {
        label: "Prisma SASE Service Status",
        overview: "/sase/docs/saseservicestatusapi",
        docs: [
          {
            label: "Prisma SASE Service Status API",
            to: "/sase/docs/saseservicestatusapi",
          },
        ],
        apiDocs: [],
      },
    ],
  },
  {
    label: "Partner Integrations",
    colorclass: "partner-integrations",
    description: "Discover technology partner integrations.",
    products: [
      {
        label: "Automation",
        overview: "/terraform",
        docs: [
          { label: "Terraform for Software NGFW", to: "/swfw" },
          { label: "Terraform and Palo Alto Networks", to: "/terraform" },
          { label: "Ansible", to: "/ansible" },
        ],
        apiDocs: [],
      },
      {
        label: "SIEM",
        overview: "/splunk/docs",
        docs: [{ label: "Splunk App/Add-on", to: "/splunk/docs" }],
        apiDocs: [],
      },
    ],
  },
  {
    label: "Cross-Platform",
    colorclass: "cross-platform",
    description:
      "Learn about opportunities across Palo Alto Networks platforms.",
    products: [
      {
        label: "Service Status",
        overview: "/cross-platform/docs/servicestatusapi",
        docs: [
          {
            label: "Service Status API",
            to: "/cross-platform/docs/servicestatusapi",
          },
        ],
        apiDocs: [],
      },
    ],
  },
  {
    label: "Idira",
    colorclass: "idira",
    description: "Explore resources and community content for IDIRA",
    products: [
      {
        label: "Idira Resources",
        overview: "https://marketplace.idira.pan.dev/",
        overviewExternal: true,
        docs: [
          {
            label: "Idira Marketplace",
            to: "https://marketplace.idira.pan.dev/",
            external: true,
          },
        ],
        apiDocs: [],
      },
    ],
  },
];
