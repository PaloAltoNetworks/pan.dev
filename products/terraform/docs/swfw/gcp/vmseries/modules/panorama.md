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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: Panorama
title: Palo Alto Networks Panorama Module for Google Clooud Platform
---

# Palo Alto Networks Panorama Module for Google Clooud Platform

A Terraform module for deploying a Panorama instance in the Google Cloud Platform.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/panorama) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/panorama)

## Usage

For usage, check the "examples" folder in the root of the repository. 

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
| [google_compute_address.private](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_address) | resource |
| [google_compute_address.public](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_address) | resource |
| [google_compute_disk.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_disk) | resource |
| [google_compute_instance.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance) | resource |
| [google_compute_image.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_image) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_attach_public_ip"></a> [attach\_public\_ip](#input\_attach\_public\_ip) | Determines if a Public IP should be assigned to Panorama. Set by the API if the `public_static_ip` variable is not defined. | `bool` | `false` | no |
| <a name="input_custom_image"></a> [custom\_image](#input\_custom\_image) | Custom image for your Panorama instances. Custom images are available only to your Cloud project. <br />You can create a custom image from boot disks and other images. <br />For more information, please check the provider [documentation](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#image)<br />as well as the [Panorama Administrator's Guide](https://docs.paloaltonetworks.com/panorama/10-2/panorama-admin/set-up-panorama/set-up-the-panorama-virtual-appliance/install-the-panorama-virtual-appliance/install-panorama-on-gcp.html).<br /><br />If a `custom_image` is not specified, `image_project` and `image_family` are used to determine a Public image to use for Panorama. | `string` | `null` | no |
| <a name="input_deletion_protection"></a> [deletion\_protection](#input\_deletion\_protection) | Enable deletion protection on the instance. | `bool` | `false` | no |
| <a name="input_disk_size"></a> [disk\_size](#input\_disk\_size) | Size of boot disk in gigabytes. Default is the same as the OS image. | `string` | `null` | no |
| <a name="input_disk_type"></a> [disk\_type](#input\_disk\_type) | Type of boot disk. For available options, check the providers [documentation](https://cloud.google.com/compute/docs/disks#disk-types). | `string` | `"pd-ssd"` | no |
| <a name="input_labels"></a> [labels](#input\_labels) | See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance) | `map(any)` | `{}` | no |
| <a name="input_log_disks"></a> [log\_disks](#input\_log\_disks) | List of disks to create and attach to Panorama to store traffic logs.<br />Available options:<br />- `name`              (Required) Name of the resource. The name must be 1-63 characters long, and comply with [`RFC1035`](https://datatracker.ietf.org/doc/html/rfc1035).<br />- `type`              (Optional) Disk type resource describing which disk type to use to create the disk. For available options, check the providers [documentation](https://cloud.google.com/compute/docs/disks#disk-types).<br />- `size`              (Optional) Size of the disk for Panorama logs (Gigabytes).<br /><br />Example:<pre>log\_disks = [<br />  {<br />    name = "example-disk-1"<br />    type = "pd-ssd"<br />    size = "2000"<br />  },<br />  {<br />    name = "example-disk-2"<br />    type = "pd-ssd"<br />    size = "3000"<br />  },<br />]</pre> | `list` | `[]` | no |
| <a name="input_machine_type"></a> [machine\_type](#input\_machine\_type) | See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance) | `string` | `"n1-standard-16"` | no |
| <a name="input_metadata"></a> [metadata](#input\_metadata) | See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance) | `map(string)` | `{}` | no |
| <a name="input_min_cpu_platform"></a> [min\_cpu\_platform](#input\_min\_cpu\_platform) | See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance) | `string` | `"Intel Broadwell"` | no |
| <a name="input_name"></a> [name](#input\_name) | Name of the Panorama instance. | `string` | `"panorama"` | no |
| <a name="input_panorama_version"></a> [panorama\_version](#input\_panorama\_version) | Panorama version - based on the name of the Panorama public image - allows to specify which Panorama version will be deployed.<br />  For more details regarding available Panorama versions in the Google Cloud Platform, please run the following command:<br />  `gcloud compute images list --filter="name ~ .*panorama.*" --project paloaltonetworksgcp-public --no-standard-images` | `string` | `"panorama-byol-1000"` | no |
| <a name="input_private_static_ip"></a> [private\_static\_ip](#input\_private\_static\_ip) | The static private IP address for Panorama. Only IPv4 is supported. An address may only be specified for INTERNAL address types.<br />  The IP address must be inside the specified subnetwork, if any. Set by the API if undefined. | `string` | `null` | no |
| <a name="input_project"></a> [project](#input\_project) | The ID of the project in which the resource belongs. If it is not provided, the provider project is used. | `string` | `null` | no |
| <a name="input_public_static_ip"></a> [public\_static\_ip](#input\_public\_static\_ip) | The static external IP address for Panorama instance. Only IPv4 is supported. Set by the API if undefined. | `string` | `null` | no |
| <a name="input_region"></a> [region](#input\_region) | Google Cloud region to deploy the resources into. | `string` | n/a | yes |
| <a name="input_scopes"></a> [scopes](#input\_scopes) | Access scopes for the compute instance - both OAuth2 URLs and gcloud short names are supported | `list(string)` | `[]` | no |
| <a name="input_service_account"></a> [service\_account](#input\_service\_account) | IAM Service Account for running Panorama instance (just the email) | `string` | `null` | no |
| <a name="input_ssh_keys"></a> [ssh\_keys](#input\_ssh\_keys) | In order to connect via SSH to Panorama, provide your SSH public key here.<br />  Remember to add the `admin` prefix before you insert your public SSH key.<br />  More than one key can be added.<br /><br />  Example:<br />  `ssh_keys = "admin:ssh-rsa AAAAB4NzaC5yc9EAACABBACBgQDAcjYw6xa2zUZ6reqHqDp9bYDLTu7Rnk5Sa3hthIsIsFaKenFLe4w3mm5eF3ebsfAAnuzI9ua9g7aB/ThIsIsAlSoFaKeN2VhUMDmlBYO5m1D4ip6eugS6uM="` | `string` | n/a | yes |
| <a name="input_subnet"></a> [subnet](#input\_subnet) | A regional resource, defining a range of IPv4 addresses. In Google Cloud, the terms subnet and subnetwork are synonymous. | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance) | `list(string)` | `[]` | no |
| <a name="input_zone"></a> [zone](#input\_zone) | Deployment area for Google Cloud resources within a region. | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_panorama_private_ip"></a> [panorama\_private\_ip](#output\_panorama\_private\_ip) | Public IP address of the Panorama instance. |
| <a name="output_panorama_public_ip"></a> [panorama\_public\_ip](#output\_panorama\_public\_ip) | Private IP address of the Panorama instance. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->