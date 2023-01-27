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

## Alerts

- open_alerts_count_timeseries. Custom resource. For an example, see [Open Alerts Over Time](/access/docs/insights/examples/alerts-dashboard/open-alerts/).
- prisma_sase_external_alerts_current. General resource. For examples, see:
  - [External Alerts Current](/access/docs/insights/examples/alerts-dashboard/external-alerts-current/)
  - [Current Alerts Generated](/access/docs/insights/examples/alerts-dashboard/current-alerts-generated/)
  - [Raised Alerts Over Time](/access/docs/insights/examples/alerts-dashboard/raised-alerts/)
  - [Cleared Alerts Over Time](/access/docs/insights/examples/alerts-dashboard/cleared-alerts/)

## Mobile users

- connected_user_count. Custom resource. For an example, see [Connected User Count](/access/docs/insights/examples/mobile-users-dashboard/connected-user-count/).
- current_connected_user_list. Custom resource. For an example, see [Current Connected User List](/access/docs/insights/examples/mobile-users-dashboard/current-connected-user-list/).
- user_list. Custom resource. For an example, see [GlobalProtect Mobile Users List](/access/docs/insights/examples/mobile-users-dashboard/mu-users-list/).

## Prisma Access Locations

- edge_location_current_status. General resource. For examples, see:
  - [GlobalProtect Mobile User Edge Location Status](/access/docs/insights/examples/pa-locations-dashboard/location-mu-status/)
  - [Remote Network Status](/access/docs/insights/examples/pa-locations-dashboard/location-rn-status/)
  - [Service Connection Status](/access/docs/insights/examples/pa-locations-dashboard/location-sc-status/)
  - [Explicit Proxy Mobile User Status](/access/docs/insights/examples/pa-locations-dashboard/location-ep-status/)
- location_gp_mobile_users_logins. Custom resource. For an example, see [GlobalProtect Mobile Users Login](/access/docs/insights/examples/pa-locations-dashboard/location-gp-mobile-users-logins/).
- location_rn_bandwidth. Custom resource. For an example, see [Remote Network Bandwidth](/access/docs/insights/examples/pa-locations-dashboard/location-rn-bandwidth/).
- location_sc_bandwidth. Custom resource. For an example, see [Service Connection Bandwidth Consumption](/access/docs/insights/examples/pa-locations-dashboard/location-sc-bandwidth/).

## Remote networks

- tunnel_status. General resource. For an example, see [Remote Network Bandwidth Consumption Over Time](/access/docs/insights/examples/remote-networks-dashboard/rn-tunnel-status/).
- rn_bandwidth_allocated. Custom resource. For an example, see [Remote Network Bandwidth Allocated](/access/docs/insights/examples/remote-networks-dashboard/rn-bandwidth-allocated/).
- rn_list. Custom resource. For an example, see [Remote Network Site List](/access/docs/insights/examples/remote-networks-dashboard/rn-list/).

## Service connections

- tunnel_status. General resource. For an example, see [ Service Connection Bandwidth Consumption](/access/docs/insights/examples/service-connections-dashboard/sc-bandwidth-consumption/).
- sc_list. Custom resource. For an example, see [Service Connection List](/access/docs/insights/examples/service-connections-dashboard/sc_list/).

## Tunnels

- tunnel_list. Custom resource. For an example, see [Tunnel List](/access/docs/insights/examples/tunnels-dashboard/tunnel_list/).
