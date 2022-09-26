---
id: sdwan
title: Welcome to Prisma SD-WAN APIs
description: SD-WAN APIs
hide_title: false
slug: /sdwan/docs
hide_table_of_contents: false
keywords:
  - sase
---

Palo Alto Networks Prisma SD-WAN (formerly CloudGenix) is a cloud delivered service that implements
app-defined, autonomous SD-WAN to help you secure and connect your branch offices, data centers, and
large campus sites. The AppFabric connects your sites securely with application awareness and gives
you the freedom to use any WAN, any cloud for a thin branch (security from the cloud) solution.

The SD-WAN APIs allow you to integrate Prisma SD-WAN into your existing applications and workflows.
This RESTful API uses standard HTTP verbs to specify the intent of the operation, and HTTP status
codes to indicate the response to those operations.

There are two versions of these APIs:

- [Unified APIs](/sase/api/sdwan) integrate with the other SASE APIs for a
  seamless SASE authentication and request mechanism. See
  [Prisma SASE API Get Started](/sase/docs/getstarted) for authentication and HTTP request details.

- [Legacy APIs](/sase/api/sdwan/legacy) are identical to the Prisma SD-WAN offering that
  existed prior to the availability of the unified SASE APIs on June 6, 2022. These APIs receive security
  tokens when you login to the service, and the tokens are included in the request as HTTP headers.
  See [Prisma SD-WAN Legacy API Get Started](/sase/docs/sdwan/legacy_getstarted) for details.
