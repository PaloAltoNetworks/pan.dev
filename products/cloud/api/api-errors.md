---
id: api-errors
title: Prisma Cloud API Error Responses
sidebar_label: Error Responses
hide_table_of_contents: false
---

The Prisma Cloud REST API requests for Cloud Security Posture Management (CSPM) return standard
[HTTP response codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). In addition,
the API requests that don't return error information in a response object provide a hint about the error in the response header field `x-redlock-status`.
