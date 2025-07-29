---
hide_title: true
id: vpn
keywords:
- pan-os
- panos
- firewall
- configuration
- terraform
- vmseries
- vm-series
- swfw
- software-firewalls
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: VPN
title: VPN
---

# VPN

This module makes it easy to deploy either GCP-to-GCP or GCP-to-On-prem VPN using [Cloud HA VPN](https://cloud.google.com/vpn/docs/concepts/overview#ha-vpn) including HA VPN Gateway itself. VPN includes one or more VPN instances (connections).

Each created VPN instance is represented by 1..4 VPN tunnels that taget remote VPN gateway(s) located in a single remote location. Remote VPN gateway(s) might have singe IP address (`redundancy_type = "SINGLE_IP_INTERNALLY_REDUNDANT"`) or 2 IP addresses (`redundancy_type = "TWO_IPS_REDUNDANCY"`).

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/vpn) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/vpn)

## Example

```hcl
data "google_compute_network" "test" {
  name    = "<network_name>"
  project = "<project_id>"
}

module "vpn" {
  source = "../../../modules/vpn"

  project = "<project_id>"
  region  = "us-central1"

  vpn_gateway_name = "my-test-gateway"
  router_name      = "my-test-router"
  network          = data.google_compute_network.test.self_link

  vpn_config = {
    router_asn    = 65000
    local_network = "vpc-vpn"

    router_advertise_config = {
      ip_ranges = {
        "10.10.0.0/16" : "GCP range 1"
      }
      mode   = "CUSTOM"
      groups = null
    }

    instances = {
      vpn-to-onprem1 = {
        name = "vpn-to-onprem1",
        peer_external_gateway = {
          redundancy_type = "SINGLE_IP_INTERNALLY_REDUNDANT"
          interfaces = [{
            id         = 0
            ip_address = "1.1.1.1"
          }]
        },
        tunnels = {
          remote0 = {
            bgp_peer = {
              address = "169.254.1.2"
              asn     = 65001
            }
            bgp_peer_options                = null
            bgp_session_range               = "169.254.1.1/30"
            ike_version                     = 2
            vpn_gateway_interface           = 0
            peer_external_gateway_interface = 0
            shared_secret                   = "secret"
          }
          remote1 = {
            bgp_peer = {
              address = "169.254.1.6"
              asn     = 65001
            }
            bgp_peer_options                = null
            bgp_session_range               = "169.254.1.5/30"
            ike_version                     = 2
            vpn_gateway_interface           = 1
            peer_external_gateway_interface = null
            shared_secret                   = "secret"
          }
        }
      }
      vpn-to-onprem2 = {
        name = "vpn-to-onprem2",
        peer_external_gateway = {
          redundancy_type = "TWO_IPS_REDUNDANCY"
          interfaces = [{
            id         = 0
            ip_address = "3.3.3.3"
            }, {
            id         = 1
            ip_address = "4.4.4.4"
          }]
        },
        tunnels = {
          remote0 = {
            bgp_peer = {
              address = "169.254.2.2"
              asn     = 65002
            }
            bgp_peer_options                = null
            bgp_session_range               = "169.254.2.1/30"
            ike_version                     = 2
            vpn_gateway_interface           = 0
            peer_external_gateway_interface = 0
            shared_secret                   = "secret"
          }
          remote1 = {
            bgp_peer = {
              address = "169.254.2.6"
              asn     = 65002
            }
            bgp_peer_options                = null
            bgp_session_range               = "169.254.2.5/30"
            ike_version                     = 2
            vpn_gateway_interface           = 1
            peer_external_gateway_interface = 1
            shared_secret                   = "secret"
          }
        }
      }
      vpn-to-gcp = {
        name = "vpn-to-gcp",

        peer_gcp_gateway = "https://www.googleapis.com/compute/v1/projects/<remote_project_id>/regions/<region>/vpnGateways/<remote_vpn_gw_name>"

        tunnels = {
          remote0 = {
            bgp_peer = {
              address = "169.254.3.2"
              asn     = 65003
            }
            bgp_peer_options                = null
            bgp_session_range               = "169.254.3.1/30"
            ike_version                     = 2
            vpn_gateway_interface           = 0
            peer_external_gateway_interface = null
            shared_secret                   = "secret"
          }
          remote1 = {
            bgp_peer = {
              address = "169.254.3.6"
              asn     = 65003
            }
            bgp_peer_options                = null
            bgp_session_range               = "169.254.3.5/30"
            ike_version                     = 2
            vpn_gateway_interface           = 1
            peer_external_gateway_interface = 1
            shared_secret                   = "secret"
          }
        }
      }
    }
  }
}
```

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.58

