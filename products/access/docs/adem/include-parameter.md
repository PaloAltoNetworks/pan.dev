---
id: include-parameter
title: ADEM Include Parameter
description: Autonomous DEM API Include Parameter
hide_title: false
hide_table_of_contents: false
---

Autonomous DEM APIs require an `include` query parameter which you can use to include additional
properties in the API's response. You can include multiple parameters by providing them as a 
comma-separated list. You supply each element in the list in the format:

<Include>.<property>[,..]

Where `<Include>` is an alias for an operation or property. 

| Include          | Alias  | Description                        | Example |  
| -------          | ------ | ------------                       | ------- | 
| EntityCounts     | ec     | Include a count of given entities  | EntityCounts.user  or ec.user,ec.endpoint  | 
| AgentProperties  | ap     | Include agent properties           | ap.computerName | 
|  |  |  |  | 

You can include the following agent properties:

| Property                        | Description          |
| ---------------                 | -------------------- |
| muGatewayPublicIp               |  |
| agentPublicIp                   |  |
| username                        |  |
| globalProtectVersion            |  |
| globalProtectGatewayLocation    |  |
| globalProtectTunnelStatus       |  |
| endpointVersion                 |  |
| operatingSystemVersion          |  |
| operatingSystem                 |  |
| model                           |  |
| country                         |  |
| latitude                        |  |
| longitude                       |  |
| asn                             |  |
| asnOrgName                      |  |
| cpuAverage                      |  |
| cpuMin                          |  |
| cpuMax                          |  |
| ramAverage                      |  |
| ramMin                          |  |
| ramMax                          |  |
| batteryCharge                   |  |
| batteryIsCharging               |  |
| batterySaver                    |  |
| disks                           |  |
| wlans                           |  |







