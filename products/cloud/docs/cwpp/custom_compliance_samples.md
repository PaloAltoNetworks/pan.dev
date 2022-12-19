---
id: custom_compliance_samples
title: Getting started with custom image and host compliance checks
sidebar_label: Custom Compliance Checks
---

:::info
Custom compliance checks let you create customized internal compliance checks for images and hosts.
:::

## Windows check Users folder
:::note
Check if the folder c:\Users exists
:::
```bash
IF EXIST C:\Users Echo test permission failure && exit 1
```

## File exists
:::note
Check if file /tmp/foo.txt exists
:::
```bash
if [ ! -f /tmp/foo.txt ]; then
    echo "File not found!"
    exit 1
fi
```

## File permission
:::note
File permission must be correct
:::
```bash
if [ $(stat -c %a /bin/busybox) -eq 755 ]; then
     echo 'test permission failure' && exit 1;
fi
```

## User joker
:::note
User joker should not exist!
:::
```bash
if grep -Fxq "joker" /etc/passwd
then
 echo "user joker found!"
    exit 1   
else
    echo "user joker not found!" 
fi
```

## Hosts file exists
:::note
Check hosts file exists (Linux)
:::
```bash
if [ ! -f /etc/hosts ]; then
    echo "File not found!"
    exit 1
fi
```

## User batman
:::note
User batman must exist!
:::
```bash
if grep -Fxq "batman" /etc/passwd
then
    echo yes
else
    echo "user not found!"
    exit 1
fi
```

## Check for GPL license (alpine)
:::note
Check if the alpine image has a GPL license
:::
```bash
if grep 'GPL' ~/licenses.txt 
then
    echo "Found GPL license :("
    exit 1
else
    echo "No GPL license found :)"
    exit 0
fi
```