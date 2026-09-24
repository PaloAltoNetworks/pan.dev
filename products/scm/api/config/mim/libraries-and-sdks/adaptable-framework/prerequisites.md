---
id: libraries-and-sdks-adaptable-framework-prerequisites
title: "Prerequisites"
sidebar_label: "Prerequisites"
keywords:
  - Machine Identity Management
  - Libraries and SDKs
---

# Prerequisites

Before you begin writing an Adaptable Driver, there are a few important things to consider.

:::note
Venafi Adaptable Drivers support Venafi TLS Protect Datacenter only. If you are looking to integrate with TLS Protect Cloud, please visit [Venafi Dev Central](https://developer.venafi.com/tlsprotectcloud/docs/libraries-and-sdks).
:::

## Environment Dependencies

Since the Adaptable Framework is based on PowerShell, you'll need a Windows machine with the following:

- Windows PowerShell 5.1

:::warning
PowerShell 7 is not yet supported by TLS Protect Datacenter
:::

- .NET 4.7.2 or later

:::note TLS 1.3
If your product does not support TLS 1.3, you will need to add the following code to your Adaptable script in order for it to work with the Venafi Platform.
```
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls -bor [Net.SecurityProtocolType]::Tls11 -bor [Net.SecurityProtocolType]::Tls12
```
:::

### Other Considerations

In most cases, any information required by both Venafi and the target integrated solution can be passed to and from Venafi through the Adaptable Driver script and the existing functions contained therein.
That said, there are certain scenarios which require interacting *directly* with the API.

#### Calling Venafi APIs from Adaptable Drivers

If your Adaptable Driver requires access to the Venafi API, you'll need to do the following:

- Create an API Application Integration that's specific to your script. This is a required step in which you register your application with Trust Protection Platform. For more information, see [Integrating other systems with Venafi products](https://docs.venafi.com/Docs/current/TopNav/Content/API-ApplicationIntegration/t-APIAppIntegrations-creating.php).

:::tip Best Practice
When creating your API Application Integration for use with OAuth, consider the following best practice settings. Under Access Limits in the Create Application Integration panel, select these options:

- Set **Grant** and **token expiration** to `Configure`

- Set **Grant Expiration Period** to `1 day`

- Set **Token Refresh** to `Disabled`
:::

- If you don't already have one, create a Username credential that has been associated with a service account that has permissions to the API application. See [Creating user name or password credentials](https://docs.venafi.com/Docs/current/TopNav/Content/Credentials/t-Credentials-Username-Password-creating.php).

Unique use cases like this one should be rare, but occasionally do present themselves and require additional consideration.

:::tip Use the power of the Ecosystem!
In the event you need functionality that isn't supported by the Adaptable Driver framework natively, please check the [Venafi Warrior Community](https://community.venafi.com/ask-the-community-23) to see if your question might have already been asked by previous developers, and if there's an accepted workaround.

If not, post a new question!
:::
