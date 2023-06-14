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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: VPC Peering
title: VPC peering
---

# VPC peering

The module allows to create VPC peering between two networks in both directions.

By default, no routes are exported/imported for each direction, every option has to be explicitely enabled by setting appropriate value to `true`.

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | n/a |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google_compute_network_peering.local](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_network_peering) | resource |
| [google_compute_network_peering.peer](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_network_peering) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_local_export_custom_routes"></a> [local\_export\_custom\_routes](#input\_local\_export\_custom\_routes) | Export custom routes setting for 'local->peer' direction. | `bool` | `false` | no |
| <a name="input_local_export_subnet_routes_with_public_ip"></a> [local\_export\_subnet\_routes\_with\_public\_ip](#input\_local\_export\_subnet\_routes\_with\_public\_ip) | Export subnet routes with public IP setting for 'local->peer' direction. | `bool` | `false` | no |
| <a name="input_local_import_custom_routes"></a> [local\_import\_custom\_routes](#input\_local\_import\_custom\_routes) | Import custom routes setting for 'local->peer' direction. | `bool` | `false` | no |
| <a name="input_local_import_subnet_routes_with_public_ip"></a> [local\_import\_subnet\_routes\_with\_public\_ip](#input\_local\_import\_subnet\_routes\_with\_public\_ip) | Import subnet routes with public IP setting for 'local->peer' direction. | `bool` | `false` | no |
| <a name="input_local_network"></a> [local\_network](#input\_local\_network) | Self-link or id of the first network (local) in pair. | `string` | n/a | yes |
| <a name="input_local_peering_name"></a> [local\_peering\_name](#input\_local\_peering\_name) | Name for 'local->peer' direction peering resource. If not specified defaults to `<name_prefix><local network name>-<peer network name>`. | `string` | `null` | no |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | Optional prefix for auto-generated peering resource names. | `string` | `""` | no |
| <a name="input_peer_export_custom_routes"></a> [peer\_export\_custom\_routes](#input\_peer\_export\_custom\_routes) | Export custom routes setting for 'peer->local' direction. | `bool` | `false` | no |
| <a name="input_peer_export_subnet_routes_with_public_ip"></a> [peer\_export\_subnet\_routes\_with\_public\_ip](#input\_peer\_export\_subnet\_routes\_with\_public\_ip) | Export subnet routes with public IP setting for 'peer->local' direction. | `bool` | `false` | no |
| <a name="input_peer_import_custom_routes"></a> [peer\_import\_custom\_routes](#input\_peer\_import\_custom\_routes) | Import custom routes setting for 'peer->local' direction. | `bool` | `false` | no |
| <a name="input_peer_import_subnet_routes_with_public_ip"></a> [peer\_import\_subnet\_routes\_with\_public\_ip](#input\_peer\_import\_subnet\_routes\_with\_public\_ip) | Import subnet routes with public IP setting for 'peer->local' direction. | `bool` | `false` | no |
| <a name="input_peer_network"></a> [peer\_network](#input\_peer\_network) | Self-link or id of the second network (peer) in pair. | `string` | n/a | yes |
| <a name="input_peer_peering_name"></a> [peer\_peering\_name](#input\_peer\_peering\_name) | Name for 'peer->local' direction peering resource. If not specified defaults to `<name_prefix><peer network name>-<local network name>`. | `string` | `null` | no |

### Outputs

No outputs.
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->