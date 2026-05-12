module.exports = {
  scm_docs: [
    {
      type: "doc",
      id: "scm/docs/home",
    },
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "scm/docs/getstarted",
        },
        {
          type: "doc",
          id: "scm/docs/tenant-service-groups",
        },
        {
          type: "doc",
          id: "scm/docs/service-accounts",
        },
        {
          type: "doc",
          id: "scm/docs/api-best-practices",
        },
        {
          type: "category",
          label: "Roles",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/docs/roles-overview",
            },
            {
              type: "doc",
              id: "scm/docs/roles-assign",
            },
            {
              type: "doc",
              id: "scm/docs/all-roles",
            },
          ],
        },
        {
          type: "category",
          label: "Access Tokens",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/docs/access-tokens",
            },
            {
              type: "doc",
              id: "scm/docs/scope",
            },
          ],
        },
        {
          type: "doc",
          id: "scm/docs/api-call",
        },
        {
          type: "doc",
          id: "scm/docs/user-accounts",
        },
      ],
    },
    {
      type: "category",
      label: "Release Information",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/docs/release-notes/changelog",
        },
        {
          type: "category",
          label: "Release Notes",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/docs/release-notes/release-notes",
            },
            {
              type: "doc",
              id: "scm/docs/release-notes/november2024",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SASE Configuration",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Configuration Operations",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/operations/operations-api",
            },
            require("./api/config/sase/operations/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Configuration Setup",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/setup/setup-api",
            },
            {
              type: "doc",
              id: "scm/api/config/sase/setup/snippet-sharing",
            },
            require("./api/config/sase/setup/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Network Configuration",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/network configurations/network-api",
            },
            require("./api/config/sase/network configurations/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Network Deployment",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/deployment/deployment-api",
            },
            require("./api/config/sase/deployment/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Identity Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/identity/identity-api",
            },
            require("./api/config/sase/identity/sidebar"),
          ],
        },
        {
          type: "category",
          label: "GlobalProtect",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/mobileagent/mobileagent-api",
            },
            require("./api/config/sase/mobileagent/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Objects",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/objects/objects-api",
            },
            require("./api/config/sase/objects/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Security Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/sase/security/security-api",
            },
            require("./api/config/sase/security/sidebar"),
          ],
        },
      ],
    },
    {
      type: "category",
      label: "NGFW Configuration",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Configuration Operations",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/operations/operations-api-ngfw",
            },
            require("./api/config/ngfw/operations/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Configuration Setup",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/setup/setup-api-ngfw",
            },
            {
              type: "doc",
              id: "scm/api/config/ngfw/setup/snippet-sharing",
            },
            require("./api/config/ngfw/setup/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Identity Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/identity/identity-api-ngfw",
            },
            require("./api/config/ngfw/identity/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Device Configuration",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/device/device-api",
            },
            require("./api/config/ngfw/device/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Network Configuration",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/network/network-api",
            },
            require("./api/config/ngfw/network/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Objects",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/objects/objects-api-ngfw",
            },
            require("./api/config/ngfw/objects/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Security Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/ngfw/security/security-api-ngfw",
            },
            require("./api/config/ngfw/security/sidebar"),
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Incidents API",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/incidents/incident-scm",
        },
        require("./api/config/incidents/sidebar"),
      ],
    },
    {
      type: "category",
      label: "Posture API",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/posture-management/introduction-posture",
        },
        {
          type: "category",
          label: "Checks",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Reports",
              collapsed: true,
              items: [require("./api/config/posture-management/sidebar")],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Cloud NGFW Configuration",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Configuration Operations",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/operations/operations-api-cloud-ngfw",
            },
            require("./api/config/cloudngfw/operations/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Configuration Setup",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/setup/setup-api-cloud-ngfw",
            },
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/setup/snippet-sharing",
            },
            require("./api/config/cloudngfw/setup/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Identity Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/identity/identity-api-cloud-ngfw",
            },
            require("./api/config/cloudngfw/identity/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Objects",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/objects/objects-api-cloud-ngfw",
            },
            require("./api/config/cloudngfw/objects/sidebar"),
          ],
        },
        {
          type: "category",
          label: "Security Services",
          items: [
            {
              type: "doc",
              id: "scm/api/config/cloudngfw/security/security-api-cloud-ngfw",
            },
            require("./api/config/cloudngfw/security/sidebar"),
          ],
        },
      ],
    },
  ],
  scmauth: ["scm/api/auth/auth-api", require("./api/auth/sidebar")],
  scmiam: ["scm/api/iam/iam-api", require("./api/iam/sidebar")],
  scmsubscription: [
    "scm/api/subscription/subscription-api",
    require("./api/subscription/sidebar"),
  ],
  scmciedss: [
    "scm/api/config/ciedss/ciedss",
    "scm/api/config/ciedss/usecases",
    require("./api/config/ciedss/sidebar"),
  ],
  scmtenancy: ["scm/api/tenancy/tenancy-api", require("./api/tenancy/sidebar")],
  scm_mim: [
    {
      type: "doc",
      id: "scm/api/config/mim/welcome/welcome",
    },
    {
      type: "category",
      label: "Ecosystem Design Patterns",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Introduction",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/introduction/ecosystem-design-patterns",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/introduction/ecosystem-design-patterns-concepts",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/introduction/ecosystem-design-patterns-guidelines",
            },
          ],
        },
        {
          type: "category",
          label: "ADC",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/adc/ecosystem-design-patterns-adc",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/adc/ecosystem-design-patterns-adc-requirements",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/adc/ecosystem-design-patterns-adc-getting-started",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/adc/ecosystem-design-patterns-adc-testing",
            },
          ],
        },
        {
          type: "category",
          label: "Cloud WAF",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/cloud-waf/ecosystem-design-patterns-cloud-waf",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/cloud-waf/ecosystem-design-patterns-cloud-waf-requirements",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/cloud-waf/ecosystem-design-patterns-cloud-waf-getting-started",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/cloud-waf/ecosystem-design-patterns-cloud-waf-testing",
            },
          ],
        },
        {
          type: "category",
          label: "Management Layer",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/management-layer/ecosystem-design-patterns-management-layer",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/management-layer/ecosystem-design-patterns-management-layer-requirements",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/management-layer/ecosystem-design-patterns-management-layer-getting-started",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/management-layer/ecosystem-design-patterns-management-layer-testing",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/management-layer/ecosystem-design-patterns-management-layer-resources",
            },
          ],
        },
        {
          type: "category",
          label: "Web App Server",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/web-app-server/ecosystem-design-patterns-web-app-server",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/web-app-server/ecosystem-design-patterns-web-app-server-requirements",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/web-app-server/ecosystem-design-patterns-web-app-server-getting-started",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/ecosystem-design-patterns/web-app-server/ecosystem-design-patterns-web-app-server-testing",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Workload Identity Manager",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/mim/firefly/firefly",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/firefly/firefly-quick-start-guide",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/firefly/firefly-config-yaml-reference",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/firefly/firefly-helm-reference",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/firefly/firefly-api-reference-clients",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/firefly/firefly-api-reference-cloud-workloads",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/firefly/firefly-supplemental-api-endpoints",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/firefly/firefly-container-image-hsm",
        },
      ],
    },
    {
      type: "category",
      label: "Control Plane",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/mim/control-plane/control-plane",
        },
      ],
    },
    {
      type: "category",
      label: "Certificate Manager - SaaS",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/tls-protect-cloud",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/control-plane-api-endpoints",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/tls-protect-downloading-a-keystore",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/certificates-operations-using-vcert-and-a-service-account",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/control-plane-forwarding-logged-events",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/tls-protect-importing-private-keys-pkcs8",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/tls-protect-importing-private-keys-pkcs12",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/power-bi-reporting",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/control-plane-receive-webhook-notifications",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/receive-zoom-team-chat-notifications",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/tls-protect-cloud/vcert-auto-cert-mgt-using-tlspc",
        },
      ],
    },
    {
      type: "category",
      label: "Code Sign Manager",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/mim/code-sign-manager/code-sign-client-landing",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/code-sign-manager/code-sign-client-install",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/code-sign-manager/code-sign-client-auth-service-account",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/code-sign-manager/code-sign-client-configuration",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/code-sign-manager/code-sign-client-test-signing",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/code-sign-manager/code-sign-client-troubleshooting",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/code-sign-manager/code-sign-client-cli-reference",
        },
        {
          type: "category",
          label: "Sample Integrations",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-sample-integrations-landing",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-apksigner-integration",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-jarsigner-integration",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-openssl-integration",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-pkcs11-tool-integration",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-powershell-integration",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-signtool-integration",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-sigstore-cosign-integration",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-uboot-mkimage-integration",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/code-sign-manager/sample-integrations/code-sign-client-ephemeral-build-server",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Ecosystem Certification",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/mim/certification/ecosystem-certification-tlspc",
        },
      ],
    },
    {
      type: "category",
      label: "Libraries, SDKs, and Tools",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/libraries-sdks-and-tools",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-venafips",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/integrate-connector-into-tenant-environment",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-ca-framework",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-machine-framework",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/tools-sigscan",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/tools-scanafi-k8s",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-notationplugincsp",
        },
        {
          type: "category",
          label: "Adaptable Framework",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/adaptable-framework/libraries-sdks-tools-adaptable-framework",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/adaptable-framework/libraries-and-sdks-adaptable-framework-prerequisites",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/adaptable-framework/libraries-and-sdks-adaptable-framework-overview",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/adaptable-framework/libraries-and-sdks-adaptable-framework-writing-drivers",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/adaptable-framework/libraries-and-sdks-adaptable-framework-submitting-driver",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/adaptable-framework/libraries-and-sdks-adaptable-framework-managing-repo",
            },
          ],
        },
        {
          type: "category",
          label: "HSM Utility",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/hsm-utility/libraries-sdks-tools-hsm-utility",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/hsm-utility/libraries-and-sdks-hsm-utility-usage",
            },
            {
              type: "doc",
              id: "scm/api/config/mim/libraries-and-sdks/hsm-utility/libraries-and-sdks-hsm-utility-cryptoki-spec",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Building Integrations",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/mim/building-integrations/building-integrations",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/building-integrations/building-integrations-tpp-adaptable",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/building-integrations/building-integrations-best-practices",
        },
      ],
    },
    {
      type: "category",
      label: "Contributing to the Marketplace",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-overview",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-submission",
        },
        {
          type: "doc",
          id: "scm/api/config/mim/contributing-to-the-marketplace/contributing-marketplace-manifest-schema",
        },
      ],
    },
  ],
};