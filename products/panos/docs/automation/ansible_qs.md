---
id: ansible_qs
title: Ansible Quickstart
hide_title: false
description: Getting started with Ansible
keywords:
  - playbooks
  - quickstart
  - ansible
---

A collection of Ansible modules that automate configuration and
operational tasks on Palo Alto Networks Next Generation Firewalls --
both physical and virtualized form factor. The underlying protocol uses
API calls that are wrapped within the Ansible framework.

- Free software: Apache 2.0 License
- Documentation:
  <https://paloaltonetworks.github.io/pan-os-ansible/>
- PANW community supported live page:
  <http://live.paloaltonetworks.com/ansible>

## Ansible Collection

The Palo Alto Networks Ansible collection can be used to automate configuration and operational tasks on Palo Alto Networks Next Generation Firewalls using the PAN-OS API.

It is available under the **Apache 2.0** license.

> <https://github.com/PaloAltoNetworks/pan-os-ansible/>

## Installation

The recommended way to install the modules is installing the Palo Alto
Networks Ansible Galaxy collection:

```shell-session
ansible-galaxy collection install paloaltonetworks.panos
```

Then in your playbooks you can specify that you want to use the panos collection like so:

```shell-session
collections:
    - paloaltonetworks.panos
```

## Sample playbooks

A repository of sample playbooks, along with usage instructions is available at:

> <https://github.com/PaloAltoNetworks/ansible-playbooks/>

## Support

This template/solution is released under an as-is, best effort, support
policy. These scripts should be seen as community supported and Palo
Alto Networks will contribute our expertise as and when possible. We do
not provide technical support or help in using or troubleshooting the
components of the project through our normal support options such as
Palo Alto Networks support teams, or ASC (Authorized Support Centers)
partners and backline support options. The underlying product used (the
VM-Series firewall) by the scripts or templates are still supported, but
the support is only for the product functionality and not for help in
deploying or using the template or script itself.

Unless explicitly tagged, all projects or work posted in our GitHub
repository (at <https://github.com/PaloAltoNetworks>) or sites other
than our official Downloads page on <https://support.paloaltonetworks.com>
are provided under the besteffort policy.

## [Click here for an automated Terraform and Ansible One-click deployment for AWS and Azure](/panos/docs/automation/terraform_ansible_container)
