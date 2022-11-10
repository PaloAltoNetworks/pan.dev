---
id: upgrade-single
title: Ansible for PAN-OS
sidebar_label: Upgrade a Single Firewall
hide_title: true
description: Upgrade a Single Firewall
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - ansible
---

import Assumptions from '../assumptions.md'
import LabGuidance from '../../../../lab-guidance.md'

# Upgrade a Single Firewall

In this guide, you will upgrade the PAN-OS software on a single firewall. You will download the software, install the software, reboot the firewall, then check the firewall is ready again after the reboot.

<Assumptions components={props.components} />

<LabGuidance components={props.components} />

## Create playbook files and define connectivity to the firewall

Create a new Ansible yaml file named `upgrade-single-firewall.yml`, establish a variable block called `device` for the firewall, and reference the PAN-OS collection:

```yaml
---
- hosts: '{{ target | default("firewall") }}'
  connection: local

  vars:
    device:
      ip_address: "{{ ip_address }}"
      username: "{{ username | default(omit) }}"
      password: "{{ password | default(omit) }}"
      api_key: "{{ api_key | default(omit) }}"

  collections:
    - paloaltonetworks.panos
```

## Initiate download and install of software, and a reboot

Start the playbook tasks with the `panos_software` module, which in one task will download the target version, install the target version, and then initiate a reboot:

```yaml
  tasks:
    - name: Install target PAN-OS version
      paloaltonetworks.panos.panos_software:
        provider: "{{ device }}"
        version: "10.2.3"
        download: true
        install: true
        restart: true
```

## Wait for the reboot to finish

Continue the tasks by initially waiting for 30 seconds to allow PAN-OS to initiated the reboot and therefore move to a "not ready" state:

```yaml
    - name: Pause for restart
      pause:
        seconds: 30
```

You now want to wait until the firewall has rebooted and is ready to pass traffic again, using the `panos_check` module. You record the outcome of the task execution as `result`. The `until` keyword tells Ansible to repeat the `panos_check` task until the conditions are met; that the check has not failed, and that the `result` message confirms the device is ready. The task is re-executed every 15 seconds up to a maximum of 100 times:

```yaml
    - name: Check if PAN-OS appliance is ready
      paloaltonetworks.panos.panos_check:
        provider: "{{ device }}"
      changed_when: false
      register: result
      until: result is not failed and result.msg == 'Device is ready.'
      retries: 100
      delay: 15
```

## Result message

The final task returns the last value of the result message, which should confirm the device is ready after the upgrade and reboot, but in the case of any issues, will confirm the status of the firewall at the end of the playbook execution:

```yaml
    - name: Display output
      debug:
        msg: "{{ result.msg }}"
```

## Final playbook

Putting all the sections together, the playbook in entirety looks like this:

```yaml
---
- hosts: '{{ target | default("firewall") }}'
  connection: local

  vars:
    device:
      ip_address: "{{ ip_address }}"
      username: "{{ username | default(omit) }}"
      password: "{{ password | default(omit) }}"
      api_key: "{{ api_key | default(omit) }}"

  collections:
    - paloaltonetworks.panos

  tasks:
    - name: Install target PAN-OS version
      paloaltonetworks.panos.panos_software:
        provider: "{{ device }}"
        version: "10.2.3"
        download: true
        install: true
        restart: true

    - name: Pause for restart
      pause:
        seconds: 30

    - name: Check if PAN-OS appliance is ready
      paloaltonetworks.panos.panos_check:
        provider: "{{ device }}"
      changed_when: false
      register: result
      until: result is not failed and result.msg == 'Device is ready.'
      retries: 100
      delay: 15

    - name: Display output
      debug:
        msg: "{{ result.msg }}"
```
