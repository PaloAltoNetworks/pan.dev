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
- swfw
- software-firewalls
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

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/iam_service_account) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/iam_service_account)

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `google`, version: >= 4.54



### Resources

- `project_iam_member` (managed)
- `service_account` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`project_id`](#project_id) | `string` | ID of a project in which the service account will be created.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`service_account_id`](#service_account_id) | `string` | .
[`display_name`](#display_name) | `string` | .
[`roles`](#roles) | `set` | List of IAM role names, such as ["roles/compute.

### Outputs

Name |  Description
--- | ---
`email` | 

### Required Inputs details

#### project_id

ID of a project in which the service account will be created.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### service_account_id



Type: string

Default value: `The google_service_account.account_id of the created IAM account, unique string per project.`

<sup>[back to list](#modules-optional-inputs)</sup>

#### display_name



Type: string

Default value: `Palo Alto Networks Firewall Service Account`

<sup>[back to list](#modules-optional-inputs)</sup>

#### roles

List of IAM role names, such as ["roles/compute.viewer"] or ["project/A/roles/B"]. The default list is suitable for Palo Alto Networks Firewall to run and publish custom metrics to GCP Stackdriver.

Type: set(string)

Default value: `[roles/compute.networkViewer roles/logging.logWriter roles/monitoring.metricWriter roles/monitoring.viewer roles/viewer roles/stackdriver.accounts.viewer roles/stackdriver.resourceMetadata.writer]`

<sup>[back to list](#modules-optional-inputs)</sup>