---
hide_title: true
id: dedicated_autoscale
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
toc_max_heading_level: 4
sidebar_label: Dedicated Firewall Option with Auto Scale
title: 'Reference Architecture with Terraform: VM-Series in Azure, Dedicated Architecture with autoscaling.
  Dedicated NGFW Option'
---
# Palo Alto Networks VM-Series Scaleset Module Example

An example of a Terraform module that deploys Next Generation Firewalls and related resources following the Dedicated Firewall reference architecture. In module a Virtual Machine Scale Set is used to run the Next Generation Firewalls. Thanks to custom, data plane oriented metrics published by PanOS it is possible to adjust the number of firewall appliances to the current workload (data plane utilization).

A Virtual Machine Scale Set is dynamic in nature, firewalls can be added or removed automatically, hence they cannot be managed in a classic way. Therefore they are not assigned with a public IP address. To ease licensing, management and updates a Panorama appliance is suggested. Deployment of a Panorama is not covered in this example, a [dedicated one exists](../standalone\_panorama/README.md) though.

**NOTE:**

- after the deployment the firewalls remain not configured and not licensed
- this example contains some **files*- that **can contain sensitive data**, namely the `TFVARS` file can contain bootstrap\_options properties in `var.vmseries` definition. Keep in mind that **this code*- is **only an example**. It's main purpose is to introduce the Terraform modules. It's not meant to be run on production in this form.

## Topology and resources

