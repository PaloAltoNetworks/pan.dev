---
id: release-notes
title: Release Notes
description: Strata Cloud Manager API Release Notes
hide_title: true
hide_table_of_contents: false
keywords:
  - sase
  - scm
---

# Strata Cloud Manager API Release Notes

These release notes identify API changes made for the various Strata Cloud Manager services.

## August 2026

### Posture Management — Policy Optimizer API (New)

Retrieve security rules with optimization recommendations and their suggested replacement rules.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/posture/policy-optimizer/v1/security-rules` | List security rules with optimization recommendations |
| GET | `/posture/policy-optimizer/v1/security-rules/{id}` | Get security rule optimization recommendations by ID |

See [Policy Optimizer API](/scm/api/config/posture-management/policy-optimizer/policy-optimizer-api/) for full details.

---

### Posture Management — Posture Check Upload Initiation API (New)

Upload configuration files for Best Practice Assessment (BPA) processing and manage custom posture checks programmatically.

<details><summary>View endpoints (10)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/posture/checks/v1/reports/config-file-upload` | Initiate a config file upload for BPA processing |
| GET | `/posture/checks/v1/reports/{id}/bpa-result` | Get BPA processing status and result |
| GET | `/posture/checks/v1/all-checks` | List posture checks (custom and predefined) |
| POST | `/posture/checks/v1/all-checks` | Create a custom posture check |
| GET | `/posture/checks/v1/all-checks/{id}` | Get a posture check by ID |
| PUT | `/posture/checks/v1/all-checks/{id}` | Update a custom posture check |
| DELETE | `/posture/checks/v1/all-checks/{id}` | Delete a custom posture check |
| POST | `/posture/checks/v1/all-checks/{id}:clone` | Clone a posture check |
| POST | `/posture/checks/v1/all-checks/batch-upsert` | Batch create or update posture checks |
| POST | `/posture/checks/v1/all-checks/batch-delete` | Batch delete posture checks |

</details>

See [Posture Check Upload Initiation API](/scm/api/config/posture-management/checks/posture-check-upload-initiation-api/) for full details.

---

### Posture Management — Config Cleanup API (New)

Identify unused or redundant security rules across Strata Cloud Manager and Panorama deployments.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/posture/config-cleanup/v1/zerohit-rules` | Get security rules with zero traffic hits |

See [Config Cleanup API](/scm/api/config/posture-management/config-cleanup/config-cleanup-api/) for full details.

---

## July 2026

### Posture Management — Compliance Framework APIs (New)

Programmatic access to compliance framework configurations and assessment results.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/posture/v1/compliance-frameworks` | List compliance frameworks |
| GET | `/posture/v1/compliance-frameworks/{id}` | Get compliance framework details |
| GET | `/posture/v1/compliance-assessments` | List compliance assessment results |

See [Compliance Framework APIs](/scm/api/config/posture-management/compliance-framework/compliance-center-api/) for full details.

---

### Advanced DNS Security Resolver — Schema Improvements (Updated)

Improved validation constraints, required fields for EDL definitions, and SafeSearch/YouTube restricted mode filtering options.

See [Advanced DNS Security Resolver APIs](/scm/api/config/adnsr/introduction-adnsr) for full details.

---

### Prisma AIRS AI Red Teaming — Adapter Endpoints (New)

Manage custom adapters for AI Red Teaming targets including create, list, get, update, delete, validate, and retrieve configuration defaults.

