---
hide_title: true
id: vwan_routes
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
sidebar_label: Vwan Routes
title: Palo Alto Networks Virtual WAN Routing Module for Azure
---

# Palo Alto Networks Virtual WAN Routing Module for Azure

A Terraform module for managing routing in an Azure Virtual WAN.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/vwan_routes) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/vwan_routes)

## Usage

In order to use the `vwan_routes` module, you need to deploy the `vwan` module as a prerequisite.
Then you can use the example below to call the module and configure routing in the Virtual Hub:

```hcl
locals {
  routing_intent = {
    for vwan_key, vwan in var.virtual_wans : vwan_key => {
      for hub_key, hub in try(vwan.virtual_hubs, {}) : hub_key => {
        virtual_hub_id = try(
          module.virtual_wan[vwan_key].virtual_hub_ids[hub_key],
          null
        )
        routing_intent = {
          routing_intent_name = hub.routing_intent.routing_intent_name
          routing_policy = [
            for policy in hub.routing_intent.routing_policy : merge(
              policy,
              {
                next_hop_id = try(
                  module.cloudngfw[policy.next_hop_key]
                  .palo_alto_virtual_network_appliance_id,
                  null
                )
              }
            )
          ]
        }
      }
      if hub.routing_intent != null
    }
  }

  routes = {
    for vwan_key, vwan in var.virtual_wans : vwan_key => {
      for route_item in flatten([
        for hub_key, hub in try(vwan.virtual_hubs, {}) : [
          for rt_key, rt in try(hub.route_tables, {}) : [
            for route_key, route in try(rt.routes, {}) : {
              route_key         = route_key
              name              = route.name
              destinations_type = route.destinations_type
              destinations      = route.destinations
              next_hop_type     = route.next_hop_type
              next_hop_key      = try(route.next_hop_key, null)
              route_table_key   = rt_key
              hub_key           = hub_key
            }
          ]
        ]
        ]) : route_item.route_key => {
        name              = route_item.name
        destinations_type = route_item.destinations_type
        destinations      = route_item.destinations
        next_hop_type     = route_item.next_hop_type
        next_hop_id = try(
          module.cloudngfw[route_item.next_hop_key].palo_alto_virtual_network_appliance_id,
          null
        )
        route_table_id = try(
          module.virtual_wan[vwan_key].route_table_ids[route_item.route_table_key],
          null
        )
      }
    }
  }
}

module "vwan_routes" {
  source   = "../../modules/vwan_routes"
  for_each = var.virtual_wans

  routes         = lookup(local.routes, each.key, {})
  routing_intent = lookup(local.routing_intent, each.key, {})
}
```

Below there are provided sample values:

```hcl
"virtual_hub_routes" = {
  name           = "virtual_hub_routes"
  address_prefix = "11.0.0.0/24"
  route_tables = {
    "route_table" = {
      name   = "route_table"
      labels = ["rt_label01", "rt_label02"]
      routes = {
        "route01" = {
          name              = "route01"
          destinations_type = "CIDR"
          destinations      = ["10.0.0.0/16"]
          next_hop_key      = "ha-ports"
        }
        "route02" = {
          name              = "route02"
          destinations_type = "CIDR"
          destinations      = ["11.0.0.0/16"]
          next_hop_key      = "ha-ports"
        }
      }
    }
  }
}
"virtual_hub_routing_intent" = {
  name           = "virtual_hub_routing_intent"
  address_prefix = "12.0.0.0/24"
  routing_intent = {
    routing_intent_name = "routing_intent"
    routing_policy = [
      {
        routing_policy_name = "PrivateTraffic"
        destinations        = ["PrivateTraffic"]
        next_hop_key        = "cloudngfw"
      },
      {
        routing_policy_name = "Internet"
        destinations        = ["Internet"]
        next_hop_key        = "cloudngfw"
      }
    ]
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

- `virtual_hub_route_table_route` (managed)
- `virtual_hub_routing_intent` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`routing_intent`](#routing_intent) | `map` | Map of objects defining Routing Intent configuration for Virtual Hubs.
[`routes`](#routes) | `map` | A map of routing configurations, where each entry defines a route with the following attributes:

- `name`              - (`string`, required) the name of the route.

### Outputs

Name |  Description
--- | ---
`routing_intent_ids` | The identifiers of the created Virtual Hub Routing Intents.
`route_ids` | The identifiers of the created Routes within Virtual Hub Route Table.

### Required Inputs details

### Optional Inputs details

#### routing_intent

Map of objects defining Routing Intent configuration for Virtual Hubs.

Each object key represents a unique identifier, and the value supports the following attributes:

- `virtual_hub_id` - (`string`, required) the resource ID of the Virtual Hub where the Routing Intent should be applied.
- `routing_intent` - (`object`, required) configuration of the Routing Intent, following properties are available:
  - `routing_intent_name` - (`string`, required) the name of the Routing Intent, must be unique across all defined intents.
  - `routing_policy`      - (`list`, required) a list of Routing Policies to apply, following properties are available:
    - `routing_policy_name` - (`string`, required) the name of the Routing Policy, must be unique within the Routing Intent.
    - `destinations`        - (`list(string)`, required) list of traffic types the policy applies to, valid values are: 
                              `Internet`, `PrivateTraffic`.
    - `next_hop_id`         - (`string`, required) the resource ID of the next hop used by this routing policy.



Type: 

```hcl
map(object({
    virtual_hub_id = string
    routing_intent = object({
      routing_intent_name = string
      routing_policy = list(object({
        routing_policy_name = string
        destinations        = list(string)
        next_hop_id         = string
      }))
    })
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### routes

A map of routing configurations, where each entry defines a route with the following attributes:

- `name`              - (`string`, required) the name of the route. Must be unique within the routing configurations.
- `destinations_type` - (`string`, required) specifies the type of destinations, valid values are: `CIDR`, `ResourceId`,
                        or `Service`.
- `destinations`      - (`list`, required) a list of destinations for the route.
- `next_hop_type`     - (`string`, required, defaults to "ResourceId") specifies the type of next hop.
- `next_hop_id`       - (`string`, required) the id for the next hop resource to which the route points.
- `route_table_id`    - (`string`, required) the id of the route table to which this route belongs.



Type: 

```hcl
map(object({
    name              = string
    destinations_type = string
    destinations      = list(string)
    next_hop_type     = optional(string, "ResourceId")
    next_hop_id       = string
    route_table_id    = string
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>