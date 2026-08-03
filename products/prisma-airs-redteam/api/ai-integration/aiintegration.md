---
id: aiintegration
title: "Prisma AIRS AI Red Teaming"
sidebar_label: "Prisma AIRS AI Red Teaming"
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---

The AI Red Teaming product contains a comprehensive security framework built on a multi-tenant architecture with Row Level Security (RLS) to ensure data isolation. Tenant Security Groups (TSG) provide additional isolation layers between tenants, while user-based access control is enforced across all endpoints to maintain proper authorization and permissions.

The AI Red Teaming platform is divided into two distinct API planes:

* **Management Plane**: Handles configuration and setup operations
* **Data Plane**: Handles scan execution and reporting operations

## Pagination

Most list endpoints include pagination support to manage large datasets efficiently. AI Red Teaming provides a `limit` parameter to specify the number of items returned per page and a `skip` parameter to define the number of items to skip, providing offset-based pagination for navigating through result sets.

## Filtering

The AI Red Teaming provides advanced filtering capabilities to quickly locate specific data. You can use text search functionality for querying across relevant fields. The status filtering supports common workflow states including: `PENDING`, `IN_PROGRESS`, `COMPLETED`, `FAILED`, and `ABORTED`. 

Additionally, AI Red Teaming also supports type-based, category, severity, and threat level filtering (for attack reports).

## Error Handling

The AI Red Teaming platform maintains consistent error responses ensuring standardized error formatting across all endpoints. AI Red Teaming provides proper HTTP status codes to reflect the nature of each error condition along with detailed error messages for effective debugging and troubleshooting.