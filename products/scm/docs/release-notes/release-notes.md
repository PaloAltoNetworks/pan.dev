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

These release notes identify API changes made for the various Strata Cloud Manager services. See
also the [change log](/scm/docs/release-notes/changelog) for information on all changes to this API
documentation, some of which have occurred in between API product releases.

## July 2026

**Product:** Strata Cloud Manager — Posture Management

Added [Compliance Framework APIs](/scm/api/config/posture-management/compliance-framework/compliance-center-api/) to the Posture API. These APIs enable programmatic access to compliance framework configurations and assessment results.

## June 2026

**Product:** Strata Cloud Manager — NGFW Device Onboarding

Added [Site Management APIs](/scm/api/config/ngfw/setup/device-onboarding/site-management/) to Device Onboarding. These APIs provide endpoints for managing site configurations as part of the NGFW device onboarding workflow.

---

**Product:** Strata Cloud Manager — SASE Deployment

Updated [Network Deployment APIs](/scm/api/config/sase/deployment/deployment-api/) with new endpoints. The additions expand deployment automation capabilities for SASE network configurations.

---

**Product:** Strata Cloud Manager — Objects Configuration

Updated [Objects APIs](/scm/api/config/sase/objects/objects-api/) with new object schemas for SASE, NGFW, and Cloud NGFW configurations. The new schemas enhance configuration management across all platform types.

---

**Product:** Strata Cloud Manager — NGTS

Added [NGTS TLS Protect Cloud APIs](/scm/api/config/ngts/ngts-api/) to SCM. These APIs enable management of TLS certificate lifecycles and protection policies.

## May 2026

**Product:** Strata Cloud Manager — Terraform Provider

Added [SCM Terraform Provider](/terraform/docs/scm/getting-started/introduction/) documentation. The Terraform provider enables infrastructure-as-code management of Strata Cloud Manager configurations.

---

**Product:** Strata Cloud Manager — Advanced DNS Security Resolver

Added [Advanced DNS Security Resolver APIs](/scm/api/config/adnsr/introduction-adnsr). These APIs provide configuration and management of advanced DNS security resolver settings.

---

**Product:** Strata Cloud Manager — NGFW Operations

Added [NGFW Operations APIs](/scm/api/config/ngfw-operations/introduction/). These APIs enable operational management of NGFW devices through Strata Cloud Manager.

---

**Product:** Strata Cloud Manager — Security Services, Network Services, NGFW Operations

Updated [Security Services](/scm/api/config/sase/security/security-api/), [Network Services](/scm/api/config/ngfw/network/network-api/), and [NGFW Operations](/scm/api/config/ngfw-operations/introduction/) APIs with additional endpoints and schema updates.

## April 2026

**Product:** Strata Cloud Manager — Cloud Dynamic User Groups (CDUG)

Added [Cloud Dynamic User Groups (CDUG) APIs](/scm/api/config/ciedss/cdug/cdug-introduction/) to SCM. CDUG APIs enable dynamic grouping of users based on cloud identity attributes for policy enforcement.

---

**Product:** Strata Cloud Manager — NGFW Device Settings

Added HA Configurations to [Device Settings APIs](/scm/api/config/ngfw/device/device-api/). These additions support High Availability configuration management for NGFW devices.

## March 2026

**Product:** Strata Cloud Manager — Configuration Operations, Security Services

Updated [Configuration Operations APIs](/scm/api/config/sase/operations/operations-api/) and Security Services APIs with additional endpoints and improvements.

---

**Product:** Strata Cloud Manager — Posture Management

Added [Posture APIs](/scm/api/config/posture-management/introduction-posture/). These APIs enable programmatic management of security posture assessments and policies.

---

**Product:** Strata Cloud Manager — Incidents

Added [Incidents APIs](/scm/api/config/incidents/incidents-scm/). Use these APIs to programmatically query, manage, and respond to security incidents.

## January 2026

**Product:** Strata Cloud Manager — Best Practices

Added [Strata Cloud Manager Best Practices](/scm/docs/api-best-practices/). This guide provides recommended patterns for API integration, error handling, and configuration management.

## October 2025

**Product:** Strata Cloud Manager — CIE Directory Sync Service

Added [CIE Directory Sync Service APIs](/scm/api/config/ciedss/ciedss/). These APIs provide directory synchronization capabilities between Cloud Identity Engine and external identity sources.

## June 2025

**Product:** Strata Cloud Manager — Setup

Added [Snippet Sharing APIs](/scm/api/config/sase/setup/snippet-sharing/). Snippet sharing enables reusable configuration templates that can be shared across folders and devices.

## May 2025

**Product:** Strata Cloud Manager — Security Services

Introduced two policies Security and Internet for Security Rules under [Security Services APIs](/scm/api/config/sase/security/security-api/). This supports the unified rulebase experience where traditional security rules and Web Security rules are managed through a common endpoint.

## February 2025

**Product:** Prisma Access — Configuration Orchestration

Added [Prisma Access Configuration Orchestration APIs](/sase/api/introduction/). These APIs enable orchestrated, workflow-based configuration management for Prisma Access deployments.

## January 2025

**Product:** Prisma SASE — SaaS Security Posture Management

Added [SaaS Security Posture Management APIs](/sase/api/sspm/). Use these APIs to manage SaaS application security posture policies, run assessments, and automate remediation workflows.

## November 2024

**Product:** Strata Cloud Manager

