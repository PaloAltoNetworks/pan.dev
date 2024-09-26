---
id: unified
title: Unified SASE SD-WAN APIs
sidebar_label: Unified SASE SD-WAN APIs
slug: /sdwan/api
---

The Prisma SD-WAN unified APIs allow you to integrate Prisma SD-WAN into your existing applications
and workflows. These APIs use the common SASE authentication and request mechanism for service
access and authorization. See the [Prisma SASE Get Started](/sase/docs/getstarted) for more information.

**NOTE:**
For Unified Prisma SD-WAN API calls, immediately after generating an access token, you must make a
call to

    GET /sdwan/v2.1/api/profile

If this isn't done, subsequent calls to the SD-WAN API endpoints will return a 403.
