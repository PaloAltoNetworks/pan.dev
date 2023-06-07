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
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Panorama
title: Palo Alto Networks Panorama Module for Azure
---

# Palo Alto Networks Panorama Module for Azure

A terraform module for deploying a working Panorama instance in Azure.

## Usage

```hcl
module "panorama" {
  source  = "PaloAltoNetworks/vmseries-modules/azurerm//modules/panorama"
  version = "0.1.0"

  panorama_name       = var.panorama_name
  resource_group_name = azurerm_resource_group.this.name
  location            = var.location
  avzone              = var.avzone // Optional Availability Zone number

  interface = [ // Only one interface in Panorama VM is supported
    {
      name               = "mgmt"
      subnet_id          = var.subnet_id
      public_ip          = true
      public_ip_name     = "panorama"
    }
  ]

  panorama_size               = var.panorama_size
  username                    = var.username
  password                    = random_password.this.result
  panorama_sku                = var.panorama_sku
  panorama_version            = var.panorama_version
  boot_diagnostic_storage_uri = module.bootstrap.storage_account.primary_blob_endpoint
  tags                        = var.tags
}
```

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |
| <a name="requirement_azurerm"></a> [azurerm](#requirement\_azurerm) | ~> 3.25 |
| <a name="requirement_random"></a> [random](#requirement\_random) | ~> 3.1 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | ~> 3.25 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [azurerm_managed_disk.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/managed_disk) | resource |
| [azurerm_network_interface.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/network_interface) | resource |
| [azurerm_public_ip.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip) | resource |
| [azurerm_virtual_machine.panorama](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_machine) | resource |
| [azurerm_virtual_machine_data_disk_attachment.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_machine_data_disk_attachment) | resource |
| [azurerm_public_ip.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/public_ip) | data source |

### Inputs

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
| <a name="input_interfaces"></a> [interfaces](#input\_interfaces) | List of the network interface specifications.<br /><br />NOTICE. The ORDER in which you specify the interfaces DOES MATTER.<br />Interfaces will be attached to VM in the order you define here, therefore the first should be the management interface.<br /><br />Options for an interface object:<br />- `name`                     - (required\|string) Interface name.<br />- `subnet_id`                - (required\|string) Identifier of an existing subnet to create interface in.<br />- `create_public_ip`         - (optional\|bool) If true, create a public IP for the interface and ignore the `public_ip_address_id`. Default is false.<br />- `private_ip_address`       - (optional\|string) Static private IP to asssign to the interface. If null, dynamic one is allocated.<br />- `public_ip_name`           - (optional\|string) Name of an existing public IP to associate to the interface, used only when `create_public_ip` is `false`.<br />- `public_ip_resource_group` - (optional\|string) Name of a Resource Group that contains public IP resource to associate to the interface. When not specified defaults to `var.resource_group_name`. Used only when `create_public_ip` is `false`.<br /><br />Example:<pre>[<br />  {<br />    name                 = "mgmt"<br />    subnet\_id            = azurerm\_subnet.my\_mgmt\_subnet.id<br />    public\_ip\_address\_id = azurerm\_public\_ip.my\_mgmt\_ip.id<br />    create\_public\_ip     = true<br />  }<br />]</pre> | `list(any)` | n/a | yes |
| <a name="input_logging_disks"></a> [logging\_disks](#input\_logging\_disks) | A map of objects describing the additional disk configuration. The keys of the map are the names and values are { size, zone, lun }. <br /> The size value is provided in GB. The recommended size for additional (optional) disks is at least 2TB (2048 GB). Example:<pre>{<br />  logs-1 = {<br />    size: "2048"<br />    zone: "1"<br />    lun: "1"<br />  }<br />  logs-2 = {<br />    size: "2048"<br />    zone: "2"<br />    lun: "2"<br />    disk\_type: "StandardSSD\_LRS"<br />  }<br />}</pre> | `map(any)` | `{}` | no |
| <a name="input_boot_diagnostic_storage_uri"></a> [boot\_diagnostic\_storage\_uri](#input\_boot\_diagnostic\_storage\_uri) | Existing diagnostic storage uri | `string` | `null` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | A map of tags to be associated with the resources created. | `map(any)` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_mgmt_ip_address"></a> [mgmt\_ip\_address](#output\_mgmt\_ip\_address) | Panorama management IP address. If `public_ip` was `true`, it is a public IP address, otherwise a private IP address. |
| <a name="output_interfaces"></a> [interfaces](#output\_interfaces) | Map of VM-Series network interfaces. Keys are equal to var.interfaces `name` properties. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->