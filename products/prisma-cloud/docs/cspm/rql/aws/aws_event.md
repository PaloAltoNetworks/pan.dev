---
id: aws_event
title: AWS Event Queries
sidebar_label: AWS Events
description: AWS Event Queries
hide_title: true
---

## Sample AWS Event RQL Queries

:::note
The following guide will walk you through AWS Event RQL Query Examples, based on audit logs
:::

### Alert on sensitive user activities from non-automation users

```bash
event from cloud.audit_logs where operation IN ( 'AddUserToGroup', 'AttachGroupPolicy', 
'AttachUserPolicy' , 'AttachRolePolicy' , 'CreateAccessKey', 'CreateKeyPair', 'DeleteKeyPair', 
'DeleteLogGroup' ) AND json.rule = $.userIdentity.arn does not contain 'AWSCloudFormation' 
and $.userIdentity.arn does not contain 'ocp_installer' and $.userIdentity.arn does not contain 'automation_user' 
```

### Alert when someone deletes a key

```bash
event from cloud.audit_logs where cloud.type = 'aws' AND operation IN ( 'DeleteAccessKey' ) 
```

### Failed AWS API calls

```bash
event from cloud.audit_logs where json.rule = $.errorCode exists ADDCOLUMN $.errorCode
```
