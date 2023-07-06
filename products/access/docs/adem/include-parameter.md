---
id: include-parameter
title: About Autonomous DEM API Include Parameter
description: Autonomous DEM API Include Parameter
hide_title: false
hide_table_of_contents: false
---

Autonomous DEM APIs require an `include` query parameter which you can use to include additional
properties in the API's response. You can include multiple parameters by providing them as a 
comma-separated list. You supply each element in the list in the format:

```<Include>.<property>```

Where `<Include>` is an alias for an operation or property. An alias might be `ec` for entity count or `ap` for agent
properties. ??? This makes no sense. Where do these aliases come from? ???? For example: `ec.user`,
`ec.endpoint`, `ap.computerName`.

You can include the following agent properties:

* muGatewayPublicIp
* agentPublicIp
* username
* globalProtectVersion
* globalProtectGatewayLocation
* globalProtectTunnelStatus
* endpointVersion
* operatingSystemVersion
* operatingSystem
* model
* country
* latitude
* longitude
* asn
* asnOrgName
* cpuAverage
* cpuMin
* cpuMax
* ramAverage
* ramMin
* ramMax
* batteryCharge
* batteryIsCharging
* batterySaver
* disks
* wlans

??? The previous list should be a table with a one-sentence description of each element ???

??? Should have an example of an include parameter with a comma separated list of values ???


