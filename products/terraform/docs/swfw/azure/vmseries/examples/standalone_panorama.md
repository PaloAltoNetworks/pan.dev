---
hide_title: true
id: standalone_panorama
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
sidebar_label: Standalone Panorama Deployment
title: Standalone Panorama Deployment
---

# Standalone Panorama Deployment

Panorama is a centralized management system that provides global visibility and control over multiple Palo Alto Networks next generation firewalls through an easy to use web-based interface. Panorama enables administrators to view aggregate or device-specific application, user, and content data and manage multiple Palo Alto Networks firewalls—all from a central location.

The Terraform code presented here will deploy Palo Alto Networks Panorama management platform in Azure in management only mode (without additional logging disks). For option on how to add additional logging disks - please refer to panorama [module documentation](../../modules/panorama#input_logging_disks)

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules/tree/main/examples/standalone_panorama) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/azurerm/latest/examples/standalone_panorama)

## Topology

This is a non zonal deployment. The deployed infrastructure consists of:

* a VNET containing:
  * one subnet dedicated to host Panorama appliances
  * a Network Security Group to give access to Panorama's public interface
* a Panorama appliance with a public IP assigned to the management interface

![standalone-panorama](a2394f73-c0a8-4878-8693-825356abbd23.png)

## Prerequisites

A list of requirements might vary depending on the platform used to deploy the infrastructure but a minimum one includes:

