---
id: background
title: Ansible for PAN-OS
sidebar_label: Ansible and PAN-OS
hide_title: true
description: Ansible and PAN-OS
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - ansible
---

# Ansible and PAN-OS

PAN-OS can be configured and operated with Ansible, allowing configuration to be defined and managed as code, and facilitating automated operations. The collection of modules created by Palo Alto Networks works either directly with next-generation firewalls (NGFW), or via Panorama. Why is this useful and important?

## Why Automate

Automating within IT allows you to perform operations faster, with more agility. It can also reduce operational cost and complexity. Specifically related to security in IT, automation also allows you to deploy consistent and comprehensive protection.

## Why Ansible

Ansible is a well-known and commonly deployed product for performing automated operations. It has both free and open-source components, as well as commercial offerings. Its heritage is in configuration management, but today Ansible can be used for many automation use cases, including infrastructure-as-code and policy-as-code to name just two.

## Ansible and Terraform

Ansible and Terraform are often mentioned in the same context, and are two of the most common products used for automated operations like infrastructure-as-code and policy-as-code. Ansible's heritage is more in configuration management tasks, and Terraform's heritage is more in cloud infrastructure deployment tasks. However, both could be use for either type of tasks, and many more. The most notable differences when using these products are:
- Ansible performs tasks in the order described in the playbook, and Terraform performs tasks as computed through the dependency graph it calculates
- Terraform entirely depends upon its state in order to calculate and execute operations, where Ansible runs tasks without a widespread state reconciliation
However, both are capable of operating idempotently, and both are capable of achieving very similar results.

## How Ansible connects to PAN-OS

When using Ansible with PAN-OS, the connection method used is ```local```. For example:

```yaml
---
- name: Gather security rules
  hosts: 'firewall'
  // highlight-next-line
  connection: local
  .
  .
```

This instructs Ansible to use the local machine to execute the playbook, as opposed to instructing the remote machine to execute the playbook. The remote machine, when using Ansible for PAN-OS, would be the NGFW or Panorama; executing third-party code on these machines would break Palo Alto Networks' assurance model. Ansible therefore executes the playbooks on the local machine, and using the PAN-OS modules, sends the required commands to the NGFW or Panorama using the PAN-OS APIs for those appliances. For this reason, it is common to define a ```provider``` variable block at the start of a playbook, to specify the remote NGFW or Panorama connectivity and administrative credentials. That variable block is then referred to when executing tasks. For example, this shows a provider block named ```device```:

```yaml
  .
  .
  vars:
    // highlight-next-line
    device:
      ip_address: "{{ ip_address }}"
      username: "{{ username }}"
      password: "{{ password }}"
  .
  .
  .
  tasks:
    - name: Check if PAN-OS appliance is ready and wait until it is
      paloaltonetworks.panos.panos_check:
        // highlight-next-line
        provider: "{{ device }}"
  .
  .
```