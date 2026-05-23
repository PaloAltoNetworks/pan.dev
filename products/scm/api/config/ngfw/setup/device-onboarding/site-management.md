---
id: site-management
title: Site Management APIs
sidebar_label: Site Management APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - Setup
  - Reference
  - API
---

## Overview
We are introducing the Site Management APIs for onboarding Next-Generation Firewalls (NGFWs) to Strata Cloud Manager. You can now find these APIs for Site Management—including Sites, Site Groups, Site Properties, and Rules—conveniently located under the Device Onboarding section of Config Setup alongside our existing APIs.

Accessed directly through the Device Onboarding section of Config Setup, these APIs are designed to automate the generation of configuration variables for NGFW devices during the onboarding process. The system allows you to define reusable properties, create rules using these properties, and apply those rules to automatically generate specific variable values for individual devices. While you will use these new APIs to build the variable values, you must continue to use the Configuration Operations API to actually push the resulting configurations to your deployments.

## Key Features

- **Automation**: Automate the calculation of complex configuration variables (e.g., IP addresses, VLAN IDs, SNMP community strings).
- **Consistency**: Ensure consistent and standardized variable naming and value generation across all appliances.
- **Error Reduction**: Minimize human error by removing manual calculations from the provisioning workflow.
- **Scalability**: Enable a single rule to be applied to a large number of devices, with each device receiving a unique, calculated value.

## Sites APIs

Sites represent individual NGFW devices or HA pairs, each with their associated property values used for variable resolution during onboarding. The Sites APIs allow you to create, retrieve, update, and delete sites. Multiple sites can be created in a single request. Sites with claimed devices cannot be deleted, and list results can be filtered by claim status or site group.

## Properties APIs

Properties are customer-defined metadata that describe the unique characteristics of each site, such as location, region, or site ID. The Properties APIs allow you to create, retrieve, update, and delete property definitions. Properties that are referenced by existing sites or onboarding rules cannot be deleted, and updates to a property that would affect existing sites or rules will return a validation error.

## Onboarding Rules APIs

Onboarding rules define the automation logic for device provisioning, including variable resolution, HA configuration, and the actions applied when a device matches the rule criteria. The Onboarding Rules APIs allow you to create, retrieve, update, and delete rules by ID. Rule evaluation follows a defined order, which can be adjusted using the move operation to position a rule at the top, bottom, before, or after a specified reference rule.

## Site Groups APIs

Site Groups are organizational containers that group related sites together and control how they participate in the onboarding workflow.Sites are assigned to a site group at creation time, and onboarding rules use the site group as part of their match criteria to determine which rule applies to a given device. The Site Groups APIs allow you to create, retrieve, update, and delete site group definitions.

## Variable Resolution Rules

The Site Management API supports two types of variable resolution:

### Replacement Resolution

String substitution using property values.

```json
{
  "type": "replace",
  "expression": "${location}-fw-${site_id}"
}
```

For a site with `location: "sc"` and `site_id: 101`, this resolves to `"sc-fw-101"`.

### Bit Operation Resolution

IP address generation using bit-level operations.

```json
{
  "type": "bit",
  "expression": "10/8 11/4 ${region_id}/3 3/2 ${site_id}/9 0/6"
}
```

Each segment specifies `value/bits` where:

- `value`: Fixed number or property variable
- `bits`: Number of bits in the 32-bit IP address

For `region_id: 7` and `site_id: 500`, this generates the IP address `10.191.253.0`.

## System Constraints

The following limitations apply to Site Management APIs and variable resolution operations:

- **IPv4 Only**: All IP address operations support IPv4 exclusively
- **Runtime Validation**: Variable resolution errors are detected during claim operations, not rule creation
- **Single Device Claims**: Each site is limited to one claimed device (HA support planned for the future).