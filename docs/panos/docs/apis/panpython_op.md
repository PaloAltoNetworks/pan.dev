---
id: panpython_op
title: Operational Commands
sidebar_label: Operational Commands
hide_title: false
description: Performing operational commands with pan-python
keywords:
  - pan-os
  - panos
  - xml
  - api
  - quickstart
  - pan-python
  - sdk
  - apikey
  - key
  - python
  - op
  - operational
image: /panos/img/panos_apis.svg
---

## Operational Commands

The **panxapi.py** **-o** option performs the `type=op` API request to
execute operational commands (CLI). The command is specified with the
_cmd_ argument, which is an XML representation of the command line. The
**-X** option converts a CLI-style _cmd_ argument to XML (in some cases
the expected XML document cannot be derived).

## Show System Info

```shell-session
panxapi.py -Xjro 'show system info'
```

Example output:

```console
op: success
{
  "system": {
    "app-release-date": "2018/03/20 15:57:21 PDT",
    "app-version": "793-4594",
    "av-release-date": "2018/03/25 09:58:22 PDT",
    "av-version": "2560-3056",
    "cloud-mode": "non-cloud",
    "default-gateway": "192.168.1.254",
    "devicename": "PA-VM",
    "family": "vm",
    "global-protect-client-package-version": "0.0.0",
    "global-protect-clientless-vpn-release-date": null,
    "global-protect-clientless-vpn-version": "0",
    "global-protect-datafile-release-date": "unknown",
    "global-protect-datafile-version": "unknown",
    "hostname": "PA-VM",
    "ip-address": "192.168.1.103",
    "ipv6-address": "unknown",
    "ipv6-default-gateway": null,
    "ipv6-link-local-address": "fe80::20c:29ff:fe10:b6a/64",
    "is-dhcp": false,
    "logdb-version": "8.1.8",
    "mac-address": "00:0c:29:10:0b:6a",
    "model": "PA-VM",
    "multi-vsys": "off",
    "netmask": "255.255.255.0",
    "operational-mode": "normal",
    "platform-family": "vm",
    "public-ip-address": "unknown",
    "serial": "015351000006388",
    "sw-version": "8.1.0",
    "threat-release-date": "2018/03/20 15:57:21 PDT",
    "threat-version": "793-4594",
    "time": "Thu Apr  5 17:24:01 2018\n",
    "uptime": "29 days, 20:19:51",
    "url-db": "paloaltonetworks",
    "url-filtering-version": "20180405.40003",
    "vm-cpuid": "ESX:E3060500FFFBAB1F",
    "vm-license": "VM-50",
    "vm-mac-base": "E4:A7:49:0A:18:00",
    "vm-mac-count": "256",
    "vm-mode": "VMWare ESXi",
    "vm-uuid": "564DB8BD-3315-1119-5608-E36D8E100B6A",
    "vpn-disable-mode": "off",
    "wf-private-release-date": "unknown",
    "wf-private-version": "0",
    "wildfire-release-date": "2018/03/26 09:15:06 PDT",
    "wildfire-version": "229813-232248"
  }
}
```

This example used `-jr` to select the result content of the response as
JSON. Response output options include (from `panxapi.py --help`):

```console
-x                    print XML response to stdout
-p                    print XML response in Python to stdout
-j                    print XML resp
```
