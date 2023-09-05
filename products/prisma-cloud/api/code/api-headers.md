---
id: api-headers
title: Application Security API Headers
sidebar_label: Headers
keywords:
  - Developer
  - Prisma
  - Prisma Cloud
  - Reference
  - API
---

The following table lists the HTTP headers required for a Prisma Cloud Application Security API request.

| HTTP Header     | Value                                                                                                                                                            |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorization` | Your JSON Web Token (JWT). Find your JWT in the response object of a successful [login request](/prisma-cloud/api/cspm/app-login/).                              |
| `Content-Type`  | This header is required for requests that have request body parameters. The value is usually `application/json`, but see each request for specific requirements. |
