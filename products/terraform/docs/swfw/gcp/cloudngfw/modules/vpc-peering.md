---
hide_title: true
id: vpc-peering
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
sidebar_label: VPC Peering
title: VPC peering
---

# VPC peering

The module allows to create VPC peering between two networks in both directions.

By default, no routes are exported/imported for each direction, every option has to be explicitely enabled by setting appropriate value to `true`.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/vpc-peering) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/vpc-peering)

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `google`, version: >= 4.54



### Resources

- `compute_network_peering` (managed)
- `compute_network_peering` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`local_network`](#local_network) | `string` | Self-link or id of the first network (local) in pair.
[`peer_network`](#peer_network) | `string` | Self-link or id of the second network (peer) in pair.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`local_peering_name`](#local_peering_name) | `string` | Name for 'local->peer' direction peering resource.
[`peer_peering_name`](#peer_peering_name) | `string` | Name for 'peer->local' direction peering resource.
[`name_prefix`](#name_prefix) | `string` | Optional prefix for auto-generated peering resource names.
[`stack_type`](#stack_type) | `string` | Which IP version(s) or routes are allowed to be imported or exported between peer networks.
[`local_export_custom_routes`](#local_export_custom_routes) | `bool` | Export custom routes setting for 'local->peer' direction.
[`local_import_custom_routes`](#local_import_custom_routes) | `bool` | Import custom routes setting for 'local->peer' direction.
[`local_export_subnet_routes_with_public_ip`](#local_export_subnet_routes_with_public_ip) | `bool` | Export subnet routes with public IP setting for 'local->peer' direction.
[`local_import_subnet_routes_with_public_ip`](#local_import_subnet_routes_with_public_ip) | `bool` | Import subnet routes with public IP setting for 'local->peer' direction.
[`peer_export_custom_routes`](#peer_export_custom_routes) | `bool` | Export custom routes setting for 'peer->local' direction.
[`peer_import_custom_routes`](#peer_import_custom_routes) | `bool` | Import custom routes setting for 'peer->local' direction.
[`peer_export_subnet_routes_with_public_ip`](#peer_export_subnet_routes_with_public_ip) | `bool` | Export subnet routes with public IP setting for 'peer->local' direction.
[`peer_import_subnet_routes_with_public_ip`](#peer_import_subnet_routes_with_public_ip) | `bool` | Import subnet routes with public IP setting for 'peer->local' direction.



### Required Inputs details

#### local_network

Self-link or id of the first network (local) in pair.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### peer_network

Self-link or id of the second network (peer) in pair.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### local_peering_name

Name for 'local->peer' direction peering resource. If not specified defaults to `<name_prefix><local network name>-<peer network name>`.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### peer_peering_name

Name for 'peer->local' direction peering resource. If not specified defaults to `<name_prefix><peer network name>-<local network name>`.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### name_prefix

Optional prefix for auto-generated peering resource names.

Type: string

Default value: ``

<sup>[back to list](#modules-optional-inputs)</sup>

#### stack_type

Which IP version(s) or routes are allowed to be imported or exported between peer networks. Possible values: `IPV4_ONLY` (default), `IPV4_IPV6`.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### local_export_custom_routes

Export custom routes setting for 'local->peer' direction.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### local_import_custom_routes

Import custom routes setting for 'local->peer' direction.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### local_export_subnet_routes_with_public_ip

Export subnet routes with public IP setting for 'local->peer' direction.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### local_import_subnet_routes_with_public_ip

Import subnet routes with public IP setting for 'local->peer' direction.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### peer_export_custom_routes

Export custom routes setting for 'peer->local' direction.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### peer_import_custom_routes

Import custom routes setting for 'peer->local' direction.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### peer_export_subnet_routes_with_public_ip

Export subnet routes with public IP setting for 'peer->local' direction.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### peer_import_subnet_routes_with_public_ip

Import subnet routes with public IP setting for 'peer->local' direction.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>