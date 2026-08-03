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
- swfw
- software-firewalls
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Vnet
title: Palo Alto Networks VNet Module for Azure
---

# Palo Alto Networks VNet Module for Azure

A Terraform module for deploying a Virtual Network and its components required for the VM-Series firewalls in Azure.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/vnet) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/vnet)

## Usage

This module is designed to work in several *modes* depending on which variables or flags are set. Most common usage scenarios are:

- create all -  creates a VNET, Subnet, NSGs and Route Tables. In this example the two latter are assigned to the Subnet. The NSG and Route Table have rules defined:
  ```hcl
  name                = "transit"
  resource_group_name = "existing-rg"
  address_space       = ["10.0.0.0/25"]
  region              = "North Europe"
  network_security_groups = {
    inbound = {
      name = "inbound-nsg"
      rules = {
        mgmt_inbound = {
          name                       = "allow-traffic"
          priority                   = 100
          direction                  = "Inbound"
          access                     = "Allow"
          protocol                   = "Tcp"
          source_address_prefixes    = ["1.1.1.1/32"] # TODO: Whitelist public IP addresses that will be used to manage the appliances
          source_port_range          = "*"
          destination_address_prefix = "10.0.0.0/28"
          destination_port_ranges    = ["22", "443"]
        }
      }
    }
  }
  route_tables = {
    default = {
      name = "default-rt"
      routes = {
        "default" = {
          name                = "default-udr"
          address_prefix      = "0.0.0.0/0"
          next_hop_type       = "VirtualAppliance"
          next_hop_ip_address = "5.6.7.8"
        }
      }
    }
  }
  subnets = {
    "subnet" = {
      name                       = "snet"
      address_prefixes           = ["10.0.0.0/28"]
      network_security_group_key = "inbound"
      route_table_key            = "default"
    }
  }
  ```

- source a VNET but create Subnets, NSGs and Route Tables. This is a similar example to the above one, NSG is empty this time:

  ```hcl
  create_virtual_network = false
  name                   = "existing-vnet"
  resource_group_name    = "existing-rg"
  region                 = "North Europe"
  network_security_groups = {
    inbound = { name = "inbound-nsg" }
  }
  route_tables = {
    default = {
      name = "default-rt"
      routes = {
        "default" = {
          name           = "default-udr"
          address_prefix = "0.0.0.0/0"
          next_hop_type       = "VirtualAppliance"
          next_hop_ip_address = "5.6.7.8"
        }
      }
    }
  }
  subnets = {
    "subnet" = {
      name                       = "snet"
      address_prefixes           = ["10.0.0.0/28"]
      network_security_group_key = "inbound"
      route_table_key            = "default"
    }
  }
  ```

