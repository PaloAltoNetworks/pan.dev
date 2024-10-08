:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Tune or Reduce Firewall Logs

The **most common** question we get is:

> "The firewall/Panorama produces a lot of logs and it's overwhelming our Splunk license or producing a lot of noise that's hard to filter through. How can I reduce the log volume without losing security visibility?"

The firewall offers very granular logging controls, so you can tune and reduce logs to Splunk with extreme precision. Even so, this question is difficult to answer because the answer is different for every organization. So this page is an effort to provide general guidance to help you answer this question for yourself.

This page will evolve over time as we get feedback from customers. If it's not a fit for your organization, please let us know at splunkapp@paloaltonetworks.com with specific guidance on how this page can improve to recognize your situation.

## Log Types

There are many log types, and not all of them are relevant to every organization. The following table shows the characteristics of the most common logs types:

| Log Type | Splunk Sourcetype | Log Size | Log Frequency |
| :--- | :--- | :--- | :--- |
| Traffic | pan:traffic | Large | Very High |
| Threat | pan:threat | Large | Low |
| Threat : url | pan:threat | Large | Very High |
| Threat : file | pan:threat | Large | High |
| System | pan:system | Medium | Medium |
| Configuration | pan:config | Small | Low |
| Correlation | pan:correlation | Small | Low |
| HIP Match | pan:hipmatch | Small | Medium |

Note: URL and File logs are of type Threat, but they are called out separately because they have a different frequency than most threat logs.

You can see from the table that **Traffic logs and URL logs** are the most frequent and largest, with **File logs** coming in second. These log types will make up the bulk of what Splunk has to ingest and index.

For more guidance on calculating log sizes and event frequency for your environment, refer to these two articles in the Palo Alto Networks Knowledgebase. They include tools and scripts to pull the logging rate from a live device and calculate the storage needed for retension.

* [Sizing Storage for the Logging Service](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA10g000000ClVMCA0)
* [Panorama Sizing and Design Guide](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA10g000000Clc8CAC)

## Disable Log Types

You can eliminate specific log types that are not of use for your organization. Here are a couple examples:

1. If you use Splunk in a SOC for security, but are not responsible for the operational health of the firewalls, you could consider disabling System and Config log types
2. Traffic logs are large and frequent. Cut their volume in half by shutting off 'Start' logs in all your firewall rules. 'Start' logs often have an incorrect app anyway, becuase they are logged before the app is fully determined. The 'End' logs will have the correct App and other data such as the session duration. See [Session Log Best Practices](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA10g000000Clt5CAC).

## Reduce Logs for Specific Endpoints or Threats

You can only get so far disabling entire log types. Most organizations need these log types and can't disable all URL or Traffic logs. You can still make an impact by reducing these log types only when they are redundant or unnecessary. You can turn these logs on or off for specific rules which gives you complete control over every log. Here are examples of where you might consider reducing log volume:

1. Backup software runs every night generating thousands of connections from endpoints to a backup server. Create a rule for this backup app from internal endponts to the backup server which logs only threats, and doesn't log traffic sessions, urls, or files.
2. Use of an internal app regularly triggers a vulnerability or spyware alert, however, its determined that this is the normal operation of the app and no risk exists. Create a rule for this specific app and the server it runs on that disables this signature. See [How to disable signatures for a specific host](https://knowledgebase.paloaltonetworks.com/KCSArticleDetail?id=kA10g000000ClN3CAK)

## Filter Logs with Syslog-NG

Some organizations using syslog-ng as a log collector prefer to apply filters in their syslog-ng configuration to drop some logs before they are sent to Splunk. Filter match criteria in syslog-ng is flexible and can even match with regex. The team responsible for log collection can control the filtering of logs without having to access the firewall configuration or make a request to the security team. This method requires knowledge of syslog-ng filter configuration which is outside the scope of this document. For more information, see [syslog-ng filter functions](https://www.syslog-ng.com/technical-documents/doc/syslog-ng-open-source-edition/3.16/administration-guide/53).

