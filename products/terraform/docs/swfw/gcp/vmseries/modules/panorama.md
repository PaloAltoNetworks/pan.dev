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

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `google`, version: >= 4.54



### Resources

- `compute_address` (managed)
- `compute_address` (managed)
- `compute_disk` (managed)
- `compute_instance` (managed)
- `compute_image` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`region`](#region) | `string` | Google Cloud region to deploy the resources into.
[`zone`](#zone) | `string` | Deployment area for Google Cloud resources within a region.
[`subnet`](#subnet) | `string` | A regional resource, defining a range of IPv4 addresses.
[`ssh_keys`](#ssh_keys) | `string` |   In order to connect via SSH to Panorama, provide your SSH public key here.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`project`](#project) | `string` | The ID of the project in which the resource belongs.
[`name`](#name) | `string` | Name of the Panorama instance.
[`private_static_ip`](#private_static_ip) | `string` |   The static private IP address for Panorama.
[`attach_public_ip`](#attach_public_ip) | `bool` | Determines if a Public IP should be assigned to Panorama.
[`public_static_ip`](#public_static_ip) | `string` | The static external IP address for Panorama instance.
[`log_disks`](#log_disks) | `list` | List of disks to create and attach to Panorama to store traffic logs.
[`machine_type`](#machine_type) | `string` | See the [Terraform manual](https://registry.
[`min_cpu_platform`](#min_cpu_platform) | `string` | See the [Terraform manual](https://registry.
[`deletion_protection`](#deletion_protection) | `bool` | Enable deletion protection on the instance.
[`labels`](#labels) | `map` | See the [Terraform manual](https://registry.
[`tags`](#tags) | `list` | See the [Terraform manual](https://registry.
[`disk_type`](#disk_type) | `string` | Type of boot disk.
[`disk_size`](#disk_size) | `string` | Size of boot disk in gigabytes.
[`panorama_version`](#panorama_version) | `string` |   Panorama version - based on the name of the Panorama public image - allows to specify which Panorama version will be deployed.
[`custom_image`](#custom_image) | `string` | Custom image for your Panorama instances.
[`metadata`](#metadata) | `map` | See the [Terraform manual](https://registry.
[`service_account`](#service_account) | `string` | IAM Service Account for running Panorama instance (just the email).
[`scopes`](#scopes) | `list` | Access scopes for the compute instance - both OAuth2 URLs and gcloud short names are supported.

### Outputs

Name |  Description
--- | ---
`panorama_public_ip` | Private IP address of the Panorama instance.
`panorama_private_ip` | Public IP address of the Panorama instance.

### Required Inputs details

#### region

Google Cloud region to deploy the resources into.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### zone

Deployment area for Google Cloud resources within a region.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### subnet

A regional resource, defining a range of IPv4 addresses. In Google Cloud, the terms subnet and subnetwork are synonymous.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### ssh_keys

  In order to connect via SSH to Panorama, provide your SSH public key here.
  Remember to add the `admin` prefix before you insert your public SSH key.
  More than one key can be added.

  Example:
  `ssh_keys = "admin:ssh-rsa AAAAB4NzaC5yc9EAACABBACBgQDAcjYw6xa2zUZ6reqHqDp9bYDLTu7Rnk5Sa3hthIsIsFaKenFLe4w3mm5eF3ebsfAAnuzI9ua9g7aB/ThIsIsAlSoFaKeN2VhUMDmlBYO5m1D4ip6eugS6uM="`


Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### project

The ID of the project in which the resource belongs. If it is not provided, the provider project is used.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### name

Name of the Panorama instance.

Type: string

Default value: `panorama`

<sup>[back to list](#modules-optional-inputs)</sup>

#### private_static_ip

  The static private IP address for Panorama. Only IPv4 is supported. An address may only be specified for INTERNAL address types.
  The IP address must be inside the specified subnetwork, if any. Set by the API if undefined.


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### attach_public_ip

Determines if a Public IP should be assigned to Panorama. Set by the API if the `public_static_ip` variable is not defined.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### public_static_ip

The static external IP address for Panorama instance. Only IPv4 is supported. Set by the API if undefined.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### log_disks

List of disks to create and attach to Panorama to store traffic logs.
Available options:
- `name`              (Required) Name of the resource. The name must be 1-63 characters long, and comply with [`RFC1035`](https://datatracker.ietf.org/doc/html/rfc1035).
- `type`              (Optional) Disk type resource describing which disk type to use to create the disk. For available options, check the providers [documentation](https://cloud.google.com/compute/docs/disks#disk-types).
- `size`              (Optional) Size of the disk for Panorama logs (Gigabytes).

Example:
```
log_disks = [
  {
    name = "example-disk-1"
    type = "pd-ssd"
    size = "2000"
  },
  {
    name = "example-disk-2"
    type = "pd-ssd"
    size = "3000"
  },
]
```


Type: list

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### machine_type

See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance)

Type: string

Default value: `n1-standard-16`

<sup>[back to list](#modules-optional-inputs)</sup>

#### min_cpu_platform

See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance)

Type: string

Default value: `Intel Broadwell`

<sup>[back to list](#modules-optional-inputs)</sup>

#### deletion_protection

Enable deletion protection on the instance.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### labels

See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance)

Type: map(any)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### tags

See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance)

Type: list(string)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### disk_type

Type of boot disk. For available options, check the providers [documentation](https://cloud.google.com/compute/docs/disks#disk-types).

Type: string

Default value: `pd-ssd`

<sup>[back to list](#modules-optional-inputs)</sup>

#### disk_size

Size of boot disk in gigabytes. Default is the same as the OS image.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### panorama_version

  Panorama version - based on the name of the Panorama public image - allows to specify which Panorama version will be deployed.
  For more details regarding available Panorama versions in the Google Cloud Platform, please run the following command:
  `gcloud compute images list --filter="name ~ .*panorama.*" --project paloaltonetworksgcp-public --no-standard-images`


Type: string

Default value: `panorama-byol-1000`

<sup>[back to list](#modules-optional-inputs)</sup>

#### custom_image

Custom image for your Panorama instances. Custom images are available only to your Cloud project. 
You can create a custom image from boot disks and other images. 
For more information, please check the provider [documentation](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance#image)
as well as the [Panorama Administrator's Guide](https://docs.paloaltonetworks.com/panorama/10-2/panorama-admin/set-up-panorama/set-up-the-panorama-virtual-appliance/install-the-panorama-virtual-appliance/install-panorama-on-gcp.html).
  
If a `custom_image` is not specified, `image_project` and `image_family` are used to determine a Public image to use for Panorama.


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### metadata

See the [Terraform manual](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_instance)

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### service_account

IAM Service Account for running Panorama instance (just the email)

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### scopes

Access scopes for the compute instance - both OAuth2 URLs and gcloud short names are supported

Type: list(string)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>