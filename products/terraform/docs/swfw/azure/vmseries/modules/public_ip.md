---
hide_title: true
id: public_ip
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
sidebar_label: Public Ip
title: Palo Alto Networks Public IP Module for Azure
---

# Palo Alto Networks Public IP Module for Azure

A Terraform module for deploying Public IP Addresses and Prefixes required for the VM-Series firewalls and other infrastructure
components in Azure.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/public_ip) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/public_ip)

## Purpose

All other modules that may require a Public IP Address resource support simple creation of it. This module allows more advanced
creation of Public IP Addresses and Prefixes, including:
- Specifying Availability Zones for Public IPs separately from the main resource
- Specifying Domain Name Label and Idle Timeout for Public IPs
- Allocating Public IP Addresses from an existing Public IP Prefix (e.g. Custom non-Microsoft IP Prefix)

## Usage

In order to use module `public_ip`, you need to deploy `azurerm_resource_group` as a prerequisite. Then you can use below code as
an example of calling module to create Public IP Addresses and Prefixes:

```hcl
module "public_ip" {
  source = ""PaloAltoNetworks/swfw-modules/azurerm//modules/public_ip"

  region = var.region
  public_ip_addresses = {
    for k, v in var.public_ips.public_ip_addresses : k => merge(v, {
      name                = "${var.name_prefix}${v.name}"
      resource_group_name = coalesce(v.resource_group_name, local.resource_group.name)
    })
  }
  public_ip_prefixes = {
    for k, v in var.public_ips.public_ip_prefixes : k => merge(v, {
      name                = "${var.name_prefix}${v.name}"
      resource_group_name = coalesce(v.resource_group_name, local.resource_group.name)
    })
  }

  tags = var.tags
}
```

Below there are provided sample values for `public_ips` map:

```hcl
public_ips = {
  public_ip_addresses = {
    # create a new public ip address in zone 1, with domain name label "domainname" and idle timeout of 10 minutes
    pip1 = {
      create                  = true
      name                    = "new-public-ip-name1"
      resource_group_name     = "pip-rg-name"
      zones                   = ["1"]
      domain_name_label       = "domainname"
      idle_timeout_in_minutes = 10
    }
    # create a new public ip address in all zones (default) and allocate it from an existing ip prefix
    pip2 = {
      create                     = true
      name                       = "new-public-ip-name2"
      resource_group_name        = "pip-rg-name"
      prefix_name                = "public-ip-prefix-name"
      prefix_resource_group_name = "ippre-rg-name"
    }
    # source an existing public ip address
    pip3 = {
      create              = false
      name                = "existing-public-ip-name"
      resource_group_name = "pip-rg-name"
    }
  }
  public_ip_prefixes = {
    # create a new public ip prefix in zone 1 with a prefix length of /28 (default)
    ippre1 = {
      create              = true
      name                = "new-public-ip-prefix-name1"
      resource_group_name = "ippre-rg-name"
      zones               = ["1"]
    }
    # create a new public ip prefix in all zones (default) with a prefix length of /30
    ippre2 = {
      create              = true
      name                = "new-public-ip-prefix-name2"
      resource_group_name = "ippre-rg-name"
      length              = 30
    }
    # source and existing public ip prefix
    ippre3 = {
      create              = false
      name                = "existing-public-ip-prefix-name"
      resource_group_name = "ippre-rg-name"
    }
  }
}
```

To make defining the Public IPs easy, you can use the following variable in the _glue_ code:

