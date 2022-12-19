---
id: aws_ec2
title: EC2
sidebar_label: EC2
description: AWS EC2 Queries
hide_title: true
---

## Sample AWS EC2 RQL Queries

:::note
The following guide will walk you through AWS EC2 RQL Query Examples
:::

### List all AWS Security Groups that have Internet Access and exclude certain ports.

```bash
config from cloud.resource where cloud.type = 'aws' AND api.name = 'aws-ec2-describe-security-groups' AND json.rule = (ipPermissions[*].ipv4Ranges[*].cidrIp contains 0.0.0.0/0 or ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0) and ipPermissions[*].fromPort does not intersect (443, 500, 4500, 9021, 9092, 8083, 8088, 8090, 8082, 8081, 2181, 2888, 3888, 3780, 3781, 40815, 40814) and ipPermissions[*].toPort does not intersect (443, 500, 4500, 9021, 9092, 8083, 8088, 8090, 8082, 8081, 2181, 2888, 3888, 3780, 3781, 40815, 40814)
```

### List all EC2 instances that have a connection open for RDP (public or specific) and that has a public ip address.

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = publicIpAddress exists as Y; filter '$.Y.securityGroups[*].groupId contains $.X.groupId'; show X; 
```

### List all instances that have a Public IP assigned, and are associated to an NSG that is open to the public.

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = publicIpAddress exists and publicIpAddress is not empty as X; config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = ipPermissions[*].ipRanges[*] contains 0.0.0.0/0 or ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0 as Y; filter '$.X.securityGroups[*].groupName == $.Y.groupName' ; show X;
```

### List all security groups that are open to the public on port 3389 that are on a VPC that contains an IGW

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 3389 && @.fromPort < 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 3389 || @.fromPort == 3389)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config from cloud.resource where api.name = 'aws-ec2-describe-internet-gateways' as Y; filter '$.Y.attachments[*].vpcId contains $.X.vpcId'; show X; 
```

### List all security groups that are open to the public on port 22 that are on a VPC that contains an IGW with an EC2 instance attached.

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = (((ipPermissions[?(@.toPort > 22 && @.fromPort < 22)].ipRanges[*] contains 0.0.0.0/0) or (ipPermissions[?(@.toPort == 22 || @.fromPort == 22)].ipRanges[*] contains 0.0.0.0/0)) or ((ipPermissions[?(@.toPort > 22 && @.fromPort < 22)].ipv6Ranges[*].cidrIpv6 contains ::/0) or (ipPermissions[?(@.toPort == 22 || @.fromPort == 22)].ipv6Ranges[*].cidrIpv6 contains ::/0))) and isShared is false as X; config from cloud.resource where api.name = 'aws-ec2-describe-internet-gateways' as Y; config from cloud.resource where api.name = 'aws-ec2-describe-instances' as Z; filter '$.Z.securityGroups[*].groupId contains $.X.groupId and $.Y.attachments[*].vpcId contains $.X.vpcId'; show X;
```
### Detect EC2 instances that have been existing longer than 30 dates(via the block device attachTime), where the volume isn't encrypted.

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-instances' AND json.rule = "blockDeviceMappings[?(@.deviceName=='/dev/xvda'||@.deviceName=='/dev/sda1')].ebs.attachTime exists and (( _DateTime.ageInDays(blockDeviceMappings[?(@.deviceName=='/dev/xvda')].ebs.attachTime) > 30) or ( _DateTime.ageInDays(blockDeviceMappings[?(@.deviceName=='/dev/sda1')].ebs.attachTime) > 30))" as X; config from cloud.resource where api.name = 'aws-ec2-describe-volumes' AND json.rule = encrypted is false as Y; filter ' $.X.instanceId equals $.Y.attachments[*].instanceId '; show X; 
```

###  Detect AMI images older than 90 days

```bash
config from cloud.resource where cloud.type = 'aws' AND cloud.service = 'EC2' AND api.name = 'aws-ec2-describe-images' AND json.rule = "_DateTime.ageInDays(image.creationDate) > 90"
```

### Detect EC2 instances running AMIs older than 30 days

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-instances' as X; config from cloud.resource where api.name = 'aws-ec2-describe-images' AND json.rule = "_DateTime.ageInDays(image.creationDate) > 30" as Y; filter ' $.X.imageId==$.Y.image.imageId '; show X; 
```

### Detect EC2 instances not using a specified AMI image

```bash
config where cloud.type = 'aws' AND api.name = 'aws-ec2-describe-instances' AND json.rule =  imageId does not contain <ami-AMI_ID>
```

### Detect EC2 instances running for more than 1 day but less than 3 days

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-instances' and json.rule = "_DateTime.ageInDays(launchTime) > 1 and state.code equals 16 and _DateTime.ageInDays(launchTime) < 3"
```

### Detect CFT's that created public SecurityGroups

```bash
config from cloud.resource where api.name = 'aws-cloudformation-describe-stacks' as X; config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' AND json.rule = ipPermissions[*].ipv6Ranges[*].cidrIpv6 contains ::/0 or ipPermissions[*].ipRanges[*] contains 0.0.0.0/0 as Y; filter '$.X.stackResources[*].physicalResourceId == $.Y.groupId'; show X; 
```

### Find flow logs of VPCs that have EC2 instances attached to verify if network flowlogs exist

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-flow-logs' as X; config from cloud.resource where api.name = 'aws-ec2-describe-instances' as Y; filter '$.X.resourceId==$.Y.vpcId'; show X;
```

### Find VPCs where Flow Logs are NOT enabled 

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-vpcs' as X; config from cloud.resource where api.name = 'aws-ec2-describe-flow-logs' as Y; filter ' not ($.Y.resourceId equals $.X.vpcId)'; show X;
```

###  List unattached security groups (in respect to EC2 instances)

```bash
config from cloud.resource where cloud.type = 'aws' AND api.name = 'aws-ec2-describe-security-groups' as X; config from cloud.resource where api.name = 'aws-ec2-describe-instances' as Y; filter ' not ($.Y.securityGroups[*].groupId contains $.X.groupId) '; show X;
```

### Unattached security groups (in respect to network interfaces)

```bash
config from cloud.resource where api.name = 'aws-ec2-describe-security-groups' and json.rule = "groupName does not equal default" as X; config from cloud.resource where api.name = 'aws-ec2-describe-network-interfaces' as Y; filter 'not ($.Y.groups[*].groupId contains $.X.groupId) '; show X;
```

### Find EC2 instance with a specific public IP address
```bash
config from cloud.resource where cloud.type = 'aws' AND json.rule = (publicIp exists or publicIpAddress exists) and ( publicIp equals x.x.x.x or publicIpAddress equals x.x.x.x) addcolumn publicIp publicIpAddress
```
