---
hide_title: true
id: vnet_peering
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
sidebar_label: Vnet Peering
title: Palo Alto Networks VNet Peering Module for Azure
---

# Palo Alto Networks VNet Peering Module for Azure

A terraform module for deploying a Virtual Network Peering and its components required for the VM-Series firewalls in Azure.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/vnet_peering) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/vnet_peering)

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
| [azurerm_virtual_network_peering.local](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_peering) | resource |
| [azurerm_virtual_network_peering.remote](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_network_peering) | resource |
| [azurerm_virtual_network.local_peer](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/virtual_network) | data source |
| [azurerm_virtual_network.remote_peer](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/virtual_network) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | Prefix name appended to the peering names. | `string` | `""` | no |
| <a name="input_local_peer_config"></a> [local\_peer\_config](#input\_local\_peer\_config) | A map that contains the local peer configuration.<br />Mandatory Values: <br />- `vnet_name`                   - (`string`, required) the local peer VNET name.<br />- `resource_group_name          - (`string`, required) : the resource group name of the local peer<br />- `allow\_virtual\_network\_access - (`bool`, optional, defaults to `true`) : allows communication between the two peering VNETs<br />- `allow_forwarded_traffic`     - (`bool`, optional, defaults to `true`) : allows traffic forwarded from the remote VNET but not originated from within it<br />- `allow_gateway_transit`       - (`bool`, optional, defaults to `false`) : controls the learning of routes from local VNET (gateway or route server) into the remote VNET. Must be true if `use_remote_gateways` is `true` for remote peer<br />- `use_remote_gateways`         - (`bool`, optional, defaults to `false`) : controls the learning of routes from the remote VNET (gateway or route server) into the local VNET<br />- `name`                        - (`string`, optional, defaults to `<var.name_prefix><var.local_peer_config.vnet_name>-to-<var.remote_peer_config.vnet_name>`) : the name of the local VNET peering | `map(any)` | n/a | yes |
| <a name="input_remote_peer_config"></a> [remote\_peer\_config](#input\_remote\_peer\_config) | A map that contains the remote peer configuration.<br />Mandatory Values :<br />- `vnet_name`                   - (`string`, required) : the remote peer VNET name.<br />- `resource_group_name          - (`string`, required) : the resource group name of the remote peer<br />- `allow\_virtual\_network\_access - (`bool`, optional, defaults to `true`) : allows communication between the two peering VNETs<br />- `allow_forwarded_traffic`     - (`bool`, optional, defaults to `true`) : allows traffic forwarded from the local VNET but not originated from within it<br />- `allow_gateway_transit`       - (`bool`, optional, defaults to `false`) : controls the learning of routes from remote VNET (gateway or route server) into the local VNET. Must be true if `use_remote_gateways` is `true` for local peer<br />- `use_remote_gateways`         - (`bool`, optional, defaults to `false`) : controls the learning of routes from the local VNET (gateway or route server) into the remote VNET<br />- `name`                        - (`string`, optional, defaults to `<var.name_prefix><var.remote_peer_config.vnet_name>-to-<var.local_peer_config.vnet_name>`) : the name of the local VNET peering | `map(any)` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_local_peering_name"></a> [local\_peering\_name](#output\_local\_peering\_name) | The name of the local VNET peering. |
| <a name="output_remote_peering_name"></a> [remote\_peering\_name](#output\_remote\_peering\_name) | The name of the remote VNET peering. |
| <a name="output_local_peering_id"></a> [local\_peering\_id](#output\_local\_peering\_id) | The ID of the local VNET peering. |
| <a name="output_remote_peering_id"></a> [remote\_peering\_id](#output\_remote\_peering\_id) | The ID of the remote VNET peering. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->