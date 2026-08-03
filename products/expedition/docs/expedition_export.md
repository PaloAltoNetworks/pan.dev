---
id: expedition_export
title: Expedition 2.0 Export
sidebar_label: Export Vendor Configuration
hide_title: true
description: Export 3rd party vendor configuration
keywords:
  - pan-os
  - panos
  - xml
  - api
  - expedition
  - migration
  - firewall
  - configuration
  - expedition
image: /expedition/img/expedition.png
---

## Export Vendor Configuration

Please refer to the individual vendor sections for instructions on how to export the configuration. For quick vendor navigation, use the table of contents to the right

## Fortinet

Export Configuration from GUI:

The configuration can be exported directly from the FortiGate firewalls.

**1. Using the Web UI**

• Go to **Admin** -> **Configuration** -> **Backup**-> Select to backup to your **Local PC** or to a **USB Disk**.

• If VDOMs are enabled, select **VDOM configuration (VDOM Config)** and then select the VDOM name that you want to migrate from the list.

![Fortinet](/expedition/img/fortinetexport1.png "Fortinet")

![Fortinet2](/expedition/img/fortinetexport2.png "Fortinet2")

**2. Using the CLI**

```console
execute backup config management-station <comment>
```

Use the same command to backup a VDOM configuration by first entering the commands:

```console
config vdom
  edit <vdom_name>
```

:::note
The configuration is exported as a “.conf” file and is readable using a text file editor like notepad.
:::

## Juniper

### Juniper SRX(Junos)

**1. Export the configuration file**

Juniper SRX (Junos) configuration files are similar to PAN-OS configuration files in that they can be exported in either Set or XML formats. In order to use Expedition to perform the migration, we need the Juniper configuration file in XML format. We actually need to export the configuration from the Juniper device in the XML format by running the following command from the SRX CLI:

```console
show config | display xml | no-more
```

**2. Modify the configuration file**


The file has to start with XML tag `<configuration>` without attributes and end with the closing
`</configuration>` tag. Failure to remove the unneeded attributes is the leading cause of failure during the import into Expedition. The first line of the XML file should look like the following:

![SRX1](/expedition/img/srx1.png "SRX1")

The last line of the XML file should end with `</configuration>` and is shown below:

![SRX2](/expedition/img/srx2.png "SRX2")

:::note
The configuration is exported as a **.xml** file and is readable using a xml editor.
:::

### Juniper ScreenOS

To Backup or Save a Config File

**1. Using the WebUI:**

Select **Configuration** -> **Update** -> **Config File**

In the **Download Configuration from Device** section, select **Save to File**
Then in the File Download dialog box, click **Save**. Navigate to the location where you want to save the configuration file (cfg.txt), then click Save.

**2. Using the CLI:**

Save the output with below commands:

```console
set console page 0
get config
```

:::note
if Screenos is managed by NSM; rule description is only visible in NSM not directly on FW
:::

## Checkpoint

### Checkpoint >= R80.X

1. Obtain the newest Checkpoint ShowPolicy package via <a href="https://github.com/CheckPointSW/ShowPolicyPackage/">**Checkpoint ShowPolicy Package**</a> . Please make sure you obtain the latest version which is v2.0.6.

2. Following below commands to create SCP user on Checkpoint Security Management Server , the scp user will be used to transfer the checkpoint configurations from checkpoint management server to your local machine.

**R80.X**

```console
add user scpuser uid 2600 homedir /home/scpuser
set user scpuser realname Scpuser
add rba role scpRole domain-type System readwrite-features expert
add rba user scpuser roles scpRole
set user scpuser gid 100 shell /usr/bin/scponly
set user scpuser password
save config‍‍‍‍‍‍‍‍‍‍‍‍‍‍
```

3. Go into expert mode to run **“java -jar web_api_show_package-jar-with-dependencies.jar -option”** command. Please refer the <a href="https://github.com/CheckPointSW/ShowPolicyPackage/">**Checkpoint ShowPolicy Package**</a> for the command options

Examples:

Running the tool on a Checkpoint Security Management server:

```console
java -jar web_api_show_package-jar-with-dependencies.jar
```

• Running the tool on a Checkpoint Security Management server for a specific policy package:

```console
java -jar web_api_show_package-jar-with-dependencies.jar -k <PACKAGE NAME>
```

• Running the tool on a Checkpoint Multi-Domain Server for specific domain and a specific policy package:

```console
java -jar web_api_show_package-jar-with-dependencies.jar -k <PACKAGE NAME> -d <DOMAIN NAME>
```

:::note
This tool is already installed on CheckPoint Security Management servers running version R80 with Jumbo-HF and above. Please make sure you update the tool to the latest version which is v2.0.6.

