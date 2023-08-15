---
hide_title: true
id: common_vmseries_and_autoscale
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
sidebar_label: Common Firewall Option with Autoscaling
title: 'Reference Architecture with Terraform: VM-Series in Azure, Centralized Architecture,
  Common NGFW Option with Autoscaling'
---

# Reference Architecture with Terraform: VM-Series in Azure, Centralized Architecture, Common NGFW Option with Autoscaling

Palo Alto Networks produces several [validated reference architecture design and deployment documentation guides](https://www.paloaltonetworks.com/resources/reference-architectures), which describe well-architected and tested deployments. When deploying VM-Series in a public cloud, the reference architectures guide users toward the best security outcomes, whilst reducing rollout time and avoiding common integration efforts.
The Terraform code presented here will deploy Palo Alto Networks VM-Series firewalls in Azure based on a centralized design with common VM-Series with autoscaling(Virtual Machine Scale Sets); for a discussion of other options, please see the design guide from [the reference architecture guides](https://www.paloaltonetworks.com/resources/reference-architectures).

Virtual Machine Scale Sets (VMSS) are used for autoscaling to run the Next Generation Firewalls, with custom data plane oriented metrics published by PanOS it is possible to adjust the number of firewall appliances to the current workload (data plane utilization). Since firewalls are added or removed automatically, they cannot be managed in a classic way. To ease licensing, management and updates a Panorama appliance is suggested. Deployment of a Panorama instance is not covered in this example, but a [dedicated one exists](../standalone_panorama).

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules/tree/main/examples/common_vmseries_and_autoscale) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/azurerm/latest/examples/common_vmseries_and_autoscale)

## Reference Architecture Design

![simple](a7c2452d-f926-49da-bf21-9d840282a0a2.png)

This code implements:
- a _centralized design_, a hub-and-spoke topology with a Transit VNet containing VM-Series to inspect all inbound, outbound, east-west, and enterprise traffic
- the _common option_, which routes all traffic flows onto a single set of VM-Series
- _auto scaling_ for the VM-Series, where a Virtual Machine Scale Set (VMSS) is used to provision VM-Series that will scale in and out dynamically, as workload demands fluctuate

## Detailed Architecture and Design

### Centralized Design

This design uses a Transit VNet. Application functions and resources are deployed across multiple VNets that are connected in a hub-and-spoke topology. The hub of the topology, or transit VNet, is the central point of connectivity for all inbound, outbound, east-west, and enterprise traffic. You deploy all VM-Series firewalls within the transit VNet.

### Common Option

The common firewall option leverages a single set of VM-Series firewalls. The sole set of firewalls operates as a shared resource and may present scale limitations with all traffic flowing through a single set of firewalls due to the performance degradation that occurs when traffic crosses virtual routers. This option is suitable for smaller scale deployments because inbound and outbound traffic flows occur on the same set of firewalls. However, the technical integration complexity is high.

![Common-VMSeries-with-autoscaling](4594683f-546c-4dc2-a4ea-cc211377bea8.png)

This reference architecture consists of:

* a VNET containing:
  * 4 subnets:
    * 3 of them dedicated to the firewalls: management, private and public
    * one dedicated to an Application Gateway
  * Route Tables and Network Security Groups
* 1 Virtual Machine Scale set:
  * deployed across availability zones
  * for inbound, outbound and east-west traffic
  * with 3 network interfaces: management, public, private
  * with public IP addresses assigned to:
    * management interface
    * public interface - due to use of a public Load Balancer this public IP is used mainly for outgoing traffic
* 2 Load Balancers:
  * public - with a public IP address assigned, in front of the public interfaces of the firewalls in VMSS, for incoming traffic
  * private - in front of the private interfaces of the firewalls in VMSS, for outgoing and east-west traffic
* an Application Insights, used to store the custom PanOS metrics sent from firewalls in scale set
* an Application Gateway, serving as a reverse proxy for incoming traffic, with a sample rule setting the XFF header properly

