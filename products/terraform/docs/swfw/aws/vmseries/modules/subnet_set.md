---
hide_title: true
id: subnet_set
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
sidebar_label: Subnet Set
title: Palo Alto Networks Subnet-Set Module for AWS
---

# Palo Alto Networks Subnet-Set Module for AWS

A Terraform module for deploying a subnet-set in AWS cloud. The "set" means that the module will create an identical/similar subnet in each specified Availability Zone.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/subnet_set) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/subnet_set)

## Usage

```hcl
module "vpc" {
  source = "../../modules/vpc"

  name                    = var.name
  cidr_block              = var.vpc_cidr_block
  secondary_cidr_blocks   = var.vpc_secondary_cidr_blocks
  create_internet_gateway = true
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
| [aws_network_acl_association.main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_acl_association) | resource |
| [aws_route_table.shared](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) | resource |
| [aws_route_table.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) | resource |
| [aws_route_table_association.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) | resource |
| [aws_subnet.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/subnet) | resource |
| [aws_route_table.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/route_table) | data source |
| [aws_subnet.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/subnet) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_cidrs"></a> [cidrs](#input\_cidrs) | Map describing configuration of subnets and route tables to create and/or use in the set.<br/>Keys are CIDR blocks, values can consist of following items:<br/>- `create_subnet`           - (Optional\|bool) When `true` (default), subnet is created, otherwise existing one is used.<br/>- `create_route_table`      - (Optional\|bool) When `true`  a dedicated route table is created, unless existing subnet is used.<br/>- `associate_route_table`   - (Optional\|bool) Unless set to `false`, route table is associated with the subnet.<br/>- `existing_route_table_id` - (Optional\|string) Id of an existing route table to associate with the subnet.<br/>- `name`                    - (Optional\|string) Name (tag) of a subnet and, optionally a route table, to create or use. Defaults to set name appended with zone letter id.<br/>- `route_table_name`        - (Optional\|string) Name (tag) of a subnet and, optionally a route table, to create or use.  Defaults to `name` value.<br/>- `ipv6_cidr_block`         - (Optional\|string) IPv6 CIDR block. The subnet size must use a /64 prefix length.<br/>- `map_public_ip_on_launch` - (Optional\|bool) Specify true to indicate that instances launched into the subnet should be assigned a public IP address.<br/>- `local_tags`              - (Optional\|map) Map of tags to assign to created resources. | <pre>map(object({<br/>    az                      = string<br/>    create\_subnet           = optional(bool, true)<br/>    create\_route\_table      = optional(bool, true)<br/>    associate\_route\_table   = optional(bool, true)<br/>    existing\_route\_table\_id = optional(string)<br/>    name                    = optional(string)<br/>    route\_table\_name        = optional(string)<br/>    ipv6\_cidr               = optional(string)<br/>    map\_public\_ip\_on\_launch = optional(bool)<br/>    local\_tags              = optional(map(string))<br/>  }))</pre> | n/a | yes |
| <a name="input_create_shared_route_table"></a> [create\_shared\_route\_table](#input\_create\_shared\_route\_table) | Boolean flag whether to create a shared route tables. | `bool` | `false` | no |
| <a name="input_global_tags"></a> [global\_tags](#input\_global\_tags) | Optional map of arbitrary tags to apply to all the created resources. | `map(string)` | `{}` | no |
| <a name="input_has_secondary_cidrs"></a> [has\_secondary\_cidrs](#input\_has\_secondary\_cidrs) | The input that depends on the secondary CIDR ranges of the VPC `vpc_id`. The actual value (true or false) is ignored, the input is used only to delay subnet creation until the secondary CIDR ranges are processed by Terraform. | `bool` | `true` | no |
| <a name="input_nacl_associations"></a> [nacl\_associations](#input\_nacl\_associations) | NACLs associations with subnets | `map(string)` | `{}` | no |
| <a name="input_name"></a> [name](#input\_name) | Subnet set name, used to construct default subnet names. | `string` | `null` | no |
| <a name="input_propagating_vgws"></a> [propagating\_vgws](#input\_propagating\_vgws) | See the [provider's documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table). | `list(string)` | `[]` | no |
| <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id) | Id of the VPC to create resource in. | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_availability_zones"></a> [availability\_zones](#output\_availability\_zones) | n/a |
| <a name="output_route_tables"></a> [route\_tables](#output\_route\_tables) | n/a |
| <a name="output_subnet_names"></a> [subnet\_names](#output\_subnet\_names) | n/a |
| <a name="output_subnets"></a> [subnets](#output\_subnets) | n/a |
| <a name="output_unique_route_table_ids"></a> [unique\_route\_table\_ids](#output\_unique\_route\_table\_ids) | n/a |
| <a name="output_vpc_id"></a> [vpc\_id](#output\_vpc\_id) | n/a |
<!-- END_TF_DOCS -->