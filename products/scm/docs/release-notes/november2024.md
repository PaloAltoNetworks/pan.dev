---
id: november2024
title: November 2024
description: Strata Cloud Manager Release Notes
hide_title: False
hide_table_of_contents: false
keywords:
  - sase
---

This Strata Cloud Manager release includes a new [product landing page](/strata-cloud-manager). 
The configuration APIs have been expanded to provide configuration of the SASE,
NGFW, and Cloud NGFW platforms. New API endpoints and a new FQDN are also now available. 

## Breaking Changes
There are no changes to the APIs in this release that warrants immediate action.  However, several 
changes in behavior have been introduced in a manner that continues to support the original API behavior. 
These changes are detailed below and are reflected in the updated API documentation.

:::note

While the changes in API behavior were implemented to be backward compatible, there is no guarantee that we 
will continue to support the original API behavior beyond July 2025.  Therefore, you are encouraged to 
identify how these changes may affect your client integrations and refactor them accordingly within that time.

:::

## Changes in Behavior

### New API platform FQDN
The FQDN for all Strata Cloud Manager APIs has been updated to reflect our broader platform capabilities.  The 
new FQDN is `api.strata.paloaltonetworks.com`.  The original FQDN of `api.sase.paloaltonetworks.com` will continue 
to work for the time being.  However, all API documentation, tooling, SDKs, and other materials will be updated to 
reflect the new FQDN.

### Restructuring of configuration API base paths
Many of the APIs available in Strata Cloud Manager predate it's ability to manage anything other than Prisma Access. 
As such, there were a smaller number of API endpoints that shared a base path of `/sse/config/v1`.  As the platform 
grew to cover more enforcement factors such as hardware and software NGFW, it became apparent that the APIs needed 
to be restructured along functional rather than product lines.

All configuration APIs for Strata Cloud Manager are now split into the following functional paths:

| Function | Old base path | New base path |
| --------- | -------- | --------- |
| Configuration setup | n/a | `/config/setup/v1` |
| Prisma Access deployment | `/sse/config/v1` | `/config/deployment/v1`  |
| Prisma Access Mobile Users configuration | `/sse/config/v1/mobile-agent` | `/config/mobile-agent/v1` |
| Security configuration | `/sse/config/v1` | `/config/security/v1` |
| Objects configuration | `/sse/config/v1` | `/config/objects/v1` |
| Network configuration | `/sse/config/v1` | `/config/network/v1` |
| Identity services | `/sse/config/v1` | `/config/identity/v1` |
| NGFW device settings | n/a | `/config/device/v1` |
| Configuration operations | `/sse/config/v1` | `/config/operations/v1` |

### Removal of query params for POST, PUT, and DELETE operations
Query parameters have been used previously with Strata Cloud Manager configuration APIs to specify the location of 
the configuration resource.  While query parameters will continue to be used for filtering the results of a `GET` 
operation, the preferred method of specifying the location of a configuration resource via API will be in a `folder`, 
`snippet`, or `device` attribution within the `POST` or `PUT` payload.

A path parameter containing the UUID of an existing resource may be used in a path parameter for `PUT` and `DELETE` 
operations.

> Example:

    PUT /config/objects/v1/tags/:aaa-bbb-cccc-dddd
    {
        "name": "My Tag",
        "folder": "Datacenter Firewalls",
        "comments": "This is my datacenter firewalls tag.",
        "color": "cyan"
    }

### Introduction of security rule types

The [security-rules](/scm/api/config/sase/security/list-rules/) API endpoint has been expanded to support Web Security rules.  A `type`
attribute has been added to the `security-rules` object schema to discern between traditional
security rules and Web Security rules.

This field is being introduced in preparation for a unified rulebase user experience.  Traditional
security rules will be identified by the type `security` and Web security rules will be identified by
the type `internet`.  Both will be accessible through the `/config/security/v1/security-rules`
endpoint, but editing of `internet` rules will be supported in a future release.

The `type` attribute will remain read-only until the unified rulebase feature is fully implemented
and any new rules created via POST operation will be of type `security` by default.

## API Specific Changes

