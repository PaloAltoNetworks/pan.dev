---
id: health-checks 
title: Health Checks
---
:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Health Checks

## Timestamp Validation

**Description:**
The Timestamp Validation health check verifies whether the logs in the Splunk app are in the correct time zone. 

**Potential Issues:**
- Logs with timestamps in the future. 
- Dashboards with no data.

**Troubleshooting Steps:**
To troubleshoot the Timestamp Validation health check, follow these steps:

1. **Check Failed Logs:**
   - Perform a search for `eventtype=pan` with 'All time' as the timeframe.
   - Review the logs that failed the Timestamp Validation check.
   - Identify the specific logs or log sources that are causing the issue.
2. **Review Troubleshootinng Guides:**
   - [Time and Timezone Problems](../troubleshooting/#time-and-timezone-problems)

3. **Check Log Sources:**
   - Investigate the log sources that are generating logs with incorrect timestamps.
   - Ensure that the log sources are configured to provide logs with accurate timestamps.

4. **Validate Timezone Settings:**
   - Confirm the timezone settings of your app or system.
   - Ensure that the timestamps in the logs align with the expected timezone.
   - Incorrect timezone settings can lead to timestamp validation failures.

5. **Splunk Time Configuration:**
   - Review the time configuration in your Splunk deployment.
   - Verify the time settings on the Splunk indexer, forwarders, and search heads.
   - Ensure that the time settings are consistent and accurate across all components.

6. **Consult Splunk Documentation:**
   - Refer to the official Splunk documentation for timestamp-related troubleshooting.
   - Explore the Splunk community forums and knowledge base for relevant discussions and solutions.
   - Take advantage of Splunk's resources to gain further insights and assistance.

**Additional Notes:**
- Timestamp validation issues may impact the accuracy of time-based searches, correlations, and visualizations within the Splunk app.
- It's essential to resolve timestamp validation failures promptly to maintain data integrity and derive meaningful insights from your logs.
- If the troubleshooting steps outlined above do not resolve the issue, consider reaching out to Splunk support for further assistance.

## Timestamp Compatibility

**Description:**
The Timestamp Compatibility health check verifies the timestamp format of Palo Alto Networks syslog logs to ensure they adhere to the required format. This check helps ensure accurate parsing and indexing of log events, enabling proper time-based analysis and correlation within the Splunk app.

**Potential Issues:**
- No logs showing up in dashboard
- Inconsistent or unrecognized timestamp field in syslog logs
- Misconfigured timestamp extraction settings

**Troubleshooting Steps:**
To troubleshoot the Timestamp Compatibility health check for Palo Alto Networks syslog logs, follow these steps:

1. **Review Health Check Results:**
   - Examine the results of the Timestamp Compatibility health check for Palo Alto Networks syslog logs by running this SPL query:

   ```
   sourcetype=pan:* sourcetype!="pan:iot_*" sourcetype!="pan:xdr_incident" sourcetype!="pan:aperture" sourcetype!="pan:firewall_cloud"            | dedup sourcetype            | rex field=_raw "^(?:[^,]*,){6}(?<time_field>[^,]*)"            | eval valid_time=strptime(time_field, "%Y/%m/%d %H:%M:%S")            | eval severity_level=if(isnull(valid_time), 3, 0)            | eval Check=sourcetype." Timestamp Compatibility" 
   ```

   - Identify the logs flagged as having an incompatible or unrecognized timestamp format.

2. **Check Timestamp Format Requirements:**
   - Refer to the documentation or guidelines for the expected timestamp format in your Splunk app for Palo Alto Networks syslog logs.
   - Understand the required format, including date, time, and optional timezone components.
   - Confirm that the syslog logs adhere to the specified timestamp format.

3. **Inspect Log Content:**
   - Open the Palo Alto Networks syslog log file(s) identified in the health check.
   - Locate the timestamp field(s) within the logs.
   - Validate that the timestamp values match the expected format `YYYY/MM/DD hh:mm:ss`.

4. **Verify Log Format Settings:**
   - Ensure that no custom log formats are not set and Palo Alto Networks syslog logs is correctly specified.
   - Verify any regex patterns or transformations used for timestamp extraction.

5. **Verify Syslog-ng Settings:**   
   - If you're using syslog-ng or another syslog collector with a Splunk Heavy or Universal Forwarder, then syslog-ng can add a prefix to the logs which interferes with parsing. Follow the directions at [Syslog-ng and Universal Forwarder](../universal-forwarder) to configure syslog-ng to omit this prefix.

6. **Test Log Ingestion and Parsing:**
   - Restart the Health Check process to see if the check pass's for new logs.
   - Confirm that the logs are correctly parsed and indexed in Splunk.
   - Inspect the indexed events to ensure the timestamps are captured accurately.


**Additional Notes:**
- Accurate timestamp extraction and compliance are crucial for proper time-based analysis in the Splunk app.
- Stay aware of any changes or updates to the log sources' timestamp format to promptly address compatibility issues.
- Record the troubleshooting steps taken and their outcomes to facilitate future investigations and maintenance.
- If the troubleshooting steps outlined above do not resolve the issue, consider reaching out to Splunk support for further assistance.


## Cortex XDR API Validation

**Description:**
The API Key Validation health check ensures that the API keys used in the Splunk app are valid and properly configured. This check helps to verify the integrity and effectiveness of the API key authentication mechanism.

**Potential Issues:**
- Missing/No Data in the Cortex XDR Dashboard
- Connectivity issues with Cortex XDR API

**Troubleshooting Steps:**
To troubleshoot the API Key Validation health check, follow these steps:

1. **Review Failed API Key Validation Logs:**
   - [Troubleshooting Cortex XDR](../troubleshooting/#troubleshooting-cortex-xdr]
   - Examine the logs or error messages related to API key validation failures by running this SPL query:
   ```
   index="_internal" source="/opt/splunk/var/log/splunk/splunk_ta_paloalto_cortex_xdr.log" earliest=-2m     
   ```
   - Note any error codes or error descriptions provided in the logs.

2. **Verify API Key Configuration:**
   - Check the API key configuration settings within your Splunk app.
   - Ensure that the API keys used for authentication are correctly entered.
   - Confirm that the keys have the necessary permissions and are associated with the appropriate users or applications.
   - Review [Create API key in Cortex XDR](../cortex-xdr/#create-api-key-in-cortex-xdr)

3. **Check API Key Expiration:**
   - Determine if the API keys being used have an expiration date or duration.
   - Verify that the API keys have not expired.
   - If the keys have an expiration, consider renewing or obtaining new API keys from the provider.

4. **Test API Key Connectivity:**
   - Check the connectivity between your Splunk app and the Cortex XDR tenant's endpoint.
   - Ensure that the endpoint is accessible and reachable from your Splunk environment.
   - Test the API key by making a simple API request or using a dedicated testing tool (e.g., cURL, Postman) to verify its functionality.

5. **Validate API Key Permissions:**
   - Review the required permissions for the API key to perform the intended actions.
   - Ensure that the API key has the necessary privileges to access the desired resources or perform specific operations.
   - Check if any recent changes to the API key permissions may have caused the validation failures.

6. **Getting Help:**
   - If the above steps do not resolve the API key validation issue, consider contacting the Cortex XDR support team.
   - Provide them with the necessary details, including error codes, logs, and any troubleshooting steps you have already performed.
   - Collaborate with their support team to diagnose and resolve the problem.

**Additional Notes:**
- API key validation issues may prevent your Splunk app from accessing and retrieving data from external systems or services.
- Ensure that API keys are securely stored and handled to prevent unauthorized access to your data or resources.
- Regularly review and update your API keys as needed to maintain security


## Valid Palo Alto Networks Source types

**Description:**
The Valid Palo Alto Networks Source types health check ensures that the Splunk app is using the correct and valid sourcetypes for Palo Alto Networks logs. This check helps to ensure proper parsing and indexing of the logs, enabling effective monitoring and analysis of network security events.

**Potential Issues:**
- Logs only have sourcetype of pan:log/pan:firewall
- Missing sourcetypes for specific Palo Alto Networks log formats
- Inconsistent sourcetype naming conventions

**Troubleshooting Steps:**
To troubleshoot the Valid Palo Alto Networks Sourcetypes health check, follow these steps:

1. **Review Health Check Results:**
   - Identify the sourcetypes flagged as invalid or missing by running this SPL query:
   ```
   sourcetype="pan:*" earliest=-24h | search sourcetype="pan:log" OR sourcetype="pan:firewall_cloud"
   ```
   - Take note of log format and host information

2. **Review Troubleshooting Guide:**
   - [Logs only have sourcetype of pan:log](../troubleshooting/#parsing)

. **Consult with Splunk and Palo Alto Networks Experts:**
   - If you encounter persistent issues with sourcetypes, consider reaching out to Splunk and Palo Alto Networks support or community forums.
   - Seek guidance from experts who have experience with Splunk and Palo Alto Networks integration.
   - Collaborate with them to resolve any specific sourcetype-related challenges.

**Additional Notes:**
- Proper sourcetype configuration is essential for accurate parsing, indexing, and analysis of Palo Alto Networks logs.
- Be sure add-on is installed on all Heavy Forwarders, and Indexers 


## Unsupported Code

**Description:**
The Unsupported/Deprecated Code health check identifies any unsupported or deprecated code within the Splunk app. This check helps ensure that the app is using up-to-date and compatible code components, reducing the risk of compatibility issues and deprecated functionality.

**Potential Issues:**
- Message: "“A custom JavaScript error caused an issue loading your dashboard. See the developer console for more details.”
- Incompatible app message from  Splunk Upgrade Readiness App

**Troubleshooting Steps:**
To troubleshoot the Unsupported/Deprecated Code health check, follow these steps:

1. **Review Health Check Results:**
   - Examine the results of the Unsupported/Deprecated Code health check by running this SPL query:
   ```
   index="_internal" source="/opt/splunk/var/log/python_upgrade_readiness_app/scan_summary/scan_summary.json"            | head 1            | spath output=name {}.name            | spath output=scanType {}.scanType            | spath output=details {}.details            | spath output=status {}.status            | eval combined=mvzip(mvzip('name', 'details',"|"), mvzip('scanType', 'status', "|"), "|")            | fields combined, host            | mvexpand combined            | makemv delim="|", combined            | eval name=mvindex(combined, 0)            | eval details=mvindex(combined,1)            | eval scanType=mvindex(combined, 2)            | eval status=mvindex(combined, 3)            | eval severity_level=case(status=="BLOCKER","3",status=="PASSED", "0")            | search scanType="app*UpradeReadinessScanDetails" AND (name="Splunk_TA_paloalto" OR name="SplunkforPaloAltoNetworks")
   ```
   - Identify the specific code components flagged as unsupported or deprecated.

2. **Check Compatibility with Splunk Version:**
   - Verify the compatibility of the deprecated code with the version of Splunk you are using.
   - Determine if the deprecated code is still supported in your Splunk version or if it has been completely removed.
   - Consider upgrading your Splunk app or modifying the code to use the recommended alternatives.

3. **Re-Install app and add-on when upgrading:**
   - Backup all local directories from the Palo Alto Networks app and add-on.
   - Uninstall the app and add-on from all nodes.
   - Re-install newer version of app and add-on on all nodes.

4. **Verify Update:**
   - Verify changes have replicated on all Search Head Cluster nodes.

5. **Test Compatibility:**
   - Re-run health checks.

6. **Consult with Splunk Experts**
   - Reach out to Splunk Support if problems still persist.
   - Provide them with results you have received from the troubleshooting steps you have taken.

**Additional Notes:**
- Splunk stats that updating apps will not remove files but only replaces them. Artifacts from older versions will not be removed when updating.
- Palo Alto Networks App/Add-on v8.0.0 removed Python2
- Palo Alto Networks App/Add-on v7.0.2 supports JQuery 3.5 

## Cortex Log Format

**Description:**
The Cortex Log Format Check ensures that logs from Cortex Data Lake are being sent to Splunk via the HTTP Event Collector (HEC) in the proper JSON format. This check verifies that the logs can be correctly parsed and indexed within the Splunk app, enabling effective analysis and monitoring.

**Potential Issues:**
- No data in dashboards
- Invalid or missing fields 
- JSON logs from Cortex Data Lake are not being parsed correctly in Splunk

**Troubleshooting Steps:**
To troubleshoot the Cortex Log Format Check for JSON logs from Cortex Data Lake via HEC, follow these steps:

1. **Review Health Check Results:**
   - Examine the results of the Cortex Log Format Check.
   - Run SPL Query:
   ```
   sourcetype="pan:firewall_cloud" | eval isJSON = if(json_valid(_raw), 0, 1) | search isJSON=1
   ```
   - Identify any logs flagged as not being in the expected JSON format.

2. **Inspect HEC Configuration:**
   - Check the configuration settings for the HEC inputs receiving logs from Cortex Data Lake.[Cortex Data Lake via HTTP Event Collector(HEC)](../cortex-hec)
   - Ensure that the correct index and sourcetype are specified for the incoming logs.
   - Verify that the HEC is enabled and properly configured to receive JSON-formatted logs.

3. **Validate Cortex Data Lake Integration:**
   - Confirm that the integration between Cortex Data Lake and Splunk has been established.
   - Verify that the Cortex Data Lake logs are being forwarded to the designated HEC inputs.
   - Confirm HTTPS Forwarding Profile is "Running".
   - Review Documentation[Forward Logs to HTTPS Server](https://docs.paloaltonetworks.com/cortex/cortex-data-lake/cortex-data-lake-getting-started/get-started-with-log-forwarding-app/forward-logs-to-an-https-server)
4. **Check HEC Response Codes:**
   - Monitor the response codes received from the HEC inputs during log ingestion.
   - Ensure that the response codes indicate successful ingestion (e.g., 200 series status codes).
   - Investigate any non-successful response codes for potential issues.

5. **Test Log Ingestion and Search:**
   - Restart the HEC inputs or Cortex Data Lake log generation (if feasible).
   - Verify that the logs are ingested and indexed in Splunk.
   - Re-run Health Checks.

6. **Monitor for Errors and Warnings:**
   - Keep an eye on the Splunk logs for any errors or warnings related to Cortex Data Lake logs.
   - Investigate and address any reported issues promptly to ensure the proper handling of logs.
   - Reach out to Palo Alto Networks support and let the know the troubleshooting steps you have taken and any findings along the way.

**Additional Notes:**
- Confirming that Cortex Data Lake logs are sent in the correct JSON format via HEC ensures accurate parsing and indexing in Splunk.

## Datamodel Acceleration

**Description:**
The Data Model Acceleration Check verifies if the required data models for the app are enabled. Data models are essential for generating visualizations and conducting efficient searches within the Splunk app. This health check ensures that the necessary data models are enabled to support accurate and timely data analysis.

**Potential Issues:**
- Data models required for the app are not enabled.
- Misconfiguration of data model acceleration settings.
- Performance degradation due to disabled data models.

**Troubleshooting Steps:**
To troubleshoot the Data Model Acceleration Check, follow these steps:

1. **Review Troubleshooting Guide:**
   - [Datamodel build Problems](../troubleshooting/#datamodel) 
   - Identify any disabled data models that are required for the app's visualizations.

2. **Check Data Model Status:**
   - Access the Splunk app's settings or configurations.
   - Locate the Data Model Management section.
   - Verify the status of each required data model to determine if they are enabled or disabled.

3. **Test Visualizations and Searches:**
   - Restart the Splunk app or refresh the data models if possible.
   - Validate that the visualizations associated with the enabled data models are displaying data correctly.
   - Perform searches that rely on the data models and confirm that the results are accurate and timely.

4. **Monitor Performance:**
   - Keep an eye on the app's performance after enabling the required data models.
   - Monitor system resources, such as CPU and memory usage, to ensure that enabling data model acceleration does not negatively impact performance.

5. **Validate App Functionality:**
   - Explore the app's functionality and features that rely on the data models.
   - Verify that all app components, dashboards, and reports are functioning as expected.

6. **Periodic Health Checks:**
   - Perform regular health checks to ensure that the required data models remain enabled and functional.
   - Document the required data models and their acceleration settings for future reference.
   - Include the Data Model Acceleration Check as part of your routine maintenance and monitoring activities.

**Additional Notes:**
- Enabling the required data models ensures optimal performance and accurate visualizations in the Palo Alto Networks Splunk app.

