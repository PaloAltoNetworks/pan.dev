---
id: azure_virtual_machine
title: Virtual Machine
sidebar_label: Virtual Machine 
description: Virtual Machine
hide_title: true
---

## Sample Azure Virtual Machine RQL Queries

:::note
The following guide will walk you through Azure RQL Query Examples
:::

### Azure virtual machine looking for Linux OS type in storage profile

```bash
config from cloud.resource where AND api.name = 'azure-vm-list' AND json.rule = ['properties.storageProfile'].osDisk.osType contains "Linux"
```

### Azure virtual machine anti malware setting not enabled on a Windows VM

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-vm-list' AND resource.status = Active AND 
json.rule = ['properties.licenseType'] contains "Windows" and Extensions.IaaSAntimalware.settings.AntimalwareEnabled is false
```

### Azure virtual machine not configured with automatic updates on Windows VM

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-vm-list' AND 
resource.status = Active AND json.rule = ['properties.licenseType'] contains "Windows" and 
['properties.osProfile'].windowsConfiguration.enableAutomaticUpdates is true
```

### Azure virtual machine disk not encrypted
> Audit the disk encryption status for the VM resources; Remediation - Navigate to the settings > Disk and click on the Encryption to enable the disk encryption, the Azure Keyvault resource should have the access policy enablement as a prerequisite for the disk encryption

```bash
config from cloud.resource where cloud.type = 'azure' AND api.name = 'azure-disk-list' and 
json.rule = 'osType exists and (encryptionSettings does not exist or encryptionSettings.enabled == false)'
```

### Azure NIC has a public IP address assigned

```bash
config from cloud.resource where api.name = 'azure-network-nic-list' AND json.rule = ['properties.ipConfigurations'][*].['properties.publicIPAddress'].['publicIpAddress'] exists 
```
