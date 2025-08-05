---
hide_title: true
id: vpc
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
sidebar_label: VPC
title: Palo Alto Networks VPC Module for AWS
---

# Palo Alto Networks VPC Module for AWS

A Terraform module for deploying a VPC in AWS.

One advantage of this module over the [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc)
module is that it does not create multiple resources based on Terraform `count` iterator. This allows for example
[easier removal](https://github.com/PaloAltoNetworks/terraform-best-practices#22-looping) of any single subnet,
without the need to briefly destroy and re-create any other subnet.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/vpc) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/vpc)

## Usage

```hcl
module "vpc" {
  source = "../../modules/vpc"

  name                    = var.name
  cidr_block              = var.vpc_cidr_block
  secondary_cidr_blocks   = var.vpc_secondary_cidr_blocks
  create_internet_gateway = true
  global_tags             = var.global_tags
  vpc_tags                = var.vpc_tags
  security_groups         = var.security_groups
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
| [aws_internet_gateway.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/internet_gateway) | resource |
| [aws_network_acl.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_acl) | resource |
| [aws_network_acl_rule.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/network_acl_rule) | resource |
| [aws_route_table.from_igw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) | resource |
| [aws_route_table.from_vgw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table) | resource |
| [aws_route_table_association.from_igw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) | resource |
| [aws_route_table_association.from_vgw](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/route_table_association) | resource |
| [aws_security_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/security_group) | resource |
| [aws_vpc.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc) | resource |
| [aws_vpc_dhcp_options.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_dhcp_options) | resource |
| [aws_vpc_dhcp_options_association.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_dhcp_options_association) | resource |
| [aws_vpc_ipv4_cidr_block_association.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc_ipv4_cidr_block_association) | resource |
| [aws_vpn_gateway.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpn_gateway) | resource |
| [aws_internet_gateway.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/internet_gateway) | data source |
| [aws_vpc.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/vpc) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_assign_generated_ipv6_cidr_block"></a> [assign\_generated\_ipv6\_cidr\_block](#input\_assign\_generated\_ipv6\_cidr\_block) | A boolean flag to assign AWS-provided /56 IPv6 CIDR block. [Defaults false](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc#assign_generated_ipv6_cidr_block) | `bool` | `null` | no |
| <a name="input_cidr_block"></a> [cidr\_block](#input\_cidr\_block) | CIDR block to assign to a new VPC. | `string` | `null` | no |
| <a name="input_create_dhcp_options"></a> [create\_dhcp\_options](#input\_create\_dhcp\_options) | Should be true if you want to specify a DHCP options set with a custom domain name, DNS servers, NTP servers. | `bool` | `false` | no |
| <a name="input_create_internet_gateway"></a> [create\_internet\_gateway](#input\_create\_internet\_gateway) | Set to `true` to create IG and attach it to the VPC. | `bool` | `false` | no |
| <a name="input_create_vpc"></a> [create\_vpc](#input\_create\_vpc) | When set to `true` inputs are used to create a VPC, otherwise - to get data about an existing one (based on the `name` value). | `bool` | `true` | no |
| <a name="input_create_vpn_gateway"></a> [create\_vpn\_gateway](#input\_create\_vpn\_gateway) | When set to true, create VPN gateway and a dedicated route table. | `bool` | `false` | no |
| <a name="input_domain_name"></a> [domain\_name](#input\_domain\_name) | Specifies DNS name for DHCP options set. 'create\_dhcp\_options' needs to be enabled. | `string` | `""` | no |
| <a name="input_domain_name_servers"></a> [domain\_name\_servers](#input\_domain\_name\_servers) | Specify a list of DNS server addresses for DHCP options set, default to AWS provided | `list(string)` | `[]` | no |
| <a name="input_enable_dns_hostnames"></a> [enable\_dns\_hostnames](#input\_enable\_dns\_hostnames) | A boolean flag to enable/disable DNS hostnames in the VPC. [Defaults false](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc#enable_dns_hostnames). | `bool` | `null` | no |
| <a name="input_enable_dns_support"></a> [enable\_dns\_support](#input\_enable\_dns\_support) | A boolean flag to enable/disable DNS support in the VPC. [Defaults true](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc#enable_dns_support). | `bool` | `null` | no |
| <a name="input_global_tags"></a> [global\_tags](#input\_global\_tags) | Optional map of arbitrary tags to apply to all the created resources. | `map(string)` | `{}` | no |
| <a name="input_instance_tenancy"></a> [instance\_tenancy](#input\_instance\_tenancy) | VPC level [instance tenancy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc#instance_tenancy). | `string` | `null` | no |
| <a name="input_nacls"></a> [nacls](#input\_nacls) | The `nacls` variable is a map of maps, where each map represents an AWS NACL.<br/><br/>  Example:<pre>nacls = {<br/>    trusted\_path\_monitoring = {<br/>      name = "trusted-path-monitoring"<br/>      rules = {<br/>        block\_outbound\_icmp = {<br/>          rule\_number = 110<br/>          egress      = true<br/>          protocol    = "icmp"<br/>          rule\_action = "deny"<br/>          cidr\_block  = "10.100.1.0/24"<br/>          from\_port   = null<br/>          to\_port     = null<br/>        }<br/>        allow\_inbound = {<br/>          rule\_number = 300<br/>          egress      = false<br/>          protocol    = "-1"<br/>          rule\_action = "allow"<br/>          cidr\_block  = "0.0.0.0/0"<br/>          from\_port   = null<br/>          to\_port     = null<br/>        }<br/>      }<br/>    }<br/>  }</pre> | `any` | `{}` | no |
| <a name="input_name"></a> [name](#input\_name) | Name of the VPC to create or use. | `string` | n/a | yes |
| <a name="input_name_internet_gateway"></a> [name\_internet\_gateway](#input\_name\_internet\_gateway) | Name of the IGW to create or use. | `string` | `null` | no |
| <a name="input_name_vpn_gateway"></a> [name\_vpn\_gateway](#input\_name\_vpn\_gateway) | Name of the VPN gateway to create. | `string` | `null` | no |
| <a name="input_ntp_servers"></a> [ntp\_servers](#input\_ntp\_servers) | Specify a list of NTP server addresses for DHCP options set, default to AWS provided | `list(string)` | `[]` | no |
| <a name="input_route_table_internet_gateway"></a> [route\_table\_internet\_gateway](#input\_route\_table\_internet\_gateway) | Name of route table for the IGW. | `string` | `null` | no |
| <a name="input_route_table_vpn_gateway"></a> [route\_table\_vpn\_gateway](#input\_route\_table\_vpn\_gateway) | Name of the route table for VPN gateway. | `string` | `null` | no |
| <a name="input_secondary_cidr_blocks"></a> [secondary\_cidr\_blocks](#input\_secondary\_cidr\_blocks) | Secondary CIDR block to assign to a new VPC. | `list(string)` | `[]` | no |
| <a name="input_security_groups"></a> [security\_groups](#input\_security\_groups) | The `security_groups` variable is a map of maps, where each map represents an AWS Security Group.<br/>  The key of each entry acts as the Security Group name.<br/>  List of available attributes of each Security Group entry:<br/>  - `rules`: A list of objects representing a Security Group rule. The key of each entry acts as the name of the rule and<br/>      needs to be unique across all rules in the Security Group.<br/>      List of attributes available to define a Security Group rule:<br/>      - `description`: Security Group description.<br/>      - `type`: Specifies if rule will be evaluated on ingress (inbound) or egress (outbound) traffic.<br/>      - `cidr_blocks`: List of CIDR blocks - for ingress, determines the traffic that can reach your instance. For egress<br/>      Determines the traffic that can leave your instance, and where it can go.<br/>      - `ipv6_cidr_blocks`: List of IPv6 CIDR blocks - for ingress, determines the traffic that can reach your instance. For egress<br/>      Determines the traffic that can leave your instance, and where it can go. Defaults to null. <br/>      - `prefix_list_ids`: List of Prefix List IDs<br/>      - `self`: security group itself will be added as a source to the rule.  Cannot be specified with cidr\_blocks, or security\_groups.<br/>      - `source_security_groups`: list of security group IDs to be used as a source to the rule. Cannot be specified with cidr\_blocks, or self.<br/><br/><br/>  Example:<pre>security\_groups = {<br/>    vmseries-mgmt = {<br/>      name = "vmseries-mgmt"<br/>      rules = {<br/>        all-outbound = {<br/>          description = "Permit All traffic outbound"<br/>          type        = "egress", from\_port = "0", to\_port = "0", protocol = "-1"<br/>          cidr\_blocks = ["0.0.0.0/0"]<br/>        }<br/>        all-outbound-ipv6 = {<br/>          description = "Permit All traffic outbound"<br/>          type        = "egress", from\_port = "0", to\_port = "0", protocol = "-1"<br/>          cidr\_blocks = ["::/0"]<br/>        }<br/>        https-inbound-private = {<br/>          description = "Permit HTTPS for VM-Series Management"<br/>          type        = "ingress", from\_port = "443", to\_port = "443", protocol = "tcp"<br/>          cidr\_blocks = ["10.0.0.0/8"]<br/>        }<br/>        https-inbound-eip = {<br/>          description = "Permit HTTPS for VM-Series Management from known public IPs"<br/>          type        = "ingress", from\_port = "443", to\_port = "443", protocol = "tcp"<br/>          cidr\_blocks = ["100.100.100.100/32"]<br/>        }<br/>        ssh-inbound-eip = {<br/>          description = "Permit SSH for VM-Series Management from known public IPs"<br/>          type        = "ingress", from\_port = "22", to\_port = "22", protocol = "tcp"<br/>          cidr\_blocks = ["100.100.100.100/32"]<br/>        }<br/>        https-inbound-self = {<br/>          description = "Permit HTTPS from instances with the same security group"<br/>          type        = "ingress", from\_port = "443", to\_port = "443", protocol = "tcp"<br/>          self        = true<br/>        }<br/>        https-inbound-security-groups = {<br/>          description = "Permit HTTPS traffic for the resources associated with the specified security group"<br/>          type        = "ingress", from\_port = "443", to\_port = "443", protocol = "tcp"<br/>          source\_security\_groups = ["sg-1a2b3c4d5e6f7g8h9i"]<br/>        }<br/>        https-inbound-prefix-list = {<br/>          description = "Permit HTTPS for VM-Series Management for IPs in managed prefix list"<br/>          type        = "ingress", from\_port = "443", to\_port = "443", protocol = "tcp"<br/>          prefix\_list\_ids = ["pl-1a2b3c4d5e6f7g8h9i"]<br/>        }<br/>      }<br/>    }<br/>  }</pre> | `any` | `{}` | no |
| <a name="input_use_internet_gateway"></a> [use\_internet\_gateway](#input\_use\_internet\_gateway) | If an existing VPC is provided and has IG attached, set to `true` to reuse it. | `bool` | `false` | no |
| <a name="input_vpc_tags"></a> [vpc\_tags](#input\_vpc\_tags) | Optional map of arbitrary tags to apply to VPC resource. | `map` | `{}` | no |
| <a name="input_vpn_gateway_amazon_side_asn"></a> [vpn\_gateway\_amazon\_side\_asn](#input\_vpn\_gateway\_amazon\_side\_asn) | ASN for the Amazon side of the gateway. | `string` | `null` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_has_secondary_cidrs"></a> [has\_secondary\_cidrs](#output\_has\_secondary\_cidrs) | n/a |
| <a name="output_id"></a> [id](#output\_id) | The VPC identifier (either created or pre-existing). |
| <a name="output_igw_as_next_hop_set"></a> [igw\_as\_next\_hop\_set](#output\_igw\_as\_next\_hop\_set) | The object is suitable for use as `vpc_route` module's input `next_hop_set`. |
| <a name="output_internet_gateway"></a> [internet\_gateway](#output\_internet\_gateway) | The entire Internet Gateway object. It is null when `create_internet_gateway` is false. |
| <a name="output_internet_gateway_route_table"></a> [internet\_gateway\_route\_table](#output\_internet\_gateway\_route\_table) | The Route Table object created to handle traffic from Internet Gateway (IGW). It is null when `create_internet_gateway` is false. |
| <a name="output_nacl_ids"></a> [nacl\_ids](#output\_nacl\_ids) | Map of NACL -> ID (newly created). |
| <a name="output_name"></a> [name](#output\_name) | The VPC Name Tag (either created or pre-existing). |
| <a name="output_security_group_ids"></a> [security\_group\_ids](#output\_security\_group\_ids) | Map of Security Group Name -> ID (newly created). |
| <a name="output_vpc"></a> [vpc](#output\_vpc) | The entire VPC object (either created or pre-existing). |
| <a name="output_vpn_gateway"></a> [vpn\_gateway](#output\_vpn\_gateway) | The entire Virtual Private Gateway object. It is null when `create_vpn_gateway` is false. |
| <a name="output_vpn_gateway_route_table"></a> [vpn\_gateway\_route\_table](#output\_vpn\_gateway\_route\_table) | The Route Table object created to handle traffic from Virtual Private Gateway (VGW). It is null when `create_vpn_gateway` is false. |
<!-- END_TF_DOCS -->