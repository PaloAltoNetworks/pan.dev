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
- swfw
- software-firewalls
- azure
pagination_next: null
pagination_prev: null
sidebar_label: Appgw
title: Palo Alto Networks Application Gateway Module for Azure
---

# Palo Alto Networks Application Gateway Module for Azure

A terraform module for deploying a Application Gateway v2 and its components required for the VM-Series firewalls in Azure.

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-azurerm-swfw-modules/tree/main/modules/appgw) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/azurerm/latest/submodules/appgw)

## Usage

In order to use module `appgw`, you need to deploy `azurerm_resource_group` and use module `vnet` as prerequisites.
Then you can use below code as an example of calling module to create Application Gateway:

```hcl
# Create Application Gateway
module "appgw" {
  source = "PaloAltoNetworks/swfw-modules/azurerm//modules/appgw"

  for_each = var.appgws

  name                = each.value.name
  public_ip           = each.value.public_ip
  resource_group_name = local.resource_group.name
  location            = var.region
  subnet_id           = module.vnet[each.value.vnet_key].subnet_ids[each.value.subnet_key]

  managed_identities = each.value.managed_identities
  capacity           = each.value.capacity
  waf                = each.value.waf
  enable_http2       = each.value.enable_http2
  zones              = each.value.zones

  frontend_ip_configuration_name = each.value.frontend_ip_configuration_name
  listeners                      = each.value.listeners
  backend_pool                   = each.value.backend_pool
  backends                       = each.value.backends
  probes                         = each.value.probes
  rewrites                       = each.value.rewrites
  rules                          = each.value.rules
  redirects                      = each.value.redirects
  url_path_maps                  = each.value.url_path_maps

  ssl_global   = each.value.ssl_global
  ssl_profiles = each.value.ssl_profiles

  tags       = var.tags
  depends_on = [module.vnet]
}
```

Every application gateway is defined by basic attributes for name, VNet, subnet or capacity.
For applications there is a need to set `listeners`, `backends`, sometimes `rewrites`, `redirects` and / or `url_path_maps`.
Then `rules` property connects the other component using it's keys.

The examples below are meant to show most common use cases and to serve as a base for more complex
application gateways definitions.

### Example 1

Application Gateway with:

* new public IP
* HTTP listener
* static capacity
* rewriting HTTP headers

```hcl
appgws = {
  "public-http-minimum" = {
    name = "appgw-http-minimum"
    public_ip = {
      name = "pip-http-minimum"
    }
    vnet_key   = "transit"
    subnet_key = "appgw"
    zones      = ["1", "2", "3"]
    capacity = {
      static = 2
    }
    listeners = {
      minimum = {
        name = "minimum-listener"
        port = 80
      }
    }
    backend_settings = {
      minimum = {
        name                  = "http-backend"
        port                  = 80
        protocol              = "Http"
      }
    }
    rewrites = {
      minimum = {
        name = "minimum-set"
        rules = {
          "xff-strip-port" = {
            name     = "minimum-xff-strip-port"
            sequence = 100
            request_headers = {
              "X-Forwarded-For" = "{var_add_x_forwarded_for_proxy}"
            }
          }
        }
      }
    }
    rules = {
      minimum = {
        name     = "minimum-rule"
        priority = 1
        backend_key  = "minimum"
        listener_key = "minimum"
        rewrite_key  = "minimum"
      }
    }
  }
}
```

### Example 2

Application Gateway with:

* existing public IP
* HTTP listener
* static capacity
* rewriting HTTP headers

```hcl
appgws = {
  "public-http-existing" = {
    name = "appgw-http-existing"
    public_ip = {
      name   = "pip-existing"
      create = false
    }
    vnet_key   = "transit"
    subnet_key = "appgw"
    zones      = ["1", "2", "3"]
    capacity = {
      static = 2
    }
    backend_settings = {
      existing = {
        name                  = "http-backend"
        port                  = 80
        protocol              = "Http"
      }
    }
    listeners = {
      existing = {
        name = "existing-listener"
        port = 80
      }
    }
    rewrites = {
      existing = {
        name = "existing-set"
        rules = {
          "xff-strip-port" = {
            name     = "existing-xff-strip-port"
            sequence = 100
            request_headers = {
              "X-Forwarded-For" = "{var_add_x_forwarded_for_proxy}"
            }
          }
        }
      }
    }
    rules = {
      existing = {
        name     = "existing-rule"
        priority = 1
        backend_key  = "existing"
        listener_key = "existing"
        rewrite_key  = "existing"
      }
    }
  }
}
```

### Example 3

Application Gateway with:

* new public IP
* HTTP listener
* autoscaling

