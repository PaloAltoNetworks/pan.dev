---
hide_title: true
id: loadbalancer
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
sidebar_label: Loadbalancer
title: Load Balancer Module for Azure
---

# Load Balancer Module for Azure

A Terraform module for deploying a Load Balancer for VM-Series firewalls.
Supports both standalone and scale set deployments.

> [!NOTE]
> The module can create a public or a private Load Balancer
> Due to that some properties are mutually exclusive.

The module creates a single Load Balancer and a single backend for it, but it allows multiple frontends.

> [!NOTE]
> In case of a public Load Balancer, you can define outbound rules and use the frontend's public IP address to access the internet.
> If this approach is chosen please note that all inbound rules will have the outbound SNAT disabled as you cannot mix
> SNAT with outbound rules for a single backend.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/loadbalancer) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/loadbalancer)

## Usage

There are two basic modes the module can work in: a public and a private Load Balancer.

### Private Load Balancer

To create a private Load Balancer one has to specify an ID of an existing Subnet and a private IP address
in each frontend IP configuration.

Example of a private Load Balancer with HA ports rule:

```hcl
module "lbi" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/loadbalancer"

  name                = "private-lb"
  region              = "West Europe"
  resource_group_name = "existing-rg"

  frontend_ips = {
    ha = {
      name               = "HA"
      subnet_id          = "/subscription/xxxx/......."
      private_ip_address = "10.0.0.1"
      in_rules = {
        ha = {
          name     = "HA"
          port     = 0
          protocol = "All"
        }
      }
    }
  }
}
```

### Public Load Balancer

To create a public Load Balancer one has to specify a name of a public IP resource (existing or new)
in each frontend IP configuration.

Example of a private Load Balancer with a single rule for port `80`:

