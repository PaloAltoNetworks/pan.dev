---
hide_title: true
id: gwlb
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
sidebar_label: GWLB
title: Gateway Load Balancer Module for Azure
---

# Gateway Load Balancer Module for Azure

A Terraform module for deploying a Gateway Load Balancer for VM-Series firewalls.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/gwlb) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/gwlb)

## Usage

For usage see any of the reference architecture examples.

<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0, < 2.0 |
| <a name="requirement_azurerm"></a> [azurerm](#requirement\_azurerm) | ~> 3.25 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | ~> 3.25 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [azurerm_lb.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb) | resource |
| [azurerm_lb_backend_address_pool.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb_backend_address_pool) | resource |
| [azurerm_lb_probe.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb_probe) | resource |
| [azurerm_lb_rule.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb_rule) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_name"></a> [name](#input\_name) | The name of the gateway load balancer. | `string` | n/a | yes |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of a pre-existing resource group to place resources in. | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | Region to deploy load balancer and related resources in. | `string` | n/a | yes |
| <a name="input_frontend_ip_config"></a> [frontend\_ip\_config](#input\_frontend\_ip\_config) | Frontend IP configuration of the gateway load balancer. Following settings are available:<br />- `name`                          - (Optional\|string) Name of the frontend IP configuration. `var.name` by default.<br />- `private_ip_address_allocation` - (Optional\|string) The allocation method for the private IP address.<br />- `private_ip_address_version`    - (Optional\|string) The IP version for the private IP address.<br />- `private_ip_address`            - (Optional\|string) Private IP address to assign.<br />- `subnet_id`                     - (Required\|string) Id of a subnet to associate with the configuration.<br />- `zones`                         - (Optional\|list) List of AZs in which the IP address will be located in. | `any` | n/a | yes |
| <a name="input_health_probe"></a> [health\_probe](#input\_health\_probe) | Health probe configuration for the gateway load balancer backends. Following settings are available:<br />- `name`                - (Optional\|string) Name of the health probe. Defaults to `name` variable value.<br />- `port`                - (Required\|int)<br />- `protocol`            - (Optional\|string)<br />- `probe_threshold`     - (Optional\|int)<br />- `request_path`        - (Optional\|string)<br />- `interval_in_seconds` - (Optional\|int)<br />- `number_of_probes`    - (Optional\|int)<br /><br />For details, please refer to [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb_probe#argument-reference). | `map(any)` | n/a | yes |
| <a name="input_backends"></a> [backends](#input\_backends) | Map with backend configurations for the gateway load balancer. Azure GWLB rule can have up to two backends.<br />Following settings are available:<br />- `name`              - (Optional\|string) Name of the backend. If not specified name is generated from `name` variable and backend key.<br />- `tunnel_interfaces` - (Required\|map) Map with tunnel interfaces specs.)<br /><br />Each tunnel interface specification consists of following settings (refer to [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb_backend_address_pool#tunnel_interface) for details):<br />- `identifier` - (Required\|int) Interface identifier.<br />- `port`       - (Required\|int) Interface port.<br />- `type`       - (Required\|string) Either "External" or "Internal".<br /><br />If one backend is specified, it has to have both external and internal tunnel interfaces specified.<br />For two backends, each has to have exactly one.<br /><br />On GWLB inspection enabled VM-Series instance, `identifier` and `port` default to:<br />- `800`/`2000` for `Internal` tunnel type<br />- `801`/`2001` for `External` tunnel type<br />Variable default reflects this configuration on GWLB side. Additionally, for VM-Series tunnel interface protocol is always VXLAN. | `map(any)` | <pre>{<br />  "ext-int": {<br />    "tunnel\_interfaces": {<br />      "external": {<br />        "identifier": 801,<br />        "port": 2001,<br />        "protocol": "VXLAN",<br />        "type": "External"<br />      },<br />      "internal": {<br />        "identifier": 800,<br />        "port": 2000,<br />        "protocol": "VXLAN",<br />        "type": "Internal"<br />      }<br />    }<br />  }<br />}</pre> | no |
| <a name="input_lb_rule"></a> [lb\_rule](#input\_lb\_rule) | Load balancing rule config. Available options:<br />- `name`              - (Optional\|string) Name for the rule. Defaults to `var.frontend_ip_config.name`.<br />- `load_distribution` - (Optional\|string) Refer to [provider docs](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/lb_rule#load_distribution). | `map(string)` | `null` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Azure tags to apply to the created resources. | `map(string)` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_backend_pool_ids"></a> [backend\_pool\_ids](#output\_backend\_pool\_ids) | Backend pools' identifiers. |
| <a name="output_frontend_ip_config_id"></a> [frontend\_ip\_config\_id](#output\_frontend\_ip\_config\_id) | Frontend IP configuration identifier. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->