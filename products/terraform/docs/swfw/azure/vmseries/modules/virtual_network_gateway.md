---
hide_title: true
id: virtual_network_gateway
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
sidebar_label: Virtual Network Gateway
title: Palo Alto Networks Virtual Network Gateway Module for Azure
---

# Palo Alto Networks Virtual Network Gateway Module for Azure

A terraform module for deploying a VNG (Virtual Network Gateway) and its components required for the VM-Series firewalls in Azure.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/virtual_network_gateway) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/virtual_network_gateway)

## Usage

In order to use module `virtual_network_gateway`, you need to deploy `azurerm_resource_group` and use module `vnet` as
prerequisites.
Then you can use below code as an example of calling module to create VNG:

```hcl
module "vng" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/virtual_network_gateway"

  for_each = var.virtual_network_gateways

  name                = "${var.name_prefix}${each.value.name}"
  region              = var.region
  resource_group_name = local.resource_group.name

  ip_configurations = each.value.ip_configurations
  instance_settings = each.value.instance_settings
  subnet_id         = "/subscription/xxxx/......."

  azure_bgp_peer_addresses = each.value.azure_bgp_peer_addresses
  bgp                      = each.value.bgp
  local_network_gateways   = each.value.local_network_gateways
  vpn_clients              = each.value.vpn_clients

  tags = var.tags
}
```

Below there are provided sample values for `virtual_network_gateways` map:

```hcl
virtual_network_gateways = {
  expressroute = {
    name = "expressroute"
    instance_settings = {
      type = "ExpressRoute"
      # vpn_type = "PolicyBased"
      sku = "Standard"
      # generation = "Generation1"
    }
    vnet_key   = "transit"
    subnet_key = "vpn"
    ip_configurations = {
      primary = {
        create_public_ip = true
        name             = "primary"
        public_ip_name   = "expressroute_pip"
      }
    }

  }
  expressroute_policy_based = {
    name = "er_policy"
    instance_settings = {
      type       = "ExpressRoute"
      vpn_type   = "PolicyBased"
      sku        = "Standard"
      generation = "Generation2"
    }
    vnet_key   = "er"
    subnet_key = "vpn"
    ip_configurations = {
      primary = {
        create_public_ip = true
        name             = "primary"
        public_ip_name   = "er_policy_pip"
      }
    }

  }
  vpn_simple = {
    name = "simple-vpn"
    instance_settings = {
      type = "Vpn"
      # vpn_type   = "PolicyBased"
      sku        = "VpnGw1"
      generation = "Generation1"
    }
    vnet_key   = "er"
    subnet_key = "vpn"
    ip_configurations = {
      primary = {
        create_public_ip = true
        name             = "primary"
        public_ip_name   = "simple_vpn_pip"
      }
    }

  }
  "vng" = {
    name = "vng"
    instance_settings = {
      type          = "Vpn"
      sku           = "VpnGw2AZ"
      generation    = "Generation2"
      active_active = true
    }
    vnet_key   = "transit"
    subnet_key = "vpn"
    ip_configurations = {
      primary = {
        name             = "primary"
        create_public_ip = true
        public_ip_name   = "vng-primary-pip"
      }
      secondary = {
        name             = "secondary"
        create_public_ip = true
        public_ip_name   = "vng-secondary-pip"
      }
    }

    azure_bgp_peer_addresses = {
      one_primary     = "169.254.21.2"
      one_secondary   = "169.254.22.2"
      two_primary     = "169.254.21.12"
      two_secondary   = "169.254.22.12"
      three_primary   = "169.254.21.22"
      three_secondary = "169.254.22.22"
    }
    bgp = {
      enable = true
      configuration = {
        asn = "65002"
        primary_peering_addresses = {
          name               = "primary"
          apipa_address_keys = ["one_primary", "two_primary", "three_primary"]
        }
        secondary_peering_addresses = {
          name               = "secondary"
          apipa_address_keys = ["one_secondary", "two_secondary", "three_secondary"]
        }
      }
    }
    local_network_gateways = {
      lg1 = {
        name            = "local_gw_1"
        gateway_address = "8.8.8.8"
        remote_bgp_settings = {
          asn                 = "65000"
          bgp_peering_address = "169.254.21.1"
        }
        connection = {
          name = "connection_1"
          custom_bgp_addresses = {
            primary_key   = "one_primary"
            secondary_key = "one_secondary"
          }
          mode       = "InitiatorOnly"
          shared_key = "test123"
          ipsec_policies = [
            {
              dh_group         = "ECP384"
              ike_encryption   = "AES256"
              ike_integrity    = "SHA256"
              ipsec_encryption = "AES256"
              ipsec_integrity  = "SHA256"
              pfs_group        = "ECP384"
              sa_datasize      = "102400000"
              sa_lifetime      = "14400"
            }
          ]
        }
      }
      lg2 = {
        name            = "local_gw_2"
        gateway_address = "4.4.4.4"
        remote_bgp_settings = {
          asn                 = "65000"
          bgp_peering_address = "169.254.22.1"
        }
        connection = {
          name = "connection_2"
          custom_bgp_addresses = {
            primary_key   = "two_primary"
            secondary_key = "two_secondary"
          }
          mode       = "InitiatorOnly"
          shared_key = "test123"
          ipsec_policies = [
            {
              dh_group         = "ECP384"
              ike_encryption   = "AES256"
              ike_integrity    = "SHA256"
              ipsec_encryption = "AES256"
              ipsec_integrity  = "SHA256"
              pfs_group        = "ECP384"
              sa_datasize      = "102400000"
              sa_lifetime      = "14400"
            }
          ]
        }
      }
    }
  }
}
```

