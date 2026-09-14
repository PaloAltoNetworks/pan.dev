---
hide_title: true
id: vwan
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
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Vwan
title: Palo Alto Networks vWAN Module for Azure
---

# Palo Alto Networks vWAN Module for Azure

This Terraform module manages core Azure Virtual WAN networking components. It enables the creation and configuration of a Virtual WAN, one or more Virtual Hubs, Hub Route Tables, and Hub Connections (such as VNet or VPN Site connections). The module also supports deploying VPN Gateways within hubs and configuring VPN Sites with advanced IPSec settings.

It allows both creating new and referencing existing Virtual WANs and Virtual Hubs, offering flexibility for greenfield and brownfield deployments.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/vwan) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/vwan)

## Usage

-  creates a vWAN, vHub, Connections and Routing Intent resource.

```hcl
virtual_wans = {
  "virtual_wan" = {
    name = "virtual_wan"
    virtual_hubs = {
      "virtual_hub" = {
        name           = "virtual_hub"
        address_prefix = "10.0.0.0/24"
        connections = {
          "app1-to-hub" = {
            name                       = "app1-to-hub"
            connection_type            = "Vnet"
            remote_virtual_network_key = "app1"
          }
          "app2-to-hub" = {
            name                       = "app2-to-hub"
            connection_type            = "Vnet"
            remote_virtual_network_key = "app2"
          }
        }
        routing_intent = {
          routing_intent_name = "routing_intent"
          routing_policy = [
            {
              routing_policy_name = "PrivateTraffic"
              destinations        = ["PrivateTraffic"]
              next_hop_key        = "cloudngfw"
            },
            {
              routing_policy_name = "Internet"
              destinations        = ["Internet"]
              next_hop_key        = "cloudngfw"
            }
          ]
        }
      }
    }
  }
}
```

-  creates a vWAN, vHub, Route Table, Routes and Connections. Associates each Connection with the appropriate Route Table based on the provided configuration.

```hcl
virtual_wans = {
  "virtual_wan" = {
    name = "virtual_wan"
    virtual_hubs = {
      "virtual_hub" = {
        name           = "virtual_hub"
        address_prefix = "10.0.0.0/24"
        route_tables = {
          "route_table" = {
            name   = "route_table"
            labels = ["rt_label01", "rt_label02"]
            routes = {
              "route01" = {
                name              = "route01"
                destinations_type = "CIDR"
                destinations      = ["10.100.0.0/24"]
                next_hop_key      = "ha-ports"
              }
              "route02" = {
                name              = "route02"
                destinations_type = "CIDR"
                destinations      = ["10.100.1.0/24"]
                next_hop_key      = "ha-ports"
              }
            }
          }
        }
        connections = {
          "app1-to-hub" = {
            name                       = "app1-to-hub"
            connection_type            = "Vnet"
            remote_virtual_network_key = "app1"
            routing = {
                associated_route_table_key =  "route_table"
                propagated_route_table_keys = ["route_table"]
            }
          }
          "app2-to-hub" = {
            name                       = "app2-to-hub"
            connection_type            = "Vnet"
            remote_virtual_network_key = "app2"
            routing = {
                associated_route_table_key =  "route_table"
                propagated_route_table_keys = ["route_table"]
            }
          }
        }
      }
    }
  }
}
```

-  creates a vWAN, vHub, VPN Gateway in vHub, VPN Sites and Connections. Associates Connection with the appropriate VPN Site based on the provided configuration.