```hcl
appgws = {
  "public-http-autoscale" = {
    name = "appgw-http-autoscale"
    public_ip = {
      name = "pip-http-autoscale"
    }
    vnet_key   = "transit"
    subnet_key = "appgw"
    zones      = ["1", "2", "3"]
    capacity = {
      autoscale = {
        min = 2
        max = 20
      }
    }
    backend_settings = {
      http = {
        name                  = "http-backend"
        port                  = 80
        protocol              = "Http"
      }
    }
    listeners = {
      http = {
        name = "http-listener"
        port = 80
      }
    }
    rules = {
      http = {
        name     = "http-rule"
        priority = 1
        backend_key  = "http"
        listener_key = "http"
      }
    }
  }
}
```

### Example 4

Application Gateway with:

* new public IP
* WAF enabled
* HTTP listener
* static capacity
* rewriting HTTP headers

```hcl
appgws = {
  "public-waf" = {
    name = "appgw-waf"
    public_ip = {
      name = "pip-waf"
    }
    vnet_key   = "transit"
    subnet_key = "appgw"
    zones      = ["1", "2", "3"]
    capacity = {
      static = 2
    }
    waf = {
      prevention_mode  = true
      rule_set_type    = "OWASP"
      rule_set_version = "3.2"
    }
    backend_settings = {
      waf = {
        name                  = "waf-backend"
        port                  = 80
        protocol              = "Http"
      }
    }
    listeners = {
      waf = {
        name = "waf-listener"
        port = 80
      }
    }
    rewrites = {
      waf = {
        name = "waf-set"
        rules = {
          "xff-strip-port" = {
            name     = "waf-xff-strip-port"
            sequence = 100
            request_headers = {
              "X-Forwarded-For" = "{var_add_x_forwarded_for_proxy}"
            }
          }
        }
      }
    }
    rules = {
      minimum = {
        name     = "waf-rule"
        priority = 1
        backend_key  = "waf"
        listener_key = "waf"
        rewrite_key  = "waf"
      }
    }
  }
}
```

### Prerequisites for example 5 and 6

If you need to test example for Application Gateway with SSL, you need to created directory files
and create keys and certs using commands:

1. Create CA private key and certificate:

```bash
   openssl genrsa 2048 > ca-key1.pem
   openssl req -new -x509 -nodes -days 365000 -key ca-key1.pem -out ca-cert1.pem
   openssl genrsa 2048 > ca-key2.pem
   openssl req -new -x509 -nodes -days 365000 -key ca-key2.pem -out ca-cert2.pem
```

2. Create server certificate:

```bash
   openssl req -newkey rsa:2048 -nodes -keyout test1.key -x509 -days 365 -CA ca-cert1.pem -CAkey ca-key1.pem -out test1.crt
   openssl req -newkey rsa:2048 -nodes -keyout test2.key -x509 -days 365 -CA ca-cert2.pem -CAkey ca-key2.pem -out test2.crt
```

3. Create PFX file with key and certificate:

```bash
   openssl pkcs12 -inkey test1.key -in test1.crt -export -out test1.pfx
   openssl pkcs12 -inkey test2.key -in test2.crt -export -out test2.pfx
```

### Example 5

Application Gateway with:

* new public IP
* multi site HTTPS listener (many host names on port 443)
* static capacity
* rewriting HTTPS headers

```hcl
appgws = {
  "public-ssl-predefined" = {
    name = "appgw-ssl-predefined"
    public_ip = {
      name = "pip-ssl-predefined"
    }
    vnet_key   = "transit"
    subnet_key = "appgw"
    zones      = ["1", "2", "3"]
    capacity = {
      static = 2
    }
    global_ssl_policy = {
      type = "Predefined"
      name = "AppGwSslPolicy20170401"
    }
    ssl_profiles = {
      profile1 = {
        name            = "appgw-ssl-profile1"
        ssl_policy_name = "AppGwSslPolicy20170401S"
      }
    }
    frontend_ip_configuration_name = "public_ipconfig"
    listeners = {
      https1 = {
        name                 = "https1-listener"
        port                 = 443
        protocol             = "Https"
        ssl_profile_name     = "appgw-ssl-profile1"
        ssl_certificate_path = "./files/test1.pfx"
        ssl_certificate_pass = "123abc"
        host_names           = ["test1.appgw.local"]
      }
      https2 = {
        name                 = "https2-listener"
        port                 = 443
        protocol             = "Https"
        ssl_certificate_path = "./files/test2.pfx"
        ssl_certificate_pass = "123abc"
        host_names           = ["test2.appgw.local"]
      }
    }
    backend_pool = {
      name = "vmseries-pool"
    }
    backend_settings = {
      https1 = {
        name                  = "https1-settings"
        port                  = 481
        protocol              = "Https"
        timeout               = 60
        use_cookie_based_affinity = true
        hostname_from_backend = false
        hostname              = "test1.appgw.local"
        root_certs = {
          test = {
            name = "https-application-test1"
            path = "./files/ca-cert1.pem"
          }
        }
      }
      https2 = {
        name                  = "https2-settings"
        port                  = 482
        protocol              = "Https"
        timeout               = 60
        use_cookie_based_affinity = true
        hostname_from_backend = false
        hostname              = "test2.appgw.local"
        root_certs = {
          test = {
            name = "https-application-test2"
            path = "./files/ca-cert2.pem"
          }
        }
      }
    }
    rewrites = {
      https1 = {
        name = "https1-set"
        rules = {
          "xff-strip-port" = {
            name     = "https1-xff-strip-port"
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
      https2 = {
        name = "https2-set"
        rules = {
          "xff-strip-port" = {
            name     = "https2-xff-strip-port"
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
    rules = {
      https1 = {
        name     = "https1-rule"
        priority = 2
        backend_key  = "https1"
        listener_key = "https1"
        rewrite_key  = "https1"
      }
      https2 = {
        name     = "https2-rule"
        priority = 3
        backend_key  = "https2"
        listener_key = "https2"
        rewrite_key  = "https2"
      }
    }
  }
}
```

