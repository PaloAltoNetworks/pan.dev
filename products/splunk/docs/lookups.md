:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Add Context to Splunk Searches

## Subnet and IP Classification

Classify IP addresses in Splunk by any criteria relevant to your environment. IP ranges can be designated as DMZ, datacenter, VMware, serverfarm, webtier, or any other relevant keyword to help distinguish and classify a group of IP addresses during a search.

Classifications will show up in the `src_class` and `dest_class` fields.

Classifications are set in the lookup file `ip_classifictions.csv`. Add subnets and their classification to the `ip_classifications.csv` file, one per line.

For example:

    cidr,classification
    10.0.0.0/8,private
    172.16.0.0/12,private
    192.168.0.0/16,private
    10.5.5.0/24,dmz
    10.240.0.0/16,datacenter1
    192.168.5.0/24,partner-mpls

More specific entries take precedence.

Now look for the classifications in the `src_class` and `dest_class` fields during a search that includes these IP address ranges.

## Sanctioned and Unsanctioned SaaS Detection {#saas}

*Added in App version 5.0*

Classify SaaS applications as sanctioned or unsanctioned for your organization. This designation is used in searches using the Splunk searchbar and to separate information in the App's SaaS Dashboard.

SaaS applications are designated as sanctioned in the lookup file `sanctioned_saas.csv` in the Splunk_TA_paloalto Add-on.

Add each sanctioned SaaS app in the lookup file, one per line. For example:

    app,sanctioned_saas
    paloalto-wildfire-cloud,yes
    boxnet,yes
    dropbox,yes
    gmail-enterprise,yes
    skype,yes
    facebook-base,yes
    gmail-chat,yes

Sanctioned designation is found in the field `app:is_sanctioned_saas`.

For a list of all SaaS applications, visit [Applipedia](https://applipedia.paloaltonetworks.com/) and under the Characteristics header, click SaaS.

## Update App and Threat Metadata from Content Pack {#contentpack}

*Added in App version 5.0*

The Palo Alto Networks Add-on (TA) comes with two lookup files with metadata about applications and threat signatures called `app_list.csv` and `threat_list.csv`, respectively. These lookup tables are responsible for populating the app:xyz and threat:xyz fields used in the dashboards and displayed during a search.

The lookup table files are updated with major Add-on releases, but can get out of date between releases. To keep the files up to date, they can be updated dynamically from the content pack metadata in your firewall or Panorama. This is done by creating a saved search inside the Add-on to periodically pull the metadata from the firewall or Panorama and update the lookup tables.

Create the following saved searches in the TA, by creating the file: `$SPLUNK_HOME/etc/apps/Splunk_TA_paloalto/local/savedsearches.conf` :

    [Palo Alto Networks - Retrieve ContentPack Apps]
    cron_schedule = 5 0 * * 6
    dispatch.earliest_time = -1m@m
    displayview = flashtimeline
    enableSched = 1
    realtime_schedule = 0
    request.ui_dispatch_view = flashtimeline
    search = | pancontentpack <IP-or-hostname> apps | outputlookup createinapp=true app_lookup
    disabled = 0

    [Palo Alto Networks - Retrieve ContentPack Threats]
    cron_schedule = 10 0 * * 6
    dispatch.earliest_time = -1m@m
    displayview = flashtimeline
    enableSched = 1
    realtime_schedule = 0
    request.ui_dispatch_view = flashtimeline
    search = | pancontentpack <IP-or-hostname> threats | outputlookup createinapp=true threat_lookup
    disabled = 0

Set `<IP-or-hostname>` to the IP or hostname of your Firewall or Panorama. Ensure you set the credentials for this device in the Add-on configuration. See [Configure Adaptive Response](../adaptive-response#configure-adaptive-response) for more information.

This example updates the lookup tables every Saturday at 12:05 AM for apps and 12:10 AM for threats. Change the cron_schedule to your desired update schedule.

:::info

The Palo Alto Networks App version 5.0 or higher must be installed for the lookup table update to work. But the saved searches must be created in the Add-on, not the App.

:::
>
> If using a custom admin role on the firewall, it must have **Configuration** permissions for the **XML API**. See [Configure Adaptive Response](../adaptive-response#configure-adaptive-response) for more information.

