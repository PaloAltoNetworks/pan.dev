---
hide_title: true
id: appgw
keywords:
- pan-os
- panos
- firewall
- configuration
- terraform
- vmseries
- vm-series
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Appgw
title: Palo Alto Networks VNet Module for Azure
---

# Palo Alto Networks VNet Module for Azure

A terraform module for deploying an Application Gateway v2. The module is dedicated to work with the Next Generation Firewalls, hence it supports only one backend. It supports only v2 and WAF v2 Gateways.

In the center of module's configuration is the `rules` property. See the the [rules property explained](#rules-property-explained) and [`rules` property examples](#rules-property-examples) topics for more details.

## Rules property explained

The `rules` property combines configuration for several Application Gateway components and groups them by a logical application. In other words an application defines a listener, http settings, health check probe, redirect rules, rewrite rule sets or url path maps (some fo them are mutually exclusive, check details on each of them below). Those are always unique for an application, meaning that you cannot share them between application definitions. Most of settings are optional and depend on a use case. The only one that is required is the listener port and the priority of the rule.

In general `rules` property is a map where key is the logical application name and value is a set of properties, like below:

```hcl
rules = {
  "redirect_2_app_1 = {
    priority = 1
    listener = {
      port = 80
    }
    redirect = {
      type                 = "Temporary"
      target_listener_name = "application_1"
      include_path         = true
      include_query_string = true
    }
  }
  "application_1" = {
    priority = 2
    listener = {
      port = 443
      protocol = "Https"
      ssl_certificate_path = "/path/to/cert"
      ssl_certificate_pass = "cert_password"
    }
  }
}
```

The example above is a setup where the Application Gateway serves only as a reverse proxy terminating SSL connections (by default all traffic sent to the backend pool is sent to port 80, plain text). It also redirects all http communication sent to listener port 80 to https on port 443.

As you can see in the `target_listener_name` property, all Application Gateway component created for an application are equal to the application name (so the key value).

For each application one can configure the following properties:

