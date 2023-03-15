# Paloaltonetworks.Panos

Collection version 2.13.1

<div className="contents" local="" depth="1">

</div>

## Description

Collection for Palo Alto Networks PAN-OS

**Author:**

- Garfield Lee Freeman

**Supported ansible-core versions:**

- 2.9.10 or newer

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>

<div className="toctree" maxdepth="1">

</div>

## Plugin Index

These are the plugins in the paloaltonetworks.panos collection:

### Modules

- `panos_address_group module <ansible_collections.paloaltonetworks.panos.panos_address_group_module>`
  -- Manage address group objects on PAN-OS devices.
- `panos_address_object module <ansible_collections.paloaltonetworks.panos.panos_address_object_module>`
  -- Manage address objects on PAN-OS devices.
- `panos_administrator module <ansible_collections.paloaltonetworks.panos.panos_administrator_module>`
  -- Manage PAN-OS administrator user accounts.
- `panos_admpwd module <ansible_collections.paloaltonetworks.panos.panos_admpwd_module>`
  -- change admin password of PAN-OS device using SSH with SSH key
- `panos_aggregate_interface module <ansible_collections.paloaltonetworks.panos.panos_aggregate_interface_module>`
  -- Manage aggregate network interfaces
- `panos_api_key module <ansible_collections.paloaltonetworks.panos.panos_api_key_module>`
  -- retrieve api_key for username/password combination
- `panos_application_filter module <ansible_collections.paloaltonetworks.panos.panos_application_filter_module>`
  -- Manage application filters on PAN-OS devices.
- `panos_application_group module <ansible_collections.paloaltonetworks.panos.panos_application_group_module>`
  -- Manage application groups on PAN-OS devices.
- `panos_application_object module <ansible_collections.paloaltonetworks.panos.panos_application_object_module>`
  -- Manage application objects on PAN-OS devices.
- `panos_bgp module <ansible_collections.paloaltonetworks.panos.panos_bgp_module>`
  -- Manage Border Gateway Protocol (BGP)
- `panos_bgp_aggregate module <ansible_collections.paloaltonetworks.panos.panos_bgp_aggregate_module>`
  -- Manage a BGP Aggregation Prefix Policy
- `panos_bgp_auth module <ansible_collections.paloaltonetworks.panos.panos_bgp_auth_module>`
  -- Manage a BGP Authentication Profile
- `panos_bgp_conditional_advertisement module <ansible_collections.paloaltonetworks.panos.panos_bgp_conditional_advertisement_module>`
  -- Manage a BGP conditional advertisement.
- `panos_bgp_dampening module <ansible_collections.paloaltonetworks.panos.panos_bgp_dampening_module>`
  -- Manage a BGP Dampening Profile
- `panos_bgp_peer module <ansible_collections.paloaltonetworks.panos.panos_bgp_peer_module>`
  -- Manage a BGP Peer
- `panos_bgp_peer_group module <ansible_collections.paloaltonetworks.panos.panos_bgp_peer_group_module>`
  -- Manage a BGP Peer Group
- `panos_bgp_policy_filter module <ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module>`
  -- Manage a BGP Policy Import/Export Rule
- `panos_bgp_policy_rule module <ansible_collections.paloaltonetworks.panos.panos_bgp_policy_rule_module>`
  -- Manage a BGP Policy Import/Export Rule
- `panos_bgp_redistribute module <ansible_collections.paloaltonetworks.panos.panos_bgp_redistribute_module>`
  -- Manage a BGP Redistribution Rule
- `panos_cert_gen_ssh module <ansible_collections.paloaltonetworks.panos.panos_cert_gen_ssh_module>`
  -- generates a self-signed certificate using SSH protocol with SSH key
- `panos_check module <ansible_collections.paloaltonetworks.panos.panos_check_module>`
  -- Checks is a PAN-OS device is ready for configuration.
- `panos_commit module <ansible_collections.paloaltonetworks.panos.panos_commit_module>`
  -- Commit a PAN-OS device's candidate configuration.
- `panos_commit_firewall module <ansible_collections.paloaltonetworks.panos.panos_commit_firewall_module>`
  -- Commit the firewall's candidate configuration.
