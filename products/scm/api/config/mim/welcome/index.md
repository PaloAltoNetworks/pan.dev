---
id: welcome
title: "Machine Identity Security (MIS) developer documentation"
sidebar_label: "Machine Identity Security (MIS) developer documentation"
keywords:
  - Machine Identity Management
  - Overview
---

Welcome! This guide will help you build integrations for machine identity security using Certificate Manager frameworks, SDKs, and design patterns.

## Understanding Machine Identity Security

Machine identities are digital certificates, keys, and tokens that identify and authenticate systems rather than people. They secure communications between servers, applications, containers, cloud services, and network devices using technologies like TLS/SSL, API authentication, code signing, and SSH.

### The Certificate Lifecycle Challenge

Modern security practices demand short-lived certificates with lifecycles of 30-90 days (or less). Every certificate follows a critical four-stage lifecycle:

1. **Issuance** - Requesting and receiving certificates from Certificate Authorities
2. **Deployment** - Installing certificates on target systems
3. **Renewal** - Replacing certificates before expiration
4. **Revocation** - Invalidating compromised or outdated certificates

Without automation, managing this lifecycle relies on manual tracking, spreadsheets, calendar reminders, and hope. The result? Forgotten renewals, expired certificates, and preventable outages.

### Real-World Impact

Certificate expiration is a leading cause of unplanned outages. When certificates expire, workloads become unavailable—admin interfaces lock out operators, APIs fail, and services go dark. The impact includes brand reputation damage, lost revenue, and security team escalations.

Beyond outages, compliance requirements like PCI-DSS and SOC 2 demand proper certificate management with audit trails, policy enforcement, and centralized visibility. Manual processes cannot scale to meet these demands.

:::tip Start Here: Machine Identity Concepts
New to machine identity security? Start with [Machine Identity Concepts](/scm/api/config/mim/ecosystem-design-patterns/introduction/ecosystem-design-patterns-concepts) to understand the ecosystem of issuers, consumers, and how Certificate Manager fits in.
:::

## Why Build Integrations?

Integrations connect Certificate Manager to your infrastructure, enabling automation that solves real business problems:

**Automate Everywhere** - Remove manual steps from certificate operations. Enable teams to scale quickly while maintaining compliance and control. Support modern architectures like containers, microservices, and multi-cloud without waiting for approval bottlenecks.

**Prevent Misuse & Compromise** - Provide complete visibility and flexible policy to security teams. When application teams don't wait days for certificates, they're less likely to use unknown issuers or create shadow IT. Respond quickly to security events with automated certificate revocation and replacement.

**Modernize with Speed** - Centralize certificate management with an enterprise-wide security strategy. Automate processes, create audit trails, and remove unnecessary risk. Include security in the development process early so teams collaborate instead of creating friction.

**Stop Unnecessary Outages** - Identify and correct situations that could lead to outages before they happen. Enable shared responsibility between security, infrastructure, and development teams. Be proactive instead of reactive.

## The MIS Marketplace Ecosystem

Certificate Manager orchestrates an ecosystem of participants, each playing a specific role in the machine identity lifecycle:

![Machine Identity Participants](/img/mim/design-patterns/ecosystem-participants-TLSPC.png)

**Issuers** (Certificate Authorities) create new machine identities. Examples include DigiCert, Let's Encrypt, Microsoft ADCS, Google CAS, and internal PKI systems.

**Consumers** use machine identities to secure traffic and authenticate services. These include web servers, load balancers, ADCs, cloud WAFs, API gateways, and containerized applications.

**Collectors** discover and inventory certificates across your infrastructure, often as part of attack surface management solutions like Palo Alto Cortex Xpanse or Tenable.

**Notifiers** send alerts and communications when events occur, connecting to platforms like Slack, PagerDuty, or Splunk.

**Provisioners** automate certificate deployment to target systems, often through tools like Terraform, Ansible, or AWS CloudFormation.

**Your Integration** connects Certificate Manager to any of these participants, extending automation to your specific infrastructure and tools.

