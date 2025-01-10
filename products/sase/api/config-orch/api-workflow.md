---
id: api-workflow
title: API Workflow 
sidebar_label: API Workflow for Configuration Orchestration
slug: /sase/api/api-workflow
keywords:
  - SASE
  - Reference
  - API
---

The purpose of this topic is to guide users on how to interact with the APIs step-by-step to accomplish specific tasks or goals. This includes detailing the sequence of API calls required, inputs needed, expected outputs, and any prerequisites or dependencies.

This workflow is designed to ensure clarity and simplicity, making it easier for first-time users and experienced developers to integrate the APIs effectively.

### 1. Create Location Information  
**Step**: Use the `/v1/location-informations` endpoint to submit longitude and latitude. This retrieves the most accurate location data required for the setup.  

**API Reference**: [Location Information](/sase/api/config-orch/post-v-1-location-informations/)  

**Code Snippet (Example using cURL)**:  
```bash
curl -L 'https://api.sase.paloaltonetworks.com/v1/location-informations' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "description": "string",
  "locations": [
    {
      "public-ip": {
        "PublicIp": "198.51.100.42"
      },
      "region-cordinates": {
        "latitude": "string",
        "longitude": "string"
      }
    }
  ]

```

**Response**:  
- **Status Code**: `200 (Success)`  
- **Body**:  
```json
{
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

### 2. Allocate Bandwidth  
**Step**: Use the `[bandwidth allocations](/sase/api/config-orch/post-v-1-bandwidth-allocations/) endpoint to define and allocate the necessary bandwidth.  

**Code Snippet (Example using cURL)**:  
```bash
curl -L 'https://api.sase.paloaltonetworks.com/v1/bandwidth-allocations' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "bandwidth_allocations": [
    {
      "bandwidth": "string",
      "compute_location": "string",
      "edge_location": "string",
      "ipsec_node_list": [
        "string"
      ],
      "location": {
        "public-ip": {
          "PublicIp": "198.51.100.42"
        },
        "region-cordinates": {
          "latitude": "string",
          "longitude": "string"
        }
      }
    }
  ]
}'
```

