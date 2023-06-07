---
hide_title: true
id: asg
keywords:
- pan-os
- panos
- firewall
- configuration
- terraform
- vmseries
- vm-series
- aws
pagination_next: null
pagination_prev: null
sidebar_label: ASG
title: Palo Alto Networks Autoscaling Group Module for AWS
---

# Palo Alto Networks Autoscaling Group Module for AWS

A Terraform module for deploying VM-Series in Autoscaling group in AWS cloud. 

## Usage

For example usage, please refer to the [Examples](https://github.com/PaloAltoNetworks/terraform-aws-vmseries-modules/tree/develop/examples) directory.

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0.0, < 2.0.0 |
| <a name="requirement_archive"></a> [archive](#requirement\_archive) | ~> 2.2 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 4.25 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_archive"></a> [archive](#provider\_archive) | ~> 2.2 |
| <a name="provider_aws"></a> [aws](#provider\_aws) | ~> 4.25 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [aws_autoscaling_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/autoscaling_group) | resource |
| [aws_autoscalingplans_scaling_plan.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/autoscalingplans_scaling_plan) | resource |
| [aws_cloudwatch_event_rule.instance_launch_event_rule](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_rule) | resource |
| [aws_cloudwatch_event_rule.instance_terminate_event_rule](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_rule) | resource |
| [aws_cloudwatch_event_target.instance_launch_event](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_target) | resource |
| [aws_cloudwatch_event_target.instance_terminate_event](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_target) | resource |
| [aws_iam_role.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role_policy.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) | resource |
| [aws_lambda_function.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function) | resource |
| [aws_lambda_permission.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_permission) | resource |
| [aws_launch_template.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/launch_template) | resource |
| [archive_file.this](https://registry.terraform.io/providers/hashicorp/archive/latest/docs/data-sources/file) | data source |
| [aws_ami.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) | data source |
| [aws_kms_alias.ebs_kms](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_alias) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_asg_name"></a> [asg\_name](#input\_asg\_name) | Name of the autoscaling group to create | `string` | `"asg"` | no |
| <a name="input_bootstrap_options"></a> [bootstrap\_options](#input\_bootstrap\_options) | Bootstrap options to put into userdata | `any` | `{}` | no |
| <a name="input_desired_capacity"></a> [desired\_capacity](#input\_desired\_capacity) | Number of Amazon EC2 instances that should be running in the group. | `number` | `2` | no |
| <a name="input_ebs_kms_id"></a> [ebs\_kms\_id](#input\_ebs\_kms\_id) | Alias for AWS KMS used for EBS encryption in VM-Series | `string` | `"alias/aws/ebs"` | no |
| <a name="input_fw_license_type"></a> [fw\_license\_type](#input\_fw\_license\_type) | Select License type (byol/payg1/payg2) | `string` | `"byol"` | no |
| <a name="input_global_tags"></a> [global\_tags](#input\_global\_tags) | Map of AWS tags to apply to all the created resources. | `map(any)` | n/a | yes |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | EC2 instance type. | `string` | `"m5.xlarge"` | no |
| <a name="input_interfaces"></a> [interfaces](#input\_interfaces) | Map of the network interface specifications.<br />If "mgmt-interface-swap" bootstrap option is enabled, ensure dataplane interface `device_index` is set to 0 and the firewall management interface `device_index` is set to 1.<br />Available options:<br />- `device_index`       = (Required\|int) Determines order in which interfaces are attached to the instance. Interface with `0` is attached at boot time.<br />- `subnet_id`          = (Required\|string) Subnet ID to create the ENI in.<br />- `name`               = (Optional\|string) Name tag for the ENI. Defaults to instance name suffixed by map's key.<br />- `description`        = (Optional\|string) A descriptive name for the ENI.<br />- `create_public_ip`   = (Optional\|bool) Whether to create a public IP for the ENI. Defaults to false.<br />- `eip_allocation_id`  = (Optional\|string) Associate an existing EIP to the ENI.<br />- `private_ips`        = (Optional\|list) List of private IPs to assign to the ENI. If not set, dynamic allocation is used.<br />- `public_ipv4_pool`   = (Optional\|string) EC2 IPv4 address pool identifier.<br />- `source_dest_check`  = (Optional\|bool) Whether to enable source destination checking for the ENI. Defaults to false.<br />- `security_group_ids` = (Optional\|list) A list of Security Group IDs to assign to this interface. Defaults to null.<br /><br />Example:<pre>interfaces = {<br />  mgmt = {<br />    device\_index       = 0<br />    subnet\_id          = aws\_subnet.mgmt.id<br />    name               = "mgmt"<br />    create\_public\_ip   = true<br />    source\_dest\_check  = true<br />    security\_group\_ids = ["sg-123456"]<br />  },<br />  public = {<br />    device\_index     = 1<br />    subnet\_id        = aws\_subnet.public.id<br />    name             = "public"<br />    create\_public\_ip = true<br />  },<br />  private = {<br />    device\_index = 2<br />    subnet\_id    = aws\_subnet.private.id<br />    name         = "private"<br />  },<br />]</pre> | `map(any)` | n/a | yes |
| <a name="input_lambda_timeout"></a> [lambda\_timeout](#input\_lambda\_timeout) | Amount of time Lambda Function has to run in seconds. | `number` | `10` | no |
| <a name="input_lifecycle_hook_timeout"></a> [lifecycle\_hook\_timeout](#input\_lifecycle\_hook\_timeout) | How long should we wait for lambda to finish | `number` | `300` | no |
| <a name="input_max_size"></a> [max\_size](#input\_max\_size) | Maximum size of the Auto Scaling Group. | `number` | `2` | no |
| <a name="input_min_size"></a> [min\_size](#input\_min\_size) | Minimum size of the Auto Scaling Group. | `number` | `1` | no |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | All resource names will be prepended with this string | `string` | n/a | yes |
| <a name="input_region"></a> [region](#input\_region) | AWS region | `string` | n/a | yes |
| <a name="input_scaling_cloudwatch_namespace"></a> [scaling\_cloudwatch\_namespace](#input\_scaling\_cloudwatch\_namespace) | Name of CloudWatch namespace, where metrics are available (it should be the same as namespace configured in VM-Series plugin in PAN-OS) | `string` | `"VMseries_dimensions"` | no |
| <a name="input_scaling_metric_name"></a> [scaling\_metric\_name](#input\_scaling\_metric\_name) | Name of the metric used in dynamic scaling policy | `string` | `""` | no |
| <a name="input_scaling_plan_enabled"></a> [scaling\_plan\_enabled](#input\_scaling\_plan\_enabled) | True, if automatic dynamic scaling policy should be created | `bool` | `false` | no |
| <a name="input_scaling_statistic"></a> [scaling\_statistic](#input\_scaling\_statistic) | Statistic of the metric. Valid values: Average, Maximum, Minimum, SampleCount, Sum | `string` | `"Average"` | no |
| <a name="input_scaling_tags"></a> [scaling\_tags](#input\_scaling\_tags) | Tags configured for dynamic scaling policy | `map(any)` | `{}` | no |
| <a name="input_scaling_target_value"></a> [scaling\_target\_value](#input\_scaling\_target\_value) | Target value for the metric used in dynamic scaling policy | `number` | `70` | no |
| <a name="input_security_group_ids"></a> [security\_group\_ids](#input\_security\_group\_ids) | List of security group IDs associated with the Lambda function | `list(string)` | `[]` | no |
| <a name="input_ssh_key_name"></a> [ssh\_key\_name](#input\_ssh\_key\_name) | Name of AWS keypair to associate with instances | `string` | n/a | yes |
| <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids) | List of subnet IDs associated with the Lambda function | `list(string)` | `[]` | no |
| <a name="input_suspended_processes"></a> [suspended\_processes](#input\_suspended\_processes) | List of processes to suspend for the Auto Scaling Group. The allowed values are Launch, Terminate, HealthCheck, ReplaceUnhealthy, AZRebalance, AlarmNotification, ScheduledActions, AddToLoadBalancer, InstanceRefresh | `list(string)` | `[]` | no |
| <a name="input_target_group_arn"></a> [target\_group\_arn](#input\_target\_group\_arn) | ARN of target group for load balancer | `string` | `null` | no |
| <a name="input_vmseries_ami_id"></a> [vmseries\_ami\_id](#input\_vmseries\_ami\_id) | The AMI from which to launch the instance. Takes precedence over fw\_version and fw\_license\_type | `string` | `null` | no |
| <a name="input_vmseries_iam_instance_profile"></a> [vmseries\_iam\_instance\_profile](#input\_vmseries\_iam\_instance\_profile) | IAM instance profile used in launch template | `string` | `""` | no |
| <a name="input_vmseries_product_code"></a> [vmseries\_product\_code](#input\_vmseries\_product\_code) | Product code corresponding to a chosen VM-Series license type model - by default - BYOL.<br />To check the available license type models and their codes, please refer to the<br />[VM-Series documentation](https://docs.paloaltonetworks.com/vm-series/10-0/vm-series-deployment/set-up-the-vm-series-firewall-on-aws/deploy-the-vm-series-firewall-on-aws/obtain-the-ami/get-amazon-machine-image-ids.html) | `string` | `"6njl1pau431dv1qxipg63mvah"` | no |
| <a name="input_vmseries_version"></a> [vmseries\_version](#input\_vmseries\_version) | Select which FW version to deploy | `string` | `"10.2.2"` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_asg"></a> [asg](#output\_asg) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->