### Strata Cloud Manager Setup APIs
New API endpoints have been introduced to manage configuration contructs in Strata Cloud Manager, including:
- [/config/setup/v1/folders](/scm/api/config/sase/setup/list-folders/)
- [/config/setup/v1/snippets](/scm/api/config/sase/setup/list-snippets/)
- [/config/setup/v1/devices](/scm/api/config/sase/setup/list-devices/)
- [/config/setup/v1/labels](/scm/api/config/sase/setup/list-labels/)
- [/config/setup/v1/variables](/scm/api/config/sase/setup/list-variables/)

###  NGFW Network Configuration APIs
The Strata Cloud Manager configuration APIs now include new endpoints for managing 
[NGFW network settings](/scm/api/config/ngfw/network/network-api/), including:
- /config/network/v1/aggregate-ethernet-interfaces
- /config/network/v1/auto-vpn-clusters
- /config/network/v1/auto-vpn-monitor
- /config/network/v1/auto-vpn-push
- /config/network/v1/auto-vpn-settings
- /config/network/v1/bgp-address-family-profiles
- /config/network/v1/bgp-auth-profiles
- /config/network/v1/bgp-filtering-profiles
- /config/network/v1/bgp-redistribution-profiles
- /config/network/v1/bgp-route-map-redistributions
- /config/network/v1/bgp-route-maps
- /config/network/v1/dhcp-interfaces
- /config/network/v1/dns-proxies
- /config/network/v1/ethernet-interfaces
- /config/network/v1/interface-management-profiles
- /config/network/v1/layer2-subinterfaces
- /config/network/v1/layer3-subinterfaces
- /config/network/v1/link-tags
- /config/network/v1/logical-routers
- /config/network/v1/loopback-interfaces
- /config/network/v1/net-rules
- /config/network/v1/ospf-auth-profiles
- /config/network/v1/pbf-rules
- /config/network/v1/route-access-lists
- /config/network/v1/route-community-lists
- /config/network/v1/route-path-access-lists
- /config/network/v1/route-prefix-lists
- /config/network/v1/sdwan-error-correction-profiles
- /config/network/v1/sdwan-path-quality-profiles
- /config/network/v1/sdwan-rules
- /config/network/v1/sdwan-saas-quality-profiles
- /config/network/v1/sdwan-traffic-distribution-profiles
- /config/network/v1/tunnel-interfaces
- /config/network/v1/tunnel-monitor-profiles
- /config/network/v1/vlan-interfaces
- /config/network/v1/vpn-psk-refresh
- /config/network/v1/vpn-cluster-history
- /config/network/v1/zones
- /config/network/v1/zone-protection-profiles

###  NGFW Device Configuration APIs
The Strata Cloud Manager configuration APIs now include new endpoints for managing 
[NGFW device settings](/scm/api/config/ngfw/device/device-api/), including:
- /config/device/v1/authentication-settings
- /config/device/v1/content-id-settings
- /config/device/v1/device-redistribution-collector
- /config/device/v1/general-settings
- /config/device/v1/ha-configurations
- /config/device/v1/ha-devices
- /config/device/v1/management-interface
- /config/device/v1/motd-banner-settings
- /config/device/v1/service-route
- /config/device/v1/service-settings
- /config/device/v1/session-settings
- /config/device/v1/session-timeouts
- /config/device/v1/tcp-settings
- /config/device/v1/update-schedule
- /config/device/v1/vpn-settings

### Log Forwarding Configuration APIs
The Strata Cloud Manager configuration APIs now include support for custom log forwarding profiles.
- [/config/objects/v1/log-forwarding-profiles](/scm/api/config/sase/objects/list-log-forwarding-profiles/)
- [/config/objects/v1/log-format-fields](/scm/api/config/sase/objects/list-log-format-fields/)
- [/config/objects/v1/http-server-profiles](/scm/api/config/sase/objects/list-http-server-profiles/)
- [/config/objects/v1/syslog-server-profiles](/scm/api/config/sase/objects/list-syslog-server-profiles/)

### DoS Protection Configuration APIs
The Strata Cloud Manager configuration APIs now include support for managing DoS Protection profiles.
- [/config/security/v1/dos-protection-profiles](/scm/api/config/sase/security/list-do-s-protection-profiles/)
- [/config/security/v1/dos-protection-rules](/scm/api/config/sase/security/list-do-s-protection-rules/)

