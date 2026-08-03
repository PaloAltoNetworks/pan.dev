---
hide_title: true
id: transit_gateway_attachment
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
sidebar_label: Transit Gateway Attachment
title: Transit Gateway Attachment module for VM-Series
---

# Transit Gateway Attachment module for VM-Series

A Terraform module for deploying AWS Transit Gateways Attachments.

>AWS provides a network transit hub called a Transit Gateway. One or more VPCs can connect to a Transit Gateway through a Transit Gateway (TGW) Attachment.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/transit_gateway_attachment) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/transit_gateway_attachment)

## Usage

For example usage, please refer to the [examples](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/examples) directory.

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
| [aws_ec2_transit_gateway_route_table_association.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route_table_association) | resource |
| [aws_ec2_transit_gateway_route_table_propagation.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route_table_propagation) | resource |
| [aws_ec2_transit_gateway_vpc_attachment.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_vpc_attachment) | resource |
| [aws_ec2_transit_gateway_vpc_attachment.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ec2_transit_gateway_vpc_attachment) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_appliance_mode_support"></a> [appliance\_mode\_support](#input\_appliance\_mode\_support) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_vpc_attachment). | `string` | `"enable"` | no |
| <a name="input_create"></a> [create](#input\_create) | Trigger module mode between creating a new TGW Attachment or retrieving an existing one. | `bool` | `true` | no |
| <a name="input_dns_support"></a> [dns\_support](#input\_dns\_support) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_vpc_attachment). | `string` | `null` | no |
| <a name="input_id"></a> [id](#input\_id) | ID of an existing TGW Attachment. Used in conjunction with `create = false`. When set, takes precedence over `var.name`. | `string` | `null` | no |
| <a name="input_ipv6_support"></a> [ipv6\_support](#input\_ipv6\_support) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_vpc_attachment). | `string` | `null` | no |
| <a name="input_name"></a> [name](#input\_name) | Optional readable name of the TGW attachment object. It is assigned to the usual AWS Name tag. | `string` | `null` | no |
| <a name="input_propagate_routes_to"></a> [propagate\_routes\_to](#input\_propagate\_routes\_to) | Map of route propagations from this attachment. Each key is an arbitrary string, each value is the id of a TGW route table which should receive the routes to the attached VPC CIDRs. | `map(string)` | `{}` | no |
| <a name="input_subnets"></a> [subnets](#input\_subnets) | The attachment's subnets as a map. Each key is the availability zone name and each object has an attribute<br/>`id` identifying AWS subnet.<br/>All subnets in the map obtain virtual network interfaces attached to the TGW.<br/>Example for users of module `subnet_set`:<pre>subnets = module.subnet\_set.subnets</pre>Example:<pre>subnets = {<br/>  "us-east-1a" = { id = "snet-123007" }<br/>  "us-east-1b" = { id = "snet-123008" }<br/>}</pre> | <pre>map(object({<br/>    id = string<br/>  }))</pre> | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | AWS tags to assign to all the created objects. | `map(string)` | `{}` | no |
| <a name="input_transit_gateway_route_table"></a> [transit\_gateway\_route\_table](#input\_transit\_gateway\_route\_table) | TGW's route table which should receive the traffic coming from the `subnet_set` (also called an association). An object with at least two attributes:<pre>transit\_gateway\_route\_table = {<br/>  id                 = "tgw-rtb-1234"<br/>  transit\_gateway\_id = "tgw-1234"<br/>}</pre> | <pre>object({<br/>    id                 = string<br/>    transit\_gateway\_id = string<br/>  })</pre> | <pre>{<br/>  "id": null,<br/>  "transit\_gateway\_id": null<br/>}</pre> | no |
| <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id) | AWS identifier of a VPC containing the Attachment. | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_attachment"></a> [attachment](#output\_attachment) | The entire `aws_ec2_transit_gateway_vpc_attachment` object. |
| <a name="output_next_hop_set"></a> [next\_hop\_set](#output\_next\_hop\_set) | The Next Hop Set object, useful as an input to the `vpc_route` module. The intention would<br/>be to route traffic from several subnets to the Transit Gateway. Example:<pre>next\_hop\_set = {<br/>  ids = {}<br/>  id   = "tgw-attach-123"<br/>  type = "transit\_gateway"<br/>}</pre> |
| <a name="output_subnets"></a> [subnets](#output\_subnets) | Same as the input `subnets`. Intended to be used as a dependency. |
<!-- END_TF_DOCS -->