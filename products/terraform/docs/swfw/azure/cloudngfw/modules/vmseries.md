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
- `azurerm`, version: ~> 4.0

### Providers

- `azurerm`, version: ~> 4.0



### Resources

- `linux_virtual_machine` (managed)
- `network_interface` (managed)
- `network_interface_application_gateway_backend_address_pool_association` (managed)
- `network_interface_backend_address_pool_association` (managed)
- `public_ip` (managed)
- `public_ip` (data)

### Required Inputs

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

- `use_airs`                - (`bool`, optional, defaults to `false`) when set to `true`, the AI Runtime Security VM image is
                              used instead of the one passed to the module and version for `airs-flex` offer must be provided.
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
    use_airs                = optional(bool, false)
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
- ip_configurations               - (`map`, required) A map that contains the IP configurations for the interface.
  - `name`                          - (`string`, optional, defaults to `primary`) the name of the interface IP configuration.
  - `primary`                       - (`bool`, optional, defaults to `true`) sets the current IP configuration as the primary
                                      one.
  - `private_ip_address`            - (`string`, optional, defaults to `null`) static private IP to assign to the interface. 
                                      When skipped Azure will assign one dynamically. Keep in mind that a dynamic IP is
                                      guaranteed not to change as long as the VM is running. Any stop/deallocate/restart
                                      operation might cause the IP to change.
  - `create_public_ip`              - (`bool`, optional, defaults to `false`) if `true`, creates a public IP for the interface.
                                      **Note!** When you define multiple IP configurations, exactly one must be the primary.
  - `public_ip_name`                - (`string`, optional, defaults to `null`) name of the public IP to associate with the
                                      interface. When `create_public_ip` is set to `true` this will become a name of a newly
                                      created Public IP interface. Otherwise this is a name of an existing interfaces that will
                                      be sourced and attached to the interface. Not used when using `public_ip` module.
  - `public_ip_resource_group_name` - (`string`, optional, defaults to `var.resource_group_name`) name of a Resource Group that
                                      contains public IP that that will be associated with the interface. Used only when
                                      `create_public_ip` is `false`.
  - `public_ip_id`                  - (`string`, optional, defaults to `null`) ID of the public IP to associate with the
                                      interface. Property is used when public IP is not created or sourced within this module.
- `attach_to_lb_backend_pool`     - (`bool`, optional, defaults to `false`) set to `true` if you would like to associate this
                                    interface with a Load Balancer backend pool.
- `lb_backend_pool_id`            - (`string`, optional, defaults to `null`) ID of an existing backend pool to associate the
                                    interface with.
- `appgw_backend_pool_id`         - (`string`, optional, defaults to `null`) ID of an existing Application Gateway backend pool
                                    to associate the interface with.
- `attach_to_appgw_backend_pool`  - (`bool`, optional, defaults to `false`) set to `true` if you would like to associate this
                                    interface with an Application Gateway backend pool.

Example:

```hcl
[
  # management interface with a new public IP
  {
    name                 = "fw-mgmt"
    subnet_id            = azurerm_subnet.my_mgmt_subnet.id
    ip_configurations = {
      primary-ip = {
        name = "primary-ip"
        primary               = true
        create_public_ip      = true
        public_ip_name       = "fw-mgmt-pip"
      }
  },
  # public interface reusing an existing public IP resource
  {
    name                      = "fw-public"
    subnet_id                 = azurerm_subnet.my_pub_subnet.id
    attach_to_lb_backend_pool = true
    lb_backend_pool_id        = module.inbound_lb.backend_pool_id
    ip_configurations = {
      primary-ip = {
        name = "primary-ip"
        primary               = true
        create_public_ip      = false
        public_ip_name        = "fw-public-pip"
      }
  },
  # interface with 2 IP addresses
  {
    name                      = "fw-two-ips"
    subnet_id                 = azurerm_subnet.my_pub_subnet.id
    attach_to_lb_backend_pool = true
    lb_backend_pool_id        = module.inbound_lb.backend_pool_id
    ip_configurations = {
      primary-ip = {
        name = "primary-ip"
        primary               = true
        create_public_ip      = false
        private_ip_address    = "10.0.0.5"
        public_ip_name        = "fw-public-pip"
      },
      secondary-ip = {
        name = "secondary-ip"
        primary               = false
        create_public_ip      = false
        private_ip_address    = "10.0.0.6"
        public_ip_name        = "fw-public-pip"
      }
  },
]
```


Type: 

```hcl
list(object({
    name      = string
    subnet_id = string
    ip_configurations = map(object({
      name                          = optional(string, "primary")
      primary                       = optional(bool, true)
      create_public_ip              = optional(bool, false)
      public_ip_name                = optional(string)
      public_ip_resource_group_name = optional(string)
      public_ip_id                  = optional(string)
      private_ip_address            = optional(string)
    }))
    lb_backend_pool_id           = optional(string)
    attach_to_lb_backend_pool    = optional(bool, false)
    appgw_backend_pool_id        = optional(string)
    attach_to_appgw_backend_pool = optional(bool, false)
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>