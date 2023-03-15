orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module">

</div>

# paloaltonetworks.panos.panos_security_rule module -- Manage security rule policy on PAN-OS devices or Panorama management console.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_security_rule_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_security_rule`.

</div>

<div class="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div class="contents" local="" depth="1">

</div>

## Synopsis

- - Security policies allow you to enforce rules and take action, and
    can be as general or specific as needed.
  - The policy rules are compared against the incoming traffic in
    sequence, and because the first rule that matches the traffic is
    applied, the more specific rules must precede the more general ones.

## Requirements

The below requirements are needed on the host that executes this module.

- pandevice can be obtained from PyPI
  [https://pypi.python.org/pypi/pandevice\\](https://pypi.python.org/pypi/pandevice\)

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
<div class="ansibleOptionAnchor" id="parameter-action"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-action">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>action</strong></p>
<a class="ansibleOptionLink" href="#parameter-action" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Action to apply once rules matches.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"allow"</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"deny"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"drop"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"reset-client"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"reset-server"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"reset-both"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-antivirus"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-antivirus">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>antivirus</strong></p>
<a class="ansibleOptionLink" href="#parameter-antivirus" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the already defined antivirus profile.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-api_key">
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
<div class="ansibleOptionAnchor" id="parameter-application"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-application">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>application</strong></p>
<a class="ansibleOptionLink" href="#parameter-application" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of applications, application groups, and/or application
filters.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-audit_comment"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-audit_comment">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>audit_comment</strong></p>
<a class="ansibleOptionLink" href="#parameter-audit_comment" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Add an audit comment to the rule being defined.</p>
<p>This is only applied if there was a change to the rule.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-category"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-category">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>category</strong></p>
<a class="ansibleOptionLink" href="#parameter-category" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of destination URL categories.</p>
<p>When referencing predefined EDLs, use config names of the EDLS not
their full names. The config names can be found with the CLI... request
system external-list show type predefined-url name &lt;tab&gt;
panw-auth-portal-exclude-list panw-auth-portal-exclude-list</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-commit">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>commit</strong></p>
<a class="ansibleOptionLink" href="#parameter-commit" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Please use <code class="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_firewall &lt;ansible_collections.paloaltonetworks.panos.panos_commit_firewall_module&gt;</code>,
<code class="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_panorama &lt;ansible_collections.paloaltonetworks.panos.panos_commit_panorama_module&gt;</code>,
<code class="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_commit\_push &lt;ansible_collections.paloaltonetworks.panos.panos_commit_push_module&gt;</code>
instead.</p>
<hr/>
<p>Commit changes after creating object. If <em>ip_address</em> is a
Panorama device, and <em>device_group</em> or <em>template</em> are also
set, perform a commit to Panorama and a commit-all to the device
group/template.</p>
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-data_filtering"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-data_filtering">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>data_filtering</strong></p>
<a class="ansibleOptionLink" href="#parameter-data_filtering" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the already defined data_filtering profile.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-description">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>description</strong></p>
<a class="ansibleOptionLink" href="#parameter-description" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Description of the security rule.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-destination_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-destination_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-destination_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of destination addresses.</p>
<p>This can be an IP address, an address object/group, etc.</p>
<p>When referencing predefined EDLs, use config names of the EDLS not
their full names. The config names can be found with the CLI... request
system external-list show type predefined-ip name &lt;tab&gt;
panw-bulletproof-ip-list panw-bulletproof-ip-list panw-highrisk-ip-list
panw-highrisk-ip-list panw-known-ip-list panw-known-ip-list
panw-torexit-ip-list panw-torexit-ip-list</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-destination_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-destination_zone">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_zone</strong></p>
<a class="ansibleOptionLink" href="#parameter-destination_zone" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of destination zones.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-device_group">
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
<div class="ansibleOptionAnchor" id="parameter-devicegroup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-devicegroup">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>devicegroup</strong></p>
<a class="ansibleOptionLink" href="#parameter-devicegroup" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p><strong>Deprecated</strong></p>
<p>Use <em>device_group</em> instead.</p>
<hr/>
<p>Device groups are logical groups of firewalls in Panorama.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-disable_server_response_inspection"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-disable_server_response_inspection">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>disable_server_response_inspection</strong></p>
<a class="ansibleOptionLink" href="#parameter-disable_server_response_inspection" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Disables packet inspection from the server to the client. Useful
under heavy server load conditions.</p>
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
<div class="ansibleOptionAnchor" id="parameter-disabled"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-disabled">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>disabled</strong></p>
<a class="ansibleOptionLink" href="#parameter-disabled" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Disable this rule.</p>
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-existing_rule"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-existing_rule">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>existing_rule</strong></p>
<a class="ansibleOptionLink" href="#parameter-existing_rule" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-file_blocking"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-file_blocking">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>file_blocking</strong></p>
<a class="ansibleOptionLink" href="#parameter-file_blocking" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the already defined file_blocking profile.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-gathered_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-gathered_filter">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>gathered_filter</strong></p>
<a class="ansibleOptionLink" href="#parameter-gathered_filter" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>When <em>state=gathered</em>.</p>
<p>An advanced filtering option to filter results returned from
PAN-OS.</p>
<p>Refer to the guide discussing <em>gathered_filter</em> for more
information.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-group_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-group_profile">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>group_profile</strong></p>
<a class="ansibleOptionLink" href="#parameter-group_profile" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<ul>
<li>Security profile group that is already defined in the system. This
property supersedes antivirus, vulnerability, spyware, url_filtering,
file_blocking, data_filtering, and wildfire_analysis properties.</li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-group_tag"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-group_tag">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>group_tag</strong></p>
<a class="ansibleOptionLink" href="#parameter-group_tag" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The group tag.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-hip_profiles"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-hip_profiles">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>hip_profiles</strong></p>
<a class="ansibleOptionLink" href="#parameter-hip_profiles" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<ul>
<li><dl>
<dt>If you are using GlobalProtect with host information profile
(HIP)</dt>
<dd>
enabled, you can also base the policy on information collected by
GlobalProtect. For example, the user access level can be determined HIP
that notifies the firewall about the user's local configuration.
<p>- NOTE: If <em>state=present</em> or <em>state=replaced</em>, and
you're running PAN-OS &lt; 10.0.0, then this will have a default of
<em>["any"]</em>.</p>
</dd>
</dl></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-icmp_unreachable"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-icmp_unreachable">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>icmp_unreachable</strong></p>
<a class="ansibleOptionLink" href="#parameter-icmp_unreachable" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Send 'ICMP Unreachable'. Used with 'deny', 'drop', and 'reset'
actions.</p>
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
<div class="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-ip_address">
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
<div class="ansibleOptionAnchor" id="parameter-location"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-location">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>location</strong></p>
<a class="ansibleOptionLink" href="#parameter-location" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Position to place the rule in.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"top"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"bottom"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"before"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"after"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-log_end"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-log_end">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_end</strong></p>
<a class="ansibleOptionLink" href="#parameter-log_end" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Whether to log at session end.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">false</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">true</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-log_setting"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-log_setting">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_setting</strong></p>
<a class="ansibleOptionLink" href="#parameter-log_setting" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Log forwarding profile.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-log_start"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-log_start">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>log_start</strong></p>
<a class="ansibleOptionLink" href="#parameter-log_start" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Whether to log at session start.</p>
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-negate_destination"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-negate_destination">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>negate_destination</strong></p>
<a class="ansibleOptionLink" href="#parameter-negate_destination" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Match on the reverse of the 'destination_ip' attribute</p>
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
<div class="ansibleOptionAnchor" id="parameter-negate_source"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-negate_source">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>negate_source</strong></p>
<a class="ansibleOptionLink" href="#parameter-negate_source" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Match on the reverse of the 'source_ip' attribute</p>
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-negate_target"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-negate_target">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>negate_target</strong></p>
<a class="ansibleOptionLink" href="#parameter-negate_target" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Applicable for Panorama only.</p>
<p>Negate the value for <em>target</em>.</p>
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-provider/username">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-rule_name">
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
<div class="ansibleOptionAnchor" id="parameter-rule_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-rule_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>rule_type</strong></p>
<a class="ansibleOptionLink" href="#parameter-rule_type" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Type of security rule (version 6.1 of PanOS and above).</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"universal"</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"intrazone"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"interzone"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-rulebase"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-rulebase">
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
<div class="ansibleOptionAnchor" id="parameter-schedule"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-schedule">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>schedule</strong></p>
<a class="ansibleOptionLink" href="#parameter-schedule" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Schedule in which this rule is active.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-service"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-service">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>service</strong></p>
<a class="ansibleOptionLink" href="#parameter-service" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of services and/or service groups.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">["application-default"]</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-source_ip"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-source_ip">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_ip</strong></p>
<a class="ansibleOptionLink" href="#parameter-source_ip" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of source addresses.</p>
<p>This can be an IP address, an address object/group, etc.</p>
<p>When referencing predefined EDLs, use config names of the EDLS not
their full names. The config names can be found with the CLI... request
system external-list show type predefined-ip name &lt;tab&gt;
panw-bulletproof-ip-list panw-bulletproof-ip-list panw-highrisk-ip-list
panw-highrisk-ip-list panw-known-ip-list panw-known-ip-list
panw-torexit-ip-list panw-torexit-ip-list</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-source_user"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-source_user">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_user</strong></p>
<a class="ansibleOptionLink" href="#parameter-source_user" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Use users to enforce policy for individual users or a group of
users.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-source_zone"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-source_zone">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_zone</strong></p>
<a class="ansibleOptionLink" href="#parameter-source_zone" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of source zones.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">["any"]</code></p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-spyware"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-spyware">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>spyware</strong></p>
<a class="ansibleOptionLink" href="#parameter-spyware" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the already defined spyware profile.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-state">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>state</strong></p>
<a class="ansibleOptionLink" href="#parameter-state" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The state.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"present"</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"absent"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"replaced"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"merged"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"deleted"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"gathered"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-tag_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-tag_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag_name</strong></p>
<a class="ansibleOptionLink" href="#parameter-tag_name" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of tags associated with the rule.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-target"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-target">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>target</strong></p>
<a class="ansibleOptionLink" href="#parameter-target" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Applicable for Panorama only.</p>
<p>Apply this rule exclusively to the listed firewall serial
numbers.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-url_filtering"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-url_filtering">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>url_filtering</strong></p>
<a class="ansibleOptionLink" href="#parameter-url_filtering" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the already defined url_filtering profile.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-username">
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
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-uuid">
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
<p>The rule UUID.</p>
<p>Note that this is currently more of a read-only field.</p>
<p>Usage of the UUID cannot currently take the place of using the rule
name as the primary identifier.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-vsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-vsys">
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
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-vulnerability"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-vulnerability">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vulnerability</strong></p>
<a class="ansibleOptionLink" href="#parameter-vulnerability" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the already defined vulnerability profile.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-wildfire_analysis"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_security_rule_module__parameter-wildfire_analysis">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>wildfire_analysis</strong></p>
<a class="ansibleOptionLink" href="#parameter-wildfire_analysis" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the already defined wildfire_analysis profile.</p>
</div></td>
</tr>
</tbody>
</table>

## Notes

<div class="note">

<div class="title">

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
  panos_security_rule:
    provider: '{{ provider }}'
    device_group: 'Cloud Edge'
    rule_name: 'SSH permit'
    description: 'SSH rule test'
    tag_name: ['production']
    source_zone: ['public']
    source_ip: ['any']
    destination_zone: ['private']
    destination_ip: ['1.1.1.1']
    application: ['ssh']
    action: 'allow'

- name: add a rule to allow HTTP multimedia only to CDNs
  panos_security_rule:
    provider: '{{ provider }}'
    rule_name: 'HTTP Multimedia'
    description: 'Allow HTTP multimedia only to host at 1.1.1.1'
    source_zone: ['private']
    destination_zone: ['public']
    category: ['content-delivery-networks']
    application: ['http-video', 'http-audio']
    service: ['service-http', 'service-https']
    action: 'allow'

- name: add a more complex rule that uses security profiles
  panos_security_rule:
    provider: '{{ provider }}'
    rule_name: 'Allow HTTP'
    source_zone: ['public']
    destination_zone: ['private']
    log_start: false
    log_end: true
    action: 'allow'
    antivirus: 'strict'
    vulnerability: 'strict'
    spyware: 'strict'
    url_filtering: 'strict'
    wildfire_analysis: 'default'

- name: disable a Panorama pre-rule
  panos_security_rule:
    provider: '{{ provider }}'
    device_group: 'Production edge'
    rule_name: 'Allow telnet'
    source_zone: ['public']
    destination_zone: ['private']
    source_ip: ['any']
    destination_ip: ['1.1.1.1']
    log_start: false
    log_end: true
    action: 'allow'
    disabled: true

- name: delete a device group security rule
  panos_security_rule:
    provider: '{{ provider }}'
    state: 'absent'
    device_group: 'DC Firewalls'
    rule_name: 'Allow telnet'

- name: add a rule at a specific location in the rulebase
  panos_security_rule:
    provider: '{{ provider }}'
    rule_name: 'SSH permit'
    description: 'SSH rule test'
    source_zone: ['untrust']
    destination_zone: ['trust']
    source_ip: ['any']
    source_user: ['any']
    destination_ip: ['1.1.1.1']
    category: ['any']
    application: ['ssh']
    service: ['application-default']
    action: 'allow'
    location: 'before'
    existing_rule: 'Allow MySQL'
```

### Authors

- Ivan Bojer (@ivanbojer)
- Robert Hagen (@stealthllama)
- Michael Richardson (@mrichardson03)
- Garfield Lee Freeman (@shinmog)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
