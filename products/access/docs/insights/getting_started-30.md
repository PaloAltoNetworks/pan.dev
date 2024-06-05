---
id: getting_started-30
title: Get Started with Prisma Access Insights 3.0 API
description: Prisma Access Insights 3.0 API quick start
sidebar_label: Get Started 3.0
---

Palo Alto Networks® Prisma Access Insights APIs allows you to continuously monitor the health and
performance of your Prisma Access environment using Insights in the Prisma Access app.

This document provides information about getting started with Prisma Access Insights 3.0 APIs. The 3.0 APIs are intended for cloud-managed Prisma Access customers, where the tenants have been
onboarded by Palo Alto Networks using a Tenant Service Group (TSG) identifier. To see whether your
tenant uses TSG IDs, go to the Prisma Access Hub, click on the Prisma Access Insights application
name, and look in the **Manage Apps** section.

## API Request Overview

The Prisma Access Insights APIs allow you to retrieve selected information from the Prisma Access
Insights platform. All Prisma Access 3.0 API requests must use HTTPS, and they must use HTTP/1.1.
They also must use an access token. To obtain an access token, you use the same process as the
other SASE APIs. That is, you must have a TSG and a service account that has role access to your
Prisma Access Insights instance. To understand this process, see
[Prisma SASE API Get Started](/sase/docs/getstarted).

## Base URLs

While you use Prisma SASE to obtain an access token for use with your Prisma Access 3.0
APIs, you do not use the same FQDN as do the other Prisma SASE APIs.

All requests go to the same base URL:

`https://api.sase.paloaltonetworks.com`

## Full API URL

The full URL for an API request includes the base URL, plus the API URI described in the API reference documentation. For example, a customer using the US region
can query for external alerts using:

`https://api.sase.paloaltonetworks.com/insights/v3.0/resource/query/applications/application_list`

## Sample: API Request

**Note** You must provide the TSG_ID that you specified for the scope of your access token in the
API call using the `Prisma-Tenant` custom HTTP header.

**Note** The `Bearer` keyword must be present before the auth token itself.

 #!/bin/bash
       echo "  "
    
    # Replace
    # <JWT_TOKEN_BASE64_ENCODED> - JWT Token from the previous script
    #
    curl -L -X POST 'https://api.sase.paloaltonetworks.com/insights/v3.0/resource/query/locations/location_gp_mobile_users_logins' \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    -H 'Authorization: Bearer <TOKEN>' \
    --data-raw '{
  "edge_location_display_name": "US West",
  "event_time": "1709226000000",
  "node_type": 48
 }'
