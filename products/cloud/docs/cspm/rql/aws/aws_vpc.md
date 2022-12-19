---
id: aws_vpc
title: AWS VPC
sidebar_label: AWS VPC
description: AWS VPC rql
hide_title: true
---

## Sample AWS VPC RQL Queries

:::note
The following guide will walk you through AWS VPC RQL Query Examples
:::

### Security Groups allows internet traffic to ports which are not commonly used AND WITH IGW attached to VPC

```bash
config from cloud.resource where cloud.type = 'aws' AND api.name='aws-ec2-describe-security-groups' as X; config from cloud.resource where api.name = 
'aws-ec2-describe-internet-gateways' as Y; filter "$.X.vpcId == $.Y.attachments[*].vpcId and ($.X.ipPermissions[?(@.toPort != 80 && @.toPort != 443 && 
@.toPort != 22 && @.toPort != 23 && @.toPort != 3389 && @.toPort != 20 && @.toPort != 21 && @.toPort != 25 && @.toPort != 53 && @.toPort != 135 && 
@.toPort != 137 && @.toPort != 138 && @.toPort != 139 && @.toPort != 445 && @.toPort !=3306 && @.toPort != 1433 && @.toPort != 1434 && @.toPort != 4333 && 
@.toPort != 5432 && @.fromPort != 80 && @.fromPort != 443 && @.fromPort != 22 && @.fromPort != 23 && @.fromPort != 3389 && @.fromPort != 20 && @.fromPort != 21 
&& @.fromPort != 25 && @.fromPort != 53 && @.fromPort != 135 && @.fromPort != 137 && @.fromPort != 138 && @.fromPort != 139 && @.fromPort != 445 
&& @.fromPort !=3306 && @.fromPort != 1433 && @.fromPort != 1434 && @.fromPort != 4333 && @.fromPort != 5432 && @.ipProtocol=='tcp' || @.ipProtocol=='icmp' 
|| @.ipProtocol=='icmpv6' || @.ipProtocol=='udp')].ipv6Ranges[*].cidrIpv6 contains ::/0) or ($.X.ipPermissions[?(@.toPort != 80 && @.toPort != 443 && 
@.toPort != 22 && @.toPort != 23 && @.toPort != 3389 && @.toPort != 20 && @.toPort != 21 && @.toPort != 25 && @.toPort != 53 && @.toPort != 135 && 
@.toPort != 137 && @.toPort != 138 && @.toPort != 139 && @.toPort != 445 && @.toPort !=3306 && @.toPort != 1433 && @.toPort != 1434 && @.toPort != 4333 
&& @.toPort != 5432 && @.fromPort != 80 && @.fromPort != 443 && @.fromPort != 22 && @.fromPort != 23 && @.fromPort != 3389 && @.fromPort != 20 
&& @.fromPort != 21 && @.fromPort != 25 && @.fromPort != 53 && @.fromPort != 135 && @.fromPort != 137 && @.fromPort != 138 && @.fromPort != 139 
&& @.fromPort != 445 && @.fromPort !=3306 && @.fromPort != 1433 && @.fromPort != 1434 && @.fromPort != 4333 && @.fromPort != 5432 && @.ipProtocol=='tcp' 
|| @.ipProtocol=='icmp' || @.ipProtocol=='icmpv6' || @.ipProtocol=='udp')].ipRanges[*] contains 0.0.0.0/0)"; show X;
```

