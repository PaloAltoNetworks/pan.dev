---
id: cdug-introduction
title: Cloud Dynamic User Groups
sidebar_label: Cloud Dynamic User Groups APIs
keywords:
  - Strata Cloud Manager
  - Configuration
  - Identity
  - Reference
  - API
---

# Cloud Dynamic User Group (CDUG) API Documentation

## What are Cloud Dynamic User Groups?
Cloud Dynamic User Groups (CDUGs) are dynamically populated security groups based on user attributes. Instead of manually assigning users to groups, CDUGs automatically include users who match specific criteria (e.g., Department="Engineering", UserAccountControl="512"). This enables policy-based access control that scales with your organization.

## API Workflow

Follow these steps to manage dynamic groups via the API.

### Step 1: Discover Available Categories
**Endpoint:** `GET /directory-sync/v1/cloud-dug-definition/category`

Before creating CDUGs, call this endpoint to retrieve:
* **Available categories:** (e.g., "Attribute Based", "On Demand Assignment")
* **Context attributes:** Attributes available for each category (e.g., Department, Location, UserAccountControl)

### Step 2: Get Attribute Values
**Endpoint:** `GET /directory-sync/v1/user-attr-values`

For each attribute identified in Step 1, query this endpoint to discover valid values. For example, querying "Department" might return `["Engineering", "Sales", "Marketing"]`.

### Step 3: Create CDUG
**Endpoint:** `POST /directory-sync/v1/cloud-dug-definition`

Use the category and attribute values from Steps 1-2 to create your dynamic group. 
* **Constraints:** Use `$and` (all conditions must match) or `$or` (any condition matches).
* **Response:** Includes an `objectGUID` needed for future operations.
* **Note:** The system automatically appends the `_cdug` suffix to the group name.

### Step 4: List CDUGs
**Endpoint:** `GET /directory-sync/v1/cloud-dug-definition/group`

Retrieve all CDUGs in your domain. Set `useNormalizedAttrs=true` for SCM integrations. This returns `objectGUID` and `defID` values needed for updates and deletions. Supports pagination and filtering.

### Step 5: Update CDUG
**Endpoint:** `PUT /directory-sync/v1/cloud-dug-definition/group`

Modify existing groups using the `objectGUID`. You can update constraints, descriptions, or other attributes.
* **Warning:** Check `result.sync` in the response. If it says "Not found cloud dug def group guid", the `objectGUID` provided was invalid.

### Step 6: Delete CDUG
**Endpoint:** `DELETE /directory-sync/v1/cloud-dug-definition/group`

Delete specific groups using an `objectGUID` or entire categories using a `defID`.
* **Important:** A `200` response does not guarantee immediate deletion. Check for "Data sync in-progress" messages; if present, the deletion is pending.

---

## Implementation Details

### Authentication
All endpoints require an **SCM JWT access token** and operate within the context of a tenant (TSG).

### Common Parameters
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `domain` | Query | The domain name (e.g., `okta-directory`). |
| `useNormalizedAttrs` | Query/Body | Must be set to `"true"` for external API calls/SCM integration. |

### Error Handling
The API may return a `200 OK` status for failed logic (e.g., updating a non-existent ID). Always inspect the `result` object in the JSON response to verify the operation's success.