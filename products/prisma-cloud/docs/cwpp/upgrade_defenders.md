---
id: upgrade-outdated-defenders
title: Upgrade outdated Defenders
sidebar_position: 4
---

This guide shows how to retrieve a list of outdated Defenders and then upgrade.

First of all, obtain an authorization token by [Authenticating a user](/cwpp/api/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 30 minutes.

:::

Start by [getting a list of outdated deployed Defenders](/cwpp/api/get-defenders-names/) ![alt text](/icons/api-icon-pan-dev.svg) by using a query parameter, **latest** with its value set to **false**:

```console
curl -sSL --header "authorization: Bearer access_token" \
  -H 'Content-Type: application/json' \
  -X GET \
  "https://<CONSOLE>/api/v<VERSION>/defenders/names?latest=false"
```

Let's say, you're interested in upgrading _ip-172-11-71-226.ec2.internal_:

```json
...

  [
    // Previous Defender name
    "ip-172-11-71-226.ec2.internal",
    "pm-demo-instance-1.c.compute-pm.internal",
    "ip-172-11-4-95.ec2.internal",
    "pm-demo-instance-2.c.compute-pm.internal",
    "ip-172-13-94-194.ec2.internal",
  // Next Defender name
  ]
...
```

Pick a **ip-172-11-71-226.ec2.internal** from the returned array, use this as `id` and pass it as a `{id}` path parameter to [Upgrade a Defender](/cwpp/api/post-defenders-id-upgrade/) ![alt text](/icons/api-icon-pan-dev.svg):

```
curl -sSL --header "authorization: Bearer access_token" \
-H 'Content-Type: application/json' \
  -X POST \
  https://<CONSOLE>/api/v<VERSION>/defenders/ip-172-11-71-226.ec2.internal/upgrade
```

This will upgrade the Defender.