The Check Point Management Server also has a wrapper script so the tool can be run as  
$MDS_FWDIR/scripts/web_api_show_package.sh which in turn executes  
java -jar $MDS_FWDIR/api/samples/lib/web_api_show_package-jar-with-dependencies.jar
:::

If you already have tool on CheckPoint Security Management Server, you can follow below steps to export the configuration:

```console
$MDS_FWDIR/scripts/web_api_show_package.sh
```

Running the tool on a Security Management server for a specific policy package:

```console
$MDS_FWDIR/scripts/web_api_show_package.sh -k <PACKAGE NAME>
```

Running the tool on a Multi-Domain Server for specific domain and a specific policy package:

```console
$MDS_FWDIR/scripts/web_api_show_package.sh -k <PACKAGE NAME> -d <DOMAIN NAME>
```

:::note
Use of CMA Name is not supported. Only use the Domain name or the CMA IP.
:::

Finally after doing all this you should be able to transfer the output over SCP.
PLEASE NOTE THIS IS ALL ARBITRARY DEPENDING ON WHAT YOU HAVE SET UP AND WHERE YOU WOULD LIKE TO SAVE IT.

:::note
The configuration is exported as a **.tar.gz** file.
:::

#### 4. Obtain route file using below command:

```console
netstat -nr
```

&nbsp; &nbsp; or

```console
show route all
```

:::note
The route file is needed for Expedition to do zone calculations
:::

### Checkpoint < R80.X

:::info
Both Checkpoint Management server and Gateway with version lower than R80.x , below are the required files:

**− Objects_5_0.C**  
**− Policy.W**  
**− Rulebases_5_0.fws**  
**− RouteFile**

:::

Please refer corresponding section based on your checkpoint management tool:

**Smart Center**

Obtain below configuration files from **'$FWDIR/conf'**:

1. Objects – **objects_5_0.C** (Check Point NG/NGX) or **objects.C** (Check Point 4.x) contains the firewall's object definitions.
2. Policy rulebases – **\*.w** or **rulebases_5_0.fws**. The file name is `"<package name>.W"` (default "Standard.W") or "rulebases_5_0.fws".
3. Route File, please refer to the [previous section step 4](#4-obtain-route-file-using-below-command)

**MDS/Provider-1**

**Global Policies and Objects**

The files necessary to migrate the global policies and objects are located in the `opt/<cpversion>/conf` directory of the MDS. Although these files are synchronized between MDS systems in a multi-MDS environment, it is suggested to pull them from the master MDS, which is authoritative for the database.

1. From expert mode CLI on the Provider-1 server, cd to **“$MDSDIR/conf”**
2. Export the Objects_5_0.C, Rulebases_5_0.fws, and Policy.W files

**CMA Policies and Objects**

Individual CMA object databases are contained in unique subdirectories underneath the **“customers”** directory on the MDS:

If the customer is using CMA redundancy, it is suggested to pull the files from the “primary” CMA.
To retrieve the files required by the migration tool:

1. From the MDS/Provider-1 CLI, switch “context” to the relevant CMA
2. Navigate to the **/conf** directory within that CMA
3. Export the Objects_5_0.C , Rulebases_5_0.fws and Policy.W files
4. Route file, please refer to the [previous section step 4](#4-obtain-route-file-using-below-command)

## Cisco

Issue below commands in the CLI:

```console
terminal pager 0
more system:running-config / show running
```

![cisco](/expedition/img/cisco.png "cisco")

If it's multi-context , you will need to issue below commands to get into each of the context before you issue above two commands:

```console
changeto context <name>
changeto system
```

:::note
The configuration is exported as a **.txt** file and is readable using any text editor.
:::

## Forcepoint

### SideWinder

Add all your Sidewinder rules into a single file and upload it or use the Copy from Clipboard. Depending on the version some of this commands will fail but others will get same information with the new command

```console
cf interface q > config_sidewinder.txt
cf service q >> config_sidewinder.txt
cf servicegroup q >> config_sidewinder.txt
cf policy q >> config_sidewinder.txt
cf route q >> config_sidewinder.txt
cf ipaddr q >> config_sidewinder.txt
cf iprange q >> config_sidewinder.txt
cf subnet q >> config_sidewinder.txt
cf netmap q >> config_sidewinder.txt
cf domain q >> config_sidewinder.txt
cf static q >> config_sidewinder.txt
cf netgroup q >> config_sidewinder.txt
cf application q >> config_sidewinder.txt
cf appgroup q >> config_sidewinder.txt
cf host q >> config_sidewinder.txt
```

### StoneSoft

Please follow the below instructions to export the StoneSoft configuration:

1. Select Menu > File > Export > Export All Elements.
2. Select an option:
   Enter a file name for the export file.
   Click Browse to select the location where you want to create the file.
3. Click Export.
