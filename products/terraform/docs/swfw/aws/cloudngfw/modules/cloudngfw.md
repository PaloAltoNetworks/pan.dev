---
hide_title: true
id: cloudngfw
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
sidebar_label: Cloudngfw
title: Palo Alto Networks Cloud NGFW Module for AWS
---

# Palo Alto Networks Cloud NGFW Module for AWS

A Terraform module for deploying a CloudNGFW firewall in AWS cloud.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/cloudngfw) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/cloudngfw)

## Usage

For example usage, please refer to the [examples](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/examples) directory.


## Reference
<!-- BEGIN_TF_DOCS -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.5.0, < 2.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 5.17 |
| <a name="requirement_cloudngfwaws"></a> [cloudngfwaws](#requirement\_cloudngfwaws) | 2.0.20 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | ~> 5.17 |
| <a name="provider_cloudngfwaws"></a> [cloudngfwaws](#provider\_cloudngfwaws) | 2.0.20 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [aws_cloudwatch_log_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_group) | resource |
| [aws_cloudwatch_log_stream.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_log_stream) | resource |
| [cloudngfwaws_commit_rulestack.this](https://registry.terraform.io/providers/PaloAltoNetworks/cloudngfwaws/2.0.20/docs/resources/commit_rulestack) | resource |
| [cloudngfwaws_ngfw.this](https://registry.terraform.io/providers/PaloAltoNetworks/cloudngfwaws/2.0.20/docs/resources/ngfw) | resource |
| [cloudngfwaws_ngfw_log_profile.this](https://registry.terraform.io/providers/PaloAltoNetworks/cloudngfwaws/2.0.20/docs/resources/ngfw_log_profile) | resource |
| [cloudngfwaws_rulestack.this](https://registry.terraform.io/providers/PaloAltoNetworks/cloudngfwaws/2.0.20/docs/resources/rulestack) | resource |
| [cloudngfwaws_security_rule.this](https://registry.terraform.io/providers/PaloAltoNetworks/cloudngfwaws/2.0.20/docs/resources/security_rule) | resource |
| [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_description"></a> [description](#input\_description) | Cloud NGFW description. | `string` | `"CloudNGFW"` | no |
| <a name="input_description_rule"></a> [description\_rule](#input\_description\_rule) | The rulestack description. | `string` | `"CloudNGFW rulestack"` | no |
| <a name="input_endpoint_mode"></a> [endpoint\_mode](#input\_endpoint\_mode) | The endpoint mode indicate the creation method of endpoint for target VPC. Customer Managed required to create endpoint manually. | `string` | `"CustomerManaged"` | no |
| <a name="input_log_profiles"></a> [log\_profiles](#input\_log\_profiles) | The CloudWatch logs group name should correspond with the assumed role generated in cfn.<br/>- `create_cw`        = (Optional\|string) Whether to create AWS CloudWatch log group.<br/>- `name`             = (Required\|string) The CW log group should correspond with cfn cross zone role.<br/>- `destination_type` = (Required\|string) Only supported type is "CloudWatchLogs".<br/>- `log_type`         = (Required\|string) The firewall log type.<br/>Example:<pre>log\_profiles = {<br/>  dest\_1 = {<br/>    create\_cw        = true<br/>    name             = "PaloAltoCloudNGFW"<br/>    destination\_type = "CloudWatchLogs"<br/>    log\_type         = "THREAT"<br/>  }<br/>  dest\_2 = {<br/>    create\_cw        = true<br/>    name             = "PaloAltoCloudNGFW"<br/>    destination\_type = "CloudWatchLogs"<br/>    log\_type         = "TRAFFIC"<br/>  }<br/>  dest\_3 = {<br/>    create\_cw        = true<br/>    name             = "PaloAltoCloudNGFW"<br/>    destination\_type = "CloudWatchLogs"<br/>    log\_type         = "DECRYPTION"<br/>  }<br/>}</pre> | <pre>map(object({<br/>    create\_cw        = optional(bool, false)<br/>    name             = string<br/>    destination\_type = string<br/>    log\_type         = string<br/>    }<br/>  ))</pre> | `{}` | no |
| <a name="input_name"></a> [name](#input\_name) | Name of the Cloud NGFW instance. | `string` | n/a | yes |
| <a name="input_profile_config"></a> [profile\_config](#input\_profile\_config) | The rulestack profile config. | `map(any)` | `{}` | no |
| <a name="input_retention_in_days"></a> [retention\_in\_days](#input\_retention\_in\_days) | CloudWatch log groups retains logs. | `number` | `365` | no |
| <a name="input_rulestack_name"></a> [rulestack\_name](#input\_rulestack\_name) | The rulestack name. | `string` | n/a | yes |
| <a name="input_rulestack_scope"></a> [rulestack\_scope](#input\_rulestack\_scope) | The rulestack scope. A local rulestack will require that you've retrieved a LRA JWT. A global rulestack will require that you've retrieved a GRA JWT | `string` | `"Local"` | no |
| <a name="input_security_rules"></a> [security\_rules](#input\_security\_rules) | Example:<pre>security\_rules = {<br/>  rule\_1 = {<br/>    rule\_list                   = "LocalRule"<br/>    priority                    = 3<br/>    name                        = "tf-security-rule"<br/>    description                 = "Also configured by Terraform"<br/>    source\_cidrs                = ["any"]<br/>    destination\_cidrs           = ["0.0.0.0/0"]<br/>    negate\_destination          = false<br/>    protocol                    = "application-default"<br/>    applications                = ["any"]<br/>    category\_feeds              = [""]<br/>    category\_url\_category\_names = [""]<br/>    action                      = "Allow"<br/>    logging                     = true<br/>    audit\_comment               = "initial config"<br/>  }<br/>}</pre> | <pre>map(object({<br/>    rule\_list                   = string<br/>    priority                    = number<br/>    name                        = string<br/>    description                 = optional(string)<br/>    source\_cidrs                = set(string)<br/>    destination\_cidrs           = set(string)<br/>    negate\_destination          = optional(bool, false)<br/>    protocol                    = optional(string, "application-default")<br/>    applications                = optional(set(string), ["any"])<br/>    category\_feeds              = optional(set(string))<br/>    category\_url\_category\_names = optional(set(string))<br/>    action                      = string<br/>    logging                     = bool<br/>    audit\_comment               = optional(string)<br/>  }))</pre> | `{}` | no |
| <a name="input_subnets"></a> [subnets](#input\_subnets) | Map of Subnets where to create the NAT Gateways. Each map's key is the availability zone name and each map's object has an attribute `id` identifying AWS Subnet. Importantly, the traffic returning from the NAT Gateway uses the Subnet's route table.<br/>The keys of this input map are used for the output map `endpoints`.<br/>Example for users of module `subnet_set`:<pre>subnets = module.subnet\_set.subnets</pre>Example:<pre>subnets = {<br/>  "us-east-1a" = { id = "snet-123007" }<br/>  "us-east-1b" = { id = "snet-123008" }<br/>}</pre> | <pre>map(object({<br/>    id   = string<br/>    tags = map(string)<br/>  }))</pre> | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | AWS Tags for the VPC Endpoints. | `map(string)` | `{}` | no |
| <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id) | ID of the security VPC the Load Balancer should be created in. | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_cloudngfw_service_name"></a> [cloudngfw\_service\_name](#output\_cloudngfw\_service\_name) | The service endpoint name exposed to tenant environment. |
<!-- END_TF_DOCS -->