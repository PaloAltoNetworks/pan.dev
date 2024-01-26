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
| <a name="provider_random"></a> [random](#provider\_random) | n/a |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google_storage_bucket.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket) | resource |
| [google_storage_bucket_iam_member.member](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_iam_member) | resource |
| [google_storage_bucket_object.config_empty](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_object) | resource |
| [google_storage_bucket_object.content_empty](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_object) | resource |
| [google_storage_bucket_object.file](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_object) | resource |
| [google_storage_bucket_object.license_empty](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_object) | resource |
| [google_storage_bucket_object.software_empty](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_object) | resource |
| [random_string.randomstring](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/string) | resource |
| [google_compute_default_service_account.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/compute_default_service_account) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_bootstrap_files_dir"></a> [bootstrap\_files\_dir](#input\_bootstrap\_files\_dir) | Bootstrap file directory. If the variable has a value of `null` (default) - then it will not upload any other files other than the ones specified in the `files` variable.<br />More information can be found at https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/bootstrap-the-vm-series-firewall/bootstrap-package. | `string` | `null` | no |
| <a name="input_files"></a> [files](#input\_files) | Map of all files to copy to bucket. The keys are local paths, the values are remote paths. For example `{"dir/my.txt" = "config/init-cfg.txt"}` | `map(string)` | `{}` | no |
| <a name="input_folders"></a> [folders](#input\_folders) | List of folder paths that will be used to create dedicated boostrap package folder sets per firewall or firewall group (for example to distinguish configuration per region, per inbound/obew role, etc) within the created storage bucket.<br /><br />A default value (empty list) will result in the creation of a single bootstrap package folder set in the bucket top-level directory. | `list(any)` | `[]` | no |
| <a name="input_location"></a> [location](#input\_location) | Location in which the GCS Bucket will be deployed. Available locations can be found under https://cloud.google.com/storage/docs/locations. | `string` | n/a | yes |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | Prefix of the name of Google Cloud Storage bucket, followed by 10 random characters | `string` | `"paloaltonetworks-firewall-bootstrap-"` | no |
| <a name="input_service_account"></a> [service\_account](#input\_service\_account) | Optional IAM Service Account (just an email) that will be granted read-only access to this bucket | `string` | `null` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_bucket"></a> [bucket](#output\_bucket) | n/a |
| <a name="output_bucket_name"></a> [bucket\_name](#output\_bucket\_name) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->