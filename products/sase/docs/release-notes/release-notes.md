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

These release notes identify API changes made for the various SASE services. In addition, you can
see the following for information about non-API feature enhancements and known issues for SASE products:

- [Prisma Access Cloud Managed Release Notes](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-cloud-managed-release-notes/release-information)
- [Prisma Access Insights Release Updates](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-insights/insights/app-updates)

See also the [change log](/sase/docs/release-notes/changelog) for information on all changes to this API documentation, some of which have
occurred in between API product releases.

## April 2026

**Product:** Prisma SASE — 5G Monitoring

Updated the [SASE 5G Monitoring APIs](/sase/api/mt-monitor/) with usage metric endpoints. These new endpoints provide visibility into 5G usage metrics for monitored deployments.

## March 2026

**Product:** Prisma Access — Configuration Orchestration

Added the [Site Creation API Workflow](/sase/api/config-orch/site-license-workflow/) to Prisma Access Configuration Orchestration. This workflow enables programmatic site creation and license management through the orchestration API.

## February 2026

**Product:** Prisma Access Browser for MSP

Added new [Prisma Browser for MSP](/sase/api/pab-msp/pab-msp-api/) APIs. These APIs enable Managed Service Providers to manage Prisma Access Browser deployments across multiple tenants.

---

**Product:** Prisma SASE — Multitenant Interconnect

Backbone and Connection APIs are now **deprecated** and have been replaced by the [Service Provider (SP) Interconnect](/sase/api/mt-interconnect/introduction/) APIs. Migrate existing integrations to the new SP Interconnect endpoints.

## October 2025

**Product:** Prisma SASE — 5G Manage Services

Added new APIs to [SASE 5G Manage Services APIs](/sase/api/manage-services-5g/). These additions expand the capabilities for managing 5G service configurations.

## July 2025

**Product:** Prisma SASE — Identity Security

Added [Identity Security Posture Management APIs](/sase/api/identity-sspm/). These APIs allow you to assess and manage your identity security posture across the SASE platform.

## June 2025

**Product:** Prisma SASE — SaaS Security Posture Management

Added Plugin API to [SaaS Security Posture Management APIs](/sase/api/sspm/). The plugin API extends SSPM capabilities for custom SaaS application integrations.

## May 2025

**Product:** Prisma SASE — 5G Manage Services

Added [SASE 5G Manage Services APIs](/sase/api/manage-services-5g/). These APIs provide management capabilities for 5G network services within the SASE platform.

## April 2025

**Product:** Prisma Access — Insights

Added [Prisma Access Insights 3.0 APIs](/access/api/insights/). This major version update provides enhanced analytics and monitoring capabilities for Prisma Access deployments.

## February 2025

**Product:** Prisma Access — Configuration Orchestration

Added [Prisma Access Configuration Orchestration APIs](/sase/api/introduction/). These APIs enable orchestrated configuration management across Prisma Access deployments.

## January 2025

**Product:** Prisma SASE — SaaS Security Posture Management

Added [SaaS Security Posture Management APIs](/sase/api/sspm/). Use these APIs to programmatically manage SaaS security posture policies, assessments, and remediation.

## October 2024

**Product:** Prisma Access Browser

Added [Prisma Access Browser APIs](/access/api/browser-mgmt/). These APIs allow you to manage Prisma Access Browser configurations, policies, and deployments.

---

**Product:** Prisma SASE — Aggregate Monitoring

Added additional [Aggregate Monitoring APIs](/sase/api/mt-monitor/). New endpoints expand monitoring coverage for tenant resources and connectivity.

## July 2024

**Product:** Prisma SASE — Multitenant Interconnect

Added [Multitenant Interconnect APIs](/sase/api/mt-interconnect/). These APIs allow you to manage interconnect configurations across multiple tenants in the SASE platform.

## April 2024

**Product:** Prisma SASE — Multitenant Notifications

Added [Multitenant Notification APIs](/sase/api/mt-notifications/). Use these APIs to manage notification configurations and alert policies for multitenant SASE deployments.

## September 2023

**Product:** Prisma Access — Autonomous DEM

Added [Autonomous DEM](/access/api/adem/autonomous-dem-api/) APIs. Use the ADEM APIs to access the Autonomous Digital
Experience Management summary, distribution and timeseries data, such as application score and agent
scores.