* `priority` - rule's priority
* [`listener`](#property-listener) - provides general listener settings like port, protocol, error pages, etc
* [`backend`](#property-backend) - (optional) complete backend http settings configuration
* [`probe`](#property-probe) - (optional) backend health check probe configuration
* [`redirect`](#property-redirect) - (optional) mutually exclusive with `backend` and `probe`, creates a redirect rule
* [`rewrite_sets`](#property-rewrite-sets) - (optional) a set of rewrite rules used to modify response and request headers.
* [`url_path_maps`](#property-urlpathmaps) - (optional) a map of URL paths with their routing configuration - creates a rule of `PathBasedRouting` type (if not specified the rule is of `Basic` type)

For details on each of them (except for `priority`) check the topics below.

### property: listener

Configures the listener, frontend port and (optionally) the SSL Certificate component that will be used by the listener (required for `https` listeners). The following properties are available:

| Name | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| `port` | a port number | `number` | n/a | yes |
| `protocol` | either `Http` or `Https` (case sensitive) | `string` | `"Http"` | no |
| `host_names` | host header values this rule should react on, this creates a Multi-Site listener | `list(string)` | `null` | no |
| `ssl_profile_name` | a name (key) of an SSL Profile defined in `ssl_profiles` property | `string` | `null` | no |
| `ssl_certificate_path` | a path to a certificate in `.pfx` format | `string` | `null` | yes if `protocol == "Https"`, mutually exclusive with `ssl_certificate_vault_id` |
| `ssl_certificate_pass` | a password matching the certificate specified in `ssl_certificate_path` | `string` | `null` | yes if `protocol == "Https"`, mutually exclusive with `ssl_certificate_vault_id` |
| `ssl_certificate_vault_id` | an ID of a certificate stored in an Azure Key Vault, requires `managed_identities` property, the identity(-ties) used have to have at least `GET` access to Key Vault's secrets | `string` | `null` | yes if `protocol == "Https"`, mutually exclusive with `ssl_certificate_path` |
| `custom_error_pages` | a map that contains ULRs for custom error pages, for more information see below | `map` | `null` | no |

The `custom_error_pages` map has the following format:

```hcl
custom_error_pages = { 
  HttpStatus403 = "http://error.com/403/page.html",
  HttpStatus502 = "http://error.com/502/page.html"
}
```

Keys can have values of `HttpStatus403` and `HttpStatus502` only. Both are optional. Only the error page path is customizable and it has to point to an HTML file.

### property: backend

Configures the backend's http settings, so port and protocol properties for a connection between an Application Gateway and the actual Firewall. Following properties are available:

| Name | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| `port` | port on which the backend is listening | `number` | `80` | no |
| `protocol` | protocol for the backend service, this can be `Http` or `Https` | `string` | `"Http"` | no |
| `hostname_from_backend` | override request host header with backend's host name | `bool` | `false` | no, mutually exclusive with `hostname` |
| `hostname` | override request host header with a custom host name | `string` | `null` | no, mutually exclusive with `hostname_from_backend` |
| `path` | path prefix, in case we need to shift the url path for the backend | `string` | `null` | no |
| `timeout` | timeout for backend's response in seconds | `number` | `60` | no |
| `cookie_based_affinity` | cookie based routing | `string` | `"Enabled"` | no |
| `affinity_cookie_name` | name of the affinity cookie, when skipped defaults to Azure's default name | `string` | `null` | no |
| `root_certs` | for https traffic only, a map of custom root certificates used to sign backend's certificate (see below) | `map` | `null` | no |

When `hostname_from_backend` nor `hostname` is not set the request's host header is not changed. This requires that the health check probe's (if used) `host` property is set (Application Gateway limitation). However, if one of this properties is set you can skip probe's `host` property - the host header will be inherited from the backend's http settings.

The `root_certs` map has the following format:

```hcl
root_certs = {
  root_cert_name = "./files/ca.crt"
}
```

### property: probe

Configures a health check probe. A probe is fully customizable, meaning that one decides what should be probed, the FW or an application behind it.

One can decide on the port used by the probe but the protocol is always aligned to the one set in http settings (Application Gateway limitation).

| Name | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| `path` | url for the health check endpoint, this property controls if the custom probe is created or not; if this is not set, http settings will have the property `Use custom probe` set to `No` | `string` | `null` | yes to enable a probe |
| `host` | host header for the health check probe, when omitted sets the `Pick host name from backend HTTP settings` to `Yes`, cannot be skipped when `backend.hostname` or `backend.hostname_from_backend` are not set | `string` | `null` | no |
| `port` | (v2 only) port for the health check, defaults to default protocol port | `number` | n/a | no |
| `interval` | probe interval in seconds | `nubmer` | `5` | no |
| `timeout` | probe timeout in seconds  | `nubmer` | `30` | no |
| `threshold` | number of failed probes until the backend is marked as down | `nubmer` | `2` | no |
| `match_code` | a list of acceptable http response codes, this property controls the custom match condition for a health probe, if not set, it disables them | `list(nubmer)` | `null` | no |
| `match_body` | a snippet of the backend response that can be matched for health check conditions | `string` | `null` | no |

### property: redirect

Configures a rule that only redirects traffic (traffic matched by this rules never reaches the Firewalls). Hence it is mutually exclusive with `backend` and `probe` properties.

| Name | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| `type` | this property triggers creation of a redirect rule, possible values are: `Permanent`, `Temporary`, `Found` and `SeeOther` | `string` | `null` | no |
| `target_listener_name` | a name of an existing listener to which traffic will be redirected, this is basically a name of a rule | `string` | `null` | no, mutually exclusive with `target_url` |
| `target_url` | a URL to which traffic will be redirected | `string` | `null` | no, mutually exclusive with `target_listener_name` |
| `include_path` | decides whether to include the path in the redirected Url | `bool` | `false` | no |
| `include_query_string` | decides whether to include the query string in the redirected Url | `bool` | `false` | no |

### property: rewrite_sets

Creates rewrite rules used to modify the HTTP response and request headers. A set of rewrite rules cannot be shared between applications. For details on building the rules refer to [Microsoft's documentation](https://docs.microsoft.com/azure/application-gateway/rewrite-http-headers).

The whole property is a map, where key is the rule name and value is a map of rule's properties. Example of a rule that strips a port number from the `X-Forwarded-For` header:

```hcl
rewrite_sets = {
  "xff-strip-port" = {
    sequence = 100
    request_header = {
      "X-Forwarded-For" = "{var_add_x_forwarded_for_proxy}"
    }
  }
}
```

Properties for a rule are described below.

| Name | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| `sequence` | a rule priority | `number` | n/a | yes |
| `conditions` | a map of pre-conditions for a rule, for details see [property: rewrite_sets.conditions](#property-rewritesetsconditions) | `map` | `null` | no |
| `request_headers` | a key-value map of request headers to modify, where a key is the header name and the value is the new value (to delete a header set the value to an empty string) | `map` | `null` | no |
| `response_headers` | a key-value map of response headers to modify, where a key is the header name and the value is the new value (to delete a header set the value to an empty string) | `map` | `null` | no |

#### property: rewrite_sets.conditions

This is a map where the key is a variable that will be checked and value is a set of properties describing the actual condition. 

For details on the variables see [Microsoft's documentation](https://docs.microsoft.com/azure/application-gateway/rewrite-http-headers#server-variables). But generally value of this variable brakes into 3 scenarios controlled by a prefix:

* `var_` - the condition is based on a server variable, the variable name follows the prefix
* `http_req_` - a request header condition, the header name follows the prefix
* `http_resp` - a response header condition, the header name follows the prefix.

Example:

```hcl
conditions = {
  "var_client_ip" = {
    pattern     = "1.1.1.1"
    ignore_case = true
  }
  "http_req_X-Forwarded-Proto" = {
    pattern     = "https"
    ignore_case = true
    negate      = true
  }
}
```

| Name | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| `conditions.pattern` | a fix string or a regular expression to evaluate the condition | `string` | `null` | yes |
| `conditions.ignore_case` | case in-sensitive comparison | `bool` | `false` | no |
| `conditions.negate` | negate the condition | `bool` | `false` | no |

### property: url_path_maps

Triggers creation of a `PathBasedRouting` rule for an application. It's a map where key is a name of a routing configuration for a specific path and value contains the actual configuration.

| Name | Description | Type | Default | Required |
| --- | --- | --- | --- | --- |
| `path` | a URL path that will be matched for this configuration | `string` | n/a | yes |
| `backend` | a [backend](#property-backend) configuration like specified above | `map` | `null` | no, mutually exclusive with `redirect` |
| `probe` | a [probe](#property-probe) configuration like specified above | `map` | `null` | no, mutually exclusive with `redirect` |
| `redirect` | a [redirect](#property-redirect) configuration like specified above | `map` | `null` | no, mutually exclusive with `backend` and `probe` |

As one can see the only specific setting is `path`. The rest of configuration is similar to a regular application configuration. For each path a pair backend settings and probe or a redirect configuration is created.

## Usage

### General

Module requires that Firewalls and a dedicated subnet are set up already.

An example invocation (assuming usage of other Palo Alto's Azure modules) with a minium set of rules (at least one rule is required):

```hcl
module "Application Gateway" {
  source = "../modules/Application Gateway"

  name                = "Application Gateway"
  resource_group_name = azurerm_resource_group.this.name
  location            = var.location
  subnet_id           = module.security_vnet.subnet_ids["subnet-Application Gateway"]
  capacity            = 2

  vmseries_ips = [for k, v in module.vmseries : v.interfaces[1].private_ip_address]

  rules = {
    "minimum" = {
      priority = 1
      listener = {
        port = 8080
      }
    }
  }
}
```

### `rules` property examples

The `rules` property is quite flexible, there are several limitations though. Their origin comes from the Application Gateway rather than the code itself. They are:

* `priority` property is required since 2021-08-01 AzureRM API update
* `listener.port` has to be specified at minimum to create a valid rule
* `listener.port` has to be unique between rules unless `listener.host_names` is used (all rules sharing a port have to have `listener.host_names` specified)
* a health check probe has to have a host header specified, this is done by either setting the header directly in `probe.host` property, or by inheriting it from http backend settings (one of `backend.hostname_from_backend` or `backend.hostname` has to be set)
* when creating a redirect rule `backend` and `probe` cannot be set
* the probe has to use the same protocol as the associated http backend settings, different port can be used though

The examples below are meant to show most common use cases and to serve as a base for more complex rules.

* [SSL termination with a redirect from HTTP to HTTPS](#ssl-termination-with-a-redirect-from-http-to-https)
* [Multiple websites hosted on a single port](#multiple-websites-hosted-on-a-single-port)
* [Probing a Firewall availability in an HA pair](#probing-a-firewall-availability-in-an-ha-pair)
* [Rewriting HTTP headers](#rewriting-http-headers)
* [Path based configuration](#path-based-configuration)

#### SSL termination with a redirect from HTTP to HTTPS

This rule redirects all `http` traffic to a `https` listener. The ssl certificate is taken from an Azure Key Vault service.

```hcl
rules = {
  "http-2-https" = {
    priority = 1

    listener = {
      port = 80
    }

    redirect = {
      type                 = "Permanent"
      target_listener_name = "https"
      include_path         = true
      include_query_string = true
    }
  }
  "https" = {
    priority = 2

    listener = {
      port                     = 443
      protocol                 = "Https"
      ssl_certificate_vault_id = "https://kv.vault.azure.net/secrets/cert/bb1391bba15042a59adaea584a8208e8"
    }
  }
}
```

#### Multiple websites hosted on a single port

This rule demonstrates how to split hostname based traffic to different ports on a Firewall. For simplicity `http` traffic is configured only.

```hcl
rules = {
  "application-1" = {
    priority = 1

    listener = {
      port       = 80
      host_names = ["www.app_1.com"]
    }

    backend = {
      port = 8080
    }
  }
  "application-2" = {
    priority = 2

    listener = {
      port       = 80
      host_names = ["www.app_2.com"]
    }

    backend = {
      port = 8081
    }
  }
}
```

#### Probing a Firewall availability in an HA pair

In a typical HA scenario the probe is set to check the Management Service exposed on a public interface. The example below shows how to achieve that.

```hcl
rules = {
  "application-1" = {
    priority = 1

    listener = {
      port = 80
    }

    backend = {
      port = 8080
    }

    probe = {
      path       = "/php/login.php"
      port       = 80
      host       = "127.0.0.1"
    }
  }
}
```

#### Rewriting HTTP headers

This is a simple rule used to terminate SSL traffic. However the application behind the Firewall has two limitations:

1. it expects the protocol to be still HTTPS, to achieve that we set the `X-Forwarded-Proto` header
1. it expects that the `X-Forwarded-For` does not include ports (which is default for an Application Gateway).

We also use an SSL certificate stored in a file instead of an Azure Key Vault.

NOTICE, there are some defaults used in this config:

* `backend` has no `port` or `protocol` specified - this means `80` and `Http` are used respectively.
* `probe` has no `port` or `host` specified - this means port `80` is used (default port for protocol, which is inherited from backend's protocol) and host headers are inherited from backen's host headers.

```hcl
rules = {
  "application-1" = {
    priority = 1

    listener = {
      port     = 443
      protocol = "Https"
      ssl_certificate_path = "./files/certificate.pfx"
      ssl_certificate_pass = "password"
    }

    backend = {
      hostname_from_backend = true
    }

    probe = {
      path = "/php/login.php"
    }

    rewrite_sets = {
      "xff-strip-port" = {
        sequence = 100
        conditions = {
          "http_resp_X-Forwarded-Proto" = {
            pattern     = "https"
            ignore_case = true
            negate      = true
          }
        }
        request_headers = {
          "X-Forwarded-For"   = "{var_add_x_forwarded_for_proxy}"
          "X-Forwarded-Proto" = "https"
        }
      }
    }
  }
}
```

#### Path based configuration

Here we show a configuration for a 'complex' application. This means that under different paths we have different applications. The host header remains the same. Each application is served on the Firewall under a different port. We use path based routing to split the traffic on an Application Gateway.

Notice, that the general backend configuration serves as a 'catch-all' rule, while each path has it's own dedicated backend, probe or redirect configuration block.

```hcl
rules = {
  "complex-application" = {
    priority = 1
    listener = {
      port       = 80
      host_names = ["www.complex.app"]
    }
    backend = {
      port = 8080
    }
    probe = {
      path = "/healthcheck"
      host = "127.0.0.1"
    }
    url_path_maps = {
      "menu" = {
        path = "/api/menu/"
        backend = {
          port = 8081
        }
        probe = {
          path = "/api/menu/healthcheck"
          host = "127.0.0.1"
        }
      }
      "header" = {
        path = "/api/header/"
        backend = {
          port = 8082
        }
        probe = {
          path = "/api/header/healthcheck"
          host = "127.0.0.1"
        }
      }
      "old_url_fix" = {
        path = "/old/app/path/"
        redirect = {
          type       = "Permanent"
          target_url = "https://www.complex.app"
        }
      }
    }
  }
}
```

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |
| <a name="requirement_azurerm"></a> [azurerm](#requirement\_azurerm) | ~> 3.25 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_azurerm"></a> [azurerm](#provider\_azurerm) | ~> 3.25 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [azurerm_application_gateway.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_gateway) | resource |
| [azurerm_public_ip.this](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/public_ip) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_resource_group_name"></a> [resource\_group\_name](#input\_resource\_group\_name) | Name of an existing resource group. | `string` | n/a | yes |
| <a name="input_location"></a> [location](#input\_location) | Location to place the Application Gateway in. | `string` | n/a | yes |
| <a name="input_zones"></a> [zones](#input\_zones) | A list of zones the Application Gateway should be available in.<br /><br />NOTICE: this is also enforced on the Public IP. The Public IP object brings in some limitations as it can only be non-zonal, pinned to a single zone or zone-redundant (so available in all zones in a region). <br />Therefore make sure that if you specify more than one zone you specify all available in a region. You can use a subset, but the Public IP will be created in all zones anyway. This fact will cause terraform to recreate the IP resource during next `terraform apply` as there will be difference between the state and the actual configuration.<br /><br />For details on zones currently available in a region of your choice refer to [Microsoft's documentation](https://docs.microsoft.com/en-us/azure/availability-zones/az-region).<br /><br />Example:<pre>zones = ["1","2","3"]</pre> | `list(string)` | `null` | no |
| <a name="input_name"></a> [name](#input\_name) | Name of the Application Gateway. | `string` | n/a | yes |
| <a name="input_domain_name_label"></a> [domain\_name\_label](#input\_domain\_name\_label) | Label for the Domain Name. Will be used to make up the FQDN. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. | `string` | `null` | no |
| <a name="input_managed_identities"></a> [managed\_identities](#input\_managed\_identities) | A list of existing User-Assigned Managed Identities, which Application Gateway uses to retrieve certificates from Key Vault.<br /><br />These identities have to have at least `GET` access to Key Vault's secrets. Otherwise Application Gateway will not be able to use certificates stored in the Vault. | `list(string)` | `null` | no |
| <a name="input_waf_enabled"></a> [waf\_enabled](#input\_waf\_enabled) | Enables WAF Application Gateway. This only sets the SKU. This module does not support WAF rules configuration. | `bool` | `"false"` | no |
| <a name="input_capacity"></a> [capacity](#input\_capacity) | A number of Application Gateway instances. A value bewteen 1 and 125.<br /><br />This property is not used when autoscaling is enabled. | `number` | `2` | no |
| <a name="input_capacity_min"></a> [capacity\_min](#input\_capacity\_min) | When set enables autoscaling and becomes the minimum capacity. | `number` | `null` | no |
| <a name="input_capacity_max"></a> [capacity\_max](#input\_capacity\_max) | Optional, maximum capacity for autoscaling. | `number` | `null` | no |
| <a name="input_enable_http2"></a> [enable\_http2](#input\_enable\_http2) | Enable HTTP2 on the Application Gateway. | `bool` | `false` | no |
| <a name="input_subnet_id"></a> [subnet\_id](#input\_subnet\_id) | An ID of a subnet that will host the Application Gateway. Keep in mind that this subnet can contain only AppGWs and only of the same type. | `string` | n/a | yes |
| <a name="input_vmseries_ips"></a> [vmseries\_ips](#input\_vmseries\_ips) | IP addresses of VMSeries' interfaces that will serve as backends for the Application Gateway. | `list(string)` | `[]` | no |
| <a name="input_rules"></a> [rules](#input\_rules) | A map of rules for the Application Gateway. A rule combines listener, http settings and health check configuration. <br />A key is an application name that is used to prefix all components inside Application Gateway that are created for this application. <br /><br />Details on configuration can be found [here](#rules-property-explained). | `any` | n/a | yes |
| <a name="input_ssl_policy_type"></a> [ssl\_policy\_type](#input\_ssl\_policy\_type) | Type of an SSL policy. Possible values are `Predefined` or `Custom`.<br />If the value is `Custom` the following values are mandatory: `ssl_policy_cipher_suites` and `ssl_policy_min_protocol_version`. | `string` | `"Predefined"` | no |
| <a name="input_ssl_policy_name"></a> [ssl\_policy\_name](#input\_ssl\_policy\_name) | Name of an SSL policy. Supported only for `ssl_policy_type` set to `Predefined`. Normally you can set it also for `Custom` policies but the name is discarded on Azure side causing an update to Application Gateway each time terraform code is run. Therefore this property is omitted in the code for `Custom` policies. <br /><br />For the `Predefined` polcies, check the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/application-gateway/application-gateway-ssl-policy-overview) for possible values as they tend to change over time. The default value is currently (Q1 2022) a Microsoft's default. | `string` | `"AppGwSslPolicy20150501"` | no |
| <a name="input_ssl_policy_min_protocol_version"></a> [ssl\_policy\_min\_protocol\_version](#input\_ssl\_policy\_min\_protocol\_version) | Minimum version of the TLS protocol for SSL Policy. Required only for `ssl_policy_type` set to `Custom`. <br /><br />Possible values are: `TLSv1_0`, `TLSv1_1`, `TLSv1_2` or `null` (only to be used with a `Predefined` policy). | `string` | `null` | no |
| <a name="input_ssl_policy_cipher_suites"></a> [ssl\_policy\_cipher\_suites](#input\_ssl\_policy\_cipher\_suites) | A list of accepted cipher suites. Required only for `ssl_policy_type` set to `Custom`. <br />For possible values see [documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_gateway#cipher_suites). | `list(string)` | `null` | no |
| <a name="input_ssl_profiles"></a> [ssl\_profiles](#input\_ssl\_profiles) | A map of SSL profiles that can be later on referenced in HTTPS listeners by providing a name of the profile in the `ssl_profile_name` property. <br /><br />The structure of the map is as follows:<pre>{<br />  profile\_name = {<br />    ssl\_policy\_type                 = string<br />    ssl\_policy\_min\_protocol\_version = string<br />    ssl\_policy\_cipher\_suites        = list<br />  }<br />}</pre>For possible values check the: `ssl_policy_type`, `ssl_policy_min_protocol_version` and `ssl_policy_cipher_suites` variables as SSL profile is a named SSL policy - same properties apply. The only difference is that you cannot name an SSL policy inside an SSL profile. | `map(any)` | `{}` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Azure tags to apply to the created resources. | `map(string)` | `{}` | no |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_public_ip"></a> [public\_ip](#output\_public\_ip) | A public IP assigned to the Application Gateway. |
| <a name="output_public_domain_name"></a> [public\_domain\_name](#output\_public\_domain\_name) | Public domain name assigned to the Application Gateway. |
| <a name="output_backend_pool_id"></a> [backend\_pool\_id](#output\_backend\_pool\_id) | The identifier of the Application Gateway backend address pool. |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->