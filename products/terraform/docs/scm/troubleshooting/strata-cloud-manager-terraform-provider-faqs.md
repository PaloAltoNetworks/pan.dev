---
id: strata-cloud-manager-terraform-provider-faqs
title: Strata Cloud Manager Terraform Provider FAQs
sidebar_label: Terraform FAQs
keywords:
  - Common Services
  - Reference
  - API
---

## General Overview

**Q: What is the Strata Cloud Manager Terraform Provider?**

A: The Strata Cloud Manager Terraform Provider is an official HashiCorp-compatible plugin that allows you to manage your Strata Cloud Manager environment using Infrastructure as Code (IaC). Instead of configuring resources through the Strata Cloud Manager web interface, you define them declaratively in `.tf` files, and Terraform handles provisioning, updates, and deletions automatically.

**Q: What are the benefits of the Strata Cloud Manager Terraform Provider?**

A: With the Strata Cloud Manager Terraform Provider, you get many advantages:

- **Deploy Security Configurations Faster:** The Terraform Provider enables faster deployment by replacing manual web interface navigation with a streamlined, code-driven workflow. Instead of spending time clicking through the web interface, you can push configurations across your entire network instantly and simultaneously with Terraform—reducing manual effort and saving time.
- **Scalability:** The Strata Cloud Manager Terraform Provider allows you to scale your environment without increasing your workload. If you can do it once, you can do it again. By reusing code or leveraging repeatable resource blocks, you can easily ensure a uniform security posture at any scale, whether you are managing five resources or five hundred.
- **Single Source of Truth:** Terraform establishes a single source of truth, eliminating manual errors and automatically detecting drift between your intended state and the live environment—enabling you to maintain predictable, reliable security across your entire network.
- **Version Control:** Since your security environment is defined as code, every configuration change can be tracked with version control. You get full visibility into changes and can roll back instantly if needed—keeping your network secure, consistent, and fully auditable.

**Q: Why was the Strata Cloud Manager Terraform Provider built?**

A: Being a network security practitioner has never been more demanding. Networks are growing in scale and complexity, so managing security configurations manually has become slower, riskier, and increasingly difficult to maintain.

- **Operational Bottlenecks:** Manual provisioning is too slow for modern, agile business demands.
- **High Risk of Error:** Hand-keyed changes inevitably introduce mistakes, outages, and security gaps.
- **Configuration Drift:** Without a single source of truth, live environments fall out of sync with intended designs over time, making them nearly impossible to troubleshoot or confidently maintain.
- **Lack of Auditability:** Tracking who made a change, and why, is difficult without a centralized system.

You can now automate your configuration through Infrastructure as Code (IaC) using the Strata Cloud Manager Terraform Provider.

**Q: Where can I find the official documentation for the Strata Cloud Manager Terraform Provider?**

A: The full provider documentation is available on the Terraform Registry. Visit the Official Strata Cloud Manager Terraform Provider Page to access a complete list of supported resources and data sources. Each entry includes detailed information, such as Terraform code examples, a detailed schema mapping out all required and optional fields, and import commands.

https://registry.terraform.io/providers/PaloAltoNetworks/scm/latest/docs

**Q: Do I need to know how to code to use the Strata Cloud Manager Terraform Provider?**

A: Not necessarily. Terraform uses its own configuration language (HCL—HashiCorp Configuration Language) which is designed to be human-readable and straightforward. A basic understanding of how `.tf` files are structured is enough to get started, and the Strata Cloud Manager Terraform Registry provides ready-to-use examples for every resource type.

## Platform Support

**Q: Is the Strata Cloud Manager Terraform Provider available for all Strata Cloud Manager users?**

A:

**Q: What are the version requirements?**

A: The provider requires version 1.0.0 or higher. Support for all legacy 0.x.x versions has been discontinued to ensure compatibility with the current Strata Cloud Manager API architecture.

**Q: Which platforms are supported?**

A: Management is limited to Prisma Access and next-generation firewall (NGFW) configurations within Strata Cloud Manager.

**Q: What functional areas can I manage with the provider?**

A: The provider supports the following core capabilities:

