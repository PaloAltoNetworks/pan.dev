---
id: release-notes
title: Release Notes
description: Prisma SASE API Release Notes
hide_title: true
hide_table_of_contents: false
keywords:
  - sase
---

# Prisma SASE API Release Notes

These release notes identify API changes made for the various SASE services. In addition, you can
see the following for information about non-API feature enhancements and known issues for SASE products:

- [Prisma Access Cloud Managed Release Notes](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-cloud-managed-release-notes/release-information)
- [Prisma Access Insights Release Updates](https://docs.paloaltonetworks.com/prisma/prisma-access/prisma-access-insights/insights/app-updates)

See also the [change log](/sase/docs/release-notes/changelog) for information on all changes to this API documentation, some of which have
occurred in between API product releases.

## April 2022

The [Prisma Access configuration APIs](/sase/docs/prisma-access-config)
are updated with new URIs that begin with `/sse`. Where each API used to begin with `/config/v1`, now they begin
begin with `/sse/config/v1`. For example, `/config/v1/certificate-profiles` is now
`/sse/config/v1/certificate-profiles`.

The following configuration endpoints have changed:

| Old                                  | New                                                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| /config/v1/load-config               | [/sse/config/v1/config-versions:load](/sase/api/prisma-access-config/load-a-configuration)                       |
| /config/v1/running/push              | [/sse/config/v1/config-versions/candidate:push](/sase/api/prisma-access-config/push-the-candidate-configuration) |
| /config/v1/config-versions/candidate | [/sse/config/v1/config-versions](/sase/api/prisma-access-config/list-the-candidate-configurations)               |

Also, [/sse/config/v1/config-versions/candidate:push](/sase/api/prisma-access-config/get-a-configuration-by-version)
formerly had a field `devices` in its request body. This is now `fields`.

The following new API is added:

- [/sse/config/v1/config-versions/{version}](/sase/api/prisma-access-config/get-a-configuration-by-version)

Throughout the entire service, APIs that retrieve or edit a resource by ID now no longer support the
`folder` query parameter. See, for example [/sse/config/v1/addresses/{id}](/sase/api/prisma-access-config/get-an-address-by-id).

## March 2022

First public release of the Prisma SASE APIs. This release provides support for
[tenant](/sase/docs/tenant-service-groups) and
[identity management and role management](/sase/docs/roles),
offers a common method for
[authentication and API access](/sase/docs/api-call),
[subscription monitoring](/sase/api/subscription/introduction),
[Prisma Access configuration](/sase/docs/prisma-access-config),
and [aggregate monitoring](/sase/docs/mt-monitor).

This release supports Managed Security Service Providers (MSSPs).
