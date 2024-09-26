---
id: retrieve-compliance-standard
title: Retrieve an existing Compliance Standard
---

This guide shows how to retrieve a specific **compliance standard** (along with its Requirements and Sections).

First of all, obtain an authorization token by [Logging In](/prisma-cloud/api/cspm/app-login/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 10 minutes, so [refresh it](/prisma-cloud/api/cspm/extend-session/) ![alt text](/icons/api-icon-pan-dev.svg) as needed if you believe your workflow might take longer than that.

- The base url in this guide is a generic `api.prismacloud.io`. Replace it with yours accordingly.

:::

Start by [getting a list of Compliance Standards](/prisma-cloud/api/cspm/get-all-standards/) ![alt text](/icons/api-icon-pan-dev.svg) which returns all system-supported and custom compliance standards:

```bash
curl --request GET \
--url https://api.prismacloud.io/compliance \
--header 'x-redlock-auth: YOUR_TOKEN'
```

Let's say, you're interested in _SOC2 Compliance Standard_:

```json
...
  // Previous compliance standard
  //},
  {
    "id": "51a30956-9e70-4112-8551-ad69b36381b1",
    "description": "SOC2 Compliance Standard",
    "createdBy": "Prisma Cloud System Admin",
    "createdOn": 1545842667113,
    "lastModifiedBy": "Prisma Cloud System Admin",
    "lastModifiedOn": 1545842667113,
    "systemDefault": true,
    "policiesAssignedCount": 126,
    "name": "SOC 2",
    "cloudType": [
      "aws",
      "gcp",
      "azure"
    ]
  },
  //{
  // Next Compliance Standard
...
```

Pick a **compliance standard** from the returned array(in this case _SOC2 Compliance Standard_), grab its `id`(in this case `51a30956-9e70-4112-8551-ad69b36381b1`) and pass it as a `complianceId` path parameter to [List Compliance Requirements](/prisma-cloud/api/cspm/get-requirements/) ![alt text](/icons/api-icon-pan-dev.svg):

```bash
curl --request GET \
--url https://api.prismacloud.io/compliance/51a30956-9e70-4112-8551-ad69b36381b1/requirement \
--header 'x-redlock-auth: YOUR_TOKEN'
```

This will return a list of **all compliance requirements** for the **SOC 2 Compliance Standard**.

The `id` field in the response can be used to get a list of all requirement sections for the **SOC 2 Compliance Standard**. Just pass it as a path parameter to [List Compliance Requirement Sections](/prisma-cloud/api/cspm/get-sections/) ![alt text](/icons/api-icon-pan-dev.svg):

```bash
curl --request GET \
--url https://api.prismacloud.io/compliance/8f8ccc5f-ff06-42c6-8d84-24fb8a133665/section \
--header 'x-redlock-auth: YOUR_TOKEN'
```

Finally, use [List Policies](/prisma-cloud/api/cspm/get-policies-v-2/) ![alt text](/icons/api-icon-pan-dev.svg) to get all available policies for the **SOC 2 Compliance Standard** by setting `policy.complianceStandard` _query string parameter_ with the **Compliance Standard Name** you've acquired earlier (in this case url-encoded value for `SOC 2` is `SOC%202`):

```bash
curl --request GET \
--url 'https://api.prismacloud.io/v2/policy?policy.complianceStandard=SOC%202' \
--header 'x-redlock-auth: YOUR_TOKEN'
```

You should get back the associated policies. The same workflow could be applied to every compliance standard to retrieve all the associated requirements and sections.
