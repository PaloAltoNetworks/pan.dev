:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Splunk Enterprise Security

## Common Information Model \(CIM\) Compliance

The Palo Alto Networks Add-on is fully compliant with the [Common Information Model](http://docs.splunk.com/Documentation/CIM/latest/User/Overview) \(CIM\) provided by Splunk to normalize data fields. This table indicates the [CIM datamodels](http://docs.splunk.com/Documentation/CIM/4.9.1/User/Overview#What_data_models_are_included) and tags that apply to Palo Alto Networks data.

| CIM Datamodel | Tags | Palo Alto Networks Eventtypes |
| :--- | :--- | :--- |
| [Change Analysis](http://docs.splunk.com/Documentation/CIM/latest/User/ChangeAnalysis) | change | pan\_config |
| [Email](http://docs.splunk.com/Documentation/CIM/latest/User/Email) | email, filter | pan\_email |
| [Intrusion Detection](http://docs.splunk.com/Documentation/CIM/latest/User/IntrusionDetection) | ids, attack | pan\_threat |
| [Malware](http://docs.splunk.com/Documentation/CIM/latest/User/Malware) | malware, attack, operations | pan\_malware\_attacks, pan\_malware\_operations, pan\_wildfire |
| [Network Sessions](http://docs.splunk.com/Documentation/CIM/latest/User/NetworkSessions) | network, session, start, end | pan\_traffic\_start, pan\_traffic\_end |
| [Network Traffic](http://docs.splunk.com/Documentation/CIM/latest/User/NetworkTraffic) | network, communicate | pan\_traffic |
| [Web](http://docs.splunk.com/Documentation/CIM/latest/User/Web) | web, proxy | pan\_url |

## Share MineMeld Indicators

_Added in Add-on version 6.0_

Indicators can be shared between MineMeld and Splunk Enterprise Security.  There are multiple types of indicators that can be shared:

* Domain
* File
* IPv4
* URL

Enabling indicator sharing is a two step process.  First, enable the saved searches of the indicator types to be shared.  Second, enable the corresponding threatlists in Splunk Enterprise Security.

Indicators are shared with Splunk Enterprise Security as a CSV file threatlist.  The saved searches are all set to run once every hour by default.  The Enterprise Security threatlist is set to poll every four hours by default.  So after enabling the desired indicator sharing, you may need to wait for a little time before they show up in Splunk Enterprise Security.

Here's an example walk through for enabling sharing IPv4 indicators.

#### Enable Saved Searches

Navigate to **Settings** &gt; **Searches, reports, and alerts**.

Find the `Generate MineMeld IPv4 Enterprise Security Threatlist` saved search, then in the Actions column, click **Edit** &gt; **Enable**.

#### Enable Enterprise Security Threatlists

Add the following four `threatlist` inputs to the file:
`$SPLUNK_HOME/etc/apps/Splunk_TA_paloalto/local/inputs.conf` (or to your preferred inputs.conf file)

```
[threatlist://minemeld_ipv4threatlist]
description = MineMeld IPv4 threatlist indicators for Splunk ES
interval = 14400
disabled = false
type = threatlist
url = lookup://minemeld_ipv4threatlist

[threatlist://minemeld_domainthreatlist]
description = MineMeld Domain threatlist indicators for Splunk ES
interval = 14400
disabled = false
type = threatlist
url = lookup://minemeld_domainthreatlist

[threatlist://minemeld_urlthreatlist]
description = MineMeld URL threatlist indicators for Splunk ES
interval = 14400
disabled = false
type = threatlist
url = lookup://minemeld_urlthreatlist

[threatlist://minemeld_filethreatlist]
description = MineMeld file threatlist indicators for Splunk ES
interval = 14400
disabled = false
type = threatlist
url = lookup://minemeld_filethreatlist
```