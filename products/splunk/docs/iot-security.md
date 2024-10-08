---
id: iot-security
label: IoT Security
---
:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# IoT Security  

IoT Security is supported starting with App/Add-on 6.6.0.

IoT Security is cloud-hosted so logs are retrieved by Splunk using the IoT Security logging API. Logs are pulled down in JSON format with sourcetype="pan:iot_alert", sourcetype="pan:iot_device" and eventtype="pan_iot_device", eventtype="pan_iot_alert".

## Create API Key in IoT Security

Use the instruction in the IoT Security Administrator's Guide to gain API access:

[https://docs.paloaltonetworks.com/iot/iot-security-api-reference/iot-security-api-overview/get-started-with-the-iot-security-api.html](https://docs.paloaltonetworks.com/iot/iot-security-api-reference/iot-security-api-overview/get-started-with-the-iot-security-api.html)

This action will provide you a **Key** and **Key ID**.  The Key be shown only once, so make sure to record it or you'll need to re-create the Key.

## Create IoT Security Input and add Key to Splunk

In Splunk, navigate to the **Palo Alto Networks Add-on**.

![](/splunk/img/add-on.jpg)

Within the Add-on, click the **Input** tab at the top left.  Then click **Create New Input** and select **IoT Security**.
![](/splunk/img/iot-mod-input.png)


In the dialog window, enter the following:

![](/splunk/img/iot-settings.png)

| Field | Value |
| :--- | :--- |
| Name | Any friendly name (eg. "iot_security") |
| Interval | Frequency in seconds to check for new logs (60 seconds recommended) |
| Index | The index in which to put the IoT Security logs |
| Customer ID | Found in the hostname when accessing IoT Security. (eg. https://customer-id.iot.paloaltonetworks.com) |
| Access Key ID | Enter Key ID |
| Secret Access Key | Enter Key |

Then click **Add** to save the modular input.

## Verify

After waiting the interval time, check that logs are coming into Splunk by clicking **Search** at the top and entering this search:

    eventtype="pan_iot_device"

You should see some JSON formatted logs show up. If nothing shows up, wait a little longer, ensure there is activity in IoT Security to generate logs, and try the [Troubleshooting Guide](../troubleshoot).