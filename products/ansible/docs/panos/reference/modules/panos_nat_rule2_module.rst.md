orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module">

</div>

# paloaltonetworks.panos.panos_nat_rule2 module -- Manage a NAT rule

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_nat_rule2`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 2.10.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- - Manage a policy NAT rule. - NOTE: Even though this module supports
    *state=merged*, due to the complexity of the XML schema for NAT
    rules, changing a NAT rule's types using *state=merged* will likely
    result in an error. Using *state=merged* will work as normal for
    simple operations, such as adding additional IP addresses to any of
    the listings or changing simple variable types.

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
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-audit_comment">
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
<div className="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-description">
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
<p>The description.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_addresses"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-destination_addresses">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_addresses</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_addresses" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Destination addresses.</p>
<p>When referencing predefined EDLs, use config names of the EDLS not
their full names. The config names can be found with the CLI... request
system external-list show type predefined-ip name &lt;tab&gt;
panw-bulletproof-ip-list panw-bulletproof-ip-list panw-highrisk-ip-list
panw-highrisk-ip-list panw-known-ip-list panw-known-ip-list
panw-torexit-ip-list panw-torexit-ip-list</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_dynamic_translated_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-destination_dynamic_translated_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_dynamic_translated_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_dynamic_translated_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For PAN-OS 8.1 and above.</p>
<p>Dynamic destination translated address.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_dynamic_translated_distribution"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-destination_dynamic_translated_distribution">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_dynamic_translated_distribution</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_dynamic_translated_distribution" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For PAN-OS 8.1 and above.</p>
<p>Dynamic destination translated distribution.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_dynamic_translated_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-destination_dynamic_translated_port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_dynamic_translated_port</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_dynamic_translated_port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For PAN-OS 8.1 and above.</p>
<p>Dynamic destination translated port.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_translated_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-destination_translated_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_translated_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_translated_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Static translated destination IP address.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_translated_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-destination_translated_port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_translated_port</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_translated_port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Static translated destination port number.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-device_group">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-disabled"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-disabled">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>disabled</strong></p>
<a className="ansibleOptionLink" href="#parameter-disabled" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Rule is disabled or not.</p>
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
<div className="ansibleOptionAnchor" id="parameter-existing_rule"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-existing_rule">
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
<div className="ansibleOptionAnchor" id="parameter-from_zones"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-from_zones">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>from_zones</strong></p>
<a className="ansibleOptionLink" href="#parameter-from_zones" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>From zones.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gathered_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-gathered_filter">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gathered_filter</strong></p>
<a className="ansibleOptionLink" href="#parameter-gathered_filter" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>state=gathered</em>.</p>
<p>An advanced filtering option to filter results returned from
PAN-OS.</p>
<p>Refer to the guide discussing <em>gathered_filter</em> for more
information.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-group_tag"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-group_tag">
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
<p>For PAN-OS 9.0 and above.</p>
<p>The group tag.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ha_binding"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-ha_binding">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ha_binding</strong></p>
<a className="ansibleOptionLink" href="#parameter-ha_binding" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Device binding configuration in HA Active-Active mode.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"primary"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"both"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"0"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"1"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-ip_address">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-location"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-location">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>name</strong></p>
<a className="ansibleOptionLink" href="#parameter-name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name of the rule.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-nat_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-nat_type">
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
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-negate_target">
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
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-password">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-port">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-provider">
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
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-provider/api_key">
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
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-provider/ip_address">
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
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-provider/password">
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
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-provider/port">
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
<tr className="odd">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/serial_number"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-provider/serial_number">
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
<tr className="even">
<td><div className="ansible-option-indent"></div><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider/username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-provider/username">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-rulebase"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-rulebase">
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
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-service">
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
<p>The service.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_addresses"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_addresses">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_addresses</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_addresses" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Source addresses.</p>
<p>When referencing predefined EDLs, use config names of the EDLS not
their full names. The config names can be found with the CLI... request
system external-list show type predefined-ip name &lt;tab&gt;
panw-bulletproof-ip-list panw-bulletproof-ip-list panw-highrisk-ip-list
panw-highrisk-ip-list panw-known-ip-list panw-known-ip-list
panw-torexit-ip-list panw-torexit-ip-list</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_address_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_address_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_address_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_address_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_type=dynamic-ip-and-port</em> or or
<em>source_translation_type=dynamic-ip</em>.</p>
<p>Address type.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"interface-address"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"translated-address"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_fallback_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_fallback_interface">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_fallback_interface</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_fallback_interface" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_fallback_type=interface-address</em>.</p>
<p>The interface for the fallback source translation.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_fallback_ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_fallback_ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_fallback_ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_fallback_ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_fallback_type=interface-address</em>.</p>
<p>The IP address of the fallback source translation.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_fallback_ip_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_fallback_ip_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_fallback_ip_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_fallback_ip_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_fallback_type=interface-address</em>.</p>
<p>The type of the IP address for the fallback source translation IP
address.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ip"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"floating-ip"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_fallback_translated_addresses"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_fallback_translated_addresses">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_fallback_translated_addresses</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_fallback_translated_addresses" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_fallback_type=translated-address</em>.</p>
<p>Addresses for translated address types of fallback source
translation.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_fallback_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_fallback_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_fallback_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_fallback_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_type=dynamic-ip</em>.</p>
<p>Type of fallback for dynamic IP source translation.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"translated-address"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"interface-address"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_interface">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_interface</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_interface" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_address_type=interface-address</em>.</p>
<p>Interface of the source address.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_ip_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_ip_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_ip_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_address_type=interface-address</em>.</p>
<p>IP address of the source address translation.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_static_bi_directional"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_static_bi_directional">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_static_bi_directional</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_static_bi_directional" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_type=static-ip</em>.</p>
<p>Allow reverse translation from translated address to original
address.</p>
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
<div className="ansibleOptionAnchor" id="parameter-source_translation_static_translated_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_static_translated_address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_static_translated_address</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_static_translated_address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_type=static-ip</em>.</p>
<p>The IP address for the static source translation.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_translated_addresses"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_translated_addresses">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_translated_addresses</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_translated_addresses" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>For <em>source_translation_address_type=translated-address</em>.</p>
<p>Translated addresses of the source address translation.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_translation_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-source_translation_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_translation_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_translation_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Type of source address translation.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"dynamic-ip-and-port"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"dynamic-ip"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"static-ip"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-state">
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
<p>The state.</p>
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
role="ansible-option-choices-entry">"replaced"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"merged"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"deleted"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"gathered"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tags"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-tags">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tags</strong></p>
<a className="ansibleOptionLink" href="#parameter-tags" title="Permalink to this option"></a>
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
<div className="ansibleOptionAnchor" id="parameter-target"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-target">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-to_interface"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-to_interface">
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
<p>Egress interface from route lookup.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-to_zones"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-to_zones">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>to_zones</strong></p>
<a className="ansibleOptionLink" href="#parameter-to_zones" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>To zones.</p>
<p>Note that there should only be one element in this list.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-username">
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
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-uuid">
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
id="ansible_collections.paloaltonetworks.panos.panos_nat_rule2_module__parameter-vsys">
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
- name: add a nat rule
  panos_nat_rule2:
    provider: '{{ provider }}'
    name: 'myRule'
    description: 'Made by Ansible'
    nat_type: 'ipv4'
    from_zones: ['Trust-L3']
    to_zones: ['Untrusted-L3']
    to_interface: 'ethernet1/1'
    service: 'any'
    source_addresses: ['any']
    destination_addresses: ['any']
    source_translation_type: 'dynamic-ip-and-port'
    source_translation_address_type: 'interface-address'
    source_translation_interface: 'ethernet1/1'
```

### Authors

- Garfield Lee Freeman (@shinmog)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
