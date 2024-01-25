---
hide_title: true
id: test_infrastructure
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
sidebar_label: Test Infrastructure
title: Test Infrastructure code
---

# Test Infrastructure code

Terraform code to deploy a test infrastructure consisting of:

* two VNETs that can be peered with the transit VNET deployed in any of the examples, each contains:
  * a Linux-based VM running NGINX server to mock a web application
  * an Azure Bastion (enables SSH access to the VM)
  * UDRs forcing the traffic to flow through the NVA deployed by any of NGFW examples.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/examples/test_infrastructure) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/examples/test_infrastructure)

## Usage

To use this code, please deploy one of the examples first. Then copy the [`examples.tfvars`](./example.tfvars) to `terraform.tfvars` and edit it to your needs.

Please correct the values marked with `TODO` markers at minimum.

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_random"></a> [random](#provider\_random) | n/a |
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | n/a |

### Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_vnet"></a> [vnet](#module\_vnet) | ../../modules/vnet | n/a |
| <a name="module_vnet_peering"></a> [vnet\_peering](#module\_vnet\_peering) | ../../modules/vnet_peering | n/a |

### Resources

| Name | Type |
|------|------|
| [azurerm_bastion_host.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/bastion_host) | resource |
| [azurerm_linux_virtual_machine.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine) | resource |
| [azurerm_network_interface.vm](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_interface) | resource |
| [azurerm_public_ip.bastion](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip) | resource |
| [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group) | resource |
| [random_password.this](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/resource_group) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_tags"></a> [tags](#input\_tags) | Map of tags to assign to the created resources. | `map(string)` | `{}` | no |
| <a name="input_location"></a> [location](#input\_location) | The Azure region to use. | `string` | n/a | yes |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | A prefix that will be added to all created resources.<br />There is no default delimiter applied between the prefix and the resource name. Please include the delimiter in the actual prefix.<br /><br />Example:<pre>name\_prefix = "test-"</pre>NOTICE. This prefix is not applied to existing resources.<br />If you plan to reuse i.e. a VNET please specify it's full name, even if it is also prefixed with the same value as the one in this property. | `string` | `""` | no |
| <a name="input_create_resource_group"></a> [create\_resource\_group](#input\_create\_resource\_group) | When set to `true` it will cause a Resource Group creation. Name of the newly specified RG is controlled by `resource_group_name`.<br />When set to `false` the `resource_group_name` parameter is used to specify a name of an existing Resource Group. | `bool` | `true` | no |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the Resource Group. | `string` | n/a | yes |
| <a name="input_vnets"></a> [vnets](#input\_vnets) | A map defining VNETs.<br /><br />For detailed documentation on each property refer to [module documentation](../../modules/vnet)<br /><br />- `name` :  A name of a VNET.<br />- `create_virtual_network` : (default: `true`) when set to `true` will create a VNET, `false` will source an existing VNET, in both cases the name of the VNET is specified with `name`<br />- `address_space` : a list of CIDRs for VNET<br />- `resource_group_name` :  (default: current RG) a name of a Resource Group in which the VNET will reside<br />- `hub_vnet_name` : (default: `null`) name of an existing transit VNET. Setting this value triggers peering between the spoke and the transit VNET<br />- `hub_resource_group_name`: (default: current RG) name of a Resource Group hosting a transit VNET, when skipped, the local Resource Group will be used<br /><br />- `create_subnets` : (default: `true`) if true, create the Subnets inside the Virtual Network, otherwise use pre-existing subnets<br />- `subnets` : map of Subnets to create<br /><br />- `network_security_groups` : map of Network Security Groups to create<br />- `route_tables` : map of Route Tables to create. | `any` | n/a | yes |
| <a name="input_hub_resource_group_name"></a> [hub\_resource\_group\_name](#input\_hub\_resource\_group\_name) | Name of the Resource Group hosting the hub/transit infrastructure. This value is required to create peering between the spoke and the hub VNET. | `string` | `null` | no |
| <a name="input_hub_vnet_name"></a> [hub\_vnet\_name](#input\_hub\_vnet\_name) | Name of the hub/transit VNET. This value is required to create peering between the spoke and the hub VNET. | `string` | `null` | no |
| <a name="input_vm_size"></a> [vm\_size](#input\_vm\_size) | Azure test VM size. | `string` | `"Standard_D1_v2"` | no |
| <a name="input_username"></a> [username](#input\_username) | Name of the VM admin account. | `string` | `"panadmin"` | no |
| <a name="input_password"></a> [password](#input\_password) | A password for the admin account. | `string` | `null` | no |
| <a name="input_test_vms"></a> [test\_vms](#input\_test\_vms) | A map defining test VMs.<br /><br />Values contain the following elements:<br /><br />- `name`: a name of the VM<br />- `vnet_key`: a key describing a VNET defined in `var.vnets`<br />- `subnet_key`: a key describing a subnet found in a VNET definition | <pre>map(object({<br />    name       = string<br />    vnet\_key   = string<br />    subnet\_key = string<br />  }))</pre> | `{}` | no |
| <a name="input_bastions"></a> [bastions](#input\_bastions) | A map containing Azure Bastion definitions.<br /><br />This map follows resource definition convention, following values are available:<br />- `name`: Bastion name<br />- `vnet_key`: a key describing a VNET defined in `var.vnets`. This VNET should already have an existing subnet called `AzureBastionSubnet` (the name is hardcoded by Microsoft).<br />- `subnet_key`: a key pointing to a subnet dedicated to a Bastion deployment (the name should be `AzureBastionSubnet`.) | <pre>map(object({<br />    name       = string<br />    vnet\_key   = string<br />    subnet\_key = string<br />  }))</pre> | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_username"></a> [username](#output\_username) | Test VMs admin account. |
| <a name="output_password"></a> [password](#output\_password) | Password for the admin user. |
| <a name="output_vm_private_ips"></a> [vm\_private\_ips](#output\_vm\_private\_ips) | A map of private IPs assigned to test VMs. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->