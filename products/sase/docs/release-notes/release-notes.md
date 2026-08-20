---
id: release-notes
title: Release Notes
description: Prisma SASE API Release Notes
hide_title: true
slug: /sase/docs/release-notes/release-notes
hide_table_of_contents: false
keywords:
  - sase
---

# Prisma SASE API Release Notes

These release notes identify API changes made for the various SASE services.

- [Prisma Access Cloud Managed Release Notes](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-cloud-managed-release-notes/release-information)
- [Prisma Access Insights Release Updates](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-insights/insights/app-updates)

## August 2026

### SD-WAN Legacy — Legacy APIs (New)

Managing Prisma SD-WAN configuration via the Legacy API.

See [SD-WAN Legacy APIs](/sdwan/api/legacy/open_api_legacy/) for full details.

---

### SD-WAN Unified — Unified APIs (New)

Managing Prisma SD-WAN configuration via the Unified API.

See [SD-WAN Unified APIs](/sdwan/api/unified/open_api_unified/) for full details.

## July 2026

### Prisma SD-WAN — SD-WAN 6.8.1 Controller APIs (Updated)

Updated Unified and Legacy APIs with 61 new endpoints across multiple categories for SD-WAN 6.8.1.

<details><summary>View categories (8)</summary>

| Category | Description |
| -------- | ----------- |
| OSPF | Routing configuration endpoints for OSPF protocol management |
| Performance Management | Monitoring and managing SD-WAN performance metrics |
| Prisma Access Configs | Prisma Access integration configurations |
| Topology | Network topology management |
| System Administration | System-level administrative operations |
| Security Policy | Security policy management |
| Site Configuration | SD-WAN site configuration and management |
| Network Constructs | Network construct definitions |

</details>

See [Prisma SD-WAN Unified APIs](/sdwan/api/) and [Legacy APIs](/sdwan/api/legacy/) for full details.

## April 2026

### 5G Monitoring — Usage Metric Endpoints (Updated)

Visibility into 5G usage metrics for monitored deployments.

See [SASE 5G Monitoring APIs](/sase/api/mt-monitor/) for full details.

## March 2026

### Prisma Access — Site Creation API Workflow (New)

Programmatic site creation and license management through the Configuration Orchestration API.

See [Site Creation API Workflow](/sase/api/config-orch/site-license-workflow/) for full details.

## February 2026

### Prisma Access Browser for MSP — MSP Management APIs (New)

Managed Service Providers can manage Prisma Access Browser deployments across multiple tenants.

See [Prisma Browser for MSP APIs](/sase/api/pab-msp/pab-msp-api/) for full details.

---

### Multitenant Interconnect — SP Interconnect Migration (Deprecated)

Backbone and Connection APIs are deprecated and replaced by the Service Provider (SP) Interconnect APIs. Migrate existing integrations to the new SP Interconnect endpoints.

See [SP Interconnect APIs](/sase/api/mt-interconnect/introduction/) for full details.

## October 2025

### 5G Manage Services — Additional APIs (Updated)

Expanded capabilities for managing 5G service configurations.

See [SASE 5G Manage Services APIs](/sase/api/manage-services-5g/) for full details.

## July 2025

### Identity Security — Identity Security Posture Management APIs (New)

Assess and manage identity security posture across the SASE platform.

See [Identity Security Posture Management APIs](/sase/api/identity-sspm/) for full details.

## June 2025

### SaaS Security Posture Management — Plugin API (Updated)

Plugin API extends SSPM capabilities for custom SaaS application integrations.

See [SaaS Security Posture Management APIs](/sase/api/sspm/) for full details.

## May 2025

### 5G Manage Services — 5G Management APIs (New)

Management capabilities for 5G network services within the SASE platform.

See [SASE 5G Manage Services APIs](/sase/api/manage-services-5g/) for full details.

## April 2025

### Prisma Access — Insights 3.0 APIs (New)

Major version update providing enhanced analytics and monitoring capabilities for Prisma Access deployments.

