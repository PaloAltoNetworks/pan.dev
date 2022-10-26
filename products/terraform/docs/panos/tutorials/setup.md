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

# Setting up

In this tutorial we will get setup ready to execute Terraform plans for PAN-OS.
<!---
- Do we go for local install, container install, some (unknown as yet) online sandbox, or give the choice?
- Guidance on writing tutorials is to remove choice, not worry about best practices, and just get to the learning...
-->

## Assumptions

This tutorial/guide assumes:
- access to a Terraform compatible host machine, with administrative credentials
- the host machine has working connectivity and access to the Internet to download content
- the connectivity and administrative credentials for either a PAN-OS next-generation firewall or Panorama

## Install Terraform

1. Download Terraform. The exact steps will differ based on your operating system and environment. Terraform downloads are listed [here](https://developer.hashicorp.com/terraform/downloads), and within the [Get Started guides](https://developer.hashicorp.com/terraform/tutorials) provided by Hashicorp for various cloud and environments, you will find [instructions for installing Terraform](https://developer.hashicorp.com/terraform/tutorials/docker-get-started/install-cli#install-terraform).
2. Test Terraform installed correctly. Execute this command:
```
terraform -version
```
3. You should see an output like this (exact version numbers will differ, and you may contain a warning if you are not on the latest version):
```
Terraform v1.1.9

Your version of Terraform is out of date! The latest version
is 1.3.3. You can update by downloading from https://www.terraform.io/downloads.html
```

## Confirm access to PAN-0S

1. Ensure the host machine executing Terraform can reach the NGFW or Panorama. Execute the following command, replacing ```HOSTNAME``` with the IP address or hostname of your NGFW or Panorama:
```
http-ping https://HOSTNAME -c 1
```
If ```http-ping``` is not available on your host machine, other tools like curl may also be able to confirm the host machine can reach the NGFW or Panorama using HTTPS.