---
id: nat_rule_v3
title: Migrating to v3.0.x panos_nat_rule
sidebar_label: Migrating panos_nat_rule
hide_title: true
description: Migrating to v3.0.x panos_nat_rule
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - ansible
---

# Migrating to v3.0.x panos_nat_rule

[Release 2.10.0](https://github.com/PaloAltoNetworks/pan-os-ansible/releases/tag/v2.10.0) of the PAN-OS Collection brought network resource module support, and with it a requirement to bring a brand new module for NAT to be supported in this approach. The `panos_nat_rule2` module was released in 2.10.0, and will become `panos_nat_rule` in the upcoming 3.0.0 release, with the old `panos_nat_rule` being [deprecated](https://github.com/PaloAltoNetworks/pan-os-ansible/commit/ce08e3d93466a4de3724d6287f185fe701bc63ec).

This article provides a comparison between the parameters of the two modules, in order to aid migration from the old to the new.

## Unchanged Parameters

The following parameter names are unchanged when moving from the old module to the new (some default values change, see **bold** text in the table below):

| Parameter     | Description                                                                                                                                                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audit_comment | Add an audit comment to the rule being defined.<br/>This is only applied if there was a change to the rule.                                                                                                                            |
| description   | The description.                                                                                                                                                                                                                       |
| device_group  | (Panorama only) The device group the operation should target.                                                                                                                                                                          |
| existing_rule | If location=before or location=after, this option specifiesan existing rule name. The rule being managed by this module will be positioned relative to the value of this parameter.<br/>Required if location=before or location=after. |
| group_tag     | For PAN-OS 9.0 and above.<br/>The group tag.                                                                                                                                                                                           |
| location      | Position to place the rule in.                                                                                                                                                                                                         |
| nat_type      | Type of NAT.                                                                                                                                                                                                                           |
| negate_target | Applicable for Panorama only.<br/>Negate the value for target.                                                                                                                                                                         |
| provider      | A dict object containing connection details.                                                                                                                                                                                           |
| api_key       | The API key to use instead of generating it using username / password.                                                                                                                                                                 |
| ip_address    | The IP address or hostname of the PAN-OS device being configured.                                                                                                                                                                      |
| password      | The password to use for authentication. This is ignored if api_key is specified.                                                                                                                                                       |
| port          | The port number to connect to the PAN-OS device on.                                                                                                                                                                                    |
| serial_number | The serial number of a firewall to use for targeted commands. If ip_address is not a Panorama PAN-OS device, then this param is ignored.                                                                                               |
| username      | The username to use for authentication. This is ignored if api_key is specified.                                                                                                                                                       |
| rulebase      | The rulebase in which the rule is to exist. If left unspecified, this defaults to pre-rulebase for Panorama. For NGFW, this is always set to be rulebase.                                                                              |
| service       | The service. **NOTE: Default value changes from `"any"` to `null`**                                                                                                                                                                    |
| target        | Applicable for Panorama only.<br/>Apply this rule exclusively to the listed firewall serial numbers.                                                                                                                                   |
| to_interface  | Egress interface from route lookup. **NOTE: Default value changes from `"any"` to `null`**                                                                                                                                             |
| uuid          | The rule UUID.<br/>Note that this is currently more of a read-only field.<br/>Usage of the UUID cannot currently take the place of using the rule name as the primary identifier.                                                      |
| vsys          | The vsys this object belongs to.                                                                                                                                                                                                       |

## Deprecated Parameters

When moving from the old module to the new, the following parameters are deprecated, and alternative parameters or approaches are listed:

| Parameter   | Alternative Approach                                                              |
| ----------- | --------------------------------------------------------------------------------- | --- |
| api_key     | Use `provider` to specify PAN-OS connectivity instead                             |
| commit      | Use `panos_commit_firewall`, `panos_commit_panorama`, `panos_commit_push` instead |
| devicegroup | Use `device_group` instead                                                        |
| ip_address  | Use `provider` to specify PAN-OS connectivity instead                             |
| operation   | Use `state` instead.                                                              |
| password    | Use `provider` to specify PAN-OS connectivity instead                             |
| port        | Use `provider` to specify PAN-OS connectivity instead                             |
| tag_name    | Use `tag` instead                                                                 |
| username    | Use `provider` to specify PAN-OS connectivity instead                             |     |

## Changed Parameters

The following parameters have changed when comparing the new module to the old module. Both old and new parameter names are listed for comparison and migration purposes (some default values change, see **bold** text in the table below):

| Old Parameter Name        | New Parameter Name                           | Description                                                                                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| destination_ip            | destination_addresses                        | Destination addresses.                                                                                                                                                                                                                                       |
| destination_zone          | to_zones                                     | To zones.<br/>Note that there should only be one element in this list.                                                                                                                                                                                       |
| dnat_address              | destination_translated_address               | Static translated destination IP address.                                                                                                                                                                                                                    |
| dnat_dynamic_address      | destination_dynamic_translated_address       | Dynamic destination translated address.                                                                                                                                                                                                                      |
| dnat_dynamic_distribution | destination_dynamic_translated_distribution  | Dynamic destination translated distribution.                                                                                                                                                                                                                 |
| dnat_dynamic_port         | destination_dynamic_translated_port          | Dynamic destination translated port.                                                                                                                                                                                                                         |
| dnat_port                 | destination_translated_port                  | Static translated destination port number.                                                                                                                                                                                                                   |
| rule_name                 | name                                         | Name of the rule.                                                                                                                                                                                                                                            |
| snat_address_type         | source_translation_address_type              | For source_translation_type=dynamic-ip-and-port or or source_translation_type=dynamic-ip.<br/>Address type.<br/>Choices:<br/>`"interface-address"`<br/>`"translated-address"` **NOTE: Default value changes from `"interface-address"` to `null`**           |
| snat_bidirectional        | source_translation_static_bi_directional     | For source_translation_type=static-ip.<br/>Allow reverse translation from translated address to original address.<br/>Choices:<br/>`false`<br/>`true`                                                                                                        |
| snat_dynamic_address      | source_translation_translated_addresses      | For source_translation_address_type=translated-address.<br/>Translated addresses of the source address translation.                                                                                                                                          |
| snat_interface            | source_translation_interface                 | For source_translation_address_type=interface-address.<br/>Interface of the source address.                                                                                                                                                                  |
| snat_interface_address    | source_translation_ip_address                | For source_translation_address_type=interface-address.<br/>IP address of the source address translation.                                                                                                                                                     |
| snat_static_address       | source_translation_static_translated_address | For source_translation_type=static-ip.<br/>The IP address for the static source translation.                                                                                                                                                                 |
| snat_type                 | source_translation_type                      | Type of source address translation.<br/>Choices:<br/>`"dynamic-ip-and-port"`<br/>`"dynamic-ip"`<br/>`"static-ip"`                                                                                                                                            |
| source_ip                 | source_addresses                             | Source addresses.                                                                                                                                                                                                                                            |
| source_zone               | from_zones                                   | From zones.                                                                                                                                                                                                                                                  |
| state                     | state                                        | The state. This parameter's choices have changed. enable and disable are removed, replaced, merged, deleted and gathered are added.<br/>Choices:<br/>`"present"` ← (default)<br/>`"absent"`<br/>`"replaced"`<br/>`"merged"`<br/>`"deleted"`<br/>`"gathered"` |
| tag                       | tags                                         | Administrative tags.                                                                                                                                                                                                                                         |

## New Parameters

The following parameters were introduced in the new module:

| Parameter Name                                   | Description                                                                                                                                                                                                       |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| disabled                                         | Rule is disabled or not.<br/>Choices:<br/>`false`<br/>`true`                                                                                                                                                      |
| gathered_filter                                  | When state=gathered.<br/>An advanced filtering option to filter results returned from PAN-OS.<br/>Refer to the [guide discussing gathered_filter](/ansible/docs/panos/info/gathered-filter) for more information. |
| ha_binding                                       | Device binding configuration in HA Active-Active mode.<br/>Choices:<br/>`"primary"`<br/>`"both"`<br/>`"0"`<br/>`"1"`                                                                                              |
| source_translation_fallback_interface            | For source_translation_fallback_type=interface-address.<br/>The interface for the fallback source translation.                                                                                                    |
| source_translation_fallback_ip_address           | For source_translation_fallback_type=interface-address.<br/>The IP address of the fallback source translation.                                                                                                    |
| source_translation_fallback_ip_type              | For source_translation_fallback_type=interface-address.<br/>The type of the IP address for the fallback source translation IP address.<br/>Choices:<br/>`"ip"`<br/>`"floating-ip"`                                |
| source_translation_fallback_translated_addresses | For source_translation_fallback_type=translated-address.<br/>Addresses for translated address types of fallback source translation.                                                                               |
| source_translation_fallback_type                 | For source_translation_type=dynamic-ip.<br/>Type of fallback for dynamic IP source translation.<br/>Choices:<br/>`"translated-address"`<br/>`"interface-address"`                                                 |
