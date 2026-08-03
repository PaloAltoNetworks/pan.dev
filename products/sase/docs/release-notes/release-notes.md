---
id: release-notes
title: Release Notes
description: Prisma SASE API Release Notes
hide_title: true
slug: /sase/docs/release-notes/release-notes
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

## August 3rd, 2026

Unified API: 1447 new endpoints available.

### New

- **Allows one to change password (v2.0).** New `POST /sdwan/v2.0/api/accounts/password/change` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/accounts/password/change
  ```

- **Rest operator password (v2.0).** New `POST /sdwan/v2.0/api/accounts/password/reset` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/accounts/password/reset
  ```

- **Verify email after signup (v2.0).** New `POST /sdwan/v2.0/api/accounts/verify` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/accounts/verify
  ```

- **Query active user mappings of tenant (v2.0).** New `POST /sdwan/v2.0/api/activeuserips/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/activeuserips/query
  ```

- **Get basic set of available API versions (v2.0).** New `GET /sdwan/v2.0/api/api_versions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/api_versions
  ```

- **Get all APN Profiles (v2.0).** New `GET /sdwan/v2.0/api/apnprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/apnprofiles
  ```

- **Create an APN Profile (v2.0).** New `POST /sdwan/v2.0/api/apnprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/apnprofiles
  ```

- **Queries db for limit number of apn profiles that match query params. (v2.0).** New `POST /sdwan/v2.0/api/apnprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/apnprofiles/query
  ```

- **Delete an APN Profile (v2.0).** New `DELETE /sdwan/v2.0/api/apnprofiles/{apnprofile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/apnprofiles/{apnprofile_id}
  ```

- **Get APN Profile (v2.0).** New `GET /sdwan/v2.0/api/apnprofiles/{apnprofile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/apnprofiles/{apnprofile_id}
  ```

- **Update an APN Profile (v2.0).** New `PUT /sdwan/v2.0/api/apnprofiles/{apnprofile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/apnprofiles/{apnprofile_id}
  ```

- **Get system application definitions (v2.0).** New `GET /sdwan/v2.0/api/appdefs_version/{vid}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/appdefs_version/{vid}
  ```

- **Change standard apps version (v2.0).** New `PUT /sdwan/v2.0/api/appdefs_version/{vid}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/appdefs_version/{vid}
  ```

- **Get audit logs for given tenant (v2.0).** New `GET /sdwan/v2.0/api/auditlog` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/auditlog
  ```

- **Get audit logs for given tenant as per specified query filters (v2.0).** New `POST /sdwan/v2.0/api/auditlog/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/auditlog/query
  ```

- **Get audit logs for given tenant and audit log id (v2.0).** New `GET /sdwan/v2.0/api/auditlog/{auditlog_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/auditlog/{auditlog_id}
  ```

- **Get a list of tenant base permissions (v2.0).** New `GET /sdwan/v2.0/api/base_permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/base_permissions
  ```

- **Get a list of tenant base roles (v2.0).** New `GET /sdwan/v2.0/api/base_roles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/base_roles
  ```

- **Queries the BGP Peers Status (v2.0).** New `POST /sdwan/v2.0/api/bgppeers/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/bgppeers/status/query
  ```

- **Create site profile (v2.0).** New `POST /sdwan/v2.0/api/bulkconfigurations/sitetemplates` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates
  ```

- **Get all site profile (v2.0).** New `POST /sdwan/v2.0/api/bulkconfigurations/sitetemplates/deployments/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/deployments/query
  ```

- **Get all site profile (v2.0).** New `POST /sdwan/v2.0/api/bulkconfigurations/sitetemplates/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/query
  ```

- **delete site profile (v2.0).** New `DELETE /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}
  ```

- **Get site profile (v2.0).** New `GET /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}
  ```

- **update site profile (v2.0).** New `PUT /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}
  ```

- **Clone Site Profile (v2.0).** New `POST /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/clone` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/clone
  ```

- **Deploy site (v2.0).** New `POST /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/deployments` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/deployments
  ```

- **Delete a deployment (v2.0).** New `DELETE /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}
  ```

- **Deployment detail of a site (v2.0).** New `GET /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}
  ```

- **Deployment Status of a site (v2.0).** New `GET /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}/status
  ```

- **Status of profile (v2.0).** New `GET /sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/bulkconfigurations/sitetemplates/{site_template_id}/status
  ```

- **Query the cellular module firmware upgrade status of all tenant elements (v2.0).** New `POST /sdwan/v2.0/api/cellular_module_firmware/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/cellular_module_firmware/status/query
  ```

- **Get existing element cellular module images (v2.0).** New `GET /sdwan/v2.0/api/cellular_module_images` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/cellular_module_images
  ```

- **Get information about a element cellular module image (v2.0).** New `GET /sdwan/v2.0/api/cellular_module_images/{image_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/cellular_module_images/{image_id}
  ```

- **Create a Revoked Cellular Image (v2.0).** New `POST /sdwan/v2.0/api/cellular_module_revoked_images` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/cellular_module_revoked_images
  ```

- **Queries db for limit number of cellular modules that match query params. (v2.0).** New `POST /sdwan/v2.0/api/cellular_modules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/cellular_modules/query
  ```

- **Get all tenant certificates V2.0 (v2.0).** New `GET /sdwan/v2.0/api/certificates` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/certificates
  ```

- **Create or import new certificate v2.0 (v2.0).** New `POST /sdwan/v2.0/api/certificates` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/certificates
  ```

- **Retrieve all revoked CICs for a tenant (v2.0).** New `GET /sdwan/v2.0/api/certificates/revoked` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/certificates/revoked
  ```

- **Delete a certificate of tenant v2.0 (v2.0).** New `DELETE /sdwan/v2.0/api/certificates/{certificate_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/certificates/{certificate_id}
  ```

- **Get a specific certificate of tenant v2.0 (v2.0).** New `GET /sdwan/v2.0/api/certificates/{certificate_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/certificates/{certificate_id}
  ```

- **Update certificate v2.0 (v2.0).** New `PUT /sdwan/v2.0/api/certificates/{certificate_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/certificates/{certificate_id}
  ```

- **Get esp tenant clients details for tenant id (v2.0).** New `GET /sdwan/v2.0/api/clients` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/clients
  ```

- **Get esp tenant clients details for tenant id (v2.0).** New `POST /sdwan/v2.0/api/clients/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/clients/query
  ```

- **Get a list of client base roles (v2.0).** New `GET /sdwan/v2.0/api/clients/{client_id}/base_roles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/clients/{client_id}/base_roles
  ```

- **Login api for esp client (v2.0).** New `POST /sdwan/v2.0/api/clients/{client_id}/login` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/clients/{client_id}/login
  ```

- **Get a list of client custom roles (v2.0).** New `GET /sdwan/v2.0/api/clients/{client_id}/roles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/clients/{client_id}/roles
  ```

- **Get a client custom role (v2.0).** New `GET /sdwan/v2.0/api/clients/{client_id}/roles/{role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/clients/{client_id}/roles/{role_id}
  ```

- **Queries db for Dem site config that match query params. (v2.0).** New `POST /sdwan/v2.0/api/demsiteconfigs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/demsiteconfigs/query
  ```

- **Query ADEM status (v2.0).** New `POST /sdwan/v2.0/api/demstatus/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/demstatus/query
  ```

- **Get device id profiles (v2.0).** New `POST /sdwan/v2.0/api/deviceidconfigs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/deviceidconfigs/query
  ```

- **Get device id profiles (v2.0).** New `GET /sdwan/v2.0/api/deviceidprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/deviceidprofiles
  ```

- **Create device id profile (v2.0).** New `POST /sdwan/v2.0/api/deviceidprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/deviceidprofiles
  ```

- **Associate device id profile in bulk (v2.0).** New `POST /sdwan/v2.0/api/deviceidprofiles/{deviceid_profile_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/deviceidprofiles/{deviceid_profile_id}/operations
  ```

- **Delete device Id profile configuration (v2.0).** New `DELETE /sdwan/v2.0/api/deviceidprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/deviceidprofiles/{profile_id}
  ```

- **Get device id profile (v2.0).** New `GET /sdwan/v2.0/api/deviceidprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/deviceidprofiles/{profile_id}
  ```

- **Update device Id profile configurations (v2.0).** New `PUT /sdwan/v2.0/api/deviceidprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/deviceidprofiles/{profile_id}
  ```

- **Get directory service details of tenant (v2.0).** New `GET /sdwan/v2.0/api/directoryservices` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryservices
  ```

- **Create Directory Service (v2.0).** New `POST /sdwan/v2.0/api/directoryservices` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryservices
  ```

- **Force delta sync. (v2.0).** New `POST /sdwan/v2.0/api/directoryservices/deltasync` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryservices/deltasync
  ```

- **Get Domain Status. (v2.0).** New `GET /sdwan/v2.0/api/directoryservices/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryservices/status
  ```

- **Force full sync. (v2.0).** New `POST /sdwan/v2.0/api/directoryservices/sync` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryservices/sync
  ```

- **Delete Directory Service (v2.0).** New `DELETE /sdwan/v2.0/api/directoryservices/{directory_service_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryservices/{directory_service_id}
  ```

- **Update Directory Service (v2.0).** New `PUT /sdwan/v2.0/api/directoryservices/{directory_service_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryservices/{directory_service_id}
  ```

- **Get DomainStatus By Domain And Type. (v2.0).** New `GET /sdwan/v2.0/api/directoryservices/{directory_service_id}/domainstatus/{domain_status_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryservices/{directory_service_id}/domainstatus/{domain_status_id}
  ```

- **Get users or groups of tenant (v2.0).** New `GET /sdwan/v2.0/api/directoryusergroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryusergroups
  ```

- **Query users or groups. (v2.0).** New `POST /sdwan/v2.0/api/directoryusergroups/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryusergroups/query
  ```

- **Get a specific user or group of tenant (v2.0).** New `GET /sdwan/v2.0/api/directoryusergroups/{user_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryusergroups/{user_group_id}
  ```

- **Get users of tenant (v2.0).** New `GET /sdwan/v2.0/api/directoryusers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryusers
  ```

- **Query users. (v2.0).** New `POST /sdwan/v2.0/api/directoryusers/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryusers/query
  ```

- **Get a specific user or of tenant (v2.0).** New `GET /sdwan/v2.0/api/directoryusers/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/directoryusers/{user_id}
  ```