A note on resiliency - this is an example of a none zonal deployment. Resiliency is maintained by using fault domains (Scale Set's default mechanism).

This example architecture consists of:

- a VNET containing:
  - 4 subnets:
    - 3 of them dedicated to the firewalls: management, private and public
    - one dedicated to an Application Gateway
  - Route Tables and Network Security Groups
- 2 Virtual Machine Scale sets:
  - one for inbound, one for outbound, east-west traffic
  - with 3 network interfaces: management, public, private
  - no public addresses are assigned to firewalls interfaces
- 2 Load Balancers:
  - public - with a public IP address assigned, in front of the public interfaces of the inbound VMSS, for incoming traffic
  - private - in front of the firewalls private interfaces of the OBEW VMSS, for outgoing and east-west traffic
- a NAT Gateway responsible for handling the outgoing traffic for the management (updates) and public (outbound traffic in OBEW firewalls mainly) interfaces
- 2 Application Insights, one per each scale set, used to store the custom PanOS metrics
- an Application Gateway, serving as a reverse proxy for incoming traffic, with a sample rule setting the XFF header properly

### Architecture diagram

![Scaling-Topology-Overview](https://user-images.githubusercontent.com/42772730/235161583-98475129-aee4-4cc9-9fd8-9f8784ad09a6.png)

## Prerequisites

A list of requirements might vary depending on the platform used to deploy the infrastructure but a minimum one includes:

- (in case of non cloud shell deployment) credentials and (optionally) tools required to authenticate against Azure Cloud, see [AzureRM provider documentation for details](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs#authenticating-to-azure)
- [supported](#requirements) version of [`Terraform`](<https://developer.hashicorp.com/terraform/downloads>)
- if you have not run Palo Alto NGFW images in a subscription it might be necessary to accept the license first ([see this note](../../modules/vmseries/README.md#accept-azure-marketplace-terms))

A non-platform requirement would be a running Panorama instance. For full automation you might want to consider the following requirements:

- a template and a template stack with `DAY0` configuration
- a device group with security configuration (`DAY1` [iron skillet](https://github.com/PaloAltoNetworks/iron-skillet) for example) + any security and NAT rules of your choice
- a [Panorama Software Firewall License](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/license-the-vm-series-firewall/use-panorama-based-software-firewall-license-management) plugin to automatically manage licenses on newly created devices
- a [VM-Series](https://docs.paloaltonetworks.com/panorama/9-1/panorama-admin/panorama-plugins/plugins-types/install-the-vm-series-plugin-on-panorama) plugin to enable additional template options (custom metrics)

## Deploy the infrastructure

Steps to deploy the infrastructure are as following:

- checkout the code locally (if you haven't done so yet)
- copy the [`example.tfvars`](./example.tfvars) file, rename it to `terraform.tfvars` and adjust it to your needs (take a closer look at the `TODO` markers). If you already have a configured Panorama (with at least minimum configuration described above) you might want to also adjust the `bootstrap_options` for each scale set ([inbound](./example.tfvars#L205) and [obew](./example.tfvars#L249) separately).
- (optional) authenticate to AzureRM, switch to the Subscription of your choice if necessary
- initialize the Terraform module:

  ```console
  terraform init
  ```

- (optional) plan you infrastructure to see what will be actually deployed:

  ```console
  terraform plan
  ```

- deploy the infrastructure (you will have to confirm it with typing in `yes`):

  ```console
  terraform apply
  ```

  The deployment takes couple of minutes. Observe the output. At the end you should see a summary similar to this:

  ```console
  Apply complete! Resources: 52 added, 0 changed, 0 destroyed.

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
  ```

- at this stage you have to wait couple of minutes for the firewalls to bootstrap.

## Post deploy

The most important post-deployment action is (for deployments with auto scaling and Panorama) to retrieve the Application Insights instrumentation keys. This can be done by looking up the AI resources in the Azure portal, or directly from Terraform outputs:

```sh
terraform output metrics_instrumentation_keys
```

The retrieved keys should be put into appropriate templates in Panorama and pushed to the devices. From this moment on custom metrics are being sent to Application Insights and retrieved by Virtual Machine Scale Sets to trigger scale-in and scale-out operations.

Although firewalls in a Scale Set are not meant to be managed directly, they are still configured with password authentication. To retrieve the initial credentials run:

- for username:

  ```console
  terraform output username
  ```

- for password:

  ```console
  terraform output password
  ```

## Cleanup

To remove the deployed infrastructure run:

```console
terraform destroy
```

## Reference

### Requirements

The following requirements are needed by this module:

- <a name="requirement_terraform"></a> [terraform](#requirement\_terraform)

### Providers

The following providers are used by this module:

- <a name="provider_random"></a> [random](#provider\_random)

- <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm)

### Modules

The following Modules are called:

#### <a name="module_vnet"></a> [vnet](#module\_vnet)

Source: ../../modules/vnet

Version:

#### <a name="module_natgw"></a> [natgw](#module\_natgw)

Source: ../../modules/natgw

Version:

#### <a name="module_load_balancer"></a> [load\_balancer](#module\_load\_balancer)

Source: ../../modules/loadbalancer

Version:

#### <a name="module_ai"></a> [ai](#module\_ai)

Source: ../../modules/application_insights

Version:

#### <a name="module_appgw"></a> [appgw](#module\_appgw)

Source: ../../modules/appgw

Version:

#### <a name="module_vmss"></a> [vmss](#module\_vmss)

Source: ../../modules/vmss

Version:

### Resources

The following resources are used by this module:

- [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group) (resource)
- [random_password.this](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) (resource)
- [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/resource_group) (data source)

### Required Inputs

The following input variables are required:

#### <a name="input_location"></a> [location](#input\_location)

Description: The Azure region to use.

Type: `string`

#### <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name)

Description: Name of the Resource Group.

Type: `string`

#### <a name="input_vnets"></a> [vnets](#input\_vnets)

Description: A map defining VNETs.  

For detailed documentation on each property refer to [module documentation](https://github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules/blob/v0.5.4/modules/vnet/README.md)

- `name` :  A name of a VNET.
- `create_virtual_network` : (default: `true`) when set to `true` will create a VNET, `false` will source an existing VNET, in both cases the name of the VNET is specified with `name`
- `address_space` : a list of CIDRs for VNET
- `resource_group_name` :  (default: current RG) a name of a Resource Group in which the VNET will reside

- `create_subnets` : (default: `true`) if true, create the Subnets inside the Virtual Network, otherwise use pre-existing subnets
- `subnets` : map of Subnets to create

- `network_security_groups` : map of Network Security Groups to create
- `route_tables` : map of Route Tables to create.

Type: `any`

#### <a name="input_vmseries_version"></a> [vmseries\_version](#input\_vmseries\_version)

Description: VM-Series PAN-OS version - list available with `az vm image list -o table --all --publisher paloaltonetworks`. It's also possible to specify the Pan-OS version per Scale Set, see `var.vmss` variable.

Type: `string`

#### <a name="input_vmseries_vm_size"></a> [vmseries\_vm\_size](#input\_vmseries\_vm\_size)

Description: Azure VM size (type) to be created. Consult the *VM-Series Deployment Guide* as only a few selected sizes are supported. It's also possible to specify the the VM size per Scale Set, see `var.vmss` variable.

Type: `string`

### Optional Inputs

The following input variables are optional (have default values):

#### <a name="input_tags"></a> [tags](#input\_tags)

Description: Map of tags to assign to the created resources.

Type: `map(string)`

Default: `{}`

#### <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix)

Description: A prefix that will be added to all created resources.  
There is no default delimiter applied between the prefix and the resource name. Please include the delimiter in the actual prefix.

Example:
```
name_prefix = "test-"
```  

NOTICE. This prefix is not applied to existing resources. If you plan to reuse i.e. a VNET please specify it's full name, even if it is also prefixed with the same value as the one in this property.

Type: `string`

Default: `""`

#### <a name="input_create_resource_group"></a> [create\_resource\_group](#input\_create\_resource\_group)

Description: When set to `true` it will cause a Resource Group creation. Name of the newly specified RG is controlled by `resource_group_name`.  
When set to `false` the `resource_group_name` parameter is used to specify a name of an existing Resource Group.

Type: `bool`

Default: `true`

#### <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones)

Description: If `true`, enable zone support for resources.

Type: `bool`

Default: `true`

#### <a name="input_natgws"></a> [natgws](#input\_natgws)

Description: A map defining Nat Gateways.

Please note that a NatGW is a zonal resource, this means it's always placed in a zone (even when you do not specify one explicitly). Please refer to Microsoft documentation for notes on NatGW's zonal resiliency.

Following properties are supported:

- `name` : a name of the newly created NatGW.
- `create_natgw` : (default: `true`) create or source (when `false`) an existing NatGW. Created or sourced: the NatGW will be assigned to a subnet created by the `vnet` module.
- `resource_group_name` : name of a Resource Group hosting the NatGW (newly create or the existing one).
- `zone` : Availability Zone in which the NatGW will be placed, when skipped AzureRM will pick a zone.
- `idle_timeout` : connection IDLE timeout in minutes, for newly created resources
- `vnet_key` : a name (key value) of a VNET defined in `var.vnets` that hosts a subnet this NatGW will be assigned to.
- `subnet_keys` : a list of subnets (key values) the NatGW will be assigned to, defined in `var.vnets` for a VNET described by `vnet_name`.
- `create_pip` : (default: `true`) create a Public IP that will be attached to a NatGW
- `existing_pip_name` : when `create_pip` is set to `false`, source and attach and existing Public IP to the NatGW
- `existing_pip_resource_group_name` : when `create_pip` is set to `false`, name of the Resource Group hosting the existing Public IP
- `create_pip_prefix` : (default: `false`) create a Public IP Prefix that will be attached to the NatGW.
- `pip_prefix_length` : length of the newly created Public IP Prefix, can bet between 0 and 31 but this actually supported value depends on the Subscription.
- `existing_pip_prefix_name` : when `create_pip_prefix` is set to `false`, source and attach and existing Public IP Prefix to the NatGW
- `existing_pip_prefix_resource_group_name` : when `create_pip_prefix` is set to `false`, name of the Resource Group hosting the existing Public IP Prefix.

Example:
```
natgws = {
  "natgw" = {
    name         = "public-natgw"
    vnet_key     = "transit-vnet"
    subnet_keys  = ["public"]
    zone         = 1
  }
}
```

Type: `any`

Default: `{}`

#### <a name="input_load_balancers"></a> [load\_balancers](#input\_load\_balancers)

Description: A map containing configuration for all (private and public) Load Balancer that will be created in this deployment.

Following properties are available (for details refer to module's documentation):

- `name`                                - (`string`, required) name of the Load Balancer resource.
- `network_security_group_name`         - (`string`, required for public LB) a name of a security group, an ingress rule will be created in that NSG for each listener. **NOTE** this is the FULL NAME of the NSG (including prefixes).
- `network_security_group_rg_name`      - (`string`, required for public LB) a name of a resource group for the security group, to be used when the NSG is hosted in a different RG than the one described in `var.resource_group_name`.
- `network_security_allow_source_ips`   - (`list`, required for public LB) a list of IP addresses that will used in the ingress rules.
- `avzones`                             - (`list`, required for Zonal deployments) for regional Load Balancers, a list of supported zones (this has different meaning for public and private LBs - please refer to module's documentation for details).
- `frontend_ips`                        - (`map`, required) a map configuring both a listener and a load balancing rule, key is the name that will be used as an application name inside LB config as well as to create a rule in NSG (for public LBs), value is an object with the following properties:
  - `create_public_ip`          - (`boolean`, public LB only, optional, defaults to `false`) when set to `true` a Public IP will be created and associated with a listener
  - `public_ip_name`            - (`string`, public LB only, optional, defaults to `null`) when `create_public_ip` is set to `false` this property is used to reference an existing Public IP object in Azure
  - `public_ip_resource_group`  - (`string`, public LB only, optional, defaults to `null`) when using an existing Public IP created in a different Resource Group than the currently used use this property is to provide the name of that RG
  - `private_ip_address`        - (`string`, private LB only, optional, defaults to `null`) specify a static IP address that will be used by a listener
  - `vnet_key`                  - (`string`, private LB only, optional, defaults to `null`) when `private_ip_address` is set, specifies a VNET's key (as defined in `vnet` variable). This will be the VNET hosting this Load Balancer
  - `subnet_key`                - (`string`, private LB only, optional, defaults to `null`) when `private_ip_address` is set, specifies a subnet's key (as defined in `vnet` variable) to which the LB will be attached, in case of VMSeries this should be a internal/trust subnet
  - `rules`       - (`map`, required) a map configuring the actual rules load balancing rules, a key is a rule name, a value is an object with the following properties:
    - `protocol`  - (`string`, required) protocol used by the rule, can be one the following: `TCP`, `UDP` or `All` when creating an HA PORTS rule
    - `port`      - (`number`, required) port used by the rule, for HA PORTS rule set this to `0`

Example of a public Load Balancer:

```
"public_lb" = {
  name                              = "https_app_lb"
  network_security_group_name       = "untrust_nsg"
  network_security_allow_source_ips = ["1.2.3.4"]
  avzones                           = ["1", "2", "3"]
  frontend_ips = {
    "https_app_1" = {
      create_public_ip = true
      rules = {
        "balanceHttps" = {
          protocol = "Tcp"
          port     = 443
        }
      }
    }
  }
}
```

Example of a private Load Balancer with HA PORTS rule:

```
"private_lb" = {
  name = "ha_ports_internal_lb
  frontend_ips = {
    "ha-ports" = {
      vnet_key           = "trust_vnet"
      subnet_key         = "trust_snet"
      private_ip_address = "10.0.0.1"
      rules = {
        HA_PORTS = {
          port     = 0
          protocol = "All"
        }
      }
    }
  }
}
```

Type: `map`

Default: `{}`

#### <a name="input_application_insights"></a> [application\_insights](#input\_application\_insights)

Description: A map defining Azure Application Insights. There are three ways to use this variable:

* when the value is set to `null` (default) no AI is created
* when the value is a map containing `name` key (other keys are optional) a single AI instance will be created under the name that is the value of the `name` key
* when the value is an empty map or a map w/o the `name` key, an AI instance per each VMSeries VM will be created. All instances will share the same configuration. All instances will have names corresponding to their VM name.

Names for all AI instances are prefixed with `var.name_prefix`.

Properties supported (for details on each property see [modules documentation](../modules/application\_insights/README.md)):

- `name` : (optional, string) a name of a single AI instance
- `workspace_mode` : (optional, bool) defaults to `true`, use AI Workspace mode instead of the Classical (deprecated)
- `workspace_name` : (optional, string) defaults to AI name suffixed with `-wrkspc`, name of the Log Analytics Workspace created when AI is deployed in Workspace mode
- `workspace_sku` : (optional, string) defaults to PerGB2018, SKU used by WAL, see module documentation for details
- `metrics_retention_in_days` : (optional, number) defaults to current Azure default value, see module documentation for details

Example of an AIs created per VM, in Workspace mode, with metrics retention set to 1 year:
```
vmseries = {
  'vm-1' = {
    ....
  }
  'vm-2' = {
    ....
  }
}

application_insights = {
  metrics_retention_in_days = 365
}
```

Type: `map(string)`

Default: `null`

#### <a name="input_vmseries_sku"></a> [vmseries\_sku](#input\_vmseries\_sku)

Description: VM-Series SKU - list available with `az vm image list -o table --all --publisher paloaltonetworks`

Type: `string`

Default: `"byol"`

#### <a name="input_vmseries_username"></a> [vmseries\_username](#input\_vmseries\_username)

Description: Initial administrative username to use for all systems.

Type: `string`

Default: `"panadmin"`

#### <a name="input_vmseries_password"></a> [vmseries\_password](#input\_vmseries\_password)

Description: Initial administrative password to use for all systems. Set to null for an auto-generated password.

Type: `string`

Default: `null`

#### <a name="input_vmss"></a> [vmss](#input\_vmss)

Description: A map defining all Virtual Machine Scale Sets.

For detailed documentation on how to configure this resource, for available properties, especially for the defaults refer to [module documentation](../../modules/vmss/README.md)

Please take a closer look to the properties below. They are either required or control the most important aspects of the module:

name                                  | type      | required  | description
---                                   | :---:     | :---:     | ---
`name`                                | `string`  | yes       | name of the Virtual Machine Scale Set
`vm_size`                             | `string`  | no        | defaults to `var.vmseries_vm_size`, size of the VMSeries virtual machines created with this Scale Set, when specified overrides`var.vmseries_vm_size`
`version`                             | `string`  | no        | defaults to `var.vmseries_version`, PanOS version
`vnet_key`                            | `string`  | yes       | a key of a VNET defined in the `var.vnets` map
`bootstrap_options`                   | `string`  | no        | defaults to `''`, bootstrap options passed to every VM instance upon creation
`zones`                               | `list`    | no        | defaults to `[]`, a list of Availability Zones to use for Zone redundancy
`scale_in_policy`                     | `string`  | no        | see module defaults, policy of removing VMs when scaling in
`storage_account_type`                | `string`  | no        | see module defaults, type of managed disk that will be used on all VMs
`interfaces`                          | `list`    | yes       | configuration of all NICs assigned to a VM. A list of maps, each map is a NIC definition. Notice that the order **DOES** matter. NICs are attached to VMs in Azure in the order they are defined in this list, therefore the management interface has to be defined first. Following properties are available:
`interfaces.name`                     | `string` | yes       | string that will form the NIC name
`interfaces.subnet_key`               | `string` | yes       | a key of a subnet as defined in `var.vnets`
`interfaces.create_pip`               | `bool`   | no        | defaults to `false`, flag to create Public IP for an interface, defaults to `false`
`interfaces.load_balancer_key`        | `string` | no        | defaults to `null`, key of a Load Balancer defined in the `var.loadbalancers` variable
`interfaces.application_gateway_key`  | `string` | no        | defaults to `null`, key of an Application Gateway defined in the `var.appgws`
`interfaces.pip_domain_name_label`    | `string` | no        | defaults to `null`, prefix which should be used for the Domain Name Label for each VM instance

If you would like to set up autoscaling, following additional options are available:

- `autoscale_config`        - (`map`, optional, defaults to `{}`) map containing basic autoscale configuration
-- `count_default`           - (`number`, optional, see module defaults) default number or instances when autoscalling is not available
-- `count_minimum`           - (`number`, optional, see module defaults) minimum number of instances to reach when scaling in
-- `count_maximum`           - (`number`, optional, see module defaults) maximum number of instances when scaling out
-- `notification_emails`     - (`list(string)`, optional, defaults to `[]`) a list of e-mail addresses to notify about scaling events
- `autoscale_metrics`       - (`map`, optional, defaults to `{}`) metrics and thresholds used to trigger scaling events, see module documentation for details
- `scaleout_config`         - (`map`, optional, defaults to `{}`) scale out configuration, for details see module documentation
-- `statistic`               - (`string`, optional, see module defaults) aggregation method for statistics coming from different VMs
-- `time_aggregation`        - (`string`, optional, see module defaults) aggregation method applied to statistics in time window
-- `window_minutes`          - (`string`, optional, see module defaults) time windows used to analyze statistics
-- `cooldown_minutes`        - (`string`, optional, see module defaults) time to wait after a scaling event before analyzing the statistics again
- `scalein_config`          - (`map`, optional, defaults to `{}`) scale in configuration, same properties supported as for `scaleout_config`

Following properties are optional and can be used to fine-tune your infrastructure:

- `application_insights_id`       - (`string`, optional, defaults to `null`) ID of Application Insights instance that should be used to provide metrics for autoscaling
- `encryption_at_host_enabled`    - (`bool`, optional, see module defaults) should all of the disks attached to this Virtual Machine be encrypted
- `overprovision`                 - (`bool`, optional, see module defaults) when provisioning new VM, multiple will be provisioned but the 1st one to run will be kept
- `platform_fault_domain_count`   - (`number`, optional, see module defaults) number of fault domains to use
- `proximity_placement_group_id`  - (`string`, optional, defaults to `null`) ID of a proximity placement group the VMSS should be placed in
- `scale_in_force_deletion`       - (`bool`, optional, see module defaults) when `true`, forces deletion of VMs during scale in
- `single_placement_group`        - (`bool`, optional, see module defaults) limit the Scale Set to one Placement Group
- `disk_encryption_set_id`        - (`string`, optional, defaults to `null`) the ID of the Disk Encryption Set which should be used to encrypt this Data Disk
- `accelerated_networking`        - (`bool`, optional, see module defaults) enable Azure accelerated networking for all dataplane network interfaces
- `use_custom_image`              - (`bool`, optional, defaults to `false`) flag that controls usage of a custom OS image
- `custom_image_id`               - (`string`|required when `use_custom_image` is `true`) absolute ID of your own Custom Image to be used for creating new VM-Series

Example, no auto scaling:

```
{
"vmss" = {
  name              = "ngfw-vmss"
  vnet_key          = "transit"
  bootstrap_options = "type=dhcp"

  interfaces = [
    {
      name       = "management"
      subnet_key = "management"
    },
    {
      name       = "private"
      subnet_key = "private"
    },
    {
      name                    = "public"
      subnet_key              = "public"
      load_balancer_key       = "public"
      application_gateway_key = "public"
    }
  ]
}
```

Type: `any`

Default: `{}`

#### <a name="input_appgws"></a> [appgws](#input\_appgws)

Description: A map defining all Application Gateways in the current deployment.

For detailed documentation on how to configure this resource, for available properties, especially for the defaults and the `rules` property refer to [module documentation](../../modules/appgw/README.md).

Following properties are supported:
- `name` : name of the Application Gateway.
- `vnet_key` : a key of a VNET defined in the `var.vnets` map.
- `subnet_key` : a key of a subnet as defined in `var.vnets`. This has to be a subnet dedicated to Application Gateways v2.
- `vnet_key` : a key of a VNET defined in the `var.vnets` map.
- `subnet_key` : a key of a subnet as defined in `var.vnets`. This has to be a subnet dedicated to Application Gateways v2.
- `zones` : for zonal deployment this is a list of all zones in a region - this property is used by both: the Application Gateway and the Public IP created in front of the AppGW.
- `capacity` : (optional) number of Application Gateway instances, not used when autoscalling is enabled (see `capacity_min`)
- `capacity_min` : (optional) when set enables autoscaling and becomes the minimum capacity
- `capacity_max` : (optional) maximum capacity for autoscaling
- `enable_http2` : enable HTTP2 support on the Application Gateway
- `waf_enabled` : (optional) enables WAF Application Gateway, defining WAF rules is not supported, defaults to `false`
- `vmseries_public_nic_name` : name of the public VMSeries interface as defined in `interfaces` property.
- `managed_identities` : (optional) a list of existing User-Assigned Managed Identities, which Application Gateway uses to retrieve certificates from Key Vault
- `ssl_policy_type` : (optional) type of an SSL policy, defaults to `Predefined`
- `ssl_policy_name` : (optional) name of an SSL policy, for `ssl_policy_type` set to `Predefined`
- `ssl_policy_min_protocol_version` : (optional) minimum version of the TLS protocol for SSL Policy, for `ssl_policy_type` set to `Custom`
- `ssl_policy_cipher_suites` : (optional) a list of accepted cipher suites, for `ssl_policy_type` set to `Custom`
- `ssl_profiles` : (optional) a map of SSL profiles that can be later on referenced in HTTPS listeners by providing a name of the profile in the `ssl_profile_name` property

Type: `map`

Default: `{}`

### Outputs

The following outputs are exported:

#### <a name="output_username"></a> [username](#output\_username)

Description: Initial administrative username to use for VM-Series.

#### <a name="output_password"></a> [password](#output\_password)

Description: Initial administrative password to use for VM-Series.

#### <a name="output_metrics_instrumentation_keys"></a> [metrics\_instrumentation\_keys](#output\_metrics\_instrumentation\_keys)

Description: The Instrumentation Key of the created instance(s) of Azure Application Insights.

#### <a name="output_lb_frontend_ips"></a> [lb\_frontend\_ips](#output\_lb\_frontend\_ips)

Description: IP Addresses of the load balancers.
