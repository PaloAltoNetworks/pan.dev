---
id: roles-overview
title: Roles Overview
description: To successfully make an API call, the service account that generates the access token must have the proper role.
hide_title: false
hide_table_of_contents: false
keywords:
  - roles
  - Strata Cloud Manager
  - scm
---

Authentication Service use roles to identify the access permissions that a user or
service account has to the resources provided by Strata Cloud Manager. Each available
role is comprised of one or more permissions. Each permission grants some
kind of access (such as `read`) to a Strata Cloud Manager service (such as Prisma Access
Config).

There is an API that you can use to [list all
roles](/scm/api/iam/get-iam-v-1-roles).
You can also view this information in the multitenant user interface.
Finally, you can look at [List of all Roles](/scm/docs/all-roles).

Similarly, there is an API that you can use to [list all permissions](/scm/api/iam/get-iam-v-1-permissions).

Both the list of roles and permissions will change over time as Strata Cloud Manager
offers additional services and features.