See [Prisma Access Insights 3.0 APIs](/access/api/insights/) for full details.

## February 2025

### Prisma Access — Configuration Orchestration APIs (New)

Orchestrated configuration management across Prisma Access deployments.

See [Prisma Access Configuration Orchestration APIs](/sase/api/introduction/) for full details.

## January 2025

### SaaS Security Posture Management — SSPM APIs (New)

Programmatic management of SaaS security posture policies, assessments, and remediation.

See [SaaS Security Posture Management APIs](/sase/api/sspm/) for full details.

## October 2024

### Prisma Access Browser — Browser Management APIs (New)

Manage Prisma Access Browser configurations, policies, and deployments.

See [Prisma Access Browser APIs](/access/api/browser-mgmt/) for full details.

---

### Aggregate Monitoring — Additional Endpoints (Updated)

Expanded monitoring coverage for tenant resources and connectivity.

See [Aggregate Monitoring APIs](/sase/api/mt-monitor/) for full details.

## July 2024

### Multitenant Interconnect — Interconnect APIs (New)

Manage interconnect configurations across multiple tenants in the SASE platform.

See [Multitenant Interconnect APIs](/sase/api/mt-interconnect/) for full details.

## April 2024

### Multitenant Notifications — Notification APIs (New)

Configure and manage notification configurations and alert policies for multitenant SASE deployments.

See [Multitenant Notification APIs](/sase/api/mt-notifications/) for full details.

## September 2023

### Prisma Access — Autonomous DEM APIs (New)

Access Autonomous Digital Experience Management summary, distribution, and timeseries data including application and agent scores.