### Example 6

Application Gateway with:

* new public IP
* multiple listener:
  * HTTP
  * multi site HTTPS (many host names on port 443)
  * redirect
  * path based
* static capacity
* rewriting HTTP and HTTPS headers
* custom SSL profiles and policies
* custom health probes
* rewrites

```hcl
appgws = {
  "public-ssl-custom" = {
    name = "appgw-ssl-custom"
    public_ip = {
      name = "pip-ssl-custom"
    }
    vnet_key   = "transit"
    subnet_key = "appgw"
    zones      = ["1", "2", "3"]
    capacity = {
      static = 2
    }
    global_ssl_policy = {
      type                 = "Custom"
      min_protocol_version = "TLSv1_0"
      cipher_suites = ["TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA", "TLS_DHE_DSS_WITH_AES_128_CBC_SHA",
        "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256", "TLS_DHE_DSS_WITH_AES_256_CBC_SHA", "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256",
        "TLS_DHE_RSA_WITH_AES_128_CBC_SHA", "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256", "TLS_DHE_RSA_WITH_AES_256_CBC_SHA",
        "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA", "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256",
        "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256", "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA",
        "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384",
        "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
        "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA", "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384", "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384",
        "TLS_RSA_WITH_3DES_EDE_CBC_SHA", "TLS_RSA_WITH_AES_128_CBC_SHA", "TLS_RSA_WITH_AES_128_CBC_SHA256",
        "TLS_RSA_WITH_AES_128_GCM_SHA256", "TLS_RSA_WITH_AES_256_CBC_SHA", "TLS_RSA_WITH_AES_256_CBC_SHA256",
      "TLS_RSA_WITH_AES_256_GCM_SHA384"]
    }
    ssl_profiles = {
      profile1 = {
        name                            = "appgw-ssl-profile1"
        ssl_policy_min_protocol_version = "TLSv1_1"
        ssl_policy_cipher_suites = ["TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA", "TLS_DHE_DSS_WITH_AES_128_CBC_SHA",
          "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256", "TLS_DHE_DSS_WITH_AES_256_CBC_SHA", "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256",
          "TLS_DHE_RSA_WITH_AES_128_CBC_SHA", "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256", "TLS_DHE_RSA_WITH_AES_256_CBC_SHA",
          "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA",
          "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
          "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA", "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384",
          "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA",
          "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256", "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256", "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA",
        "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384", "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"]
      }
      profile2 = {
        name                            = "appgw-ssl-profile2"
        ssl_policy_min_protocol_version = "TLSv1_2"
        ssl_policy_cipher_suites = ["TLS_RSA_WITH_3DES_EDE_CBC_SHA", "TLS_RSA_WITH_AES_128_CBC_SHA",
          "TLS_RSA_WITH_AES_128_CBC_SHA256", "TLS_RSA_WITH_AES_128_GCM_SHA256", "TLS_RSA_WITH_AES_256_CBC_SHA",
        "TLS_RSA_WITH_AES_256_CBC_SHA256", "TLS_RSA_WITH_AES_256_GCM_SHA384"]
      }
    }
    frontend_ip_configuration_name = "public_ipconfig"
    listeners = {
      http = {
        name = "http-listener"
        port = 80
      }
      https1 = {
        name                 = "https1-listener"
        port                 = 443
        protocol             = "Https"
        ssl_profile_name     = "appgw-ssl-profile1"
        ssl_certificate_path = "./files/test1.pfx"
        ssl_certificate_pass = ""
        host_names           = ["test1.appgw.local"]
      }
      https2 = {
        name                 = "https2-listener"
        port                 = 443
        protocol             = "Https"
        ssl_profile_name     = "appgw-ssl-profile2"
        ssl_certificate_path = "./files/test2.pfx"
        ssl_certificate_pass = ""
        host_names           = ["test2.appgw.local"]
      }
      redirect_listener = {
        name = "redirect-listener-listener"
        port = 521
      }
      redirect_url = {
        name = "redirect-url-listener"
        port = 522
      }
      path_based_backend = {
        name = "path-backend-listener"
        port = 641
      }
      path_based_redirect_listener = {
        name = "path-redirect-listener-listener"
        port = 642
      }
      path_based_redirect_url = {
        name = "path-redirect-rul-listener"
        port = 643
      }
    }
    backend_pool = {
      name = "vmseries-pool"
    }
    backend_settings = {
      http = {
        name                  = "http-settings"
        port                  = 80
        protocol              = "Http"
        timeout               = 60
        use_cookie_based_affinity = true
        probe_key                 = "http"
      }
      https1 = {
        name                  = "https1-settings"
        port                  = 481
        protocol              = "Https"
        timeout               = 60
        use_cookie_based_affinity = true
        hostname_from_backend = false
        hostname              = "test1.appgw.local"
        root_certs = {
          test = {
            name = "https-application-test1"
            path = "./files/ca-cert1.pem"
          }
        }
        probe_key = "https1"
      }
      https2 = {
        name                  = "https2-settings"
        port                  = 482
        protocol              = "Https"
        timeout               = 60
        use_cookie_based_affinity = true
        hostname_from_backend = false
        hostname              = "test2.appgw.local"
        root_certs = {
          test = {
            name = "https-application-test2"
            path = "./files/ca-cert2.pem"
          }
        }
        probe_key = "https2"
      }
    }
    probes = {
      http = {
        name     = "http-probe"
        path     = "/"
        protocol = "Http"
        timeout  = 10
        host     = "127.0.0.1"
      }
      https1 = {
        name     = "https-probe1"
        path     = "/"
        protocol = "Https"
        timeout  = 10
      }
      https2 = {
        name     = "https-probe2"
        path     = "/"
        protocol = "Https"
        timeout  = 10
      }
    }
    rewrites = {
      http = {
        name = "http-set"
        rules = {
          "xff-strip-port" = {
            name     = "http-xff-strip-port"
            sequence = 100
            request_headers = {
              "X-Forwarded-For" = "{var_add_x_forwarded_for_proxy}"
            }
          }
        }
      }
      https1 = {
        name = "https1-set"
        rules = {
          "xff-strip-port" = {
            name     = "https1-xff-strip-port"
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
      https2 = {
        name = "https2-set"
        rules = {
          "xff-strip-port" = {
            name     = "https2-xff-strip-port"
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
    rules = {
      http = {
        name     = "http-rule"
        priority = 1
        backend_key  = "http"
        listener_key = "http"
        rewrite_key  = "http"
      }
      https1 = {
        name     = "https1-rule"
        priority = 2
        backend_key  = "https1"
        listener_key = "https1"
        rewrite_key  = "https1"
      }
      https2 = {
        name     = "https2-rule"
        priority = 3
        backend_key  = "https2"
        listener_key = "https2"
        rewrite_key  = "https2"
      }
      redirect_listener = {
        name     = "redirect-listener-rule"
        priority = 4
        listener_key = "redirect_listener"
        redirect_key = "redirect_listener"
      }
      redirect_url = {
        name     = "redirect-url-rule"
        priority = 5
        listener_key = "redirect_url"
        redirect_key = "redirect_url"
      }
      path_based_backend = {
        name         = "path-based-backend-rule"
        priority     = 6
        listener_key     = "path_based_backend"
        url_path_map_key = "path_based_backend"
      }
      path_based_redirect_listener = {
        name         = "path-redirect-listener-rule"
        priority     = 7
        listener_key     = "path_based_redirect_listener"
        url_path_map_key = "path_based_redirect_listener"
      }
      path_based_redirect_url = {
        name         = "path-redirect-rul-rule"
        priority     = 8
        listener_key     = "path_based_redirect_url"
        url_path_map_key = "path_based_redirect_url"
      }
    }
    redirects = {
      redirect_listener = {
        name                 = "listener-redirect"
        type                 = "Permanent"
        target_listener_key      = "http"
        include_path         = true
        include_query_string = true
      }
      redirect_url = {
        name                 = "url-redirect"
        type                 = "Temporary"
        target_url           = "http://example.com"
        include_path         = true
        include_query_string = true
      }
    }
    url_path_maps = {
      path_based_backend = {
        name    = "backend-map"
        backend_key = "http"
        path_rules = {
          http = {
            paths   = ["/plaintext"]
            backend_key = "http"
          }
          https = {
            paths   = ["/secure"]
            backend_key = "https1"
          }
        }
      }
      path_based_redirect_listener = {
        name    = "redirect-listener-map"
        backend_key = "http"
        path_rules = {
          http = {
            paths    = ["/redirect"]
            redirect_key = "redirect_listener"
          }
        }
      }
      path_based_redirect_url = {
        name    = "redirect-url-map"
        backend_key = "http"
        path_rules = {
          http = {
            paths    = ["/redirect"]
            redirect_key = "redirect_url"
          }
        }
      }
    }
  }
}
```

