---
id: getstarted
title: Get Started with ADEM APIs
description: Autonomous DEM API Get Started
hide_title: false
hide_table_of_contents: false
---


Palo Alto Networks® Autonomous Digital Experience Management (ADEM) APIs allows you to continuously monitor the application
performance of your monitored applications in the Prisma Access environment.

This document provides information about getting started with ADEM APIs 2.0. The
2.0 APIs are intended for cloud-managed Prisma Access customers, where the tenants have been
onboarded by Palo Alto Networks using a Tenant Service Group (TSG) identifier. To see whether your
tenant uses TSG IDs, go to the Prisma Access Hub, click on the Prisma Access application
name, and look in the **Manage Apps** section. If you are using the Strata Could Manager, go to Workflow and click **Settings**."

## API Request Overview

The ADEM APIs allow you to retrieve selected information from the Strata Cloud Manager platform. All ADEM API 2.0 requests must use HTTPS, and they must use HTTP/1.1.
They also must use an access token. To obtain an access token, you use the same process as the
other SASE APIs. That is, you must have a TSG and a service account that has role access to your
Prisma Access instance. To understand this process, see
[Prisma SASE API Get Started](/sase/docs/getstarted).

## Base URLs

While you use Prisma SASE to obtain an access token for use with your Prisma Access 2.0
APIs, you do not use the same FQDN as do the other Prisma SASE APIs.

All requests go to the same base URL:

`https://pa-<region>.dem.prismaaccess.com`

where _&lt;region&gt;_ identifies your tenant's Cortex Data Lake (CDL) region. Available
regions are:

| Region    | URL                          |
| --------- | ---------------------------- |
| US        | api-prod1-us-west2.dem.prismaaccess.com |
| EU        | api-eu1-europe-west4.dem.prismaaccess.com |
| UK        | api-uk1-europe-west2.dem.prismaaccess.com |
| Singapore | api-sg1-asia-southeast1.dem.prismaaccess.com |
| Canada    | api-ca1-northamerica-northeast1.dem.prismaaccess.com |
| Japan     | api-jp1-asia-northeast1.dem.prismaaccess.com |
| Australia | api-au1-australia-southeast1.dem.prismaaccess.com |
| Germany   | api-de1-europe-west3.dem.prismaaccess.com |
| India     | api-in1-asia-south1.dem.prismaaccess.com |

You chose your region when you initially configured your Prisma Access Insights
instance.

## Full API URL

The full URL for an API request includes the base URL, plus the API URI described in the API
reference documentation. For example, a customer using the US region
can query for agent score using:

`api-prod1-us-west2.dem.prismaaccess.com/agent/v2/measure/agent/score?start=1688973957&end=1689060357&endpoint-type=muAgent&response-type=summary`

## Sample: API Request

**Note** You must provide the TSG_ID that you specified for the scope of your access token in the
API call using the `Prisma-Tenant` custom HTTP header.

**Note** The `Bearer` keyword must be present before the auth token itself.

    #!/bin/bash
       echo "  "
    #
    # Replace
    # <TENANT_REGION_API_SERVER> - Tenant's Prisma Access Region FQDN
    # <JWT_TOKEN_BASE64_ENCODED> - JWT Token from the previous script
    # <TSG_ID> - Tenant Service Group ID used for the scope when you obtained your access token.
    #
    curl -o --location "https://<TENANT_REGION_API_SERVER>/agent/v2/measure/agent/score?start=1688973957&end=1689060357&endpoint-type=muAgent&response-type=summary" \
        -H "Authorization: Bearer <JWT_TOKEN_BASE64_ENCODED>" \
        -H "Prisma-Tenant <TSG_ID>" \
        -H "Prisma-SubTenant <subtenant_id>"
		-H "Content-Type: application/json"

