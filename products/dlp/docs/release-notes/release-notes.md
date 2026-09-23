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

## August 2026

### DLP — DLP API Spec (New)

4 new endpoints and 2 removed endpoints.

<details><summary>View all endpoints (5)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v4/api/incidents` | Retrieve paginated incident records using token |
| POST | `/v4/api/incidents` | Retrieve initial incident records with token |
| POST | `/v4/api/incidents/download` | Get signed download URL for incidents |
| POST | `/v4/api/incidents/management` | Update key details for incidents |
| GET | `/v4/api/incidents/{id}` | Retrieve incident details by ID |

</details>

See [DLP APIs](/dlp/api/dlp-api-spec-beta/) for full details.

---

## July 2026

### DLP — DLP API Spec (Updated)

15 new endpoints added, 3 endpoints removed.

<details><summary>View all endpoints (15 new)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v1/api/incidents/assignee` | Retrieve all incident assignees |
| PUT | `/v1/api/incidents/assignee` | Create or update an incident assignee |
| GET | `/v1/api/incidents/assignee/{assigneeId}` | Retrieve assignee details by ID |
| PUT | `/v1/api/incidents/{incidentID}/assignee` | Assign an incident to a user |
| DELETE | `/v1/api/incidents/{incidentID}/notes` | Delete notes from an incident |
| PUT | `/v1/api/incidents/{incidentID}/notes` | Update notes on an incident |
| PUT | `/v1/api/incidents/{incidentID}/resolution-status` | Update the resolution status of an incident |
| GET | `/v1/public/report/{reportId}` | Retrieve a report by ID |
| GET | `/v2/api/incidents` | Retrieve DLP incidents |
| GET | `/v2/api/incidents/{incidentID}` | Retrieve details for a specific incident |
| GET | `/v4/api/incidents` | Retrieve paginated incident records using token |
| POST | `/v4/api/incidents` | Retrieve initial incident records with token |
| POST | `/v4/api/incidents/download` | Get signed download URL for incidents |
| POST | `/v4/api/incidents/management` | Update key details for incidents |
| GET | `/v4/api/incidents/{id}` | Retrieve incident details by ID |

</details>

**Removed endpoints:**

| Method | Endpoint |
| ------ | -------- |
| GET | `/v2/api/data-filtering-profiles` |
| GET | `/v2/api/data-filtering-profiles/{resourceId}` |
| PUT | `/v2/api/data-filtering-profiles/{resourceId}` |

See [DLP APIs](/dlp/api/) for full details.

---

## March 2026

### DLP — Data Patterns (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v2/api/data-patterns` | List all data patterns |
| POST | `/v2/api/data-patterns` | Create a data pattern |
| GET | `/v2/api/data-patterns/{resourceId}` | Retrieve a data pattern by ID |
| PUT | `/v2/api/data-patterns/{resourceId}` | Update a data pattern |
| PATCH | `/v2/api/data-patterns/{resourceId}` | Partially update a data pattern |
| DELETE | `/v2/api/data-patterns/{resourceId}` | Delete a data pattern |

See [Data Patterns API](/dlp/api/data-patterns/) for full details.

---

### DLP — Data Profiles (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v2/api/data-profiles` | List all data profiles |
| POST | `/v2/api/data-profiles` | Create a data profile |
| GET | `/v2/api/data-profiles/{resourceId}` | Retrieve a data profile by ID |
| PUT | `/v2/api/data-profiles/{resourceId}` | Update a data profile |
| PATCH | `/v2/api/data-profiles/{resourceId}` | Partially update a data profile |

See [Data Profiles API](/dlp/api/data-profiles/) for full details.

---

### DLP — Dictionaries (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v2/api/dictionaries` | List all dictionaries |
| POST | `/v2/api/dictionaries` | Create a dictionary |
| GET | `/v2/api/dictionaries/{resourceId}` | Retrieve a dictionary by ID |
| PUT | `/v2/api/dictionaries/{resourceId}` | Update a dictionary |
| PATCH | `/v2/api/dictionaries/{resourceId}` | Partially update a dictionary |
| DELETE | `/v2/api/dictionaries/{resourceId}` | Delete a dictionary |

See [Dictionaries API](/dlp/api/dictionaries/) for full details.

---