**Response**:  
- **Status Code**: `200 (Success)`  
- **Body**:  
```json
{
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

### 3. Set Up Crypto Profiles  
**Step**: Configure the required cryptographic profiles:  
- Use [IKE Crypto Profiles](/sase/api/config-orch/post-v-1-ike-crypto-profiles/) to create an IKE crypto profile.  
- Use [IPSec Crypto Profiles](/sase/api/config-orch/post-v-1-ipsec-crypto-profiles/) to create an IPSec crypto profile.  

**Code Snippet (Example using cURL for IKE Crypto Profiles)**:  
```bash
curl -L 'https://api.sase.paloaltonetworks.com/v1/ike-crypto-profiles' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "authentication_multiple": 0,
  "dh_group": [
    "group2"
  ],
  "encryption": [
    "aes-128-cbc"
  ],
  "hash": [
    "sha1"
  ],
  "lifetime": {
    "seconds": 0
  },
  "name": "string"
}'
```

**Response**:  
- **Status Code**: `200 (Success)`  
```json
{
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```
**Code Snippet (Example using cURL for IPSec Crypto Profiles)**:  
```bash
curl -L 'https://api.sase.paloaltonetworks.com/v1/ipsec-crypto-profiles' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "ah": {
    "authentication": [
      "md5"
    ]
  },
  "dh_group": "group2",
  "esp": {
    "authentication": [
      "sha1"
    ],
    "encryption": [
      "aes-128-cbc"
    ]
  },
  "lifesize": {
    "kb": 0
  },
  "lifetime": {
    "seconds": 0
  },
  "name": "string"
}'
```

**Response**:  
- **Status Code**: `200 (Success)`  
```json
  {
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
```

### 4. Create the Remote Network  
**Step**: Once the prerequisites are complete, use the [create remote networks](/sase/api/config-orch/post-v-1-remote-networks/) endpoint to create and deploy the remote network.  

**Code Snippet (Example using cURL)**:  
```bash
curl -L 'https://api.sase.paloaltonetworks.com/v1/remote-networks' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <TOKEN>' \
-d '{
  "name": "string",
  "remote_networks_ipsec_tunnels": [
    {
      "bgp": {
        "bgp_peer": {
          "local_ip_address": "string",
          "peer_ip_address": "string",
          "secret": "string"
        },
        "do_not_export_routes": true,
        "enable": true,
        "local_ip_address": "string",
        "originate_default_route": true,
        "peer_as": "string",
        "peer_ip_address": "string",
        "peering_type": "exchange-v4-over-v4",
        "secret": "string",
        "summarize_mobile_user_routes": true
      },
      "ecmp-load-balancing": {
        "ecmp_load_balancing_enabled": "disable",
        "ecmp_tunnels": [
          {
            "bgp": {
              "do_not_export_routes": true,
              "enable": true,
              "local_ip_address": "string",
              "originate_default_route": true,
              "peer_as": "string",
              "peer_ip_address": "string",
              "peering_type": "exchange-v4-over-v4",
              "secret": "string",
              "summarize_mobile_user_routes": true
            },
            "ipsec_tunnel": {
              "anti_replay": true,
              "copy_tos": false,
              "crypto": {
                "ah": {
                  "authentication": [
                    "md5"
                  ]
                },
                "dh_group": "group2",
                "esp": {
                  "authentication": [
                    "sha1"
                  ],
                  "encryption": [
                    "aes-128-cbc"
                  ]
                },
                "lifesize": {
                  "kb": 0
                },
                "lifetime": {
                  "seconds": 0
                },
                "name": "string"
              },
              "enable_gre_encapsulation": false,
              "ike": {
                "advanced": {
                  "fragmentation": {
                    "enable": false
                  },
                  "nat_traversal": {
                    "enable": true
                  },
                  "passive_mode": true
                },
                "authentication": {
                  "pre_shared_key_auth": "string"
                },
                "crypto": {
                  "authentication_multiple": 0,
                  "dh_group": [
                    "group2"
                  ],
                  "encryption": [
                    "aes-128-cbc"
                  ],
                  "hash": [
                    "sha1"
                  ],
                  "lifetime": {
                    "seconds": 0
                  },
                  "name": "string"
                },
                "local_id": {
                  "id": "string",
                  "type": "string"
                },
                "peer_address": {
                  "ip": "string"
                },
                "peer_id": {
                  "id": "string",
                  "type": "ipaddr"
                },
                "version": "ikev1"
              },
              "tunnel_monitor": {
                "destination_ip": "string",
                "enable": true,
                "proxy_id": "string"
              }
            },
            "name": "string"
          }
        ]
      },
      "ipsec-termination-node": "string",
      "name": "string",
      "primary_tunnel": {
        "anti_replay": true,
        "copy_tos": false,
        "crypto": {
          "ah": {
            "authentication": [
              "md5"
            ]
          },
          "dh_group": "group2",
          "esp": {
            "authentication": [
              "sha1"
            ],
            "encryption": [
              "aes-128-cbc"
            ]
          },
          "lifesize": {
            "kb": 0
          },
          "lifetime": {
            "seconds": 0
          },
          "name": "string"
        },
        "enable_gre_encapsulation": false,
        "ike": {
          "advanced": {
            "fragmentation": {
              "enable": false
            },
            "nat_traversal": {
              "enable": true
            },
            "passive_mode": true
          },
          "authentication": {
            "pre_shared_key_auth": "string"
          },
          "crypto": {
            "authentication_multiple": 0,
            "dh_group": [
              "group2"
            ],
            "encryption": [
              "aes-128-cbc"
            ],
            "hash": [
              "sha1"
            ],
            "lifetime": {
              "seconds": 0
            },
            "name": "string"
          },
          "local_id": {
            "id": "string",
            "type": "string"
          },
          "peer_address": {
            "ip": "string"
          },
          "peer_id": {
            "id": "string",
            "type": "ipaddr"
          },
          "version": "ikev1"
        },
        "tunnel_monitor": {
          "destination_ip": "string",
          "enable": true,
          "proxy_id": "string"
        }
      },
      "region": "string",
      "secondary_tunnel": {
        "anti_replay": true,
        "copy_tos": false,
        "crypto": {
          "ah": {
            "authentication": [
              "md5"
            ]
          },
          "dh_group": "group2",
          "esp": {
            "authentication": [
              "sha1"
            ],
            "encryption": [
              "aes-128-cbc"
            ]
          },
          "lifesize": {
            "kb": 0
          },
          "lifetime": {
            "seconds": 0
          },
          "name": "string"
        },
        "enable_gre_encapsulation": false,
        "ike": {
          "advanced": {
            "fragmentation": {
              "enable": false
            },
            "nat_traversal": {
              "enable": true
            },
            "passive_mode": true
          },
          "authentication": {
            "pre_shared_key_auth": "string"
          },
          "crypto": {
            "authentication_multiple": 0,
            "dh_group": [
              "group2"
            ],
            "encryption": [
              "aes-128-cbc"
            ],
            "hash": [
              "sha1"
            ],
            "lifetime": {
              "seconds": 0
            },
            "name": "string"
          },
          "local_id": {
            "id": "string",
            "type": "string"
          },
          "peer_address": {
            "ip": "string"
          },
          "peer_id": {
            "id": "string",
            "type": "ipaddr"
          },
          "version": "ikev1"
        },
        "tunnel_monitor": {
          "destination_ip": "string",
          "enable": true,
          "proxy_id": "string"
        }
      },
      "subnets": [
        "string"
      ]
    }
  ]
}'
```

**Response**:  
- **Status Code**: `200 (Success)`  
- **Body**:  
```json
{
  "uuid": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

### 4. Get Service IP and network details 
**Step**: Once remote network is created, use the [get IPSec details](/sase/api/config-orch/get-v-1-remote-networks/) endpoint to get Service IP and network details to form tunnels.

**Code Snippet (Example using cURL)**:  
```bash
curl -L 'https://api.sase.paloaltonetworks.com/v1/remote-networks' \
-H 'Accept: application/json' \
-H 'Authorization: Bearer <token>'

**Response**:  
- **Status Code**: `200 (Success)`  
- **Body**:  
```json
{
  "errors": [
    {
      "code": "string",
      "details": {},
      "help": "string",
      "message": "string"
    }
  ],
  "result": {
    "remote_networks_ipsec_tunnel_response_set": [
      {
        "name": "string",
        "pre_shared_key": "string",
        "service_ip": "198.51.100.42",
        "tunnel_id": "string"
      }
    ]
  },
  "status": "string"
}
```




For actions such as editing or deleting a remote network, refer to the relevant API References [here](/sase/api/config-orch/).  