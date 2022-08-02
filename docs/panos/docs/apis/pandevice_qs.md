---
id: pandevice_qs
title: PAN-OS-Python Framework Quickstart
hide_title: false
description: Getting started with pan-os-python
keywords:
  - pan-os
  - panos
  - xml
  - api
  - quickstart
  - pan-os-python
  - sdk
  - python
  - pandevice
image: /panos/img/panos_apis.svg
---

[![GitHub page](https://img.shields.io/badge/GitHub-Repo-brightgreen?style=for-the-badge&logo=github)](https://github.com/PaloAltoNetworks/pan-os-python) [![GitHub stars](https://img.shields.io/github/stars/PaloAltoNetworks/pan-os-python?style=for-the-badge)](https://github.com/PaloAltoNetworks/pan-os-python)

## Installation

The easiest method to install pan-os-python is using pip (pan-os-python only supports Python3):

```
pip install pan-os-python
```

Or, if you have virtualenvwrapper installed:

```shell-session
mkvirtualenv pan-os-python
pip install pan-os-python
```

Pip will install the [pan-python](/docs/apis/panpython_qs) library as a dependency.

Upgrade to the latest version:

```shell-session
pip install --upgrade pan-os-python
```

## How to import

To use Palo Alto Networks Device Framework in a project:

```python
import panos
```

You can also be more specific about which modules you want to import:

```python
from panos import firewall
from panos import network
```

### A few examples

For configuration tasks, create a tree structure using the classes in
each module. Nodes hierarchy must follow the model in the [Configuration
Tree](https://pan-os-python.readthedocs.io/en/latest/configtree.html).

The following examples assume the modules were imported as such:

```python
from panos import firewall
from panos import network
```

### Create a subinterface and commit:

```python
fw = firewall.Firewall("10.0.0.1", api_username="admin", api_password="admin")
eth = fw.add(network.EthernetInterface("ethernet1/1", mode="layer3"))
subeth = eth.add(network.Layer3Subinterface("ethernet1/1.30", ip="4.4.4.4/24", tag=30))
subeth.create()
fw.commit()
```

### Perform `show system info`

```python
fw = firewall.Firewall("10.0.0.1", api_username="admin", api_password="admin")
print fw.op("show system info")
```

Some operational commands have methods to refresh the variables in an
object:

```python
# populates the version, serial, and model variables from the live device
fw.refresh_system_info()
```

:::tip
See more examples in the [How to Guides](https://pan-os-python.readthedocs.io/en/latest/howto.html).
:::

## Upgrade from pandevice

This pan-os-python package is the evolution of the older pandevice package. To upgrade from pandevice to pan-os-python, follow these steps.

### Step 1. Ensure you are using python3

[Python2 is end-of-life](https://www.python.org/doc/sunset-python-2/) and not supported by pan-os-python.

### Step 2. Uninstall pandevice

```shell-session
pip uninstall pandevice
```

### Step 3. Install pan-os-python

```shell-session
pip3 install pan-os-python
```

### Step 4. Change the import statements in your code from pandevice to panos

```shell-session
import pandevice
from pandevice.firewall import Firewall
```

would change to

```shell-session
import panos
from panos.firewall import Firewall
```

### Step 5. Test your script or application

There are no known breaking changes between pandevice v0.14.0 and pan-os-python v1.0.0, but it is a major upgrade so please verify everything works as expected.

## Connecting to PAN-OS 8.0 and higher

PAN-OS 8.0 by default does not allow connections to the API with TLS
1.0. Unfortunately, the latest OSX and many linux distros come with
OpenSSL versions that don't support TLS 1.1 or 1.2. OpenSSL 1.0.1 or
higher is needed to connect to PAN-OS 8.0. If you try to connect with a
lower version of OpenSSL, you'll get a connection error. There are two
solutions:

**Option 1: Upgrade OpenSSL** (more secure)

_Mac OSX:_ In Mac OSX you can't upgrade the built-in OpenSSL, but you
can install your own python and OpenSSL using [Homebrew](https://brew.sh/). Follow this
guide to get set up: [Definitive guide to python on OSX](https://medium.com/@briantorresgil/definitive-guide-to-python-on-mac-osx-65acd8d969d0)

_Linux:_ Use the instructions for your distribution's package manager to
upgrade OpenSSL to 1.0.1 or higher.

**Option 2: Enable TLS 1.0 on PAN-OS** (less secure)

Follow the direction in the PAN-OS Administrator Guide: [Replace the
Certificate for Inbound Management Traffic](https://www.paloaltonetworks.com/documentation/80/pan-os/pan-os/certificate-management/replace-the-certificate-for-inbound-management-traffic)
