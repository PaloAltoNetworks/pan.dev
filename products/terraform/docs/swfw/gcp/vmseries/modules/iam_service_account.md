---
hide_title: true
id: iam_service_account
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
sidebar_label: IAM Service Account
title: IAM Service Account
---

# IAM Service Account

Create a dedicated IAM Service Account that will be used to run firewall instances.
This module is optional - even if you don't use it, firewalls run fine on the default Google Service Account.

The account produced by this module is intended to have minimal required permissions.

[Google Cloud Docs](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances#best_practices)

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
| [google_project_iam_member.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/project_iam_member) | resource |
| [google_service_account.this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/service_account) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_display_name"></a> [display\_name](#input\_display\_name) | n/a | `string` | `"Palo Alto Networks Firewall Service Account"` | no |
| <a name="input_project_id"></a> [project\_id](#input\_project\_id) | ID of a project in which the service account will be created. | `string` | n/a | yes |
| <a name="input_roles"></a> [roles](#input\_roles) | List of IAM role names, such as ["roles/compute.viewer"] or ["project/A/roles/B"]. The default list is suitable for Palo Alto Networks Firewall to run and publish custom metrics to GCP Stackdriver. | `set(string)` | <pre>[<br />  "roles/compute.networkViewer",<br />  "roles/logging.logWriter",<br />  "roles/monitoring.metricWriter",<br />  "roles/monitoring.viewer",<br />  "roles/viewer",<br />  "roles/stackdriver.accounts.viewer",<br />  "roles/stackdriver.resourceMetadata.writer"<br />]</pre> | no |
| <a name="input_service_account_id"></a> [service\_account\_id](#input\_service\_account\_id) | n/a | `string` | `"The google_service_account.account_id of the created IAM account, unique string per project."` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_email"></a> [email](#output\_email) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->