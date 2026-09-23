---
id: release-notes
title: Release Notes
description: Cloud-Delivered Security Services Release Notes
hide_title: true
hide_table_of_contents: false
keywords:
  - security subscription
---

# CDSS API Release Notes

These release notes highlight API changes made for the various CDSS (Cloud-Delivered Security Subscription Services) APIs.

In addition, you can refer to the TechDocs [product documentation](https://docs.paloaltonetworks.com/cdss) for release information about non-API feature enhancements:

See also the [change log](../../cdss/docs/release-notes/changelog) for information on all changes to this API documentation, some of which have
occurred in between API product releases.

## August 2026

### Enterprise DLP — DLP API v2 (New)

The Enterprise DLP API v2 provides full lifecycle management of DLP data patterns, data profiles, dictionaries, document types, EDM datasets, endpoint policies, peripherals, OCR enablement, and incident management.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/data-patterns` | List data patterns |
| `POST` | `/v2/api/data-patterns` | Create a data pattern |
| `GET` | `/v2/api/data-patterns/{resourceId}` | Get a data pattern |
| `PUT` | `/v2/api/data-patterns/{resourceId}` | Update a data pattern |
| `DELETE` | `/v2/api/data-patterns/{resourceId}` | Delete a data pattern |

<details><summary>View all endpoints (51)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/data-patterns` | List data patterns |
| `POST` | `/v2/api/data-patterns` | Create a data pattern |
| `GET` | `/v2/api/data-patterns/{resourceId}` | Get a data pattern |
| `PUT` | `/v2/api/data-patterns/{resourceId}` | Update a data pattern |
| `PATCH` | `/v2/api/data-patterns/{resourceId}` | Patch a data pattern |
| `DELETE` | `/v2/api/data-patterns/{resourceId}` | Delete a data pattern |
| `GET` | `/v2/api/data-profiles` | List data profiles |
| `POST` | `/v2/api/data-profiles` | Create a data profile |
| `GET` | `/v2/api/data-profiles/{resourceId}` | Get a data profile |
| `PUT` | `/v2/api/data-profiles/{resourceId}` | Update a data profile |
| `PATCH` | `/v2/api/data-profiles/{resourceId}` | Patch a data profile |
| `GET` | `/v2/api/dictionaries` | List dictionaries |
| `POST` | `/v2/api/dictionaries` | Create a dictionary |
| `GET` | `/v2/api/dictionaries/{resourceId}` | Get a dictionary |
| `PUT` | `/v2/api/dictionaries/{resourceId}` | Update a dictionary |
| `PATCH` | `/v2/api/dictionaries/{resourceId}` | Patch a dictionary |
| `DELETE` | `/v2/api/dictionaries/{resourceId}` | Delete a dictionary |
| `GET` | `/v2/api/document-types` | List document types |
| `POST` | `/v2/api/document-types` | Create a document type |
| `GET` | `/v2/api/document-types/{resourceId}` | Get a document type |
| `PUT` | `/v2/api/document-types/{resourceId}` | Update a document type |
| `PATCH` | `/v2/api/document-types/{resourceId}` | Patch a document type |
| `DELETE` | `/v2/api/document-types/{resourceId}` | Delete a document type |
| `GET` | `/v2/api/edm-datasets` | List EDM datasets |
| `GET` | `/v2/api/edm-datasets/{resourceId}` | Get an EDM dataset |
| `DELETE` | `/v2/api/edm-datasets/{resourceId}` | Delete an EDM dataset |
| `GET` | `/v2/api/endpoint-policies` | List endpoint policies |
| `POST` | `/v2/api/endpoint-policies` | Create an endpoint policy |
| `GET` | `/v2/api/endpoint-policies/{resourceId}` | Get an endpoint policy |
| `PUT` | `/v2/api/endpoint-policies/{resourceId}` | Update an endpoint policy |
| `PATCH` | `/v2/api/endpoint-policies/{resourceId}` | Patch an endpoint policy |
| `DELETE` | `/v2/api/endpoint-policies/{resourceId}` | Delete an endpoint policy |
| `GET` | `/v2/api/peripherals` | List peripherals |
| `POST` | `/v2/api/peripherals` | Create a peripheral |
| `GET` | `/v2/api/peripherals/{resourceId}` | Get a peripheral |
| `PUT` | `/v2/api/peripherals/{resourceId}` | Update a peripheral |
| `DELETE` | `/v2/api/peripherals/{resourceId}` | Delete a peripheral |
| `GET` | `/v2/api/ocr` | Get OCR enablement status |
| `PUT` | `/v2/api/ocr` | Update OCR enablement |
| `GET` | `/v2/api/data-filtering-profiles` | List data filtering profiles |
| `GET` | `/v2/api/data-filtering-profiles/{resourceId}` | Get a data filtering profile |
| `PUT` | `/v2/api/data-filtering-profiles/{resourceId}` | Update a data filtering profile |
| `GET` | `/v1/api/incidents/assignee` | List all incident assignees |
| `PUT` | `/v1/api/incidents/assignee` | Create or update an incident assignee |
| `GET` | `/v1/api/incidents/assignee/{assigneeId}` | Get an assignee by ID |
| `PUT` | `/v1/api/incidents/{incidentID}/assignee` | Assign an incident to a user |
| `PUT` | `/v1/api/incidents/{incidentID}/notes` | Update incident notes |
| `DELETE` | `/v1/api/incidents/{incidentID}/notes` | Delete incident notes |
| `PUT` | `/v1/api/incidents/{incidentID}/resolution-status` | Update incident resolution status |
| `GET` | `/v2/api/incidents` | List DLP incidents |
| `GET` | `/v2/api/incidents/{incidentID}` | Get details for a specific incident |
| `GET` | `/v1/public/report/{reportId}` | Retrieve a DLP report |

</details>

---

### Enterprise DLP — DLP API (Beta) (New)

The DLP API Beta introduces a token-based pagination model for high-volume incident retrieval and bulk incident management.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `POST` | `/v4/api/incidents` | Retrieve initial incident records with a token |
| `GET` | `/v4/api/incidents` | Retrieve paginated incident records using a token |
| `POST` | `/v4/api/incidents/download` | Get a signed download URL for incidents |
| `POST` | `/v4/api/incidents/management` | Update key details for multiple incidents |
| `GET` | `/v4/api/incidents/{id}` | Retrieve incident details by ID |

---

## March 2026

### Enterprise DLP — Data Patterns API (New)

Manage custom data patterns used in DLP policies to detect sensitive content.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/data-patterns` | List data patterns |
| `POST` | `/v2/api/data-patterns` | Create a data pattern |
| `GET` | `/v2/api/data-patterns/{resourceId}` | Get a data pattern |
| `PUT` | `/v2/api/data-patterns/{resourceId}` | Update a data pattern |
| `PATCH` | `/v2/api/data-patterns/{resourceId}` | Patch a data pattern |

<details><summary>View all endpoints (6)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/data-patterns` | List data patterns |
| `POST` | `/v2/api/data-patterns` | Create a data pattern |
| `GET` | `/v2/api/data-patterns/{resourceId}` | Get a data pattern |
| `PUT` | `/v2/api/data-patterns/{resourceId}` | Update a data pattern |
| `PATCH` | `/v2/api/data-patterns/{resourceId}` | Patch a data pattern |
| `DELETE` | `/v2/api/data-patterns/{resourceId}` | Delete a data pattern |

</details>

---

### Enterprise DLP — Data Profiles API (New)

Create and manage data profiles that group data patterns into reusable classification policies.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/data-profiles` | List data profiles |
| `POST` | `/v2/api/data-profiles` | Create a data profile |
| `GET` | `/v2/api/data-profiles/{resourceId}` | Get a data profile |
| `PUT` | `/v2/api/data-profiles/{resourceId}` | Update a data profile |
| `PATCH` | `/v2/api/data-profiles/{resourceId}` | Patch a data profile |

---

### Enterprise DLP — Dictionaries API (New)

Manage custom dictionaries used to match terms and phrases in DLP policies.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/dictionaries` | List dictionaries |
| `POST` | `/v2/api/dictionaries` | Create a dictionary |
| `GET` | `/v2/api/dictionaries/{resourceId}` | Get a dictionary |
| `PUT` | `/v2/api/dictionaries/{resourceId}` | Update a dictionary |
| `PATCH` | `/v2/api/dictionaries/{resourceId}` | Patch a dictionary |

<details><summary>View all endpoints (6)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/dictionaries` | List dictionaries |
| `POST` | `/v2/api/dictionaries` | Create a dictionary |
| `GET` | `/v2/api/dictionaries/{resourceId}` | Get a dictionary |
| `PUT` | `/v2/api/dictionaries/{resourceId}` | Update a dictionary |
| `PATCH` | `/v2/api/dictionaries/{resourceId}` | Patch a dictionary |
| `DELETE` | `/v2/api/dictionaries/{resourceId}` | Delete a dictionary |

</details>

---

### Enterprise DLP — Document Types API (New)

Manage document type definitions to enable fingerprint-based detection of structured documents.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/document-types` | List document types |
| `POST` | `/v2/api/document-types` | Create a document type |
| `GET` | `/v2/api/document-types/{resourceId}` | Get a document type |
| `PUT` | `/v2/api/document-types/{resourceId}` | Update a document type |
| `PATCH` | `/v2/api/document-types/{resourceId}` | Patch a document type |

<details><summary>View all endpoints (6)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/document-types` | List document types |
| `POST` | `/v2/api/document-types` | Create a document type |
| `GET` | `/v2/api/document-types/{resourceId}` | Get a document type |
| `PUT` | `/v2/api/document-types/{resourceId}` | Update a document type |
| `PATCH` | `/v2/api/document-types/{resourceId}` | Patch a document type |
| `DELETE` | `/v2/api/document-types/{resourceId}` | Delete a document type |

</details>

---

### Enterprise DLP — EDM Datasets API (New)

Manage Exact Data Match (EDM) datasets used for structured data fingerprinting in DLP policies.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/edm-datasets` | List EDM datasets |
| `GET` | `/v2/api/edm-datasets/{resourceId}` | Get an EDM dataset |
| `DELETE` | `/v2/api/edm-datasets/{resourceId}` | Delete an EDM dataset |

---

### Enterprise DLP — Endpoint Policies API (New)

Create and manage endpoint DLP policies to control data movement on managed devices.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/endpoint-policies` | List endpoint policies |
| `POST` | `/v2/api/endpoint-policies` | Create an endpoint policy |
| `GET` | `/v2/api/endpoint-policies/{resourceId}` | Get an endpoint policy |
| `PUT` | `/v2/api/endpoint-policies/{resourceId}` | Update an endpoint policy |
| `PATCH` | `/v2/api/endpoint-policies/{resourceId}` | Patch an endpoint policy |

<details><summary>View all endpoints (6)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/endpoint-policies` | List endpoint policies |
| `POST` | `/v2/api/endpoint-policies` | Create an endpoint policy |
| `GET` | `/v2/api/endpoint-policies/{resourceId}` | Get an endpoint policy |
| `PUT` | `/v2/api/endpoint-policies/{resourceId}` | Update an endpoint policy |
| `PATCH` | `/v2/api/endpoint-policies/{resourceId}` | Patch an endpoint policy |
| `DELETE` | `/v2/api/endpoint-policies/{resourceId}` | Delete an endpoint policy |

</details>

---

### Enterprise DLP — Incidents API (New)

Retrieve and manage DLP incidents, assignees, notes, and resolution status.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v1/api/incidents/assignee` | List all incident assignees |
| `PUT` | `/v1/api/incidents/assignee` | Create or update an incident assignee |
| `GET` | `/v1/api/incidents/assignee/{assigneeId}` | Get an assignee by ID |
| `PUT` | `/v1/api/incidents/{incidentID}/assignee` | Assign an incident to a user |
| `PUT` | `/v1/api/incidents/{incidentID}/notes` | Update incident notes |

<details><summary>View all endpoints (9)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v1/api/incidents/assignee` | List all incident assignees |
| `PUT` | `/v1/api/incidents/assignee` | Create or update an incident assignee |
| `GET` | `/v1/api/incidents/assignee/{assigneeId}` | Get an assignee by ID |
| `PUT` | `/v1/api/incidents/{incidentID}/assignee` | Assign an incident to a user |
| `PUT` | `/v1/api/incidents/{incidentID}/notes` | Update incident notes |
| `DELETE` | `/v1/api/incidents/{incidentID}/notes` | Delete incident notes |
| `PUT` | `/v1/api/incidents/{incidentID}/resolution-status` | Update incident resolution status |
| `GET` | `/v2/api/incidents` | List DLP incidents |
| `GET` | `/v2/api/incidents/{incidentID}` | Get details for a specific incident |

</details>

---

### Enterprise DLP — OCR Enablement API (New)

Retrieve and configure optical character recognition (OCR) enablement for image-based DLP scanning.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/ocr` | Get OCR enablement status |
| `PUT` | `/v2/api/ocr` | Update OCR enablement |

---

### Enterprise DLP — Peripherals API (New)

Manage peripheral device definitions used in endpoint DLP policies to control removable media.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v2/api/peripherals` | List peripherals |
| `POST` | `/v2/api/peripherals` | Create a peripheral |
| `GET` | `/v2/api/peripherals/{resourceId}` | Get a peripheral |
| `PUT` | `/v2/api/peripherals/{resourceId}` | Update a peripheral |
| `DELETE` | `/v2/api/peripherals/{resourceId}` | Delete a peripheral |

---

### Enterprise DLP — Reports API (New)

Retrieve DLP report details by report ID.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/v1/public/report/{reportId}` | Retrieve a DLP report |

---

## November 2023

### Enterprise DLP — Email DLP API (New)

The Email DLP API enables retrieval and management of DLP incidents generated by email traffic.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/incident/api/v1/incidents` | Get email DLP incident details |
| `PATCH` | `/incident/api/v1/incidents/{incidentId}/status` | Update the status of an email incident |
| `GET` | `/report/api/v1/reports/{reportId}` | Retrieve a DLP report |

---

## September 2022

### Threat Vault — Advanced Threat Prevention API (New)

The Advanced Threat Prevention API enables customers with an active Advanced Threat Prevention subscription to retrieve detailed analysis reports for threats and access PCAP files associated with reported incidents.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `POST` | `/atp/reports` | Request Advanced Threat Prevention reports in batch mode |
| `GET` | `/atp/reports/pcaps` | Request a PCAP file for an Advanced Threat Prevention report |

---

### Threat Vault — Threat Prevention API (New)

The Threat Prevention API enables customers with an active Threat Prevention subscription to query threat metadata, CVE coverage, content release notes, and predefined EDL content.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/threats` | Request threat metadata |
| `POST` | `/threats` | Request threat signature metadata in batch mode |
| `GET` | `/threats/cve-coverage` | Request CVE coverage information |
| `GET` | `/threats/history` | Request threat signature release history |
| `GET` | `/release-notes` | Request content release notes |

<details><summary>View all endpoints (8)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/threats` | Request threat metadata |
| `POST` | `/threats` | Request threat signature metadata in batch mode |
| `GET` | `/threats/cve-coverage` | Request CVE coverage information |
| `GET` | `/threats/history` | Request threat signature release history |
| `GET` | `/release-notes` | Request content release notes |
| `GET` | `/edl` | Request predefined EDL content |
| `GET` | `/ip-feed` | Request IP feed information |
| `POST` | `/ip-feed` | Request IP feed information in batch mode |

</details>

---

### DNS Security — DNS Security API (New)

The DNS Security API enables customers to submit domain category change requests and query domain reputation and classification information.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `POST` | `/v1/domain/changerequest` | Submit a domain category change request |
| `POST` | `/v1/domain/info` | Request domain information |

---

### IoT Security — IoT Public API (New)

The IoT Security Public API enables customers to query device inventory, manage alerts and vulnerabilities, apply tags, and integrate third-party data sources with IoT Security.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/iot/pub/v1/device` | Get device details by MAC address |
| `GET` | `/iot/pub/v1/device/ip` | Get device details by IP address |
| `GET` | `/iot/pub/v1/device/list` | Get the device inventory |
| `GET` | `/iot/pub/v2/device/list` | Get the device inventory (v2) |
| `GET` | `/iot/pub/v2/device/search` | Search devices or multi-interface devices |

<details><summary>View all endpoints (54)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `GET` | `/iot/pub/v1/device` | Get device details by MAC address |
| `GET` | `/iot/pub/v1/device/ip` | Get device details by IP address |
| `GET` | `/iot/pub/v1/device/list` | Get the device inventory |
| `GET` | `/iot/pub/v2/device/list` | Get the device inventory (v2) |
| `GET` | `/iot/pub/v2/device/search` | Search devices or multi-interface devices |
| `GET` | `/iot/pub/v2/device/attributes` | Get device attributes |
| `GET` | `/iot/pub/v1/profile/mapping` | Get profile mapping |
| `GET` | `/iot/pub/v1/tag/list` | List user-defined tags |
| `POST` | `/iot/pub/v1/tag` | Add a manual tag to devices |
| `DELETE` | `/iot/pub/v1/tag` | Remove a manual tag from devices |
| `GET` | `/iot/pub/v1/alert/list` | List security alerts |
| `PUT` | `/iot/pub/v1/alert/update` | Resolve a security alert |
| `GET` | `/iot/pub/v1/vulnerability/list` | List vulnerabilities |
| `PUT` | `/iot/pub/v1/vulnerability/update` | Resolve vulnerability instances |
| `PUT` | `/iot/pub/v1/device/bulkUpdate` | Bulk update devices via Cisco DNAC and Prime |
| `PUT` | `/iot/pub/v1/device/bulkUpdate?updateSource=cisco_wlc` | Bulk update devices via Cisco WLC |
| `PUT` | `/iot/pub/v1/device/bulkUpdate?updateSource=aruba_wlc` | Bulk update devices via Aruba WLC |
| `PUT` | `/iot/pub/v1/device/bulkUpdate?updateSource=snmp` | Bulk update devices via SNMP |
| `PUT` | `/iot/pub/v1/device/bulkUpdate?updateSource=cellular` | Bulk update cellular devices |
| `PUT` | `/iot/pub/v1/device/bulkUpdate?updateSource=sccm` | Bulk update SCCM devices |
| `PUT` | `/iot/pub/v1/device/bulkUpdate?updateSource=crowdstrike_falcon` | Bulk update Crowdstrike Falcon devices |
| `PUT` | `/iot/pub/v1/device/bulkUpdate?updateSource=customAttribute` | Bulk update devices with custom attributes |
| `PUT` | `/iot/pub/v1/network/subnetBulkUpdate?updateSource=ipam_infoblox` | Bulk update subnets via IPAM Infoblox |
| `PUT` | `/iot/pub/v1/network/ndNodeGraphBulkUpdate` | Bulk update network discovery node graph |
| `PUT` | `/iot/pub/v1/network/ndNodeL2L3BulkUpdate` | Bulk update network discovery L2/L3 data |
| `PUT` | `/iot/pub/v1/network/ndNodeEndpointBulkUpdate` | Bulk update network discovery endpoints |
| `PUT` | `/iot/pub/v1/network/securityRules` | Update firewall security rules |
| `DELETE` | `/iot/pub/v1/network/purgeRules` | Purge all rules except the provided list |
| `GET` | `/iot/pub/v1/policy/recommendation` | Get activated policy rule recommendations |
| `GET` | `/iot/pub/v1/alertVuln/capability` | Get alert or vulnerability capabilities |
| `GET` | `/iot/pub/v1/filters` | List saved filters |
| `GET` | `/iot/pub/v1/customAttributes` | List custom attributes |
| `POST` | `/iot/pub/v1/customAttribute` | Create a custom attribute |
| `PUT` | `/iot/pub/v1/customAttribute` | Update a custom attribute |
| `DELETE` | `/iot/pub/v1/customAttribute` | Delete a custom attribute |
| `POST` | `/iot/pub/v1/site` | Create site definitions |
| `GET` | `/iot/pub/v1/site` | Get site definitions |
| `PUT` | `/iot/pub/v1/site` | Update site definitions |
| `DELETE` | `/iot/pub/v1/site` | Delete site definitions |
| `POST` | `/iot/pub/v1/networkSegment` | Create a network segment definition |
| `GET` | `/iot/pub/v1/networkSegment` | Get network segment definitions |
| `PUT` | `/iot/pub/v1/networkSegment` | Update a network segment definition |
| `DELETE` | `/iot/pub/v1/networkSegment` | Delete a network segment definition |
| `POST` | `/iot/pub/v1/subnet` | Create a subnet definition |
| `GET` | `/iot/pub/v1/subnet` | Get subnet definitions |
| `PUT` | `/iot/pub/v1/subnet` | Update a subnet definition |
| `DELETE` | `/iot/pub/v1/subnet` | Delete a subnet definition |
| `PUT` | `/iot/pub/v1/subnet/transfer` | Transfer subnet to a shared IP block |
| `PUT` | `/iot/pub/v1/subnet/revert` | Revert subnet to an unshared IP block |
| `GET` | `/iot/pub/v1/xsoar/integrations` | List active XSOAR integrations |
| `POST` | `/iot/pub/v1/xsoar/device/reportUpload` | Upload a device vulnerability scan report from XSOAR |
| `POST` | `/iot/pub/v1/xsoar/profile/aclSync/status` | Get profile ACL sync job status from XSOAR |
| `POST` | `/iot/pub/v1/xsoar/device/scanDetails` | Collect third-party scanner details from XSOAR |
| `POST` | `/iot/pub/v1/xsoar/status` | Sync XSOAR integration playbook status to IoT |
| `GET` | `/iot/pub/v1/xsoar/heartbeat` | Check XSOAR instance health |
| `PUT` | `/iot/pub/v1/thirdPartyScan` | Update device CVE records from a third-party integration |

</details>

---

## August 2022

First public release of the Threat Vault APIs. Palo Alto Networks customers with an active Advanced Threat Prevention or Threat Prevention license can retrieve threat data and related analysis reports based on the features enabled by the subscription type.

The following known issues are present in the current API release:

| Known Issue ID | Description                                                                                                                                      | Status     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| `CSP-12173`    | Advanced Threat Prevention and Threat Prevention subscriptions included as part of a bundle package cannot currently access the ThreatVault API. |  Resolved  |
