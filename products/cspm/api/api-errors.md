---
id: api-errors
title: Prisma Cloud API Error Responses
sidebar_label: Error Responses
slug: /prisma-cloud/api/cspm/api-errors
---

The Prisma Cloud REST API endpoints for Cloud Security Posture Management (CSPM) return standard
[HTTP response codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). In addition,
the API endpoints that don't return error information in a response object provide a hint about the error in the response header field `x-redlock-status`.
