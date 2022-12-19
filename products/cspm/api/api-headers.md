---
id: api-headers
title: Prisma Cloud API Headers
sidebar_label: Headers
hide_table_of_contents: false
keywords:
  - Developer
  - Prisma
  - Prisma Cloud
  - Reference
  - API
---

The following table lists the HTTP headers required for a Prisma Cloud API request.

| HTTP Header    | Value                                                                                                                                                                                                                                                                                                                                                            |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| x-redlock-auth | Your JSON Web Token (JWT). Find your JWT in the response object of a successful [login request](/api/cloud/cspm/login#operation/app-login).                                                                                                                                                                         |
| Content-Type   | This header is required for requests that have request body parameters. The value is usually `application/json`, but see each request for specific requirements. |
