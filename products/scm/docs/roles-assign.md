---
id: roles-assign
title: Assign Roles
description: You can assign one or more roles to a Strata Cloud Manager service or user account.
hide_title: false
hide_table_of_contents: false
keywords:
  - Strata Cloud Manager
  - scm
---

For API access, roles must be applied to a service account. However, you
can also apply roles to an ordinary user account. These roles have meaning
for users who are logging in through the user interface to configure or
monitor Strata Cloud Manager products.

**Note:** Roles can never be in conflict. If an account has a role that
grants read or view only access to a resource, and another role grants
read-write access, then the more permissive role is applied (read-write).

Regardless of whether you're assigning a role to a service account or a
user account, you use the [assign an access policy](/scm/api/iam/post-iam-v-1-access-policies) API to assign the
role.
(Of course, you can also do this using the multitenant user interface.)

If you are assigning a role to service account, then provide the service
account Client ID in this API's `principal` field. This is an email address
that looks like this:

`my_service_account@1111111111.iam.panserviceaccount.com`

If you are assigning a role to a user account, use that user's email
address for the `principal` field.

Be aware that if the email address you specify is not currently used for a user or service account,
the API call creates a new user account within the Strata Cloud Manager system.
