---
id: stable-endpoints
title: Supported Endpoints
---

With every release, the Compute APIs are versioned to indicate the release number to which they correspond.
The version-specific APIs are supported for the subsequent two major releases.

With API versioning, as your Console is upgraded to newer versions, you can continue to use older versioned APIs with stability and migrate to newer version APIs at your convenience within the N-2 support lifecycle.

:memo: **Note:** Starting from release 33.00, Prisma Cloud does not restrict connections and REST API calls from the n-3 release as well. So the current release will allow Defenders and REST API calls from release 30.xx also.

The deployment scripts and Twistcli that you download from Console, uses the APIs associated with the specific version of Console.

### Previous API Versions of Prisma Cloud Compute Edition

All minor or maintenance versions (xx) of 32.xx release have n-2 support for backward compatibility. The documentation for all the supported releases is available at:

* [Prisma Cloud Compute Edition - 33.03](/compute/api/)
* [Prisma Cloud Compute Edition - 32.07](/compute/api/32-07/)
* [Prisma Cloud Compute Edition - 31.02](/compute/api/31-02/)

## Versioning

The Compute API is versioned as follows:

`/api/vX/route`

Where:

- `v1` - Always points to the latest API. This represents a larger set of APIs. Only the following v1 endpoints are supported and documented:
 - api/v1/certs/ca.pem, get
 - api/v1/certs/server-certs.sh, get
 - api/v1/cloud/discovery/entities, get
 - api/v1/registry/webhook/webhook, delete
 - api/v1/registry/webhook/webhook, post
 - api/v1/signup, post
 - api/v1/util/prisma-cloud-jenkins-plugin.hpi, get
 - api/v1/util/tas-tile, get

- `vVersion` - Points to a version-specific API, where `Version` specifies the major and minor parts of a release's version string.

As a best practice, update your scripts to use the version-specific API endpoints to ensure that your implementation is fully supported.
For the version-specific APIs, you will have access to the API Reference and Release Notes documentation for changes or updates that may impact you.

When using the version-specific endpoints, you will need to update your automation scripts approximately once a year to stay in sync with the product [Support lifecycle for connected components](https://docs.prismacloud.io/en/classic/compute-admin-guide/upgrade/support-lifecycle). If you are upgraded to Darwin, see [Support Lifecycle for Connected Components](https://docs.prismacloud.io/en/enterprise-edition/content-collections/runtime-security/upgrade/support-lifecycle).

Starting with version 30.xx, each maintenance release (like 30.01, 30.02, and so on) may contain new features and improvements. As a result, the URLs for the APIs will be updated to reflect the version.

You can continue to use different .xx versions of the API for your automation requirements, as we’ll continue to support backward compatibility for two major releases, including minor (maintenance) release versions before the current one (n-2). For example, while on build 30.01, you can continue to use the API paths such as api/v30.00, api/v22.12, and api/v22.06 due to backward compatibility.

Though we recommend you to update scripts to use the current or new API paths, you won't need to worry about making changes to your code immediately when a new major or minor (maintenance) release is announced.

**Note**: If you have a mixed environment of different Defenders versions, then use the version of the API that matches the earliest version.

If you use the /v1 APIs, Palo Alto Networks recommends that you consider revising your scripts to target the versioned API endpoints.
If you opt to continue using the v1 API endpoints, adhere to the following guidelines:

- Review the list of v1 endpoints you are using and make sure the corresponding versioned endpoints are available.
- If you are using an API that is only in the /v1 category and does not have a corresponding versioned API, you must review your implementation and update your scripts to ensure that you do not experience a disruption.
- If you are using /v1 endpoints that are unsupported and not versioned, you can submit a feature request.
 Your request to support the endpoint will be considered when planning the product roadmap for future releases.

## Supported Endpoints

The API Reference documentation includes the supported endpoints only.
You can download a copy of the OpenAPI spec file from the Prisma Cloud Compute Console. The spec file lists all available endpoints, including unsupported endpoints.
Use the supported endpoints to ensure stability.
As the unsupported endpoints are not documented for use, they are subject to change, deprecation, or removal without notice.

In the OpenAPI spec file, supported endpoints are tagged as supported.
For example, the `POST /api/vX/authenticate` endpoint is tagged as follows:

```
"tags": [
 "Authenticate",
 "Supported API"
]
```

## Supported Endpoint Categories

Supported endpoints tend to fall into one of the following categories:

- Reporting endpoints
- Config-as-code
- Deployment and config

### Reporting Endpoints

Reporting API calls are the ones used to download the health or scan data such as vulnerabilities/compliance/runtime. 
Access to the underlying data in JSON and CSV formats allows customers to easily access and transform data into business intelligence in the forms that meet their needs. 
The output may be human-readable reports or, in other cases, the reporting data may feed automated decisions and processes.

These are mostly under the **Monitor** section in the Compute Console.

### Config-as-Code

Configuration as code is the formal migration of config between environments, backed by a version control system.
Customers who want to programmatically store and manage the configuration of infrastructure components can automate these components using the same approaches as production code and services.

### Deployment and Config

Deployment and config endpoints are essential to automate the installation of Console, Defenders, as well as any configuration that deals with integrations. 
These are useful to those who base their management of environments on automation, using tools such as Ansible, Puppet, Terraform, etc to define desired configurations.
