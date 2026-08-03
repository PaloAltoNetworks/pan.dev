---
hide_title: true
id: bootstrap
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
sidebar_label: Bootstrap
title: Google Cloud Storage Bucket For Initial Boot Of Palo Alto Networks VM-Series
---

# Google Cloud Storage Bucket For Initial Boot Of Palo Alto Networks VM-Series

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/bootstrap) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/bootstrap)

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `random`
- `google`, version: >= 4.54



### Resources

- `storage_bucket` (managed)
- `storage_bucket_iam_member` (managed)
- `storage_bucket_object` (managed)
- `storage_bucket_object` (managed)
- `storage_bucket_object` (managed)
- `storage_bucket_object` (managed)
- `storage_bucket_object` (managed)
- `string` (managed)
- `compute_default_service_account` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`location`](#location) | `string` | Location in which the GCS Bucket will be deployed.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`name_prefix`](#name_prefix) | `string` | Prefix of the name of Google Cloud Storage bucket, followed by 10 random characters.
[`files`](#files) | `map` | Map of all files to copy to bucket.
[`service_account`](#service_account) | `string` | Optional IAM Service Account (just an email) that will be granted read-only access to this bucket.
[`bootstrap_files_dir`](#bootstrap_files_dir) | `string` | Bootstrap file directory.
[`folders`](#folders) | `list` | List of folder paths that will be used to create dedicated boostrap package folder sets per firewall or firewall group (for example to distinguish configuration per region, per inbound/obew role, etc) within the created storage bucket.

### Outputs

Name |  Description
--- | ---
`bucket_name` | 
`bucket` | 

### Required Inputs details

#### location

Location in which the GCS Bucket will be deployed. Available locations can be found under https://cloud.google.com/storage/docs/locations.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### name_prefix

Prefix of the name of Google Cloud Storage bucket, followed by 10 random characters

Type: string

Default value: `paloaltonetworks-firewall-bootstrap-`

<sup>[back to list](#modules-optional-inputs)</sup>

#### files

Map of all files to copy to bucket. The keys are local paths, the values are remote paths. For example `{"dir/my.txt" = "config/init-cfg.txt"}`

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### service_account

Optional IAM Service Account (just an email) that will be granted read-only access to this bucket

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### bootstrap_files_dir

Bootstrap file directory. If the variable has a value of `null` (default) - then it will not upload any other files other than the ones specified in the `files` variable.
More information can be found at https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/bootstrap-the-vm-series-firewall/bootstrap-package.


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### folders

List of folder paths that will be used to create dedicated boostrap package folder sets per firewall or firewall group (for example to distinguish configuration per region, per inbound/obew role, etc) within the created storage bucket.

A default value (empty list) will result in the creation of a single bootstrap package folder set in the bucket top-level directory.


Type: list(any)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>