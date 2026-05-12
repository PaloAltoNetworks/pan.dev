---
id: building-integrations
title: "Overview"
sidebar_label: "Overview"
keywords:
  - Machine Identity Management
  - Building Integrations
---

# Building Integrations

## Introduction

Machine identity integrations connect Venafi's platforms with external systems for managing certificates, code signing, SSH keys, and more. This section provides guidance on building integrations for your own environment.

**Important**: You do NOT need to contribute your integration to the public marketplace. Build what you need for your organization, and only package it for public distribution if you want to share with the broader community.

---

## Integration Types

### CA Connectors

**Purpose**: Issue certificates from external Certificate Authorities

CA connectors are REST-based web services that communicate between Venafi platforms and third-party CAs. They handle authentication, product/option retrieval, certificate requests, and certificate issuance.

**When to use**:
- Integrating with a new Certificate Authority
- Need certificate issuance workflows
- Support for Certificate Manager SaaS or NGTS

**Learn more**: [CA Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-ca-framework)

---

### Machine Connectors

**Purpose**: Deploy certificates to servers, load balancers, and network devices

Machine connectors are plugins that push and configure certificates from Venafi to target applications. They handle authentication, certificate installation, and service configuration.

**When to use**:
- Deploying certificates to new device/platform types
- Automating certificate lifecycle on servers
- Support for Certificate Manager SaaS or NGTS

**Learn more**: [Machine Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-machine-framework)

---

### TPP Adaptable App Drivers

**Purpose**: Extend Certificate Manager Self-Hosted (formerly TLS Protect Datacenter)

Adaptable App Drivers are PowerShell-based integrations specifically for Certificate Manager Self-Hosted. They provide a lighter-weight alternative to full Go-based connectors.

**When to use**:
- Targeting Certificate Manager Self-Hosted only (not SaaS/NGTS)
- Need rapid development (PowerShell vs Go)
- Integrating with Windows-based systems
- Don't need advanced features like discovery

**Learn more**: [TPP Adaptable App Drivers](/scm/api/config/mim/building-integrations/building-integrations-tpp-adaptable)

---

### REST API & VCert SDK

**Purpose**: Programmatic certificate operations and automation

Direct API integration or SDK usage for custom applications and automation scripts.

**When to use**:
- Quick prototyping and testing
- Custom automation scripts
- Integration into existing applications
- Direct control over certificate operations

**Learn more**:
- [Certificate Manager SaaS APIs](/api-endpoints/saas/certificate-manager-saas-api)
- [VCert SDK](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert)
- [VenafiPS PowerShell Module](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-venafips)

---

## Decision Matrix

Choose the right approach for your use case:

| Use Case | Recommended Approach |
|----------|---------------------|
| Deploy certificates to new device type | Machine Connector Framework |
| Connect to new Certificate Authority | CA Connector Framework |
| Extend TLS Protect Self-Hosted with PowerShell | TPP Adaptable App Driver |
| Automate certificate operations in scripts | VCert SDK or REST API |
| Prototype and test quickly | VCert SDK or REST API |
| Build production-grade multi-platform connector | CA/Machine Connector Framework |

---

## Development Workflow

1. **Choose your approach** using the decision matrix above
2. **Review the framework documentation** for your chosen approach
3. **Set up your development environment** following the framework guide
4. **Implement your integration** using provided templates and patterns
5. **Test locally** using simulation tools (VenProxy for connectors)
6. **Deploy to your environment** for production use

**Optional**: If you want to share your integration publicly, see [Contributing to the Marketplace](/scm/api/config/mim/contributing-to-the-marketplace) for packaging and submission guidance.

---

## Best Practices

Review [Integration Best Practices](/scm/api/config/mim/building-integrations/building-integrations-best-practices) for:
- Error handling patterns
- Logging standards
- Testing strategies
- Security considerations
- Performance optimization

---

## Getting Help

- **Framework Documentation**: See individual framework guides for detailed implementation guidance
- **GitHub Issues**: [Report bugs or request features](https://github.com/paulternate/mis-marketplace/issues)
- **Support**: cybr-mis.support@paloaltonetworks.com
