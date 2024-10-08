:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Dashboard Reference

This reference is intended to help you get the most out of the more complex dashboards. Not all dashboards are shown here.

## All Incidents {#incidents}

###### Overview

The Incident Feed displays all incidents across all the products in the Palo Alto Networks security platform. An _incident_ is any event that may need attention or investigation. For example, a vulnerability exploit attempt, command and control channel, malicious payload execution on an endpoint, or match on an indicator of compromise are all considered incidents.

The All Incidents dashboard summarizes all the incidents from all other dashboards in one place. Incidents displayed here may also be displayed in other dashboards.

###### Prioritize Investigations

Most organizations get more incidents than can feasibly be investigated so prioritization is crucial. The incident feed offers methods to prioritize incidents by severity, action taken, and AutoFocus tag. An incident tagged by AutoFocus threat intelligence is a critical attack from a known threat actor, campaign, or malware family. Incidents with an AutoFocus tag should be investigated.

###### Take Action

* Filter results by selecting a log type or severity from the time charts or using the filters at the top.
* Click a table row in the incident feed to see the details and context of that incident.

###### Incident Trend Graphs

Each of the 'per hour' incident trend lines at the top of the All Incidents dashboard pulls from a different kind of log or product.  To populate all the trend lines and thus see all possible incidents, ensure you're sending the needed logs from the right product to populate each incident trend. The following table shows the product and log required for each incident trend, and the Splunk search to bring up these kinds of logs. You can use this search to determine if these logs are in your Splunk index.

