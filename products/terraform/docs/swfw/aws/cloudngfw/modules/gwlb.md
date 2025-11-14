---
hide_title: true
id: gwlb
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
sidebar_label: GWLB
title: AWS Gateway Load Balancer Module
---

# AWS Gateway Load Balancer Module

This module creates a single Gateway Load Balancer (GWLB). Routes from other VPCs can direct traffic towards the GWLB
through the use of a separate module `gwlb_endpoint_set`.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/gwlb) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/gwlb)

## Attaching new targets to the pre-existing GWLB

This module is not intended to be used to attach extra tagets to a pre-exising Gateway Load Balancer and its Target Group.
Instead, use this snippet:

```hcl2
resource aws_lb_target_group_attachment this {
  target_group_arn = aws_lb_target_group.this.arn
  target_id        = aws_instance.this.id
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
| [aws_lb.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb) | resource |
| [aws_lb_listener.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_listener) | resource |
| [aws_lb_target_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group) | resource |
| [aws_lb_target_group_attachment.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group_attachment) | resource |
| [aws_vpc_endpoint_service.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_endpoint_service) | resource |
| [aws_vpc_endpoint_service_allowed_principal.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_endpoint_service_allowed_principal) | resource |
| [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) | data source |
| [aws_partition.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_acceptance_required"></a> [acceptance\_required](#input\_acceptance\_required) | Whether or not VPC endpoint connection requests to the service must be accepted by the service owner - true or false | `bool` | `false` | no |
| <a name="input_allowed_principals"></a> [allowed\_principals](#input\_allowed\_principals) | List of AWS Principal ARNs who are allowed access to the GWLB Endpoint Service. For example `["arn:aws:iam::123456789000:root"]`. | `list(string)` | `[]` | no |
| <a name="input_deregistration_delay"></a> [deregistration\_delay](#input\_deregistration\_delay) | See the `aws` provider [documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group#deregistration_delay). | `number` | `null` | no |
| <a name="input_enable_lb_deletion_protection"></a> [enable\_lb\_deletion\_protection](#input\_enable\_lb\_deletion\_protection) | Whether to enable deletion protection on the gateway loadbalancer. | `bool` | `false` | no |
| <a name="input_endpoint_service_tags"></a> [endpoint\_service\_tags](#input\_endpoint\_service\_tags) | Map of AWS tags to apply to the created GWLB Endpoint Service. These tags are applied after the `global_tags`. | `map(string)` | `{}` | no |
| <a name="input_global_tags"></a> [global\_tags](#input\_global\_tags) | Map of AWS tags to apply to all the created resources. | `map(string)` | `{}` | no |
| <a name="input_health_check_enabled"></a> [health\_check\_enabled](#input\_health\_check\_enabled) | See the `aws` provider [documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group#health_check). | `bool` | `null` | no |
| <a name="input_health_check_interval"></a> [health\_check\_interval](#input\_health\_check\_interval) | Approximate amount of time, in seconds, between health checks of an individual target. Minimum 5 and maximum 300 seconds. | `number` | `5` | no |
| <a name="input_health_check_matcher"></a> [health\_check\_matcher](#input\_health\_check\_matcher) | See the `aws` provider [documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group#health_check). | `string` | `null` | no |
| <a name="input_health_check_path"></a> [health\_check\_path](#input\_health\_check\_path) | See the `aws` provider [documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group#health_check). | `string` | `null` | no |
| <a name="input_health_check_port"></a> [health\_check\_port](#input\_health\_check\_port) | The port on a target to which the load balancer sends health checks. | `number` | `80` | no |
| <a name="input_health_check_protocol"></a> [health\_check\_protocol](#input\_health\_check\_protocol) | Protocol to use when communicating with `health_check_port`. Either HTTP, HTTPS, or TCP. | `string` | `"TCP"` | no |
| <a name="input_health_check_timeout"></a> [health\_check\_timeout](#input\_health\_check\_timeout) | After how many seconds to consider the health check as failed without a response. Minimum 2 and maximum 120. Required to be `null` when `health_check_protocol` is TCP. | `number` | `null` | no |
| <a name="input_healthy_threshold"></a> [healthy\_threshold](#input\_healthy\_threshold) | The number of successful health checks required before an unhealthy target becomes healthy. Minimum 2 and maximum 10. | `number` | `3` | no |
| <a name="input_lb_tags"></a> [lb\_tags](#input\_lb\_tags) | Map of AWS tags to apply to the created Load Balancer object. These tags are applied after the `global_tags`. | `map(string)` | `{}` | no |
| <a name="input_lb_target_group_tags"></a> [lb\_target\_group\_tags](#input\_lb\_target\_group\_tags) | Map of AWS tags to apply to the created GWLB Target Group. These tags are applied after the `global_tags`. | `map(string)` | `{}` | no |
| <a name="input_name"></a> [name](#input\_name) | Name of the created GWLB. Must be unique per AWS region per AWS account. | `string` | n/a | yes |
| <a name="input_rebalance_flows"></a> [rebalance\_flows](#input\_rebalance\_flows) | Indicates how the GWLB handles existing flows when a target is deregistered. Possible values are `rebalance` and `no_rebalance`. | `string` | `"no_rebalance"` | no |
| <a name="input_stickiness_type"></a> [stickiness\_type](#input\_stickiness\_type) | If `stickiness_type` is `null`, then attribute `enabled` is set to `false` in stickiness configuration block,<br/>value provided in `type` is ignored and by default the Gateway Load Balancer uses 5-tuple to maintain flow stickiness to a specific target appliance.<br/>If `stickiness_type` is not `null`, then attribute `enabled` is set to `true` in stickiness configuration block<br/>and the stickiness `type` can be then customized by using value:<br/>- `source_ip_dest_ip_proto` for 3-tuple (Source IP, Destination IP and Transport Protocol)<br/>- `source_ip_dest_ip` for 2-tuple (Source IP and Destination IP)<pre></pre> | `string` | `null` | no |
| <a name="input_subnets"></a> [subnets](#input\_subnets) | Map of subnets where to create the GWLB. Each map's key is the availability zone name and each map's object has an attribute<br/>`id` identifying AWS subnet.<br/>Example for users of module `subnet_set`:<pre>subnets = module.subnet\_set.subnets</pre>Example:<pre>subnets = {<br/>  "us-east-1a" = { id = "snet-123007" }<br/>  "us-east-1b" = { id = "snet-123008" }<br/>}</pre> | <pre>map(object({<br/>    id = string<br/>  }))</pre> | n/a | yes |
| <a name="input_target_instances"></a> [target\_instances](#input\_target\_instances) | Map of instances to attach to the GWLB Target Group. | <pre>map(object({<br/>    id = string<br/>  }))</pre> | `{}` | no |
| <a name="input_tg_name"></a> [tg\_name](#input\_tg\_name) | Name of the created Target Group for GWLB. If not set, then value of variable name is used. | `string` | `null` | no |
| <a name="input_unhealthy_threshold"></a> [unhealthy\_threshold](#input\_unhealthy\_threshold) | The number of failed health checks required before a healthy target becomes unhealthy. Minimum 2 and maximum 10. | `number` | `3` | no |
| <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id) | AWS identifier of a VPC containing the Endpoint. | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_endpoint_service"></a> [endpoint\_service](#output\_endpoint\_service) | n/a |
| <a name="output_target_group"></a> [target\_group](#output\_target\_group) | n/a |
<!-- END_TF_DOCS -->