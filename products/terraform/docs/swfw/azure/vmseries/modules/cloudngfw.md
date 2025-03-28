---
hide_title: true
id: cloudngfw
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
sidebar_label: Cloudngfw
title: Palo Alto Networks Cloud NGFW Module for Azure
---

# Palo Alto Networks Cloud NGFW Module for Azure

A Terraform module for deploying Palo Alto Networks Cloud Next-Generation Firewalls (Cloud NGFW) in Azure. This module supports flexible configurations, allowing the creation of Cloud NGFW resources based on different attachment types and management modes. Additionally, the module provides options to create public IP addresses or use existing ones.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/cloudngfw) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/cloudngfw)

## Usage

This module is designed to work in several *modes* depending on which variables or flags are set. Most common usage scenarios are:

- management_mode = "panorama" & attachment_type ="vnet" - deploys Cloud NGFW attached to a Virtual Hub in a Virtual WAN environment,
managed via Panorama (using panorama_base64_config). Supports creation or referencing of public IP addresses for connectivity.

```hcl
cloudngfws = {
  "cloudngfw" = {
    name                 = "cloudngfw"
    attachment_type      = "vnet"
    management_mode      = "panorama"
    virtual_network_key  = "cloudngfw-vnet"
    cloudngfw_config = {
      panorama_base64_config     = "" # TODO: Put panorama connection string
    }
  }
}
```
- management_mode = "panorama" & attachment_type ="vhub" - deploys Cloud NGFW attached to a Virtual Hub in a Virtual WAN environment,
managed via Panorama (using panorama_base64_config). Supports creation or referencing of public IP addresses for connectivity.

```hcl
cloudngfws = {
  "cloudngfw" = {
    name                 = "cloudngfw"
    attachment_type      = "vhub"
    management_mode      = "panorama"
    virtual_wan_key = "virtual_wan"
    virtual_hub_key = "virtual_hub"
    palo_alto_virtual_appliance_name = "cloudngfw-vhub-nva"
    cloudngfw_config = {
      panorama_base64_config     = "" # TODO: Put panorama connection string
    }
  }
}
```

- management_mode = "rulestack" & attachment_type ="vnet" - deploys Cloud NGFW attached to a Virtual Network (VNet) with a local
rulestack for policy management. Requires VNet-related parameters such as trusted and untrusted subnets, along with the rulestack ID.

```hcl
cloudngfws = {
  "cloudngfw" = {
    name                 = "cloudngfw"
    attachment_type      = "vnet"
    management_mode      = "rulestack"
    virtual_network_key  = "cloudngfw-vnet"
    trusted_subnet_key   = "trusted"
    untrusted_subnet_key = "untrusted"
    cloudngfw_config = {
      rulestack_id               = "" # TODO: Put rulestack ID
    }
  }
}
```

- management_mode = "rulestack" & attachment_type ="vhub" - deploys Cloud NGFW attached to a Virtual Hub in a Virtual WAN environment,
managed through a local rulestack. Includes options to create or reference public IP addresses.

