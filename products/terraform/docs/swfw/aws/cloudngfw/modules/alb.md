---
hide_title: true
id: alb
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
sidebar_label: ALB
title: Palo Alto Networks Application Load Balancer Module for AWS
---

# Palo Alto Networks Application Load Balancer Module for AWS

A Terraform module for deploying an Application Load Balancer in AWS cloud. This is always a public Load Balancer with Target Groups of `IP` type. It is intended to be placed just in front of Next Generation Firewalls.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-aws-swfw-modules/tree/main/modules/alb) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/aws/latest/submodules/alb)

## Usage

Example usage:

* The code below is designed to be used with [`vmseries`](../vmseries), [`vpc`](../vpc) and [`subnet_set`](../subnet_set) modules. Check these modules for information on outputs used in this code.
* Firewalls' public facing interfaces are placed in a subnet set called *untrust*.
* There are two rules shown below:
  * `defaults` rule shows a minimum setup that uses only default values
  * `https-custom` rule shows some of the configurable properties and example values.

```
module "public_alb" {
  source = "../../modules/alb"

  lb_name = "public-alb"
  region  = var.region

  subnets                    = { for k, v in module.security_subnet_sets["untrust"].subnets : k => { id = v.id } }
  desync_mitigation_mode     = "monitor"
  vpc_id                     = module.security_vpc.id
  configure_access_logs      = true
  access_logs_s3_bucket_name = "alb-logs-bucket"
  security_groups            = [module.security_vpc.security_group_ids["load_balancer"]]

  rules = {
    "defaults" = {
      protocol = "HTTP"
      listener_rules = {
        "1" = {
          target_port     = 8080
          target_protocol = "HTTP"
          host_headers    = ["default.com", "www.default.com"]
        }
      }
    }
    "https-custom" = {
      protocol        = "HTTPS"
      port            = 443
      certificate_arn = "arn:aws:acm:eu-west-1:123456789012:certificate/97bd27c1-3822-4082-967d-d7084e0fe52f"

      health_check_port     = "80"
      health_check_protocol = "HTTP"
      health_check_matcher  = "302"
      health_check_path     = "/"
      health_check_interval = 10

      listener_rules = {
        "1" = {
          target_port         = 8443
          target_protocol     = "HTTP"
          host_headers        = ["www.custom.org"]
          http_request_method = ["GET", "HEAD"]
        }
        "2" = {
          target_port         = 8444
          target_protocol     = "HTTP"
          host_headers        = ["api.custom.org"]
          http_request_method = ["POST", "OPTIONS", "DELETE"]
        }
      }
    }
  }

  targets = { for k, v in var.vmseries : k => module.vmseries[k].interfaces["untrust"].private_ip }

  tags = var.global_tags
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

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | ~> 5.17 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [aws_lb.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb) | resource |
| [aws_lb_listener.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_listener) | resource |
| [aws_lb_listener_rule.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_listener_rule) | resource |
| [aws_lb_target_group.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group) | resource |
| [aws_lb_target_group_attachment.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_target_group_attachment) | resource |
| [aws_s3_bucket.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket_acl.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_acl) | resource |
| [aws_s3_bucket_policy.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_public_access_block.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_server_side_encryption_configuration.example](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_server_side_encryption_configuration) | resource |
| [aws_s3_bucket_versioning.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) | resource |
| [aws_elb_service_account.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/elb_service_account) | data source |
| [aws_iam_policy_document.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_partition.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) | data source |
| [aws_s3_bucket.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/s3_bucket) | data source |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_access_logs_byob"></a> [access\_logs\_byob](#input\_access\_logs\_byob) | Bring Your Own Bucket - in case you would like to re-use an existing S3 Bucket for Load Balancer's access logs.<br/><br/>NOTICE.<br/>This code does not set up proper `Bucket Policies` for existing buckets. They have to be already in place. | `bool` | `false` | no |
| <a name="input_access_logs_s3_bucket_name"></a> [access\_logs\_s3\_bucket\_name](#input\_access\_logs\_s3\_bucket\_name) | Name of an S3 Bucket that will be used as storage for Load Balancer's access logs.<br/><br/>When used with `configure_access_logs` it becomes the name of a newly created S3 Bucket.<br/>When used with `access_logs_byob` it is a name of an existing bucket. | `string` | `"pantf-alb-access-logs-bucket"` | no |
| <a name="input_access_logs_s3_bucket_prefix"></a> [access\_logs\_s3\_bucket\_prefix](#input\_access\_logs\_s3\_bucket\_prefix) | A path to a location inside a bucket under which access logs will be stored. When omitted defaults to the root folder of a bucket. | `string` | `null` | no |
| <a name="input_configure_access_logs"></a> [configure\_access\_logs](#input\_configure\_access\_logs) | Configure Load Balancer to store access logs in an S3 Bucket.<br/><br/>When used with `access_logs_byob` set to `false` forces creation of a new bucket.<br/>If, however, `access_logs_byob` is set to `true` an existing bucket can be used.<br/><br/>The name of the newly created or existing bucket is controlled via `access_logs_s3_bucket_name`. | `bool` | `false` | no |
| <a name="input_desync_mitigation_mode"></a> [desync\_mitigation\_mode](#input\_desync\_mitigation\_mode) | Determines how the Load Balancer handles requests that might pose a security risk to an application due to HTTP desync.<br/>Defaults to AWS default. For possible values and current defaults refer to [documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb#desync_mitigation_mode). | `string` | `null` | no |
| <a name="input_drop_invalid_header_fields"></a> [drop\_invalid\_header\_fields](#input\_drop\_invalid\_header\_fields) | Indicates whether HTTP headers with header fields that are not valid are removed by the Load Balancer or not. | `bool` | `false` | no |
| <a name="input_enable_cross_zone_load_balancing"></a> [enable\_cross\_zone\_load\_balancing](#input\_enable\_cross\_zone\_load\_balancing) | Enable load balancing between instances in different AZs. Defaults to `true`. <br/>Change to `false` only if absolutely necessary. By default, there is only one FW in each AZ. <br/>Turning this off means 1:1 correlation between a public IP assigned to an AZ and a FW deployed in that AZ. | `bool` | `true` | no |
| <a name="input_idle_timeout"></a> [idle\_timeout](#input\_idle\_timeout) | The time in seconds that the connection to the Load Balancer can be idle. | `number` | `60` | no |
| <a name="input_lb_name"></a> [lb\_name](#input\_lb\_name) | Name of the Load Balancer to be created. | `string` | n/a | yes |
| <a name="input_rules"></a> [rules](#input\_rules) | An object that contains the listener, listener\_rules, target group, and health check configuration. <br/>It consists of maps of applications with their properties, like in the following example:<pre>rules = {<br/>  "application\_name" = {<br/>    protocol            = "communication protocol, since this is an ALB module accepted values are `HTTP` or `HTTPS`"<br/>    port                = "communication port, defaults to protocol's default port"<br/><br/>    certificate\_arn   = "(HTTPS ONLY) this is the arn of an existing certificate, this module will not create one for you"<br/>    ssl\_policy        = "(HTTPS ONLY) name of an ssl policy used by the Load Balancer's listener, defaults to AWS default, for available options see [AWS documentation](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies)"<br/><br/>    health\_check\_protocol            = "this can be either `HTTP` or `HTTPS`, defaults to communication protocol"<br/>    health\_check\_port                = "port used by the target group health check, if omitted, `traffic-port` will be used (which will be the same as communication port)"<br/>    health\_check\_healthy\_threshold   = "number of consecutive health checks before considering target healthy, defaults to 3"<br/>    health\_check\_unhealthy\_threshold = "number of consecutive health checks before considering target unhealthy, defaults to 3"<br/>    health\_check\_interval            = "time between each health check, between 5 and 300 seconds, defaults to 30s"<br/>    health\_check\_timeout             = "health check probe timeout, defaults to AWS default value"<br/>    health\_check\_matcher             = "response codes expected during health check, defaults to `200`"<br/>    health\_check\_path                = "destination used by the health check request, defaults to `/`"<br/><br/>    listener\_rules    = "a map of rules for a listener created for this application, see `listener\_rules` block below for more information<br/>  }<br/>}</pre>The `application_name` key is valid only for letters, numbers and a dash (`-`) - that's an AWS limitation.<br/><br/><hr /><br/>There is always one listener created per application. The listener has always a default action that responds with `503`. This should be treated as a `catch-all` rule. For the listener to send traffic to backends a listener rule has to be created. This is controlled via the `listener_rules` map. <br/><br/>A key in this map is the priority of the listener rule. Priority can be between `1` and `50000` (AWS specifics). All properties under a particular key refer to either rule's condition(s) or the target group that should receive traffic if a rule is met. <br/><br/>Rule conditions - at least one but not more than five of: `host_headers`, `http_headers`, `http_request_method`, `path_pattern`, `query_strings` or `source_ip` has to be set. For more information on what conditions can be set for each type refer to [documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lb_listener_rule#condition-blocks).<br/><br/>Target group - keep in mind that all target group attachments are always pointing to VMSeries' public interfaces. The difference between target groups for each rule is the protocol and/or port to which the traffic is being directed. And these are the only properties you can configure (`target_protocol`, `protocol_version` and `target_port` respectively).<br/><br/>The `listener_rules` map presents as follows:<pre>listener\_rules = {<br/>  "rule\_priority" = {      # string representation of a rule's priority (number from 1 - 50000)<br/>    target\_port           = "port on which the target is listening for requests"<br/>    target\_protocol       = "target protocol, can be `HTTP` or `HTTPS`"<br/>    protocol\_version      = "one of `HTTP1`, `HTTP/2` or `GRPC`, defaults to `HTTP1`"<br/><br/>    round\_robin           = "bool, if set to true (default) the `round-robin` load balancing algorithm is used, otherwise a target attachment with least outstanding requests is chosen.<br/>      <br/>    host\_headers          = "a list of possible host headers, case insensitive, wildcards (`*`,`?`) are supported"<br/>    http\_headers          = "a map of key-value pairs, where key is a name of an HTTP header and value is a list of possible values, same rules apply like for `host\_headers`"<br/>    http\_request\_method   = "a list of possible HTTP request methods, case sensitive (upper case only), strict matching (no wildcards)"<br/>    path\_pattern          = "a list of path patterns (w/o query strings), case sensitive, wildcards supported"<br/>    query\_strings         = "a map of key-value pairs, key is a query string key pattern and value is a query string value pattern, case insensitive, wildcards supported, it is possible to match only a value pattern (the key value should be prefixed with `nokey\_`)"<br/>    source\_ip             = "a list of source IP CDIR notation to match"<br/>  }<br/>}</pre><hr /><br/>EXAMPLE<pre>listener\_rules = {<br/>  "1" = {<br/>    target\_port     = 8080<br/>    target\_protocol = "HTTP"<br/>    host\_headers    = ["public-alb-1050443040.eu-west-1.elb.amazonaws.com"]<br/>    http\_headers = {<br/>      "X-Forwarded-For" = ["192.168.1.*"]<br/>    }<br/>    http\_request\_method = ["GET"]<br/>  }<br/>  "99" = {<br/>    host\_headers    = ["www.else.org"]<br/>    target\_port     = 8081<br/>    target\_protocol = "HTTP"<br/>    path\_pattern    = ["/", "/login.php"]<br/>    query\_strings = {<br/>      "lang"    = "us"<br/>      "nokey\_1" = "test"<br/>    }<br/>    source\_ip = ["10.0.0.0/8"]<br/>  }<br/>}</pre> | `any` | n/a | yes |
| <a name="input_security_groups"></a> [security\_groups](#input\_security\_groups) | A list of security group IDs to use with a Load Balancer.<br/><br/>If security groups are created with a [VPC module](../vpc) you can use output from that module like this:<pre>security\_groups              = [module.vpc.security\_group\_ids["load\_balancer\_security\_group"]]</pre>For more information on the `load_balancer_security_group` key refer to the [VPC module documentation](../vpc). | `list(string)` | n/a | yes |
| <a name="input_subnets"></a> [subnets](#input\_subnets) | Map of subnets used with a Load Balancer. Each key is the availability zone name and the value is an object that has an attribute<br/>`id` identifying AWS subnet.<br/><br/>Examples:<br/><br/>You can define the values directly:<pre>subnets = {<br/>  "us-east-1a" = { id = "snet-123007" }<br/>  "us-east-1b" = { id = "snet-123008" }<br/>}</pre>You can also use output from the `subnet_sets` module:<pre>subnets        = { for k, v in module.subnet\_sets["untrust"].subnets : k => { id = v.id } }</pre> | <pre>map(object({<br/>    id = string<br/>  }))</pre> | n/a | yes |
| <a name="input_tags"></a> [tags](#input\_tags) | Map of AWS tags to apply to all the created resources. | `map(string)` | `{}` | no |
| <a name="input_target_group_az"></a> [target\_group\_az](#input\_target\_group\_az) | Availability Zones of Target Group ('all' for target group outside of VPC) | `string` | `null` | no |
| <a name="input_targets"></a> [targets](#input\_targets) | A list of backends accepting traffic. For Application Load Balancer all targets are of type `IP`. This is because this is the only option that allows a direct routing between a Load Balancer and a specific VMSeries' network interface. The Application Load Balancer is meant to be always public, therefore the VMSeries IPs should be from the public facing subnet. An example on how to feed this variable with data:<pre>fw\_instance\_ips = { for k, v in var.vmseries : k => module.vmseries[k].interfaces["untrust"].private\_ip }</pre>For format of `var.vmseries` check the [`vmseries` module](../vmseries). The key is the VM name. By using those keys, we can loop through all vmseries modules and take the private IP from the interface that is assigned to the subnet we require. The subnet can be identified by the subnet set name (like above). In other words, the `for` loop returns the following map:<pre>{<br/>  vm01 = "1.1.1.1"<br/>  vm02 = "2.2.2.2"<br/>  ...<br/>}</pre> | `map(string)` | n/a | yes |
| <a name="input_vpc_id"></a> [vpc\_id](#input\_vpc\_id) | ID of the security VPC for the Load Balancer. | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_lb_fqdn"></a> [lb\_fqdn](#output\_lb\_fqdn) | A FQDN for the Load Balancer. |
| <a name="output_target_group"></a> [target\_group](#output\_target\_group) | n/a |
<!-- END_TF_DOCS -->