orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module">

</div>

# paloaltonetworks.panos.panos_query_rules module -- PANOS module that allows search for security rules in PANW NGFW devices.

<div className="note">

<div className="title">

Note

</div>

This module is part of the [paloaltonetworks.panos
collection](https://galaxy.ansible.com/paloaltonetworks/panos) (version
2.13.1).

To install it, use:
`ansible-galaxy collection install paloaltonetworks.panos`. You need
further requirements to be able to use this module, see
`Requirements <ansible_collections.paloaltonetworks.panos.panos_query_rules_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_query_rules`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## DEPRECATED

Removed in  
version 3.0.0

Why  
Querying rules is handled better by
`paloaltonetworks.panos.panos\_match\_rule <ansible_collections.paloaltonetworks.panos.panos_match_rule_module>`.

Alternative  
Use
`paloaltonetworks.panos.panos\_match\_rule <ansible_collections.paloaltonetworks.panos.panos_match_rule_module>`

## Synopsis

- Security policies allow you to enforce rules and take action, and can
  be as general or specific as needed.
- The policy rules are compared against the incoming traffic in
  sequence, and because the first rule that matches
- the traffic is applied, the more specific rules must precede the more
  general ones.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python can be obtained from PyPI
  [https://pypi.python.org/pypi/pan-python\\](https://pypi.python.org/pypi/pan-python\)
- pandevice can be obtained from PyPI
  [https://pypi.python.org/pypi/pandevice\\](https://pypi.python.org/pypi/pandevice\)
- xmltodict can be obtains from PyPI
  [https://pypi.python.org/pypi/xmltodict\\](https://pypi.python.org/pypi/xmltodict\)

## Parameters

<div className="rst-class">

ansible-option-table

</div>

<table>
<thead>
<tr className="header">
<th>Parameter</th>
<th>Comments</th>
</tr>
</thead>
<tbody>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-api_key">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a className="ansibleOptionLink" href="#parameter-api_key" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>API key that can be used instead of
<em>username</em>/<em>password</em> credentials.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-application"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-application">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>application</strong></p>
<a className="ansibleOptionLink" href="#parameter-application" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name of the application or application group to be queried.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-destination_ip">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_ip</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_ip" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The destination IP address to be queried.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-destination_port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_port</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The destination port to be queried.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-destination_zone">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_zone</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_zone" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name of the destination security zone to be queried.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-devicegroup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-devicegroup">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>devicegroup</strong></p>
<a className="ansibleOptionLink" href="#parameter-devicegroup" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The Panorama device group in which to conduct the query.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>IP address (or hostname) of PAN-OS firewall or Panorama management
console being queried.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-password">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a className="ansibleOptionLink" href="#parameter-password" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Password credentials to use for authentication.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-protocol"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-protocol">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>protocol</strong></p>
<a className="ansibleOptionLink" href="#parameter-protocol" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The protocol used to be queried.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"tcp"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"udp"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-source_ip">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_ip</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_ip" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The source IP address to be queried.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-source_port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_port</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The source port to be queried.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-source_zone">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_zone</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_zone" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name of the source security zone to be queried.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tag_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-tag_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-tag_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name of the rule tag to be queried.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_query_rules_module__parameter-username">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>username</strong></p>
<a className="ansibleOptionLink" href="#parameter-username" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Username credentials to use for authentication.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div className="note">

<div className="title">

Note

</div>

\- Checkmode is not supported. - Panorama is supported.

</div>

## Examples

``` yaml+jinja
- name: search for rules with tcp/3306
  panos_query_rules:
    ip_address: '{{ ip_address }}'
    username: '{{ username }}'
    password: '{{ password }}'
    source_zone: 'DevNet'
    destination_zone: 'DevVPC'
    destination_port: '3306'
    protocol: 'tcp'

- name: search devicegroup for inbound rules to dmz host
  panos_query_rules:
    ip_address: '{{ ip_address }}'
    api_key: '{{ api_key }}'
    destination_zone: 'DMZ'
    destination_ip: '10.100.42.18'
    address: 'DeviceGroupA'

- name: search for rules containing a specified rule tag
  panos_query_rules:
    ip_address: '{{ ip_address }}'
    username: '{{ username }}'
    password: '{{ password }}'
    tag_name: 'ProjectX'
```

## Status

- This module will be removed in version 3.0.0. *\[deprecated\]*
- For more information see [DEPRECATED](#deprecated).

### Authors

- Bob Hagen (@stealthllama)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
