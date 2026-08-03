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

In order to use GWLB, below minimal definition of Gateway Load Balancer can be used, for which:

- only name, VNet and subnet are defined
- default frontend IP configuration is used (Dynamic IPv4)
- zones 1, 2, 3 are configured (GWLB is zone redundant)
- default load balancing rule is used (with default load distribution)
- default health probe is used (protocol TCP on port 80)
- default 1 backend is configured (with 2 tunnel interfaces on ports 2000, 2001)

```hcl
  gwlb = {
    vmseries_gwlb = {                
      name = "vmseries-gwlb"          
      frontend_ip = {                 
        vnet_key   = "security"
        subnet_key = "data"
      }
    }
  }
```

For more customized requirements, below extended definition of GWLB can be applied, for which:

- frontend IP has custom name and static private IP address
- there are no zones defined
- custom name for load balancing rule is defined
- custom name and port for health probe is configured
- 2 backends are defined (external and internal)

```hcl
 gwlb = {
  vmseries_gwlb = {
    name  = "vmseries-gwlb2"
    zones = []

    frontend_ip = {
      name               = "custom-name-frontend-ip"
      vnet_key           = "security"
      subnet_key         = "data"
      private_ip_address = "10.0.1.24"
    }

    lb_rule = {
      name = "custom-name-lb-rule"
    }

    health_probe = {
      name = "custom-name-health-probe"
      port = 80
      protocol = "Tcp"
    }

    backends = {
      ext = {
        name = "external"
        tunnel_interfaces = {
          external = {
            identifier = 801
            port       = 2001
            protocol   = "VXLAN"
            type       = "External"
          }
        }
      }
      int = {
        name = "internal"
        tunnel_interfaces = {
          internal = {
            identifier = 800
            port       = 2000
            protocol   = "VXLAN"
            type       = "Internal"
          }
        }
      }
    }
  }
}
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 4.0

### Providers

- `azurerm`, version: ~> 4.0



### Resources

- `lb` (managed)
- `lb_backend_address_pool` (managed)
- `lb_probe` (managed)
- `lb_rule` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Azure Load Balancer.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`frontend_ip`](#frontend_ip) | `object` | Frontend IP configuration of the Gateway Load Balancer.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`zones`](#zones) | `list` | Controls zones for Gateway Load Balancer's Fronted IP configurations.
[`health_probe`](#health_probe) | `object` | Health probe configuration for the Gateway Load Balancer backends.
[`backends`](#backends) | `map` | Map with backend configurations for the Gateway Load Balancer.
[`lb_rule`](#lb_rule) | `object` | Load balancing rule configuration.

### Outputs

Name |  Description
--- | ---
`backend_pool_ids` | Backend pools' identifiers.
`frontend_ip_config_id` | Frontend IP configuration identifier.

### Required Inputs details

#### name

The name of the Azure Load Balancer.

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

#### frontend_ip

Frontend IP configuration of the Gateway Load Balancer.

Following settings are available:
- `name`                          - (`string`, required) name of the frontend IP configuration. `var.name` by default.
- `subnet_id`                     - (`string`, required) id of a subnet to associate with the configuration.
- `private_ip_address`            - (`string`, optional) private IP address to assign.
- `private_ip_address_version`    - (`string`, optional, defaults to `IPv4`) the IP version for the private IP address. Can be
                                    one of "IPv4", "IPv6".


Type: 

```hcl
object({
    name                       = string
    subnet_id                  = string
    private_ip_address         = optional(string)
    private_ip_address_version = optional(string, "IPv4")
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### zones

Controls zones for Gateway Load Balancer's Fronted IP configurations.

Setting this variable to explicit `null` disables a zonal deployment.
This can be helpful in regions where Availability Zones are not available.


Type: list(string)

Default value: `[1 2 3]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_probe

Health probe configuration for the Gateway Load Balancer backends.

Following settings are available:
- `name`                - (`string`, required) name of the health probe.
- `protocol`            - (`string`, required) protocol used by the health probe, can be one of "Tcp", "Http" or "Https".
- `port`                - (`number`, optional) port to run the probe against.
- `probe_threshold`     - (`number`, optional) number of consecutive probes that decide on forwarding traffic to an endpoint.
- `interval_in_seconds` - (`number`, optional) interval in seconds between probes, with a minimal value of 5.
- `request_path`        - (`string`, optional) used only for non `Tcp` probes, the URI used to check the endpoint status when
                          `protocol` is set to `Http(s)`.


Type: 

```hcl
object({
    name                = string
    protocol            = string
    port                = optional(number)
    probe_threshold     = optional(number)
    interval_in_seconds = optional(number)
    request_path        = optional(string, "/")
  })
```


Default value: `map[name:health_probe port:80 protocol:Tcp]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### backends

Map with backend configurations for the Gateway Load Balancer. Azure GWLB rule can have up to two backends.

Following settings are available:
- `name`              - (`string`, required) name of the backend.
- `tunnel_interfaces` - (`map`, required) map with tunnel interfaces:
  - `identifier`        - (`number`, required) interface identifier.
  - `port`              - (`number`, required) interface port.
  - `type`              - (`string`, required) either "External" or "Internal".

**Note!** \
If one backend is specified, it has to have both external and internal tunnel interfaces specified.
For two backends, each has to have exactly one.

On GWLB inspection enabled VM-Series instance, `identifier` and `port` default to:
- `800`/`2000` for `Internal` tunnel type
- `801`/`2001` for `External` tunnel type

Variable default reflects this configuration on GWLB side.
Additionally, for VM-Series tunnel interface protocol is always VXLAN.


Type: 

```hcl
map(object({
    name = string
    tunnel_interfaces = map(object({
      identifier = number
      port       = number
      protocol   = optional(string, "VXLAN")
      type       = string
    }))
  }))
```


Default value: `map[backend:map[name:backend tunnel_interfaces:map[external:map[identifier:801 port:2001 protocol:VXLAN type:External] internal:map[identifier:800 port:2000 protocol:VXLAN type:Internal]]]]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### lb_rule

Load balancing rule configuration.

Available options:
- `name`              - (`string`, optional) name for the rule.
- `load_distribution` - (`string`, optional, defaults to `Default`) specifies the load balancing distribution type to be used
                        by the Gateway Load Balancer. Can be one of "Default", "SourceIP", "SourceIPProtocol".


Type: 

```hcl
object({
    name              = string
    load_distribution = optional(string, "Default")
  })
```


Default value: `map[name:lb_rule]`

<sup>[back to list](#modules-optional-inputs)</sup>