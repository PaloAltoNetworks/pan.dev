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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: VPC
title: VPC Networks Module for GCP
---

# VPC Networks Module for GCP

The module that creates networks and subnetworks on GCP.

It is primarily intended for **Terraform 0.12.x** users, because it offers possibility to conditionally handle either new or pre-existing
networks/subnetworks without changing the source code. It is useful for 0.12 which doesn't allow conditional module instantiation.

This module is not strictly required for constructing inputs to be passed to other modules (including to vmseries or to autoscale modules).
Any existing networks/subnetworks can work equally well, independent on how they were created.

For Terraform 0.13+, a viable alternative is to use [Goggle-authored Terraform modules](https://registry.terraform.io/modules/terraform-google-modules/network)
and employ `for_each` or `count` parameters when needed.

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |
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
| <a name="input_allowed_ports"></a> [allowed\_ports](#input\_allowed\_ports) | A list of ports to pass for the `networks` entries that do not have their own `allowed_ports` attribute. For example ["22", "443"]. Can also include ranges, for example ["80", "8080-8999"]. Empty list means to allow all. | `list(string)` | `[]` | no |
| <a name="input_allowed_protocol"></a> [allowed\_protocol](#input\_allowed\_protocol) | A protocol (TCP or UDP) to pass for the `networks` entries that do not have their own `allowed_protocol` attribute. | `string` | `"all"` | no |
| <a name="input_networks"></a> [networks](#input\_networks) | Map of networks, a minimal example:<pre>{<br />  "my-vpc" = {<br />    name            = "my-vpc"<br />    subnetwork\_name = "my-subnet"<br />    ip\_cidr\_range   = "192.168.1.0/24"<br />  }<br />}</pre>An advanced example:<pre>{<br />  "my-vpc" = {<br />    name            = "my-vpc"<br />    subnetwork\_name = "my-subnet"<br />    ip\_cidr\_range   = "192.168.1.0/24"<br />    allowed\_sources = ["209.85.152.0/22"]<br />    log\_metadata    = "INCLUDE\_ALL\_METADATA"<br />    mtu             = 1500<br />  }<br />}</pre>Full example:<pre>{<br />  "my-vpc" = {<br />    name             = "my-vpc"<br />    subnetwork\_name  = "my-subnet"<br />    ip\_cidr\_range    = "192.168.1.0/24"<br />    allowed\_sources  = ["10.0.0.0/8", "98.98.98.0/28"]<br />    allowed\_protocol = "UDP"<br />    allowed\_ports    = ["53", "123-125"]<br />    log\_metadata     = "EXCLUDE\_ALL\_METADATA"<br /><br />    delete\_default\_routes\_on\_create = true<br />  }<br />  "imported-from-hostproject" = {<br />    name              = "existing-core-vpc"<br />    subnetwork\_name   = "existing-subnet"<br />    create\_network    = false<br />    create\_subnetwork = false<br />    host\_project\_id   = "my-core-project-id"<br />  }<br />}</pre>Terraform 0.12.x and 0.13.x limitation: the existing networks/subnetworks names should be static strings and not come from other `resource` objects.<br />It is allowed from Terraform 0.14 onwards. | `any` | n/a | yes |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | Project in which to create or look for VPCs and subnets | `string` | `null` | no |
| <a name="input_region"></a> [region](#input\_region) | GCP region for all the created subnetworks and for all the imported subnetworks. Set to null to use a default provider's region.<br /><br />To add subnetworks with another region use a separate instance of this module (and specify `create_network=false` to avoid creating a duplicate network). | `string` | `null` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_networks"></a> [networks](#output\_networks) | n/a |
| <a name="output_networks_by_key"></a> [networks\_by\_key](#output\_networks\_by\_key) | Map with network objects corresponding to input keys (or index if list was provided) of `networks` variable. |
| <a name="output_subnetworks"></a> [subnetworks](#output\_subnetworks) | n/a |
| <a name="output_subnetworks_by_key"></a> [subnetworks\_by\_key](#output\_subnetworks\_by\_key) | Map with subnetwork objects corresponding to input key (or index if list was provided) of `networks` variable. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->