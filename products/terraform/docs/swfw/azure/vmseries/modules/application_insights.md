---
hide_title: true
id: application_insights
keywords:
- pan-os
- panos
- firewall
- configuration
- terraform
- vmseries
- vm-series
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Application Insights
title: Palo Alto Networks Application Insights Module for Azure
---

# Palo Alto Networks Application Insights Module for Azure

A Terraform module for deploying a Application Insights in Azure cloud.

Azure AI can be used to gather metric from Palo Alto's VMSeries firewall. This can be done for both a standalone firewall as for a Scale Set deployment.

In both situations the instrumentation key for the Application Insights has to be provided in the firewall's configuration. For more information please refer to [documentation](https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/set-up-the-vm-series-firewall-on-azure/enable-azure-application-insights-on-the-vm-series-firewall).

**NOTICE**

* Azure support for classic Application Insights mode will end on Feb 29th 2024. It's already not available in some of the new regions. This module by default deploys Application Insights in Workspace mode.

* The metrics gathered within a single Azure Application Insights instance provided by the module, cannot be split back to obtain a result for a single firewall. Thus for example if three firewalls use the same Instrumentation Key and report their respective session utilizations as 90%, 20%, 10%, it is possible to see in Azure the average of 40%, the sum of 120%, the max of 90%, but it is *not possible* to know which of the firewalls reported the 90% utilization.

* Since upgrade to provider 3.x, when destroying infrastructure a resource is being left behind: `microsoft.alertsmanagement/smartdetectoralertrules`. This resource is not present in the state nor code, it's being created by Azure automatically and therefore it prevents resource group deletion. A workaround is to set the following provider configuration:

      provider "azurerm" {
        features {
          resource_group {
            prevent_deletion_if_contains_resources = false
          }
        }
      }

## Usage

The following snippet deploys Application Insights in Workspace mode, setting the retention to 1 year.

```hcl
module "ai" {
  source = "../../modules/application_insights"

  name                      = "vmseries-ai
  metrics_retention_in_days = 365
  location                  = "West US"
  resource_group_name       = "vmseries-rg"
}
```  

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |
| <a name="requirement_azurerm"></a> [azurerm](#requirement\_azurerm) | ~> 3.25 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | ~> 3.25 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [azurerm_application_insights.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_insights) | resource |
| [azurerm_log_analytics_workspace.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/log_analytics_workspace) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name"></a> [name](#input\_name) | Name of the Application Insights instance. | `string` | n/a | yes |
| <a name="input_workspace_mode"></a> [workspace\_mode](#input\_workspace\_mode) | Application Insights mode. If `true` (default), the 'Workspace-based' mode is used. With `false`, the mode is set to legacy 'Classic'.<br /><br />NOTICE. Azure support for classic Application Insights mode will end on Feb 29th 2024. It's already not available in some of the new regions. | `bool` | `true` | no |
| <a name="input_workspace_name"></a> [workspace\_name](#input\_workspace\_name) | The name of the Log Analytics workspace. Can be `null`, in which case a default name is auto-generated. | `string` | `null` | no |
| <a name="input_workspace_sku"></a> [workspace\_sku](#input\_workspace\_sku) | Azure Log Analytics Workspace mode SKU. For more information refer to [Microsoft's documentation](https://learn.microsoft.com/en-us/azure/azure-monitor//usage-estimated-costs#moving-to-the-new-pricing-model). | `string` | `"PerGB2018"` | no |
| <a name="input_metrics_retention_in_days"></a> [metrics\_retention\_in\_days](#input\_metrics\_retention\_in\_days) | Specifies the retention period in days. Possible values are 0, 30, 60, 90, 120, 180, 270, 365, 550 or 730. Azure defaults is 90. | `number` | `null` | no |
| <a name="input_location"></a> [location](#input\_location) | A name of a region in which the resources will be creatied. | `string` | n/a | yes |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | A name of an existing Resource Group. | `string` | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | A map of tags assigned to all resources created by this module. | `map(string)` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_metrics_instrumentation_key"></a> [metrics\_instrumentation\_key](#output\_metrics\_instrumentation\_key) | The Instrumentation Key of the created instance of Azure Application Insights. <br /><br />The instance is unused by default, but is ready to receive custom PAN-OS metrics from the firewalls. To use it, paste this Instrumentation Key into PAN-OS -> Device -> VM-Series -> Azure. |
| <a name="output_application_insights_id"></a> [application\_insights\_id](#output\_application\_insights\_id) | An Azure ID of the Application Insights resource created by this module. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->