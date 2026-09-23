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

## July 2026

### Prisma AIRS — AI Red Teaming Management API — Adapters (New)

New adapter endpoints let you register, configure, and validate custom adapter scripts for red teaming targets.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/adapters` | List all adapters |
| `POST` | `/v1/adapters` | Create a new adapter |
| `GET` | `/v1/adapters/config` | Get adapter configuration defaults |
| `POST` | `/v1/adapters/validate` | Validate an adapter script |
| `GET` | `/v1/adapters/{adapter_uuid}` | Get an adapter by UUID |

<details><summary>View all endpoints (7)</summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/adapters` | List all adapters |
| `POST` | `/v1/adapters` | Create a new adapter |
| `GET` | `/v1/adapters/config` | Get adapter configuration defaults |
| `POST` | `/v1/adapters/validate` | Validate an adapter script |
| `GET` | `/v1/adapters/{adapter_uuid}` | Get an adapter by UUID |
| `PUT` | `/v1/adapters/{adapter_uuid}` | Update an adapter |
| `DELETE` | `/v1/adapters/{adapter_uuid}` | Delete an adapter |

</details>

---

### Prisma AIRS — AI Red Teaming Data Plane API — Goal Categories (New) and Scan Report (Updated)

New goal categories endpoint and updated query parameters on report list endpoints.

**New**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/goal-categories/{target_type}` | Get goal categories by target type |

**Updated**

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/report/dynamic/{job_id}/list-goals` | Added `goal_category` query parameter |
| `GET` | `/v1/report/static/{job_id}/list-attacks` | Added `attack_modality` query parameter |

---

## June 2026

### Prisma AIRS — AI Red Teaming Data Plane API (New)

Execute red teaming scans, retrieve reports, and manage scan data through the Red Teaming Data Plane API.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/v1/scan` | Create a new red teaming scan |
| `GET` | `/v1/scan` | List all scans |
| `GET` | `/v1/scan/{job_id}` | Get scan details |
| `POST` | `/v1/scan/{job_id}/abort` | Abort a running scan |
| `GET` | `/v1/report/static/{job_id}/report` | Get attack library scan report |

<details><summary>View all endpoints (36)</summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/v1/scan` | Create a new red teaming scan |
| `GET` | `/v1/scan` | List all scans |
| `GET` | `/v1/scan/{job_id}` | Get scan details |
| `POST` | `/v1/scan/{job_id}/abort` | Abort a running scan |
| `GET` | `/v1/scan/scan-metadata` | Get scan target metadata |
| `GET` | `/v1/report/static/{job_id}/report` | Get attack library scan report |
| `GET` | `/v1/report/static/{job_id}/list-attacks` | List attacks for a scan |
| `GET` | `/v1/report/static/{job_id}/attack/{attack_id}` | Get attack details |
| `GET` | `/v1/report/static/{job_id}/attack-multi-turn/{attack_id}` | Get multi-turn attack details |
| `GET` | `/v1/report/static/{job_id}/remediation` | Get remediation guidance for an attack library scan |
| `GET` | `/v1/report/static/{job_id}/runtime-policy-config` | Get runtime security profile for an attack library scan |
| `GET` | `/v1/report/dynamic/{job_id}/report` | Get agent scan report |
| `GET` | `/v1/report/dynamic/{job_id}/list-goals` | List goals for an agent scan |
| `GET` | `/v1/report/dynamic/{job_id}/goal/{goal_id}/list-streams` | List agent scan goal details |
| `GET` | `/v1/report/dynamic/stream/{stream_id}` | Get agent scan stream details |
| `GET` | `/v1/report/dynamic/{job_id}/remediation` | Get remediation guidance for an agent scan |
| `GET` | `/v1/report/dynamic/{job_id}/runtime-policy-config` | Get runtime security profile for an agent scan |
| `GET` | `/v1/report/{job_id}/download` | Download a scan report |
| `POST` | `/v1/report/{job_id}/generate-partial-report` | Generate a partial scan report |
| `GET` | `/v1/dashboard/scan-statistics` | Get scan statistics and risk profile |
| `GET` | `/v1/dashboard/score-trend` | Get score trend for a target |
| `GET` | `/v1/categories` | Get all attack categories and subcategories |
| `GET` | `/v1/goal-categories/{target_type}` | Get goal categories by target type |
| `GET` | `/v1/languages` | Get available languages for scanning |
| `POST` | `/v1/metering/quota` | Get quota summary |
| `GET` | `/v1/error-log/job/{job_id}` | List error logs for a scan |
| `GET` | `/v1/error-log/target-profile/{target_id}` | List profiling errors for a target |
| `GET` | `/v1/custom-attacks/job/{job_id}/list-custom-attacks` | List custom attacks for a scan |
| `GET` | `/v1/custom-attacks/job/{job_id}/attack/{attack_id}/list-outputs` | Get outputs for a custom attack |
| `GET` | `/v1/custom-attacks/job/{job_id}/property-stats` | Get property statistics for a scan |
| `GET` | `/v1/custom-attacks/report/{job_id}` | Get custom attack report |
| `GET` | `/v1/custom-attacks/report/{job_id}/prompt-sets` | Get prompt sets in a custom attack report |
| `GET` | `/v1/custom-attacks/report/{job_id}/prompt-set/{prompt_set_id}/prompts` | Get prompts by prompt set |
| `GET` | `/v1/custom-attacks/report/{job_id}/prompt/{prompt_id}` | Get prompt details |
| `POST` | `/v1/sentiment` | Update sentiment for a scan report |
| `GET` | `/v1/sentiment/{job_id}` | Get sentiment for a scan |