```hcl
module "lbe" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/loadbalancer"

  name                = "public-lb"
  region              = "West Europe"
  resource_group_name = "existing-rg"

  frontend_ips = {
    web = {
      name             = "web-traffic"
      public_ip_name   = "public-ip"
      create_public_ip = true
      in_rules = {
        http = {
          name     = "http"
          port     = 80
          protocol = "TCP"
        }
      }
    }
  }
}
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 3.98

### Providers

- `azurerm`, version: ~> 3.98



### Resources

- `lb` (managed)
- `lb_backend_address_pool` (managed)
- `lb_outbound_rule` (managed)
- `lb_probe` (managed)
- `lb_rule` (managed)
- `network_security_rule` (managed)
- `public_ip` (managed)
- `public_ip` (data)

### Required Inputs

<<<<<<< HEAD
Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Azure Load Balancer.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`backend_name`](#backend_name) | `string` | The name of the backend pool to create.
[`frontend_ips`](#frontend_ips) | `map` | A map of objects describing Load Balancer Frontend IP configurations with respective inbound and outbound rules.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`zones`](#zones) | `list` | Controls zones for Load Balancer's fronted IP configurations.
[`health_probes`](#health_probes) | `map` | Backend's health probe definition.
[`nsg_auto_rules_settings`](#nsg_auto_rules_settings) | `object` | Controls automatic creation of NSG rules for all defined inbound rules.
=======
| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_frontend_ips"></a> [frontend\_ips](#input\_frontend\_ips) | A map of objects describing LB Frontend IP configurations, inbound and outbound rules. Used for both public or private load balancers. <br />Keys of the map are names of LB Frontend IP configurations.<br /><br />Each Frontend IP configuration can have multiple rules assigned. They are defined in a maps called `in_rules` and `out_rules` for inbound and outbound rules respectively. A key in this map is the name of the rule, while value is the actual rule configuration. To understand this structure please see examples below.<br /><br />**Inbound rules.**<br /><br />Here is a list of properties supported by each `in_rule`:<br /><br />- `protocol` : required, communication protocol, either 'Tcp', 'Udp' or 'All'.<br />- `port` : required, communication port, this is both the front- and the backend port if `backend_port` is not given.<br />- `backend_port` : optional, this is the backend port to forward traffic to in the backend pool.<br />- `floating_ip` : optional, defaults to `true`, enables floating IP for this rule.<br />- `session_persistence` : optional, defaults to 5 tuple (Azure default), see `Session persistence/Load distribution` below for details.<br /><br />Public LB<br /><br />- `create_public_ip` : Optional. Set to `true` to create a public IP.<br />- `public_ip_name` : Ignored if `create_public_ip` is `true`. The existing public IP resource name to use.<br />- `public_ip_resource_group` : Ignored if `create_public_ip` is `true` or if `public_ip_name` is null. The name of the resource group which holds `public_ip_name`.<br /><br />Example<pre>frontend\_ips = \{<br />  pip\_existing = \{<br />    create\_public\_ip         = false<br />    public\_ip\_name           = "my\_ip"<br />    public\_ip\_resource\_group = "my\_rg\_name"<br />    in\_rules = \{<br />      HTTP = \{<br />        port         = 80<br />        protocol     = "Tcp"<br />      \}<br />    \}<br />  \}<br />\}</pre>Forward to a different port on backend pool<pre>frontend\_ips = \{<br />  pip\_existing = \{<br />    create\_public\_ip         = false<br />    public\_ip\_name           = "my\_ip"<br />    public\_ip\_resource\_group = "my\_rg\_name"<br />    in\_rules = \{<br />      HTTP = \{<br />        port         = 80<br />        backend\_port = 8080<br />        protocol     = "Tcp"<br />      \}<br />    \}<br />  \}<br />\}</pre>Private LB<br /><br />- `subnet_id` : Identifier of an existing subnet. This also trigger creation of an internal LB.<br />- `private_ip_address` : A static IP address of the Frontend IP configuration, has to be in limits of the subnet's (specified by `subnet_id`) address space. When not set, changes the address allocation from `Static` to `Dynamic`.<br /><br />Example<pre>frontend\_ips = \{<br />  internal\_fe = \{<br />    subnet\_id                     = azurerm\_subnet.this.id<br />    private\_ip\_address            = "192.168.0.10"<br />    in\_rules = \{<br />      HA\_PORTS = \{<br />        port         = 0<br />        protocol     = "All"<br />      \}<br />    \}<br />  \}<br />\}</pre>Session persistence/Load distribution<br /><br />By default the Load Balancer uses a 5 tuple hash to map traffic to available servers. This can be controlled using `session_persistence` property defined inside a rule. Available values are:<br /><br />- `Default` : this is the 5 tuple hash - this method is also used when no property is defined<br />- `SourceIP` : a 2 tuple hash is used<br />- `SourceIPProtocol` : a 3 tuple hash is used<br /><br />Example<pre>frontend\_ips = \{<br />    rule\_1 = \{<br />      create\_public\_ip = true<br />      in\_rules = \{<br />        HTTP = \{<br />          port     = 80<br />          protocol = "Tcp"<br />          session\_persistence = "SourceIP"<br />        \}<br />      \}<br />    \}<br />  \}</pre>**Outbound rules.**<br /><br />Each Frontend IP config can have outbound rules specified. Setting at least one `out_rule` switches the outgoing traffic from SNAT to Outbound rules. Keep in mind that since we use a single backend, and you cannot mix SNAT and Outbound rules traffic in rules using the same backend, setting one `out_rule` switches the outgoing traffic route for **ALL** `in_rules`.<br /><br />Following properties are available:<br /><br />- `protocol` : Protocol used by the rule. On of `All`, `Tcp` or `Udp` is accepted.<br />- `allocated_outbound_ports` : Number of ports allocated per instance. Defaults to `1024`.<br />- `enable_tcp_reset` : Ignored when `protocol` is set to `Udp`, defaults to `False` (Azure defaults).<br />- `idle_timeout_in_minutes` : Ignored when `protocol` is set to `Udp`. TCP connection timeout in case the connection is idle. Defaults to 4 minutes (Azure defaults).<br /><br />Example:<pre>frontend\_ips = \{<br />  rule\_1 = \{<br />    create\_public\_ip = true<br />    in\_rules = \{<br />      HTTP = \{<br />        port     = 80<br />        protocol = "Tcp"<br />        session\_persistence = "SourceIP"<br />      \}<br />    \}<br />    out\_rules = \{<br />      "outbound\_tcp" = \{<br />        protocol                 = "Tcp"<br />        allocated\_outbound\_ports = 2048<br />        enable\_tcp\_reset         = true<br />        idle\_timeout\_in\_minutes  = 10<br />      \}<br />    \}<br />  \}<br />\}</pre> | `any` | n/a | yes |
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of a pre-existing Resource Group to place the resources in. | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | Region to deploy load balancer and dependencies. | `string` | n/a | yes |
| <a name="input_backend_name"></a> [backend\_name](#input\_backend\_name) | The name of the backend pool to create. All the frontends of the load balancer always use the same single backend. | `string` | `"vmseries_backend"` | no |
| <a name="input_name"></a> [name](#input\_name) | The name of the load balancer. | `string` | n/a | yes |
| <a name="input_probe_name"></a> [probe\_name](#input\_probe\_name) | The name of the load balancer probe. | `string` | `"vmseries_probe"` | no |
| <a name="input_probe_port"></a> [probe\_port](#input\_probe\_port) | Health check port number of the load balancer probe. | `string` | `"80"` | no |
| <a name="input_network_security_allow_source_ips"></a> [network\_security\_allow\_source\_ips](#input\_network\_security\_allow\_source\_ips) | List of IP CIDR ranges (such as `["192.168.0.0/16"]` or `["*"]`) from which the inbound traffic to all frontends should be allowed.<br />If it's empty, user is responsible for configuring a Network Security Group separately.<br />The list cannot include Azure tags like "Internet" or "Sql.EastUS". | `list(string)` | `[]` | no |
| <a name="input_network_security_resource_group_name"></a> [network\_security\_resource\_group\_name](#input\_network\_security\_resource\_group\_name) | Name of the Resource Group where the `network_security_group_name` resides. If empty, defaults to `resource_group_name`. | `string` | `""` | no |
| <a name="input_network_security_group_name"></a> [network\_security\_group\_name](#input\_network\_security\_group\_name) | Name of the pre-existing Network Security Group (NSG) where to add auto-generated rules. Each NSG rule corresponds to a single `in_rule` on the load balancer.<br />User is responsible to associate the NSG with the load balancer's subnet, the module only supplies the rules.<br />If empty, user is responsible for configuring an NSG separately. | `string` | `null` | no |
| <a name="input_network_security_base_priority"></a> [network\_security\_base\_priority](#input\_network\_security\_base\_priority) | The base number from which the auto-generated priorities of the NSG rules grow.<br />Ignored if `network_security_group_name` is empty or if `network_security_allow_source_ips` is empty. | `number` | `1000` | no |
| <a name="input_enable_zones"></a> [enable\_zones](#input\_enable\_zones) | If `false`, all the subnet-associated frontends and also all created Public IP addresses default to not to use Availability Zones (the `No-Zone` setting). It is intended for the regions that do not yet support Availability Zones. | `bool` | `true` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Azure tags to apply to the created resources. | `map(string)` | `\{\}` | no |
| <a name="input_avzones"></a> [avzones](#input\_avzones) | Controls zones for load balancer's Fronted IP configurations. For:<br /><br />* public IPs - these are regions in which the IP resource is available<br />* private IPs - this represents Zones to which Azure will deploy paths leading to this Frontend IP.<br /><br />For public IPs, after provider version 3.x (Azure API upgrade) you need to specify all zones available in a region (typically 3), ie: for zone-redundant with 3 availability zone in current region value will be:<pre>["1","2","3"]</pre> | `list(string)` | `[]` | no |
>>>>>>> 940c9e38 (first pass at fixing all mdx compilation/syntax errors)

### Outputs

Name |  Description
--- | ---
`id` | The identifier of the Load Balancer resource.
`backend_pool_id` | The identifier of the backend pool.
`frontend_ip_configs` | Map of IP addresses, one per each entry of `frontend_ips` input. Contains public IP address for the frontends that have it,
private IP address otherwise.

`health_probe` | The health probe object.

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

#### backend_name

The name of the backend pool to create. All frontends of the Load Balancer always use the same backend.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### frontend_ips

A map of objects describing Load Balancer Frontend IP configurations with respective inbound and outbound rules.
  
Each Frontend IP configuration can have multiple rules assigned.
They are defined in a maps called `in_rules` and `out_rules` for inbound and outbound rules respectively.

Since this module can be used to create either a private or a public Load Balancer some properties can be mutually exclusive.
To ease configuration they were grouped per Load Balancer type.

Private Load Balancer:

- `name`                - (`string`, required) name of a frontend IP configuration
- `subnet_id`           - (`string`, required) an ID of an existing subnet that will host the private Load Balancer
- `private_ip_address`  - (`string`, required) the IP address of the Load Balancer
- `in_rules`            - (`map`, optional, defaults to `{}`) a map defining inbound rules, see details below
- `gwlb_fip_id`         - (`string`, optional, defaults to `null`) an ID of a frontend IP configuration
                          of a Gateway Load Balancer

Public Load Balancer:

- `name`                          - (`string`, required) name of a frontend IP configuration
- `public_ip_name`                - (`string`, required) name of a public IP resource
- `create_public_ip`              - (`bool`, optional, defaults to `false`) when set to `true` a new public IP will be
                                    created, otherwise an existing resource will be used;
                                    in both cases the name of the resource is controlled by `public_ip_name` property
- `public_ip_resource_group_name` - (`string`, optional, defaults to the Load Balancer's RG) name of a Resource Group
                                    hosting an existing public IP resource
- `in_rules`                      - (`map`, optional, defaults to `{}`) a map defining inbound rules, see details below
- `out_rules`                     - (`map`, optional, defaults to `{}`) a map defining outbound rules, see details below

Below are the properties for the `in_rules` map:

- `name`                - (`string`, required) a name of an inbound rule
- `protocol`            - (`string`, required) communication protocol, either 'Tcp', 'Udp' or 'All'.
- `port`                - (`number`, required) communication port, this is both the front- and the backend port
                          if `backend_port` is not set; value of `0` means all ports
- `backend_port`        - (`number`, optional, defaults to `null`) this is the backend port to forward traffic
                          to in the backend pool
- `health_probe_key`    - (`string`, optional, defaults to `default`) a key from the `var.health_probes` map defining
                          a health probe to use with this rule
- `floating_ip`         - (`bool`, optional, defaults to `true`) enables floating IP for this rule.
- `session_persistence` - (`string`, optional, defaults to `Default`) controls session persistance/load distribution,
                          three values are possible:
  - `Default`          - this is the 5 tuple hash.
  - `SourceIP`         - a 2 tuple hash is used.
  - `SourceIPProtocol` - a 3 tuple hash is used.
- `nsg_priority`        - (number, optional, defaults to `null`) this becomes a priority of an auto-generated NSG rule,
                          when skipped the rule priority will be auto-calculated. For more details on auto-generated NSG rules
                          see [`nsg_auto_rules_settings`](#nsg_auto_rules_settings).

Below are the properties for `out_rules` map. 
  
**Warning!** \
Setting at least one `out_rule` switches the outgoing traffic from SNAT to outbound rules. Keep in mind that since we use a
single backend, and you cannot mix SNAT and outbound rules traffic in rules using the same backend, setting one `out_rule`
switches the outgoing traffic route for **ALL** `in_rules`.

- `name`                      - (`string`, required) a name of an outbound rule
- `protocol`                  - (`string`, required) protocol used by the rule. One of `All`, `Tcp` or `Udp` is accepted
- `allocated_outbound_ports`  - (`number`, optional, defaults to `null`) number of ports allocated per instance,
                                when skipped provider defaults will be used (`1024`),
                                when set to `0` port allocation will be set to default number (Azure defaults);
                                maximum value is `64000`
- `enable_tcp_reset`          - (`bool`, optional, defaults to Azure defaults) ignored when `protocol` is set to `Udp`
- `idle_timeout_in_minutes`   - (`number`, optional, defaults to Azure defaults) TCP connection timeout in minutes
                                (between 4 and 120) 
                                in case the connection is idle, ignored when `protocol` is set to `Udp`

Examples

```hcl
# rules for a public Load Balancer, reusing an existing public IP and doing port translation
frontend_ips = {
  pip_existing = {
    create_public_ip              = false
    public_ip_name                = "my_ip"
    public_ip_resource_group_name = "my_rg_name"
    in_rules = {
      HTTP = {
        port         = 80
        protocol     = "Tcp"
        backend_port = 8080
      }
    }
  }
}

