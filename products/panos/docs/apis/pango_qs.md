---
id: pango_qs
title: PAN Go SDK Quickstart
hide_title: false
description: Getting started with pango
keywords:
  - pan-os
  - panos
  - xml
  - api
  - rest
  - sdk
  - pango
  - go
  - golang
image: /panos/img/panos_apis.svg
---

[![GitHub page](https://img.shields.io/badge/GitHub-Repo-brightgreen?style=for-the-badge&logo=github)](https://github.com/PaloAltoNetworks/pango) [![GitHub stars](https://img.shields.io/github/stars/PaloAltoNetworks/pango?style=for-the-badge)](https://github.com/PaloAltoNetworks/pango)

:::note
Package pango is a golang cross version mechanism for interacting with Palo Alto Networks devices (including physical and virtualized Next-generation Firewalls and Panorama). Versioning support is in place for PANOS 6.1 to 8.1.
:::

## Documentation

Please refer to the [godoc](https://godoc.org/github.com/PaloAltoNetworks/pango) reference documentation.

## Using pango

To start, create a client connection with the desired parameters and then initialize the connection:

```go
package main

import (
    "log"
    "github.com/PaloAltoNetworks/pango"
)

func main() {
    var err error

    c := &pango.Firewall{Client: pango.Client{
        Hostname: "127.0.0.1",
        Username: "admin",
        Password: "admin",
        Logging: pango.LogAction | pango.LogOp,
    }}
    if err = c.Initialize(); err != nil {
        log.Printf("Failed to initialize client: %s", err)
        return
    }
    log.Printf("Initialize ok")
}
```

Initializing the connection creates the API key (if it was not already specified), then performs `show system info` to get the PAN-OS® version. Once the firewall client connection is created, you can query and configure the Palo Alto Networks device from the functions inside the various namespaces of the client connection.

## Configuration namespaces

Namespaces correspond to the various configuration areas available in the GUI.

For example:

```go
    err = c.Network.EthernetInterface.Set(...)
    myPolicies, err := c.Policies.Security.GetList()
```

Generally speaking, there are the following functions inside each namespace:

- `GetList()`
- `ShowList()`
- `Get()`
- `Show()`
- `Set()`
- `Edit()`
- `Delete()`

These functions correspond with PANOS `Get`, `Show`, `Set`, `Edit`, and `Delete` API calls. `Get()`, `Set()`, and `Edit()` take and return normalized, version independent objects. These version safe objects are typically named `Entry`, which corresponds to how the object is placed in the PANOS XPATH.

Some `Entry` objects have a special function, `Defaults()`. Invoking this function will initialize the object with some default values. Each `Entry` that implements `Defaults()` calls out in its documentation what parameters are affected by this, and what the defaults are.

For any version safe object, attempting to configure a parameter that your PANOS doesn't support will be safely ignored in the resultant XML sent to the firewall / Panorama.

## Using `Edit` Functions

The PANOS XML API `Edit` command can be used to both create as well as update existing config, however it can also truncate config for the given XPATH. Due to this, if you want to use `Edit()`, you need to make sure that you perform either a `Get()` or a `Show()` first, make your modification, then invoke `Edit()` using that object. If you don't do this, you will truncate any sub config.