- `panos_commit_panorama module <ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module>`
  -- Commit Panorama's candidate configuration.
- `panos_commit_push module <ansible_collections.paloaltonetworks.panos.panos_commit_push_module>`
  -- Push running configuration to managed devices.
- `panos_config_element module <ansible_collections.paloaltonetworks.panos.panos_config_element_module>`
  -- Modifies an element in the PAN-OS configuration.
- `panos_custom_url_category module <ansible_collections.paloaltonetworks.panos.panos_custom_url_category_module>`
  -- Manage custom url category objects on PAN-OS devices.
- `panos_dag module <ansible_collections.paloaltonetworks.panos.panos_dag_module>`
  -- Manage a dynamic address group
- `panos_dag_tags module <ansible_collections.paloaltonetworks.panos.panos_dag_tags_module>`
  -- Manage tags for DAG's on PAN-OS devices.
- `panos_decryption_rule module <ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module>`
  -- Manage a decryption rule on PAN-OS.
- `panos_device_group module <ansible_collections.paloaltonetworks.panos.panos_device_group_module>`
  -- Manage Panorama device group
- `panos_dhcp module <ansible_collections.paloaltonetworks.panos.panos_dhcp_module>`
  -- Manage DHCP for an interface.
- `panos_dhcp_relay module <ansible_collections.paloaltonetworks.panos.panos_dhcp_relay_module>`
  -- Manage dhcp relay.
- `panos_dhcp_relay_ipv6_address module <ansible_collections.paloaltonetworks.panos.panos_dhcp_relay_ipv6_address_module>`
  -- Manage DHCP IPv6 relay addresses.
- `panos_dynamic_updates module <ansible_collections.paloaltonetworks.panos.panos_dynamic_updates_module>`
  -- Install dynamic updates on PAN-OS devices.
- `panos_dynamic_user_group module <ansible_collections.paloaltonetworks.panos.panos_dynamic_user_group_module>`
  -- Manage dynamic user groups on PAN-OS devices.
- `panos_email_profile module <ansible_collections.paloaltonetworks.panos.panos_email_profile_module>`
  -- Manage email server profiles.
- `panos_email_server module <ansible_collections.paloaltonetworks.panos.panos_email_server_module>`
  -- Manage email servers in an email profile.
- `panos_export module <ansible_collections.paloaltonetworks.panos.panos_export_module>`
  -- export file from PAN-OS devices
- `panos_facts module <ansible_collections.paloaltonetworks.panos.panos_facts_module>`
  -- Collects facts from PAN-OS devices
- `panos_gre_tunnel module <ansible_collections.paloaltonetworks.panos.panos_gre_tunnel_module>`
  -- Manage GRE tunnels on PAN-OS devices.
- `panos_ha module <ansible_collections.paloaltonetworks.panos.panos_ha_module>`
  -- Manage High Availability on PAN-OS
- `panos_http_profile module <ansible_collections.paloaltonetworks.panos.panos_http_profile_module>`
  -- Manage http server profiles.
- `panos_http_profile_header module <ansible_collections.paloaltonetworks.panos.panos_http_profile_header_module>`
  -- Manage HTTP headers for a HTTP profile.
- `panos_http_profile_param module <ansible_collections.paloaltonetworks.panos.panos_http_profile_param_module>`
  -- Manage HTTP params for a HTTP profile.
- `panos_http_server module <ansible_collections.paloaltonetworks.panos.panos_http_server_module>`
  -- Manage HTTP servers in a HTTP server profile.
- `panos_ike_crypto_profile module <ansible_collections.paloaltonetworks.panos.panos_ike_crypto_profile_module>`
  -- Manage IKE Crypto profile on the firewall with subset of settings
- `panos_ike_gateway module <ansible_collections.paloaltonetworks.panos.panos_ike_gateway_module>`
  -- Manage IKE gateway on the firewall with subset of settings.
- `panos_import module <ansible_collections.paloaltonetworks.panos.panos_import_module>`
  -- import file on PAN-OS devices
