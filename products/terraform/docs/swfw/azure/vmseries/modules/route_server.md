---
hide_title: true
id: route_server
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
sidebar_label: Route Server
title: Palo Alto Networks Route Server Module for Azure
---

# Palo Alto Networks Route Server Module for Azure

A Terraform module for deploying a Route Server and its components required for the VM-Series firewalls in Azure.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/route_server) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/route_server)

## Usage

In order to use `route_server` module, you need to deploy `azurerm_resource_group` and use module `vnet` as
prerequisites.
Then you can use below code as an example of calling module to create a Route Server:

```hcl
module "route_server" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/route_server"

  for_each = var.route_servers

  name                = "${var.name_prefix}${each.value.name}"
  resource_group_name = local.resource_group.name
  region              = var.region

  subnet_id = "/subscription/xxxx/......."

  zones     = each.value.zones
  public_ip = each.value.public_ip

  sku                      = each.value.sku
  branch_to_branch_traffic = each.value.branch_to_branch_traffic
  bgp_connections          = each.value.bgp_connections

  tags = var.tags
}
```

Below there are provided sample values for `route_servers` map:

```hcl
route_servers = {
  "routeserver" = {
    name       = "routeserver"
    vnet_key   = "transit"
    subnet_key = "routeserver"
    public_ip = {
      create = true
      name   = "routeserver-pip"
    }
    bgp_connections = {
      "vmseries" = {
        name     = "ebgp-to-vmseries"
        peer_asn = "64512"
        peer_ip  = "1.1.1.1"
      }
    }
  }
}
```

To make defining the Route Servers easy, you can use the following variable in the *glue code*:

```hcl
variable "route_servers" {
  description = "Map of Route Servers to create."
  default     = {}
  nullable    = false
  type = map(object({
    name       = string
    vnet_key   = string
    subnet_key = string
    zones      = optional(list(string))
    public_ip = object({
      create              = bool
      name                = optional(string)
      resource_group_name = optional(string)
      key                 = optional(string)
    })
    sku                      = optional(string, "Standard")
    branch_to_branch_traffic = optional(bool, true)
    bgp_connections = optional(map(object({
      name     = string
      peer_asn = string
      peer_ip  = string
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

- `public_ip` (managed)
- `route_server` (managed)
- `route_server_bgp_connection` (managed)
- `public_ip` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Route Server.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`subnet_id`](#subnet_id) | `string` | An ID of a Subnet in which the Route Server will be created.
[`public_ip`](#public_ip) | `object` | A map defining a Public IP resource.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`zones`](#zones) | `list` | After provider version 3.
[`sku`](#sku) | `string` | Sets the SKU of the Route Server.
[`branch_to_branch_traffic`](#branch_to_branch_traffic) | `bool` | Controls whether to enable route exchange between Azure Route Server and the gateways.
[`bgp_connections`](#bgp_connections) | `map` | A map containing Route Server BGP connections details.

### Outputs

Name |  Description
--- | ---
`public_ip` | Public IP address for Route Server.

### Required Inputs details

#### name

The name of the Route Server.

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

An ID of a Subnet in which the Route Server will be created.

This has to be a dedicated Subnet named `RouteServerSubnet`.


Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### public_ip

A map defining a Public IP resource.

List of available properties:

- `create`              - (`bool`, required) controls whether a Public IP is created or sourced.
- `name`                - (`string`, optional) name of a created or sourced Public IP, required unless `id` property is used.
- `resource_group_name` - (`string`, optional) name of a resource group hosting the sourced Public IP resource, ignored when
                          `create = true`.
- `id`                  - (`string`, optional, defaults to `null`) ID of the Public IP to associate with the Route Server. 
                          Property is used when Public IP Address is not created or sourced within this module.
  
Example:

```hcl
# create a new Public IP
public_ip = {
  create = true
  name   = "new-public-ip-name"
}

# source an existing Public IP from an external resource group
public_ip = {
  create              = false
  name                = "existing-public-ip-name"
  resource_group_name = "external-rg-name"
}
```


Type: 

```hcl
object({
    create              = bool
    name                = optional(string)
    resource_group_name = optional(string)
    id                  = optional(string)
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

Default value: `[1 2 3]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### sku

Sets the SKU of the Route Server. Only possible value at the moment is `Standard`.

Type: string

Default value: `Standard`

<sup>[back to list](#modules-optional-inputs)</sup>

#### branch_to_branch_traffic

Controls whether to enable route exchange between Azure Route Server and the gateways.

Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### bgp_connections

A map containing Route Server BGP connections details.

List of available properties:
- `name`     - (`string`, required) the name of the BGP connection.
- `peer_asn` - (`string`, required) the peer autonomous system number for the BGP connection.
- `peer_ip`  - (`string`, required) the peer IP address for the BGP connection.


Type: 

```hcl
map(object({
    name     = string
    peer_asn = string
    peer_ip  = string
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>