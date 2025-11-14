---
hide_title: true
id: ngfw_metrics
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
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Ngfw Metrics
title: Palo Alto Networks Metrics Infrastructure Module for Azure
---

# Palo Alto Networks Metrics Infrastructure Module for Azure

A Terraform module deploying Azure Application Insights (Log Analytics Workspace mode).

The main purpose of this module is to deploy Application Insights that can be used to monitor internal PAN-OS metrics.
It will work with both a standalone Next Generation Firewall and ones deployed inside a Virtual Machine Scale Set.
In both situations the instrumentation key for the Application Insights has to be provided in the firewall's configuration.
For more information please refer to [documentation](https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/set-up-the-vm-series-firewall-on-azure/enable-azure-application-insights-on-the-vm-series-firewall).

**Note!** \
This module supports only the workspace mode - Azure support for classic Application Insights mode will end on Feb 29th 2024.

This module is designed to deploy (or source) a single Log Analytics Workspace and to create one or more Application Insights
instances connected to that workspace.

**Important!** \
The metrics gathered within a single Azure Application Insights instance cannot be split back to obtain a result for a single
firewall. Thus, for example, if three firewalls use the same Instrumentation Key and report their respective session
utilizations as 90%, 20%, 10%, it is possible to see in Azure the average of 40%, the sum of 120%, the max of 90%, but it is
**not possible** to know which of the firewalls reported the 90% utilization.
Therefore each firewall (or a Scale Set) should send the metrics to a dedicated Application Insights instance.

Since upgrade to provider 3.x, when destroying infrastructure a resource is being left behind:
`microsoft.alertsmanagement/smartdetectoralertrules`. This resource is not present in the state nor code, it's being created by
Azure automatically and therefore it prevents Resource Group deletion.
A workaround is to set the following provider configuration:

```hcl
provider "azurerm" {
  features {
    resource_group {
      prevent_deletion_if_contains_resources = false
    }
  }
}
```

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/ngfw_metrics) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/ngfw_metrics)

## Usage

The following snippet deploys Log Analytics Workspace and two Application Insights instances (using defaults where possible):

```hcl
module "ngfw_metrics" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/ngfw_metrics"

  name                = "ngfw-law"
  resource_group_name = "ngfw-rg"
  region              = "West US"

  application_insights = {
    ai1 = { name = "fw1-ai" }
    ai2 = { name = "fw2-ai" }
  }
}
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 4.0

### Providers

- `azurerm`, version: ~> 4.0



### Resources

- `application_insights` (managed)
- `log_analytics_workspace` (managed)
- `log_analytics_workspace` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Azure Log Analytics Workspace.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`application_insights`](#application_insights) | `map` | A map defining Application Insights instances.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`create_workspace`](#create_workspace) | `bool` | Controls creation or sourcing of a Log Analytics Workspace.
[`log_analytics_workspace`](#log_analytics_workspace) | `object` | Configuration of the log analytics workspace.

### Outputs

Name |  Description
--- | ---
`metrics_instrumentation_keys` | The Instrumentation Key of the Application Insights instances.
`application_insights_ids` | An Azure ID of the Application Insights instances.

### Required Inputs details

#### name

The name of the Azure Log Analytics Workspace.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### resource_group_name

The name of the Resource Group to use.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### region

The name of the Azure region to deploy the resources in.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### application_insights

A map defining Application Insights instances.

Following properties are available:

- `name`                      - (`string`, required) the name of the Application Insights instance.
- `resource_group_name`       - (`string`, optional, defaults to `var.resource_group_name`) name of a Resource Group that will
                                host the Application Insights instance.

  This property can be handy in case one would like to use an existing Log Analytics Workspace, but for whatever reason the
  Application Insights instances should be created in a separate Resource Group (due to limited access for example).

- `metrics_retention_in_days` - (`number`, optional, defaults to `var.log_analytics_workspace.metrics_retention_in_days`)
                                Application Insights data retention in days, possible values are between 30 and 730.


Type: 

```hcl
map(object({
    name                      = string
    resource_group_name       = optional(string)
    metrics_retention_in_days = optional(number)
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### create_workspace

Controls creation or sourcing of a Log Analytics Workspace.

Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### log_analytics_workspace

Configuration of the log analytics workspace.

Following properties are available:

- `sku`                       - (`string`, optional, defaults to Azure defaults) the SKU of the Log Analytics Workspace.
    
  As of API version `2018-04-03` the Azure default value is `PerGB2018`, other possible values are:
  `Free`, `PerNode`, `Premium`, `Standard`, `Standalone`, `Unlimited`, `CapacityReservation`.

- `metrics_retention_in_days` - (`number`, optional, defaults to Azure defaults) workspace data retention in days, 
                                possible values are between 30 and 730.


Type: 

```hcl
object({
    sku                       = optional(string)
    metrics_retention_in_days = optional(number)
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>