- `panos_interface module <ansible_collections.paloaltonetworks.panos.panos_interface_module>`
  -- Manage data-port network interfaces
- `panos_ipsec_ipv4_proxyid module <ansible_collections.paloaltonetworks.panos.panos_ipsec_ipv4_proxyid_module>`
  -- Manage IPv4 Proxy Id on an IPSec Tunnel
- `panos_ipsec_profile module <ansible_collections.paloaltonetworks.panos.panos_ipsec_profile_module>`
  -- Manage IPSec Crypto profile on the firewall with subset of
  settings.
- `panos_ipsec_tunnel module <ansible_collections.paloaltonetworks.panos.panos_ipsec_tunnel_module>`
  -- Manage IPSec Tunnels on the firewall with subset of settings.
- `panos_ipv6_address module <ansible_collections.paloaltonetworks.panos.panos_ipv6_address_module>`
  -- Manage IPv6 addresses on an interface.
- `panos_l2_subinterface module <ansible_collections.paloaltonetworks.panos.panos_l2_subinterface_module>`
  -- Manage layer2 subinterface
- `panos_l3_subinterface module <ansible_collections.paloaltonetworks.panos.panos_l3_subinterface_module>`
  -- Manage layer3 subinterface
- `panos_lic module <ansible_collections.paloaltonetworks.panos.panos_lic_module>`
  -- apply authcode to a device/instance
- `panos_loadcfg module <ansible_collections.paloaltonetworks.panos.panos_loadcfg_module>`
  -- load configuration on PAN-OS device
- `panos_log_forwarding_profile module <ansible_collections.paloaltonetworks.panos.panos_log_forwarding_profile_module>`
  -- Manage log forwarding profiles.
- `panos_log_forwarding_profile_match_list module <ansible_collections.paloaltonetworks.panos.panos_log_forwarding_profile_match_list_module>`
  -- Manage log forwarding profile match lists.
- `panos_log_forwarding_profile_match_list_action module <ansible_collections.paloaltonetworks.panos.panos_log_forwarding_profile_match_list_action_module>`
  -- Manage log forwarding profile match list actions.
- `panos_loopback_interface module <ansible_collections.paloaltonetworks.panos.panos_loopback_interface_module>`
  -- Manage network loopback interfaces
- `panos_management_profile module <ansible_collections.paloaltonetworks.panos.panos_management_profile_module>`
  -- Manage interface management profiles.
- `panos_match_rule module <ansible_collections.paloaltonetworks.panos.panos_match_rule_module>`
  -- Test for match against a security rule on PAN-OS devices.
- `panos_mgtconfig module <ansible_collections.paloaltonetworks.panos.panos_mgtconfig_module>`
  -- Module used to configure some of the device management.
- `panos_nat_rule module <ansible_collections.paloaltonetworks.panos.panos_nat_rule_module>`
  -- Manage a policy NAT rule
- `panos_nat_rule2 module <ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module>`
  -- Manage a NAT rule
- `panos_nat_rule_facts module <ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module>`
  -- Get information about a NAT rule.
- `panos_object module <ansible_collections.paloaltonetworks.panos.panos_object_module>`
  -- create/read/update/delete object in PAN-OS or Panorama
- `panos_object_facts module <ansible_collections.paloaltonetworks.panos.panos_object_facts_module>`
  -- Retrieve facts about objects on PAN-OS devices.
- `panos_op module <ansible_collections.paloaltonetworks.panos.panos_op_module>`
  -- execute arbitrary OP commands on PANW devices (e.g. show interface
  all)
- `panos_pbf_rule module <ansible_collections.paloaltonetworks.panos.panos_pbf_rule_module>`
  -- Manage Policy Based Forwarding rules on PAN-OS.
- `panos_pg module <ansible_collections.paloaltonetworks.panos.panos_pg_module>`
  -- Manage a security profiles group
- `panos_query_rules module <ansible_collections.paloaltonetworks.panos.panos_query_rules_module>`
  -- PANOS module that allows search for security rules in PANW NGFW
  devices.
- `panos_redistribution module <ansible_collections.paloaltonetworks.panos.panos_redistribution_module>`
  -- Manage a Redistribution Profile on a virtual router
