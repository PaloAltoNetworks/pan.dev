---
id: operations-checkready
title: Ansible for PAN-OS
sidebar_label: Check a NGFW is Ready
hide_title: true
description: Operations
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
import ClosingNotes from '../closingnotes.md'

# Operations Tasks

With this playbook, you will perform operations on a PAN-OS next-generation firewall. These are common operational tasks that would otherwise need to be performed manually.

<Assumptions components={props.components} />

<LabGuidance components={props.components} />

## The "check ready" playbook

This playbook checks if the PAN-OS next-generation firewall is ready. If the firewall is not ready, the check will retry multiple times until the firewall is ready. This can be useful when waiting for a firewall reboot to complete.

1. Create a file called ```check-ready.yml``` and paste in the following content:
```yaml
---
- name: Check the firewall is ready
  hosts: 'firewall'
  connection: local
  gather_facts: false

  vars:
    device:
      ip_address: "{{ ip_address }}"
      username: "{{ username }}"
      password: "{{ password }}"

  collections:
    - paloaltonetworks.panos

  tasks:
    - name: Check if PAN-OS appliance is ready and wait until it is
      paloaltonetworks.panos.panos_check:
        provider: "{{ device }}"
      changed_when: false
      register: result
      until: result is not failed and result.msg == 'Device is ready.'
      retries: 100
      delay: 15

    - name: Display output
      ansible.builtin.debug:
        msg: "{{ result.msg }}"
```
2. Execute the playbook with the following command:
```
ansible-playbook -i inventory.txt --ask-vault-pass check-ready.yml
```
3. If the firewall is ready, the output should be something similar to this:
```
PLAY [Palo Alto Playbook] **********************************************************************************

TASK [Check if PAN-OS appliance is ready] ******************************************************************
ok: [firewall]

TASK [Display output] **************************************************************************************
ok: [firewall] => {
    "msg": "Device is ready."
}

PLAY RECAP *************************************************************************************************
firewall           : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0    
```
4. If the firewall is not ready when the playbook execution starts, the output should be something similar to this:
```
PLAY [Palo Alto Playbook] **********************************************************************************

TASK [Check if PAN-OS appliance is ready] ******************************************************************
FAILED - RETRYING: [host_labfw]: Check if PAN-OS appliance is ready (100 retries left).
FAILED - RETRYING: [host_labfw]: Check if PAN-OS appliance is ready (99 retries left).
FAILED - RETRYING: [host_labfw]: Check if PAN-OS appliance is ready (98 retries left).
ok: [firewall]

TASK [Display output] **************************************************************************************
ok: [firewall] => {
    "msg": "Device is ready."
}

PLAY RECAP *************************************************************************************************
firewall           : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0    
```

<ClosingNotes components={props.components} />