</details>

---

### Prisma AIRS — AI Red Teaming Management API (New)

Configure targets, manage custom attack prompt sets, and set up red teaming campaigns through the Red Teaming Management API.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/v1/target` | Create a new red teaming target |
| `GET` | `/v1/target` | List all targets |
| `GET` | `/v1/target/{target_uuid}` | Get target details |
| `PUT` | `/v1/target/{target_uuid}` | Update a target |
| `DELETE` | `/v1/target/{target_uuid}` | Delete a target |

<details><summary>View all endpoints (42)</summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/v1/target` | Create a new red teaming target |
| `GET` | `/v1/target` | List all targets |
| `GET` | `/v1/target/{target_uuid}` | Get target details |
| `PUT` | `/v1/target/{target_uuid}` | Update a target |
| `DELETE` | `/v1/target/{target_uuid}` | Delete a target |
| `POST` | `/v1/target/{target_uuid}/profile` | Start target profiling |
| `PUT` | `/v1/target/{target_uuid}/profile` | Update target profile |
| `GET` | `/v1/target/{target_uuid}/profile` | Get profiling results |
| `POST` | `/v1/target/probe` | Run profiling probes on a target |
| `POST` | `/v1/target/validate-auth` | Validate authentication configuration |
| `POST` | `/v1/target/ms-copilot-studio/auth-url` | Generate a Copilot Studio authorization URL |
| `POST` | `/v1/target/ms-copilot-studio/token` | Exchange a Copilot Studio authorization code for a token |
| `DELETE` | `/v1/target/ms-copilot-studio/token/{token_json_uuid}` | Delete MS Copilot Studio token records |
| `GET` | `/v1/custom-attack/list-custom-prompt-sets` | List all custom prompt sets |
| `GET` | `/v1/custom-attack/active-custom-prompt-sets` | List active custom prompt sets |
| `POST` | `/v1/custom-attack/custom-prompt-set` | Create a new custom prompt set |
| `GET` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}` | Get prompt set details |
| `PUT` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}` | Update a prompt set |
| `PUT` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}/archive` | Archive or unarchive a prompt set |
| `GET` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}/reference` | Resolve a prompt set reference |
| `GET` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}/version-info` | Get version information for a prompt set |
| `GET` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}/list-custom-prompts` | List prompts in a prompt set |
| `POST` | `/v1/custom-attack/custom-prompt-set/custom-prompt` | Create a prompt in a prompt set |
| `GET` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}/custom-prompt/{prompt_uuid}` | Get prompt details |
| `PUT` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}/custom-prompt/{prompt_uuid}` | Update a prompt |
| `DELETE` | `/v1/custom-attack/custom-prompt-set/{prompt_set_uuid}/custom-prompt/{prompt_uuid}` | Delete a prompt |
| `POST` | `/v1/custom-attack/upload-custom-prompts-csv` | Upload custom prompts from a CSV file |
| `GET` | `/v1/custom-attack/download-template/{prompt_set_uuid}` | Download the CSV template for a prompt set |
| `GET` | `/v1/custom-attack/property-names` | Get property names |
| `POST` | `/v1/custom-attack/property-names` | Create a property name |
| `GET` | `/v1/custom-attack/property-values` | Get values for multiple property names |
| `GET` | `/v1/custom-attack/property-values/{property_name}` | Get values for a specific property name |
| `POST` | `/v1/custom-attack/property-values` | Create a property value |
| `GET` | `/v1/dashboard/overview` | Get dashboard overview |
| `GET` | `/v1/adapters` | List all adapters |
| `POST` | `/v1/adapters` | Create a new adapter |
| `GET` | `/v1/adapters/config` | Get adapter configuration defaults |
| `POST` | `/v1/adapters/validate` | Validate an adapter script |
| `GET` | `/v1/adapters/{adapter_uuid}` | Get an adapter by UUID |
| `PUT` | `/v1/adapters/{adapter_uuid}` | Update an adapter |
| `DELETE` | `/v1/adapters/{adapter_uuid}` | Delete an adapter |
| `GET` | `/v1/languages` | Get available languages |

</details>

---

## April 2026

### Prisma AIRS — AI Red Teaming Network Channel API (New)

Manage network channels that let you red team targets on private or air-gapped networks.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/channels` | List all network channels |
| `POST` | `/v1/channels` | Create a new network channel |
| `GET` | `/v1/channels/stats` | Get network channel statistics |
| `GET` | `/v1/channels/{channelId}` | Get a channel by ID |
| `PATCH` | `/v1/channels/{channelId}` | Update a channel |
