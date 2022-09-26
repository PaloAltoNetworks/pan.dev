---
id: automation
title: Infrastructure as Code
sidebar_label: Automation
hide_title: false
description: Infrastructure as Code
keywords:
  - ansible
  - terraform
  - overview
---

:::note
Version control your infrastructure and eliminate human-error from device configuration with infrastructure-as-code tools and techniques. Tell your tools how the configuration should look and let them automate the rest.
:::

#### Ansible

Ansible is an open source automation language from RedHat that uses modules to communicate with vendor specific devices. Ansible offers configurations and orchestrations to provide large productivity gains to a wide variety of automation challenges. <a href="https://live.paloaltonetworks.com/t5/Ansible/ct-p/Ansible" target="_blank">More information</a>

#### Terraform

Terraform is an open source tool used to build and deploy infrastructure safely and efficiently. Terraform unifies cross-vendor configuration in a single language and is cloud platform agnostic (unlike AWS CFT’s or Azure ARM templates) to produces immutable infrastructure deployments. <a href="https://live.paloaltonetworks.com/t5/Terraform/ct-p/Terraform" target="_blank">More information</a>

#### Terraformer

Terraformer is an open source tool used to generate Terraform files and states from an existing infrastructure (reverse Terraform). Terraformer permits to dump a candidate config from a firewall and to automatically create a well organized arborescence with tf files and terraform.tfstate files. After a first dump, you will be able to manage all your firewall resources with Terraform. <a href="https://github.com/GoogleCloudPlatform/terraformer" target="_blank">More information</a>

---

_Join the conversation_ on our <a href="https://live.paloaltonetworks.com/t5/Automation-API/ct-p/automation" target="_blank">API and Automation discussion forum</a>.
