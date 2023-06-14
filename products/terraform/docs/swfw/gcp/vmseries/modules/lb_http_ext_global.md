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
- gcp
pagination_next: null
pagination_prev: null
sidebar_label: LB HTTP Ext Global
title: Google Cloud HTTP/HTTPS External Global Load Balancer
---

# Google Cloud HTTP/HTTPS External Global Load Balancer

A simplified GLB, which assumes that all participating instances are equally capable and that all
participating groups are equally capable as well.

## Example

```terraform

module "glb" {
  source = "../modules/lb_http_ext_global"
  name   = "my-glb"
  backend_groups        = module.vmseries.instance_group_self_links
  max_rate_per_instance = 50000
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
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |
| <a name="requirement_google"></a> [google](#requirement\_google) | ~> 4.54 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | ~> 4.54 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google_compute_backend_service.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_backend_service) | resource |
| [google_compute_global_address.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_global_address) | resource |
| [google_compute_global_forwarding_rule.http](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_global_forwarding_rule) | resource |
| [google_compute_global_forwarding_rule.https](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_global_forwarding_rule) | resource |
| [google_compute_health_check.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_health_check) | resource |
| [google_compute_ssl_certificate.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_ssl_certificate) | resource |
| [google_compute_target_http_proxy.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_target_http_proxy) | resource |
| [google_compute_target_https_proxy.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_target_https_proxy) | resource |
| [google_compute_url_map.default](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_url_map) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_backend_groups"></a> [backend\_groups](#input\_backend\_groups) | The map containing the names of instance groups (IGs) or network endpoint groups (NEGs) to serve. The IGs can be managed or unmanaged or a mix of both. All IGs must handle named port `backend_port_name`. The NEGs just handle unnamed port. | `map(string)` | `{}` | no |
| <a name="input_backend_port_name"></a> [backend\_port\_name](#input\_backend\_port\_name) | The port\_name of the backend groups that this load balancer will serve (default is 'http') | `string` | `"http"` | no |
| <a name="input_backend_protocol"></a> [backend\_protocol](#input\_backend\_protocol) | The protocol used to talk to the backend service | `string` | `"HTTP"` | no |
| <a name="input_balancing_mode"></a> [balancing\_mode](#input\_balancing\_mode) | n/a | `string` | `"RATE"` | no |
| <a name="input_capacity_scaler"></a> [capacity\_scaler](#input\_capacity\_scaler) | n/a | `number` | `null` | no |
| <a name="input_cdn"></a> [cdn](#input\_cdn) | Set to `true` to enable cdn on backend. | `bool` | `false` | no |
| <a name="input_certificate"></a> [certificate](#input\_certificate) | Content of the SSL certificate. Required if `ssl` is `true` and `ssl_certificates` is empty. | `string` | `""` | no |
| <a name="input_custom_request_headers"></a> [custom\_request\_headers](#input\_custom\_request\_headers) | (Optional) Headers that the HTTP/S load balancer should add to proxied responses. | `list(string)` | `[]` | no |
| <a name="input_health_check_name"></a> [health\_check\_name](#input\_health\_check\_name) | Name for the health check. If not provided, defaults to `<var.name>-healthcheck`. | `string` | `null` | no |
| <a name="input_health_check_port"></a> [health\_check\_port](#input\_health\_check\_port) | TCP port to use for health check. | `number` | `80` | no |
| <a name="input_http_forward"></a> [http\_forward](#input\_http\_forward) | Set to `false` to disable HTTP port 80 forward | `bool` | `true` | no |
| <a name="input_ip_version"></a> [ip\_version](#input\_ip\_version) | IP version for the Global address (IPv4 or v6) - Empty defaults to IPV4 | `string` | `""` | no |
| <a name="input_max_connections_per_instance"></a> [max\_connections\_per\_instance](#input\_max\_connections\_per\_instance) | n/a | `number` | `null` | no |
| <a name="input_max_rate_per_instance"></a> [max\_rate\_per\_instance](#input\_max\_rate\_per\_instance) | n/a | `number` | `null` | no |
| <a name="input_max_utilization"></a> [max\_utilization](#input\_max\_utilization) | n/a | `number` | `null` | no |
| <a name="input_name"></a> [name](#input\_name) | Name for the forwarding rule and prefix for supporting resources | `string` | n/a | yes |
| <a name="input_private_key"></a> [private\_key](#input\_private\_key) | Content of the private SSL key. Required if `ssl` is `true` and `ssl_certificates` is empty. | `string` | `""` | no |
| <a name="input_security_policy"></a> [security\_policy](#input\_security\_policy) | The resource URL for the security policy to associate with the backend service | `string` | `""` | no |
| <a name="input_ssl"></a> [ssl](#input\_ssl) | Set to `true` to enable SSL support, requires variable `ssl_certificates` - a list of self\_link certs | `bool` | `false` | no |
| <a name="input_ssl_certificates"></a> [ssl\_certificates](#input\_ssl\_certificates) | SSL cert self\_link list. Required if `ssl` is `true` and no `private_key` and `certificate` is provided. | `list(string)` | `[]` | no |
| <a name="input_timeout_sec"></a> [timeout\_sec](#input\_timeout\_sec) | Timeout to consider a connection dead, in seconds (default 30) | `number` | `null` | no |
| <a name="input_url_map"></a> [url\_map](#input\_url\_map) | The url\_map resource to use. Default is to send all traffic to first backend. | `string` | `null` | no |
| <a name="input_use_ssl_certificates"></a> [use\_ssl\_certificates](#input\_use\_ssl\_certificates) | If true, use the certificates provided by `ssl_certificates`, otherwise, create cert from `private_key` and `certificate` | `bool` | `false` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_address"></a> [address](#output\_address) | n/a |
| <a name="output_all"></a> [all](#output\_all) | Intended mainly for `depends_on` but currently succeeds prematurely (while forwarding rules and healtchecks are not yet usable). |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->