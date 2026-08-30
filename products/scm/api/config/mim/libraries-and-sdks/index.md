---
id: libraries-sdks-and-tools
title: "Overview"
sidebar_label: "Overview"
keywords:
  - Machine Identity Management
  - Libraries and SDKs
---

# Libraries, SDKs, and Tools

Welcome to the Libraries & SDKs section! These tools help you integrate machine identity security into your applications.

## SDKs

**[VCert](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-vcert)**: Multi-language SDK for certificate operations

VCert simplifies certificate enrollment, retrieval, and revocation across Venafi platforms. Available in:
- Go
- Python
- Java
- .NET

**[VenafiPS](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-venafips)**: PowerShell module for Certificate Manager automation

Automate certificate operations using PowerShell. Ideal for Windows environments and scripting workflows.

---

## Integration Frameworks

**[CA Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-ca-framework)**: Build connectors to Certificate Authorities

REST-based framework for creating integrations with Certificate Authorities and certificate services. Build connectors that enable Certificate Manager to request, renew, and revoke certificates from your CA.

**[Machine Connector Framework](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-machine-framework)**: Build connectors for certificate deployment

Plugin framework for deploying and managing certificates on servers, load balancers, and network devices. Create connectors that automate certificate installation, renewal, and lifecycle management on infrastructure.

**[Adaptable Framework](/scm/api/config/mim/libraries-and-sdks/adaptable-framework)**: PowerShell framework for TLS Protect Datacenter

Build PowerShell-based drivers for Certificate Authorities, application platforms, custom workflows, and logging. Supports Adaptable CA, Adaptable App, Adaptable Log, Adaptable Workflow, and Bulk Provisioning drivers.

---

## Specialized Tools

**[Notation Plugin for CodeSign Protect](/scm/api/config/mim/libraries-and-sdks/libraries-and-sdks-notationplugincsp)**: Container image signing

Sign and verify container images using Notation with CodeSign Protect backend.

**[Sigscan](/scm/api/config/mim/libraries-and-sdks/tools-sigscan)**: Code signature validation tool

Scan binaries and validate code signatures for compliance and security.

**[scanafi-k8s](/scm/api/config/mim/libraries-and-sdks/tools-scanafi-k8s)**: Kubernetes cluster scanning

Discover machine identities (certificates, secrets, keys) within Kubernetes clusters.

**[HSM Utility](/scm/api/config/mim/libraries-and-sdks/hsm-utility)**: Hardware Security Module validation

Validate and certify HSM integration with TLS Protect Datacenter. Includes PKCS#11 validation utility and technical specification for at-rest encryption, key pair generation, and hardware-protected keys.

---

## REST APIs

For direct API integration, see:

- [Certificate Manager SaaS APIs](/api-endpoints/saas/certificate-manager-saas-api)
- [GraphQL Playground](/graphql-playground)
