orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module">

</div>

# paloaltonetworks.panos.panos_decryption_rule module -- Manage a decryption rule on PAN-OS.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_decryption_rule`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 2.10.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- This module works for PAN-OS 7.0 and above.
- Allows for the management of decryption rules on PAN-OS.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python \>= 0.17
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
<div className="ansibleOptionAnchor" id="parameter-action"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-action">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>action</strong></p>
<a className="ansibleOptionLink" href="#parameter-action" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The action.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"no-decrypt"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"decrypt"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"decrypt-and-forward"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-api_key">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-audit_comment"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-audit_comment">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-decryption_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-decryption_profile">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>decryption_profile</strong></p>
<a className="ansibleOptionLink" href="#parameter-decryption_profile" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The decryption profile.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-decryption_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-decryption_type">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>decryption_type</strong></p>
<a className="ansibleOptionLink" href="#parameter-decryption_type" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The decryption type.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ssl-forward-proxy"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ssh-proxy"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ssl-inbound-inspection"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-description">
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
<p>The rule description.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_addresses"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-destination_addresses">
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
<p>List of destination addresses.</p>
<p>This can be an IP address, an address object/group, etc.</p>
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
<div className="ansibleOptionAnchor" id="parameter-destination_hip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-destination_hip">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_hip</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_hip" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The source HIP info.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_zones"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-destination_zones">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_zones</strong></p>
<a className="ansibleOptionLink" href="#parameter-destination_zones" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>List of destination zones.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-device_group">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-disabled">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-existing_rule">
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
<div className="ansibleOptionAnchor" id="parameter-forwarding_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-forwarding_profile">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>forwarding_profile</strong></p>
<a className="ansibleOptionLink" href="#parameter-forwarding_profile" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The forwarding profile.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gathered_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-gathered_filter">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-group_tag">
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
<p>PAN-OS 9.0 and above.</p>
<p>The group tag.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-location">
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
<div className="ansibleOptionAnchor" id="parameter-log_failed_tls_handshakes"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-log_failed_tls_handshakes">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_failed_tls_handshakes</strong></p>
<a className="ansibleOptionLink" href="#parameter-log_failed_tls_handshakes" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 10.0 and above.</p>
<p>Log failed TLS handshakes.</p>
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
<div className="ansibleOptionAnchor" id="parameter-log_setting"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-log_setting">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_setting</strong></p>
<a className="ansibleOptionLink" href="#parameter-log_setting" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 10.0 and above.</p>
<p>The log setting.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-log_successful_tls_handshakes"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-log_successful_tls_handshakes">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_successful_tls_handshakes</strong></p>
<a className="ansibleOptionLink" href="#parameter-log_successful_tls_handshakes" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 10.0 and above.</p>
<p>Log successful TLS handshakes.</p>
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
<div className="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-name">
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
<div className="ansibleOptionAnchor" id="parameter-negate_destination"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-negate_destination">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>negate_destination</strong></p>
<a className="ansibleOptionLink" href="#parameter-negate_destination" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Negate the destination addresses.</p>
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
<div className="ansibleOptionAnchor" id="parameter-negate_source"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-negate_source">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>negate_source</strong></p>
<a className="ansibleOptionLink" href="#parameter-negate_source" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">boolean</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Negate the source addresses.</p>
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
<div className="ansibleOptionAnchor" id="parameter-negate_target"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-negate_target">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-provider/username">
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
<div className="ansibleOptionAnchor" id="parameter-rulebase"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-rulebase">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-services"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-services">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>services</strong></p>
<a className="ansibleOptionLink" href="#parameter-services" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>List of services.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_addresses"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-source_addresses">
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
<p>List of source addresses.</p>
<p>This can be an IP address, an address object/group, etc.</p>
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
<div className="ansibleOptionAnchor" id="parameter-source_hip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-source_hip">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_hip</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_hip" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The source HIP info.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_users"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-source_users">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_users</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_users" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The source users.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-source_zones"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-source_zones">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_zones</strong></p>
<a className="ansibleOptionLink" href="#parameter-source_zones" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>List of source zones.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ssl_certificate"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-ssl_certificate">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ssl_certificate</strong></p>
<a className="ansibleOptionLink" href="#parameter-ssl_certificate" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>The SSL certificate.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-state">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-tags"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-tags">
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
<p>The administrative tags.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-target"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-target">
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
<div className="ansibleOptionAnchor" id="parameter-url_categories"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-url_categories">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>url_categories</strong></p>
<a className="ansibleOptionLink" href="#parameter-url_categories" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">list</span> / <span
className="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>List of URL categories.</p>
<p>When referencing predefined EDLs, use config names of the EDLS not
their full names. The config names can be found with the CLI... request
system external-list show type predefined-url name &lt;tab&gt;
panw-auth-portal-exclude-list panw-auth-portal-exclude-list</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-username">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-uuid">
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
id="ansible_collections.paloaltonetworks.panos.panos_decryption_rule_module__parameter-vsys">
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
- name: add SSH inbound rule to Panorama device group
  panos_decryption_rule:
    provider: '{{ provider }}'
    device_group: 'Cloud Edge'
    name: 'sampleRule'
    description: 'Made by Ansible'
    source_zones: ['any']
    source_addresses: ['192.168.10.15']
    source_users: ['any']
    source_hip: ['any']
    destination_zones: ['any']
    destination_addresses: ['10.20.30.40']
    destination_hip: ['any']
    negate_destination: true
    services: ['application-default']
    url_categories: ['adult', 'dating']
    action: 'decrypt'
    decryption_type: 'ssl-forward-proxy'
    log_successful_tls_handshakes: true
    log_failed_tls_handshakes: true
    audit_comment: 'Initial config'
```

### Authors

- Garfield Lee Freeman (@shinmog)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
