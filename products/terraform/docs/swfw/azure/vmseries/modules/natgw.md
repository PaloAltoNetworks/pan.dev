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
- azure
pagination_next: null
pagination_prev: null
sidebar_label: NATGW
title: NAT Gateway module
---

# NAT Gateway module

## Purpose

Terraform module used to deploy Azure NAT Gateway. For limitations and zone-resiliency considerations please refer to [Microsoft documentation](https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-overview).

This module can be used to either create a new NAT Gateway or to connect an existing one with subnets deployed using (for example) the [VNET module](../vnet/README.md).

## Usage

To deploy this resource in it's minimum configuration following code snippet can be used (assuming that the VNET module is used to deploy VNET and Subnets):

```terraform
module "natgw" {
  source = "../modules/natgw"

  name                = "NATGW_name"
  resource_group_name = "resource_group_name"
  location            = "region_name"
  subnet_ids          = { "a_subnet_name" = module.vnet.subnet_ids["a_subnet_name"] }
}
```

This will create a NAT Gateway in with a single Public IP in a zone chosen by Azure.

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
| [azurerm_nat_gateway.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/nat_gateway) | resource |
| [azurerm_nat_gateway_public_ip_association.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/nat_gateway_public_ip_association) | resource |
| [azurerm_nat_gateway_public_ip_prefix_association.nat_ips](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/nat_gateway_public_ip_prefix_association) | resource |
| [azurerm_public_ip.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip) | resource |
| [azurerm_public_ip_prefix.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip_prefix) | resource |
| [azurerm_subnet_nat_gateway_association.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/subnet_nat_gateway_association) | resource |
| [azurerm_nat_gateway.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/nat_gateway) | data source |
| [azurerm_public_ip.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/public_ip) | data source |
| [azurerm_public_ip_prefix.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/public_ip_prefix) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name"></a> [name](#input\_name) | Name of a NAT Gateway. | `string` | n/a | yes |
| <a name="input_create_natgw"></a> [create\_natgw](#input\_create\_natgw) | Triggers creation of a NAT Gateway when set to `true`.<br /><br />Set it to `false` to source an existing resource. In this 'mode' the module will only bind an existing NAT Gateway to specified subnets. | `bool` | `true` | no |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of a Resource Group hosting the NAT Gateway (either the existing one or the one that will be created). | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | Azure region. Only for newly created resources. | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | A map of tags that will be assigned to resources created by this module. Only for newly created resources. | `map(string)` | `{}` | no |
| <a name="input_zone"></a> [zone](#input\_zone) | Controls if the NAT Gateway will be bound to a specific zone or not. This is a string with the zone number or `null`. Only for newly created resources.<br /><br />NAT Gateway is not zone-redundant. It is a zonal resource. It means that it's always deployed in a zone. It's up to the user to decide if a zone will be specified during resource deployment or if Azure will take that decision for the user. <br />Keep in mind that regardless of the fact that NAT Gateway is placed in a specific zone it can serve traffic for resources in all zones. But if that zone becomes unavailable resources in other zones will loose internet connectivity. <br /><br />For design considerations, limitation and examples of zone-resiliency architecture please refer to [Microsoft documentation](https://learn.microsoft.com/en-us/azure/virtual-network/nat-gateway/nat-availability-zones). | `string` | `null` | no |
| <a name="input_idle_timeout"></a> [idle\_timeout](#input\_idle\_timeout) | Connection IDLE timeout in minutes. Only for newly created resources. | `number` | `null` | no |
| <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids) | A map of subnet IDs what will be bound with this NAT Gateway. Value is the subnet ID, key value does not matter but should be unique, typically it can be a subnet name. | `map(string)` | n/a | yes |
| <a name="input_create_pip"></a> [create\_pip](#input\_create\_pip) | Set `true` to create a Public IP resource that will be connected to newly created NAT Gateway. Not used when NAT Gateway is only sourced.<br /><br />Setting this property to `false` has two meanings:<br />* when `existing_pip_name` is `null` simply no Public IP will be created<br />* when `existing_pip_name` is set to a name of an exiting Public IP resource it will be sourced and associated to this NAT Gateway. | `bool` | `true` | no |
| <a name="input_existing_pip_name"></a> [existing\_pip\_name](#input\_existing\_pip\_name) | Name of an existing Public IP resource to associate with the NAT Gateway. Only for newly created resources. | `string` | `null` | no |
| <a name="input_existing_pip_resource_group_name"></a> [existing\_pip\_resource\_group\_name](#input\_existing\_pip\_resource\_group\_name) | Name of a resource group hosting the Public IP resource specified in `existing_pip_name`. When omitted Resource Group specified in `resource_group_name` will be used. | `string` | `null` | no |
| <a name="input_create_pip_prefix"></a> [create\_pip\_prefix](#input\_create\_pip\_prefix) | Set `true` to create a Public IP Prefix resource that will be connected to newly created NAT Gateway. Not used when NAT Gateway is only sourced.<br /><br />Setting this property to `false` has two meanings:<br />* when `existing_pip_prefix_name` is `null` simply no Public IP Prefix will be created<br />* when `existing_pip_prefix_name` is set to a name of an exiting Public IP Prefix resource it will be sourced and associated to this NAT Gateway. | `bool` | `false` | no |
| <a name="input_pip_prefix_length"></a> [pip\_prefix\_length](#input\_pip\_prefix\_length) | Number of bits of the Public IP Prefix. This basically specifies how many IP addresses are reserved. Azure default is `/28`.<br /><br />This value can be between `0` and `31` but can be limited by limits set on Subscription level. | `number` | `null` | no |
| <a name="input_existing_pip_prefix_name"></a> [existing\_pip\_prefix\_name](#input\_existing\_pip\_prefix\_name) | Name of an existing Public IP Prefix resource to associate with the NAT Gateway. Only for newly created resources. | `string` | `null` | no |
| <a name="input_existing_pip_prefix_resource_group_name"></a> [existing\_pip\_prefix\_resource\_group\_name](#input\_existing\_pip\_prefix\_resource\_group\_name) | Name of a resource group hosting the Public IP Prefix resource specified in `existing_pip_name`. When omitted Resource Group specified in `resource_group_name` will be used. | `string` | `null` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_natgw_pip"></a> [natgw\_pip](#output\_natgw\_pip) | n/a |
| <a name="output_natgw_pip_prefix"></a> [natgw\_pip\_prefix](#output\_natgw\_pip\_prefix) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->