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

We are introducing the Site Management APIs for onboarding Next-Generation Firewalls (NGFWs) to Strata Cloud Manager. You can now find these APIs for Site Management—including Sites, Site Groups, Site Properties, and Rules—conveniently located in Config Setup alongside our existing APIs.

Accessed directly through Config Setup, these APIs are designed to automate the generation of configuration variables for NGFW devices during the onboarding process. The system allows you to define reusable properties, create rules using these properties, and apply those rules to automatically generate specific variable values for individual devices. While you will use these new APIs to build the variable values, you must continue to use the Configuration Operations API to actually push the resulting configurations to your deployments.

## Key Features

- **Automation**: Automate the calculation of complex configuration variables (e.g., IP addresses, VLAN IDs, SNMP community strings).
- **Consistency**: Ensure consistent and standardized variable naming and value generation across all appliances.
- **Error Reduction**: Minimize human error by removing manual calculations from the provisioning workflow.
- **Scalability**: Enable a single rule to be applied to a large number of devices, with each device receiving a unique, calculated value.

## Properties APIs

Properties define the schema for site-specific values that will be used in variable resolution.

### Create Property

**POST** `/api/v1/properties`

Create a new property definition that can be used in variable resolution rules.

#### Request

```json
{
  "name": "string",
  "type": "string",
  "constraints": {
    "min": "string",
    "max": "string",
    "max-len": "string"
  }
}
```

**Type values**: `"integer"`, `"string"`

#### Response

**201 Created**

```json
{
  "success": true,
  "data": {
    "id": "string",
    "tenant_id": "string",
    "name": "region_id",
    "type": "integer",
    "constraints": {
      "min": "0",
      "max": "7"
    },
    "created_at": "2025-01-01T00:00:00Z",
    "last_updated": "2025-01-01T00:00:00Z"
  },
  "message": "Property created successfully"
}
```

### List Properties

**GET** `/api/v1/properties`

Retrieve all properties for the authenticated tenant.

#### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `include_references` | boolean | Include site and rule references for each property |

#### Response

**200 OK**

```json
{
  "status": "success",
  "data": [
    {
      "id": "string",
      "tenant_id": "string",
      "name": "region_id",
      "type": "integer",
      "constraints": {
        "min": "0",
        "max": "7"
      },
      "created_at": "2025-01-01T00:00:00Z",
      "last_updated": "2025-01-01T00:00:00Z"
    }
  ],
  "message": "Properties retrieved successfully"
}
```

### Get Property

**GET** `/api/v1/properties/{id}`

Retrieve a specific property by ID.

### Update Property

**PUT** `/api/v1/properties/{id}`

Update an existing property. Updates that would affect existing sites or rules will return validation errors.

### Delete Property

**DELETE** `/api/v1/properties/{id}`

Delete a property. Properties referenced by existing sites or rules cannot be deleted.

## Onboarding Rules APIs

Onboarding rules define the automation logic for device provisioning, including variable resolution and HA configuration.

### Create Onboarding Rule

**POST** `/api/v1/onboarding-rules`

Create a new onboarding rule with variable resolution capabilities.

#### Request

```json
{
  "name": "string",
  "description": "string",
  "enabled": true,
  "match_criteria": {
    "labels": "string",
    "models": {
      "include": [
        {"name": "string"}
      ]
    }
  },
  "actions": {
    "target_image": {
      "version": "string"
    },
    "folder_association": {
      "folder": "string"
    }
  },
  "variables_enabled": true,
  "variables": [
    {
      "name": "string",
      "type": "string",
      "resolution_rule": {
        "type": "string",
        "expression": "string"
      }
    }
  ],
  "ha_enabled": false,
  "ha_config_id": "integer"
}
```

**Variable type values**: `"string"`, `"ip-address"`, `"integer"`

**Resolution rule type values**: `"replace"`, `"bit"`

#### Response

**201 Created**

```json
{
  "id": "string",
  "tenant_id": "string",
  "name": "string",
  "enabled": true,
  "variables_enabled": true,
  "variables": [
    {
      "name": "mgmt_ip",
      "type": "ip-address",
      "resolution_rule": {
        "type": "replace",
        "expression": "10.1.1${region_id}9.2"
      }
    }
  ],
  "ha_enabled": false,
  "created_at": "2025-01-01T00:00:00Z",
  "last_updated": "2025-01-01T00:00:00Z"
}
```

### List Onboarding Rules

**GET** `/api/v1/onboarding-rules`

Retrieve all onboarding rules for the authenticated tenant.

### Get Onboarding Rule

**GET** `/api/v1/onboarding-rules/{id}`

