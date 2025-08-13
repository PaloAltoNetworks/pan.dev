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
| ViewOnly | Provides read-only access to entities like security profiles, API keys, and custom applications. |
| CustomRole | Allows administrators to define a custom role with specific permissions. You can assign granular permissions for the AI Runtime Security API by selecting from a list of permissions such as `airs_api.ai_sec_profile`, `airs_api.api_keys`, `airs_api.custom_topic`, and more. <br></br> You create a custom role with specific permissions for each entity, allowing you to assign granular CRUD (Create, Read, Update, Delete) operations. This is done by navigating to SCM > Identity & Access > Roles > Custom Roles, selecting Add Custom Role, and then going to the API tab to add permissions for the AI Runtime Security API.<br></br>![RBAC custom roles for Prisma AIRS Runtime Security](../../../../static/prisma/img/prisma-airs-custom-api-roles-permissions.png) <br></br> ![Granular permissions](../../../../static/prisma/img/prisma-airs-custom-role-granular-permissions.png)|