:::info The Certificate Manager Advantage
You focus on your integration. Certificate Manager handles the rest—managing relationships with all issuers and consumers, policy enforcement, renewal scheduling, and compliance reporting.
:::

## Start Building Integrations

Choose the right integration approach based on what you're connecting to Certificate Manager:

### For Certificate Authority Providers

#### CA Connectors

REST services that connect Certificate Manager to Certificate Authorities for automated certificate issuance and lifecycle management.

**Use when**: Integrating with a Certificate Authority or certificate service  
**Technologies**: Java, REST APIs, JSON  
**Learn more**: [CA Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-ca-framework)

### For Infrastructure & Application Teams

#### Machine Connectors

Plugins that deploy and manage certificates on servers, load balancers, and network devices.

**Use when**: Deploying certificates to infrastructure  
**Technologies**: Java, SSH, REST APIs  
**Learn more**: [Machine Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-machine-framework)

#### TPP Adaptable App Drivers

PowerShell-based drivers for Certificate Manager Self-Hosted (Trust Protection Platform).

**Use when**: Building lightweight integrations for TPP  
**Technologies**: PowerShell, REST APIs  
**Learn more**: [TPP Adaptable App](/scm/api/config/mim/building-integrations/building-integrations-tpp-adaptable)

### For Orchestration & Automation

#### REST API & VCert SDK

Direct programmatic integration with Certificate Manager APIs using any programming language.

