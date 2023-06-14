---
hide_title: true
id: vmss
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
sidebar_label: Vmss
title: Palo Alto Networks VMSS Module for Azure
---

# Palo Alto Networks VMSS Module for Azure

A terraform module for VMSS VM-Series firewalls in Azure.

**NOTE** \
Due to [lack of proper method of running health probes](./main.tf#L21-54) against Pan-OS based VMs running in a Scale Set, the `upgrade_mode` property is hardcoded to `Manual`. For this mode to actually work the `roll_instances_when_required` provider feature has to be also configured and set to `false`. Unfortunately this cannot be set in the `vmss` module, it has to be specified in the **root** module.

Therefore, when using this module please add the following `provider` block to your code:

```hcl
provider "azurerm" {
  features {
    virtual_machine_scale_set {
      roll_instances_when_required = false
    }
  }
}
```

## Usage

```hcl
module "vmss" {
  source = "github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules//modules/vmss"

  location                  = "Australia Central"
  name_prefix               = "pan"
  password                  = "your-password"
  subnet_mgmt               = azurerm_subnet.subnet_mgmt
  subnet_private            = azurerm_subnet.subnet_private
  subnet_public             = module.networks.subnet_public
  bootstrap_storage_account = module.panorama.bootstrap_storage_account
  bootstrap_share_name      = "inboundsharename"
  vhd_container             = "vhd-storage-container-id"
  lb_backend_pool_id        = "private-backend-pool-id"
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
| [azurerm_linux_virtual_machine_scale_set.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set) | resource |
| [azurerm_monitor_autoscale_setting.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/monitor_autoscale_setting) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name"></a> [name](#input\_name) | Name of the created scale set. | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | Region to install VM-Series and dependencies. | `string` | n/a | yes |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the existing resource group where to place the resources created. | `string` | n/a | yes |
| <a name="input_vm_size"></a> [vm\_size](#input\_vm\_size) | Azure VM size (type) to be created. Consult the *VM-Series Deployment Guide* as only a few selected sizes are supported. | `string` | `"Standard_D3_v2"` | no |
| <a name="input_interfaces"></a> [interfaces](#input\_interfaces) | List of the network interface specifications.<br /><br />NOTICE. The ORDER in which you specify the interfaces DOES MATTER.<br />Interfaces will be attached to VM in the order you define here, therefore:<br />* The first should be the management interface, which does not participate in data filtering.<br />* The remaining ones are the dataplane interfaces.<br /><br />Options for an interface object:<br />- `name`                     - (required\|string) Interface name.<br />- `subnet_id`                - (required\|string) Identifier of an existing subnet to create interface in.<br />- `create_pip`               - (optional\|bool) If true, create a public IP for the interface<br />- `lb_backend_pool_ids`      - (optional\|list(string)) A list of identifiers of an existing Load Balancer backend pools to associate interface with.<br />- `appgw_backend_pool_ids`   - (optional\|list(String)) A list of identifier of the Application Gateway backend pools to associate interface with.<br />- `pip_domain_name_label`    - (optional\|string) The Prefix which should be used for the Domain Name Label for each Virtual Machine Instance.<br /><br />Example:<pre>[<br />  {<br />    name       = "management"<br />    subnet\_id  = azurerm\_subnet.my\_mgmt\_subnet.id<br />    create\_pip = true<br />  },<br />  {<br />    name      = "private"<br />    subnet\_id = azurerm\_subnet.my\_priv\_subnet.id<br />  },<br />  {<br />    name                = "public"<br />    subnet\_id           = azurerm\_subnet.my\_pub\_subnet.id<br />    lb\_backend\_pool\_ids = [azurerm\_lb\_backend\_address\_pool.lb\_backend.id]<br />  }<br />]</pre> | `list(any)` | n/a | yes |
| <a name="input_username"></a> [username](#input\_username) | Initial administrative username to use for VM-Series. | `string` | `"panadmin"` | no |
| <a name="input_password"></a> [password](#input\_password) | Initial administrative password to use for VM-Series. | `string` | n/a | yes |
| <a name="input_disable_password_authentication"></a> [disable\_password\_authentication](#input\_disable\_password\_authentication) | If true, disables password-based authentication on VM-Series instances. | `bool` | `false` | no |
| <a name="input_encryption_at_host_enabled"></a> [encryption\_at\_host\_enabled](#input\_encryption\_at\_host\_enabled) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set#encryption_at_host_enabled). | `bool` | `null` | no |
| <a name="input_overprovision"></a> [overprovision](#input\_overprovision) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set). | `bool` | `false` | no |
| <a name="input_platform_fault_domain_count"></a> [platform\_fault\_domain\_count](#input\_platform\_fault\_domain\_count) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set). | `number` | `null` | no |
| <a name="input_proximity_placement_group_id"></a> [proximity\_placement\_group\_id](#input\_proximity\_placement\_group\_id) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set). | `string` | `null` | no |
| <a name="input_scale_in_policy"></a> [scale\_in\_policy](#input\_scale\_in\_policy) | Which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled in. Either:<br /><br />- `Default`, which, baring the availability zone usage and fault domain usage, deletes VM with the highest-numbered instance id,<br />- `NewestVM`, which, baring the availability zone usage, deletes VM with the newest creation time,<br />- `OldestVM`, which, baring the availability zone usage, deletes VM with the oldest creation time. | `string` | `null` | no |
| <a name="input_scale_in_force_deletion"></a> [scale\_in\_force\_deletion](#input\_scale\_in\_force\_deletion) | When set to `true` will force delete machines selected for removal by the `scale_in_policy`. | `bool` | `false` | no |
| <a name="input_single_placement_group"></a> [single\_placement\_group](#input\_single\_placement\_group) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set). | `bool` | `null` | no |
| <a name="input_zone_balance"></a> [zone\_balance](#input\_zone\_balance) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set). | `bool` | `true` | no |
| <a name="input_zones"></a> [zones](#input\_zones) | The availability zones to use, for example `["1", "2", "3"]`. If an empty list, no Availability Zones are used: `[]`. | `list(string)` | <pre>[<br />  "1",<br />  "2",<br />  "3"<br />]</pre> | no |
| <a name="input_storage_account_type"></a> [storage\_account\_type](#input\_storage\_account\_type) | Type of Managed Disk which should be created. Possible values are `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`. The `Premium_LRS` works only for selected `vm_size` values, details in Azure docs. | `string` | `"StandardSSD_LRS"` | no |
| <a name="input_disk_encryption_set_id"></a> [disk\_encryption\_set\_id](#input\_disk\_encryption\_set\_id) | The ID of the Disk Encryption Set which should be used to encrypt this Data Disk. | `string` | `null` | no |
| <a name="input_use_custom_image"></a> [use\_custom\_image](#input\_use\_custom\_image) | If true, use `custom_image_id` and ignore the inputs `username`, `password`, `img_version`, `img_publisher`, `img_offer`, `img_sku` (all these are used only for published images, not custom ones). | `bool` | `false` | no |
| <a name="input_custom_image_id"></a> [custom\_image\_id](#input\_custom\_image\_id) | Absolute ID of your own Custom Image to be used for creating new VM-Series. The Custom Image is expected to contain PAN-OS software. | `string` | `null` | no |
| <a name="input_enable_plan"></a> [enable\_plan](#input\_enable\_plan) | Enable usage of the Offer/Plan on Azure Marketplace. Even plan sku "byol", which means "bring your own license", still requires accepting on the Marketplace (as of 2021). Can be set to `false` when using a custom image. | `bool` | `true` | no |
| <a name="input_img_publisher"></a> [img\_publisher](#input\_img\_publisher) | The Azure Publisher identifier for a image which should be deployed. | `string` | `"paloaltonetworks"` | no |
| <a name="input_img_offer"></a> [img\_offer](#input\_img\_offer) | The Azure Offer identifier corresponding to a published image. For `img_version` 9.1.1 or above, use "vmseries-flex"; for 9.1.0 or below use "vmseries1". | `string` | `"vmseries-flex"` | no |
| <a name="input_img_sku"></a> [img\_sku](#input\_img\_sku) | VM-Series SKU - list available with `az vm image list -o table --all --publisher paloaltonetworks` | `string` | `"byol"` | no |
| <a name="input_img_version"></a> [img\_version](#input\_img\_version) | VM-Series PAN-OS version - list available for a default `img_offer` with `az vm image list -o table --publisher paloaltonetworks --offer vmseries-flex --all` | `string` | n/a | yes |
| <a name="input_accelerated_networking"></a> [accelerated\_networking](#input\_accelerated\_networking) | If true, enable Azure accelerated networking (SR-IOV) for all dataplane network interfaces. [Requires](https://docs.paloaltonetworks.com/pan-os/9-0/pan-os-new-features/virtualization-features/support-for-azure-accelerated-networking-sriov) PAN-OS 9.0 or higher. The PAN-OS management interface (nic0) is never accelerated, whether this variable is true or false. | `bool` | `true` | no |
| <a name="input_application_insights_id"></a> [application\_insights\_id](#input\_application\_insights\_id) | An ID of Application Insights instance that should be used to provide metrics for autoscaling.<br /><br />**Note**, to avoid false positives this should be an instance dedicated to this VMSS.<pre></pre> | `string` | `null` | no |
| <a name="input_autoscale_count_default"></a> [autoscale\_count\_default](#input\_autoscale\_count\_default) | The minimum number of instances that should be present in the scale set when the autoscaling engine cannot read the metrics or is otherwise unable to compare the metrics to the thresholds. | `number` | `2` | no |
| <a name="input_autoscale_count_minimum"></a> [autoscale\_count\_minimum](#input\_autoscale\_count\_minimum) | The minimum number of instances that should be present in the scale set. | `number` | `2` | no |
| <a name="input_autoscale_count_maximum"></a> [autoscale\_count\_maximum](#input\_autoscale\_count\_maximum) | The maximum number of instances that should be present in the scale set. | `number` | `5` | no |
| <a name="input_autoscale_notification_emails"></a> [autoscale\_notification\_emails](#input\_autoscale\_notification\_emails) | List of email addresses to notify about autoscaling events. | `list(string)` | `[]` | no |
| <a name="input_autoscale_webhooks_uris"></a> [autoscale\_webhooks\_uris](#input\_autoscale\_webhooks\_uris) | Map where each key is an arbitrary identifier and each value is a webhook URI. The URIs receive autoscaling events. | `map(string)` | `{}` | no |
| <a name="input_autoscale_metrics"></a> [autoscale\_metrics](#input\_autoscale\_metrics) | Map of objects, where each key is the metric name to be used for autoscaling.<br />Each value of the map has the attributes `scaleout_threshold` and `scalein_threshold`, which cause the instance count to grow by 1 when metrics are greater or equal, or decrease by 1 when lower or equal, respectively.<br />The thresholds are applied to results of metrics' aggregation over a time window.<br />Example:<pre>{<br />  "DataPlaneCPUUtilizationPct" = {<br />    scaleout\_threshold = 80<br />    scalein\_threshold  = 20<br />  }<br />  "panSessionUtilization" = {<br />    scaleout\_threshold = 80<br />    scalein\_threshold  = 20<br />  }<br />}</pre>Other possible metrics include panSessionActive, panSessionThroughputKbps, panSessionThroughputPps, DataPlanePacketBufferUtilization. | `map(any)` | `{}` | no |
| <a name="input_scaleout_statistic"></a> [scaleout\_statistic](#input\_scaleout\_statistic) | Aggregation to use within each minute (the time grain) for metrics coming from different virtual machines. Possible values are Average, Min and Max. | `string` | `"Max"` | no |
| <a name="input_scaleout_time_aggregation"></a> [scaleout\_time\_aggregation](#input\_scaleout\_time\_aggregation) | Specifies how the metric should be combined over the time `scaleout_window_minutes`. Possible values are Average, Count, Maximum, Minimum, Last and Total. | `string` | `"Maximum"` | no |
| <a name="input_scaleout_window_minutes"></a> [scaleout\_window\_minutes](#input\_scaleout\_window\_minutes) | This is amount of time in minutes that autoscale engine will look back for metrics. For example, 10 minutes means that every time autoscale runs,<br />it will query metrics for the past 10 minutes. This allows metrics to stabilize and avoids reacting to transient spikes.<br />Must be between 5 and 720 minutes. | `number` | `10` | no |
| <a name="input_scaleout_cooldown_minutes"></a> [scaleout\_cooldown\_minutes](#input\_scaleout\_cooldown\_minutes) | Azure only considers adding a VM after this number of minutes has passed since the last VM scaling action. It should be much higher than `scaleout_window_minutes`, to account both for the VM-Series spin-up time and for the subsequent metrics stabilization time. Must be between 1 and 10080 minutes. | `number` | `25` | no |
| <a name="input_scalein_statistic"></a> [scalein\_statistic](#input\_scalein\_statistic) | Aggregation to use within each minute (the time grain) for metrics coming from different virtual machines. Possible values are Average, Min and Max. | `string` | `"Max"` | no |
| <a name="input_scalein_time_aggregation"></a> [scalein\_time\_aggregation](#input\_scalein\_time\_aggregation) | Specifies how the metric should be combined over the time `scalein_window_minutes`. Possible values are Average, Count, Maximum, Minimum, Last and Total. | `string` | `"Maximum"` | no |
| <a name="input_scalein_window_minutes"></a> [scalein\_window\_minutes](#input\_scalein\_window\_minutes) | This is amount of time in minutes that autoscale engine will look back for metrics. For example, 10 minutes means that every time autoscale runs,<br />it will query metrics for the past 10 minutes. This allows metrics to stabilize and avoids reacting to transient spikes.<br />Must be between 5 and 720 minutes. | `number` | `15` | no |
| <a name="input_scalein_cooldown_minutes"></a> [scalein\_cooldown\_minutes](#input\_scalein\_cooldown\_minutes) | Azure only considers deleting a VM after this number of minutes has passed since the last VM scaling action. Should be higher or equal to `scalein_window_minutes`. Must be between 1 and 10080 minutes. | `number` | `2880` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Map of tags to use for all the created resources. | `map(string)` | `{}` | no |
| <a name="input_bootstrap_options"></a> [bootstrap\_options](#input\_bootstrap\_options) | Bootstrap options to pass to VM-Series instance.<br /><br />Proper syntax is a string of semicolon separated properties.<br />Example:<br />  bootstrap\_options = "type=dhcp-client;panorama-server=1.2.3.4"<br /><br />For more details on bootstrapping see documentation: https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components | `string` | `""` | no |
| <a name="input_diagnostics_storage_uri"></a> [diagnostics\_storage\_uri](#input\_diagnostics\_storage\_uri) | The storage account's blob endpoint to hold diagnostic files. | `string` | `null` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_scale_set_name"></a> [scale\_set\_name](#output\_scale\_set\_name) | Name of the created scale set. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->

## Custom Metrics

Firewalls can publish custom metrics (for example `panSessionUtilization`) to Azure Application Insights to improve the autoscaling.
This however requires a manual initialization: copy the outputs `metrics_instrumentation_key` and paste it into your
PAN-OS webUI -> Device -> VM-Series -> Azure. This module automatically
completes solely the Step 1 of the [official procedure](https://docs.paloaltonetworks.com/vm-series/10-0/vm-series-deployment/set-up-the-vm-series-firewall-on-azure/enable-azure-application-insights-on-the-vm-series-firewall.html).

If you manage the configuration from Panorama, this can be done in the same place, however the PAN-OS `VM-Series plugin` needs to be installed **on both** Panorama and VM-Series.

The metrics gathered within a single Azure Application Insights instance provided by the module, cannot be split to obtain
back a result for solely a single firewall. Thus for example if three firewalls use the same Instrumentation Key and report
their respective session utilizations as 90%, 20%, 10%, it is possible to see in Azure the average of 40%, the sum of 120%, the max of 90%, but it is *not possible* to know which of the firewalls reported the 90% utilization.