Retrieve a specific onboarding rule by ID.

### Update Onboarding Rule

**PUT** `/api/v1/onboarding-rules/{id}`

Update an existing onboarding rule.

### Delete Onboarding Rule

**DELETE** `/api/v1/onboarding-rules/{id}`

Delete an onboarding rule by ID.

### Delete Onboarding Rules by Name

**DELETE** `/api/v1/onboarding-rules?name={name1,name2,name3}`

Delete multiple onboarding rules by name.

### Reorder Onboarding Rules

**POST** `/api/v1/onboarding-rules/reorder`

Change the evaluation order of onboarding rules.

#### Request

```json
{
  "position": "string",
  "rule": "string",
  "reference": "string"
}
```

**Position values**: `"top"`, `"bottom"`, `"before"`, `"after"`

**Note**: `reference` is required for `"before"` and `"after"` positions.

## Sites APIs

Sites represent individual NGFW devices or HA pairs with specific property values for variable resolution.

### Create Sites

**POST** `/api/v1/sites`

Create one or more sites with property values.

#### Request

```json
{
  "sites": [
    {
      "name": "string",
      "label_group": "string",
      "address": "string",
      "property_values": {
        "property_name": "value"
      }
    }
  ]
}
```

#### Response

**201 Created**

```json
{
  "status": "success",
  "data": {
    "results": [
      {
        "site": {
          "id": "string",
          "tenant_id": "string",
          "name": "string",
          "label_group": "string",
          "address": "string",
          "property_values": {},
          "created_at": "2025-01-01T00:00:00Z",
          "last_updated": "2025-01-01T00:00:00Z"
        },
        "success": true
      }
    ],
    "total_sites": 1,
    "success_count": 1,
    "error_count": 0
  },
  "message": "All sites created successfully"
}
```

### List Sites

**GET** `/api/v1/sites`

Retrieve all sites with their claim status and resolution history.

#### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `status` | string | Filter by claim status: `"claimed"`, `"unclaimed"`, `"all"` (default) |
| `site_group` | string | Filter by site group |

### Get Site

**GET** `/api/v1/sites/{id}`

Retrieve a specific site by ID including claims information.

### Update Site

**PUT** `/api/v1/sites/{id}`

Update an existing site's properties.

### Delete Site

**DELETE** `/api/v1/sites/{id}`

Delete a site. Sites with claimed devices cannot be deleted.

### Claim Site

**POST** `/api/v1/sites/{id}/claim`

Claim a site by associating it with a physical device and resolving variables.

#### Request

```json
{
  "serial_number": "string",
  "onboarding_rule_id": "string",
  "claimed_by": "string",
  "device_role": "string"
}
```

**Device role values**: `"standalone"`, `"primary"`, `"secondary"`

#### Response

**201 Created**

```json
{
  "status": "success",
  "data": {
    "resolved_onboarding_rule": {
      "id": "string",
      "resolved_variables": [
        {
          "name": "mgmt_ip",
          "type": "ip-address",
          "value": "10.1.179.2"
        }
      ]
    },
    "site": {},
    "claim": {}
  },
  "message": "Device claimed successfully"
}
```

### Preview Sites

**POST** `/api/v1/sites/preview`

Preview variable resolution for sites without creating them.

#### Request

```json
{
  "onboarding_rule_id": "string",
  "sites": [
    {
      "name": "string",
      "label_group": "string",
      "property_values": {}
    }
  ]
}
```

### Resolve Sites

**POST** `/api/v1/sites/resolve`

Resolve variables for multiple existing sites.

## Variables APIs

Variables represent dynamic placeholders in folder and snippet configurations that can be referenced in onboarding rule resolution expressions.

### List Variables

**GET** `/api/v1/variables`

Retrieve variables from folders and snippets for onboarding rule configuration.

#### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `folder` | string | Filter by folder name |
| `snippet` | string | Filter by snippet name |

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

## Error Responses

All APIs use standard HTTP status codes:

| Status Code | Description |
|-------------|-------------|
| `400` | Bad Request - Invalid request parameters |
| `401` | Unauthorized - Authentication required |
| `403` | Forbidden - Insufficient permissions |
| `404` | Not Found - Resource not found |
| `409` | Conflict - Resource conflict (e.g., duplicate names) |
| `500` | Internal Server Error - Server error |

## System Constraints

The following limitations apply to Site Management APIs and variable resolution operations:

- **IPv4 Only**: All IP address operations support IPv4 exclusively
- **Runtime Validation**: Variable resolution errors are detected during claim operations, not rule creation
- **Single Device Claims**: Each site is limited to one claimed device (HA support planned for the future)