- **Security Services:** Define and enforce security policies, including firewall rules, anti-spyware profiles, and URL filtering.
- **Network Services:** Configure core networking components, such as VPN tunnels, interfaces, NAT rules, and routing.
- **Identity Services:** Manage authentication and user access, including LDAP servers, local users, and authentication profiles.
- **Device Settings:** Control firewall device behavior and system configuration, with options like session timeouts, login banners, and service routes.
- **Deployment Services:** Manage cloud deployments and connectivity, such as remote networks, service connections, and sites.
- **Objects:** Create reusable configuration elements, including addresses, services, tags, and schedules.

**Q: What Strata Cloud Manager resources can I manage with the provider?**

A: The provider supports a wide range of Strata Cloud Manager resource types including address objects, tags, security rules, service objects, security profiles, OSPF authentication profiles, tunnel interfaces, and more. Refer to the Strata Cloud Manager Terraform Provider Documentation on the Terraform Registry for the full list of supported resources and data sources.

**Q: How do I identify unsupported objects?**

A: If a resource isn't listed in the official Strata Cloud Manager Terraform Provider Documentation, it is unsupported.

## Prerequisites and Initial Setup

**Q: How do I create a service account for Terraform?**

A: You must have a service account, as you need the Client ID and Client Secret for authentication.

1. Select **System Settings > Identity & Access Management**.
2. Click **Add Identity**.
3. Choose **Service Account** as the Identity Type and complete the required fields. Then, click **Next**.
4. Download and securely store the Client Credentials (ID and Secret). Click **Next**.
5. Assign the service account a role with the minimum permissions required for your automation tasks.
6. Click **Submit**.

For detailed, step-by-step instructions for creating a service account, follow the steps on pan.dev.

**Q: How do I configure my Terraform environment?**

1. Go to the Strata Cloud Manager Terraform Registry.
2. Create a file called `config.tf` in your local project directory.
3. Click **Use Provider** and copy the provided code snippet into your `config.tf` file. This snippet instructs Terraform on which provider and version to fetch, and it includes a placeholder for your connection details.
4. Populate the `scm` provider block with the host, the auth URL, and your authentication details—your Client ID, Client Secret, and TSG ID.

```hcl
provider "scm" {
  host          = "api.sase.paloaltonetworks.com"
  client_id     = "<YOUR_CLIENT_ID>"
  client_secret = "<YOUR_CLIENT_SECRET>"
  scope         = "tsg_id:<YOUR_TSG_ID>"
}
```

5. With your credentials in place, run `terraform init`. This command initializes your workspace, downloads the Strata Cloud Manager provider, and prepares Terraform to manage your security infrastructure.
6. With your environment initialized, you can start creating your configuration. Explore the Official Strata Cloud Manager Provider Documentation to find a complete list of supported resources, Terraform examples, and more.

**Q: What are the mandatory connection parameters?**

A: You must define these parameters in your provider:

| Parameter | Description | Sensitive |
|-----------|-------------|-----------|
| `host` | Strata Cloud Manager API Hostname: `api.sase.paloaltonetworks.com` | No |
| `client_id` | Service Account Client ID | No |
| `client_secret` | Service Account Client Secret | Yes |
| `scope` | TSG ID | No |

## Terraform Commands

**Q: What command must you execute first to prepare your workspace, download the Strata Cloud Manager provider, and set up the backend?**

A: `terraform init`.

**Q: If you want to catch syntax errors or verify directory-level consistency before deploying, which command should you run?**

A: `terraform validate`, which performs a static analysis of the configuration files without accessing remote services.

**Q: How can you preview the exact changes (additions, modifications, and deletions) Terraform intends to make to your environment before actually executing them?**

A: Run `terraform plan`, which reconciles the current state against the desired configuration to generate a detailed execution plan.

**Q: Which command automatically adjusts your configuration files to follow canonical formatting and style conventions?**

A: `terraform fmt`.

**Q: What command pushes your finalized configuration to the Strata Cloud Manager environment, provisioning resources with no mutual dependencies concurrently?**

A: `terraform apply`.

**Q: If a teammate creates an address object manually in the Strata Cloud Manager web interface, which command brings that existing resource under Terraform management without recreating it?**

A: `terraform import`.

**Q: What is the exact syntax for the terraform import command?**

