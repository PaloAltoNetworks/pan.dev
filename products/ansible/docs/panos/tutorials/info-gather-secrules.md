---
id: info-gather-secrules
title: Ansible for PAN-OS
sidebar_label: Firewall Rules
hide_title: true
description: Information Gathering
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

# Information Gathering Tasks

With this playbook, you will gather information from a PAN-OS next-generation firewall. The tasks in this playbook are useful both on their own in order to gather data, but also to use the data to feed into other tasks or other playbooks.

<Assumptions components={props.components} />

<LabGuidance components={props.components} />

## The "gather firewall rules" playbook

This playbook gathers all the security (firewall) rules from a PAN-OS next-generation firewall.

1. Create a file called ```get-security-rules.yml``` and paste in the following content:
```yaml
---
- name: Gather security rules
  hosts: 'firewall'
  connection: local

  vars:
    device:
      ip_address: "{{ ip_address }}"
      username: "{{ username }}"
      password: "{{ password }}"

  collections:
    - paloaltonetworks.panos

  tasks:
    - name: Get all security rules
      paloaltonetworks.panos.panos_security_rule:
        provider: '{{ device }}'
        gathered_filter: '*'
        state: gathered
      register: sec_rules

    - name: Output
      ansible.builtin.debug:
        msg: '{{ sec_rules }}'
```
2. Execute the playbook with the following command:
```
ansible-playbook -i inventory.txt --ask-vault-pass get-security-rules.yml
```
3. The output should be something similar to this:
```
PLAY [Gather rules] ****************************************************************************************

TASK [Gathering Facts] *************************************************************************************
ok: [firewall]

TASK [Get all security rules] ******************************************************************************
ok: [firewall]

TASK [Output] **********************************************************************************************
ok: [firewall] => {
    "msg": {
        "changed": false,
        "failed": false,
        "gathered": [
            {
                "action": "drop",
                "antivirus": null,
                "application": [
                    "any"
                ],
                "category": [
                    "any"
                ],
                "data_filtering": null,
                "description": null,
                "destination_devices": [
                    "any"
                ],
                "destination_ip": [
                    "sinkhole.paloaltonetworks.com"
                ],
                "destination_zone": [
                    "consumer",
                    "internet"
                ],
                "disable_server_response_inspection": null,
                "disabled": null,
                "file_blocking": null,
                "group_profile": null,
                "group_tag": "drop",
                "hip_profiles": null,
                "icmp_unreachable": null,
                "log_end": null,
                "log_setting": "default",
                "log_start": false,
                "negate_destination": null,
                "negate_source": null,
                "negate_target": null,
                "rule_name": "catch-sinkhole",
                "rule_type": null,
                "schedule": null,
                "service": [
                    "any"
                ],
                "source_devices": [
                    "any"
                ],
                "source_ip": [
                    "any"
                ],
                "source_user": [
                    "any"
                ],
                "source_zone": [
                    "any"
                ],
                "spyware": null,
                "tag_name": [
                    "drop"
                ],
                "target": null,
                "url_filtering": null,
                "uuid": "54f0729b-814c-44fb-b5f8-506563259924",
                "vulnerability": null,
                "wildfire_analysis": null
            },
            {
                "action": "drop",
                "antivirus": null,
                "application": [
                    "any"
                ],
                "category": [
                    "any"
                ],
                "data_filtering": null,
                "description": null,
                "destination_devices": [
                    "any"
                ],
                "destination_ip": [
                    "blocked-hosts",
                    "dshield",
                    "panw-known-ip-list"
                ],
                "destination_zone": [
                    "consumer",
                    "internet"
                ],
                "disable_server_response_inspection": null,
                "disabled": null,
                "file_blocking": null,
                "group_profile": null,
                "group_tag": "drop",
                "hip_profiles": null,
                "icmp_unreachable": null,
                "log_end": null,
                "log_setting": "default",
                "log_start": false,
                "negate_destination": null,
                "negate_source": null,
                "negate_target": null,
                "rule_name": "block-malicious",
                "rule_type": null,
                "schedule": null,
                "service": [
                    "any"
                ],
                "source_devices": [
                    "any"
                ],
                "source_ip": [
                    "any"
                ],
                "source_user": [
                    "any"
                ],
                "source_zone": [
                    "any"
                ],
                "spyware": null,
                "tag_name": [
                    "drop"
                ],
                "target": null,
                "url_filtering": null,
                "uuid": "6dd3c511-a618-4aad-94fa-c28bd9c5a2d8",
                "vulnerability": null,
                "wildfire_analysis": null
            }
        ],
        "gathered_xml": [
            "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<entry name=\"catch-sinkhole\" uuid=\"54f0729b-814c-44fb-b5f8-506563259924\">\n\t<from>\n\t\t<member>any</member>\n\t</from>\n\t<to>\n\t\t<member>consumer</member>\n\t\t<member>internet</member>\n\t</to>\n\t<source>\n\t\t<member>any</member>\n\t</source>\n\t<source-user>\n\t\t<member>any</member>\n\t</source-user>\n\t<destination>\n\t\t<member>sinkhole.paloaltonetworks.com</member>\n\t</destination>\n\t<application>\n\t\t<member>any</member>\n\t</application>\n\t<service>\n\t\t<member>any</member>\n\t</service>\n\t<category>\n\t\t<member>any</member>\n\t</category>\n\t<action>drop</action>\n\t<log-setting>default</log-setting>\n\t<log-start>no</log-start>\n\t<tag>\n\t\t<member>drop</member>\n\t</tag>\n\t<source-hip>\n\t\t<member>any</member>\n\t</source-hip>\n\t<destination-hip>\n\t\t<member>any</member>\n\t</destination-hip>\n\t<group-tag>drop</group-tag>\n</entry>\n",
            "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<entry name=\"block-malicious\" uuid=\"6dd3c511-a618-4aad-94fa-c28bd9c5a2d8\">\n\t<from>\n\t\t<member>any</member>\n\t</from>\n\t<to>\n\t\t<member>consumer</member>\n\t\t<member>internet</member>\n\t</to>\n\t<source>\n\t\t<member>any</member>\n\t</source>\n\t<source-user>\n\t\t<member>any</member>\n\t</source-user>\n\t<destination>\n\t\t<member>blocked-hosts</member>\n\t\t<member>dshield</member>\n\t\t<member>panw-known-ip-list</member>\n\t</destination>\n\t<application>\n\t\t<member>any</member>\n\t</application>\n\t<service>\n\t\t<member>any</member>\n\t</service>\n\t<category>\n\t\t<member>any</member>\n\t</category>\n\t<action>drop</action>\n\t<log-setting>default</log-setting>\n\t<log-start>no</log-start>\n\t<tag>\n\t\t<member>drop</member>\n\t</tag>\n\t<source-hip>\n\t\t<member>any</member>\n\t</source-hip>\n\t<destination-hip>\n\t\t<member>any</member>\n\t</destination-hip>\n\t<group-tag>drop</group-tag>\n</entry>\n"
        ]
    }
}

PLAY RECAP *************************************************************************************************
firewall           : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   
```