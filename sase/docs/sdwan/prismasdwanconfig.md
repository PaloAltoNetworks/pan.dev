---
id: prismasdwanconfig
title: Prisma SD-WAN Config Utility
description: Prisma SD-WAN Config Utility
hide_title: true
hide_table_of_contents: true
slug: /docs/sdwan/prismasdwanconfig
keywords:
  - sdwan
  - prisma sdwan config utility
  - cloudgenix config
---

## Prisma SD-WAN Config Utility
The Prisma SD-WAN config utility was built using the Prisma SD-WAN SDK to ease export and import of configuration from the Prisma SDD-WAN controller. IT organizations will find this utility can easily be leveraged in their existing Continuous Integration (CI) tools.

This utility can be used to:
 - Replace an ION at site by extracting configuration, replacing the 'serial_number' with the new ION (Note: The replacement device must be online and allocated to the account).
 - Check configurations into a repository (private GIT), and have a CI process system automatically configure site(s).
 - Use configs as a rollback tool after changes.
 - Delete most configurations by simply removing them from the file and/or setting to null.
 - Use configs as a template to deploy 1000s of sites.
 The cloudgenix_config utility can be downloaded and installed using the pip utility : **pip install cloudgenix_config**
The cloudgenix_config utility has two sub-utilities that can be used for import and export of data: 
 - [pull_site](/sase/docs/sdwan/prismasdwanconfig#pull_site)
 - [do_site](/sase/docs/sdwan/prismasdwanconfig#do_site)

### pull_site
The **pull_site** utility is used to extract data from the controller. This utility has the ability to pull data from a single site, a comma separated list of sites or all sites, by using the keyword ALL_SITES. The output form this extraction is stored in a YAML file. By default, this file is named **config.yml**, unless a specific name has been provided via the CLI attribute **- - output**

**Note**: As a best practice when using the ALL_SITES keyword, it is recommended to use the **MULTI_OUTPUT** option to store each site’s configuration in its own separate file.

    Terminal:~ sdkuser$ pull_site -h
    usage: pull_site [-h] --sites SITES [--leave-implicit-ids] [--strip-versions]
    	[--force-parents] [--no-header] [--normalize]
    	[--output OUTPUT | --multi-output MULTI_OUTPUT]
    	[--controller CONTROLLER] [--email EMAIL]
    	[--password PASSWORD] [--insecure] [--noregion] [--rest]
    	[--debug DEBUG]
    optional arguments:
      -h, --help 	show this help message and exit
    
    Config:
    These options change how the configuration is generated.
    
    --sites SITES, -S SITES
    		Site name or id. More than one can be specified
    separated by comma, or special string "ALL_SITES".
    --leave-implicit-ids Preserve implicit IDs in objects ("id" values only,references to other objects will still be names.)
    --strip-versions Output non-versioned configuration branches.
    --force-parents Force export of parent interface configurations.
    --no-header Skip export of Metadata header in config YAML.
    --normalize Normalize the site name to filesystem friendly. Only
    has effect with --multi-out.
    --output OUTPUT Output file name (default './config.yml')
    --multi-output MULTI_OUTPUT
    	Enable per-site file output. Specify Directory to
    place file(s).
    
    API:
    These options change how this program connects to the API.
    
    --controller CONTROLLER, -C CONTROLLER
    		Controller URI, ex.
    		https://api.elcapitan.cloudgenix.com
    Login:
       These options allow skipping of interactive login
       --email EMAIL, -E EMAIL
    		Use this email as User Name instead of
    cloudgenix_settings.py or prompting
    --password PASSWORD, -PW PASSWORD
    		Use this Password instead of cloudgenix_settings.py or prompting
    --insecure, -I 	Do not verify SSL certificate
    --noregion, -NR Ignore Region-based redirection.
    Debug:
      These options enable debugging output
    
      --rest, -R 	Show REST requests
      --debug DEBUG, -D DEBUG
    		API Debug info, levels 0-2
    Terminal:~ sdkuser$

### do_site
The **do_site** utility is used to export data to the controller. The YAML file obtained from the pull_site can be edited to make site level or global configuration changes. This edited YAML file is used as an input for the do_site utility.

    Terminal:~ sdkuser$ do_site -h
    usage: do_site [-h] [--timeout-offline TIMEOUT_OFFLINE]
    	[--timeout-claim TIMEOUT_CLAIM]
    	[--timeout-upgrade TIMEOUT_UPGRADE] [--wait-upgrade]
    	[--timeout-state TIMEOUT_STATE]
    	[--interval-timeout INTERVAL_TIMEOUT] [--force-update]
    	[--site-safety-factor SITE_SAFETY_FACTOR] [--destroy]
    	[--controller CONTROLLER] [--email EMAIL] [--password PASSWORD]
    	[--insecure] [--noregion] [--verbose VERBOSE]
    	[--sdkdebug SDKDEBUG]
    	YAML CONFIG FILE
    Create or Destroy site from YAML config file.
    optional arguments:
      -h, --help 		show this help message and exit
    Config:
      These options change how the configuration is loaded.
      YAML CONFIG FILE 	Path to .yml file containing site config
     --timeout-offline TIMEOUT_OFFLINE
    			Default maximum time to wait to claim if an ION is offline.
    --timeout-claim TIMEOUT_CLAIM
    			Default maximum time to wait for an ION claim to complete
    --timeout-upgrade TIMEOUT_UPGRADE
    			Default maximum time to wait for.
    --wait-upgrade 		When upgrading, wait for upgrade to complete.
    			Configuration changes for major element version changes require upgrade to finish.
    --timeout-state TIMEOUT_STATE
    			Default maximum time for an ION to change
    state(assign, un-assign).
    --interval-timeout INTERVAL_TIMEOUT
    			Default timeout recheck interval for all timeouts (10-180 seconds).
    --force-update 		Force re-submission of configuration items to the API, even if the objects have not changed.
    --site-safety-factor SITE_SAFETY_FACTOR
    			Maximum number of sites that can be modified at once by this script. This is a safety switch to prevent the
    script from inadvertently modifying a large number of
    sites.
    --destroy 		DESTROY site and all connected items (WAN Interfaces,LAN Networks).
    API:
    These options change how this program connects to the API.
    --controller CONTROLLER, -C CONTROLLER
    			Controller URI, ex.
    			https://api.elcapitan.cloudgenix.com
    Login:
    These options allow skipping of interactive login
    --email EMAIL, -E EMAIL
    			Use this email as User Name instead of
    cloudgenix_settings.py or prompting
    --password PASSWORD, -PW PASSWORD
    			Use this Password instead of cloudgenix_settings.py or prompting
    --insecure, -I 		Do not verify SSL certificate
    --noregion, -NR 	Ignore Region-based redirection.
    Debug:
    These options enable debugging output
    --verbose VERBOSE, 	-V VERBOSE
    			Verbosity of script output, levels 0-3
    --sdkdebug SDKDEBUG, -D SDKDEBUG
    			Enable SDK Debug output, levels 0-2
    Terminal:~ sdkuser$

### Prisma SD-WAN Config Usage

    #Query Single Site
    Terminal:~ sdkuser$ pull_site -S Chicago --output chi.yml
    
    #Query Multiple Sites
    Terminal:~ sdkuser$ pull_site -S Chicago,Boston,NYC --output chibosnyc.yml
    
    #Query ALL Sites with output in one file
    Terminal:~ sdkuser$ pull_site -S ALL_SITES --output allsites.yml
    
    #Query ALL Sites with MULTI_OUTPUT option
    Terminal:~ sdkuser$ pull_site -S ALL_SITES –multi-output /tmp/config/
    #Upload Changes to Sites
    Terminal:~ sdkuser$ do_site chi.yml
    
    #Delete Sites and associated WAN Interfaces and LAN Networks
    Terminal:~ sdkuser$ do_site chi.yml --destroy

#### Want to contribute? See something missing?

###### Visit our [Contributing Guide](/docs/contributing) or look for the "Edit this page" or "Report an Issue" button at the bottom of our docs pages

:::