- `panos_region module <ansible_collections.paloaltonetworks.panos.panos_region_module>`
  -- Manage regions on PAN-OS devices.
- `panos_registered_ip module <ansible_collections.paloaltonetworks.panos.panos_registered_ip_module>`
  -- Register IP addresses for use with dynamic address groups on PAN-OS
  devices.
- `panos_registered_ip_facts module <ansible_collections.paloaltonetworks.panos.panos_registered_ip_facts_module>`
  -- Retrieve facts about registered IPs on PAN-OS devices.
- `panos_restart module <ansible_collections.paloaltonetworks.panos.panos_restart_module>`
  -- Restart a device
- `panos_sag module <ansible_collections.paloaltonetworks.panos.panos_sag_module>`
  -- Create a static address group.
- `panos_schedule_object module <ansible_collections.paloaltonetworks.panos.panos_schedule_object_module>`
  -- Manage schedule objects on PAN-OS devices.
- `panos_security_rule module <ansible_collections.paloaltonetworks.panos.panos_security_rule_module>`
  -- Manage security rule policy on PAN-OS devices or Panorama
  management console.
- `panos_security_rule_facts module <ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module>`
  -- Retrieve information about security rules.
- `panos_service_group module <ansible_collections.paloaltonetworks.panos.panos_service_group_module>`
  -- Manage service group objects on PAN-OS devices.
- `panos_service_object module <ansible_collections.paloaltonetworks.panos.panos_service_object_module>`
  -- Manage service objects on PAN-OS devices.
- `panos_snmp_profile module <ansible_collections.paloaltonetworks.panos.panos_snmp_profile_module>`
  -- Manage SNMP server profiles.
- `panos_snmp_v2c_server module <ansible_collections.paloaltonetworks.panos.panos_snmp_v2c_server_module>`
  -- Manage SNMP v2c servers.
- `panos_snmp_v3_server module <ansible_collections.paloaltonetworks.panos.panos_snmp_v3_server_module>`
  -- Manage SNMP v3 servers.
- `panos_software module <ansible_collections.paloaltonetworks.panos.panos_software_module>`
  -- Manage PAN-OS software versions.
- `panos_static_route module <ansible_collections.paloaltonetworks.panos.panos_static_route_module>`
  -- Manage static routes on PAN-OS devices.
- `panos_syslog_profile module <ansible_collections.paloaltonetworks.panos.panos_syslog_profile_module>`
  -- Manage syslog server profiles.
- `panos_syslog_server module <ansible_collections.paloaltonetworks.panos.panos_syslog_server_module>`
  -- Manage syslog server profile syslog servers.
- `panos_tag_object module <ansible_collections.paloaltonetworks.panos.panos_tag_object_module>`
  -- Manage tag objects on PAN-OS devices.
- `panos_template module <ansible_collections.paloaltonetworks.panos.panos_template_module>`
  -- Manage Panorama template
- `panos_template_stack module <ansible_collections.paloaltonetworks.panos.panos_template_stack_module>`
  -- Manage Panorama template stack
- `panos_template_variable module <ansible_collections.paloaltonetworks.panos.panos_template_variable_module>`
  -- Manage template or template stack variable
- `panos_tunnel module <ansible_collections.paloaltonetworks.panos.panos_tunnel_module>`
  -- Manage tunnel interfaces
- `panos_type_cmd module <ansible_collections.paloaltonetworks.panos.panos_type_cmd_module>`
  -- Execute arbitrary TYPE commands on PAN-OS
- `panos_userid module <ansible_collections.paloaltonetworks.panos.panos_userid_module>`
  -- Allow for registration and de-registration of userid
- `panos_virtual_router module <ansible_collections.paloaltonetworks.panos.panos_virtual_router_module>`
  -- Manage a Virtual Router
- `panos_virtual_router_facts module <ansible_collections.paloaltonetworks.panos.panos_virtual_router_facts_module>`
  -- Retrieves virtual router information
- `panos_virtual_wire module <ansible_collections.paloaltonetworks.panos.panos_virtual_wire_module>`
  -- Manage Virtual Wires (vwire).
