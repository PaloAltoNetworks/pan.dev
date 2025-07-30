---
hide_title: true
id: names_generator
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
- aws
pagination_next: null
pagination_prev: null
sidebar_label: Names Generator
title: Palo Alto Networks Flexible Names Generator
---

# Palo Alto Networks Flexible Names Generator

A Terraform module for flexible names generation for resources created in AWS by VM-Series modules.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/names_generator) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/names_generator)

## Usage

In order to invoke the module to generated flexible names for all resources created by Terraform for VM-Series, you need to defined map e.g. as below for combined design example:

```hcl
module "generator" {
  source = "../../modules/names_generator"

  region               = var.region
  name_prefix          = var.name_prefix
  name_template        = var.name_templates.name_template
  template_assignments = var.template_assignments.assigned_template
  names = {
    vpc              = { for k, v in var.vpcs : k => v.name }
    internet_gateway = { for k, v in var.vpcs : k => v.name }
    vpn_gateway      = { for k, v in var.vpcs : k => v.name }
    subnet           = { for _, v in local.subnets : "${v.name}${v.az}" => "${v.name}${v.az}" }
    security_group   = { for _, v in local.security_groups : v.key => v.name }
    route_table = merge(
      { for k, v in var.vpcs : k => "igw_${v.name}" },
      { for _, v in local.subnets : "${v.name}${v.az}" => "${v.name}${v.az}" }
    )
    nat_gateway                           = { for _, v in local.nat_gateways : v.key => v.name }
    transit_gateway                       = { "tgw" : var.tgw.name }
    transit_gateway_route_table           = { for k, v in var.tgw.route_tables : k => v.name }
    transit_gateway_attachment            = { for k, v in var.tgw.attachments : k => v.name }
    gateway_loadbalancer                  = { for k, v in var.gwlbs : k => v.name }
    gateway_loadbalancer_target_group     = { for k, v in var.gwlbs : k => v.name }
    gateway_loadbalancer_endpoint         = { for k, v in var.gwlb_endpoints : k => v.name }
    application_loadbalancer              = { for k, v in var.spoke_albs : k => k }
    application_loadbalancer_target_group = { for _, v in local.alb_tg : v.key => v.value }
    network_loadbalancer                  = { for k, v in var.spoke_nlbs : k => k }
    network_loadbalancer_target_group     = { for _, v in local.nlb_tg : v.key => v.value }
    vm                                    = { for k, v in var.spoke_vms : k => k }
    vmseries                              = { for vmseries in local.vmseries_instances : "${vmseries.group}-${vmseries.instance}" => "${vmseries.group}-${vmseries.instance}" }
    vmseries_network_interface            = { for n in local.vmseries_network_interfaces : "${n.group}-${n.instance}-${n.nic}" => "${n.nic}-${n.instance}" }
    iam_role = {
      security : "vmseries"
      spoke : "spokevm"
    }
    iam_instance_profile = {
      security : "vmseries"
      spoke : "spokevm"
    }
  }
}
```

For each kind of resource output from module can be used e.g. as below for VPC:

```hcl
module "vpc" {
  source = "../../modules/vpc"

  for_each = var.vpcs

  name = module.generator.names.vpc[each.key]
  ...
}
```

or GWLB and its endpoints:

```hcl
module "gwlb" {
  source = "../../../modules/gwlb"

  for_each = var.gwlbs

  name    = module.generator.names.gateway_loadbalancer[each.key]
  ...
}

module "gwlbe_endpoint" {
  source = "../../../modules/gwlb_endpoint_set"

  for_each = var.gwlb_endpoints

  name              = module.generator.names.gateway_loadbalancer_endpoint[each.key]
  ...
}
```

Map of templates needs to be defined in ``terraform.tfvars``:

```hcl
name_templates = {
  name_at_the_end = {
    delimiter = "-"
    parts = [
      { prefix = null },
      { abbreviation = "__default__" },
      { bu = "cloud" },
      { env = "tst" },
      { suffix = "ec1" },
      { name = "%s" },
  ] }
  name_after_abbr = {
    delimiter = "-"
    parts = [
      { prefix = null },
      { abbreviation = "__default__" },
      { name = "%s" },
      { bu = "cloud" },
      { env = "tst" },
      { suffix = "ec1" },
  ] }
  name_with_az = {
    delimiter = "-"
    parts = [
      { prefix = null },
      { abbreviation = "__default__" },
      { name = "%s" },
      { bu = "cloud" },
      { env = "tst" },
      { suffix = "ec1" },
      { az = "__az_numeric__" }, # __az_literal__, __az_numeric__
  ] }
  name_max_32_characters = {
    delimiter = "-"
    parts = [
      { prefix = null },
      { abbreviation = "__default__" },
      { name = "%s" },
      { bu = "cloud" },
      { env = "tst" },
  ] }
}
```

