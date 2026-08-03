---
hide_title: true
id: vpc_route
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
sidebar_label: VPC Route
title: Palo Alto Networks VPC Route Module for AWS
---

# Palo Alto Networks VPC Route Module for AWS

A Terraform module for deploying a VPC route in AWS cloud.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/vpc_route) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/vpc_route)

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

module "vpc_route" {
  source = "../../modules/vpc_route"

  for_each = {
    mgmt = {
      route_table_ids = module.subnet_sets["mgmt-1"].unique_route_table_ids
      next_hop_set    = module.vpc.igw_as_next_hop_set
      to_cidr         = var.igw_routing_destination_cidr
    }
    public = {
      route_table_ids = module.subnet_sets["public-1"].unique_route_table_ids
      next_hop_set    = module.nat_gateway_set.next_hop_set
      to_cidr         = var.igw_routing_destination_cidr
    }
    natgw = {
      route_table_ids = module.subnet_sets["natgw-1"].unique_route_table_ids
      next_hop_set    = module.vpc.igw_as_next_hop_set
      to_cidr         = var.igw_routing_destination_cidr
    }
  }

  route_table_ids = each.value.route_table_ids
  next_hop_set    = each.value.next_hop_set
  to_cidr         = each.value.to_cidr
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
| [aws_route.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_destination_type"></a> [destination\_type](#input\_destination\_type) | Type of destination: "ipv4", "ipv6" or "mpl". | `string` | `"ipv4"` | no |
| <a name="input_managed_prefix_list_id"></a> [managed\_prefix\_list\_id](#input\_managed\_prefix\_list\_id) | ID of managed prefix list, which is going to be set as destination in route | `string` | `null` | no |
| <a name="input_next_hop_set"></a> [next\_hop\_set](#input\_next\_hop\_set) | The Next Hop Set object, such as an output `module.nat_gateway_set.next_hop_set`, which contains 3 attributes:<br/>- `type`<br/>- `id`<br/>- `ids`<br/><br/>For `type` attribute there are possible below values:<br/>- "transit\_gateway"<br/>- "internet\_gateway"<br/>- "vpc\_peer"<br/>- "egress\_only\_gateway"<br/>- "local\_gateway"<br/>- "nat\_gateway"<br/>- "interface"<br/>- "vpc\_endpoint"<br/><br/>The set of single-zone next hops (type "nat\_gateway", "interface" and "vpc\_endpoint") should be specified as the `ids` map, in which case each value is a next hop id and each key should be present among the keys of the input `route_table_ids`. To avoid unintended cross-zone routing, these keys should be equal. Example:<pre>next\_hop\_set = {<br/>  type = "nat\_gateway"<br/>  id   = null<br/>  ids  = {<br/>    "us-east-1a" = "natgw-123"<br/>    "us-east-1b" = "natgw-124"<br/>  }<br/>}</pre>For a non-AZ-aware next hop (type "transit\_gateway", "internet\_gateway", "vpc\_peer", "egress\_only\_gateway" and "local\_gateway"), the `ids` map should be empty. All the route tables receive the same `id` of the next hop. Example:<pre>next\_hop\_set = {<br/>  type = "internet\_gateway"<br/>  id   = "igw-12345"<br/>  ids  = {}<br/>}</pre> | <pre>object({<br/>    type = string<br/>    id   = string<br/>    ids  = map(string)<br/>  })</pre> | n/a | yes |
| <a name="input_route_table_ids"></a> [route\_table\_ids](#input\_route\_table\_ids) | A map of Route Tables where to install the route. Each key is an arbitrary string,<br/>each value is a Route Table identifier. The keys need to match keys used in the<br/>`next_hop_set` input. The keys are usually Availability Zone names. Each of the Route Tables<br/>obtains exactly one next hop from the `next_hop_set`. Example:<pre>route\_table\_ids = {<br/>  "us-east-1a" = "rt-123123"<br/>  "us-east-1b" = "rt-123456"<br/>}</pre> | `map(string)` | n/a | yes |
| <a name="input_to_cidr"></a> [to\_cidr](#input\_to\_cidr) | The CIDR to match the packet's destination field. If they match, the route can be used for the packet. For example "0.0.0.0/0". | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_route_details"></a> [route\_details](#output\_route\_details) | n/a |
<!-- END_TF_DOCS -->