---
id: query_language_resources
title: Query Language Resources
description: Prisma Access Insights API query language resources
sidebar_label: Resources
---

You can create queries against information that is available to your Prisma Access Insights tenant. Your
tenant can contain both general and custom resources. Custom resources are automatically
created for you based on your usage patterns.

You use different REST calls, depending on whether you are querying for
general or custom resources:

| Customer      | API Version | API                                                                                                                                                                                                                                        |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MSSP          | 2.0         | [Resource Query](/access/api/insights/get-api-sase-v-2-0-resource-resource-name)<br />[Resource Custom Query](/access/api/insights/get-api-sase-v-2-0-resource-custom-feature-name-request-name)                                           |
| Single Tenant | 1.0         | [Resource Query](/access/api/insights/1.0/get-api-sase-v-1-0-resource-tenant-tenant-id-resource-name)<br />[Resource Custom Query](/access/api/insights/1.0/get-api-sase-v-1-0-resource-tenant-tenant-id-custom-feature-name-request-name) |

## General Resources

The following _general_ resource queries are supported:

### Remote networks

- tunnel-status. For an example, see [Remote Network Bandwidth Consumption Over Time](/access/docs/insights/examples/remote-networks-dashboard/rn-tunnel-status/).

### Service connections

- sc-bandwidth-consumption. For an example, see [ Service Connection Bandwidth Consumption](/access/docs/insights/examples/service-connections-dashboard/sc-bandwidth-consumption/).

### Alerts

- external-alerts-current. For an example, see [External Alerts Current](/access/docs/insights/examples/alerts-dashboard/external-alerts-current/).

- current-alerts-generated. For an example, see [Current Alerts Generated](/access/docs/insights/examples/alerts-dashboard/current-alerts-generated/).

- open-alerts-overtime. For an example, see [Open Alerts Over Time](/access/docs/insights/examples/alerts-dashboard/open-alerts-overtime/).

- raised-alerts-over-time. For an example, see [Raised Alerts Over Time](/access/docs/insights/examples/alerts-dashboard/raised-alerts-over-time/).

- cleared-alerts-over-time. For an example, see [Cleared Alerts Over Time](/access/docs/insights/examples/alerts-dashboard/cleared-alerts-over-time/).

### Prisma Access Locations

- location-mu-status. For an example, see [GlobalProtect Mobile User Edge Location Status](/access/docs/insights/examples/pa-locations-dashboard/location-mu-status/).

- location-rn-status. For an example, see [Remote Network Status](/access/docs/insights/examples/pa-locations-dashboard/location-rn-status/).

- location-sc-status. For an example, see [Service Connection Status](/access/docs/insights/examples/pa-locations-dashboard/location-sc-status/).

- location-ep-status. For an example, see [Explicit Proxy Mobile User Status](/access/docs/insights/examples/pa-locations-dashboard/location-ep-status/).

## Custom Resources

The following _custom_ resource queries are supported:

### Custom mobile users

- connected-user-count. For an example, see [Connected User Count](/access/docs/insights/examples/mobile-users-dashboard/connected-user-count/).

- current-connected-user-list. For an example, see [Current Connected User List](/access/docs/insights/examples/mobile-users-dashboard/current-connected-user-list/).

- mu-users-list. For an example, see [GlobalProtect Mobile Users List](/access/docs/insights/examples/mobile-users-dashboard/mu-users-list/).

### Custom remote networks

- rn-bandwidth-allocated. For an example, see [Remote Network Bandwidth Allocated](/access/docs/insights/examples/remote-networks-dashboard/rn-bandwidth-allocated/).

- rn-list. For an example, see [Remote Network Site List](/access/docs/insights/examples/remote-networks-dashboard/rn-list/).

### Custom service connections

- sc-list. For an example, see [Service Connection List](/access/docs/insights/examples/service-connections-dashboard/sc_list/).

### Custom Prisma Access Locations

- location-gp-mobile-users-logins. For an example, see [GlobalProtect Mobile Users Login](/access/docs/insights/examples/pa-locations-dashboard/location-gp-mobile-users-logins/).

- location-rn-bandwidth. For an example, see [Remote Network Bandwidth](/access/docs/insights/examples/pa-locations-dashboard/location-rn-bandwidth/).

- location-sc-bandwidth. For an example, see [Service Connection Bandwidth Consumption](/access/docs/insights/examples/pa-locations-dashboard/location-sc-bandwidth/).

## Custom tunnels

- tunnel-list. For an example, see [Tunnel List](/access/docs/insights/examples/tunnels-dashboard/tunnel_list/).
