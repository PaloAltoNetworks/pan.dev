---
hide_title: true
id: nat_gateway_set
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
- aws
pagination_next: null
pagination_prev: null
sidebar_label: NAT Gateway Set
title: Palo Alto Networks NAT Gateway Set Module for AWS
---

# Palo Alto Networks NAT Gateway Set Module for AWS

A Terraform module for deploying a NAT Gateway set in AWS cloud. The "set" means that the module will create an identical/similar NAT Gateway in each specified Availability Zone.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/nat_gateway_set) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/nat_gateway_set)

## Usage

```hcl
module "vpc" {
  source = "../../modules/vpc"

  name                    = var.name
  cidr_block              = var.vpc_cidr_block
  secondary_cidr_blocks   = var.vpc_secondary_cidr_blocks
  global_tags             = var.global_tags
  vpc_tags                = var.vpc_tags
  security_groups         = var.security_groups
}

module "subnet_sets" {
  source   = "../../modules/subnet_set"

  for_each = toset(distinct([for _, v in var.subnets : v.set]))
  
  name   = each.key
  cidrs  = { for k, v in var.subnets : k => v if v.set == each.key }
  vpc_id = module.vpc.id
}

module "nat_gateway_set" {
  source = "../../modules/nat_gateway_set"

  subnets = module.subnet_sets["natgw-1"].subnets
}

```

## Reference
<!-- BEGIN_TF_DOCS -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.5.0, < 2.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 5.17 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | ~> 5.17 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [aws_eip.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eip) | resource |
| [aws_nat_gateway.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/nat_gateway) | resource |
| [aws_eip.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/eip) | data source |
| [aws_nat_gateway.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/nat_gateway) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_create_eip"></a> [create\_eip](#input\_create\_eip) | If false, does not create a new Elastic IP, but instead reads a pre-existing one. This input is ignored if `create_nat_gateway` is false. | `bool` | `true` | no |
| <a name="input_create_nat_gateway"></a> [create\_nat\_gateway](#input\_create\_nat\_gateway) | If false, does not create a new NAT Gateway, but instead reads a pre-existing one. | `bool` | `true` | no |
| <a name="input_eip_domain"></a> [eip\_domain](#input\_eip\_domain) | Indicates if this EIP is for use in VPC | `string` | `"vpc"` | no |
| <a name="input_eip_tags"></a> [eip\_tags](#input\_eip\_tags) | n/a | `map(string)` | `{}` | no |
| <a name="input_eips"></a> [eips](#input\_eips) | Optional map of Elastic IP attributes. Each key is an Availability Zone name, for example "us-east-1b". Each entry has optional attributes `name`, `public_ip`, `id`.<br/>These are mainly useful to select a pre-existing Elastic IP when create\_eip is false. Example:<pre>eips = {<br/>    "us-east-1a" = { id = aws\_eip.a.id }<br/>    "us-east-1b" = { id = aws\_eip.b.id }<br/>}</pre>The `name` attribute can be used both for selecting the pre-existing Elastic IP, or for customizing a newly created Elastic IP:<pre>eips = {<br/>    "us-east-1a" = { name = "Alice" }<br/>    "us-east-1b" = { name = "Bob" }<br/>}</pre> | `map` | `{}` | no |
| <a name="input_global_tags"></a> [global\_tags](#input\_global\_tags) | n/a | `map(string)` | `{}` | no |
| <a name="input_nat_gateway_names"></a> [nat\_gateway\_names](#input\_nat\_gateway\_names) | A map, where each key is an Availability Zone name, for example "us-east-1b". Each value in the map is a custom name of a NAT Gateway in that Availability Zone.<br/>The name is kept in an AWS standard Name tag.<br/>  Example:<pre>nat\_gateway\_names = {<br/>    "us-east-1a" = "example-natgwa"<br/>    "us-east-1b" = "example-natgwb"<br/>  }</pre> | `map(string)` | `{}` | no |
| <a name="input_nat_gateway_tags"></a> [nat\_gateway\_tags](#input\_nat\_gateway\_tags) | n/a | `map(string)` | `{}` | no |
| <a name="input_subnets"></a> [subnets](#input\_subnets) | Map of Subnets where to create the NAT Gateways. Each map's key is the availability zone name and each map's object has an attribute `id` identifying AWS Subnet. Importantly, the traffic returning from the NAT Gateway uses the Subnet's route table.<br/>The keys of this input map are used for the output map `endpoints`.<br/>Example for users of module `subnet_set`:<pre>subnets = module.subnet\_set.subnets</pre>Example:<pre>subnets = {<br/>  "us-east-1a" = { id = "snet-123007" }<br/>  "us-east-1b" = { id = "snet-123008" }<br/>}</pre> | <pre>map(object({<br/>    id   = string<br/>    tags = map(string)<br/>  }))</pre> | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_eips"></a> [eips](#output\_eips) | The map of Elastic IP objects. Only valid if `create_nat_gateway` is at the default true value. |
| <a name="output_nat_gateways"></a> [nat\_gateways](#output\_nat\_gateways) | The map of NAT Gateway objects. |
| <a name="output_next_hop_set"></a> [next\_hop\_set](#output\_next\_hop\_set) | The Next Hop Set object, useful as the input to the `vpc_route` module. Example:<pre>next\_hop\_set = {<br/>  ids = {<br/>    "us-east-1a" = "nat-0ddf598f93a8ea8ae"<br/>    "us-east-1b" = "nat-0862c4b707b012111"<br/>  }<br/>  id = null<br/>  type = "nat\_gateway"<br/>}</pre> |
<!-- END_TF_DOCS -->