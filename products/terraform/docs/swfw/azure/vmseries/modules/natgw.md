---
hide_title: true
id: natgw
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
sidebar_label: NATGW
title: NAT Gateway module
---

# NAT Gateway module

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/natgw) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/natgw)

## Purpose
Terraform module used to deploy Azure NAT Gateway. For limitations and
zone-resiliency considerations please refer to [Microsoft
documentation](https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview).

This module can be used to either create a new NAT Gateway or to connect
an existing one with subnets deployed using (for example) the [VNET
module](../vnet).

NAT Gateway is not zone-redundant. It is a zonal resource. It means that it's always deployed in a zone. It's up to the user to
decide if a zone will be specified during resource deployment or if Azure will take that decision for the user. Keep in mind
that regardless of the fact that NAT Gateway is placed in a specific zone it can serve traffic for resources in all zones. But
if that zone becomes unavailable, resources in other zones will lose internet connectivity.

For design considerations, limitation and examples of zone-resiliency architecture please refer to
[Microsoft documentation](https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-availability-zones).

## Usage

To deploy this resource in it's minimum configuration following code
snippet can be used (assuming that the VNET module is used to deploy VNET
and Subnets):

```hcl
module "natgw" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/natgw"

  name                = "NATGW_name"
  resource_group_name = "resource_group_name"
  location            = "region_name"
  subnet_ids          = { "subnet_name" = "/subscription/xxxx/......." }
  idle_timeout        = 120
}
```

This will create a NAT Gateway in with a single Public IP in a zone chosen
by Azure.

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 4.0

### Providers

- `azurerm`, version: ~> 4.0



### Resources

- `nat_gateway` (managed)
- `nat_gateway_public_ip_association` (managed)
- `nat_gateway_public_ip_prefix_association` (managed)
- `public_ip` (managed)
- `public_ip_prefix` (managed)
- `subnet_nat_gateway_association` (managed)
- `nat_gateway` (data)
- `public_ip` (data)
- `public_ip_prefix` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | Name of a NAT Gateway.
[`resource_group_name`](#resource_group_name) | `string` | Name of a Resource Group hosting the NAT Gateway (either the existing one or the one that will be created).
[`region`](#region) | `string` | Azure region.
[`subnet_ids`](#subnet_ids) | `map` | A map of subnet IDs what will be bound with this NAT Gateway.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | A map of tags that will be assigned to resources created by this module.
[`create_natgw`](#create_natgw) | `bool` | Triggers creation of a NAT Gateway when set to `true`.
[`zone`](#zone) | `string` | Controls whether the NAT Gateway will be bound to a specific zone or not.
[`idle_timeout`](#idle_timeout) | `number` | Connection IDLE timeout in minutes (up to 120, defaults to Azure defaults).
[`public_ip`](#public_ip) | `object` | A map defining a Public IP resource.
[`public_ip_prefix`](#public_ip_prefix) | `object` | A map defining a Public IP Prefix resource.

### Outputs

Name |  Description
--- | ---
`natgw_pip` | Public IP associated with the NAT Gateway.
`natgw_pip_prefix` | Public IP Prefix associated with the NAT Gateway.

### Required Inputs details

#### name

Name of a NAT Gateway.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### resource_group_name

Name of a Resource Group hosting the NAT Gateway (either the existing one or the one that will be created).

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### region

Azure region. Only for newly created resources.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### subnet_ids

A map of subnet IDs what will be bound with this NAT Gateway.
  
Value is the subnet ID, key value does not matter but should be unique, typically it can be a subnet name.


Type: map(string)

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

A map of tags that will be assigned to resources created by this module. Only for newly created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### create_natgw

Triggers creation of a NAT Gateway when set to `true`.
  
Set it to `false` to source an existing resource. In this 'mode' the module will only bind an existing NAT Gateway to specified
subnets.


Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### zone

Controls whether the NAT Gateway will be bound to a specific zone or not. This is a string with the zone number or `null`. Only
for newly created resources.

NAT Gateway is not zone-redundant. It is a zonal resource. It means that it's always deployed in a zone. It's up to the user to
decide if a zone will be specified during resource deployment or if Azure will take that decision for the user. Keep in mind
that regardless of the fact that NAT Gateway is placed in a specific zone it can serve traffic for resources in all zones. But
if that zone becomes unavailable, resources in other zones will lose internet connectivity.

For design considerations, limitation and examples of zone-resiliency architecture please refer to [Microsoft documentation](https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-availability-zones).


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### idle_timeout

Connection IDLE timeout in minutes (up to 120, defaults to Azure defaults). Only for newly created resources.

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### public_ip

A map defining a Public IP resource.

List of available properties:

- `create`              - (`bool`, required) controls whether a Public IP is created, sourced, or not used at all.
- `name`                - (`string`, optional) name of a created or sourced Public IP, required unless `public_ip` module and 
                          `id` property are used.
- `resource_group_name` - (`string`, optional) name of a resource group hosting the sourced Public IP resource, ignored when
                          `create = true`.
- `id`                  - (`string`, optional, defaults to `null`) ID of the Public IP to associate with the NAT Gateway. 
                          Property is used when Public IP Address is not created or sourced within this module.

The module operates in 3 modes, depending on combination of `create` and `name` properties:

`create` | `name` | operation
--- | --- | ---
`true` | `!null` | a Public IP resource is created in a resource group of the NAT Gateway
`false` | `!null` | a Public IP resource is sourced from a resource group of the NAT Gateway, the resource group can be
                    overridden with `resource_group_name` property
`false` | `null` | a Public IP resource will not be created or sourced at all
  
Example:

```hcl
# create a new Public IP
public_ip = {
  create = true
  name = "new-public-ip-name"
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


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### public_ip_prefix

A map defining a Public IP Prefix resource.
  
List of available properties:

- `create`              - (`bool`, required) controls whether a Public IP Prefix is created, sourced, or not used at all.
- `name`                - (`string`, optional) name of a created or sourced Public IP Prefix, required unless `public_ip`
                          module and `id` property are used.
- `resource_group_name` - (`string`, optional) name of a resource group hosting the sourced Public IP Prefix resource, ignored
                          when `create = true`.
- `length`              - (`number`, optional, defaults to `28`) number of bits of the Public IP Prefix, this value can be
                          between `0` and `31` but can be limited on subscription level (Azure default is `/28`).
- `id`                  - (`string`, optional, defaults to `null`) ID of the Public IP Prefix to associate with the NAT Gateway.
                          Property is used when Public IP Prefix is not created or sourced within this module.

The module operates in 3 modes, depending on combination of `create` and `name` properties:

`create` | `name` | operation
--- | --- | ---
`true` | `!null` | a Public IP Prefix resource is created in a resource group of the NAT Gateway
`false` | `!null` | a Public IP Prefix resource is sourced from a resource group of the NAT Gateway, the resource group can be
                    overridden with `resource_group_name` property
`false` | `null` | a Public IP Prefix resource will not be created or sourced at all

Example:

```hcl
# create a new Public IP Prefix, default prefix length is `/28`
public_ip_prefix = {
  create = true
  name   = "new-public-ip-prefix-name"
}

# source an existing Public IP Prefix from an external resource group
public_ip = {
  create              = false
  name                = "existing-public-ip-prefix-name"
  resource_group_name = "external-rg-name"
}
```


Type: 

```hcl
object({
    create              = bool
    name                = optional(string)
    resource_group_name = optional(string)
    length              = optional(number, 28)
    id                  = optional(string)
  })
```


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>