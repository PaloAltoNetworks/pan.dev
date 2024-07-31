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
- swfw
- software-firewalls
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Vmss
title: Palo Alto Networks VMSS Module for Azure
---

# Palo Alto Networks VMSS Module for Azure

A terraform module for deploying a Scale Set based on Next Generation Firewalls in Azure.

**NOTE!** \
Due to [lack of proper method of running health probes](#about-rolling-upgrades-and-auto-healing) against Pan-OS based VMs running
in a Scale Set, the `upgrade_mode` property is hardcoded to `Manual`.

For this mode to actually work the `roll_instances_when_required` provider feature has to be also configured and set to `false`.
Unfortunately this cannot be set in the `vmss` module, it has to be specified in the **root** module.

Therefore, when using this module please add the following `provider` block to your code:

```hcl
provider "azurerm" \{
  features \{
    virtual_machine_scale_set \{
      roll_instances_when_required = false
    \}
  \}
\}
```

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/vmss) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/vmss)

## About rolling upgrades and auto healing

Both, the rolling upgrade mode and auto healing target the 1<sup>st</sup> NIC on a Scale Set VM with a health probe to verify if
the VM is capable of handling traffic. Furthermore, for the health probe to work the 1<sup>st</sup> interface has to be added to
a Load Balancer.

This provides some obstacles when deploying such setup with Next Generation Firewall based Scale Set: most importantly the health
probe would target the management interface which could lead to false-positives. A management service can respond to TCP/Http
probes, while the data plane remains unconfigured. An easy solution would to bo configure an interface swap, unfortunately this
is not available in the Azure VM-Series image yet.

## Custom Metrics and Autoscaling

Firewalls can publish custom metrics (for example `panSessionUtilization`) to Azure Application Insights to improve the
autoscaling. This is a suggested way of setting up scaling rules as these metrics are gathered only from the data plane.

This however requires some additional steps:

- deploy the [`ngfw_metrics`](../ngfw_metrics) module, this module outputs two properties:
  - `application_insights_ids` - a map of IDs of the deployed Application Insights instances
  - `metrics_instrumentation_keys` - a map of instrumentation keys for the deployed Application Insights instances
