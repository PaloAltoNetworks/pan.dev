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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: VPC
title: VPC Network Module for GCP
---

# VPC Network Module for GCP

A Terraform module for deploying a VPC and associated subnetworks and firewall rules in GCP.

One advantage of this module over the [terraform-google-network](https://github.com/terraform-google-modules/terraform-google-network/tree/master) module is that this module lets you use existing VPC networks and subnetworks to support brownfield deployments. 

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/vpc) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/vpc)

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.3, < 2.0 |
| <a name="requirement_google"></a> [google](#requirement\_google) | ~> 4.54 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | ~> 4.54 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google_compute_firewall.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_firewall) | resource |
| [google_compute_network.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_network) | resource |
| [google_compute_subnetwork.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_subnetwork) | resource |
| [google_compute_network.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_network) | data source |
| [google_compute_subnetwork.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_subnetwork) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_create_network"></a> [create\_network](#input\_create\_network) | A flag to indicate the creation or import of a VPC network.<br />Setting this to `true` will create a new network managed by Terraform.<br />Setting this to `false` will try to read the existing network identified by `name` and `project` variables. | `bool` | `true` | no |
| <a name="input_delete_default_routes_on_create"></a> [delete\_default\_routes\_on\_create](#input\_delete\_default\_routes\_on\_create) | A flag to indicate the deletion of the default routes at VPC creation.<br />Setting this to `true` the default route `0.0.0.0/0` will be deleted upon network creation.<br />Setting this to `false` the default route `0.0.0.0/0` will be not be deleted upon network creation. | `bool` | `false` | no |
| <a name="input_firewall_rules"></a> [firewall\_rules](#input\_firewall\_rules) | A map containing each firewall rule configuration.<br />Action of the firewall rule is always `allow`.<br />The only possible direction of the firewall rule is `INGRESS`.<br /><br />List of available attributes of each firewall rule entry:<br />- `name` : Name of the firewall rule.<br />- `source_ranges` : (Optional) A list of strings containing the source IP ranges to be allowed on the firewall rule.<br />- `source_tags` : (Optional) A list of strings containing the source network tags to be allowed on the firewall rule.<br />- `source_service_accounts` : (Optional) A list of strings containg the source servce accounts to be allowed on the firewall rule.<br />- `target_service_accounts` : (Optional) A list of strings containing the service accounts for which the firewall rule applies to.<br />- `target_tags` : (Optional) A list of strings containing the network tags for which the firewall rule applies to. <br />- `allowed_protocol` : The protocol type to match in the firewall rule. Possible values are: `tcp`, `udp`, `icmp`, `esp`, `ah`, `sctp`, `ipip`, `all`.<br />- `ports` : A list of strings containing TCP or UDP port numbers to match in the firewall rule. This type of setting can only be configured if allowing TCP and UDP as protocols.<br />- `priority` : (Optional) A priority value for the firewall rule. The lower the number - the more preferred the rule is.<br />- `log_metadata` : (Optional) This field denotes whether to include or exclude metadata for firewall logs. Possible values are: `EXCLUDE_ALL_METADATA`, `INCLUDE_ALL_METADATA`.<br /><br />Example :<pre>firewall\_rules = \{<br />  firewall-rule-1 = \{<br />    name = "first-rule"<br />    source\_ranges = ["10.10.10.0/24", "1.1.1.0/24"]<br />    priority = "2000"<br />    target\_tags = ["vmseries-firewalls"]<br />    allowed\_protocol = "TCP"<br />    allowed\_ports = ["443", "22"]<br />  \}<br />\}</pre> | <pre>map(object(\{<br />    name                    = string<br />    source\_ranges           = optional(list(string))<br />    source\_tags             = optional(list(string))<br />    source\_service\_accounts = optional(list(string))<br />    allowed\_protocol        = string<br />    allowed\_ports           = list(string)<br />    priority                = optional(string)<br />    target\_service\_accounts = optional(list(string))<br />    target\_tags             = optional(list(string))<br />    log\_metadata            = optional(string)<br />  \}))</pre> | `\{\}` | no |
| <a name="input_mtu"></a> [mtu](#input\_mtu) | MTU value for VPC Network. Acceptable values are between 1300 and 8896. | `number` | `1460` | no |
| <a name="input_name"></a> [name](#input\_name) | The name of the created or already existing VPC Network. | `string` | n/a | yes |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | Project in which to create or look for VPCs and subnets | `string` | `null` | no |
| <a name="input_routing_mode"></a> [routing\_mode](#input\_routing\_mode) | Type of network-wide routing mode to use. Possible types are: REGIONAL and GLOBAL.<br />REGIONAL routing mode will set the cloud routers to only advertise subnetworks within the same region as the router.<br />GLOBAL routing mode will set the cloud routers to advertise all the subnetworks that belong to this network. | `string` | `"REGIONAL"` | no |
| <a name="input_subnetworks"></a> [subnetworks](#input\_subnetworks) | A map containing subnetworks configuration. Subnets can belong to different regions.<br />List of available attributes of each subnetwork entry:<br />- `name` : Name of the subnetwork.<br />- `create_subnetwork` : Boolean value to control the creation or reading of the subnetwork. If set to `true` - this will create the subnetwork. If set to `false` - this will read a subnet with provided information.<br />- `ip_cidr_range` : A string that contains the subnetwork to create. Only IPv4 format is supported.<br />- `region` : Region where to configure or import the subnet.<br /><br />Example:<pre>subnetworks = \{<br />  my-sub = \{<br />    name = "my-sub"<br />    create\_subnetwork = true<br />    ip\_cidr\_range = "192.168.0.0/24"<br />    region = "us-east1"<br />  \}<br />\}</pre> | <pre>map(object(\{<br />    name              = string<br />    create\_subnetwork = optional(bool, true)<br />    ip\_cidr\_range     = string<br />    region            = string<br />  \}))</pre> | `\{\}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_network"></a> [network](#output\_network) | Created or read network attributes. |
| <a name="output_subnetworks"></a> [subnetworks](#output\_subnetworks) | Map containing key, value pairs of created or read subnetwork attributes. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->