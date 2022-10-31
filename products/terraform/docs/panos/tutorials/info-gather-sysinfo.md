---
id: info-gather-sysinfo
title: Gathering System Information
sidebar_label: System Information
hide_title: true
description: Gathering System Information
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - terraform
---

import Assumptions from '../assumptions.md'
import LabGuidance from '../../../../lab-guidance.md'

# Information Gathering Tasks

With this Terraform code, you will gather information from a PAN-OS next-generation firewall. This is useful on its own in order to gather data, but the gathered data can also be used to feed into other Terraform operations.

<Assumptions components={props.components} />

<LabGuidance components={props.components} />

## Getting "system info"

This Terraform operation gathers a number of system information items from a PAN-OS next-generation firewall.

1. Create a file called ```get-system-info.tf``` and paste in the following content:
```hcl
terraform {
    required_providers {
        panos = {
            source  = "paloaltonetworks/panos"
            version = "~> 1.11.0"
        }
    }
}

provider "panos" {
    hostname = var.panos_hostname
    username = var.panos_username
    password = var.panos_password
}

variable "panos_hostname" {
  type = string
  default = "192.168.1.1"
}

variable "panos_username" {
  type = string
  default = "admin"
}

variable "panos_password" {
  type = string
  default = "admin"
}

data "panos_system_info" "ngfw_info" { }

output "the_info" {
    value = data.panos_system_info.ngfw_info
}
```

2. Edit the ```variable``` sections of the file, replacing the values for ```panos_hostname```, ```panos_username``` and ```panos_password``` with relevant values for your environment. For example:

```hcl
.
.

variable "panos_hostname" {
  type = string
  // highlight-next-line
  default = "172.16.14.5"
}

variable "panos_username" {
  type = string
  // highlight-next-line
  default = "firewall_admin"
}

variable "panos_password" {
  type = string
  // highlight-next-line
  default = "a_pa55word_l1ke_th1s"
}
.
.
```

3. Initialise Terraform with the following command, which will download the PAN-OS provider:

```
terraform init
```

4. The output should look something like this:

```
Initializing the backend...

Initializing provider plugins...
- Finding paloaltonetworks/panos versions matching "~> 1.11.0"...
- Installing paloaltonetworks/panos v1.11.0...
- Installed paloaltonetworks/panos v1.11.0 (signed by a HashiCorp partner, key ID D5D93F98EFA33E83)

Partner and community providers are signed by their developers.
If you'd like to know more about provider signing, you can read about it here:
https://www.terraform.io/docs/plugins/signing.html

Terraform has created a lock file .terraform.lock.hcl to record the provider
selections it made above. Include this file in your version control repository
so that Terraform can guarantee to make the same selections by default when
you run "terraform init" in the future.

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
```

5. Instruct Terraform to inspect the firewall and gather data by executing the following command:

```
terraform plan
```

6. The output should look something like this (truncated for brevity):

```
+ the_info = {
    + id            = "10.110.255.4"
    + info          = {
        "app-version" = "8468-6979"
        "av-version" = "0"
        "cloud-mode" = "cloud"
        "default-gateway" = "10.110.255.1"
        "device-certificate-status" = "None"
        "device-dictionary-version" = "1-211"
        "devicename" = "lab-fw"
        "family" = "vm"
        .
        .
        .
        "wildfire-rt" = "Disabled"
        "wildfire-version" = "0"
        }
    + version_major = 10
    + version_minor = 1
    + version_patch = 8
    }
```