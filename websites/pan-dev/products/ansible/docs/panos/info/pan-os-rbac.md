---
id: pan-os-rbac
title: Ansible and PAN-OS Role-Based Access Control
sidebar_label: Role-Based Access Control
hide_title: true
description: Ansible and PAN-OS Role-Based Access Control
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - ansible
---

# Ansible and PAN-OS Role-Based Access Control

The collection of Ansible modules for PAN-OS communicates with Panorama and NGFWs using the PAN-OS XML API. Role-based access controls (RBAC) options are therefore governed by the RBAC options provided in PAN-OS for the XML API. As noted in the [connectivity section](../connectivity) section, a username/password or API key for an administrator needs to be provided to the modules, and it is the RBAC for this administrator which needs to be considered. You can assign superuser privileges to this administrator and they will be able to use all the modules, but many users wish to restrict the privileges of this administrator to only that which is required.

As of PANS 11.0, [Admin Roles are used to create custom RBAC](https://docs.paloaltonetworks.com/pan-os/11-0/pan-os-admin/firewall-administration/manage-firewall-administrators/configure-an-admin-role-profile) for administrators as required. The following categories of operations can be enabled or disabled in an Admin Role, which is then assigned to an administrator:

- Configuration
- Commit
- Import
- Export
- Operational Requests
- User-ID Agent
- Report
- Log

## Configuration

The majority of the modules in the PAN-OS collection are concerned with configuration of items such as: address and services objects, zones, security rules, NAT rules, decryptions rules, network interfaces, static and dynamic routing, VPNs, and many many more. There are also modules such as `panos_type_cmd` and `panos_config_element` which can [make generic configuration changes](../guides/config-xpath.mdx). Using any of these configuration modules requires the administrative account have the `configuration` option enabled in the relevant Admin Role.

## Commit

Configuration changes made using the modules described in the previous are initially held in a `candidate configuration`, with the changes being made "live" by promoting the candidate configuration to the `running configuration` using a `commit` operation. There are several modules used to perform commit operations, covering use cases involved both Panorama-managed and non Panorama-managed NGFWS. Using these commit modules requires the administrative account have the `commit` option enabled in the relevant Admin Role.

## Import/Export

There are two modules within the collection used for importing and exporting files to and from PAN-OS; `panos_import` and `panos_export`. Examples of files you can transfer with these modules include certificates, configuration, block pages, packet captures, and more. Using these import and export modules requires the administrative account have the `import` or `export` option enabled, respectively, in the relevant Admin Role.

## Operational Requests

A module named `panos_op` provides the ability to execute operational commands, providing an equivalent of typing command into the CLI prompt at the operational mode. Examples include commands for reboot and shutdown, acquiring and release config locks, and more. Using this module requires the administrative account have the `operational requests` option enabled in the relevant Admin Role.

## User-ID (including IP address tags for Dynamic Address Groups)

Modules covering User-ID operations include `panos_userid` (which covers user-to-IP mappings) and `panos_registered_ip` (which covers tags for IP address, where tags are then used as match criteria for Dynamic Address Groups). Using modules like these requires the administrative account have the `user-id` option enabled in the relevant Admin Role.
