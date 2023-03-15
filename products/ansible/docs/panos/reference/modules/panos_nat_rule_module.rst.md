orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module">

</div>

# paloaltonetworks.panos.panos_nat_rule module -- Manage a policy NAT rule

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_nat_rule_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_nat_rule`.

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
The design of this module is not consistent with current design.

Alternative  
Use
`paloaltonetworks.panos.panos\_nat\_rule2 <ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module>`
instead.

## Synopsis

- Manage a policy nat rule. Keep in mind that we can either end up
  configuring source NAT, destination NAT, or both.
- Instead of splitting it into two we will make a fair attempt to
  determine which one the user wants.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python \>= 0.16
- pan-os-python \>= 1.7.3

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
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-api_key">
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
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The API key to use instead of generating it using <em>username</em> /
<em>password</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-audit_comment"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-audit_comment">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>audit_comment</strong></p>
<a className="ansibleOptionLink" href="#parameter-audit_comment" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Add an audit comment to the rule being defined.</p>
<p>This is only applied if there was a change to the rule.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-commit">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>commit</strong></p>
<a className="ansibleOptionLink" href="#parameter-commit" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Please use <code className="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_firewall &lt;ansible_collections.paloaltonetworks.panos.panos_commit_firewall_module&gt;</code>,
<code className="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_panorama &lt;ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module&gt;</code>,
<code className="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_push &lt;ansible_collections.paloaltonetworks.panos.panos_commit_push_module&gt;</code>
instead.</p>
<hr/>
<p>Commit changes after creating object. If <em>ip_address</em> is a
Panorama device, and <em>device_group</em> or <em>template</em> are also
set, perform a commit to Panorama and a commit-all to the device
group/template.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-description">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>description</strong></p>
<a className="ansibleOptionLink" href="#parameter-description" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>NAT rule description.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-destination_ip">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_ip</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_ip" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>list of destination addresses</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-destination_zone">
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
<p>destination zone</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-device_group">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>device_group</strong></p>
<a className="ansibleOptionLink" href="#parameter-device_group" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>(Panorama only) The device group the operation should target.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"shared"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-devicegroup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-devicegroup">
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
<p><strong>Deprecated</strong></p>
<p>Use <em>device_group</em> instead.</p>
<hr/>
<p>The device group to place the NAT rule into.</p>
<p>Panorama only; ignored for firewalls.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dnat_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-dnat_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dnat_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-dnat_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Static dnat translated address</p>
<p>Mutually exclusive with <em>dnat_dynamic_address</em>,
<em>dnat_dynamic_port</em>, and <em>dnat_dynamic_distribution</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dnat_dynamic_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-dnat_dynamic_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dnat_dynamic_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-dnat_dynamic_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Dynamic destination translated address.</p>
<p>Mutually exclusive with <em>dnat_address</em> and
<em>dnat_port</em>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dnat_dynamic_distribution"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-dnat_dynamic_distribution">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dnat_dynamic_distribution</strong></p>
<a className="ansibleOptionLink" href="#parameter-dnat_dynamic_distribution" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Dynamic destination translated distribution.</p>
<p>Mutually exclusive with <em>dnat_address</em> and
<em>dnat_port</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dnat_dynamic_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-dnat_dynamic_port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dnat_dynamic_port</strong></p>
<a className="ansibleOptionLink" href="#parameter-dnat_dynamic_port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Dynamic destination translated port.</p>
<p>Mutually exclusive with <em>dnat_address</em> and
<em>dnat_port</em>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-dnat_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-dnat_port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dnat_port</strong></p>
<a className="ansibleOptionLink" href="#parameter-dnat_port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Static dnat translated port</p>
<p>Mutually exclusive with <em>dnat_dynamic_address</em>,
<em>dnat_dynamic_port</em>, and <em>dnat_dynamic_distribution</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-existing_rule"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-existing_rule">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>existing_rule</strong></p>
<a className="ansibleOptionLink" href="#parameter-existing_rule" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<ul>
<li><dl>
<dt>If <em>location=before</em> or <em>location=after</em>, this option
specifies</dt>
<dd>
an existing rule name. The rule being managed by this module will be
positioned relative to the value of this parameter.
<ul>
<li>Required if <em>location=before</em> or
<em>location=after</em>.</li>
</ul>
</dd>
</dl></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-group_tag"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-group_tag">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>group_tag</strong></p>
<a className="ansibleOptionLink" href="#parameter-group_tag" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The group tag.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-location"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-location">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>location</strong></p>
<a className="ansibleOptionLink" href="#parameter-location" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Position to place the rule in.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"top"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"bottom"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"before"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"after"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-nat_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-nat_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>nat_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-nat_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Type of NAT.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"ipv4"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"nat64"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"nptv6"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-negate_target"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-negate_target">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>negate_target</strong></p>
<a className="ansibleOptionLink" href="#parameter-negate_target" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Applicable for Panorama only.</p>
<p>Negate the value for <em>target</em>.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-operation"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-operation">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>operation</strong></p>
<a className="ansibleOptionLink" href="#parameter-operation" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Removed</strong></p>
<p>Use <em>state</em> instead.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-password">
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
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The password to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>port</strong></p>
<a className="ansibleOptionLink" href="#parameter-port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The port number to connect to the PAN-OS device on.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-provider">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>provider</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">dictionary</span></p>
<p><span className="ansible-option-versionadded">added in
paloaltonetworks.panos 1.0.0</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>A dict object containing connection details.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-provider/api_key">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>api_key</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/api_key" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The API key to use instead of generating it using <em>username</em> /
<em>password</em>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-provider/ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The IP address or hostname of the PAN-OS device being configured.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-provider/password">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>password</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/password" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The password to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-provider/port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>port</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The port number to connect to the PAN-OS device on.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/serial_number"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-provider/serial_number">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>serial_number</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/serial_number" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The serial number of a firewall to use for targeted commands. If
<em>ip_address</em> is not a Panorama PAN-OS device, then this param is
ignored.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-provider/username">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>username</strong></p>
<a className="ansibleOptionLink" href="#parameter-provider/username" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-indent-desc"></div><div className="ansible-option-cell">
<p>The username to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-rule_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-rule_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-rule_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>name of the SNAT rule</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-rulebase"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-rulebase">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rulebase</strong></p>
<a className="ansibleOptionLink" href="#parameter-rulebase" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The rulebase in which the rule is to exist. If left unspecified, this
defaults to <em>rulebase=pre-rulebase</em> for Panorama. For NGFW, this
is always set to be <em>rulebase=rulebase</em>.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pre-rulebase"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"rulebase"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"post-rulebase"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-service"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-service">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>service</strong></p>
<a className="ansibleOptionLink" href="#parameter-service" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>service</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">"any"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-snat_address_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-snat_address_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_address_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-snat_address_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>type of source translation.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"interface-address"</code>
<span className="ansible-option-choices-default-mark">←
(default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"translated-address"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-snat_bidirectional"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-snat_bidirectional">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_bidirectional</strong></p>
<a className="ansibleOptionLink" href="#parameter-snat_bidirectional" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>bidirectional flag</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">true</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-snat_dynamic_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-snat_dynamic_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_dynamic_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-snat_dynamic_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Source NAT translated address.</p>
<p>Used when <em>snat_type=dynamic-ip</em> or
<em>snat_type=dynamic-ip-and-port</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-snat_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-snat_interface">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_interface</strong></p>
<a className="ansibleOptionLink" href="#parameter-snat_interface" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>snat interface</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-snat_interface_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-snat_interface_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_interface_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-snat_interface_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>snat interface address</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-snat_static_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-snat_static_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_static_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-snat_static_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Source NAT translated address. Used with Static-IP translation.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-snat_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-snat_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>snat_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-snat_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>type of source translation</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"static-ip"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"dynamic-ip"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"dynamic-ip-and-port"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-source_ip">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_ip</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_ip" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>list of source addresses</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-source_zone">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_zone</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_zone" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>list of source zones</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-state">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>state</strong></p>
<a className="ansibleOptionLink" href="#parameter-state" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The state of this object.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"present"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"absent"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"enable"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"disable"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tag"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-tag">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag</strong></p>
<a className="ansibleOptionLink" href="#parameter-tag" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Administrative tags.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tag_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-tag_name">
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
<p><strong>Deprecated</strong></p>
<p>Use <em>tag</em> instead.</p>
<hr/>
<p>Administrative tag.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-target"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-target">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>target</strong></p>
<a className="ansibleOptionLink" href="#parameter-target" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Applicable for Panorama only.</p>
<p>Apply this rule exclusively to the listed firewall serial
numbers.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-to_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-to_interface">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>to_interface</strong></p>
<a className="ansibleOptionLink" href="#parameter-to_interface" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Original packet's destination interface.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">"any"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-username">
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
<p><strong>Deprecated</strong></p>
<p>Use <em>provider</em> to specify PAN-OS connectivity instead.</p>
<hr/>
<p>The username to use for authentication. This is ignored if
<em>api_key</em> is specified.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"admin"</code></p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-uuid"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-uuid">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>uuid</strong></p>
<a className="ansibleOptionLink" href="#parameter-uuid" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The rule UUID.</p>
<p>Note that this is currently more of a read-only field.</p>
<p>Usage of the UUID cannot currently take the place of using the rule
name as the primary identifier.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-vsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule_module__parameter-vsys">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vsys</strong></p>
<a className="ansibleOptionLink" href="#parameter-vsys" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The vsys this object belongs to.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text"
role="ansible-option-default">"vsys1"</code></p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div className="note">

<div className="title">

Note

</div>

\- Checkmode is supported. - Panorama is supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
# Create a source and destination nat rule
- name: Create NAT SSH rule for 10.0.1.101
  panos_nat_rule:
    provider: '{{ provider }}'
    rule_name: "Web SSH"
    source_zone: ["external"]
    destination_zone: "external"
    source_ip: ["any"]
    destination_ip: ["10.0.0.100"]
    service: "service-tcp-221"
    snat_type: "dynamic-ip-and-port"
    snat_interface: "ethernet1/2"
    dnat_address: "10.0.1.101"
    dnat_port: "22"

- name: disable a specific security rule
  panos_nat_rule:
    provider: '{{ provider }}'
    rule_name: 'Prod-Legacy 1'
    state: 'disable'
```

## Status

- This module will be removed in version 3.0.0. *\[deprecated\]*
- For more information see [DEPRECATED](#deprecated).

### Authors

- Luigi Mori (@jtschichold)
- Ivan Bojer (@ivanbojer)
- Robert Hagen (@stealthllama)
- Michael Richardson (@mrichardson03)
- Garfield Lee Freeman (@shinmog)
- Ken Celenza (@itdependsnetworks)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
