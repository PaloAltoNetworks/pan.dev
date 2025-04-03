---
hide_title: true
id: bootstrap
keywords:
- pan-os
- panos
- firewall
- configuration
- terraform
- vmseries
- vm-series
- swfw
- software-firewalls
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Bootstrap
title: Palo Alto Networks Bootstrap Module for Azure
---

# Palo Alto Networks Bootstrap Module for Azure

A terraform module for deploying a storage account and the dependencies required to
[bootstrap a VM-Series firewalls in Azure](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/bootstrap-the-vm-series-firewall/bootstrap-the-vm-series-firewall-in-azure.html#idd51f75b8-e579-44d6-a809-2fafcfe4b3b6).

It can create (or source an existing) Azure Storage Account and it can create (or source) multiple File Shares withing the Storage
Account and upload files to them. When creating File Shares each share will contain a folder structure required by the bootstrap
package. When sourcing existing shares, you can disable the folder structure creation, but keep in mind that the folders have to
present on the share before you try to upload any files to them.

The file uploading can be done in two ways:

1. either by specifying single files or
2. by providing a path to a local bootstrap package.

Keep in mind that if you provide both, the former takes precedence by the latter, meaning that when uploaded, each single file
specification will override files from the local bootstrap package.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/bootstrap) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/bootstrap)

## Usage

For more *real life* code please check [examples folder](../../examples/).
The examples below are just showing 3 typical use cases.

### Empty Storage account

The module is used only to create a Storage Account with module defaults where possible.

```hcl
module "empty_storage" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/bootstrap"

  name                = "someemptystorage"
  resource_group_name = "rg-name"
  region          = "North Europe"
}
```

### Full bootstrap storage

This code will create a storage account for 3 NGFWs. Please **note** that:

- we will override the default access tier from `Cool` to `Hot` and increase the default quota to 20GB
- we will lower the default TLS to 1.1 and limit access to the Storage Account to one public IP
- `vm01` and `vm02` will use a full bootstrap package stored locally under the `bootstrap_package` path
- for `vm01` we will additionally overwrite some files from the bootstrap package
- `vm03` will not use a full bootstrap package, we will upload just a single file to the Storage Account. Additionally we will
    override the `access_tier` for this File Share to `Cool` and the quota to 1GB.

```hcl
module "bootstrap" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/bootstrap"

  name                = "samplebootstrapstorage"
  resource_group_name = "rg-name"
  region          = "North Europe"

  file_shares_configuration = {
    access_tier = "Hot"
    quota       = 20
  }
  storage_network_security = {
    min_tls_version    = "TLS1_1"
    allowed_public_ips = ["1.1.1.1/32"] # TODO: Whitelist public IP addresses that will be used to access storage account
  }
  file_shares = {
    "vm01" = {
      name                   = "vm01"
      bootstrap_package_path = "bootstrap_package"
      bootstrap_files = {
        "files/init-cfg.txt"         = "config/init-cfg.txt"
        "files/nested/bootstrap.xml" = "config/bootstrap.xml"
      }
    }
    "vm02" = {
      name                   = "vm02"
      bootstrap_package_path = "./bootstrap_package/"
    }
    "vm03" = {
      name        = "vm03"
      access_tier = "Cool"
      quota       = 1
      bootstrap_files = {
        "files/init-cfg.txt" = "config/init-cfg.txt"
      }
    }
  }
}
```

### Source existing Storage Account and File Share

The sample below shows how to source an existing Storage Account with an existing File Share.

Please **note** that we will also skip bootstrap package folder structure creation. The sourced File Share should have this folder
structure already present.

```hcl
module "existing_storage" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/bootstrap"

  storage_account = {
    create = false
  }  
  name                   = "sampleexistingstorage"
  resource_group_name    = "rg-name"

  file_shares_configuration = {
    create_file_shares            = false
    disable_package_dirs_creation = true
  }
  file_shares = {
    existing_share = {
      name                   = "bootstrap"
      bootstrap_package_path = "bootstrap_package"
    }
  }
}
```