To make defining the VNGs easy, you can use the following variable in *glue code*:

```hcl
variable "virtual_network_gateways" {
  description = "Map of virtual_network_gateways to create"
  default     = {}
  nullable    = false
  type = map(object({
    name = string
    instance_settings = object({
      type          = optional(string)
      vpn_type      = optional(string)
      sku           = optional(string)
      active_active = optional(bool)
      generation    = optional(string)
    })
    vnet_key   = string
    subnet_key = string

    ip_configurations = object({
      primary = object({
        name                          = string
        create_public_ip              = optional(bool)
        public_ip_name                = string
        private_ip_address_allocation = optional(string)
      })
      secondary = optional(object({
        name                          = string
        create_public_ip              = optional(bool)
        public_ip_name                = string
        private_ip_address_allocation = optional(string)
      }))
    })

    azure_bgp_peer_addresses = optional(map(string))
    bgp = optional(object({
      enable = optional(bool, false)
      configuration = optional(object({
        asn         = string
        peer_weight = optional(number)
        primary_peering_addresses = object({
          name               = string
          apipa_address_keys = list(string)
          default_addresses  = optional(list(string))
        })
        secondary_peering_addresses = optional(object({
          name               = string
          apipa_address_keys = list(string)
          default_addresses  = optional(list(string))
        }))
      }))
    }))
    local_network_gateways = optional(map(object({
      name = string
      remote_bgp_settings = optional(object({
        asn                 = string
        bgp_peering_address = string
        peer_weight         = optional(number)
      }))
      gateway_address = optional(string)
      address_space   = optional(list(string), [])
      connection = object({
        name = string
        custom_bgp_addresses = optional(object({
          primary_key   = string
          secondary_key = optional(string)
        }))
        ipsec_policies = list(object({
          dh_group         = string
          ike_encryption   = string
          ike_integrity    = string
          ipsec_encryption = string
          ipsec_integrity  = string
          pfs_group        = string
          sa_datasize      = optional(string)
          sa_lifetime      = optional(string)
        }))
        type       = optional(string)
        mode       = optional(string)
        shared_key = optional(string)
      })
    })), {})
    vpn_clients = optional(map(object({
      address_space         = string
      aad_tenant            = optional(string)
      aad_audience          = optional(string)
      aad_issuer            = optional(string)
      root_certificates     = optional(map(string), {})
      revoked_certificates  = optional(map(string), {})
      radius_server_address = optional(string)
      radius_server_secret  = optional(string)
      vpn_client_protocols  = optional(list(string))
      vpn_auth_types        = optional(list(string))
    })), {})
  }))
}
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 4.0

### Providers

- `azurerm`, version: ~> 4.0



### Resources

- `local_network_gateway` (managed)
- `public_ip` (managed)
- `virtual_network_gateway` (managed)
- `virtual_network_gateway_connection` (managed)
- `public_ip` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Virtual Network Gateway.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`subnet_id`](#subnet_id) | `string` | An ID of a Subnet in which the Virtual Network Gateway will be created.
[`instance_settings`](#instance_settings) | `object` | A map containing the basic Virtual Network Gateway instance settings.
[`ip_configurations`](#ip_configurations) | `object` | A map defining the Public IPs used by the Virtual Network Gateway.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`zones`](#zones) | `list` | After provider version 3.
[`edge_zone`](#edge_zone) | `string` | Specifies the Edge Zone within the Azure Region where this Virtual Network Gateway should exist.
[`private_ip_address_enabled`](#private_ip_address_enabled) | `bool` | Controls whether the private IP is enabled on the Virtual Netowkr Gateway.
[`default_local_network_gateway_id`](#default_local_network_gateway_id) | `string` | The ID of the Local Network Gateway.
[`azure_bgp_peer_addresses`](#azure_bgp_peer_addresses) | `map` | Map of IP addresses used on Azure side for BGP.
[`bgp`](#bgp) | `object` | A map controlling the BGP configuration used by this Virtual Network Gateway.
[`local_network_gateways`](#local_network_gateways) | `map` | Map of Local Network Gateways and their connections.
[`vpn_clients`](#vpn_clients) | `map` | VPN client configurations (IPSec point-to-site connections).

### Outputs

Name |  Description
--- | ---
`public_ip` | Public IP addresses for Virtual Network Gateway
`ipsec_policy` | IPsec policy used for Virtual Network Gateway connection

### Required Inputs details

#### name

The name of the Virtual Network Gateway.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### resource_group_name

The name of the Resource Group to use.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### region

The name of the Azure region to deploy the resources in.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### subnet_id

An ID of a Subnet in which the Virtual Network Gateway will be created.

This has to be a dedicated Subnet named `GatewaySubnet`.


Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### instance_settings

A map containing the basic Virtual Network Gateway instance settings.

You configure the size, capacity and capabilities with 3/4 parameters that heavily depend on each other. Please follow the
table below for details on available combinations:

<table>
  <tr>
    <th>type</th>
    <th>generation</th>
    <th>sku</th>
  </tr>
  <tr>
    <td rowspan="6">ExpressRoute</td>
    <td rowspan="6">N/A</td>
    <td>Standard</td>
  </tr>
  <tr><td>HighPerformance</td></tr>
  <tr><td>UltraPerformance</td></tr>
  <tr><td>ErGw1AZ</td></tr>
  <tr><td>ErGw2AZ</td></tr>
  <tr><td>ErGw3AZ</td></tr>
  <tr>
    <td rowspan="11">Vpn</td>
    <td rowspan="3">Generation1</td>
    <td>Basic</td>
  </tr>
  <tr><td>VpnGw1</td></tr>
  <tr><td>VpnGw1AZ</td></tr>
  <tr>
    <td rowspan="8">Generation1/Generation2</td>
    <td>VpnGw2</td>
  </tr>
  <tr><td>VpnGw3</td></tr>
  <tr><td>VpnGw4</td></tr>
  <tr><td>VpnGw5</td></tr>
  <tr><td>VpnGw2AZ</td></tr>
  <tr><td>VpnGw3AZ</td></tr>
  <tr><td>VpnGw4AZ</td></tr>
  <tr><td>VpnGw5AZ</td></tr>
</table>

Following properties are available:

- `type`          - (`string`, optional, defaults to `Vpn`) the type of the Virtual Network Gateway, possible values are: `Vpn`
                    or `ExpressRoute`.
- `vpn_type`      - (`string`, optional, defaults to `RouteBased`) the routing type of the Virtual Network Gateway, possible
                    values are: `RouteBased` or `PolicyBased`.
- `generation`    - (`string`, optional, defaults to `Generation1`) the Generation of the Virtual Network Gateway, possible
                    values are: `None`, `Generation1` or `Generation2`. This property is ignored when type is set to 
                    `ExpressRoute`.
- `sku`           - (`string`, optional, defaults to `Basic`) sets the size and capacity of the Virtual Network Gateway.
- `active_active` - (`bool`, optional, defaults to `false`) when set to true creates an active-active Virtual Network Gateway,
                    active-passive otherwise. Not supported for `Basic` and `Standard` SKUs.


Type: 

```hcl
object({
    type          = optional(string, "Vpn")
    vpn_type      = optional(string, "RouteBased")
    generation    = optional(string, "Generation1")
    sku           = optional(string, "Basic")
    active_active = optional(bool, false)

  })
