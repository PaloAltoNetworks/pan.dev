---
hide_title: true
id: vnet
keywords:
- pan-os
- panos
- firewall
- configuration
- terraform
- vmseries
- vm-series
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Vnet
title: Palo Alto Networks VNet Module for Azure
---

# Palo Alto Networks VNet Module for Azure

A terraform module for deploying a Virtual Network and its components required for the VM-Series firewalls in Azure.

## Usage

For usage refer to any example module.

## Reference
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
| [azurerm_network_security_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_security_group) | resource |
| [azurerm_network_security_rule.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_security_rule) | resource |
| [azurerm_route.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/route) | resource |
| [azurerm_route_table.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/route_table) | resource |
| [azurerm_subnet.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/subnet) | resource |
| [azurerm_subnet_network_security_group_association.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/subnet_network_security_group_association) | resource |
| [azurerm_subnet_route_table_association.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/subnet_route_table_association) | resource |
| [azurerm_virtual_network.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network) | resource |
| [azurerm_subnet.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/subnet) | data source |
| [azurerm_virtual_network.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/virtual_network) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | A prefix added to all resource names created by this module: VNET, NSGs, RTs. Subnet, as a sub-resource is not prefixed. | `string` | `""` | no |
| <a name="input_name"></a> [name](#input\_name) | The name of the Azure Virtual Network. | `string` | n/a | yes |
| <a name="input_create_virtual_network"></a> [create\_virtual\_network](#input\_create\_virtual\_network) | If true, create the Virtual Network, otherwise just use a pre-existing network. | `bool` | `true` | no |
| <a name="input_create_subnets"></a> [create\_subnets](#input\_create\_subnets) | If true, create the Subnets inside the Virtual Network, otherwise use a pre-existing subnets. | `bool` | `true` | no |
| <a name="input_location"></a> [location](#input\_location) | Location of the resources that will be deployed. | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | Map of tags to assign to all of the created resources. | `map(any)` | `{}` | no |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the Resource Group to use. | `string` | n/a | yes |
| <a name="input_address_space"></a> [address\_space](#input\_address\_space) | The address space used by the virtual network. You can supply more than one address space. | `list(string)` | n/a | yes |
| <a name="input_network_security_groups"></a> [network\_security\_groups](#input\_network\_security\_groups) | Map of Network Security Groups to create.<br />List of available attributes of each Network Security Group entry:<br />- `name` : Name of the Network Security Group.<br />- `location` : (Optional) Specifies the Azure location where to deploy the resource.<br />- `rules`: (Optional) A list of objects representing a Network Security Rule. The key of each entry acts as the name of the rule and<br />    needs to be unique across all rules in the Network Security Group.<br />    List of attributes available to define a Network Security Rule.<br />    Notice, all port values are integers between `0` and `65535`. Port ranges can be specified as `minimum-maximum` port value, example: `21-23`:<br />    - `priority` : Numeric priority of the rule. The value can be between 100 and 4096 and must be unique for each rule in the collection.<br />    The lower the priority number, the higher the priority of the rule.<br />    - `direction` : The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are `Inbound` and `Outbound`.<br />    - `access` : Specifies whether network traffic is allowed or denied. Possible values are `Allow` and `Deny`.<br />    - `protocol` : Network protocol this rule applies to. Possible values include `Tcp`, `Udp`, `Icmp`, or `*` (which matches all). For supported values refer to the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_security_rule#protocol)<br />    - `source_port_range` : A source port or a range of ports. This can also be an `*` to match all.<br />    - `source_port_ranges` : A list of source ports or ranges of ports. This can be specified only if `source_port_range` was not used.<br />    - `destination_port_range` : A destination port or a range of ports. This can also be an `*` to match all.<br />    - `destination_port_ranges` : A list of destination ports or a ranges of ports. This can be specified only if `destination_port_range` was not used.<br />    - `source_address_prefix` : Source CIDR or IP range or `*` to match any IP. This can also be a tag. To see all available tags for a region use the following command (example for US West Central): `az network list-service-tags --location westcentralus`.<br />    - `source_address_prefixes` : A list of source address prefixes. Tags are not allowed. Can be specified only if `source_address_prefix` was not used.<br />    - `destination_address_prefix` : Destination CIDR or IP range or `*` to match any IP. Tags are allowed, see `source_address_prefix` for details.<br />    - `destination_address_prefixes` : A list of destination address prefixes. Tags are not allowed. Can be specified only if `destination_address_prefix` was not used.<br /><br />Example:<pre>{<br />  "nsg\_1" = {<br />    name = "network\_security\_group\_1"<br />    location = "Australia Central"<br />    rules = {<br />      "AllOutbound" = {<br />        priority                   = 100<br />        direction                  = "Outbound"<br />        access                     = "Allow"<br />        protocol                   = "Tcp"<br />        source\_port\_range          = "*"<br />        destination\_port\_range     = "*"<br />        source\_address\_prefix      = "*"<br />        destination\_address\_prefix = "*"<br />      },<br />      "AllowSSH" = {<br />        priority                   = 200<br />        direction                  = "Inbound"<br />        access                     = "Allow"<br />        protocol                   = "Tcp"<br />        source\_port\_range          = "*"<br />        destination\_port\_range     = "22"<br />        source\_address\_prefix      = "*"<br />        destination\_address\_prefix = "*"<br />      },<br />      "AllowWebBrowsing" = {<br />        priority                   = 300<br />        direction                  = "Inbound"<br />        access                     = "Allow"<br />        protocol                   = "Tcp"<br />        source\_port\_range          = "*"<br />        destination\_port\_ranges    = ["80","443"]<br />        source\_address\_prefix      = "*"<br />        destination\_address\_prefix = "VirtualNetwork"<br />      }<br />    }<br />  },<br />  "network\_security\_group\_2" = {<br />    rules = {}<br />  }<br />}</pre> | `any` | n/a | yes |
| <a name="input_route_tables"></a> [route\_tables](#input\_route\_tables) | Map of objects describing a Route Table.<br />List of available attributes of each Route Table entry:<br />- `name`: Name of a Route Table.<br />- `location` : (Optional) Specifies the Azure location where to deploy the resource.<br />- `routes` : (Optional) Map of routes within the Route Table.<br />  List of available attributes of each route entry:<br />  - `address_prefix` : The destination CIDR to which the route applies, such as `10.1.0.0/16`.<br />  - `next_hop_type` : The type of Azure hop the packet should be sent to.<br />    Possible values are: `VirtualNetworkGateway`, `VnetLocal`, `Internet`, `VirtualAppliance` and `None`.<br />  - `next_hop_in_ip_address` : Contains the IP address packets should be forwarded to. <br />    Next hop values are only allowed in routes where the next hop type is `VirtualAppliance`.<br /><br />Example:<pre>{<br />  "rt\_1" = {<br />    name = "route\_table\_1"<br />    routes = {<br />      "route\_1" = {<br />        address\_prefix = "10.1.0.0/16"<br />        next\_hop\_type  = "vnetlocal"<br />      },<br />      "route\_2" = {<br />        address\_prefix = "10.2.0.0/16"<br />        next\_hop\_type  = "vnetlocal"<br />      },<br />    }<br />  },<br />  "rt\_2" = {<br />    name = "route\_table\_2"<br />    routes = {<br />      "route\_3" = {<br />        address\_prefix         = "0.0.0.0/0"<br />        next\_hop\_type          = "VirtualAppliance"<br />        next\_hop\_in\_ip\_address = "10.112.0.100"<br />      }<br />    },<br />  },<br />}</pre> | `map` | `{}` | no |
| <a name="input_subnets"></a> [subnets](#input\_subnets) | Map of subnet objects to create within a virtual network. If `create_subnets` is set to `false` this is just a mapping between the existing subnets and UDRs and NSGs that should be assigned to them.<br /><br />List of available attributes of each subnet entry:<br />- `name` - Name of a subnet.<br />- `address_prefixes` : The address prefix to use for the subnet. Only required when a subnet will be created.<br />- `network_security_group` : The Network Security Group identifier to associate with the subnet.<br />- `route_table_id` : The Route Table identifier to associate with the subnet.<br />- `enable_storage_service_endpoint` : Flag that enables `Microsoft.Storage` service endpoint on a subnet. This is a suggested setting for the management interface when full bootstrapping using an Azure Storage Account is used. Defaults to `false`.<br />Example:<pre>{<br />  "management" = {<br />    name                            = "management-snet"<br />    address\_prefixes                = ["10.100.0.0/24"]<br />    network\_security\_group          = "network\_security\_group\_1"<br />    route\_table                     = "route\_table\_1"<br />    enable\_storage\_service\_endpoint = true<br />  },<br />  "private" = {<br />    name                   = "private-snet"<br />    address\_prefixes       = ["10.100.1.0/24"]<br />    network\_security\_group = "network\_security\_group\_2"<br />    route\_table            = "route\_table\_2"<br />  },<br />  "public" = {<br />    name                   = "public-snet"<br />    address\_prefixes       = ["10.100.2.0/24"]<br />    network\_security\_group = "network\_security\_group\_3"<br />    route\_table            = "route\_table\_3"<br />  },<br />}</pre> | `any` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_virtual_network_id"></a> [virtual\_network\_id](#output\_virtual\_network\_id) | The identifier of the created or sourced Virtual Network. |
| <a name="output_vnet_cidr"></a> [vnet\_cidr](#output\_vnet\_cidr) | VNET address space. |
| <a name="output_subnet_ids"></a> [subnet\_ids](#output\_subnet\_ids) | The identifiers of the created or sourced Subnets. |
| <a name="output_subnet_cidrs"></a> [subnet\_cidrs](#output\_subnet\_cidrs) | Subnet CIDRs (sourced or created). |
| <a name="output_network_security_group_ids"></a> [network\_security\_group\_ids](#output\_network\_security\_group\_ids) | The identifiers of the created Network Security Groups. |
| <a name="output_route_table_ids"></a> [route\_table\_ids](#output\_route\_table\_ids) | The identifiers of the created Route Tables. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->