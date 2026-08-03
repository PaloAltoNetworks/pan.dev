---
hide_title: true
id: cloud_ngfw
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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: Cloud Ngfw
title: Palo Alto Networks Cloud NGFW Module
---

# Palo Alto Networks Cloud NGFW Module

A terraform module for deploying a fully managed Cloud NGFW in Google Cloud Platform along with associated policy and rules to handle traffic via firewall endpoints.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/cloud_ngfw) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/cloud_ngfw)

## Usage

For usage please refer to any reference architecture example.

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `google`, version: >= 4.54



### Resources

- `compute_network_firewall_policy` (managed)
- `compute_network_firewall_policy_association` (managed)
- `compute_network_firewall_policy_rule` (managed)
- `network_security_firewall_endpoint` (managed)
- `network_security_firewall_endpoint_association` (managed)
- `network_security_security_profile` (managed)
- `network_security_security_profile_group` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name_prefix`](#name_prefix) | `string` | A name prefix that will prepend all resources created.
[`firewall_endpoints`](#firewall_endpoints) | `map` | A map containing each firewall endpoint and association to create.
[`network_security_profiles`](#network_security_profiles) | `map` | A map each network security profile and group to create.
[`network_policies`](#network_policies) | `object` | A map containing the creation of a single network policies and it's associated rules.





### Required Inputs details

#### name_prefix

A name prefix that will prepend all resources created.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### firewall_endpoints

A map containing each firewall endpoint and association to create.

Following properties are available:

- `firewall_endpoint_name`             - (`string`, required) The name of the firewall endpoint.
- `org_id`                             - (`string`, required) The Google Cloud organization ID.
- `zone`                               - (`string`, required) The zone where the firewall endpoint will be deploye
- `billing_project_id`                 - (`string`, required) The billing project ID for the Google Cloud organization.
- `firewall_endpoint_association_name` - (`string`, required) The name of the firewall endpoint association.
- `project_id`                         - (`string`, required) The project ID where network to be associated with the firewall endpoint resides.
- `tls_inspection_policy`              - (`string`, optional) The name of the TLS inspection policy to be applied to the firewall endpoint.
- `labels`                             - (`map(string)`, optional) A map of labels to apply to the firewall endpoint and association.
- `disabled`                           - (`bool`, optional, default: `false`) Whether the firewall endpoint should be disabled. `NOTE`: This value MUST be `false` at creation time.

**Important!** \
`disabled` property MUST be `false` at resource creation time. This can be set to `true` later to disable the firewall endpoint.


Type: 

```hcl
map(object({
    firewall_endpoint_name             = string
    org_id                             = string
    zone                               = string
    billing_project_id                 = string
    firewall_endpoint_association_name = string
    project_id                         = string
    network_id                         = string
    tls_inspection_policy              = optional(string)
    labels                             = optional(map(string), null)
    disabled                           = optional(bool, false)
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

#### network_security_profiles

A map each network security profile and group to create.

Following properties are available:

- `profile_name`              - (`string`, required) The name of the network security profile.
- `profile_group_name`        - (`string`, required) The name of the network security profile group.
- `org_id`                    - (`string`, required) The Google Cloud organization ID.
- `profile_description`       - (`string`, optional) The description of the network security profile.
- `profile_group_description` - (`string`, optional) The description of the network security profile group.
- `labels`                    - (`map(string)`, optional) A map of labels to apply to the network security profile and group.
- `location`                  - (`string`, optional, defaults to`"global"`) The location where the network security profile and group will be created.
- `severity_overrides`        - (`map(string)`, optional, defaults to empty map) A map of severity overrides for the network security profile.
- `threat_overrides`          - (`map(string)`, optional, defaults to empty map) A map of threat overrides for the network security profile.



Type: 

```hcl
map(object({
    profile_name              = string
    profile_group_name        = string
    org_id                    = string
    profile_description       = optional(string, null)
    profile_group_description = optional(string, null)
    labels                    = optional(map(string), null)
    location                  = optional(string, "global")
    severity_overrides        = optional(map(string), {})
    threat_overrides          = optional(map(string), {})
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

#### network_policies

A map containing the creation of a single network policies and it's associated rules.

Following properties are available:

- `policy_name`              - (`string`, required) The name of the network policy.
- `create_firewall_policy`   - (`bool`, optional, default: `true`) Whether to create the firewall policy.
- `description`              - (`string`, optional) The description of the network policy.
- `project_id`               - (`string`, required) The project ID where the network policy will be created.
- `network_associations`     - (`map(object)`, required) A map of network associations for the network policy. Each object has the following properties:
  - `policy_association_name` - (`string`, required) The name of the policy association.
  - `network_id`              - (`string`, required) The network ID to associate with the policy.
- `rules`                - (`map(object)`, required) A map of network policy rules for the policy association. Each object has the following properties:
  - `rule_name`               - (`string`, required) The name of the network policy rule.
  - `description`             - (`string`, optional) The description of the network policy rule.
  - `direction`               - (`string`, required) The direction of the network policy rule, either "INGRESS" or "EGRESS".
  - `enable_logging`          - (`bool`, optional, default: `false`) Whether to enable logging for the network policy rule.
  - `tls_inspect`             - (`bool`, optional, default: `false`) Whether to enable TLS inspection for the network policy rule.
  - `priority`                - (`number`, optional, default: `100`) The priority of the network policy rule.
  - `action`                  - (`string`, required) The action to take for the network policy rule, either "ALLOW" or "DENY".
  - `security_group_key`      - (`string`, optional) The key of the security group to apply the network policy rule to. Either this or `security_group_id` must be set.
  - `security_group_id`       - (`string`, optional) The ID of the security group to apply the network policy rule to. Either this or `security_group_key` must be set.
  - `target_service_accounts` - (`list(string)`, optional) The list of service account emails to apply the network policy rule to.
  - `disabled`                - (`bool`, optional, defaults to `false`) Whether to disable the network policy rule.
  - `target_secure_tags`      - (`map(object)`, optional) A map of secure tags to apply to the network policy rule. Each object has the following properties:
    - `name`                  - (`string`, required) The name of the secure tag.
  - `src_secure_tags`         - (`map(object)`, optional) A map of source secure tags to apply to the network policy rule. Each object has the following properties:
    - `name`                  - (`string`, required) The name of the source secure tag.
  - `src_ip_ranges`           - (`list(string)`, optional) A list of source IP ranges to apply to the network policy rule.
  - `dest_ip_ranges`          - (`list(string)`, optional) A list of destination IP ranges to apply to the network policy rule.
  - `src_address_groups`      - (`list(string)`, optional) A list of source address groups to apply to the network policy rule.
  - `dest_address_groups`     - (`list(string)`, optional) A list of destination address groups to apply to the network policy rule.
  - `src_fqdns`               - (`list(string)`, optional) A list of source fully qualified domain names to apply to the network policy rule.
  - `dest_fqdns`              - (`list(string)`, optional) A list of destination fully qualified domain names to apply to the network policy rule.
  - `src_region_codes`        - (`list(string)`, optional) A list of source region codes to apply to the network policy rule.
  - `dest_region_codes`       - (`list(string)`, optional) A list of destination region codes to apply to the network policy rule.
  - `src_threat_intelligences`  - (`list(string)`, optional) A list of source threat intelligences to apply to the network policy rule.
  - `dest_threat_intelligences` - (`list(string)`, optional) A list of destination threat intelligences to apply to the network policy rule.
  - `ip_protocol`             - (`string`, required) The IP protocol to apply to the network policy rule, either tcp, udp, icmp, esp, ah, ipip, sctp or ip protocol number
  - `ports`                   - (`list(string)`, optional) A list of ports to apply to the network policy rule. Ranges can also be used - like `123-567`



Type: 

```hcl
object({
    policy_name = string
    description = optional(string, null)
    project_id  = string
    network_associations = map(object({
      policy_association_name = string
      network_id              = string
    }))
    create_firewall_policy = bool
    rules = map(object({
      rule_name               = string
      description             = optional(string, null)
      direction               = string
      enable_logging          = optional(bool, false)
      tls_inspect             = optional(bool, false)
      priority                = optional(number, 100)
      action                  = string
      security_group_key      = optional(string)
      security_group_id       = optional(string)
      target_service_accounts = optional(list(string))
      disabled                = optional(bool, false)
      target_secure_tags = optional(map(object({
        name = string
      })), {})
      src_secure_tags = optional(map(object({
        name = string
      })), {})
      src_ip_ranges             = optional(list(string))
      dest_ip_ranges            = optional(list(string))
      src_address_groups        = optional(list(string))
      dest_address_groups       = optional(list(string))
      src_fqdns                 = optional(list(string))
      dest_fqdns                = optional(list(string))
      src_region_codes          = optional(list(string))
      dest_region_codes         = optional(list(string))
      src_threat_intelligences  = optional(list(string))
      dest_threat_intelligences = optional(list(string))
      ip_protocol               = string
      ports                     = optional(list(string))
    }))
  })
```


<sup>[back to list](#modules-required-inputs)</sup>