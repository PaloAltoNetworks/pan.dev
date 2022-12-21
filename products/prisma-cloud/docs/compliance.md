---
id: export-compliance-standard
title: Exporting an existing Compliance Standard
sidebar_label: Exporting an existing Compliance Standard
---

This guide shows how to export a specific **compliance standard** (along with its Requirements and Sections).

### Possible use cases
 - for backup
 - to import into another tenant

* TODO: include a link to the **authentication step** prior to the main API call sequence
* TODO: notify about the JWT TTL?

Start by [getting a list of Compliance Standards](/cspm/api/get-all-standards/) ![alt text](/icons/api-icon-pan-dev.svg) which returns all system-supported and custom compliance standards:

```
curl --request GET \
--url https://api.prismacloud.io/compliance \
--header 'x-redlock-auth: REPLACE_KEY_VALUE'
```

Next, pick a compliance standard from the returned array, grab its `id` and pass it as a `complianceId` path parameter to [List Compliance Requirements](/cspm/api/get-requirements/) ![alt text](/icons/api-icon-pan-dev.svg):

```
curl --request GET \
--url https://api.prismacloud.io/compliance/{complianceId}/requirement \
--header 'x-redlock-auth: REPLACE_KEY_VALUE'
```

This will return a list of **all compliance requirements** for the specified **compliance standard ID**.

The `requirementId` in the response can be used to get a list of all compliance requirement sections for the specific compliance standard. Just pass the `requirementId` as a path parameter to [List Compliance Requirement Sections](/cspm/api/get-sections/) ![alt text](/icons/api-icon-pan-dev.svg):

```
curl --request GET \
--url https://api.prismacloud.io/compliance/{requirementId}/section \
--header 'x-redlock-auth: REPLACE_KEY_VALUE'
```

Finally, use [List Policies](/cspm/api/get-policies-v-2/) ![alt text](/icons/api-icon-pan-dev.svg) to get all available policies for your specific **compliance standard** by setting `policy.complianceStandard` *query string parameter* with the **Compliance Standard Name** you've acquired earlier:

```
curl --request GET \
--url 'https://api.prismacloud.io/v2/policy?policy.complianceStandard=SOME_STRING_VALUE' \
--header 'x-redlock-auth: REPLACE_KEY_VALUE'
```



