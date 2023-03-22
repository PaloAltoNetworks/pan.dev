---
id: panos-versions
title: Working with Multiple PAN-OS Versions
sidebar_label: Working with Multiple PAN-OS Versions
hide_title: true
description: Working with Multiple PAN-OS Versions
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - terraform
authors: [jamesholland-uk]
---

# Working with Multiple PAN-OS Versions

In general, the provider has support for PAN-OS 6.1 onwards. Data sources or resources that have minimum PAN-OS version requirements will specify their version requirements in their [documentation](https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest/docs).

Some resources may contain variables that are only applicable for newer versions of PAN-OS. If you need to work with multiple versions of PAN-OS where some versions have a new parameter and some don't, then make sure to use [conditionals](https://www.terraform.io/docs/configuration/expressions/conditionals.html) along with the [`panos_system_info`](https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest/docs/data-sources/system_info) data source to only set these variables when the version of PAN-OS is appropriate.

One such resource is `panos_ethernet_interface` and the `ipv4_mss_adjust` parameter. Doing the following is one way to correctly configure this parameter only when it's applicable:

```hcl
data "panos_system_info" "config" {}

data "panos_ethernet_interface" "eth1" {
    name = "ethernet1/1"
    vsys = "vsys1"
    mode = "layer3"
    adjust_tcp_mss = true
    // highlight-next-line
    ipv4_mss_adjust = "${data.panos_system_info.config.version_major >= 8 ? 42 : 0}"
    # ...
}
```
