---
hide_title: true
id: vmseries
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
sidebar_label: VM-Series
title: Palo Alto Networks VM-Series Module for AWS
---

# Palo Alto Networks VM-Series Module for AWS

A Terraform module for deploying a VM-Series firewall in AWS cloud.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/vmseries) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/vmseries)

## Usage

For example usage, please refer to the [examples](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/examples) directory.

## VMSeries Lifecycle policy

The changes in user data bootstrap entries will not affect the existing VM-Series EC2 instances. The recommended method to replace existing VM is to use terraform taint.

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
| [aws_eip.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eip) | resource |
| [aws_eip_association.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/eip_association) | resource |
| [aws_instance.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance) | resource |
| [aws_network_interface.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_interface) | resource |
| [aws_network_interface_attachment.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_interface_attachment) | resource |
| [aws_ami.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ami) | data source |
| [aws_kms_alias.current_arn](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/kms_alias) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_airs_deployment"></a> [airs\_deployment](#input\_airs\_deployment) | Deployment type VM-Series (False) or AI Runtime Security (True) | `bool` | `false` | no |
| <a name="input_airs_instance_type"></a> [airs\_instance\_type](#input\_airs\_instance\_type) | EC2 instance type. | `string` | `"c6in.xlarge"` | no |
| <a name="input_airs_product_code"></a> [airs\_product\_code](#input\_airs\_product\_code) | Product code corresponding to a chosen AIRS license type model - by default - BYOL. <br/>To check the available license type models and their codes, please refer to the | `string` | `"b261y39exndwe1ltro1tqpeog"` | no |
| <a name="input_airs_version"></a> [airs\_version](#input\_airs\_version) | AI Runtime Security version to deploy.<br/>To list all available AIRS versions, run the command provided below. <br/>Please have in mind that the `product-code` may need to be updated - check the `vmseries_product_code` variable for more information.<pre>aws ec2 describe-images --region us-west-1 --filters "Name=product-code,Values=b261y39exndwe1ltro1tqpeog" "Name=name,Values=PA-AI-Runtime-Security-AWS*" --output json --query "Images[].Description" \| grep -o 'PA-AI-Runtime-Security-AWS-.*' \| sort</pre> | `string` | `"11.2.5-h1"` | no |
| <a name="input_bootstrap_options"></a> [bootstrap\_options](#input\_bootstrap\_options) | VM-Series bootstrap options to provide using instance user data. Contents determine type of bootstap method to use.<br/>If empty (the default), bootstrap process is not triggered at all.<br/>For more information on available methods, please refer to VM-Series documentation for specific version.<br/>For 10.0 docs are available [here](https://docs.paloaltonetworks.com/vm-series/10-0/vm-series-deployment/bootstrap-the-vm-series-firewall.html). | `string` | `""` | no |
| <a name="input_ebs_encrypted"></a> [ebs\_encrypted](#input\_ebs\_encrypted) | Whether to enable EBS encryption on volumes. | `bool` | `true` | no |
| <a name="input_ebs_kms_key_alias"></a> [ebs\_kms\_key\_alias](#input\_ebs\_kms\_key\_alias) | The alias for the customer managed KMS key to use for volume encryption. Should be prepended with the word "alias" followed by a forward slash (alias/example-key-alias).<br/>If `null` (the default), the default master key that protects EBS volumes will be used. | `string` | `"alias/aws/ebs"` | no |
| <a name="input_eip_domain"></a> [eip\_domain](#input\_eip\_domain) | Indicates if this EIP is for use in VPC | `string` | `"vpc"` | no |
| <a name="input_enable_imdsv2"></a> [enable\_imdsv2](#input\_enable\_imdsv2) | Whether to enable IMDSv2 on the EC2 instance.<br/>Support for this feature has been added in VM-Series Plugin [3.0.0](https://docs.paloaltonetworks.com/plugins/vm-series-and-panorama-plugins-release-notes/vm-series-plugin/vm-series-plugin-30/vm-series-plugin-300#id126d0957-95d7-4b29-9147-fff20027986e), which in turn requires VM-Series version 10.2.0 at minimum. | `string` | `false` | no |
| <a name="input_enable_instance_termination_protection"></a> [enable\_instance\_termination\_protection](#input\_enable\_instance\_termination\_protection) | Whether to enable termination protection on the EC2 instance. | `bool` | `false` | no |
| <a name="input_enable_monitoring"></a> [enable\_monitoring](#input\_enable\_monitoring) | (Optional) If true, the launched EC2 instance will have detailed monitoring enabled. | `bool` | `false` | no |
| <a name="input_iam_instance_profile"></a> [iam\_instance\_profile](#input\_iam\_instance\_profile) | IAM instance profile. | `string` | `null` | no |
| <a name="input_include_deprecated_ami"></a> [include\_deprecated\_ami](#input\_include\_deprecated\_ami) | In certain scenarios, customers may deploy a VM-Series instance through the marketplace, <br/>only to later discover that the ami has been deprecated, resulting in pipeline failures. <br/>Setting the specified parameter to `true` will enable the continued use of deprecated AMIs, <br/>mitigating this issue. | `bool` | `false` | no |
| <a name="input_instance_type"></a> [instance\_type](#input\_instance\_type) | EC2 instance type. | `string` | `"m5.xlarge"` | no |
| <a name="input_interfaces"></a> [interfaces](#input\_interfaces) | Map of the network interface specifications.<br/>If "mgmt-interface-swap" bootstrap option is enabled, ensure dataplane interface `device_index` is set to 0 and the firewall management interface `device_index` is set to 1.<br/>Available options:<br/>- `device_index`       = (Required\|int) Determines order in which interfaces are attached to the instance. Interface with `0` is attached at boot time.<br/>- `subnet_id`          = (Required\|string) Subnet ID to create the ENI in.<br/>- `name`               = (Optional\|string) Name tag for the ENI. Defaults to instance name suffixed by map's key.<br/>- `description`        = (Optional\|string) A descriptive name for the ENI.<br/>- `create_public_ip`   = (Optional\|bool) Whether to create a public IP for the ENI. Defaults to false.<br/>- `eip_allocation_id`  = (Optional\|string) Associate an existing EIP to the ENI.<br/>- `private_ips`        = (Optional\|list) List of private IPs to assign to the ENI. If not set, dynamic allocation is used.<br/>- `ipv6_address_count` = (Optional\|number) Number of IPv6 addresses that will be assigned to the interface (use only when IPv6 enabled in the subnet). Defaults to null.<br/>- `public_ipv4_pool`   = (Optional\|string) EC2 IPv4 address pool identifier. <br/>- `source_dest_check`  = (Optional\|bool) Whether to enable source destination checking for the ENI. Defaults to false.<br/>- `security_group_ids` = (Optional\|list) A list of Security Group IDs to assign to this interface. Defaults to null.<br/><br/>Example:<pre>interfaces = {<br/>  mgmt = {<br/>    device\_index       = 0<br/>    subnet\_id          = aws\_subnet.mgmt.id<br/>    name               = "mgmt"<br/>    create\_public\_ip   = true<br/>    source\_dest\_check  = true<br/>    security\_group\_ids = ["sg-123456"]<br/>  },<br/>  public = {<br/>    device\_index     = 1<br/>    subnet\_id        = aws\_subnet.public.id<br/>    name             = "public"<br/>    create\_public\_ip = true<br/>  },<br/>  private = {<br/>    device\_index = 2<br/>    subnet\_id    = aws\_subnet.private.id<br/>    name         = "private"<br/>  },<br/>]</pre> | `map(any)` | n/a | yes |
| <a name="input_name"></a> [name](#input\_name) | Name of the VM-Series instance. | `string` | `null` | no |
| <a name="input_ssh_key_name"></a> [ssh\_key\_name](#input\_ssh\_key\_name) | Name of AWS keypair to associate with instances. | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | Map of additional tags to apply to all resources. | `map(any)` | `{}` | no |
| <a name="input_vmseries_ami_id"></a> [vmseries\_ami\_id](#input\_vmseries\_ami\_id) | Specific AMI ID to use for VM-Series instance.<br/>If `null` (the default), `vmseries_version` and `vmseries_product_code` vars are used to determine a public image to use. | `string` | `null` | no |
| <a name="input_vmseries_product_code"></a> [vmseries\_product\_code](#input\_vmseries\_product\_code) | Product code corresponding to a chosen VM-Series license type model - by default - BYOL. <br/>To check the available license type models and their codes, please refer to the<br/>[VM-Series documentation](https://docs.paloaltonetworks.com/vm-series/10-0/vm-series-deployment/set-up-the-vm-series-firewall-on-aws/deploy-the-vm-series-firewall-on-aws/obtain-the-ami/get-amazon-machine-image-ids.html) | `string` | `"6njl1pau431dv1qxipg63mvah"` | no |
| <a name="input_vmseries_version"></a> [vmseries\_version](#input\_vmseries\_version) | VM-Series Firewall version to deploy.<br/>To list all available VM-Series versions, run the command provided below. <br/>Please have in mind that the `product-code` may need to be updated - check the `vmseries_product_code` variable for more information.<pre>aws ec2 describe-images --region us-west-1 --filters "Name=product-code,Values=6njl1pau431dv1qxipg63mvah" "Name=name,Values=PA-VM-AWS*" --output json --query "Images[].Description" \| grep -o 'PA-VM-AWS-.*' \| sort</pre> | `string` | `"10.2.9-h1"` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_instance"></a> [instance](#output\_instance) | n/a |
| <a name="output_interfaces"></a> [interfaces](#output\_interfaces) | Map of VM-Series network interfaces. The entries are `aws_network_interface` objects. |
| <a name="output_public_ips"></a> [public\_ips](#output\_public\_ips) | Map of public IPs created within the module. |
<!-- END_TF_DOCS -->