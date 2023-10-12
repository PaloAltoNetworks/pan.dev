---
hide_title: true
id: gwlb_with_vmseries
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
sidebar_label: GWLB With VM-Series
title: VM-Series Azure Gateway Load Balancer example
---

# VM-Series Azure Gateway Load Balancer example

The exmaple allows to deploy VM-Series firewalls for inbound and outbound traffic inspection utilizing Azure Gateway Load Balancer in service chain model as described in the following [document](https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/set-up-the-vm-series-firewall-on-azure/deploy-the-vm-series-firewall-with-the-azure-gwlb).

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules/tree/main/examples/gwlb_with_vmseries) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/azurerm/latest/examples/gwlb_with_vmseries)

## Usage

### Deployment Steps

* Checkout the code locally.
* Copy `example.tfvars` to `terraform.tfvars` and adjust it to your needs.
* Copy `files/init-cfg.txt.sample` to `files/init-cfg.txt` and fill it in with required bootstrap parameters (see this [documentation](https://docs.paloaltonetworks.com/vm-series/10-2/vm-series-deployment/bootstrap-the-vm-series-firewall/create-the-init-cfgtxt-file/init-cfgtxt-file-components) for details).
* (optional) Authenticate to AzureRM, switch to the Subscription of your choice if necessary.
* Initialize the Terraform module:

      terraform init

* (optional) Plan you infrastructure to see what will be actually deployed:

      terraform plan

* Deploy the infrastructure:

      terraform apply

* At this stage you have to wait a few minutes for the firewalls to bootstrap.

### Post deploy

Firewalls in this example are configured with password authentication. To retrieve the initial credentials run:

* for username:

      terraform output username

* for password:

      terraform output password

The management public IP addresses are available in the `vmseries_mgmt_ips` output:

```sh
terraform output vmseries_mgmt_ips
```

You can now login to the devices using either:

* CLI - ssh client is required
* Web UI (https) - any modern web browser, note that initially the traffic is encrypted with a self-signed certificate.

With default example configuration, the devices already contain `DAY0` configuration, so all network interfaces should be configured and Azure Gateway Load Balancer should already report that the devices are healthy.

You can now proceed with licensing the devices and configuring your first rules.

Please also refer to [this repository](https://github.com/PaloAltoNetworks/iron-skillet) for `DAY1` configuration (security hardening).

### Cleanup

To remove the deployed infrastructure run:

```sh
terraform destroy
```

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0.0, < 2.0 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_http"></a> [http](#provider\_http) | n/a |
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | n/a |
| <a name="provider_local"></a> [local](#provider\_local) | n/a |
| <a name="provider_random"></a> [random](#provider\_random) | n/a |

### Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_vnet"></a> [vnet](#module\_vnet) | ../../modules/vnet | n/a |
| <a name="module_gwlb"></a> [gwlb](#module\_gwlb) | ../../modules/gwlb | n/a |
| <a name="module_ai"></a> [ai](#module\_ai) | ../../modules/application_insights | n/a |
| <a name="module_bootstrap"></a> [bootstrap](#module\_bootstrap) | ../../modules/bootstrap | n/a |
| <a name="module_bootstrap_share"></a> [bootstrap\_share](#module\_bootstrap\_share) | ../../modules/bootstrap | n/a |
| <a name="module_vmseries"></a> [vmseries](#module\_vmseries) | ../../modules/vmseries | n/a |
| <a name="module_load_balancer"></a> [load\_balancer](#module\_load\_balancer) | ../../modules/loadbalancer | n/a |
| <a name="module_appvm"></a> [appvm](#module\_appvm) | ../../modules/virtual_machine | n/a |

### Resources

| Name | Type |
|------|------|
| [azurerm_availability_set.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/availability_set) | resource |
| [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/resource_group) | resource |
| [local_file.bootstrap_xml](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file) | resource |
| [random_password.appvms](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [random_password.vmseries](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/password) | resource |
| [azurerm_resource_group.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/data-sources/resource_group) | data source |
| [http_http.this](https://registry.terraform.io/providers/hashicorp/http/latest/docs/data-sources/http) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | Prefix for resource names. | `string` | `""` | no |
| <a name="input_location"></a> [location](#input\_location) | Location where the resources will be deployed. | `string` | n/a | yes |
| <a name="input_create_resource_group"></a> [create\_resource\_group](#input\_create\_resource\_group) | When set to `true` it will cause a Resource Group creation. Name of the newly specified RG is controlled by `resource_group_name`.<br />When set to `false` the `resource_group_name` parameter is used to specify a name of an existing Resource Group. | `bool` | `true` | no |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of the Resource Group to create or use. | `string` | n/a | yes |
| <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones) | If `true`, enable zone support for resources. | `bool` | `true` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Map of tags to assign to all of the created resources. | `map(string)` | `{}` | no |
| <a name="input_vnets"></a> [vnets](#input\_vnets) | Map with VNet definitions. Each item supports following inputs for `vnet` module:<br />- `name`                    - (required\|string) VNet name.<br />- `create_virtual_network`  - (optional\|bool) Whether to create a new or source an existing VNet, defaults to `true`.<br />- `address_space`           - (optional\|list) List of CIDRs for the new VNet.<br />- `resource_group_name`     - (optional\|string) VNet's Resource Group, by default the one specified by `var.resource_group_name`.<br />- `create_subnets`          - (optional\|bool) Whether to create or source items from `subnets`, defaults to `true`.<br />- `subnets`                 - (required\|map) Subnet definitions.<br />- `network_security_groups` - (optional\|map) NSGs to create.<br />- `route_tables`            - (optional\|map) Route Tables to create.<br /><br />Please consult [module documentation](../../modules/vnet) for details. | `any` | n/a | yes |
| <a name="input_gateway_load_balancers"></a> [gateway\_load\_balancers](#input\_gateway\_load\_balancers) | Map with Gateway Load Balancer definitions. Following settings are supported:<br />- `name`                - (required\|string) Gateway Load Balancer name.<br />- `vnet_key`            - (required\|string) Key of a VNet from `var.vnets` that contains target Subnet for LB's frontned. Used to get Subnet ID in combination with `subnet_key` below.<br />- `subnet_key`          - (required\|string) Key of a Subnet from `var.vnets[vnet_key]`.<br />- `frontend_ip_config`  - (optional\|map) Remaining Frontned IP configuration.<br />- `resource_group_name` - (optional\|string) LB's Resource Group, by default the one specified by `var.resource_group_name`.<br />- `backends`            - (optional\|map) LB's backend configurations.<br />- `heatlh_probe`        - (optional\|map) Health probe configuration.<br /><br />Please consult [module documentation](../../modules/gwlb) for details. | `any` | `{}` | no |
| <a name="input_application_insights"></a> [application\_insights](#input\_application\_insights) | A map defining Azure Application Insights. There are three ways to use this variable:<br /><br />* when the value is set to `null` (default) no AI is created<br />* when the value is a map containing `name` key (other keys are optional) a single AI instance will be created under the name that is the value of the `name` key<br />* when the value is an empty map or a map w/o the `name` key, an AI instance per each VMSeries VM will be created. All instances will share the same configuration. All instances will have names corresponding to their VM name.<br /><br />Names for all AI instances are prefixed with `var.name_prefix`.<br /><br />Properties supported (for details on each property see [module documentation](../modules/application\_insights)):<br /><br />- `name`                      - (optional\|string) Name of a single AI instance<br />- `workspace_mode`            - (optional\|bool) Use AI Workspace mode instead of the Classical (deprecated), defaults to `true`.<br />- `workspace_name`            - (optional\|string) Name of the Log Analytics Workspace created when AI is deployed in Workspace mode, defaults to AI name suffixed with `-wrkspc`.<br />- `workspace_sku`             - (optional\|string) SKU used by WAL, see module documentation for details, defaults to PerGB2018.<br />- `metrics_retention_in_days` - (optional\|number) Defaults to current Azure default value, see module documentation for details.<br /><br />Example of an AIs created per VM, in Workspace mode, with metrics retention set to 1 year:<pre>vmseries = {<br />  'vm-1' = {<br />    ....<br />  }<br />  'vm-2' = {<br />    ....<br />  }<br />}<br /><br />application\_insights = {<br />  metrics\_retention\_in\_days = 365<br />}</pre> | `map(string)` | `null` | no |
| <a name="input_bootstrap_storages"></a> [bootstrap\_storages](#input\_bootstrap\_storages) | A map defining Azure Storage Accounts used to host file shares for bootstrapping NGFWs. This variable defines only Storage Accounts, file shares are defined per each VM. See `vmseries` variable, `bootstrap_storage` property.<br />Following properties are supported:<br />- `name`                             - (required\|string) Name of the Storage Account. Please keep in mind that storage account name has to be globally unique. This name will not be prefixed with the value of `var.name_prefix`.<br />- `create_storage_account`           - (optional\|bool) Whether to create or source an existing Storage Account, defaults to `true`.<br />- `resource_group_name`              - (optional\|string) Name of the Resource Group hosting the Storage Account, defaults to `var.resource_group_name`.<br />- `storage_acl`                      - (optional\|bool) Allows to enable network ACLs on the Storage Account. If set to `true`,  `storage_allow_vnet_subnets` and `storage_allow_inbound_public_ips` options become available. Defaults to `false`.<br />- `storage_allow_vnet_subnets`       - (optional\|map) Map with objects that contains `vnet_key`/`subnet_key` used to identify subnets allowed to access the Storage Account. Note that `enable_storage_service_endpoint` has to be set to `true` in the corresponding subnet configuration.<br />- `storage_allow_inbound_public_ips` - (optional\|list) Whitelist that contains public IPs/ranges allowed to access the Storage Account. Note that the code automatically to queries https://ifcondif.me to obtain the public IP address of the machine executing the code to enable bootstrap files upload. | `any` | `{}` | no |
| <a name="input_vmseries_common"></a> [vmseries\_common](#input\_vmseries\_common) | Configuration common for all firewall instances. Following settings can be specified:<br />- `username`           - (required\|string)<br />- `password`           - (optional\|string)<br />- `ssh_keys`           - (optional\|string)<br />- `img_version`        - (optional\|string)<br />- `img_sku`            - (optional\|string)<br />- `vm_size`            - (optional\|string)<br />- `bootstrap_options`  - (optional\|string)<br />- `vnet_key`           - (optional\|string)<br />- `interfaces`         - (optional\|list(object))<br />- `ai_update_interval` - (optional\|number)<br /><br />All are used directly as inputs for `vmseries` module (please see [documentation](../../modules/vmseries) for details), except for the last three:<br />- `vnet_key`           - (required\|string) Used to identify VNet in which subnets for interfaces exist.<br />- `ai_update_interval` - (optional\|number) If Application Insights are used this property can override the default metrics update interval (in minutes). | `any` | n/a | yes |
| <a name="input_vmseries"></a> [vmseries](#input\_vmseries) | Map with VM-Series instance specific configuration. Following properties are supported:<br />- `name`                 - (required\|string) Instance name.<br />- `avzone`               - (optional\|string) AZ to deploy instance in, defaults to "1".<br />- `availability_set_key` - (optional\|string) Key from `var.availability_sets`, used to determine Availabbility Set ID.<br />- `bootstrap_storage`    - (optional\|map) Map that contains bootstrap package contents definition, when present triggers creation of a File Share in an existing Storage Account. Following properties supported:<br />  - `key`                    - (required\|string) Identifies Storage Account to use from `var.bootstrap_storages`.<br />  - `static_files`           - (optional\|map) Map where keys are local file paths, values determine destination in the bootstrap package (file share) where the file will be copied.<br />  - `template_bootstrap_xml` - (optional\|string) Path to the `bootstrap.xml` template. When defined it will trigger creation of the `bootstrap.xml` file and it's upload to the boostrap package. This is a simple `day 0` configuration file that should set up only basic networking. Specifying this property forces additional properties that are required to properly template the file. They can be defined per each VM or globally for all VMs (in `var.vmseries_common`). The properties are listed below.<br />- `interfaces`         - List of objects with interface definitions. Utilizes all properties of `interfaces` input (see [documantation](../../modules/vmseries#inputs)), expect for `subnet_id` and `lb_backend_pool_id`, which are determined based on the following new items:<br />  - `subnet_key`       - (optional\|string) Key of a subnet from `var.vnets[vnet_key]` to associate interface with.<br />  - `gwlb_key`         - (optional\|string) Key from `var.gwlbs` that identifies GWLB that will be associated with the interface, required when `enable_backend_pool` is `true`.<br />  - `gwlb_backend_key` - (optional\|string) Key that identifies a backend from the GWLB selected by `gwlb_key` to associate th interface with, required when `enable_backend_pool` is `true`.<br /><br />Additionally, it's possible to override following settings from `var.vmseries_common`:<br />- `bootstrap_options` - When defined, it not only takes precedence over `var.vmseries_common.bootstrap_options`, but also over `bootstrap_storage` described below.<br />- `img_version`<br />- `img_sku`<br />- `vm_size`<br />- `ai_update_interval` | `map(any)` | n/a | yes |
| <a name="input_availability_sets"></a> [availability\_sets](#input\_availability\_sets) | A map defining availability sets. Can be used to provide infrastructure high availability when zones cannot be used.<br /><br />Following properties are supported:<br />- `name`                - (required\|string) Name of the Application Insights.<br />- `update_domain_count` - (optional\|int) Specifies the number of update domains that are used, defaults to 5 (Azure defaults).<br />- `fault_domain_count`  - (optional\|int) Specifies the number of fault domains that are used, defaults to 3 (Azure defaults).<br /><br />Please keep in mind that Azure defaults are not working for each region (especially the small ones, w/o any Availability Zones). Please verify how many update and fault domain are supported in a region before deploying this resource. | `any` | `{}` | no |
| <a name="input_load_balancers"></a> [load\_balancers](#input\_load\_balancers) | A map containing configuration for all (private and public) Load Balancer that will be created in this deployment.<br />Following properties are available (for details refer to module's documentation):<br />- `name`                              - (required\|string) Name of the Load Balancer resource.<br />- `network_security_group_name`       - (optional\|string) Public LB only - name of a security group, an ingress rule will be created in that NSG for each listener. **NOTE** this is the FULL NAME of the NSG (including prefixes).<br />- `network_security_group_rg_name`    - (optional\|string) Public LB only - name of a resource group for the security group, to be used when the NSG is hosted in a different RG than the one described in `var.resource_group_name`.<br />- `network_security_allow_source_ips` - (optional\|string) Public LB only - list of IP addresses that will be allowed in the ingress rules.<br />- `avzones`                           - (optional\|list) For regional Load Balancers, a list of supported zones (this has different meaning for public and private LBs - please refer to module's documentation for details).<br />- `frontend_ips`                      - (optional\|map) Map configuring both a listener and load balancing/outbound rules, key is the name that will be used as an application name inside LB config as well as to create a rule in NSG (for public LBs), values are objects with the following properties:<br />  - `create_public_ip`         - (optional\|bool) Public LB only - defaults to `false`, when set to `true` a Public IP will be created and associated with a listener<br />  - `public_ip_name`           - (optional\|string) Public LB only - defaults to `null`, when `create_public_ip` is set to `false` this property is used to reference an existing Public IP object in Azure<br />  - `public_ip_resource_group` - (optional\|string) Public LB only - defaults to `null`, when using an existing Public IP created in a different Resource Group than the currently used use this property is to provide the name of that RG<br />  - `private_ip_address`       - (optional\|string) Private LB only - defaults to `null`, specify a static IP address that will be used by a listener<br />  - `vnet_key`                 - (optional\|string) Private LB only - defaults to `null`, when `private_ip_address` is set specifies a vnet's key (as defined in `vnet` variable). This will be the VNET hosting this Load Balancer<br />  - `subnet_key`               - (optional\|string) Private LB only - defaults to `null`, when `private_ip_address` is set specifies a subnet's key (as defined in `vnet` variable) to which the LB will be attached, in case of VMSeries this should be a internal/trust subnet<br />  - `in_rules`/`out_rules`     - (optional\|map) Configuration of load balancing/outbound rules, please refer to [load\_balancer module documentation](../../modules/loadbalancer#inputs) for details.<br /><br />Example of a public Load Balancer:<pre>"public\_lb" = {<br />  name                              = "https\_app\_lb"<br />  network\_security\_group\_name       = "untrust\_nsg"<br />  network\_security\_allow\_source\_ips = ["1.2.3.4"]<br />  avzones                           = ["1", "2", "3"]<br />  frontend\_ips = {<br />    "https\_app\_1" = {<br />      create\_public\_ip = true<br />      rules = {<br />        "balanceHttps" = {<br />          protocol = "Tcp"<br />          port     = 443<br />        }<br />      }<br />    }<br />  }<br />}</pre>Example of a private Load Balancer with HA PORTS rule:<pre>"private\_lb" = {<br />  name = "internal\_app\_lb"<br />  frontend\_ips = {<br />    "ha-ports" = {<br />      vnet\_key           = "internal\_app\_vnet"<br />      subnet\_key         = "internal\_app\_snet"<br />      private\_ip\_address = "10.0.0.1"<br />      rules = {<br />        HA\_PORTS = {<br />          port     = 0<br />          protocol = "All"<br />        }<br />      }<br />    }<br />  }<br />}</pre> | `map` | `{}` | no |
| <a name="input_appvms_common"></a> [appvms\_common](#input\_appvms\_common) | Common settings for sample applications:<br />- `username` - (required\|string)<br />- `password` - (optional\|string)<br />- `ssh_keys` - (optional\|list(string)<br />- `vm_size` - (optional\|string)<br />- `disk_type` - (optional\|string)<br />- `accelerated_networking` - (optional\|bool)<br /><br />At least one of `password` or `ssh_keys` has to be provided. | `any` | n/a | yes |
| <a name="input_appvms"></a> [appvms](#input\_appvms) | Configuration for sample application VMs. Available settings:<br />- `name`              - (required\|string) Instance name.<br />- `avzone`            - (optional\|string) AZ to deploy instance in, defaults to "1".<br />- `vnet_key`          - (required\|string) Used to identify VNet in which subnets for interfaces exist.<br />- `subnet_key`        - (required\|string) Key of a subnet from `var.vnets[vnet_key]` to associate interface with.<br />- `load_balancer_key` - (optional\|string) Key from `var.gwlbs` that identifies GWLB that will be associated with the interface, required when `enable_backend_pool` is `true`. | `any` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_username"></a> [username](#output\_username) | Initial administrative username to use for VM-Series. |
| <a name="output_password"></a> [password](#output\_password) | Initial administrative password to use for VM-Series. |
| <a name="output_vmseries_mgmt_ips"></a> [vmseries\_mgmt\_ips](#output\_vmseries\_mgmt\_ips) | IP addresses for VM-Series management. |
| <a name="output_gwlb_frontend_ip_configuration_ids"></a> [gwlb\_frontend\_ip\_configuration\_ids](#output\_gwlb\_frontend\_ip\_configuration\_ids) | Configuration IDs of Gateway Load Balancers' frontends. |
| <a name="output_appvms_username"></a> [appvms\_username](#output\_appvms\_username) | Initial administrative username to use for application VMs. |
| <a name="output_appvms_password"></a> [appvms\_password](#output\_appvms\_password) | Initial administrative password to use for application VMs. |
| <a name="output_lb_frontend_ips"></a> [lb\_frontend\_ips](#output\_lb\_frontend\_ips) | IP addresses of the Load Balancers serving applications. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->