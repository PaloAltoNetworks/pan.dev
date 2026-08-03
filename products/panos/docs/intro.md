---
id: intro
title: PAN-OS APIs and SDKs
sidebar_label: PAN-OS APIs and SDKs
hide_title: true
description: PAN-OS APIs and SDKs
slug: /panos/docs
keywords:
  - pan-os
  - panos
  - xml
  - rest
  - api
  - firewall
  - configuration
  - upgrade assurance
---

# PAN-OS APIs and SDKs

PAN-OS APIs and SDKs allow you to manage next-generation firewalls, directly or via Panorama, using third-party services, applications, or scripts.

## PAN-OS XML API

The [PAN-OS XML API](./xmlapi.md) is powerful and low-level, allowing you to take full control of every aspect of your security, and build deep integrations with a variety of other systems. You can make XML API calls directly to the firewall, directly to Panorama, or to a firewall via Panorama.

## PAN-OS REST API

The [PAN-OS REST API](./restapi.md) simplifies access to resources as high-level URIs. You can use this API to create, change, and delete resources.

## `pan-os-python` (Python)

The [`pan-os-python` SDK framework](./pan-os-python.md) helps interact with PAN-OS devices when your chosen language is Python. It is object-oriented and mimics the traditional interaction with the device via the GUI, CLI or XML API. It is also part of the underpinnings of the [PAN-OS Ansible collection](/ansible/docs/panos/).

## `panos-upgrade-assurance` (Python)

The [`panos-upgrade-assurance`](/panos/docs/panos-upgrade-assurance) package is meant to provide a set of classes and methods that can be used to do run PAN-OS upgrade readiness checks. It's prepared in a form that make it easy to wrap it in an Ansible module or XSOAR integration. It's directly depended on [`pan-os-python`](#pan-os-python-python) package.

<!---
## `pan-python` (Python)
The [`pan-python` SDK](./pan-python.md) is a set of powerful, low-level Python packages for interacting with PAN-OS, WildFire, AutoFocus and more. It is also part of the underpinnings of the [PAN-OS Ansible collection](/ansible/docs/panos/).
-->

## `pan-os-go` (Go)

The [`pan-os-go` SDK](./pan-os-go.md) helps interact with PAN-OS devices> It also serves as the underlying client library for the [PAN-OS Terraform provider](/terraform/docs/panos/).

## `pan-os-php` (PHP)

The [`pan-os-php` library](./pan-os-php.md) is aimed at making PAN-OS configuration changes easy and maintainable. It also allows for complex scenarios like rule merging, unused object tracking, conversion of checkpoint exclusion groups, large scale rule editing, and App-ID conversion.
