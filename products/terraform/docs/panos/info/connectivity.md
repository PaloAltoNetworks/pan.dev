---
id: connectivity
title: How Terraform connects to PAN-OS
sidebar_label: How Terraform connects to PAN-OS
hide_title: true
description: How Terraform connects to PAN-OS
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - terraform
---

# How Terraform connects to PAN-OS

Terraform is agentless, it uses the local machine to execute the changes required to the target infrastructure, as opposed to instructing a remote machine to execute the changes. The target infrastructure when using Terraform for PAN-OS is the NGFW or Panorama; Terraform sends the required commands to the NGFW or Panorama using the PAN-OS APIs. For this reason, you are required to supply the PAN-OS provider with details of your NGFW or Panorama connectivity and administrative credentials. More details can be found [here](https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest/docs#argument-reference).
