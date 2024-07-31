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
  location            = var.region
  resource_group_name = local.resource_group.name

  network   = each.value.network
  subnet_id = module.vnet[each.value.vnet_key].subnet_ids[each.value.subnet_key]

  virtual_network_gateway  = each.value.virtual_network_gateway
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
    virtual_network_gateway = {
      type = "ExpressRoute"
      # vpn_type = "PolicyBased"
      sku = "Standard"
      # generation = "Generation1"
    }
    vnet_key   = "transit"
    subnet_key = "vpn"
    network = {
      public_ip_zones = ["1"]
      ip_configurations = {
        primary = {
          create_public_ip = true
          name             = "primary"
          public_ip_name   = "expressroute_pip"
        }
      }
    }
  }
  expressroute_policy_based = {
    name = "er_policy"
    virtual_network_gateway = {
      type       = "ExpressRoute"
      vpn_type   = "PolicyBased"
      sku        = "Standard"
      generation = "Generation2"
    }
    vnet_key   = "er"
    subnet_key = "vpn"
    network = {
      public_ip_zones = ["1"]
      ip_configurations = {
        primary = {
          create_public_ip = true
          name             = "primary"
          public_ip_name   = "er_policy_pip"
        }
      }
    }
  }
  vpn_simple = {
    name = "simple-vpn"
    virtual_network_gateway = {
      type = "Vpn"
      # vpn_type   = "PolicyBased"
      sku        = "VpnGw1"
      generation = "Generation1"
    }
    vnet_key   = "er"
    subnet_key = "vpn"
    network = {
      public_ip_zones = []
      ip_configurations = {
        primary = {
          create_public_ip = true
          name             = "primary"
          public_ip_name   = "simple_vpn_pip"
        }
      }
    }
  }
  "vng" = {
    name = "vng"
    virtual_network_gateway = {
      type          = "Vpn"
      sku           = "VpnGw2AZ"
      generation    = "Generation2"
      active_active = true
    }
    vnet_key   = "transit"
    subnet_key = "vpn"
    network = {
      public_ip_zones = ["1", "2", "3"]
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
    virtual_network_gateway = object({
      type          = optional(string)
      vpn_type      = optional(string)
      sku           = optional(string)
      active_active = optional(bool)
      generation    = optional(string)
      custom_routes = optional(map(list(string)))
    })
    vnet_key   = string
    subnet_key = string
    network = object({
      public_ip_zones = optional(list(string))
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
      private_ip_address_enabled       = optional(bool)
      default_local_network_gateway_id = optional(string)
      edge_zone                        = optional(string)
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
- `azurerm`, version: ~> 3.98

### Providers

- `azurerm`, version: ~> 3.98



### Resources

- `local_network_gateway` (managed)
- `public_ip` (managed)
- `virtual_network_gateway` (managed)
- `virtual_network_gateway_connection` (managed)
- `public_ip` (data)

### Required Inputs

<<<<<<< HEAD
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
[`default_local_network_gateway_id`](#default_local_network_gateway_id) | `string` | The ID of the local network gateway.
[`azure_bgp_peer_addresses`](#azure_bgp_peer_addresses) | `map` | Map of IP addresses used on Azure side for BGP.
[`bgp`](#bgp) | `object` | A map controlling the BGP configuration used by this Virtual Network Gateway.
[`local_network_gateways`](#local_network_gateways) | `map` | Map of local network gateways and their connections.
[`vpn_clients`](#vpn_clients) | `map` | VPN client configurations (IPSec point-to-site connections).
=======
| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of a pre-existing Resource Group to place the resources in. | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | Region to deploy load balancer and dependencies. | `string` | n/a | yes |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | A prefix added to all resource names created by this module | `string` | `""` | no |
| <a name="input_name_suffix"></a> [name\_suffix](#input\_name\_suffix) | A suffix added to all resource names created by this module | `string` | `""` | no |
| <a name="input_name"></a> [name](#input\_name) | The name of the Virtual Network Gateway. Changing this forces a new resource to be created | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | Azure tags to apply to the created resources. | `map(string)` | `\{\}` | no |
| <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones) | If false, all the subnet-associated frontends and also all created Public IP addresses default to not to use Availability Zones (the `No-Zone` setting). It is intended for the regions that do not yet support Availability Zones. | `bool` | `true` | no |
| <a name="input_avzones"></a> [avzones](#input\_avzones) | After provider version 3.x you need to specify in which availability zone(s) you want to place IP.<br />ie: for zone-redundant with 3 availability zone in current region value will be:<pre>["1","2","3"]</pre> | `list(string)` | `[]` | no |
| <a name="input_type"></a> [type](#input\_type) | The type of the Virtual Network Gateway. Valid options are Vpn or ExpressRoute. Changing the type forces a new resource to be created | `string` | n/a | yes |
| <a name="input_vpn_type"></a> [vpn\_type](#input\_vpn\_type) | The routing type of the Virtual Network Gateway. Valid options are RouteBased or PolicyBased. Defaults to RouteBased. Changing this forces a new resource to be created. | `string` | `"RouteBased"` | no |
| <a name="input_sku"></a> [sku](#input\_sku) | Configuration of the size and capacity of the virtual network gateway. Valid options are Basic, Standard, HighPerformance, UltraPerformance, ErGw1AZ, ErGw2AZ, ErGw3AZ, VpnGw1, VpnGw2, VpnGw3, VpnGw4,VpnGw5, VpnGw1AZ, VpnGw2AZ, VpnGw3AZ,VpnGw4AZ and VpnGw5AZ and depend on the type, vpn\_type and generation arguments. A PolicyBased gateway only supports the Basic SKU. Further, the UltraPerformance SKU is only supported by an ExpressRoute gateway. | `string` | n/a | yes |
| <a name="input_active_active"></a> [active\_active](#input\_active\_active) | If true, an active-active Virtual Network Gateway will be created. An active-active gateway requires a HighPerformance or an UltraPerformance SKU. If false, an active-standby gateway will be created. Defaults to false. | `bool` | `false` | no |
| <a name="input_default_local_network_gateway_id"></a> [default\_local\_network\_gateway\_id](#input\_default\_local\_network\_gateway\_id) | The ID of the local network gateway through which outbound Internet traffic from the virtual network in which the gateway is created will be routed (forced tunnelling) | `string` | n/a | yes |
| <a name="input_edge_zone"></a> [edge\_zone](#input\_edge\_zone) | Specifies the Edge Zone within the Azure Region where this Virtual Network Gateway should exist. | `string` | n/a | yes |
| <a name="input_enable_bgp"></a> [enable\_bgp](#input\_enable\_bgp) | If true, BGP (Border Gateway Protocol) will be enabled for this Virtual Network Gateway. Defaults to false | `bool` | `false` | no |
| <a name="input_generation"></a> [generation](#input\_generation) | The Generation of the Virtual Network gateway. Possible values include Generation1, Generation2 or None | `string` | `"Generation1"` | no |
| <a name="input_private_ip_address_enabled"></a> [private\_ip\_address\_enabled](#input\_private\_ip\_address\_enabled) | Should private IP be enabled on this gateway for connections? | `bool` | n/a | yes |
| <a name="input_ip_configuration"></a> [ip\_configuration](#input\_ip\_configuration) | List of IP configurations - every object in the list contains attributes:<br /><br />- name - name of the IP configuration<br />- create\_public\_ip - boolean value, true if public IP needs to be created<br />- public\_ip\_name - name of the public IP resource used, when there is no need to create new one<br />- private\_ip\_address\_allocation - defines how the private IP address of the gateways virtual interface is assigned. Valid options are Static or Dynamic. Defaults to Dynamic.<br />- public\_ip\_standard\_sku - defaults to `false`, when set to `true` creates a Standard SKU, statically allocated public IP, otherwise it will be a Basic/Dynamic one.<br />- subnet\_id - the ID of the gateway subnet of a virtual network in which the virtual network gateway will be created.<br /><br />Example:<br /><br />ip\_configuration = [<br />  \{<br />    name             = "001"<br />    create\_public\_ip = true<br />    subnet\_id        = "ID\_for\_subnet\_GatewaySubnet"<br />  \},<br />  \{<br />    name             = "002"<br />    create\_public\_ip = true<br />    subnet\_id        = "ID\_for\_subnet\_GatewaySubnet"<br />  \}<br />] | `list(any)` | n/a | yes |
| <a name="input_vpn_client_configuration"></a> [vpn\_client\_configuration](#input\_vpn\_client\_configuration) | List of VPN client configurations - every object in the list contains attributes:<br />- address\_space - the address space out of which IP addresses for vpn clients will be taken. You can provide more than one address space, e.g. in CIDR notation.<br />- aad\_tenant - AzureAD Tenant URL<br />- aad\_audience - the client id of the Azure VPN application. See Create an Active Directory (AD) tenant for P2S OpenVPN protocol connections for values<br />- aad\_issuer - the STS url for your tenant<br />- root\_certificate - one or more root\_certificate blocks which are defined below. These root certificates are used to sign the client certificate used by the VPN clients to connect to the gateway.<br />- revoked\_certificate - one or more revoked\_certificate blocks which are defined below.<br />- radius\_server\_address - the address of the Radius server.<br />- radius\_server\_secret - the secret used by the Radius server.<br />- vpn\_client\_protocols - list of the protocols supported by the vpn client. The supported values are SSTP, IkeV2 and OpenVPN. Values SSTP and IkeV2 are incompatible with the use of aad\_tenant, aad\_audience and aad\_issuer.<br />- vpn\_auth\_types - list of the vpn authentication types for the virtual network gateway. The supported values are AAD, Radius and Certificate. | `list(any)` | n/a | yes |
| <a name="input_azure_bgp_peers_addresses"></a> [azure\_bgp\_peers\_addresses](#input\_azure\_bgp\_peers\_addresses) | Map of IP addresses used on Azure side for BGP. Map is used to not to duplicate IP address and refer to keys while configuring:<br />- custom\_bgp\_addresses<br />- peering\_addresses in local\_bgp\_settings<br /><br />Example:<br /><br />azure\_bgp\_peers\_addresses = \{<br />  primary\_1   = "169.254.21.2"<br />  secondary\_1 = "169.254.22.2"<br />  primary\_2   = "169.254.21.6"<br />  secondary\_2 = "169.254.22.6"<br />\} | `map(string)` | n/a | yes |
| <a name="input_local_bgp_settings"></a> [local\_bgp\_settings](#input\_local\_bgp\_settings) | Map of BGP settings:<br />- asn - the Autonomous System Number (ASN) to use as part of the BGP.<br />- peering\_addresses - a map of peering addresses, which contains 1 (for active-standby) or 2 objects (for active-active) with:<br />  - key is the ip configuration name<br />  - apipa\_addresses is the list of keys for IP addresses defined in variable azure\_bgp\_peers\_addresses<br />- peer\_weight - the weight added to routes which have been learned through BGP peering. Valid values can be between 0 and 100.<br /><br />Example:<br /><br />local\_bgp\_settings = \{<br />  asn = "65001"<br />  peering\_addresses = \{<br />    "001" = \{<br />      apipa\_addresses = ["primary\_1", "primary\_2"]<br />    \},<br />    "002" = \{<br />      apipa\_addresses = ["secondary\_1", "secondary\_2"]<br />    \}<br />  \}<br />\} | `any` | n/a | yes |
| <a name="input_custom_route"></a> [custom\_route](#input\_custom\_route) | List of custom routes - every object in the list contains attributes:<br />- address\_prefixes - a list of address blocks reserved for this virtual network in CIDR notation as defined below. | `list(any)` | n/a | yes |
| <a name="input_local_network_gateways"></a> [local\_network\_gateways](#input\_local\_network\_gateways) | Map of local network gateways - every object in the map contains attributes:<br />- name - the name of the local network gateway.<br />- connection - the name of the virtual network gateway connection.<br />- remote\_bgp\_settings - block containing Local Network Gateway's BGP speaker settings:<br />  - asn - the BGP speaker's ASN.<br />  - bgp\_peering\_address - the BGP peering address and BGP identifier of this BGP speaker.<br />  - peer\_weight - the weight added to routes learned from this BGP speaker.<br />- gateway\_address - the gateway IP address to connect with.<br />- address\_space - the list of string CIDRs representing the address spaces the gateway exposes.<br />- custom\_bgp\_addresses - Border Gateway Protocol custom IP Addresses, which can only be used on IPSec / active-active connections. Object contains 2 attributes:<br />  - primary - single IP address that is part of the azurerm\_virtual\_network\_gateway ip\_configuration (first one)<br />  - secondary - single IP address that is part of the azurerm\_virtual\_network\_gateway ip\_configuration (second one)<br /><br />Example:<br /><br />local\_network\_gateways = \{<br />  "lg1" = \{<br />    name            = "001"<br />    connection      = "001"<br />    gateway\_address = "PUBLIC\_IP\_1"<br />    remote\_bgp\_settings = [\{<br />      asn                 = "65002"<br />      bgp\_peering\_address = "169.254.21.1"<br />    \}]<br />    custom\_bgp\_addresses = [<br />      \{<br />        primary   = "primary\_1"<br />        secondary = "secondary\_1"<br />      \}<br />    ]<br />  \}<br />  "lg2" = \{<br />    name            = "002"<br />    connection      = "002"<br />    gateway\_address = "PUBLIC\_IP\_2"<br />    remote\_bgp\_settings = [\{<br />      asn                 = "65003"<br />      bgp\_peering\_address = "169.254.21.5"<br />    \}]<br />    custom\_bgp\_addresses = [<br />      \{<br />        primary   = "primary\_2"<br />        secondary = "secondary\_2"<br />      \}<br />    ]<br />  \}<br />  "lg3" = \{<br />    name            = "003"<br />    connection      = "003"<br />    gateway\_address = "PUBLIC\_IP\_3"<br />    remote\_bgp\_settings = [\{<br />      asn                 = "65002"<br />      bgp\_peering\_address = "169.254.22.1"<br />    \}]<br />    custom\_bgp\_addresses = [<br />      \{<br />        primary   = "primary\_1"<br />        secondary = "secondary\_1"<br />      \}<br />    ]<br />  \}<br />  "lg4" = \{<br />    name            = "004"<br />    connection      = "004"<br />    gateway\_address = "PUBLIC\_IP\_4"<br />    remote\_bgp\_settings = [\{<br />      asn                 = "65003"<br />      bgp\_peering\_address = "169.254.22.5"<br />    \}]<br />    custom\_bgp\_addresses = [<br />      \{<br />        primary   = "primary\_2"<br />        secondary = "secondary\_2"<br />      \}<br />    ]<br />  \}<br />\} | `any` | n/a | yes |
| <a name="input_ipsec_shared_key"></a> [ipsec\_shared\_key](#input\_ipsec\_shared\_key) | The shared IPSec key. | `string` | n/a | yes |
| <a name="input_connection_mode"></a> [connection\_mode](#input\_connection\_mode) | Connection mode to use. Possible values are Default, InitiatorOnly and ResponderOnly. Defaults to Default. Changing this value will force a resource to be created. | `string` | n/a | yes |
| <a name="input_ipsec_policy"></a> [ipsec\_policy](#input\_ipsec\_policy) | IPsec policy used for Virtual Network Connection with attributes:<br />- dh\_group - The DH group used in IKE phase 1 for initial SA. Valid options are DHGroup1, DHGroup14, DHGroup2, DHGroup2048, DHGroup24, ECP256, ECP384, or None.<br />- ike\_encryption - The IKE encryption algorithm. Valid options are AES128, AES192, AES256, DES, DES3, GCMAES128, or GCMAES256.<br />- ike\_integrity - The IKE integrity algorithm. Valid options are GCMAES128, GCMAES256, MD5, SHA1, SHA256, or SHA384.<br />- ipsec\_encryption - The IPSec encryption algorithm. Valid options are AES128, AES192, AES256, DES, DES3, GCMAES128, GCMAES192, GCMAES256, or None.<br />- ipsec\_integrity - The IPSec integrity algorithm. Valid options are GCMAES128, GCMAES192, GCMAES256, MD5, SHA1, or SHA256.<br />- pfs\_group - The DH group used in IKE phase 2 for new child SA. Valid options are ECP256, ECP384, PFS1, PFS14, PFS2, PFS2048, PFS24, PFSMM, or None.<br />- sa\_datasize - The IPSec SA payload size in KB. Must be at least 1024 KB. Defaults to 102400000 KB.<br />- sa\_lifetime - The IPSec SA lifetime in seconds. Must be at least 300 seconds. Defaults to 27000 seconds.<br /><br />Example:<br /><br />ipsec\_policy = [<br />  \{<br />    dh\_group         = "ECP384"<br />    ike\_encryption   = "AES256"<br />    ike\_integrity    = "SHA256"<br />    ipsec\_encryption = "AES256"<br />    ipsec\_integrity  = "SHA256"<br />    pfs\_group        = "ECP384"<br />    sa\_datasize      = "102400000"<br />    sa\_lifetime      = "27000"<br />  \}<br />] | `any` | n/a | yes |
>>>>>>> 940c9e38 (first pass at fixing all mdx compilation/syntax errors)

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
- `generation`    - (`string`, optional, defaults to `Generation1`) the Generation of the Virtual Network gateway, possible
                    values are: `None`, `Generation1` or `Generation2`. This property is ignored when type is set to 
                    `ExpressRoute`.
- `sku`           - (`string`, optional, defaults to `Basic`) sets the size and capacity of the virtual network gateway.
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
  - `name`                          - (`string`, required) name of the IP config.
  - `create_public_ip`              - (`bool`, optional, defaults to `true`) controls if a Public IP is created or sourced.
  - `public_ip_name`                - (`string`, required) name of a Public IP resource, depending on the value of 
                                      `create_public_ip` property this will be a name of a newly create or existing resource
                                      (for values of `true` and `false` accordingly).
  - `dynamic_private_ip_allocation` - (`bool`, optional, defaults to `true`) controls if the private IP address is assigned
                                      dynamically or statically.
- `secondary` - (`map`, optional, defaults to `null`) a map defining the secondary Public IP address resource. Required only
                for `type` set to `Vpn` and `active-active` set to `true`. Same properties available as for `primary` property.



Type: 

```hcl
object({
    primary = object({
      name                          = string
      create_public_ip              = optional(bool, true)
      public_ip_name                = string
      private_ip_address_allocation = optional(string, "Dynamic")
    })
    secondary = optional(object({
      name                          = string
      create_public_ip              = optional(bool, true)
      public_ip_name                = string
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

The ID of the local network gateway.

When set, the outbound Internet traffic from the virtual network, in which the gateway is created, will be routed through local
network gateway (forced tunnelling).


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

Map of local network gateways and their connections.

Every object in the map contains following attributes:
  
- `name`                 - (`string`, required) the name of the local network gateway.
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
  - `name`            - (`string`, required) the name of the virtual network gateway connection.
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
                            the virtual network gateway. The supported values are AAD, Radius and Certificate.
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