<details><summary>View endpoints (7)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/airs/redteam/v1/adapters` | Create a custom adapter |
| GET | `/airs/redteam/v1/adapters` | List all adapters |
| GET | `/airs/redteam/v1/adapters/{id}` | Get adapter by ID |
| PUT | `/airs/redteam/v1/adapters/{id}` | Update an adapter |
| DELETE | `/airs/redteam/v1/adapters/{id}` | Delete an adapter |
| POST | `/airs/redteam/v1/adapters:validate` | Validate adapter configuration |
| GET | `/airs/redteam/v1/adapters/defaults` | Retrieve configuration defaults |

</details>

See [Prisma AIRS AI Red Teaming APIs](/prisma-airs-redteam/api/ai-integration/introduction) for full details.

---

### Network Configuration — Generate PPK Key (New)

Generate a cryptographically strong Post-Quantum Pre-Shared Key (RFC 8784) for use in IKE gateway PPK configuration.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/config/network/v1/ike-gateways:generate-ppk` | Generate a PPK key for IKE gateways |

See [Network Services APIs](/scm/api/config/ngfw/network/network-api) for full details.

---

### Identity and Security Services — Spec Consolidation (Updated)

Consolidated spec files and improved schemas across SASE, NGFW, and Cloud NGFW platforms for Identity Services and Security Services.

See [Identity Services APIs](/scm/api/config/sase/identity/identity-api) for full details.

## June 2026

### NGFW Device Onboarding — Site Management APIs (New)

Manage site configurations as part of the NGFW device onboarding workflow.

See [Site Management APIs](/scm/api/config/ngfw/setup/device-onboarding/site-management/) for full details.

---

### SASE Deployment — Network Deployment Endpoints (Updated)

Expanded deployment automation capabilities for SASE network configurations with new endpoints.

See [Network Deployment APIs](/scm/api/config/sase/deployment/deployment-api/) for full details.

---

### Objects Configuration — New Object Schemas (Updated)

New object schemas for SASE, NGFW, and Cloud NGFW configurations that enhance configuration management across all platform types.

See [Objects APIs](/scm/api/config/sase/objects/objects-api/) for full details.

---

### NGTS — TLS Protect Cloud APIs (New)

Manage TLS certificate lifecycles and protection policies through Strata Cloud Manager.

See [NGTS TLS Protect Cloud APIs](/scm/api/config/ngts/ngts-api/) for full details.

## May 2026

### Terraform Provider — SCM Provider Documentation (New)

Infrastructure-as-code management of Strata Cloud Manager configurations using Terraform.

See [SCM Terraform Provider](/terraform/docs/scm/getting-started/introduction/) for full details.

---

### Advanced DNS Security Resolver — Initial Release (New)

Configuration and management of advanced DNS security resolver settings.

See [Advanced DNS Security Resolver APIs](/scm/api/config/adnsr/introduction-adnsr) for full details.

---

### NGFW Operations — Operations APIs (New)

Operational management of NGFW devices through Strata Cloud Manager.

See [NGFW Operations APIs](/scm/api/config/ngfw-operations/introduction/) for full details.

---

### Security Services, Network Services, NGFW Operations — Additional Endpoints (Updated)

Additional endpoints and schema updates across Security Services, Network Services, and NGFW Operations APIs.

See [Security Services](/scm/api/config/sase/security/security-api/), [Network Services](/scm/api/config/ngfw/network/network-api/), and [NGFW Operations](/scm/api/config/ngfw-operations/introduction/) for full details.

## April 2026

### Cloud Dynamic User Groups (CDUG) — CDUG APIs (New)

Dynamic grouping of users based on cloud identity attributes for policy enforcement.

See [Cloud Dynamic User Groups (CDUG) APIs](/scm/api/config/ciedss/cdug/cdug-introduction/) for full details.

---

### NGFW Device Settings — HA Configurations (New)

High Availability configuration management for NGFW devices via Device Settings APIs.

See [Device Settings APIs](/scm/api/config/ngfw/device/device-api/) for full details.

## March 2026

### Configuration Operations, Security Services — Additional Endpoints (Updated)

Additional endpoints and improvements for Configuration Operations and Security Services APIs.

See [Configuration Operations APIs](/scm/api/config/sase/operations/operations-api/) for full details.

---

### Posture Management — Posture APIs (New)

