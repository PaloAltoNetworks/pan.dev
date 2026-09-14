---
id: api-release-notes
title: AIRT Release Notes
sidebar_label: API Release Notes
keywords:
  - AIRT
  - Reference
  - API
  - Release Notes
---

# Release notes

Everything we ship for the AIRT API, newest first. Pick a date to see exactly what changed, including breaking changes, what you need to do, and links to the affected endpoints.

## July 28th, 2026

Airt API: 7 new, 1 updated endpoints. Updated from v0.6.88 to v0.7.67.

### New

- **List all adapters.** New `GET /v1/adapters` endpoint now available.
  [Airt API reference →](/airt/api/airt)
  ```
  GET api.paloaltonetworks.com/v1/adapters
  ```

- **Create a new adapter.** New `POST /v1/adapters` endpoint now available.
  [Airt API reference →](/airt/api/airt)
  ```
  POST api.paloaltonetworks.com/v1/adapters
  ```

- **Get adapter config defaults.** New `GET /v1/adapters/config` endpoint now available.
  [Airt API reference →](/airt/api/airt)
  ```
  GET api.paloaltonetworks.com/v1/adapters/config
  ```

- **Validate adapter script.** New `POST /v1/adapters/validate` endpoint now available.
  [Airt API reference →](/airt/api/airt)
  ```
  POST api.paloaltonetworks.com/v1/adapters/validate
  ```

- **Delete an adapter.** New `DELETE /v1/adapters/{adapter_uuid}` endpoint now available.
  [Airt API reference →](/airt/api/airt)
  ```
  DELETE api.paloaltonetworks.com/v1/adapters/{adapter_uuid}
  ```

- **Get adapter by UUID.** New `GET /v1/adapters/{adapter_uuid}` endpoint now available.
  [Airt API reference →](/airt/api/airt)
  ```
  GET api.paloaltonetworks.com/v1/adapters/{adapter_uuid}
  ```

- **Update an adapter.** New `PUT /v1/adapters/{adapter_uuid}` endpoint now available.
  [Airt API reference →](/airt/api/airt)
  ```
  PUT api.paloaltonetworks.com/v1/adapters/{adapter_uuid}
  ```

### Updated

- **New parameter `adapter_uuid` on `GET /v1/target`.**
  ```
  GET api.paloaltonetworks.com/v1/target
  ```

---
## July 28th, 2026

Airt API: 1 new, 2 updated endpoints. Updated from v0.6.88 to v0.7.75.

### New

- **Get goal categories by target type.** New `GET /v1/goal-categories/{target_type}` endpoint now available.
  [Airt API reference →](/airt/api/airt)
  ```
  GET api.paloaltonetworks.com/v1/goal-categories/{target_type}
  ```

### Updated

- **New parameter `goal_category` on `GET /v1/report/dynamic/{job_id}/list-goals`.**
  ```
  GET api.paloaltonetworks.com/v1/report/dynamic/{job_id}/list-goals
  ```

- **New parameter `attack_modality` on `GET /v1/report/static/{job_id}/list-attacks`.**
  ```
  GET api.paloaltonetworks.com/v1/report/static/{job_id}/list-attacks
  ```

---
