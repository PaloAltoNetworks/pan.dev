orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module">

</div>

# paloaltonetworks.panos.panos_nat_rule_facts module -- Get information about a NAT rule.

<div class="note">

<div class="title">

Note

</div>

This module is part of the [paloaltonetworks.panos
collection](https://galaxy.ansible.com/paloaltonetworks/panos) (version
2.13.1).

To install it, use:
`ansible-galaxy collection install paloaltonetworks.panos`. You need
further requirements to be able to use this module, see
`Requirements <ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_nat_rule_facts`.

</div>

<div class="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div class="contents" local="" depth="1">

</div>

## DEPRECATED

Removed in  
version 3.0.0

Why  
Updating module design to network resource modules.

Alternative  
Use
`paloaltonetworks.panos.panos\_nat\_rule2 <ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module>`
with *state=gathered*.

## Synopsis

- Get information about one or more NAT rules.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python
- pandevice

## Parameters

<div class="rst-class">

ansible-option-table

</div>

<table>
<thead>
<tr class="header">
<th>Parameter</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-api_key">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a class="ansibleOptionLink" href="#parameter-api_key" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The API key to use instead of generating it using <em>username</em> /
<em>password</em>.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-device_group">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>device_group</strong></p>
<a class="ansibleOptionLink" href="#parameter-device_group" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>(Panorama only) The device group the operation should target.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"shared"</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-listing"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-listing">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>listing</strong></p>
<a class="ansibleOptionLink" href="#parameter-listing" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Return all rules.</p>
<p>Mutually exclusive with rule_name, rule_regex, and uuid.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-password">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a class="ansibleOptionLink" href="#parameter-password" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The password to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>port</strong></p>
<a class="ansibleOptionLink" href="#parameter-port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The port number to connect to the PAN-OS device on.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-provider">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>provider</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">dictionary</span></p>
<p><span class="ansible-option-versionadded">added in
paloaltonetworks.panos 1.0.0</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>A dict object containing connection details.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-provider/api_key">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/api_key" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The API key to use instead of generating it using <em>username</em> /
<em>password</em>.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-provider/ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-provider/password">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/password" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The password to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-provider/port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>port</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The port number to connect to the PAN-OS device on.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/serial_number"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-provider/serial_number">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>serial_number</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/serial_number" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The serial number of a firewall to use for targeted commands. If
<em>ip_address</em> is not a Panorama PAN-OS device, then this param is
ignored.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-provider/username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-provider/username">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>username</strong></p>
<a class="ansibleOptionLink" href="#parameter-provider/username" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The username to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-rule_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-rule_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_name</strong></p>
<a class="ansibleOptionLink" href="#parameter-rule_name" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the rule.</p>
<p>Mutually exclusive with rule_regex, listing, and uuid.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-rule_regex"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-rule_regex">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_regex</strong></p>
<a class="ansibleOptionLink" href="#parameter-rule_regex" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>A regex to match against the rule name.</p>
<p>Mutually exclusive with rule_name, listing, and uuid.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-rulebase"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-rulebase">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rulebase</strong></p>
<a class="ansibleOptionLink" href="#parameter-rulebase" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The rulebase in which the rule is to exist. If left unspecified, this
defaults to <em>rulebase=pre-rulebase</em> for Panorama. For NGFW, this
is always set to be <em>rulebase=rulebase</em>.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"pre-rulebase"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"rulebase"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"post-rulebase"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-username">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>username</strong></p>
<a class="ansibleOptionLink" href="#parameter-username" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The username to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-uuid"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-uuid">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>uuid</strong></p>
<a class="ansibleOptionLink" href="#parameter-uuid" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Match the given rule UUID (PAN-OS 9.0+).</p>
<p>Mutually exclusive with rule_name, listing, and rule_regex.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-vsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__parameter-vsys">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys</strong></p>
<a class="ansibleOptionLink" href="#parameter-vsys" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The vsys this object belongs to.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"vsys1"</code></p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div class="note">

<div class="title">

Note

</div>

\- Checkmode is not supported. - Panorama is supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
- name: Get a list of all NAT rules
  panos_nat_rule_facts:
    provider: '{{ provider }}'
    listing: true
  register: res1

