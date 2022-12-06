---
id: basic-request
title: CSPM API Request Basics
sidebar_label: CSPM API Request Basics
hide_table_of_contents: false
keywords:
  - Developer
  - Prisma
  - Prisma Cloud
  - Reference
  - API
---


Use the following guidelines to ensure that your Cloud Security Posture Management (CSPM) API requests to Prisma Cloud are successful.

## Prerequisites for a CSPM Request

To make a CSPM API request, you must have the right privileges and authorization for the request.

### CSPM User Roles

To have the right privileges to make a CSPM API request, you must have a [Prisma Cloud user role](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin/manage-prisma-cloud-administrators/prisma-cloud-administrator-roles.html) with sufficient permissions. See [Prisma Cloud Administrator Permissions](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin/manage-prisma-cloud-administrators/prisma-cloud-admin-permissions.html) for the permissions associated with each role.

### CSPM API Authorization

To have the right authorization for a CSPM API request, follow the high-level steps below:

1. [Obtain an access key](https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin/manage-prisma-cloud-administrators/create-access-keys.html) from your Prisma Cloud system administrator.
2. Make a CSPM API request to [log in](/api/cloud/cspm/login#operation/app-login) . A successful request returns a JSON Web Token (JWT).

Almost all CSPM API requests use this JWT for authorization.
Note that for security, a JWT is valid for only ten minutes. If your session must be active beyond that limit, you can [extend a session](/api/cloud/cspm/login#operation/extend-session).

See [Getting Started](/docs/cloud/cspm/cspm-gs) for detailed steps to obtain an access key and to [log in](/api/cloud/cspm/login#operation/app-login) to obtain a JWT token.

## Components of a CSPM Request

The sections below describe the components of a successful CSPM API request.

### Base URL

The base URL of your CSPM API request depends on the region of your Prisma Cloud tenant and is similar to your Prisma Cloud administrative console URL. See [URLs](/api/cloud/api-urls) for a list of Prisma Cloud console URLs and corresponding CSPM API base URLs.

### HTTP Methods

The CSPM API uses the standard HTTP methods `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

You can retrieve certain CSPM resources through either a `GET` or a `POST` request. Examples include but are not limited to alert lists, compliance posture, and some asset inventory lists. While both methods result in the same response, use `POST` if:

* You don’t want to include your request parameters in the request URL.
* Your request parameters are complex and, therefore, easier to define in the body of a `POST` request.

### Required Request Headers

See [Headers](/api/cloud/api-headers) for information about required request headers.

### Request Parameters and Common Data Models

Both query and request body parameters can include certain CSPM common data models. The following sections provide details about their use:

* The [Time Range Model](/api/cloud/api-time-range-model) enables you to specify windows of time.
* The [Integration Configurations](/api/cloud/api-integration-config) are specific to API requests that [add](/api/cloud/cspm/integrations#operation/save-integration), [update](/api/cloud/cspm/integrations#operation/update-integration), or [test](/api/cloud/cspm/integrations#operation/test-integration) a third-party integration with Prisma Cloud.

### Error Responses

See [Error Responses](/api/cloud/api-errors) for information about error handling.
