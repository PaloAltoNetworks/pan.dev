---
id: site-license-workflow
title: API Workflow 
sidebar_label: Remote Network Onboarding with Site-based Licensing
keywords:
  - SASE
  - Reference
  - API
---

# RNHP Site License Automation Workflow

This guide details the end-to-end API automation workflow for provisioning Remote Network High Performance (RNHP) site licenses via the Palo Alto Networks SASE Configuration Management (SCM) API.

## Step 1: Login to SCM using service account 

Authenticate with the Identity Service to obtain an OAuth2 access token. Use this token in the `Authorization: Bearer <token>` header for all subsequent configuration requests.

## Step 2: Creation of IKE Gateway

**Endpoint:**
`POST https://api.sase.paloaltonetworks.com/sse/config/v1/ike-gateways?folder=Remote Networks`

**Payload:**
```json
{
  "name": "name1",
  "local_address": {
    "interface": "vlan"
  },
  "peer_address": {
    "dynamic": {}
  },
  "peer_id": {
    "id": "[www.abcd1.com](https://www.abcd1.com)",
    "type": "fqdn"
  },
  "authentication": {
    "pre_shared_key": {
      "key": "<>"
    }
  },
  "protocol_common": {
    "nat_traversal": {
      "enable": "yes"
    }
  },
  "protocol": {
    "ikev1": {
      "ike_crypto_profile": "default"
    },
    "ikev2": {
      "ike_crypto_profile": "default"
    },
    "version": "ikev1"
  }
}
```
## Step 3: Creation of IPSEC tunnel

**Endpoint:**
`POST https://api.sase.paloaltonetworks.com/sse/config/v1/ipsec-tunnels?folder=Remote Networks`

**Payload:**
```json
{
  "name": "ipsec_tunnel1_name",
  "tunnel_interface": "tunnel",
  "auto_key": {
    "ike_gateway": [
      {
        "name": "name1"
      }
    ],
    "ipsec_crypto_profile": "CloudGenix-IPSec-Crypto-Default"
  }
}
```

## Step 4: Creation of Remote Network

**Endpoint:**
`POST https://api.sase.paloaltonetworks.com/sse/config/v1/remote-networks?folder=Remote Networks`

**Payload:**
```json
{
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

## Step 5: GET purchase and configured number of site licenses

**Endpoint:**
`POST https://api.sase.paloaltonetworks.com/sse/config/v1/remote-networks-license-info`

**Payload:**
```json
{
  "license_model": [
    "site"
  ],
  "purchased_licenses": [
    {
      "license_type": "FWAAS-SITE-25Mbps",
      "count": 100
    },
    {
      "license_type": "FWAAS-SITE-50Mbps",
      "count": 100
    },
    {
      "license_type": "FWAAS-SITE-250Mbps",
      "count": 100
    },
    {
      "license_type": "FWAAS-SITE-1000Mbps",
      "count": 100
    },
    {
      "license_type": "FWAAS-SITE-2500Mbps",
      "count": 200
    }
  ],
  "configured_licenses": [
    {
      "license_type": "FWAAS-SITE-25Mbps",
      "count": 2
    }
  ],
  "operational_license": "site"
}
```

## Step 6: Creation of site

**Endpoint:**
`POST https://api.sase.paloaltonetworks.com/sse/config/v1/sites`

**Payload:**
```json
{
  "folder": "Remote Networks",
  "_type": "cloud",
  "name": "sfo-branch15",
  "type": "third-party-branch",
  "longitude": "-91.746994",
  "latitude": "29.78137",
  "city": "sfo",
  "country": "United States",
  "license_type": "FWAAS-SITE-25Mbps",
  "members": [
    {
      "name": "sfo-branch15",
      "remote_network": "sfbranch15",
      "mode": "active"
    }
  ],
  "qos": {
    "profile": "Default Profile",
    "cir": "2"
  }
}