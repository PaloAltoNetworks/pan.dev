---
id: include-parameter
title: ADEM Include Parameter
description: Autonomous DEM API Include Parameter
hide_title: false
hide_table_of_contents: false
---

Autonomous DEM APIs provide an `include` query parameter that you can use to include additional
properties in the API's response. You can include multiple parameters by providing them as a 
comma-separated list. You supply each element in the list in the format:

    <Include>.<property>[,..]

where `Include` is an alias for an operation or property. 

| Include          | Alias  | Description                        | Example |  
| -------          | ------ | ------------                       | ------- | 
| EntityCounts     | ec     | Include a count of given entities  | EntityCounts.user  or ec.user,ec.endpoint  | 
| AgentProperties  | ap     | Include agent properties           | ap.computerName | 

You can include the following agent properties:

| Property                        | Description          |
| ---------------                 | -------------------- |
| muGatewayPublicIp               |  IP Address of the MU gateway to which the agent connects. |
| agentPublicIp                   |  Public IP Address of the agent. |
| username                        |  GlobalProtect user name. |
| globalProtectVersion            |  GlobalProtect version number. |
| globalProtectGatewayLocation    |  Location of the GlobalProtect gateway. |
| globalProtectTunnelStatus       |  Status of the GlobalProtect tunnel such as whether the tunnel interface is up.|
| endpointVersion                 |  Version number for the endpoint device. |
| operatingSystemVersion          |  Version of the operating system on which the endpoint device is running. |
| operatingSystem                 |  Operating system on which the endpoint device is running. |
| model                           |  Computer model on which the endpoint device is running.|
| country                         |  Country in which the endpoint device is located (based on its public IP) |
| latitude                        |  Latitude at which the endpoint device is located (based on its public IP)|
| longitude                       |  Longitude in which the endpoint device is located (based on its public IP)|
| asn                             |  The Autonomous System Number used by the endpoint device (based on its public IP). |
| asnOrgName                      |  The organization managing the ASN. |
| cpuAverage                      |  Average CPU utilization for the endpoint device (float). |
| cpuMin                          |  Minimum CPU utilization for the endpoint device (float). |
| cpuMax                          |  Maximum CPU utilization for the endpoint device (float). |
| ramAverage                      |  Average RAM utilization for the endpoint device (float). |
| ramMin                          |  Minimum RAM utilization for the endpoint device (float). |
| ramMax                          |  Maximum RAM utilization for the endpoint device (float). |
| batteryCharge                   |  Remaining battery charge as a percent, or 255 if unknown. |
| batteryIsCharging               |  `1` if connected to AC, `0` otherwise. |
| batterySaver                    |  `1` if battery saver is enabled, `0` otherwise. |
| disks                           |  Array of objects that describe the disks on the agent device. |
| wlans                           |  Array of objects that describe the WLANs in use on the agent device. |

## Agent Disk Properties

The disks in use on an endpoint device are described by an object that offers the following properties:

| Property                        | Description          |
| ---------------                 | -------------------- |
| name                            | Name assigned to the disk. |
| queueLengthAverage              | Average disk queue length. |
| queueLengthMin                  | Minimum disk queue length. |
| queueLengthMax                  | Maximum disk queue length. |
| spaceUsed                       | Disk space used, as a percentage. |

## Agent WLANs

The WLANs in use on an endpoint device are described by an object that offers the following properties:

| Property                        | Description          |
| ---------------                 | -------------------- |
| macAddress                      | Wireless LAN Mac address |
| ssid                            | Wireless LAN SSID        |
| bssid                           | Wireless LAN BSSID       |
| channel                         | Wireless LAN channel number |
| quality                         | Wireless LAN quality, 0 - 100 |
| minQuality                      | Minimum wireless LAN quality, 0 - 100 |
| maxQuality                      | Maximum wireless LAN quality, 0 - 100 |
| rx                              | Wireless LAN received bytes |
| minRx                           | Minimum wireless LAN received bytes |
| maxRx                           | Maximum wireless LAN received bytes |
| tx                              | Maximum wireless LAN sent bytes |
| minTx                           | Minimum wireless LAN sent bytes |
| maxtx                           | Maximum wireless LAN sent bytes |
| phyMode                         | Wireless LAN PHY mode e.g. 802.11ac |




