---
hide_title: true
id: vmseries
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
sidebar_label: VM-Series
title: Palo Alto Networks VM-Series Module for Azure
---

# Palo Alto Networks VM-Series Module for Azure

A Terraform module for deploying a VM-Series firewall in Azure cloud.
The module is not intended for use with Scale Sets.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/vmseries) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/vmseries)

## Usage

For usage please refer to any reference architecture example.

## Accept Azure Marketplace Terms

Accept the Azure Marketplace terms for the VM-Series images. In a typical situation use these commands:

```sh
az vm image terms accept --publisher paloaltonetworks --offer vmseries-flex --plan byol --subscription MySubscription
az vm image terms accept --publisher paloaltonetworks --offer vmseries-flex --plan bundle1 --subscription MySubscription
az vm image terms accept --publisher paloaltonetworks --offer vmseries-flex --plan bundle2 --subscription MySubscription
```

You can revoke the acceptance later with the `az vm image terms cancel` command.
The acceptance applies to the entirety of your Azure Subscription.

## Caveat Regarding Region

By default, the VM-Series is placed into an Availability Zone "1". Hence, it can only deploy
successfully in the [Regions that support Zones](https://docs.microsoft.com/en-us/azure/availability-zones/az-region).
If your Region doesn't, use an alternative mechanism of Availability Set, which is inferior but universally supported:

```hcl
   avset_id = azurerm_availability_set.this.id
   avzone   = null
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 3.98

### Providers

- `azurerm`, version: ~> 3.98



### Resources

- `linux_virtual_machine` (managed)
- `network_interface` (managed)
- `network_interface_backend_address_pool_association` (managed)
- `public_ip` (managed)
- `public_ip` (data)

### Required Inputs

<<<<<<< HEAD
Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Azure Virtual Machine.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`authentication`](#authentication) | `object` | A map defining authentication settings (including username and password).
[`image`](#image) | `object` | Basic Azure VM image configuration.
[`virtual_machine`](#virtual_machine) | `object` | Firewall parameters configuration.
[`interfaces`](#interfaces) | `list` | List of the network interface specifications.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
=======
| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_location"></a> [location](#input\_location) | Region where to deploy VM-Series and dependencies. | `string` | n/a | yes |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the existing resource group where to place the resources created. | `string` | n/a | yes |
| <a name="input_name"></a> [name](#input\_name) | VM-Series instance name. | `string` | n/a | yes |
| <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones) | If false, the input `avzone` is ignored and also all created Public IP addresses default to not to use Availability Zones (the `No-Zone` setting). It is intended for the regions that do not yet support Availability Zones. | `bool` | `true` | no |
| <a name="input_avzone"></a> [avzone](#input\_avzone) | The availability zone to use, for example "1", "2", "3". Ignored if `enable_zones` is false. Conflicts with `avset_id`, in which case use `avzone = null`. | `string` | `"1"` | no |
| <a name="input_avzones"></a> [avzones](#input\_avzones) | After provider version 3.x you need to specify in which availability zone(s) you want to place IP.<br />ie: for zone-redundant with 3 availability zone in current region value will be:<pre>["1","2","3"]</pre> | `list(string)` | `[]` | no |
| <a name="input_avset_id"></a> [avset\_id](#input\_avset\_id) | The identifier of the Availability Set to use. When using this variable, set `avzone = null`. | `string` | `null` | no |
| <a name="input_interfaces"></a> [interfaces](#input\_interfaces) | List of the network interface specifications.<br /><br />NOTICE. The ORDER in which you specify the interfaces DOES MATTER.<br />Interfaces will be attached to VM in the order you define here, therefore:<br />* The first should be the management interface, which does not participate in data filtering.<br />* The remaining ones are the dataplane interfaces.<br /><br />Options for an interface object:<br />- `name`                     - (required\|string) Interface name.<br />- `subnet_id`                - (required\|string) Identifier of an existing subnet to create interface in.<br />- `create_public_ip`         - (optional\|bool) If true, create a public IP for the interface and ignore the `public_ip_address_id`. Default is false.<br />- `private_ip_address`       - (optional\|string) Static private IP to asssign to the interface. If null, dynamic one is allocated.<br />- `public_ip_name`           - (optional\|string) Name of an existing public IP to associate to the interface, used only when `create_public_ip` is `false`.<br />- `public_ip_resource_group` - (optional\|string) Name of a Resource Group that contains public IP resource to associate to the interface. When not specified defaults to `var.resource_group_name`. Used only when `create_public_ip` is `false`.<br />- `availability_zone`        - (optional\|string) Availability zone to create public IP in. If not specified, set based on `avzone` and `enable_zones`.<br />- `enable_ip_forwarding`     - (optional\|bool) If true, the network interface will not discard packets sent to an IP address other than the one assigned. If false, the network interface only accepts traffic destined to its IP address.<br />- `enable_backend_pool`      - (optional\|bool) If true, associate interface with backend pool specified with `lb_backend_pool_id`. Default is false.<br />- `lb_backend_pool_id`       - (optional\|string) Identifier of an existing backend pool to associate interface with. Required if `enable_backend_pool` is true.<br />- `tags`                     - (optional\|map) Tags to assign to the interface and public IP (if created). Overrides contents of `tags` variable.<br /><br />Example:<pre>[<br />  \{<br />    name                 = "fw-mgmt"<br />    subnet\_id            = azurerm\_subnet.my\_mgmt\_subnet.id<br />    public\_ip\_address\_id = azurerm\_public\_ip.my\_mgmt\_ip.id<br />    create\_public\_ip     = true<br />  \},<br />  \{<br />    name                = "fw-public"<br />    subnet\_id           = azurerm\_subnet.my\_pub\_subnet.id<br />    lb\_backend\_pool\_id  = module.inbound\_lb.backend\_pool\_id<br />    enable\_backend\_pool = true<br />    create\_public\_ip    = false<br />    public\_ip\_name      = "fw-public-ip"<br />  \},<br />]</pre> | `list(any)` | n/a | yes |
| <a name="input_username"></a> [username](#input\_username) | Initial administrative username to use for VM-Series. Mind the [Azure-imposed restrictions](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/faq#what-are-the-username-requirements-when-creating-a-vm). | `string` | n/a | yes |
| <a name="input_password"></a> [password](#input\_password) | Initial administrative password to use for VM-Series. If not defined the `ssh_key` variable must be specified. Mind the [Azure-imposed restrictions](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/faq#what-are-the-password-requirements-when-creating-a-vm). | `string` | `null` | no |
| <a name="input_ssh_keys"></a> [ssh\_keys](#input\_ssh\_keys) | A list of initial administrative SSH public keys that allow key-pair authentication.<br /><br />This is a list of strings, so each item should be the actual public key value. If you would like to load them from files instead, following method is available:<pre>[<br />  file("/path/to/public/keys/key\_1.pub"),<br />  file("/path/to/public/keys/key\_2.pub")<br />]</pre>If the `password` variable is also set, VM-Series will accept both authentication methods. | `list(string)` | `[]` | no |
| <a name="input_managed_disk_type"></a> [managed\_disk\_type](#input\_managed\_disk\_type) | Type of OS Managed Disk to create for the virtual machine. Possible values are `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS`. The `Premium_LRS` works only for selected `vm_size` values, details in Azure docs. | `string` | `"StandardSSD_LRS"` | no |
| <a name="input_os_disk_name"></a> [os\_disk\_name](#input\_os\_disk\_name) | Optional name of the OS disk to create for the virtual machine. If empty, the name is auto-generated. | `string` | `null` | no |
| <a name="input_vm_size"></a> [vm\_size](#input\_vm\_size) | Azure VM size (type) to be created. Consult the *VM-Series Deployment Guide* as only a few selected sizes are supported. | `string` | `"Standard_D3_v2"` | no |
| <a name="input_custom_image_id"></a> [custom\_image\_id](#input\_custom\_image\_id) | Absolute ID of your own Custom Image to be used for creating new VM-Series. If set, the `username`, `password`, `img_version`, `img_publisher`, `img_offer`, `img_sku` inputs are all ignored (these are used only for published images, not custom ones). The Custom Image is expected to contain PAN-OS software. | `string` | `null` | no |
| <a name="input_enable_plan"></a> [enable\_plan](#input\_enable\_plan) | Enable usage of the Offer/Plan on Azure Marketplace. Even plan sku "byol", which means "bring your own license", still requires accepting on the Marketplace (as of 2021). Can be set to `false` when using a custom image. | `bool` | `true` | no |
| <a name="input_img_publisher"></a> [img\_publisher](#input\_img\_publisher) | The Azure Publisher identifier for a image which should be deployed. | `string` | `"paloaltonetworks"` | no |
| <a name="input_img_offer"></a> [img\_offer](#input\_img\_offer) | The Azure Offer identifier corresponding to a published image. For `img_version` 9.1.1 or above, use "vmseries-flex"; for 9.1.0 or below use "vmseries1". | `string` | `"vmseries-flex"` | no |
| <a name="input_img_sku"></a> [img\_sku](#input\_img\_sku) | VM-series SKU - list available with `az vm image list -o table --all --publisher paloaltonetworks` | `string` | `"byol"` | no |
| <a name="input_img_version"></a> [img\_version](#input\_img\_version) | VM-series PAN-OS version - list available for a default `img_offer` with `az vm image list -o table --publisher paloaltonetworks --offer vmseries-flex --all` | `string` | `"10.1.0"` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | A map of tags to be associated with the resources created. | `map(any)` | `\{\}` | no |
| <a name="input_identity_type"></a> [identity\_type](#input\_identity\_type) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_machine#identity_type). | `string` | `"SystemAssigned"` | no |
| <a name="input_identity_ids"></a> [identity\_ids](#input\_identity\_ids) | See the [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/virtual_machine#identity_ids). | `list(string)` | `null` | no |
| <a name="input_accelerated_networking"></a> [accelerated\_networking](#input\_accelerated\_networking) | Enable Azure accelerated networking (SR-IOV) for all network interfaces except the primary one (it is the PAN-OS management interface, which [does not support](https://docs.paloaltonetworks.com/pan-os/9-0/pan-os-new-features/virtualization-features/support-for-azure-accelerated-networking-sriov) acceleration). | `bool` | `true` | no |
| <a name="input_bootstrap_options"></a> [bootstrap\_options](#input\_bootstrap\_options) | Bootstrap options to pass to VM-Series instance.<br /><br />Proper syntax is a string of semicolon separated properties.<br />Example:<br />  bootstrap\_options = "type=dhcp-client;panorama-server=1.2.3.4"<br /><br />A list of available properties: storage-account, access-key, file-share, share-directory, type, ip-address, default-gateway, netmask, ipv6-address, ipv6-default-gateway, hostname, panorama-server, panorama-server-2, tplname, dgname, dns-primary, dns-secondary, vm-auth-key, op-command-modes, op-cmd-dpdk-pkt-io, plugin-op-commands, dhcp-send-hostname, dhcp-send-client-id, dhcp-accept-server-hostname, dhcp-accept-server-domain, auth-key, vm-series-auto-registration-pin-value, vm-series-auto-registration-pin-id.<br /><br />For more details on bootstrapping see documentation: https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components | `string` | `""` | no |
| <a name="input_diagnostics_storage_uri"></a> [diagnostics\_storage\_uri](#input\_diagnostics\_storage\_uri) | The storage account's blob endpoint to hold diagnostic files. | `string` | `null` | no |
>>>>>>> 940c9e38 (first pass at fixing all mdx compilation/syntax errors)

### Outputs

Name |  Description
--- | ---
`mgmt_ip_address` | VM-Series management IP address. If `create_public_ip` was `true`, it is a public IP address, otherwise a private IP address.

`interfaces` | Map of VM-Series network interfaces. Keys are equal to var.interfaces `name` properties.
`principal_id` | The ID of Azure Service Principal of the created VM-Series. Usable only if `identity_type` contains SystemAssigned.


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

- `username`                        - (`string`, optional, defaults to `panadmin`) the initial administrative VM-Series
                                      username.
- `password`                        - (`string`, optional, defaults to `null`) the initial administrative VM-Series password.
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

Basic Azure VM image configuration.

Following properties are available:

- `version`                 - (`string`, optional, defaults to `null`) VM-Series PAN-OS version; list available with
                              `az vm image list -o table --publisher paloaltonetworks --offer vmseries-flex --all`.
- `publisher`               - (`string`, optional, defaults to `paloaltonetworks`) the Azure Publisher identifier for a image
                              which should be deployed.
- `offer`                   - (`string`, optional, defaults to `vmseries-flex`) the Azure Offer identifier corresponding to a
                              published image.
- `sku`                     - (`string`, optional, defaults to `byol`) VM-Series SKU; list available with
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

#### virtual_machine

Firewall parameters configuration.

This map contains basic, as well as some optional Firewall parameters. Both types contain sane defaults.
Nevertheless they should be at least reviewed to meet deployment requirements.

List of either required or important properties: 

- `size`              - (`string`, optional, defaults to `Standard_D3_v2`) Azure VM size (type). Consult the *VM-Series
                        Deployment Guide* as only a few selected sizes are supported.
- `zone`              - (`string`, required) Availability Zone to place the VM in, `null` value means a non-zonal deployment.
- `disk_type`         - (`string`, optional, defaults to `StandardSSD_LRS`) type of Managed Disk which should be created,
                        possible values are `Standard_LRS`, `StandardSSD_LRS` or `Premium_LRS` (works only for selected
                        `vm_size` values).
- `disk_name`         - (`string`, optional, defaults to VM name + `-disk` suffix) name od the OS disk.
- `bootstrap_options` - bootstrap options to pass to VM-Series instance.

  Proper syntax is a string of semicolon separated properties, for example:

  ```hcl
  bootstrap_options = "type=dhcp-client;panorama-server=1.2.3.4"
  ```

  For more details on bootstrapping [see documentation](https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components).

List of other, optional properties: 

- `avset_id`                      - (`string`, optional, default to `null`) identifier of the Availability Set to use.
- `capacity_reservation_group_id` - (`string`, optional, defaults to `null`) specifies the ID of the Capacity Reservation Group
                                    which the Virtual Machine should be allocated to.
- `accelerated_networking`        - (`bool`, optional, defaults to `true`) when set to `true`  enables Azure accelerated
                                    networking (SR-IOV) for all dataplane network interfaces, this does not affect the
                                    management interface (always disabled).
- `allow_extension_operations`    - (`bool`, optional, defaults to `false`) should Extension Operations be allowed on this VM.
- `encryption_at_host_enabled`    - (`bool`, optional, defaults to Azure defaults) should all of disks be encrypted
                                    by enabling Encryption at Host.
- `disk_encryption_set_id`        - (`string`, optional, defaults to `null`) the ID of the Disk Encryption Set which should be
                                    used to encrypt this VM's disk.
- `enable_boot_diagnostics`       - (`bool`, optional, defaults to `false`) enables boot diagnostics for a VM.
- `boot_diagnostics_storage_uri`  - (`string`, optional, defaults to `null`) a Storage Account's Blob endpoint to hold
                                    diagnostic files, when skipped a managed Storage Account will be used (preferred).
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
    zone                          = string
    disk_type                     = optional(string, "StandardSSD_LRS")
    disk_name                     = string
    avset_id                      = optional(string)
    capacity_reservation_group_id = optional(string)
    accelerated_networking        = optional(bool, true)
    allow_extension_operations    = optional(bool, false)
    encryption_at_host_enabled    = optional(bool)
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
- `attach_to_lb_backend_pool`     - (`bool`, optional, defaults to `false`) set to `true` if you would like to associate this
                                    interface with a Load Balancer backend pool.
- `lb_backend_pool_id`            - (`string`, optional, defaults to `null`) ID of an existing backend pool to associate the
                                    interface with.

Example:

```hcl
[
  # management interface with a new public IP
  {
    name                 = "fw-mgmt"
    subnet_id            = azurerm_subnet.my_mgmt_subnet.id
    public_ip_name       = "fw-mgmt-pip"
    create_public_ip     = true
  },
  # public interface reusing an existing public IP resource
  {
    name                      = "fw-public"
    subnet_id                 = azurerm_subnet.my_pub_subnet.id
    attach_to_lb_backend_pool = true
    lb_backend_pool_id        = module.inbound_lb.backend_pool_id
    create_public_ip          = false
    public_ip_name            = "fw-public-pip"
  },
]
```


Type: 

```hcl
list(object({
    name                          = string
    subnet_id                     = string
    create_public_ip              = optional(bool, false)
    public_ip_name                = optional(string)
    public_ip_resource_group_name = optional(string)
    private_ip_address            = optional(string)
    lb_backend_pool_id            = optional(string)
    attach_to_lb_backend_pool     = optional(bool, false)
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>