_DISCLAIMER_ - Public IP addresses are assigned to management interfaces in this example in order to simplify the deployment. With a private Panorama connectivity in place and Panorama Software Firewall License plugin you can bootstrap the firewalls without public IPs assigned to the management interfaces. You should also enable [Automatically push content when software device registers to Panorama](https://docs.paloaltonetworks.com/pan-os/10-2/pan-os-new-features/panorama-features/automatic-content-push-for-vm-series-and-cn-series-firewalls) on the template stack and [schedule content updates using Panorama](https://docs.paloaltonetworks.com/pan-os/10-2/pan-os-upgrade/upgrade-panorama/deploy-updates-to-firewalls-log-collectors-and-wildfire-appliances-using-panorama/schedule-a-content-update-using-panorama). Alternatively content updates can be configured to be fetched via data plane interfaces with service routes.

### Auto Scaling VM-Series

Auto scaling: Public-cloud environments focus on scaling out a deployment instead of scaling up. This architectural difference stems primarily from the capability of public-cloud environments to dynamically increase or decrease the number of resources allocated to your environment. Using native Azure services like Virtual Machine Scale Sets (VMSS), Application Insights and VM-Series automation features, the guide implements VM-Series that will scale in and out dynamically, as your protected workload demands fluctuate. The VM-Series firewalls are deployed in a Virtual Machine Scale Set for inbound and outbound/east-west firewalls in common option, and are automatically registered to Azure Load Balancers.

## Prerequisites

A list of requirements might vary depending on the platform used to deploy the infrastructure but a minimum one includes:

* (in case of non cloud shell deployment) credentials and (optionally) tools required to authenticate against Azure Cloud, see [AzureRM provider documentation for details](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs#authenticating-to-azure)
* [supported](#requirements) version of [`Terraform`](<https://developer.hashicorp.com/terraform/downloads>)
* if you have not run Palo Alto NGFW images in a subscription it might be necessary to accept the license first ([see this note](../../modules/vmseries#accept-azure-marketplace-terms))

A non-platform requirement would be a running Panorama instance. For full automation you might want to consider the following requirements:

* a template and a template stack with `DAY0` configuration
* a device group with security configuration (`DAY1` [iron skillet](https://github.com/PaloAltoNetworks/iron-skillet) for example) + any security and NAT rules of your choice
* a [Panorama Software Firewall License](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/license-the-vm-series-firewall/use-panorama-based-software-firewall-license-management) plugin to automatically manage licenses on newly created devices
* a [VM-Series](https://docs.paloaltonetworks.com/panorama/9-1/panorama-admin/panorama-plugins/plugins-types/install-the-vm-series-plugin-on-panorama) plugin to enable additional template options (custom metrics)

**NOTE:**

* after the deployment the firewalls remain not configured and not licensed.
* this example contains some **files** that **can contain sensitive data**. Keep in mind that **this code** is **only an example**. It's main purpose is to introduce the Terraform modules.

## Usage

### Deployment Steps

* checkout the code locally (if you haven't done so yet)
* copy the [`example.tfvars`](./example.tfvars) file, rename it to `terraform.tfvars` and adjust it to your needs (take a closer look at the `TODO` markers). If you already have a configured Panorama (with at least minimum configuration described above) you might want to also adjust the `bootstrap_options` for the scale set ([common](./example.tfvars#L205) .
* (optional) authenticate to AzureRM, switch to the Subscription of your choice if necessary
* initialize the Terraform module:

      terraform init

* (optional) plan you infrastructure to see what will be actually deployed:

      terraform plan

* deploy the infrastructure (you will have to confirm it with typing in `yes`):

      terraform apply

  The deployment takes couple of minutes. Observe the output. At the end you should see a summary similar to this:

      Apply complete! Resources: 43 added, 0 changed, 0 destroyed.

      Outputs:

      lb_frontend_ips = {
        "private" = {
          "ha-ports" = "1.2.3.4"
        }
        "public" = {
          "palo-lb-app1-pip" = "1.2.3.4"
        }
      }
      metrics_instrumentation_keys = <sensitive>
      password = <sensitive>
      username = "panadmin"

* at this stage you have to wait couple of minutes for the firewalls to bootstrap.

### Post deploy

The most important post-deployment action is (for deployments with auto scaling and Panorama) to retrieve the Application Insights instrumentation keys. This can be done by looking up the AI resources in the Azure portal, or directly from Terraform outputs:

```sh
terraform output metrics_instrumentation_keys
```

The retrieved keys should be put into appropriate templates in Panorama and pushed to the devices. From this moment on, custom metrics are being sent to Application Insights and retrieved by the Virtual Machine Scale Set to trigger scale-in and scale-out operations.

Although firewalls in a Scale Set are not meant to be managed directly, they are still configured with password authentication. To retrieve the initial credentials run:

* for username:

      terraform output username

* for password:

      terraform output password

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
| <a name="module_natgw"></a> [natgw](#module\_natgw) | ../../modules/natgw | n/a |
| <a name="module_load_balancer"></a> [load\_balancer](#module\_load\_balancer) | ../../modules/loadbalancer | n/a |
| <a name="module_ai"></a> [ai](#module\_ai) | ../../modules/application_insights | n/a |
| <a name="module_appgw"></a> [appgw](#module\_appgw) | ../../modules/appgw | n/a |
| <a name="module_vmss"></a> [vmss](#module\_vmss) | ../../modules/vmss | n/a |

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
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the Resource Group. | `string` | n/a | yes |
| <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones) | If `true`, enable zone support for resources. | `bool` | `true` | no |
| <a name="input_vnets"></a> [vnets](#input\_vnets) | A map defining VNETs.<br /><br />For detailed documentation on each property refer to [module documentation](../../modules/vnet)<br /><br />- `name` :  A name of a VNET.<br />- `create_virtual_network` : (default: `true`) when set to `true` will create a VNET, `false` will source an existing VNET, in both cases the name of the VNET is specified with `name`<br />- `address_space` : a list of CIDRs for VNET<br />- `resource_group_name` :  (default: current RG) a name of a Resource Group in which the VNET will reside<br /><br />- `create_subnets` : (default: `true`) if true, create the Subnets inside the Virtual Network, otherwise use pre-existing subnets<br />- `subnets` : map of Subnets to create<br /><br />- `network_security_groups` : map of Network Security Groups to create<br />- `route_tables` : map of Route Tables to create. | `any` | n/a | yes |
| <a name="input_natgws"></a> [natgws](#input\_natgws) | A map defining Nat Gateways. <br /><br />Please note that a NatGW is a zonal resource, this means it's always placed in a zone (even when you do not specify one explicitly). Please refer to Microsoft documentation for notes on NatGW's zonal resiliency. <br /><br />Following properties are supported:<br /><br />- `name` : a name of the newly created NatGW.<br />- `create_natgw` : (default: `true`) create or source (when `false`) an existing NatGW. Created or sourced: the NatGW will be assigned to a subnet created by the `vnet` module.<br />- `resource_group_name : name of a Resource Group hosting the NatGW (newly create or the existing one).<br />- `zone` : Availability Zone in which the NatGW will be placed, when skipped AzureRM will pick a zone.<br />- `idle\_timeout` : connection IDLE timeout in minutes, for newly created resources<br />- `vnet\_key` : a name (key value) of a VNET defined in `var.vnets` that hosts a subnet this NatGW will be assigned to.<br />- `subnet\_keys` : a list of subnets (key values) the NatGW will be assigned to, defined in `var.vnets` for a VNET described by `vnet\_name`.<br />- `create\_pip` : (default: `true`) create a Public IP that will be attached to a NatGW<br />- `existing\_pip\_name` : when `create\_pip` is set to `false`, source and attach and existing Public IP to the NatGW<br />- `existing\_pip\_resource\_group\_name` : when `create\_pip` is set to `false`, name of the Resource Group hosting the existing Public IP<br />- `create\_pip\_prefix` : (default: `false`) create a Public IP Prefix that will be attached to the NatGW.<br />- `pip\_prefix\_length` : length of the newly created Public IP Prefix, can bet between 0 and 31 but this actually supported value depends on the Subscription.<br />- `existing\_pip\_prefix\_name` : when `create\_pip\_prefix` is set to `false`, source and attach and existing Public IP Prefix to the NatGW<br />- `existing\_pip\_prefix\_resource\_group\_name` : when `create\_pip\_prefix` is set to `false`, name of the Resource Group hosting the existing Public IP Prefix.<br /><br />Example:<br />`<pre>natgws = {<br />  "natgw" = {<br />    name         = "public-natgw"<br />    vnet\_key     = "transit-vnet"<br />    subnet\_keys  = ["public"]<br />    zone         = 1<br />  }<br />}</pre> | `any` | `{}` | no |
| <a name="input_load_balancers"></a> [load\_balancers](#input\_load\_balancers) | A map containing configuration for all (private and public) Load Balancer that will be created in this deployment.<br /><br />Following properties are available (for details refer to module's documentation):<br /><br />- `name`: name of the Load Balancer resource.<br />- `network_security_group_name`: (public LB) a name of a security group, an ingress rule will be created in that NSG for each listener. **NOTE** this is the FULL NAME of the NSG (including prefixes).<br />- `network_security_group_rg_name`: (public LB) a name of a resource group for the security group, to be used when the NSG is hosted in a different RG than the one described in `var.resource_group_name`.<br />- `network_security_allow_source_ips`: (public LB) a list of IP addresses that will used in the ingress rules.<br />- `avzones`: (both) for regional Load Balancers, a list of supported zones (this has different meaning for public and private LBs - please refer to module's documentation for details).<br />- `frontend_ips`: (both) a map configuring both a listener and a load balancing rule, key is the name that will be used as an application name inside LB config as well as to create a rule in NSG (for public LBs), value is an object with the following properties:<br />  - `create_public_ip`: (public LB) defaults to `false`, when set to `true` a Public IP will be created and associated with a listener<br />  - `public_ip_name`: (public LB) defaults to `null`, when `create_public_ip` is set to `false` this property is used to reference an existing Public IP object in Azure<br />  - `public_ip_resource_group`: (public LB) defaults to `null`, when using an existing Public IP created in a different Resource Group than the currently used use this property is to provide the name of that RG<br />  - `private_ip_address`: (private LB) defaults to `null`, specify a static IP address that will be used by a listener<br />  - `vnet_key`: (private LB) defaults to `null`, when `private_ip_address` is set specifies a vnet's key (as defined in `vnet` variable). This will be the VNET hosting this Load Balancer<br />  - `subnet_key`: (private LB) defaults to `null`, when `private_ip_address` is set specifies a subnet's key (as defined in `vnet` variable) to which the LB will be attached, in case of VMSeries this should be a internal/trust subnet<br />  - `rules` - a map configuring the actual rules load balancing rules, a key is a rule name, a value is an object with the following properties:<br />    - `protocol`: protocol used by the rule, can be one the following: `TCP`, `UDP` or `All` when creating an HA PORTS rule<br />    - `port`: port used by the rule, for HA PORTS rule set this to `0`<br /><br />Example of a public Load Balancer:<pre>"public\_lb" = {<br />  name                              = "https\_app\_lb"<br />  network\_security\_group\_name       = "untrust\_nsg"<br />  network\_security\_allow\_source\_ips = ["1.2.3.4"]<br />  avzones                           = ["1", "2", "3"]<br />  frontend\_ips = {<br />    "https\_app\_1" = {<br />      create\_public\_ip = true<br />      rules = {<br />        "balanceHttps" = {<br />          protocol = "Tcp"<br />          port     = 443<br />        }<br />      }<br />    }<br />  }<br />}</pre>Example of a private Load Balancer with HA PORTS rule:<pre>"private\_lb" = {<br />  name = "ha\_ports\_internal\_lb<br />  frontend\_ips = {<br />    "ha-ports" = {<br />      vnet\_key           = "trust\_vnet"<br />      subnet\_key         = "trust\_snet"<br />      private\_ip\_address = "10.0.0.1"<br />      rules = {<br />        HA\_PORTS = {<br />          port     = 0<br />          protocol = "All"<br />        }<br />      }<br />    }<br />  }<br />}</pre> | `map` | `{}` | no |
| <a name="input_application_insights"></a> [application\_insights](#input\_application\_insights) | A map defining Azure Application Insights. There are three ways to use this variable:<br /><br />* when the value is set to `null` (default) no AI is created<br />* when the value is a map containing `name` key (other keys are optional) a single AI instance will be created under the name that is the value of the `name` key<br />* when the value is an empty map or a map w/o the `name` key, an AI instance per each VMSeries VM will be created. All instances will share the same configuration. All instances will have names corresponding to their VM name.<br /><br />Names for all AI instances are prefixed with `var.name_prefix`.<br /><br />Properties supported (for details on each property see [modules documentation](../../modules/application\_insights)):<br /><br />- `name` : (optional, string) a name of a single AI instance<br />- `workspace_mode` : (optional, bool) defaults to `true`, use AI Workspace mode instead of the Classical (deprecated)<br />- `workspace_name` : (optional, string) defaults to AI name suffixed with `-wrkspc`, name of the Log Analytics Workspace created when AI is deployed in Workspace mode<br />- `workspace_sku` : (optional, string) defaults to PerGB2018, SKU used by WAL, see module documentation for details<br />- `metrics_retention_in_days` : (optional, number) defaults to current Azure default value, see module documentation for details<br /><br />Example of an AIs created per VM, in Workspace mode, with metrics retention set to 1 year:<pre>vmseries = {<br />  'vm-1' = {<br />    ....<br />  }<br />  'vm-2' = {<br />    ....<br />  }<br />}<br /><br />application\_insights = {<br />  metrics\_retention\_in\_days = 365<br />}</pre> | `map(string)` | `null` | no |
| <a name="input_vmseries_version"></a> [vmseries\_version](#input\_vmseries\_version) | VM-Series PAN-OS version - list available with `az vm image list -o table --all --publisher paloaltonetworks`. It's also possible to specify the Pan-OS version per Scale Set, see `var.vmss` variable. | `string` | n/a | yes |
| <a name="input_vmseries_vm_size"></a> [vmseries\_vm\_size](#input\_vmseries\_vm\_size) | Azure VM size (type) to be created. Consult the *VM-Series Deployment Guide* as only a few selected sizes are supported. It's also possible to specify the the VM size per Scale Set, see `var.vmss` variable. | `string` | n/a | yes |
| <a name="input_vmseries_sku"></a> [vmseries\_sku](#input\_vmseries\_sku) | VM-Series SKU - list available with `az vm image list -o table --all --publisher paloaltonetworks` | `string` | `"byol"` | no |
| <a name="input_vmseries_username"></a> [vmseries\_username](#input\_vmseries\_username) | Initial administrative username to use for all systems. | `string` | `"panadmin"` | no |
| <a name="input_vmseries_password"></a> [vmseries\_password](#input\_vmseries\_password) | Initial administrative password to use for all systems. Set to null for an auto-generated password. | `string` | `null` | no |
| <a name="input_vmss"></a> [vmss](#input\_vmss) | A map defining all Virtual Machine Scale Sets.<br /><br />For detailed documentation on how to configure this resource, for available properties, especially for the defaults refer to [module documentation](../../modules/vmss)<br /><br />Following properties are available:<br />- `name` : (string\|required) name of the Virtual Machine Scale Set.<br />- `vm_size` : size of the VMSeries virtual machines created with this Scale Set, when specified overrides `var.vmseries_vm_size`.<br />- `version` : PanOS version, when specified overrides `var.vmseries_version`.<br />- `vnet_key` : (string\|required) a key of a VNET defined in the `var.vnets` map.<br />- `bootstrap_options` : (string\|`''`) bootstrap options passed to every VM instance upon creation.<br />- `zones` : (list(string)\|`[]`) a list of Availability Zones to use for Zone redundancy<br />- `encryption_at_host_enabled` : (bool\|`null` - Azure defaults) should all of the disks attached to this Virtual Machine be encrypted<br />- `overprovision` : (bool\|`null` - module defaults) when provisioning new VM, multiple will be provisioned but the 1st one to run will be kept<br />- `platform_fault_domain_count` : (number\|`null` - Azure defaults) number of fault domains to use<br />- `proximity_placement_group_id` : (string\|`null`) ID of a proximity placement group the VMSS should be placed in<br />- `scale_in_policy` : (string\|`null` - Azure defaults) policy of removing VMs when scaling in<br />- `scale_in_force_deletion` : (bool\|`null` - module default) forces (`true`) deletion of VMs during scale in<br />- `single_placement_group` : (bool\|`null` - Azure defaults) limit the Scale Set to one Placement Group<br />- `storage_account_type` : (string\|`null` - module defaults) type of managed disk that will be used on all VMs<br />- `disk_encryption_set_id` : (string\|`null`) the ID of the Disk Encryption Set which should be used to encrypt this Data Disk<br />- `accelerated_networking` : (bool\|`null`- module defaults) enable Azure accelerated networking for all dataplane network interfaces<br />- `use_custom_image` : (bool\|`false`) <br />- `custom_image_id` : (string\|reqquired when `use_custom_image` is `true`) absolute ID of your own Custom Image to be used for creating new VM-Series<br />- `application_insights_id` : (string\|`null`) ID of Application Insights instance that should be used to provide metrics for autoscaling<br />- `interfaces` : (list(string)\|`[]`) configuration of all NICs assigned to a VM. A list of maps, each map is a NIC definition. Notice that the order DOES matter. NICs are attached to VMs in Azure in the order they are defined in this list, therefore the management interface has to be defined first. Following properties are available:<br />  - `name` : (string\|required) string that will form the NIC name<br />  - `subnet_key` : (string\|required) a key of a subnet as defined in `var.vnets`<br />  - `create_pip` : (bool\|`false`) flag to create Public IP for an interface, defaults to `false`<br />  - `load_balancer_key` : (string\|`null`) key of a Load Balancer defined in the `var.loadbalancers` variable<br />  - `application_gateway_key` : (string\|`null`) key of an Application Gateway defined in the `var.appgws`<br />  - `pip_domain_name_label` : (string\|`null`) prefix which should be used for the Domain Name Label for each VM instance<br />- `autoscale_config` : (map\|`{}`) map containing basic autoscale configuration<br />  - `count_default` : (number\|`null` - module defaults) default number or instances when autoscalling is not available<br />  - `count_minimum` : (number\|`null` - module defaults) minimum number of instances to reach when scaling in<br />  - `count_maximum` : (number\|`null` - module defaults) maximum number of instances when scaling out<br />  - `notification_emails` : (list(string)\|`null` - module defaults) a list of e-mail addresses to notify about scaling events<br />- `autoscale_metrics` : (map\|`{}`) metrics and thresholds used to trigger scaling events, see module documentation for details<br />- `scaleout_config` : (map\|`{}`) scale out configuration, for details see module documentation<br />  - `statistic` : (string\|`null` - module defaults) aggregation method for statistics coming from different VMs<br />  - `time_aggregation` : (string\|`null` - module defaults) aggregation method applied to statistics in time window<br />  - `window_minutes` : (string\|`null` - module defaults) time windows used to analyze statistics<br />  - `cooldown_minutes` : (string\|`null` - module defaults) time to wait after a scaling event before analyzing the statistics again<br />- `scalein_config` : (map\|`{}`) scale in configuration, same properties supported as for `scaleout_config`<br /><br />Example, no auto scaling:<pre>{<br />"vmss" = {<br />  name              = "ngfw-vmss"<br />  vnet\_key          = "transit"<br />  bootstrap\_options = "type=dhcp-client"<br /><br />  interfaces = [<br />    {<br />      name       = "management"<br />      subnet\_key = "management"<br />    },<br />    {<br />      name       = "private"<br />      subnet\_key = "private"<br />    },<br />    {<br />      name                    = "public"<br />      subnet\_key              = "public"<br />      load\_balancer\_key       = "public"<br />      application\_gateway\_key = "public"<br />    }<br />  ]<br />}</pre> | `any` | `{}` | no |
| <a name="input_appgws"></a> [appgws](#input\_appgws) | A map defining all Application Gateways in the current deployment.<br /><br />For detailed documentation on how to configure this resource, for available properties, especially for the defaults and the `rules` property refer to [module documentation](../../modules/appgw).<br /><br />Following properties are supported:<br />- `name` : name of the Application Gateway.<br />- `vnet_key` : a key of a VNET defined in the `var.vnets` map.<br />- `subnet_key` : a key of a subnet as defined in `var.vnets`. This has to be a subnet dedicated to Application Gateways v2.<br />- `vnet_key` : a key of a VNET defined in the `var.vnets` map.<br />- `subnet_key` : a key of a subnet as defined in `var.vnets`. This has to be a subnet dedicated to Application Gateways v2.<br />- `zones` : for zonal deployment this is a list of all zones in a region - this property is used by both: the Application Gateway and the Public IP created in front of the AppGW.<br />- `capacity` : (optional) number of Application Gateway instances, not used when autoscalling is enabled (see `capacity_min`)<br />- `capacity_min` : (optional) when set enables autoscaling and becomes the minimum capacity<br />- `capacity_max` : (optional) maximum capacity for autoscaling<br />- `enable_http2` : enable HTTP2 support on the Application Gateway<br />- `waf_enabled` : (optional) enables WAF Application Gateway, defining WAF rules is not supported, defaults to `false`<br />- `vmseries_public_nic_name` : name of the public VMSeries interface as defined in `interfaces` property.<br />- `managed_identities` : (optional) a list of existing User-Assigned Managed Identities, which Application Gateway uses to retrieve certificates from Key Vault<br />- `ssl_policy_type` : (optional) type of an SSL policy, defaults to `Predefined`<br />- `ssl_policy_name` : (optional) name of an SSL policy, for `ssl_policy_type` set to `Predefined`<br />- `ssl_policy_min_protocol_version` : (optional) minimum version of the TLS protocol for SSL Policy, for `ssl_policy_type` set to `Custom`<br />- `ssl_policy_cipher_suites` : (optional) a list of accepted cipher suites, for `ssl_policy_type` set to `Custom`<br />- `ssl_profiles` : (optional) a map of SSL profiles that can be later on referenced in HTTPS listeners by providing a name of the profile in the `ssl_profile_name` property | `map` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_username"></a> [username](#output\_username) | Initial administrative username to use for VM-Series. |
| <a name="output_password"></a> [password](#output\_password) | Initial administrative password to use for VM-Series. |
| <a name="output_metrics_instrumentation_keys"></a> [metrics\_instrumentation\_keys](#output\_metrics\_instrumentation\_keys) | The Instrumentation Key of the created instance(s) of Azure Application Insights. |
| <a name="output_lb_frontend_ips"></a> [lb\_frontend\_ips](#output\_lb\_frontend\_ips) | IP Addresses of the load balancers. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->