```hcl
virtual_wans = {
  "virtual_wan" = {
    name = "virtual_wan"
    virtual_hubs = {
      "virtual_hub" = {
        name           = "virtual_hub"
        address_prefix = "10.0.0.0/24"
        connections = {
          "site-to-hub" = {
            name            = "site-to-hub"
            connection_type = "Site-to-Site"
            vpn_site_key    = "site"
            vpn_link = [
              {
                vpn_link_name     = "link-name"
                vpn_site_link_key = "ISPW1"
                bandwidth_mbps    = 50
                ipsec_policy = {
                  dh_group                 = "DHGroup24"
                  ike_encryption_algorithm = "AES256"
                  ike_integrity_algorithm  = "SHA256"
                  encryption_algorithm     = "GCMAES128"
                  integrity_algorithm      = "GCMAES128"
                  pfs_group                = "PFS14"
                  sa_data_size_kb          = 1025
                  sa_lifetime_sec          = 301
                }
              }
            ]
          }
        }
        vpn_gateway = {
          name = "vpn_gateway01"
        }
        vpn_sites = {
          "site" = {
            name          = "site"
            address_cidrs = ["10.100.0.0/24"]
            link = {
              "ISPW1" = {
                name          = "ISPW1"
                ip_address    = "203.0.113.1"
                provider_name = "Provider01"
                speed_in_mbps = 100
              }
              "ISPW2" = {
                name          = "ISPW2"
                ip_address    = "205.0.113.1"
                provider_name = "Provider02"
                speed_in_mbps = 100
              }
            }
          }
        }
      }
    }
  }
}
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 4.0

### Providers

- `azurerm`, version: ~> 4.0



### Resources

- `virtual_hub` (managed)
- `virtual_hub_connection` (managed)
- `virtual_hub_route_table` (managed)
- `virtual_wan` (managed)
- `vpn_gateway` (managed)
- `vpn_gateway_connection` (managed)
- `vpn_site` (managed)
- `virtual_hub` (data)
- `virtual_wan` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`virtual_wan_name`](#virtual_wan_name) | `string` | The name of the Azure Virtual WAN.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group where the Virtual WAN should exist.
[`region`](#region) | `string` | The name of the Azure region to deploy the virtual WAN.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`create`](#create) | `bool` | Controls Virtual WAN creation.
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`allow_branch_to_branch_traffic`](#allow_branch_to_branch_traffic) | `bool` | Optional boolean flag to specify whether branch-to-branch traffic is allowed.
[`disable_vpn_encryption`](#disable_vpn_encryption) | `bool` | Optional boolean flag to specify whether VPN encryption is disabled.
[`virtual_hubs`](#virtual_hubs) | `map` | Map of objects defining Virtual Hubs to manage within a Virtual WAN.
[`connections`](#connections) | `map` | Map of objects describing Connections within a Virtual Hub.
[`route_tables`](#route_tables) | `map` | Map of objects describing Route Tables to manage within a Virtual Hub.
[`vpn_sites`](#vpn_sites) | `map` | Map of objects describing VPN Sites to be configured within the Azure environment.

### Outputs

Name |  Description
--- | ---
`virtual_wan_id` | The identifier of the created or sourced Virtual WAN.
`virtual_hub_ids` | The identifier of the created or sourced Virtual Hub.
`route_table_ids` | A map of identifiers for the created Route Tables.

### Required Inputs details

#### virtual_wan_name

The name of the Azure Virtual WAN.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### resource_group_name

The name of the Resource Group where the Virtual WAN should exist.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### region

The name of the Azure region to deploy the virtual WAN

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### create

Controls Virtual WAN creation. When set to `true`, creates the Virtual WAN, otherwise just uses a pre-existing Virtual WAN.


Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### allow_branch_to_branch_traffic

Optional boolean flag to specify whether branch-to-branch traffic is allowed. Defaults to `true`.

Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### disable_vpn_encryption

Optional boolean flag to specify whether VPN encryption is disabled. Defaults to `false`.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### virtual_hubs

Map of objects defining Virtual Hubs to manage within a Virtual WAN.

Each object's key is an arbitrary identifier you choose (used for indexing inside the module) and each object supports the
following attributes:

- `name`                                   - (string, required) name of the Virtual Hub, must be unique within the Virtual WAN.
- `create`                                 - (bool, optional, defaults to `true`) when set to `true` module will create a new
                                             Virtual Hub, when set to `false` it will reference an existing one by name.
- `resource_group_name`                    - (string, optional) Resource Group in which to create the hub or source it from,
                                             defaults to the module's `resource_group_name` if omitted.
- `region`                                 - (string, optional) Azure region (e.g. `"West Europe"`) for the hub, defaults to
                                             the module's `region` if omitted.
- `address_prefix`                         - (string, required) the address prefix (CIDR) for the hub's internal subnet, must
                                             be at least `/24` (Microsoft recommends `/23`).
- `hub_routing_preference`                 - (string, optional) routing preference for the hub, valid values are:
                                             `ExpressRoute`, `ASPath`, or `VpnGateway`.
- `virtual_router_auto_scale_min_capacity` - (number, optional) minimum capacity for the hub's auto-scale router, Azure default
                                             is `0`.
- `vpn_gateway`                            - (object, optional, defaults to `null`) configuration for an attached VPN Gateway,
                                             if provided this object supports the following attributes:
    - `name`                - (string, required) VPN Gateway name.  
    - `resource_group_name` - (string, optional) overrides hub's Resource Group.  
    - `region`              - (string, optional) overrides hub's Azure region.
    - `scale_unit`          - (number, optional, defaults to `1`) scale unit for the VPN Gateway.
    - `routing_preference`  - (string, optional, defaults to `"Microsoft Network"`) VPN Gateway's routing preference.


Type: 

```hcl
map(object({
    name                                   = string
    create                                 = optional(bool, true)
    resource_group_name                    = optional(string)
    region                                 = optional(string)
    address_prefix                         = string
    hub_routing_preference                 = optional(string)
    virtual_router_auto_scale_min_capacity = optional(number)
    vpn_gateway = optional(object({
      name                = string
      resource_group_name = optional(string)
      region              = optional(string)
      scale_unit          = optional(number, 1)
      routing_preference  = optional(string, "Microsoft Network")
    }), null)
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### connections

Map of objects describing Connections within a Virtual Hub.

Each object represents one Connection and supports the following properties:

- `name`                      - (`string`, required) the name of the Connection, must be unique within the Virtual Hub.
- `connection_type`           - (`string`, required) the type of Connection, use `Vnet` for Virtual Network connections.
- `remote_virtual_network_id` - (`string`, optional) the resource ID of a remote Virtual Network.
- `internet_security_enabled` - (`bool`, optional) the parameter that enables internet-bound traffic from the connected VNet 
                                to be routed through the Virtual Hub for inspection by a Network Virtual Appliance (NVA).
- `hub_key`                   - (`string`, required) the key referencing the Virtual Hub.
- `vpn_site_key`              - (`string`, optional) the key referencing the VPN Site used in this Connection.
- `vpn_link`                  - (`list`, optional, defaults to `[]`) list of VPN link configurations, each object supports the
                                following attributes:
  - `vpn_link_name`                  - (`string`, required) the name of the VPN link.
  - `vpn_site_link_key`              - (`string`, required) the key referencing the VPN Site link.
  - `bandwidth_mbps`                 - (`number`, optional, defaults to `10`) bandwidth limit in Mbps.
  - `bgp_enabled`                    - (`bool`, optional, defaults to `false`) flag that enables BGP on this link.
  - `connection_mode`                - (`string`, optional, defaults to `Default`) VPN connection mode, valid values are:
                                       `Default`, `InitiatorOnly`, `ResponderOnly`.
  - `protocol`                       - (`string`, optional, defaults to `IKEv2`) VPN protocol, valid values are: `IKEv2`,
                                       `IKEv1`.
  - `ratelimit_enabled`              - (`bool`, optional, defaults to `false`) flag that enables rate limiting.
  - `route_weight`                   - (`number`, optional, defaults to `0`) routing weight for this link.
  - `shared_key`                     - (`string`, optional) pre-shared key for the VPN.
  - `local_azure_ip_address_enabled` - (`bool`, optional, defaults to `false`) flag that enables use of local Azure IP address.
  - `ipsec_policy`                   - (`object`, optional) IPSec policy configuration, following attributes are supported:
    - `dh_group`                 - (`string`, optional) Diffie-Hellman group, valid values are: `DHGroup14`, `DHGroup24`,
                                   `ECP256`, `ECP384`.
    - `ike_encryption_algorithm` - (`string`, optional) IKE encryption algorithm, valid values are: `AES128`, `AES256`,
                                   `GCMAES128`, `GCMAES256`.
    - `ike_integrity_algorithm`  - (`string`, optional) IKE integrity algorithm, valid values are: `SHA256`, `SHA384`.
    - `encryption_algorithm`     - (`string`, optional) IPSec encryption algorithm, valid values are: `AES192`, `AES128`,
                                   `AES256`, `DES`, `DES3`, `GCMAES192`, `GCMAES128`, `GCMAES256`, `None`.
    - `integrity_algorithm`      - (`string`, optional) IPSec integrity algorithm, valid values are: `SHA256`, `GCMAES128`,
                                   `GCMAES256`.
    - `pfs_group`                - (`string`, optional) Perfect Forward Secrecy algorithm, valid values are: `ECP384`,
                                   `ECP256`, `PFSMM`, `PFS1`, `PFS14`, `PFS2`, `PFS24`, `PFS2048`, `None`.
    - `sa_data_size_kb`          - (`number`, optional) Security Association size in kilobits, value must be `0` or between
                                   `1024` and `2147483647`.
    - `sa_lifetime_sec`          - (`number`, optional) Security Association lifetime in seconds, value must be between `300`
                                   and `172799`.
- `routing`                   - (`object`, optional) routing configuration, the following attributes are supported:
  - `associated_route_table_key`                - (`string`, optional) key of the associated Route Table.
  - `propagated_route_table_keys`               - (`list(string)`, optional) list of Route Table keys to propagate routes to.
  - `propagated_route_table_labels`             - (`set(string)`, optional) set of labels for propagated Route Tables.
  - `static_vnet_route_name`                    - (`string`, optional) name of the static route.
  - `static_vnet_route_address_prefixes`        - (`set(string)`, optional) set of CIDR address prefixes for static route.
  - `static_vnet_route_next_hop_ip_address`     - (`string`, optional) IP address of the next hop.
  - `static_vnet_local_route_override_criteria` - (`string`, optional, defaults to `Contains`) override criteria for the local
                                                  route, valid values are: `Contains`, `Equal`.


Type: 

```hcl
map(object({
    name                      = string
    connection_type           = string
    hub_key                   = string
    remote_virtual_network_id = optional(string)
    internet_security_enabled = optional(bool)
    vpn_site_key              = optional(string)
    vpn_link = optional(list(object({
      vpn_link_name                  = string
      vpn_site_link_key              = string
      bandwidth_mbps                 = optional(number, 10)
      bgp_enabled                    = optional(bool, false)
      connection_mode                = optional(string, "Default")
      protocol                       = optional(string, "IKEv2")
      ratelimit_enabled              = optional(bool, false)
      route_weight                   = optional(number, 0)
      shared_key                     = optional(string)
      local_azure_ip_address_enabled = optional(bool, false)
      ipsec_policy = optional(object({
        dh_group                 = optional(string)
        ike_encryption_algorithm = optional(string)
        ike_integrity_algorithm  = optional(string)
        encryption_algorithm     = optional(string)
        integrity_algorithm      = optional(string)
        pfs_group                = optional(string)
        sa_data_size_kb          = optional(number)
        sa_lifetime_sec          = optional(number)
      }))
    })), [])
    routing = optional(object({
      associated_route_table_key                = optional(string, "default")
      propagated_route_table_keys               = optional(list(string), ["default"])
      propagated_route_table_labels             = optional(list(string), ["default"])
      static_vnet_route_name                    = optional(string)
      static_vnet_route_address_prefixes        = optional(set(string))
      static_vnet_route_next_hop_ip_address     = optional(string)
      static_vnet_local_route_override_criteria = optional(string)
    }))
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### route_tables

Map of objects describing Route Tables to manage within a Virtual Hub.

Each object defines a Virtual Hub Route Table configuration with attributes to control its association.

List of available attributes for each Route Table object:

- `name`    - (`string`, required) name of the Virtual Hub Route Table.
- `labels`  - (`set`, optional) set of labels associated with the Route Table.
- `hub_key` - (`string`, required) the key referencing the Virtual Hub.


Type: 

```hcl
map(object({
    name    = string
    labels  = optional(set(string))
    hub_key = string
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### vpn_sites

Map of objects describing VPN Sites to be configured within the Azure environment.

Each object defines a single VPN Site and supports the following properties:

- `name`                - (`string`, required) the unique name of the VPN Site.
- `resource_group_name` - (`string`, optional) the name of the Resource Group for the VPN Site.
- `region`              - (`string`, optional) the Azure region where the VPN Site is located.
- `address_cidrs`       - (`set(string)`, required) set of IPv4 CIDR blocks associated with the VPN Site.
- `link`                - (`list(object)`, optional, defaults to `[]`) list of individual link configurations, each object
                          supports the following properties:
  - `name`          - (`string`, required) the name of the link.
  - `ip_address`    - (`string`, optional) the public IP address of the link.
  - `fqdn`          - (`string`, optional) the fully qualified domain name for the link.
  - `provider_name` - (`string`, optional) the name of the service provider.
  - `speed_in_mbps` - (`number`, optional, defaults to `0`) the link speed in Mbps.


Type: 

```hcl
map(object({
    name                = string
    resource_group_name = optional(string)
    region              = optional(string)
    address_cidrs       = optional(set(string))
    link = optional(map(object({
      name          = string
      ip_address    = optional(string)
      fqdn          = optional(string)
      provider_name = optional(string)
      speed_in_mbps = optional(number, 0)
    })), {})
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>