---
id: release-notes
title: Release Notes
description: Release Notes
hide_title: true
hide_table_of_contents: false
keywords:
  - sase
---

# Release Notes

These release notes identify API changes made for the various Strata Cloud Manager services. See
also the [change log](/scm/docs/release-notes/changelog) for information on all changes to this API
documentation, some of which have occurred in between API product releases.

* [November 2024](/scm/docs/release-notes/november2024/)

## July 31st, 2026

Subscription_Service API: 2 new endpoints available.

### New

- **Fetch entitlement group details.** New `GET /asset/api/v1/entitlement-groups` endpoint now available.
  [Subscription_Service API reference →](/scm/api/subscription_service)
  ```
  GET api.strata.paloaltonetworks.com/asset/api/v1/entitlement-groups
  ```

- **Get instance status.** New `GET /asset/api/v1/instances` endpoint now available.
  [Subscription_Service API reference →](/scm/api/subscription_service)
  ```
  GET api.strata.paloaltonetworks.com/asset/api/v1/instances
  ```

---
## July 31st, 2026

Subscription_Service API: 4 new endpoints available.

### New

- **Activate or amend license.** New `POST /activation/api/v1/activate` endpoint now available.
  [Subscription_Service API reference →](/scm/api/subscription_service)
  ```
  POST api.strata.paloaltonetworks.com/activation/api/v1/activate
  ```

- **Offboard a product instance.** New `POST /activation/api/v1/offboard` endpoint now available.
  [Subscription_Service API reference →](/scm/api/subscription_service)
  ```
  POST api.strata.paloaltonetworks.com/activation/api/v1/offboard
  ```

- **Validate offboard readiness.** New `GET /activation/api/v1/offboard/validation` endpoint now available.
  [Subscription_Service API reference →](/scm/api/subscription_service)
  ```
  GET api.strata.paloaltonetworks.com/activation/api/v1/offboard/validation
  ```

- **Share an instance with target TSGs.** New `POST /activation/api/v1/shared-instances` endpoint now available.
  [Subscription_Service API reference →](/scm/api/subscription_service)
  ```
  POST api.strata.paloaltonetworks.com/activation/api/v1/shared-instances
  ```

---