**Use when**: Building custom applications or scripts  
**Technologies**: Any language, REST APIs  
**Learn more**: [VCert SDK](#vcert) | [API Documentation](/api-endpoints)

**Not sure which to choose?** See the [Integration Decision Matrix](/scm/api/config/mim/building-integrations#decision-matrix)

---

## Understand Your Use Case

Match your integration to a proven design pattern for your infrastructure type. Each pattern explains the unique challenges and automation strategies for different system categories:

### Application Delivery Controller (ADC)

Orchestrate certificate delivery to load balancers and ADCs (F5, A10, Citrix, Array Networks, etc.)

**Key Topics**: Admin interface security, application traffic security, automation to prevent outages  
**Learn more**: [ADC Design Pattern](/scm/api/config/mim/ecosystem-design-patterns/adc)

### Cloud WAF

Automate certificate deployment to cloud-based Web Application Firewalls

**Key Topics**: Multi-app management, certificate automation, cloud integration  
**Learn more**: [Cloud WAF Pattern](/scm/api/config/mim/ecosystem-design-patterns/cloud-waf)

### Web or Application Server

Deploy HTTPS/TLS certificates directly to web servers (Apache, IIS, Tomcat, Nginx, etc.)

**Key Topics**: Direct server deployment, keystore management (PEM, JKS, PKCS#12)  
**Learn more**: [Web/App Server Pattern](/scm/api/config/mim/ecosystem-design-patterns/web-app-server)

### Management Layer

Integrate with centralized control/orchestration platforms (Ansible, Terraform, ServiceNow, etc.)

**Key Topics**: Management as source of truth, proactive renewal, infrastructure-as-code  
**Learn more**: [Management Layer Pattern](/scm/api/config/mim/ecosystem-design-patterns/management-layer)

**Provisioning Models** - Understanding whether your system uses pull or push provisioning is critical to choosing the right integration approach:

- **Pull Provisioning**: Consumer or management layer retrieves certificates from Certificate Manager
- **Push Provisioning**: Certificate Manager initiates and pushes certificates to target systems

[Learn more about provisioning models and see diagrams](/scm/api/config/mim/ecosystem-design-patterns/introduction/ecosystem-design-patterns-concepts#provisioning-direction)

---

## SDKs & Libraries

Pre-built tools for common integration tasks:

### VCert

Multi-language SDK for certificate enrollment, retrieval, and revocation

**Languages**: Go, Python, Java, .NET  
**Use for**: Programmatic certificate operations, custom applications  
**Learn more**: [VCert Documentation](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert)

### VenafiPS

PowerShell module for Certificate Manager automation

**Use for**: Windows automation, scripting, TPP/TLS Protect Cloud integration  
**Learn more**: [VenafiPS Documentation](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-venafips)

### Notation Plugin for CodeSign Protect

Container image signing with Notation backend

**Use for**: Code signing, container security  
**Learn more**: [Notation Plugin](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-notationplugincsp)

### Sigscan

Code signature validation tool for binary compliance

**Use for**: Verifying code signatures, compliance enforcement  
**Learn more**: [Sigscan Documentation](/scm/api/config/mim/libraries-and-sdks/tools-sigscan)

### scanafi-k8s

Kubernetes cluster scanning for machine identity discovery

**Use for**: Discovering certificates and secrets in Kubernetes  
**Learn more**: [scanafi-k8s Documentation](/scm/api/config/mim/libraries-and-sdks/tools-scanafi-k8s)

---

## REST APIs

### Certificate Manager SaaS APIs

Full REST API access to Certificate Manager SaaS (formerly TLS Protect Cloud)

**Available APIs**:

- Certificate enrollment and lifecycle management
- Policy configuration and enforcement
- Discovery and inventory
- Application management

[Explore API Documentation](/api-endpoints)

### GraphQL Playground

Interactive GraphQL API explorer for Certificate Manager

[Open GraphQL Playground](https://graphql.playground.pan.dev)

---

## Best Practices & Examples

### Integration Best Practices

- Error handling and logging strategies
- Authentication and credential management
- Certificate handling and validation
- Discovery and automated testing
- Security considerations

[Read Best Practices](/scm/api/config/mim/building-integrations/building-integrations-best-practices)

### Design Pattern Guidelines

- Documentation standards
- Naming conventions
- Debug logging best practices
- Security considerations

[Read Guidelines](/scm/api/config/mim/ecosystem-design-patterns/introduction/ecosystem-design-patterns-guidelines)

### Code Samples & Recipes

Find working examples in the Certificate Manager SaaS documentation:
- [Certificate Manager - SaaS](/scm/api/config/mim/tls-protect-cloud)

---

## Next Steps

### Recommended Learning Path

For developers new to machine identity security:

1. **Understand the Fundamentals**: Read [Machine Identity Concepts](/scm/api/config/mim/ecosystem-design-patterns/introduction/ecosystem-design-patterns-concepts) to understand ecosystem participants and provisioning models
2. **Explore Use Cases**: Review [Design Patterns](/scm/api/config/mim/ecosystem-design-patterns/introduction) for your infrastructure type
3. **Choose Your Approach**: Use the [Integration Decision Matrix](/scm/api/config/mim/building-integrations#decision-matrix)
4. **Start Building**: Follow the framework guide for your chosen integration type

### Quick Start Path

For experienced developers ready to build:

1. Choose your [integration type](#start-building-integrations) above
2. Review the specific framework documentation
3. Check [Best Practices](/scm/api/config/mim/building-integrations/building-integrations-best-practices)
4. Start coding with reference to [API Documentation](/api-endpoints)

---

## Getting Help

### Resources

- **GitHub Issues**: [Report bugs or request features](https://github.com/paulternate/mis-marketplace/issues)
- **Community Forum**: [Join discussions](https://community.venafi.com)
- **Support Email**: cybr-mis.support@paloaltonetworks.com

### Troubleshooting

**Build errors?**

```bash
# Clean cache and rebuild
npm run clear
npm install
npm run build
```

**Integration not appearing?**

- Check `integration_metadata.json` is valid JSON
- Verify `logoFile` path is correct
- Run `node generate-gallery.js` to regenerate
- Check browser console for errors

**TypeScript errors?**

```bash
npm run typecheck
```

---

## Want to Share Your Integration?

Once you've built an integration for your own use, you can optionally contribute it to the MIS Marketplace to help the community.

[Learn How to Contribute](/scm/api/config/mim/contributing-to-the-marketplace)

---

**Ready to build?** Start with [Machine Identity Concepts](/scm/api/config/mim/ecosystem-design-patterns/introduction/ecosystem-design-patterns-concepts) to understand the fundamentals, or jump directly to [Integration Types](#start-building-integrations) if you're ready to begin.
