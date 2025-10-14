---
id: usecases
title: Use Cases
sidebar_label: CIE Directory Sync Service Use Cases
keywords:
  - Strata Cloud Manager
  - Configuration
  - Identity
  - Reference
  - API
---

# API Use Cases and Examples

This document provides practical examples for the most common use cases of the CIE Directory Sync Service API. Each example includes a goal, the endpoint to use, and a sample request body.

---

## Authentication

Before making any calls, you must acquire a **Bearer Token**. Your token contains a `TSG ID` that automatically scopes all API requests to your specific CIE tenant, ensuring you only see data from your configured directories.

You can obtain a token in two ways:
1.  **Service Account (Recommended):** Create a service account in Strata Cloud Manager for automated, programmatic access.
2.  **User-Based Token (For Testing):** Copy a temporary token directly from the Strata Cloud Manager UI.

---

## Prerequisite: Discover Your Domains

Before you can query for users or groups, you must know the names of the domains configured in your CIE tenant. Use the `Get Domain Details` endpoint to retrieve this list. You will use the `domain` value from this response in all subsequent requests.

**Endpoint:** `GET /directory-sync/v1/domains`

---

## User Query Use Cases (`POST /cache-users`)

These use cases focus on retrieving information about users.

### Find a Specific User by Attribute

**Goal:** Find a single user to verify their existence or retrieve their details. This is useful for validating a user's identity before granting access to a resource.

**Example:** Find a user whose User Principal Name is `ankita@panw.lab`.

* **Request Body (`list_specific_users` schema):**
    ```json
    {
      "domain": "panw.lab",
      "name": {
        "attrName": "userPrincipalName",
        "attrValue": "ankita@panw.lab",
        "match": "equal"
      },
      "attrs": [
        "Common-Name",
        "Mail",
        "Distinguished Name"
      ],
      "useNormalizedAttrs": "True"
    }
    ```
* **Key Parameters:**
    * The `name` object acts as a "WHERE" clause to filter for a specific user.
    * The `attrs` array lets you specify which attributes you want returned. Set `useNormalizedAttrs` to `"True"` when using human-readable attribute names like "Common-Name".

### List All Users in a Group

**Goal:** Retrieve a list of all members of a specific directory group. This is essential for building group-based policies.

**Example:** Get all users who are members of the group `CN=QA-Engineers,OU=Groups,DC=panw,DC=lab`.

* **Request Body (`list_users_in_particular_group` schema):**
    ```json
    {
      "domain": "panw.lab",
      "filter": {
        "type": "group",
        "name": {
          "attrName": "Distinguished Name",
          "attrValue": "CN=QA-Engineers,OU=Groups,DC=panw,DC=lab",
          "match": "equal"
        },
        "level": "recursive"
      }
    }
    ```
* **Key Parameters:**
    * The `filter.type` is set to `group` to indicate you are querying based on group membership.
    * `level: "recursive"` ensures you get all members, even if they belong to a nested group. Use `"direct"` for immediate members only.

### Check if a Specific User is in a Group

**Goal:** Verify that a specific user is a member of a specific group. This is a foundational check for identity-aware access control.

**Example:** Check if the user `ankita@panw.lab` is a member of the `QA-Engineers` group.

* **Request Body (`check_group_membership` schema):**
    ```json
    {
      "domain": "panw.lab",
      "name": {
        "attrName": "userPrincipalName",
        "attrValue": "ankita@panw.lab",
        "match": "equal"
      },
      "filter": {
        "type": "group",
        "name": {
          "attrName": "Common-Name",
          "attrValue": "QA-Engineers",
          "match": "equal"
        },
        "level": "recursive"
      }
    }
    ```
* **How it Works:** This request combines a `name` filter (for the user) and a `filter` object (for the group). The API returns the user's data if they are a member, or an empty result if they are not.

---

## Group Query Use Cases (`POST /cache-groups`)

These use cases focus on retrieving information about groups.

### Find a Specific Group by Attribute

**Goal:** Find a single group to verify its existence or retrieve its details.

**Example:** Find a group with the Common Name `Admins`.

* **Request Body (`list_specific_groups` schema):**
    ```json
    {
      "domain": "paloaltonetworks.com",
      "name": {
        "attrName": "Common-Name",
        "attrValue": "Admins",
        "match": "equal"
      },
      "attrs": [
        "Common-Name",
        "Distinguished Name",
        "Unique Identifier"
      ]
    }
    ```

### List All Groups a User Belongs To

**Goal:** Retrieve all group memberships for a single user. This is critical for understanding a user's permissions and roles.

**Example:** Get all groups that the user `alice@paloaltonetworks.com` is a member of.

* **Request Body (`list_groups_user_belongs_to` schema):**
    ```json
    {
      "domain": "paloaltonetworks.com",
      "filter": {
        "type": "user",
        "name": {
          "attrName": "Mail",
          "attrValue": "alice@paloaltonetworks.com",
          "match": "equal"
        }
      },
      "attrs": [
        "Common-Name",
        "Distinguished Name"
      ]
    }
    ```
* **Key Parameters:**
    * The `filter.type` is set to `user` to indicate you are querying for groups based on a user member.

---

## Handling Large Datasets (Pagination)

For queries that may return hundreds or thousands of results (e.g., "List all users in a domain"), you should use the optional pagination parameters to manage the response size.

* `pageNum`: The page number you want to retrieve, starting from `1`.
* `pageSz`: The number of results to include on each page (maximum is 1000).

**Example:** Retrieve the second page of users, with 50 users per page.
```json
{
  "domain": "paloaltonetworks.com",
  "pageNum": 2,
  "pageSz": 50
}
```