Besides that for each kind template needs to be assigned (or default template needs to be used):

```hcl
template_assignments = {
  default                               = "name_after_abbr"
  subnet                                = "name_with_az"
  route_table                           = "name_with_az"
  nat_gateway                           = "name_at_the_end"
  vm                                    = "name_at_the_end"
  vmseries                              = "name_at_the_end"
  vmseries_network_interface            = "name_at_the_end"
  application_loadbalancer              = "name_max_32_characters"
  application_loadbalancer_target_group = "name_max_32_characters"
  network_loadbalancer                  = "name_max_32_characters"
  network_loadbalancer_target_group     = "name_max_32_characters"
  gateway_loadbalancer                  = "name_max_32_characters"
  gateway_loadbalancer_target_group     = "name_max_32_characters"
}
```

## Reference
<!-- BEGIN_TF_DOCS -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.5.0, < 2.0.0 |
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | ~> 5.17 |

### Providers

No providers.

### Modules

No modules.

### Resources

No resources.

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_abbreviations"></a> [abbreviations](#input\_abbreviations) | Map of abbreviations used for resources (placed in place of "\_\_default\_\_"). | `map(string)` | <pre>{<br/>  "application\_loadbalancer": "alb",<br/>  "application\_loadbalancer\_target\_group": "atg",<br/>  "gateway\_loadbalancer": "gwlb",<br/>  "gateway\_loadbalancer\_endpoint": "gwep",<br/>  "gateway\_loadbalancer\_target\_group": "gwtg",<br/>  "iam\_instance\_profile": "profile",<br/>  "iam\_role": "role",<br/>  "internet\_gateway": "igw",<br/>  "nat\_gateway": "ngw",<br/>  "network\_loadbalancer": "nlb",<br/>  "network\_loadbalancer\_target\_group": "ntg",<br/>  "route\_table": "rt",<br/>  "route\_table\_internet\_gateway": "rt",<br/>  "security\_group": "sg",<br/>  "subnet": "snet",<br/>  "transit\_gateway": "tgw",<br/>  "transit\_gateway\_attachment": "att",<br/>  "transit\_gateway\_route\_table": "trt",<br/>  "vm": "vm",<br/>  "vmseries": "vm",<br/>  "vmseries\_network\_interface": "nic",<br/>  "vpc": "vpc",<br/>  "vpn\_gateway": "vgw"<br/>}</pre> | no |
| <a name="input_az_map_literal_to_numeric"></a> [az\_map\_literal\_to\_numeric](#input\_az\_map\_literal\_to\_numeric) | Map of number used instead of letters for AZs (placed in place of "\_\_az\_numeric\_\_"). | `map(string)` | <pre>{<br/>  "a": 1,<br/>  "b": 2,<br/>  "c": 3,<br/>  "d": 4,<br/>  "e": 5,<br/>  "f": 6,<br/>  "g": 7,<br/>  "h": 8,<br/>  "i": 9<br/>}</pre> | no |
| <a name="input_name_prefix"></a> [name\_prefix](#input\_name\_prefix) | Prefix used in names for the resources | `string` | n/a | yes |
| <a name="input_name_templates"></a> [name\_templates](#input\_name\_templates) | Map of templates used to generate names. Each template is defined by list of objects. Each object contains 1 element defined by key and string value.<br/><br/>Important:<br/>0. Delimiter specifies the delimiter used between all components of the new name.<br/>1. Elements with key `prefix` (value is not important) will be replaced with value of the `name_prefix` variable (e.g. `{ prefix = null }`)<br/>2. `%s` will be eventually replaced by resource name<br/>3. `__default__` is a marker that we will be replaced with a default resource abbreviation, anything else will be used literally.<br/>4. `__az_numeric__` is a marker that will be used to replace the availability zone letter indicator with a number (e.g. a->1, b->2, ...)<br/>5. `__az_literal__` is a marker that will be used to replace the full availability zone name with a letter (e.g. `eu-central-1a` will become `a`)<br/>6. Order matters<br/><br/>Example:<br/><br/>name\_template = {<br/>  name\_at\_the\_end = {<br/>    delimiter = "-"<br/>    parts = [<br/>      { prefix = null },<br/>      { abbreviation = "\_\_default\_\_" },<br/>      { bu = "cloud" },<br/>      { env = "tst" },<br/>      { suffix = "ec1" },<br/>      { name = "%s" },<br/>  ] }<br/>  name\_after\_abbr = {<br/>    delimiter = "-"<br/>    parts = [<br/>      { prefix = null },<br/>      { abbreviation = "\_\_default\_\_" },<br/>      { name = "%s" },<br/>      { bu = "cloud" },<br/>      { env = "tst" },<br/>      { suffix = "ec1" },<br/>  ] }<br/>  name\_with\_az = {<br/>    delimiter = "-"<br/>    parts = [<br/>      { prefix = null },<br/>      { abbreviation = "\_\_default\_\_" },<br/>      { name = "%s" },<br/>      { bu = "cloud" },<br/>      { env = "tst" },<br/>      { suffix = "ec1" },<br/>      { az = "\_\_az\_numeric\_\_" }, # \_\_az\_literal\_\_, \_\_az\_numeric\_\_<br/>  ] }<br/>  name\_max\_32\_characters = {<br/>    delimiter = "-"<br/>    parts = [<br/>      { prefix = null },<br/>      { abbreviation = "\_\_default\_\_" },<br/>      { name = "%s" },<br/>      { bu = "cloud" },<br/>      { env = "tst" },<br/>  ] }<br/>} | <pre>map(object({<br/>    delimiter = string<br/>    parts     = list(map(string))<br/>  }))</pre> | `{}` | no |
| <a name="input_names"></a> [names](#input\_names) | Map of objects defining names used for resources.<br/><br/>Example:<br/><br/>names = {<br/>  vpc                           = { for k, v in var.vpcs : k => v.name }<br/>  gateway\_loadbalancer          = { for k, v in var.gwlbs : k => v.name }<br/>  gateway\_loadbalancer\_endpoint = { for k, v in var.gwlb\_endpoints : k => v.name }<br/>}<br/><br/>Please take a look combined\_design example, which contains full map for names. | `map(map(string))` | `{}` | no |
| <a name="input_region"></a> [region](#input\_region) | AWS region used to deploy whole infrastructure | `string` | n/a | yes |
| <a name="input_template_assignments"></a> [template\_assignments](#input\_template\_assignments) | Map of templates (used to generate names) assigned to each kind of resource.<br/><br/>Example:<br/><br/>template\_assignments = {<br/>  default                               = "name\_after\_abbr"<br/>  subnet                                = "name\_with\_az"<br/>  route\_table                           = "name\_with\_az"<br/>  nat\_gateway                           = "name\_at\_the\_end"<br/>  vm                                    = "name\_at\_the\_end"<br/>  vmseries                              = "name\_at\_the\_end"<br/>  vmseries\_network\_interface            = "name\_at\_the\_end"<br/>  application\_loadbalancer              = "name\_max\_32\_characters"<br/>  application\_loadbalancer\_target\_group = "name\_max\_32\_characters"<br/>  network\_loadbalancer                  = "name\_max\_32\_characters"<br/>  network\_loadbalancer\_target\_group     = "name\_max\_32\_characters"<br/>  gateway\_loadbalancer                  = "name\_max\_32\_characters"<br/>  gateway\_loadbalancer\_target\_group     = "name\_max\_32\_characters"<br/>} | `map(string)` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_names"></a> [names](#output\_names) | Map of generated names for each kind of resources.<br/><br/>Example:<br/><br/>names = {<br/>    vpc                           = {<br/>        app1\_vpc     = "example-vpc-app1-cloud-tst-ec1"<br/>        app2\_vpc     = "example-vpc-app2-cloud-tst-ec1"<br/>        security\_vpc = "example-vpc-security-cloud-tst-ec1"<br/>    }<br/>    gateway\_loadbalancer          = {<br/>        security\_gwlb = "example-gwlb-security-cloud-tst"<br/>    }<br/>    gateway\_loadbalancer\_endpoint = {<br/>        app1\_inbound           = "example-gwep-app1-cloud-tst-ec1"<br/>        app2\_inbound           = "example-gwep-app2-cloud-tst-ec1"<br/>        security\_gwlb\_eastwest = "example-gwep-eastwest-cloud-tst-ec1"<br/>        security\_gwlb\_outbound = "example-gwep-outbound-cloud-tst-ec1"<br/>    }<br/>} |
<!-- END_TF_DOCS -->