Added Strata Cloud Manager configuration APIs, along with a [Strata Cloud Manager landing page](/strata-cloud-manager/). See the [detailed November 2024 release notes](/scm/docs/release-notes/november2024) for more information.

### Highlights

- **New API platform FQDN:** Updated to `api.strata.paloaltonetworks.com` (original `api.sase.paloaltonetworks.com` continues to work).
- **Restructured configuration API base paths:** APIs reorganized along functional lines (`/config/setup/v1`, `/config/deployment/v1`, `/config/security/v1`, `/config/objects/v1`, `/config/network/v1`, `/config/identity/v1`, `/config/device/v1`, `/config/operations/v1`).
- **Removal of query params for POST, PUT, DELETE:** Resource location now specified in request body via `folder`, `snippet`, or `device` attributes.
- **Introduction of security rule types:** Added `type` attribute (`security` and `internet`) to support unified rulebase.
- **New SCM Setup APIs:** Folders, Snippets, Devices, Labels, Variables.
- **NGFW Network Configuration APIs:** Comprehensive network management endpoints.
- **NGFW Device Configuration APIs:** Device settings, HA, service routes, and more.
- **Log Forwarding Configuration APIs:** Custom log forwarding profiles, HTTP/syslog server profiles.
- **DoS Protection Configuration APIs:** DoS protection profiles and rules.

## October 2024

**Product:** Prisma Access Browser

Added [Prisma Access Browser APIs](/access/api/browser-mgmt/). These APIs enable management of Prisma Access Browser configurations and policies.

---

**Product:** Prisma SASE — Aggregate Monitoring

Added additional [Aggregate Monitoring APIs](/sase/api/mt-monitor/). New endpoints expand monitoring capabilities for tenant resources.

## July 2024

**Product:** Prisma SASE — Multitenant Interconnect

Added [Multitenant Interconnect APIs](/sase/api/mt-interconnect/). These APIs provide management of interconnect configurations across multiple tenants.

## April 2024

**Product:** Prisma SASE — Multitenant Notifications

Added [Multitenant Notification APIs](/sase/api/mt-notifications/). Use these APIs to configure and manage notification policies for multitenant SASE deployments.

## September 2023

**Product:** Prisma Access — Autonomous DEM

Added [Autonomous DEM APIs](/access/docs/adem) and [ADEM API Examples](/access/docs/adem/examples/application-performance/mu-experience-score-for-an-app/). Use the ADEM APIs to access digital experience management data including application and agent scores.

## May 2023

**Product:** Prisma SASE — Identity and Access Management

Added [Custom Roles](/sase/api/iam/custom-roles/) and [Permission Sets](/sase/api/iam/permission-sets/) to the Identity and Access Management APIs.

## April 2023

**Product:** Prisma Access — ZTNA Connector

Added [ZTNA Connector APIs](/sase/docs/release-notes/release-notes/#april-2023) and miscellaneous other changes.

## March 2023

**Product:** Prisma Access — Configuration

New endpoints for the [Prisma Access Configuration APIs](/sase/docs/release-notes/release-notes/#march-2023).

## December 2022

**Product:** Prisma SASE — Subscription Service

Published new [Subscription Service](/sase/api/subscription/) endpoints that allow you to allocate licenses to your tenant service groups.

## November 2022

**Product:** Prisma Access — Configuration

Published new [Prisma Access configuration](/sase/docs/release-notes/release-notes/#november-2022) endpoints including Mobile Agent (Global Protect) endpoints.

---

**Product:** Prisma Access — Insights

Published [Prisma Access Insights examples](/access/docs/insights/examples/).

## October 2022

**Product:** Prisma SASE — Aggregate Monitoring

New endpoints and query filters for the [aggregate monitoring APIs](/sase/docs/release-notes/release-notes/#late-august-2022).

---

**Product:** Cortex Data Lake — Log Forwarding

The Cortex Data Lake [Log Forwarding APIs](/cdl/docs/log-forwarding/) now use the same common authentication mechanism as is used by most SASE APIs.

## August 2022

**Product:** Prisma Access — Configuration, Prisma SASE — Aggregate Monitoring

- New endpoints for the Prisma Access Config APIs. See the [August 2022 release notes](/sase/docs/release-notes/release-notes#august-2022) for details.
- Updated the [Aggregate Monitoring APIs](/sase/api/mt-monitor). See the [August 2022 release notes](/sase/docs/release-notes/release-notes#august-2022) for details.

## July 2022

**Product:** Prisma SD-WAN, Prisma Access — Configuration, Prisma Access — Insights

Added Prisma SD-WAN, and updates to Prisma Access Configuration and Prisma Access Insights. See the [SASE Release Notes](/sase/docs/release-notes/release-notes#july-2022) for details.

## June 2022

**Product:** Prisma SASE — IAM

Published additional information about [IAM user accounts](/sase/docs/user-accounts).

## May 2022

**Product:** Prisma SASE — IAM

Published [User Account APIs](/sase/api/iam/user-accounts) for the IAM service.

---

**Product:** Prisma Access — Configuration

Prisma Access Configuration API monthly release, which includes [breaking changes](/sase/docs/release-notes/release-notes#april-2022) to the APIs.

## April 2022

**Product:** Prisma Access — Insights, Prisma SASE

- Added Prisma Access Insights v1.0 and v2.0 APIs.
- Corrected base URLs in the API reference. Fixed bugs and typos in the breadcrumbs. Added release notes to the developer documentation. Miscellaneous editorial corrections.
- First public release of the Prisma SASE API in support of MSSPs.