- **Get all the DNSCategories that are supported, this is a global resource (v2.0).** New `GET /sdwan/v2.0/api/dnssecuritycategories` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnssecuritycategories
  ```

- **Get specific DNSCategory that are supported, this is a global resource (v2.0).** New `GET /sdwan/v2.0/api/dnssecuritycategories/{dns_category_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnssecuritycategories/{dns_category_id}
  ```

- **Get all DNSSec profiles for a tenant (v2.0).** New `GET /sdwan/v2.0/api/dnssecurityprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnssecurityprofiles
  ```

- **Get specific DNSSec profile for a tenant based on ID (v2.0).** New `GET /sdwan/v2.0/api/dnssecurityprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnssecurityprofiles/{profile_id}
  ```

- **Read all DNS service profiles (v2.0).** New `GET /sdwan/v2.0/api/dnsserviceprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceprofiles
  ```

- **Create a new DNS service profile (v2.0).** New `POST /sdwan/v2.0/api/dnsserviceprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceprofiles
  ```

- **Query DNS service profile based on parameters (v2.0).** New `POST /sdwan/v2.0/api/dnsserviceprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceprofiles/query
  ```

- **Delete a DNS service profile (v2.0).** New `DELETE /sdwan/v2.0/api/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Get a DNS service profile (v2.0).** New `GET /sdwan/v2.0/api/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Update a DNS service profile (v2.0).** New `PUT /sdwan/v2.0/api/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Read all DNS service roles (v2.0).** New `GET /sdwan/v2.0/api/dnsserviceroles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceroles
  ```

- **Create a new DNS service role (v2.0).** New `POST /sdwan/v2.0/api/dnsserviceroles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceroles
  ```

- **Query DNS service role based on parameters (v2.0).** New `POST /sdwan/v2.0/api/dnsserviceroles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceroles/query
  ```

- **Delete a DNS service role (v2.0).** New `DELETE /sdwan/v2.0/api/dnsserviceroles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceroles/{dnsservice_role_id}
  ```

- **Get a DNS service role (v2.0).** New `GET /sdwan/v2.0/api/dnsserviceroles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceroles/{dnsservice_role_id}
  ```

- **Update a DNS service role (v2.0).** New `PUT /sdwan/v2.0/api/dnsserviceroles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsserviceroles/{dnsservice_role_id}
  ```

- **Query DNS service config based on parameters (v2.0).** New `POST /sdwan/v2.0/api/dnsservices/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/dnsservices/query
  ```

- **Get all element passage config from NB (v2.0).** New `GET /sdwan/v2.0/api/elementpassageconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementpassageconfigs
  ```

- **Get element config/state info for queried elements from NB (v2.0).** New `POST /sdwan/v2.0/api/elements/bulk_config_state/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/bulk_config_state/query
  ```

- **Query software state for all tenants elements (v2.0).** New `POST /sdwan/v2.0/api/elements/software/state/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/software/state/query
  ```

- **Get all cellular modules (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/cellular_modules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules
  ```

- **Get cellular module (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}
  ```

- **Update cellular module (v2.0).** New `PUT /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}
  ```

- **Get cellular module firmware configuration (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware
  ```

- **Update cellular module firmware configuration (v2.0).** New `PUT /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware
  ```

- **Get cellular module firmware configuration status (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware/status
  ```

- **Get all cellular modules sim security info (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security
  ```

- **Get cellular module sim security info (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security/{sim_security_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security/{sim_security_id}
  ```

- **Update cellular module (v2.0).** New `PUT /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security/{sim_security_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security/{sim_security_id}
  ```

- **Get cellular module status (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/cellular_modules/{cellular_module_id}/status
  ```

- **Start CIC renewal process for an element device (v2.0).** New `POST /sdwan/v2.0/api/elements/{element_id}/certificate_operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/certificate_operations
  ```

- **Get specific element's Access State (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/elementaccessstates` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/elementaccessstates
  ```

- **Get element passage configuration from NB (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/elementpassageconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/elementpassageconfigs
  ```

- **Deletes element passage configuration from NB (v2.0).** New `DELETE /sdwan/v2.0/api/elements/{element_id}/elementpassageconfigs/{passage_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/elementpassageconfigs/{passage_config_id}
  ```

- **Get a list of all the hardware bypasses in element (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/hardwarebypass` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/hardwarebypass
  ```

- **Get all interface authentication status for an element (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/interface_authentication/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/interface_authentication/status
  ```

- **Get all lldp neighbors status for an element (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/lldp_neighbors/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/lldp_neighbors/status
  ```

- **Get mac addresses status for a tenant (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/mac_addresses/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/mac_addresses/status
  ```

- **Get all element NTP (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/ntp` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/ntp
  ```

- **Get specific element NTP (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/ntp/{ntp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/ntp/{ntp_id}
  ```

- **Update an existing element NTP. (v2.0).** New `PUT /sdwan/v2.0/api/elements/{element_id}/ntp/{ntp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/ntp/{ntp_id}
  ```

- **Get specific element NTP (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/ntp/{ntp_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/ntp/{ntp_id}/status
  ```

- **Handle operations on element. (v2.0).** New `POST /sdwan/v2.0/api/elements/{element_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/operations
  ```

- **Verify Challenge phrase and generate response phrase (v2.0).** New `POST /sdwan/v2.0/api/elements/{element_id}/otpaccess` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/otpaccess
  ```

- **Get element passages from NB (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/passages` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/passages
  ```

- **Delete passage from NB (v2.0).** New `DELETE /sdwan/v2.0/api/elements/{element_id}/passages/{passage_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/passages/{passage_id}
  ```

- **Get passage from NB (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/passages/{passage_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/passages/{passage_id}
  ```

- **Get all radius configuration of an element in a tenant (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/radii` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/radii
  ```

- **Used to create element radius (v2.0).** New `POST /sdwan/v2.0/api/elements/{element_id}/radii` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/radii
  ```

- **Delete radius configuration in an element (v2.0).** New `DELETE /sdwan/v2.0/api/elements/{element_id}/radii/{radius_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/radii/{radius_id}
  ```

- **Get radius configuration of a element (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/radii/{radius_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/radii/{radius_id}
  ```

- **Used for element radius configuration updates (v2.0).** New `PUT /sdwan/v2.0/api/elements/{element_id}/radii/{radius_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/radii/{radius_id}
  ```

- **Get specific radius configuration status for a radius config corresponding to a tenant and element (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/radii/{radius_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/radii/{radius_id}/status
  ```

- **Get the software upgrade configuration of an element (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/software/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/software/state
  ```

- **Upgrade an element (v2.0).** New `PUT /sdwan/v2.0/api/elements/{element_id}/software/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/software/state
  ```

- **Get image status (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/software/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/software/status
  ```

- **Get element state (v2.0).** New `GET /sdwan/v2.0/api/elements/{element_id}/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/state
  ```

- **Update element state (v2.0).** New `PUT /sdwan/v2.0/api/elements/{element_id}/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/state
  ```

- **Create a new System report using support_operations API (v2.0).** New `POST /sdwan/v2.0/api/elements/{element_id}/support_operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/support_operations
  ```

- **Delete Active Passage (v2.0).** New `DELETE /sdwan/v2.0/api/elements/{element_id}/toolkitsessions/{session_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/elements/{element_id}/toolkitsessions/{session_id}
  ```

- **Query element security zones. (v2.0).** New `POST /sdwan/v2.0/api/elementsecurityzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementsecurityzones/query
  ```

- **Queries db for limit number of element shells that match query params. (v2.0).** New `POST /sdwan/v2.0/api/elementshells/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementshells/query
  ```

- **Get All Element System Limit Profiles (v2.0).** New `GET /sdwan/v2.0/api/elementsystemlimitprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementsystemlimitprofiles
  ```

- **Create a new Element System Limit Profile (v2.0).** New `POST /sdwan/v2.0/api/elementsystemlimitprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementsystemlimitprofiles
  ```

- **Query Element System Limit Profiles (v2.0).** New `POST /sdwan/v2.0/api/elementsystemlimitprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementsystemlimitprofiles/query
  ```

- **Delete Element System Limit Profile (v2.0).** New `DELETE /sdwan/v2.0/api/elementsystemlimitprofiles/{element_system_limit_profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementsystemlimitprofiles/{element_system_limit_profile_id}
  ```

- **Get Element System Limit Profile (v2.0).** New `GET /sdwan/v2.0/api/elementsystemlimitprofiles/{element_system_limit_profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementsystemlimitprofiles/{element_system_limit_profile_id}
  ```

- **Update Element System Limit Profile (v2.0).** New `PUT /sdwan/v2.0/api/elementsystemlimitprofiles/{element_system_limit_profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementsystemlimitprofiles/{element_system_limit_profile_id}
  ```

- **Get all element User (v2.0).** New `GET /sdwan/v2.0/api/elementusers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers
  ```

- **Create Element User (v2.0).** New `POST /sdwan/v2.0/api/elementusers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers
  ```

- **Delete element user (v2.0).** New `DELETE /sdwan/v2.0/api/elementusers/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}
  ```

- **Get specific element User (v2.0).** New `GET /sdwan/v2.0/api/elementusers/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}
  ```

- **Update an existing element user. (v2.0).** New `PUT /sdwan/v2.0/api/elementusers/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}
  ```

- **Get all accesses for a particular user (v2.0).** New `GET /sdwan/v2.0/api/elementusers/{user_id}/access` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}/access
  ```

- **Grant Specific role to Element user on specific element (v2.0).** New `POST /sdwan/v2.0/api/elementusers/{user_id}/access` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}/access
  ```

- **Delete element user Access (v2.0).** New `DELETE /sdwan/v2.0/api/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}/access/{access_id}
  ```

- **Get specific element User access (v2.0).** New `GET /sdwan/v2.0/api/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}/access/{access_id}
  ```

- **Update an existing element user access. (v2.0).** New `PUT /sdwan/v2.0/api/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}/access/{access_id}
  ```

- **Get element user password (v2.0).** New `GET /sdwan/v2.0/api/elementusers/{user_id}/password` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/elementusers/{user_id}/password
  ```

- **GET the tenant enterprise prefix set (v2.0).** New `GET /sdwan/v2.0/api/enterpriseprefixset` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/enterpriseprefixset
  ```

- **Update the tenant enterprise prefix set (v2.0).** New `PUT /sdwan/v2.0/api/enterpriseprefixset` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/enterpriseprefixset
  ```

- **Retrieve all CICs for a particular element (v2.0).** New `GET /sdwan/v2.0/api/entities/{element_id}/certificates` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/entities/{element_id}/certificates
  ```

- **Get esp tenant details for tenant id (v2.0).** New `GET /sdwan/v2.0/api/esp` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/esp
  ```

- **Queries db for limit number of event correlation policyrules that match query params. (v2.0).** New `POST /sdwan/v2.0/api/eventcorrelationpolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicyrules/query
  ```

- **Get all event correlation policysets (v2.0).** New `GET /sdwan/v2.0/api/eventcorrelationpolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets
  ```

- **Queries db for limit number of event correlation policysets that match query params. (v2.0).** New `POST /sdwan/v2.0/api/eventcorrelationpolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets
  ```

- **Queries db for limit number of event correlation policysets that match query params. (v2.0).** New `POST /sdwan/v2.0/api/eventcorrelationpolicysets/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/query
  ```

- **Delete specific event correlation policyset (v2.0).** New `DELETE /sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}
  ```

- **Get event correlation policyset (v2.0).** New `GET /sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}
  ```

- **Update event correlation policyset configuration (v2.0).** New `PUT /sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}
  ```

- **Get all event correlation policyrules (v2.0).** New `GET /sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules
  ```

- **Create event correlation policyrule configuration (v2.0).** New `POST /sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules
  ```

- **Delete specific event correlation policy rule (v2.0).** New `DELETE /sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Get event correlation policy rule (v2.0).** New `GET /sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Update event correlation policyrule configuration (v2.0).** New `PUT /sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Get all extensions from NB (v2.0).** New `GET /sdwan/v2.0/api/extensions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/extensions
  ```

- **Queries db for limit number of tenant extensions that match the query params. (v2.0).** New `POST /sdwan/v2.0/api/extensions/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/extensions/query
  ```

- **Get extension from NB (v2.0).** New `GET /sdwan/v2.0/api/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/extensions/{extension_id}
  ```

- **Retrieve an existing CertificateAuthorityConfigDO object by tenant ID only (v2.0).** New `GET /sdwan/v2.0/api/externalcaconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/externalcaconfigs
  ```

- **Create a new certificate authority configuration (v2.0).** New `POST /sdwan/v2.0/api/externalcaconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/externalcaconfigs
  ```

- **Delete a existing CertificateAuthorityConfigDO object by tenant ID and ID (v2.0).** New `DELETE /sdwan/v2.0/api/externalcaconfigs/{externalcaconfig_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/externalcaconfigs/{externalcaconfig_id}
  ```

- **Retrieve an existing CertificateAuthorityConfigDO object by tenant ID and ID (v2.0).** New `GET /sdwan/v2.0/api/externalcaconfigs/{externalcaconfig_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/externalcaconfigs/{externalcaconfig_id}
  ```

- **Update an existing certificate authority configuration (v2.0).** New `PUT /sdwan/v2.0/api/externalcaconfigs/{externalcaconfig_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/externalcaconfigs/{externalcaconfig_id}
  ```

- **Get global prefix filters. (v2.0).** New `GET /sdwan/v2.0/api/globalprefixfilters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/globalprefixfilters
  ```

- **Create a new global prefix filter. (v2.0).** New `POST /sdwan/v2.0/api/globalprefixfilters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/globalprefixfilters
  ```

- **Query DB for the list of params. (v2.0).** New `POST /sdwan/v2.0/api/globalprefixfilters/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/globalprefixfilters/query
  ```

- **Delete a global prefix filter. (v2.0).** New `DELETE /sdwan/v2.0/api/globalprefixfilters/{filter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/globalprefixfilters/{filter_id}
  ```

- **Get a specific global prefix filter. (v2.0).** New `GET /sdwan/v2.0/api/globalprefixfilters/{filter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/globalprefixfilters/{filter_id}
  ```

- **Update a new global prefix filter. (v2.0).** New `PUT /sdwan/v2.0/api/globalprefixfilters/{filter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/globalprefixfilters/{filter_id}
  ```

- **Get HubServiceEndpoints of a tenant (v2.0).** New `GET /sdwan/v2.0/api/hubserviceendpoints` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/hubserviceendpoints
  ```

- **Query incident objects additional data. (v2.0).** New `POST /sdwan/v2.0/api/incidentresources/pquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/incidentresources/pquery
  ```

- **Query incident objects additional data. (v2.0).** New `POST /sdwan/v2.0/api/incidentsettings/pquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/incidentsettings/pquery
  ```

- **Query interface status (v2.0).** New `POST /sdwan/v2.0/api/interfaces/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/interfaces/status/query
  ```

- **Query the Active Device Profiles (v2.0).** New `POST /sdwan/v2.0/api/iotdevicemappings/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/iotdevicemappings/query
  ```

- **Get the active ip mappings (v2.0).** New `GET /sdwan/v2.0/api/iotdevicemappings/{mapping_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/iotdevicemappings/{mapping_id}
  ```

- **Get all the XML Ingested data (v2.0).** New `GET /sdwan/v2.0/api/iotdictionary` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/iotdictionary
  ```

- **Query the Device Dictionary (v2.0).** New `POST /sdwan/v2.0/api/iotdictionary/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/iotdictionary/query
  ```

- **Get specific device dictionary (v2.0).** New `GET /sdwan/v2.0/api/iotdictionary/{device_dictionary_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/iotdictionary/{device_dictionary_id}
  ```

- **Get the confidence score of the mappings stored in the IOT portal (v2.0).** New `GET /sdwan/v2.0/api/iotservices` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/iotservices
  ```

- **POST the confidence score of the mappings stored in the IOT portal (v2.0).** New `POST /sdwan/v2.0/api/iotservices` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/iotservices
  ```

- **PUT the confidence score of the mappings stored in the IOT portal (v2.0).** New `PUT /sdwan/v2.0/api/iotservices/{iot_service_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/iotservices/{iot_service_id}
  ```

- **Queries db for limit number of ipfix configs that match query params. (v2.0).** New `POST /sdwan/v2.0/api/ipfix/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfix/query
  ```

- **Get all IPFix collector context (v2.0).** New `GET /sdwan/v2.0/api/ipfixcollectorcontexts` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixcollectorcontexts
  ```

- **Create a IPFix Collector context (v2.0).** New `POST /sdwan/v2.0/api/ipfixcollectorcontexts` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixcollectorcontexts
  ```

- **Queries db for limit number of ipfix collector context that match query params. (v2.0).** New `POST /sdwan/v2.0/api/ipfixcollectorcontexts/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixcollectorcontexts/query
  ```

- **Delete a IPFix collector context (v2.0).** New `DELETE /sdwan/v2.0/api/ipfixcollectorcontexts/{context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixcollectorcontexts/{context_id}
  ```

- **Get IPFix collector context (v2.0).** New `GET /sdwan/v2.0/api/ipfixcollectorcontexts/{context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixcollectorcontexts/{context_id}
  ```

- **Update a IPFix Collector context (v2.0).** New `PUT /sdwan/v2.0/api/ipfixcollectorcontexts/{context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixcollectorcontexts/{context_id}
  ```

- **Get all IPFix filter context (v2.0).** New `GET /sdwan/v2.0/api/ipfixfiltercontexts` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixfiltercontexts
  ```

- **Create a IPFix Filter context (v2.0).** New `POST /sdwan/v2.0/api/ipfixfiltercontexts` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixfiltercontexts
  ```

- **Queries db for limit number of ipfix filter context that match query params. (v2.0).** New `POST /sdwan/v2.0/api/ipfixfiltercontexts/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixfiltercontexts/query
  ```

- **Delete a IPFix filter context (v2.0).** New `DELETE /sdwan/v2.0/api/ipfixfiltercontexts/{context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixfiltercontexts/{context_id}
  ```

- **Get IPFix filter context (v2.0).** New `GET /sdwan/v2.0/api/ipfixfiltercontexts/{context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixfiltercontexts/{context_id}
  ```

- **Update a IPFix Filter context (v2.0).** New `PUT /sdwan/v2.0/api/ipfixfiltercontexts/{context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixfiltercontexts/{context_id}
  ```

- **Get all IPFix global prefix (v2.0).** New `GET /sdwan/v2.0/api/ipfixglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixglobalprefixes
  ```

- **Create a IPFix Global prefix (v2.0).** New `POST /sdwan/v2.0/api/ipfixglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixglobalprefixes
  ```

- **Delete a IPFix global prefix (v2.0).** New `DELETE /sdwan/v2.0/api/ipfixglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixglobalprefixes/{prefix_id}
  ```

- **Get IPFix global prefix (v2.0).** New `GET /sdwan/v2.0/api/ipfixglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixglobalprefixes/{prefix_id}
  ```

- **Update a IPFix Global prefix (v2.0).** New `PUT /sdwan/v2.0/api/ipfixglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixglobalprefixes/{prefix_id}
  ```

- **Get all IPFix local prefix (v2.0).** New `GET /sdwan/v2.0/api/ipfixlocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixlocalprefixes
  ```

- **Create a IPFix local prefix (v2.0).** New `POST /sdwan/v2.0/api/ipfixlocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixlocalprefixes
  ```

- **Queries db for limit number of ipfix site prefix association that match query (v2.0).** New `POST /sdwan/v2.0/api/ipfixlocalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixlocalprefixes/query
  ```

- **Delete a IPFix local prefix (v2.0).** New `DELETE /sdwan/v2.0/api/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixlocalprefixes/{prefix_id}
  ```

- **Get IPFix local prefix (v2.0).** New `GET /sdwan/v2.0/api/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixlocalprefixes/{prefix_id}
  ```

- **Update a IPFix local prefix (v2.0).** New `PUT /sdwan/v2.0/api/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixlocalprefixes/{prefix_id}
  ```

- **Get all IPFix Profiles (v2.0).** New `GET /sdwan/v2.0/api/ipfixprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixprofiles
  ```

- **Create a IPFix Profile (v2.0).** New `POST /sdwan/v2.0/api/ipfixprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixprofiles
  ```

- **Queries db for limit number of ipfix profiles that match query params. (v2.0).** New `POST /sdwan/v2.0/api/ipfixprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixprofiles/query
  ```

- **Delete IPFix Profile (v2.0).** New `DELETE /sdwan/v2.0/api/ipfixprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixprofiles/{profile_id}
  ```

- **Get IPFix Profile (v2.0).** New `GET /sdwan/v2.0/api/ipfixprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixprofiles/{profile_id}
  ```

- **Update a IPFix Profile (v2.0).** New `PUT /sdwan/v2.0/api/ipfixprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixprofiles/{profile_id}
  ```

- **Get all IPFix templates (v2.0).** New `GET /sdwan/v2.0/api/ipfixtemplates` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixtemplates
  ```

- **Create a IPFix template (v2.0).** New `POST /sdwan/v2.0/api/ipfixtemplates` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixtemplates
  ```

- **Queries db for limit number of ipfix templates that match query params. (v2.0).** New `POST /sdwan/v2.0/api/ipfixtemplates/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixtemplates/query
  ```

- **Delete a IPFix template (v2.0).** New `DELETE /sdwan/v2.0/api/ipfixtemplates/{template_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixtemplates/{template_id}
  ```

- **Get IPFix template (v2.0).** New `GET /sdwan/v2.0/api/ipfixtemplates/{template_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixtemplates/{template_id}
  ```

- **Update a IPFix template (v2.0).** New `PUT /sdwan/v2.0/api/ipfixtemplates/{template_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ipfixtemplates/{template_id}
  ```

- **Get all licenses for a tenant (v2.0).** New `GET /sdwan/v2.0/api/licenses` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/licenses
  ```

- **Query license PURCHASE data only across client tenants for MSP (v2.0).** New `POST /sdwan/v2.0/api/licenses_purchase/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/licenses_purchase/rquery
  ```

- **Query license USAGE data only across client tenants for MSP (v2.0).** New `POST /sdwan/v2.0/api/licenses_usage/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/licenses_usage/rquery
  ```

- **Get local prefix filters. (v2.0).** New `GET /sdwan/v2.0/api/localprefixfilters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/localprefixfilters
  ```

- **Create a new local prefix filter. (v2.0).** New `POST /sdwan/v2.0/api/localprefixfilters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/localprefixfilters
  ```

- **Query DB for the list of params. (v2.0).** New `POST /sdwan/v2.0/api/localprefixfilters/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/localprefixfilters/query
  ```

- **Delete a local prefix filter. (v2.0).** New `DELETE /sdwan/v2.0/api/localprefixfilters/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/localprefixfilters/{id}
  ```

- **Get a specific local prefix filter. (v2.0).** New `GET /sdwan/v2.0/api/localprefixfilters/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/localprefixfilters/{id}
  ```

- **Update a new local prefix filter. (v2.0).** New `PUT /sdwan/v2.0/api/localprefixfilters/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/localprefixfilters/{id}
  ```

- **Forgot password API (v2.0).** New `POST /sdwan/v2.0/api/login/password/forgot` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/login/password/forgot
  ```

- **Query Machine Upgrade Config (v2.0).** New `POST /sdwan/v2.0/api/machine_upgrade/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/machine_upgrade/query
  ```

- **Allocate Element Shell to Machine (v2.0).** New `POST /sdwan/v2.0/api/machines/{machine_id}/allocate_to_shell` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/allocate_to_shell
  ```

- **Get all cellular modules (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/cellular_modules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/cellular_modules
  ```

- **Get cellular module (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}
  ```

- **Get cellular module firmware configuration (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware
  ```

- **Update cellular module firmware configuration (v2.0).** New `PUT /sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware
  ```

- **Get cellular module firmware configuration status (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware/status
  ```

- **Get cellular module status (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/cellular_modules/{cellular_module_id}/status
  ```

- **Get all Machine Software (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/software` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/software
  ```

- **Get Machine Software (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/software/{software_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/software/{software_id}
  ```

- **Update Machine Software (v2.0).** New `PUT /sdwan/v2.0/api/machines/{machine_id}/software/{software_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/software/{software_id}
  ```

- **Get all Machine Software Statuses (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/software/{software_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/software/{software_id}/status
  ```

- **Get Machine Software Status (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/software/{software_id}/status/{status_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/software/{software_id}/status/{status_id}
  ```

- **Allocate Element Shell to Machine (v2.0).** New `GET /sdwan/v2.0/api/machines/{machine_id}/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/machines/{machine_id}/state
  ```

- **Query all microsegments for tenant (v2.0).** New `POST /sdwan/v2.0/api/microsegments/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/microsegments/query
  ```

- **Get migration API status (v2.0).** New `GET /sdwan/v2.0/api/migratecbtoezb` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/migratecbtoezb
  ```

- **Trigger migration API (v2.0).** New `POST /sdwan/v2.0/api/migratecbtoezb` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/migratecbtoezb
  ```

- **Queries db for limit number of MSTP Instances that match query params. (v2.0).** New `POST /sdwan/v2.0/api/mstp_instances/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/mstp_instances/query
  ```

- **Query Multicast Dynamic RPs (v2.0).** New `POST /sdwan/v2.0/api/multicastdynamicrps/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastdynamicrps/query
  ```

- **Query Multicast IGMP group membership information (v2.0).** New `POST /sdwan/v2.0/api/multicastigmpmemberships/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastigmpmemberships/query
  ```

- **Get multicast peer groups (v2.0).** New `GET /sdwan/v2.0/api/multicastpeergroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastpeergroups
  ```

- **Create multicast peer group (v2.0).** New `POST /sdwan/v2.0/api/multicastpeergroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastpeergroups
  ```

- **Delete multicast peer group (v2.0).** New `DELETE /sdwan/v2.0/api/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastpeergroups/{peer_group_id}
  ```

- **Get multicast peer group (v2.0).** New `GET /sdwan/v2.0/api/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastpeergroups/{peer_group_id}
  ```

- **Update multicast peer group (v2.0).** New `PUT /sdwan/v2.0/api/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastpeergroups/{peer_group_id}
  ```

- **Query Multicast route table (v2.0).** New `POST /sdwan/v2.0/api/multicastroutes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastroutes/query
  ```

- **Query Multicast RP config (v2.0).** New `POST /sdwan/v2.0/api/multicastrps/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastrps/query
  ```

- **Query Multicast status information (v2.0).** New `POST /sdwan/v2.0/api/multicaststatus/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicaststatus/query
  ```

- **Query Multicast WAN status (v2.0).** New `POST /sdwan/v2.0/api/multicastwanstatus/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/multicastwanstatus/query
  ```

- **Get all Global NAT prefixes. (v2.0).** New `GET /sdwan/v2.0/api/natglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natglobalprefixes
  ```

- **Create a new NAT global prefix. (v2.0).** New `POST /sdwan/v2.0/api/natglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natglobalprefixes
  ```

- **Query Global Prefixes. (v2.0).** New `POST /sdwan/v2.0/api/natglobalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natglobalprefixes/query
  ```

- **Delete a NAT Global Prefix. (v2.0).** New `DELETE /sdwan/v2.0/api/natglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/natglobalprefixes/{prefix_id}
  ```

- **Get a specific NAT global prefix. (v2.0).** New `GET /sdwan/v2.0/api/natglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natglobalprefixes/{prefix_id}
  ```

- **Update an existing NAT prefix. (v2.0).** New `PUT /sdwan/v2.0/api/natglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/natglobalprefixes/{prefix_id}
  ```

- **Get NAT local prefixes. (v2.0).** New `GET /sdwan/v2.0/api/natlocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natlocalprefixes
  ```

- **Create a new NAT local prefix. (v2.0).** New `POST /sdwan/v2.0/api/natlocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natlocalprefixes
  ```

- **Query site local prefixes. (v2.0).** New `POST /sdwan/v2.0/api/natlocalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natlocalprefixes/query
  ```

- **Delete a NAT local prefix. (v2.0).** New `DELETE /sdwan/v2.0/api/natlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/natlocalprefixes/{prefix_id}
  ```

- **Get a specific NAT local prefix. (v2.0).** New `GET /sdwan/v2.0/api/natlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natlocalprefixes/{prefix_id}
  ```

- **Update a  NAT local prefix. (v2.0).** New `PUT /sdwan/v2.0/api/natlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/natlocalprefixes/{prefix_id}
  ```

- **Get NAT Policy Pools. (v2.0).** New `GET /sdwan/v2.0/api/natpolicypools` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicypools
  ```

- **Create a new NATPolicy Pool. (v2.0).** New `POST /sdwan/v2.0/api/natpolicypools` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicypools
  ```

- **Query NAT policy pools. (v2.0).** New `POST /sdwan/v2.0/api/natpolicypools/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicypools/query
  ```

- **Delete a NAT Policy Pool. (v2.0).** New `DELETE /sdwan/v2.0/api/natpolicypools/{natpolicy_pool_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicypools/{natpolicy_pool_id}
  ```

- **Get a specific NAT Policy pool. (v2.0).** New `GET /sdwan/v2.0/api/natpolicypools/{natpolicy_pool_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicypools/{natpolicy_pool_id}
  ```

- **Update a  NAT Policy Pool. (v2.0).** New `PUT /sdwan/v2.0/api/natpolicypools/{natpolicy_pool_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicypools/{natpolicy_pool_id}
  ```

- **Query NAT policy rules. (v2.0).** New `POST /sdwan/v2.0/api/natpolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicyrules/query
  ```

- **Get all NAT policy sets of tenant. (v2.0).** New `GET /sdwan/v2.0/api/natpolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets
  ```

- **Create a new NAT Policy Set (v2.0).** New `POST /sdwan/v2.0/api/natpolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets
  ```

- **Query policy sets. (v2.0).** New `POST /sdwan/v2.0/api/natpolicysets/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/query
  ```

- **Delete NAT policy set. (v2.0).** New `DELETE /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}
  ```

- **Get a specific NAT policy set of tenant. (v2.0).** New `GET /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}
  ```

- **Update NAT policy set. (v2.0).** New `PUT /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}
  ```

- **Get policy rules of policy set (v2.0).** New `GET /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules
  ```

- **Create a new NAT Policy Rule (v2.0).** New `POST /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules
  ```

- **Delete NAT policy rule of tenant. (v2.0).** New `DELETE /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}
  ```

- **Get a specific NAT policy rule of tenant (v2.0).** New `GET /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}
  ```

- **Update policy rule of tenant. (v2.0).** New `PUT /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}
  ```

- **Get a specific NAT policy set status of tenant. (v2.0).** New `GET /sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysets/{nat_policy_set_id}/status
  ```

- **Get all NAT policy Set stacks of tenant. (v2.0).** New `GET /sdwan/v2.0/api/natpolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysetstacks
  ```

- **Create a new NATPolicySet Stack (v2.0).** New `POST /sdwan/v2.0/api/natpolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysetstacks
  ```

- **Query policyset stacks. (v2.0).** New `POST /sdwan/v2.0/api/natpolicysetstacks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysetstacks/query
  ```

- **Delete NAT Policy Set Stack. (v2.0).** New `DELETE /sdwan/v2.0/api/natpolicysetstacks/{natpolicy_set_stack_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysetstacks/{natpolicy_set_stack_id}
  ```

- **Get a specific NAT policy set stack of tenant. (v2.0).** New `GET /sdwan/v2.0/api/natpolicysetstacks/{natpolicy_set_stack_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysetstacks/{natpolicy_set_stack_id}
  ```

- **Update NAT Policy Set Stack. (v2.0).** New `PUT /sdwan/v2.0/api/natpolicysetstacks/{natpolicy_set_stack_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/natpolicysetstacks/{natpolicy_set_stack_id}
  ```

- **Get Nat Policy Zones. (v2.0).** New `GET /sdwan/v2.0/api/natzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natzones
  ```

- **Create a Nat Policy Zone. (v2.0).** New `POST /sdwan/v2.0/api/natzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natzones
  ```

- **Query NAT policy zones. (v2.0).** New `POST /sdwan/v2.0/api/natzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/natzones/query
  ```

- **Delete a Nat Policy Zone. (v2.0).** New `DELETE /sdwan/v2.0/api/natzones/{nat_policy_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/natzones/{nat_policy_zone_id}
  ```

- **Get a specific Nat Policy Zone. (v2.0).** New `GET /sdwan/v2.0/api/natzones/{nat_policy_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/natzones/{nat_policy_zone_id}
  ```

- **Update a Nat Policy Zone. (v2.0).** New `PUT /sdwan/v2.0/api/natzones/{nat_policy_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/natzones/{nat_policy_zone_id}
  ```

- **Get LAN segments (v2.0).** New `GET /sdwan/v2.0/api/networkcontexts` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkcontexts
  ```

- **Create a new LAN segment (v2.0).** New `POST /sdwan/v2.0/api/networkcontexts` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkcontexts
  ```

- **Queries db for limit number of network contexts that match query params. (v2.0).** New `POST /sdwan/v2.0/api/networkcontexts/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkcontexts/query
  ```

- **Delete LAN segment (v2.0).** New `DELETE /sdwan/v2.0/api/networkcontexts/{network_context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkcontexts/{network_context_id}
  ```

- **Get LAN segment (v2.0).** New `GET /sdwan/v2.0/api/networkcontexts/{network_context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkcontexts/{network_context_id}
  ```

- **Update LAN segment (v2.0).** New `PUT /sdwan/v2.0/api/networkcontexts/{network_context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkcontexts/{network_context_id}
  ```

- **Get all Network policy global prefixes. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicyglobalprefixes
  ```

- **Create a new global prefix. (v2.0).** New `POST /sdwan/v2.0/api/networkpolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicyglobalprefixes
  ```

- **Query Network Global Prefixes. (v2.0).** New `POST /sdwan/v2.0/api/networkpolicyglobalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicyglobalprefixes/query
  ```

- **Delete a Network Policy Global Prefix. (v2.0).** New `DELETE /sdwan/v2.0/api/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Get a specific Network Policy global prefix. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Update a Network global prefix. (v2.0).** New `PUT /sdwan/v2.0/api/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Get Network Policy local prefixes. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicylocalprefixes
  ```

- **Create a new Network Policy local prefix. (v2.0).** New `POST /sdwan/v2.0/api/networkpolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicylocalprefixes
  ```

- **Query site network prefix association. (v2.0).** New `POST /sdwan/v2.0/api/networkpolicylocalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicylocalprefixes/query
  ```

- **Delete a Network Policy local prefix. (v2.0).** New `DELETE /sdwan/v2.0/api/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get a specific Network Policy local prefix. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicylocalprefixes/{prefix_id}
  ```

- **Update a  Network Policy local prefix. (v2.0).** New `PUT /sdwan/v2.0/api/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get all network policy sets of tenant. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysets
  ```

- **Create a new NetworkPolicySet (v2.0).** New `POST /sdwan/v2.0/api/networkpolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysets
  ```

- **Query Network policy sets. (v2.0).** New `POST /sdwan/v2.0/api/networkpolicysets/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysets/query
  ```

- **Delete Network Policy Set. (v2.0).** New `DELETE /sdwan/v2.0/api/networkpolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysets/{policy_set_id}
  ```

- **Get a specific network policy set of tenant. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysets/{policy_set_id}
  ```

- **Update Network Policy Set. (v2.0).** New `PUT /sdwan/v2.0/api/networkpolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysets/{policy_set_id}
  ```

- **Get a specific network policy set status of tenant. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicysets/{policy_set_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysets/{policy_set_id}/status
  ```

- **Get all network policy set stacks of tenant. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysetstacks
  ```

- **Create a new NetworkPolicySetStack (v2.0).** New `POST /sdwan/v2.0/api/networkpolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysetstacks
  ```

- **Query network policyset stacks. (v2.0).** New `POST /sdwan/v2.0/api/networkpolicysetstacks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysetstacks/query
  ```

- **Delete a NetworkPolicySetStack (v2.0).** New `DELETE /sdwan/v2.0/api/networkpolicysetstacks/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysetstacks/{policy_set_id}
  ```

- **Get a specific network policy set stack of tenant. (v2.0).** New `GET /sdwan/v2.0/api/networkpolicysetstacks/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysetstacks/{policy_set_id}
  ```

- **Update a NetworkPolicySetStack (v2.0).** New `PUT /sdwan/v2.0/api/networkpolicysetstacks/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/networkpolicysetstacks/{policy_set_id}
  ```

- **Get all config/state info for given network from NB (v2.0).** New `POST /sdwan/v2.0/api/networks/bulk_config_state/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/networks/bulk_config_state/query
  ```

- **Get all Security Policy V2 Global Prefixes for a tenant (v2.0).** New `GET /sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes
  ```

- **Create an Security Policy V2 Global Prefix (v2.0).** New `POST /sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes
  ```

- **Query Security Policy V2 Global Prefixes of a tenant (v2.0).** New `POST /sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes/query
  ```

- **Delete a Security Policy V2 Local Prefix by tenant ID and its ID (v2.0).** New `DELETE /sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Get a Security Policy V2 Global Prefix by tenant ID and its ID (v2.0).** New `GET /sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Update an existing Security Policy V2 Global Prefix (v2.0).** New `PUT /sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Get all Security Policy V2 Local Prefixes for a tenant (v2.0).** New `GET /sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes
  ```

- **Create an Security Policy V2 Local Prefix (v2.0).** New `POST /sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes
  ```

- **Query security policy v2 local prefix site associations of a tenant (v2.0).** New `POST /sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes/query
  ```

- **Delete a Security Policy V2 Local Prefix by tenant ID and its ID (v2.0).** New `DELETE /sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get a Security Policy V2 Local Prefix by tenant ID and its ID (v2.0).** New `GET /sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Security Policy V2 Local Prefix (v2.0).** New `PUT /sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get all Security Policy V2 Sets by tenant ID (v2.0).** New `GET /sdwan/v2.0/api/ngfwsecuritypolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysets
  ```

- **Create a Security Policy V2 Set (v2.0).** New `POST /sdwan/v2.0/api/ngfwsecuritypolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysets
  ```

- **Query security policy v2 sets of a tenant (v2.0).** New `POST /sdwan/v2.0/api/ngfwsecuritypolicysets/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysets/query
  ```

- **Delete an existing Security Policy V2 Set by tenant ID and its ID (v2.0).** New `DELETE /sdwan/v2.0/api/ngfwsecuritypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysets/{policy_set_id}
  ```

- **Get an existing Security Policy V2 Set by tenant ID and its ID (v2.0).** New `GET /sdwan/v2.0/api/ngfwsecuritypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysets/{policy_set_id}
  ```

- **Update an existing Security Policy V2 Set (v2.0).** New `PUT /sdwan/v2.0/api/ngfwsecuritypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysets/{policy_set_id}
  ```

- **Get all Security Policy V2 Set Stacks by tenant ID (v2.0).** New `GET /sdwan/v2.0/api/ngfwsecuritypolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysetstacks
  ```

- **Create a Security Policy V2 Set Stack (v2.0).** New `POST /sdwan/v2.0/api/ngfwsecuritypolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysetstacks
  ```

- **Query Security Policy V2 Set stacks of a tenant (v2.0).** New `POST /sdwan/v2.0/api/ngfwsecuritypolicysetstacks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysetstacks/query
  ```

- **Delete an existing Security Policy V2 Set Stack by tenant ID and its ID (v2.0).** New `DELETE /sdwan/v2.0/api/ngfwsecuritypolicysetstacks/{policyset_stack_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysetstacks/{policyset_stack_id}
  ```

- **Get an existing Security Policy V2 Set Stack by tenant ID and its ID (v2.0).** New `GET /sdwan/v2.0/api/ngfwsecuritypolicysetstacks/{policyset_stack_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysetstacks/{policyset_stack_id}
  ```

- **Update an existing Security Policy V2 Set Stack (v2.0).** New `PUT /sdwan/v2.0/api/ngfwsecuritypolicysetstacks/{policyset_stack_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ngfwsecuritypolicysetstacks/{policyset_stack_id}
  ```

- **Sync NTP Templates (v2.0).** New `PUT /sdwan/v2.0/api/ntp/templates/{template_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ntp/templates/{template_id}/operations
  ```

- **Get a list of auth tokens (v2.0).** New `GET /sdwan/v2.0/api/operators/{operator_id}/authtokens` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/authtokens
  ```

- **Create an auth token (v2.0).** New `POST /sdwan/v2.0/api/operators/{operator_id}/authtokens` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/authtokens
  ```

- **Delete an auth token (v2.0).** New `DELETE /sdwan/v2.0/api/operators/{operator_id}/authtokens/{authtoken_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/authtokens/{authtoken_id}
  ```

- **Get an auth token (v2.0).** New `GET /sdwan/v2.0/api/operators/{operator_id}/authtokens/{authtoken_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/authtokens/{authtoken_id}
  ```

- **Get esp operator permissions assigned under all clients (v2.0).** New `GET /sdwan/v2.0/api/operators/{operator_id}/clients/permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/clients/permissions
  ```

- **Delete esp operator permissions assigned under a client (v2.0).** New `DELETE /sdwan/v2.0/api/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Get client permissions (v2.0).** New `GET /sdwan/v2.0/api/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Create or update esp operator permissions assigned under a client (v2.0).** New `PUT /sdwan/v2.0/api/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Get all sessions for operator id belonging to a tenant id (v2.0).** New `GET /sdwan/v2.0/api/operators/{operator_id}/sessions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/sessions
  ```

- **Delete session for tenant_id, operator id, and session id (v2.0).** New `DELETE /sdwan/v2.0/api/operators/{operator_id}/sessions/{session_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/sessions/{session_id}
  ```

- **Get session for tenant_id, operator id, and sessoin id (v2.0).** New `GET /sdwan/v2.0/api/operators/{operator_id}/sessions/{session_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/operators/{operator_id}/sessions/{session_id}
  ```

- **Query OSPF config (v2.0).** New `POST /sdwan/v2.0/api/ospfconfigs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ospfconfigs/query
  ```

- **Queries the OSPF discovered neighbors (v2.0).** New `POST /sdwan/v2.0/api/ospfdiscoveredneighbors/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ospfdiscoveredneighbors/query
  ```

- **Queries the OSPF reachable prefixes (v2.0).** New `POST /sdwan/v2.0/api/ospfreachableprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ospfreachableprefixes/query
  ```

- **Get all otp access configs. (v2.0).** New `GET /sdwan/v2.0/api/otpaccessconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/otpaccessconfigs
  ```

- **Update an OTP Access for all elements under an Tenant. (v2.0).** New `PUT /sdwan/v2.0/api/otpaccessconfigs/{otpaccess_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/otpaccessconfigs/{otpaccess_config_id}
  ```

- **Get PA network contexts (v2.0).** New `GET /sdwan/v2.0/api/panetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/panetworks
  ```

- **Query db for PA networks that match query parameters (v2.0).** New `POST /sdwan/v2.0/api/panetworks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/panetworks/query
  ```

- **Get PA network context (v2.0).** New `GET /sdwan/v2.0/api/panetworks/{pa_network_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/panetworks/{pa_network_id}
  ```

- **Get Native PA SDWAN Integration Tenant Provision Status (v2.0).** New `GET /sdwan/v2.0/api/pasdwan_integration_status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/pasdwan_integration_status
  ```

- **Get Tenant passages from NB (v2.0).** New `GET /sdwan/v2.0/api/passages` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/passages
  ```

- **Queries the Path Prefix Distribution Filter Association (v2.0).** New `POST /sdwan/v2.0/api/pathprefixdistributionfilterassociation/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/pathprefixdistributionfilterassociation/query
  ```

- **Queries the Path Prefix Distribution Filter List (v2.0).** New `POST /sdwan/v2.0/api/pathprefixdistributionfilters/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/pathprefixdistributionfilters/query
  ```

- **Get PERFMGMT Policy Sets (v2.0).** New `GET /sdwan/v2.0/api/perfmgmtpolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysets
  ```

- **Create a new PERFMGMT Policy Set (v2.0).** New `POST /sdwan/v2.0/api/perfmgmtpolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysets
  ```

- **Query PERFMGMT Policy Set (v2.0).** New `POST /sdwan/v2.0/api/perfmgmtpolicysets/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysets/query
  ```

- **Get PERFMGMT Policy Set status (v2.0).** New `GET /sdwan/v2.0/api/perfmgmtpolicysets/{id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysets/{id}/status
  ```

- **Delete a PERFMGMT Policy Set (v2.0).** New `DELETE /sdwan/v2.0/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}
  ```

- **Get a PERFMGMT Policy Set (v2.0).** New `GET /sdwan/v2.0/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}
  ```

- **Update a PERFMGMT Policy Set (v2.0).** New `PUT /sdwan/v2.0/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}
  ```

- **Get PERFMGMT Policy Set Stacks (v2.0).** New `GET /sdwan/v2.0/api/perfmgmtpolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysetstacks
  ```

- **Create a new PERFMGMT Policy Set Stack (v2.0).** New `POST /sdwan/v2.0/api/perfmgmtpolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysetstacks
  ```

- **Query PERFMGMT Policy Set Stack (v2.0).** New `POST /sdwan/v2.0/api/perfmgmtpolicysetstacks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysetstacks/query
  ```

- **Delete a PERFMGMT Policy Set Stack (v2.0).** New `DELETE /sdwan/v2.0/api/perfmgmtpolicysetstacks/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysetstacks/{id}
  ```

- **Get a PERFMGMT Policy Set Stack (v2.0).** New `GET /sdwan/v2.0/api/perfmgmtpolicysetstacks/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysetstacks/{id}
  ```

- **Update a PERFMGMT Policy Set Stack (v2.0).** New `PUT /sdwan/v2.0/api/perfmgmtpolicysetstacks/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtpolicysetstacks/{id}
  ```

- **Get ThreholdProfileList (v2.0).** New `GET /sdwan/v2.0/api/perfmgmtthresholdprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtthresholdprofiles
  ```

- **Create a new Threshold Profile (v2.0).** New `POST /sdwan/v2.0/api/perfmgmtthresholdprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtthresholdprofiles
  ```

- **Queries db for limit number of tenant level threshold profiles that match query params. (v2.0).** New `POST /sdwan/v2.0/api/perfmgmtthresholdprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtthresholdprofiles/query
  ```

- **Delete a Threshold Profile (v2.0).** New `DELETE /sdwan/v2.0/api/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Get a ThresholdProfile (v2.0).** New `GET /sdwan/v2.0/api/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Update a Threshold Profile (v2.0).** New `PUT /sdwan/v2.0/api/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Get list of permitted APIs that the current operator can invoke (v2.0).** New `GET /sdwan/v2.0/api/permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/permissions
  ```

- **Delete a tenant custom permission (v2.0).** New `DELETE /sdwan/v2.0/api/permissions/{permission_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/permissions/{permission_id}
  ```

- **Get a tenant custom permission (v2.0).** New `GET /sdwan/v2.0/api/permissions/{permission_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/permissions/{permission_id}
  ```

- **Update a custom permission (v2.0).** New `PUT /sdwan/v2.0/api/permissions/{permission_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/permissions/{permission_id}
  ```

- **Get all config/state info across all policysets from NB (v2.0).** New `POST /sdwan/v2.0/api/policysets/bulk_config_state/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/policysets/bulk_config_state/query
  ```

- **Query security prefix filter for NB API. (v2.0).** New `POST /sdwan/v2.0/api/prefixfilters/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prefixfilters/query
  ```

- **Get all Priority policy prefixes. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicyglobalprefixes
  ```

- **Create a new global prefix. (v2.0).** New `POST /sdwan/v2.0/api/prioritypolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicyglobalprefixes
  ```

- **Query Priority Global Prefixes. (v2.0).** New `POST /sdwan/v2.0/api/prioritypolicyglobalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicyglobalprefixes/query
  ```

- **Delete a Priority Policy Global Prefix. (v2.0).** New `DELETE /sdwan/v2.0/api/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Get a specific Netwok Policy global prefix. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Update a  Priority global prefix. (v2.0).** New `PUT /sdwan/v2.0/api/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Get Priority Policy local prefixes. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicylocalprefixes
  ```

- **Create a new Priority Policy local prefix. (v2.0).** New `POST /sdwan/v2.0/api/prioritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicylocalprefixes
  ```

- **Query site priority prefix association. (v2.0).** New `POST /sdwan/v2.0/api/prioritypolicylocalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicylocalprefixes/query
  ```

- **Delete a Priority Policy local prefix. (v2.0).** New `DELETE /sdwan/v2.0/api/prioritypolicylocalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicylocalprefixes/{priority_policy_id}
  ```

- **Get a specific Priority Policy local prefix. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicylocalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicylocalprefixes/{priority_policy_id}
  ```

- **Update a  Priority Policy local prefix. (v2.0).** New `PUT /sdwan/v2.0/api/prioritypolicylocalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicylocalprefixes/{priority_policy_id}
  ```

- **Get all priority policy sets of tenant. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysets
  ```

- **Create a new PriorityPolicySet (v2.0).** New `POST /sdwan/v2.0/api/prioritypolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysets
  ```

- **Query Priority policy sets. (v2.0).** New `POST /sdwan/v2.0/api/prioritypolicysets/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysets/query
  ```

- **Delete Priority Policy Set. (v2.0).** New `DELETE /sdwan/v2.0/api/prioritypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysets/{policy_set_id}
  ```

- **Get a specific priority policy set of tenant. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysets/{policy_set_id}
  ```

- **Update Priority Policy Set. (v2.0).** New `PUT /sdwan/v2.0/api/prioritypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysets/{policy_set_id}
  ```

- **Get a specific priority policy set status of tenant. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicysets/{policy_set_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysets/{policy_set_id}/status
  ```

- **Get all Priority policy set stacks of tenant. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysetstacks
  ```

- **Create a new PriorityPolicySetStack (v2.0).** New `POST /sdwan/v2.0/api/prioritypolicysetstacks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysetstacks
  ```

- **Query priority policyset stacks. (v2.0).** New `POST /sdwan/v2.0/api/prioritypolicysetstacks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysetstacks/query
  ```

- **Delete a PriorityPolicySetStack (v2.0).** New `DELETE /sdwan/v2.0/api/prioritypolicysetstacks/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysetstacks/{policy_set_id}
  ```

- **Get a specific Priority policy set stack of tenant. (v2.0).** New `GET /sdwan/v2.0/api/prioritypolicysetstacks/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysetstacks/{policy_set_id}
  ```

- **Update a PriorityPolicySetStack (v2.0).** New `PUT /sdwan/v2.0/api/prioritypolicysetstacks/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/prioritypolicysetstacks/{policy_set_id}
  ```

- **Query Prisma Access config (v2.0).** New `POST /sdwan/v2.0/api/prismaaccess_configs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prismaaccess_configs/query
  ```

- **Get a list of SASE connections (v2.0).** New `POST /sdwan/v2.0/api/prismasase_connections/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prismasase_connections/query
  ```

- **Get a list of SASE connection statuses (v2.0).** New `POST /sdwan/v2.0/api/prismasase_connections/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/prismasase_connections/status/query
  ```

- **Get ProbeConfigList (v2.0).** New `GET /sdwan/v2.0/api/probeconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeconfigs
  ```

- **Create a new Probe Config (v2.0).** New `POST /sdwan/v2.0/api/probeconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeconfigs
  ```

- **Queries db for limit number of tenant level probe profiles that match query params. (v2.0).** New `POST /sdwan/v2.0/api/probeconfigs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeconfigs/query
  ```

- **Delete a Probe Config (v2.0).** New `DELETE /sdwan/v2.0/api/probeconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeconfigs/{config_id}
  ```

- **Get a ProbeConfig (v2.0).** New `GET /sdwan/v2.0/api/probeconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeconfigs/{config_id}
  ```

- **Update a ProbeConfig (v2.0).** New `PUT /sdwan/v2.0/api/probeconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeconfigs/{config_id}
  ```

- **Get ProbeProfileList (v2.0).** New `GET /sdwan/v2.0/api/probeprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeprofiles
  ```

- **Create a new PROBE Profile (v2.0).** New `POST /sdwan/v2.0/api/probeprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeprofiles
  ```

- **Queries db for limit number of tenant level probe profiles that match query params. (v2.0).** New `POST /sdwan/v2.0/api/probeprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeprofiles/query
  ```

- **Delete a PROBE Profile (v2.0).** New `DELETE /sdwan/v2.0/api/probeprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeprofiles/{profile_id}
  ```

- **Get a ProbeProfile (v2.0).** New `GET /sdwan/v2.0/api/probeprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeprofiles/{profile_id}
  ```

- **Update a ProbeProfile (v2.0).** New `PUT /sdwan/v2.0/api/probeprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/probeprofiles/{profile_id}
  ```

- **Get current user profile (v2.0).** New `GET /sdwan/v2.0/api/profile` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/profile
  ```

- **Get a list of custom roles (v2.0).** New `GET /sdwan/v2.0/api/roles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/roles
  ```

- **Add a custom role (v2.0).** New `POST /sdwan/v2.0/api/roles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/roles
  ```

- **Delete a custom role (v2.0).** New `DELETE /sdwan/v2.0/api/roles/{role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/roles/{role_id}
  ```

- **Get a custom role (v2.0).** New `GET /sdwan/v2.0/api/roles/{role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/roles/{role_id}
  ```

- **Update a custom role (v2.0).** New `PUT /sdwan/v2.0/api/roles/{role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/roles/{role_id}
  ```

- **Create sso session (v2.0).** New `POST /sdwan/v2.0/api/saml` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/saml
  ```

- **Process SAMLRequest from SP (v2.0).** New `POST /sdwan/v2.0/api/saml_idp` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/saml_idp
  ```

- **Get all SD-WAN application configurations (v2.0).** New `GET /sdwan/v2.0/api/sdwanapps/{app_id}/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sdwanapps/{app_id}/configs
  ```

- **Create SD-WAN application configuration (v2.0).** New `POST /sdwan/v2.0/api/sdwanapps/{app_id}/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sdwanapps/{app_id}/configs
  ```

- **Delete SD-WAN application configuration (v2.0).** New `DELETE /sdwan/v2.0/api/sdwanapps/{app_id}/configs/{cid}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sdwanapps/{app_id}/configs/{cid}
  ```

- **Get SD-WAN application configuration (v2.0).** New `GET /sdwan/v2.0/api/sdwanapps/{app_id}/configs/{cid}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sdwanapps/{app_id}/configs/{cid}
  ```

- **Update SD-WAN application configuration (v2.0).** New `PUT /sdwan/v2.0/api/sdwanapps/{app_id}/configs/{cid}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sdwanapps/{app_id}/configs/{cid}
  ```

- **GET existing tenant SD-WAN application status. (v2.0).** New `GET /sdwan/v2.0/api/sdwanapps/{app_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sdwanapps/{app_id}/status
  ```

- **Queries db for limit number of LAN networks that match query params. (v2.0).** New `POST /sdwan/v2.0/api/securitypolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicyrules/query
  ```

- **Get tenant security policy sets. (v2.0).** New `GET /sdwan/v2.0/api/securitypolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets
  ```

- **Create a new tenant security policy set. (v2.0).** New `POST /sdwan/v2.0/api/securitypolicysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets
  ```

- **Queries db for limit number of security policysets that match query params. (v2.0).** New `POST /sdwan/v2.0/api/securitypolicysets/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/query
  ```

- **Delete a security policyset. (v2.0).** New `DELETE /sdwan/v2.0/api/securitypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}
  ```

- **Get tenant security policy set. (v2.0).** New `GET /sdwan/v2.0/api/securitypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}
  ```

- **Update a tenant security policy set. (v2.0).** New `PUT /sdwan/v2.0/api/securitypolicysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}
  ```

- **Update a tenant security policy set. (v2.0).** New `POST /sdwan/v2.0/api/securitypolicysets/{policy_set_id}/firewallpolicyruleorder` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}/firewallpolicyruleorder
  ```

- **Get tenant security policy rules. (v2.0).** New `GET /sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules
  ```

- **Create a new tenant security policy rule. (v2.0).** New `POST /sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules
  ```

- **Delete a security policyrule. (v2.0).** New `DELETE /sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}
  ```

- **Get tenant security policy rule. (v2.0).** New `GET /sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}
  ```

- **Update a tenant security policy rule. (v2.0).** New `PUT /sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}
  ```

- **Get all Security Profile Groups by tenant ID (v2.0).** New `GET /sdwan/v2.0/api/securityprofilegroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/securityprofilegroups
  ```

- **Create a Security Profile Group (v2.0).** New `POST /sdwan/v2.0/api/securityprofilegroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/securityprofilegroups
  ```

- **Query Security profile groups of a tenant (v2.0).** New `POST /sdwan/v2.0/api/securityprofilegroups/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/securityprofilegroups/query
  ```

- **Delete an existing Security Profile Group by tenant ID and its ID (v2.0).** New `DELETE /sdwan/v2.0/api/securityprofilegroups/{profile_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/securityprofilegroups/{profile_group_id}
  ```

- **Get an existing Security Profile group by tenant ID and its ID (v2.0).** New `GET /sdwan/v2.0/api/securityprofilegroups/{profile_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/securityprofilegroups/{profile_group_id}
  ```

- **Update an existing Security Profile Group (v2.0).** New `PUT /sdwan/v2.0/api/securityprofilegroups/{profile_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/securityprofilegroups/{profile_group_id}
  ```

- **Get getServiceBindingMapList (v2.0).** New `GET /sdwan/v2.0/api/servicebindingmaps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicebindingmaps
  ```

- **Create a new Service Binding Map (v2.0).** New `POST /sdwan/v2.0/api/servicebindingmaps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicebindingmaps
  ```

- **Queries db for limit number of service bindings that match query params. (v2.0).** New `POST /sdwan/v2.0/api/servicebindingmaps/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicebindingmaps/query
  ```

- **Delete a Service Binding Map (v2.0).** New `DELETE /sdwan/v2.0/api/servicebindingmaps/{map_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicebindingmaps/{map_id}
  ```

- **Get a ServiceBindingMap (v2.0).** New `GET /sdwan/v2.0/api/servicebindingmaps/{map_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicebindingmaps/{map_id}
  ```

- **Update a ServiceBindingMap (v2.0).** New `PUT /sdwan/v2.0/api/servicebindingmaps/{map_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicebindingmaps/{map_id}
  ```

- **Get All ServiceConnections for a given tenant (v2.0).** New `GET /sdwan/v2.0/api/serviceconnections` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/serviceconnections
  ```

- **Get getServiceLabelList (v2.0).** New `GET /sdwan/v2.0/api/servicelabels` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicelabels
  ```

- **Create a new Service Label (v2.0).** New `POST /sdwan/v2.0/api/servicelabels` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicelabels
  ```

- **Queries db for limit number of service labels that match query params. (v2.0).** New `POST /sdwan/v2.0/api/servicelabels/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicelabels/query
  ```

- **Delete a Service Label (v2.0).** New `DELETE /sdwan/v2.0/api/servicelabels/{service_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicelabels/{service_label_id}
  ```

- **Get a GetServiceLabel (v2.0).** New `GET /sdwan/v2.0/api/servicelabels/{service_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicelabels/{service_label_id}
  ```

- **Update a ServiceLabel (v2.0).** New `PUT /sdwan/v2.0/api/servicelabels/{service_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/servicelabels/{service_label_id}
  ```

- **Signup new operators (v2.0).** New `POST /sdwan/v2.0/api/signup` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/signup
  ```

- **Query App Acceleration status V2.0. (v2.0).** New `POST /sdwan/v2.0/api/sites/appacceleration/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/appacceleration/query
  ```

- **Get site config/state info for queried site from NB (v2.0).** New `POST /sdwan/v2.0/api/sites/bulk_config_state/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/bulk_config_state/query
  ```

- **Bulk site update API (v2.0).** New `POST /sdwan/v2.0/api/sites/bulkoperations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/bulkoperations
  ```

- **Query sites across client tenants for MSP (v2.0).** New `POST /sdwan/v2.0/api/sites/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/rquery
  ```

- **Query export jobs (v2.0).** New `POST /sdwan/v2.0/api/sites/snapshots/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/snapshots/query
  ```

- **GET anynet link (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/anynetlinks/{anynet_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/anynetlinks/{anynet_id}
  ```

- **Get site App Acceleration status for a tenant (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/appaccelerationstatus` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/appaccelerationstatus
  ```

- **Get all ADEM status for a site (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/demsiteconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/demsiteconfigs
  ```

- **Create dem site config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/demsiteconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/demsiteconfigs
  ```

- **Delete Start Network Node config (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/demsiteconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/demsiteconfigs/{config_id}
  ```

- **Get dem site config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/demsiteconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/demsiteconfigs/{config_id}
  ```

- **Update dem site config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/demsiteconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/demsiteconfigs/{config_id}
  ```

- **Get all ADEM status for a site (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/demstatus` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/demstatus
  ```

- **Get ADEM status for a site (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/demstatus/{dem_status_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/demstatus/{dem_status_id}
  ```

- **Get device id site configs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs
  ```

- **Create device id site config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs
  ```

- **Get device id site config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{config_id}
  ```

- **Update device Id site config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{config_id}
  ```

- **Bulk delete Start Network Node config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/bulkdelete_snmpdiscoverystartnodes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/bulkdelete_snmpdiscoverystartnodes
  ```

- **Get all Start Network Node config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes
  ```

- **Create Start Network Node config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes
  ```

- **Delete Start Network Node config (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}
  ```

- **Get Start Network Node config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}
  ```

- **Update Start Network Node config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}
  ```

- **Update admin state Northbound (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/admin_state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/admin_state
  ```

- **Get application probe configuration of element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/application_probe` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/application_probe
  ```

- **Update application probe configuration (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/application_probe` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/application_probe
  ```

- **Reset BGP peer config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}/operations
  ```

- **Get BGP Peer advertised prefixes (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/advertisedprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/advertisedprefixes
  ```

- **Get BGP discovered prefix information (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/discoveredprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/discoveredprefixes
  ```

- **Get BGP reachable prefix information (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/reachableprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/reachableprefixes
  ```

- **Get device id element level configs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs
  ```

- **Create device id element level (source interface) config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs
  ```

- **Delete device id element level (source interface) config (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}
  ```

- **Get device id element level config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}
  ```

- **Update device id element level (source interface) config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}
  ```

- **Read all DNS service configs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices
  ```

- **Create a new DNS service config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices
  ```

- **Delete a DNS service config (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}
  ```

- **Get a DNS service config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}
  ```

- **Update a DNS service config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}
  ```

- **Get all element level extensions (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions
  ```

- **Create element level extension configuration (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions
  ```

- **Query element level extensions that match query params (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions/query
  ```

- **Delete a specific extension associated with an element (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions/{extension_id}
  ```

- **Get an element level extension (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions/{extension_id}
  ```

- **Update element level extension configuration (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/extensions/{extension_id}
  ```

- **Get all Multicast IGMP group membership info (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicastigmpmemberships` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicastigmpmemberships
  ```

- **Get Multicast IGMP group membership info (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicastigmpmemberships/{membership_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicastigmpmemberships/{membership_id}
  ```

- **Get all Multicast status info (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicaststatus` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicaststatus
  ```

- **Reset action on interface (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/operations
  ```

- **Get all IPFix config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix
  ```

- **Create a IPFix Config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix
  ```

- **Delete IPFix config (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}
  ```

- **Get IPFix config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}
  ```

- **Update a IPFix Config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}
  ```

- **Get all MSTP Instances (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances
  ```

- **Create a MSTP Instance (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances
  ```

- **Delete MSTP instance for an element (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}
  ```

- **Get MSTP Instance (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}
  ```

- **Update a MSTP Instance (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}
  ```

- **Get MSTP Instance status for a specific id (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}/status
  ```

- **Get all Multicast dynamic RPs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastdynamicrps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastdynamicrps
  ```

- **Get Multicast dynamic RP (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastdynamicrps/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastdynamicrps/{id}
  ```

- **Get all Multicast configs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs
  ```

- **Get Multicast config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}
  ```

- **Updates Multicast config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}
  ```

- **Get all Multicast Protocol Parameters (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastprotocolparameters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastprotocolparameters
  ```

- **Get all Multicast routes (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastroutes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastroutes
  ```

- **Get all Multicast RP configs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps
  ```

- **Creates Multicast RP config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps
  ```

- **Deletes Multicast RP config (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}
  ```

- **Get Multicast RP config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}
  ```

- **Updates Multicast RP config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}
  ```

- **Get all Multicast WAN status (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastwanstatus` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastwanstatus
  ```

- **Get Multicast WAN status (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastwanstatus/{wan_status_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/multicastwanstatus/{wan_status_id}
  ```

- **Get all OSPF configs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs
  ```

- **Creates OSPF config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs
  ```

- **Deletes OSPF config (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Get OSPF config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Updates OSPF config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Get all OSPF Discovered Neighbors (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}/ospfdiscoveredneighbors` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}/ospfdiscoveredneighbors
  ```

- **Get all OSPF Reachable Prefixes (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}/ospfreachableprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}/ospfreachableprefixes
  ```

- **Get all OSPF configs from NB (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfglobalconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfglobalconfigs
  ```

- **Get OSPF config from NB (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfglobalconfigs/{ospf_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfglobalconfigs/{ospf_config_id}
  ```

- **Updates OSPF config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfglobalconfigs/{ospf_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/ospfglobalconfigs/{ospf_config_id}
  ```

- **Get Prisma Access BGP Peer advertised prefixes (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/pa_advertisedprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/pa_advertisedprefixes
  ```

- **Get Prisma Access BGP reachable prefix information (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/pa_reachableprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/pa_reachableprefixes
  ```

- **Get switch port to VLAN port mapping information for an element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/port_vlan_members` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/port_vlan_members
  ```

- **Get all Access List for Element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists
  ```

- **Create AS-Path Access List (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists
  ```

- **Queries db for limit number of access lists that match query params. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/query
  ```

- **Delete Access List (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Get Specific Access List (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Updates Access List (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Get all Community List for Element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists
  ```

- **Create IP Community List (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists
  ```

- **Queries db for limit number of community lists that match query params. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/query
  ```

- **Delete Community List (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}
  ```

- **Get Specific Community List (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}
  ```

- **Updates Community List (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}
  ```

- **Get all Prefix List for Element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists
  ```

- **Create IP Prefix List (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists
  ```

- **Queries db for limit number of prefix lists that match query params. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/query
  ```

- **Delete Prefix List (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}
  ```

- **Get Specific Prefix List (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}
  ```

- **Updates Prefix List (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}
  ```

- **Get element security zones (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones
  ```

- **Create an association between element and security zone. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones
  ```

- **Delete an existing security zone (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Get element security zone (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Update an existing element security zone (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Get SNMP Agent on an element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents
  ```

- **Create SNMP Agent (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents
  ```

- **delete SNMP Agent (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **get SNMP Agent (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **Update SNMP Agent (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **Get All SNMP Trap on an element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps
  ```

- **Create SNMP Trap (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps
  ```

- **delete SNMP Trap (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}
  ```

- **Get SNMP trap on an element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}
  ```

- **Update SNMP Trap (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}
  ```

- **Get TACACS+ Servers (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers
  ```

- **Create TACACS+ Servers (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers
  ```

- **Delete TACACS+ Server (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}
  ```

- **Get TACACS+ Server (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}
  ```

- **Update TACACS+ Server (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}
  ```

- **Get VLAN to switch port mapping information for an element (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/vlan_port_members` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elements/{element_id}/vlan_port_members
  ```

- **Get All Element Shells (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elementshells` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elementshells
  ```

- **Create an element shell (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elementshells` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elementshells
  ```

- **Delete an element shell (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Get Element Shell (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Used for associations and element shell updates (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Asynchronization call to Copy Interface Configurations from element to element shell (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/elementshells/{shell_id}/copy_element_configurations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elementshells/{shell_id}/copy_element_configurations
  ```

- **Get Status of Copy Configurations process (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/elementshells/{shell_id}/copy_element_configurations/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/elementshells/{shell_id}/copy_element_configurations/status
  ```

- **Get all site level extensions (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/extensions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/extensions
  ```

- **Create site level extension configuration (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/extensions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/extensions
  ```

- **Query site level extensions that match query params (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/extensions/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/extensions/query
  ```

- **Delete a specific extension associated with a site (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/extensions/{extension_id}
  ```

- **Get a site level extension (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/extensions/{extension_id}
  ```

- **Update site level extension configuration (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/extensions/{extension_id}
  ```

- **Get flow logging status for a site (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/flowexport_status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/flowexport_status
  ```

- **Get HubServiceEndpoint for a Site of a given tenant by tenant ID and site ID (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/hubserviceendpoints` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/hubserviceendpoints
  ```

- **Get all IPFix site prefix association (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes
  ```

- **Create a IPFix site prefix association (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes
  ```

- **Delete a IPFix site prefix association (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **Get IPFix site prefix association (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **Update a IPFix site prefix association (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **GET the site local prefix set (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/localprefixset` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/localprefixset
  ```

- **Create microsegment (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/microsegments` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/microsegments
  ```

- **Delete microsegment (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/microsegments/{microsegment_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/microsegments/{microsegment_id}
  ```

- **Get microsegment by ID (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/microsegments/{microsegment_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/microsegments/{microsegment_id}
  ```

- **Update microsegment (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/microsegments/{microsegment_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/microsegments/{microsegment_id}
  ```

- **Get multicast source side RPs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/multicastsourcesiderps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/multicastsourcesiderps
  ```

- **Query multicast source side RPs (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/multicastsourcesiderps/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/multicastsourcesiderps/query
  ```

- **Get multicast source side RP (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/multicastsourcesiderps/{rp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/multicastsourcesiderps/{rp_id}
  ```

- **Get multicast source site configs (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs
  ```

- **Create multicast source site config (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs
  ```

- **Delete multicast source site config (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs/{config_id}
  ```

- **Get multicast source site config (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs/{config_id}
  ```

- **Update multicast source site config (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/multicastsourcesiteconfigs/{config_id}
  ```

- **Get site NAT prefixes (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/natlocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/natlocalprefixes
  ```

- **Create an association between site and NAT Prefix. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/natlocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/natlocalprefixes
  ```

- **Delete an existing Site NAT prefix (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/natlocalprefixes/{prefix_id}
  ```

- **Get site NAT prefix (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/natlocalprefixes/{prefix_id}
  ```

- **Update an existing Site NAT Local prefix Association (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/natlocalprefixes/{prefix_id}
  ```

- **Get site Network policy prefix associations (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes
  ```

- **Create an association between site and Network local Prefix. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes
  ```

- **Delete an existing Site Network Policy local prefix association (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get site Network policy local prefix association (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Site Network policy local prefix (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get all security policy v2 local prefix site association for a site (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Create a security policy V2 local prefix site association (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Delete an existing security policy v2 local prefix site association (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get an existing security policy v2 local prefix assocation by its ID (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing security policy V2 local prefix site association (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Handle operations on site. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/operations
  ```

- **GET Path Prefix Distribution Filter Association (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation
  ```

- **Create Path Prefix Distribution Filter Association  List (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation
  ```

- **Delete Path Prefix Distribution Filter Association (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}
  ```

- **Get Path Prefix Distribution Filter Association (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}
  ```

- **Update Path Prefix Distribution Filter Association (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}
  ```

- **GET Path Prefix Distribution Filter List (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters
  ```

- **Create Path Prefix Distribution Filters List (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters
  ```

- **Delete Path Prefix Distribution Filters List (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}
  ```

- **Get Path Prefix Distribution filters List (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}
  ```

- **Update Path Prefix Distribution Filters List (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}
  ```

- **Get Path Prefixes (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/peersites/{peer_site_id}/pathprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/peersites/{peer_site_id}/pathprefixes
  ```

- **GET Prefix Distribution Spoke List (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists
  ```

- **Create Prefix Distribution Spoke List (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists
  ```

- **Delete Prefix Distribution Spoke List (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}
  ```

- **Get Prefix Distribution Spoke List (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}
  ```

- **Update Prefix Distribution Spoke List (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}
  ```

- **Get site security filters (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prefixfilters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixfilters
  ```

- **Create an association between site and security prefix filter. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/prefixfilters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixfilters
  ```

- **Query security prefix filter for NB API. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/prefixfilters/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixfilters/query
  ```

- **Delete an existing security prefix filter (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/prefixfilters/{filter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixfilters/{filter_id}
  ```

- **Get site security prefix filter (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prefixfilters/{filter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixfilters/{filter_id}
  ```

- **Update an existing security prefix filter (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/prefixfilters/{filter_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prefixfilters/{filter_id}
  ```

- **Get site Priority policy prefix associations (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes
  ```

- **Create an association between site and Priority local Prefix. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes
  ```

- **Delete an existing Site Priority Policy local prefix association (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Get site Priority policy local prefix association (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Site Priority policy local prefix (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Get all Prisma Access Configs for a site (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs
  ```

- **Create a Prisma Access Config with remote networks and security processing node (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs
  ```

- **Delete a Prisma Access Config with remote networks and security processing node (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs/{config_id}
  ```

- **Get A Prisma Access Configs for a site (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs/{config_id}
  ```

- **Update a Prisma Access Config with remote networks and security processing node (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prismaaccess_configs/{config_id}
  ```

- **Get a specific SASE connection status (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}/status
  ```

- **Get ServiceConnections for a given tenant and hub site (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/serviceconnections` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/serviceconnections
  ```

- **Get site ciphers (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/siteciphers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/siteciphers
  ```

- **Update site cipher (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/siteciphers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/siteciphers
  ```

- **Get site security zones (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/sitesecurityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/sitesecurityzones
  ```

- **Create an association between site and security zone. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/sitesecurityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/sitesecurityzones
  ```

- **Query security zone for NB API. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/sitesecurityzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/sitesecurityzones/query
  ```

- **Delete an existing security zone (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Get site security zone (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Update an existing security zone (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Generate a snapshot of a particular site (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/snapshots` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/snapshots
  ```

- **Retrieve yaml configuration by ID (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/snapshots/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/snapshots/{id}
  ```

- **Status of the job (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/snapshots/{id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/snapshots/{id}/status
  ```

- **Get all spokeclusters (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/spokeclusters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/spokeclusters
  ```

- **Create Spoke Cluster (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/spokeclusters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/spokeclusters
  ```

- **Query Spoke Clusters. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/spokeclusters/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/spokeclusters/query
  ```

- **Delete spoke cluster. (v2.0).** New `DELETE /sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}
  ```

- **Get spoke cluster details (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}
  ```

- **Update Spoke Cluster (v2.0).** New `PUT /sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}
  ```

- **Handle operations on spokecluster. (v2.0).** New `POST /sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}/operations
  ```

- **Get Spoke Cluster Status. (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/spokeclusters/{spoke_cluster_id}/status
  ```

- **Get site status (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/status
  ```

- **GET anynet link (v2.0).** New `GET /sdwan/v2.0/api/sites/{site_id}/wanpaths` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sites/{site_id}/wanpaths
  ```

- **Query security zone. (v2.0).** New `POST /sdwan/v2.0/api/sitesecurityzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sitesecurityzones/query
  ```

- **Create or retry a site deployment (v2.0).** New `POST /sdwan/v2.0/api/sitesnapshots` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sitesnapshots
  ```

- **Query import jobs with filters (v2.0).** New `POST /sdwan/v2.0/api/sitesnapshots/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/sitesnapshots/query
  ```

- **Retrieve deployment status by ID (v2.0).** New `GET /sdwan/v2.0/api/sitesnapshots/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/sitesnapshots/{id}
  ```

- **Get all licenses skus for a tenant (v2.0).** New `GET /sdwan/v2.0/api/skus` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/skus
  ```

- **Get all licenses skus for a tenant (v2.0).** New `GET /sdwan/v2.0/api/skus/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/skus/{id}
  ```

- **Query Start Network Node based on parameters (v2.0).** New `POST /sdwan/v2.0/api/snmpdiscoverystartnodes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/snmpdiscoverystartnodes/query
  ```

- **Queries db for all software download done by a tenant (v2.0).** New `POST /sdwan/v2.0/api/softwarehistory/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/softwarehistory/query
  ```

- **Get all easy onboarding created remote networks for a tenant (v2.0).** New `GET /sdwan/v2.0/api/spnnpnsitemigration/remotenetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/spnnpnsitemigration/remotenetworks
  ```

- **Get all easy onboarding created remote networks for a tenant (v2.0).** New `POST /sdwan/v2.0/api/spnnpnsitemigration/remotenetworks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/spnnpnsitemigration/remotenetworks/query
  ```

- **Query Spoke Clusters. (v2.0).** New `POST /sdwan/v2.0/api/spokeclusters/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/spokeclusters/query
  ```

- **Query Spoke Clusters Status (v2.0).** New `POST /sdwan/v2.0/api/spokeclusters/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/spokeclusters/status/query
  ```

- **Get all Spyware Security Profiles by tenant ID (v2.0).** New `GET /sdwan/v2.0/api/spywareprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/spywareprofiles
  ```

- **Get an existing Spyware Security Profile by tenant ID and its ID (v2.0).** New `GET /sdwan/v2.0/api/spywareprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/spywareprofiles/{profile_id}
  ```

- **Get Syslog Server Profiles (v2.0).** New `GET /sdwan/v2.0/api/syslogserverprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/syslogserverprofiles
  ```

- **Create Syslog Server Profile (v2.0).** New `POST /sdwan/v2.0/api/syslogserverprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/syslogserverprofiles
  ```

- **Delete Syslog Server Profile (v2.0).** New `DELETE /sdwan/v2.0/api/syslogserverprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/syslogserverprofiles/{profile_id}
  ```

- **Get Syslog Server Profile (v2.0).** New `GET /sdwan/v2.0/api/syslogserverprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/syslogserverprofiles/{profile_id}
  ```

- **Update Syslog Server Profile (v2.0).** New `PUT /sdwan/v2.0/api/syslogserverprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/syslogserverprofiles/{profile_id}
  ```

- **Get TACACS+ Profiles (v2.0).** New `GET /sdwan/v2.0/api/tacacs_plus_profiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/tacacs_plus_profiles
  ```

- **Create TACACS+ Profile (v2.0).** New `POST /sdwan/v2.0/api/tacacs_plus_profiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/tacacs_plus_profiles
  ```

- **Delete TACACS+ Profile (v2.0).** New `DELETE /sdwan/v2.0/api/tacacs_plus_profiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/tacacs_plus_profiles/{profile_id}
  ```

- **Get TACACS+ Profile (v2.0).** New `GET /sdwan/v2.0/api/tacacs_plus_profiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/tacacs_plus_profiles/{profile_id}
  ```

- **Update TACACS+ Profile (v2.0).** New `PUT /sdwan/v2.0/api/tacacs_plus_profiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/tacacs_plus_profiles/{profile_id}
  ```

- **Get all existing NTP Template of tenant. (v2.0).** New `GET /sdwan/v2.0/api/templates/ntp` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/templates/ntp
  ```

- **Create a new NTP Template (v2.0).** New `POST /sdwan/v2.0/api/templates/ntp` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/templates/ntp
  ```

- **Delete an existing NTP Template (v2.0).** New `DELETE /sdwan/v2.0/api/templates/ntp/{ntp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/templates/ntp/{ntp_id}
  ```

- **Get an existing NTP Template (v2.0).** New `GET /sdwan/v2.0/api/templates/ntp/{ntp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/templates/ntp/{ntp_id}
  ```

- **Update an existing NTP Template (v2.0).** New `PUT /sdwan/v2.0/api/templates/ntp/{ntp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/templates/ntp/{ntp_id}
  ```

- **Get tenant passage configuration from NB (v2.0).** New `GET /sdwan/v2.0/api/tenantpassageconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/tenantpassageconfigs
  ```

- **Deletes tenant passage configuration from NB (v2.0).** New `DELETE /sdwan/v2.0/api/tenantpassageconfigs/{passage_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/tenantpassageconfigs/{passage_config_id}
  ```

- **Logout api for esp client. Reverts back to esp session (v2.0).** New `POST /sdwan/v2.0/api/tenants/{client_id}/logout` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/tenants/{client_id}/logout
  ```

- **Query Threat Metadata. (v2.0).** New `POST /sdwan/v2.0/api/threatmetadata/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/threatmetadata/query
  ```

- **Get All Active/closed Sessions details (v2.0).** New `GET /sdwan/v2.0/api/toolkitsessions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/toolkitsessions
  ```

- **Query db for sessions that match query parameters (v2.0).** New `POST /sdwan/v2.0/api/toolkitsessions/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/toolkitsessions/query
  ```

- **Query topology links (paginated) (v2.0).** New `POST /sdwan/v2.0/api/topology/links/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/topology/links/query
  ```

- **Query topology nodes (paginated) (v2.0).** New `POST /sdwan/v2.0/api/topology/nodes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/topology/nodes/query
  ```

- **Query Machine Upgrade Status (v2.0).** New `POST /sdwan/v2.0/api/upgrade_status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/upgrade_status/query
  ```

- **Query URL Categories. (v2.0).** New `POST /sdwan/v2.0/api/urlcategories/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/urlcategories/query
  ```

- **Get all custom URL categories for a tenant (v2.0).** New `GET /sdwan/v2.0/api/urlcustomcategories` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/urlcustomcategories
  ```

- **Get a custom URL category for a tenant (v2.0).** New `GET /sdwan/v2.0/api/urlcustomcategories/{url_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/urlcustomcategories/{url_id}
  ```

- **Get the URL filtering config for a tenant (v2.0).** New `GET /sdwan/v2.0/api/urlfilteringconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/urlfilteringconfigs
  ```

- **Get all URL Filtering Profiles by tenant ID (v2.0).** New `GET /sdwan/v2.0/api/urlfilteringprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/urlfilteringprofiles
  ```

- **Get an existing URL Filtering Profile by tenant ID and its ID (v2.0).** New `GET /sdwan/v2.0/api/urlfilteringprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/urlfilteringprofiles/{profile_id}
  ```

- **Get All User ID Agents (v2.0).** New `GET /sdwan/v2.0/api/useridagents` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/useridagents
  ```

- **Create User ID Agent (v2.0).** New `POST /sdwan/v2.0/api/useridagents` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/useridagents
  ```

- **Query User ID Agents. (v2.0).** New `POST /sdwan/v2.0/api/useridagents/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/useridagents/query
  ```

- **Delete User ID Agent (v2.0).** New `DELETE /sdwan/v2.0/api/useridagents/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/useridagents/{id}
  ```

- **Get User ID Agent (v2.0).** New `GET /sdwan/v2.0/api/useridagents/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/useridagents/{id}
  ```

- **Update User ID Agent (v2.0).** New `PUT /sdwan/v2.0/api/useridagents/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/useridagents/{id}
  ```

- **Get Users. (v2.0).** New `GET /sdwan/v2.0/api/users` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/users
  ```

- **Create an user identity. (v2.0).** New `POST /sdwan/v2.0/api/users` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/users
  ```

- **Delete an user identity. (v2.0).** New `DELETE /sdwan/v2.0/api/users/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/users/{user_id}
  ```

- **Get an user identity. (v2.0).** New `GET /sdwan/v2.0/api/users/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/users/{user_id}
  ```

- **Put an user identity. (v2.0).** New `PUT /sdwan/v2.0/api/users/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/users/{user_id}
  ```

- **Get all Vff Licenses for Tenant (v2.0).** New `GET /sdwan/v2.0/api/vfflicenses` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses
  ```

- **Query and get Vff License (v2.0).** New `POST /sdwan/v2.0/api/vfflicenses/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/rquery
  ```

- **Query Tenant Vff License Tokens (v2.0).** New `POST /sdwan/v2.0/api/vfflicenses/tokens/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/tokens/query
  ```

- **Get specific Vff Licenses for Tenant (v2.0).** New `GET /sdwan/v2.0/api/vfflicenses/{license_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/{license_id}
  ```

- **Vff operation (v2.0).** New `POST /sdwan/v2.0/api/vfflicenses/{license_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/{license_id}/operations
  ```

- **Get status for Vff License (v2.0).** New `GET /sdwan/v2.0/api/vfflicenses/{license_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/{license_id}/status
  ```

- **Get all Tenant Vff License Tokens (v2.0).** New `GET /sdwan/v2.0/api/vfflicenses/{license_id}/tokens` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/{license_id}/tokens
  ```

- **Create Tenant Vff License Token (v2.0).** New `POST /sdwan/v2.0/api/vfflicenses/{license_id}/tokens` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/{license_id}/tokens
  ```

- **Get specific Tenant Vff License Token (v2.0).** New `GET /sdwan/v2.0/api/vfflicenses/{license_id}/tokens/{token_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/{license_id}/tokens/{token_id}
  ```

- **Update Tenant Vff License Token (v2.0).** New `PUT /sdwan/v2.0/api/vfflicenses/{license_id}/tokens/{token_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicenses/{license_id}/tokens/{token_id}
  ```

- **Query and get Vff License State (v2.0).** New `POST /sdwan/v2.0/api/vfflicensesstatus/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vfflicensesstatus/rquery
  ```

- **Query db for VPNLinks that match query parameters (v2.0).** New `POST /sdwan/v2.0/api/vpnlinks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vpnlinks/query
  ```

- **Perform an operation on a VPN link (v2.0).** New `POST /sdwan/v2.0/api/vpnlinks/{vpn_link_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vpnlinks/{vpn_link_id}/operations
  ```

- **Get the VPNLink admin state (v2.0).** New `GET /sdwan/v2.0/api/vpnlinks/{vpn_link_id}/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vpnlinks/{vpn_link_id}/state
  ```

- **Change the VPNLink admin state (v2.0).** New `PUT /sdwan/v2.0/api/vpnlinks/{vpn_link_id}/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/vpnlinks/{vpn_link_id}/state
  ```

- **Get All VRF Context Profiles (v2.0).** New `GET /sdwan/v2.0/api/vrfcontextprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontextprofiles
  ```

- **Create a new VRF context profile (v2.0).** New `POST /sdwan/v2.0/api/vrfcontextprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontextprofiles
  ```

- **Query VRF Context Profiles (v2.0).** New `POST /sdwan/v2.0/api/vrfcontextprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontextprofiles/query
  ```

- **Delete VRF Context Profile (v2.0).** New `DELETE /sdwan/v2.0/api/vrfcontextprofiles/{vrf_context_profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontextprofiles/{vrf_context_profile_id}
  ```

- **Get VRF Context Profile (v2.0).** New `GET /sdwan/v2.0/api/vrfcontextprofiles/{vrf_context_profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontextprofiles/{vrf_context_profile_id}
  ```

- **Update VRF Context Profile (v2.0).** New `PUT /sdwan/v2.0/api/vrfcontextprofiles/{vrf_context_profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontextprofiles/{vrf_context_profile_id}
  ```

- **Get VRF segments (v2.0).** New `GET /sdwan/v2.0/api/vrfcontexts` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontexts
  ```

- **Create a new VRF context (v2.0).** New `POST /sdwan/v2.0/api/vrfcontexts` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontexts
  ```

- **Query VRF Contexts (v2.0).** New `POST /sdwan/v2.0/api/vrfcontexts/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontexts/query
  ```

- **Delete VRF segment (v2.0).** New `DELETE /sdwan/v2.0/api/vrfcontexts/{vrf_context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontexts/{vrf_context_id}
  ```

- **Get VRF segment (v2.0).** New `GET /sdwan/v2.0/api/vrfcontexts/{vrf_context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontexts/{vrf_context_id}
  ```

- **Update VRF Context (v2.0).** New `PUT /sdwan/v2.0/api/vrfcontexts/{vrf_context_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/vrfcontexts/{vrf_context_id}
  ```

- **Get all Vulnerability Security Profiles by tenant ID (v2.0).** New `GET /sdwan/v2.0/api/vulnerabilityprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vulnerabilityprofiles
  ```

- **Get an existing Vulnerability Security Profile by tenant ID and its ID (v2.0).** New `GET /sdwan/v2.0/api/vulnerabilityprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/vulnerabilityprofiles/{profile_id}
  ```

- **Get all tenant WAN networks (v2.0).** New `GET /sdwan/v2.0/api/wannetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/wannetworks
  ```

- **Create a new WAN (v2.0).** New `POST /sdwan/v2.0/api/wannetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/wannetworks
  ```

- **Query db for WAN networks that match query parameters (v2.0).** New `POST /sdwan/v2.0/api/wannetworks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/wannetworks/query
  ```

- **Delete an existing WAN (v2.0).** New `DELETE /sdwan/v2.0/api/wannetworks/{wan_network_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/wannetworks/{wan_network_id}
  ```

- **Get an existing WAN (v2.0).** New `GET /sdwan/v2.0/api/wannetworks/{wan_network_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/wannetworks/{wan_network_id}
  ```

- **Update an existing WAN (v2.0).** New `PUT /sdwan/v2.0/api/wannetworks/{wan_network_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/wannetworks/{wan_network_id}
  ```

- **Get app/wan contexts (v2.0).** New `GET /sdwan/v2.0/api/wanoverlays` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/wanoverlays
  ```

- **Create a new app/wan context (v2.0).** New `POST /sdwan/v2.0/api/wanoverlays` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/wanoverlays
  ```

- **Delete app/wan context (v2.0).** New `DELETE /sdwan/v2.0/api/wanoverlays/{wan_overlay_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/wanoverlays/{wan_overlay_id}
  ```

- **Get app/wan context (v2.0).** New `GET /sdwan/v2.0/api/wanoverlays/{wan_overlay_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/wanoverlays/{wan_overlay_id}
  ```

- **Update app/wan context (v2.0).** New `PUT /sdwan/v2.0/api/wanoverlays/{wan_overlay_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/wanoverlays/{wan_overlay_id}
  ```

- **Get all extensions from NB (v2.0).** New `GET /sdwan/v2.0/api/ws/extensions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ws/extensions
  ```

- **Create extension configuration (v2.0).** New `POST /sdwan/v2.0/api/ws/extensions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ws/extensions
  ```

- **Queries db for limit number of tenant extensions that match the query params. (v2.0).** New `POST /sdwan/v2.0/api/ws/extensions/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.0/api/ws/extensions/query
  ```

- **Delete extension (v2.0).** New `DELETE /sdwan/v2.0/api/ws/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.0/api/ws/extensions/{extension_id}
  ```

- **Get extension from NB (v2.0).** New `GET /sdwan/v2.0/api/ws/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.0/api/ws/extensions/{extension_id}
  ```

- **Update extensions configuration (v2.0).** New `PUT /sdwan/v2.0/api/ws/extensions/{extension_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.0/api/ws/extensions/{extension_id}
  ```

- **Query active user mappings of tenant (v2.1).** New `POST /sdwan/v2.1/api/activeuserips/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/activeuserips/query
  ```

- **Get application version for a tenant (v2.1).** New `GET /sdwan/v2.1/api/appdefs_version` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/appdefs_version
  ```

- **Get system application definitions (v2.1).** New `GET /sdwan/v2.1/api/appdefs_version/{vid}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/appdefs_version/{vid}
  ```

- **Change standard apps version (v2.1).** New `PUT /sdwan/v2.1/api/appdefs_version/{vid}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/appdefs_version/{vid}
  ```

- **Get audit logs for given tenant (v2.1).** New `GET /sdwan/v2.1/api/auditlog` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/auditlog
  ```

- **Get audit logs for given tenant as per specified query filters (v2.1).** New `POST /sdwan/v2.1/api/auditlog/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/auditlog/query
  ```

- **Get audit logs for given tenant and audit log id (v2.1).** New `GET /sdwan/v2.1/api/auditlog/{auditlog_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/auditlog/{auditlog_id}
  ```

- **Queries the BGP Peers Status (v2.1).** New `POST /sdwan/v2.1/api/bgppeers/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/bgppeers/status/query
  ```

- **Get existing element cellular module images (v2.1).** New `GET /sdwan/v2.1/api/cellular_module_images` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/cellular_module_images
  ```

- **Get information about a element cellular module image (v2.1).** New `GET /sdwan/v2.1/api/cellular_module_images/{image_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/cellular_module_images/{image_id}
  ```

- **Queries db for limit number of cellular module status that match query params. (v2.1).** New `POST /sdwan/v2.1/api/cellular_modules/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/cellular_modules/status/query
  ```

- **Get esp tenant clients details for tenant id (v2.1).** New `GET /sdwan/v2.1/api/clients` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/clients
  ```

- **Get a list of client custom roles (v2.1).** New `GET /sdwan/v2.1/api/clients/{client_id}/roles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/clients/{client_id}/roles
  ```

- **Get a client custom role (v2.1).** New `GET /sdwan/v2.1/api/clients/{client_id}/roles/{role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/clients/{client_id}/roles/{role_id}
  ```

- **Get directory service details of tenant (v2.1).** New `GET /sdwan/v2.1/api/directoryservices` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/directoryservices
  ```

- **Create Directory Service (v2.1).** New `POST /sdwan/v2.1/api/directoryservices` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/directoryservices
  ```

- **Delete Directory Service (v2.1).** New `DELETE /sdwan/v2.1/api/directoryservices/{directory_service_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/directoryservices/{directory_service_id}
  ```

- **Update Directory Service (v2.1).** New `PUT /sdwan/v2.1/api/directoryservices/{directory_service_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/directoryservices/{directory_service_id}
  ```

- **Get users of tenant (v2.1).** New `GET /sdwan/v2.1/api/directoryusers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/directoryusers
  ```

- **Query users. (v2.1).** New `POST /sdwan/v2.1/api/directoryusers/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/directoryusers/query
  ```

- **Get a specific user or of tenant (v2.1).** New `GET /sdwan/v2.1/api/directoryusers/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/directoryusers/{user_id}
  ```

- **Read all DNS service profiles (v2.1).** New `GET /sdwan/v2.1/api/dnsserviceprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/dnsserviceprofiles
  ```

- **Create a new DNS service profile (v2.1).** New `POST /sdwan/v2.1/api/dnsserviceprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/dnsserviceprofiles
  ```

- **Query DNS service profile based on parameters (v2.1).** New `POST /sdwan/v2.1/api/dnsserviceprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/dnsserviceprofiles/query
  ```

- **Delete a DNS service profile (v2.1).** New `DELETE /sdwan/v2.1/api/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Get a DNS service profile (v2.1).** New `GET /sdwan/v2.1/api/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Update a DNS service profile (v2.1).** New `PUT /sdwan/v2.1/api/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Get cellular module status (v2.1).** New `GET /sdwan/v2.1/api/elements/{element_id}/cellular_modules/{cellular_module_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elements/{element_id}/cellular_modules/{cellular_module_id}/status
  ```

- **Change Mode of an element from FIPS to Non-FIPS or vice-versa. (v2.1).** New `POST /sdwan/v2.1/api/elements/{element_id}/fips_mode_change_operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/elements/{element_id}/fips_mode_change_operations
  ```

- **Get all element NTP (v2.1).** New `GET /sdwan/v2.1/api/elements/{element_id}/ntp` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elements/{element_id}/ntp
  ```

- **Get specific element NTP (v2.1).** New `GET /sdwan/v2.1/api/elements/{element_id}/ntp/{ntp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elements/{element_id}/ntp/{ntp_id}
  ```

- **Update an existing element NTP. (v2.1).** New `PUT /sdwan/v2.1/api/elements/{element_id}/ntp/{ntp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/elements/{element_id}/ntp/{ntp_id}
  ```

- **Get all software upgrade status (up to 5) started by the tenant user (v2.1).** New `GET /sdwan/v2.1/api/elements/{element_id}/software/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elements/{element_id}/software/status
  ```

- **Query element security zones. (v2.1).** New `POST /sdwan/v2.1/api/elementsecurityzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementsecurityzones/query
  ```

- **Queries db for limit number of element shells that match query params. (v2.1).** New `POST /sdwan/v2.1/api/elementshells/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementshells/query
  ```

- **Get all element User (v2.1).** New `GET /sdwan/v2.1/api/elementusers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers
  ```

- **Create Element User (v2.1).** New `POST /sdwan/v2.1/api/elementusers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers
  ```

- **Delete element user (v2.1).** New `DELETE /sdwan/v2.1/api/elementusers/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}
  ```

- **Get specific element User (v2.1).** New `GET /sdwan/v2.1/api/elementusers/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}
  ```

- **Update an existing element user. (v2.1).** New `PUT /sdwan/v2.1/api/elementusers/{user_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}
  ```

- **Get all accesses for a particular user (v2.1).** New `GET /sdwan/v2.1/api/elementusers/{user_id}/access` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}/access
  ```

- **Grant Specific role to Element user on specific element (v2.1).** New `POST /sdwan/v2.1/api/elementusers/{user_id}/access` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}/access
  ```

- **Delete element user Access (v2.1).** New `DELETE /sdwan/v2.1/api/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}/access/{access_id}
  ```

- **Get specific element User access (v2.1).** New `GET /sdwan/v2.1/api/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}/access/{access_id}
  ```

- **Update an existing element user access. (v2.1).** New `PUT /sdwan/v2.1/api/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}/access/{access_id}
  ```

- **Get element user password (v2.1).** New `GET /sdwan/v2.1/api/elementusers/{user_id}/password` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/elementusers/{user_id}/password
  ```

- **GET the tenant enterprise prefix set (v2.1).** New `GET /sdwan/v2.1/api/enterpriseprefixset` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/enterpriseprefixset
  ```

- **Update the tenant enterprise prefix set (v2.1).** New `PUT /sdwan/v2.1/api/enterpriseprefixset` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/enterpriseprefixset
  ```

- **Queries db for limit number of event correlation policyrules that match query params. (v2.1).** New `POST /sdwan/v2.1/api/eventcorrelationpolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/eventcorrelationpolicyrules/query
  ```

- **Get all event correlation policyrules (v2.1).** New `GET /sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules
  ```

- **Create event correlation policyrule configuration (v2.1).** New `POST /sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules
  ```

- **Delete specific event correlation policy rule (v2.1).** New `DELETE /sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Get event correlation policy rule (v2.1).** New `GET /sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Update event correlation policyrule configuration (v2.1).** New `PUT /sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Get Machine system status for a tenant (v2.1).** New `GET /sdwan/v2.1/api/machines/{machine_id}/machinesystemstatus` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/machines/{machine_id}/machinesystemstatus
  ```

- **Get recovery token for a machine (v2.1).** New `GET /sdwan/v2.1/api/machines/{machine_id}/recovery_tokens` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/machines/{machine_id}/recovery_tokens
  ```

- **Create a Recovery Token for Fips change mode (v2.1).** New `POST /sdwan/v2.1/api/machines/{machine_id}/recovery_tokens` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/machines/{machine_id}/recovery_tokens
  ```

- **Update Recovery Token for Fips change mode (v2.1).** New `PUT /sdwan/v2.1/api/machines/{machine_id}/recovery_tokens/{token_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/machines/{machine_id}/recovery_tokens/{token_id}
  ```

- **Get Machine state (v2.1).** New `GET /sdwan/v2.1/api/machines/{machine_id}/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/machines/{machine_id}/state
  ```

- **Get multicast peer groups (v2.1).** New `GET /sdwan/v2.1/api/multicastpeergroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/multicastpeergroups
  ```

- **Create multicast peer group (v2.1).** New `POST /sdwan/v2.1/api/multicastpeergroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/multicastpeergroups
  ```

- **Delete multicast peer group (v2.1).** New `DELETE /sdwan/v2.1/api/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/multicastpeergroups/{peer_group_id}
  ```

- **Get multicast peer group (v2.1).** New `GET /sdwan/v2.1/api/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/multicastpeergroups/{peer_group_id}
  ```

- **Update multicast peer group (v2.1).** New `PUT /sdwan/v2.1/api/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/multicastpeergroups/{peer_group_id}
  ```

- **Get all Network policy global prefixes. (v2.1).** New `GET /sdwan/v2.1/api/networkpolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/networkpolicyglobalprefixes
  ```

- **Create a new global prefix. (v2.1).** New `POST /sdwan/v2.1/api/networkpolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/networkpolicyglobalprefixes
  ```

- **Query Network Global Prefixes. (v2.1).** New `POST /sdwan/v2.1/api/networkpolicyglobalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/networkpolicyglobalprefixes/query
  ```

- **Delete a Network Policy Global Prefix. (v2.1).** New `DELETE /sdwan/v2.1/api/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Get a specific Network Policy global prefix. (v2.1).** New `GET /sdwan/v2.1/api/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Update a Network global prefix. (v2.1).** New `PUT /sdwan/v2.1/api/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Query site network prefix association. (v2.1).** New `POST /sdwan/v2.1/api/networkpolicylocalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/networkpolicylocalprefixes/query
  ```

- **Get all Security Policy V2 Global Prefixes for a tenant (v2.1).** New `GET /sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes
  ```

- **Create an Security Policy V2 Global Prefix (v2.1).** New `POST /sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes
  ```

- **Query Security Policy V2 Global Prefixes of a tenant (v2.1).** New `POST /sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes/query
  ```

- **Delete a Security Policy V2 Local Prefix by tenant ID and its ID (v2.1).** New `DELETE /sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Get a Security Policy V2 Global Prefix by tenant ID and its ID (v2.1).** New `GET /sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Update an existing Security Policy V2 Global Prefix (v2.1).** New `PUT /sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Query security policy v2 local prefix site associations of a tenant (v2.1).** New `POST /sdwan/v2.1/api/ngfwsecuritypolicylocalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/ngfwsecuritypolicylocalprefixes/query
  ```

- **Get a list of tenant operators (v2.1).** New `GET /sdwan/v2.1/api/operators` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators
  ```

- **Create a tenant operator (v2.1).** New `POST /sdwan/v2.1/api/operators` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators
  ```

- **Delete a tenant operator (v2.1).** New `DELETE /sdwan/v2.1/api/operators/{operator_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}
  ```

- **Get a tenant operator (v2.1).** New `GET /sdwan/v2.1/api/operators/{operator_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}
  ```

- **Patch a tenant operator (v2.1).** New `PATCH /sdwan/v2.1/api/operators/{operator_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PATCH api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}
  ```

- **Update a tenant operator (v2.1).** New `PUT /sdwan/v2.1/api/operators/{operator_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}
  ```

- **Get a list of auth tokens (v2.1).** New `GET /sdwan/v2.1/api/operators/{operator_id}/authtokens` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}/authtokens
  ```

- **Create an auth token (v2.1).** New `POST /sdwan/v2.1/api/operators/{operator_id}/authtokens` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}/authtokens
  ```

- **Delete an auth token (v2.1).** New `DELETE /sdwan/v2.1/api/operators/{operator_id}/authtokens/{authtoken_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}/authtokens/{authtoken_id}
  ```

- **Get an auth token (v2.1).** New `GET /sdwan/v2.1/api/operators/{operator_id}/authtokens/{authtoken_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}/authtokens/{authtoken_id}
  ```

- **Delete esp operator permissions assigned under a client (v2.1).** New `DELETE /sdwan/v2.1/api/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Get esp operator permissions assigned under a client (v2.1).** New `GET /sdwan/v2.1/api/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Create or update esp operator permissions assigned under a client (v2.1).** New `PUT /sdwan/v2.1/api/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Query OSPF config (v2.1).** New `POST /sdwan/v2.1/api/ospfconfigs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/ospfconfigs/query
  ```

- **get all Path Groups for a tenant. (v2.1).** New `GET /sdwan/v2.1/api/pathgroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/pathgroups
  ```

- **Create a Path Group for a tenant. (v2.1).** New `POST /sdwan/v2.1/api/pathgroups` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/pathgroups
  ```

- **Queries db for limit number of network contexts that match query params. (v2.1).** New `POST /sdwan/v2.1/api/pathgroups/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/pathgroups/query
  ```

- **Delete A Path Group of a tenant. (v2.1).** New `DELETE /sdwan/v2.1/api/pathgroups/{path_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/pathgroups/{path_group_id}
  ```

- **get A Path Group of a tenant. (v2.1).** New `GET /sdwan/v2.1/api/pathgroups/{path_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/pathgroups/{path_group_id}
  ```

- **Update A Path Group of a tenant. (v2.1).** New `PUT /sdwan/v2.1/api/pathgroups/{path_group_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/pathgroups/{path_group_id}
  ```

- **Get ThreholdProfileList (v2.1).** New `GET /sdwan/v2.1/api/perfmgmtthresholdprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/perfmgmtthresholdprofiles
  ```

- **Create a new Threshold Profile (v2.1).** New `POST /sdwan/v2.1/api/perfmgmtthresholdprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/perfmgmtthresholdprofiles
  ```

- **Queries db for limit number of tenant level threshold profiles that match query params. (v2.1).** New `POST /sdwan/v2.1/api/perfmgmtthresholdprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/perfmgmtthresholdprofiles/query
  ```

- **Delete a Threshold Profile (v2.1).** New `DELETE /sdwan/v2.1/api/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Get a ThresholdProfile (v2.1).** New `GET /sdwan/v2.1/api/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Update a Threshold Profile (v2.1).** New `PUT /sdwan/v2.1/api/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Get all Priority policy prefixes. (v2.1).** New `GET /sdwan/v2.1/api/prioritypolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicyglobalprefixes
  ```

- **Create a new global prefix. (v2.1).** New `POST /sdwan/v2.1/api/prioritypolicyglobalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicyglobalprefixes
  ```

- **Query Priority Global Prefixes. (v2.1).** New `POST /sdwan/v2.1/api/prioritypolicyglobalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicyglobalprefixes/query
  ```

- **Delete a Priority Policy Global Prefix. (v2.1).** New `DELETE /sdwan/v2.1/api/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Get a specific Netwok Policy global prefix. (v2.1).** New `GET /sdwan/v2.1/api/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Update a  Priority global prefix. (v2.1).** New `PUT /sdwan/v2.1/api/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Query site priority prefix association. (v2.1).** New `POST /sdwan/v2.1/api/prioritypolicylocalprefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicylocalprefixes/query
  ```

- **Query Priority policy rules. (v2.1).** New `POST /sdwan/v2.1/api/prioritypolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicyrules/query
  ```

- **Get priority policy rules of tenant (v2.1).** New `GET /sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules
  ```

- **Create a new PriorityPolicyRule (v2.1).** New `POST /sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules
  ```

- **Delete priority policy rule of tenant. (v2.1).** New `DELETE /sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Get a specific priority policy rule of tenant (v2.1).** New `GET /sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Update priority policy rule of tenant. (v2.1).** New `PUT /sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Get ProbeConfigList (v2.1).** New `GET /sdwan/v2.1/api/probeconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/probeconfigs
  ```

- **Create a new Probe Config (v2.1).** New `POST /sdwan/v2.1/api/probeconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/probeconfigs
  ```

- **Queries db for limit number of tenant level probe profiles that match query params. (v2.1).** New `POST /sdwan/v2.1/api/probeconfigs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/probeconfigs/query
  ```

- **Delete a Probe Config (v2.1).** New `DELETE /sdwan/v2.1/api/probeconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/probeconfigs/{config_id}
  ```

- **Get a ProbeConfig (v2.1).** New `GET /sdwan/v2.1/api/probeconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/probeconfigs/{config_id}
  ```

- **Update a ProbeConfig (v2.1).** New `PUT /sdwan/v2.1/api/probeconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/probeconfigs/{config_id}
  ```

- **Get current user profile (v2.1).** New `GET /sdwan/v2.1/api/profile` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/profile
  ```

- **Get a list of custom roles (v2.1).** New `GET /sdwan/v2.1/api/roles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/roles
  ```

- **Add a custom role (v2.1).** New `POST /sdwan/v2.1/api/roles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/roles
  ```

- **Delete a custom role (v2.1).** New `DELETE /sdwan/v2.1/api/roles/{role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/roles/{role_id}
  ```

- **Get a custom role (v2.1).** New `GET /sdwan/v2.1/api/roles/{role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/roles/{role_id}
  ```

- **Update a custom role (v2.1).** New `PUT /sdwan/v2.1/api/roles/{role_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/roles/{role_id}
  ```

- **GET existing tenant SD-WAN applications with release information. (v2.1).** New `GET /sdwan/v2.1/api/sdwanapps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sdwanapps
  ```

- **GET existing tenant SD-WAN application with release information. (v2.1).** New `GET /sdwan/v2.1/api/sdwanapps/{app_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sdwanapps/{app_id}
  ```

- **Get security zones (v2.1).** New `GET /sdwan/v2.1/api/securityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/securityzones
  ```

- **Create a new security zone (v2.1).** New `POST /sdwan/v2.1/api/securityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/securityzones
  ```

- **Queries db for limit number of security zones that match query params. (v2.1).** New `POST /sdwan/v2.1/api/securityzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/securityzones/query
  ```

- **Delete an existing security zone (v2.1).** New `DELETE /sdwan/v2.1/api/securityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/securityzones/{zone_id}
  ```

- **Get security zone (v2.1).** New `GET /sdwan/v2.1/api/securityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/securityzones/{zone_id}
  ```

- **Update an existing security zone (v2.1).** New `PUT /sdwan/v2.1/api/securityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/securityzones/{zone_id}
  ```

- **Get getServiceBindingMapList (v2.1).** New `GET /sdwan/v2.1/api/servicebindingmaps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicebindingmaps
  ```

- **Create a new Service Binding Map (v2.1).** New `POST /sdwan/v2.1/api/servicebindingmaps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicebindingmaps
  ```

- **Queries db for limit number of service bindings that match query params. (v2.1).** New `POST /sdwan/v2.1/api/servicebindingmaps/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicebindingmaps/query
  ```

- **Delete a Service Binding Map (v2.1).** New `DELETE /sdwan/v2.1/api/servicebindingmaps/{map_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicebindingmaps/{map_id}
  ```

- **Get a ServiceBindingMap (v2.1).** New `GET /sdwan/v2.1/api/servicebindingmaps/{map_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicebindingmaps/{map_id}
  ```

- **Update a ServiceBindingMap (v2.1).** New `PUT /sdwan/v2.1/api/servicebindingmaps/{map_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicebindingmaps/{map_id}
  ```

- **Get getServiceLabelList (v2.1).** New `GET /sdwan/v2.1/api/servicelabels` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicelabels
  ```

- **Create a new Service Label (v2.1).** New `POST /sdwan/v2.1/api/servicelabels` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicelabels
  ```

- **Queries db for limit number of service labels that match query params. (v2.1).** New `POST /sdwan/v2.1/api/servicelabels/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicelabels/query
  ```

- **Delete a Service Label (v2.1).** New `DELETE /sdwan/v2.1/api/servicelabels/{service_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicelabels/{service_label_id}
  ```

- **Get a GetServiceLabel (v2.1).** New `GET /sdwan/v2.1/api/servicelabels/{service_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicelabels/{service_label_id}
  ```

- **Update a ServiceLabel (v2.1).** New `PUT /sdwan/v2.1/api/servicelabels/{service_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/servicelabels/{service_label_id}
  ```

- **Bulk site update API (v2.1).** New `POST /sdwan/v2.1/api/sites/bulkoperations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/bulkoperations
  ```

- **Get device id site configs (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/deviceidconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/deviceidconfigs
  ```

- **Get device id site config (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/deviceidconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/deviceidconfigs/{config_id}
  ```

- **Update device Id site config (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/deviceidconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/deviceidconfigs/{config_id}
  ```

- **Get BGP Peer advertised prefixes (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/advertisedprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/advertisedprefixes
  ```

- **Get BGP reachable prefix information (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/reachableprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/reachableprefixes
  ```

- **Get BGP discovered prefix information (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/discoveredprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/discoveredprefixes
  ```

- **Get all Multicast configs (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs
  ```

- **Get Multicast config (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}
  ```

- **Update Multicast config (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}
  ```

- **Get all OSPF configs (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs
  ```

- **Creates OSPF config (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs
  ```

- **Deletes OSPF config (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Get OSPF config (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Updates OSPF config (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Get all Access List for Element (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists
  ```

- **Create AS-Path Access List (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists
  ```

- **Queries db for limit number of access lists that match query params. (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/query
  ```

- **Delete Access List (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Get Specific Access List (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Updates Access List (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Get all Prefix List for Element (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists
  ```

- **Create IP Prefix List (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists
  ```

- **Queries db for limit number of prefix lists that match query params. (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/query
  ```

- **Delete Prefix List (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}
  ```

- **Get Specific Prefix List (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}
  ```

- **Updates Prefix List (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}
  ```

- **Get element security zones (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones
  ```

- **Create an association between element and security zone. (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones
  ```

- **Delete an existing security zone (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Get element security zone (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Update an existing element security zone (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Get SNMP Agent on an element (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents
  ```

- **Create SNMP Agent (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents
  ```

- **delete SNMP Agent (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **get SNMP Agent (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **Update SNMP Agent (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **Get static route status (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}/status
  ```

- **Get Element WAN interface status (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/waninterfaces/{wan_interface_id}/state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elements/{element_id}/waninterfaces/{wan_interface_id}/state
  ```

- **Get All Element Shells (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elementshells` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elementshells
  ```

- **Create an element shell (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/elementshells` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elementshells
  ```

- **Delete an element shell (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Get Element Shell (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Used for associations and element shell updates (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Get site Network policy prefix associations (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes
  ```

- **Create an association between site and Network local Prefix. (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes
  ```

- **Delete an existing Site Network Policy local prefix association (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get site Network policy local prefix association (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Site Network policy local prefix (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get all security policy v2 local prefix site association for a site (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Create a security policy V2 local prefix site association (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Delete an existing security policy v2 local prefix site association (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get an existing security policy v2 local prefix assocation by its ID (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing security policy V2 local prefix site association (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get site Priority policy prefix associations (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes
  ```

- **Create an association between site and Priority local Prefix. (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes
  ```

- **Delete an existing Site Priority Policy local prefix association (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Get site Priority policy local prefix association (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Site Priority policy local prefix (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Get SASE connections for sites (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/prismasase_connections` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prismasase_connections
  ```

- **Create a new SASE connection (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/prismasase_connections` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prismasase_connections
  ```

- **Get a specific SASE connection (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **Update the SASE connection (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **Get site ciphers (v2.1) (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/siteciphers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/siteciphers
  ```

- **Update site cipher (v2.1) (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/siteciphers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/siteciphers
  ```

- **Get site security zones (v2.1) (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/sitesecurityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/sitesecurityzones
  ```

- **Create site security zone (v2.1) (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/sitesecurityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/sitesecurityzones
  ```

- **Query site security zones (v2.1) (v2.1).** New `POST /sdwan/v2.1/api/sites/{site_id}/sitesecurityzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/sitesecurityzones/query
  ```

- **Delete site security zone (v2.1) (v2.1).** New `DELETE /sdwan/v2.1/api/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Get site security zone (v2.1) (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Update site security zone (v2.1) (v2.1).** New `PUT /sdwan/v2.1/api/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Get a specific Site WAN interface status (v2.1).** New `GET /sdwan/v2.1/api/sites/{site_id}/waninterfaces/{wan_interface_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/sites/{site_id}/waninterfaces/{wan_interface_id}/status
  ```

- **Query all site security zone associations (v2.1) (v2.1).** New `POST /sdwan/v2.1/api/sitesecurityzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/sitesecurityzones/query
  ```

- **Get all licenses skus for a tenant (v2.1).** New `GET /sdwan/v2.1/api/skus` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/skus
  ```

- **Get a license sku for a tenant (v2.1).** New `GET /sdwan/v2.1/api/skus/{id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/skus/{id}
  ```

- **Get the current image status of all the element (v2.1).** New `POST /sdwan/v2.1/api/software/current_status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/software/current_status/query
  ```

- **Query the software upgrade status of all tenant elements (v2.1).** New `POST /sdwan/v2.1/api/software/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/software/status/query
  ```

- **Get Syslog Server Profiles (v2.1).** New `GET /sdwan/v2.1/api/syslogserverprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/syslogserverprofiles
  ```

- **Create Syslog Server Profile (v2.1).** New `POST /sdwan/v2.1/api/syslogserverprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/syslogserverprofiles
  ```

- **Delete Syslog Server Profile (v2.1).** New `DELETE /sdwan/v2.1/api/syslogserverprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/syslogserverprofiles/{profile_id}
  ```

- **Get Syslog Server Profile (v2.1).** New `GET /sdwan/v2.1/api/syslogserverprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/syslogserverprofiles/{profile_id}
  ```

- **Update Syslog Server Profile (v2.1).** New `PUT /sdwan/v2.1/api/syslogserverprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/syslogserverprofiles/{profile_id}
  ```

- **Get all Vff Licenses for Tenant (v2.1).** New `GET /sdwan/v2.1/api/vfflicenses` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/vfflicenses
  ```

- **Get specific Vff Licenses for Tenant (v2.1).** New `GET /sdwan/v2.1/api/vfflicenses/{license_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/vfflicenses/{license_id}
  ```

- **Get status for Vff License (v2.1).** New `GET /sdwan/v2.1/api/vfflicenses/{license_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/vfflicenses/{license_id}/status
  ```

- **Get the VPNLink status (v2.1).** New `GET /sdwan/v2.1/api/vpnlinks/{vpn_link_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/vpnlinks/{vpn_link_id}/status
  ```

- **Get all tenant WAN networks (v2.1).** New `GET /sdwan/v2.1/api/wannetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/wannetworks
  ```

- **Create a new WAN (v2.1).** New `POST /sdwan/v2.1/api/wannetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/wannetworks
  ```

- **Query db for WAN networks that match query parameters (v2.1).** New `POST /sdwan/v2.1/api/wannetworks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.1/api/wannetworks/query
  ```

- **Delete an existing WAN (v2.1).** New `DELETE /sdwan/v2.1/api/wannetworks/{wan_network_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.1/api/wannetworks/{wan_network_id}
  ```

- **Get an existing WAN (v2.1).** New `GET /sdwan/v2.1/api/wannetworks/{wan_network_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.1/api/wannetworks/{wan_network_id}
  ```

- **Update an existing WAN (v2.1).** New `PUT /sdwan/v2.1/api/wannetworks/{wan_network_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.1/api/wannetworks/{wan_network_id}
  ```

- **Get all Site WAN interfaces (v2.10).** New `GET /sdwan/v2.10/api/sites/{site_id}/waninterfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.10/api/sites/{site_id}/waninterfaces
  ```

- **Create a new Site WAN interface (v2.10).** New `POST /sdwan/v2.10/api/sites/{site_id}/waninterfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.10/api/sites/{site_id}/waninterfaces
  ```

- **Delete existing WAN interface (v2.10).** New `DELETE /sdwan/v2.10/api/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.10/api/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Get a specific Site WAN interface (v2.10).** New `GET /sdwan/v2.10/api/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.10/api/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Update the Site WAN interface (v2.10).** New `PUT /sdwan/v2.10/api/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.10/api/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Query db for Site WAN interfaces that match query parameters (v2.10).** New `POST /sdwan/v2.10/api/waninterfaces/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.10/api/waninterfaces/query
  ```

- **Get tenant details for tenant id (v2.12).** New `GET /sdwan/v2.12/api/` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.12/api/
  ```

- **Patch tenant (v2.12).** New `PATCH /sdwan/v2.12/api/` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PATCH api.sase.paloaltonetworks.com/sdwan/v2.12/api/
  ```

- **Update tenant (v2.12).** New `PUT /sdwan/v2.12/api/` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.12/api/
  ```

- **Get tenant details for tenant id (v2.13).** New `GET /sdwan/v2.13/api/` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.13/api/
  ```

- **Patch tenant (v2.13).** New `PATCH /sdwan/v2.13/api/` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PATCH api.sase.paloaltonetworks.com/sdwan/v2.13/api/
  ```

- **Update tenant (v2.13).** New `PUT /sdwan/v2.13/api/` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.13/api/
  ```

- **Get application definition overrides for system appdef (v2.2).** New `GET /sdwan/v2.2/api/appdefs/{appdef_id}/overrides` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/appdefs/{appdef_id}/overrides
  ```

- **Create a application definition overrides for system appdef (v2.2).** New `POST /sdwan/v2.2/api/appdefs/{appdef_id}/overrides` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/appdefs/{appdef_id}/overrides
  ```

- **Delete application definition overrides for system appdef (v2.2).** New `DELETE /sdwan/v2.2/api/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Get application definition overrides for system appdef (v2.2).** New `GET /sdwan/v2.2/api/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Update a application definition overrides for system appdef (v2.2).** New `PUT /sdwan/v2.2/api/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Get application version for a tenant (v2.2).** New `GET /sdwan/v2.2/api/appdefs_version` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/appdefs_version
  ```

- **Change standard apps version (v2.2).** New `PUT /sdwan/v2.2/api/appdefs_version` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/appdefs_version
  ```

- **Query Element Access Config based on parameters (v2.2).** New `POST /sdwan/v2.2/api/elementaccessconfigs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/elementaccessconfigs/query
  ```

- **Get all Element Access Configs (v2.2).** New `GET /sdwan/v2.2/api/elements/{element_id}/elementaccessconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/elements/{element_id}/elementaccessconfigs
  ```

- **Get specific element's Access Config (v2.2).** New `GET /sdwan/v2.2/api/elements/{element_id}/elementaccessconfigs/{element_access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/elements/{element_id}/elementaccessconfigs/{element_access_id}
  ```

- **Update an Access Config on particular element. (v2.2).** New `PUT /sdwan/v2.2/api/elements/{element_id}/elementaccessconfigs/{element_access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/elements/{element_id}/elementaccessconfigs/{element_access_id}
  ```

- **Get IPSECProfileList (v2.2).** New `GET /sdwan/v2.2/api/ipsecprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/ipsecprofiles
  ```

- **Create a new IPSEC Profile (v2.2).** New `POST /sdwan/v2.2/api/ipsecprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/ipsecprofiles
  ```

- **Queries db for limit number of tenant level ipsec profiles that match query params. (v2.2).** New `POST /sdwan/v2.2/api/ipsecprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/ipsecprofiles/query
  ```

- **Delete a IPSEC Profile (v2.2).** New `DELETE /sdwan/v2.2/api/ipsecprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/ipsecprofiles/{profile_id}
  ```

- **Get a IPSECProfile (v2.2).** New `GET /sdwan/v2.2/api/ipsecprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/ipsecprofiles/{profile_id}
  ```

- **Update a IPSECProfile (v2.2).** New `PUT /sdwan/v2.2/api/ipsecprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/ipsecprofiles/{profile_id}
  ```

- **Query security policy v2 rules of a tenant (v2.2).** New `POST /sdwan/v2.2/api/ngfwsecuritypolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/ngfwsecuritypolicyrules/query
  ```

- **Get all Security Policy V2 Rules under a policy set (v2.2).** New `GET /sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules
  ```

- **Create a Security Policy V2 Rule under a policy set (v2.2).** New `POST /sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules
  ```

- **Delete an existing Security Policy V2 Rule under a policy set (v2.2).** New `DELETE /sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Get an existing Security Policy V2 Rule under a policy set (v2.2).** New `GET /sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Update an existing Security Policy V2 Rule under a policy set (v2.2).** New `PUT /sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Get a list of tenant operators (v2.2).** New `GET /sdwan/v2.2/api/operators` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/operators
  ```

- **Create a tenant operator (v2.2).** New `POST /sdwan/v2.2/api/operators` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/operators
  ```

- **Delete a tenant operator (v2.2).** New `DELETE /sdwan/v2.2/api/operators/{operator_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/operators/{operator_id}
  ```

- **Get a tenant operator (v2.2).** New `GET /sdwan/v2.2/api/operators/{operator_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/operators/{operator_id}
  ```

- **Patch a tenant operator (v2.2).** New `PATCH /sdwan/v2.2/api/operators/{operator_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PATCH api.sase.paloaltonetworks.com/sdwan/v2.2/api/operators/{operator_id}
  ```

- **Update a tenant operator (v2.2).** New `PUT /sdwan/v2.2/api/operators/{operator_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/operators/{operator_id}
  ```

- **Query PERFMGMT policy rules V2.2. (v2.2).** New `POST /sdwan/v2.2/api/perfmgmtpolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/perfmgmtpolicyrules/query
  ```

- **Get policy rules of policy set V2.2 (v2.2).** New `GET /sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules
  ```

- **Create a new PERFMGMT Policy Rule V2.2 (v2.2).** New `POST /sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules
  ```

- **Delete PERFMGMT policy rule of tenant V2.2 (v2.2).** New `DELETE /sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Get a specific PERFMGMT policy rule of tenant V2.2 (v2.2).** New `GET /sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Update policy rule of tenant V2.1. (v2.2).** New `PUT /sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Query Priority policy rules. (v2.2).** New `POST /sdwan/v2.2/api/prioritypolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/prioritypolicyrules/query
  ```

- **Get priority policy rules of tenant (v2.2).** New `GET /sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules
  ```

- **Create a new PriorityPolicyRule (v2.2).** New `POST /sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules
  ```

- **Delete priority policy rule of tenant. (v2.2).** New `DELETE /sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Get a specific priority policy rule of tenant (v2.2).** New `GET /sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Update priority policy rule of tenant. (v2.2).** New `PUT /sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **GET existing tenant SD-WAN applications with release information. (v2.2).** New `GET /sdwan/v2.2/api/sdwanapps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sdwanapps
  ```

- **GET existing tenant SD-WAN application with release information. (v2.2).** New `GET /sdwan/v2.2/api/sdwanapps/{app_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sdwanapps/{app_id}
  ```

- **Get security zones (v2.2) (v2.2).** New `GET /sdwan/v2.2/api/securityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/securityzones
  ```

- **Create a new security zone (v2.2) (v2.2).** New `POST /sdwan/v2.2/api/securityzones` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/securityzones
  ```

- **Query security zones (v2.2) (v2.2).** New `POST /sdwan/v2.2/api/securityzones/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/securityzones/query
  ```

- **Delete security zone (v2.2) (v2.2).** New `DELETE /sdwan/v2.2/api/securityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/securityzones/{zone_id}
  ```

- **Get security zone (v2.2) (v2.2).** New `GET /sdwan/v2.2/api/securityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/securityzones/{zone_id}
  ```

- **Update security zone (v2.2) (v2.2).** New `PUT /sdwan/v2.2/api/securityzones/{zone_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/securityzones/{zone_id}
  ```

- **Get all DHCPServers for a Tenant on a site (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/dhcpservers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/dhcpservers
  ```

- **Create a new dhcp server configuration for a subnet (v2.2).** New `POST /sdwan/v2.2/api/sites/{site_id}/dhcpservers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/dhcpservers
  ```

- **Delete DHCPServer for a Tenant on a site (v2.2).** New `DELETE /sdwan/v2.2/api/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Get DHCPServer for a Tenant on a site (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Update an existing dhcp server configuration for a subnet (v2.2).** New `PUT /sdwan/v2.2/api/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Get all BGP Peer status info from NB (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/bgppeers/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/bgppeers/status
  ```

- **Get BGP discovered prefix information (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/discoveredprefixes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/discoveredprefixes
  ```

- **Get BGP Peer status info from NB (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/status
  ```

- **Get all Route Map for Element (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps
  ```

- **Create Route Map (v2.2).** New `POST /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps
  ```

- **Queries db for limit number of route maps that match query params. (v2.2).** New `POST /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps/query
  ```

- **Delete Route Map (v2.2).** New `DELETE /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Get Specific Route Map (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Updates Route Map (v2.2).** New `PUT /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Get static routes (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes
  ```

- **Create static route (v2.2).** New `POST /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes
  ```

- **Delete static route (v2.2).** New `DELETE /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Get static route (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Update static route (v2.2).** New `PUT /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Get static route status (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}/status
  ```

- **Get Syslog Servers on an element (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers
  ```

- **Create Syslog Server (v2.2).** New `POST /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers
  ```

- **Delete Syslog Server (v2.2).** New `DELETE /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Get Syslog Server (v2.2).** New `GET /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Update Syslog Server (v2.2).** New `PUT /sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.2/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Get the VPNLink status (v2.2).** New `GET /sdwan/v2.2/api/vpnlinks/{vpn_link_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.2/api/vpnlinks/{vpn_link_id}/status
  ```

- **Get application definition overrides for system appdef (v2.3).** New `GET /sdwan/v2.3/api/appdefs/{appdef_id}/overrides` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/appdefs/{appdef_id}/overrides
  ```

- **Create a application definition overrides for system appdef (v2.3).** New `POST /sdwan/v2.3/api/appdefs/{appdef_id}/overrides` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/appdefs/{appdef_id}/overrides
  ```

- **Delete application definition overrides for system appdef (v2.3).** New `DELETE /sdwan/v2.3/api/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Get application definition overrides for system appdef (v2.3).** New `GET /sdwan/v2.3/api/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Update a application definition overrides for system appdef (v2.3).** New `PUT /sdwan/v2.3/api/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Get all machines allocated by ESP to a client tenant (v2.3).** New `GET /sdwan/v2.3/api/clients/{client_id}/machines` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/clients/{client_id}/machines
  ```

- **Query and get all machines allocated by ESP to a client tenant (v2.3).** New `POST /sdwan/v2.3/api/clients/{client_id}/machines/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/clients/{client_id}/machines/query
  ```

- **Get a specific machine allocated by ESP to a client tenant (v2.3).** New `GET /sdwan/v2.3/api/clients/{client_id}/machines/{machine_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/clients/{client_id}/machines/{machine_id}
  ```

- **Reallocate a specific machine from one client tenant to another, both client tenants are clients of the same ESP. (v2.3).** New `POST /sdwan/v2.3/api/clients/{client_id}/machines/{machine_id}/reallocate` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/clients/{client_id}/machines/{machine_id}/reallocate
  ```

- **Get existing machine images (v2.3).** New `GET /sdwan/v2.3/api/element_images` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/element_images
  ```

- **Get information about a machine image (v2.3).** New `GET /sdwan/v2.3/api/element_images/{machine_image_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/element_images/{machine_image_id}
  ```

- **Query Element Access Config v2.3 with element_id (v2.3).** New `POST /sdwan/v2.3/api/elementaccessconfigs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/elementaccessconfigs/query
  ```

- **Get all Element Access Configs v2.3 (v2.3).** New `GET /sdwan/v2.3/api/elements/{element_id}/elementaccessconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/elements/{element_id}/elementaccessconfigs
  ```

- **Get Element Access Config v2.3 (v2.3).** New `GET /sdwan/v2.3/api/elements/{element_id}/elementaccessconfigs/{element_access_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/elements/{element_id}/elementaccessconfigs/{element_access_id}
  ```

- **Get IPSECProfileList (v2.3) (v2.3).** New `GET /sdwan/v2.3/api/ipsecprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/ipsecprofiles
  ```

- **Create IPSEC Profile (v2.3) (v2.3).** New `POST /sdwan/v2.3/api/ipsecprofiles` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/ipsecprofiles
  ```

- **Generate PPK Secret (v2.3) (v2.3).** New `POST /sdwan/v2.3/api/ipsecprofiles/ppksecret` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/ipsecprofiles/ppksecret
  ```

- **Queries db for limit number of tenant level ipsec profiles that match query params. (v2.3).** New `POST /sdwan/v2.3/api/ipsecprofiles/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/ipsecprofiles/query
  ```

- **deleteIPSECProfile (v2.3).** New `DELETE /sdwan/v2.3/api/ipsecprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/ipsecprofiles/{profile_id}
  ```

- **Get a IPSECProfile (v2.3) (v2.3).** New `GET /sdwan/v2.3/api/ipsecprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/ipsecprofiles/{profile_id}
  ```

- **Update a IPSECProfile (v2.3) (v2.3).** New `PUT /sdwan/v2.3/api/ipsecprofiles/{profile_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/ipsecprofiles/{profile_id}
  ```

- **Get all machines of a tenant (v2.3).** New `GET /sdwan/v2.3/api/machines` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/machines
  ```

- **Query and get machines of a tenant (v2.3).** New `POST /sdwan/v2.3/api/machines/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/machines/query
  ```

- **Get a specific machine of a tenant (v2.3).** New `GET /sdwan/v2.3/api/machines/{machine_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/machines/{machine_id}
  ```

- **Update a specific machine of a tenant using operations (v2.3).** New `POST /sdwan/v2.3/api/machines/{machine_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/machines/{machine_id}/operations
  ```

- **Query security policy v2 rules of a tenant (v2.3).** New `POST /sdwan/v2.3/api/ngfwsecuritypolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/ngfwsecuritypolicyrules/query
  ```

- **Get all Security Policy V2 Rules under a policy set (v2.3).** New `GET /sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules
  ```

- **Create a Security Policy V2 Rule under a policy set (v2.3).** New `POST /sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules
  ```

- **Delete an existing Security Policy V2 Rule under a policy set (v2.3).** New `DELETE /sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Get an existing Security Policy V2 Rule under a policy set (v2.3).** New `GET /sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Update an existing Security Policy V2 Rule under a policy set (v2.3).** New `PUT /sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Query PERFMGMT policy rules V2.3. (v2.3).** New `POST /sdwan/v2.3/api/perfmgmtpolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/perfmgmtpolicyrules/query
  ```

- **Get policy rules of policy set V2.3 (v2.3).** New `GET /sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules
  ```

- **Create a new PERFMGMT Policy Rule V2.3 (v2.3).** New `POST /sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules
  ```

- **Delete PERFMGMT policy rule of tenant V2.3 (v2.3).** New `DELETE /sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Get a specific PERFMGMT policy rule of tenant V2.3 (v2.3).** New `GET /sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Update policy rule of tenant V2.3. (v2.3).** New `PUT /sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Get all DHCPServers for a Tenant on a site (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/dhcpservers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/dhcpservers
  ```

- **Create a new dhcp server configuration for a subnet (v2.3).** New `POST /sdwan/v2.3/api/sites/{site_id}/dhcpservers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/dhcpservers
  ```

- **Delete DHCPServer for a Tenant on a site (v2.3).** New `DELETE /sdwan/v2.3/api/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Get DHCPServer for a Tenant on a site (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Update an existing dhcp server configuration for a subnet (v2.3).** New `PUT /sdwan/v2.3/api/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Get all BGP Peer status info from NB (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/bgppeers/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/bgppeers/status
  ```

- **Get BGP Peer status info from NB (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/status
  ```

- **Get all Route Map for Element (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps
  ```

- **Create Route Map (v2.3).** New `POST /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps
  ```

- **Queries db for limit number of route maps that match query params. (v2.3).** New `POST /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps/query
  ```

- **Delete Route Map (v2.3).** New `DELETE /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Get Specific Route Map (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Updates Route Map (v2.3).** New `PUT /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Get static routes (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes
  ```

- **Create static route (v2.3).** New `POST /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes
  ```

- **Delete static route (v2.3).** New `DELETE /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Get static route (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Update static route (v2.3).** New `PUT /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Get Syslog Servers on an element (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers
  ```

- **Create Syslog Server (v2.3).** New `POST /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers
  ```

- **Delete Syslog Server (v2.3).** New `DELETE /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Get Syslog Server (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Update Syslog Server (v2.3).** New `PUT /sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Get all Element Shell Interfaces (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces
  ```

- **Create a Interface (v2.3).** New `POST /sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces
  ```

- **Delete an element shell interface (v2.3).** New `DELETE /sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Get Element Shell Interface (v2.3).** New `GET /sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Update a Element Shell Interface (v2.3).** New `PUT /sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.3/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Get existing machine images (v2.4).** New `GET /sdwan/v2.4/api/element_images` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.4/api/element_images
  ```

- **Get information about a machine image (v2.4).** New `GET /sdwan/v2.4/api/element_images/{machine_image_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.4/api/element_images/{machine_image_id}
  ```

- **Query Network policy rules. (v2.4).** New `POST /sdwan/v2.4/api/networkpolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.4/api/networkpolicyrules/query
  ```

- **Get network policy rules of tenant (v2.4).** New `GET /sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules
  ```

- **Create a new NetworkPolicyRule (v2.4).** New `POST /sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules
  ```

- **Delete network policy rule of tenant. (v2.4).** New `DELETE /sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Get a specific network policy rule of tenant (v2.4).** New `GET /sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Update network policy rule of tenant. (v2.4).** New `PUT /sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.4/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Get all BGP configs (v2.4).** New `GET /sdwan/v2.4/api/sites/{site_id}/elements/{element_id}/bgpconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/elements/{element_id}/bgpconfigs
  ```

- **Get BGP config (v2.4).** New `GET /sdwan/v2.4/api/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}
  ```

- **Updates BGP config (v2.4).** New `PUT /sdwan/v2.4/api/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}
  ```

- **Get all Element Shell Interfaces (v2.4).** New `GET /sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces
  ```

- **Create a Interface (v2.4).** New `POST /sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces
  ```

- **Delete an element shell interface (v2.4).** New `DELETE /sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Get Element Shell Interface (v2.4).** New `GET /sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Update a Element Shell Interface (v2.4).** New `PUT /sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Query db for Site WAN interfaces that match query parameters (v2.4).** New `POST /sdwan/v2.4/api/sites/{site_id}/waninterfaces/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.4/api/sites/{site_id}/waninterfaces/query
  ```

- **Get all application definitions (v2.5).** New `GET /sdwan/v2.5/api/appdefs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/appdefs
  ```

- **Create an application definition (v2.5).** New `POST /sdwan/v2.5/api/appdefs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/appdefs
  ```

- **Queries db for limit number of app defs that match query params. (v2.5).** New `POST /sdwan/v2.5/api/appdefs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/appdefs/query
  ```

- **Delete an application definition (v2.5).** New `DELETE /sdwan/v2.5/api/appdefs/{appdef_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.5/api/appdefs/{appdef_id}
  ```

- **Get application definition (v2.5).** New `GET /sdwan/v2.5/api/appdefs/{appdef_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/appdefs/{appdef_id}
  ```

- **Update an application definition (v2.5).** New `PUT /sdwan/v2.5/api/appdefs/{appdef_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.5/api/appdefs/{appdef_id}
  ```

- **Get all machines allocated by ESP to a client tenant (v2.5).** New `GET /sdwan/v2.5/api/clients/{client_id}/machines` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/clients/{client_id}/machines
  ```

- **Query and get all machines allocated by ESP to a client tenant (v2.5).** New `POST /sdwan/v2.5/api/clients/{client_id}/machines/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/clients/{client_id}/machines/query
  ```

- **Get a specific machine allocated by ESP to a client tenant (v2.5).** New `GET /sdwan/v2.5/api/clients/{client_id}/machines/{machine_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/clients/{client_id}/machines/{machine_id}
  ```

- **Reallocate a specific machine from one client tenant to another, both client tenants are clients of the same ESP. (v2.5).** New `POST /sdwan/v2.5/api/clients/{client_id}/machines/{machine_id}/reallocate` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/clients/{client_id}/machines/{machine_id}/reallocate
  ```

- **Query and get element status objects for a tenant (v2.5).** New `POST /sdwan/v2.5/api/elements/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/elements/status/query
  ```

- **Get specific element status for a tenant (v2.5).** New `GET /sdwan/v2.5/api/elements/{element_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/elements/{element_id}/status
  ```

- **Get machines of a tenant (v2.5).** New `GET /sdwan/v2.5/api/machines` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/machines
  ```

- **Query and get machines of a tenant (v2.5).** New `POST /sdwan/v2.5/api/machines/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/machines/query
  ```

- **Get Tenant machine (v2.5).** New `GET /sdwan/v2.5/api/machines/{machine_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/machines/{machine_id}
  ```

- **Update a specific machine of a tenant using operations (v2.5).** New `POST /sdwan/v2.5/api/machines/{machine_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/machines/{machine_id}/operations
  ```

- **Query Network policy rules. (v2.5).** New `POST /sdwan/v2.5/api/networkpolicyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/networkpolicyrules/query
  ```

- **Get network policy rules of tenant (v2.5).** New `GET /sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules
  ```

- **Create a new NetworkPolicyRule (v2.5).** New `POST /sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules
  ```

- **Delete network policy rule of tenant. (v2.5).** New `DELETE /sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Get a specific network policy rule of tenant (v2.5).** New `GET /sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Update network policy rule of tenant. (v2.5).** New `PUT /sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.5/api/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Get all BGP configs (v2.5).** New `GET /sdwan/v2.5/api/sites/{site_id}/elements/{element_id}/bgpconfigs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/sites/{site_id}/elements/{element_id}/bgpconfigs
  ```

- **Get BGP config (v2.5).** New `GET /sdwan/v2.5/api/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}
  ```

- **Updates BGP config (v2.5).** New `PUT /sdwan/v2.5/api/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.5/api/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}
  ```

- **Query db for Site WAN interfaces that match query parameters (v2.5).** New `POST /sdwan/v2.5/api/sites/{site_id}/waninterfaces/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/sites/{site_id}/waninterfaces/query
  ```

- **Get WAN interface labels for a tenant (v2.5).** New `GET /sdwan/v2.5/api/waninterfacelabels` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/waninterfacelabels
  ```

- **Query db for site WAN interfaces that match query parameters (v2.5).** New `POST /sdwan/v2.5/api/waninterfacelabels/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.5/api/waninterfacelabels/query
  ```

- **Get a specific WAN interface label (v2.5).** New `GET /sdwan/v2.5/api/waninterfacelabels/{wantinterface_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.5/api/waninterfacelabels/{wantinterface_label_id}
  ```

- **Update specific WAN interface label (v2.5).** New `PUT /sdwan/v2.5/api/waninterfacelabels/{wantinterface_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.5/api/waninterfacelabels/{wantinterface_label_id}
  ```

- **Get all application definitions (v2.6).** New `GET /sdwan/v2.6/api/appdefs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.6/api/appdefs
  ```

- **Create an application definition (v2.6).** New `POST /sdwan/v2.6/api/appdefs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.6/api/appdefs
  ```

- **Queries db for limit number of app defs that match query params. (v2.6).** New `POST /sdwan/v2.6/api/appdefs/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.6/api/appdefs/query
  ```

- **Delete an application definition (v2.6).** New `DELETE /sdwan/v2.6/api/appdefs/{appdef_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.6/api/appdefs/{appdef_id}
  ```

- **Get application definition (v2.6).** New `GET /sdwan/v2.6/api/appdefs/{appdef_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.6/api/appdefs/{appdef_id}
  ```

- **Update an application definition (v2.6).** New `PUT /sdwan/v2.6/api/appdefs/{appdef_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.6/api/appdefs/{appdef_id}
  ```

- **Queries db for BGP peers that match query params. (v2.6).** New `POST /sdwan/v2.6/api/bgppeers/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.6/api/bgppeers/query
  ```

- **Query and get element status objects for a tenant (v2.6).** New `POST /sdwan/v2.6/api/elements/status/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.6/api/elements/status/query
  ```

- **Get specific element status for a tenant (v2.6).** New `GET /sdwan/v2.6/api/elements/{element_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.6/api/elements/{element_id}/status
  ```

- **Get all BGP Peer configs (v2.6).** New `GET /sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Patch BGP Peers in Bulk (v2.6).** New `PATCH /sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PATCH api.sase.paloaltonetworks.com/sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Create BGP peer config (v2.6).** New `POST /sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Queries db for limit number of BGP peers that match query params. (v2.6).** New `POST /sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers/query
  ```

- **Delete BGP Peer config (v2.6).** New `DELETE /sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Get BGP Peer config (v2.6).** New `GET /sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Update BGP Peer config (v2.6).** New `PUT /sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.6/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Get WAN interface labels for a tenant (v2.6).** New `GET /sdwan/v2.6/api/waninterfacelabels` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.6/api/waninterfacelabels
  ```

- **Query db for site WAN interfaces that match query parameters (v2.6).** New `POST /sdwan/v2.6/api/waninterfacelabels/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.6/api/waninterfacelabels/query
  ```

- **Get a specific WAN interface label (v2.6).** New `GET /sdwan/v2.6/api/waninterfacelabels/{wantinterface_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.6/api/waninterfacelabels/{wantinterface_label_id}
  ```

- **Update specific WAN interface label (v2.6).** New `PUT /sdwan/v2.6/api/waninterfacelabels/{wantinterface_label_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.6/api/waninterfacelabels/{wantinterface_label_id}
  ```

- **Get all Site WAN interfaces (v2.9).** New `GET /sdwan/v2.9/api/sites/{site_id}/waninterfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.9/api/sites/{site_id}/waninterfaces
  ```

- **Create a new Site WAN interface (v2.9).** New `POST /sdwan/v2.9/api/sites/{site_id}/waninterfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.9/api/sites/{site_id}/waninterfaces
  ```

- **Delete existing WAN interface (v2.9).** New `DELETE /sdwan/v2.9/api/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v2.9/api/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Get a specific Site WAN interface (v2.9).** New `GET /sdwan/v2.9/api/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v2.9/api/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Update the Site WAN interface (v2.9).** New `PUT /sdwan/v2.9/api/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v2.9/api/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Query db for Site WAN interfaces that match query parameters (v2.9).** New `POST /sdwan/v2.9/api/waninterfaces/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v2.9/api/waninterfaces/query
  ```

- **Queries db for BGP peers that match query params. (v3.0).** New `POST /sdwan/v3.0/api/bgppeers/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/bgppeers/query
  ```

- **Query and get client elements across regions (v3.0).** New `POST /sdwan/v3.0/api/elements/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/elements/rquery
  ```

- **Get all policy sets of tenant. (v3.0).** New `GET /sdwan/v3.0/api/policysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/policysets
  ```

- **Create a new Policy Set (v3.0).** New `POST /sdwan/v3.0/api/policysets` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/policysets
  ```

- **Queries db for policysets that match query params. (v3.0).** New `POST /sdwan/v3.0/api/policysets/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/policysets/query
  ```

- **Delete policy set. (v3.0).** New `DELETE /sdwan/v3.0/api/policysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.0/api/policysets/{policy_set_id}
  ```

- **Get a specific policy set of tenant. (v3.0).** New `GET /sdwan/v3.0/api/policysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/policysets/{policy_set_id}
  ```

- **Update policy set. (v3.0).** New `PUT /sdwan/v3.0/api/policysets/{policy_set_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.0/api/policysets/{policy_set_id}
  ```

- **Get a specific policy set status of tenant. (v3.0).** New `GET /sdwan/v3.0/api/policysets/{policy_set_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/policysets/{policy_set_id}/status
  ```

- **Queries the prefix set. (v3.0).** New `POST /sdwan/v3.0/api/prefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/prefixes/query
  ```

- **Delete existing SASE connection config (v3.0).** New `DELETE /sdwan/v3.0/api/prismasase_connections/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.0/api/prismasase_connections/configs
  ```

- **Get a specific SASE connection config (v3.0).** New `GET /sdwan/v3.0/api/prismasase_connections/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/prismasase_connections/configs
  ```

- **Create a new SASE connection config (v3.0).** New `POST /sdwan/v3.0/api/prismasase_connections/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/prismasase_connections/configs
  ```

- **Update the SASE connection config (v3.0).** New `PUT /sdwan/v3.0/api/prismasase_connections/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.0/api/prismasase_connections/configs
  ```

- **Get ServiceEndpointList (v3.0).** New `GET /sdwan/v3.0/api/serviceendpoints` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/serviceendpoints
  ```

- **Create a new Service Endpoint (v3.0).** New `POST /sdwan/v3.0/api/serviceendpoints` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/serviceendpoints
  ```

- **Queries db for limit number of service bindings that match query params. (v3.0).** New `POST /sdwan/v3.0/api/serviceendpoints/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/serviceendpoints/query
  ```

- **Delete a Service Endpoint (v3.0).** New `DELETE /sdwan/v3.0/api/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.0/api/serviceendpoints/{service_endpoint_id}
  ```

- **Get a ServiceEndpoint (v3.0).** New `GET /sdwan/v3.0/api/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/serviceendpoints/{service_endpoint_id}
  ```

- **Update a ServiceEndpoint (v3.0).** New `PUT /sdwan/v3.0/api/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.0/api/serviceendpoints/{service_endpoint_id}
  ```

- **Update an existing site (v3.0).** New `PUT /sdwan/v3.0/api/sites/{site_id}/admin_state` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/admin_state
  ```

- **Get bfdpeers (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/bfdpeers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/bfdpeers
  ```

- **Get all BGP Peer configs (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Create BGP peer config (v3.0).** New `POST /sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Queries db for limit number of BGP peers that match query params. (v3.0).** New `POST /sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers/query
  ```

- **Delete BGP Peer config (v3.0).** New `DELETE /sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Get BGP Peer config (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Update BGP Peer config (v3.0).** New `PUT /sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Get all hub clusters (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/hubclusters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters
  ```

- **Creates a new hub cluster (v3.0).** New `POST /sdwan/v3.0/api/sites/{site_id}/hubclusters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters
  ```

- **Delete hub cluster (v3.0).** New `DELETE /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Get specific hub cluster (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Update hub cluster (v3.0).** New `PUT /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Get all hub cluster members (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers
  ```

- **Creates a new hub cluster member. (v3.0).** New `POST /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers
  ```

- **Deletes specific hub cluster member. (v3.0).** New `DELETE /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}
  ```

- **Get specific hub cluster member. (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}
  ```

- **Update specific hub cluster member. (v3.0).** New `PUT /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}
  ```

- **Get specific hub cluster member state. (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}/status
  ```

- **Get specific hub cluster state (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/status
  ```

- **Get SASE connections for sites (v3.0) (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/prismasase_connections` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/prismasase_connections
  ```

- **Create a new SASE connection (v3.0) (v3.0).** New `POST /sdwan/v3.0/api/sites/{site_id}/prismasase_connections` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/prismasase_connections
  ```

- **Delete a SASE connection (V3.0 Native Prisma Workflow) (v3.0).** New `DELETE /sdwan/v3.0/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **Get a specific SASE connection (v3.0) (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **Update the SASE connection (v3.0) (v3.0).** New `PUT /sdwan/v3.0/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **GET anynet link (v3.0).** New `GET /sdwan/v3.0/api/sites/{site_id}/wanpaths` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.0/api/sites/{site_id}/wanpaths
  ```

- **Get Elements of a tenant (v3.1).** New `GET /sdwan/v3.1/api/elements` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.1/api/elements
  ```

- **Queries db for limit number of elements that match query params. (v3.1).** New `POST /sdwan/v3.1/api/elements/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/elements/query
  ```

- **Query elements across client tenants with region grouping and summary view (v3.1) (v3.1).** New `POST /sdwan/v3.1/api/elements/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/elements/rquery
  ```

- **Get Element of a tenant (v3.1).** New `GET /sdwan/v3.1/api/elements/{element_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.1/api/elements/{element_id}
  ```

- **Used for associations and element updates (v3.1).** New `PUT /sdwan/v3.1/api/elements/{element_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.1/api/elements/{element_id}
  ```

- **Query and get ESP machines across regions (v3.1).** New `POST /sdwan/v3.1/api/machines/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/machines/rquery
  ```

- **Queries db for policyrules that match query params. (v3.1).** New `POST /sdwan/v3.1/api/policyrules/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/policyrules/query
  ```

- **Get policy rules of tenant (v3.1).** New `GET /sdwan/v3.1/api/policysets/{policy_set_id}/policyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.1/api/policysets/{policy_set_id}/policyrules
  ```

- **Create a new Policy (v3.1).** New `POST /sdwan/v3.1/api/policysets/{policy_set_id}/policyrules` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/policysets/{policy_set_id}/policyrules
  ```

- **Delete policy rule of tenant. (v3.1).** New `DELETE /sdwan/v3.1/api/policysets/{policy_set_id}/policyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.1/api/policysets/{policy_set_id}/policyrules/{policy_rule_id}
  ```

- **Get a specific policy rule of tenant (v3.1).** New `GET /sdwan/v3.1/api/policysets/{policy_set_id}/policyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.1/api/policysets/{policy_set_id}/policyrules/{policy_rule_id}
  ```

- **Update policy rule of tenant. (v3.1).** New `PUT /sdwan/v3.1/api/policysets/{policy_set_id}/policyrules/{policy_rule_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.1/api/policysets/{policy_set_id}/policyrules/{policy_rule_id}
  ```

- **Queries the prefix set. (v3.1).** New `POST /sdwan/v3.1/api/prefixes/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/prefixes/query
  ```

- **Delete existing SASE connection config (v3.1).** New `DELETE /sdwan/v3.1/api/prismasase_connections/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.1/api/prismasase_connections/configs
  ```

- **Get a specific SASE connection config (v3.1).** New `GET /sdwan/v3.1/api/prismasase_connections/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.1/api/prismasase_connections/configs
  ```

- **Create a new SASE connection config (v3.1).** New `POST /sdwan/v3.1/api/prismasase_connections/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/prismasase_connections/configs
  ```

- **Update the SASE connection config (v3.1).** New `PUT /sdwan/v3.1/api/prismasase_connections/configs` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.1/api/prismasase_connections/configs
  ```

- **Get ServiceEndpointList (v3.1).** New `GET /sdwan/v3.1/api/serviceendpoints` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.1/api/serviceendpoints
  ```

- **Create a new Service Endpoint (v3.1).** New `POST /sdwan/v3.1/api/serviceendpoints` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/serviceendpoints
  ```

- **Queries db for limit number of service bindings that match query params. (v3.1).** New `POST /sdwan/v3.1/api/serviceendpoints/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.1/api/serviceendpoints/query
  ```

- **Delete a Service Endpoint (v3.1).** New `DELETE /sdwan/v3.1/api/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.1/api/serviceendpoints/{service_endpoint_id}
  ```

- **Get a ServiceEndpoint (v3.1).** New `GET /sdwan/v3.1/api/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.1/api/serviceendpoints/{service_endpoint_id}
  ```

- **Update a ServiceEndpoint (v3.1).** New `PUT /sdwan/v3.1/api/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.1/api/serviceendpoints/{service_endpoint_id}
  ```

- **Get Elements of a tenant (v3.2).** New `GET /sdwan/v3.2/api/elements` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.2/api/elements
  ```

- **Queries db for limit number of elements that match query params. (v3.2).** New `POST /sdwan/v3.2/api/elements/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.2/api/elements/query
  ```

- **Get Element of a tenant (v3.2).** New `GET /sdwan/v3.2/api/elements/{element_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.2/api/elements/{element_id}
  ```

- **Used for associations and element updates (v3.2).** New `PUT /sdwan/v3.2/api/elements/{element_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.2/api/elements/{element_id}
  ```

- **Get all idps (v3.2).** New `GET /sdwan/v3.2/api/idps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.2/api/idps
  ```

- **Create idp (v3.2).** New `POST /sdwan/v3.2/api/idps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.2/api/idps
  ```

- **Delete idp (v3.2).** New `DELETE /sdwan/v3.2/api/idps/{idp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.2/api/idps/{idp_id}
  ```

- **Get idp (v3.2).** New `GET /sdwan/v3.2/api/idps/{idp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.2/api/idps/{idp_id}
  ```

- **Update sso (v3.2).** New `PUT /sdwan/v3.2/api/idps/{idp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.2/api/idps/{idp_id}
  ```

- **Query db for Site LAN networks that match query parameters (v3.2).** New `POST /sdwan/v3.2/api/lannetworks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.2/api/lannetworks/query
  ```

- **Query and get ESP machines across regions (v3.2).** New `POST /sdwan/v3.2/api/machines/rquery` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.2/api/machines/rquery
  ```

- **Get LAN networks (v3.2).** New `GET /sdwan/v3.2/api/sites/{site_id}/lannetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.2/api/sites/{site_id}/lannetworks
  ```

- **Create a new LAN (v3.2).** New `POST /sdwan/v3.2/api/sites/{site_id}/lannetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.2/api/sites/{site_id}/lannetworks
  ```

- **Query LAN networks that match query params (v3.2).** New `POST /sdwan/v3.2/api/sites/{site_id}/lannetworks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.2/api/sites/{site_id}/lannetworks/query
  ```

- **Delete an existing LAN (v3.2).** New `DELETE /sdwan/v3.2/api/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.2/api/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Get LAN network (v3.2).** New `GET /sdwan/v3.2/api/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.2/api/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Update an existing LAN (v3.2).** New `PUT /sdwan/v3.2/api/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.2/api/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Get all idps (v3.3).** New `GET /sdwan/v3.3/api/idps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.3/api/idps
  ```

- **Create idp (v3.3).** New `POST /sdwan/v3.3/api/idps` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.3/api/idps
  ```

- **Delete idp (v3.3).** New `DELETE /sdwan/v3.3/api/idps/{idp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.3/api/idps/{idp_id}
  ```

- **Get idp (v3.3).** New `GET /sdwan/v3.3/api/idps/{idp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.3/api/idps/{idp_id}
  ```

- **Update sso (v3.3).** New `PUT /sdwan/v3.3/api/idps/{idp_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.3/api/idps/{idp_id}
  ```

- **Query db for Site LAN networks that match query parameters (v3.3).** New `POST /sdwan/v3.3/api/lannetworks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.3/api/lannetworks/query
  ```

- **Get LAN networks (v3.3).** New `GET /sdwan/v3.3/api/sites/{site_id}/lannetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.3/api/sites/{site_id}/lannetworks
  ```

- **Create a new LAN (v3.3).** New `POST /sdwan/v3.3/api/sites/{site_id}/lannetworks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.3/api/sites/{site_id}/lannetworks
  ```

- **Query LAN networks that match query params (v3.3).** New `POST /sdwan/v3.3/api/sites/{site_id}/lannetworks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.3/api/sites/{site_id}/lannetworks/query
  ```

- **Delete an existing LAN (v3.3).** New `DELETE /sdwan/v3.3/api/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.3/api/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Get LAN network (v3.3).** New `GET /sdwan/v3.3/api/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.3/api/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Update an existing LAN (v3.3).** New `PUT /sdwan/v3.3/api/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.3/api/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Create anynet link (v3.4).** New `POST /sdwan/v3.4/api/anynetlinks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.4/api/anynetlinks
  ```

- **Delete anynet link (v3.4).** New `DELETE /sdwan/v3.4/api/anynetlinks/{anynet_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v3.4/api/anynetlinks/{anynet_id}
  ```

- **GET anynet link (v3.4).** New `GET /sdwan/v3.4/api/anynetlinks/{anynet_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.4/api/anynetlinks/{anynet_id}
  ```

- **Update anynet link (v3.4).** New `PUT /sdwan/v3.4/api/anynetlinks/{anynet_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v3.4/api/anynetlinks/{anynet_id}
  ```

- **Query topology (v3.5).** New `POST /sdwan/v3.5/api/topology` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.5/api/topology
  ```

- **Query topology (v3.6).** New `POST /sdwan/v3.6/api/topology` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v3.6/api/topology
  ```

- **Get all element models (v3.7).** New `GET /sdwan/v3.7/api/elementmodels` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.7/api/elementmodels
  ```

- **Get all element models (v3.8).** New `GET /sdwan/v3.8/api/elementmodels` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.8/api/elementmodels
  ```

- **Get interface status (v3.8).** New `GET /sdwan/v3.8/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.8/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/status
  ```

- **Get interface status (v3.9).** New `GET /sdwan/v3.9/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v3.9/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/status
  ```

- **Create anynet link (v4.0).** New `POST /sdwan/v4.0/api/anynetlinks` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.0/api/anynetlinks
  ```

- **Query Anynet Links (v4.0).** New `POST /sdwan/v4.0/api/anynetlinks/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.0/api/anynetlinks/query
  ```

- **Delete anynet link (v4.0).** New `DELETE /sdwan/v4.0/api/anynetlinks/{anynet_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v4.0/api/anynetlinks/{anynet_id}
  ```

- **GET anynet link (v4.0).** New `GET /sdwan/v4.0/api/anynetlinks/{anynet_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.0/api/anynetlinks/{anynet_id}
  ```

- **Update anynet link (v4.0).** New `PUT /sdwan/v4.0/api/anynetlinks/{anynet_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v4.0/api/anynetlinks/{anynet_id}
  ```

- **Query hub clusters (v4.0).** New `POST /sdwan/v4.0/api/hubclusters/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.0/api/hubclusters/query
  ```

- **Create anynet link in Bulk (v4.0).** New `POST /sdwan/v4.0/api/sites/{ep1_site_id}/anynetlinks/bulkoperations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.0/api/sites/{ep1_site_id}/anynetlinks/bulkoperations
  ```

- **Get all hub clusters (v4.0).** New `GET /sdwan/v4.0/api/sites/{site_id}/hubclusters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.0/api/sites/{site_id}/hubclusters
  ```

- **Creates a new hub cluster (v4.0).** New `POST /sdwan/v4.0/api/sites/{site_id}/hubclusters` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.0/api/sites/{site_id}/hubclusters
  ```

- **Delete hub cluster (v4.0).** New `DELETE /sdwan/v4.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v4.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Get specific hub cluster (v4.0).** New `GET /sdwan/v4.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Update hub cluster (v4.0).** New `PUT /sdwan/v4.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v4.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Operations hub cluster api (v4.0).** New `POST /sdwan/v4.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/operations` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.0/api/sites/{site_id}/hubclusters/{hub_cluster_id}/operations
  ```

- **Get hub cluster status (v4.0).** New `GET /sdwan/v4.0/api/sites/{site_id}/hubclusters/{id}/status` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.0/api/sites/{site_id}/hubclusters/{id}/status
  ```

- **Get all sites of a tenant (v4.12).** New `GET /sdwan/v4.12/api/sites` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.12/api/sites
  ```

- **Create a site (v4.12).** New `POST /sdwan/v4.12/api/sites` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.12/api/sites
  ```

- **Queries db for limit number of sites that match query params. (v4.12).** New `POST /sdwan/v4.12/api/sites/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.12/api/sites/query
  ```

- **Delete a site (v4.12).** New `DELETE /sdwan/v4.12/api/sites/{site_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v4.12/api/sites/{site_id}
  ```

- **Get Site of a tenant by tenant ID and site id (v4.12).** New `GET /sdwan/v4.12/api/sites/{site_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.12/api/sites/{site_id}
  ```

- **Update an existing site (v4.12).** New `PUT /sdwan/v4.12/api/sites/{site_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v4.12/api/sites/{site_id}
  ```

- **Get all sites of a tenant (v4.13).** New `GET /sdwan/v4.13/api/sites` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.13/api/sites
  ```

- **Create a site (v4.13).** New `POST /sdwan/v4.13/api/sites` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.13/api/sites
  ```

- **Queries db for limit number of sites that match query params. (v4.13).** New `POST /sdwan/v4.13/api/sites/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.13/api/sites/query
  ```

- **Delete a site (v4.13).** New `DELETE /sdwan/v4.13/api/sites/{site_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v4.13/api/sites/{site_id}
  ```

- **Get Site of a tenant by tenant ID and site id (v4.13).** New `GET /sdwan/v4.13/api/sites/{site_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.13/api/sites/{site_id}
  ```

- **Update an existing site (v4.13).** New `PUT /sdwan/v4.13/api/sites/{site_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v4.13/api/sites/{site_id}
  ```

- **Queries db for limit number of interfaces that match query params. (v4.20).** New `POST /sdwan/v4.20/api/interfaces/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.20/api/interfaces/query
  ```

- **Get all Interfaces (v4.20).** New `GET /sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces
  ```

- **Create a Interface (v4.20).** New `POST /sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces
  ```

- **Delete a Interface (v4.20).** New `DELETE /sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Get Interface (v4.20).** New `GET /sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Update an Interface (v4.20).** New `PUT /sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v4.20/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Queries db for limit number of interfaces that match query params. (v4.21).** New `POST /sdwan/v4.21/api/interfaces/query` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.21/api/interfaces/query
  ```

- **Get all Interfaces (v4.21).** New `GET /sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces
  ```

- **Create a Interface (v4.21).** New `POST /sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  POST api.sase.paloaltonetworks.com/sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces
  ```

- **Delete a Interface (v4.21).** New `DELETE /sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  DELETE api.sase.paloaltonetworks.com/sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Get Interface (v4.21).** New `GET /sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  GET api.sase.paloaltonetworks.com/sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Update an Interface (v4.21).** New `PUT /sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Unified API reference →](/sase/api/unified)
  ```
  PUT api.sase.paloaltonetworks.com/sdwan/v4.21/api/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

---
## August 3rd, 2026

Legacy API: 1452 new endpoints available.

### New

- **Rest operator password (v2.0).** New `POST /v2.0/api/accounts/password/reset` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/accounts/password/reset
  ```

- **Verify email after signup (v2.0).** New `POST /v2.0/api/accounts/verify` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/accounts/verify
  ```

- **Get basic set of available API versions (v2.0).** New `GET /v2.0/api/api_versions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/api_versions
  ```

- **Get list of permitted APIs that the current operator can invoke (v2.0).** New `GET /v2.0/api/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/permissions
  ```

- **Get current user profile (v2.0).** New `GET /v2.0/api/profile` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/profile
  ```

- **Logout api for esp client. Reverts back to esp session (v2.0).** New `POST /v2.0/api/tenants/{client_id}/logout` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{client_id}/logout
  ```

- **Allows one to change password (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/accounts/password/change` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/accounts/password/change
  ```

- **Query active user mappings of tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/activeuserips/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/activeuserips/query
  ```

- **Get API versions for given apiVersions (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/api_versions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/api_versions
  ```

- **Patch api versions (v2.0).** New `PATCH /v2.0/api/tenants/{tenant_id}/api_versions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PATCH api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/api_versions
  ```

- **Update Api Versions (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/api_versions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/api_versions
  ```

- **Get all APN Profiles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/apnprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/apnprofiles
  ```

- **Create an APN Profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/apnprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/apnprofiles
  ```

- **Queries db for limit number of apn profiles that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/apnprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/apnprofiles/query
  ```

- **Delete an APN Profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/apnprofiles/{apnprofile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/apnprofiles/{apnprofile_id}
  ```

- **Get APN Profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/apnprofiles/{apnprofile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/apnprofiles/{apnprofile_id}
  ```

- **Update an APN Profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/apnprofiles/{apnprofile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/apnprofiles/{apnprofile_id}
  ```

- **Get system application definitions (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/appdefs_version/{vid}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/appdefs_version/{vid}
  ```

- **Change standard apps version (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/appdefs_version/{vid}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/appdefs_version/{vid}
  ```

- **Get audit logs for given tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/auditlog` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/auditlog
  ```

- **Get audit logs for given tenant as per specified query filters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/auditlog/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/auditlog/query
  ```

- **Get audit logs for given tenant and audit log id (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/auditlog/{auditlog_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/auditlog/{auditlog_id}
  ```

- **Get a list of tenant base permissions (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/base_permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/base_permissions
  ```

- **Get a list of tenant base roles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/base_roles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/base_roles
  ```

- **Queries the BGP Peers Status (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/bgppeers/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bgppeers/status/query
  ```

- **Create site profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates
  ```

- **Get all site profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/deployments/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/deployments/query
  ```

- **Get all site profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/query
  ```

- **delete site profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}
  ```

- **Get site profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}
  ```

- **update site profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}
  ```

- **Clone Site Profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/clone` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/clone
  ```

- **Deploy site (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/deployments` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/deployments
  ```

- **Delete a deployment (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}
  ```

- **Deployment detail of a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}
  ```

- **Deployment Status of a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/deployments/{deployment_id}/status
  ```

- **Status of profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/bulkconfigurations/sitetemplates/{site_template_id}/status
  ```

- **Query the cellular module firmware upgrade status of all tenant elements (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/cellular_module_firmware/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/cellular_module_firmware/status/query
  ```

- **Get existing element cellular module images (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/cellular_module_images` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/cellular_module_images
  ```

- **Get information about a element cellular module image (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/cellular_module_images/{image_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/cellular_module_images/{image_id}
  ```

- **Create a Revoked Cellular Image (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/cellular_module_revoked_images` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/cellular_module_revoked_images
  ```

- **Queries db for limit number of cellular modules that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/cellular_modules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/cellular_modules/query
  ```

- **Get all tenant certificates V2.0 (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/certificates` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/certificates
  ```

- **Create or import new certificate v2.0 (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/certificates` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/certificates
  ```

- **Retrieve all revoked CICs for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/certificates/revoked` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/certificates/revoked
  ```

- **Delete a certificate of tenant v2.0 (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/certificates/{certificate_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/certificates/{certificate_id}
  ```

- **Get a specific certificate of tenant v2.0 (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/certificates/{certificate_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/certificates/{certificate_id}
  ```

- **Update certificate v2.0 (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/certificates/{certificate_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/certificates/{certificate_id}
  ```

- **Get esp tenant clients details for tenant id (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/clients` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/clients
  ```

- **Get esp tenant clients details for tenant id (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/clients/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/clients/query
  ```

- **Get a list of client base roles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/clients/{client_id}/base_roles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/clients/{client_id}/base_roles
  ```

- **Login api for esp client (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/clients/{client_id}/login` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/clients/{client_id}/login
  ```

- **Get a list of client custom roles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/clients/{client_id}/roles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/clients/{client_id}/roles
  ```

- **Get a client custom role (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/clients/{client_id}/roles/{role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/clients/{client_id}/roles/{role_id}
  ```

- **Queries db for Dem site config that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/demsiteconfigs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/demsiteconfigs/query
  ```

- **Query ADEM status (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/demstatus/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/demstatus/query
  ```

- **Get device id profiles (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/deviceidconfigs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/deviceidconfigs/query
  ```

- **Get device id profiles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/deviceidprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/deviceidprofiles
  ```

- **Create device id profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/deviceidprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/deviceidprofiles
  ```

- **Associate device id profile in bulk (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/deviceidprofiles/{deviceid_profile_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/deviceidprofiles/{deviceid_profile_id}/operations
  ```

- **Delete device Id profile configuration (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/deviceidprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/deviceidprofiles/{profile_id}
  ```

- **Get device id profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/deviceidprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/deviceidprofiles/{profile_id}
  ```

- **Update device Id profile configurations (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/deviceidprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/deviceidprofiles/{profile_id}
  ```

- **Get directory service details of tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/directoryservices` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryservices
  ```

- **Create Directory Service (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/directoryservices` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryservices
  ```

- **Force delta sync. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/directoryservices/deltasync` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryservices/deltasync
  ```

- **Get Domain Status. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/directoryservices/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryservices/status
  ```

- **Force full sync. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/directoryservices/sync` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryservices/sync
  ```

- **Delete Directory Service (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/directoryservices/{directory_service_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryservices/{directory_service_id}
  ```

- **Update Directory Service (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/directoryservices/{directory_service_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryservices/{directory_service_id}
  ```

- **Get DomainStatus By Domain And Type. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/directoryservices/{directory_service_id}/domainstatus/{domain_status_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryservices/{directory_service_id}/domainstatus/{domain_status_id}
  ```

- **Get users or groups of tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/directoryusergroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryusergroups
  ```

- **Query users or groups. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/directoryusergroups/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryusergroups/query
  ```

- **Get a specific user or group of tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/directoryusergroups/{user_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryusergroups/{user_group_id}
  ```

- **Get users of tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/directoryusers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryusers
  ```

- **Query users. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/directoryusers/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryusers/query
  ```

- **Get a specific user or of tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/directoryusers/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/directoryusers/{user_id}
  ```

- **Get all the DNSCategories that are supported, this is a global resource (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/dnssecuritycategories` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnssecuritycategories
  ```

- **Get specific DNSCategory that are supported, this is a global resource (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/dnssecuritycategories/{dns_category_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnssecuritycategories/{dns_category_id}
  ```

- **Get all DNSSec profiles for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/dnssecurityprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnssecurityprofiles
  ```

- **Get specific DNSSec profile for a tenant based on ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/dnssecurityprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnssecurityprofiles/{profile_id}
  ```

- **Read all DNS service profiles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/dnsserviceprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceprofiles
  ```

- **Create a new DNS service profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/dnsserviceprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceprofiles
  ```

- **Query DNS service profile based on parameters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/dnsserviceprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceprofiles/query
  ```

- **Delete a DNS service profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Get a DNS service profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Update a DNS service profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Read all DNS service roles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/dnsserviceroles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceroles
  ```

- **Create a new DNS service role (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/dnsserviceroles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceroles
  ```

- **Query DNS service role based on parameters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/dnsserviceroles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceroles/query
  ```

- **Delete a DNS service role (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/dnsserviceroles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceroles/{dnsservice_role_id}
  ```

- **Get a DNS service role (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/dnsserviceroles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceroles/{dnsservice_role_id}
  ```

- **Update a DNS service role (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/dnsserviceroles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsserviceroles/{dnsservice_role_id}
  ```

- **Query DNS service config based on parameters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/dnsservices/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/dnsservices/query
  ```

- **Get all element passage config from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elementpassageconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementpassageconfigs
  ```

- **Get element config/state info for queried elements from NB (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elements/bulk_config_state/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/bulk_config_state/query
  ```

- **Query software state for all tenants elements (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elements/software/state/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/software/state/query
  ```

- **Get all cellular modules (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules
  ```

- **Get cellular module (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}
  ```

- **Update cellular module (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}
  ```

- **Get cellular module firmware configuration (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware
  ```

- **Update cellular module firmware configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware
  ```

- **Get cellular module firmware configuration status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/firmware/status
  ```

- **Get all cellular modules sim security info (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security
  ```

- **Get cellular module sim security info (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security/{sim_security_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security/{sim_security_id}
  ```

- **Update cellular module (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security/{sim_security_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/sim_security/{sim_security_id}
  ```

- **Get cellular module status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/status
  ```

- **Start CIC renewal process for an element device (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elements/{element_id}/certificate_operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/certificate_operations
  ```

- **Get specific element's Access State (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/elementaccessstates` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/elementaccessstates
  ```

- **Get element passage configuration from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/elementpassageconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/elementpassageconfigs
  ```

- **Deletes element passage configuration from NB (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/elements/{element_id}/elementpassageconfigs/{passage_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/elementpassageconfigs/{passage_config_id}
  ```

- **Get a list of all the hardware bypasses in element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/hardwarebypass` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/hardwarebypass
  ```

- **Get all interface authentication status for an element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/interface_authentication/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/interface_authentication/status
  ```

- **Get all lldp neighbors status for an element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/lldp_neighbors/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/lldp_neighbors/status
  ```

- **Get mac addresses status for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/mac_addresses/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/mac_addresses/status
  ```

- **Get all element NTP (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/ntp` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/ntp
  ```

- **Get specific element NTP (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}
  ```

- **Update an existing element NTP. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}
  ```

- **Get specific element NTP (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}/status
  ```

- **Handle operations on element. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elements/{element_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/operations
  ```

- **Verify Challenge phrase and generate response phrase (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elements/{element_id}/otpaccess` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/otpaccess
  ```

- **Get element passages from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/passages` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/passages
  ```

- **Delete passage from NB (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/elements/{element_id}/passages/{passage_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/passages/{passage_id}
  ```

- **Get passage from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/passages/{passage_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/passages/{passage_id}
  ```

- **Get all radius configuration of an element in a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii
  ```

- **Used to create element radius (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii
  ```

- **Delete radius configuration in an element (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii/{radius_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii/{radius_id}
  ```

- **Get radius configuration of a element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii/{radius_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii/{radius_id}
  ```

- **Used for element radius configuration updates (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii/{radius_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii/{radius_id}
  ```

- **Get specific radius configuration status for a radius config corresponding to a tenant and element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii/{radius_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/radii/{radius_id}/status
  ```

- **Get the software upgrade configuration of an element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/software/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/software/state
  ```

- **Upgrade an element (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elements/{element_id}/software/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/software/state
  ```

- **Get image status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/software/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/software/status
  ```

- **Get element state (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elements/{element_id}/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/state
  ```

- **Update element state (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elements/{element_id}/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/state
  ```

- **Create a new System report using support_operations API (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elements/{element_id}/support_operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/support_operations
  ```

- **Delete Active Passage (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/elements/{element_id}/toolkitsessions/{session_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elements/{element_id}/toolkitsessions/{session_id}
  ```

- **Query element security zones. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elementsecurityzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementsecurityzones/query
  ```

- **Queries db for limit number of element shells that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elementshells/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementshells/query
  ```

- **Get All Element System Limit Profiles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles
  ```

- **Create a new Element System Limit Profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles
  ```

- **Query Element System Limit Profiles (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles/query
  ```

- **Delete Element System Limit Profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles/{element_system_limit_profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles/{element_system_limit_profile_id}
  ```

- **Get Element System Limit Profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles/{element_system_limit_profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles/{element_system_limit_profile_id}
  ```

- **Update Element System Limit Profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles/{element_system_limit_profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementsystemlimitprofiles/{element_system_limit_profile_id}
  ```

- **Get all element User (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elementusers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers
  ```

- **Create Element User (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elementusers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers
  ```

- **Delete element user (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}
  ```

- **Get specific element User (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}
  ```

- **Update an existing element user. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}
  ```

- **Get all accesses for a particular user (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access
  ```

- **Grant Specific role to Element user on specific element (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access
  ```

- **Delete element user Access (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}
  ```

- **Get specific element User access (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}
  ```

- **Update an existing element user access. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}
  ```

- **Get element user password (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/password` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/elementusers/{user_id}/password
  ```

- **GET the tenant enterprise prefix set (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/enterpriseprefixset` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/enterpriseprefixset
  ```

- **Update the tenant enterprise prefix set (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/enterpriseprefixset` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/enterpriseprefixset
  ```

- **Retrieve all CICs for a particular element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/entities/{element_id}/certificates` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/entities/{element_id}/certificates
  ```

- **Get esp tenant details for tenant id (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/esp` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/esp
  ```

- **Queries db for limit number of event correlation policyrules that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicyrules/query
  ```

- **Get all event correlation policysets (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets
  ```

- **Queries db for limit number of event correlation policysets that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets
  ```

- **Queries db for limit number of event correlation policysets that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/query
  ```

- **Delete specific event correlation policyset (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}
  ```

- **Get event correlation policyset (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}
  ```

- **Update event correlation policyset configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}
  ```

- **Get all event correlation policyrules (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules
  ```

- **Create event correlation policyrule configuration (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules
  ```

- **Delete specific event correlation policy rule (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Get event correlation policy rule (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Update event correlation policyrule configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Get all extensions from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/extensions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/extensions
  ```

- **Queries db for limit number of tenant extensions that match the query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/extensions/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/extensions/query
  ```

- **Get extension from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/extensions/{extension_id}
  ```

- **Retrieve an existing CertificateAuthorityConfigDO object by tenant ID only (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/externalcaconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/externalcaconfigs
  ```

- **Create a new certificate authority configuration (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/externalcaconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/externalcaconfigs
  ```

- **Delete a existing CertificateAuthorityConfigDO object by tenant ID and ID (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/externalcaconfigs/{externalcaconfig_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/externalcaconfigs/{externalcaconfig_id}
  ```

- **Retrieve an existing CertificateAuthorityConfigDO object by tenant ID and ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/externalcaconfigs/{externalcaconfig_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/externalcaconfigs/{externalcaconfig_id}
  ```

- **Update an existing certificate authority configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/externalcaconfigs/{externalcaconfig_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/externalcaconfigs/{externalcaconfig_id}
  ```

- **Get global prefix filters. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/globalprefixfilters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/globalprefixfilters
  ```

- **Create a new global prefix filter. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/globalprefixfilters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/globalprefixfilters
  ```

- **Query DB for the list of params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/globalprefixfilters/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/globalprefixfilters/query
  ```

- **Delete a global prefix filter. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/globalprefixfilters/{filter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/globalprefixfilters/{filter_id}
  ```

- **Get a specific global prefix filter. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/globalprefixfilters/{filter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/globalprefixfilters/{filter_id}
  ```

- **Update a new global prefix filter. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/globalprefixfilters/{filter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/globalprefixfilters/{filter_id}
  ```

- **Get HubServiceEndpoints of a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/hubserviceendpoints` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/hubserviceendpoints
  ```

- **Query incident objects additional data. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/incidentresources/pquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/incidentresources/pquery
  ```

- **Query incident objects additional data. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/incidentsettings/pquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/incidentsettings/pquery
  ```

- **Query interface status (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/interfaces/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/interfaces/status/query
  ```

- **Query the Active Device Profiles (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/iotdevicemappings/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/iotdevicemappings/query
  ```

- **Get the active ip mappings (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/iotdevicemappings/{mapping_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/iotdevicemappings/{mapping_id}
  ```

- **Get all the XML Ingested data (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/iotdictionary` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/iotdictionary
  ```

- **Query the Device Dictionary (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/iotdictionary/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/iotdictionary/query
  ```

- **Get specific device dictionary (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/iotdictionary/{device_dictionary_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/iotdictionary/{device_dictionary_id}
  ```

- **Get the confidence score of the mappings stored in the IOT portal (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/iotservices` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/iotservices
  ```

- **POST the confidence score of the mappings stored in the IOT portal (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/iotservices` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/iotservices
  ```

- **PUT the confidence score of the mappings stored in the IOT portal (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/iotservices/{iot_service_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/iotservices/{iot_service_id}
  ```

- **Queries db for limit number of ipfix configs that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfix/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfix/query
  ```

- **Get all IPFix collector context (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts
  ```

- **Create a IPFix Collector context (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts
  ```

- **Queries db for limit number of ipfix collector context that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts/query
  ```

- **Delete a IPFix collector context (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts/{context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts/{context_id}
  ```

- **Get IPFix collector context (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts/{context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts/{context_id}
  ```

- **Update a IPFix Collector context (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts/{context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixcollectorcontexts/{context_id}
  ```

- **Get all IPFix filter context (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts
  ```

- **Create a IPFix Filter context (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts
  ```

- **Queries db for limit number of ipfix filter context that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts/query
  ```

- **Delete a IPFix filter context (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts/{context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts/{context_id}
  ```

- **Get IPFix filter context (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts/{context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts/{context_id}
  ```

- **Update a IPFix Filter context (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts/{context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixfiltercontexts/{context_id}
  ```

- **Get all IPFix global prefix (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes
  ```

- **Create a IPFix Global prefix (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes
  ```

- **Delete a IPFix global prefix (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes/{prefix_id}
  ```

- **Get IPFix global prefix (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes/{prefix_id}
  ```

- **Update a IPFix Global prefix (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixglobalprefixes/{prefix_id}
  ```

- **Get all IPFix local prefix (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes
  ```

- **Create a IPFix local prefix (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes
  ```

- **Queries db for limit number of ipfix site prefix association that match query (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes/query
  ```

- **Delete a IPFix local prefix (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **Get IPFix local prefix (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **Update a IPFix local prefix (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **Get all IPFix Profiles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixprofiles
  ```

- **Create a IPFix Profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixprofiles
  ```

- **Queries db for limit number of ipfix profiles that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixprofiles/query
  ```

- **Delete IPFix Profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ipfixprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixprofiles/{profile_id}
  ```

- **Get IPFix Profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixprofiles/{profile_id}
  ```

- **Update a IPFix Profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ipfixprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixprofiles/{profile_id}
  ```

- **Get all IPFix templates (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixtemplates` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixtemplates
  ```

- **Create a IPFix template (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixtemplates` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixtemplates
  ```

- **Queries db for limit number of ipfix templates that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ipfixtemplates/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixtemplates/query
  ```

- **Delete a IPFix template (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ipfixtemplates/{template_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixtemplates/{template_id}
  ```

- **Get IPFix template (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ipfixtemplates/{template_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixtemplates/{template_id}
  ```

- **Update a IPFix template (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ipfixtemplates/{template_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ipfixtemplates/{template_id}
  ```

- **Get all licenses for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/licenses` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/licenses
  ```

- **Query license PURCHASE data only across client tenants for MSP (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/licenses_purchase/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/licenses_purchase/rquery
  ```

- **Query license USAGE data only across client tenants for MSP (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/licenses_usage/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/licenses_usage/rquery
  ```

- **Get local prefix filters. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/localprefixfilters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/localprefixfilters
  ```

- **Create a new local prefix filter. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/localprefixfilters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/localprefixfilters
  ```

- **Query DB for the list of params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/localprefixfilters/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/localprefixfilters/query
  ```

- **Delete a local prefix filter. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/localprefixfilters/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/localprefixfilters/{id}
  ```

- **Get a specific local prefix filter. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/localprefixfilters/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/localprefixfilters/{id}
  ```

- **Update a new local prefix filter. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/localprefixfilters/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/localprefixfilters/{id}
  ```

- **Forgot password API (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/login/password/forgot` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/login/password/forgot
  ```

- **Query Machine Upgrade Config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/machine_upgrade/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machine_upgrade/query
  ```

- **Allocate Element Shell to Machine (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/allocate_to_shell` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/allocate_to_shell
  ```

- **Get all cellular modules (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules
  ```

- **Get cellular module (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}
  ```

- **Get cellular module firmware configuration (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware
  ```

- **Update cellular module firmware configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware
  ```

- **Get cellular module firmware configuration status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}/firmware/status
  ```

- **Get cellular module status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/cellular_modules/{cellular_module_id}/status
  ```

- **Get all Machine Software (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software
  ```

- **Get Machine Software (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software/{software_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software/{software_id}
  ```

- **Update Machine Software (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software/{software_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software/{software_id}
  ```

- **Get all Machine Software Statuses (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software/{software_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software/{software_id}/status
  ```

- **Get Machine Software Status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software/{software_id}/status/{status_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/software/{software_id}/status/{status_id}
  ```

- **Allocate Element Shell to Machine (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/machines/{machine_id}/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/machines/{machine_id}/state
  ```

- **Query all microsegments for tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/microsegments/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/microsegments/query
  ```

- **Get migration API status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/migratecbtoezb` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/migratecbtoezb
  ```

- **Trigger migration API (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/migratecbtoezb` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/migratecbtoezb
  ```

- **Queries db for limit number of MSTP Instances that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/mstp_instances/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/mstp_instances/query
  ```

- **Query Multicast Dynamic RPs (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/multicastdynamicrps/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastdynamicrps/query
  ```

- **Query Multicast IGMP group membership information (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/multicastigmpmemberships/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastigmpmemberships/query
  ```

- **Get multicast peer groups (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/multicastpeergroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastpeergroups
  ```

- **Create multicast peer group (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/multicastpeergroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastpeergroups
  ```

- **Delete multicast peer group (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}
  ```

- **Get multicast peer group (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}
  ```

- **Update multicast peer group (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}
  ```

- **Query Multicast route table (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/multicastroutes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastroutes/query
  ```

- **Query Multicast RP config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/multicastrps/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastrps/query
  ```

- **Query Multicast status information (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/multicaststatus/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicaststatus/query
  ```

- **Query Multicast WAN status (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/multicastwanstatus/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/multicastwanstatus/query
  ```

- **Get all Global NAT prefixes. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natglobalprefixes
  ```

- **Create a new NAT global prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natglobalprefixes
  ```

- **Query Global Prefixes. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natglobalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natglobalprefixes/query
  ```

- **Delete a NAT Global Prefix. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/natglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natglobalprefixes/{prefix_id}
  ```

- **Get a specific NAT global prefix. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natglobalprefixes/{prefix_id}
  ```

- **Update an existing NAT prefix. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/natglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natglobalprefixes/{prefix_id}
  ```

- **Get NAT local prefixes. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natlocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natlocalprefixes
  ```

- **Create a new NAT local prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natlocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natlocalprefixes
  ```

- **Query site local prefixes. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natlocalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natlocalprefixes/query
  ```

- **Delete a NAT local prefix. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natlocalprefixes/{prefix_id}
  ```

- **Get a specific NAT local prefix. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natlocalprefixes/{prefix_id}
  ```

- **Update a  NAT local prefix. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natlocalprefixes/{prefix_id}
  ```

- **Get NAT Policy Pools. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicypools` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicypools
  ```

- **Create a new NATPolicy Pool. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natpolicypools` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicypools
  ```

- **Query NAT policy pools. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natpolicypools/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicypools/query
  ```

- **Delete a NAT Policy Pool. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/natpolicypools/{natpolicy_pool_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicypools/{natpolicy_pool_id}
  ```

- **Get a specific NAT Policy pool. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicypools/{natpolicy_pool_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicypools/{natpolicy_pool_id}
  ```

- **Update a  NAT Policy Pool. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/natpolicypools/{natpolicy_pool_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicypools/{natpolicy_pool_id}
  ```

- **Query NAT policy rules. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natpolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicyrules/query
  ```

- **Get all NAT policy sets of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets
  ```

- **Create a new NAT Policy Set (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natpolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets
  ```

- **Query policy sets. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natpolicysets/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/query
  ```

- **Delete NAT policy set. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}
  ```

- **Get a specific NAT policy set of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}
  ```

- **Update NAT policy set. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}
  ```

- **Get policy rules of policy set (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules
  ```

- **Create a new NAT Policy Rule (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules
  ```

- **Delete NAT policy rule of tenant. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}
  ```

- **Get a specific NAT policy rule of tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}
  ```

- **Update policy rule of tenant. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/natpolicyrules/{nat_policy_rule_id}
  ```

- **Get a specific NAT policy set status of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysets/{nat_policy_set_id}/status
  ```

- **Get all NAT policy Set stacks of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysetstacks
  ```

- **Create a new NATPolicySet Stack (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natpolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysetstacks
  ```

- **Query policyset stacks. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natpolicysetstacks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysetstacks/query
  ```

- **Delete NAT Policy Set Stack. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/natpolicysetstacks/{natpolicy_set_stack_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysetstacks/{natpolicy_set_stack_id}
  ```

- **Get a specific NAT policy set stack of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natpolicysetstacks/{natpolicy_set_stack_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysetstacks/{natpolicy_set_stack_id}
  ```

- **Update NAT Policy Set Stack. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/natpolicysetstacks/{natpolicy_set_stack_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natpolicysetstacks/{natpolicy_set_stack_id}
  ```

- **Get Nat Policy Zones. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natzones
  ```

- **Create a Nat Policy Zone. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natzones
  ```

- **Query NAT policy zones. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/natzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natzones/query
  ```

- **Delete a Nat Policy Zone. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/natzones/{nat_policy_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natzones/{nat_policy_zone_id}
  ```

- **Get a specific Nat Policy Zone. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/natzones/{nat_policy_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natzones/{nat_policy_zone_id}
  ```

- **Update a Nat Policy Zone. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/natzones/{nat_policy_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/natzones/{nat_policy_zone_id}
  ```

- **Get LAN segments (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkcontexts` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkcontexts
  ```

- **Create a new LAN segment (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkcontexts` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkcontexts
  ```

- **Queries db for limit number of network contexts that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkcontexts/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkcontexts/query
  ```

- **Delete LAN segment (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/networkcontexts/{network_context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkcontexts/{network_context_id}
  ```

- **Get LAN segment (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkcontexts/{network_context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkcontexts/{network_context_id}
  ```

- **Update LAN segment (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/networkcontexts/{network_context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkcontexts/{network_context_id}
  ```

- **Get all Network policy global prefixes. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes
  ```

- **Create a new global prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes
  ```

- **Query Network Global Prefixes. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes/query
  ```

- **Delete a Network Policy Global Prefix. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Get a specific Network Policy global prefix. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Update a Network global prefix. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Get Network Policy local prefixes. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes
  ```

- **Create a new Network Policy local prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes
  ```

- **Query site network prefix association. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes/query
  ```

- **Delete a Network Policy local prefix. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get a specific Network Policy local prefix. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Update a  Network Policy local prefix. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get all network policy sets of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysets
  ```

- **Create a new NetworkPolicySet (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkpolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysets
  ```

- **Query Network policy sets. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkpolicysets/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysets/query
  ```

- **Delete Network Policy Set. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}
  ```

- **Get a specific network policy set of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}
  ```

- **Update Network Policy Set. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}
  ```

- **Get a specific network policy set status of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/status
  ```

- **Get all network policy set stacks of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysetstacks
  ```

- **Create a new NetworkPolicySetStack (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkpolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysetstacks
  ```

- **Query network policyset stacks. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networkpolicysetstacks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysetstacks/query
  ```

- **Delete a NetworkPolicySetStack (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/networkpolicysetstacks/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysetstacks/{policy_set_id}
  ```

- **Get a specific network policy set stack of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/networkpolicysetstacks/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysetstacks/{policy_set_id}
  ```

- **Update a NetworkPolicySetStack (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/networkpolicysetstacks/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networkpolicysetstacks/{policy_set_id}
  ```

- **Get all config/state info for given network from NB (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/networks/bulk_config_state/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/networks/bulk_config_state/query
  ```

- **Get all Security Policy V2 Global Prefixes for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes
  ```

- **Create an Security Policy V2 Global Prefix (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes
  ```

- **Query Security Policy V2 Global Prefixes of a tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/query
  ```

- **Delete a Security Policy V2 Local Prefix by tenant ID and its ID (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Get a Security Policy V2 Global Prefix by tenant ID and its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Update an existing Security Policy V2 Global Prefix (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Get all Security Policy V2 Local Prefixes for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Create an Security Policy V2 Local Prefix (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Query security policy v2 local prefix site associations of a tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/query
  ```

- **Delete a Security Policy V2 Local Prefix by tenant ID and its ID (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get a Security Policy V2 Local Prefix by tenant ID and its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Security Policy V2 Local Prefix (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get all Security Policy V2 Sets by tenant ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets
  ```

- **Create a Security Policy V2 Set (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets
  ```

- **Query security policy v2 sets of a tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets/query
  ```

- **Delete an existing Security Policy V2 Set by tenant ID and its ID (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}
  ```

- **Get an existing Security Policy V2 Set by tenant ID and its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}
  ```

- **Update an existing Security Policy V2 Set (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}
  ```

- **Get all Security Policy V2 Set Stacks by tenant ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks
  ```

- **Create a Security Policy V2 Set Stack (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks
  ```

- **Query Security Policy V2 Set stacks of a tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks/query
  ```

- **Delete an existing Security Policy V2 Set Stack by tenant ID and its ID (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks/{policyset_stack_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks/{policyset_stack_id}
  ```

- **Get an existing Security Policy V2 Set Stack by tenant ID and its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks/{policyset_stack_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks/{policyset_stack_id}
  ```

- **Update an existing Security Policy V2 Set Stack (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks/{policyset_stack_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ngfwsecuritypolicysetstacks/{policyset_stack_id}
  ```

- **Sync NTP Templates (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ntp/templates/{template_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ntp/templates/{template_id}/operations
  ```

- **Get a list of auth tokens (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/authtokens` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/authtokens
  ```

- **Create an auth token (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/authtokens` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/authtokens
  ```

- **Delete an auth token (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/authtokens/{authtoken_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/authtokens/{authtoken_id}
  ```

- **Get an auth token (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/authtokens/{authtoken_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/authtokens/{authtoken_id}
  ```

- **Get esp operator permissions assigned under all clients (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/clients/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/clients/permissions
  ```

- **Delete esp operator permissions assigned under a client (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Get client permissions (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Create or update esp operator permissions assigned under a client (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Get all sessions for operator id belonging to a tenant id (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/sessions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/sessions
  ```

- **Delete session for tenant_id, operator id, and session id (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/sessions/{session_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/sessions/{session_id}
  ```

- **Get session for tenant_id, operator id, and sessoin id (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/operators/{operator_id}/sessions/{session_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/operators/{operator_id}/sessions/{session_id}
  ```

- **Query OSPF config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ospfconfigs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ospfconfigs/query
  ```

- **Queries the OSPF discovered neighbors (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ospfdiscoveredneighbors/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ospfdiscoveredneighbors/query
  ```

- **Queries the OSPF reachable prefixes (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ospfreachableprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ospfreachableprefixes/query
  ```

- **Get all otp access configs. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/otpaccessconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/otpaccessconfigs
  ```

- **Update an OTP Access for all elements under an Tenant. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/otpaccessconfigs/{otpaccess_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/otpaccessconfigs/{otpaccess_config_id}
  ```

- **Get PA network contexts (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/panetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/panetworks
  ```

- **Query db for PA networks that match query parameters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/panetworks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/panetworks/query
  ```

- **Get PA network context (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/panetworks/{pa_network_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/panetworks/{pa_network_id}
  ```

- **Get Native PA SDWAN Integration Tenant Provision Status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/pasdwan_integration_status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/pasdwan_integration_status
  ```

- **Get Tenant passages from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/passages` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/passages
  ```

- **Queries the Path Prefix Distribution Filter Association (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/pathprefixdistributionfilterassociation/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/pathprefixdistributionfilterassociation/query
  ```

- **Queries the Path Prefix Distribution Filter List (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/pathprefixdistributionfilters/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/pathprefixdistributionfilters/query
  ```

- **Get PERFMGMT Policy Sets (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets
  ```

- **Create a new PERFMGMT Policy Set (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets
  ```

- **Query PERFMGMT Policy Set (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/query
  ```

- **Get PERFMGMT Policy Set status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/{id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/{id}/status
  ```

- **Delete a PERFMGMT Policy Set (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}
  ```

- **Get a PERFMGMT Policy Set (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}
  ```

- **Update a PERFMGMT Policy Set (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}
  ```

- **Get PERFMGMT Policy Set Stacks (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks
  ```

- **Create a new PERFMGMT Policy Set Stack (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks
  ```

- **Query PERFMGMT Policy Set Stack (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks/query
  ```

- **Delete a PERFMGMT Policy Set Stack (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks/{id}
  ```

- **Get a PERFMGMT Policy Set Stack (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks/{id}
  ```

- **Update a PERFMGMT Policy Set Stack (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtpolicysetstacks/{id}
  ```

- **Get ThreholdProfileList (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles
  ```

- **Create a new Threshold Profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles
  ```

- **Queries db for limit number of tenant level threshold profiles that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/query
  ```

- **Delete a Threshold Profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Get a ThresholdProfile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Update a Threshold Profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Get a list of custom permissions (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/permissions
  ```

- **Add a custom permission (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/permissions
  ```

- **Delete a tenant custom permission (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/permissions/{permission_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/permissions/{permission_id}
  ```

- **Get a tenant custom permission (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/permissions/{permission_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/permissions/{permission_id}
  ```

- **Update a custom permission (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/permissions/{permission_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/permissions/{permission_id}
  ```

- **Get all config/state info across all policysets from NB (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/policysets/bulk_config_state/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/policysets/bulk_config_state/query
  ```

- **Query security prefix filter for NB API. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prefixfilters/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prefixfilters/query
  ```

- **Get all Priority policy prefixes. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes
  ```

- **Create a new global prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes
  ```

- **Query Priority Global Prefixes. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/query
  ```

- **Delete a Priority Policy Global Prefix. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Get a specific Netwok Policy global prefix. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Update a  Priority global prefix. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Get Priority Policy local prefixes. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes
  ```

- **Create a new Priority Policy local prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes
  ```

- **Query site priority prefix association. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes/query
  ```

- **Delete a Priority Policy local prefix. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes/{priority_policy_id}
  ```

- **Get a specific Priority Policy local prefix. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes/{priority_policy_id}
  ```

- **Update a  Priority Policy local prefix. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicylocalprefixes/{priority_policy_id}
  ```

- **Get all priority policy sets of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysets
  ```

- **Create a new PriorityPolicySet (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prioritypolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysets
  ```

- **Query Priority policy sets. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prioritypolicysets/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysets/query
  ```

- **Delete Priority Policy Set. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}
  ```

- **Get a specific priority policy set of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}
  ```

- **Update Priority Policy Set. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}
  ```

- **Get a specific priority policy set status of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/status
  ```

- **Get all Priority policy set stacks of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks
  ```

- **Create a new PriorityPolicySetStack (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks
  ```

- **Query priority policyset stacks. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks/query
  ```

- **Delete a PriorityPolicySetStack (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks/{policy_set_id}
  ```

- **Get a specific Priority policy set stack of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks/{policy_set_id}
  ```

- **Update a PriorityPolicySetStack (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prioritypolicysetstacks/{policy_set_id}
  ```

- **Query Prisma Access config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prismaaccess_configs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prismaaccess_configs/query
  ```

- **Get a list of SASE connections (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prismasase_connections/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prismasase_connections/query
  ```

- **Get a list of SASE connection statuses (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/prismasase_connections/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/prismasase_connections/status/query
  ```

- **Get ProbeConfigList (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/probeconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeconfigs
  ```

- **Create a new Probe Config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/probeconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeconfigs
  ```

- **Queries db for limit number of tenant level probe profiles that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/probeconfigs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeconfigs/query
  ```

- **Delete a Probe Config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/probeconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeconfigs/{config_id}
  ```

- **Get a ProbeConfig (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/probeconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeconfigs/{config_id}
  ```

- **Update a ProbeConfig (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/probeconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeconfigs/{config_id}
  ```

- **Get ProbeProfileList (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/probeprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeprofiles
  ```

- **Create a new PROBE Profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/probeprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeprofiles
  ```

- **Queries db for limit number of tenant level probe profiles that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/probeprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeprofiles/query
  ```

- **Delete a PROBE Profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/probeprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeprofiles/{profile_id}
  ```

- **Get a ProbeProfile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/probeprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeprofiles/{profile_id}
  ```

- **Update a ProbeProfile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/probeprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/probeprofiles/{profile_id}
  ```

- **Get a list of custom roles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/roles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/roles
  ```

- **Add a custom role (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/roles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/roles
  ```

- **Delete a custom role (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/roles/{role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/roles/{role_id}
  ```

- **Get a custom role (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/roles/{role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/roles/{role_id}
  ```

- **Update a custom role (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/roles/{role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/roles/{role_id}
  ```

- **Create sso session (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/saml` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/saml
  ```

- **Process SAMLRequest from SP (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/saml_idp` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/saml_idp
  ```

- **Get all SD-WAN application configurations (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs
  ```

- **Create SD-WAN application configuration (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs
  ```

- **Delete SD-WAN application configuration (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs/{cid}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs/{cid}
  ```

- **Get SD-WAN application configuration (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs/{cid}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs/{cid}
  ```

- **Update SD-WAN application configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs/{cid}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/configs/{cid}
  ```

- **GET existing tenant SD-WAN application status. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sdwanapps/{app_id}/status
  ```

- **Queries db for limit number of LAN networks that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/securitypolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicyrules/query
  ```

- **Get tenant security policy sets. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/securitypolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets
  ```

- **Create a new tenant security policy set. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/securitypolicysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets
  ```

- **Queries db for limit number of security policysets that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/securitypolicysets/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/query
  ```

- **Delete a security policyset. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}
  ```

- **Get tenant security policy set. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}
  ```

- **Update a tenant security policy set. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}
  ```

- **Update a tenant security policy set. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/firewallpolicyruleorder` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/firewallpolicyruleorder
  ```

- **Get tenant security policy rules. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules
  ```

- **Create a new tenant security policy rule. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules
  ```

- **Delete a security policyrule. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}
  ```

- **Get tenant security policy rule. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}
  ```

- **Update a tenant security policy rule. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securitypolicysets/{policy_set_id}/securitypolicyrules/{policy_rule_id}
  ```

- **Get all Security Profile Groups by tenant ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/securityprofilegroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securityprofilegroups
  ```

- **Create a Security Profile Group (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/securityprofilegroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securityprofilegroups
  ```

- **Query Security profile groups of a tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/securityprofilegroups/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securityprofilegroups/query
  ```

- **Delete an existing Security Profile Group by tenant ID and its ID (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/securityprofilegroups/{profile_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securityprofilegroups/{profile_group_id}
  ```

- **Get an existing Security Profile group by tenant ID and its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/securityprofilegroups/{profile_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securityprofilegroups/{profile_group_id}
  ```

- **Update an existing Security Profile Group (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/securityprofilegroups/{profile_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/securityprofilegroups/{profile_group_id}
  ```

- **Get getServiceBindingMapList (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/servicebindingmaps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicebindingmaps
  ```

- **Create a new Service Binding Map (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/servicebindingmaps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicebindingmaps
  ```

- **Queries db for limit number of service bindings that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/servicebindingmaps/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicebindingmaps/query
  ```

- **Delete a Service Binding Map (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/servicebindingmaps/{map_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicebindingmaps/{map_id}
  ```

- **Get a ServiceBindingMap (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/servicebindingmaps/{map_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicebindingmaps/{map_id}
  ```

- **Update a ServiceBindingMap (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/servicebindingmaps/{map_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicebindingmaps/{map_id}
  ```

- **Get All ServiceConnections for a given tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/serviceconnections` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/serviceconnections
  ```

- **Get getServiceLabelList (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/servicelabels` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicelabels
  ```

- **Create a new Service Label (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/servicelabels` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicelabels
  ```

- **Queries db for limit number of service labels that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/servicelabels/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicelabels/query
  ```

- **Delete a Service Label (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/servicelabels/{service_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicelabels/{service_label_id}
  ```

- **Get a GetServiceLabel (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/servicelabels/{service_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicelabels/{service_label_id}
  ```

- **Update a ServiceLabel (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/servicelabels/{service_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/servicelabels/{service_label_id}
  ```

- **Signup new operators (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/signup` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/signup
  ```

- **Query App Acceleration status V2.0. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/appacceleration/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/appacceleration/query
  ```

- **Get site config/state info for queried site from NB (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/bulk_config_state/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/bulk_config_state/query
  ```

- **Bulk site update API (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/bulkoperations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/bulkoperations
  ```

- **Query sites across client tenants for MSP (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/rquery
  ```

- **Query export jobs (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/snapshots/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/snapshots/query
  ```

- **GET anynet link (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/anynetlinks/{anynet_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/anynetlinks/{anynet_id}
  ```

- **Get site App Acceleration status for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/appaccelerationstatus` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/appaccelerationstatus
  ```

- **Get all ADEM status for a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs
  ```

- **Create dem site config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs
  ```

- **Delete Start Network Node config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs/{config_id}
  ```

- **Get dem site config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs/{config_id}
  ```

- **Update dem site config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/demsiteconfigs/{config_id}
  ```

- **Get all ADEM status for a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/demstatus` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/demstatus
  ```

- **Get ADEM status for a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/demstatus/{dem_status_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/demstatus/{dem_status_id}
  ```

- **Get device id site configs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs
  ```

- **Create device id site config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs
  ```

- **Get device id site config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{config_id}
  ```

- **Update device Id site config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{config_id}
  ```

- **Bulk delete Start Network Node config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/bulkdelete_snmpdiscoverystartnodes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/bulkdelete_snmpdiscoverystartnodes
  ```

- **Get all Start Network Node config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes
  ```

- **Create Start Network Node config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes
  ```

- **Delete Start Network Node config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}
  ```

- **Get Start Network Node config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}
  ```

- **Update Start Network Node config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{deviceid_config_id}/snmpdiscoverystartnodes/{deviceid_start_node_id}
  ```

- **Update admin state Northbound (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/admin_state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/admin_state
  ```

- **Get application probe configuration of element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/application_probe` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/application_probe
  ```

- **Update application probe configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/application_probe` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/application_probe
  ```

- **Reset BGP peer config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}/operations
  ```

- **Get BGP Peer advertised prefixes (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/advertisedprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/advertisedprefixes
  ```

- **Get BGP discovered prefix information (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/discoveredprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/discoveredprefixes
  ```

- **Get BGP reachable prefix information (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/reachableprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/reachableprefixes
  ```

- **Get device id element level configs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs
  ```

- **Create device id element level (source interface) config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs
  ```

- **Delete device id element level (source interface) config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}
  ```

- **Get device id element level config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}
  ```

- **Update device id element level (source interface) config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/deviceidconfigs/{deviceid_config_id}
  ```

- **Read all DNS service configs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices
  ```

- **Create a new DNS service config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices
  ```

- **Delete a DNS service config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}
  ```

- **Get a DNS service config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}
  ```

- **Update a DNS service config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/dnsservices/{dnsservice_role_id}
  ```

- **Get all element level extensions (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions
  ```

- **Create element level extension configuration (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions
  ```

- **Query element level extensions that match query params (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions/query
  ```

- **Delete a specific extension associated with an element (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions/{extension_id}
  ```

- **Get an element level extension (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions/{extension_id}
  ```

- **Update element level extension configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/extensions/{extension_id}
  ```

- **Get all Multicast IGMP group membership info (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicastigmpmemberships` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicastigmpmemberships
  ```

- **Get Multicast IGMP group membership info (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicastigmpmemberships/{membership_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicastigmpmemberships/{membership_id}
  ```

- **Get all Multicast status info (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicaststatus` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/multicaststatus
  ```

- **Reset action on interface (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/operations
  ```

- **Get all IPFix config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix
  ```

- **Create a IPFix Config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix
  ```

- **Delete IPFix config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}
  ```

- **Get IPFix config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}
  ```

- **Update a IPFix Config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ipfix/{ipfix_id}
  ```

- **Get all MSTP Instances (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances
  ```

- **Create a MSTP Instance (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances
  ```

- **Delete MSTP instance for an element (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}
  ```

- **Get MSTP Instance (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}
  ```

- **Update a MSTP Instance (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}
  ```

- **Get MSTP Instance status for a specific id (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/mstp_instances/{mstp_instance_id}/status
  ```

- **Get all Multicast dynamic RPs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastdynamicrps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastdynamicrps
  ```

- **Get Multicast dynamic RP (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastdynamicrps/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastdynamicrps/{id}
  ```

- **Get all Multicast configs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs
  ```

- **Get Multicast config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}
  ```

- **Updates Multicast config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}
  ```

- **Get all Multicast Protocol Parameters (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastprotocolparameters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastprotocolparameters
  ```

- **Get all Multicast routes (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastroutes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastroutes
  ```

- **Get all Multicast RP configs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps
  ```

- **Creates Multicast RP config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps
  ```

- **Deletes Multicast RP config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}
  ```

- **Get Multicast RP config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}
  ```

- **Updates Multicast RP config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastrps/{config_id}
  ```

- **Get all Multicast WAN status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastwanstatus` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastwanstatus
  ```

- **Get Multicast WAN status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastwanstatus/{wan_status_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastwanstatus/{wan_status_id}
  ```

- **Get all OSPF configs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs
  ```

- **Creates OSPF config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs
  ```

- **Deletes OSPF config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Get OSPF config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Updates OSPF config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Get all OSPF Discovered Neighbors (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}/ospfdiscoveredneighbors` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}/ospfdiscoveredneighbors
  ```

- **Get all OSPF Reachable Prefixes (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}/ospfreachableprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}/ospfreachableprefixes
  ```

- **Get all OSPF configs from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfglobalconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfglobalconfigs
  ```

- **Get OSPF config from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfglobalconfigs/{ospf_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfglobalconfigs/{ospf_config_id}
  ```

- **Updates OSPF config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfglobalconfigs/{ospf_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfglobalconfigs/{ospf_config_id}
  ```

- **Get Prisma Access BGP Peer advertised prefixes (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/pa_advertisedprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/pa_advertisedprefixes
  ```

- **Get Prisma Access BGP reachable prefix information (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/pa_reachableprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/pa_reachableprefixes
  ```

- **Get switch port to VLAN port mapping information for an element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/port_vlan_members` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/port_vlan_members
  ```

- **Get all Access List for Element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists
  ```

- **Create AS-Path Access List (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists
  ```

- **Queries db for limit number of access lists that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/query
  ```

- **Delete Access List (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Get Specific Access List (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Updates Access List (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Get all Community List for Element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists
  ```

- **Create IP Community List (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists
  ```

- **Queries db for limit number of community lists that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/query
  ```

- **Delete Community List (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}
  ```

- **Get Specific Community List (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}
  ```

- **Updates Community List (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_ipcommunitylists/{config_id}
  ```

- **Get all Prefix List for Element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists
  ```

- **Create IP Prefix List (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists
  ```

- **Queries db for limit number of prefix lists that match query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/query
  ```

- **Delete Prefix List (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}
  ```

- **Get Specific Prefix List (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}
  ```

- **Updates Prefix List (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{config_id}
  ```

- **Get element security zones (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones
  ```

- **Create an association between element and security zone. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones
  ```

- **Delete an existing security zone (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Get element security zone (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Update an existing element security zone (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Get SNMP Agent on an element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents
  ```

- **Create SNMP Agent (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents
  ```

- **delete SNMP Agent (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **get SNMP Agent (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **Update SNMP Agent (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **Get All SNMP Trap on an element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps
  ```

- **Create SNMP Trap (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps
  ```

- **delete SNMP Trap (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}
  ```

- **Get SNMP trap on an element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}
  ```

- **Update SNMP Trap (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmptraps/{snmptrap_id}
  ```

- **Get TACACS+ Servers (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers
  ```

- **Create TACACS+ Servers (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers
  ```

- **Delete TACACS+ Server (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}
  ```

- **Get TACACS+ Server (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}
  ```

- **Update TACACS+ Server (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/tacacs_plus_servers/{id}
  ```

- **Get VLAN to switch port mapping information for an element (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/vlan_port_members` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/vlan_port_members
  ```

- **Get All Element Shells (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells
  ```

- **Create an element shell (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells
  ```

- **Delete an element shell (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Get Element Shell (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Used for associations and element shell updates (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Asynchronization call to Copy Interface Configurations from element to element shell (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{shell_id}/copy_element_configurations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{shell_id}/copy_element_configurations
  ```

- **Get Status of Copy Configurations process (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{shell_id}/copy_element_configurations/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{shell_id}/copy_element_configurations/status
  ```

- **Get all site level extensions (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions
  ```

- **Create site level extension configuration (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions
  ```

- **Query site level extensions that match query params (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions/query
  ```

- **Delete a specific extension associated with a site (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions/{extension_id}
  ```

- **Get a site level extension (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions/{extension_id}
  ```

- **Update site level extension configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/extensions/{extension_id}
  ```

- **Get flow logging status for a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/flowexport_status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/flowexport_status
  ```

- **Get HubServiceEndpoint for a Site of a given tenant by tenant ID and site ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/hubserviceendpoints` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/hubserviceendpoints
  ```

- **Get all IPFix site prefix association (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes
  ```

- **Create a IPFix site prefix association (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes
  ```

- **Delete a IPFix site prefix association (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **Get IPFix site prefix association (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **Update a IPFix site prefix association (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ipfixlocalprefixes/{prefix_id}
  ```

- **GET the site local prefix set (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/localprefixset` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/localprefixset
  ```

- **Create microsegment (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/microsegments` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/microsegments
  ```

- **Delete microsegment (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/microsegments/{microsegment_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/microsegments/{microsegment_id}
  ```

- **Get microsegment by ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/microsegments/{microsegment_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/microsegments/{microsegment_id}
  ```

- **Update microsegment (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/microsegments/{microsegment_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/microsegments/{microsegment_id}
  ```

- **Get multicast source side RPs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiderps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiderps
  ```

- **Query multicast source side RPs (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiderps/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiderps/query
  ```

- **Get multicast source side RP (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiderps/{rp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiderps/{rp_id}
  ```

- **Get multicast source site configs (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs
  ```

- **Create multicast source site config (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs
  ```

- **Delete multicast source site config (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs/{config_id}
  ```

- **Get multicast source site config (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs/{config_id}
  ```

- **Update multicast source site config (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/multicastsourcesiteconfigs/{config_id}
  ```

- **Get site NAT prefixes (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes
  ```

- **Create an association between site and NAT Prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes
  ```

- **Delete an existing Site NAT prefix (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes/{prefix_id}
  ```

- **Get site NAT prefix (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes/{prefix_id}
  ```

- **Update an existing Site NAT Local prefix Association (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/natlocalprefixes/{prefix_id}
  ```

- **Get site Network policy prefix associations (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes
  ```

- **Create an association between site and Network local Prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes
  ```

- **Delete an existing Site Network Policy local prefix association (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get site Network policy local prefix association (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Site Network policy local prefix (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get all security policy v2 local prefix site association for a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Create a security policy V2 local prefix site association (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Delete an existing security policy v2 local prefix site association (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get an existing security policy v2 local prefix assocation by its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing security policy V2 local prefix site association (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Handle operations on site. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/operations
  ```

- **GET Path Prefix Distribution Filter Association (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation
  ```

- **Create Path Prefix Distribution Filter Association  List (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation
  ```

- **Delete Path Prefix Distribution Filter Association (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}
  ```

- **Get Path Prefix Distribution Filter Association (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}
  ```

- **Update Path Prefix Distribution Filter Association (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilterassociation/{pathprefixdistributionfilterassociation_id}
  ```

- **GET Path Prefix Distribution Filter List (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters
  ```

- **Create Path Prefix Distribution Filters List (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters
  ```

- **Delete Path Prefix Distribution Filters List (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}
  ```

- **Get Path Prefix Distribution filters List (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}
  ```

- **Update Path Prefix Distribution Filters List (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/pathprefixdistributionfilters/{pathprefixdistributionfilter_id}
  ```

- **Get Path Prefixes (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/peersites/{peer_site_id}/pathprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/peersites/{peer_site_id}/pathprefixes
  ```

- **GET Prefix Distribution Spoke List (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists
  ```

- **Create Prefix Distribution Spoke List (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists
  ```

- **Delete Prefix Distribution Spoke List (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}
  ```

- **Get Prefix Distribution Spoke List (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}
  ```

- **Update Prefix Distribution Spoke List (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixdistributionspokelists/{prefixdistributionspokelist_id}
  ```

- **Get site security filters (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters
  ```

- **Create an association between site and security prefix filter. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters
  ```

- **Query security prefix filter for NB API. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters/query
  ```

- **Delete an existing security prefix filter (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters/{filter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters/{filter_id}
  ```

- **Get site security prefix filter (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters/{filter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters/{filter_id}
  ```

- **Update an existing security prefix filter (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters/{filter_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prefixfilters/{filter_id}
  ```

- **Get site Priority policy prefix associations (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes
  ```

- **Create an association between site and Priority local Prefix. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes
  ```

- **Delete an existing Site Priority Policy local prefix association (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Get site Priority policy local prefix association (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Site Priority policy local prefix (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Get all Prisma Access Configs for a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs
  ```

- **Create a Prisma Access Config with remote networks and security processing node (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs
  ```

- **Delete a Prisma Access Config with remote networks and security processing node (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs/{config_id}
  ```

- **Get A Prisma Access Configs for a site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs/{config_id}
  ```

- **Update a Prisma Access Config with remote networks and security processing node (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismaaccess_configs/{config_id}
  ```

- **Get a specific SASE connection status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}/status
  ```

- **Get ServiceConnections for a given tenant and hub site (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/serviceconnections` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/serviceconnections
  ```

- **Get site ciphers (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/siteciphers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/siteciphers
  ```

- **Update site cipher (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/siteciphers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/siteciphers
  ```

- **Get site security zones (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones
  ```

- **Create an association between site and security zone. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones
  ```

- **Query security zone for NB API. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/query
  ```

- **Delete an existing security zone (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Get site security zone (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Update an existing security zone (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Generate a snapshot of a particular site (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/snapshots` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/snapshots
  ```

- **Retrieve yaml configuration by ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/snapshots/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/snapshots/{id}
  ```

- **Status of the job (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/snapshots/{id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/snapshots/{id}/status
  ```

- **Get all spokeclusters (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters
  ```

- **Create Spoke Cluster (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters
  ```

- **Query Spoke Clusters. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/query
  ```

- **Delete spoke cluster. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}
  ```

- **Get spoke cluster details (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}
  ```

- **Update Spoke Cluster (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}
  ```

- **Handle operations on spokecluster. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}/operations
  ```

- **Get Spoke Cluster Status. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/spokeclusters/{spoke_cluster_id}/status
  ```

- **Get site status (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/status
  ```

- **GET anynet link (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sites/{site_id}/wanpaths` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sites/{site_id}/wanpaths
  ```

- **Query security zone. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sitesecurityzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sitesecurityzones/query
  ```

- **Create or retry a site deployment (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sitesnapshots` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sitesnapshots
  ```

- **Query import jobs with filters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/sitesnapshots/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sitesnapshots/query
  ```

- **Retrieve deployment status by ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/sitesnapshots/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/sitesnapshots/{id}
  ```

- **Get all licenses skus for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/skus` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/skus
  ```

- **Get all licenses skus for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/skus/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/skus/{id}
  ```

- **Query Start Network Node based on parameters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/snmpdiscoverystartnodes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/snmpdiscoverystartnodes/query
  ```

- **Queries db for all software download done by a tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/softwarehistory/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/softwarehistory/query
  ```

- **Get all easy onboarding created remote networks for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/spnnpnsitemigration/remotenetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/spnnpnsitemigration/remotenetworks
  ```

- **Get all easy onboarding created remote networks for a tenant (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/spnnpnsitemigration/remotenetworks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/spnnpnsitemigration/remotenetworks/query
  ```

- **Query Spoke Clusters. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/spokeclusters/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/spokeclusters/query
  ```

- **Query Spoke Clusters Status (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/spokeclusters/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/spokeclusters/status/query
  ```

- **Get all Spyware Security Profiles by tenant ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/spywareprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/spywareprofiles
  ```

- **Get an existing Spyware Security Profile by tenant ID and its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/spywareprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/spywareprofiles/{profile_id}
  ```

- **Get Syslog Server Profiles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/syslogserverprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/syslogserverprofiles
  ```

- **Create Syslog Server Profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/syslogserverprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/syslogserverprofiles
  ```

- **Delete Syslog Server Profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}
  ```

- **Get Syslog Server Profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}
  ```

- **Update Syslog Server Profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}
  ```

- **Get TACACS+ Profiles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles
  ```

- **Create TACACS+ Profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles
  ```

- **Delete TACACS+ Profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles/{profile_id}
  ```

- **Get TACACS+ Profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles/{profile_id}
  ```

- **Update TACACS+ Profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/tacacs_plus_profiles/{profile_id}
  ```

- **Get all existing NTP Template of tenant. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/templates/ntp` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/templates/ntp
  ```

- **Create a new NTP Template (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/templates/ntp` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/templates/ntp
  ```

- **Delete an existing NTP Template (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/templates/ntp/{ntp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/templates/ntp/{ntp_id}
  ```

- **Get an existing NTP Template (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/templates/ntp/{ntp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/templates/ntp/{ntp_id}
  ```

- **Update an existing NTP Template (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/templates/ntp/{ntp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/templates/ntp/{ntp_id}
  ```

- **Get tenant passage configuration from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/tenantpassageconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/tenantpassageconfigs
  ```

- **Deletes tenant passage configuration from NB (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/tenantpassageconfigs/{passage_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/tenantpassageconfigs/{passage_config_id}
  ```

- **Query Threat Metadata. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/threatmetadata/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/threatmetadata/query
  ```

- **Get All Active/closed Sessions details (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/toolkitsessions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/toolkitsessions
  ```

- **Query db for sessions that match query parameters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/toolkitsessions/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/toolkitsessions/query
  ```

- **Query topology links (paginated) (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/topology/links/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/topology/links/query
  ```

- **Query topology nodes (paginated) (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/topology/nodes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/topology/nodes/query
  ```

- **Query Machine Upgrade Status (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/upgrade_status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/upgrade_status/query
  ```

- **Query URL Categories. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/urlcategories/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/urlcategories/query
  ```

- **Get all custom URL categories for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/urlcustomcategories` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/urlcustomcategories
  ```

- **Get a custom URL category for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/urlcustomcategories/{url_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/urlcustomcategories/{url_id}
  ```

- **Get the URL filtering config for a tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/urlfilteringconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/urlfilteringconfigs
  ```

- **Get all URL Filtering Profiles by tenant ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/urlfilteringprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/urlfilteringprofiles
  ```

- **Get an existing URL Filtering Profile by tenant ID and its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/urlfilteringprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/urlfilteringprofiles/{profile_id}
  ```

- **Get All User ID Agents (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/useridagents` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/useridagents
  ```

- **Create User ID Agent (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/useridagents` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/useridagents
  ```

- **Query User ID Agents. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/useridagents/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/useridagents/query
  ```

- **Delete User ID Agent (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/useridagents/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/useridagents/{id}
  ```

- **Get User ID Agent (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/useridagents/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/useridagents/{id}
  ```

- **Update User ID Agent (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/useridagents/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/useridagents/{id}
  ```

- **Get Users. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/users` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/users
  ```

- **Create an user identity. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/users` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/users
  ```

- **Delete an user identity. (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/users/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/users/{user_id}
  ```

- **Get an user identity. (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/users/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/users/{user_id}
  ```

- **Put an user identity. (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/users/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/users/{user_id}
  ```

- **Get all Vff Licenses for Tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vfflicenses` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses
  ```

- **Query and get Vff License (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vfflicenses/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/rquery
  ```

- **Query Tenant Vff License Tokens (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vfflicenses/tokens/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/tokens/query
  ```

- **Get specific Vff Licenses for Tenant (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}
  ```

- **Vff operation (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/operations
  ```

- **Get status for Vff License (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/status
  ```

- **Get all Tenant Vff License Tokens (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/tokens` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/tokens
  ```

- **Create Tenant Vff License Token (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/tokens` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/tokens
  ```

- **Get specific Tenant Vff License Token (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/tokens/{token_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/tokens/{token_id}
  ```

- **Update Tenant Vff License Token (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/tokens/{token_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicenses/{license_id}/tokens/{token_id}
  ```

- **Query and get Vff License State (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vfflicensesstatus/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vfflicensesstatus/rquery
  ```

- **Query db for VPNLinks that match query parameters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vpnlinks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vpnlinks/query
  ```

- **Perform an operation on a VPN link (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/operations
  ```

- **Get the VPNLink admin state (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/state
  ```

- **Change the VPNLink admin state (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/state
  ```

- **Get All VRF Context Profiles (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vrfcontextprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontextprofiles
  ```

- **Create a new VRF context profile (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vrfcontextprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontextprofiles
  ```

- **Query VRF Context Profiles (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vrfcontextprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontextprofiles/query
  ```

- **Delete VRF Context Profile (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/vrfcontextprofiles/{vrf_context_profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontextprofiles/{vrf_context_profile_id}
  ```

- **Get VRF Context Profile (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vrfcontextprofiles/{vrf_context_profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontextprofiles/{vrf_context_profile_id}
  ```

- **Update VRF Context Profile (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/vrfcontextprofiles/{vrf_context_profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontextprofiles/{vrf_context_profile_id}
  ```

- **Get VRF segments (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vrfcontexts` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontexts
  ```

- **Create a new VRF context (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vrfcontexts` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontexts
  ```

- **Query VRF Contexts (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/vrfcontexts/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontexts/query
  ```

- **Delete VRF segment (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/vrfcontexts/{vrf_context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontexts/{vrf_context_id}
  ```

- **Get VRF segment (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vrfcontexts/{vrf_context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontexts/{vrf_context_id}
  ```

- **Update VRF Context (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/vrfcontexts/{vrf_context_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vrfcontexts/{vrf_context_id}
  ```

- **Get all Vulnerability Security Profiles by tenant ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vulnerabilityprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vulnerabilityprofiles
  ```

- **Get an existing Vulnerability Security Profile by tenant ID and its ID (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/vulnerabilityprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/vulnerabilityprofiles/{profile_id}
  ```

- **Get all tenant WAN networks (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/wannetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wannetworks
  ```

- **Create a new WAN (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/wannetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wannetworks
  ```

- **Query db for WAN networks that match query parameters (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/wannetworks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wannetworks/query
  ```

- **Delete an existing WAN (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/wannetworks/{wan_network_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wannetworks/{wan_network_id}
  ```

- **Get an existing WAN (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/wannetworks/{wan_network_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wannetworks/{wan_network_id}
  ```

- **Update an existing WAN (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/wannetworks/{wan_network_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wannetworks/{wan_network_id}
  ```

- **Get app/wan contexts (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/wanoverlays` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wanoverlays
  ```

- **Create a new app/wan context (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/wanoverlays` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wanoverlays
  ```

- **Delete app/wan context (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/wanoverlays/{wan_overlay_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wanoverlays/{wan_overlay_id}
  ```

- **Get app/wan context (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/wanoverlays/{wan_overlay_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wanoverlays/{wan_overlay_id}
  ```

- **Update app/wan context (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/wanoverlays/{wan_overlay_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/wanoverlays/{wan_overlay_id}
  ```

- **Get all extensions from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ws/extensions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ws/extensions
  ```

- **Create extension configuration (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ws/extensions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ws/extensions
  ```

- **Queries db for limit number of tenant extensions that match the query params. (v2.0).** New `POST /v2.0/api/tenants/{tenant_id}/ws/extensions/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ws/extensions/query
  ```

- **Delete extension (v2.0).** New `DELETE /v2.0/api/tenants/{tenant_id}/ws/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ws/extensions/{extension_id}
  ```

- **Get extension from NB (v2.0).** New `GET /v2.0/api/tenants/{tenant_id}/ws/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ws/extensions/{extension_id}
  ```

- **Update extensions configuration (v2.0).** New `PUT /v2.0/api/tenants/{tenant_id}/ws/extensions/{extension_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.0/api/tenants/{tenant_id}/ws/extensions/{extension_id}
  ```

- **Get current user profile (v2.1).** New `GET /v2.1/api/profile` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/profile
  ```

- **Query active user mappings of tenant (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/activeuserips/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/activeuserips/query
  ```

- **Get application version for a tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/appdefs_version` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/appdefs_version
  ```

- **Get system application definitions (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/appdefs_version/{vid}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/appdefs_version/{vid}
  ```

- **Change standard apps version (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/appdefs_version/{vid}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/appdefs_version/{vid}
  ```

- **Get audit logs for given tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/auditlog` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/auditlog
  ```

- **Get audit logs for given tenant as per specified query filters (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/auditlog/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/auditlog/query
  ```

- **Get audit logs for given tenant and audit log id (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/auditlog/{auditlog_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/auditlog/{auditlog_id}
  ```

- **Queries the BGP Peers Status (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/bgppeers/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/bgppeers/status/query
  ```

- **Get existing element cellular module images (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/cellular_module_images` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/cellular_module_images
  ```

- **Get information about a element cellular module image (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/cellular_module_images/{image_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/cellular_module_images/{image_id}
  ```

- **Queries db for limit number of cellular module status that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/cellular_modules/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/cellular_modules/status/query
  ```

- **Get esp tenant clients details for tenant id (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/clients` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/clients
  ```

- **Get a list of client custom roles (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/clients/{client_id}/roles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/clients/{client_id}/roles
  ```

- **Get a client custom role (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/clients/{client_id}/roles/{role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/clients/{client_id}/roles/{role_id}
  ```

- **Get directory service details of tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/directoryservices` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/directoryservices
  ```

- **Create Directory Service (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/directoryservices` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/directoryservices
  ```

- **Delete Directory Service (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/directoryservices/{directory_service_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/directoryservices/{directory_service_id}
  ```

- **Update Directory Service (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/directoryservices/{directory_service_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/directoryservices/{directory_service_id}
  ```

- **Get users of tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/directoryusers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/directoryusers
  ```

- **Query users. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/directoryusers/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/directoryusers/query
  ```

- **Get a specific user or of tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/directoryusers/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/directoryusers/{user_id}
  ```

- **Read all DNS service profiles (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/dnsserviceprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/dnsserviceprofiles
  ```

- **Create a new DNS service profile (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/dnsserviceprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/dnsserviceprofiles
  ```

- **Query DNS service profile based on parameters (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/dnsserviceprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/dnsserviceprofiles/query
  ```

- **Delete a DNS service profile (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Get a DNS service profile (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Update a DNS service profile (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/dnsserviceprofiles/{dnsservice_role_id}
  ```

- **Get cellular module status (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elements/{element_id}/cellular_modules/{cellular_module_id}/status
  ```

- **Change Mode of an element from FIPS to Non-FIPS or vice-versa. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/elements/{element_id}/fips_mode_change_operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elements/{element_id}/fips_mode_change_operations
  ```

- **Get all element NTP (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elements/{element_id}/ntp` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elements/{element_id}/ntp
  ```

- **Get specific element NTP (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}
  ```

- **Update an existing element NTP. (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elements/{element_id}/ntp/{ntp_id}
  ```

- **Get all software upgrade status (up to 5) started by the tenant user (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elements/{element_id}/software/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elements/{element_id}/software/status
  ```

- **Query element security zones. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/elementsecurityzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementsecurityzones/query
  ```

- **Queries db for limit number of element shells that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/elementshells/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementshells/query
  ```

- **Get all element User (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elementusers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers
  ```

- **Create Element User (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/elementusers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers
  ```

- **Delete element user (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}
  ```

- **Get specific element User (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}
  ```

- **Update an existing element user. (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}
  ```

- **Get all accesses for a particular user (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access
  ```

- **Grant Specific role to Element user on specific element (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access
  ```

- **Delete element user Access (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}
  ```

- **Get specific element User access (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}
  ```

- **Update an existing element user access. (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/access/{access_id}
  ```

- **Get element user password (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/password` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/elementusers/{user_id}/password
  ```

- **GET the tenant enterprise prefix set (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/enterpriseprefixset` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/enterpriseprefixset
  ```

- **Update the tenant enterprise prefix set (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/enterpriseprefixset` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/enterpriseprefixset
  ```

- **Queries db for limit number of event correlation policyrules that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/eventcorrelationpolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/eventcorrelationpolicyrules/query
  ```

- **Get all event correlation policyrules (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules
  ```

- **Create event correlation policyrule configuration (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules
  ```

- **Delete specific event correlation policy rule (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Get event correlation policy rule (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Update event correlation policyrule configuration (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/eventcorrelationpolicysets/{policy_set_id}/eventcorrelationpolicyrules/{policy_rule_id}
  ```

- **Get Machine system status for a tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/machines/{machine_id}/machinesystemstatus` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/machines/{machine_id}/machinesystemstatus
  ```

- **Get recovery token for a machine (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/machines/{machine_id}/recovery_tokens` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/machines/{machine_id}/recovery_tokens
  ```

- **Create a Recovery Token for Fips change mode (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/machines/{machine_id}/recovery_tokens` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/machines/{machine_id}/recovery_tokens
  ```

- **Update Recovery Token for Fips change mode (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/machines/{machine_id}/recovery_tokens/{token_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/machines/{machine_id}/recovery_tokens/{token_id}
  ```

- **Get Machine state (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/machines/{machine_id}/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/machines/{machine_id}/state
  ```

- **Get multicast peer groups (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/multicastpeergroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/multicastpeergroups
  ```

- **Create multicast peer group (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/multicastpeergroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/multicastpeergroups
  ```

- **Delete multicast peer group (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}
  ```

- **Get multicast peer group (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}
  ```

- **Update multicast peer group (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/multicastpeergroups/{peer_group_id}
  ```

- **Get all Network policy global prefixes. (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes
  ```

- **Create a new global prefix. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes
  ```

- **Query Network Global Prefixes. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes/query
  ```

- **Delete a Network Policy Global Prefix. (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Get a specific Network Policy global prefix. (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Update a Network global prefix. (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/networkpolicyglobalprefixes/{prefix_id}
  ```

- **Query site network prefix association. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/networkpolicylocalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/networkpolicylocalprefixes/query
  ```

- **Get all Security Policy V2 Global Prefixes for a tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes
  ```

- **Create an Security Policy V2 Global Prefix (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes
  ```

- **Query Security Policy V2 Global Prefixes of a tenant (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/query
  ```

- **Delete a Security Policy V2 Local Prefix by tenant ID and its ID (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Get a Security Policy V2 Global Prefix by tenant ID and its ID (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Update an existing Security Policy V2 Global Prefix (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicyglobalprefixes/{prefix_id}
  ```

- **Query security policy v2 local prefix site associations of a tenant (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/ngfwsecuritypolicylocalprefixes/query
  ```

- **Get a list of tenant operators (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/operators` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators
  ```

- **Create a tenant operator (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/operators` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators
  ```

- **Delete a tenant operator (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/operators/{operator_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}
  ```

- **Get a tenant operator (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/operators/{operator_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}
  ```

- **Patch a tenant operator (v2.1).** New `PATCH /v2.1/api/tenants/{tenant_id}/operators/{operator_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PATCH api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}
  ```

- **Update a tenant operator (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/operators/{operator_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}
  ```

- **Get a list of auth tokens (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/operators/{operator_id}/authtokens` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}/authtokens
  ```

- **Create an auth token (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/operators/{operator_id}/authtokens` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}/authtokens
  ```

- **Delete an auth token (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/operators/{operator_id}/authtokens/{authtoken_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}/authtokens/{authtoken_id}
  ```

- **Get an auth token (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/operators/{operator_id}/authtokens/{authtoken_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}/authtokens/{authtoken_id}
  ```

- **Delete esp operator permissions assigned under a client (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Get esp operator permissions assigned under a client (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Create or update esp operator permissions assigned under a client (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/operators/{operator_id}/clients/{client_id}/permissions
  ```

- **Query OSPF config (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/ospfconfigs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/ospfconfigs/query
  ```

- **get all Path Groups for a tenant. (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/pathgroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/pathgroups
  ```

- **Create a Path Group for a tenant. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/pathgroups` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/pathgroups
  ```

- **Queries db for limit number of network contexts that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/pathgroups/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/pathgroups/query
  ```

- **Delete A Path Group of a tenant. (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/pathgroups/{path_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/pathgroups/{path_group_id}
  ```

- **get A Path Group of a tenant. (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/pathgroups/{path_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/pathgroups/{path_group_id}
  ```

- **Update A Path Group of a tenant. (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/pathgroups/{path_group_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/pathgroups/{path_group_id}
  ```

- **Get ThreholdProfileList (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles
  ```

- **Create a new Threshold Profile (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles
  ```

- **Queries db for limit number of tenant level threshold profiles that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/query
  ```

- **Delete a Threshold Profile (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Get a ThresholdProfile (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Update a Threshold Profile (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/perfmgmtthresholdprofiles/{profile_id}
  ```

- **Get all Priority policy prefixes. (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes
  ```

- **Create a new global prefix. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes
  ```

- **Query Priority Global Prefixes. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/query
  ```

- **Delete a Priority Policy Global Prefix. (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Get a specific Netwok Policy global prefix. (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Update a  Priority global prefix. (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicyglobalprefixes/{priority_policy_id}
  ```

- **Query site priority prefix association. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/prioritypolicylocalprefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicylocalprefixes/query
  ```

- **Query Priority policy rules. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/prioritypolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicyrules/query
  ```

- **Get priority policy rules of tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules
  ```

- **Create a new PriorityPolicyRule (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules
  ```

- **Delete priority policy rule of tenant. (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Get a specific priority policy rule of tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Update priority policy rule of tenant. (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Get ProbeConfigList (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/probeconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/probeconfigs
  ```

- **Create a new Probe Config (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/probeconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/probeconfigs
  ```

- **Queries db for limit number of tenant level probe profiles that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/probeconfigs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/probeconfigs/query
  ```

- **Delete a Probe Config (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/probeconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/probeconfigs/{config_id}
  ```

- **Get a ProbeConfig (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/probeconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/probeconfigs/{config_id}
  ```

- **Update a ProbeConfig (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/probeconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/probeconfigs/{config_id}
  ```

- **Get a list of custom roles (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/roles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/roles
  ```

- **Add a custom role (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/roles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/roles
  ```

- **Delete a custom role (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/roles/{role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/roles/{role_id}
  ```

- **Get a custom role (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/roles/{role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/roles/{role_id}
  ```

- **Update a custom role (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/roles/{role_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/roles/{role_id}
  ```

- **GET existing tenant SD-WAN applications with release information. (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sdwanapps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sdwanapps
  ```

- **GET existing tenant SD-WAN application with release information. (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sdwanapps/{app_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sdwanapps/{app_id}
  ```

- **Get security zones (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/securityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/securityzones
  ```

- **Create a new security zone (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/securityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/securityzones
  ```

- **Queries db for limit number of security zones that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/securityzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/securityzones/query
  ```

- **Delete an existing security zone (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/securityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/securityzones/{zone_id}
  ```

- **Get security zone (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/securityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/securityzones/{zone_id}
  ```

- **Update an existing security zone (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/securityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/securityzones/{zone_id}
  ```

- **Get getServiceBindingMapList (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/servicebindingmaps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicebindingmaps
  ```

- **Create a new Service Binding Map (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/servicebindingmaps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicebindingmaps
  ```

- **Queries db for limit number of service bindings that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/servicebindingmaps/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicebindingmaps/query
  ```

- **Delete a Service Binding Map (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/servicebindingmaps/{map_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicebindingmaps/{map_id}
  ```

- **Get a ServiceBindingMap (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/servicebindingmaps/{map_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicebindingmaps/{map_id}
  ```

- **Update a ServiceBindingMap (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/servicebindingmaps/{map_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicebindingmaps/{map_id}
  ```

- **Get getServiceLabelList (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/servicelabels` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicelabels
  ```

- **Create a new Service Label (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/servicelabels` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicelabels
  ```

- **Queries db for limit number of service labels that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/servicelabels/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicelabels/query
  ```

- **Delete a Service Label (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/servicelabels/{service_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicelabels/{service_label_id}
  ```

- **Get a GetServiceLabel (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/servicelabels/{service_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicelabels/{service_label_id}
  ```

- **Update a ServiceLabel (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/servicelabels/{service_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/servicelabels/{service_label_id}
  ```

- **Bulk site update API (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/bulkoperations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/bulkoperations
  ```

- **Get device id site configs (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs
  ```

- **Get device id site config (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{config_id}
  ```

- **Update device Id site config (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/deviceidconfigs/{config_id}
  ```

- **Get BGP Peer advertised prefixes (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/advertisedprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/advertisedprefixes
  ```

- **Get BGP reachable prefix information (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/reachableprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/reachableprefixes
  ```

- **Get BGP discovered prefix information (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/discoveredprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/discoveredprefixes
  ```

- **Get all Multicast configs (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs
  ```

- **Get Multicast config (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}
  ```

- **Update Multicast config (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/multicastglobalconfigs/{config_id}
  ```

- **Get all OSPF configs (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs
  ```

- **Creates OSPF config (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs
  ```

- **Deletes OSPF config (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Get OSPF config (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Updates OSPF config (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/ospfconfigs/{ospf_config_id}
  ```

- **Get all Access List for Element (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists
  ```

- **Create AS-Path Access List (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists
  ```

- **Queries db for limit number of access lists that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/query
  ```

- **Delete Access List (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Get Specific Access List (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Updates Access List (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_aspathaccesslists/{config_id}
  ```

- **Get all Prefix List for Element (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists
  ```

- **Create IP Prefix List (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists
  ```

- **Queries db for limit number of prefix lists that match query params. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/query
  ```

- **Delete Prefix List (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}
  ```

- **Get Specific Prefix List (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}
  ```

- **Updates Prefix List (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_prefixlists/{routing_prefixlist_id}
  ```

- **Get element security zones (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones
  ```

- **Create an association between element and security zone. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones
  ```

- **Delete an existing security zone (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Get element security zone (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Update an existing element security zone (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/securityzones/{security_zone_id}
  ```

- **Get SNMP Agent on an element (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents
  ```

- **Create SNMP Agent (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents
  ```

- **delete SNMP Agent (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **get SNMP Agent (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **Update SNMP Agent (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/snmpagents/{snmpagent_id}
  ```

- **Get static route status (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}/status
  ```

- **Get Element WAN interface status (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/waninterfaces/{wan_interface_id}/state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/waninterfaces/{wan_interface_id}/state
  ```

- **Get All Element Shells (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells
  ```

- **Create an element shell (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells
  ```

- **Delete an element shell (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Get Element Shell (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Used for associations and element shell updates (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}
  ```

- **Get site Network policy prefix associations (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes
  ```

- **Create an association between site and Network local Prefix. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes
  ```

- **Delete an existing Site Network Policy local prefix association (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get site Network policy local prefix association (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Site Network policy local prefix (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/networkpolicylocalprefixes/{prefix_id}
  ```

- **Get all security policy v2 local prefix site association for a site (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Create a security policy V2 local prefix site association (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes
  ```

- **Delete an existing security policy v2 local prefix site association (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get an existing security policy v2 local prefix assocation by its ID (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing security policy V2 local prefix site association (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/ngfwsecuritypolicylocalprefixes/{prefix_id}
  ```

- **Get site Priority policy prefix associations (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes
  ```

- **Create an association between site and Priority local Prefix. (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes
  ```

- **Delete an existing Site Priority Policy local prefix association (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Get site Priority policy local prefix association (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Update an existing Site Priority policy local prefix (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prioritypolicylocalprefixes/{prefix_id}
  ```

- **Get SASE connections for sites (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections
  ```

- **Create a new SASE connection (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections
  ```

- **Get a specific SASE connection (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **Update the SASE connection (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **Get site ciphers (v2.1) (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/siteciphers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/siteciphers
  ```

- **Update site cipher (v2.1) (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/siteciphers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/siteciphers
  ```

- **Get site security zones (v2.1) (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones
  ```

- **Create site security zone (v2.1) (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones
  ```

- **Query site security zones (v2.1) (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/query
  ```

- **Delete site security zone (v2.1) (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Get site security zone (v2.1) (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Update site security zone (v2.1) (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/sitesecurityzones/{zone_id}
  ```

- **Get a specific Site WAN interface status (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}/status
  ```

- **Query all site security zone associations (v2.1) (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/sitesecurityzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/sitesecurityzones/query
  ```

- **Get all licenses skus for a tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/skus` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/skus
  ```

- **Get a license sku for a tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/skus/{id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/skus/{id}
  ```

- **Get the current image status of all the element (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/software/current_status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/software/current_status/query
  ```

- **Query the software upgrade status of all tenant elements (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/software/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/software/status/query
  ```

- **Get Syslog Server Profiles (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/syslogserverprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/syslogserverprofiles
  ```

- **Create Syslog Server Profile (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/syslogserverprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/syslogserverprofiles
  ```

- **Delete Syslog Server Profile (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}
  ```

- **Get Syslog Server Profile (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}
  ```

- **Update Syslog Server Profile (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/syslogserverprofiles/{profile_id}
  ```

- **Get all Vff Licenses for Tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/vfflicenses` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/vfflicenses
  ```

- **Get specific Vff Licenses for Tenant (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/vfflicenses/{license_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/vfflicenses/{license_id}
  ```

- **Get status for Vff License (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/vfflicenses/{license_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/vfflicenses/{license_id}/status
  ```

- **Get the VPNLink status (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/status
  ```

- **Get all tenant WAN networks (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/wannetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/wannetworks
  ```

- **Create a new WAN (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/wannetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/wannetworks
  ```

- **Query db for WAN networks that match query parameters (v2.1).** New `POST /v2.1/api/tenants/{tenant_id}/wannetworks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/wannetworks/query
  ```

- **Delete an existing WAN (v2.1).** New `DELETE /v2.1/api/tenants/{tenant_id}/wannetworks/{wan_network_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/wannetworks/{wan_network_id}
  ```

- **Get an existing WAN (v2.1).** New `GET /v2.1/api/tenants/{tenant_id}/wannetworks/{wan_network_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/wannetworks/{wan_network_id}
  ```

- **Update an existing WAN (v2.1).** New `PUT /v2.1/api/tenants/{tenant_id}/wannetworks/{wan_network_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.1/api/tenants/{tenant_id}/wannetworks/{wan_network_id}
  ```

- **Get all Site WAN interfaces (v2.10).** New `GET /v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces
  ```

- **Create a new Site WAN interface (v2.10).** New `POST /v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces
  ```

- **Delete existing WAN interface (v2.10).** New `DELETE /v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Get a specific Site WAN interface (v2.10).** New `GET /v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Update the Site WAN interface (v2.10).** New `PUT /v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.10/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Query db for Site WAN interfaces that match query parameters (v2.10).** New `POST /v2.10/api/tenants/{tenant_id}/waninterfaces/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.10/api/tenants/{tenant_id}/waninterfaces/query
  ```

- **Get tenant details for tenant id (v2.12).** New `GET /v2.12/api/tenants/{tenant_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.12/api/tenants/{tenant_id}
  ```

- **Patch tenant (v2.12).** New `PATCH /v2.12/api/tenants/{tenant_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PATCH api.sase.paloaltonetworks.com/v2.12/api/tenants/{tenant_id}
  ```

- **Update tenant (v2.12).** New `PUT /v2.12/api/tenants/{tenant_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.12/api/tenants/{tenant_id}
  ```

- **Get tenant details for tenant id (v2.13).** New `GET /v2.13/api/tenants/{tenant_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.13/api/tenants/{tenant_id}
  ```

- **Patch tenant (v2.13).** New `PATCH /v2.13/api/tenants/{tenant_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PATCH api.sase.paloaltonetworks.com/v2.13/api/tenants/{tenant_id}
  ```

- **Update tenant (v2.13).** New `PUT /v2.13/api/tenants/{tenant_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.13/api/tenants/{tenant_id}
  ```

- **Get application definition overrides for system appdef (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides
  ```

- **Create a application definition overrides for system appdef (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides
  ```

- **Delete application definition overrides for system appdef (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Get application definition overrides for system appdef (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Update a application definition overrides for system appdef (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Get application version for a tenant (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/appdefs_version` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/appdefs_version
  ```

- **Change standard apps version (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/appdefs_version` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/appdefs_version
  ```

- **Query Element Access Config based on parameters (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/elementaccessconfigs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/elementaccessconfigs/query
  ```

- **Get all Element Access Configs (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs
  ```

- **Get specific element's Access Config (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs/{element_access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs/{element_access_id}
  ```

- **Update an Access Config on particular element. (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs/{element_access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs/{element_access_id}
  ```

- **Get IPSECProfileList (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/ipsecprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ipsecprofiles
  ```

- **Create a new IPSEC Profile (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/ipsecprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ipsecprofiles
  ```

- **Queries db for limit number of tenant level ipsec profiles that match query params. (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/ipsecprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ipsecprofiles/query
  ```

- **Delete a IPSEC Profile (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}
  ```

- **Get a IPSECProfile (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}
  ```

- **Update a IPSECProfile (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}
  ```

- **Query security policy v2 rules of a tenant (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicyrules/query
  ```

- **Get all Security Policy V2 Rules under a policy set (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules
  ```

- **Create a Security Policy V2 Rule under a policy set (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules
  ```

- **Delete an existing Security Policy V2 Rule under a policy set (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Get an existing Security Policy V2 Rule under a policy set (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Update an existing Security Policy V2 Rule under a policy set (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Get a list of tenant operators (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/operators` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/operators
  ```

- **Create a tenant operator (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/operators` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/operators
  ```

- **Delete a tenant operator (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/operators/{operator_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/operators/{operator_id}
  ```

- **Get a tenant operator (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/operators/{operator_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/operators/{operator_id}
  ```

- **Patch a tenant operator (v2.2).** New `PATCH /v2.2/api/tenants/{tenant_id}/operators/{operator_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PATCH api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/operators/{operator_id}
  ```

- **Update a tenant operator (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/operators/{operator_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/operators/{operator_id}
  ```

- **Query PERFMGMT policy rules V2.2. (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/perfmgmtpolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/perfmgmtpolicyrules/query
  ```

- **Get policy rules of policy set V2.2 (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules
  ```

- **Create a new PERFMGMT Policy Rule V2.2 (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules
  ```

- **Delete PERFMGMT policy rule of tenant V2.2 (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Get a specific PERFMGMT policy rule of tenant V2.2 (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Update policy rule of tenant V2.1. (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Query Priority policy rules. (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/prioritypolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/prioritypolicyrules/query
  ```

- **Get priority policy rules of tenant (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules
  ```

- **Create a new PriorityPolicyRule (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules
  ```

- **Delete priority policy rule of tenant. (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Get a specific priority policy rule of tenant (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **Update priority policy rule of tenant. (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/prioritypolicysets/{policy_set_id}/prioritypolicyrules/{policy_rule_id}
  ```

- **GET existing tenant SD-WAN applications with release information. (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sdwanapps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sdwanapps
  ```

- **GET existing tenant SD-WAN application with release information. (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sdwanapps/{app_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sdwanapps/{app_id}
  ```

- **Get security zones (v2.2) (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/securityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/securityzones
  ```

- **Create a new security zone (v2.2) (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/securityzones` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/securityzones
  ```

- **Query security zones (v2.2) (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/securityzones/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/securityzones/query
  ```

- **Delete security zone (v2.2) (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/securityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/securityzones/{zone_id}
  ```

- **Get security zone (v2.2) (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/securityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/securityzones/{zone_id}
  ```

- **Update security zone (v2.2) (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/securityzones/{zone_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/securityzones/{zone_id}
  ```

- **Get all DHCPServers for a Tenant on a site (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers
  ```

- **Create a new dhcp server configuration for a subnet (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers
  ```

- **Delete DHCPServer for a Tenant on a site (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Get DHCPServer for a Tenant on a site (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Update an existing dhcp server configuration for a subnet (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Get all BGP Peer status info from NB (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/status
  ```

- **Get BGP discovered prefix information (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/discoveredprefixes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_config_id}/discoveredprefixes
  ```

- **Get BGP Peer status info from NB (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/status
  ```

- **Get all Route Map for Element (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps
  ```

- **Create Route Map (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps
  ```

- **Queries db for limit number of route maps that match query params. (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/query
  ```

- **Delete Route Map (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Get Specific Route Map (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Updates Route Map (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Get static routes (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes
  ```

- **Create static route (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes
  ```

- **Delete static route (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Get static route (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Update static route (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Get static route status (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}/status
  ```

- **Get Syslog Servers on an element (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers
  ```

- **Create Syslog Server (v2.2).** New `POST /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers
  ```

- **Delete Syslog Server (v2.2).** New `DELETE /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Get Syslog Server (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Update Syslog Server (v2.2).** New `PUT /v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Get the VPNLink status (v2.2).** New `GET /v2.2/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.2/api/tenants/{tenant_id}/vpnlinks/{vpn_link_id}/status
  ```

- **Get application definition overrides for system appdef (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides
  ```

- **Create a application definition overrides for system appdef (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides
  ```

- **Delete application definition overrides for system appdef (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Get application definition overrides for system appdef (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Update a application definition overrides for system appdef (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/appdefs/{appdef_id}/overrides/{override_id}
  ```

- **Get all machines allocated by ESP to a client tenant (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/clients/{client_id}/machines` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/clients/{client_id}/machines
  ```

- **Query and get all machines allocated by ESP to a client tenant (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/clients/{client_id}/machines/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/clients/{client_id}/machines/query
  ```

- **Get a specific machine allocated by ESP to a client tenant (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/clients/{client_id}/machines/{machine_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/clients/{client_id}/machines/{machine_id}
  ```

- **Reallocate a specific machine from one client tenant to another, both client tenants are clients of the same ESP. (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/clients/{client_id}/machines/{machine_id}/reallocate` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/clients/{client_id}/machines/{machine_id}/reallocate
  ```

- **Get existing machine images (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/element_images` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/element_images
  ```

- **Get information about a machine image (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/element_images/{machine_image_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/element_images/{machine_image_id}
  ```

- **Query Element Access Config v2.3 with element_id (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/elementaccessconfigs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/elementaccessconfigs/query
  ```

- **Get all Element Access Configs v2.3 (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs
  ```

- **Get Element Access Config v2.3 (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs/{element_access_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/elements/{element_id}/elementaccessconfigs/{element_access_id}
  ```

- **Get IPSECProfileList (v2.3) (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/ipsecprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ipsecprofiles
  ```

- **Create IPSEC Profile (v2.3) (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/ipsecprofiles` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ipsecprofiles
  ```

- **Generate PPK Secret (v2.3) (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/ipsecprofiles/ppksecret` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ipsecprofiles/ppksecret
  ```

- **Queries db for limit number of tenant level ipsec profiles that match query params. (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/ipsecprofiles/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ipsecprofiles/query
  ```

- **deleteIPSECProfile (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}
  ```

- **Get a IPSECProfile (v2.3) (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}
  ```

- **Update a IPSECProfile (v2.3) (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ipsecprofiles/{profile_id}
  ```

- **Get all machines of a tenant (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/machines` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/machines
  ```

- **Query and get machines of a tenant (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/machines/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/machines/query
  ```

- **Get a specific machine of a tenant (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/machines/{machine_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/machines/{machine_id}
  ```

- **Update a specific machine of a tenant using operations (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/machines/{machine_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/machines/{machine_id}/operations
  ```

- **Query security policy v2 rules of a tenant (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicyrules/query
  ```

- **Get all Security Policy V2 Rules under a policy set (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules
  ```

- **Create a Security Policy V2 Rule under a policy set (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules
  ```

- **Delete an existing Security Policy V2 Rule under a policy set (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Get an existing Security Policy V2 Rule under a policy set (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Update an existing Security Policy V2 Rule under a policy set (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/ngfwsecuritypolicysets/{policy_set_id}/ngfwsecuritypolicyrules/{policy_rule_id}
  ```

- **Query PERFMGMT policy rules V2.3. (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/perfmgmtpolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/perfmgmtpolicyrules/query
  ```

- **Get policy rules of policy set V2.3 (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules
  ```

- **Create a new PERFMGMT Policy Rule V2.3 (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules
  ```

- **Delete PERFMGMT policy rule of tenant V2.3 (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Get a specific PERFMGMT policy rule of tenant V2.3 (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Update policy rule of tenant V2.3. (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/perfmgmtpolicysets/{perfmgmtpolicyset_id}/perfmgmtpolicyrules/{perfmgmtpolicyrule_id}
  ```

- **Get all DHCPServers for a Tenant on a site (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers
  ```

- **Create a new dhcp server configuration for a subnet (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers
  ```

- **Delete DHCPServer for a Tenant on a site (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Get DHCPServer for a Tenant on a site (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Update an existing dhcp server configuration for a subnet (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/dhcpservers/{dhcp_server_id}
  ```

- **Get all BGP Peer status info from NB (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/status
  ```

- **Get BGP Peer status info from NB (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{config_id}/status
  ```

- **Get all Route Map for Element (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps
  ```

- **Create Route Map (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps
  ```

- **Queries db for limit number of route maps that match query params. (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/query
  ```

- **Delete Route Map (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Get Specific Route Map (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Updates Route Map (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/routing_routemaps/{config_id}
  ```

- **Get static routes (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes
  ```

- **Create static route (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes
  ```

- **Delete static route (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Get static route (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Update static route (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/staticroutes/{static_route_id}
  ```

- **Get Syslog Servers on an element (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers
  ```

- **Create Syslog Server (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers
  ```

- **Delete Syslog Server (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Get Syslog Server (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Update Syslog Server (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/syslogservers/{syslogserver_id}
  ```

- **Get all Element Shell Interfaces (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces
  ```

- **Create a Interface (v2.3).** New `POST /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces
  ```

- **Delete an element shell interface (v2.3).** New `DELETE /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Get Element Shell Interface (v2.3).** New `GET /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Update a Element Shell Interface (v2.3).** New `PUT /v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.3/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Get existing machine images (v2.4).** New `GET /v2.4/api/tenants/{tenant_id}/element_images` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/element_images
  ```

- **Get information about a machine image (v2.4).** New `GET /v2.4/api/tenants/{tenant_id}/element_images/{machine_image_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/element_images/{machine_image_id}
  ```

- **Query Network policy rules. (v2.4).** New `POST /v2.4/api/tenants/{tenant_id}/networkpolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/networkpolicyrules/query
  ```

- **Get network policy rules of tenant (v2.4).** New `GET /v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules
  ```

- **Create a new NetworkPolicyRule (v2.4).** New `POST /v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules
  ```

- **Delete network policy rule of tenant. (v2.4).** New `DELETE /v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Get a specific network policy rule of tenant (v2.4).** New `GET /v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Update network policy rule of tenant. (v2.4).** New `PUT /v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Get all BGP configs (v2.4).** New `GET /v2.4/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs
  ```

- **Get BGP config (v2.4).** New `GET /v2.4/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}
  ```

- **Updates BGP config (v2.4).** New `PUT /v2.4/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}
  ```

- **Get all Element Shell Interfaces (v2.4).** New `GET /v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces
  ```

- **Create a Interface (v2.4).** New `POST /v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces
  ```

- **Delete an element shell interface (v2.4).** New `DELETE /v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Get Element Shell Interface (v2.4).** New `GET /v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Update a Element Shell Interface (v2.4).** New `PUT /v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/elementshells/{element_shell_id}/interfaces/{interface_id}
  ```

- **Query db for Site WAN interfaces that match query parameters (v2.4).** New `POST /v2.4/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.4/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/query
  ```

- **Get all application definitions (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/appdefs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/appdefs
  ```

- **Create an application definition (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/appdefs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/appdefs
  ```

- **Queries db for limit number of app defs that match query params. (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/appdefs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/appdefs/query
  ```

- **Delete an application definition (v2.5).** New `DELETE /v2.5/api/tenants/{tenant_id}/appdefs/{appdef_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/appdefs/{appdef_id}
  ```

- **Get application definition (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/appdefs/{appdef_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/appdefs/{appdef_id}
  ```

- **Update an application definition (v2.5).** New `PUT /v2.5/api/tenants/{tenant_id}/appdefs/{appdef_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/appdefs/{appdef_id}
  ```

- **Get all machines allocated by ESP to a client tenant (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/clients/{client_id}/machines` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/clients/{client_id}/machines
  ```

- **Query and get all machines allocated by ESP to a client tenant (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/clients/{client_id}/machines/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/clients/{client_id}/machines/query
  ```

- **Get a specific machine allocated by ESP to a client tenant (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/clients/{client_id}/machines/{machine_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/clients/{client_id}/machines/{machine_id}
  ```

- **Reallocate a specific machine from one client tenant to another, both client tenants are clients of the same ESP. (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/clients/{client_id}/machines/{machine_id}/reallocate` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/clients/{client_id}/machines/{machine_id}/reallocate
  ```

- **Query and get element status objects for a tenant (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/elements/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/elements/status/query
  ```

- **Get specific element status for a tenant (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/elements/{element_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/elements/{element_id}/status
  ```

- **Get machines of a tenant (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/machines` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/machines
  ```

- **Query and get machines of a tenant (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/machines/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/machines/query
  ```

- **Get Tenant machine (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/machines/{machine_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/machines/{machine_id}
  ```

- **Update a specific machine of a tenant using operations (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/machines/{machine_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/machines/{machine_id}/operations
  ```

- **Query Network policy rules. (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/networkpolicyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/networkpolicyrules/query
  ```

- **Get network policy rules of tenant (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules
  ```

- **Create a new NetworkPolicyRule (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules
  ```

- **Delete network policy rule of tenant. (v2.5).** New `DELETE /v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Get a specific network policy rule of tenant (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Update network policy rule of tenant. (v2.5).** New `PUT /v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/networkpolicysets/{policy_set_id}/networkpolicyrules/{policy_rule_id}
  ```

- **Get all BGP configs (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs
  ```

- **Get BGP config (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}
  ```

- **Updates BGP config (v2.5).** New `PUT /v2.5/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgpconfigs/{bgp_config_id}
  ```

- **Query db for Site WAN interfaces that match query parameters (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/query
  ```

- **Get WAN interface labels for a tenant (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/waninterfacelabels` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/waninterfacelabels
  ```

- **Query db for site WAN interfaces that match query parameters (v2.5).** New `POST /v2.5/api/tenants/{tenant_id}/waninterfacelabels/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/waninterfacelabels/query
  ```

- **Get a specific WAN interface label (v2.5).** New `GET /v2.5/api/tenants/{tenant_id}/waninterfacelabels/{wantinterface_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/waninterfacelabels/{wantinterface_label_id}
  ```

- **Update specific WAN interface label (v2.5).** New `PUT /v2.5/api/tenants/{tenant_id}/waninterfacelabels/{wantinterface_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.5/api/tenants/{tenant_id}/waninterfacelabels/{wantinterface_label_id}
  ```

- **Get all application definitions (v2.6).** New `GET /v2.6/api/tenants/{tenant_id}/appdefs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/appdefs
  ```

- **Create an application definition (v2.6).** New `POST /v2.6/api/tenants/{tenant_id}/appdefs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/appdefs
  ```

- **Queries db for limit number of app defs that match query params. (v2.6).** New `POST /v2.6/api/tenants/{tenant_id}/appdefs/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/appdefs/query
  ```

- **Delete an application definition (v2.6).** New `DELETE /v2.6/api/tenants/{tenant_id}/appdefs/{appdef_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/appdefs/{appdef_id}
  ```

- **Get application definition (v2.6).** New `GET /v2.6/api/tenants/{tenant_id}/appdefs/{appdef_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/appdefs/{appdef_id}
  ```

- **Update an application definition (v2.6).** New `PUT /v2.6/api/tenants/{tenant_id}/appdefs/{appdef_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/appdefs/{appdef_id}
  ```

- **Queries db for BGP peers that match query params. (v2.6).** New `POST /v2.6/api/tenants/{tenant_id}/bgppeers/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/bgppeers/query
  ```

- **Query and get element status objects for a tenant (v2.6).** New `POST /v2.6/api/tenants/{tenant_id}/elements/status/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/elements/status/query
  ```

- **Get specific element status for a tenant (v2.6).** New `GET /v2.6/api/tenants/{tenant_id}/elements/{element_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/elements/{element_id}/status
  ```

- **Get all BGP Peer configs (v2.6).** New `GET /v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Patch BGP Peers in Bulk (v2.6).** New `PATCH /v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PATCH api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Create BGP peer config (v2.6).** New `POST /v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Queries db for limit number of BGP peers that match query params. (v2.6).** New `POST /v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/query
  ```

- **Delete BGP Peer config (v2.6).** New `DELETE /v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Get BGP Peer config (v2.6).** New `GET /v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Update BGP Peer config (v2.6).** New `PUT /v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Get WAN interface labels for a tenant (v2.6).** New `GET /v2.6/api/tenants/{tenant_id}/waninterfacelabels` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/waninterfacelabels
  ```

- **Query db for site WAN interfaces that match query parameters (v2.6).** New `POST /v2.6/api/tenants/{tenant_id}/waninterfacelabels/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/waninterfacelabels/query
  ```

- **Get a specific WAN interface label (v2.6).** New `GET /v2.6/api/tenants/{tenant_id}/waninterfacelabels/{wantinterface_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/waninterfacelabels/{wantinterface_label_id}
  ```

- **Update specific WAN interface label (v2.6).** New `PUT /v2.6/api/tenants/{tenant_id}/waninterfacelabels/{wantinterface_label_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.6/api/tenants/{tenant_id}/waninterfacelabels/{wantinterface_label_id}
  ```

- **Get all Site WAN interfaces (v2.9).** New `GET /v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces
  ```

- **Create a new Site WAN interface (v2.9).** New `POST /v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces
  ```

- **Delete existing WAN interface (v2.9).** New `DELETE /v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Get a specific Site WAN interface (v2.9).** New `GET /v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Update the Site WAN interface (v2.9).** New `PUT /v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v2.9/api/tenants/{tenant_id}/sites/{site_id}/waninterfaces/{wan_interface_id}
  ```

- **Query db for Site WAN interfaces that match query parameters (v2.9).** New `POST /v2.9/api/tenants/{tenant_id}/waninterfaces/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v2.9/api/tenants/{tenant_id}/waninterfaces/query
  ```

- **Queries db for BGP peers that match query params. (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/bgppeers/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/bgppeers/query
  ```

- **Query and get client elements across regions (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/elements/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/elements/rquery
  ```

- **Get all policy sets of tenant. (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/policysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/policysets
  ```

- **Create a new Policy Set (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/policysets` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/policysets
  ```

- **Queries db for policysets that match query params. (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/policysets/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/policysets/query
  ```

- **Delete policy set. (v3.0).** New `DELETE /v3.0/api/tenants/{tenant_id}/policysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/policysets/{policy_set_id}
  ```

- **Get a specific policy set of tenant. (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/policysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/policysets/{policy_set_id}
  ```

- **Update policy set. (v3.0).** New `PUT /v3.0/api/tenants/{tenant_id}/policysets/{policy_set_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/policysets/{policy_set_id}
  ```

- **Get a specific policy set status of tenant. (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/policysets/{policy_set_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/policysets/{policy_set_id}/status
  ```

- **Queries the prefix set. (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/prefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/prefixes/query
  ```

- **Delete existing SASE connection config (v3.0).** New `DELETE /v3.0/api/tenants/{tenant_id}/prismasase_connections/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/prismasase_connections/configs
  ```

- **Get a specific SASE connection config (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/prismasase_connections/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/prismasase_connections/configs
  ```

- **Create a new SASE connection config (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/prismasase_connections/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/prismasase_connections/configs
  ```

- **Update the SASE connection config (v3.0).** New `PUT /v3.0/api/tenants/{tenant_id}/prismasase_connections/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/prismasase_connections/configs
  ```

- **Get ServiceEndpointList (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/serviceendpoints` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/serviceendpoints
  ```

- **Create a new Service Endpoint (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/serviceendpoints` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/serviceendpoints
  ```

- **Queries db for limit number of service bindings that match query params. (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/serviceendpoints/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/serviceendpoints/query
  ```

- **Delete a Service Endpoint (v3.0).** New `DELETE /v3.0/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}
  ```

- **Get a ServiceEndpoint (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}
  ```

- **Update a ServiceEndpoint (v3.0).** New `PUT /v3.0/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}
  ```

- **Update an existing site (v3.0).** New `PUT /v3.0/api/tenants/{tenant_id}/sites/{site_id}/admin_state` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/admin_state
  ```

- **Get bfdpeers (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/bfdpeers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/bfdpeers
  ```

- **Get all BGP Peer configs (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Create BGP peer config (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers
  ```

- **Queries db for limit number of BGP peers that match query params. (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/query
  ```

- **Delete BGP Peer config (v3.0).** New `DELETE /v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Get BGP Peer config (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Update BGP Peer config (v3.0).** New `PUT /v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/bgppeers/{bgp_peer_id}
  ```

- **Get all hub clusters (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters
  ```

- **Creates a new hub cluster (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters
  ```

- **Delete hub cluster (v3.0).** New `DELETE /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Get specific hub cluster (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Update hub cluster (v3.0).** New `PUT /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Get all hub cluster members (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers
  ```

- **Creates a new hub cluster member. (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers
  ```

- **Deletes specific hub cluster member. (v3.0).** New `DELETE /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}
  ```

- **Get specific hub cluster member. (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}
  ```

- **Update specific hub cluster member. (v3.0).** New `PUT /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}
  ```

- **Get specific hub cluster member state. (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/hubclustermembers/{hub_cluster_member_id}/status
  ```

- **Get specific hub cluster state (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/status
  ```

- **Get SASE connections for sites (v3.0) (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections
  ```

- **Create a new SASE connection (v3.0) (v3.0).** New `POST /v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections
  ```

- **Delete a SASE connection (V3.0 Native Prisma Workflow) (v3.0).** New `DELETE /v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **Get a specific SASE connection (v3.0) (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **Update the SASE connection (v3.0) (v3.0).** New `PUT /v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/prismasase_connections/{prismasase_connection_id}
  ```

- **GET anynet link (v3.0).** New `GET /v3.0/api/tenants/{tenant_id}/sites/{site_id}/wanpaths` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.0/api/tenants/{tenant_id}/sites/{site_id}/wanpaths
  ```

- **Get Elements of a tenant (v3.1).** New `GET /v3.1/api/tenants/{tenant_id}/elements` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/elements
  ```

- **Queries db for limit number of elements that match query params. (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/elements/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/elements/query
  ```

- **Query elements across client tenants with region grouping and summary view (v3.1) (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/elements/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/elements/rquery
  ```

- **Get Element of a tenant (v3.1).** New `GET /v3.1/api/tenants/{tenant_id}/elements/{element_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/elements/{element_id}
  ```

- **Used for associations and element updates (v3.1).** New `PUT /v3.1/api/tenants/{tenant_id}/elements/{element_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/elements/{element_id}
  ```

- **Query and get ESP machines across regions (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/machines/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/machines/rquery
  ```

- **Queries db for policyrules that match query params. (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/policyrules/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/policyrules/query
  ```

- **Get policy rules of tenant (v3.1).** New `GET /v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules
  ```

- **Create a new Policy (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules
  ```

- **Delete policy rule of tenant. (v3.1).** New `DELETE /v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules/{policy_rule_id}
  ```

- **Get a specific policy rule of tenant (v3.1).** New `GET /v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules/{policy_rule_id}
  ```

- **Update policy rule of tenant. (v3.1).** New `PUT /v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules/{policy_rule_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/policysets/{policy_set_id}/policyrules/{policy_rule_id}
  ```

- **Queries the prefix set. (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/prefixes/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/prefixes/query
  ```

- **Delete existing SASE connection config (v3.1).** New `DELETE /v3.1/api/tenants/{tenant_id}/prismasase_connections/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/prismasase_connections/configs
  ```

- **Get a specific SASE connection config (v3.1).** New `GET /v3.1/api/tenants/{tenant_id}/prismasase_connections/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/prismasase_connections/configs
  ```

- **Create a new SASE connection config (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/prismasase_connections/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/prismasase_connections/configs
  ```

- **Update the SASE connection config (v3.1).** New `PUT /v3.1/api/tenants/{tenant_id}/prismasase_connections/configs` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/prismasase_connections/configs
  ```

- **Get ServiceEndpointList (v3.1).** New `GET /v3.1/api/tenants/{tenant_id}/serviceendpoints` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/serviceendpoints
  ```

- **Create a new Service Endpoint (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/serviceendpoints` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/serviceendpoints
  ```

- **Queries db for limit number of service bindings that match query params. (v3.1).** New `POST /v3.1/api/tenants/{tenant_id}/serviceendpoints/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/serviceendpoints/query
  ```

- **Delete a Service Endpoint (v3.1).** New `DELETE /v3.1/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}
  ```

- **Get a ServiceEndpoint (v3.1).** New `GET /v3.1/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}
  ```

- **Update a ServiceEndpoint (v3.1).** New `PUT /v3.1/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.1/api/tenants/{tenant_id}/serviceendpoints/{service_endpoint_id}
  ```

- **Get Elements of a tenant (v3.2).** New `GET /v3.2/api/tenants/{tenant_id}/elements` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/elements
  ```

- **Queries db for limit number of elements that match query params. (v3.2).** New `POST /v3.2/api/tenants/{tenant_id}/elements/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/elements/query
  ```

- **Get Element of a tenant (v3.2).** New `GET /v3.2/api/tenants/{tenant_id}/elements/{element_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/elements/{element_id}
  ```

- **Used for associations and element updates (v3.2).** New `PUT /v3.2/api/tenants/{tenant_id}/elements/{element_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/elements/{element_id}
  ```

- **Get all idps (v3.2).** New `GET /v3.2/api/tenants/{tenant_id}/idps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/idps
  ```

- **Create idp (v3.2).** New `POST /v3.2/api/tenants/{tenant_id}/idps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/idps
  ```

- **Delete idp (v3.2).** New `DELETE /v3.2/api/tenants/{tenant_id}/idps/{idp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/idps/{idp_id}
  ```

- **Get idp (v3.2).** New `GET /v3.2/api/tenants/{tenant_id}/idps/{idp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/idps/{idp_id}
  ```

- **Update sso (v3.2).** New `PUT /v3.2/api/tenants/{tenant_id}/idps/{idp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/idps/{idp_id}
  ```

- **Query db for Site LAN networks that match query parameters (v3.2).** New `POST /v3.2/api/tenants/{tenant_id}/lannetworks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/lannetworks/query
  ```

- **Query and get ESP machines across regions (v3.2).** New `POST /v3.2/api/tenants/{tenant_id}/machines/rquery` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/machines/rquery
  ```

- **Get LAN networks (v3.2).** New `GET /v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks
  ```

- **Create a new LAN (v3.2).** New `POST /v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks
  ```

- **Query LAN networks that match query params (v3.2).** New `POST /v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/query
  ```

- **Delete an existing LAN (v3.2).** New `DELETE /v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Get LAN network (v3.2).** New `GET /v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Update an existing LAN (v3.2).** New `PUT /v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.2/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Get all idps (v3.3).** New `GET /v3.3/api/tenants/{tenant_id}/idps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/idps
  ```

- **Create idp (v3.3).** New `POST /v3.3/api/tenants/{tenant_id}/idps` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/idps
  ```

- **Delete idp (v3.3).** New `DELETE /v3.3/api/tenants/{tenant_id}/idps/{idp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/idps/{idp_id}
  ```

- **Get idp (v3.3).** New `GET /v3.3/api/tenants/{tenant_id}/idps/{idp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/idps/{idp_id}
  ```

- **Update sso (v3.3).** New `PUT /v3.3/api/tenants/{tenant_id}/idps/{idp_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/idps/{idp_id}
  ```

- **Query db for Site LAN networks that match query parameters (v3.3).** New `POST /v3.3/api/tenants/{tenant_id}/lannetworks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/lannetworks/query
  ```

- **Get LAN networks (v3.3).** New `GET /v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks
  ```

- **Create a new LAN (v3.3).** New `POST /v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks
  ```

- **Query LAN networks that match query params (v3.3).** New `POST /v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/query
  ```

- **Delete an existing LAN (v3.3).** New `DELETE /v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Get LAN network (v3.3).** New `GET /v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Update an existing LAN (v3.3).** New `PUT /v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.3/api/tenants/{tenant_id}/sites/{site_id}/lannetworks/{lannetwork_id}
  ```

- **Create anynet link (v3.4).** New `POST /v3.4/api/tenants/{tenant_id}/anynetlinks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.4/api/tenants/{tenant_id}/anynetlinks
  ```

- **Delete anynet link (v3.4).** New `DELETE /v3.4/api/tenants/{tenant_id}/anynetlinks/{anynet_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v3.4/api/tenants/{tenant_id}/anynetlinks/{anynet_id}
  ```

- **GET anynet link (v3.4).** New `GET /v3.4/api/tenants/{tenant_id}/anynetlinks/{anynet_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.4/api/tenants/{tenant_id}/anynetlinks/{anynet_id}
  ```

- **Update anynet link (v3.4).** New `PUT /v3.4/api/tenants/{tenant_id}/anynetlinks/{anynet_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v3.4/api/tenants/{tenant_id}/anynetlinks/{anynet_id}
  ```

- **Query topology (v3.5).** New `POST /v3.5/api/tenants/{tenant_id}/topology` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.5/api/tenants/{tenant_id}/topology
  ```

- **Query topology (v3.6).** New `POST /v3.6/api/tenants/{tenant_id}/topology` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v3.6/api/tenants/{tenant_id}/topology
  ```

- **Get all element models (v3.7).** New `GET /v3.7/api/tenants/{tenant_id}/elementmodels` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.7/api/tenants/{tenant_id}/elementmodels
  ```

- **Get all element models (v3.8).** New `GET /v3.8/api/tenants/{tenant_id}/elementmodels` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.8/api/tenants/{tenant_id}/elementmodels
  ```

- **Get interface status (v3.8).** New `GET /v3.8/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.8/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/status
  ```

- **Get interface status (v3.9).** New `GET /v3.9/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v3.9/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}/status
  ```

- **Create anynet link (v4.0).** New `POST /v4.0/api/tenants/{tenant_id}/anynetlinks` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/anynetlinks
  ```

- **Query Anynet Links (v4.0).** New `POST /v4.0/api/tenants/{tenant_id}/anynetlinks/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/anynetlinks/query
  ```

- **Delete anynet link (v4.0).** New `DELETE /v4.0/api/tenants/{tenant_id}/anynetlinks/{anynet_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/anynetlinks/{anynet_id}
  ```

- **GET anynet link (v4.0).** New `GET /v4.0/api/tenants/{tenant_id}/anynetlinks/{anynet_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/anynetlinks/{anynet_id}
  ```

- **Update anynet link (v4.0).** New `PUT /v4.0/api/tenants/{tenant_id}/anynetlinks/{anynet_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/anynetlinks/{anynet_id}
  ```

- **Query hub clusters (v4.0).** New `POST /v4.0/api/tenants/{tenant_id}/hubclusters/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/hubclusters/query
  ```

- **Create anynet link in Bulk (v4.0).** New `POST /v4.0/api/tenants/{tenant_id}/sites/{ep1_site_id}/anynetlinks/bulkoperations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/sites/{ep1_site_id}/anynetlinks/bulkoperations
  ```

- **Get all hub clusters (v4.0).** New `GET /v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters
  ```

- **Creates a new hub cluster (v4.0).** New `POST /v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters
  ```

- **Delete hub cluster (v4.0).** New `DELETE /v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Get specific hub cluster (v4.0).** New `GET /v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Update hub cluster (v4.0).** New `PUT /v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}
  ```

- **Operations hub cluster api (v4.0).** New `POST /v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/operations` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{hub_cluster_id}/operations
  ```

- **Get hub cluster status (v4.0).** New `GET /v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{id}/status` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.0/api/tenants/{tenant_id}/sites/{site_id}/hubclusters/{id}/status
  ```

- **Get all sites of a tenant (v4.12).** New `GET /v4.12/api/tenants/{tenant_id}/sites` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.12/api/tenants/{tenant_id}/sites
  ```

- **Create a site (v4.12).** New `POST /v4.12/api/tenants/{tenant_id}/sites` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.12/api/tenants/{tenant_id}/sites
  ```

- **Queries db for limit number of sites that match query params. (v4.12).** New `POST /v4.12/api/tenants/{tenant_id}/sites/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.12/api/tenants/{tenant_id}/sites/query
  ```

- **Delete a site (v4.12).** New `DELETE /v4.12/api/tenants/{tenant_id}/sites/{site_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v4.12/api/tenants/{tenant_id}/sites/{site_id}
  ```

- **Get Site of a tenant by tenant ID and site id (v4.12).** New `GET /v4.12/api/tenants/{tenant_id}/sites/{site_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.12/api/tenants/{tenant_id}/sites/{site_id}
  ```

- **Update an existing site (v4.12).** New `PUT /v4.12/api/tenants/{tenant_id}/sites/{site_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v4.12/api/tenants/{tenant_id}/sites/{site_id}
  ```

- **Get all sites of a tenant (v4.13).** New `GET /v4.13/api/tenants/{tenant_id}/sites` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.13/api/tenants/{tenant_id}/sites
  ```

- **Create a site (v4.13).** New `POST /v4.13/api/tenants/{tenant_id}/sites` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.13/api/tenants/{tenant_id}/sites
  ```

- **Queries db for limit number of sites that match query params. (v4.13).** New `POST /v4.13/api/tenants/{tenant_id}/sites/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.13/api/tenants/{tenant_id}/sites/query
  ```

- **Delete a site (v4.13).** New `DELETE /v4.13/api/tenants/{tenant_id}/sites/{site_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v4.13/api/tenants/{tenant_id}/sites/{site_id}
  ```

- **Get Site of a tenant by tenant ID and site id (v4.13).** New `GET /v4.13/api/tenants/{tenant_id}/sites/{site_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.13/api/tenants/{tenant_id}/sites/{site_id}
  ```

- **Update an existing site (v4.13).** New `PUT /v4.13/api/tenants/{tenant_id}/sites/{site_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v4.13/api/tenants/{tenant_id}/sites/{site_id}
  ```

- **Queries db for limit number of interfaces that match query params. (v4.20).** New `POST /v4.20/api/tenants/{tenant_id}/interfaces/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.20/api/tenants/{tenant_id}/interfaces/query
  ```

- **Get all Interfaces (v4.20).** New `GET /v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces
  ```

- **Create a Interface (v4.20).** New `POST /v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces
  ```

- **Delete a Interface (v4.20).** New `DELETE /v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Get Interface (v4.20).** New `GET /v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Update an Interface (v4.20).** New `PUT /v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v4.20/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Queries db for limit number of interfaces that match query params. (v4.21).** New `POST /v4.21/api/tenants/{tenant_id}/interfaces/query` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.21/api/tenants/{tenant_id}/interfaces/query
  ```

- **Get all Interfaces (v4.21).** New `GET /v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces
  ```

- **Create a Interface (v4.21).** New `POST /v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  POST api.sase.paloaltonetworks.com/v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces
  ```

- **Delete a Interface (v4.21).** New `DELETE /v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  DELETE api.sase.paloaltonetworks.com/v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Get Interface (v4.21).** New `GET /v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  GET api.sase.paloaltonetworks.com/v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

- **Update an Interface (v4.21).** New `PUT /v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}` endpoint now available.
  [Legacy API reference →](/sase/api/legacy)
  ```
  PUT api.sase.paloaltonetworks.com/v4.21/api/tenants/{tenant_id}/sites/{site_id}/elements/{element_id}/interfaces/{interface_id}
  ```

---
## September 2023

Added [Autonomous DEM](/access/api/adem/autonomous-dem-api/) APIs. Use the ADEM APIs to access the Autonomous Digital
Experience Management summary, distribution and timeseries data, such as application score and agent
scores.

Added [examples](/access/docs/adem/examples/application-performance/mu-experience-score-for-an-app/) 
that correlate fields in response structures to the area in the UI which displays that data. 

For more information on AI-Powered Autonomous DEM, see 
[AI-Powered Autonomous DEM](https://docs.paloaltonetworks.com/autonomous-dem/administration).

## April 2023

Added [ZTNA Connector](/access/api/ztna/ztna-connector-apis/) APIs.

Updated the [Prisma Access Configuration](/access/api/prisma-access-config/)
APIs with a hotfix. The `region_ipv6` object is no longer part of the payload
for [POST /sse/config/v1/mobile-agent/infrastructure-settings](/access/api/prisma-access-config/post-sse-config-v-1-mobile-agent-infrastructure-settings/).


Added a [usage note](/sase/docs/api-call/#unified-prisma-sd-wan-usage) for the Unified Prisma SD-WAN APIs.

## March 2023

The Prisma Access Configuration APIs are updated with new APIs and changes to existing APIs.

* [/sse/config/v1/authentication-profiles](/category/access/api/prisma-access-config/authentication-profiles/) now supports a cloud (CIE) authentication profile.
* The Traffic Steering APIs have been renamed [Traffic Steering Rules](/category/access/api/prisma-access-config/traffic-steering-rules/).
* [/sse/config/v1/enable](/access/api/prisma-access-config/post-sse-config-v-1-enable/) is added to
  support API-based on-boarding of Prisma Access tenants. It creates the same default values as does
  the user interface when a new Prisma Access tenant is on-boarded.
* [Local User Groups](/category/access/api/prisma-access-config/local-user-groups/) APIs are added.
* [Service Connection Groups](/category/access/api/prisma-access-config/service-connection-groups/) APIs are added.
* APIs for BGP Routing are added to [Service Connections](/category/access/api/prisma-access-config/service-connections/).
* [Mobile Agent](/category/access/api/prisma-access-config/mobile-agent/) now includes:
  * [/sse/config/v1/mobile-agent/agent-versions](/access/api/prisma-access-config/get-sse-config-v-1-mobile-agent-agent-versions/) to retrieve available agent versions.
  * [/sse/config/v1/mobile-agent/agent-profiles](/access/api/prisma-access-config/post-sse-config-v-1-mobile-agent-agent-profiles/) to manage custom agent profiles.
  * [/sse/config/v1/mobile-agent/tunnel-profiles](/access/api/prisma-access-config/post-sse-config-v-1-mobile-agent-tunnel-profiles/) to manage custom tunnel profiles.



## November 2022

Updated the Prisma Access Configuration API to include [Mobile Agent](/category/access/api/prisma-access-config/mobile-agent/)
(Global Protect) endpoints.

## Late August 2022

Updates for the Aggregate Monitoring APIs:

- New DataResources endpoints such as
  [Get RN and SC site status count](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity/),
  [Get CDL connectivity status](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity-cdlstatus/),
  [Get mobile gateway connection status](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity-gatewaystatus/),
  [Get total GP licenses allocated](/sase/api/mt-monitor/get-mt-monitor-v-1-agg-serviceconnectivity-licenseallocated/),
  [Get top outliers](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity-topoutliers/), and
  [List unique GP users](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-serviceconnectivity-uniqueusers/).
- New query filters such as [CDLStatusRule](/sase/docs/filters/#cdlstatusrule) and [OutlierRule](/sase/docs/filters/#outlierrule).
- New properties such as
  [CDLStatusProperty](/sase/docs/filters/#cdlstatusproperty),
  [GatewayStatusProperty](/sase/docs/filters/#gatewaystatusproperty),
  [OutliersProperty](/sase/docs/filters/#outliersproperty), and
  [UniqueUserProperty](/sase/docs/filters/#uniqueuserproperty).
- New and revised request and response samples.

## August 2022

- Update to the Aggregate Monitoring APIs, including:

  - Added the required `X-PANW-Region` header parameter.
  - Added new [DataResources](/sase/api/mt-monitor/data-resource-api/) endpoints:
    - [mt/monitor/v1/agg/alerts](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-alerts)
    - [mt/monitor/v1/agg/applicationUsage](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-applicationusage)
    - [mt/monitor/v1/agg/applications](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-applications)
    - [mt/monitor/v1/agg/resource](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-resource)
    - [mt/monitor/v1/agg/threats](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-threats)
    - [mt/monitor/v1/agg/urlLogs](/sase/api/mt-monitor/post-mt-monitor-v-1-agg-urllogs)
  - Moved `mt/monitor/v1/agg/custom/upgrades/list` to [InsightsResources](/sase/api/mt-monitor/insights-resource-api/).
  - Renamed query filters to user-friendly names.
  - Removed the `license_type` query parameter.

- Updated the Prisma Access Config APIs to add [traffic steering](/category/access/api/prisma-access-config/traffic-steering/).
  You can also now [import a certificate](/access/api/prisma-access-config/post-sse-config-v-1-certificates-import/).

## July 2022

- First documentation release of the [Prisma SD-WAN APIs](/sdwan/docs/).
- Added `shared-infrastructure-settings`, `internal-dns-servers`, and `service-connections`
  endpoints to the [Prisma Access Configuration APIs](/access/api/prisma-access-config/). These are
  grouped under `Service Setup` which is renamed from `Remote Networks`.
- Removed the API Server Status APIs from [Prisma Access Insights](/category/access/api/insights/v-2-0/data-resource/) as they are not intended for customer consumption.

## April 2022

The [Prisma Access configuration APIs](/access/api/prisma-access-config/)
are updated with new URIs that begin with `/sse`. Where each API used to begin with `/config/v1`, now they begin
begin with `/sse/config/v1`. For example, `/config/v1/certificate-profiles` is now
`/sse/config/v1/certificate-profiles`.

The following configuration endpoints have changed:

| Old                                  | New                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| /config/v1/load-config               | [/sse/config/v1/config-versions:load](/access/api/prisma-access-config/post-sse-config-v-1-config-versions-load/)                     |
| /config/v1/running/push              | [/sse/config/v1/config-versions/candidate:push](/access/api/prisma-access-config/post-sse-config-v-1-config-versions-candidate-push/) |
| /config/v1/config-versions/candidate | [/sse/config/v1/config-versions](/access/api/prisma-access-config/get-sse-config-v-1-config-versions-version/)                        |

Also, [/sse/config/v1/config-versions/candidate:push](/access/api/prisma-access-config/post-sse-config-v-1-config-versions-candidate-push/)
formerly had a field `devices` in its request body. This is now `folders`.

The following new API is added:

- [/sse/config/v1/config-versions/{version}](/access/api/prisma-access-config/get-sse-config-v-1-config-versions-version/)

Throughout the entire service, APIs that retrieve or edit a resource by ID now no longer support the
`folder` query parameter. See, for example [/sse/config/v1/addresses/{id}](/access/api/prisma-access-config/get-sse-config-v-1-addresses/).

## March 2022

First public release of the Prisma SASE APIs. This release provides support for
[tenant](/sase/docs/tenant-service-groups) and
[identity management and role management](/sase/docs/roles),
offers a common method for
[authentication and API access](/sase/docs/api-call),
[subscription monitoring](/sase/api/subscription),
[Prisma Access configuration](/access/docs/prisma-access-config/)
and [aggregate monitoring](/sase/docs/mt-monitor).

This release supports Managed Security Service Providers (MSSPs).
