---
id: aws_cloudformation
title: CloudFormation
sidebar_label: CloudFormation
description: AWS CloudFormation Queries
hide_title: true
---

## Sample AWS CloudFormation RQL Queries

:::note
The following guide will walk you through AWS CloudFormation RQL Query Examples
:::

### CloudFormation Template does not contain termination protection for EC2 Instances

```bash
config from cloud.resource where api.name = 'aws-cloudformation-describe-stacks' AND json.rule = " cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')] size > 0 and (cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')].Properties.DisableApiTermination is false or cloudFormationTemplate.Resources.*.[?(@.Type=='AWS::EC2::Instance')].Properties.DisableApiTermination does not exist)"
```

### CloudFormation Stack Has Drifted from Template

```bash
config from cloud.resource where api.name = 'aws-cloudformation-describe-stacks' 
AND json.rule = stackResources[*].driftInformation.stackResourceDriftStatus equals DRIFTED
```