### Providers

- `google`, version: >= 4.58
- `google-beta`
- `random`



### Resources

- `google_compute_vpn_tunnel` (managed)
- `compute_external_vpn_gateway` (managed)
- `compute_ha_vpn_gateway` (managed)
- `compute_router` (managed)
- `compute_router_interface` (managed)
- `compute_router_peer` (managed)
- `id` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`region`](#region) | `string` | Region to deploy VPN gateway in.
[`vpn_gateway_name`](#vpn_gateway_name) | `string` | VPN gateway name.
[`network`](#network) | `string` | VPC network ID that should be used for deployment.
[`vpn_config`](#vpn_config) | `any` | VPN configuration from GCP to on-prem or from GCP to GCP.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`project`](#project) | `string` | .
[`router_name`](#router_name) | `string` | Cloud router name.
[`labels`](#labels) | `map` | Labels for VPN components.

### Outputs

Name |  Description
--- | ---
`vpn_gw_name` | HA VPN gateway name
`vpn_gw_self_link` | HA VPN gateway self_link
`vpn_gw_local_address_1` | HA VPN gateway IP address 1
`vpn_gw_local_address_2` | HA VPN gateway IP address 2
`random_secret` | HA VPN IPsec tunnels secret that has been randomly generated

### Required Inputs details

#### region

Region to deploy VPN gateway in

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### vpn_gateway_name

VPN gateway name. Gateway created by the module

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### network

VPC network ID that should be used for deployment

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### vpn_config

VPN configuration from GCP to on-prem or from GCP to GCP.
If you'd like secrets to be randomly generated set `shared_secret` to empty string ("").

Example:

```
vpn_config = {
  router_asn    = 65000
  local_network = "vpc-vpn"

  router_advertise_config = {
    ip_ranges = {
      "10.10.0.0/16" : "GCP range 1"
    }
    mode   = "CUSTOM"
    groups = null
  }

  instances = {
    vpn-to-onprem = {
      name = "vpn-to-onprem",
      peer_external_gateway = {
        redundancy_type = "TWO_IPS_REDUNDANCY"
        interfaces = [{
          id         = 0
          ip_address = "1.1.1.1"
          }, {
          id         = 1
          ip_address = "2.2.2.2"
        }]
      },
      tunnels = {
        remote0 = {
          bgp_peer = {
            address = "169.254.1.2"
            asn     = 65001
          }
          bgp_peer_options                = null
          bgp_session_range               = "169.254.1.1/30"
          ike_version                     = 2
          vpn_gateway_interface           = 0
          peer_external_gateway_interface = 0
          shared_secret                   = "secret"
        }
        remote1 = {
          bgp_peer = {
            address = "169.254.1.6"
            asn     = 65001
          }
          bgp_peer_options                = null
          bgp_session_range               = "169.254.1.5/30"
          ike_version                     = 2
          vpn_gateway_interface           = 1
          peer_external_gateway_interface = 1
          shared_secret                   = "secret"
        }
      }
    }
  }
}
```


Type: any

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### project



Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### router_name

Cloud router name. The router is created by the module

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### labels

Labels for VPN components

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>