## MD5 file hashes

This module uses MD5 hashes to verify file content change. This means that any file modification done between Terraform runs will
be discovered and the remote file will be overwritten. This has some implications though.

The module can calculate hashes for the existing files - any files that were present before Terraform run.

If however you are creating some files on the fly (templating for instance) you have to provide the MD5 hashes yourself. For more
details refer to the [var.file_shares](#file_shares) variable documentation.

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 4.9

### Providers

- `azurerm`, version: ~> 4.9



### Resources

- `storage_account` (managed)
- `storage_account_network_rules` (managed)
- `storage_share` (managed)
- `storage_share_directory` (managed)
- `storage_share_file` (managed)
- `storage_account` (data)
- `storage_share` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | Name of the Storage Account.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`storage_account`](#storage_account) | `object` | A map controlling basic Storage Account configuration.
[`storage_network_security`](#storage_network_security) | `object` | A map defining network security settings for a new storage account.
[`file_shares_configuration`](#file_shares_configuration) | `object` | A map defining common File Share setting.
[`file_shares`](#file_shares) | `map` | Definition of File Shares.

### Outputs

Name |  Description
--- | ---
`storage_account_name` | The Azure Storage Account name. For either created or sourced
`storage_account_primary_access_key` | The primary access key for the Azure Storage Account. For either created or sourced
`file_share_urls` | The File Shares' share URL used for bootstrap configuration.

### Required Inputs details

#### name

Name of the Storage Account.
Either a new or an existing one (depending on the value of `storage_account.create`).

The name you choose must be unique across Azure. The name also must be between 3 and 24 characters in length, and may include
only numbers and lowercase letters.


Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### resource_group_name

The name of the Resource Group to use.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### region

The name of the Azure region to deploy the resources in.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### storage_account

A map controlling basic Storage Account configuration.

Following properties are available:

- `create`           - (`bool`, optional, defaults to `true`) controls if the Storage Account is created or sourced.
- `replication_type` - (`string`, optional, defaults to `LRS`) only for newly created Storage Accounts, defines the replication
                       type used. Can be one of the following values: `LRS`, `GRS`, `RAGRS`, `ZRS`, `GZRS` or `RAGZRS`.
- `kind`             - (`string`, optional, defaults to `StorageV2`) only for newly created Storage Accounts, defines the
                       account type. Can be one of the following: `BlobStorage`, `BlockBlobStorage`, `FileStorage`, `Storage`
                       or `StorageV2`.
- `tier`             - (`string`, optional, defaults to `Standard`) only for newly created Storage Accounts, defines the
                       account tier. Can be either `Standard` or `Premium`. Note, that for `kind` set to `BlockBlobStorage` or
                       `FileStorage` the `tier` can only be set to `Premium`.
- `blob_retention`   - (`number`, optional, defaults to Azure default) specifies the number of days that the blob should be
                       retained before irreversibly deleted. When set to `0`, soft delete is disabled for the Storage Account.


Type: 

```hcl
object({
    create           = optional(bool, true)
    replication_type = optional(string, "LRS")
    kind             = optional(string, "StorageV2")
    tier             = optional(string, "Standard")
    blob_retention   = optional(number)
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### storage_network_security

A map defining network security settings for a new storage account.

When not set or set to `null` it will disable any network security setting.

When you decide define this setting, at least one of `allowed_public_ips` or `allowed_subnet_ids` has to be defined.
Otherwise you will cut anyone off the storage account. This will have implications on this Terraform code as it operates on
File Shares. Files Shares API comes under this networks restrictions.

Following properties are available:

- `min_tls_version`     - (`string`, optional, defaults to `TLS1_2`) minimum supported TLS version.
- `allowed_public_ips`  - (`list`, optional, defaults to `[]`) list of IP CIDR ranges that are allowed to access the Storage
                          Account. Only public IPs are allowed, RFC1918 address space is not permitted.
- `allowed_subnet_ids`  - (`list`, optional, defaults to `[]`) list of the allowed VNet subnet ids. Note that this option
                          requires network service endpoint enabled for Microsoft Storage for the specified subnets.
                          If you are using [vnet module](../vnet), set `storage_private_access` to true for the
                          specific subnet.


Type: 

```hcl
object({
    min_tls_version    = optional(string, "TLS1_2")
    allowed_public_ips = optional(list(string), [])
    allowed_subnet_ids = optional(list(string), [])
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### file_shares_configuration

A map defining common File Share setting.

Any of this can be overridden in a particular File Share definition. See [`file_shares`](#file_shares) variable for details.

Following options are available:
  
- `create_file_shares`            - (`bool`, optional, defaults to `true`) controls if the File Shares specified in the
                                    `file_shares` variable are created or sourced, if the latter, the storage account also 
                                    has to be sourced.
- `disable_package_dirs_creation` - (`bool`, optional, defaults to `false`) for sourced File Shares, controls if the bootstrap
                                    package folder structure is created.
- `quota`                         - (`number`, optional, defaults to `10`) maximum size of a File Share in GB, a value between
                                    1 and 5120 (5TB).
- `access_tier`                   - (`string`, optional, defaults to `Cool`) access tier for a File Share, can be one of: 
                                    "Cool", "Hot", "Premium", "TransactionOptimized". 


Type: 

```hcl
object({
    create_file_shares            = optional(bool, true)
    disable_package_dirs_creation = optional(bool, false)
    quota                         = optional(number, 10)
    access_tier                   = optional(string, "Cool")
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### file_shares

Definition of File Shares.

This is a map of objects where each object is a File Share definition. There are situations where every firewall can use the
same bootstrap package. But there are also situations where each firewall (or a group of firewalls) need a separate one.

This configuration parameter can help you to create multiple File Shares, per your needs, w/o multiplying Storage Accounts
at the same time.

Following properties are available per each File Share definition:

- `name`                    - (`string`, required) name of the File Share.
- `bootstrap_package_path`  - (`string`, optional, defaults to `null`) a path to a folder containing a full bootstrap package.
                              For details on the bootstrap package structure see [documentation](https://docs.paloaltonetworks.com/vm-series/9-1/vm-series-deployment/bootstrap-the-vm-series-firewall/bootstrap-package).
- `bootstrap_files`         - (`map`, optional, defaults to `{}`) a map of files that will be copied to the File Share and 
                              build the bootstrap package. 
                                
    Keys are local paths, values - remote. Only Unix like directory separator (`/`) is supported. If `bootstrap_package_path`
    is also specified, these files will overwrite any file uploaded from that path.

- `bootstrap_files_md5`     - (`map`, optional, defaults to `{}`) a map of MD5 hashes for files specified in `bootstrap_files`.

    For static files (present and/or not modified before Terraform plan kicks in) this map can be empty. The MD5 hashes are
    calculated automatically. It's only required for files modified/created by Terraform. You can use `md5` or `filemd5`
    Terraform functions to calculate MD5 hashes dynamically.

    Keys in this map are local paths, variables - MD5 hashes. For files for which you would like to provide MD5 hashes, 
    keys in this map should match keys in `bootstrap_files` property.


Additionally you can override the default `quota` and `access_tier` properties per File Share (same restrictions apply):

- `quota`       - (`number`, optional, defaults to `var.file_shares_configuration.quota`) maximum size of a File Share in GB,
                  a value between 1 and 5120 (5TB).
- `access_tier` - (`string`, optional, defaults to `var.file_shares_configuration.access_tier`) access tier for a File Share,
                  can be one of: "Cool", "Hot", "Premium", "TransactionOptimized".


Type: 

```hcl
map(object({
    name                   = string
    bootstrap_package_path = optional(string)
    bootstrap_files        = optional(map(string), {})
    bootstrap_files_md5    = optional(map(string), {})
    quota                  = optional(number)
    access_tier            = optional(string)
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>