- debug:
    msg: '{{ res1.listing }}'

- name: Get the NAT rule foo
  panos_nat_rule_facts:
    provider: '{{ provider }}'
    rule_name: 'foo'
  register: res2

- debug:
    msg: '{{ res2.object }}'
```

## Return Values

Common return values are documented `here <common_return_values>`, the
following are the fields unique to this module:

<div class="rst-class">

ansible-option-table

</div>

<table>
<thead>
<tr class="header">
<th>Key</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-listing"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-listing">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>listing</strong></p>
<a class="ansibleOptionLink" href="#return-listing" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of rules</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span> When
<em>listing</em> or <em>rule_regex</em> is set</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>object</strong></p>
<a class="ansibleOptionLink" href="#return-object" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">complex</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Single rule definition</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span> When
<em>rule_name</em> or <em>uuid</em> is specified</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/description">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>description</strong></p>
<a class="ansibleOptionLink" href="#return-object/description" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Description</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/destination_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/destination_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_ip</strong></p>
<a class="ansibleOptionLink" href="#return-object/destination_ip" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Destination addresses</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/destination_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/destination_zone">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_zone</strong></p>
<a class="ansibleOptionLink" href="#return-object/destination_zone" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>To zones</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/dnat_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/dnat_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dnat_address</strong></p>
<a class="ansibleOptionLink" href="#return-object/dnat_address" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Destination NAT translated address</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/dnat_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/dnat_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dnat_port</strong></p>
<a class="ansibleOptionLink" href="#return-object/dnat_port" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Destination NAT translated port</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/nat_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/nat_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>nat_type</strong></p>
<a class="ansibleOptionLink" href="#return-object/nat_type" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The NAT type</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/rule_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/rule_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_name</strong></p>
<a class="ansibleOptionLink" href="#return-object/rule_name" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Rule name</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/service"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/service">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>service</strong></p>
<a class="ansibleOptionLink" href="#return-object/service" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The service</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/snat_address_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/snat_address_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_address_type</strong></p>
<a class="ansibleOptionLink" href="#return-object/snat_address_type" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Type of source translation</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/snat_bidirectional"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/snat_bidirectional">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_bidirectional</strong></p>
<a class="ansibleOptionLink" href="#return-object/snat_bidirectional" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Bidirectional flag</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/snat_dynamic_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/snat_dynamic_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_dynamic_address</strong></p>
<a class="ansibleOptionLink" href="#return-object/snat_dynamic_address" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Source NAT translated address</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/snat_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/snat_interface">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_interface</strong></p>
<a class="ansibleOptionLink" href="#return-object/snat_interface" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Source NAT interface</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/snat_interface_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/snat_interface_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_interface_address</strong></p>
<a class="ansibleOptionLink" href="#return-object/snat_interface_address" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>SNAT interface address</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/snat_static_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/snat_static_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_static_address</strong></p>
<a class="ansibleOptionLink" href="#return-object/snat_static_address" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Static IP SNAT translated address</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/snat_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/snat_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_type</strong></p>
<a class="ansibleOptionLink" href="#return-object/snat_type" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Type of source translation</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/source_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/source_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_ip</strong></p>
<a class="ansibleOptionLink" href="#return-object/source_ip" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Source addresses</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/source_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/source_zone">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_zone</strong></p>
<a class="ansibleOptionLink" href="#return-object/source_zone" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Source zone</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/tag_val"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/tag_val">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag_val</strong></p>
<a class="ansibleOptionLink" href="#return-object/tag_val" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Administrative tags for this rule</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/to_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/to_interface">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>to_interface</strong></p>
<a class="ansibleOptionLink" href="#return-object/to_interface" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Egress interface from route lookup</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-object/uuid"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_facts_module__return-object/uuid">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>uuid</strong></p>
<a class="ansibleOptionLink" href="#return-object/uuid" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The UUID of the rule (PAN-OS 9.0+)</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
</tbody>
</table>

## Status

- This module will be removed in version 3.0.0. *\[deprecated\]*
- For more information see [DEPRECATED](#deprecated).

### Authors

- Garfield Lee Freeman (@shinmog)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
