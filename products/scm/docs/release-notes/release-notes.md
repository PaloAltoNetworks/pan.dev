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

## August 3rd, 2026

Config Cleanup API: 1 new endpoint available.

### New

- **Get Zero-Hit Security Rules.** New `GET /zerohit-rules` endpoint now available.
  [Config Cleanup API reference →](/scm/api/config-cleanup)
  ```
  GET api.strata.paloaltonetworks.com/zerohit-rules
  ```

---
## July 31st, 2026

Posture Management API: 26 new, 10 removed endpoints. Updated from v1.0 to v1.1.0.

### New

- **List Checks.** New `GET /checks/v1` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/checks/v1
  ```

- **Create Posture Check.** New `POST /checks/v1` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/checks/v1
  ```

- **Batch Delete Checks.** New `POST /checks/v1/batch-delete` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/checks/v1/batch-delete
  ```

- **Batch Upsert Checks.** New `POST /checks/v1/batch-upsert` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/checks/v1/batch-upsert
  ```

- **Initiate a Config Upload.** New `POST /checks/v1/reports/config-file-upload` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/checks/v1/reports/config-file-upload
  ```

- **Get BPA Processing Status.** New `GET /checks/v1/reports/{id}/bpa-result` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/checks/v1/reports/{id}/bpa-result
  ```

- **Delete Posture Check.** New `DELETE /checks/v1/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  DELETE api.strata.paloaltonetworks.com/checks/v1/{id}
  ```

- **Get Posture Check.** New `GET /checks/v1/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/checks/v1/{id}
  ```

- **Update Posture Check.** New `PUT /checks/v1/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  PUT api.strata.paloaltonetworks.com/checks/v1/{id}
  ```

- **Clone Posture Check.** New `POST /checks/v1/{id}:clone` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/checks/v1/{id}:clone
  ```

- **Get Benchmark Monitoring Data.** New `POST /compliance-frameworks/v1/benchmark-monitoring` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/compliance-frameworks/v1/benchmark-monitoring
  ```

- **Download Benchmark Data.** New `POST /compliance-frameworks/v1/benchmark-monitoring/download` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/compliance-frameworks/v1/benchmark-monitoring/download
  ```

- **Get Compliance Controls.** New `GET /compliance-frameworks/v1/compliance-controls/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/compliance-frameworks/v1/compliance-controls/{id}
  ```

- **Get Assessed Configurations.** New `GET /compliance-frameworks/v1/configurations-assessed/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/compliance-frameworks/v1/configurations-assessed/{id}
  ```

- **List Compliance Frameworks.** New `GET /compliance-frameworks/v1/definitions` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/compliance-frameworks/v1/definitions
  ```

- **Create Compliance Framework.** New `POST /compliance-frameworks/v1/definitions` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/compliance-frameworks/v1/definitions
  ```

- **Delete Compliance Framework.** New `DELETE /compliance-frameworks/v1/definitions/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  DELETE api.strata.paloaltonetworks.com/compliance-frameworks/v1/definitions/{id}
  ```

- **Get Framework Revision.** New `GET /compliance-frameworks/v1/definitions/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/compliance-frameworks/v1/definitions/{id}
  ```

- **Update Compliance Framework.** New `PUT /compliance-frameworks/v1/definitions/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  PUT api.strata.paloaltonetworks.com/compliance-frameworks/v1/definitions/{id}
  ```

- **Benchmark Compliance Framework.** New `POST /compliance-frameworks/v1/definitions/{id}:benchmark` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/compliance-frameworks/v1/definitions/{id}:benchmark
  ```

- **Clone Compliance Framework.** New `POST /compliance-frameworks/v1/definitions/{id}:clone` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/compliance-frameworks/v1/definitions/{id}:clone
  ```

- **Remove Framework Benchmark.** New `POST /compliance-frameworks/v1/definitions/{id}:un-benchmark` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  POST api.strata.paloaltonetworks.com/compliance-frameworks/v1/definitions/{id}:un-benchmark
  ```

- **Get Compliance Timeline.** New `GET /compliance-frameworks/v1/overall-compliance-timeline/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/compliance-frameworks/v1/overall-compliance-timeline/{id}
  ```

- **Get Framework Compliance Scores.** New `GET /compliance-frameworks/v1/overall-compliance/{id}` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/compliance-frameworks/v1/overall-compliance/{id}
  ```

- **List Framework Summaries.** New `GET /compliance-frameworks/v1/summaries` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/compliance-frameworks/v1/summaries
  ```

- **Get Zero-Hit Security Rules.** New `GET /config-cleanup/v1/zerohit-rules` endpoint now available.
  [Posture Management API reference →](/scm/api/posture-management)
  ```
  GET api.strata.paloaltonetworks.com/config-cleanup/v1/zerohit-rules
  ```

### Removed

- **List Posture Checks.** The `GET /posture/checks/v1` endpoint has been removed.
  ```
  GET api.strata.paloaltonetworks.com/posture/checks/v1
  ```

- **Create Posture Check.** The `POST /posture/checks/v1` endpoint has been removed.
  ```
  POST api.strata.paloaltonetworks.com/posture/checks/v1
  ```

- **Batch Delete Posture Checks.** The `POST /posture/checks/v1/batch-delete` endpoint has been removed.
  ```
  POST api.strata.paloaltonetworks.com/posture/checks/v1/batch-delete
  ```

- **Batch Upsert Posture Checks.** The `POST /posture/checks/v1/batch-upsert` endpoint has been removed.
  ```
  POST api.strata.paloaltonetworks.com/posture/checks/v1/batch-upsert
  ```

- **Initiate a Configuration Upload.** The `POST /posture/checks/v1/reports/config-file-upload` endpoint has been removed.
  ```
  POST api.strata.paloaltonetworks.com/posture/checks/v1/reports/config-file-upload
  ```

- **Get BPA Processing Status.** The `GET /posture/checks/v1/reports/{id}/bpa-result` endpoint has been removed.
  ```
  GET api.strata.paloaltonetworks.com/posture/checks/v1/reports/{id}/bpa-result
  ```

- **Delete Posture Check.** The `DELETE /posture/checks/v1/{id}` endpoint has been removed.
  ```
  DELETE api.strata.paloaltonetworks.com/posture/checks/v1/{id}
  ```

- **Get Posture Check.** The `GET /posture/checks/v1/{id}` endpoint has been removed.
  ```
  GET api.strata.paloaltonetworks.com/posture/checks/v1/{id}
  ```

- **Update Posture Check.** The `PUT /posture/checks/v1/{id}` endpoint has been removed.
  ```
  PUT api.strata.paloaltonetworks.com/posture/checks/v1/{id}
  ```

- **Clone Posture Check.** The `POST /posture/checks/v1/{id}:clone` endpoint has been removed.
  ```
  POST api.strata.paloaltonetworks.com/posture/checks/v1/{id}:clone
  ```

---
## July 24th, 2026

Network API: 1 new endpoint available.

### New

- **Generate PPK Key.** New `POST /ike-gateways:generate-ppk` endpoint now available.
  [Network API reference →](/scm/api/network)
  ```
  POST api.strata.paloaltonetworks.com/ike-gateways:generate-ppk
  ```

---
