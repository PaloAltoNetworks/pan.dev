---
id: background
title: Why Ansible for PAN-OS
sidebar_label: Why Ansible and PAN-OS
hide_title: true
description: Why Ansible and PAN-OS
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
