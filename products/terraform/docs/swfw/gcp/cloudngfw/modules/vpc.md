---
hide_title: true
id: vpc
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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: VPC
title: VPC Network Module for GCP
---

# VPC Network Module for GCP

A Terraform module for deploying a VPC and associated subnetworks and firewall rules in GCP.

One advantage of this module over the [terraform-google-network](https://github.com/terraform-google-modules/terraform-google-network/tree/master) module is that this module lets you use existing VPC networks and subnetworks to support brownfield deployments.

# IPv4/IPv6 Dual Stack Usage Example

```
locals {
  project     = "<project_id>"
  name_prefix = "test-ipv6-"
  networks = {
    inside-vpc = {
      vpc_name                        = "inside-vpc"
      create_network                  = true
      delete_default_routes_on_create = true
      mtu                             = "1460"
      routing_mode                    = "REGIONAL"
      enable_ula_internal_ipv6        = true
      subnetworks = {
        inside-snet = {
          subnetwork_name   = "inside-vpc-snet"
          create_subnetwork = true
          ip_cidr_range     = "10.10.10.0/24"
          region            = "us-east1"
          stack_type        = "IPV4_IPV6"
          ipv6_access_type  = "INTERNAL"
        }
      }
      firewall_rules = {
        allow-inside-ingress4 = {
          name             = "allow-inside-ingress4"
          source_ranges    = ["35.191.0.0/16", "130.211.0.0/22", "10.0.0.0/8"]
          priority         = "1000"
          allowed_protocol = "all"
          allowed_ports    = []
        }
        allow-inside-ingress6 = {
          name             = "allow-inside-ingress6"
          source_ranges    = ["::/0"]
          priority         = "1000"
          allowed_protocol = "all"
          allowed_ports    = []
        }
      }
    }
    untrust-vpc = {
      vpc_name       = "untrust-vpc"
      create_network = true
      subnetworks = {
        untrust-snet = {
          subnetwork_name   = "untrust-vpc-snet"
          create_subnetwork = true
          ip_cidr_range     = "10.10.20.0/24"
          region            = "us-east1"
          stack_type        = "IPV4_IPV6"
          ipv6_access_type  = "EXTERNAL"
        }
      }
      firewall_rules = {
        allow-untrust-ingress6 = {
          name             = "allow-untrust-ingress6"
          source_ranges    = ["::/0"]
          priority         = "1000"
          allowed_protocol = "all"
          allowed_ports    = []
        }
      }
    }
  }
}

module "vpc" {
  source = "../../modules/vpc"

  for_each = local.networks

  project_id                      = local.project
  name                            = "${local.name_prefix}${each.value.vpc_name}"
  create_network                  = each.value.create_network
  delete_default_routes_on_create = try(each.value.delete_default_routes_on_create, false)
  mtu                             = try(each.value.mtu, 1460)
  routing_mode                    = try(each.value.routing_mode, "REGIONAL")
  enable_ula_internal_ipv6        = try(each.value.enable_ula_internal_ipv6, false)
  internal_ipv6_range             = try(each.value.internal_ipv6_range, "")
  subnetworks = { for k, v in each.value.subnetworks : k => merge(v, {
    name = "${local.name_prefix}${v.subnetwork_name}"
    })
  }
  firewall_rules = try({ for k, v in each.value.firewall_rules : k => merge(v, {
    name = "${local.name_prefix}${v.name}"
    })
  }, {})
}
```

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/vpc) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/vpc)

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `google`, version: >= 4.54



### Resources