```hcl
variable "public_ips" {
  description = "A map defining Public IP Addresses and Prefixes."
  default     = {}
  type = object({
    public_ip_addresses = optional(map(object({
      create                     = bool
      name                       = string
      resource_group_name        = optional(string)
      zones                      = optional(list(string))
      domain_name_label          = optional(string)
      idle_timeout_in_minutes    = optional(number)
      prefix_name                = optional(string)
      prefix_resource_group_name = optional(string)
    })), {})
    public_ip_prefixes = optional(map(object({
      create              = bool
      name                = string
      resource_group_name = optional(string)
      zones               = optional(list(string))
      length              = optional(number)
    })), {})
  })
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
- `public_ip_prefix` (managed)
- `public_ip` (data)
- `public_ip_prefix` (data)
- `public_ip_prefix` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`public_ip_addresses`](#public_ip_addresses) | `map` | Map of objects describing Public IP Addresses.
[`public_ip_prefixes`](#public_ip_prefixes) | `map` | Map of objects describing Public IP Prefixes.

### Outputs

Name |  Description
--- | ---
`pip_ids` | The identifiers of the created or sourced Public IP Addresses.
`pip_ip_addresses` | The IP values of the created or sourced Public IP Addresses.
`ippre_ids` | The identifiers of the created or sourced Public IP Prefixes.
`ippre_ip_prefixes` | The IP values of the created or sourced Public IP Prefixes.

### Required Inputs details

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

#### public_ip_addresses

Map of objects describing Public IP Addresses.

List of available properties:

- `create`                     - (`bool`, required) controls whether a Public IP Address is created or sourced.
- `name`                       - (`string`, required) name of a created or sourced Public IP Address.
- `resource_group_name`        - (`string`, required) name of a Resource Group for created Public IP Address or hosting an
                                 existing Public IP Address.
- `zones`                      - (`list`, optional, defaults to ["1", "2", "3"]) list of Availability Zones in which the Public
                                 IP Address is available, setting this variable to explicit `null` disables a zonal deployment.
- `domain_name_label`          - (`string`, optional, defaults to `null`) a label for the Domain Name, will be used to make up
                                 the FQDN. If a domain name label is specified, an A DNS record is created for the Public IP in
                                 the Microsoft Azure DNS system.
- `idle_timeout_in_minutes`    - (`number`, optional, defaults to Azure default) the Idle Timeout in minutes for the Public IP
                                 Address, possible values are in the range from 4 to 32.
- `prefix_name`                - (`string`, optional) the name of an existing Public IP Prefix from where Public IP Addresses 
                                 should be allocated.
- `prefix_resource_group_name` - (`string`, optional, defaults to the PIP's RG) name of a Resource Group hosting an existing
                                 Public IP Prefix resource.
  
Example:

```hcl
# create two new Public IP Addresses, where the first IP is only in Availability Zone 1 
# and the second IP is in all 3 Availability Zones (default) and is allocated from a specific Public IP Prefix
public_ip_addresses = {
  pip1 = {
    create              = true
    name                = "new-public-ip-name1"
    resource_group_name = "pip-rg-name"
    zones               = ["1"]
  }
  pip2 = {
    create                     = true
    name                       = "new-public-ip-name2"
    resource_group_name        = "pip-rg-name"
    prefix_name                = "public-ip-prefix-name"
    prefix_resource_group_name = "ippre-rg-name"
  }
}

# source an existing Public IP
public_ip_addresses = {
  pip1 = {
    create              = false
    name                = "existing-public-ip-name"
    resource_group_name = "pip-rg-name"
  }
}
```


Type: 

```hcl
map(object({
    create                     = bool
    name                       = string
    resource_group_name        = string
    zones                      = optional(list(string), ["1", "2", "3"])
    domain_name_label          = optional(string)
    idle_timeout_in_minutes    = optional(number)
    prefix_name                = optional(string)
    prefix_resource_group_name = optional(string)
  }))
```


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### public_ip_prefixes

Map of objects describing Public IP Prefixes.
  
List of available properties:

- `create`              - (`bool`, required) controls whether a Public IP Prefix is created or sourced.
- `name`                - (`string`, required) name of a created or sourced Public IP Prefix.
- `resource_group_name` - (`string`, required) name of a Resource Group for created Public IP Prefix or hosting an existing
                          Public IP Prefix.
- `zones`               - (`list`, optional, defaults to ["1", "2", "3"]) list of Availability Zones in which the Public IP
                          Address is available, setting this variable to explicit `null` disables a zonal deployment.
- `length`              - (`number`, optional, defaults to `28`) number of bits of the Public IP Prefix, this value can be
                          between `0` and `31` but can be limited on subscription level (Azure default is `/28`).

Example:

```hcl
# create two new Public IP Prefixes, where the first one is only in Availability Zone 1 and with default prefix length of `/28`
# and the second one is in all 3 Availability Zones (default) and with prefix length of `/30`
public_ip_prefixes = {
  ippre1 = {
    create              = true
    name                = "new-public-ip-prefix-name1"
    resource_group_name = "ippre-rg-name"
    zones               = ["1"]
  }
  ippre2 = {
    create              = true
    name                = "new-public-ip-prefix-name2"
    resource_group_name = "ippre-rg-name"
    length              = 30
  }
}

# source an existing Public IP Prefix
public_ip_prefixes = {
  ippre1 = {
    create              = false
    name                = "existing-public-ip-prefix-name"
    resource_group_name = "ippre-rg-name"
  }
}
```


Type: 

```hcl
map(object({
    create              = bool
    name                = string
    resource_group_name = string
    zones               = optional(list(string), ["1", "2", "3"])
    length              = optional(number, 28)
  }))
```


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>