See [Autonomous DEM APIs](/access/api/adem/autonomous-dem-api/) and [ADEM examples](/access/docs/adem/examples/application-performance/mu-experience-score-for-an-app/) for full details. For more information, see [AI-Powered Autonomous DEM](https://docs.paloaltonetworks.com/autonomous-dem/administration).

## May 2023

### Identity and Access Management — Custom Roles and Permission Sets (New)

Fine-grained access control management for SASE tenants via custom roles and permission sets.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET/POST | `/iam/v1/custom-roles` | Manage custom roles |
| GET/POST | `/iam/v1/permission-sets` | Manage permission sets |

See [Custom Roles](/sase/api/iam/custom-roles/) and [Permission Sets](/sase/api/iam/permission-sets/) for full details.

## April 2023

### Prisma Access — ZTNA Connector APIs (New)

Zero Trust Network Access Connector management APIs.

See [ZTNA Connector APIs](/access/api/ztna/ztna-connector-apis/) for full details.

---

### Prisma Access — Configuration Hotfix (Updated)

Removed `region_ipv6` object from Mobile Agent infrastructure settings payload. Added a usage note for Unified Prisma SD-WAN APIs.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/sse/config/v1/mobile-agent/infrastructure-settings` | Removed `region_ipv6` from payload |

See [Prisma Access Configuration APIs](/access/api/prisma-access-config/) for full details.

## March 2023

### Prisma Access — Configuration Updates (Updated)

Multiple additions including cloud authentication profiles, traffic steering rules rename, tenant onboarding, local user groups, service connection groups, BGP routing, and mobile agent enhancements.

<details><summary>View endpoints (7)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/sse/config/v1/enable` | API-based onboarding of Prisma Access tenants |
| GET/POST | `/sse/config/v1/authentication-profiles` | Cloud (CIE) authentication profile support |
| GET/POST | `/sse/config/v1/local-user-groups` | Local user group management |
| GET/POST | `/sse/config/v1/service-connection-groups` | Service connection group management |
| GET | `/sse/config/v1/mobile-agent/agent-versions` | Retrieve available agent versions |
| POST | `/sse/config/v1/mobile-agent/agent-profiles` | Manage custom agent profiles |
| POST | `/sse/config/v1/mobile-agent/tunnel-profiles` | Manage custom tunnel profiles |

</details>

See [Prisma Access Configuration APIs](/access/api/prisma-access-config/) for full details.

## December 2022

### Subscription Service — License Allocation Endpoints (New)

Allocate licenses to tenant service groups.

See [Subscription Service](/sase/api/subscription/) for full details.

## November 2022

### Prisma Access — Mobile Agent Endpoints (New)

Mobile Agent (GlobalProtect) endpoints added to Prisma Access Configuration API.

See [Mobile Agent APIs](/category/access/api/prisma-access-config/mobile-agent/) for full details.

## Late August 2022

### Aggregate Monitoring — DataResources and Query Filters (Updated)

New DataResources endpoints, query filters, and properties for aggregate monitoring.

<details><summary>View endpoints (6)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/mt/monitor/v1/agg/serviceconnectivity` | Get RN and SC site status count |
| POST | `/mt/monitor/v1/agg/serviceconnectivity/cdlstatus` | Get CDL connectivity status |
| POST | `/mt/monitor/v1/agg/serviceconnectivity/gatewaystatus` | Get mobile gateway connection status |
| GET | `/mt/monitor/v1/agg/serviceconnectivity/licenseallocated` | Get total GP licenses allocated |
| POST | `/mt/monitor/v1/agg/serviceconnectivity/topoutliers` | Get top outliers |
| POST | `/mt/monitor/v1/agg/serviceconnectivity/uniqueusers` | List unique GP users |

</details>

See [Aggregate Monitoring APIs](/sase/api/mt-monitor/) for full details.

## August 2022

### Aggregate Monitoring — DataResources Expansion (Updated)

Added required `X-PANW-Region` header, new DataResources endpoints, moved upgrade list to InsightsResources, renamed query filters, and removed `license_type` parameter.

<details><summary>View endpoints (6)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/mt/monitor/v1/agg/alerts` | Aggregate alerts |
| POST | `/mt/monitor/v1/agg/applicationUsage` | Application usage data |
| POST | `/mt/monitor/v1/agg/applications` | Application aggregates |
| POST | `/mt/monitor/v1/agg/resource` | Resource aggregates |
| POST | `/mt/monitor/v1/agg/threats` | Threat aggregates |
| POST | `/mt/monitor/v1/agg/urlLogs` | URL log aggregates |

</details>

See [Aggregate Monitoring APIs](/sase/api/mt-monitor/) for full details.

---

### Prisma Access — Traffic Steering and Certificates (Updated)

Added traffic steering APIs and certificate import endpoint.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/sse/config/v1/certificates/import` | Import a certificate |

See [Prisma Access Configuration APIs](/access/api/prisma-access-config/) for full details.

## July 2022

### Prisma SD-WAN — Initial Documentation Release (New)

First documentation release of Prisma SD-WAN APIs.

See [Prisma SD-WAN APIs](/sdwan/docs/) for full details.

---

### Prisma Access — Configuration and Insights Updates (Updated)

Added `shared-infrastructure-settings`, `internal-dns-servers`, and `service-connections` endpoints. Renamed `Remote Networks` to `Service Setup`. Removed API Server Status APIs from Insights.

See [Prisma Access Configuration APIs](/access/api/prisma-access-config/) for full details.

## April 2022

### Prisma Access — Configuration URI Migration (Updated)

Configuration APIs updated with new `/sse` prefix (e.g., `/config/v1/...` → `/sse/config/v1/...`). Resource-by-ID endpoints no longer support the `folder` query parameter.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | `/sse/config/v1/config-versions:load` | Load configuration (replaces `/config/v1/load-config`) |
| POST | `/sse/config/v1/config-versions/candidate:push` | Push candidate config (replaces `/config/v1/running/push`) |
| GET | `/sse/config/v1/config-versions/{version}` | Get config version (new) |

See [Prisma Access Configuration APIs](/access/api/prisma-access-config/) for full details.

## March 2022

### Prisma SASE — Initial Platform Release (New)

First public release supporting tenant and identity management, common authentication, subscription monitoring, Prisma Access configuration, and aggregate monitoring for MSSPs.

See [Prisma SASE documentation](/sase/docs/api-call) for full details.
