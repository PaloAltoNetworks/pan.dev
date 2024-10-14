---
id: firewalls-panorama
title: Firewalls and Panorama
---

:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Firewalls and Panorama

## Logging architectures

**Log Forwarding App for Logging Service** forwards syslogs to Splunk from the Palo Alto Networks Logging Service using an SSL Connection.

**Firewalls** can send logs to Splunk directly, or they can send logs to Panorama or a Log Collector which forwards the logs to Splunk.

**Panorama** sends its own logs to Splunk and can forward logs from firewalls to Splunk.

**Syslog-ng and Universal Forwarder** An alternative to sending the logs directly to Splunk, it is common to send logs to a syslog-ng or other intermediate syslog server, then forward the logs from there with a Splunk Universal Forwarder. For instruction on how to do this, please skip this article and go to the [Syslog-ng and Universal Forwarder Guide](../universal-forwarder).

**Syslog to Splunk using the following protocols:**

| Product | Syslog Protocols |
| --- | --- |
| Log Forwarding App for Logging Service | SSL |
| Next-generation Firewall | UDP, TCP, or SSL |
| Panorama | UDP, TCP, or SSL |

## Enable datamodel acceleration

If using the Palo Alto Networks App, you **must** enable datamodel acceleration to see data in the dashboards. Acceleration is on by default in App 6.0 and lower, and off by default in App 6.1 and higher (due to new Splunk app certification rules).

Enable it now by navigating to **Settings** -> **Datamodels**, then select each **Palo Alto Networks** datamodel and enable acceleration for a time period of your choice.

The time period represents how much data will show in the dashboards, and has a significant impact on storage usage. If unsure, set the acceleration time period to 7 days.

Datamodel acceleration is not required if using the Add-on only.

## Create a data input

Use the GUI to create a Data Input, or create it in inputs.conf using the CLI.

Firewalls and Panorama can all send logs to the same data input and port. The Add-on will automatically detect the source of each log and parse it correctly.

### Select a sourcetype

For App/Add-on 6.0.x and lower use the sourcetype: `pan:log`

| Log source | SourceType |
| :--- | :--- |
| Only Firewall logs | pan:firewall |

It is preferable to use `pan:firewall` instead of `pan:log` because less parsing is required and timestamps will be slightly more accurate.

### GUI

* In the top right corner, click **Settings** -&gt; **Data inputs**
* In the row for **UDP** or **TCP** click **Add new** \(SSL Data Inputs can't be created in the GUI\)
* Enter a port number and click **Next**
* Click **Select Sourcetype** -&gt; **Network & Security** -&gt; **pan:firewall** 
* Change the **App Context** to the Palo Alto Networks Add-on
* Set any other settings such as Method or Index as appropriate for your environment
* Click **Review**, followed by **Submit**

You can optionally use a more specific sourcetype than `pan:log` such as `pan:firewall`.
### CLI

Create the inputs.conf in the correct directory:  
`$SPLUNK_HOME/etc/apps/Splunk_TA_paloalto/local/inputs.conf`

:::info

The `local` directory is not created during installation, so you may need to create it. Also, the inputs.conf does not have to be in the Add-on directory, but this is the conventional place to put it.

:::

Add the following lines to the `inputs.conf` file. This examples uses the default syslog port UDP 514. Change the port as needed. :

```
[udp://514]
sourcetype = pan:firewall
no_appending_timestamp = true
index = pan_logs
```

For UDP logs, `no_appending_timestamp` setting is required. For TCP or SSL syslogs, remove the `no_appending_timestamp` setting.

You can optionally set an `index` to store the logs, or remove the index setting to store logs in the default index.

## Configure the Firewall 

There are two ways to send logs from a Next generation Firewall to Splunk:

1. All firewalls syslog directly to Splunk
2. All firewalls log to Panorama, then Panorama syslogs to Splunk

The Palo Alto Networks syslog documentation describes each option in detail:

**Firewall and Panorama syslog to Splunk:**  
[https://www.paloaltonetworks.com/documentation/81/pan-os/pan-os/monitoring/use-syslog-for-monitoring/configure-syslog-monitoring](https://www.paloaltonetworks.com/documentation/81/pan-os/pan-os/monitoring/use-syslog-for-monitoring/configure-syslog-monitoring)

:::caution IMPORTANT

Firewall and Panorama logs must be sent in the **default format**. Custom formats,
CEF, and LEEF format cannot be parsed by the Splunk Add-on.

:::

## Test the configuration

The easiest way to test that everything is working is to configure the firewall to syslog all config events. On the firewall or Panorama, navigate to the **Device** tab, then **Log Settings**. Enable config logs and commit the configuration.

Now, make any configuration change and the firewall to produce a config event syslog. You don't have to commit the change for the syslog to be produced; any uncommitted change to the configuration produces a log.

Verify the log reached Splunk by going to the Palo Alto Networks App click Search in the navigation bar, and enter:

```
eventtype=pan_config
```

:::note

Use the default Search app if using just the Palo Alto Networks Add-on.

:::

If Splunk is getting the syslogs from the firewall and parsing them correctly, then you'll see the config event syslogs show up here from the changes you made on the firewall configuration.

If you don't see the syslog, verify the steps above or try the [Troubleshooting Guide](../troubleshooting).

### Firewall/Panorama API Configuration {#firewallpanorama-credential-changes}

Adaptive Response and Searchbar Commands leverage API calls to the Firewall/Panorama.

Create an administrative user and role with API access on the Firewall/Panorama.

Navigate to Configuration &gt; Accounts on the add-on. Firewall/Panorama credentials are now designated as whichever credential has the name "Firewall"

![](https://splunk.paloaltonetworks.com/splunk/img/firewall-credentials.png "The credentials name &quot;Firewall&quot; will be used for connection to Firewalls or Panorama")

Figure: The credentials name "Firewall" will be used for connection to Firewalls or Panorama

