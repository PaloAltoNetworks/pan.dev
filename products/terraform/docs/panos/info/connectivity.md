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

Terraform is agentless, in that is uses the local machine to execute the changes required to the target infrastructure, as opposed to instructing a remote machine to execute changes. The target infrastructure when using Terraform for PAN-OS would be the NGFW or Panorama; Terraform sends the required commands to the NGFW or Panorama using the PAN-OS APIs for those appliances. For this reason, it is required to supply the provider with details which specify the remote NGFW or Panorama connectivity and administrative credentials. More details can be found [here](https://registry.terraform.io/providers/PaloAltoNetworks/panos/latest/docs#argument-reference).
