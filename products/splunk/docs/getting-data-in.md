---
id: getting-data-in
title: Getting Data Into Splunk 
---
:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::
# Getting Data Into Splunk

Splunk can collect data from Palo Alto Networks products, each providing a wealth of visibility and control.

#### Firewall and Panorama

Secure the network domain. Syslog network and system health events to Splunk.

- [More information about Next-generation Firewall](https://www.paloaltonetworks.com/products/secure-the-network/next-generation-firewall)
- [More information about Panorama](https://www.paloaltonetworks.com/products/management/panorama)
- [Bring Firewall and Panorama data into Splunk](../firewalls-panorama)

#### Cortex XDR

Advanced threat detection. View Cortex XDR incidents in Splunk via API.
- [More information about Cortex XDR](https://www.paloaltonetworks.com/cortex/cortex-xdr)
- [View Cortex XDR Incidents in Splunk](../cortex-hec)


#### Cortex Data Lake via HTTP Event Collector(HEC)

Cloud based log management. Collect events directly from Cortex Data Lake using HTTP Event Collector(HEC).

- [More information about Cortex Data Lake](https://www.paloaltonetworks.com/cortex/cortex-data-lake)
- [Retrieve Cortex Data Lake Logs](../cortex-hec)

#### IOT Security

Comprehensive IOT security. Collect IoT alerts and vulnerabilities via API.

- [More information about IoT Security](https://www.paloaltonetworks.com/network-security/iot-security)
- [Bring IOT Security into Splunk](../iot-security)
 
#### Aperture

Secure your enterprise SaaS application. Splunk reaches out to the Aperture logging API to collect incidents and activity from your SaaS apps.

- [More information about Aperture SaaS Protection](https://www.paloaltonetworks.com/products/secure-the-cloud/aperture)
- [Bring Aperture data into Splunk](../aperture)

#### AutoFocus and MineMeld
:::caution Deprecated

MineMeld and AutoFocus has been deprecated as of 7.0.0

:::

Threat Intelligence to help prioritize and contextualize the rest of your data in Splunk. AutoFocus tags are collected via the AutoFocus API and threat indicators are collected from a MineMeld output feed.

- [More information about AutoFocus](https://www.paloaltonetworks.com/products/secure-the-network/subscriptions/autofocus)
- [More information about MineMeld](https://www.paloaltonetworks.com/products/secure-the-network/subscriptions/minemeld)
- [Bring AutoFocus and MineMeld data into Splunk](../autofocus-and-minemeld)

#### Traps Endpoint Protection

:::info

Traps Endpoint has been deprecated and replaced with Cortex XDR.

:::

Secure the endpoint domain. Syslog endpoint security and operations events to Splunk.

- [More information about Traps Endpoint Protection](https://www.paloaltonetworks.com/products/secure-the-endpoint/traps)
- [Bring Traps data into Splunk](../firewalls-panorama)

