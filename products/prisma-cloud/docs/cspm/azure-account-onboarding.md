---
id: azure-account-onboarding
title: Automate Azure Cloud Account Onboarding
sidebar_position: 4
---

Onboarding an Azure account, such as Azure Tenant, Azure Subscription, or Microsoft Entra ID _(previously known as Azure Active Directory)_ on Prisma Cloud connects all your Azure resources to Prisma Cloud including Accounts with Management Groups, Subscriptions, and Microsoft Entra. Prisma Cloud uses Application (Client) ID, Application Client Secret and Enterprise Application Object ID for authentication to ingest Microsoft Entra ID metadata, configurations, and logs.

:::note
 
:::

> **Prerequisite**:
> - Obtain a [Prisma Cloud API authorization token](/prisma-cloud/api/cspm/app-login/) ![alt text](/icons/api-icon-pan-dev.svg), which will be used in all the APIs.

:::info

- The token is valid for only 10 minutes. If your session extends beyond that limit, [refresh the session](/prisma-cloud/api/cspm/extend-session/) ![alt text](/icons/api-icon-pan-dev.svg).
- Replace the generic `api.prismacloud.io` base url used in the example APIs with your url.

:::

To onboard Azure Accounts, such as Subscription, Tenant, and Microsoft Entra ID:

  [1. Fetch the supported features based on the cloud type, account type, and deployment type.](#1-fetch-the-supported-features)

  [2. Generate the Terraform template.](#2-generate-the-terraform-template)

  [3. Execute the Terraform template in Azure Portal to Register an application and create its roles and permissions.](#3-register-an-application-and-create-corresponding-roles-in-the-azure-portal)

  [4. Onboard your Azure Account on Prisma Cloud ](#4-onboard-the-azure-tenant-on-prisma-cloud)

![](/img/azure_onboarding_workflow.png)

## 1. Fetch the Supported Features

Get the list of supported features based on the cloud type, account type, and deployment type by using the [Fetch Supported Features API](/prisma-cloud/api/cspm/fetch-supported-features/) ![alt text](/icons/api-icon-pan-dev.svg). The `supportedFeatures` parameter in the response body contains the list of supported features.

> **NOTE:** By default, the supported features list contains **Cloud Visibility Compliance and Governance**. Do not include it as a feature in the supported feature request body parameter of any cloud APIs, such as Add Azure Cloud Account, Update Azure Cloud Account, Azure Template Generation and so on.

**Sample Request and Response for Azure Subscription**

<details>
  <summary>Sample Request</summary>

   ```bash
    curl --request POST 'https://api.prismacloud.io/cas/v1/features/cloud/azure' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-redlock-auth: <YOUR_TOKEN>' \
    --data-raw '{
                  "accountType": "account",
                  "deploymentType": "azure"
                }'
```
  </details>

  <details>
  <summary> Sample Response </summary>

  ```json
    {
    "cloudType": "azure",
      "deploymentType": "global",
      "accountType": "account",
      "licenseType": "ENTERPRISE",
      "supportedFeatures": [
        "Agentless Scanning",
        "Auto Protect",
        "Cloud Visibility Compliance and Governance",
        "Remediation",
        "Serverless Function Scanning"
        ]
    }
  ```
  </details>

**Sample Request and Response for Azure Tenant**

<details>
  <summary>Sample Request</summary>

   ```bash
    curl --request POST 'https://api.prismacloud.io/cas/v1/features/cloud/azure' \
    --header 'accept: application/json' \
    --header 'content-type: application/json' \
    --header 'x-redlock-auth: <YOUR_TOKEN>' \
    --data-raw '{
      "accountType": "tenant",
      "deploymentType": "azure",
      "rootSyncEnabled": true
    }'
```
  </details>

  <details>
  <summary> Sample Response </summary>

  ```json
    {
      "cloudType": "azure",
      "deploymentType": "global",
      "accountType": "tenantWithMgmt",
      "licenseType": "ENTERPRISE",
      "supportedFeatures": [
        "Agentless Scanning",
        "Auto Protect",
        "Cloud Visibility Compliance and Governance",
        "Remediation",
        "Serverless Function Scanning"
      ]
    }
  ```
  </details>

  **Sample Request and Response for Microsoft Entra Account**

<details>
  <summary>Sample Request</summary>

   ```bash
    curl --request POST 'https://api.prismacloud.io/cas/v1/features/cloud/azure' \
          --header 'accept: application/json' \
          --header 'content-type: application/json' \
          --header 'x-redlock-auth: <YOUR_TOKEN>' \
          --data-raw '{
            "accountType": "tenant",
            "deploymentType": "azure"
          }'
  ```
  </details>

  <details>
  <summary> Sample Response </summary>

  ```json
      {
        "cloudType": "azure",
        "deploymentType": "global",
        "accountType": "tenant",
        "licenseType": "ENTERPRISE",
        "supportedFeatures": [
          "Cloud Visibility Compliance and Governance"
        ]
      }

  ```
  </details>



## 2. Generate the Terraform Template

Generate the Azure Terraform Template by using the [Generate and Download the Azure Terraform template API](/prisma-cloud/api/cspm/generate-template-link/) ![alt text](/icons/api-icon-pan-dev.svg). The terraform template will include the necessary roles and custom role actions based on the selected features.

Save the generated json response and name the file as `terraform.tf.json`. You can create a directory for each Terraform template that you have download. This allows you to manage multiple templates if you add a different Azure Tenant to Prisma Cloud and update existing roles.

> **NOTE**: `Azure China` does not support the use of Terraform templates. You can either create a custom role to authorize Prisma Cloud access or manually authorize Prisma Cloud.


**Sample Request and Response for Azure Subscription**

<details>
  <summary>Sample Request</summary>

   ```bash
    curl --request POST 'https://api.prismacloud.io/cas/v1/azure_template' \
          --header 'accept: application/json' \
          --header 'content-type: application/json' \
          --header 'x-redlock-auth: <YOUR_TOKEN>' \
          --data-raw '{
            "accountType": "account",
            "tenantId": "<tenant-id>",
            "features": [
              "Agentless Scanning",
              "Auto Protect",
              "Remediation",
              "Serverless Function Scanning"
            ],
            "deploymentType": "azure",
            "subscriptionId": "<subscription-id>"
          }'
```
  </details>

<details>
  <summary>Sample Response</summary>

```json
{
  "output": {
    "c__application_client_id": {
      "value": "${azuread_application.prisma_cloud_app.application_id}"
    },
    "e__enterprise_application_object_id": {
      "value": "${azuread_service_principal.prisma_cloud_sp.id}"
    },
    "d__application_client_secret": {
      "value": "${nonsensitive(azuread_application_password.password.value)}"
    },
    "b__subscription_id": {
      "value": "${var.subscription_id}"
    },
    "a__directory_tenant_id": {
      "value": "${var.tenant_id}"
    }
  },
  "provider": {
    "random": {},
    "azuread": {
      "tenant_id": "${var.tenant_id}",
      "environment": "${var.cloud_environment}"
    },
    "time": {},
    "azurerm": {
      "tenant_id": "${var.tenant_id}",
      "subscription_id": "${var.subscription_id}",
      "features": {}
    }
  },
  "resource": {
    "azuread_application_password": {
      "password": {
        "application_object_id": "${azuread_application.prisma_cloud_app.object_id}",
        "end_date_relative": "${var.application_password_expiration}"
      }
    },
    "random_string": {
      "unique_id": {
        "special": false,
        "length": 5,
        "min_lower": 5
      }
    },
    "azuread_service_principal": {
      "prisma_cloud_sp": {
        "application_id": "${azuread_application.prisma_cloud_app.application_id}"
      }
    },
    "time_sleep": {
      "wait_20_seconds": {
        "depends_on": [
          "azurerm_role_definition.custom_prisma_role"
        ],
        "create_duration": "20s"
      }
    },
    "azuread_application": {
      "prisma_cloud_app": {
        "web": {
          "homepage_url": "https://www.paloaltonetworks.com/prisma/cloud"
        },
        "display_name": "Prisma Cloud App ${random_string.unique_id.result}"
      }
    },
    "random_password": {
      "application_password": {
        "special": true,
        "length": 32
      }
    },
    "azurerm_role_assignment": {
      "assign_builtin_roles": {
        "skip_service_principal_aad_check": true,
        "scope": "/subscriptions/${var.subscription_id}",
        "for_each": "${toset(var.builtin_roles)}",
        "role_definition_name": "${each.key}",
        "principal_id": "${azuread_service_principal.prisma_cloud_sp.id}"
      },
      "assign_custom_prisma_role": {
        "role_definition_id": "${azurerm_role_definition.custom_prisma_role.role_definition_resource_id}",
        "depends_on": [
          "time_sleep.wait_20_seconds"
        ],
        "skip_service_principal_aad_check": true,
        "scope": "/subscriptions/${var.subscription_id}",
        "principal_id": "${azuread_service_principal.prisma_cloud_sp.id}"
      }
    },
    "azurerm_role_definition": {
      "custom_prisma_role": {
        "assignable_scopes": [
          "/subscriptions/${var.subscription_id}"
        ],
        "permissions": {
          "actions": "${var.custom_role_actions}",
          "not_actions": []
        },
        "scope": "/subscriptions/${var.subscription_id}",
        "name": "Prisma Cloud ${random_string.unique_id.result}",
        "timeouts": {
          "read": "5m",
          "create": "5m"
        },
        "description": "Prisma Cloud custom role created via Terraform"
      }
    }
  },
  "variable": {
    "tenant_id": {
      "default": "<tenant-id>",
      "type": "string"
    },
    "subscription_id": {
      "default": "<subscription-id>",
      "type": "string"
    },
    "builtin_roles": {
      "default": [
        "Reader"
      ],
      "type": "list"
    },
    "custom_role_actions": {
      "default": [
        "Microsoft.Management/managementGroups/descendants/read",
        "Microsoft.Security/autoProvisioningSettings/read",
        "Microsoft.Security/pricings/read",
        "Microsoft.Security/securityContacts/read",
        "Microsoft.Security/settings/read",
        "Microsoft.Compute/hostGroups/read",
        "Microsoft.Storage/storageAccounts/tableServices/read",
        "Microsoft.Storage/storageAccounts/queueServices/read",
        "Microsoft.Storage/storageAccounts/providers/Microsoft.Insights/diagnosticSettings/read",
        "Microsoft.KeyVault/vaults/read",
        "Microsoft.Network/locations/usages/read",
        "Microsoft.Network/connections/read",
        "Microsoft.Network/applicationGateways/read",
        "Microsoft.Network/loadBalancers/read",
        "Microsoft.Network/networkSecurityGroups/securityRules/read",
        "Microsoft.Network/networkSecurityGroups/defaultSecurityRules/read",
        "Microsoft.Network/applicationSecurityGroups/read",
        "Microsoft.Network/virtualNetworks/read",
        "Microsoft.Network/virtualNetworks/subnets/read",
        "Microsoft.Network/virtualNetworks/virtualNetworkPeerings/read",
        "Microsoft.Network/virtualNetworkGateways/read",
        "Microsoft.Network/routeTables/read",
        "Microsoft.Network/routeTables/routes/read",
        "Microsoft.Network/azurefirewalls/read",
        "Microsoft.Network/firewallPolicies/read",
        "Microsoft.Network/publicIPAddresses/read"
      ],
      "type": "list"
    },
    "cloud_environment": {
      "default": "public",
      "type": "string"
    },
    "application_password_expiration": {
      "default": "8760h",
      "type": "string"
    }
  },
  "terraform": {
    "required_providers": {
      "random": "=3.1.0",
      "azuread": "=2.28.1",
      "time": "=0.7.0",
      "azurerm": "=3.24.0"
    }
  }
}

```

</details>


**Sample Request and Response for Azure Tenant**
<details>
  <summary>Sample Request</summary>

```bash
    curl --request POST 'https://api.prismacloud.io/cas/v1/azure_template' \
          --header 'accept: application/json' \
          --header 'content-type: application/json' \
          --header 'x-redlock-auth: <YOUR_TOKEN>' \
          --data-raw '{
            "accountType": "tenant",
            "tenantId": "<tenant-id>",
            "features": [
              "Agentless Scanning",
              "Auto Protect",
              "Remediation",
              "Serverless Function Scanning"
            ],
            "deploymentType": "azure",
            "rootSyncEnabled": true
          }'
```
</details>

<details>
  <summary>Sample Response</summary>

```json
"output": {
    "f_consent_link": {
      "value": "${var.azure_portal_link}?quickstart=true#blade/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/CallAnAPI/appId/${azuread_application.prisma_cloud_app.application_id}/isMSAApp/"
    },
    "d_application_key_expiration": {
      "value": "${azuread_application_password.password.end_date}"
    },
    "e_service_principal_object_id": {
      "value": "${azuread_service_principal.prisma_cloud_sp.id}"
    },
    "a_active_directory_id": {
      "value": "${var.tenant_id}"
    },
    "c_application_key": {
      "value": "${nonsensitive(azuread_application_password.password.value)}"
    },
    "b_application_id": {
      "value": "${azuread_application.prisma_cloud_app.application_id}"
    }
  },
  "data": {
    "azurerm_management_group": {
      "tenant_root_group": {
        "name": "${var.tenant_id}"
      }
    }
  },
  "provider": {
    "random": {},
    "azuread": {
      "tenant_id": "${var.tenant_id}",
      "environment": "${var.cloud_environment}"
    },
    "time": {},
    "azurerm": {
      "tenant_id": "${var.tenant_id}",
      "features": {}
    }
  },
  "resource": {
    "azuread_application_password": {
      "password": {
        "application_object_id": "${azuread_application.prisma_cloud_app.object_id}",
        "end_date_relative": "${var.application_password_expiration}"
      }
    },
    "random_string": {
      "unique_id": {
        "special": false,
        "length": 5,
        "min_lower": 5
      }
    },
    "azuread_service_principal": {
      "prisma_cloud_sp": {
        "application_id": "${azuread_application.prisma_cloud_app.application_id}"
      }
    },
    "time_sleep": {
      "wait_20_seconds": {
        "depends_on": [
          "azurerm_role_definition.custom_prisma_role"
        ],
        "create_duration": "20s"
      }
    },
    "azuread_application": {
      "prisma_cloud_app": {
        "required_resource_access": {
          "dynamic": {
            "resource_access": {
              "for_each": "${toset(var.active_directory_graph_api_roles)}",
              "content": {
                "id": "${resource_access.value}",
                "type": "Role"
              }
            }
          },
          "resource_app_id": "00000003-0000-0000-c000-000000000000"
        },
        "web": {
          "homepage_url": "https://www.paloaltonetworks.com/prisma/cloud"
        },
        "display_name": "Prisma Cloud App ${random_string.unique_id.result}"
      }
    },
    "random_password": {
      "application_password": {
        "special": true,
        "length": 32
      }
    },
    "azurerm_role_assignment": {
      "assign_builtin_roles": {
        "skip_service_principal_aad_check": true,
        "scope": "${data.azurerm_management_group.tenant_root_group.id}",
        "for_each": "${toset(var.builtin_roles)}",
        "role_definition_name": "${each.key}",
        "principal_id": "${azuread_service_principal.prisma_cloud_sp.id}"
      },
      "assign_custom_prisma_role": {
        "role_definition_id": "${azurerm_role_definition.custom_prisma_role.role_definition_resource_id}",
        "depends_on": [
          "time_sleep.wait_20_seconds"
        ],
        "skip_service_principal_aad_check": true,
        "scope": "${data.azurerm_management_group.tenant_root_group.id}",
        "principal_id": "${azuread_service_principal.prisma_cloud_sp.id}"
      }
    },
    "azurerm_role_definition": {
      "custom_prisma_role": {
        "assignable_scopes": [
          "${data.azurerm_management_group.tenant_root_group.id}"
        ],
        "permissions": {
          "actions": "${var.custom_role_actions}",
          "not_actions": []
        },
        "scope": "${data.azurerm_management_group.tenant_root_group.id}",
        "name": "prisma-cloud-policy-${random_string.unique_id.result}",
        "timeouts": {
          "read": "5m",
          "create": "5m"
        },
        "description": "Prisma Cloud custom role created via Terraform"
      }
    }
  },
  "variable": {
    "tenant_id": {
      "default": "f597bfbe-067c-4622-aaf7-b88bc8f6fa41",
      "type": "string"
    },
    "active_directory_graph_api_roles": {
      "default": [
        "df021288-bdef-4463-88db-98f22de89214",
        "246dd0d5-5bd0-4def-940b-0421030a5b68",
        "5b567255-7703-4780-807c-7be8301ae99b",
        "98830695-27a2-44f7-8c18-0c3ebc9698f6",
        "230c1aed-a721-4c5d-9cb4-a90514e508ef",
        "dbb9058a-0e50-45d7-ae91-66909b5d4664",
        "9a5d68dd-52b0-4cc2-bd40-abcf44ac3a30",
        "7ab1d382-f21e-4acd-a863-ba3e13f7da61"
      ],
      "type": "list"
    },
    "builtin_roles": {
      "default": [
        "Reader"
      ],
      "type": "list"
    },
    "azure_portal_link": {
      "default": "https://portal.azure.com/",
      "type": "string"
    },
    "custom_role_actions": {
      "default": [
        "Microsoft.Management/managementGroups/descendants/read",
        "Microsoft.Security/autoProvisioningSettings/read",
        "Microsoft.Security/pricings/read",
        "Microsoft.Security/securityContacts/read",
        "Microsoft.Security/settings/read",
        "Microsoft.Compute/hostGroups/read",
        "Microsoft.Storage/storageAccounts/tableServices/read",
        "Microsoft.Storage/storageAccounts/queueServices/read",
        "Microsoft.Storage/storageAccounts/providers/Microsoft.Insights/diagnosticSettings/read",
        "Microsoft.KeyVault/vaults/read",
        "Microsoft.Network/locations/usages/read",
        "Microsoft.Network/connections/read",
        "Microsoft.Network/applicationGateways/read",
        "Microsoft.Network/loadBalancers/read",
        "Microsoft.Network/networkSecurityGroups/securityRules/read",
        "Microsoft.Network/networkSecurityGroups/defaultSecurityRules/read",
        "Microsoft.Network/applicationSecurityGroups/read",
        "Microsoft.Network/virtualNetworks/read",
        "Microsoft.Network/virtualNetworks/subnets/read",
        "Microsoft.Network/virtualNetworks/virtualNetworkPeerings/read",
        "Microsoft.Network/virtualNetworkGateways/read",
        "Microsoft.Network/routeTables/read",
        "Microsoft.Network/routeTables/routes/read",
        "Microsoft.Network/azurefirewalls/read",
        "Microsoft.Network/firewallPolicies/read",
        "Microsoft.Network/publicIPAddresses/read",
        "Microsoft.Network/ddosProtectionPlans/read",
        "Microsoft.Network/frontDoorWebApplicationFirewallPolicies/read",
        "Microsoft.Resources/subscriptions/resourceGroups/read",
        "Microsoft.Resources/Resources/read",
        "Microsoft.Authorization/locks/read",
        "Microsoft.Authorization/policyAssignments/read",
        "Microsoft.Authorization/classicAdministrators/read",
        "Microsoft.Authorization/permissions/read",
        "Microsoft.Authorization/policyDefinitions/read",
        "Microsoft.Authorization/roleDefinitions/read",
        "Microsoft.Authorization/roleAssignments/read",
        "Microsoft.ContainerInstance/containerGroups/read",
        "Microsoft.ContainerRegistry/registries/read",
        "Microsoft.ContainerRegistry/registries/metadata/read",
        "Microsoft.ContainerRegistry/registries/webhooks/getCallbackConfig/action",
        "Microsoft.ContainerService/managedClusters/read",
        "Microsoft.Compute/disks/read",
        "Microsoft.Compute/availabilitySets/read",
        "Microsoft.Compute/virtualMachines/read",
        "Microsoft.Compute/virtualMachines/instanceView/read",
        "Microsoft.Compute/virtualMachines/extensions/read",
        "Microsoft.Compute/virtualMachineScaleSets/read",
        "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/read",
        "Microsoft.Compute/virtualMachineScaleSets/virtualmachines/instanceView/read",
        "Microsoft.Sql/managedInstances/read",
        "Microsoft.Sql/servers/read",
        "Microsoft.Sql/servers/securityAlertPolicies/read",
        "Microsoft.Sql/servers/auditingSettings/read",
        "Microsoft.Sql/servers/databases/read",
        "Microsoft.Sql/servers/databases/securityAlertPolicies/read",
        "Microsoft.Sql/servers/databases/transparentDataEncryption/read"

    ],
      "type": "list"
    },
    "cloud_environment": {
      "default": "public",
      "type": "string"
    },
    "application_password_expiration": {
      "default": "8760h",
      "type": "string"
    }
  },
  "terraform": {
    "required_providers": {
      "random": "=3.1.0",
      "azuread": "=2.28.1",
      "time": "=0.7.0",
      "azurerm": "=3.24.0"
    }
  }
}
```

</details>

**Sample Request and Response for Microsoft Entra ID**
<details>
  <summary>Sample Request</summary>

```bash
    curl --request POST 'https://api.prismacloud.io/cas/v1/azure_template' \
          --header 'accept: application/json' \
          --header 'content-type: application/json' \
          --header 'x-redlock-auth: <YOUR_TOKEN>' \
          --data-raw '{
            "accountType": "tenant",
            "tenantId": "<tenant-id>",
            "features": [],
            "deploymentType": "azure"
              }'
```
</details>

<details>
  <summary>Sample Response</summary>

```json
{
  "output": {
    "f_consent_link": {
      "value": "${var.azure_portal_link}?quickstart=true#blade/Microsoft_AAD_RegisteredApps/ApplicationMenuBlade/CallAnAPI/appId/${azuread_application.prisma_cloud_app.application_id}/isMSAApp/"
    },
    "d_application_key_expiration": {
      "value": "${azuread_application_password.password.end_date}"
    },
    "e_service_principal_object_id": {
      "value": "${azuread_service_principal.prisma_cloud_sp.id}"
    },
    "a_active_directory_id": {
      "value": "${var.tenant_id}"
    },
    "c_application_key": {
      "value": "${nonsensitive(azuread_application_password.password.value)}"
    },
    "b_application_id": {
      "value": "${azuread_application.prisma_cloud_app.application_id}"
    }
  },
  "provider": {
    "random": {},
    "azuread": {
      "tenant_id": "${var.tenant_id}",
      "environment": "${var.cloud_environment}"
    },
    "time": {}
  },
  "resource": {
    "azuread_application_password": {
      "password": {
        "application_object_id": "${azuread_application.prisma_cloud_app.object_id}",
        "end_date_relative": "${var.application_password_expiration}"
      }
    },
    "random_string": {
      "unique_id": {
        "special": false,
        "length": 5,
        "min_lower": 5
      }
    },
    "azuread_service_principal": {
      "prisma_cloud_sp": {
        "application_id": "${azuread_application.prisma_cloud_app.application_id}"
      }
    },
    "azuread_application": {
      "prisma_cloud_app": {
        "required_resource_access": {
          "dynamic": {
            "resource_access": {
              "for_each": "${toset(var.active_directory_graph_api_roles)}",
              "content": {
                "id": "${resource_access.value}",
                "type": "Role"
              }
            }
          },
          "resource_app_id": "00000003-0000-0000-c000-000000000000"
        },
        "web": {
          "homepage_url": "https://www.paloaltonetworks.com/prisma/cloud"
        },
        "display_name": "Prisma Cloud App ${random_string.unique_id.result}"
      }
    },
    "random_password": {
      "application_password": {
        "special": true,
        "length": 32
      }
    }
  },
  "variable": {
    "tenant_id": {
      "default": "<tenant-id>",
      "type": "string"
    },
    "active_directory_graph_api_roles": {
      "default": [
        "df021288-bdef-4463-88db-98f22de89214",
        "246dd0d5-5bd0-4def-940b-0421030a5b68",
        "5b567255-7703-4780-807c-7be8301ae99b",
        "98830695-27a2-44f7-8c18-0c3ebc9698f6",
        "230c1aed-a721-4c5d-9cb4-a90514e508ef",
        "dbb9058a-0e50-45d7-ae91-66909b5d4664",
        "9a5d68dd-52b0-4cc2-bd40-abcf44ac3a30",
        "7ab1d382-f21e-4acd-a863-ba3e13f7da61"
      ],
      "type": "list"
    },
    "azure_portal_link": {
      "default": "https://portal.azure.com/",
      "type": "string"
    },
    "cloud_environment": {
      "default": "public",
      "type": "string"
    },
    "application_password_expiration": {
      "default": "8760h",
      "type": "string"
    }
  },
  "terraform": {
    "required_providers": {
      "random": "=3.1.0",
      "azuread": "=2.28.1",
      "time": "=0.7.0",
      "azurerm": "=3.24.0"
    }
  }
}

```

</details>



## 3. Register an Application and Create Corresponding Roles in the Azure Portal

  1. Execute the Azure terraform template generated in Step 2 on the Azure Portal and copy the script output.
  2. Grant admin consent to all the Graph API Permissions.

## 4. Onboard the Azure Tenant on Prisma Cloud

Add Azure Account by using [Add Azure Account API](/prisma-cloud/api/cspm/add-azure-cloud-account/) ![alt text](/icons/api-icon-pan-dev.svg). Use the credentials, features, and states obtained in the previous steps in the request payload.

Provide the details for the Add Azure Account API Parameters according to the following mapping:

Add Azure Account API Parameters | Terraform Template Keys
-------------------------------- | -----------------------
clientId | b_application_id
key | c_application_key
servicePrincipalId | e_service_principal_object_id

> **Note:** By default, the supported features list will contain **Cloud Visibility Compliance and Governance**. Do not include it as a feature in the supported feature request body parameter. An empty features list indicates that the default capabilities under **Cloud Visibility Compliance and Governance** are enabled.

<details>
<summary>Sample Request for Azure Subscription</summary>

```bash
curl -v --request POST 'https://api.prismacloud.io/cas/v1/azure_account' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-redlock-auth: <YOUR_TOKEN>' \
--data-raw '{
  "clientId": "<application-id>",
  "cloudAccount": {
    "accountId": "<subscription-id>",
    "accountType": "account",
    "enabled": true,
    "name": "Azure Account",
    "groupIds": [
      "<group-id>"
    ]
  },
  "environmentType": "azure",
  "key": "<client-secret>",
  "monitorFlowLogs": true,
  "servicePrincipalId": "<enterprise-application-object-id>",
  "tenantId": "<tenant-id>",
  "features": [
    {
      "name": "Agentless Scanning",
      "state": "enabled"
    },
    {
      "name": "Auto Protect",
      "state": "enabled"
    },
    {
      "name": "Remediation",
      "state": "enabled"
    },
    {
      "name": "Serverless Function Scanning",
      "state": "enabled"
    }
  ]
}'
```
</details>

<details>
<summary>Sample Request for Azure Tenant</summary>

```bash
curl -v --request POST 'https://api.prismacloud.io/cas/v1/azure_account' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-redlock-auth: <YOUR_TOKEN>' \
--data-raw 'curl -v --request POST 'https://api.prismacloud.io/cas/v1/azure_account' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-redlock-auth: <YOUR_TOKEN>' \
--data-raw '{
  "clientId": "<client-id>",
  "cloudAccount": {
    "accountType": "tenant",
    "enabled": true,
    "name": "Azure Account"
  },
  "environmentType": "azure",
  "key": "<client-secret>",
  "monitorFlowLogs": true,
  "servicePrincipalId": "<enterprise-application-object-id>",
  "tenantId": "<tenant-id>",
  "features": [
    {
      "name": "Agentless Scanning",
      "state": "enabled"
    },
    {
      "name": "Auto Protect",
      "state": "enabled"
    },
    {
      "name": "Remediation",
      "state": "enabled"
    },
    {
      "name": "Serverless Function Scanning",
      "state": "enabled"
    }
  ],
  "defaultAccountGroupId": "<default-account-group-id>",
  "rootSyncEnabled": true,
  "hierarchySelection": [
    {
      "displayName": "Tenant Root Group",
      "nodeType": "TENANT",
      "resourceId": "<tenant-id>",
      "selectionType": "ALL"
    }
  ]
}'

```
</details>

<details>
<summary>Sample Request for Microsoft Entra ID</summary>

```bash
curl -v --request POST 'https://api.prismacloud.io/cas/v1/azure_account' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-redlock-auth: <YOUR_TOKEN>' \
--data-raw '{
  "clientId": "<client-id>",
  "cloudAccount": {
    "accountType": "tenant",
    "enabled": true,
    "name": "Azure Account",
    "groupIds": [
      "<group-id>"
    ]
  },
  "environmentType": "azure",
  "key": "<client-secret>",
  "monitorFlowLogs": false,
  "servicePrincipalId": "<enterprise-application-object-id>",
  "tenantId": "<tenant-id>",
  "features": []
}'

```
</details>

<details>
  <summary> Sample Response </summary>

```
  200 (Success)
```
</details>