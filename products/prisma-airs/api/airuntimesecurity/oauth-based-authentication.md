---
id: oauth-based-authentication
title: "Strata Cloud Manager RBAC Roles for Prisma AIRS AI Runtime Security"
sidebar_label: "Role-Based Access Control (RBAC) Roles for Prisma AIRS"
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---

Role-Based Access Control (RBAC) in Strata Cloud Manager now allows you to enforce granular permissions for the AI Runtime Security APIs. For a comprehensive overview of Strata Cloud Manager roles, refer to the [Roles Overview](https://pan.dev/scm/docs/roles-overview/) document.

The primary roles relevant to AI Runtime Security are:

| User Role | Permission |
| --- | --- |
| Superuser | Has full access to all API endpoints, including the ability to perform CRUD (Create, Read, Update, Delete) operations on API keys, security profiles, and custom topics. |
| View Only Administrator | Provides read-only access to entities like security profiles, API keys, and custom applications. |
| CUSTOM ROLES: (custom-role-name) | Allows administrators to define a custom role with specific permissions. You can assign granular permissions for the AI Runtime Security API by selecting from a list of permissions such as `airs_api.ai_sec_profile`, `airs_api.api_keys`, `airs_api.custom_topic`, and more. Create a custom role with specific permissions for each entity, allowing you to assign granular CRUD (Create, Read, Update, Delete) operations. <br></br> To create a custom role: <br></br> * Navigate to **Strata Cloud Manager > Identity & Access > Roles > Custom Roles**. <br></br> * Select **Add Custom Role**, and then select the **API** tab. <br></br> Select the permissions for the AI Runtime Security API endpoints and the CRUD operations for each.<br></br>![RBAC custom roles for Prisma AIRS Runtime Security](../../../../static/prisma/img/prisma-airs-custom-api-roles-permissions.png) <br></br> ![Granular permissions](../../../../static/prisma/img/prisma-airs-custom-role-granular-permissions.png)|
