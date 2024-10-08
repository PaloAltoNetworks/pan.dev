---
id: adaptive-response
title: Adaptive Response
---
:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Set Up Adaptive Response

## Automated Remediation

Use the [pantag](/splunk/docs/commands#pantag) command to share context from Splunk to the firewall for automated remediation.

## Share context with Dynamic Address/User Groups

Tagging an IP address/User means setting metadata or context on the firewall for that IP/User, which causes it to be added to corresponding Dynamic Address/User Groups in the firewall security policy. For example, you could create a rule in the security policy that blocks any IP address with the tag 'bad-actor'. Initially, no IP addresses would be blocked, but you can create a search in Splunk for criteria that represents a problem device, and trigger a tagging of that IP address with the 'bad-actor' tag. The firewall would add the IP address to the Dynamic Address Group in the policy automatically and begin blocking the IP.

Blocking a bad actor is just the beginning, and you aren't limited to allow or deny as your options. You could tag an IP address/User for additional scrutiny by the Threat Prevention engine, or as a known trusted server to be given additional permissions. The behaviors are defined by your security policy, and how you treat IP addresses with specific tags.

**See also:**

> Command reference: [pantag](commands#pantag)

Video from a session at Ignite 2015 explains Dynamic Address Groups in more detail with several use cases including asset management:

> Video: [Applying Order to Computing Chaos](https://www.youtube.com/watch?v=Kv0SR9KLDj4)

## Configure Adaptive Response

To use Adaptive Response or the custom searchbar commands, please configure the Add-on with credentials for your Firewall or Panorama.

To configure credentials, navigate to the Add-on, click the **Palo Alto Networks** menu in the top left of the App, and click **Configuration**.

![The credentials name &quot;Firewall&quot; will be used for connection to Firewalls or Panorama](/splunk/img/firewall-credentials.png)

Enter the credentials for your Firewall or Panorama and name the credentials "Firewall". Only one set of credentials can be entered with this name. The credentials are encrypted by Splunk and used for the following features:

-   [Sync user login events with User-ID](/splunk/docs/userid)
-   [Share context with Dynamic Address Groups](/splunk/docs/adaptive-response)
-   [Update metadata from content packs](/splunk/docs/lookups#contentpack)

#### Optional: Create a Splunk User on Firewall/Panorama

Optionally, you can create a user for Splunk on the firewall or Panorama, and reduce the user's role to just what is required. The permissions needed depend on which features will be used.

| Feature | Permission Needed |
| ------- | ----------------- |
| Commands: [pantag](/splunk/docs/commands#pantag), [panuserupdate](/splunk/docs/commands#panuserupdate) | User-ID Agent |
| Alert Action - Tag to Dynamic Address List | User-ID Agent |
| Command: [pancontentpack](/splunk/docs/commands#pancontentpack) with PAN-OS < 8.0 | Configuration |
| Command: [pancontentpack](/splunk/docs/commands#pancontentpack) with PAN-OS >= 8.0 | Configuration and Operational Requests |

![Firewall permissions required for App special features](/splunk/img/admin_role.png)