### DLP — Document Types (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v2/api/document-types` | List all document types |
| POST | `/v2/api/document-types` | Create a document type |
| GET | `/v2/api/document-types/{resourceId}` | Retrieve a document type by ID |
| PUT | `/v2/api/document-types/{resourceId}` | Update a document type |
| PATCH | `/v2/api/document-types/{resourceId}` | Partially update a document type |
| DELETE | `/v2/api/document-types/{resourceId}` | Delete a document type |

See [Document Types API](/dlp/api/document-types/) for full details.

---

### DLP — EDM Datasets (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v2/api/edm-datasets` | List all EDM datasets |
| GET | `/v2/api/edm-datasets/{resourceId}` | Retrieve an EDM dataset by ID |
| DELETE | `/v2/api/edm-datasets/{resourceId}` | Delete an EDM dataset |

See [EDM Datasets API](/dlp/api/edm-datasets/) for full details.

---

### DLP — Endpoint Policies (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v2/api/endpoint-policies` | List all endpoint policies |
| POST | `/v2/api/endpoint-policies` | Create an endpoint policy |
| GET | `/v2/api/endpoint-policies/{resourceId}` | Retrieve an endpoint policy by ID |
| PUT | `/v2/api/endpoint-policies/{resourceId}` | Update an endpoint policy |
| PATCH | `/v2/api/endpoint-policies/{resourceId}` | Partially update an endpoint policy |
| DELETE | `/v2/api/endpoint-policies/{resourceId}` | Delete an endpoint policy |

See [Endpoint Policies API](/dlp/api/endpoint-policies/) for full details.

---

### DLP — Incidents API (New)

<details><summary>View all endpoints (9)</summary>

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v1/api/incidents/assignee` | Retrieve all incident assignees |
| PUT | `/v1/api/incidents/assignee` | Create or update an incident assignee |
| GET | `/v1/api/incidents/assignee/{assigneeId}` | Retrieve assignee details by ID |
| PUT | `/v1/api/incidents/{incidentID}/assignee` | Assign an incident to a user |
| DELETE | `/v1/api/incidents/{incidentID}/notes` | Delete notes from an incident |
| PUT | `/v1/api/incidents/{incidentID}/notes` | Update notes on an incident |
| PUT | `/v1/api/incidents/{incidentID}/resolution-status` | Update the resolution status of an incident |
| GET | `/v2/api/incidents` | Retrieve DLP incidents |
| GET | `/v2/api/incidents/{incidentID}` | Retrieve details for a specific incident |

</details>

See [Incidents API](/dlp/api/incidents-api/) for full details.

---

### DLP — Incidents API Beta (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v4/api/incidents` | Retrieve paginated DLP incidents |
| POST | `/v4/api/incidents` | Query DLP incident inventory |
| POST | `/v4/api/incidents/download` | Generate a signed URL for incident download |
| POST | `/v4/api/incidents/management` | Update incident management properties |
| GET | `/v4/api/incidents/{id}` | Retrieve incident details by ID |

See [Incidents API (Beta)](/dlp/api/incidents-api-beta/) for full details.

---

### DLP — OCR Enablement (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v2/api/ocr` | Retrieve OCR enablement status |
| PUT | `/v2/api/ocr` | Update OCR enablement settings |

See [OCR Enablement API](/dlp/api/ocr-enablement/) for full details.

---

### DLP — Peripherals (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v2/api/peripherals` | List all peripherals |
| POST | `/v2/api/peripherals` | Create a peripheral |
| GET | `/v2/api/peripherals/{resourceId}` | Retrieve a peripheral by ID |
| PUT | `/v2/api/peripherals/{resourceId}` | Update a peripheral |
| DELETE | `/v2/api/peripherals/{resourceId}` | Delete a peripheral |

See [Peripherals API](/dlp/api/peripherals/) for full details.

---

### DLP — Reports API (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/v1/public/report/{reportId}` | Retrieve report details by ID |

See [Reports API](/dlp/api/reports-api/) for full details.

---

## November 2023

### Email DLP — Email DLP API (New)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | `/incident/api/v1/incidents` | Retrieve email DLP incident details |
| PATCH | `/incident/api/v1/incidents/{incidentId}/status` | Update the status of an email DLP incident |
| GET | `/report/api/v1/reports/{reportId}` | Retrieve a DLP report by ID |

See [Email DLP API](/dlp/api/email-dlp-api/) for full details.

---
