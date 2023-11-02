---
id: cspm-api
title: CSPM API
slug: /prisma-cloud/api/cspm
keywords:
  - Developer
  - Prisma
  - Prisma Cloud
  - Reference
  - API
---

CSPM API requests require right privileges

### CSPM User Roles

To have the right privileges for a CSPM API request, you must have a [Prisma Cloud user role](https://docs.prismacloud.io/en/classic/cspm-admin-guide/manage-prisma-cloud-administrators/prisma-cloud-administrator-roles) with sufficient permissions. If you are upgraded to the Darwin release, see [Prisma Cloud user role](https://docs.prismacloud.io/en/enterprise-edition/content-collections/administration/prisma-cloud-administrator-roles).
For the permissions associated with each role, see [Prisma Cloud Administrator Permissions](https://docs.prismacloud.io/en/classic/cspm-admin-guide/manage-prisma-cloud-administrators/prisma-cloud-admin-permissions). If you are upgraded to the Darwin release, see [Prisma Cloud Administrator Permissions](https://docs.prismacloud.io/en/enterprise-edition/content-collections/administration/prisma-cloud-admin-permissions).

### CSPM API Authorization

To have the right authorization for a CSPM API request, follow the high-level steps below:

1. [Obtain an access key](https://docs.prismacloud.io/en/classic/cspm-admin-guide/manage-prisma-cloud-administrators/create-access-keys) from your Prisma Cloud system administrator. If you are upgraded to the Darwin release, see [Obtain an access key](https://docs.prismacloud.io/en/enterprise-edition/content-collections/administration/create-access-keys).
2. Make a CSPM API request to [log in](/prisma-cloud/api/cspm/app-login) . A successful request returns a JSON Web Token (JWT).

Almost all CSPM API requests use this JWT for authorization.
Note that for security, a JWT is valid for only ten minutes. If your session must be active beyond that limit, you can [extend a session](/prisma-cloud/api/cspm/extend-session).

See [Getting Started](/prisma-cloud/docs/cspm/cspm-gs) for detailed steps to obtain an access key and to [log in](/prisma-cloud/api/cspm/app-login) to obtain a JWT token.

## Components of a CSPM Request

The sections below describe the components of a successful CSPM API request.

### Base URL

The base URL of your CSPM API request depends on the region of your Prisma Cloud tenant and is similar to your Prisma Cloud administrative console URL. See [URLs](/prisma-cloud/api/cspm/api-urls) for a list of Prisma Cloud console URLs and corresponding CSPM API base URLs.

### HTTP Methods

The CSPM API uses the standard HTTP methods `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

You can retrieve certain CSPM resources through either a `GET` or a `POST` request. Examples include but are not limited to alert lists, compliance posture, and some asset inventory lists. While both methods result in the same response, use `POST` if:

- You don’t want to include your request parameters in the request URL.
- Your request parameters are complex and, therefore, easier to define in the body of a `POST` request.

### Required Request Headers

See [Headers](/prisma-cloud/api/cspm/api-headers) for information about required request headers.

### Request Parameters and Common Data Models

Both query and request body parameters can include certain CSPM common data models. The following sections provide details about their use:

- The [Time Range Model](/prisma-cloud/api/cspm/api-time-range-model) enables you to specify windows of time.
- The [Integration Configurations](/prisma-cloud/api/cspm/api-integration-config) are specific to API requests that [add](/prisma-cloud/api/cspm/save-integration), [update](/prisma-cloud/api/cspm/update-integration), or [test](/prisma-cloud/api/cspm/test-integration) a third-party integration with Prisma Cloud.

### Error Responses

See [Error Responses](/prisma-cloud/api/cspm/api-errors) for information about error handling.

## Stay Up to Date

Check the [status notifications](https://status.paloaltonetworks.com/) for the Prisma Cloud release schedule to stay up to date with the new features and functionality.
