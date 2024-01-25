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
title: Virtual Network Gateway
---

# Virtual Network Gateway

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/virtual_network_gateway) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/virtual_network_gateway)

## Purpose

This module is used to automate deployment of Virtual Network Gateway.

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |
| <a name="requirement_azurerm"></a> [azurerm](#requirement\_azurerm) | ~> 3.25 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | ~> 3.25 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [azurerm_local_network_gateway.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/local_network_gateway) | resource |
| [azurerm_public_ip.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip) | resource |
| [azurerm_virtual_network_gateway.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_gateway) | resource |
| [azurerm_virtual_network_gateway_connection.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_gateway_connection) | resource |
| [azurerm_public_ip.exists](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/public_ip) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of a pre-existing Resource Group to place the resources in. | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | Region to deploy load balancer and dependencies. | `string` | n/a | yes |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | A prefix added to all resource names created by this module | `string` | `""` | no |
| <a name="input_name_suffix"></a> [name\_suffix](#input\_name\_suffix) | A suffix added to all resource names created by this module | `string` | `""` | no |
| <a name="input_name"></a> [name](#input\_name) | The name of the Virtual Network Gateway. Changing this forces a new resource to be created | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | Azure tags to apply to the created resources. | `map(string)` | `{}` | no |
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
| <a name="input_ip_configuration"></a> [ip\_configuration](#input\_ip\_configuration) | List of IP configurations - every object in the list contains attributes:<br /><br />- name - name of the IP configuration<br />- create\_public\_ip - boolean value, true if public IP needs to be created<br />- public\_ip\_name - name of the public IP resource used, when there is no need to create new one<br />- private\_ip\_address\_allocation - defines how the private IP address of the gateways virtual interface is assigned. Valid options are Static or Dynamic. Defaults to Dynamic.<br />- public\_ip\_standard\_sku - defaults to `false`, when set to `true` creates a Standard SKU, statically allocated public IP, otherwise it will be a Basic/Dynamic one.<br />- subnet\_id - the ID of the gateway subnet of a virtual network in which the virtual network gateway will be created.<br /><br />Example:<br /><br />ip\_configuration = [<br />  {<br />    name             = "001"<br />    create\_public\_ip = true<br />    subnet\_id        = "ID\_for\_subnet\_GatewaySubnet"<br />  },<br />  {<br />    name             = "002"<br />    create\_public\_ip = true<br />    subnet\_id        = "ID\_for\_subnet\_GatewaySubnet"<br />  }<br />] | `list(any)` | n/a | yes |
| <a name="input_vpn_client_configuration"></a> [vpn\_client\_configuration](#input\_vpn\_client\_configuration) | List of VPN client configurations - every object in the list contains attributes:<br />- address\_space - the address space out of which IP addresses for vpn clients will be taken. You can provide more than one address space, e.g. in CIDR notation.<br />- aad\_tenant - AzureAD Tenant URL<br />- aad\_audience - the client id of the Azure VPN application. See Create an Active Directory (AD) tenant for P2S OpenVPN protocol connections for values<br />- aad\_issuer - the STS url for your tenant<br />- root\_certificate - one or more root\_certificate blocks which are defined below. These root certificates are used to sign the client certificate used by the VPN clients to connect to the gateway.<br />- revoked\_certificate - one or more revoked\_certificate blocks which are defined below.<br />- radius\_server\_address - the address of the Radius server.<br />- radius\_server\_secret - the secret used by the Radius server.<br />- vpn\_client\_protocols - list of the protocols supported by the vpn client. The supported values are SSTP, IkeV2 and OpenVPN. Values SSTP and IkeV2 are incompatible with the use of aad\_tenant, aad\_audience and aad\_issuer.<br />- vpn\_auth\_types - list of the vpn authentication types for the virtual network gateway. The supported values are AAD, Radius and Certificate. | `list(any)` | n/a | yes |
| <a name="input_azure_bgp_peers_addresses"></a> [azure\_bgp\_peers\_addresses](#input\_azure\_bgp\_peers\_addresses) | Map of IP addresses used on Azure side for BGP. Map is used to not to duplicate IP address and refer to keys while configuring:<br />- custom\_bgp\_addresses<br />- peering\_addresses in local\_bgp\_settings<br /><br />Example:<br /><br />azure\_bgp\_peers\_addresses = {<br />  primary\_1   = "169.254.21.2"<br />  secondary\_1 = "169.254.22.2"<br />  primary\_2   = "169.254.21.6"<br />  secondary\_2 = "169.254.22.6"<br />} | `map(string)` | n/a | yes |
| <a name="input_local_bgp_settings"></a> [local\_bgp\_settings](#input\_local\_bgp\_settings) | Map of BGP settings:<br />- asn - the Autonomous System Number (ASN) to use as part of the BGP.<br />- peering\_addresses - a map of peering addresses, which contains 1 (for active-standby) or 2 objects (for active-active) with:<br />  - key is the ip configuration name<br />  - apipa\_addresses is the list of keys for IP addresses defined in variable azure\_bgp\_peers\_addresses<br />- peer\_weight - the weight added to routes which have been learned through BGP peering. Valid values can be between 0 and 100.<br /><br />Example:<br /><br />local\_bgp\_settings = {<br />  asn = "65001"<br />  peering\_addresses = {<br />    "001" = {<br />      apipa\_addresses = ["primary\_1", "primary\_2"]<br />    },<br />    "002" = {<br />      apipa\_addresses = ["secondary\_1", "secondary\_2"]<br />    }<br />  }<br />} | `any` | n/a | yes |
| <a name="input_custom_route"></a> [custom\_route](#input\_custom\_route) | List of custom routes - every object in the list contains attributes:<br />- address\_prefixes - a list of address blocks reserved for this virtual network in CIDR notation as defined below. | `list(any)` | n/a | yes |
| <a name="input_local_network_gateways"></a> [local\_network\_gateways](#input\_local\_network\_gateways) | Map of local network gateways - every object in the map contains attributes:<br />- name - the name of the local network gateway.<br />- connection - the name of the virtual network gateway connection.<br />- remote\_bgp\_settings - block containing Local Network Gateway's BGP speaker settings:<br />  - asn - the BGP speaker's ASN.<br />  - bgp\_peering\_address - the BGP peering address and BGP identifier of this BGP speaker.<br />  - peer\_weight - the weight added to routes learned from this BGP speaker.<br />- gateway\_address - the gateway IP address to connect with.<br />- address\_space - the list of string CIDRs representing the address spaces the gateway exposes.<br />- custom\_bgp\_addresses - Border Gateway Protocol custom IP Addresses, which can only be used on IPSec / active-active connections. Object contains 2 attributes:<br />  - primary - single IP address that is part of the azurerm\_virtual\_network\_gateway ip\_configuration (first one)<br />  - secondary - single IP address that is part of the azurerm\_virtual\_network\_gateway ip\_configuration (second one)<br /><br />Example:<br /><br />local\_network\_gateways = {<br />  "lg1" = {<br />    name            = "001"<br />    connection      = "001"<br />    gateway\_address = "PUBLIC\_IP\_1"<br />    remote\_bgp\_settings = [{<br />      asn                 = "65002"<br />      bgp\_peering\_address = "169.254.21.1"<br />    }]<br />    custom\_bgp\_addresses = [<br />      {<br />        primary   = "primary\_1"<br />        secondary = "secondary\_1"<br />      }<br />    ]<br />  }<br />  "lg2" = {<br />    name            = "002"<br />    connection      = "002"<br />    gateway\_address = "PUBLIC\_IP\_2"<br />    remote\_bgp\_settings = [{<br />      asn                 = "65003"<br />      bgp\_peering\_address = "169.254.21.5"<br />    }]<br />    custom\_bgp\_addresses = [<br />      {<br />        primary   = "primary\_2"<br />        secondary = "secondary\_2"<br />      }<br />    ]<br />  }<br />  "lg3" = {<br />    name            = "003"<br />    connection      = "003"<br />    gateway\_address = "PUBLIC\_IP\_3"<br />    remote\_bgp\_settings = [{<br />      asn                 = "65002"<br />      bgp\_peering\_address = "169.254.22.1"<br />    }]<br />    custom\_bgp\_addresses = [<br />      {<br />        primary   = "primary\_1"<br />        secondary = "secondary\_1"<br />      }<br />    ]<br />  }<br />  "lg4" = {<br />    name            = "004"<br />    connection      = "004"<br />    gateway\_address = "PUBLIC\_IP\_4"<br />    remote\_bgp\_settings = [{<br />      asn                 = "65003"<br />      bgp\_peering\_address = "169.254.22.5"<br />    }]<br />    custom\_bgp\_addresses = [<br />      {<br />        primary   = "primary\_2"<br />        secondary = "secondary\_2"<br />      }<br />    ]<br />  }<br />} | `any` | n/a | yes |
| <a name="input_ipsec_shared_key"></a> [ipsec\_shared\_key](#input\_ipsec\_shared\_key) | The shared IPSec key. | `string` | n/a | yes |
| <a name="input_connection_mode"></a> [connection\_mode](#input\_connection\_mode) | Connection mode to use. Possible values are Default, InitiatorOnly and ResponderOnly. Defaults to Default. Changing this value will force a resource to be created. | `string` | n/a | yes |
| <a name="input_ipsec_policy"></a> [ipsec\_policy](#input\_ipsec\_policy) | IPsec policy used for Virtual Network Connection with attributes:<br />- dh\_group - The DH group used in IKE phase 1 for initial SA. Valid options are DHGroup1, DHGroup14, DHGroup2, DHGroup2048, DHGroup24, ECP256, ECP384, or None.<br />- ike\_encryption - The IKE encryption algorithm. Valid options are AES128, AES192, AES256, DES, DES3, GCMAES128, or GCMAES256.<br />- ike\_integrity - The IKE integrity algorithm. Valid options are GCMAES128, GCMAES256, MD5, SHA1, SHA256, or SHA384.<br />- ipsec\_encryption - The IPSec encryption algorithm. Valid options are AES128, AES192, AES256, DES, DES3, GCMAES128, GCMAES192, GCMAES256, or None.<br />- ipsec\_integrity - The IPSec integrity algorithm. Valid options are GCMAES128, GCMAES192, GCMAES256, MD5, SHA1, or SHA256.<br />- pfs\_group - The DH group used in IKE phase 2 for new child SA. Valid options are ECP256, ECP384, PFS1, PFS14, PFS2, PFS2048, PFS24, PFSMM, or None.<br />- sa\_datasize - The IPSec SA payload size in KB. Must be at least 1024 KB. Defaults to 102400000 KB.<br />- sa\_lifetime - The IPSec SA lifetime in seconds. Must be at least 300 seconds. Defaults to 27000 seconds.<br /><br />Example:<br /><br />ipsec\_policy = [<br />  {<br />    dh\_group         = "ECP384"<br />    ike\_encryption   = "AES256"<br />    ike\_integrity    = "SHA256"<br />    ipsec\_encryption = "AES256"<br />    ipsec\_integrity  = "SHA256"<br />    pfs\_group        = "ECP384"<br />    sa\_datasize      = "102400000"<br />    sa\_lifetime      = "27000"<br />  }<br />] | `any` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_public_ip"></a> [public\_ip](#output\_public\_ip) | Public IP addresses for Virtual Network Gateway |
| <a name="output_ipsec_policy"></a> [ipsec\_policy](#output\_ipsec\_policy) | IPsec policy used for Virtual Network Gateway connection |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->