- `compute_firewall` (managed)
- `compute_network` (managed)
- `compute_subnetwork` (managed)
- `compute_network` (data)
- `compute_subnetwork` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the created or already existing VPC Network.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`project_id`](#project_id) | `string` | Project in which to create or look for VPCs and subnets.
[`create_network`](#create_network) | `bool` | A flag to indicate the creation or import of a VPC network.
[`subnetworks`](#subnetworks) | `map` | A map containing subnetworks configuration.
[`firewall_rules`](#firewall_rules) | `map` | A map containing each firewall rule configuration.
[`delete_default_routes_on_create`](#delete_default_routes_on_create) | `bool` | A flag to indicate the deletion of the default routes at VPC creation.
[`mtu`](#mtu) | `number` | MTU value for VPC Network.
[`routing_mode`](#routing_mode) | `string` | Type of network-wide routing mode to use.
[`enable_ula_internal_ipv6`](#enable_ula_internal_ipv6) | `bool` | Enable ULA internal IPv6 on this network.
[`internal_ipv6_range`](#internal_ipv6_range) | `string` | When enabling ULA internal IPv6 you can optionally specify the /48 range.

### Outputs

Name |  Description
--- | ---
`network` | Created or read network attributes.
`subnetworks` | Map containing key, value pairs of created or read subnetwork attributes.

### Required Inputs details

#### name

The name of the created or already existing VPC Network.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### project_id

Project in which to create or look for VPCs and subnets

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### create_network

A flag to indicate the creation or import of a VPC network.
Setting this to `true` will create a new network managed by Terraform.
Setting this to `false` will try to read the existing network identified by `name` and `project` variables.


Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### subnetworks

A map containing subnetworks configuration. Subnets can belong to different regions.
List of available attributes of each subnetwork entry:
- `name` : Name of the subnetwork.
- `create_subnetwork` : Boolean value to control the creation or reading of the subnetwork. If set to `true` - this will create the subnetwork. If set to `false` - this will read a subnet with provided information.
- `ip_cidr_range` : A string that contains the subnetwork to create. Only IPv4 format is supported.
- `region` : Region where to configure or import the subnet.
- `stack_type` : IP stack type. IPV4_ONLY (default) and IPV4_IPV6 are supported.
- `ipv6_access_type` : The access type of IPv6 address. It's immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack. Possible values are: EXTERNAL, INTERNAL.
- `log_config` : (Optional) A map containing the logging configuration for the subnetwork.
  - `aggregation_interval` : (Optional) The interval at which logs are aggregated for the subnetwork. Possible values are: `INTERVAL_5_SEC`, `INTERVAL_30_SEC`, `INTERVAL_1_MIN`, `INTERVAL_5_MIN`, `INTERVAL_10_MIN`, `INTERVAL_15_MIN`.
  - `flow_sampling` : (Optional) The value of the field must be in [0, 1]. Set the sampling rate of VPC flow logs within the subnetwork where 1.0 means all collected logs are reported and 0.0 means no logs are reported.
  - `metadata` : (Optional) Configures whether metadata fields should be added to the reported VPC flow logs. Default value is `INCLUDE_ALL_METADATA`. Possible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`, `CUSTOM_METADATA`.
  - `metadata_fields` : (Optional) List of metadata fields that should be added to reported logs. Can only be specified if VPC flow logs for this subnetwork is enabled and `metadata` is set to `CUSTOM_METADATA`.
  - `filter_expr` : (Optional) Export filter used to define which VPC flow logs should be logged, as as CEL expression.

Example:
```
subnetworks = {
  my-sub = {
    name = "my-sub"
    create_subnetwork = true
    ip_cidr_range = "192.168.0.0/24"
    region = "us-east1"
  }
}
```


Type: 

```hcl
map(object({
    name              = string
    create_subnetwork = optional(bool, true)
    ip_cidr_range     = string
    region            = string
    stack_type        = optional(string)
    ipv6_access_type  = optional(string)
    log_config = optional(object({
      aggregation_interval = optional(string)
      flow_sampling        = optional(string)
      metadata             = optional(string)
      metadata_fields      = optional(list(string))
      filter_expr          = optional(string)
    }))
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### firewall_rules

A map containing each firewall rule configuration.
Action of the firewall rule is always `allow`.
The only possible direction of the firewall rule is `INGRESS`.

List of available attributes of each firewall rule entry:
- `name` : Name of the firewall rule.
- `source_ranges` : (Optional) A list of strings containing the source IP ranges to be allowed on the firewall rule.
- `source_tags` : (Optional) A list of strings containing the source network tags to be allowed on the firewall rule.
- `source_service_accounts` : (Optional) A list of strings containg the source servce accounts to be allowed on the firewall rule.
- `target_service_accounts` : (Optional) A list of strings containing the service accounts for which the firewall rule applies to.
- `target_tags` : (Optional) A list of strings containing the network tags for which the firewall rule applies to. 
- `allowed_protocol` : The protocol type to match in the firewall rule. Possible values are: `tcp`, `udp`, `icmp`, `esp`, `ah`, `sctp`, `ipip`, `all`.
- `ports` : A list of strings containing TCP or UDP port numbers to match in the firewall rule. This type of setting can only be configured if allowing TCP and UDP as protocols.
- `priority` : (Optional) A priority value for the firewall rule. The lower the number - the more preferred the rule is.
- `log_metadata` : (Optional) This field denotes whether to include or exclude metadata for firewall logs. Possible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`.

Example :
```
firewall_rules = {
  firewall-rule-v4 = {
    name             = "allow-range-ipv4"
    source_ranges    = ["10.10.10.0/24", "1.1.1.0/24"]
    priority         = "2000"
    target_tags      = ["vmseries-firewalls"]
    allowed_protocol = "TCP"
    allowed_ports    = ["443", "22"]
  }
  firewall-rule-v6 = {
    name             = "allow-range-ipv6"
    source_ranges    = ["::/0"]
    priority         = "1000"
    allowed_protocol = "all"
    allowed_ports    = []
  }
}
```


Type: 

```hcl
map(object({
    name                    = string
    source_ranges           = optional(list(string))
    source_tags             = optional(list(string))
    source_service_accounts = optional(list(string))
    allowed_protocol        = string
    allowed_ports           = list(string)
    priority                = optional(string)
    target_service_accounts = optional(list(string))
    target_tags             = optional(list(string))
    log_metadata            = optional(string)
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### delete_default_routes_on_create

A flag to indicate the deletion of the default routes at VPC creation.
Setting this to `true` the default route `0.0.0.0/0` will be deleted upon network creation.
Setting this to `false` the default route `0.0.0.0/0` will be not be deleted upon network creation.


Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### mtu

MTU value for VPC Network. Acceptable values are between 1300 and 8896.


Type: number

Default value: `1460`

<sup>[back to list](#modules-optional-inputs)</sup>

#### routing_mode

Type of network-wide routing mode to use. Possible types are: REGIONAL and GLOBAL.
REGIONAL routing mode will set the cloud routers to only advertise subnetworks within the same region as the router.
GLOBAL routing mode will set the cloud routers to advertise all the subnetworks that belong to this network.


Type: string

Default value: `REGIONAL`

<sup>[back to list](#modules-optional-inputs)</sup>

#### enable_ula_internal_ipv6

Enable ULA internal IPv6 on this network.
Enabling this feature will assign a /48 subnet from Google defined ULA prefix fd20::/20.


Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### internal_ipv6_range

When enabling ULA internal IPv6 you can optionally specify the /48 range. 
The input must be a valid /48 ULA IPv6 address within the range fd20::/20. 
Operation will fail if the speficied /48 is already in use by another resource.


Type: string

Default value: ``

<sup>[back to list](#modules-optional-inputs)</sup>