---
id: api-release-notes
title: DLP Release Notes
sidebar_label: API Release Notes
keywords:
  - DLP
  - Reference
  - API
  - Release Notes
---

# Release notes

Everything we ship for the DLP API, newest first. Pick a date to see exactly what changed, including breaking changes, what you need to do, and links to the affected endpoints.

## July 31st, 2026

Dlp API: 15 new, 3 removed endpoints.

### New

- **Get All Assignees.** New `GET /v1/api/incidents/assignee` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  GET api.paloaltonetworks.com/v1/api/incidents/assignee
  ```

- **Create or Update Incident Assignee.** New `PUT /v1/api/incidents/assignee` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  PUT api.paloaltonetworks.com/v1/api/incidents/assignee
  ```

- **Get Assignee by ID.** New `GET /v1/api/incidents/assignee/{assigneeId}` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  GET api.paloaltonetworks.com/v1/api/incidents/assignee/{assigneeId}
  ```

- **Assign Incidents.** New `PUT /v1/api/incidents/{incidentID}/assignee` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  PUT api.paloaltonetworks.com/v1/api/incidents/{incidentID}/assignee
  ```

- **Remove Incident Notes.** New `DELETE /v1/api/incidents/{incidentID}/notes` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  DELETE api.paloaltonetworks.com/v1/api/incidents/{incidentID}/notes
  ```

- **Update Inicident Note.** New `PUT /v1/api/incidents/{incidentID}/notes` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  PUT api.paloaltonetworks.com/v1/api/incidents/{incidentID}/notes
  ```

- **Update Incident Resolution.** New `PUT /v1/api/incidents/{incidentID}/resolution-status` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  PUT api.paloaltonetworks.com/v1/api/incidents/{incidentID}/resolution-status
  ```

- **Get Reports.** New `GET /v1/public/report/{reportId}` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  GET api.paloaltonetworks.com/v1/public/report/{reportId}
  ```

- **Get Incidents.** New `GET /v2/api/incidents` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  GET api.paloaltonetworks.com/v2/api/incidents
  ```

- **Get Incident Details.** New `GET /v2/api/incidents/{incidentID}` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  GET api.paloaltonetworks.com/v2/api/incidents/{incidentID}
  ```

- **Retrieve paginated incident records using token.** New `GET /v4/api/incidents` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  GET api.paloaltonetworks.com/v4/api/incidents
  ```

- **Retrieve initial incident records with token.** New `POST /v4/api/incidents` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  POST api.paloaltonetworks.com/v4/api/incidents
  ```

- **Get signed download URL for incidents.** New `POST /v4/api/incidents/download` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  POST api.paloaltonetworks.com/v4/api/incidents/download
  ```

- **Update key details for incidents.** New `POST /v4/api/incidents/management` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  POST api.paloaltonetworks.com/v4/api/incidents/management
  ```

- **Retrieve incident details by ID.** New `GET /v4/api/incidents/{id}` endpoint now available.
  [Dlp API reference →](/dlp/api/dlp)
  ```
  GET api.paloaltonetworks.com/v4/api/incidents/{id}
  ```

### Removed

- **List Data Filtering Profiles.** The `GET /v2/api/data-filtering-profiles` endpoint has been removed.
  ```
  GET api.paloaltonetworks.com/v2/api/data-filtering-profiles
  ```

- **Get Data Filtering Profile.** The `GET /v2/api/data-filtering-profiles/{resourceId}` endpoint has been removed.
  ```
  GET api.paloaltonetworks.com/v2/api/data-filtering-profiles/{resourceId}
  ```

- **Update Data Filtering Profile.** The `PUT /v2/api/data-filtering-profiles/{resourceId}` endpoint has been removed.
  ```
  PUT api.paloaltonetworks.com/v2/api/data-filtering-profiles/{resourceId}
  ```

---
