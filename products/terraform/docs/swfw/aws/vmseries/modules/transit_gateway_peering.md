---
hide_title: true
id: transit_gateway_peering
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
sidebar_label: Transit Gateway Peering
title: AWS Transit Gateway Peering
---

# AWS Transit Gateway Peering

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/transit_gateway_peering) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/transit_gateway_peering)

## Usage

This module creates both sides of a TGW Peering thus it needs two different AWS providers specified in the `providers` meta-argument.
Without two providers it would be impossible to peer between two distinct AWS regions.

The local side requires the provider entry named `aws`, the remote remote side requires the provider entry named `aws.remote`. The attachment
is owned by the local side, and the attachment acceptor is owned by the remote side.

```hcl2
module transit_gateway_peering {
  source = "../../modules/transit_gateway_peering"
  providers = {
    aws      = aws.east
    aws.remote = aws.west
  }

  local_tgw_route_table   = module.transit_gateway_east.route_tables["traffic_from_west"]
  remote_tgw_route_table  = module.transit_gateway_west.route_tables["traffic_from_east"]
}

provider "aws" {
  alias  = "east"
  region = "us-east-2"
}

provider "aws" {
  alias  = "west"
  region = "us-west-2"
}
```

The static routes are currently not handled by this module.

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
| <a name="provider_aws.remote"></a> [aws.remote](#provider\_aws.remote) | ~> 5.17 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [aws_ec2_transit_gateway_peering_attachment.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_peering_attachment) | resource |
| [aws_ec2_transit_gateway_peering_attachment_accepter.remote](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_peering_attachment_accepter) | resource |
| [aws_ec2_transit_gateway_route_table_association.local](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route_table_association) | resource |
| [aws_ec2_transit_gateway_route_table_association.remote](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ec2_transit_gateway_route_table_association) | resource |
| [aws_caller_identity.remote](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) | data source |
| [aws_region.remote_region](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_local_attachment_tags"></a> [local\_attachment\_tags](#input\_local\_attachment\_tags) | AWS tags to assign to the Attachment object. The tags are only visible in the UI when logged on the local account, but not when logged on the remote peer account. Example: `{ Name = "my-name" }` | `map(string)` | `{}` | no |
| <a name="input_local_tgw_route_table"></a> [local\_tgw\_route\_table](#input\_local\_tgw\_route\_table) | Local TGW's pre-existing route table which should handle the traffic coming from the remote TGW. In other words a route table associated to the peering in the local region. An object with two attributes, the `id` of the local route table and the `transit_gateway_id` of the local TGW:<pre>transit\_gateway\_route\_table = {<br/>  id                 = "tgw-rtb-1234"<br/>  transit\_gateway\_id = "tgw-1234"<br/>}</pre> | <pre>object({<br/>    id                 = string<br/>    transit\_gateway\_id = string<br/>  })</pre> | n/a | yes |
| <a name="input_remote_tgw_route_table"></a> [remote\_tgw\_route\_table](#input\_remote\_tgw\_route\_table) | Analog to the `local_tgw_route_table` but on the remote end of the peering. | <pre>object({<br/>    id                 = string<br/>    transit\_gateway\_id = string<br/>  })</pre> | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | AWS tags to assign to all the created objects. Example: `{ Team = "my-team" }` | `map(string)` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_local_route_table"></a> [local\_route\_table](#output\_local\_route\_table) | The route table associated to the TGW Peering Attachment, owned by the provider `aws`. |
| <a name="output_peering_attachment"></a> [peering\_attachment](#output\_peering\_attachment) | The TGW Peering Attachment object, created under the provider `aws`. |
| <a name="output_peering_attachment_accepter"></a> [peering\_attachment\_accepter](#output\_peering\_attachment\_accepter) | The Accepter object, created under the provider `aws.remote`. |
| <a name="output_remote_route_table"></a> [remote\_route\_table](#output\_remote\_route\_table) | The route table associated to the TGW Peering Attachment, owned by the provider `aws.remote`. |
<!-- END_TF_DOCS -->