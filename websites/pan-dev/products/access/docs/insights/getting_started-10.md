---
id: getting_started-10
title: Get Started with Prisma Access Insights 1.0 API
description: Prisma Access Insights 1.0 API quick start
sidebar_label: Get Started 1.0
---

Palo Alto Networks® Prisma Access Insights APIs allows you to continuously monitor the health and
performance of your Prisma Access environment using Insights in the Prisma Access app.

This document provides information about getting started with Prisma Access
Insights 1.0 APIs. The 1.0 APIs are meant for all cloud-managed single-tenant customers, as well as Panorama-managed single-tenant and multi-tenant customers.

## API Request Overview

The Prisma Access Insights APIs allow you to retrieve selected information from the Prisma Access
Insights platform. All API requests must use HTTPS, and they must use HTTP/1.1. All requests go to
the same base URL:

`https://pa-<region>.api.prismaaccess.com`

where _&lt;region&gt;_ identifies your tenant's Cortex Data Lake (CDL) region. Available
regions are:

| Region    | URL                          |
| --------- | ---------------------------- |
| US        | pa-us01.api.prismaaccess.com |
| EU        | pa-eu01.api.prismaaccess.com |
| UK        | pa-uk01.api.prismaaccess.com |
| Singapore | pa-sg01.api.prismaaccess.com |
| Canada    | pa-ca01.api.prismaaccess.com |
| Japan     | pa-jp01.api.prismaaccess.com |
| Australia | pa-au01.api.prismaaccess.com |
| Germany   | pa-de01.api.prismaaccess.com |
| India     | pa-in01.api.prismaaccess.com |

You chose your region when you initially configured your Prisma Access Insights
instance.

## Full API URL

The full URL for an API request includes the base URL, plus the API URI described in the API
reference documentation. For example, a customer using the US region
can query for external alerts using:

    https://pa-us01.api.prismaaccess.com/api/sase/v1.0/resource/tenant/{super_tenant_id}/query/prisma_sase_external_alerts_current

## Generate an API Key

In order to obtain an access token, you must first obtain an API key. To generate an API key:

1. In the Prisma Access Insights Admin UI, navigate to **Insights &gt; Summary**
1. Click the key icon in the upper right.
1. Check `Agreement about API token usage...`
1. Click `Generate` to get your key, and copy your key.

Save the API key once you have it. The next time you navigate back to this dialog, you will not be
able to retrieve. Instead, you'll have to delete the current key and generate a new one.

![](/sase/img/pai10_key_screenshot.png)

API keys are valid for one year after they are issued.

## Sample: Generate an Access Token

Once you have an API key, you use it to obtain an access token. Access tokens are valid for 15
minutes after they are issued.

To generate a JWT access token, provide your API key on the Authorization
header for a call to `api/sase/v1.0/jwt/tenant/<PA_TENANT_ID>`. For example:

    # Replace
    # <TENANT_REGION_API_SERVER> - Tenant's Prisma Access Region FQDN
    # <PA_TENANT_ID> - Tenant Id
    # <API_KEY> - API KEY copied from the UI
    #
    curl -X POST --location "https://<TENANT_REGION_API_SERVER>/api/sase/v1.0/jwt/tenant/<PA_TENANT_ID>" \
         -H "Authorization: ApiKey <API_KEY>" \
         -H "Content-Type: application/json"

## Sample: API Request

    #!/bin/bash
       echo "  "
    #
    # Replace
    # <TENANT_REGION_API_SERVER> - Tenant's Prisma Access Region FQDN
    # <JWT_TOKEN_BASE64_ENCODED> - JWT Token from the previous script
    #
    curl -o --location "https://<TENANT_REGION_API_SERVER>/api/sase/v1.0/resource/tenant/{super_tenant_id}/query/prisma_sase_external_alerts_current" \
        -H "Authorization: Bearer <JWT_TOKEN_BASE64_ENCODED>" \
        -H "Content-Type: application/json"