- configure this module with the ID of the desired Application Insights instance, use the
  [`var.autoscaling_configuration.application_insights_id`](#autoscaling_configuration) property
- depending on the bootstrap method you use, configure the PAN-OS VM-Series plugins with the metrics instrumentation key
  belonging to the Application Insights instance of your choice.

The metrics gathered within a single Azure Application Insights instance provided by the module, cannot be split to obtain
back a result for solely a single firewall. Thus for example if three firewalls use the same Instrumentation Key and report
their respective session utilizations as 90%, 20%, 10%, it is possible to see in Azure the average of 40%, the sum of 120%,
the max of 90%, but it is *not possible* to know which of the firewalls reported the 90% utilization.

Therefore each Scale Set instance should be configured with a dedicated Application Insights instance.

## Usage

Below you can find a simple example deploying a Scale Set w/o autoscaling, using defaults where possible:

```hcl
module "vmss" \{
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/vmss"

<<<<<<< HEAD
  name                = "ngfw-vmss"
  resource_group_name = "hub-rg"
  region              = "West Europe"

  authentication = {
    username                        = "panadmin"
    password                        = "c0mpl1c@t3d"
    disable_password_authentication = true
  }
  vm_image_configuration = {
    img_version = "10.2.4"
  }
  scale_set_configuration = {}
  interfaces = [
    {
      name      = "managmeent"
      subnet_id = "management_subnet_ID_string"
    },
    {
      name                = "private"
      subnet_id           = "private_subnet_ID_string"
      lb_backend_pool_ids = ["LBI_backend_pool_ID"]
    },
    {
      name                   = "managmeent"
      subnet_id              = "management_subnet_ID_string"
      lb_backend_pool_ids    = ["LBE_backend_pool_ID"]
      appgw_backend_pool_ids = ["AppGW_backend_pool_ID"]
    }
  ]

  autoscaling_configuration = {}
  autoscaling_profiles      = []
}
=======
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
\}
>>>>>>> 940c9e38 (first pass at fixing all mdx compilation/syntax errors)
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 3.98

### Providers

- `azurerm`, version: ~> 3.98

### Modules
Name | Version | Source | Description
--- | --- | --- | ---
`ptd_time` | - | ./dt_string_converter | 

### Resources

- `linux_virtual_machine_scale_set` (managed)
- `monitor_autoscale_setting` (managed)

### Required Inputs

<<<<<<< HEAD
Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Azure Virtual Machine Scale Set.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`authentication`](#authentication) | `object` | A map defining authentication settings (including username and password).
[`image`](#image) | `object` | Basic Azure VM configuration.
[`interfaces`](#interfaces) | `list` | List of the network interfaces specifications.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`virtual_machine_scale_set`](#virtual_machine_scale_set) | `object` | Scale set parameters configuration.
[`autoscaling_configuration`](#autoscaling_configuration) | `object` | Autoscaling configuration common to all policies.
[`autoscaling_profiles`](#autoscaling_profiles) | `list` | A list defining autoscaling profiles.
=======
| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name"></a> [name](#input\_name) | Name of the created scale set. | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | Region to install VM-Series and dependencies. | `string` | n/a | yes |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the existing resource group where to place the resources created. | `string` | n/a | yes |
| <a name="input_vm_size"></a> [vm\_size](#input\_vm\_size) | Azure VM size (type) to be created. Consult the *VM-Series Deployment Guide* as only a few selected sizes are supported. | `string` | `"Standard_D3_v2"` | no |
| <a name="input_interfaces"></a> [interfaces](#input\_interfaces) | List of the network interface specifications.<br /><br />NOTICE. The ORDER in which you specify the interfaces DOES MATTER.<br />Interfaces will be attached to VM in the order you define here, therefore:<br />* The first should be the management interface, which does not participate in data filtering.<br />* The remaining ones are the dataplane interfaces.<br /><br />Options for an interface object:<br />- `name`                     - (required\|string) Interface name.<br />- `subnet_id`                - (required\|string) Identifier of an existing subnet to create interface in.<br />- `create_pip`               - (optional\|bool) If true, create a public IP for the interface<br />- `lb_backend_pool_ids`      - (optional\|list(string)) A list of identifiers of an existing Load Balancer backend pools to associate interface with.<br />- `appgw_backend_pool_ids`   - (optional\|list(String)) A list of identifier of the Application Gateway backend pools to associate interface with.<br />- `pip_domain_name_label`    - (optional\|string) The Prefix which should be used for the Domain Name Label for each Virtual Machine Instance.<br /><br />Example:<pre>[<br />  \{<br />    name       = "management"<br />    subnet\_id  = azurerm\_subnet.my\_mgmt\_subnet.id<br />    create\_pip = true<br />  \},<br />  \{<br />    name      = "private"<br />    subnet\_id = azurerm\_subnet.my\_priv\_subnet.id<br />  \},<br />  \{<br />    name                = "public"<br />    subnet\_id           = azurerm\_subnet.my\_pub\_subnet.id<br />    lb\_backend\_pool\_ids = [azurerm\_lb\_backend\_address\_pool.lb\_backend.id]<br />  \}<br />]</pre> | `any` | n/a | yes |
| <a name="input_username"></a> [username](#input\_username) | Initial administrative username to use for VM-Series. | `string` | `"panadmin"` | no |
| <a name="input_password"></a> [password](#input\_password) | Initial administrative password to use for VM-Series. | `string` | n/a | yes |
| <a name="input_ssh_keys"></a> [ssh\_keys](#input\_ssh\_keys) | A list of initial administrative SSH public keys that allow key-pair authentication. If not defined the `password` variable must be specified.<br /><br />This is a list of strings, so each item should be the actual public key value. If you would like to load them from files instead, following method is available:<pre>[<br />  file("/path/to/public/keys/key\_1.pub"),<br />  file("/path/to/public/keys/key\_2.pub")<br />]</pre> | `list(string)` | `[]` | no |
| <a name="input_disable_password_authentication"></a> [disable\_password\_authentication](#input\_disable\_password\_authentication) | If true, disables password-based authentication on VM-Series instances. | `bool` | `true` | no |
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
| <a name="input_autoscale_webhooks_uris"></a> [autoscale\_webhooks\_uris](#input\_autoscale\_webhooks\_uris) | Map where each key is an arbitrary identifier and each value is a webhook URI. The URIs receive autoscaling events. | `map(string)` | `\{\}` | no |
| <a name="input_autoscale_metrics"></a> [autoscale\_metrics](#input\_autoscale\_metrics) | Map of objects, where each key is the metric name to be used for autoscaling.<br />Each value of the map has the attributes `scaleout_threshold` and `scalein_threshold`, which cause the instance count to grow by 1 when metrics are greater or equal, or decrease by 1 when lower or equal, respectively.<br />The thresholds are applied to results of metrics' aggregation over a time window.<br />Example:<pre>\{<br />  "DataPlaneCPUUtilizationPct" = \{<br />    scaleout\_threshold = 80<br />    scalein\_threshold  = 20<br />  \}<br />  "panSessionUtilization" = \{<br />    scaleout\_threshold = 80<br />    scalein\_threshold  = 20<br />  \}<br />\}</pre>Other possible metrics include panSessionActive, panSessionThroughputKbps, panSessionThroughputPps, DataPlanePacketBufferUtilization. | `map(any)` | `\{\}` | no |
| <a name="input_scaleout_statistic"></a> [scaleout\_statistic](#input\_scaleout\_statistic) | Aggregation to use within each minute (the time grain) for metrics coming from different virtual machines. Possible values are Average, Min and Max. | `string` | `"Max"` | no |
| <a name="input_scaleout_time_aggregation"></a> [scaleout\_time\_aggregation](#input\_scaleout\_time\_aggregation) | Specifies how the metric should be combined over the time `scaleout_window_minutes`. Possible values are Average, Count, Maximum, Minimum, Last and Total. | `string` | `"Maximum"` | no |
| <a name="input_scaleout_window_minutes"></a> [scaleout\_window\_minutes](#input\_scaleout\_window\_minutes) | This is amount of time in minutes that autoscale engine will look back for metrics. For example, 10 minutes means that every time autoscale runs,<br />it will query metrics for the past 10 minutes. This allows metrics to stabilize and avoids reacting to transient spikes.<br />Must be between 5 and 720 minutes. | `number` | `10` | no |
| <a name="input_scaleout_cooldown_minutes"></a> [scaleout\_cooldown\_minutes](#input\_scaleout\_cooldown\_minutes) | Azure only considers adding a VM after this number of minutes has passed since the last VM scaling action. It should be much higher than `scaleout_window_minutes`, to account both for the VM-Series spin-up time and for the subsequent metrics stabilization time. Must be between 1 and 10080 minutes. | `number` | `25` | no |
| <a name="input_scalein_statistic"></a> [scalein\_statistic](#input\_scalein\_statistic) | Aggregation to use within each minute (the time grain) for metrics coming from different virtual machines. Possible values are Average, Min and Max. | `string` | `"Max"` | no |
| <a name="input_scalein_time_aggregation"></a> [scalein\_time\_aggregation](#input\_scalein\_time\_aggregation) | Specifies how the metric should be combined over the time `scalein_window_minutes`. Possible values are Average, Count, Maximum, Minimum, Last and Total. | `string` | `"Maximum"` | no |
| <a name="input_scalein_window_minutes"></a> [scalein\_window\_minutes](#input\_scalein\_window\_minutes) | This is amount of time in minutes that autoscale engine will look back for metrics. For example, 10 minutes means that every time autoscale runs,<br />it will query metrics for the past 10 minutes. This allows metrics to stabilize and avoids reacting to transient spikes.<br />Must be between 5 and 720 minutes. | `number` | `15` | no |
| <a name="input_scalein_cooldown_minutes"></a> [scalein\_cooldown\_minutes](#input\_scalein\_cooldown\_minutes) | Azure only considers deleting a VM after this number of minutes has passed since the last VM scaling action. Should be higher or equal to `scalein_window_minutes`. Must be between 1 and 10080 minutes. | `number` | `2880` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Map of tags to use for all the created resources. | `map(string)` | `\{\}` | no |
| <a name="input_bootstrap_options"></a> [bootstrap\_options](#input\_bootstrap\_options) | Bootstrap options to pass to VM-Series instance.<br /><br />Proper syntax is a string of semicolon separated properties.<br />Example:<br />  bootstrap\_options = "type=dhcp-client;panorama-server=1.2.3.4"<br /><br />For more details on bootstrapping see documentation: https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components | `string` | `""` | no |
| <a name="input_diagnostics_storage_uri"></a> [diagnostics\_storage\_uri](#input\_diagnostics\_storage\_uri) | The storage account's blob endpoint to hold diagnostic files. | `string` | `null` | no |
>>>>>>> 940c9e38 (first pass at fixing all mdx compilation/syntax errors)

### Outputs

Name |  Description
--- | ---
`scale_set_name` | Name of the created scale set.
`username` | Firewall admin account name.
`password` | Firewall admin password

### Required Inputs details

#### name

The name of the Azure Virtual Machine Scale Set.

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

#### authentication

A map defining authentication settings (including username and password).

Following properties are available:

- `username`                        - (`string`, optional, defaults to `panadmin`) the initial administrative VM-Series
                                      username.
- `password`                        - (`string`, optional, defaults to `null`) the initial administrative VM-Series password.
- `disable_password_authentication` - (`bool`, optional, defaults to `true`) disables password-based authentication.
- `ssh_keys`                        - (`list`, optional, defaults to `[]`) a list of initial administrative SSH public keys.

**Important!** \
The `password` property is required when `ssh_keys` is not specified. You can have both, password and key authentication.

**Important!** \
`ssh_keys` property is a list of strings, so each item should be the actual public key value.
If you would like to load them from files use the `file` function, for example: `[ file("/path/to/public/keys/key_1.pub") ]`.


Type: 

```hcl
object({
    username                        = optional(string, "panadmin")
    password                        = optional(string)
    disable_password_authentication = optional(bool, true)
    ssh_keys                        = optional(list(string), [])
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

#### image

Basic Azure VM configuration.

Following properties are available:

- `version`                 - (`string`, optional, defaults to `null`) VM-Series PAN-OS version; list available with 
                              `az vm image list -o table --publisher paloaltonetworks --offer vmseries-flex --all`.
- `publisher`               - (`string`, optional, defaults to `paloaltonetworks`) the Azure Publisher identifier for an image
                              which should be deployed.
- `offer`                   - (`string`, optional, defaults to `vmseries-flex`) the Azure Offer identifier corresponding to a
                              published image.
- `sku`                     - (`string`, optional, defaults to `byol`) VM-Series SKU, list available with
                              `az vm image list -o table --all --publisher paloaltonetworks`.
- `enable_marketplace_plan` - (`bool`, optional, defaults to `true`) when set to `true` accepts the license for an offer/plan
                              on Azure Market Place.
- `custom_id`               - (`string`, optional, defaults to `null`) absolute ID of your own custom PAN-OS image to be used
                              for creating new Virtual Machines.

**Important!** \
`custom_id` and `version` properties are mutually exclusive.


Type: 

```hcl
object({
    version                 = optional(string)
    publisher               = optional(string, "paloaltonetworks")
    offer                   = optional(string, "vmseries-flex")
    sku                     = optional(string, "byol")
    enable_marketplace_plan = optional(bool, true)
    custom_id               = optional(string)
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

#### interfaces

List of the network interfaces specifications.

**Note!** \
The ORDER in which you specify the interfaces DOES MATTER.

Interfaces will be attached to VM in the order you define here, therefore:

- the first should be the management interface, which does not participate in data filtering
- the remaining ones are the dataplane interfaces.
  
Following configuration options are available:

- `name`                   - (`string`, required) the interface name.
- `subnet_id`              - (`string`, required) ID of an existing subnet to create the interface in.
- `create_public_ip`       - (`bool`, optional, defaults to `false`) if `true`, create a public IP for the interface.
- `lb_backend_pool_ids`    - (`list`, optional, defaults to `[]`) a list of identifiers of existing Load Balancer backend pools
                             to associate the interface with.
- `appgw_backend_pool_ids` - (`list`, optional, defaults to `[]`) a list of identifier of Application Gateway's backend pools
                             to associate the interface with.
- `pip_domain_name_label`  - (`string`, optional, defaults to `null`) the IP Prefix which should be used for the Domain Name
                             Label for each Virtual Machine Instance.

Example:

```hcl
[
  {
    name       = "management"
    subnet_id  = azurerm_subnet.my_mgmt_subnet.id
    create_pip = true
  },
  {
    name      = "private"
    subnet_id = azurerm_subnet.my_priv_subnet.id
  },
  {
    name                = "public"
    subnet_id           = azurerm_subnet.my_pub_subnet.id
    lb_backend_pool_ids = [azurerm_lb_backend_address_pool.lb_backend.id]
  }
]
```


Type: 

```hcl
list(object({
    name                   = string
    subnet_id              = string
    create_public_ip       = optional(bool, false)
    lb_backend_pool_ids    = optional(list(string), [])
    appgw_backend_pool_ids = optional(list(string), [])
    pip_domain_name_label  = optional(string)
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### virtual_machine_scale_set

Scale set parameters configuration.

This map contains basic, as well as some optional Virtual Machine Scale Set parameters. Both types contain sane defaults.
Nevertheless they should be at least reviewed to meet deployment requirements.

List of either required or important properties: 

- `size`              - (`string`, optional, defaults to `Standard_D3_v2`) Azure VM size (type). Consult the *VM-Series
                        Deployment Guide* as only few selected sizes are supported. The default one is a VM-300 equivalent.
- `zones`             - (`list`, optional, defaults to `null`) a list of Availability Zones in which VMs from this Scale Set
                        will be created.
- `disk_type`         - (`string`, optional, defaults to `StandardSSD_LRS`) type of Managed Disk which should be created,
                        possible values are `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS` (works only for selected `size`
                        values).
- `bootstrap_options` - (`string`, optional) bootstrap options to pass to VM-Series instance.

    Proper syntax is a string of semicolon separated properties, for example:

    ```hcl
    bootstrap_options = "type=dhcp-client;panorama-server=1.2.3.4"
    ```

    For more details on bootstrapping [see documentation](https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components).

List of other, optional properties:

- `accelerated_networking`        - (`bool`, optional, defaults to `true`) when set to `true` enables Azure accelerated
                                    networking (SR-IOV) for all dataplane network interfaces, this does not affect the
                                    management interface (always disabled).
- `allow_extension_operations`    - (`bool`, optional, defaults to `false`) should Extension Operations be allowed on this VM.
- `disk_encryption_set_id`        - (`string`, optional, defaults to `null`) the ID of the Disk Encryption Set which should be
                                    used to encrypt this VM's disk.
- `encryption_at_host_enabled`    - (`bool`, optional, defaults to Azure defaults) should all of disks be encrypted by enabling
                                    Encryption at Host.
- `overprovision`                 - (`bool`, optional, defaults to `true`) See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/linux_virtual_machine_scale_set).
- `platform_fault_domain_count`   - (`number`, optional, defaults to Azure defaults) specifies the number of fault domains that
                                    are used by this Virtual Machine Scale Set.
- `single_placement_group`        - (`bool`, optional, defaults to Azure defaults) when `true` this Virtual Machine Scale Set
                                    will be limited to a Single Placement Group, which means the number of instances will be
                                    capped at 100 Virtual Machines.
- `capacity_reservation_group_id` - (`string`, optional, defaults to `null`) specifies the ID of the Capacity Reservation Group
                                    which the Virtual Machine Scale Set should be allocated to.
- `enable_boot_diagnostics`       - (`bool`, optional, defaults to `false`) enables boot diagnostics for a VM.
- `boot_diagnostics_storage_uri`  - (`string`, optional, defaults to `null`) Storage Account's Blob endpoint to hold diagnostic
                                    files, when skipped a managed Storage Account will be used (preferred).
- `identity_type`                 - (`string`, optional, defaults to `SystemAssigned`) type of Managed Service Identity that
                                    should be configured on this VM. Can be one of "SystemAssigned", "UserAssigned" or
                                    "SystemAssigned, UserAssigned".
- `identity_ids`                  - (`list`, optional, defaults to `[]`) a list of User Assigned Managed Identity IDs to be 
                                    assigned to this VM. Required only if `identity_type` is not "SystemAssigned".


Type: 

```hcl
object({
    size                          = optional(string, "Standard_D3_v2")
    bootstrap_options             = optional(string)
    zones                         = optional(list(string))
    disk_type                     = optional(string, "StandardSSD_LRS")
    accelerated_networking        = optional(bool, true)
    allow_extension_operations    = optional(bool, false)
    encryption_at_host_enabled    = optional(bool)
    overprovision                 = optional(bool, true)
    platform_fault_domain_count   = optional(number)
    single_placement_group        = optional(bool)
    capacity_reservation_group_id = optional(string)
    disk_encryption_set_id        = optional(string)
    enable_boot_diagnostics       = optional(bool, false)
    boot_diagnostics_storage_uri  = optional(string)
    identity_type                 = optional(string, "SystemAssigned")
    identity_ids                  = optional(list(string), [])
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### autoscaling_configuration

Autoscaling configuration common to all policies.

Following properties are available:

- `application_insights_id` - (`string`, optional, defaults to `null`) an ID of Application Insights instance that should
                              be used to provide metrics for autoscaling; to **avoid false positives** this should be an
                              instance **dedicated to this Scale Set**.
- `default_count`           - (`number`, optional, defaults to `2`) minimum number of instances that should be present
                              in the scale set when the autoscaling engine cannot read the metrics or is otherwise unable
                              to compare the metrics to the thresholds.
- `scale_in_policy`         - (`string`, optional, defaults to Azure default) controls which VMs are chosen for removal
                              during a scale-in, can be one of: `Default`, `NewestVM`, `OldestVM`.
- `scale_in_force_deletion` - (`bool`, optional, defaults to `false`) when `true` will **force delete** machines during a 
                              scale-in operation.
- `notification_emails`     - (`list`, optional, defaults to `[]`) list of email addresses to notify about autoscaling
                              events.
- `webhooks_uris`           - (`map`, optional, defaults to `{}`) the URIs that receive autoscaling events; a map where keys
                              are just arbitrary identifiers and the values are the webhook URIs.


Type: 

```hcl
object({
    application_insights_id = optional(string)
    default_count           = optional(number, 2)
    scale_in_policy         = optional(string)
    scale_in_force_deletion = optional(bool, false)
    notification_emails     = optional(list(string), [])
    webhooks_uris           = optional(map(string), {})
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### autoscaling_profiles

A list defining autoscaling profiles.

**Note!** \
The order does matter. The 1<sup>st</sup> profile becomes the default one.

There are some considerations when creating autoscaling configuration:

1. the 1<sup>st</sup> profile created will become the default one, it cannot contain any schedule.
2. all other profiles should contain schedules.
3. the scaling rules are optional, if you skip them you will create a profile with a set number of VM instances 
  (in such case the `minimum_count` and `maximum_count` properties are skipped).

Following properties are available:

- `name`          - (`string`, required) the name of the profile.
- `default_count` - (`number`, required) the default number of VMs.
- `minimum_count` - (`number`, optional, defaults to `default_count`) minimum number of VMs when scaling in.
- `maximum_count` - (`number`, optional, defaults to `default_count`) maximum number of VMs when you scale out.
- `recurrence`    - (`map`, required for rules beside the 1st one) a map defining time schedule for the profile to apply:
  - `timezone`   - (`string`, optional, defaults to Azure default (UTC)) timezone for the time schedule, supported list can
                   be found [here](https://learn.microsoft.com/en-us/rest/api/monitor/autoscale-settings/create-or-update?view=rest-monitor-2022-10-01&tabs=HTTP#:~:text=takes%20effect%20at.-,timeZone,-string).
  - `days`       - (`list`, required) list of days of the week during which the profile is applicable, case sensitive, possible
                   values are "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" and "Sunday".
  - `start_time` - (`string`, required) profile start time in RFC3339 format.
  - `end_time`   - (`string`, required) profile end time in RFC3339 format.
- `scale_rules`   - (`list`, optional, defaults to `[]`) a list of maps defining metrics and rules for autoscaling. 

    **Note!** \
    By default all VMSS built-in metrics are available. These do not differentiate between management and data planes.
    For more accuracy please use NGFW metrics.

    Each metric definition is a map with 3 properties:

    - `name`             - (`string`, required) name of the rule.
    - `scale_out_config` - (`map`, required) definition of the rule used to scale-out.
    - `scale_in_config`  - (`map`, required) definition of the rule used to scale-in.

        Both `scale_out_config` and `scale_in_config` maps contain the same properties. The ones that are required for
        scale-out but optional for scale-in, when skipped in the latter configuration, default to scale-out values:
          
        - `threshold`                  - (`number`, required) the threshold of a metric that triggers the scale action.
        - `operator`                   - (`string`, optional, defaults to `>=` or `<=` for scale-out and scale-in respectively)
                                         the metric vs. threshold comparison operator, can be one of: `>`, `>=`, `<`, `<=`,
                                         `==` or `!=`.
        - `grain_window_minutes`       - (`number`, required for scale-out, optional for scale-in) granularity of metrics that
                                         the rule monitors, between 1 minute and 12 hours (specified in minutes).
        - `grain_aggregation_type`     - (`string`, optional, defaults to "Average") method used to combine data from 
                                         `grain_window`, can be one of `Average`, `Max`, `Min` or `Sum`.
        - `aggregation_window_minutes` - (`number`, required for scale-out, optional for scale-in) time window used to analyze
                                         metrics, between 5 minutes and 12 hours (specified in minutes), must be greater than
                                         `grain_window_minutes`.
        - `aggregation_window_type`    - (`string`, optional, defaults to "Average") method used to combine data from
                                         `aggregation_window`, can be one of `Average`, `Maximum`, `Minimum`, `Count`, `Last`
                                         or `Total`.
        - `cooldown_window_minutes`    - (`number`, required) the amount of time to wait after a scale action, between 1 minute
                                         and 1 week (specified in minutes).
        - `change_count_by`            - (`number`, optional, default to `1`) a number of VM instances by which the total count
                                         of instances in a Scale Set will be changed during a scale action.

Example:

```hcl
# defining one profile
autoscaling_profiles = [
  {
    name          = "default_profile"
    default_count = 2
    minimum_count = 2
    maximum_count = 4
    scale_rules = [
      {
        name = "DataPlaneCPUUtilizationPct"
        scale_out_config = {
          threshold                  = 85
          grain_window_minutes       = 1
          aggregation_window_minutes = 25
          cooldown_window_minutes    = 60
        }
        scale_in_config = {
          threshold               = 60
          cooldown_window_minutes = 120
        }
      }
    ]
  }
]

# defining a profile with a rule scaling to 1 NGFW, used when no other rule is applicable
# and a second rule used for autoscaling during 'office hours'
autoscaling_profiles = [
  {
    name          = "default_profile"
    default_count = 1
  },
  {
    name          = "weekday_profile"
    default_count = 2
    minimum_count = 2
    maximum_count = 10
    recurrence = {
      days       = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
      start_time = "07:30"
      end_time   = "17:00"
    }
    scale_rules = [
      {
        name = "Percentage CPU"
        scale_out_config = {
          threshold                  = 70
          grain_window_minutes       = 5
          aggregation_window_minutes = 30
          cooldown_window_minutes    = 60
        }
        scale_in_config = {
          threshold               = 40
          cooldown_window_minutes = 120
        }
      },
      {
        name = "Outbound Flows"
        scale_out_config = {
          threshold                  = 500
          grain_window_minutes       = 5
          aggregation_window_minutes = 30
          cooldown_window_minutes    = 60
        }
        scale_in_config = {
          threshold               = 400
          cooldown_window_minutes = 60
        }
      }
    ]
  },
]
```


Type: 

```hcl
list(object({
    name          = string
    minimum_count = optional(number)
    default_count = number
    maximum_count = optional(number)
    recurrence = optional(object({
      timezone   = optional(string)
      days       = list(string)
      start_time = string
      end_time   = string
    }))
    scale_rules = optional(list(object({
      name = string
      scale_out_config = object({
        threshold                  = number
        operator                   = optional(string, ">=")
        grain_window_minutes       = number
        grain_aggregation_type     = optional(string, "Average")
        aggregation_window_minutes = number
        aggregation_window_type    = optional(string, "Average")
        cooldown_window_minutes    = number
        change_count_by            = optional(number, 1)
      })
      scale_in_config = object({
        threshold                  = number
        operator                   = optional(string, "<=")
        grain_window_minutes       = optional(number)
        grain_aggregation_type     = optional(string, "Average")
        aggregation_window_minutes = optional(number)
        aggregation_window_type    = optional(string, "Average")
        cooldown_window_minutes    = number
        change_count_by            = optional(number, 1)
      })
    })), [])
  }))
```


Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>