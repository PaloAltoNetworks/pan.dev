---
hide_title: true
id: name_templater
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
sidebar_label: Name Templater
title: Name Templater module
---

# Name Templater module

A module to generate resource name template.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/name_templater) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/name_templater)

## Purpose

There are situations where simple name prefixing is not enough. More complex structures are required.
This module generates a string template that can be used with Terraform's `format()` function to generate the actual resource name.

## Usage

A simple module invocation might look like the following:

```hcl
module "name_templates" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/name_templater"

  resource_type = "vnet"
  name_template = {
    delimiter = "-"
    parts = [
      { prefix = null },
      { bu = "rnd" },
      { randomize = "__random__" },
      { env = "prd" },
      { name = "%s" },
      { abbreviation = "__default__" },
    ]
  }
  name_prefix   = "a_prefix"
}
```

The value the module will output for such invocation would be `"a_prefix-rnd-crediblefrog-prd-%s-vnet"`.

As you can see:

* all `parts` values are *glued* together to form a template name
* the `prefix` key is just a placeholder that eventually is replaced with the value of `name_prefix`
* the `__random__` string is replaced with a name of a [random pet](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/pet) (in case you need to randomize some name, for testing purposes for example)
* the `__default__` string is replaced with a resource abbreviation.
  This abbreviations are defined with `var.abbreviations` variable. The module contains basic abbreviations following Microsoft suggestions, but they can be overriden with custom definitions.
  The important part is that the `resource_type` has to match an entry in `abbreviations` variable, otherwise the abbreviation will be replaced with an empty string.

To create the actual resource name the following code can be used:

```hcl
vnet_name = format(module.name_templates.template, "transit")
```

Following the values above the actual resource name would be `"a_prefix-rnd-crediblefrog-prd-transit-vnet"`.

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `random`, version: ~> 3.5

### Providers

- `random`, version: ~> 3.5



### Resources

- `pet` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`resource_type`](#resource_type) | `string` | A type of resource for which the name template will be created.
[`name_prefix`](#name_prefix) | `string` | Prefix used in names for the resources.
[`name_template`](#name_template) | `object` | A name template definition.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`abbreviations`](#abbreviations) | `map` | Map of abbreviations used for resources (placed in place of "__default__").

### Outputs

Name |  Description
--- | ---
`template` | A template string that can be used with `format` function to generate a resource name.

### Required Inputs details

#### resource_type

A type of resource for which the name template will be created. This should follow the abbreviations resource naming standard.


Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### name_prefix

Prefix used in names for the resources.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### name_template

A name template definition.

Consist of two elements:

- `delimiter` - (`string`, required) a string that will be used to separate the elements.
- `parts`     - (`list`, required) a list of elements that will form the template name.

There are couple of rules to be followed:

- the order **DOES** matter.
- `parts` is a list of single element maps.
- keys in `parts` elements will be dropped, they are only informational, only values will be used.
- value for the `prefix` key will be replaced with the `var.name_prefix` value.
- a value of `__default__` will be replaced with an abbreviation defined in the `var.abbrevations` and matching
  `var.resource_type`.
- since this module generates template name do **REMEMBER** to include a part with `%s` value.

Example:

```
default = {
  default = {
    delimiter = "-"
    parts = [
      { prefix = null },
      { bu = "rnd" },
      { env = "prd" },
      { name = "%s" },
      { abbreviation = "__default__" },
    ]
  }
  storage = {
    delimiter = ""
    parts = [
      { prefix = null },
      { org = "palo" },
      { env = "prd" },
      { name = "%s" },
    ]
  }
}
```


Type: 

```hcl
object({
    delimiter = string
    parts     = list(map(string))
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### abbreviations

Map of abbreviations used for resources (placed in place of "__default__").

These abbreviations are based on [Microsoft suggestions](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations).


Type: map(string)

Default value: `map[application_gw:agw application_insights:appi availability_set:avail bastion:bas data_disk:disk file_share:share load_balancer:lb log_analytics_workspace:log managed_identity:id nat_gw:ng network_interface:nic nsg:nsg nsg_rule:nsgsr os_disk:osdisk public_ip:pip public_ip_prefix:ippre resource_group:rg route_table:rt service_endpoint:se storage_account:st subnet:snet udr:udr virtual_machine:vm virtual_machine_scale_set:vmss virtual_network_gateway:vgw vnet:vnet vnet_peering:peer]`

<sup>[back to list](#modules-optional-inputs)</sup>