| Incident Trend \(per hour\) | Product Required | Splunk Search Macros |
| :--- | :--- | :--- |
| Correlated Incidents | [Firewall](https://www.paloaltonetworks.com/products/secure-the-network/next-generation-firewall) or [Panorama](https://www.paloaltonetworks.com/products/management/panorama) sending correlation logs | \`pan\_correlation\` |
| Network Incidents | [Firewall](https://www.paloaltonetworks.com/products/secure-the-network/next-generation-firewall) or [Panorama](https://www.paloaltonetworks.com/products/management/panorama) sending threat logs | \`pan\_threat\` |
| Endpoint Incidents | [Traps Endpoint Protection](https://www.paloaltonetworks.com/products/secure-the-endpoint/traps) | \`pan\_endpoint\` |
| Aperture SaaS Incidents | [Aperture Enterprise SaaS Security](https://www.paloaltonetworks.com/products/secure-the-cloud/aperture) | \`pan\_aperture\` |
| Malicious WildFire Submissions | [WildFire Malware Analysis](https://www.paloaltonetworks.com/products/secure-the-network/subscriptions/wildfire) and a [Firewall](https://www.paloaltonetworks.com/products/secure-the-network/next-generation-firewall) or [Panorama](https://www.paloaltonetworks.com/products/management/panorama) sending WildFire logs | \`pan\_wildfire\` verdict="malicious" |

## Adversary Scoreboard {#adversary}

###### Overview

The Adversary Scoreboard offers a broad view of the threats to your organization. Threats are displayed by the Threat Actor, Attack Campaign, or Malware Family responsible. Each adversary indicates the scope of the attack and the stage of the attack lifecycle reached by that adversary. Note: AutoFocus Threat Intelligence is required for the Adversary Scoreboard to display information.

###### Take Action

Click a table row to see the incidents attributed to an actor, campaign, or malware family. From there you can click an incident to see its details and context.

| Product Required | Splunk Search |
| :--- | :--- |
| Firewall or Panorama | \`pan\_threat\` |
| AutoFocus | \`pan\_autofocus\_tags\` |
| Minemeld | \`mm\_indicators\` |
| Endpoint Incidents | \`pan\_endpoint\` |

## Incident Context View {#incident-context}

###### Overview

The Incident Context view shows all the details and context for the incident that was clicked on in the All Incidents Feed. The dashboard will morph and change depending on the event that was clicked and the context discovered for the event to show the most important information you need about this incident.

See similar events, related user activity, malicious files, the source of the attack, and the campaign or threat actor behind it, for actionable intelligence you can use to immediately eliminate the threat.

###### Take Action

Click fields in the similar logs to get more information about the IP addresses and users in those fields.  Click the _Open In..._ field on the right side for a context-aware menu of actions to take. You can open a threat in Threat Vault, AutoFocus, or VirusTotal for more context, and even download the PCAP for the threat from the firewall.

| Product Required | Splunk Search |
| :--- | :--- |
| Firewall or Panorama | \`pan\_threat\` |
| Endpoint Incidents | \`pan\_endpoint |
| AutoFocus | \`pan\_autofocus\_tags\` |
| Endpoint Incidents | \`pan\_endpoint\` |
| Wildfire | \`pan\_wildfire\` |

## Malware {#malware}

The Malware dashboard presents information about malicious files across all the products in the Palo Alto Networks security platform. For example, information will show here for any malicious file transferred across a firewall, executed on an endpoint, or stored in a organization's SaaS account.

| Product Required | Splunk Search |
| :--- | :--- |
| Firewall or Panorama | \`pan\_threat\` |
| Endpoint Incidents | \`pan\_endpoint\` |

## WildFire Submissions {#wildfire}

WildFire cloud-based threat analysis and prevention engine for highly evasive zero-day exploits and malware employs a unique multi-technique approach combining dynamic and static analysis, innovative machine learning techniques, and a groundbreaking bare metal analysis environment to detect and prevent even the most evasive threats.

The WildFire Submissions dashboard enables you to track submission of new samples to WildFire and the results of that analysis. Any samples that are determined as _malicious_ are actionable and should be remediated.

| Product Required | Splunk Search |
| :--- | :--- |
| WildFire | \`pan\_wildfire\` |

## User Behavior {#user}

Track anomalous user behavior such as unacceptable web browsing, protocol tunneling, data leakage, and non-standard application usage. Use filters to create a report for a specific user.

| Product Required |  |
| :--- | :--- |
|  |  |

## SaaS Activity {#saas-activity}

Track sanctioned and unsanctioned SaaS activity. Know who is storing critical data in unsanctioned SaaS applications in your organization, and track activity in sanctioned SaaS applications with Aperture.

To declare SaaS Applications as sanctioned or unsanctioned, [set the sanctioned apps](../lookups#saas) in the `lookups/sanctioned_saas.csv` lookup table in the Palo Alto Networks Add-on.

## SaaS Security {#saas-security}

Threats related to Sanctioned and Unsanctioned SaaS application usage including network threats and threats residing within enterprise SaaS applications. These threats can include compliance violations such as HIPAA and PCI, malicious files detected with WildFire, or accidental over-share of critical data.

To declare SaaS Applications as sanctioned or unsanctioned, [set the sanctioned apps](/splunk/docs/lookups) in the `lookups/sanctioned_saas.csv` lookup table in the Palo Alto Networks Add-on.

## Network Security {#network-security}

Network Security data is displayed from Palo Alto Networks next-generation firewalls and Panorama. All network-related threats are shown including Threat Prevention signatures, network floods, spyware, viruses, and more.

## Threat Intelligence {#minemeld}

Threat Intelligence provides insight into the threat indicators being retrieved from MineMeld.  Threat indicators are used within the Palo Alto Networks Splunk app, and can also be exported to Splunk Enterprise Security. This dashboard shows the threat indicators pulled from MineMeld over time for each MineMeld Modular Input.

To create a MineMeld Modular Input, see [Getting Data Into Splunk from AutoFocus and MineMeld](/splunk/docs/autofocus-and-minemeld)

## Real-time Event Feed {#realtime}

###### Overview

This is the only real-time dashboard in the entire App and is used primarily for an immediate view of what is coming into Splunk, often for troubleshooting purposes. The default timeframe is realtime over the last 5 minutes.

###### Disable Real-time Searches

Some organizations do not allow real-time searches in their Splunk environment. If this is the case, you have a few options to disabled or remove the real-time search in this dashboard:

**Option 1:** Turn on [Indexed Real-time Searches](http://docs.splunk.com/Documentation/Splunk/7.0.0/Search/Aboutrealtimesearches#Indexed_real-time_search)  
This is a setting in the Splunk server that can be enabled for all Apps.

**Option 2:** Change the timeframe in this dashboard  
In the dashboard XML, change earliest from `rt-5m` to `-5m@m` and change latest from `rt` to `now`.

**Option 3:** Remove the _Real-time Event Feed_ dashboard  
Do this by deleting the file `$SPLUNK_HOME/etc/apps/SplunkforPaloAltoNetworks/default/data/ui/views/realtime_event_feed.xml`.

## Datamodel Audit {#datamodel}

Monitor the size, health, and acceleration of the Palo Alto Networks datamodels. This is an excellent tool for troubleshooting dashboards to see why data isn't showing up. All the dashboards except the Real-time Event Feed leverage the datamodel.
