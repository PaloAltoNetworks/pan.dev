---
hide_title: true
id: lb_http_ext_global
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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: LB HTTP Ext Global
title: Google Cloud HTTP/HTTPS External Global Load Balancer
---

# Google Cloud HTTP/HTTPS External Global Load Balancer

A simplified GLB, which assumes that all participating instances are equally capable and that all
participating groups are equally capable as well.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/lb_http_ext_global) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/lb_http_ext_global)

## Example

```terraform

module "glb" {
  source                = "../modules/lb_http_ext_global"
  name                  = "my-glb"
  backend_groups        = module.vmseries.instance_group_self_links
  max_rate_per_instance = 50000
}

module "glb_dual_stack" {
  source                = "../modules/lb_http_ext_global"
  name                  = "my-glb-dual-stack"
  backend_groups        = module.vmseries.instance_group_self_links
  max_rate_per_instance = 50000
  ip_version            = "IPV4_IPV6"
}

```

## Caveat emptor

Currently Google Cloud GLB can *only* send traffic to the primary network interface (`nic0`) of a backend instance.
One way to work around this is to use NEGs instead of IGs.

## Instance Group (IG) re-use

IG that backs an Internal TCP/UDP Load Balancer (ILB) enforces balancing_mode=CONNECTIONS:

```ini
Invalid value for field 'resource.backends[0].balancingMode': 'UTILIZATION'. Balancing mode must be CONNECTION for an INTERNAL backend service
```

Thus if you re-use the same IG for this module (HTTP LB) you need balancing_mode=RATE (and specify the max rate - don't worry it's not a circuit breaker). The balancing_mode=UTILIZATION is incompatible with ILB.

## Reference

### Requirements

- `terraform`, version: >= 1.3, < 2.0
- `google`, version: >= 4.54

### Providers

- `google`, version: >= 4.54



### Resources

- `compute_backend_service` (managed)
- `compute_global_address` (managed)
- `compute_global_address` (managed)
- `compute_global_forwarding_rule` (managed)
- `compute_global_forwarding_rule` (managed)
- `compute_global_forwarding_rule` (managed)
- `compute_global_forwarding_rule` (managed)
- `compute_health_check` (managed)
- `compute_ssl_certificate` (managed)
- `compute_target_http_proxy` (managed)
- `compute_target_https_proxy` (managed)
- `compute_url_map` (managed)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | Name for the forwarding rule and prefix for supporting resources.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`ip_version`](#ip_version) | `string` | IP version for the Global address: IPV4, IPV6 or IPV4_IPV6.
[`backend_groups`](#backend_groups) | `map` | The map containing the names of instance groups (IGs) or network endpoint groups (NEGs) to serve.
[`backend_port_name`](#backend_port_name) | `string` | The port_name of the backend groups that this load balancer will serve (default is 'http').
[`backend_protocol`](#backend_protocol) | `string` | The protocol used to talk to the backend service.
[`health_check_name`](#health_check_name) | `string` | Name for the health check.
[`health_check_port`](#health_check_port) | `number` | TCP port to use for health check.
[`timeout_sec`](#timeout_sec) | `number` | Timeout to consider a connection dead, in seconds (default 30).
[`balancing_mode`](#balancing_mode) | `string` | .
[`capacity_scaler`](#capacity_scaler) | `number` | .
[`max_connections_per_instance`](#max_connections_per_instance) | `number` | .
[`max_rate_per_instance`](#max_rate_per_instance) | `number` | .
[`max_utilization`](#max_utilization) | `number` | .
[`url_map`](#url_map) | `string` | The url_map resource to use.
[`http_forward`](#http_forward) | `bool` | Set to `false` to disable HTTP port 80 forward.
[`custom_request_headers`](#custom_request_headers) | `list` | (Optional) Headers that the HTTP/S load balancer should add to proxied responses.
[`ssl`](#ssl) | `bool` | Set to `true` to enable SSL support, requires variable `ssl_certificates` - a list of self_link certs.
[`private_key`](#private_key) | `string` | Content of the private SSL key.
[`certificate`](#certificate) | `string` | Content of the SSL certificate.
[`use_ssl_certificates`](#use_ssl_certificates) | `bool` | If true, use the certificates provided by `ssl_certificates`, otherwise, create cert from `private_key` and `certificate`.
[`ssl_certificates`](#ssl_certificates) | `list` | SSL cert self_link list.
[`security_policy`](#security_policy) | `string` | The resource URL for the security policy to associate with the backend service.
[`cdn`](#cdn) | `bool` | Set to `true` to enable cdn on backend.

### Outputs

Name |  Description
--- | ---
`address` | 
`address_v6` | 
`all` | Intended mainly for `depends_on` but currently succeeds prematurely (while forwarding rules and healtchecks are not yet usable).

### Required Inputs details

#### name

Name for the forwarding rule and prefix for supporting resources

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### ip_version

IP version for the Global address: IPV4, IPV6 or IPV4_IPV6. Empty defaults to IPV4

Type: string

Default value: ``

<sup>[back to list](#modules-optional-inputs)</sup>

#### backend_groups

The map containing the names of instance groups (IGs) or network endpoint groups (NEGs) to serve. The IGs can be managed or unmanaged or a mix of both. All IGs must handle named port `backend_port_name`. The NEGs just handle unnamed port.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### backend_port_name

The port_name of the backend groups that this load balancer will serve (default is 'http')

Type: string

Default value: `http`

<sup>[back to list](#modules-optional-inputs)</sup>

#### backend_protocol

The protocol used to talk to the backend service

Type: string

Default value: `HTTP`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_name

Name for the health check. If not provided, defaults to `<var.name>-healthcheck`.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### health_check_port

TCP port to use for health check.

Type: number

Default value: `80`

<sup>[back to list](#modules-optional-inputs)</sup>

#### timeout_sec

Timeout to consider a connection dead, in seconds (default 30)

Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### balancing_mode



Type: string

Default value: `RATE`

<sup>[back to list](#modules-optional-inputs)</sup>

#### capacity_scaler



Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### max_connections_per_instance



Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### max_rate_per_instance



Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### max_utilization



Type: number

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### url_map

The url_map resource to use. Default is to send all traffic to first backend.

Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### http_forward

Set to `false` to disable HTTP port 80 forward

Type: bool

Default value: `true`

<sup>[back to list](#modules-optional-inputs)</sup>

#### custom_request_headers

(Optional) Headers that the HTTP/S load balancer should add to proxied responses.

Type: list(string)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ssl

Set to `true` to enable SSL support, requires variable `ssl_certificates` - a list of self_link certs

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### private_key

Content of the private SSL key. Required if `ssl` is `true` and `ssl_certificates` is empty.

Type: string

Default value: ``

<sup>[back to list](#modules-optional-inputs)</sup>

#### certificate

Content of the SSL certificate. Required if `ssl` is `true` and `ssl_certificates` is empty.

Type: string

Default value: ``

<sup>[back to list](#modules-optional-inputs)</sup>

#### use_ssl_certificates

If true, use the certificates provided by `ssl_certificates`, otherwise, create cert from `private_key` and `certificate`

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ssl_certificates

SSL cert self_link list. Required if `ssl` is `true` and no `private_key` and `certificate` is provided.

Type: list(string)

Default value: `[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### security_policy

The resource URL for the security policy to associate with the backend service

Type: string

Default value: ``

<sup>[back to list](#modules-optional-inputs)</sup>

#### cdn

Set to `true` to enable cdn on backend.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>