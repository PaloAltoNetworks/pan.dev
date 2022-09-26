---
id: restapi_qs
title: REST API Quickstart
hide_title: false
description: Overview of the PAN-OS API
keywords:
  - pan-os
  - panos
  - api
  - rest
  - quickstart
image: /panos/img/panos_apis.svg
---

:::note
The following guide will walk you through sending API requests to the PAN-OS® REST API using <a href="https://curl.haxx.se/docs/httpscripting.html" target="_blank">cURL</a>, although you may optionally use another API tool such as <a href="https://www.getpostman.com/" target="_blank">Postman</a>, <a href="https://insomnia.rest/" target="_blank">Insomnia</a> or <a href="http://restclient.net/" target="_blank">RESTClient</a>.
:::

## Enable API Access

1. Select an Admin Role profile.

   - Go to Device -> Admin Roles and select or create an admin role.

2. Select features available to the admin role.

   - Select the XML API tab.
   - Enable or disable XML API features from the list, such as Report, Log, and Configuration.
   - Select OK to confirm your change.

3. Assign the admin role to an administrator account.

   _Consult the [official product documentation](https://docs.paloaltonetworks.com/pan-os/10-1/pan-os-panorama-api/get-started-with-the-pan-os-xml-api/get-your-api-key.html) for more details._

## Get Your API Key

1. Make a `GET` or `POST` request to the firewall’s hostname or IP address using the administrative credentials and the `type=keygen` URL query argument.

   _Be sure to replace `<firewall>` `<username>` and `<password>` with actual values._

```shell-session
curl -k -X GET 'https://<firewall>/api/?type=keygen&user=<username>&password=<password>'
```

_or_

```shell-session
curl -k -X POST 'https://<firewall>/api/?type=keygen&user=<username>&password=<password>'
```

A successful API call returns `status="success"` along with the API key within the `key` element:

```xml
<response status="success">
  <result>
    <key>gJlQWE56987nBxIqyfa62sZeRtYuIo2BgzEA9UOnlZBhU</key>
  </result>
</response>
```

## Access the PAN-OS® REST API

The PAN-OS® REST API URL format includes a base path and endpoint:

```console
https://<IP address or FQDN>/restapi/<PAN-OS version>/<resource endpoint>
```

Available resource endpoints:

```console

# OBJECTS

/restapi/9.0/Objects/Addresses
/restapi/9.0/Objects/AddressGroups
/restapi/9.0/Objects/Regions
/restapi/9.0/Objects/Applications
/restapi/9.0/Objects/ApplicationGroups
/restapi/9.0/Objects/ApplicationFilters
/restapi/9.0/Objects/Services
/restapi/9.0/Objects/ServiceGroups
/restapi/9.0/Objects/Tags
/restapi/9.0/Objects/GlobalProtectHIPObjects
/restapi/9.0/Objects/GlobalProtectHIPProfiles
/restapi/9.0/Objects/ExternalDynamicLists
/restapi/9.0/Objects/CustomDataPatterns
/restapi/9.0/Objects/CustomSpywareSignatures
/restapi/9.0/Objects/CustomVulnerabilitySignatures
/restapi/9.0/Objects/CustomURLCategories
/restapi/9.0/Objects/AntivirusSecurityProfiles
/restapi/9.0/Objects/AntiSpywareSecurityProfiles
/restapi/9.0/Objects/VulnerabilityProtectionSecurityProfiles
/restapi/9.0/Objects/URLFilteringSecurityProfiles
/restapi/9.0/Objects/FileBlockingSecurityProfiles
/restapi/9.0/Objects/WildFireAnalysisSecurityProfiles
/restapi/9.0/Objects/DataFilteringSecurityProfiles
/restapi/9.0/Objects/DoSProtectionSecurityProfiles
/restapi/9.0/Objects/SecurityProfileGroups
/restapi/9.0/Objects/LogForwardingProfiles
/restapi/9.0/Objects/AuthenticationEnforcements
/restapi/9.0/Objects/DecryptionProfiles
/restapi/9.0/Objects/DecryptionForwardingProfiles
/restapi/9.0/Objects/Schedules

# POLICIES

/restapi/9.0/Policies/SecurityRules
/restapi/9.0/Policies/NATRules
/restapi/9.0/Policies/QoSRules
/restapi/9.0/Policies/PolicyBasedForwardingRules
/restapi/9.0/Policies/DecryptionRules
/restapi/9.0/Policies/TunnelInspectionRules
/restapi/9.0/Policies/ApplicationOverrideRules
/restapi/9.0/Policies/AuthenticationRules
/restapi/9.0/Policies/DoSRules
```
