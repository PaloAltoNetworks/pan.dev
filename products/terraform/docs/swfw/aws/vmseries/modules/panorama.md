---
hide_title: true
id: panorama
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
sidebar_label: Panorama
title: Palo Alto Networks Panorama Module for AWS
---

# Palo Alto Networks Panorama Module for AWS

A Terraform module for deploying Panorama in AWS cloud.

Panorama deployed on AWS is Bring Your Own License (BYOL), supports all deployment modes (Panorama, Log Collector, and Management Only), and shares the same processes and functionality as the M-Series hardware appliances. For more information on Panorama modes, see [Panorama Models](https://docs.paloaltonetworks.com/panorama/10-2/panorama-admin/panorama-overview/panorama-models).

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/panorama) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/panorama)

## Usage

For usage, check the "examples" folder in the root of the repository.

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
| [aws_ebs_volume.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ebs_volume) | resource |
| [aws_eip.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eip) | resource |
| [aws_instance.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance) | resource |
| [aws_volume_attachment.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/volume_attachment) | resource |
| [aws_ami.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) | data source |
| [aws_kms_alias.current_arn](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_alias) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_availability_zone"></a> [availability\_zone](#input\_availability\_zone) | Availability zone in which Panorama will be deployed. | `string` | n/a | yes |
| <a name="input_create_public_ip"></a> [create\_public\_ip](#input\_create\_public\_ip) | If true, create an Elastic IP address for Panorama. | `bool` | `false` | no |
| <a name="input_ebs_encrypted"></a> [ebs\_encrypted](#input\_ebs\_encrypted) | Whether to enable EBS encryption on root volume. | `bool` | `true` | no |
| <a name="input_ebs_kms_key_alias"></a> [ebs\_kms\_key\_alias](#input\_ebs\_kms\_key\_alias) | The alias for the customer managed KMS key to use for volume encryption.<br/>If this is set to `null` the default master key that protects EBS volumes will be used | `string` | `"alias/aws/ebs"` | no |
| <a name="input_ebs_volumes"></a> [ebs\_volumes](#input\_ebs\_volumes) | List of EBS volumes to create and attach to Panorama.<br/>Available options:<br/>- `name`              (Optional) Name tag for the EBS volume. If not provided defaults to the value of `var.name`.<br/>- `ebs_device_name`   (Required) The EBS device name to expose to the instance (for example, /dev/sdh or xvdh). <br/>See [Device Naming on Linux Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html#available-ec2-device-names) for more information.<br/>- `ebs_size`          (Optional) The size of the EBS volume in GiBs. Defaults to 2000 GiB.<br/>- `force_detach`      (Optional) Set to true if you want to force the volume to detach. Useful if previous attempts failed, but use this option only as a last resort, as this can result in data loss.<br/>- `skip_destroy`      (Optional) Set this to true if you do not wish to detach the volume from the instance to which it is attached at destroy time, and instead just remove the attachment from Terraform state. <br/>This is useful when destroying an instance attached to third-party volumes.<br/><br/>Note: Terraform must be running with credentials which have the `GenerateDataKeyWithoutPlaintext` permission on the specified KMS key <br/>as required by the [EBS KMS CMK volume provisioning process](https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html#ebs-cmk) to prevent a volume from being created and almost immediately deleted.<br/>If null, the default EBS encryption KMS key in the current region is used.<br/><br/>Example:<pre>ebs\_volumes = [<br/>  {<br/>    name              = "ebs-1"<br/>    ebs\_device\_name   = "/dev/sdb"<br/>    ebs\_size          = "2000"<br/>  },<br/>  {<br/>    name              = "ebs-2"<br/>    ebs\_device\_name   = "/dev/sdb"<br/>    ebs\_size          = "2000"<br/>  },<br/>  {<br/>    name              = "ebs-3"<br/>    ebs\_device\_name   = "/dev/sdb"<br/>    ebs\_size          = "2000"<br/>  },<br/>]</pre> | `list(any)` | `[]` | no |
| <a name="input_eip_domain"></a> [eip\_domain](#input\_eip\_domain) | Indicates if this EIP is for use in VPC | `string` | `"vpc"` | no |
| <a name="input_enable_imdsv2"></a> [enable\_imdsv2](#input\_enable\_imdsv2) | Whether to enable IMDSv2 on the EC2 instance.<br/>Support for this feature has been added in VM-Series Plugin [3.0.0](https://docs.paloaltonetworks.com/plugins/vm-series-and-panorama-plugins-release-notes/vm-series-plugin/vm-series-plugin-30/vm-series-plugin-300#id126d0957-95d7-4b29-9147-fff20027986e), which in turn requires PAN-OS version 10.2.0 at minimum. | `string` | `false` | no |
| <a name="input_enable_monitoring"></a> [enable\_monitoring](#input\_enable\_monitoring) | (Optional) If true, the launched EC2 instance will have detailed monitoring enabled. | `bool` | `false` | no |
| <a name="input_global_tags"></a> [global\_tags](#input\_global\_tags) | A map of tags to assign to the resources.<br/>If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level." | `map(any)` | `{}` | no |
| <a name="input_include_deprecated_ami"></a> [include\_deprecated\_ami](#input\_include\_deprecated\_ami) | In certain scenarios, customers may deploy a Panorama instance through the marketplace, <br/>only to later discover that the ami has been deprecated, resulting in pipeline failures. <br/>Setting the specified parameter to `true` will enable the continued use of deprecated AMIs, <br/>mitigating this issue. | `bool` | `false` | no |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | EC2 instance type for Panorama. Default set to Palo Alto Networks recommended instance type. | `string` | `"c5.4xlarge"` | no |
| <a name="input_name"></a> [name](#input\_name) | Name for the Panorama instance. | `string` | `"pan-panorama"` | no |
| <a name="input_panorama_ami_id"></a> [panorama\_ami\_id](#input\_panorama\_ami\_id) | Specific AMI ID to use for Panorama instance.<br/>If `null` (the default), `panorama_version` and `product_code` vars are used to determine a public image to use. | `string` | `null` | no |
| <a name="input_panorama_iam_role"></a> [panorama\_iam\_role](#input\_panorama\_iam\_role) | IAM Role attached to Panorama instance contained curated IAM Policy. | `string` | n/a | yes |
| <a name="input_panorama_version"></a> [panorama\_version](#input\_panorama\_version) | Panorama PAN-OS Software version. List published images with:<pre>aws ec2 describe-images \\<br/>--filters "Name=product-code,Values=eclz7j04vu9lf8ont8ta3n17o" "Name=name,Values=Panorama-AWS*" \\<br/>--output json --query "Images[].Description" \| grep -o 'Panorama-AWS-.*' \| tr -d '",'</pre> | `string` | `"10.1.5"` | no |
| <a name="input_private_ip_address"></a> [private\_ip\_address](#input\_private\_ip\_address) | If provided, associates a private IP address to the Panorama instance. | `string` | `null` | no |
| <a name="input_product_code"></a> [product\_code](#input\_product\_code) | Product code for Panorama BYOL license. | `string` | `"eclz7j04vu9lf8ont8ta3n17o"` | no |
| <a name="input_ssh_key_name"></a> [ssh\_key\_name](#input\_ssh\_key\_name) | AWS EC2 key pair name. | `string` | n/a | yes |
| <a name="input_subnet_id"></a> [subnet\_id](#input\_subnet\_id) | VPC Subnet ID to launch Panorama in. | `string` | n/a | yes |
| <a name="input_vpc_security_group_ids"></a> [vpc\_security\_group\_ids](#input\_vpc\_security\_group\_ids) | A list of security group IDs to associate Panorama with. | `list(any)` | `[]` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_mgmt_ip_private_address"></a> [mgmt\_ip\_private\_address](#output\_mgmt\_ip\_private\_address) | Panorama private IP address. |
| <a name="output_mgmt_ip_public_address"></a> [mgmt\_ip\_public\_address](#output\_mgmt\_ip\_public\_address) | Panorama management IP address. If `create_public_ip` is set to `true`, it will output the public IP address otherwise it will show the 'no public IP assigned to Panorama' message. |
<!-- END_TF_DOCS -->