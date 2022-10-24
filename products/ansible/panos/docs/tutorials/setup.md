---
id: setup
title: Ansible for PAN-OS
sidebar_label: Setting Up
hide_title: true
description: Setting Up
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - ansible
---

# Setting up

In this tutorial we will get setup ready to execute Ansible playbooks for PAN-OS.
<!---
- Do we go for local install, container install, some (unknown as yet) online sandbox, or give the choice?
- Guidance on writing tutorials is to remove choice, not worry about best practices, and just get to the learning...
-->
## Assumptions

This tutorial/guide assumes:
- access to a Linux-based machine, with administrative credentials
- the machine has working connectivity and access to the Internet to download content
- the connectivity and administrative credentials for either a PAN-OS next-generation firewall or Panorama

## Install Ansible

1. Install Ansible. The exact steps will differ based on your operating system and environment. The Ansible documentation describes the steps required [here](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

2. Test Ansible installed correctly. Execute this command:
```
ansible --version
```
3. You should see an output like this (exact version numbers will differ):
```
ansible [core 2.12.6]
  config file = None
  configured module search path = ['/Users/username/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /Users/username/.pyenv/versions/3.10.4/lib/python3.10/site-packages/ansible
  ansible collection location = /Users/username/.ansible/collections:/usr/share/ansible/collections
  executable location = /Users/username/.pyenv/versions/3.10.4/bin/ansible
  python version = 3.10.4 (main, May 24 2022, 14:08:56) [Clang 13.1.6 (clang-1316.0.21.2.5)]
  jinja version = 3.1.2
  libyaml = True
```

## Install PAN-OS Python packages

1. Install the required Python packages. Execute this command: 
```
pip install -r https://raw.githubusercontent.com/PaloAltoNetworks/pan-os-ansible/develop/requirements.txt
```

2. Test the packages installed correctly. Execute this command:
```
pip list | grep pan
```
3. You should see an output like this (exact version numbers will differ):
```
pan-os-python                 1.7.3
pan-python                    0.17.0
```

## Install the PAN-OS collection of Ansible modules

1. Install the modules from Ansible's Galaxy repository. Execute this command:
```
ansible-galaxy collection install paloaltonetworks.panos
```

2. Test the collection installed correctly. Execute this command:
```
ansible-galaxy collection list | grep panos
```
3. You should see an output like this (exact version numbers will differ):
```
paloaltonetworks.panos 2.11.0
```

## Setup the hosts file

1. In the directory where you will store your Ansible playbook files, create a file called ```inventory.txt``` with the following content:
```
firewall
panorama
```
2. Create a sub-directory called ```host_vars```
3. Within the ```host_vars``` directory, create a file call ```firewall.yml``` with the following content, changing the values for ```ip_address```, ```username``` and ```password``` as appropriate:
```
---
ip_address: "192.168.1.1"
username: "admin"
password: "admin"
```
4. Within the ```host_vars``` directory, create a file call ```panorama.yml``` with the following content, changing the values for ```ip_address```, ```username``` and ```password``` as appropriate:
```
---
ip_address: "192.168.1.2"
username: "admin"
password: "admin"
```
5. Note that for these learning examples, we are storing PAN-OS credentials in a plain-text file on disk. This is not a production-level solution, and other solutions for managing secrets should be considered for real-world deployments. Ansible, Hashicorp, public cloud providers and many others have solutions for this.

## Confirm access to PAN-0S
<font color="red">
Is this needed?
</font>

1. Explain
2. Execute test command(s) - https? admin creds?
