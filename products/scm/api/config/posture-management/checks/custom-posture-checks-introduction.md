---
id: custom-posture-checks-introduction
title: Custom Posture Checks API
sidebar_label: Introduction
sidebar_position: 0
keywords:
  - Strata Cloud Manager
  - Posture
  - Custom Posture Checks
  - Security Policy
  - API
---

# Custom Posture Checks API

The Custom Posture Checks API lets you define, manage, and report on security checks that reflect your organization's specific policies — going beyond the built-in Palo Alto Networks best practices. Use this API to build a library of custom checks, automate their lifecycle, and surface compliance data to the teams and systems that need it.

## How It Works

A posture check is a rule that evaluates a specific aspect of your device or policy configuration against a target condition you define. You create checks with your own logic, assign them a severity, and associate them with a scope (folder, device group, or tenant). SCM evaluates checks against applicable configurations and returns pass/fail verdicts you can act on programmatically.

Custom checks complement predefined checks — the List endpoint returns both types so you have a unified view of your posture baseline.

## Use Cases

- **Enforce organizational standards.** Create checks that enforce internal naming conventions, required security profile groups, or mandatory log forwarding settings that no built-in check covers.
- **Automate check lifecycle management.** Use the full CRUD set (create, read, update, delete) to manage checks from code. Store your check definitions in version control and deploy changes through a CI/CD pipeline.
- **Replicate checks across tenants.** Use the Clone endpoint to copy a check — including its logic and metadata — to a new check definition. This accelerates setup when rolling out a standard baseline to multiple customer tenants.
- **Bulk onboard or retire checks.** Use Batch Upsert to create or update many checks in a single call, and Batch Delete to retire obsolete checks at scale.
- **Build posture dashboards.** List all checks (paginated), filter by type or severity, and feed the results into a reporting layer for executive or compliance reporting.

## Workflow

```
POST /all-checks
  └─► Create a custom check, receive { check_id }

GET /all-checks
  └─► List all checks (custom + predefined), paginated

GET /all-checks/{id}
  └─► Retrieve a specific check by ID

PUT /all-checks/{id}
  └─► Update check logic, scope, or metadata

DELETE /all-checks/{id}
  └─► Permanently remove a check

POST /all-checks/{id}/clone
  └─► Duplicate a check into a new definition

POST /all-checks/batch
  └─► Upsert multiple checks in one call

POST /all-checks/batch-delete
  └─► Delete multiple checks in one call
```

## Prerequisites

- An active Strata Cloud Manager tenant with an **SCM Pro license** (required for creating and modifying custom checks).
- A Bearer JWT access token obtained through the SCM OAuth2 flow.
- For scoped checks: the folder or device group must already exist in SCM.

## Check Structure

When you create or update a check, supply at minimum:

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | A unique, descriptive name for the check |
| `description` | No | Human-readable explanation of what the check validates |
| `severity` | Yes | Risk level: `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, or `INFORMATIONAL` |
| `scope` | Yes | The folder, device group, or tenant the check applies to |
| `check_logic` | Yes | The rule expression that defines the pass/fail condition |

See the individual endpoint references for the full request schema.

## Paginating Results

The List Posture Checks endpoint (`GET /all-checks`) returns paginated results. Use the `limit` and `offset` query parameters to walk through large check libraries. Both custom and predefined checks appear in the same response — use the `type` filter to isolate just your custom checks.

:::tip
When managing checks as code, store each check definition as a JSON file in your repository. Use the `external_id` field to map your internal identifier to SCM's `check_id`, making it straightforward to sync state between your source of truth and SCM.
:::

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/all-checks` | List all posture checks (custom and predefined) |
| `POST` | `/all-checks` | Create a new custom posture check |
| `GET` | `/all-checks/{id}` | Get a posture check by ID |
| `PUT` | `/all-checks/{id}` | Update an existing posture check |
| `DELETE` | `/all-checks/{id}` | Delete a posture check |
| `POST` | `/all-checks/{id}/clone` | Clone a posture check |
| `POST` | `/all-checks/batch` | Batch upsert posture checks |
| `POST` | `/all-checks/batch-delete` | Batch delete posture checks |
