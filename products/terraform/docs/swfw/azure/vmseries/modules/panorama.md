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
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Panorama
title: Palo Alto Networks Panorama Module for Azure
---

# Palo Alto Networks Panorama Module for Azure

A terraform module for deploying a working Panorama instance in Azure.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/panorama) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/panorama)

## Usage

For usage please refer to `standalone_panorama` reference architecture example.

## Accept Azure Marketplace Terms

Accept the Azure Marketplace terms for the Panorama images. In a typical situation use these commands:

```sh
az vm image terms accept --publisher paloaltonetworks --offer panorama --plan byol --subscription MySubscription
```

You can revoke the acceptance later with the `az vm image terms cancel` command.
The acceptance applies to the entirety of your Azure Subscription.

<<<<<<< HEAD
=======
## Example

```hcl
module "panorama" \{
  source  = "PaloAltoNetworks/swfw-modules/azurerm//modules/panorama"

  panorama_name       = var.panorama_name
  resource_group_name = azurerm_resource_group.this.name
  location            = var.location
  avzone              = var.avzone // Optional Availability Zone number

  interface = [ // Only one interface in Panorama VM is supported
    \{
      name               = "mgmt"
      subnet_id          = var.subnet_id
      public_ip          = true
      public_ip_name     = "panorama"
    \}
  ]

  panorama_size               = var.panorama_size
  username                    = var.username
  password                    = random_password.this.result
  panorama_sku                = var.panorama_sku
  panorama_version            = var.panorama_version
  boot_diagnostic_storage_uri = module.bootstrap.storage_account.primary_blob_endpoint
  tags                        = var.tags
\}
```

>>>>>>> 940c9e38 (first pass at fixing all mdx compilation/syntax errors)
## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 3.98

### Providers

- `azurerm`, version: ~> 3.98



### Resources

- `linux_virtual_machine` (managed)
- `managed_disk` (managed)
- `network_interface` (managed)
- `public_ip` (managed)
- `virtual_machine_data_disk_attachment` (managed)
- `public_ip` (data)

### Required Inputs

