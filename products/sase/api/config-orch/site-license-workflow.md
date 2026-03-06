---
id: site-license-workflow
title: Onboarding a Tenant with RN-HP Architecture and Site-Based Licensing
sidebar_label: Onboard Tenant (RN-HP Site-Based)
keywords:
  - SASE
  - Reference
  - API
---

# Onboarding a Tenant with RN-HP Architecture and Site-Based Licensing

This guide details the workflow for onboarding a tenant using the Remote Network High Performance (RN-HP) architecture and the Site-Based licensing model. This model differs from the Aggregate Bandwidth model by requiring the creation of **Site** objects and specific verification of license quantities.

## Prerequisites

Before beginning the automation workflow, you must ensure a Service Account is created and authenticated:

1.  **Create a Service Account:**
    * Navigate to **Identity & Access Management** in the management console.
    * Create a new Service Account and assign an application role (e.g., `Superuser` or `Network Administrator`).
    * Save the **Client ID** and **Client Secret** immediately, as the secret cannot be retrieved later.
    * Note the **Tenant Service Group (TSG) ID**.

2.  **Obtain an Access Token:**
    * Use the credentials to request an OAuth2 access token.
    * **Endpoint:** `POST https://auth.apps.paloaltonetworks.com/oauth2/access_token`.
    * **cURL Example:**
        ```bash
        curl -d "grant_type=client_credentials&scope=tsg_id:<tsg_id>" \
        -u <client_id>:<client_secret> \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -X POST [https://auth.apps.paloaltonetworks.com/oauth2/access_token](https://auth.apps.paloaltonetworks.com/oauth2/access_token)
        ```

## Workflow Overview

The Site-Based Licensing workflow generally follows these steps:
1.  **Fetch Licensing Data:** Verify license model and quantity.
2.  **Determine Location:** Select the primary onboarding region.
3.  **Check Architecture:** Verify RN-HP (v2) support.
4.  **Create IKE Gateway:** Configure the gateway.
5.  **Create IPsec Tunnel:** Configure the tunnel.
6.  **Create Remote Network:** Configure the network with the specific license type.
7.  **Create Site:** Bind the network to a site object.
8.  **Push Configuration:** Commit the changes.

---

## Step 1: Fetch Licensing Data and Check Quantity

Use this API to determine if site-based licensing is supported and if the tenant has sufficient purchased licenses for the desired bandwidth tier[cite: 38].

**Endpoint:** `GET /v1/remote-networks-license-info` 

**Logic to Implement:**
1. Check if `operational_license` is `"site"`.
2.  Iterate through `purchased_licenses` and `configured_licenses`.
3. Ensure `purchased_licenses.count` > `configured_licenses.count` for the desired `license_type` (e.g., `FWAAS-SITE-1000Mbps`).

**Example Response:**
```json
{
  "license_model": [
    "agg-bandwidth",
    "site"
  ],
  "purchased_licenses": [
    {
      "license_type": "FWAAS-SITE-1000Mbps",
      "count": 1
    }
  ],
  "configured_licenses": [
    {
      "license_type": "FWAAS-SITE-1000Mbps",
      "count": 1
    }
  ],
  "operational_license": "site"
}
```

## Step 2: Determine Location

Retrieve a list of available Prisma Access locations to determine the region closest to your branch site for the primary tenant.

**Endpoint:** `GET /deployment/list-locations/`

**Example Response:** 
```json
[
  {
    "value": "us-west-1",
    "display": "US West",
    "continent": "North America",
    "latitude": 37.38314,
    "longitude": -121.98306,
    "region": "us-west-1",
    "aggregate_region": "us-southwest"
  }
]
```
## Step 3: Check RN Architecture Type

Determine if the tenant supports RN-HP (v2) architecture and if a secondary Prisma Access region can be configured.

**Endpoint:** `GET /v1/remote-networks-architecture`

**Logic to Implement:** 
1. Check architecture_versions for "2" (RN-HP Architecture). 
2. If compute_redundancy_support is true, a secondary region can potentially be configured.
3. To configure primary and secondary regions, both locations must have architecture_version: "v2" and be distinct regions .

**Example Response:**
```json 
{
  "architecture_versions": {
    "v1": {
      "version": "v1",
      "description": "Remote Network Classic Architecture",
      "capabilities": {
        "compute_redundancy_support": false,
        "site_level_cir_support": false
      }
    },
    "2": {
      "version": "v2",
      "description": "RN-HP Architecture",
      "capabilities": {
        "compute_redundancy_support": true,
        "site_level_cir_support": true
      }
    }
  },
  "prisma_access_locations": [
    {
      "location_config_name": "canada-central",
      "location_display_name": "Canada Central",
      "compute_location_config_name": "canada-central-toronto",
      "compute_location_display_name": "Canada Central (Toronto)",
      "architecture_version": "v2"
    }
  ]
}
```
## Step 4: Create IKE Gateway
Create the IKE Gateway to define authentication and encryption parameters.

**Endpoint:** `POST /prisma-access-config/post-sse-config-v-1-ike-gateways`

*(**Note**: Refer to standard IKE Gateway payload structures for the body of this request).*

---

## Step 5: Create IPsec Tunnel
Create the IPsec tunnel interface and associate it with the IKE Gateway.

