---
hide_title: true
id: vpn
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
sidebar_label: VPN
title: VPN
---

# VPN

This module makes it easy to deploy either GCP-to-GCP or GCP-to-On-prem VPN using [Cloud HA VPN](https://cloud.google.com/vpn/docs/concepts/overview#ha-vpn) including HA VPN Gateway itself. VPN includes one or more VPN instances (connections).

Each created VPN instance is represented by 1..4 VPN tunnels that taget remote VPN gateway(s) located in a single remote location. Remote VPN gateway(s) might have singe IP address (`redundancy_type = "SINGLE_IP_INTERNALLY_REDUNDANT"`) or 2 IP addresses (`redundancy_type = "TWO_IPS_REDUNDANCY"`).

[![GitHub Logo](/img/view_on_github.png)](https://github.com/PaloAltoNetworks/terraform-google-swfw-modules/tree/main/modules/vpn) [![Terraform Logo](/img/view_on_terraform_registry.png)](https://registry.terraform.io/modules/PaloAltoNetworks/swfw-modules/google/latest/submodules/vpn)

## Example

```hcl
data "google_compute_network" "test" \{
  name    = "<network_name>"
  project = "<project_id>"
\}

module "vpn" \{
  source = "../../../modules/vpn"

  project = "<project_id>"
  region  = "us-central1"

  vpn_gateway_name = "my-test-gateway"
  router_name      = "my-test-router"
  network          = data.google_compute_network.test.self_link

  vpn_config = \{
    router_asn    = 65000
    local_network = "vpc-vpn"

    router_advertise_config = \{
      ip_ranges = \{
        "10.10.0.0/16" : "GCP range 1"
      \}
      mode   = "CUSTOM"
      groups = null
    \}

    instances = \{
      vpn-to-onprem1 = \{
        name = "vpn-to-onprem1",
        peer_external_gateway = \{
          redundancy_type = "SINGLE_IP_INTERNALLY_REDUNDANT"
          interfaces = [\{
            id         = 0
            ip_address = "1.1.1.1"
          \}]
        \},
        tunnels = \{
          remote0 = \{
            bgp_peer = \{
              address = "169.254.1.2"
              asn     = 65001
            \}
            bgp_peer_options                = null
            bgp_session_range               = "169.254.1.1/30"
            ike_version                     = 2
            vpn_gateway_interface           = 0
            peer_external_gateway_interface = 0
            shared_secret                   = "secret"
          \}
          remote1 = \{
            bgp_peer = \{
              address = "169.254.1.6"
              asn     = 65001
            \}
            bgp_peer_options                = null
            bgp_session_range               = "169.254.1.5/30"
            ike_version                     = 2
            vpn_gateway_interface           = 1
            peer_external_gateway_interface = null
            shared_secret                   = "secret"
          \}
        \}
      \}
      vpn-to-onprem2 = \{
        name = "vpn-to-onprem2",
        peer_external_gateway = \{
          redundancy_type = "TWO_IPS_REDUNDANCY"
          interfaces = [\{
            id         = 0
            ip_address = "3.3.3.3"
            \}, \{
            id         = 1
            ip_address = "4.4.4.4"
          \}]
        \},
        tunnels = \{
          remote0 = \{
            bgp_peer = \{
              address = "169.254.2.2"
              asn     = 65002
            \}
            bgp_peer_options                = null
            bgp_session_range               = "169.254.2.1/30"
            ike_version                     = 2
            vpn_gateway_interface           = 0
            peer_external_gateway_interface = 0
            shared_secret                   = "secret"
          \}
          remote1 = \{
            bgp_peer = \{
              address = "169.254.2.6"
              asn     = 65002
            \}
            bgp_peer_options                = null
            bgp_session_range               = "169.254.2.5/30"
            ike_version                     = 2
            vpn_gateway_interface           = 1
            peer_external_gateway_interface = 1
            shared_secret                   = "secret"
          \}
        \}
      \}
      vpn-to-gcp = \{
        name = "vpn-to-gcp",

        peer_gcp_gateway = "https://www.googleapis.com/compute/v1/projects/<remote_project_id>/regions/<region>/vpnGateways/<remote_vpn_gw_name>"

        tunnels = \{
          remote0 = \{
            bgp_peer = \{
              address = "169.254.3.2"
              asn     = 65003
            \}
            bgp_peer_options                = null
            bgp_session_range               = "169.254.3.1/30"
            ike_version                     = 2
            vpn_gateway_interface           = 0
            peer_external_gateway_interface = null
            shared_secret                   = "secret"
          \}
          remote1 = \{
            bgp_peer = \{
              address = "169.254.3.6"
              asn     = 65003
            \}
            bgp_peer_options                = null
            bgp_session_range               = "169.254.3.5/30"
            ike_version                     = 2
            vpn_gateway_interface           = 1
            peer_external_gateway_interface = 1
            shared_secret                   = "secret"
          \}
        \}
      \}
    \}
  \}
\}
```

## Reference
<!-- BEGINNING OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.3, < 2.0 |
| <a name="requirement_google"></a> [google](#requirement\_google) | >= 4.58 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | >= 4.58 |
| <a name="provider_google-beta"></a> [google-beta](#provider\_google-beta) | n/a |
| <a name="provider_random"></a> [random](#provider\_random) | n/a |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [google-beta_google_compute_vpn_tunnel.tunnels](https://registry.terraform.io/providers/hashicorp/google-beta/latest/docs/resources/google_compute_vpn_tunnel) | resource |
| [google_compute_external_vpn_gateway.external_gateway](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_external_vpn_gateway) | resource |
| [google_compute_ha_vpn_gateway.ha_gateway](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_ha_vpn_gateway) | resource |
| [google_compute_router.router](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_router) | resource |
| [google_compute_router_interface.router_interface](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_router_interface) | resource |
| [google_compute_router_peer.bgp_peer](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_router_peer) | resource |
| [random_id.secret](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/id) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_labels"></a> [labels](#input\_labels) | Labels for VPN components | `map(string)` | `\{\}` | no |
| <a name="input_network"></a> [network](#input\_network) | VPC network ID that should be used for deployment | `string` | n/a | yes |
| <a name="input_project"></a> [project](#input\_project) | n/a | `string` | `null` | no |
| <a name="input_region"></a> [region](#input\_region) | Region to deploy VPN gateway in | `string` | n/a | yes |
| <a name="input_router_name"></a> [router\_name](#input\_router\_name) | Cloud router name. The router is created by the module | `string` | `null` | no |
| <a name="input_vpn_config"></a> [vpn\_config](#input\_vpn\_config) | VPN configuration from GCP to on-prem or from GCP to GCP.<br />If you'd like secrets to be randomly generated set `shared_secret` to empty string ("").<br /><br />Example:<pre>vpn\_config = \{<br />  router\_asn    = 65000<br />  local\_network = "vpc-vpn"<br /><br />  router\_advertise\_config = \{<br />    ip\_ranges = \{<br />      "10.10.0.0/16" : "GCP range 1"<br />    \}<br />    mode   = "CUSTOM"<br />    groups = null<br />  \}<br /><br />  instances = \{<br />    vpn-to-onprem = \{<br />      name = "vpn-to-onprem",<br />      peer\_external\_gateway = \{<br />        redundancy\_type = "TWO\_IPS\_REDUNDANCY"<br />        interfaces = [\{<br />          id         = 0<br />          ip\_address = "1.1.1.1"<br />          \}, \{<br />          id         = 1<br />          ip\_address = "2.2.2.2"<br />        \}]<br />      \},<br />      tunnels = \{<br />        remote0 = \{<br />          bgp\_peer = \{<br />            address = "169.254.1.2"<br />            asn     = 65001<br />          \}<br />          bgp\_peer\_options                = null<br />          bgp\_session\_range               = "169.254.1.1/30"<br />          ike\_version                     = 2<br />          vpn\_gateway\_interface           = 0<br />          peer\_external\_gateway\_interface = 0<br />          shared\_secret                   = "secret"<br />        \}<br />        remote1 = \{<br />          bgp\_peer = \{<br />            address = "169.254.1.6"<br />            asn     = 65001<br />          \}<br />          bgp\_peer\_options                = null<br />          bgp\_session\_range               = "169.254.1.5/30"<br />          ike\_version                     = 2<br />          vpn\_gateway\_interface           = 1<br />          peer\_external\_gateway\_interface = 1<br />          shared\_secret                   = "secret"<br />        \}<br />      \}<br />    \}<br />  \}<br />\}</pre> | `any` | n/a | yes |
| <a name="input_vpn_gateway_name"></a> [vpn\_gateway\_name](#input\_vpn\_gateway\_name) | VPN gateway name. Gateway created by the module | `string` | n/a | yes |

### Outputs

| Name | Description |
|------|-------------|
| <a name="output_random_secret"></a> [random\_secret](#output\_random\_secret) | HA VPN IPsec tunnels secret that has been randomly generated |
| <a name="output_vpn_gw_local_address_1"></a> [vpn\_gw\_local\_address\_1](#output\_vpn\_gw\_local\_address\_1) | HA VPN gateway IP address 1 |
| <a name="output_vpn_gw_local_address_2"></a> [vpn\_gw\_local\_address\_2](#output\_vpn\_gw\_local\_address\_2) | HA VPN gateway IP address 2 |
| <a name="output_vpn_gw_name"></a> [vpn\_gw\_name](#output\_vpn\_gw\_name) | HA VPN gateway name |
| <a name="output_vpn_gw_self_link"></a> [vpn\_gw\_self\_link](#output\_vpn\_gw\_self\_link) | HA VPN gateway self\_link |
<!-- END OF PRE-COMMIT-TERRAFORM DOCS HOOK -->
<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.2, < 2.0 |
| <a name="requirement_google"></a> [google](#requirement\_google) | == 4.58 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_google"></a> [google](#provider\_google) | == 4.58 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_vpn_ha"></a> [vpn\_ha](#module\_vpn\_ha) | terraform-google-modules/vpn/google | 3.0.1 |

## Resources

| Name | Type |
|------|------|
| [google_compute_ha_vpn_gateway.ha_gateway](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/compute_ha_vpn_gateway) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_project"></a> [project](#input\_project) | n/a | `string` | `null` | no |
| <a name="input_region"></a> [region](#input\_region) | Region to deploy VPN gateway in | `string` | n/a | yes |
| <a name="input_vpc_network_id"></a> [vpc\_network\_id](#input\_vpc\_network\_id) | VPC network ID that should be used for deployment | `string` | n/a | yes |
| <a name="input_vpn"></a> [vpn](#input\_vpn) | VPN configuration from GCP to on-prem or from GCP to GCP.<br />If you'd like secrets to be randomly generated set `shared_secret` to empty string ("").<br /><br />Example:<pre>vpn = \{<br />router\_asn    = 65000<br />local\_network = "vpc-vpn"<br /><br />router\_advertise\_config = \{<br />  ip\_ranges = \{<br />    "10.10.0.0/16" : "GCP range 1"<br />  \}<br />  mode   = "CUSTOM"<br />  groups = null<br />\}<br /><br />instances = \{<br />  vpn-to-onprem = \{<br />    name = "vpn-to-onprem",<br />    peer\_external\_gateway = \{<br />      redundancy\_type = "TWO\_IPS\_REDUNDANCY"<br />      interfaces = [\{<br />        id         = 0<br />        ip\_address = "1.1.1.1"<br />        \}, \{<br />        id         = 1<br />        ip\_address = "2.2.2.2"<br />      \}]<br />    \},<br />    tunnels = \{<br />      remote0 = \{<br />        bgp\_peer = \{<br />          address = "169.254.1.2"<br />          asn     = 65001<br />        \}<br />        bgp\_peer\_options                = null<br />        bgp\_session\_range               = "169.254.1.1/30"<br />        ike\_version                     = 2<br />        vpn\_gateway\_interface           = 0<br />        peer\_external\_gateway\_interface = 0<br />        shared\_secret                   = "secret"<br />      \}<br />      remote1 = \{<br />        bgp\_peer = \{<br />          address = "169.254.1.6"<br />          asn     = 65001<br />        \}<br />        bgp\_peer\_options                = null<br />        bgp\_session\_range               = "169.254.1.5/30"<br />        ike\_version                     = 2<br />        vpn\_gateway\_interface           = 1<br />        peer\_external\_gateway\_interface = 1<br />        shared\_secret                   = "secret"<br />      \}<br />    \}<br />  \}<br />\}</pre> | `any` | n/a | yes |
| <a name="input_vpn_gateway_name"></a> [vpn\_gateway\_name](#input\_vpn\_gateway\_name) | VPN gateway name | `string` | n/a | yes |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_local_ipsec_gw2_address_2"></a> [local\_ipsec\_gw2\_address\_2](#output\_local\_ipsec\_gw2\_address\_2) | HA VPN gateway IP address 2 |
| <a name="output_local_ipsec_gw_address_1"></a> [local\_ipsec\_gw\_address\_1](#output\_local\_ipsec\_gw\_address\_1) | HA VPN gateway IP address 1 |
| <a name="output_random_secrets_map"></a> [random\_secrets\_map](#output\_random\_secrets\_map) | HA VPN IPsec tunnels secrets that were randomly generated |
| <a name="output_vpn_gateway_name"></a> [vpn\_gateway\_name](#output\_vpn\_gateway\_name) | HA VPN gateway name |
| <a name="output_vpn_gateway_self_link"></a> [vpn\_gateway\_self\_link](#output\_vpn\_gateway\_self\_link) | HA VPN gateway self\_link |
<!-- END_TF_DOCS -->