Added [examples](/access/docs/adem/examples/application-performance/mu-experience-score-for-an-app/)
that correlate fields in response structures to the area in the UI which displays that data.

For more information on AI-Powered Autonomous DEM, see
[AI-Powered Autonomous DEM](https://docs.paloaltonetworks.com/autonomous-dem/administration).

## May 2023

**Product:** Prisma SASE — Identity and Access Management

Added [Custom Roles](/sase/api/iam/custom-roles/) and [Permission Sets](/sase/api/iam/permission-sets/) to the Identity and Access Management APIs. These endpoints enable fine-grained access control management for SASE tenants.

## April 2023

**Product:** Prisma Access — ZTNA Connector

Added [ZTNA Connector](/access/api/ztna/ztna-connector-apis/) APIs.

**Product:** Prisma Access — Configuration

Updated the [Prisma Access Configuration](/access/api/prisma-access-config/)
APIs with a hotfix. The `region_ipv6` object is no longer part of the payload
for [POST /sse/config/v1/mobile-agent/infrastructure-settings](/access/api/prisma-access-config/post-sse-config-v-1-mobile-agent-infrastructure-settings/).

Added a [usage note](/sase/docs/api-call/#unified-prisma-sd-wan-usage) for the Unified Prisma SD-WAN APIs.

## March 2023

**Product:** Prisma Access — Configuration

The Prisma Access Configuration APIs are updated with new APIs and changes to existing APIs.

- [/sse/config/v1/authentication-profiles](/category/access/api/prisma-access-config/authentication-profiles/) now supports a cloud (CIE) authentication profile.
- The Traffic Steering APIs have been renamed [Traffic Steering Rules](/category/access/api/prisma-access-config/traffic-steering-rules/).
- [/sse/config/v1/enable](/access/api/prisma-access-config/post-sse-config-v-1-enable/) is added to
  support API-based on-boarding of Prisma Access tenants. It creates the same default values as does
  the user interface when a new Prisma Access tenant is on-boarded.
- [Local User Groups](/category/access/api/prisma-access-config/local-user-groups/) APIs are added.
- [Service Connection Groups](/category/access/api/prisma-access-config/service-connection-groups/) APIs are added.
- APIs for BGP Routing are added to [Service Connections](/category/access/api/prisma-access-config/service-connections/).
- [Mobile Agent](/category/access/api/prisma-access-config/mobile-agent/) now includes:
  - [/sse/config/v1/mobile-agent/agent-versions](/access/api/prisma-access-config/get-sse-config-v-1-mobile-agent-agent-versions/) to retrieve available agent versions.
  - [/sse/config/v1/mobile-agent/agent-profiles](/access/api/prisma-access-config/post-sse-config-v-1-mobile-agent-agent-profiles/) to manage custom agent profiles.
  - [/sse/config/v1/mobile-agent/tunnel-profiles](/access/api/prisma-access-config/post-sse-config-v-1-mobile-agent-tunnel-profiles/) to manage custom tunnel profiles.

## December 2022

**Product:** Prisma SASE — Subscription Service

Published new [Subscription Service](/sase/api/subscription/) endpoints that allow you to allocate licenses to your tenant service groups.

## November 2022

**Product:** Prisma Access — Configuration

Updated the Prisma Access Configuration API to include [Mobile Agent](/category/access/api/prisma-access-config/mobile-agent/)
(Global Protect) endpoints.

## Late August 2022

**Product:** Prisma SASE — Aggregate Monitoring

Updates for the Aggregate Monitoring APIs:

- New DataResources endpoints such as
  [Get RN and SC site status count](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity/),
  [Get CDL connectivity status](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity-cdlstatus/),
  [Get mobile gateway connection status](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity-gatewaystatus/),
  [Get total GP licenses allocated](/sase/api/mt-monitor/get-mt-monitor-v-1-agg-serviceconnectivity-licenseallocated/),
  [Get top outliers](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity-topoutliers/), and
  [List unique GP users](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity-uniqueusers/).
- New query filters such as [CDLStatusRule](/sase/docs/filters/#cdlstatusrule) and [OutlierRule](/sase/docs/filters/#outlierrule).
- New properties such as
  [CDLStatusProperty](/sase/docs/filters/#cdlstatusproperty),
  [GatewayStatusProperty](/sase/docs/filters/#gatewaystatusproperty),
  [OutliersProperty](/sase/docs/filters/#outliersproperty), and
  [UniqueUserProperty](/sase/docs/filters/#uniqueuserproperty).
- New and revised request and response samples.

## August 2022

**Product:** Prisma SASE — Aggregate Monitoring, Prisma Access — Configuration

- Update to the Aggregate Monitoring APIs, including:

  - Added the required `X-PANW-Region` header parameter.
  - Added new [DataResources](/sase/api/mt-monitor/data-resource-api/) endpoints:
    - [mt/monitor/v1/agg/alerts](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-alerts)
    - [mt/monitor/v1/agg/applicationUsage](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-applicationusage)
    - [mt/monitor/v1/agg/applications](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-applications)
    - [mt/monitor/v1/agg/resource](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-resource)
    - [mt/monitor/v1/agg/threats](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-threats)
    - [mt/monitor/v1/agg/urlLogs](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-urllogs)
  - Moved `mt/monitor/v1/agg/custom/upgrades/list` to [InsightsResources](/sase/api/mt-monitor/insights-resource-api/).
  - Renamed query filters to user-friendly names.
  - Removed the `license_type` query parameter.

- Updated the Prisma Access Config APIs to add [traffic steering](/category/access/api/prisma-access-config/traffic-steering/).
  You can also now [import a certificate](/access/api/prisma-access-config/post-sse-config-v-1-certificates-import/).

## July 2022

**Product:** Prisma SD-WAN, Prisma Access — Configuration, Prisma Access — Insights

- First documentation release of the [Prisma SD-WAN APIs](/sdwan/docs/).
- Added `shared-infrastructure-settings`, `internal-dns-servers`, and `service-connections`
  endpoints to the [Prisma Access Configuration APIs](/access/api/prisma-access-config/). These are
  grouped under `Service Setup` which is renamed from `Remote Networks`.
- Removed the API Server Status APIs from [Prisma Access Insights](/category/access/api/insights/v-2-0/data-resource/) as they are not intended for customer consumption.

## April 2022

**Product:** Prisma Access — Configuration

The [Prisma Access configuration APIs](/access/api/prisma-access-config/)
are updated with new URIs that begin with `/sse`. Where each API used to begin with `/config/v1`, now they begin
begin with `/sse/config/v1`. For example, `/config/v1/certificate-profiles` is now
`/sse/config/v1/certificate-profiles`.

The following configuration endpoints have changed:

| Old                                  | New                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| /config/v1/load-config               | [/sse/config/v1/config-versions:load](/access/api/prisma-access-config/post-sse-config-v-1-config-versions-load/)                     |
| /config/v1/running/push              | [/sse/config/v1/config-versions/candidate:push](/access/api/prisma-access-config/post-sse-config-v-1-config-versions-candidate-push/) |
| /config/v1/config-versions/candidate | [/sse/config/v1/config-versions](/access/api/prisma-access-config/get-sse-config-v-1-config-versions-version/)                        |

Also, [/sse/config/v1/config-versions/candidate:push](/access/api/prisma-access-config/post-sse-config-v-1-config-versions-candidate-push/)
formerly had a field `devices` in its request body. This is now `folders`.

The following new API is added:

- [/sse/config/v1/config-versions/{version}](/access/api/prisma-access-config/get-sse-config-v-1-config-versions-version/)

Throughout the entire service, APIs that retrieve or edit a resource by ID now no longer support the
`folder` query parameter. See, for example [/sse/config/v1/addresses/{id}](/access/api/prisma-access-config/get-sse-config-v-1-addresses/).

## March 2022

**Product:** Prisma SASE

First public release of the Prisma SASE APIs. This release provides support for
[tenant](/sase/docs/tenant-service-groups) and
[identity management and role management](/sase/docs/roles),
offers a common method for
[authentication and API access](/sase/docs/api-call),
[subscription monitoring](/sase/api/subscription),
[Prisma Access configuration](/access/docs/prisma-access-config/)
and [aggregate monitoring](/sase/docs/mt-monitor).

This release supports Managed Security Service Providers (MSSPs).
