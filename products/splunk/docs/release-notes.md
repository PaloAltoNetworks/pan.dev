---
id: release-notes
title: Release Notes
sidebar_position: 6
---

:::warning Important
This TA and App is now deprecated and will no longer receive updates or support. For continued support and future updates, please switch to the new app supported by Splunk.

Please follow the [documentation](https://splunk.github.io/splunk-app-for-palo-alto-networks/Installationoverview/) for a migration path to use the Splunk supported
[Splunk App for Palo Alto Networks](https://splunkbase.splunk.com/app/7505).

Please follow the [documentation](https://splunk.github.io/splunk-add-on-for-palo-alto-networks/MigrationPaths/) for a migration path to use the Splunk supported [Splunk Add-on for Palo Alto Networks](https://splunkbase.splunk.com/app/7523).

:::

# Release Notes

## Latest

> Release notes have moved to GitHub: https://github.com/PaloAltoNetworks/Splunk-Apps/releases

## Archived Release Notes

### App 6.1.1

* New: Dark mode supported
* Fix: Endpoing dashboard and datamodels support for Traps 5.0\(Traps Management Service\)

### Add-on 6.1.1

* Fix: Improved API call to Aperture
* Fix: Aperture region field saves
* Fix: Traps event types updated
* Fix: Improved clustered environment support

### App 6.1

* New: Support for Traps 5.0 \(Traps Management Service\)
* New: User ID updates can now be added with a timeout setting
* Fix: User ID updates work consistently via Panorama
* Fix: Issue with Block-Continue panel in Web Activity report

### Add-on 6.1

* New: Support for Traps 5.0 \(Traps Management Service\)
* New: Support for Firewall User-ID logs
* New: Credential Detected flag for PAN-OS 8.1
* New: MineMeld indicator retention timer
* New: Batch collection of Aperture logs
* New: Support all Aperture regions
* New: Easier to disable certificate validation for self-hosted MineMeld
* New: Malicious WildFire events tagged for Malware CIM datamodel
* Fix: category field for URL logs is now more consistent
* Fix: url\_length field fixed
* Fix: Corrected the double parse of Aperture logs

:::note

Traps datamodel has been renamed from `pan_endpoint` to `pan_traps` and some fields have changed names in the datamodel to support Traps 5.0 additional data. If you have previously created your own dashboards based on the Palo Alto Networks datamodels, you may need to update those dashboards.

:::

### App 6.0

6.0.0

Is your organization safe from those who intend the most harm? Know your adversary with the new Adversary Scoreboard and measure how effective your security is at defeating their attacks. Automatically prioritize attacks with the new [All Incident Feed](../dashboards#incidents), and investigate with the new [Incident Context View](../dashboards#incident-context).

* All [new dashboards](../dashboards):
  * [Adversary Scoreboard](../dashboards#adversary)
  * [All Incident Feed](../dashboards#incidents)
  * [Real-time Event Feed](../dashboards#realtime)
  * [Datamodel Audit](../dashboards#datamodel)
  * [User Behavior](../dashboards#user)
  * And many more new dashboards...
* Tool tips and Tour to help guide you through the new dashboards
* Events from Firewall, Panorama, Traps, Aperture, AutoFocus, and Minemeld correlate and combine to offer unparalleled security insights
* Support for [content pack sync](../lookups#contentpack) with PAN-OS 8.0

### Add-on 6.0

6.0.0

* [MineMeld Support](../autofocus-and-minemeld)
* [AutoFocus Tags Support](../autofocus-and-minemeld)
* [Aperture Support](../aperture)
* [PAN-OS 8.0](https://www.paloaltonetworks.com/poducts/new/new-panos8-0) new fields
* Threat Intelligence from MineMeld can be [shared with Splunk Enterprise Security](../enterprise-security#share-minemeld-indicators)
* Improved CIM adoption
* Datamodel optimizations for size on disk and performance

:::note

Some fields have changed names in the datamodel. If you have previously created your own dashboards based on the Palo Alto Networks datamodels, you may need to update some field names. 

:::

### App 5.4

5.4.2

* Improved saved search cron schedule
* Improved add-on compatibility check

5.4.1

* Endpoint Dashboard bug fix

5.4.0

* Endpoint Operations Dashboard
* Endpoint Security Dashboard
* Endpoint Dashboard support new Traps 3.4 fields
* Support for AutoFocus Remote Search via External Search Handler
* Support for Firewall Log Link via External Search Handler
* Improved AutoFocus cross launch

### Add-on 3.8

3.8.2

* Improved CIM support for correlation logs

3.8.1

* Configuration screen bug fix

3.8.0

* AutoFocus Export List modular input
* Improved configuration screen allows credentials to be changed

### App 5.3

3.5.1

* Changes made to meet new certification requirements

3.5.2

* GlobalProtect Dashboard
* Other updates are in the Add-on \(see below\)

* App 5.3.x requires Add-on 3.7.x

* REQUIRED ACTION: The App setup screen has moved to the Add-on. If you had previously set firewall credentials or a WildFire API key in the App setup screen, you'll need to set them again in the Add-on setup screen. You may delete the file `$SPLUNK_HOME/etc/apps/SplunkforPaloAltoNetworks/local/passwords.conf` to remove the credentails from the App, since they are no longer used.
* Datamodel acceleration might rebuild itself after installation due to updated constraints
* Eventtype pan\_threat no longer includes these log\_subtypes: url, data, file, and wildfire. You might need to update custom searches or panels you created that leverage the pan\_threat eventtype. There are new eventtypes for each of the removed log\_subtypes: pan\_url, pan\_data, pan\_file, and pan\_wildfire.

### Add-on 3.7

3.7.1

* Changes made to meet new certification requirements

3.7.0

* Integration with new Splunk Adaptive Response
* Tag to dynamic address group using modular actions and Adaptive Response
* Submit URL’s from any log in Splunk to WildFire
* Logs with malware hashes have a new event action that links directly to that hash in Autofocus
* Improved tagging for Splunk Enterprise Security, based on customer feedback
* New parser for GlobalProtect logs

Eventtype pan\_threat no longer includes these log\_subtypes: url, data, file, and wildfire.  
You might need to update custom searches or panels you created that leverage the pan\_threat eventtype. There are new eventtypes for each of the removed log\_subtypes: pan\_url, pan\_data, pan\_file, and pan\_wildfire.

### App 5.2

* Certified by Splunk
* Removed deprecated commands \(**panblock** and **panupdate**\) as a requirement for certification.
* Removes support for Splunk 6.1 and ealier as a requirement for certification.

:::note

If you are using Splunk 6.1 or earlier, you must upgrade to Splunk 6.2 or later before upgrading to App v5.2.0. If you currently use **panblock** or **panupdate** commands, please update your usage of the App to leverage [pantag](../commands#pantag) and [panuserupdate](../commands#panuserupdate) instead.

:::

### App 5.1

5.1.0

* Datamodel updated to support new Traps 3.3.2 fields
* Endpoint Dashboard updated to support new Traps 3.3.2 fields

WARNING: Traps versions before 3.3.2 are no longer supported beginning with this App version

### Add-on 3.6

3.6.1

* Certified by Splunk
* Add logo files for Splunkbase

3.6.0

* Support new Traps 3.3.2 log format

:::note

Traps versions before 3.3.2 are no longer supported beginning with this Add-on version

:::

### App 5.0

5.0.1

* Fix error when using pantag command with single firewall
* Fix error when using pancontentpack command
* Improved searchbar command logging

5.0.0  
This major release re-architects the Palo Alto Networks App by splitting it into an App and an Add-on. The [Palo Alto Networks Add-on](https://splunkbase.splunk.com/app/2757) is included in the [Palo Alto Networks App](https://splunkbase.splunk.com/app/491) and is installed or upgraded automatically with the App.

In addition to the new Palo Alto Networks Add-on, this version also has the following new features:

* New SaaS dashboard with [Un/Sanctioned SaaS Detection](../lookups#saas)
* CIM 4.x compliance
* Optimized Datamodel for better performance and storage efficiency
* Logs are no longer required to be stored in the pan\_logs index
* [Auto update script](../lookups#contentpack) for app and threat lookup tables
* New [panuserupdate](../commands#panuserupdate) command for User-ID update
* Enhanced [pantag](../commands#pantag) command to leverage log data for tags
* Both commands now support Panorama and VSYS targets, and are more efficient and scalable
* Better command documentation
* Changed from CC license to ISC license
* All new documentation website at [http://pansplunk.readthedocs.io](http://pansplunk.readthedocs.io)

### Add-on 3.5

3.5.3

* Fix issue where endpoint logs would show up in CIM apps, but not Palo Alto Networks app

3.5.1

* Add support for PAN-OS 7.0 new fields
* Add hip-match log type from Firewall and Panorama
* Add sourcetype category
* Add Sanctioned SaaS lookup table \(see [Un/Sanctioned SaaS Detection](../lookups#saas)\)
* Update app\_list.csv and threat\_list.csv lookup tables with new format and data
* Fix incorrect value in report\_id field for Wildfire logs in PAN-OS 6.1 or higher
* Fix src\_category field should be dest\_category

3.5.0  
Included with [Splunk Enterprise Security 4](https://splunkbase.splunk.com/app/263/).

This new Add-on \(TA\) for Palo Alto Networks supports logs from Palo Alto Networks Next-generation Firewall, Panorama, and Traps Endpoint Security Manager. It is CIM 4.x compliant and designed to work with [Splunk Enterprise Security 4](https://splunkbase.splunk.com/app/263/) and the [Palo Alto Networks App for Splunk v5](https://splunkbase.splunk.com/app/491/).

### App 4.2

4.2.2

* Fix drilldowns in Wildfire and Content dashboards
* Fix panel in Content dashboard to display correct data

4.2.1

* Fix Wildfire Report downloader and Applipedia New App check
* Fix Wildfire Dashboard Drilldowns
* Fix Threat Details Dashboard datamodel reference
* Fix Endpoint Dashboard would not work on Splunk 6.0.x
* Fix time range inconsistent on Overview Dashboard
* Fix issue where Endpoint Dashboard disappears if Netflow is enabled.

4.2.0

* New Palo Alto Networks [Advanced Endpoint Protection](https://www.paloaltonetworks.com/products/secure-the-endpoint/traps)
* Support Palo Alto Networks [PAN-OS 6.1](https://www.paloaltonetworks.com/documentation/61/pan-os/newfeaturesguide.html)

### App 4.1

4.1.3

* Special commands \(panblock, panupdate, pantag\) now available from other apps
* Fix issue with unknown lookup errors during search
* Fix issue with meta scope and global namespace

4.1.2

* Fix some Threat dashboard drilldowns
* Fix scope of CIM fields to remove conflict with some apps
* Remove macros from datamodel that were causing slower acceleration

Note: changes to datamodel may require the acceleration to be rebuilt before data will show up in the dashboards

4.1.1

* Handle new fields in latest PAN-OS syslogs and WildFire reports
* Significant improvements to indexing efficiency
* Improved handling of Dynamic Address Group tagging
* Improvements and minor updates for Splunk 6.1.x
* Fix minor dashboard issues
* Fix minor field parsing issue

4.1.0  
This is a major update. If upgrading from a previous version, please read the Upgrade Notes in the documentation.

* PAN-OS Data model including acceleration
* Data model accelerated dashboards \(replaces TSIDX-based dashboards\)
* New command: pantag - tag IP addresses on the firewall into Dynamic Address Groups
* IP Classification - add metadata to your CIDR blocks, classifying them as internet/external/dmz/datacenter/etc.
* Applipedia change notifications and highlighting - know when Palo Alto Networks releases new application signatures and if those applications are on your network

### App 4.0

4.0.2

* Fix: Overview dashboard optimizations
* Fix: Top Applications panel would sometimes show error
* Fix: Traffic dashboard form filter works

4.0.1

* Fix: Config dashboard shows all events
* Fix: Better handling of navbar changes

4.0.0

* Splunk 6 support
* Dashboards converted to Splunk 6 SimpleXML, meaning dashboards can now:
  * Print
  * Export as pdf
  * Produce scheduled reports
  * Use pre-populated dropdowns in filters
  * Change using SplunkWeb by editing the panels
* Maps converted to Splunk 6 built-in maps \(removes dependencies on other apps\)
* Updated navbar including icons and colors

### App 3.4

* NetFlow support using NetFlow Integrator, a 3rd party program from NetFlow Logic
  * New set of dashboards, charts and graphs centered around NetFlow records from Palo Alto Networks devices
  * App-ID and User-ID information is available in NetFlow records

Download a 30-day free trial of NetFlow Integrator at [https://www.netflowlogic.com/downloads](https://www.netflowlogic.com/downloads)

Steps to configure NetFlow are available in the NetFlow section of the app documentation and README.

### App 3.3

3.3.2

* Fix: URL in WildFire dashboard corrected
* Fix: Overview dashboard colors were gray on some servers, set back to white
* Fix: Corrected description fields in commands.conf that resulted in log errors
* Fix: Corrected sourcetype in inputs.conf.sample

3.3.1

* Fix: App setup screen allows blank values
* Fix: Several GUI fixes and enhancements

3.3.0

* Malware analysis reports from the WildFire Cloud are dynamically downloaded and indexed when a WildFire log is received from a firewall.
* WildFire dashboard
  * Recent WildFire events
  * Graphs of WildFire statistical data
  * Detect compromised hosts using malware behavior to traffic log correlation

Note: Malware analysis report retrieval requires a WildFire API Key from [https://wildfire.paloaltonetworks.com](https://wildfire.paloaltonetworks.com)

### App 3.2

3.2.1

Bug Fixes:

* savedsearches.conf: changed hard coded index=pan\_logs to pan\_index in scheduled searches. Thanks to Genti Zaimi for finding the issue and providing the fix
* pan\_overview\_switcher\_maps.xml: modified geoip search to include localop to force the search to run on the searchhead. Thanks to Genti Zaimi for identifying the problem and providing the fix



