:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Threat Intelligence

## MineMeld

MineMeld can be used to deliver threat intelligence and indicators of compromise to Splunk. Indicators are stored in the `minemeldfeeds` kvstore in Splunk.

MineMeld and AutoFocus are often used together to share AutoFocus threat intelligence with Splunk.

For more information on getting MineMeld indicators into Splunk, see [Getting Data Into Splunk: AutoFocus and MineMeld](../autofocus-and-minemeld).

## AutoFocus Export List

With the Palo Alto Networks Splunk Add-on an AutoFocus export list can be added as a modular input in Splunk. The modular input utilizes AutoFocus's REST API to periodically sync an Export List from AutoFocus. The list of artifacts are stored in the KVStore and can be accessed via inputlookup macros. This data can then be used to correlate against other logs.

Two steps are needed to enable AutoFocus export list syncing:

**Step 1: Add the AutoFocus API key to the Add-on configuration**

The AutoFocus API key is found in the AutoFocus portal on the **Settings** tab at https://autofocus.paloaltonetworks.com

Navigate to the **Palo Alto Networks Add-on**

![](/splunk/img/add-on.jpg)

Click the **Configuration** tab at the top.  Click the **Add-on Settings** tab. Enter your AutoFocus API key into the field.

![](/splunk/img/autofocus-api-key.png)

**Step 2: Add AutoFocus Export List to Splunk**

-   Learn how to [Build an AutoFocus Export List](https://www.paloaltonetworks.com/documentation/autofocus/autofocus/autofocus_admin_guide/export-autofocus-content/export-autofocus-artifacts/build-an-autofocus-export-list)

Within the Add-on, click the **Inputs** tab at the top left. Then click **Create New Input** and then select **AutoFocus Export**.

![](/splunk/img/autofocus-mod-input.png)

Give your new data input a name by entering it in the `Name` field.

Set the name of your export list in the `label` field. This field must match the export list name from AutoFocus.

Verify the data is being synced by running a search `` | `pan_autofocus_export` ``

:::info

A pipe(`|`) is always used in front of the macro to do a lookup search.

:::

**Macros** There are several new macros that can be used to correlate a search with the artifacts imported from the AutoFocus Export List.

`` | `pan_autofocus_export` `` - A macro to search on all export lists. This will return all entries from all AutoFocus inputs.

The remaining macros requires one argument. Set the `label` of the export list you want to search against. Each macro is separated by the artifact types.

    | `pan_autofocus_export_dns(label)`
    | `pan_autofocus_export_connection(label)`
    | `pan_autofocus_export_registry(label)`
    | `pan_autofocus_export_file(label)`
    | `pan_autofocus_export_process(label)`