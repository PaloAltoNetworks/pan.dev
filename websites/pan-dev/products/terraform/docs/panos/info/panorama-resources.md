---
id: panorama-resources
title: Panorama-Specific Resources
sidebar_label: Panorama-Specific Resources
hide_title: true
description: Panorama-Specific Resources
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - terraform
---

# Panorama-Specific Resources

Always use the [reference documentation](https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest/docs) to ensure correct usage of Terraform `resources` for PAN-OS, when performing configuration for NGFWs via Panorama.

Within the PAN-OS Terraform provider, there are some dedicated `resources` for Panorama that are separate to their NGFW counterparts.

- For example, there is a `panos_static_route_ipv4` resource to be used when configuring NGFWs directly, and a dedicated `panos_panorama_static_route_ipv4` resource to be used when configuring NGFWs via Panorama.

There are also `resources` which previously had dedicated versions for Panorama, but are now consolidated.

- For example, there was previously a `panos_security_policy` and a `panorama_security_policy`. Now there is just `panos_security_policy` which will work for NGFWs with and without Panorama. When you use `panorama_security_policy` resource with Panorama, you can add Panorama-specific parameters like `device_group` and `rulebase`.