A: The syntax for the `terraform import` command is:

```shell
terraform import [Resource Type].[Resource Name] [Scope Name]:::[ID]
```

Here is an example:

```shell
terraform import scm_snippet.test_snippet All:::8d344a4e-af88-4956-bc75-ff63c0cca9ab
```

**Q: How do you untrack a resource from your Terraform state file (.tfstate) without actually deleting or modifying the live resource in your network environment?**

A: Run `terraform state rm [Resource Type].[Resource Name]`.

**Q: If you need to completely tear down a lab or project, which command systematically removes every tracked resource to leave a clean slate?**

A: `terraform destroy`.

**Q: What command forces Terraform to poll the live Strata Cloud Manager environment and update the local state file to match reality?**

A: `terraform refresh`.

**Q: How can you view a flat list of all the resource addresses that are currently tracked in your state file?**

A: Run `terraform state list`.

## Data Sources

**Q: What are data sources?**

A: Terraform data sources enable you to securely pull live configuration data directly from your Strata Cloud Manager environment without leaving your code editor.

**Q: What are the benefits of data sources?**

A: Here are several key benefits of data sources:

- **Increase Visibility:** Gain immediate, formatted visibility into your existing infrastructure directly within your codebase.
- **Enable Dynamic Inputs:** Leverage the retrieved output, such as Object IDs, as dynamic variables to feed into other resource blocks for complex builds.
- **Detect Configuration Drift:** Compare this live data against your expected state to easily identify unmanaged resources or manual changes made directly in the web interface.

**Q: How do I configure a data source?**

A: Copy the data source block for your target resource from the registry documentation and paste it into your configuration file. This snippet typically includes the data source configuration and an output block to display the retrieved data. Modify the block as needed—for example, updating the `folder` argument to match your target Strata Cloud Manager folder or adjusting the output to surface specific fields. Once configured, run `terraform apply`.

## Resource Management

**Q: How do I handle resources created outside of Terraform (for example, using the Strata Cloud Manager web interface)?**

A: Resources created through the web interface are "unmanaged" and cause configuration drift. To bring them under Terraform's control, you must:

1. Retrieve the resource's unique ID either by querying the API or by using a Strata Cloud Manager data source to query live objects and output their IDs.
2. Create an empty resource block in your `.tf` file to serve as a placeholder.
3. Run `terraform import [Resource Type].[Resource Name] [Scope Name]:::[ID of Object]` to pull the existing object into your state.

Refer to the Import Strata Cloud Manager Snippets to Terraform guide for a step-by-step breakdown.

## Debugging and Error Resolution

**Q: How do I enable logging for the Strata Cloud Manager provider?**

A: You can enable logging at either the provider level or the environment level:

- **Provider Level (Terraform Configuration):** Add the `logging` argument to your provider block and set it to `"debug"` or `"info"`. If left unconfigured, the default state is `"quiet"`.

```hcl
provider "scm" {
  # other configurations...
  logging = "debug"
}
```

- **Environment Level (Terminal):** Set the Terraform logging environment variable in your terminal to see the raw API request and response payloads.

```shell
export TF_LOG=DEBUG
```

**Q: How can I troubleshoot common Terraform errors?**

A: If you are running into issues, here is a quick high-level breakdown for identifying and resolving the most common Terraform errors:

| Error | Potential Cause | Resolution |
|-------|----------------|------------|
| Authentication Error | Credential mismatch or inactive account. | First, verify the Client ID, Client Secret, and TSG ID. Then, ensure the service account is active. |
| Forbidden | Missing IAM roles. | Ensure the service account has sufficient permissions. |
| Attribute Errors | Invalid values or missing required fields. | Cross-reference your `.tf` file with the Strata Cloud Manager Registry schema requirements. |
| Invalid Scope Errors | Object was never present to begin with, or the name in your configuration doesn't match what exists. | First, ensure the values (for example, folder, UUID) in your configuration are correct. Second, if the object isn't present in Strata Cloud Manager, create it. Lastly, if the missing object is a parent resource, create it. |
| State Mismatch: Resource Already Exists | Conflict with manual web interface creation. | Use `terraform import` to bring the existing object into your state. Refer to the Terraform Troubleshooting guide for more details. |