# rules for a private Load Balancer, one HA PORTs rule
frontend_ips = {
  internal = {
    subnet_id                     = azurerm_subnet.this.id
    private_ip_address            = "192.168.0.10"
    in_rules = {
      HA_PORTS = {
        port         = 0
        protocol     = "All"
      }
    }
  }
}

# rules for a public Load Balancer, session persistance with 2 tuple hash, outbound rule defined
frontend_ips = {
  rule_1 = {
    create_public_ip = true
    in_rules = {
      HTTP = {
        port     = 80
        protocol = "Tcp"
        session_persistence = "SourceIP"
      }
    }
  }
  out_rules = {
    "outbound_tcp" = {
      protocol                 = "Tcp"
      allocated_outbound_ports = 2048
      enable_tcp_reset         = true
      idle_timeout_in_minutes  = 10
    }
  }
}
```


Type: 

```hcl
map(object({
    name                          = string
    public_ip_name                = optional(string)
    create_public_ip              = optional(bool, false)
    public_ip_resource_group_name = optional(string)
    subnet_id                     = optional(string)
    private_ip_address            = optional(string)
    gwlb_fip_id                   = optional(string)
    in_rules = optional(map(object({
      name                = string
      protocol            = string
      port                = number
      backend_port        = optional(number)
      health_probe_key    = optional(string, "default")
      floating_ip         = optional(bool, true)
      session_persistence = optional(string, "Default")
      nsg_priority        = optional(number)
    })), {})
    out_rules = optional(map(object({
      name                     = string
      protocol                 = string
      allocated_outbound_ports = optional(number)
      enable_tcp_reset         = optional(bool)
      idle_timeout_in_minutes  = optional(number)
    })), {})
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### zones

Controls zones for Load Balancer's fronted IP configurations.

For:

- public IPs  - these are zones in which the public IP resource is available.
- private IPs - these are zones to which Azure will deploy paths leading to Load Balancer frontend IPs (all frontends are 
                affected).

Setting this variable to explicit `null` disables a zonal deployment.
This can be helpful in regions where Availability Zones are not available.

For public Load Balancers, since this setting controls also Availability Zones for public IPs, you need to specify all zones
available in a region (typically 3): `["1","2","3"]`.


Type: list(string)

Default value: `[1 2 3]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_probes

Backend's health probe definition.

When this property is either:

- not defined at all, or
- at least one `in_rule` has no health probe specified

a default, TCP based probe will be created for port 80.

Following properties are available:

- `name`                  - (`string`, required) name of the health check probe
- `protocol`              - (`string`, required) protocol used by the health probe, can be one of "Tcp", "Http" or "Https"
- `port`                  - (`number`, required for `Tcp`, defaults to protocol port for `Http(s)` probes) port to run
                            the probe against
- `probe_threshold`       - (`number`, optional, defaults to Azure defaults) number of consecutive probes that decide
                            on forwarding traffic to an endpoint
- `interval_in_seconds`   - (`number, optional, defaults to Azure defaults) interval in seconds between probes,
                            with a minimal value of 5
- `request_path`          - (`string`, optional, defaults to `/`) used only for non `Tcp` probes,
                            the URI used to check the endpoint status when `protocol` is set to `Http(s)`


Type: 

```hcl
map(object({
    name                = string
    protocol            = string
    port                = optional(number)
    probe_threshold     = optional(number)
    interval_in_seconds = optional(number)
    request_path        = optional(string, "/")
  }))
```


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### nsg_auto_rules_settings

Controls automatic creation of NSG rules for all defined inbound rules.

When skipped or assigned an explicit `null`, disables rules creation.

Following properties are supported:

- `nsg_name`                - (`string`, required) name of an existing Network Security Group
- `nsg_resource_group_name  - (`string`, optional, defaults to Load Balancer's RG) name of a Resource Group hosting the NSG
- `source_ips`              - (`list`, required) list of CIDRs/IP addresses from which access to the frontends will be allowed
- `base_priority`           - (`nubmer`, optional, defaults to `1000`) minimum rule priority from which all
                              auto-generated rules grow, can take values between `100` and `4000`


Type: 

```hcl
object({
    nsg_name                = string
    nsg_resource_group_name = optional(string)
    source_ips              = list(string)
    base_priority           = optional(number, 1000)
  })
```


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>