- `panos_vlan module <ansible_collections.paloaltonetworks.panos.panos_vlan_module>`
  -- Manage VLANs.
- `panos_vlan_interface module <ansible_collections.paloaltonetworks.panos.panos_vlan_interface_module>`
  -- Manage VLAN interfaces
- `panos_vm_auth_key module <ansible_collections.paloaltonetworks.panos.panos_vm_auth_key_module>`
  -- Create a VM auth key for VM-Series bootstrapping
- `panos_zone module <ansible_collections.paloaltonetworks.panos.panos_zone_module>`
  -- Manage security zone
- `panos_zone_facts module <ansible_collections.paloaltonetworks.panos.panos_zone_facts_module>`
  -- Retrieves zone information

<div className="toctree" maxdepth="1" hidden="">

panos_address_group_module panos_address_object_module
panos_administrator_module panos_admpwd_module
panos_aggregate_interface_module panos_api_key_module
panos_application_filter_module panos_application_group_module
panos_application_object_module panos_bgp_module
panos_bgp_aggregate_module panos_bgp_auth_module
panos_bgp_conditional_advertisement_module panos_bgp_dampening_module
panos_bgp_peer_module panos_bgp_peer_group_module
panos_bgp_policy_filter_module panos_bgp_policy_rule_module
panos_bgp_redistribute_module panos_cert_gen_ssh_module
panos_check_module panos_commit_module panos_commit_firewall_module
panos_commit_panorama_module panos_commit_push_module
panos_config_element_module panos_custom_url_category_module
panos_dag_module panos_dag_tags_module panos_decryption_rule_module
panos_device_group_module panos_dhcp_module panos_dhcp_relay_module
panos_dhcp_relay_ipv6_address_module panos_dynamic_updates_module
panos_dynamic_user_group_module panos_email_profile_module
panos_email_server_module panos_export_module panos_facts_module
panos_gre_tunnel_module panos_ha_module panos_http_profile_module
panos_http_profile_header_module panos_http_profile_param_module
panos_http_server_module panos_ike_crypto_profile_module
panos_ike_gateway_module panos_import_module panos_interface_module
panos_ipsec_ipv4_proxyid_module panos_ipsec_profile_module
panos_ipsec_tunnel_module panos_ipv6_address_module
panos_l2_subinterface_module panos_l3_subinterface_module
panos_lic_module panos_loadcfg_module
panos_log_forwarding_profile_module
panos_log_forwarding_profile_match_list_module
panos_log_forwarding_profile_match_list_action_module
panos_loopback_interface_module panos_management_profile_module
panos_match_rule_module panos_mgtconfig_module panos_nat_rule_module
panos_nat_rule2_module panos_nat_rule_facts_module panos_object_module
panos_object_facts_module panos_op_module panos_pbf_rule_module
panos_pg_module panos_query_rules_module panos_redistribution_module
panos_region_module panos_registered_ip_module
panos_registered_ip_facts_module panos_restart_module panos_sag_module
panos_schedule_object_module panos_security_rule_module
panos_security_rule_facts_module panos_service_group_module
panos_service_object_module panos_snmp_profile_module
panos_snmp_v2c_server_module panos_snmp_v3_server_module
panos_software_module panos_static_route_module
panos_syslog_profile_module panos_syslog_server_module
panos_tag_object_module panos_template_module
panos_template_stack_module panos_template_variable_module
panos_tunnel_module panos_type_cmd_module panos_userid_module
panos_virtual_router_module panos_virtual_router_facts_module
panos_virtual_wire_module panos_vlan_module panos_vlan_interface_module
panos_vm_auth_key_module panos_zone_module panos_zone_facts_module

</div>

### Httpapi Plugins

- `panos httpapi <ansible_collections.paloaltonetworks.panos.panos_httpapi>`
  -- HttpApi plugin for PAN-OS devices

<div className="toctree" maxdepth="1" hidden="">

panos_httpapi

</div>

<div className="seealso">

List of `collections <list_of_collections>` with docs hosted here.

</div>