Programmatic management of security posture assessments and policies.

See [Posture APIs](/scm/api/config/posture-management/introduction-posture/) for full details.

---

### Incidents — Incidents APIs (New)

Programmatically query, manage, and respond to security incidents.

See [Incidents APIs](/scm/api/config/incidents/incident-scm) for full details.

## January 2026

### Best Practices — API Best Practices Guide (New)

Recommended patterns for API integration, error handling, and configuration management.

See [Strata Cloud Manager Best Practices](/scm/docs/api-best-practices/) for full details.

## October 2025

### CIE Directory Sync Service — Directory Sync APIs (New)

Directory synchronization capabilities between Cloud Identity Engine and external identity sources.

See [CIE Directory Sync Service APIs](/scm/api/config/ciedss/ciedss/) for full details.

## June 2025

### Setup — Snippet Sharing APIs (New)

Reusable configuration templates that can be shared across folders and devices.

See [Snippet Sharing APIs](/scm/api/config/sase/setup/snippet-sharing/) for full details.

## May 2025

### Security Services — Unified Rulebase Policies (New)

Introduced Security and Internet policy types for Security Rules, supporting the unified rulebase experience where traditional security rules and Web Security rules are managed through a common endpoint.

See [Security Services APIs](/scm/api/config/sase/security/security-api/) for full details.

## February 2025

### Prisma Access — Configuration Orchestration APIs (New)

Orchestrated, workflow-based configuration management for Prisma Access deployments.

See [Prisma Access Configuration Orchestration APIs](/sase/api/introduction/) for full details.

## January 2025

### SaaS Security Posture Management — SSPM APIs (New)

Manage SaaS application security posture policies, run assessments, and automate remediation workflows.

See [SaaS Security Posture Management APIs](/sase/api/sspm/) for full details.

## November 2024

### Strata Cloud Manager — Configuration APIs (New)

Major platform release introducing the Strata Cloud Manager configuration APIs and [landing page](/strata-cloud-manager/). See the [detailed November 2024 release notes](/scm/docs/release-notes/november2024) for more information.

<details><summary>View highlights (9)</summary>

| Area | Change |
| ---- | ------ |
| API Platform FQDN | Updated to `api.strata.paloaltonetworks.com` (original `api.sase.paloaltonetworks.com` continues to work) |
| Configuration API Base Paths | Reorganized along functional lines (`/config/setup/v1`, `/config/deployment/v1`, `/config/security/v1`, `/config/objects/v1`, `/config/network/v1`, `/config/identity/v1`, `/config/device/v1`, `/config/operations/v1`) |
| POST/PUT/DELETE Query Params | Removed — resource location now specified in request body via `folder`, `snippet`, or `device` attributes |
| Security Rule Types | Added `type` attribute (`security` and `internet`) for unified rulebase |
| SCM Setup APIs | New: Folders, Snippets, Devices, Labels, Variables |
| NGFW Network Configuration | Comprehensive network management endpoints |
| NGFW Device Configuration | Device settings, HA, service routes, and more |
| Log Forwarding Configuration | Custom log forwarding profiles, HTTP/syslog server profiles |
| DoS Protection Configuration | DoS protection profiles and rules |

</details>

## October 2024

### Prisma Access Browser — Browser Management APIs (New)

Management of Prisma Access Browser configurations and policies.

See [Prisma Access Browser APIs](/access/api/browser-mgmt/) for full details.

---

### Aggregate Monitoring — Additional Endpoints (Updated)

Expanded monitoring capabilities for tenant resources.

See [Aggregate Monitoring APIs](/sase/api/mt-monitor/) for full details.

## July 2024

### Multitenant Interconnect — Interconnect APIs (New)

Management of interconnect configurations across multiple tenants.

See [Multitenant Interconnect APIs](/sase/api/mt-interconnect/) for full details.

## April 2024

### Multitenant Notifications — Notification APIs (New)

