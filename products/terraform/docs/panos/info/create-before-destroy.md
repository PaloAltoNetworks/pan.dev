---
id: create-before-destroy
title: Using create_before_destroy
sidebar_label: Using create_before_destroy
hide_title: true
description: Using create_before_destroy
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - terraform
---

# Using create_before_destroy

The order of operations that Terraform handles updates / deletes does not by default work the way that PAN-OS does things.  In order to make Terraform behave properly, inside of **each and every resource** you need to specify a [`lifecycle`](https://www.terraform.io/language/meta-arguments/lifecycle) block like so:

```hcl
resource "panos_address_object" "example" {
    name = "web server 1"
    # continue with the rest of the definition
    ...

    // highlight-start
    lifecycle {
        create_before_destroy = true
    }
    // highlight-end
}
```

This will ensure that updates and deletes are processed in the correct order on PAN-OS.