## Reference

### Requirements

- `terraform`, version: >= 1.5, < 2.0
- `azurerm`, version: ~> 4.0

### Providers

- `azurerm`, version: ~> 4.0



### Resources

- `application_gateway` (managed)
- `public_ip` (managed)
- `public_ip` (data)

### Required Inputs

Name | Type | Description
--- | --- | ---
[`name`](#name) | `string` | The name of the Application Gateway.
[`resource_group_name`](#resource_group_name) | `string` | The name of the Resource Group to use.
[`region`](#region) | `string` | The name of the Azure region to deploy the resources in.
[`subnet_id`](#subnet_id) | `string` | An ID of a subnet (must be dedicated to Application Gateway v2) that will host the Application Gateway.
[`public_ip`](#public_ip) | `object` | A map defining listener's public IP configuration.
[`frontend_ip_configuration_name`](#frontend_ip_configuration_name) | `string` | A frontend IP configuration name.
[`listeners`](#listeners) | `map` | A map of listeners for the Application Gateway.
[`rules`](#rules) | `map` | A map of rules for the Application Gateway.

### Optional Inputs

Name | Type | Description
--- | --- | ---
[`tags`](#tags) | `map` | The map of tags to assign to all created resources.
[`zones`](#zones) | `list` | A list of zones the Application Gateway should be available in.
[`domain_name_label`](#domain_name_label) | `string` | A label for the Domain Name.
[`capacity`](#capacity) | `object` | A map defining whether static or autoscale configuration is used.
[`enable_http2`](#enable_http2) | `bool` | Enable HTTP2 on the Application Gateway.
[`waf`](#waf) | `object` | A map defining only the SKU and providing basic WAF (Web Application Firewall) configuration for Application Gateway.
[`managed_identities`](#managed_identities) | `list` | A list of existing User-Assigned Managed Identities.
[`global_ssl_policy`](#global_ssl_policy) | `object` | A map defining global SSL settings.
[`ssl_profiles`](#ssl_profiles) | `map` | A map of SSL profiles.
[`backend_pool`](#backend_pool) | `object` | A map defining a backend pool, when skipped will create an empty backend.
[`backend_settings`](#backend_settings) | `map` | A map of backend settings for the Application Gateway.
[`probes`](#probes) | `map` | A map of probes for the Application Gateway.
[`rewrites`](#rewrites) | `map` | A map of rewrites for the Application Gateway.
[`redirects`](#redirects) | `map` | A map of redirects for the Application Gateway.
[`url_path_maps`](#url_path_maps) | `map` | A map of URL path maps for the Application Gateway.

### Outputs

Name |  Description
--- | ---
`public_ip` | A public IP assigned to the Application Gateway.
`public_domain_name` | Public domain name assigned to the Application Gateway.
`backend_pool_id` | The identifier of the Application Gateway backend address pool.

### Required Inputs details

#### name

The name of the Application Gateway.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### resource_group_name

The name of the Resource Group to use.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### region

The name of the Azure region to deploy the resources in.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### subnet_id

An ID of a subnet (must be dedicated to Application Gateway v2) that will host the Application Gateway.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### public_ip

A map defining listener's public IP configuration.

Following properties are available:
- `create`              - (`bool`, optional, defaults to `true`) controls if the Public IP resource is created or sourced.
- `name`                - (`string`, optional) name of the Public IP resource, required unless `public_ip` module and `id`
                          property are used.
- `resource_group_name` - (`string`, optional, defaults to `null`) name of the Resource Group hosting the Public IP resource, 
                          used only for sourced resources.
- `id`                  - (`string`, optional, defaults to `null`) ID of the Public IP to associate with the Listener. 
                          Property is used when Public IP is not created or sourced within this module.


Type: 

```hcl
object({
    create              = optional(bool, true)
    name                = optional(string)
    resource_group_name = optional(string)
    id                  = optional(string)
  })
```


<sup>[back to list](#modules-required-inputs)</sup>

#### frontend_ip_configuration_name

A frontend IP configuration name.

Type: string

<sup>[back to list](#modules-required-inputs)</sup>

#### listeners

A map of listeners for the Application Gateway.

Every listener contains attributes:

- `name`                     - (`string`, required) the name for this Frontend Port.
- `port`                     - (`string`, required) the port used for this Frontend Port.
- `protocol`                 - (`string`, optional, defaults to `Https`) the Protocol to use for this HTTP Listener.
- `host_names`               - (`list`, optional, defaults to `null`) A list of Hostname(s) should be used for this HTTP 
                               Listener, it allows special wildcard characters.
- `ssl_profile_name`         - (`string`, optional, defaults to `null`) the name of the associated SSL Profile which should be
                               used for this HTTP Listener.
- `ssl_certificate_vault_id` - (`string`, optional, defaults to `null`) Secret Id of (base-64 encoded unencrypted pfx) Secret
                               or Certificate object stored in Azure KeyVault.
- `ssl_certificate_path`     - (`string`, optional, defaults to `null`) Path to the file with tThe base64-encoded PFX
                               certificate data.
- `ssl_certificate_pass`     - (`string`, optional, defaults to `null`) Password for the pfx file specified in data.
- `custom_error_pages`       - (`map`, optional, defaults to `{}`) Map of string, where key is HTTP status code and value is
                               error page URL of the application gateway customer error.


Type: 

```hcl
map(object({
    name                     = string
    port                     = number
    protocol                 = optional(string, "Http")
    host_names               = optional(list(string))
    ssl_profile_name         = optional(string)
    ssl_certificate_vault_id = optional(string)
    ssl_certificate_path     = optional(string)
    ssl_certificate_pass     = optional(string)
    custom_error_pages       = optional(map(string), {})
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

#### rules

A map of rules for the Application Gateway. A rule combines backend's, listener's, rewrites' and redirects' configurations.

A key is an application name that is used to prefix all components inside an Application Gateway
that are created for this application.

Every rule contains following attributes:

- `name`             - (`string`, required) Rule name.
- `priority`         - (`string`, required) Rule evaluation order can be dictated by specifying an integer value from 1 to 
                       20000 with 1 being the highest priority and 20000 being the lowest priority.
- `listener_key`     - (`string`, required) a key identifying a listener config defined in `var.listeners`.
- `backend_key`      - (`string`, optional, mutually exclusive with `url_path_map_key` and `redirect_key`) a key identifying a
                       backend config defined in `var.backend_settings`.
- `rewrite_key`      - (`string`, optional, defaults to `null`) a key identifying a rewrite config defined in `var.rewrites`.
- `url_path_map_key` - (`string`, optional, mutually exclusive with `backend_key` and `redirect_key`) a key identifying a
                       url_path_map config defined in `var.url_path_maps`.
- `redirect_key`     - (`string`, optional, mutually exclusive with `url_path_map_key` and `backend_key`) a key identifying a
                       redirect config defined in `var.redirects`.


Type: 

```hcl
map(object({
    name             = string
    priority         = number
    backend_key      = optional(string)
    listener_key     = string
    rewrite_key      = optional(string)
    url_path_map_key = optional(string)
    redirect_key     = optional(string)
  }))
```


<sup>[back to list](#modules-required-inputs)</sup>

### Optional Inputs details

#### tags

The map of tags to assign to all created resources.

Type: map(string)

Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### zones

A list of zones the Application Gateway should be available in. For non-zonal deployments this should be set to an empty list,
as `null` will enforce the default value.

**Note!** \
This is also enforced on the Public IP. The Public IP object brings in some limitations as it can only be non-zonal, pinned to
a single zone or zone-redundant (so available in all zones in a region).

Therefore make sure that if you specify more than one zone you specify all available in a region. You can use a subset, but the
Public IP will be created in all zones anyway. This fact will cause Terraform to recreate the IP resource during next 
`terraform apply` as there will be difference between the state and the actual configuration.

For details on zones currently available in a region of your choice refer to
[Microsoft's documentation](https://docs.microsoft.com/en-us/azure/availability-zones/az-region).


Type: list(string)

Default value: `[1 2 3]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### domain_name_label

A label for the Domain Name. Will be used to make up the FQDN. 
If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system.


Type: string

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### capacity

A map defining whether static or autoscale configuration is used.
  
Following properties are available:
- `static`    - (`number`, optional, defaults to `2`) static number of Application Gateway instances, takes values bewteen 1 
                and 125.
- `autoscale` - (`map`, optional, defaults to `null`) autoscaling configuration, when specified `static` is being ignored:
  - `min` - (`number`, required) minimum number of instances during autoscaling.
  - `max` - (`number`, required) maximum number of instances during autoscaling.


Type: 

```hcl
object({
    static = optional(number, 2)
    autoscale = optional(object({
      min = number
      max = number
    }))
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### enable_http2

Enable HTTP2 on the Application Gateway.

Type: bool

Default value: `false`

<sup>[back to list](#modules-optional-inputs)</sup>

#### waf

A map defining only the SKU and providing basic WAF (Web Application Firewall) configuration for Application Gateway. This
module does not support WAF rules configuration and advanced WAF settings.

Following properties are available:
- `prevention_mode`  - (`bool`, required) `true` sets WAF mode to `Prevention` mode, `false` to `Detection` mode.
- `rule_set_type`    - (`string`, optional, defaults to `OWASP`) the type of the Rule Set used for this WAF.
- `rule_set_version` - (`string`, optional, defaults to Azure defaults) the version of the Rule Set used for this WAF.


Type: 

```hcl
object({
    prevention_mode  = bool
    rule_set_type    = optional(string, "OWASP")
    rule_set_version = optional(string)
  })
```


Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### managed_identities

A list of existing User-Assigned Managed Identities.
  
**Note!** \
Application Gateway uses Managed Identities to retrieve certificates from a Key Vault. These identities have to have at least
`GET` access to Key Vault's secrets. Otherwise Application Gateway will not be able to use certificates stored in the Vault.


Type: list(string)

Default value: `&{}`

<sup>[back to list](#modules-optional-inputs)</sup>

#### global_ssl_policy

A map defining global SSL settings.

Following properties are available:
- `type`                 - (`string`, required, but defaults to `Predefined`) type of an SSL policy, possible values include:
                           `Predefined`, `Custom` or `CustomV2`.
- `name`                 - (`string`, optional, defaults to `AppGwSslPolicy20220101S`) name of an SSL policy, supported only
                           for `type` set to `Predefined`.
    
  **Note!** \
  Normally you can set it also for `Custom` policies but the name is discarded on Azure side causing an update to Application
  Gateway each time Terraform code is run. Therefore this property is omitted in the code for `Custom` policies.

  For the `Predefined` policies, check the
  [Microsoft documentation](https://docs.microsoft.com/en-us/azure/application-gateway/application-gateway-ssl-policy-overview)
  for possible values as they tend to change over time. The default value is currently (Q1 2023) is also Microsoft's default.

- `min_protocol_version` - (`string`, optional, defaults to `null`) minimum version of the TLS protocol for SSL Policy, 
                           required only for `type` set to `Custom`.
- `cipher_suites`        - (`list`, optional, defaults to `[]`) a list of accepted cipher suites, required only for `type` set
                           to `Custom`. For possible values see [provider documentation](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_gateway#cipher_suites).


Type: 

```hcl
object({
    type                 = optional(string, "Predefined")
    name                 = optional(string, "AppGwSslPolicy20220101S")
    min_protocol_version = optional(string)
    cipher_suites        = optional(list(string), [])
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### ssl_profiles

A map of SSL profiles.

SSL profiles can be later on referenced in HTTPS listeners by providing a name of the profile in the `name` property.
For possible values check the: `ssl_policy_type`, `ssl_policy_min_protocol_version` and `ssl_policy_cipher_suites` properties
as SSL profile is a named SSL policy - same properties apply.
The only difference is that you cannot name an SSL policy inside an SSL profile.

Every SSL profile contains following attributes:

- `name`                            - (`string`, required) name of the SSL profile.
- `ssl_policy_name`                 - (`string`, optional, defaults to `null`) name of predefined policy.
- `ssl_policy_min_protocol_version` - (`string`, optional, defaults to `null`) the minimal TLS version.
- `ssl_policy_cipher_suites`        - (`list`, optional, defaults to `null`) a list of accepted cipher suites.


Type: 

```hcl
map(object({
    name                            = string
    ssl_policy_name                 = optional(string)
    ssl_policy_min_protocol_version = optional(string)
    ssl_policy_cipher_suites        = optional(list(string))
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### backend_pool

A map defining a backend pool, when skipped will create an empty backend.
  
Following properties are available:
- `name`         - (`string`, optional, defaults to `vmseries`) name of the backend pool.
- `vmseries_ips` - (`list`, optional, defaults to `[]`) IP addresses of VM-Series' interfaces that will serve as backend nodes
                   for the Application Gateway.



Type: 

```hcl
object({
    name         = optional(string, "vmseries")
    vmseries_ips = optional(list(string), [])
  })
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### backend_settings

A map of backend settings for the Application Gateway.

Every backend contains attributes:

- `name`                      - (`string`, required) the name of the backend settings.
- `port`                      - (`number`, required) the port which should be used for this Backend HTTP Settings Collection.
- `protocol`                  - (`string`, required) the Protocol which should be used. Possible values are Http and Https.
- `path`                      - (`string`, optional, defaults to `null`) the Path which should be used as a prefix for all HTTP
                                requests.
- `hostname_from_backend`     - (`bool`, optional, defaults to `false`) whether host header should be picked from the host name
                                of the backend server.
- `hostname`                  - (`string`, optional, defaults to `null`) host header to be sent to the backend servers.
- `timeout`                   - (`number`, optional, defaults to `60`) the request timeout in seconds, which must be between 1
                                and 86400 seconds.
- `use_cookie_based_affinity` - (`bool`, optional, defaults to `true`) when set to `true` enables Cookie-Based Affinity.
- `affinity_cookie_name`      - (`string`, optional, defaults to Azure defaults) the name of the affinity cookie.
- `probe_key`                 - (`string`, optional, defaults to `null`) a key identifying a Probe definition in the 
                                `var.probes`.
- `root_certs`                - (`map`, optional, defaults to `{}`) a map of objects defining paths to trusted root 
                                certificates (`PEM` format), each map contains 2 properties:
  - `name` - (`string`, required) a name of the certificate.
  - `path` - (`string`, required) path to a file on a local file system containing the root cert.


Type: 

```hcl
map(object({
    name                      = string
    port                      = number
    protocol                  = string
    path                      = optional(string)
    hostname_from_backend     = optional(bool, false)
    hostname                  = optional(string)
    timeout                   = optional(number, 60)
    use_cookie_based_affinity = optional(bool, true)
    affinity_cookie_name      = optional(string)
    probe_key                 = optional(string)
    root_certs = optional(map(object({
      name = string
      path = string
    })), {})
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### probes

A map of probes for the Application Gateway.

Every probe contains attributes:

- `name`       - (`string`, required) the name used for this Probe.
- `path`       - (`string`, required) the path used for this Probe.
- `host`       - (`string`, optional, defaults to `null`) the hostname used for this Probe.
- `port`       - (`number`, optional, defaults to `null`) custom port which will be used for probing the backend servers, when
                 skipped a default port for `protocol` will be used.
- `protocol`   - (`string`, optional, defaults `Http`) the protocol which should be used, possible values are `Http` or `Https`.
- `interval`   - (`number`, optional, defaults `5`) the interval between two consecutive probes in seconds.
- `timeout`    - (`number`, optional, defaults `30`) the timeout after which a single probe is marked unhealthy.
- `threshold`  - (`number`, optional, defaults `2`) the unhealthy Threshold for this Probe, which indicates the amount of
                 retries which should be attempted before a node is deemed unhealthy.
- `match_code` - (`list`, optional, defaults to `null`) custom list of allowed status codes for this Health Probe.
- `match_body` - (`string`, optional, defaults to `null`) a custom snippet from the Response Body which must be present to 
                 treat a single probe as healthy.


Type: 

```hcl
map(object({
    name       = string
    path       = string
    host       = optional(string)
    port       = optional(number)
    protocol   = optional(string, "Http")
    interval   = optional(number, 5)
    timeout    = optional(number, 30)
    threshold  = optional(number, 2)
    match_code = optional(list(number))
    match_body = optional(string)
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### rewrites

A map of rewrites for the Application Gateway.

Every rewrite contains attributes:

- `name`  - (`string`, required) Rewrite Rule Set name.
- `rules` - (`map`, required) rewrite Rule Set defined with following attributes available:
  - `name`             - (`string`, required) Rewrite Rule name.
  - `sequence`         - (`number`, required) determines the order of rule execution in a set.
  - `conditions`       - (`map`, optional, defaults to `{}`) one or more condition blocks as defined below:
    - `pattern`     - (`string`, required) the pattern, either fixed string or regular expression, that evaluates the
                      truthfulness of the condition.
    - `ignore_case` - (`string`, optional, defaults to `false`) perform a case in-sensitive comparison.
    - `negate`      - (`bool`, optional, defaults to `false`) negate the result of the condition evaluation.
  - `request_headers`  - (`map`, optional, defaults to `{}`) map of request headers, where header name is the key, header value
                         is the value.
  - `response_headers` - (`map`, optional, defaults to `{}`) map of response header, where header name is the key, header value
                         is the value.


Type: 

```hcl
map(object({
    name = string
    rules = optional(map(object({
      name     = string
      sequence = number
      conditions = optional(map(object({
        pattern     = string
        ignore_case = optional(bool, false)
        negate      = optional(bool, false)
      })), {})
      request_headers  = optional(map(string), {})
      response_headers = optional(map(string), {})
    })), {})
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### redirects

A map of redirects for the Application Gateway.

Every redirect contains attributes:
- `name`                 - (`string`, required) the name of redirect.
- `type`                 - (`string`, required) the type of redirect, possible values are `Permanent`, `Temporary`, `Found` and
                           `SeeOther`.
- `target_listener_key`  - (`string`, optional, mutually exclusive with `target_url`) a key identifying a backend config
                           defined in `var.listeners`.
- `target_url`           - (`string`, optional, mutually exclusive with `target_listener`) the URL to redirect to.
- `include_path`         - (`bool`, optional, defaults to Azure defaults) whether or not to include the path in the redirected
                           URL.
- `include_query_string` - (`bool`, optional, defaults to Azure defaults) whether or not to include the query string in the
                           redirected URL.


Type: 

```hcl
map(object({
    name                 = string
    type                 = string
    target_listener_key  = optional(string)
    target_url           = optional(string)
    include_path         = optional(bool)
    include_query_string = optional(bool)
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>

#### url_path_maps

A map of URL path maps for the Application Gateway.

Every URL path map contains attributes:
- `name`         - (`string`, required) the name of redirect.
- `backend_key`  - (`string`, required) a key identifying the default backend for redirect defined in `var.backend_settings`.
- `path_rules`   - (`map`, optional, defaults to `{}`) the map of rules, where every object has attributes:
  - `paths`        - (`list`, required) a list of paths.
  - `backend_key`  - (`string`, optional, mutually exclusive with `redirect_key`) a key identifying a backend config defined
                     in `var.backend_settings`.
  - `redirect_key` - (`string`, optional, mutually exclusive with `backend_key`) a key identifying a redirect config defined
                     in `var.redirects`.


Type: 

```hcl
map(object({
    name        = string
    backend_key = string
    path_rules = optional(map(object({
      paths        = list(string)
      backend_key  = optional(string)
      redirect_key = optional(string)
    })), {})
  }))
```


Default value: `map[]`

<sup>[back to list](#modules-optional-inputs)</sup>