**Endpoint:** `POST /config-orch/post-v-1-remote-network`

*(**Note**: Refer to standard IPsec Tunnel payload structures for the body of this request).*

---

## Step 6: Create Remote Network
Provision the Remote Network. This payload specifically requires the `license_type` field.

**Endpoint:** `POST <Fawkes_URL>/api/sase/config/v1/remote-networks?type=device&folder=Remote%20Networks`

**Payload:**
```json
{
  "folder": "Remote Networks",
  "_type": "cloud",
  "name": "sfo-branch15",
  "license_type": "FWAAS-SITE-25Mbps",
  "region": "us-west-2",
  "ecmp_load_balancing": "enable",
  "ecmp_tunnels": [
    {
      "name": "Tunnel_128161429253",
      "ipsec_tunnel": "tun200_sample",
      "protocol": {
        "bgp": {
          "peer_as": "65535",
          "peer_ip_address": "3.3.3.3",
          "enable": "true"
        }
      }
    },
    {
      "name": "Tunnel_107692",
      "ipsec_tunnel": "tun2",
      "protocol": {
        "bgp": {
          "peer_as": "65536",
          "peer_ip_address": "4.4.4.4",
          "enable": "true"
        }
      }
    }
  ],
  "override_spn_name": "true"
}
```

## Step 7: Creation of Site
Create the Site object to bind the Remote Network to the physical location. [cite_start]The payload varies depending on the topology (Single WAN vs. A/B or Active/Active) [cite: 216, 259-261].

**Endpoint:** `POST <Fawkes_URL>/api/sase/config/v1/sites?folder=Remote%20Networks`

### Payload Example 1: Single WAN Topology
```json
{
  "id": "7abe0cf4-4353-47b5-8c89-a33dc01de4fc",
  "name": "AUTO-CATALYST-XDevice",
  "type": "third-party-branch",
  "longitude": "39.75",
  "latitude": "12.45",
  "city": "unknown",
  "country": "unknown",
  "license_type": "FWAAS-SITE-25Mbps",
  "members": [
    {
      "name": "AUTO-CATALYST-XDevice",
      "remote_network": "AUTO-CATALYST-XDevice",
      "mode": "active"
    }
  ],
  "qos": {
    "profile": "Default Profile",
    "cir": 2
  }
}
```
### Payload Example 2: Active/Backup (A/B) Topology
``` json 
{
  "id": "b80eb6e4-bb49-42b6-a0d4-325ce162bee5",
  "name": "AUTO-CATALYST-EDGE",
  "folder": "Prisma Access",
  "type": "third-party-branch",
  "longitude": "166.072777",
  "latitude": "-10.785043",
  "city": "UNKNOWN",
  "country": "Uganda",
  "license_type": "FWAAS-SITE-25Mbps",
  "members": [
    {
      "name": "AUTO-CATALYST-EDGE",
      "remote_network": "AUTO-CATALYST-EDGE",
      "mode": "active",
      "id": "551a92b0-a870-4611-8f28-b65d227d9847"
    },
    {
      "name": "AUTO-CATALYST-EDGE_backup",
      "remote_network": "AUTO-CATALYST-EDGE_backup",
      "mode": "backup",
      "id": "c4f64516-5f22-4ba3-9bd9-919e9b2b26a7"
    }
  ],
  "qos": {
    "profile": "Default Profile",
    "cir": 2
  }
}
```
### Payload Example 3: Active/Active Topology

**Note:** A/A on a single WAN link topology + HA Mode TLOC follows the same topology as A/A. This setup typically involves creating two separate Site objects, one for each device.

**Site 1**

```json 
{
  "id": "7abe0cf4-4353-47b5-8c89-a33dc01de4fc",
  "name": "AUTO-CATALYST-VDevice_1",
  "type": "third-party-discovered",
  "longitude": "166.072777",
  "latitude": "-10.785043",
  "city": "unknown",
  "country": "unknown",
  "license_type": "FWAAS-SITE-25Mbps",
  "members": [
    {
      "name": "AUTO-CATALYST-VDevice_1",
      "remote_network": "AUTO-CATALYST-VDevice_1",
      "mode": "active",
      "id": "4490496f-dbf4-4ec7-b3ca-d8a111d023db"
    }
  ],
  "qos": {
    "profile": "Default Profile",
    "cir": 2
  }
}
```
**Site 2**
```json 
{
  "id": "7abe0cf4-4353-47b5-8c89-a33dc01de4fc",
  "name": "AUTO-CATALYST-VDevice_2",
  "type": "third-party-discovered",
  "longitude": "166.072777",
  "latitude": "-10.785043",
  "city": "unknown",
  "country": "unknown",
  "license_type": "FWAAS-SITE-25Mbps",
  "members": [
    {
      "name": "AUTO-CATALYST-VDevice_2",
      "remote_network": "AUTO-CATALYST-VDevice_2",
      "mode": "active",
      "id": "4490496f-dbf4-4ec7-b3ca-d8a111d023db"
    }
  ],
  "qos": {
    "profile": "Default Profile",
    "cir": 2
  }
}
```

## Step 8: Push Configuration

Finally, push the candidate configuration to apply changes.
 **Endpoint:** `POST /operations/push-candidate-config-versions`
 