---
id: setup
title: Terraform for PAN-OS
sidebar_label: Setting Up
hide_title: true
description: Setting Up
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - terraform
---

import ConnCheck from '../../../../\_connectivity-check.md'
import LabGuidance from '../../../../\_lab-guidance.md'

# Setting up

In this tutorial, you will get ready to execute Terraform plans for PAN-OS by preparing your host machine.

## Assumptions

This tutorial/guide assumes:

- you have access to a Terraform compatible host machine, with administrative credentials
- the host machine has working connectivity and access to the Internet to download content
- the host machine has working connectivity and access to either a PAN-OS next-generation firewall or Panorama

<LabGuidance />

## Install Terraform

1. Download Terraform. The exact steps will differ based on your operating system and environment. Terraform downloads are listed [here](https://developer.hashicorp.com/terraform/downloads), and within the [Get Started guides](https://developer.hashicorp.com/terraform/tutorials) provided by Hashicorp for various cloud and environments, you will find [instructions for installing Terraform](https://developer.hashicorp.com/terraform/tutorials/docker-get-started/install-cli#install-terraform).
2. Test Terraform installed correctly. Execute this command:

```
terraform -version
```

3. You should see an output like this (exact version numbers will differ, and you may receive a warning if you are not on the latest version):

```
Terraform v1.1.9

Your version of Terraform is out of date! The latest version
is 1.3.3. You can update by downloading from https://www.terraform.io/downloads.html
```

<ConnCheck />
