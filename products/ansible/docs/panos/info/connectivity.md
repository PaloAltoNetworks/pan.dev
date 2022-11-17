---
id: connectivity
title: How Ansible connects to PAN-OS
sidebar_label: How Ansible connects to PAN-OS
hide_title: true
description: How Ansible connects to PAN-OS
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - ansible
---

# How Ansible connects to PAN-OS

When you are using Ansible with PAN-OS, the connection method used is `local`. For example:

```yaml
---
- name: Gather security rules
  hosts: 'firewall'
  // highlight-next-line
  connection: local
  .
  .
```

This instructs Ansible to use the local machine to execute the playbook, as opposed to instructing the remote machine to execute the playbook. The remote machine, when using Ansible for PAN-OS, would be the NGFW or Panorama; executing third-party code on these machines would break Palo Alto Networks' assurance model. Ansible therefore executes the playbooks on the local machine, and using the PAN-OS modules, sends the required commands to the NGFW or Panorama using the PAN-OS APIs for those appliances. For this reason, it is common to define a `provider` variable block at the start of a playbook, to specify the remote NGFW or Panorama connectivity and administrative credentials. That variable block is then referred to when executing tasks. For example, this shows a provider block named `device`:

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
