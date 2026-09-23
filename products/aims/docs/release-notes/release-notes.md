---
id: release-notes
title: API Release Notes
---

## August 2026

### Prisma AIRS — AI Model Security Data Plane API (New)

Execute scans and manage model data through the Model Security Data Plane API.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/scans` | List all scans |
| `POST` | `/v1/scans` | Create a new scan |
| `GET` | `/v1/scans/{uuid}` | Get a scan by UUID |
| `GET` | `/v1/scans/{scan_uuid}/evaluations` | Get rule evaluations for a scan |
| `GET` | `/v1/scans/{scan_uuid}/files` | Get files for a scan |

<details><summary>View all endpoints (18)</summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/scans` | List all scans |
| `POST` | `/v1/scans` | Create a new scan |
| `GET` | `/v1/scans/{uuid}` | Get a scan by UUID |
| `GET` | `/v1/scans/{scan_uuid}/evaluations` | Get rule evaluations for a scan |
| `GET` | `/v1/scans/{scan_uuid}/files` | Get files for a scan |
| `GET` | `/v1/scans/{scan_uuid}/rule-violations` | Get rule violations for a scan |
| `POST` | `/v1/scans/{scan_uuid}/labels` | Add labels to a scan |
| `PUT` | `/v1/scans/{scan_uuid}/labels` | Set labels for a scan |
| `DELETE` | `/v1/scans/{scan_uuid}/labels` | Remove labels from a scan |
| `GET` | `/v1/scans/label-keys` | List distinct label keys across all scans |
| `GET` | `/v1/scans/label-keys/{key}/values` | List distinct values for a label key |
| `GET` | `/v1/models` | List all models |
| `GET` | `/v1/models/{uuid}` | Get a model by UUID |
| `GET` | `/v1/models/{uuid}/model-versions` | List model versions for a model |
| `GET` | `/v1/model-versions/{uuid}` | Get a model version by UUID |
| `GET` | `/v1/model-versions/{uuid}/files` | List files for a model version |
| `GET` | `/v1/evaluations/{uuid}` | Get a specific rule evaluation |
| `GET` | `/v1/violations/{uuid}` | Get a specific rule violation |

</details>

---

### Prisma AIRS — AI Model Security Management API (New)

Configure and manage security groups, rules, and custom rules for AI/ML model scanning.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/security-groups` | List all security groups |
| `POST` | `/v1/security-groups` | Create a new security group |
| `GET` | `/v1/security-groups/{uuid}` | Get a security group by UUID |
| `PUT` | `/v1/security-groups/{uuid}` | Update a security group |
| `DELETE` | `/v1/security-groups/{uuid}` | Delete a security group |

<details><summary>View all endpoints (23)</summary>

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/v1/security-groups` | List all security groups |
| `POST` | `/v1/security-groups` | Create a new security group |
| `GET` | `/v1/security-groups/{uuid}` | Get a security group by UUID |
| `PUT` | `/v1/security-groups/{uuid}` | Update a security group |
| `DELETE` | `/v1/security-groups/{uuid}` | Delete a security group |
| `GET` | `/v1/security-groups/{security_group_uuid}/rule-instances` | List rule instances for a security group |
| `GET` | `/v1/security-groups/{security_group_uuid}/rule-instances/versions` | List snapshot versions for a security group's rule instances |
| `GET` | `/v1/security-groups/{security_group_uuid}/rule-instances/{rule_instance_uuid}` | Get a rule instance by UUID |
| `PUT` | `/v1/security-groups/{security_group_uuid}/rule-instances/{rule_instance_uuid}` | Update a rule instance |
| `GET` | `/v1/security-rules` | List all security rules |
| `GET` | `/v1/security-rules/versions` | List snapshot versions for PANW rules |
| `GET` | `/v1/security-rules/{uuid}` | Get a security rule by UUID |
| `GET` | `/v1/custom-rules` | List all custom rules |
| `POST` | `/v1/custom-rules` | Create a custom rule |
| `GET` | `/v1/custom-rules/versions` | List snapshot versions for custom rules |
| `GET` | `/v1/custom-rules/{custom_rule_uuid}` | Get a custom rule by UUID |
| `PUT` | `/v1/custom-rules/{custom_rule_uuid}` | Update a custom rule |
| `POST` | `/v1/custom-rules/{custom_rule_uuid}/archive` | Archive a custom rule |
| `POST` | `/v1/custom-rules/{custom_rule_uuid}/unarchive` | Restore an archived custom rule |
| `GET` | `/v1/custom-rules/{custom_rule_uuid}/security-groups` | List security groups assigned to a custom rule |
| `POST` | `/v1/custom-rules/{custom_rule_uuid}/security-groups` | Batch-assign a custom rule to security groups |
| `DELETE` | `/v1/custom-rules/{custom_rule_uuid}/security-groups/{sg_uuid}` | Remove a custom rule assignment from a security group |
| `GET` | `/v1/pypi/authenticate` | Get an authenticated Google Artifact Registry URL for PyPI access |

</details>