<<<<<<< HEAD
Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Azure Virtual Machine.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`authentication`](#authentication) | `object` | A map defining authentication settings (including username and password).
[`image`](#image) | `object` | Basic Azure VM configuration.
[`virtual_machine`](#virtual_machine) | `object` | Firewall parameters configuration.
[`interfaces`](#interfaces) | `list` | List of the network interface specifications.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`logging_disks`](#logging_disks) | `map` |  A map of objects describing the additional disks configuration.
=======
| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_location"></a> [location](#input\_location) | Region to deploy Panorama into. | `string` | n/a | yes |
| <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones) | If false, the input `avzone` is ignored and all created public IPs default not to use Availability Zones (the `No-Zone` setting). It is intended for the regions that do not yet support Availability Zones. | `bool` | `true` | no |
| <a name="input_avzone"></a> [avzone](#input\_avzone) | The availability zone to use, for example "1", "2", "3". Ignored if `enable_zones` is false. Use `avzone = null` to disable the use of Availability Zones. | `any` | `null` | no |
| <a name="input_avzones"></a> [avzones](#input\_avzones) | After provider version 3.x you need to specify in which availability zone(s) you want to place IP.<br />ie: for zone-redundant with 3 availability zone in current region value will be:<pre>["1","2","3"]</pre> | `list(string)` | `[]` | no |
| <a name="input_name"></a> [name](#input\_name) | The Panorama common name. | `string` | n/a | yes |
| <a name="input_os_disk_name"></a> [os\_disk\_name](#input\_os\_disk\_name) | The name of OS disk. The name is auto-generated when not provided. | `string` | `null` | no |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | The name of the existing resource group where to place all the resources created by this module. | `string` | n/a | yes |
| <a name="input_panorama_size"></a> [panorama\_size](#input\_panorama\_size) | Virtual Machine size. | `string` | `"Standard_D5_v2"` | no |
| <a name="input_username"></a> [username](#input\_username) | Initial administrative username to use for Panorama. Mind the [Azure-imposed restrictions](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/faq#what-are-the-username-requirements-when-creating-a-vm). | `string` | `"panadmin"` | no |
| <a name="input_password"></a> [password](#input\_password) | Initial administrative password to use for Panorama. If not defined the `ssh_key` variable must be specified. Mind the [Azure-imposed restrictions](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/faq#what-are-the-password-requirements-when-creating-a-vm). | `string` | `null` | no |
| <a name="input_ssh_keys"></a> [ssh\_keys](#input\_ssh\_keys) | A list of initial administrative SSH public keys that allow key-pair authentication.<br /><br />This is a list of strings, so each item should be the actual public key value. If you would like to load them from files instead, following method is available:<pre>[<br />  file("/path/to/public/keys/key\_1.pub"),<br />  file("/path/to/public/keys/key\_2.pub")<br />]</pre>If the `password` variable is also set, VM-Series will accept both authentication methods. | `list(string)` | `[]` | no |
| <a name="input_enable_plan"></a> [enable\_plan](#input\_enable\_plan) | Enable usage of the Offer/Plan on Azure Marketplace. Even plan sku "byol", which means "bring your own license", still requires accepting on the Marketplace (as of 2021). Can be set to `false` when using a custom image. | `bool` | `true` | no |
| <a name="input_panorama_disk_type"></a> [panorama\_disk\_type](#input\_panorama\_disk\_type) | Specifies the type of managed disk to create. Possible values are either Standard\_LRS, StandardSSD\_LRS, Premium\_LRS or UltraSSD\_LRS. | `string` | `"StandardSSD_LRS"` | no |
| <a name="input_panorama_sku"></a> [panorama\_sku](#input\_panorama\_sku) | Panorama SKU. | `string` | `"byol"` | no |
| <a name="input_panorama_version"></a> [panorama\_version](#input\_panorama\_version) | Panorama PAN-OS Software version. List published images with `az vm image list -o table --all --publisher paloaltonetworks --offer panorama` | `string` | `"10.0.3"` | no |
| <a name="input_panorama_publisher"></a> [panorama\_publisher](#input\_panorama\_publisher) | Panorama Publisher. | `string` | `"paloaltonetworks"` | no |
| <a name="input_panorama_offer"></a> [panorama\_offer](#input\_panorama\_offer) | Panorama offer. | `string` | `"panorama"` | no |
| <a name="input_custom_image_id"></a> [custom\_image\_id](#input\_custom\_image\_id) | Absolute ID of your own Custom Image to be used for creating Panorama. If set, the `username`, `password`, `panorama_version`, `panorama_publisher`, `panorama_offer`, `panorama_sku` inputs are all ignored (these are used only for published images, not custom ones). The Custom Image is expected to contain PAN-OS software. | `string` | `null` | no |
| <a name="input_interfaces"></a> [interfaces](#input\_interfaces) | List of the network interface specifications.<br /><br />NOTICE. The ORDER in which you specify the interfaces DOES MATTER.<br />Interfaces will be attached to VM in the order you define here, therefore the first should be the management interface.<br /><br />Options for an interface object:<br />- `name`                     - (required\|string) Interface name.<br />- `subnet_id`                - (required\|string) Identifier of an existing subnet to create interface in.<br />- `create_public_ip`         - (optional\|bool) If true, create a public IP for the interface and ignore the `public_ip_address_id`. Default is false.<br />- `private_ip_address`       - (optional\|string) Static private IP to asssign to the interface. If null, dynamic one is allocated.<br />- `public_ip_name`           - (optional\|string) Name of an existing public IP to associate to the interface, used only when `create_public_ip` is `false`.<br />- `public_ip_resource_group` - (optional\|string) Name of a Resource Group that contains public IP resource to associate to the interface. When not specified defaults to `var.resource_group_name`. Used only when `create_public_ip` is `false`.<br /><br />Example:<pre>[<br />  \{<br />    name                 = "mgmt"<br />    subnet\_id            = azurerm\_subnet.my\_mgmt\_subnet.id<br />    public\_ip\_address\_id = azurerm\_public\_ip.my\_mgmt\_ip.id<br />    create\_public\_ip     = true<br />  \}<br />]</pre> | `list(any)` | n/a | yes |
| <a name="input_logging_disks"></a> [logging\_disks](#input\_logging\_disks) | A map of objects describing the additional disk configuration. The keys of the map are the names and values are \{ size, zone, lun \}. <br /> The size value is provided in GB. The recommended size for additional (optional) disks is at least 2TB (2048 GB). Example:<pre>\{<br />  logs-1 = \{<br />    size: "2048"<br />    zone: "1"<br />    lun: "1"<br />  \}<br />  logs-2 = \{<br />    size: "2048"<br />    zone: "2"<br />    lun: "2"<br />    disk\_type: "StandardSSD\_LRS"<br />  \}<br />\}</pre> | `map(any)` | `\{\}` | no |
| <a name="input_boot_diagnostic_storage_uri"></a> [boot\_diagnostic\_storage\_uri](#input\_boot\_diagnostic\_storage\_uri) | Existing diagnostic storage uri | `string` | `null` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | A map of tags to be associated with the resources created. | `map(any)` | `\{\}` | no |
>>>>>>> 940c9e38 (first pass at fixing all mdx compilation/syntax errors)

### Outputs

Name |  Description
--- | ---
`mgmt_ip_address` | Panorama management IP address. If `public_ip` was `true`, it is a public IP address, otherwise a private IP address.

`interfaces` | Map of VM-Series network interfaces. Keys are equal to var.interfaces `name` properties.

### Required Inputs details

#### name

The name of the Azure Virtual Machine.

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

- `username`                        - (`string`, optional, defaults to `panadmin`) the initial administrative Panorama
                                      username.
- `password`                        - (`string`, optional, defaults to `null`) the initial administrative Panorama password.
- `disable_password_authentication` - (`bool`, optional, defaults to `true`) disables password-based authentication.
- `ssh_keys`                        - (`list`, optional, defaults to `[]`) a list of initial administrative SSH public keys.

**Important!** \
The `password` property is required when `ssh_keys` is not specified.

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

- `version`                 - (`string`, optional, defaults to `null`) Panorama PAN-OS version; list available with 
                              `az vm image list -o table --publisher paloaltonetworks --offer panorama --all` command.
- `publisher`               - (`string`, optional, defaults to `paloaltonetworks`) the Azure Publisher identifier for an image
                              which should be deployed.
- `offer`                   - (`string`, optional, defaults to `panorama`) the Azure Offer identifier corresponding to a
                              published image.
- `sku`                     - (`string`, optional, defaults to `byol`) Panorama SKU; list available with
                              `az vm image list -o table --all --publisher paloaltonetworks` command.
- `enable_marketplace_plan` - (`bool`, optional, defaults to `true`) when set to `true` accepts the license for an offer/plan
                              on Azure Marketplace.
- `custom_id`               - (`string`, optional, defaults to `null`) absolute ID of your own custom PAN-OS image to be used
                              for creating new Virtual Machines.

**Important!** \
The `custom_id` and `version` properties are mutually exclusive.


Type: 

```hcl
object({
    version                 = optional(string)
    publisher               = optional(string, "paloaltonetworks")
    offer                   = optional(string, "panorama")
    sku                     = optional(string, "byol")
    enable_marketplace_plan = optional(bool, true)
    custom_id               = optional(string)
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

#### virtual_machine

Firewall parameters configuration.

This map contains basic, as well as some optional Firewall parameters. Both types contain sane defaults.
Nevertheless they should be at least reviewed to meet deployment requirements.

List of either required or important properties:

- `size`      - (`string`, optional, defaults to `Standard_D5_v2`) Azure VM size (type). Consult the *Panorama Deployment
                Guide* as only a few selected sizes are supported.
- `zone`      - (`number`, required) Availability Zone to place the VM in, `null` value means a non-zonal deployment.
- `disk_type` - (`string`, optional, defaults to `StandardSSD_LRS`) type of Managed Disk which should be created, possible
                values are `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS` (works only for selected `size` values).
- `disk_name` - (`string`, optional, defaults to VM name + `-disk` suffix) name od the OS disk.

List of other, optional properties: 

- `avset_id`                      - (`string`, optional, default to `null`) identifier of the Availability Set to use.
- `capacity_reservation_group_id` - (`string`, optional, defaults to `null`) specifies the ID of the Capacity Reservation Group
                                    which the Virtual Machine should be allocated to.
- `allow_extension_operations`    - (`bool`, optional, defaults to `false`) should Extension Operations be allowed on this VM.
- `encryption_at_host_enabled`    - (`bool`, optional, defaults to `false`) should all the disks be encrypted by enabling
                                    Encryption at Host.
- `disk_encryption_set_id`        - (`string`, optional, defaults to `null`) the ID of the Disk Encryption Set which should be
                                    used to encrypt this VM's disk.
- `enable_boot_diagnostics`       - (`bool`, optional, defaults to `false`) enables boot diagnostics for a VM.
- `boot_diagnostics_storage_uri`  - (`string`, optional, defaults to `null`) storage account's blob endpoint to hold diagnostic
                                    files.
- `identity_type`                 - (`string`, optional, defaults to `SystemAssigned`) type of Managed Service Identity that
                                    should be configured on this VM. Can be one of "SystemAssigned", "UserAssigned" or
                                    "SystemAssigned, UserAssigned".
- `identity_ids`                  - (`list`, optional, defaults to `[]`) a list of User Assigned Managed Identity IDs to be
                                    assigned to this VM. Required only if `identity_type` is not "SystemAssigned".


Type: 

```hcl
object({
    size                          = optional(string, "Standard_D5_v2")
    zone                          = string
    disk_type                     = optional(string, "StandardSSD_LRS")
    disk_name                     = string
    avset_id                      = optional(string)
    capacity_reservation_group_id = optional(string)
    allow_extension_operations    = optional(bool, false)
    encryption_at_host_enabled    = optional(bool, false)
    disk_encryption_set_id        = optional(string)
    enable_boot_diagnostics       = optional(bool, false)
    boot_diagnostics_storage_uri  = optional(string)
    identity_type                 = optional(string, "SystemAssigned")
    identity_ids                  = optional(list(string), [])
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

#### interfaces

List of the network interface specifications.

**Note!** \
The ORDER in which you specify the interfaces DOES MATTER.

Interfaces will be attached to VM in the order you define here, therefore:

- The first should be the management interface, which does not participate in data filtering.
- The remaining ones are the dataplane interfaces.
  
Following configuration options are available:

- `name`                          - (`string`, required) the interface name.
- `subnet_id`                     - (`string`, required) ID of an existing subnet to create the interface in.
- `private_ip_address`            - (`string`, optional, defaults to `null`) static private IP to assign to the interface. When
                                    skipped Azure will assign one dynamically. Keep in mind that a dynamic IP is guarantied not
                                    to change as long as the VM is running. Any stop/deallocate/restart operation might cause
                                    the IP to change.
- `create_public_ip`              - (`bool`, optional, defaults to `false`) if `true`, creates a public IP for the interface.
- `public_ip_name`                - (`string`, optional, defaults to `null`) name of the public IP to associate with the
                                    interface. When `create_public_ip` is set to `true` this will become a name of a newly
                                    created Public IP interface. Otherwise this is a name of an existing interfaces that will
                                    be sourced and attached to the interface.
- `public_ip_resource_group_name` - (`string`, optional, defaults to `var.resource_group_name`) name of a Resource Group that
                                    contains public IP that that will be associated with the interface. Used only when 
                                    `create_public_ip` is `false`.

Example:

```hcl
[
  # management interface with a new public IP
  {
    name             = "pano-mgmt"
    subnet_id        = azurerm_subnet.my_mgmt_subnet.id
    public_ip_name   = "pano-mgmt-pip"
    create_public_ip = true
  },
  # public interface reusing an existing public IP resource
  {
    name             = "pano-public"
    subnet_id        = azurerm_subnet.my_pub_subnet.id
    create_public_ip = false
    public_ip_name   = "pano-public-pip"
  },
]
```


Type: 

```hcl
list(object({
    name                          = string
    subnet_id                     = string
    private_ip_address            = optional(string)
    create_public_ip              = optional(bool, false)
    public_ip_name                = optional(string)
    public_ip_resource_group_name = optional(string)
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(any)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### logging_disks

 A map of objects describing the additional disks configuration.
   
Following configuration options are available:
  
- `name`      - (`string`, required) the Managed Disk name.
- `size`      - (`string`, optional, defaults to "2048") size of the disk in GB. The recommended size for additional disks
                is at least 2TB (2048 GB).
- `lun`       - (`string`, required) the Logical Unit Number of the Data Disk, which needs to be unique within the VM.
- `disk_type` - (`string`, optional, defaults to "StandardSSD_LRS") type of Managed Disk which should be created, possible
                values are `Standard_LRS`, `StandardSSD_LRS`, `Premium_LRS` or `UltraSSD_LRS`.
    
Example:

```hcl
{
  logs-1 = {
    size: "2048"
    zone: "1"
    lun: "1"
  }
  logs-2 = {
    size: "2048"
    zone: "2"
    lun: "2"
    disk_type: "StandardSSD_LRS"
  }
}
```


Type: 

```hcl
map(object({
    name      = string
    size      = optional(string, "2048")
    lun       = string
    disk_type = optional(string, "StandardSSD_LRS")
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>