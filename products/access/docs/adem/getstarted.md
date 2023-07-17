---
id: getstarted
title: Get Started with ADEM APIs
description: Autonomous DEM API Get Started
hide_title: false
hide_table_of_contents: false
---


Palo Alto Networks® Autonomous Digital Experience Management (ADEM) APIs allows you to continuously
monitor the application performance of your monitored applications in the Prisma Access environment.

This document provides information about getting started with ADEM APIs 2.0. The 2.0 APIs are
intended for cloud-managed Prisma Access customers, where the tenants have been onboarded by Palo
Alto Networks using a Tenant Service Group (TSG) identifier. To see whether your tenant uses TSG
IDs, go to the Prisma Access Hub, click on the Prisma Access application name, and look in the
**Manage Apps** section. If you are using the Strata Could Manager, go to Workflow and click
**Settings**."

## API Request Overview

The ADEM APIs allow you to retrieve selected information from the Strata Cloud Manager platform. All
ADEM API 2.0 requests must use HTTPS, and they must use HTTP/1.1. They also must use an access
token. To obtain an access token, you use the same process as the other SASE APIs. That is, you must
have a TSG and a service account that has role access to your Prisma Access instance. To understand
this process, see
[Prisma SASE API Get Started](/sase/docs/getstarted).

## Base URL and Region

You use Prisma SASE to obtain an access token for use with your Prisma Access 2.0 APIs, and you
use the [same FQDN](/sase/docs/api-call/). Also, this API requires the x-panw-region header. See 
[About x-panw-region](/sase/docs/api-call/#about-x-panw-region) for usage information.

## Full API URL

The full URL for an API request includes the base URL, plus the API URI described in the API
reference documentation. 

`https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?start=1688973957&end=1689060357&endpoint-type=muAgent&response-type=summary`

## Sample: API Request

**Note** You must provide the TSG_ID that you specified for the scope of your access token in the
API call using the `Prisma-Tenant` custom HTTP header.

**Note** The `Bearer` keyword must be present before the auth token itself.

    #!/bin/bash
       echo "  "
    #
    # Replace
    # <JWT_TOKEN_BASE64_ENCODED> - JWT Token as returned by the Auth service
    # <TSG_ID> - Tenant Service Group ID used for the scope when you obtained your access token.
    #

    curl --location "https://api.sase.paloaltonetworks.com/adem/telemetry/v2/measure/agent/score?start=1688973957&end=1689060357&endpoint-type=muAgent&response-type=summary" \
        -H "x-panw-region: <region>" \
        -H "Authorization: Bearer <JWT_TOKEN_BASE64_ENCODED>" \
        -H "Prisma-Tenant <TSG_ID>" \
        -H "Prisma-SubTenant <subtenant_id>" \
        -H "Content-Type: application/json"