* (in case of non cloud shell deployment) credentials and (optionally) tools required to authenticate against Azure Cloud, see [AzureRM provider documentation for details](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs#authenticating-to-azure)
* [supported](#requirements) version of [`Terraform`](<https://developer.hashicorp.com/terraform/downloads>)
* if you have not run Palo Alto Networks Panorama images in a subscription it might be necessary to accept the license first ([see this note](../../modules/panorama#accept-azure-marketplace-terms))

**NOTE:**

* after the deployment Panorama remains not licensed and not configured.
* keep in mind that **this code** is **only an example**. It's main purpose is to introduce the Terraform modules.

## Usage

### Deployment Steps

* checkout the code locally (if you haven't done so yet)
* copy the [`example.tfvars`](./example.tfvars) file, rename it to `terraform.tfvars` and adjust it to your needs (take a closer look at the `TODO` markers)
* (optional) authenticate to AzureRM, switch to the Subscription of your choice if necessary
* initialize the Terraform module:

      terraform init

* (optional) plan you infrastructure to see what will be actually deployed:

      terraform plan

* deploy the infrastructure (you will have to confirm it with typing in `yes`):

      terraform apply

  The deployment takes couple of minutes. Observe the output. At the end you should see a summary similar to this:

      Apply complete! Resources: 10 added, 0 changed, 0 destroyed.

      Outputs:

      panorama_mgmt_ips = {
        "pn-1" = "1.2.3.4"
      }
      password = <sensitive>
      username = "panadmin"

* at this stage you have to wait couple of minutes for the Panorama to bootstrap.

### Post deploy

Panorama in this example is configured with password authentication. To retrieve the initial credentials run:

* for username:

      terraform output username

* for password:

      terraform output password

The management public IP addresses are available in the `panorama_mgmt_ips`:

```sh
terraform output panorama_mgmt_ips
```

You can now login to the devices using either:

* cli - ssh client is required
* Web UI (https) - any modern web browser, note that initially the traffic is encrypted with a self-signed certificate.

You can now proceed with licensing and configuring the devices.

### Cleanup

To remove the deployed infrastructure run:

```sh
terraform destroy
```

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_random"></a> [random](#provider\_random) | n/a |
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | n/a |

### Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_vnet"></a> [vnet](#module\_vnet) | ../../modules/vnet | n/a |
| <a name="module_panorama"></a> [panorama](#module\_panorama) | ../../modules/panorama | n/a |

### Resources

| Name | Type |
|------|------|
| [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group) | resource |
| [random_password.this](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/resource_group) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_tags"></a> [tags](#input\_tags) | Map of tags to assign to the created resources. | `map(string)` | `{}` | no |
| <a name="input_location"></a> [location](#input\_location) | The Azure region to use. | `string` | n/a | yes |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | A prefix that will be added to all created resources.<br />There is no default delimiter applied between the prefix and the resource name. Please include the delimiter in the actual prefix.<br /><br />Example:<pre>name\_prefix = "test-"</pre>NOTICE. This prefix is not applied to existing resources. If you plan to reuse i.e. a VNET please specify it's full name, even if it is also prefixed with the same value as the one in this property. | `string` | `""` | no |
| <a name="input_create_resource_group"></a> [create\_resource\_group](#input\_create\_resource\_group) | When set to `true` it will cause a Resource Group creation. Name of the newly specified RG is controlled by `resource_group_name`.<br />When set to `false` the `resource_group_name` parameter is used to specify a name of an existing Resource Group. | `bool` | `true` | no |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the Resource Group to . | `string` | n/a | yes |
| <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones) | If `true`, enable zone support for resources. | `bool` | `true` | no |
| <a name="input_vnets"></a> [vnets](#input\_vnets) | A map defining VNETs. A key is the VNET name, value is a set of properties like described below.<br /><br />For detailed documentation on each property refer to [module documentation](../../modules/vnet)<br /><br />- `name` : a name of a Virtual Network<br />- `create_virtual_network` : (default: `true`) when set to `true` will create a VNET, `false` will source an existing VNET<br />- `address_space` : a list of CIDRs for VNET<br />- `resource_group_name` :  (default: current RG) a name of a Resource Group in which the VNET will reside<br /><br />- `create_subnets` : (default: `true`) if true, create the Subnets inside the Virtual Network, otherwise use pre-existing subnets<br />- `subnets` : map of Subnets to create<br /><br />- `network_security_groups` : map of Network Security Groups to create<br />- `route_tables` : map of Route Tables to create. | `any` | n/a | yes |
| <a name="input_vmseries_username"></a> [vmseries\_username](#input\_vmseries\_username) | Initial administrative username to use for all systems. | `string` | `"panadmin"` | no |
| <a name="input_vmseries_password"></a> [vmseries\_password](#input\_vmseries\_password) | Initial administrative password to use for all systems. Set to null for an auto-generated password. | `string` | `null` | no |
| <a name="input_panorama_version"></a> [panorama\_version](#input\_panorama\_version) | Panorama PanOS version. It's also possible to specify the Pan-OS version per Panorama (in case you would like to deploy more than one), see `var.panoramas` variable. | `string` | n/a | yes |
| <a name="input_panorama_sku"></a> [panorama\_sku](#input\_panorama\_sku) | Panorama SKU, basically a type of licensing used in Azure. | `string` | `"byol"` | no |
| <a name="input_panorama_size"></a> [panorama\_size](#input\_panorama\_size) | A size of a VM that will run Panorama. It's also possible to specify the the VM size per Panorama, see `var.panoramas` variable. | `string` | `"Standard_D5_v2"` | no |
| <a name="input_panoramas"></a> [panoramas](#input\_panoramas) | A map containing Panorama definitions.<br /><br />All definitions share a VM size, SKU and PanOS version (`panorama_size`, `panorama_sku`, `panorama_version` respectively). Defining more than one Panorama makes sense when creating for example HA pairs. <br /><br />Following properties are available:<br /><br />- `name` : a name of a Panorama VM<br />- `size` : size of the Panorama virtual machine, when specified overrides `var.panorama_size`.<br />- `version` : PanOS version, when specified overrides `var.panorama_version`.<br />- `vnet_key`: a VNET used to host Panorama VM, this is a key from a VNET definition stored in `vnets` variable<br />- `subnet_key`: a Subnet inside a VNET used to host Panorama VM, this is a key from a Subnet definition stored inside a VNET definition references by the `vnet_key` property<br />- `avzone`: when `enable_zones` is `true` this specifies the zone in which Panorama will be deployed<br />- `avzones`: when `enable_zones` is `true` these are availability zones used by Panorama's public IPs<br />- `custom_image_id`: a custom build of Panorama to use, overrides the stock image version.<br /><br />- `interfaces` : configuration of all NICs assigned to a VM. A list of maps, each map is a NIC definition. Notice that the order DOES matter. NICs are attached to VMs in Azure in the order they are defined in this list, therefore the management interface has to be defined first. Following properties are available:<br />  - `name`: string that will form the NIC name<br />  - `subnet_key` : (string) a key of a subnet as defined in `var.vnets`<br />  - `create_pip` : (boolean) flag to create Public IP for an interface, defaults to `false`<br />  - `public_ip_name` : (string) when `create_pip` is set to `false` a name of a Public IP resource that should be associated with this Network Interface<br />  - `public_ip_resource_group` : (string) when associating an existing Public IP resource, name of the Resource Group the IP is placed in, defaults to the `var.resource_group_name`<br />  - `private_ip_address` : (string) a static IP address that should be assigned to an interface, defaults to `null` (in that case DHCP is used)<br /><br />- `logging_disks` : a map containing configuration of additional disks that should be attached to a Panorama appliance. Following properties are available:<br />  - `size` : size of a disk, 2TB by default<br />  - `lun` : slot to which the disk should be attached<br />  - `disk_type` : type of a disk, determines throughput, `Standard_LRS` by default.<br /><br />Example:<pre>{<br />    "pn-1" = {<br />      name     = "panorama01"<br />      vnet\_key = "vnet"<br />      interfaces = [<br />        {<br />          name               = "management"<br />          subnet\_key         = "panorama"<br />          private\_ip\_address = "10.1.0.10"<br />          create\_pip         = true<br />        },<br />      ]<br />    }<br />  }</pre> | `any` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_username"></a> [username](#output\_username) | Initial administrative username to use for VM-Series. |
| <a name="output_password"></a> [password](#output\_password) | Initial administrative password to use for VM-Series. |
| <a name="output_panorama_mgmt_ips"></a> [panorama\_mgmt\_ips](#output\_panorama\_mgmt\_ips) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->