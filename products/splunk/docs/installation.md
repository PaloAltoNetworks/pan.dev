:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Installation

### Upgrading App and Add-on

 It is recommended to uninstall older versions prior to upgrading to version 8.0.0+ of the app and add-on. Upgrading through the Splunk GUI process may leave artifacts of jQuery and python 2. This may result in compatibility error messages.
### Download

* [Palo Alto Networks App](https://splunkbase.splunk.com/app/491)
* [Palo Alto Networks Add-on](https://splunkbase.splunk.com/app/2757)

The Palo Alto Networks Splunk App and Add-on are designed to work together, and with Splunk Enterprise Security if available. The App requires the Add-on to be installed. The Add-on can be used with or without the App.

### Where to install

| Splunk Node | What to install |
| :--- | :--- |
| Search Head | Add-on and App |
| Indexer | Add-on only |
| Heavy Forwarder | Add-on only |
| Universal Forwarder | None |

Some organizations prefer not to install Add-ons on Search Heads. This is fine for log ingest, but will prevent some advanced features from functioning, such as [Adaptive Response](https://www.splunk.com/en_us/solutions/solution-areas/security-and-fraud/adaptive-response-initiative.html) and [Threat Intelligence](../threat-intelligence).

:::info Important Changes

Data Model acceleration is no longer enabled by default. Dashboards will not
display any data until the data model is accelerated. See the section below
titled "Data
Model Acceleration".

:::

### Install the App and Add-on

Install the Palo Alto Networks App by downloading it from the App homepage, or by installing it from within Splunk.

![Downloading the App and Add-on from within Splunk Enterprise.](/splunk/img/download_app.png)

### Enable datamodel acceleration

If using the Palo Alto Networks App, you **must** enable datamodel acceleration to see data in the dashboards. Acceleration is on by default in App 6.0 and lower, and off by default in App 6.1 and higher (due to new Splunk app certification rules)

Enable it now by navigating to **Settings** -> **Datamodels**, then select each **Palo Alto Networks** datamodel and enable acceleration for a time period of your choice.

The time period represents how much data will show in the dashboards, and has a significant impact on storage usage. If unsure, set the acceleration time period to 7 days.

Datamodel acceleration is not required if using the Add-on only.

## Alternative: Install from Github

This App is available on [SplunkBase](https://splunkbase.splunk.com/app/491) and [Github](https://github.com/PaloAltoNetworks-BD/SplunkforPaloAltoNetworks). Optionally, you can clone the GitHub repository to install the App. Please feel free to submit contributions to the App using pull requests on GitHub.

App:  
From the directory `$SPLUNK_HOME/etc/apps/`, type the following command:

```
git clone https://github.com/PaloAltoNetworks/SplunkforPaloAltoNetworks.git SplunkforPaloAltoNetworks
```

Add-on:  
From the directory `$SPLUNK_HOME/etc/apps/`, type the following command:

```
git clone https://github.com/PaloAltoNetworks/Splunk_TA_paloalto.git Splunk_TA_paloalto
```

## Data Model Acceleration

The app dashboard's requires data model acceleration. You must enable the data model that have been installed with the app.

From the Settings menu click on "Data models".![](/splunk/img/Screen Shot 2019-01-02 at 2.47.55 PM.png)

Click on "Edit Acceleration" for each of the data models for the Palo Alto Networks App and check the box next to "acceleration".

![](/splunk/img/Screen Shot 2019-01-02 at 2.48.53 PM.png)

