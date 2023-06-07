---
hide_title: true
id: dedicated_vmseries
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
sidebar_label: Dedicated Firewall Option
title: 'Reference Architecture with Terraform: VM-Series in Azure, Centralized Architecture,
  Dedicated Inbound NGFW Option'
---

# Reference Architecture with Terraform: VM-Series in Azure, Centralized Architecture, Dedicated Inbound NGFW Option

Palo Alto Networks produces several [validated reference architecture design and deployment documentation guides](https://www.paloaltonetworks.com/resources/reference-architectures), which describe well-architected and tested deployments. When deploying VM-Series in a public cloud, the reference architectures guide users toward the best security outcomes, whilst reducing rollout time and avoiding common integration efforts.
The Terraform code presented here will deploy Palo Alto Networks VM-Series firewalls in Azure based on a centralized design with dedicated-inbound VM-Series; for a discussion of other options, please see the design guide from [the reference architecture guides](https://www.paloaltonetworks.com/resources/reference-architectures).

## Reference Architecture Design

![simple](a7c2452d-f926-49da-bf21-9d840282a0a2.png)

This code implements:
- a _centralized design_, a hub-and-spoke topology with a Transit VNet containing VM-Series to inspect all inbound, outbound, east-west, and enterprise traffic
- the _dedicated inbound option_, which separates inbound traffic flows onto a separate set of VM-Series

## Detailed Architecture and Design

### Centralized Design

This design uses a Transit VNet. Application functions and resources are deployed across multiple VNets that are connected in a hub-and-spoke topology. The hub of the topology, or transit VNet, is the central point of connectivity for all inbound, outbound, east-west, and enterprise traffic. You deploy all VM-Series firewalls within the transit VNet.

### Dedicated Inbound Option

The dedicated inbound option separates traffic flows across two separate sets of VM-Series firewalls. One set of VM-Series firewalls is dedicated to inbound traffic flows, allowing for greater flexibility and scaling of inbound traffic loads. The second set of VM-Series firewalls services all outbound, east-west, and enterprise network traffic flows. This deployment choice offers increased scale and operational resiliency and reduces the chances of high bandwidth use from the inbound traffic flows affecting other traffic flows within the deployment.

![Detailed Topology Diagram](234920818-44e4082d-b445-4ffc-b0cb-174ef1e3c2ae.png.png)

This reference architecture consists of:

* a VNET containing:
  * 3 subnets dedicated to the firewalls: management, private and public
  * Route Tables and Network Security Groups
* 2 Load Balancers:
  * public - with a public IP address assigned, in front of the firewalls public interfaces, for incoming traffic
  * private - in front of the firewalls private interfaces, for outgoing and east-west traffic
* a Storage Account used to keep bootstrap packages containing `DAY0` configuration for the firewalls
* 4 firewalls:
  * deployed in different zones
  * 2 pairs, one for inbound, the other for outbound and east-west traffic
  * with 3 network interfaces each: management, public, private
  * with public IP addresses assigned to:
    * management interface
    * public interface

## Prerequisites

A list of requirements might vary depending on the platform used to deploy the infrastructure but a minimum one includes:

* (in case of non cloud shell deployment) credentials and (optionally) tools required to authenticate against Azure Cloud, see [AzureRM provider documentation for details](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs#authenticating-to-azure)
* [supported](#requirements) version of [`Terraform`](<https://developer.hashicorp.com/terraform/downloads>)
* if you have not run Palo Alto NGFW images in a subscription it might be necessary to accept the license first ([see this note](../../modules/vmseries/README.md#accept-azure-marketplace-terms))


**NOTE:**

* after the deployment the firewalls remain not licensed, they do however contain minimum `DAY0` configuration (required NIC, VR, routes configuration).
* this example contains some **files** that **can contain sensitive data**. Keep in mind that **this code** is **only an example**. It's main purpose is to introduce the Terraform modules.

## Usage

### Deployment Steps

* checkout the code locally (if you haven't done so yet)
* copy the [`example.tfvars`](./example.tfvars) file, rename it to `terraform.tfvars` and adjust it to your needs (take a closer look at the `TODO` markers)
* copy the [`init-cfg.sample.txt`](./files/init-cfg.sample.txt) to `init-cfg.txt` and fill it out with required bootstrap parameters (see this [documentation](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components#id07933d91-15be-414d-bc8d-f2a5f3d8df6b) for details)
* (optional) authenticate to AzureRM, switch to the Subscription of your choice if necessary
* initialize the Terraform module:

      terraform init

* (optional) plan you infrastructure to see what will be actually deployed:

      terraform plan

* deploy the infrastructure (you will have to confirm it with typing in `yes`):

      terraform apply

  The deployment takes couple of minutes. Observe the output. At the end you should see a summary similar to this:

      bootstrap_storage_urls = <sensitive>
      lb_frontend_ips = {
        "private" = {
          "ha-ports" = "1.2.3.4"
        }
        "public" = {
          "palo-lb-app1-pip" = "1.2.3.4"
        }
      }
      password = <sensitive>
      username = "panadmin"
      vmseries_mgmt_ips = {
        "fw-in-1" = "1.2.3.4"
        "fw-in-2" = "1.2.3.4"
        "fw-obew-1" = "1.2.3.4"
        "fw-obew-2" = "1.2.3.4"
      }

* at this stage you have to wait couple of minutes for the firewalls to bootstrap.

### Post deploy

Firewalls in this example are configured with password authentication. To retrieve the initial credentials run:

* for username:

      terraform output username

* for password:

      terraform output password

The management public IP addresses are available in the `vmseries_mgmt_ips`:

```sh
terraform output vmseries_mgmt_ips
```

You can now login to the devices using either:

* cli - ssh client is required
* Web UI (https) - any modern web browser, note that initially the traffic is encrypted with a self-signed certificate.

As mentioned, the devices already contain `DAY0` configuration, so all network interfaces should be configured and Azure Load Balancer should already report that the devices are healthy.

You can now proceed with licensing the devices and configuring your first rules.

Please also refer to [this repository](https://github.com/PaloAltoNetworks/iron-skillet) for `DAY1` configuration (security hardening).

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
| <a name="provider_local"></a> [local](#provider\_local) | n/a |

### Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_vnet"></a> [vnet](#module\_vnet) | ../../modules/vnet | n/a |
| <a name="module_natgw"></a> [natgw](#module\_natgw) | ../../modules/natgw | n/a |
| <a name="module_load_balancer"></a> [load\_balancer](#module\_load\_balancer) | ../../modules/loadbalancer | n/a |
| <a name="module_ai"></a> [ai](#module\_ai) | ../../modules/application_insights | n/a |
| <a name="module_bootstrap"></a> [bootstrap](#module\_bootstrap) | ../../modules/bootstrap | n/a |
| <a name="module_bootstrap_share"></a> [bootstrap\_share](#module\_bootstrap\_share) | ../../modules/bootstrap | n/a |
| <a name="module_vmseries"></a> [vmseries](#module\_vmseries) | ../../modules/vmseries | n/a |
| <a name="module_appgw"></a> [appgw](#module\_appgw) | ../../modules/appgw | n/a |

### Resources

| Name | Type |
|------|------|
| [azurerm_availability_set.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/availability_set) | resource |
| [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group) | resource |
| [local_file.bootstrap_xml](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file) | resource |
| [random_password.this](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/resource_group) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_tags"></a> [tags](#input\_tags) | Map of tags to assign to the created resources. | `map(string)` | `{}` | no |
| <a name="input_location"></a> [location](#input\_location) | The Azure region to use. | `string` | n/a | yes |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | A prefix that will be added to all created resources.<br />There is no default delimiter applied between the prefix and the resource name. Please include the delimiter in the actual prefix.<br /><br />Example:<pre>name\_prefix = "test-"</pre>NOTICE. This prefix is not applied to existing resources. If you plan to reuse i.e. a VNET please specify it's full name, even if it is also prefixed with the same value as the one in this property. | `string` | `""` | no |
| <a name="input_create_resource_group"></a> [create\_resource\_group](#input\_create\_resource\_group) | When set to `true` it will cause a Resource Group creation. Name of the newly specified RG is controlled by `resource_group_name`.<br />When set to `false` the `resource_group_name` parameter is used to specify a name of an existing Resource Group. | `bool` | `true` | no |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the Resource Group. | `string` | n/a | yes |
| <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones) | If `true`, enable zone support for resources. | `bool` | `true` | no |
| <a name="input_vnets"></a> [vnets](#input\_vnets) | A map defining VNETs.<br /><br />For detailed documentation on each property refer to [module documentation](https://github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules/blob/v0.5.4/modules/vnet/README.md)<br /><br />- `name` :  A name of a VNET.<br />- `create_virtual_network` : (default: `true`) when set to `true` will create a VNET, `false` will source an existing VNET, in both cases the name of the VNET is specified with `name`<br />- `address_space` : a list of CIDRs for VNET<br />- `resource_group_name` :  (default: current RG) a name of a Resource Group in which the VNET will reside<br /><br />- `create_subnets` : (default: `true`) if true, create the Subnets inside the Virtual Network, otherwise use pre-existing subnets<br />- `subnets` : map of Subnets to create<br /><br />- `network_security_groups` : map of Network Security Groups to create<br />- `route_tables` : map of Route Tables to create. | `any` | n/a | yes |
| <a name="input_natgws"></a> [natgws](#input\_natgws) | A map defining Nat Gateways. <br /><br />Please note that a NatGW is a zonal resource, this means it's always placed in a zone (even when you do not specify one explicitly). Please refer to Microsoft documentation for notes on NatGW's zonal resiliency. <br /><br />Following properties are supported:<br /><br />- `name` : a name of the newly created NatGW.<br />- `create_natgw` : (default: `true`) create or source (when `false`) an existing NatGW. Created or sourced: the NatGW will be assigned to a subnet created by the `vnet` module.<br />- `resource_group_name : name of a Resource Group hosting the NatGW (newly create or the existing one).<br />- `zone` : Availability Zone in which the NatGW will be placed, when skipped AzureRM will pick a zone.<br />- `idle\_timeout` : connection IDLE timeout in minutes, for newly created resources<br />- `vnet\_key` : a name (key value) of a VNET defined in `var.vnets` that hosts a subnet this NatGW will be assigned to.<br />- `subnet\_keys` : a list of subnets (key values) the NatGW will be assigned to, defined in `var.vnets` for a VNET described by `vnet\_name`.<br />- `create\_pip` : (default: `true`) create a Public IP that will be attached to a NatGW<br />- `existing\_pip\_name` : when `create\_pip` is set to `false`, source and attach and existing Public IP to the NatGW<br />- `existing\_pip\_resource\_group\_name` : when `create\_pip` is set to `false`, name of the Resource Group hosting the existing Public IP<br />- `create\_pip\_prefix` : (default: `false`) create a Public IP Prefix that will be attached to the NatGW.<br />- `pip\_prefix\_length` : length of the newly created Public IP Prefix, can bet between 0 and 31 but this actually supported value depends on the Subscription.<br />- `existing\_pip\_prefix\_name` : when `create\_pip\_prefix` is set to `false`, source and attach and existing Public IP Prefix to the NatGW<br />- `existing\_pip\_prefix\_resource\_group\_name` : when `create\_pip\_prefix` is set to `false`, name of the Resource Group hosting the existing Public IP Prefix.<br /><br />Example:<br />`<pre>natgws = {<br />  "natgw" = {<br />    name         = "public-natgw"<br />    vnet\_key     = "transit-vnet"<br />    subnet\_keys  = ["public"]<br />    zone         = 1<br />  }<br />}</pre> | `any` | `{}` | no |
| <a name="input_load_balancers"></a> [load\_balancers](#input\_load\_balancers) | A map containing configuration for all (private and public) Load Balancer that will be created in this deployment.<br /><br />Following properties are available (for details refer to module's documentation):<br /><br />- `name`: name of the Load Balancer resource.<br />- `network_security_group_name`: (public LB) a name of a security group, an ingress rule will be created in that NSG for each listener. **NOTE** this is the FULL NAME of the NSG (including prefixes).<br />- `network_security_group_rg_name`: (public LB) a name of a resource group for the security group, to be used when the NSG is hosted in a different RG than the one described in `var.resource_group_name`.<br />- `network_security_allow_source_ips`: (public LB) a list of IP addresses that will used in the ingress rules.<br />- `avzones`: (both) for regional Load Balancers, a list of supported zones (this has different meaning for public and private LBs - please refer to module's documentation for details).<br />- `frontend_ips`: (both) a map configuring both a listener and a load balancing rule, key is the name that will be used as an application name inside LB config as well as to create a rule in NSG (for public LBs), value is an object with the following properties:<br />  - `create_public_ip`: (public LB) defaults to `false`, when set to `true` a Public IP will be created and associated with a listener<br />  - `public_ip_name`: (public LB) defaults to `null`, when `create_public_ip` is set to `false` this property is used to reference an existing Public IP object in Azure<br />  - `public_ip_resource_group`: (public LB) defaults to `null`, when using an existing Public IP created in a different Resource Group than the currently used use this property is to provide the name of that RG<br />  - `private_ip_address`: (private LB) defaults to `null`, specify a static IP address that will be used by a listener<br />  - `vnet_key`: (private LB) defaults to `null`, when `private_ip_address` is set specifies a vnet's key (as defined in `vnet` variable). This will be the VNET hosting this Load Balancer<br />  - `subnet_key`: (private LB) defaults to `null`, when `private_ip_address` is set specifies a subnet's key (as defined in `vnet` variable) to which the LB will be attached, in case of VMSeries this should be a internal/trust subnet<br />  - `rules` - a map configuring the actual rules load balancing rules, a key is a rule name, a value is an object with the following properties:<br />    - `protocol`: protocol used by the rule, can be one the following: `TCP`, `UDP` or `All` when creating an HA PORTS rule<br />    - `port`: port used by the rule, for HA PORTS rule set this to `0`<br /><br />Example of a public Load Balancer:<pre>"public\_lb" = {<br />  name                              = "https\_app\_lb"<br />  network\_security\_group\_name       = "untrust\_nsg"<br />  network\_security\_allow\_source\_ips = ["1.2.3.4"]<br />  avzones                           = ["1", "2", "3"]<br />  frontend\_ips = {<br />    "https\_app\_1" = {<br />      create\_public\_ip = true<br />      rules = {<br />        "balanceHttps" = {<br />          protocol = "Tcp"<br />          port     = 443<br />        }<br />      }<br />    }<br />  }<br />}</pre>Example of a private Load Balancer with HA PORTS rule:<pre>"private\_lb" = {<br />  name = "ha\_ports\_internal\_lb<br />  frontend\_ips = {<br />    "ha-ports" = {<br />      vnet\_key           = "trust\_vnet"<br />      subnet\_key         = "trust\_snet"<br />      private\_ip\_address = "10.0.0.1"<br />      rules = {<br />        HA\_PORTS = {<br />          port     = 0<br />          protocol = "All"<br />        }<br />      }<br />    }<br />  }<br />}</pre> | `map` | `{}` | no |
| <a name="input_vmseries_version"></a> [vmseries\_version](#input\_vmseries\_version) | VM-Series PAN-OS version - list available with `az vm image list -o table --all --publisher paloaltonetworks`. It's also possible to specify the Pan-OS version per firewall, see `var.vmseries` variable. | `string` | n/a | yes |
| <a name="input_vmseries_vm_size"></a> [vmseries\_vm\_size](#input\_vmseries\_vm\_size) | Azure VM size (type) to be created. Consult the *VM-Series Deployment Guide* as only a few selected sizes are supported. It's also possible to specify the the VM size per firewall, see `var.vmseries` variable. | `string` | n/a | yes |
| <a name="input_vmseries_sku"></a> [vmseries\_sku](#input\_vmseries\_sku) | VM-Series SKU - list available with `az vm image list -o table --all --publisher paloaltonetworks` | `string` | `"byol"` | no |
| <a name="input_vmseries_username"></a> [vmseries\_username](#input\_vmseries\_username) | Initial administrative username to use for all systems. | `string` | `"panadmin"` | no |
| <a name="input_vmseries_password"></a> [vmseries\_password](#input\_vmseries\_password) | Initial administrative password to use for all systems. Set to null for an auto-generated password. | `string` | `null` | no |
| <a name="input_availability_set"></a> [availability\_set](#input\_availability\_set) | A map defining availability sets. Can be used to provide infrastructure high availability when zones cannot be used.<br /><br />Following properties are supported:<br />- `name` - name of the Application Insights.<br />- `update_domain_count` - specifies the number of update domains that are used, defaults to 5 (Azure defaults).<br />- `fault_domain_count` - specifies the number of fault domains that are used, defaults to 3 (Azure defaults).<br /><br />Please keep in mind that Azure defaults are not working for each region (especially the small ones, w/o any Availability Zones). Please verify how many update and fault domain are supported in a region before deploying this resource. | `any` | `{}` | no |
| <a name="input_application_insights"></a> [application\_insights](#input\_application\_insights) | A map defining Azure Application Insights. There are three ways to use this variable:<br /><br />* when the value is set to `null` (default) no AI is created<br />* when the value is a map containing `name` key (other keys are optional) a single AI instance will be created under the name that is the value of the `name` key<br />* when the value is an empty map or a map w/o the `name` key, an AI instance per each VMSeries VM will be created. All instances will share the same configuration. All instances will have names corresponding to their VM name.<br /><br />Names for all AI instances are prefixed with `var.name_prefix`.<br /><br />Properties supported (for details on each property see [modules documentation](../modules/application\_insights/README.md)):<br /><br />- `name` : (optional, string) a name of a single AI instance<br />- `workspace_mode` : (optional, bool) defaults to `true`, use AI Workspace mode instead of the Classical (deprecated)<br />- `workspace_name` : (optional, string) defaults to AI name suffixed with `-wrkspc`, name of the Log Analytics Workspace created when AI is deployed in Workspace mode<br />- `workspace_sku` : (optional, string) defaults to PerGB2018, SKU used by WAL, see module documentation for details<br />- `metrics_retention_in_days` : (optional, number) defaults to current Azure default value, see module documentation for details<br /><br />Example of an AIs created per VM, in Workspace mode, with metrics retention set to 1 year:<pre>vmseries = {<br />  'vm-1' = {<br />    ....<br />  }<br />  'vm-2' = {<br />    ....<br />  }<br />}<br /><br />application\_insights = {<br />  metrics\_retention\_in\_days = 365<br />}</pre> | `map(string)` | `null` | no |
| <a name="input_bootstrap_storage"></a> [bootstrap\_storage](#input\_bootstrap\_storage) | A map defining Azure Storage Accounts used to host file shares for bootstrapping NGFWs. This variable defines only Storage Accounts, file shares are defined per each VM. See `vmseries` variable, `bootstrap_storage` property.<br /><br />Following properties are supported (except for name, all are optional):<br /><br />- `name` : name of the Storage Account. Please keep in mind that storage account name has to be globally unique. This name will not be prefixed with the value of `var.name_prefix`.<br />- `create_storage_account` : (defaults to `true`) create or source (when `false`) an existing Storage Account.<br />- `resource_group_name` : (defaults to `var.resource_group_name`) name of the Resource Group hosting the Storage Account (existing or newly created). The RG has to exist.<br /><br />The properties below do not directly change anything in the Storage Account settings. They can be used to control common parts of the `DAY0` configuration (used only when full bootstrap is used). These properties can also be specified per firewall, but when specified here they tak higher precedence:<br />- `public_snet_key` : required, name of the key in `var.vnets` map defining a public subnet, required to calculate the Azure router IP for the public subnet.<br />- `private_snet_key` : required, name of the key in `var.vnets` map defining a private subnet, required to calculate the Azure router IP for the private subnet.<br />- `intranet_cidr` : optional, CIDR of the private networks required to build a general static route to resources protected by this firewall, when skipped the 1st CIDR from `vnet_name` address space will be used.<br />- `ai_update_interval` : if Application Insights are used this property can override the default metrics update interval (in minutes). | `any` | `{}` | no |
| <a name="input_vmseries"></a> [vmseries](#input\_vmseries) | Map of virtual machines to create to run VM-Series - inbound firewalls. Following properties are supported:<br /><br />- `name` : name of the VMSeries virtual machine.<br />- `vm_size` : size of the VMSeries virtual machine, when specified overrides `var.vmseries_vm_size`.<br />- `version` : PanOS version, when specified overrides `var.vmseries_version`.<br />- `vnet_key` : a key of a VNET defined in the `var.vnets` map. This value will be used during network interfaces creation.<br />- `add_to_appgw_backend` : bool, `false` by default, set this to `true` to add this backend to an Application Gateway.<br />- `avzone`: the Azure Availability Zone identifier ("1", "2", "3"). Default is "1".<br />- `availability_set_name` : a name of an Availability Set as declared in `availability_set` property. Specify when HA is required but cannot go for zonal deployment.<br /><br />- `bootstrap_options` : string, optional bootstrap options to pass to VM-Series instances, semicolon separated values. When defined this precedence over `bootstrap_storage`<br />- `bootstrap_storage` : a map containing definition of the bootstrap package content. When present triggers a creation of a File Share in an existing Storage Account, following properties supported:<br />  - `name` : a name of a key in `var.bootstrap_storage` variable defining a Storage Account<br />  - `static_files` : a map where key is a path to a file, value is the location of the file in the bootstrap package (file share). All files in this map are copied 1:1 to the bootstrap package<br />  - `template_bootstrap_xml` : path to the `bootstrap.xml` template. When defined it will trigger creation of the `bootstrap.xml` file and the file will be uploaded to the storage account. This is a simple `day 0` configuration file that should set up only basic networking. Specifying this property forces additional properties that are required to properly template the file. They can be defined per each VM or globally for all VMs (in this case place them in the bootstrap storage definition). The properties are listed below.<br />  - `public_snet_key` : required, name of the key in `var.vnets` map defining a public subnet, required to calculate the Azure router IP for the public subnet.<br />  - `private_snet_key` : required, name of the key in `var.vnets` map defining a private subnet, required to calculate the Azure router IP for the private subnet.<br />  - `intranet_cidr` : optional, CIDR of the private networks required to build a general static route to resources protected by this firewall, when skipped the 1st CIDR from `vnet_name` address space will be used.<br />  - `ai_update_interval` : if Application Insights are used this property can override the default metrics update interval (in minutes).<br /><br />- `interfaces` : configuration of all NICs assigned to a VM. A list of maps, each map is a NIC definition. Notice that the order DOES matter. NICs are attached to VMs in Azure in the order they are defined in this list, therefore the management interface has to be defined first. Following properties are available:<br />  - `name`: string that will form the NIC name<br />  - `subnet_key` : (string) a key of a subnet as defined in `var.vnets`<br />  - `create_pip` : (boolean) flag to create Public IP for an interface, defaults to `false`<br />  - `public_ip_name` : (string) when `create_pip` is set to `false` a name of a Public IP resource that should be associated with this Network Interface<br />  - `public_ip_resource_group` : (string) when associating an existing Public IP resource, name of the Resource Group the IP is placed in, defaults to the `var.resource_group_name`<br />  - `load_balancer_key` : (string) key of a Load Balancer defined in the `var.loadbalancers`  variable, defaults to `null`<br />  - `private_ip_address` : (string) a static IP address that should be assigned to an interface, defaults to `null` (in that case DHCP is used)<br /><br />Example:<pre>{<br />  "fw01" = {<br />    name = "firewall01"<br />    bootstrap\_storage = {<br />      name                   = "storageaccountname"<br />      static\_files           = { "files/init-cfg.txt" = "config/init-cfg.txt" }<br />      template\_bootstrap\_xml = "templates/bootstrap\_common.tmpl"<br />      public\_snet\_key        = "public"<br />      private\_snet\_key       = "private"<br />    }<br />    avzone   = 1<br />    vnet\_key = "trust"<br />    interfaces = [<br />      {<br />        name               = "mgmt"<br />        subnet\_key         = "mgmt"<br />        create\_pip         = true<br />        private\_ip\_address = "10.0.0.1"<br />      },<br />      {<br />        name                 = "trust"<br />        subnet\_key           = "private"<br />        private\_ip\_address   = "10.0.1.1"<br />        load\_balancer\_key    = "private\_lb"<br />      },<br />      {<br />        name                 = "untrust"<br />        subnet\_key           = "public"<br />        private\_ip\_address   = "10.0.2.1"<br />        load\_balancer\_key    = "public\_lb"<br />        public\_ip\_name       = "existing\_public\_ip"<br />      }<br />    ]<br />  }<br />}</pre> | `any` | n/a | yes |
| <a name="input_appgws"></a> [appgws](#input\_appgws) | A map defining all Application Gateways in the current deployment.<br /><br />For detailed documentation on how to configure this resource, for available properties, especially for the defaults and the `rules` property refer to [module documentation](https://github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules/blob/main/modules/appgw/README.md).<br /><br />Following properties are supported:<br />- `name` : name of the Application Gateway.<br />- `vnet_key` : a key of a VNET defined in the `var.vnets` map.<br />- `subnet_key` : a key of a subnet as defined in `var.vnets`. This has to be a subnet dedicated to Application Gateways v2.<br />- `zones` : for zonal deployment this is a list of all zones in a region - this property is used by both: the Application Gateway and the Public IP created in front of the AppGW.<br />- `capacity` : (optional) number of Application Gateway instances, not used when autoscalling is enabled (see `capacity_min`)<br />- `capacity_min` : (optional) when set enables autoscaling and becomes the minimum capacity<br />- `capacity_max` : (optional) maximum capacity for autoscaling<br />- `enable_http2` : enable HTTP2 support on the Application Gateway<br />- `waf_enabled` : (optional) enables WAF Application Gateway, defining WAF rules is not supported, defaults to `false`<br />- `vmseries_public_nic_name` : name of the public VMSeries interface as defined in `interfaces` property.<br />- `managed_identities` : (optional) a list of existing User-Assigned Managed Identities, which Application Gateway uses to retrieve certificates from Key Vault<br />- `ssl_policy_type` : (optional) type of an SSL policy, defaults to `Predefined`<br />- `ssl_policy_name` : (optional) name of an SSL policy, for `ssl_policy_type` set to `Predefined`<br />- `ssl_policy_min_protocol_version` : (optional) minimum version of the TLS protocol for SSL Policy, for `ssl_policy_type` set to `Custom`<br />- `ssl_policy_cipher_suites` : (optional) a list of accepted cipher suites, for `ssl_policy_type` set to `Custom`<br />- `ssl_profiles` : (optional) a map of SSL profiles that can be later on referenced in HTTPS listeners by providing a name of the profile in the `ssl_profile_name` property | `map` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_username"></a> [username](#output\_username) | Initial administrative username to use for VM-Series. |
| <a name="output_password"></a> [password](#output\_password) | Initial administrative password to use for VM-Series. |
| <a name="output_natgw_public_ips"></a> [natgw\_public\_ips](#output\_natgw\_public\_ips) | Nat Gateways Public IP resources. |
| <a name="output_metrics_instrumentation_keys"></a> [metrics\_instrumentation\_keys](#output\_metrics\_instrumentation\_keys) | The Instrumentation Key of the created instance(s) of Azure Application Insights. |
| <a name="output_lb_frontend_ips"></a> [lb\_frontend\_ips](#output\_lb\_frontend\_ips) | IP Addresses of the load balancers. |
| <a name="output_vmseries_mgmt_ips"></a> [vmseries\_mgmt\_ips](#output\_vmseries\_mgmt\_ips) | IP addresses for the VMSeries management interface. |
| <a name="output_bootstrap_storage_urls"></a> [bootstrap\_storage\_urls](#output\_bootstrap\_storage\_urls) | n/a |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->