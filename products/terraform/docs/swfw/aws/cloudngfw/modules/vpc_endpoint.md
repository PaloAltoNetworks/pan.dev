---
hide_title: true
id: vpc_endpoint
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
sidebar_label: VPC Endpoint
title: VPC Endpoint Module for AWS
---

# VPC Endpoint Module for AWS

A Terraform module for deploying a VPC Endpoint for VM-Series firewalls.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/vpc_endpoint) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/vpc_endpoint)

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
| [aws_vpc_endpoint.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_endpoint) | resource |
| [aws_vpc_endpoint_route_table_association.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_endpoint_route_table_association) | resource |
| [aws_vpc_endpoint_subnet_association.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_endpoint_subnet_association) | resource |
| [aws_vpc_endpoint.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/vpc_endpoint) | data source |
| [aws_vpc_endpoint_service.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/vpc_endpoint_service) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_auto_accept"></a> [auto\_accept](#input\_auto\_accept) | If a service connection requires service owner's acceptance, the request will be approved automatically, provided that both parties are members of the same AWS account. | `bool` | `null` | no |
| <a name="input_create"></a> [create](#input\_create) | If false, does not create a new AWS VPC Endpoint, but instead uses a pre-existing one. The inputs `name`, `service_name`, `simple_service_name`, `tags`, `type`, and `vpc_id` can be used to match the pre-existing endpoint. | `bool` | `true` | no |
| <a name="input_name"></a> [name](#input\_name) | n/a | `string` | `null` | no |
| <a name="input_policy"></a> [policy](#input\_policy) | n/a | `string` | `null` | no |
| <a name="input_private_dns_enabled"></a> [private\_dns\_enabled](#input\_private\_dns\_enabled) | n/a | `bool` | `null` | no |
| <a name="input_route_table_ids"></a> [route\_table\_ids](#input\_route\_table\_ids) | n/a | `map(string)` | `{}` | no |
| <a name="input_security_group_ids"></a> [security\_group\_ids](#input\_security\_group\_ids) | n/a | `list(string)` | `[]` | no |
| <a name="input_service_name"></a> [service\_name](#input\_service\_name) | The exact service name. This input is ignored if `simple_service_name` is defined. Typically "com.amazonaws.REGION.SERVICE", for example: "com.amazonaws.us-west-2.s3" | `string` | `null` | no |
| <a name="input_simple_service_name"></a> [simple\_service\_name](#input\_simple\_service\_name) | The simplified service name for AWS service, for example: "s3". Uses the service from the current region. If null, the `service_name` input is used instead. | `string` | `null` | no |
| <a name="input_subnets"></a> [subnets](#input\_subnets) | Map of Subnets where to create the Endpoints. Each map's key is the availability zone name and each map's object has an attribute<br/>`id` identifying AWS Subnet. Importantly, the traffic returning from the Endpoint uses the Subnet's route table.<br/>The keys of this input map are used for the output map `endpoints`.<br/>Example for users of module `subnet_set`:<pre>subnets = module.subnet\_set.subnets</pre>Example:<pre>subnets = {<br/>  "us-east-1a" = { id = "snet-123007" }<br/>  "us-east-1b" = { id = "snet-123008" }<br/>}</pre> | <pre>map(object({<br/>    id = string<br/>  }))</pre> | `{}` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | n/a | `map(string)` | `{}` | no |
| <a name="input_type"></a> [type](#input\_type) | The type of the service.<br/>The type "Gateway" does not tolerate inputs `subnets`,  `security_group_ids`, and `private_dns_enabled`.<br/>The type "Interface" does not tolerate input `route_table_ids`.<br/>The type "GatewayLoadBalancer" is similar to "Gateway", but can be deployed with the dedicated module `gwlb_endpoint_set`.<br/>If null, "Gateway" is used by default. | `string` | n/a | yes |
| <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id) | n/a | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_endpoint"></a> [endpoint](#output\_endpoint) | The created `aws_vpc_endpoint` object. Alternatively, the data resource if the input `create` is false. |
<!-- END_TF_DOCS -->