```


<sup>[back to list](#modules-required-inputs)</sup>

#### ip_configurations

A map defining the Public IPs used by the Virtual Network Gateway.
  
Following properties are available:
- `primary`   - (`map`, required) a map defining the primary Public IP address, following properties are available:
  - `name`                           - (`string`, required) name of the IP config.
  - `create_public_ip`               - (`bool`, optional, defaults to `true`) controls if a Public IP is created or sourced.
  - `public_ip_name`                 - (`string`, optional) name of a Public IP resource, required unless `public_ip` module
                                       and `public_ip_id` property are used. Depending on the value of `create_public_ip`
                                       property, this will be a name of a newly created or existing resource (for values of
                                       `true` and `false` accordingly).
  - `public_ip_resource_group_name`  - (`string`, optional, defaults to the Load Balancer's RG) name of a Resource Group
                                       hosting an existing Public IP resource.
  - `public_ip_id`                   - (`string`, optional, defaults to `null`) ID of the public IP to associate with the
                                       interface. Property is used when public IP is not created or sourced within this module.
  - `dynamic_private_ip_allocation`  - (`bool`, optional, defaults to `true`) controls if the private IP address is assigned
                                       dynamically or statically.
- `secondary` - (`map`, optional, defaults to `null`) a map defining the secondary Public IP address resource. Required only
                for `type` set to `Vpn` and `active-active` set to `true`. Same properties available as for `primary` property.



Type: 

```hcl
object({
    primary = object({
      name                          = string
      create_public_ip              = optional(bool, true)
      public_ip_name                = optional(string)
      public_ip_resource_group_name = optional(string)
      public_ip_id                  = optional(string)
      private_ip_address_allocation = optional(string, "Dynamic")
    })
    secondary = optional(object({
      name                          = string
      create_public_ip              = optional(bool, true)
      public_ip_name                = optional(string)
      public_ip_id                  = optional(string)
      private_ip_address_allocation = optional(string, "Dynamic")
    }))
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### zones

After provider version 3.x you need to specify in which availability zone(s) you want to place a Public IP address.

For zone-redundant with 3 availability zones in current region, value will be:
```["1","2","3"]```


Type: list(string)

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### edge_zone

Specifies the Edge Zone within the Azure Region where this Virtual Network Gateway should exist.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### private_ip_address_enabled

Controls whether the private IP is enabled on the Virtual Netowkr Gateway.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### default_local_network_gateway_id

The ID of the Local Network Gateway.

When set, the outbound Internet traffic from the Virtual Network, in which the gateway is created, will be routed through Local
Network Gateway (forced tunnelling).


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### azure_bgp_peer_addresses

Map of IP addresses used on Azure side for BGP.

Map is used to not to duplicate IP address and refer to keys while configuring:
- `custom_bgp_addresses`
- `peering_addresses` in `local_bgp_settings`

Example:

```hcl
azure_bgp_peers_addresses = {
  primary_1   = "169.254.21.2"
  secondary_1 = "169.254.22.2"
  primary_2   = "169.254.21.6"
  secondary_2 = "169.254.22.6"
}
```


Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### bgp

A map controlling the BGP configuration used by this Virtual Network Gateway.

Following properties are available:

- `enable`        - (`bool`, optional, defaults to `false`) controls whether BGP (Border Gateway Protocol) will be enabled for
                    this Virtual Network Gateway
- `configuration` - (`map`, optional, defaults to `null`) contains BGP configuration, required when `enable` is set to `true`.
                    Contains the following properties:
  - `asn`                         - (`string`, required) the Autonomous System Number (ASN) to use as part of the BGP.
  - `peer_weigth`                 - (`number`, optional`, defaults to `null`) weight added to routes which have been learned
                                    through BGP peering. Values are between `0` and `100`.
  - `primary_peering_addresses`   - (`map`, required) a map defining peering addresses, following properties are available:
    - `name`               - (`string`, required) name of the configuration.
    - `apipa_address_keys` - (`list`, required) list of keys identifying addresses defined in `azure_bgp_peer_addresses`.
    - `default_addresses`  - (`list`, optional, defaults to `null`) is the list of peering address assigned to the BGP peer of
                             the Virtual Network Gateway.
  - `secondary_peering_addresses` - (`map`, optional, defaults to `null`) a map defining secondary peering addresses, required
                                    only for `active-active` deployments. Same properties are available.


Type: 

```hcl
object({
    enable = optional(bool, false)
    configuration = optional(object({
      asn         = string
      peer_weight = optional(number)
      primary_peering_addresses = object({
        name               = string
        apipa_address_keys = list(string)
        default_addresses  = optional(list(string))
      })
      secondary_peering_addresses = optional(object({
        name               = string
        apipa_address_keys = list(string)
        default_addresses  = optional(list(string))
      }))
    }))
  })
```


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### local_network_gateways

Map of Local Network Gateways and their connections.

Every object in the map contains following attributes:
  
- `name`                 - (`string`, required) the name of the Local Network Gateway.
- `remote_bgp_settings`  - (`list`, optional, defaults to `[]`) block containing Local Network Gateway's BGP speaker settings:
  - `asn`                 - (`string`, required) the BGP speaker's ASN.
  - `bgp_peering_address` - (`string`, required) the BGP peering address and BGP identifier of this BGP speaker.
  - `peer_weight`         - (`number`, optional, defaults to `null`) the weight added to routes learned from this BGP speaker.
- `gateway_address`      - (`string`, optional, defaults to `null`) the gateway IP address to connect with.
- `address_space`        - (`list`, optional, defaults to `[]`) the list of string CIDRs representing the address spaces
                           the gateway exposes.
- `custom_bgp_addresses` - (`list`, optional, defaults to `[]`) Border Gateway Protocol custom IP Addresses,
                           which can only be used on IPSec / active-active connections. Object contains 2 attributes:
  - `primary_key`   - (`string`, required) single IP address that is part of the azurerm_virtual_network_gateway
                      ip_configuration (first one)
  - `secondary_key` - (`string`, optional, defaults to `null`) single IP address that is part of the
                      azurerm_virtual_network_gateway ip_configuration (second one)
- `connection`           - (`map`, required) a map defining configuration for a VPN connection between Azure VNG and on-premises
                           VPN device. Contains the following properties:
  - `name`            - (`string`, required) the name of the Virtual Network Gateway connection.
  - `ipsec_policies`  - (`list`, required) list of IPsec policies used for Virtual Network Connection. A single policy consist
                        of the following properties:
    - `dh_group`         - (`string`, required) the DH group used in IKE phase 1 for initial SA.
    - `ike_encryption`   - (`string`, required) the IKE encryption algorithm.
    - `ike_integrity`    - (`string`, required) the IKE integrity algorithm.
    - `ipsec_encryption` - (`string`, required) the IPSec encryption algorithm.
    - `ipsec_integrity`  - (`string`, required) the IPSec integrity algorithm.
    - `pfs_group`        - (`string`, required) the DH group used in IKE phase 2 for new child SA.
    - `sa_datasize`      - (`string`, optional, defaults to `102400000`) the IPSec SA payload size in KB. Must be at least
                           1024 KB.
    - `sa_lifetime`      - (`string`, optional, defaults to `27000`) the IPSec SA lifetime in seconds. Must be at least 300
                           seconds.
  - `connection_type` - (`string`, optional, defaults to `IPsec`) a VPN connection type, can be one of: `IPsec`, `ExpressRoute`
                        or `Vnet2Vnet`.
  - `connection_mode` - (`string`, optional, defaults to `Default`) connection mode to use, can be one of: `Default`,
                        `InitiatorOnly` or `ResponderOnly`.
  - `shared_key`      - (`string`, optional, defaults to `null`) a shared IPSec key used during connection creation.


Type: 

```hcl
map(object({
    name = string
    remote_bgp_settings = optional(object({
      asn                 = string
      bgp_peering_address = string
      peer_weight         = optional(number)
    }))
    address_space   = optional(list(string), [])
    gateway_address = optional(string)
    connection = object({
      name = string
      custom_bgp_addresses = optional(object({
        primary_key   = string
        secondary_key = optional(string)
      }))
      ipsec_policies = list(object({
        dh_group         = string
        ike_encryption   = string
        ike_integrity    = string
        ipsec_encryption = string
        ipsec_integrity  = string
        pfs_group        = string
        sa_datasize      = optional(string, "102400000")
        sa_lifetime      = optional(string, "27000")
      }))
      type       = optional(string, "IPsec")
      mode       = optional(string, "Default")
      shared_key = optional(string)
    })
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### vpn_clients

VPN client configurations (IPSec point-to-site connections).

This is a map, where each value is a VPN client configuration. Keys are just names describing a particular configuration. They
are not being used in the actual deployment.

Following properties are available:

- `address_space`         - (`string`, required) the address space out of which IP addresses for vpn clients will be taken.
                            You can provide more than one address space, e.g. in CIDR notation.
- `aad_tenant`            - (`string`, optional, defaults to `null`) AzureAD Tenant URL
- `aad_audience`          - (`string`, optional, defaults to `null`) the client id of the Azure VPN application.
                            See Create an Active Directory (AD) tenant for P2S OpenVPN protocol connections for values
- `aad_issuer`            - (`string`, optional, defaults to `null`) the STS url for your tenant
- `root_certificates`     - (`map`, optional, defaults to `{}`) a map defining root certificates used to sign client 
                            certificates used by VPN clients. The key is a name of the certificate, value is the public
                            certificate in PEM format.
- `revoked_certificates`  - (`map`, optional, defaults to `null`) a map defining revoked certificates. The key is a name of
                            the certificate, value is the thumbprint of the certificate.
- `radius_server_address` - (`string`, optional, defaults to `null`) the address of the Radius server.
- `radius_server_secret`  - (`string`, optional, defaults to `null`) the secret used by the Radius server.
- `vpn_client_protocols`  - (`list(string)`, optional, defaults to `null`) list of the protocols supported by the vpn client.
                            The supported values are SSTP, IkeV2 and OpenVPN. Values SSTP and IkeV2 are incompatible with
                            the use of aad_tenant, aad_audience and aad_issuer.
- `vpn_auth_types`        - (`list(string)`, optional, defaults to `null`) list of the vpn authentication types for
                            the Virtual Network Gateway. The supported values are AAD, Radius and Certificate.
- `custom_routes`         - (`map`, optional, defaults to `{}`) a map defining custom routes. Each route is a list of address
                            blocks reserved for this Virtual Network (in CIDR notation). Keys in this map are only to identify
                            the CIDR blocks, values are lists of the actual address blocks.


Type: 

```hcl
map(object({
    address_space         = string
    aad_tenant            = optional(string)
    aad_audience          = optional(string)
    aad_issuer            = optional(string)
    root_certificates     = optional(map(string), {})
    revoked_certificates  = optional(map(string), {})
    radius_server_address = optional(string)
    radius_server_secret  = optional(string)
    vpn_client_protocols  = optional(list(string))
    vpn_auth_types        = optional(list(string))
    custom_routes         = optional(map(list(string)), {})
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>