---
id: aws_elb
title: ELB
sidebar_label: ELB
description: AWS ELB rql
hide_title: true
---

## Sample AWS ELB RQL Queries

:::note
The following guide will walk you through AWS RQL Query Examples
:::

### Internet-Facing ELB that is not behind a WAF

```bash
config from cloud.resource where api.name = 'aws-elbv2-describe-load-balancers' as X; config from cloud.resource where api.name = 'aws-waf-classic-web-acl-resource' 
as Y; config from cloud.resource where api.name = 'aws-waf-v2-web-acl-resource' as Z; 
filter ' not ( ( $.Z.resources.applicationLoadBalancer[*] contains $.X.loadBalancerArn ) or 
( $.Y.resources.applicationLoadBalancer[*] contains $.X.loadBalancerArn ))'; show X;
```

### Use a good cipher list to find the resources that have a cipher not in the good list enabled.

Following are considered as good ciphers:

ECDHE-RSA-AES128-GCM-SHA256
ECDHE-RSA-AES256-GCM-SHA384
DHE-RSA-AES128-GCM-SHA256
DHE-RSA-AES128-CCM)
DHE-RSA-AES256-CCM
DHE-RSA-AES128-CCM8
DHE-RSA-AES256-CCM8
ECDHE-RSA-AES128-SHA256
DHE-RSA-AES128-SHA256
DHE-RSA-AES256-SHA256

Following is one of the bad ciphers:

DES-CBC3-SHA

````bash
config from cloud.resource where cloud.type = 'aws' AND api.name = 'aws-elb-describe-load-balancers' AND json.rule = 'policies[*].policyAttributeDescriptions[*] exists and policies[*].policyAttributeDescriptions[?any(attributeValue equals true and attributeName is not member of (ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, DHE-RSA-AES128-GCM-SHA256, DHE-RSA-AES128-CCM, DHE-RSA-AES256-CCM, DHE-RSA-AES128-CCM8, DHE-RSA-AES256-CCM8, ECDHE-RSA-AES128-SHA256, DHE-RSA-AES128-SHA256, DHE-RSA-AES256-SHA256) )] exists'
````