- source a VNET and Subnet, but create NSGs and Route Tables. This is a common brownfield use case: we will source Subnets, and create and assign NSGs and Route Tables to them:

  ```hcl
  create_virtual_network = false
  name                   = "existing-vnet"
  resource_group_name    = "existing-rg"
  region                 = "North Europe"
  network_security_groups = {
    inbound = {
      name = "inbound-nsg"
      rules = {
        mgmt_inbound = {
          name                       = "allow-traffic"
          priority                   = 100
          direction                  = "Inbound"
          access                     = "Allow"
          protocol                   = "Tcp"
          source_address_prefixes    = ["1.1.1.1/32"] # TODO: Whitelist public IP addresses that will be used to manage the appliances
          source_port_range          = "*"
          destination_address_prefix = "10.0.0.0/28"
          destination_port_ranges    = ["22", "443"]
        }
      }
    }
  }
  route_tables = {
    default = {
      name = "default-rt"
      routes = {
        "default" = {
          name                = "default-udr"
          address_prefix      = "0.0.0.0/0"
          next_hop_type       = "VirtualAppliance"
          next_hop_ip_address = "5.6.7.8"
        }
      }
    }
  }
  subnets = {
    "subnet" = {
      create                     = false
      name                       = "snet"
      network_security_group_key = "inbound"
      route_table_key            = "default"
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

- `network_security_group` (managed)
- `network_security_rule` (managed)
- `route` (managed)
- `route_table` (managed)
- `subnet` (managed)
- `subnet_network_security_group_association` (managed)
- `subnet_route_table_association` (managed)
- `virtual_network` (managed)
- `subnet` (data)
- `virtual_network` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Azure Virtual Network.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`create_virtual_network`](#create_virtual_network) | `bool` | Controls Virtual Network creation.
[`address_space`](#address_space) | `list` | The address space used by the virtual network.
[`dns_servers`](#dns_servers) | `list` | List of IP addresses of custom DNS servers (by default Azure DNS is used).
[`vnet_encryption`](#vnet_encryption) | `string` | Enables Azure Virtual Network encryption feature (in `AllowUnencrypted` mode by default).
[`ddos_protection_plan_id`](#ddos_protection_plan_id) | `string` | ID of an existing Azure Network DDOS Protection Plan to be associated with the VNET.
[`network_security_groups`](#network_security_groups) | `map` | Map of objects describing Network Security Groups.
[`route_tables`](#route_tables) | `map` | Map of objects describing a Route Tables.
[`subnets`](#subnets) | `map` | Map of objects describing subnets to manage.

### Outputs

Name |  Description
--- | ---
`virtual_network_id` | The identifier of the created or sourced Virtual Network.
`virtual_network_name` | The name of the created or sourced Virtual Network.
`virtual_network_resource_group` | The Resource Group name of the created or sourced Virtual Network.
`vnet_cidr` | VNET address space.
`subnet_ids` | The identifiers of the created or sourced Subnets.
`subnet_cidrs` | Subnet CIDRs (sourced or created).
`network_security_group_ids` | The identifiers of the created Network Security Groups.
`route_table_ids` | The identifiers of the created Route Tables.

### Required Inputs details

#### name

The name of the Azure Virtual Network.

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

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### create_virtual_network

Controls Virtual Network creation.
  
When set to `true`, creates the Virtual Network, otherwise just use a pre-existing network.


Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### address_space

The address space used by the virtual network.
  
You can supply more than one address space. Required only when you create a VNET.


Type: list(string)

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### dns_servers

List of IP addresses of custom DNS servers (by default Azure DNS is used).

Type: list(string)

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### vnet_encryption

Enables Azure Virtual Network encryption feature (in `AllowUnencrypted` mode by default).
When set to `null` VNET encryption is disabled.


Type: string

Default value: `AllowUnencrypted`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ddos_protection_plan_id

ID of an existing Azure Network DDOS Protection Plan to be associated with the VNET.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### network_security_groups

Map of objects describing Network Security Groups.

List of available properties:

- `name`  - (`string`, required) name of the Network Security Group.
- `rules` - (`map`, optional, defaults to `{}`) A list of objects representing Network Security Rules.

  **Note!** \
  All port values are integers between `0` and `65535`. Port ranges can be specified as `minimum-maximum` port value,
  example: `21-23`.
    
  Following attributes are available:

  - `name`                         - (`string`, required) name of the rule.
  - `priority`                     - (`number`, required) numeric priority of the rule. The value can be between 100 and 4096
                                     and must be unique for each rule in the collection. The lower the priority number,
                                     the higher the priority of the rule.
  - `direction`                    - (`string`, required) the direction specifies if rule will be evaluated on incoming
                                     or outgoing traffic. Possible values are `Inbound` and `Outbound`.
  - `access`                       - (`string`, required) specifies whether network traffic is allowed or denied.
                                     Possible values are `Allow` and `Deny`.
  - `protocol`                     - (`string`, required) a network protocol this rule applies to. Possible values include
                                     `Tcp`, `Udp`, `Icmp`, or `*` (which matches all). For supported values refer to the
                                     [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_securityrule#protocol).
  - `source_port_range`            - (`string`, required, mutually exclusive with `source_port_ranges`) a source port or
                                     a range of ports. This can also be an `*` to match all.
  - `source_port_ranges`           - (`list`, required, mutually exclusive with `source_port_range`) a list of source ports
                                     or ranges of ports.
  - `source_address_prefix`        - (`string`, required, mutually exclusive with `source_address_prefixes`) source CIDR or IP
                                     range or `*` to match any IP. This can also be a tag. To see all available tags for a
                                     region use the following command (example for US West Central):
                                     `az network list-service-tags --location westcentralus`.
  - `source_address_prefixes`      - (`list`, required, mutually exclusive with `source_address_prefix`) a list of source
                                     address prefixes. Tags are not allowed.
  - `destination_port_range`       - (`string`, required, mutually exclusive with `destination_port_ranges`) destination port
                                     or a range of ports. This can also be an `*` to match all.
  - `destination_port_ranges`      - (`list`, required, mutually exclusive with `destination_port_range`) a list of
                                     destination ports or a ranges of ports.
  - `destination_address_prefix`   - (`string`, required, mutually exclusive with `destination_address_prefixes`) destination
                                     CIDR or IP range or `*` to match any IP. Tags are allowed, see `source_address_prefix`
                                     for details.
  - `destination_address_prefixes` - (`list`, required,  mutually exclusive with `destination_address_prefixes`) a list of 
                                     destination address prefixes. Tags are not allowed.

Example:
```hcl
{
  "nsg_1" = {
    name = "network_security_group_1"
    rules = {
      "AllOutbound" = {
        name =                     = "DefaultOutbound"
        priority                   = 100
        direction                  = "Outbound"
        access                     = "Allow"
        protocol                   = "Tcp"
        source_port_range          = "*"
        source_address_prefix      = "*"
        destination_port_range     = "*"
        destination_address_prefix = "*"
      },
      "AllowSSH" = {
        name                       = "InboundSSH"
        priority                   = 200
        direction                  = "Inbound"
        access                     = "Allow"
        protocol                   = "Tcp"
        source_port_range          = "*"
        source_address_prefix      = "*"
        destination_port_range     = "22"
        destination_address_prefix = "*"
      },
      "AllowWebBrowsing" = {
        name                       = "InboundWeb"
        priority                   = 300
        direction                  = "Inbound"
        access                     = "Allow"
        protocol                   = "Tcp"
        source_port_range          = "*"
        source_address_prefix      = "*"
        destination_port_ranges    = ["80","443"]
        destination_address_prefix = "VirtualNetwork"
      }
    }
  },
  "nsg_2" = {
    name = "empty-nsg
  }
}
```


Type: 

```hcl
map(object({
    name = string
    rules = optional(map(object({
      name                         = string
      priority                     = number
      direction                    = string
      access                       = string
      protocol                     = string
      source_port_range            = optional(string)
      source_port_ranges           = optional(list(string))
      source_address_prefix        = optional(string)
      source_address_prefixes      = optional(list(string))
      destination_port_range       = optional(string)
      destination_port_ranges      = optional(list(string))
      destination_address_prefix   = optional(string)
      destination_address_prefixes = optional(list(string))
    })), {})
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### route_tables

Map of objects describing a Route Tables.

List of available properties:

- `name`                          - (`string`, required) name of a Route Table.
- `bgp_route_propagation_enabled` - (`bool`, optional, defaults to `true`) controls propagation of routes learned by BGP.
- `routes`                        - (`map`, required) a map of Route Table entries (UDRs):
  - `name`                - (`string`, required) a name of a UDR.
  - `address_prefix`      - (`string`, required) the destination CIDR to which the route applies, such as `10.1.0.0/16`.
  - `next_hop_type`       - (`string`, required) the type of Azure hop the packet should be sent to. Possible values are:
                            `VirtualNetworkGateway`, `VnetLocal`, `Internet`, `VirtualAppliance` and `None`.
  - `next_hop_ip_address` - (`string`, required) contains the IP address packets should be forwarded to. Used only when
                            `next_hop_type` is set to `VirtualAppliance`, ignored otherwise.

Example:
```hcl
{
  "rt_1" = {
    name = "route_table_1"
    routes = {
      "route_1" = {
        name           = "route-1"
        address_prefix = "10.1.0.0/16"
        next_hop_type  = "VnetLocal"
      },
      "route_2" = {
        name           = "route-2"
        address_prefix = "10.2.0.0/16"
        next_hop_type  = "VnetLocal"
      },
    }
  },
  "rt_2" = {
    name = "route_table_2"
    routes = {
      "route_3" = {
        name                   = "default-nva-route"
        address_prefix         = "0.0.0.0/0"
        next_hop_type          = "VirtualAppliance"
        next_hop_ip_address = "10.112.0.100"
      }
    },
  },
}
```


Type: 

```hcl
map(object({
    name                          = string
    bgp_route_propagation_enabled = optional(bool, true)
    routes = map(object({
      name                = string
      address_prefix      = string
      next_hop_type       = string
      next_hop_ip_address = optional(string)
    }))
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### subnets

Map of objects describing subnets to manage.
  
List of available attributes of each subnet entry:

- `create`                          - (`bool`, optional, defaults to `true`) controls subnet creation, subnets are created when
                                      set to `true` or sourced when set to `false`.
- `name`                            - (`string`, required) name of a subnet.
- `address_prefixes`                - (`list(string)`, required when `create` = true`) a list of address prefixes within VNET's
                                      address space to assign to a created subnet.
- `network_security_group_key`      - (`string`, optional, defaults to `null`) a key identifying an NSG defined in
                                      `network_security_groups` that should be assigned to this subnet.
- `route_table_key`                 - (`string`, optional, defaults to `null`) a key identifying a Route Table defined in
                                      `route_tables` that should be assigned to this subnet.
- `default_outbound_access_enabled` - (`bool`, optional, defaults to `false`) a flag that enables default outbound access to
                                      the Internet from the subnet. Using explicit Internet access methods is recommended.
- `enable_storage_service_endpoint` - (`bool`, optional, defaults to `false`) a flag that enables `Microsoft.Storage` service
                                      endpoint on a subnet. This is a suggested setting for the management interface when full
                                      bootstrapping using an Azure Storage Account is used.
- `enable_appgw_delegation`         - (`bool`, optional, defaults to `false`) a flag that enables subnet delegation to 
                                      `Microsoft.Network/applicationGateways` service. This is required for Application Gateway
                                      Enhanced Network Isolation.
- `enable_cloudngfw_delegation`     - (`bool`, optional, defaults to `false`) a flag that enables subnet delegation to
                                      `PaloAltoNetworks.Cloudngfw/firewalls` service. This is required for Cloud NGFW to work
                                      in a VNET-based deployment.

Example:
```hcl
{
  "management" = {
    name                            = "management-snet"
    address_prefixes                = ["10.100.0.0/24"]
    network_security_group_key      = "network_security_group_1"
    enable_storage_service_endpoint = true
  },
  "private" = {
    name                       = "private-snet"
    address_prefixes           = ["10.100.1.0/24"]
    route_table_key            = "route_table_2"
  },
  "public" = {
    name                       = "public-snet"
    address_prefixes           = ["10.100.2.0/24"]
  }
}
```


Type: 

```hcl
map(object({
    create                          = optional(bool, true)
    name                            = string
    address_prefixes                = optional(list(string), [])
    network_security_group_key      = optional(string)
    route_table_key                 = optional(string)
    default_outbound_access_enabled = optional(bool, false)
    enable_storage_service_endpoint = optional(bool, false)
    enable_appgw_delegation         = optional(bool, false)
    enable_cloudngfw_delegation     = optional(bool, false)
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>