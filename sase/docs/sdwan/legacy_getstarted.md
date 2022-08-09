---
id: legacy_getstarted
title: Prisma SD-WAN Legacy API Get Started
description: Getting started with the Prisma SD-WAN Legacy API.
hide_title: false
hide_table_of_contents: false
slug: /docs/sdwan/legacy_getstarted
keywords:
  - sdwan
  - prisma sdwan config utility
  - cloudgenix config
---


The legacy Prisma SD-WAN APIs allow you to authenticate with an auth token that you 
retrieve using the login API,
or you can use a static auth token that you retrieve using the Prisma
SD-WAN Controller User Interface.

## Obtain an Auth Token Using the Login API

To retrieve an auth token using the Login API, call: `POST /v2.0/api/login`

with a JSON request body that includes the following fields:

* `email` -- The email address associated with the account that you want to log in using.
* `password` -- account's password.

Upon a successful response, extract the `x_auth_token` value from the JSON response. This is your
auth token.

**Note:** A successful authentication response might also contain a key called `api_endpoint`. If
this key/value pair is present in the response, subsequent API requests should be directed to that 
endpoint. This key/value pair provides the endpoint for the controller in the region where your
tenant resides.

## Obtain a Static Auth Token

To obtain a static auth token:

1. [Log into the Prisma SD-WAN Web Interface](https://docs.paloaltonetworks.com/prisma/prisma-sd-wan/prisma-sd-wan-admin/get-started-with-prisma-sd-wan/activate-and-launch-prisma-sd-wan).
1. Navigate to **System > Access Management > Site Access > Auth Tokens** and **Create Auth Token**

![](/sase/img/sdwan-auth.png)

The web interace's response includes your static auth token.

## API Calls

To make an API call using the legacy Prisma SD-WAN APIs, include your auth token on your request's
`x-auth-token` header.

All API calls should be made using a base URL of `https://api.<region>.cloudgenix.com:443`,
where _&lt;region&gt;_ is the controller region in which your tenant is hosted.


