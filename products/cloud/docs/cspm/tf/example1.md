---
id: tf_example1
title: Provision Compliance Standard (and requirement/sections), with Saved Searches and Policies
sidebar_label: Provisioning Example
description: Terraform Example
---

:::note
This is a simplified example. Full example details and folder structure are in this GitHub repository:
https://github.com/solalraveh/prismacloud_terraform

A more detailed example, using modules, is available in this GitHub repository:
https://github.com/solalraveh/prismacloud_terraform_w_modules
:::

## README
```bash
# prismacloud_terraform

Working TF module to provision a compliance standard (with requirement and section), RQL search, saved search and policy from it that ties to the compliance standard.

The provider config file is/can be expected at the ".prismacloud_auth.json" file.
An example config structure can look like:
---
{
    "url": "api.eu.prismacloud.io", 
    "username": "yada_access_key", 
    "password": "yada_secret_key", 
    "protocol": "https"
}
---
Another config parameter might be necessary if you do not opt for access/secret key but rather username/pass, that will be: "customer_name" and corresponding env variable "PRISMACLOUD_CUSTOMER_NAME".
If you use access/secret key, that would not be necessary. 

Unless if you want to put the provider configs in a config file, then export your env var, similar to:

---
export PRISMACLOUD_USERNAME=yada_access_key
export PRISMACLOUD_PASSWORD=yada_secret_key
export PRISMACLOUD_URL=api.eu.prismacloud.io
export PRISMACLOUD_PROTOCOL=https
---

Full details at:
https://registry.terraform.io/providers/PaloAltoNetworks/prismacloud/latest/docs
```

## Main .tf file:
```bash
terraform {
  required_providers {
    prismacloud = {
      source = "PaloAltoNetworks/prismacloud"
      version = ">=1.1.0"
    }
  }
}

# Configure the prismacloud provider
provider "prismacloud" {
    #json_config_file = ".prismacloud_auth.json"
}

resource "prismacloud_compliance_standard" "CS_PANW" {
    name = "PANW"
    description = "Compliance Standards PANW"
}

resource "prismacloud_compliance_standard_requirement" "CSR_PANW_TEAM1" {
    cs_id = prismacloud_compliance_standard.CS_PANW.cs_id
    name = "PANW - Building Blocks"
    description = "PANW Building Blocks"
    requirement_id = "PANW Building Blocks"
}

resource "prismacloud_compliance_standard_requirement_section" "CSRS_PANW_TEAM1_EC2" {
    csr_id = prismacloud_compliance_standard_requirement.CSR_PANW_TEAM1.csr_id
    section_id = "EC2"
    description = "Requirement Section for EC2"
}

resource "prismacloud_rql_search" "x" {
    search_type = "config"
    query = "config from cloud.resource where api.name = 'aws-ec2-key-pair' AND json.rule = keyName exists"
    time_range {
        relative {
            unit = "hour"
            amount = 24
        }
    }
}

resource "prismacloud_saved_search" "example" {
    name = var.policy_name
    description = var.description
    search_id = prismacloud_rql_search.x.search_id
    query = prismacloud_rql_search.x.query
    time_range {
        relative {
            unit = prismacloud_rql_search.x.time_range.0.relative.0.unit
            amount = prismacloud_rql_search.x.time_range.0.relative.0.amount
        }
    }
}

resource "prismacloud_policy" "this" {
    name                        = var.policy_name
    policy_type                 = var.policy_type
    description                 = var.description
    recommendation              = var.remediation
    restrict_alert_dismissal    = var.restrict_alert_dismissal
    enabled                     = var.enabled
    severity                    = var.policy_severity
    cloud_type                  = var.policy_cloud
    rule {
        name        = var.policy_name
        criteria    = prismacloud_saved_search.example.search_id
        rule_type   = var.rule_type
        parameters  = {
            "savedSearch": true,
            "withIac": false,
        }
    }
    compliance_metadata {
      compliance_id     = prismacloud_compliance_standard_requirement_section.CSRS_PANW_TEAM1_EC2.csrs_id
      custom_assigned = true
      requirement_id = prismacloud_compliance_standard_requirement.CSR_PANW_TEAM1.requirement_id
      requirement_name = prismacloud_compliance_standard_requirement.CSR_PANW_TEAM1.name
      section_id = prismacloud_compliance_standard_requirement_section.CSRS_PANW_TEAM1_EC2.section_id
      standard_name = prismacloud_compliance_standard.CS_PANW.name
      section_description = prismacloud_compliance_standard_requirement_section.CSRS_PANW_TEAM1_EC2.description
      standard_description = prismacloud_compliance_standard.CS_PANW.description
      #only mandatory parameter is compliance_id which corresponds to the section ID (not requirement and not compliance. section ID will identify those 2 automatically).
    }
}
```

## terraform.tfvars
```bash
policy_name = "test aws EC2s"
policy_type = "config"
description = "yada"
remediation = "yada"
restrict_alert_dismissal = "false"
enabled = "true"
policy_severity = "medium"
policy_cloud = "aws"
rule_type = "Config"
```

## variables.tf
```bash
variable "policy_name" {
  type = string
}

variable "policy_type" {
  type = string
}

variable "description" {
  type = string
}

variable "remediation" {
  type = string
}

variable "restrict_alert_dismissal" {
  type = bool
}

variable "enabled" {
  type = bool
}

variable "policy_severity" {
  type = string
}

variable "policy_cloud" {
  type = string
}

variable "rule_type" {
  type = string
}
```