Configure and manage notification policies for multitenant SASE deployments.

See [Multitenant Notification APIs](/sase/api/mt-notifications/) for full details.

## September 2023

### Prisma Access — Autonomous DEM APIs (New)

Access digital experience management data including application and agent scores.

See [Autonomous DEM APIs](/access/docs/adem) and [ADEM API Examples](/access/docs/adem/examples/application-performance/mu-experience-score-for-an-app/) for full details.

## May 2023

### Identity and Access Management — Custom Roles and Permission Sets (New)

Fine-grained access control with custom roles and permission sets.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET/POST | `/iam/v1/custom-roles` | Manage custom roles |
| GET/POST | `/iam/v1/permission-sets` | Manage permission sets |

See [Custom Roles](/sase/api/iam/custom-roles/) and [Permission Sets](/sase/api/iam/permission-sets/) for full details.

## April 2023

### Prisma Access — ZTNA Connector APIs (New)

ZTNA Connector APIs for Zero Trust Network Access management.

See [SASE Release Notes](/sase/docs/release-notes/release-notes/#april-2023) for full details.

## March 2023

### Prisma Access — Configuration Endpoints (Updated)

New endpoints for Prisma Access Configuration APIs.

See [SASE Release Notes](/sase/docs/release-notes/release-notes/#march-2023) for full details.

## December 2022

### Subscription Service — License Allocation Endpoints (New)

Allocate licenses to tenant service groups.

See [Subscription Service](/sase/api/subscription/) for full details.

## November 2022

### Prisma Access — Mobile Agent Endpoints (New)

Mobile Agent (GlobalProtect) endpoints added to Prisma Access configuration.

See [SASE Release Notes](/sase/docs/release-notes/release-notes/#november-2022) for full details.

---

### Prisma Access — Insights Examples (New)

Published examples for Prisma Access Insights API usage.

See [Prisma Access Insights examples](/access/docs/insights/examples/) for full details.

## October 2022

### Aggregate Monitoring — New Endpoints and Query Filters (Updated)

Additional endpoints and query filters for aggregate monitoring.

See [SASE Release Notes](/sase/docs/release-notes/release-notes/#late-august-2022) for full details.

---

### Cortex Data Lake — Log Forwarding Authentication Update (Updated)

Log Forwarding APIs now use the common SASE authentication mechanism.

See [Log Forwarding APIs](/cdl/docs/log-forwarding/) for full details.

## August 2022

### Prisma Access Configuration, Aggregate Monitoring — Updates (Updated)

New endpoints for Prisma Access Config APIs and updated Aggregate Monitoring APIs.

See [August 2022 release notes](/sase/docs/release-notes/release-notes#august-2022) for full details.

## July 2022

### Prisma SD-WAN, Prisma Access — Multi-Product Update (New)

Added Prisma SD-WAN documentation, and updates to Prisma Access Configuration and Insights APIs.

See [SASE Release Notes](/sase/docs/release-notes/release-notes#july-2022) for full details.

## June 2022

### IAM — User Account Documentation (Updated)

Published additional information about IAM user accounts.

See [IAM user accounts](/sase/docs/user-accounts) for full details.

## May 2022

### IAM — User Account APIs (New)

User Account API endpoints for the IAM service.

See [User Account APIs](/sase/api/iam/user-accounts) for full details.

---

### Prisma Access — Configuration Monthly Release (Updated)

Monthly release with breaking changes to Prisma Access Configuration APIs.

See [breaking changes](/sase/docs/release-notes/release-notes#april-2022) for full details.

## April 2022

### Prisma Access Insights, Prisma SASE — Initial Platform Release (New)

First public release of Prisma SASE APIs for MSSPs, including Prisma Access Insights v1.0 and v2.0 APIs. Corrected base URLs, fixed bugs, and added release notes.

See [SASE Release Notes](/sase/docs/release-notes/release-notes) for full details.