```hcl
cloudngfws = {
  "cloudngfw" = {
    name                 = "cloudngfw"
    attachment_type      = "vhub"
    management_mode      = "panorama"
    virtual_wan_key = "virtual_wan"
    virtual_hub_key = "virtual_hub"
    palo_alto_virtual_appliance_name = "cloudngfw-vhub-nva"
    cloudngfw_config = {
      rulestack_id               = "" # TODO: Put rulestack ID
    }
  }
}
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 4.19

### Providers

- `azurerm`, version: ~> 4.19



### Resources

- `palo_alto_next_generation_firewall_virtual_hub_local_rulestack` (managed)
- `palo_alto_next_generation_firewall_virtual_hub_panorama` (managed)
- `palo_alto_next_generation_firewall_virtual_network_local_rulestack` (managed)
- `palo_alto_next_generation_firewall_virtual_network_panorama` (managed)
- `palo_alto_virtual_network_appliance` (managed)
- `public_ip` (managed)
- `public_ip` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Azure Cloud Next-Generation Firewall by Palo Alto Networks.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`attachment_type`](#attachment_type) | `string` | Defines how the cloudngfw (Cloud NGFW) is attached.
[`management_mode`](#management_mode) | `string` | Defines how the cloudngfw is managed.
[`cloudngfw_config`](#cloudngfw_config) | `object` | Map of objects describing Palo Alto Next Generation Firewalls (cloudngfw).

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`virtual_network_id`](#virtual_network_id) | `string` | The ID of the Azure Virtual Network (VNET) to be used for connecting to cloudngfw.
[`untrusted_subnet_id`](#untrusted_subnet_id) | `string` | The ID of the subnet designated for untrusted resources within the virtual network.
[`trusted_subnet_id`](#trusted_subnet_id) | `string` | The ID of the subnet designated for trusted resources within the virtual network.
[`virtual_hub_id`](#virtual_hub_id) | `string` | The ID of the Azure Virtual Hub used for connecting various network resources.

### Outputs

Name |  Description
--- | ---
`palo_alto_virtual_network_appliance_id` | The identifier of the created Palo Alto Virtual Network Appliance.

### Required Inputs details

#### name

The name of the Azure Cloud Next-Generation Firewall by Palo Alto Networks.

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

#### attachment_type

Defines how the cloudngfw (Cloud NGFW) is attached.
- When set to `vnet`, the cloudngfw is used to filter traffic between trusted and untrusted subnets within a Virtual Network.
- When set to `vwan`, the cloudngfw is used to filter traffic within the Azure Virtual WAN.


Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### management_mode

Defines how the cloudngfw is managed.
- When set to `panorama`, the cloudngfw policies are managed through Panorama.
- When set to `rulestack`, the cloudngfw policies are managed through Azure Rulestack.


Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### cloudngfw_config

Map of objects describing Palo Alto Next Generation Firewalls (cloudngfw).

List of available properties:

- `plan_id`                         - (`string`, optional, defaults to `panw-cngfw-payg`) the former plan_id
                                      `panw-cloud-ngfw-payg` is defined as stop sell, but has been set as the provider default
                                      to not break any existing resources that were originally provisioned with it. Users need
                                      to explicitly set the `plan_id` to `panw-cngfw-payg` when creating new resources.
- `marketplace_offer_id`            - (`string`, optional, defaults to `pan_swfw_cloud_ngfw`) the marketplace offer ID,
                                      changing this forces a new resource to be created.
- `panorama_base64_config`          - (`string`, optional) the Base64-encoded configuration for connecting to Panorama server. 
                                      This field is required when `management_mode` is set to `panorama`.
- `rulestack_id`                    - (`string`, optional) the ID of the Local Rulestack used to configure this Firewall 
                                      Resource. This field is required when `management_mode` is set to `rulestack`.
- `create_public_ip`                - (`bool`, optional, defaults to `true`) controls if the Public IP resource is created or 
                                      sourced. This field is ignored when the variable `public_ip_ids` is used.
- `public_ip_name`                  - (`string`, optional) the name of the Public IP resource. This field is required unless 
                                      the variable `public_ip_ids` is used.
- `public_ip_resource_group_name`   - (`string`, optional) the name of the Resource Group hosting the Public IP resource. 
                                      This is used only for sourced resources.
- `public_ip_ids`                   - (`map`, optional) a map of IDs for public IP addresses. Each key represents a logical
                                      identifier and the value is the resource ID of the public IP. 
- `egress_nat_ip_ids`               - (`map`, optional) a map of IDs for egress NAT public IP addresses. Each key represents
                                      a logical identifier and the value is the resource ID of the public IP.
- `trusted_address_ranges`          - (`list`, optional) a list of public IP address ranges that will be treated as internal
                                      traffic by Cloud NGFW in addition to RFC 1918 private subnets. Each list entry has to be
                                      in a CIDR format.
- `destination_nats`                - (`map`, optional) defines one or more destination NAT configurations.
                                      Each object supports the following properties:
  - `destination_nat_name`          - (`string`, required) the name of the Destination NAT. Must be unique within this map.
  - `destination_nat_protocol`      - (`string`, required) the protocol for this Destination NAT. Possible values are `TCP` or
                                      `UDP`.
  - `frontend_public_ip_address_id` - (`string`, optional) the ID referencing the public IP that receives the traffic. 
                                      This is used only when the variable `public_ip_ids` is utilized.
  - `frontend_port`                 - (`number`, required) the port on which traffic will be received. Must be in the range
                                      from 1 to 65535.
  - `backend_ip_address`            - (`string`, required) the IPv4 address to which traffic will be forwarded.
  - `backend_port`                  - (`number`, required) the port number to which traffic will be sent. Must be in the range
                                      from 1 to 65535.


Type: 

```hcl
object({
    plan_id                       = optional(string, "panw-cngfw-payg")
    marketplace_offer_id          = optional(string, "pan_swfw_cloud_ngfw")
    panorama_base64_config        = optional(string)
    rulestack_id                  = optional(string)
    create_public_ip              = optional(bool, true)
    public_ip_name                = optional(string)
    public_ip_resource_group_name = optional(string)
    public_ip_ids                 = optional(map(string))
    egress_nat_ip_ids             = optional(map(string))
    trusted_address_ranges        = optional(list(string))
    destination_nats = optional(map(object({
      destination_nat_name          = string
      destination_nat_protocol      = string
      frontend_public_ip_address_id = optional(string)
      frontend_port                 = number
      backend_ip_address            = string
      backend_port                  = number
    })), {})
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### virtual_network_id

The ID of the Azure Virtual Network (VNET) to be used for connecting to cloudngfw.
This variable is required when `attachment_type` is set to "vnet".


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### untrusted_subnet_id

The ID of the subnet designated for untrusted resources within the virtual network.
This variable is required when `attachment_type` is set to "vnet".


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### trusted_subnet_id

The ID of the subnet designated for trusted resources within the virtual network.
This variable is required when `attachment_type` is set to "vnet".


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### virtual_hub_id

The ID of the Azure Virtual Hub used for connecting various network resources.
This variable is required when `attachment_type` is set to "vwan".


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>