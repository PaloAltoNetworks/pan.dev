---
id: auto-generated-docs
title: Automatically Generated Pages
sidebar_label: Auto-generated Pages
description: Describing that some pages are automatically generated.
---

## Automatically Generated Pages

Some content in pan.dev is generated elsewhere, not in the pan.dev repository directly. This is important to know, because any changes made directly to the files located in the pan.dev repository for this content could be overwritten and lost. Instances of content generated elsewhere are listed below with further details of the original content source.

### Software Firewall (SWFW) Terraform Documentation

The pages linked from the [Orchestration Hub](https://pan.dev/swfw) which describe References Architectures, Examples and Modules for Terraform are automatically copied from their source repository, using a sync system. These pages are viewable on pan.dev at `https://pan.dev/terraform/docs/swfw/{{cloud-id}}}}/vmseries/{{type}}/`, where `cloud-id` is currently `aws`, `azure` or `gcp`, and `type` is currently `reference-architectures`, `examples` or `modules`.

Changes required to these pages should be made in the source repositories. These are currently:
- AWS: https://github.com/PaloAltoNetworks/terraform-aws-vmseries-modules
- Azure: https://github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules
- GCP: https://github.com/PaloAltoNetworks/terraform-google-vmseries-modules

Any changes made to the README.md files in the `examples` or `modules` directories of the repositories above will be copied to the pan.dev repository in a cloud-specific PR and branch, when a release is performed in the source repository. The changes can then be reviewed and merged using the usual process for pan.dev content.
