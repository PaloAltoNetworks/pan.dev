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
- swfw
- software-firewalls
- aws
pagination_next: null
pagination_prev: null
sidebar_label: ASG
title: Palo Alto Networks Autoscaling Group Module for AWS
---

# Palo Alto Networks Autoscaling Group Module for AWS

A Terraform module for deploying VM-Series in Autoscaling group in AWS cloud.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/asg) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/asg)

## Usage

For example usage, please refer to the [examples](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/examples) directory:
- [Reference Architecture with Terraform: VM-Series in AWS, Centralized Design Model, Common NGFW option with Autoscaling](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/examples/centralized_design_autoscale)
- [Reference Architecture with Terraform: VM-Series in AWS, Combined Design Model, Common NGFW Option with Autoscaling](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/examples/combined_design_autoscale)
- [Reference Architecture with Terraform: VM-Series in AWS, Isolated Design Model, Common NGFW option with Autoscaling](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/examples/isolated_design_autoscale)

## Reference
<!-- BEGIN_TF_DOCS -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.5.0, < 2.0.0 |
| <a name="requirement_archive"></a> [archive](#requirement\_archive) | ~> 2.2 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 5.17 |
| <a name="requirement_null"></a> [null](#requirement\_null) | 3.2.1 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_archive"></a> [archive](#provider\_archive) | ~> 2.2 |
| <a name="provider_aws"></a> [aws](#provider\_aws) | ~> 5.17 |
| <a name="provider_null"></a> [null](#provider\_null) | 3.2.1 |

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
| [aws_iam_role_policy.lambda_iam_policy_default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) | resource |
| [aws_iam_role_policy.lambda_iam_policy_delicense](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy) | resource |
| [aws_lambda_function.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function) | resource |
| [aws_lambda_permission.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_permission) | resource |
| [aws_launch_template.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/launch_template) | resource |
| [null_resource.python_requirements](https://registry.terraform.io/providers/hashicorp/null/3.2.1/docs/resources/resource) | resource |
| [archive_file.this](https://registry.terraform.io/providers/hashicorp/archive/latest/docs/data-sources/file) | data source |
| [aws_ami.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) | data source |
| [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) | data source |
| [aws_kms_alias.ebs_kms](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_alias) | data source |
| [aws_partition.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_asg_name"></a> [asg\_name](#input\_asg\_name) | Name of the autoscaling group to create | `string` | `"asg"` | no |
| <a name="input_bootstrap_options"></a> [bootstrap\_options](#input\_bootstrap\_options) | Bootstrap options to put into userdata | `any` | `{}` | no |
| <a name="input_delete_timeout"></a> [delete\_timeout](#input\_delete\_timeout) | Timeout needed to correctly drain autoscaling group while deleting ASG.<br/><br/>  By default in AWS timeout is set to 10 minutes, which is too low and causes issue:<br/>  Error: waiting for Auto Scaling Group (example-asg) drain: timeout while waiting for state to become '0' (last state: '1', timeout: 10m0s) | `string` | `"20m"` | no |
| <a name="input_delicense_enabled"></a> [delicense\_enabled](#input\_delicense\_enabled) | If true, then Lambda is going to delicense FW before destroying VM-Series | `bool` | `false` | no |
| <a name="input_delicense_ssm_param_name"></a> [delicense\_ssm\_param\_name](#input\_delicense\_ssm\_param\_name) | Secure string in Parameter Store with value in below format:<pre>{"username":"ACCOUNT","password":"PASSWORD","panorama1":"IP\_ADDRESS1","panorama2":"IP\_ADDRESS2","license\_manager":"LICENSE\_MANAGER\_NAME"}"</pre>the format can either be the plain name in case you store it without hierarchy or with a "/" in case you store in in a hierarchy | `any` | `null` | no |
| <a name="input_desired_capacity"></a> [desired\_capacity](#input\_desired\_capacity) | Number of Amazon EC2 instances that should be running in the group. | `number` | `2` | no |
| <a name="input_ebs_kms_id"></a> [ebs\_kms\_id](#input\_ebs\_kms\_id) | Alias for AWS KMS used for EBS encryption in VM-Series | `string` | `"alias/aws/ebs"` | no |
| <a name="input_enabled_metrics"></a> [enabled_metrics](#input_enabled_metrics) | List of Auto Scaling group metrics to collect. Set to an empty list to disable metrics collection. | `list(string)` | <pre>[<br />  "GroupMinSize",<br />  "GroupMaxSize",<br />  "GroupDesiredCapacity",<br />  "GroupInServiceInstances",<br />  "GroupPendingInstances",<br />  "GroupStandbyInstances",<br />  "GroupTerminatingInstances",<br />  "GroupTotalInstances",<br />  "WarmPoolDesiredCapacity",<br />  "WarmPoolWarmedCapacity",<br />  "WarmPoolPendingCapacity",<br />  "WarmPoolTerminatingCapacity",<br />  "WarmPoolTotalCapacity",<br />  "GroupAndWarmPoolDesiredCapacity",<br />  "GroupAndWarmPoolTotalCapacity",<br />]</pre> | no |
| <a name="input_fw_license_type"></a> [fw\_license\_type](#input\_fw\_license\_type) | Select License type (byol/payg1/payg2) | `string` | `"byol"` | no |
| <a name="input_global_tags"></a> [global\_tags](#input\_global\_tags) | Map of AWS tags to apply to all the created resources. | `map(any)` | n/a | yes |
| <a name="input_health_check"></a> [health\_check](#input\_health\_check) | Controls how health checking is done. | <pre>object({<br/>    grace\_period = number<br/>    type         = string<br/>  })</pre> | <pre>{<br/>  "grace\_period": 300,<br/>  "type": "EC2"<br/>}</pre> | no |
| <a name="input_include_deprecated_ami"></a> [include\_deprecated\_ami](#input\_include\_deprecated\_ami) | In certain scenarios, customers may deploy a VM-Series instance through the marketplace, <br/>only to later discover that the ami has been deprecated, resulting in pipeline failures. <br/>Setting the specified parameter to `true` will enable the continued use of deprecated AMIs, <br/>mitigating this issue. | `bool` | `false` | no |
| <a name="input_instance_refresh"></a> [instance\_refresh](#input\_instance\_refresh) | If this variable is configured (not null), then start an Instance Refresh when Auto Scaling Group is updated.<br/><br/>  Instance refresh is defined by attributes:<br/>  - `strategy` - Strategy to use for instance refresh. The only allowed value is Rolling<br/>  - `preferences` - Override default parameters for Instance Refresh:<br/>    - `checkpoint_delay` - Number of seconds to wait after a checkpoint. Defaults to 3600.<br/>    - `checkpoint_percentages` - List of percentages for each checkpoint. Values must be unique and in ascending order. <br/>                                 To replace all instances, the final number must be 100.<br/>    - `instance_warmup` - Number of seconds until a newly launched instance is configured and ready to use. <br/>                          Default behavior is to use the Auto Scaling Group's health check grace period.<br/>    - `min_healthy_percentage` - Amount of capacity in the Auto Scaling group that must remain healthy during an instance refresh <br/>                                to allow the operation to continue, as a percentage of the desired capacity of the Auto Scaling group. <br/>                                Defaults to 90.<br/>    - `skip_matching` - Replace instances that already have your desired configuration. Defaults to false.<br/>    - `auto_rollback` - Automatically rollback if instance refresh fails. Defaults to false. <br/>                        This option may only be set to true when specifying a launch\_template or mixed\_instances\_policy.<br/>    - `scale_in_protected_instances` - Behavior when encountering instances protected from scale in are found. <br/>                                       Available behaviors are Refresh, Ignore, and Wait. Default is Ignore.<br/>    - `standby_instances` - Behavior when encountering instances in the Standby state in are found. <br/>                            Available behaviors are Terminate, Ignore, and Wait. Default is Ignore.<br/>  - `trigger` - Set of additional property names that will trigger an Instance Refresh. <br/>                A refresh will always be triggered by a change in any of launch\_configuration, launch\_template, or mixed\_instances\_policy. | <pre>object({<br/>    strategy = string<br/>    preferences = object({<br/>      checkpoint\_delay             = number<br/>      checkpoint\_percentages       = list(number)<br/>      instance\_warmup              = number<br/>      min\_healthy\_percentage       = number<br/>      skip\_matching                = bool<br/>      auto\_rollback                = bool<br/>      scale\_in\_protected\_instances = string<br/>      standby\_instances            = string<br/>    })<br/>    triggers = list(string)<br/>  })</pre> | `null` | no |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | EC2 instance type. | `string` | `"m5.xlarge"` | no |
| <a name="input_interfaces"></a> [interfaces](#input\_interfaces) | Map of the network interface specifications.<br/>If "mgmt-interface-swap" bootstrap option is enabled, ensure dataplane interface `device_index` is set to 0 and the firewall management interface `device_index` is set to 1.<br/>Available options:<br/>- `device_index`       = (Required\|int) Determines order in which interfaces are attached to the instance. Interface with `0` is attached at boot time.<br/>- `subnet_id`          = (Required\|string) Subnet ID to create the ENI in.<br/>- `name`               = (Optional\|string) Name tag for the ENI. Defaults to instance name suffixed by map's key.<br/>- `description`        = (Optional\|string) A descriptive name for the ENI.<br/>- `create_public_ip`   = (Optional\|bool) Whether to create a public IP for the ENI. Defaults to false.<br/>- `eip_allocation_id`  = (Optional\|string) Associate an existing EIP to the ENI.<br/>- `private_ips`        = (Optional\|list) List of private IPs to assign to the ENI. If not set, dynamic allocation is used.<br/>- `public_ipv4_pool`   = (Optional\|string) EC2 IPv4 address pool identifier.<br/>- `source_dest_check`  = (Optional\|bool) Whether to enable source destination checking for the ENI. Defaults to false.<br/>- `security_group_ids` = (Optional\|list) A list of Security Group IDs to assign to this interface. Defaults to null.<br/><br/>Example:<pre>interfaces = {<br/>  mgmt = {<br/>    device\_index       = 0<br/>    subnet\_id          = aws\_subnet.mgmt.id<br/>    name               = "mgmt"<br/>    create\_public\_ip   = true<br/>    source\_dest\_check  = true<br/>    security\_group\_ids = ["sg-123456"]<br/>  },<br/>  public = {<br/>    device\_index     = 1<br/>    subnet\_id        = aws\_subnet.public.id<br/>    name             = "public"<br/>    create\_public\_ip = true<br/>  },<br/>  private = {<br/>    device\_index = 2<br/>    subnet\_id    = aws\_subnet.private.id<br/>    name         = "private"<br/>  },<br/>]</pre> | `map(any)` | n/a | yes |
| <a name="input_ip_target_groups"></a> [ip\_target\_groups](#input\_ip\_target\_groups) | Target groups (type IP) for load balancers, which are used by Lamda to register VM-Series IP of untrust interface | <pre>list(object({<br/>    arn  = string<br/>    port = string<br/>  }))</pre> | `[]` | no |
| <a name="input_lambda_execute_pip_install_once"></a> [lambda\_execute\_pip\_install\_once](#input\_lambda\_execute\_pip\_install\_once) | Flag used in local-exec command installing Python packages required by Lambda.<br/><br/>  If set to true, local-exec is executed only once, when all resources are created.<br/>  If you need to have idempotent behaviour for terraform apply every time and you have downloaded<br/>  all required Python packages, set it to true.<br/><br/>  If set to false, every time it's checked if files for package pan\_os\_python are downloaded.<br/>  If not, it causes execution of local-exec command in two consecutive calls of terraform apply:<br/>  - first time value of installed-pan-os-python is changed from true (or empty) to false<br/>  - second time value of installed-pan-os-python is changed from false to true<br/>  In summary while executing code from scratch, two consecutive calls of terraform apply are not idempotent.<br/>  The third execution of terraform apply show no changes.<br/>  While using modules in CI/CD pipelines, when agents are selected randomly, set this value to false<br/>  in order to check every time, if pan\_os\_python package is downloaded. sdfdsf sdfvars | `bool` | `false` | no |
| <a name="input_lambda_timeout"></a> [lambda\_timeout](#input\_lambda\_timeout) | Amount of time Lambda Function has to run in seconds. | `number` | `30` | no |
| <a name="input_launch_template_update_default_version"></a> [launch\_template\_update\_default\_version](#input\_launch\_template\_update\_default\_version) | Whether to update launch template default version each update.<br/><br/>  If set to true, every time when e.g. bootstrap options are changed, new version is created and default version is updated.<br/>  If set to false, every time when e.g. bootstrap options are changed, new version is created, but default version is not changed. | `bool` | `true` | no |
| <a name="input_launch_template_version"></a> [launch\_template\_version](#input\_launch\_template\_version) | Launch template version to use to launch instances | `string` | `"$Latest"` | no |
| <a name="input_lifecycle_hook_timeout"></a> [lifecycle\_hook\_timeout](#input\_lifecycle\_hook\_timeout) | How long should we wait for lambda to finish | `number` | `300` | no |
| <a name="input_max_size"></a> [max\_size](#input\_max\_size) | Maximum size of the Auto Scaling Group. | `number` | `2` | no |
| <a name="input_min_size"></a> [min\_size](#input\_min\_size) | Minimum size of the Auto Scaling Group. | `number` | `1` | no |
| <a name="input_metrics_granularity"></a> [metrics_granularity](#input_metrics_granularity) | Granularity for Auto Scaling group metrics. | `string` | `"1Minute"` | no |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | All resource names will be prepended with this string | `string` | n/a | yes |
| <a name="input_region"></a> [region](#input\_region) | AWS region | `string` | n/a | yes |
| <a name="input_reserved_concurrent_executions"></a> [reserved\_concurrent\_executions](#input\_reserved\_concurrent\_executions) | Amount of reserved concurrent execussions for lambda function. | `number` | `100` | no |
| <a name="input_scaling_cloudwatch_namespace"></a> [scaling\_cloudwatch\_namespace](#input\_scaling\_cloudwatch\_namespace) | Name of CloudWatch namespace, where metrics are available (it should be the same as namespace configured in VM-Series plugin in PAN-OS) | `string` | `"VMseries_dimensions"` | no |
| <a name="input_scaling_estimated_instance_warmup"></a> [scaling\_estimated\_instance\_warmup](#input\_scaling\_estimated\_instance\_warmup) | Estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics | `number` | `900` | no |
| <a name="input_scaling_metric_name"></a> [scaling\_metric\_name](#input\_scaling\_metric\_name) | Name of the metric used in dynamic scaling policy | `string` | `""` | no |
| <a name="input_scaling_plan_enabled"></a> [scaling\_plan\_enabled](#input\_scaling\_plan\_enabled) | True, if automatic dynamic scaling policy should be created | `bool` | `false` | no |
| <a name="input_scaling_statistic"></a> [scaling\_statistic](#input\_scaling\_statistic) | Statistic of the metric. Valid values: Average, Maximum, Minimum, SampleCount, Sum | `string` | `"Average"` | no |
| <a name="input_scaling_tags"></a> [scaling\_tags](#input\_scaling\_tags) | Tags configured for dynamic scaling policy | `map(any)` | `{}` | no |
| <a name="input_scaling_target_value"></a> [scaling\_target\_value](#input\_scaling\_target\_value) | Target value for the metric used in dynamic scaling policy | `number` | `70` | no |
| <a name="input_security_group_ids"></a> [security\_group\_ids](#input\_security\_group\_ids) | List of security group IDs associated with the Lambda function | `list(string)` | `[]` | no |
| <a name="input_ssh_key_name"></a> [ssh\_key\_name](#input\_ssh\_key\_name) | Name of AWS keypair to associate with instances | `string` | n/a | yes |
| <a name="input_subnet_ids"></a> [subnet\_ids](#input\_subnet\_ids) | List of subnet IDs associated with the Lambda function | `list(string)` | `[]` | no |
| <a name="input_suspended_processes"></a> [suspended\_processes](#input\_suspended\_processes) | List of processes to suspend for the Auto Scaling Group. The allowed values are Launch, Terminate, HealthCheck, ReplaceUnhealthy, AZRebalance, AlarmNotification, ScheduledActions, AddToLoadBalancer, InstanceRefresh | `list(string)` | `[]` | no |
| <a name="input_tag_specifications_targets"></a> [tag\_specifications\_targets](#input\_tag\_specifications\_targets) | List of resources that will be tagged when launched via ASG | `list(string)` | <pre>[<br/>  "instance",<br/>  "volume",<br/>  "network-interface"<br/>]</pre> | no |
| <a name="input_target_group_arn"></a> [target\_group\_arn](#input\_target\_group\_arn) | ARN of target group (type instance) for load balancer, which is used by ASG to register VM-Series instance | `string` | `null` | no |
| <a name="input_vmseries_ami_id"></a> [vmseries\_ami\_id](#input\_vmseries\_ami\_id) | The AMI from which to launch the instance. Takes precedence over fw\_version and fw\_license\_type | `string` | `null` | no |
| <a name="input_vmseries_iam_instance_profile"></a> [vmseries\_iam\_instance\_profile](#input\_vmseries\_iam\_instance\_profile) | IAM instance profile used in launch template | `string` | `""` | no |
| <a name="input_vmseries_product_code"></a> [vmseries\_product\_code](#input\_vmseries\_product\_code) | Product code corresponding to a chosen VM-Series license type model - by default - BYOL.<br/>To check the available license type models and their codes, please refer to the<br/>[VM-Series documentation](https://docs.paloaltonetworks.com/vm-series/10-0/vm-series-deployment/set-up-the-vm-series-firewall-on-aws/deploy-the-vm-series-firewall-on-aws/obtain-the-ami/get-amazon-machine-image-ids.html) | `string` | `"6njl1pau431dv1qxipg63mvah"` | no |
| <a name="input_vmseries_version"></a> [vmseries\_version](#input\_vmseries\_version) | Select which FW version to deploy | `string` | `"10.2.9-h1"` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_asg"></a> [asg](#output\_asg) | n/a |
<!-- END_TF_DOCS -->