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
- aws
pagination_next: null
pagination_prev: null
sidebar_label: Panorama
title: Palo Alto Networks Panorama Module for AWS
---

# Palo Alto Networks Panorama Module for AWS

A Terraform module for deploying Panorama in AWS cloud.

Panorama deployed on AWS is Bring Your Own License (BYOL), supports all deployment modes (Panorama, Log Collector, and Management Only), and shares the same processes and functionality as the M-Series hardware appliances. For more information on Panorama modes, see [Panorama Models](https://docs.paloaltonetworks.com/panorama/10-2/panorama-admin/panorama-overview/panorama-models).

## Usage

For usage, check the "examples" folder in the root of the repository.

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0.0, < 2.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 4.25 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | ~> 4.25 |

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

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_availability_zone"></a> [availability\_zone](#input\_availability\_zone) | Availability zone in which Panorama will be deployed. | `string` | n/a | yes |
| <a name="input_create_public_ip"></a> [create\_public\_ip](#input\_create\_public\_ip) | If true, create an Elastic IP address for Panorama. | `bool` | `false` | no |
| <a name="input_ebs_kms_key_alias"></a> [ebs\_kms\_key\_alias](#input\_ebs\_kms\_key\_alias) | The alias for the customer managed KMS key to use for volume encryption.<br />If this is set to `null` the default master key that protects EBS volumes will be used | `string` | `null` | no |
| <a name="input_ebs_volumes"></a> [ebs\_volumes](#input\_ebs\_volumes) | List of EBS volumes to create and attach to Panorama.<br />Available options:<br />- `name`              (Optional) Name tag for the EBS volume. If not provided defaults to the value of `var.name`.<br />- `ebs_device_name`   (Required) The EBS device name to expose to the instance (for example, /dev/sdh or xvdh). <br />See [Device Naming on Linux Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html#available-ec2-device-names) for more information.<br />- `ebs_size`          (Optional) The size of the EBS volume in GiBs. Defaults to 2000 GiB.<br />- `ebs_encrypted`     (Optional) If true, the Panorama EBS volume will be encrypted.<br />- `force_detach`      (Optional) Set to true if you want to force the volume to detach. Useful if previous attempts failed, but use this option only as a last resort, as this can result in data loss.<br />- `skip_destroy`      (Optional) Set this to true if you do not wish to detach the volume from the instance to which it is attached at destroy time, and instead just remove the attachment from Terraform state. <br />This is useful when destroying an instance attached to third-party volumes.<br /><br />Note: Terraform must be running with credentials which have the `GenerateDataKeyWithoutPlaintext` permission on the specified KMS key <br />as required by the [EBS KMS CMK volume provisioning process](https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html#ebs-cmk) to prevent a volume from being created and almost immediately deleted.<br />If null, the default EBS encryption KMS key in the current region is used.<br /><br />Example:<pre>ebs\_volumes = [<br />  {<br />    name              = "ebs-1"<br />    ebs\_device\_name   = "/dev/sdb"<br />    ebs\_size          = "2000"<br />    ebs\_encrypted     = true<br />  },<br />  {<br />    name              = "ebs-2"<br />    ebs\_device\_name   = "/dev/sdb"<br />    ebs\_size          = "2000"<br />    ebs\_encrypted     = true<br />  },<br />  {<br />    name              = "ebs-3"<br />    ebs\_device\_name   = "/dev/sdb"<br />    ebs\_size          = "2000"<br />  },<br />]</pre> | `list(any)` | `[]` | no |
| <a name="input_global_tags"></a> [global\_tags](#input\_global\_tags) | A map of tags to assign to the resources.<br />If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level." | `map(any)` | `{}` | no |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | EC2 instance type for Panorama. Default set to Palo Alto Networks recommended instance type. | `string` | `"c5.4xlarge"` | no |
| <a name="input_name"></a> [name](#input\_name) | Name for the Panorama instance. | `string` | `"pan-panorama"` | no |
| <a name="input_panorama_iam_role"></a> [panorama\_iam\_role](#input\_panorama\_iam\_role) | IAM Role attached to Panorama instance contained curated IAM Policy. | `string` | n/a | yes |
| <a name="input_panorama_version"></a> [panorama\_version](#input\_panorama\_version) | Panorama PAN-OS Software version. List published images with:<pre>aws ec2 describe-images \\<br />--filters "Name=product-code,Values=eclz7j04vu9lf8ont8ta3n17o" "Name=name,Values=Panorama-AWS*" \\<br />--output json --query "Images[].Description" \| grep -o 'Panorama-AWS-.*' \| tr -d '",'</pre> | `string` | `"10.1.5"` | no |
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
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->