orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module">

</div>

# paloaltonetworks.panos.panos_security_rule_facts module -- Retrieve information about security rules.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_security_rule_facts`.

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
`paloaltonetworks.panos.panos\_security\_rule <ansible_collections.paloaltonetworks.panos.panos_security_rule_module>`
with *state=gathered*.

## Synopsis

- Retrieve information about security rules.

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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-api_key">
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
<div class="ansibleOptionAnchor" id="parameter-details"></div>
<div class="ansibleOptionAnchor" id="parameter-all_details"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-all_details">
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-details">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>details</strong></p>
<a class="ansibleOptionLink" href="#parameter-details" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-aliases">aliases: all_details</span></p>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Retrieve full details instead of just rule names.</p>
<p>Implied when <em>names</em> is set and not using
<em>match_rules</em>.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">false</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-device_group">
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-ip_address">
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_rules</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">dictionary</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Returns security rule(s) in the policy that will match the specified
traffic using the 'test security-policy-match' API command.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/application"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/application">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>application</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/application" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Application name</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/category"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/category">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>category</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/category" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>URL filtering category</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/destination_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/destination_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/destination_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Destination IP address</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/destination_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/destination_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_port</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/destination_port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Destination port</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/destination_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/destination_zone">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_zone</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/destination_zone" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Destination zone</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/protocol"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/protocol">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>protocol</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/protocol" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>IP protocol type</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"tcp"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"udp"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"icmp"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/show_all"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/show_all">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>show_all</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/show_all" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Show all potential matches until first allow rule</p>
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
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/source_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/source_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/source_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Source IP address</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/source_user"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/source_user">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_user</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/source_user" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Source user</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_rules/source_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-match_rules/source_zone">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_zone</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_rules/source_zone" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Source zone</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-names"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-names">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>names</strong></p>
<a class="ansibleOptionLink" href="#parameter-names" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of security rule names to return data for.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-provider/username">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-rule_name">
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
<p>Name of the security rule.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-rulebase"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-rulebase">
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-username">
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-vsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__parameter-vsys">
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
- name: Get a list of all security rules
  panos_security_rule_facts:
    provider: '{{ provider }}'
  register: sec_rules

- debug:
    msg: '{{ sec_rules.rule_names }}'

- name: Get the definition for rule 'HTTP Multimedia'
  panos_security_rule_facts:
    provider: '{{ provider }}'
    names:
        - 'HTTP Multimedia'
  register: rule1

- debug:
    msg: '{{ rule1.spec }}'

- name: Get rule names matching DNS traffic
  panos_security_rule_facts:
    provider: '{{ provider }}'
    match_rules:
      source_zone: 'trust'
      source_ip: '192.168.1.10'
      destination_zone: 'untrust'
      destination_ip: '8.8.8.8'
      destination_port: '53'
      protocol: 'udp'
  register: dns_rule

- debug:
    msg: '{{ dns_rule.spec }}'
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
<div class="ansibleOptionAnchor" id="return-rule_details"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_details</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=dictionary</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Full details of requested security rules, or matching traffic as
specified in <em>match_rules</em>.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span> When
<em>details=True</em></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/action"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/action">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>action</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/action" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>The rule action.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/antivirus"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/antivirus">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>antivirus</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/antivirus" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Name of the already defined antivirus profile.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/application"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/application">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>application</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/application" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of applications, application groups, and/or application
filters.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/category"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/category">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>category</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/category" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of destination URL categories.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/data_filtering"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/data_filtering">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>data_filtering</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/data_filtering" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Name of the already defined data_filtering profile.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/description">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>description</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/description" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Description of the security rule.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/destination_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/destination_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_ip</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/destination_ip" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of destination addresses.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/destination_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/destination_zone">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_zone</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/destination_zone" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of destination zones.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/disable_server_response_inspection"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/disable_server_response_inspection">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>disable_server_response_inspection</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/disable_server_response_inspection" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Disables packet inspection from the server to the client.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/disabled"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/disabled">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>disabled</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/disabled" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Disable this rule.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/file_blocking"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/file_blocking">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>file_blocking</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/file_blocking" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Name of the already defined file_blocking profile.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/group_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/group_profile">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>group_profile</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/group_profile" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Security profile group setting.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/hip_profiles"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/hip_profiles">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>hip_profiles</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/hip_profiles" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>GlobalProtect host information profile list.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/icmp_unreachable"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/icmp_unreachable">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>icmp_unreachable</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/icmp_unreachable" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Send 'ICMP Unreachable'.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/log_end"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/log_end">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_end</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/log_end" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Whether to log at session end.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/log_setting"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/log_setting">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_setting</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/log_setting" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Log forwarding profile.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/log_start"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/log_start">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_start</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/log_start" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Whether to log at session start.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/negate_destination"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/negate_destination">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>negate_destination</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/negate_destination" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Match on the reverse of the 'destination_ip' attribute</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/negate_source"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/negate_source">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>negate_source</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/negate_source" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Match on the reverse of the 'source_ip' attribute</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/rule_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/rule_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_name</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/rule_name" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Name of the security rule.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/rule_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/rule_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_type</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/rule_type" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Type of security rule (version 6.1 of PanOS and above).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/schedule"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/schedule">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>schedule</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/schedule" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Schedule in which this rule is active.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/service"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/service">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>service</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/service" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of services and/or service groups.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/source_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/source_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_ip</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/source_ip" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of source addresses.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/source_user"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/source_user">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_user</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/source_user" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of source users.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/source_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/source_zone">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_zone</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/source_zone" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of source zones.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/spyware"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/spyware">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>spyware</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/spyware" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Name of the already defined spyware profile.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/tag_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/tag_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag_name</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/tag_name" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>List of tags associated with the rule.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/url_filtering"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/url_filtering">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>url_filtering</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/url_filtering" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Name of the already defined url_filtering profile.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/vulnerability"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/vulnerability">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vulnerability</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/vulnerability" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Name of the already defined vulnerability profile.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-indent"></div><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_details/wildfire_analysis"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_details/wildfire_analysis">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>wildfire_analysis</strong></p>
<a class="ansibleOptionLink" href="#return-rule_details/wildfire_analysis" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-indent-desc"></div><div class="ansible-option-cell">
<p>Name of the already defined wildfire_analysis profile.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="return-rule_names"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_facts_module__return-rule_names">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_names</strong></p>
<a class="ansibleOptionLink" href="#return-rule_names" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of security rules present, or matching traffic as specified in
<em>match_rules</em>.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span> When
<em>details=False</em></p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<div class="rst-class">
<p>ansible-option-sample</p>
</div>
<p><span class="ansible-option-sample-bold">Sample:</span> <code
class="interpreted-text"
role="ansible-rv-sample-value">["rule1", "rule2", "rule3"]</code></p>
</div></td>
</tr>
</tbody>
</table>

## Status

- This module will be removed in version 3.0.0. *\[deprecated\]*
- For more information see [DEPRECATED](#deprecated).

### Authors

- Garfield Lee Freeman (@shinmog)
- Michael Richardson (@mrichardson03)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
