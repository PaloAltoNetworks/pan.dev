---
id: libraries-sdks-tools-adaptable-framework
title: "Adaptable Framework"
sidebar_label: "Adaptable Framework"
keywords:
  - Machine Identity Management
  - Libraries and SDKs
---

# Adaptable Framework

Venafi Adaptable Drivers provide a quick, easy framework to build solutions, primarily with target **application platforms** (web servers, network devices, application firewalls, etc.) and **CAs** (certificate authorities), but also to support flexible workflow and logging needs for unique environments or use cases.

It will likely become clear over the next few pages which specific Adaptable Framework type is applicable to your use case.

:::tip Use the power of the Ecosystem!
If you still aren't sure which Adaptable Driver type best supports your target use case after reading through the next few pages, describe your use case to the [Venafi Warrior Community](https://community.venafi.com/ask-the-community-23) to see what is recommended!
:::

Each of Venafi's Adaptable Drivers provides a common set of variables required by the majority of applicable use cases that are supported by TLS Protect Datacenter natively, including things like the hostname/IP of the target application device or cloud service, as well as the necessary credentials to make the connection to the target.
This data can be referenced/retrieved from Venafi by using hash tables included in each function in the Adaptable Driver - more on this later.

Some Adaptable Drivers also let you define additional text fields, yes/no (boolean) fields, and an additional password credential field, which you can then use to elicit different behaviors or to pass additional data to the system or service to which you are building a solution.
Each type of Adaptable Driver will have slightly different options for customization.
These will be described in more detail in the complete documentation after you've selected which type of Adaptable Driver you will be writing.

Adaptable drivers depend on a Microsoft PowerShell script hosted on each Venafi server to execute functions corresponding to standard certificate lifecycle stages or TLS Protect Datacenter events.

:::note
To work effectively with any Venafi Adaptable solution, you must have some working knowledge of PowerShell scripting, or you must have equivalent experience with a scripting language similar to PowerShell.
:::
