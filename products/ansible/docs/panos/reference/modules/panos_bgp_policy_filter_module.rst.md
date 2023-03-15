orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module">

</div>

# paloaltonetworks.panos.panos_bgp_policy_filter module -- Manage a BGP Policy Import/Export Rule

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_bgp_policy_filter`.

</div>

<div class="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div class="contents" local="" depth="1">

</div>

## Synopsis

- Use BGP to publish and consume routes from disparate networks.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python can be obtained from PyPI
  [https://pypi.python.org/pypi/pan-python\\](https://pypi.python.org/pypi/pan-python\)
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
<div class="ansibleOptionAnchor" id="parameter-address_prefix"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-address_prefix">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>address_prefix</strong></p>
<a class="ansibleOptionLink" href="#parameter-address_prefix" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=dictionary</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>List of dicts with "name"/"exact" keys.</p>
<p>Using the dict form for address prefixes should only be used with
<em>policy_type=aggregate</em>.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-api_key">
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-commit">
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
<div class="ansibleOptionAnchor" id="parameter-enable"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-enable">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>enable</strong></p>
<a class="ansibleOptionLink" href="#parameter-enable" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">boolean</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Enable filter.</p>
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
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-filter_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-filter_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>filter_type</strong></p>
<a class="ansibleOptionLink" href="#parameter-filter_type" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The type of filter.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"non-exist"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"advertise"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"suppress"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-ip_address">
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
<div class="ansibleOptionAnchor" id="parameter-match_afi"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_afi">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_afi</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_afi" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Address Family Identifier.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"ip"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"ipv6"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_as_path_regex"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_as_path_regex">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_as_path_regex</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_as_path_regex" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>AS-path regular expression.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_community_regex"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_community_regex">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_community_regex</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_community_regex" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Community AS-path regular expression.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_extended_community_regex"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_extended_community_regex">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_extended_community_regex</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_extended_community_regex" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Extended Community AS-path regular expression.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_from_peer"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_from_peer">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_from_peer</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_from_peer" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Filter by peer that sent this route.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_med"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_med">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_med</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_med" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">integer</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Multi-Exit Discriminator.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_nexthop"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_nexthop">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_nexthop</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_nexthop" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Next-hop attributes.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_route_table"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_route_table">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_route_table</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_route_table" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Route table to match rule.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"unicast"</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"multicast"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"both"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-match_safi"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-match_safi">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>match_safi</strong></p>
<a class="ansibleOptionLink" href="#parameter-match_safi" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Subsequent Address Family Identifier.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"ip"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"ipv6"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>name</strong></p>
<a class="ansibleOptionLink" href="#parameter-name" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of filter.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-password">
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
<div class="ansibleOptionAnchor" id="parameter-policy_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-policy_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>policy_name</strong></p>
<a class="ansibleOptionLink" href="#parameter-policy_name" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The name of the policy object.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-policy_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-policy_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>policy_type</strong></p>
<a class="ansibleOptionLink" href="#parameter-policy_type" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The type of policy object.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"conditional-advertisement"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"aggregate"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-provider/username">
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
<div class="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-state">
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
<p>Add or remove BGP Policy Filter.</p>
<p><em>state=return-object</em> is deprecated and will be removed in
2.12.</p>
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
role="ansible-option-choices-entry">"return-object"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-template"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-template">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template</strong></p>
<a class="ansibleOptionLink" href="#parameter-template" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>(Panorama only) The template this operation should target. Mutually
exclusive with <em>template_stack</em>.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-template_stack"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-template_stack">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template_stack</strong></p>
<a class="ansibleOptionLink" href="#parameter-template_stack" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>(Panorama only) The template stack this operation should target.
Mutually exclusive with <em>template</em>.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-username">
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
<div class="ansibleOptionAnchor" id="parameter-vr_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__parameter-vr_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>vr_name</strong></p>
<a class="ansibleOptionLink" href="#parameter-vr_name" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>Name of the virtual router; it must already exist and have BGP
configured.</p>
<p>See <code class="interpreted-text"
role="ref">paloaltonetworks.panos.panos\_virtual\_router &lt;ansible_collections.paloaltonetworks.panos.panos_virtual_router_module&gt;</code>.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-default-bold">Default:</span> <code
class="interpreted-text"
role="ansible-option-default">"default"</code></p>
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
and *port*). If both are present, then the classic params are ignored. -
If the PAN-OS to be configured is Panorama, either *template* or
*template_stack* must be specified.

</div>

## Examples

``` yaml+jinja
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
<div class="ansibleOptionAnchor" id="return-panos_obj"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_bgp_policy_filter_module__return-panos_obj">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>panos_obj</strong></p>
<a class="ansibleOptionLink" href="#return-panos_obj" title="Permalink to this return value"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>a serialized policy filter is returned when state ==
'return-object'</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-returned-bold">Returned:</span>
success</p>
</div></td>
</tr>
</tbody>
</table>

### Authors

- Joshua Colson (@freakinhippie)
- Garfield Lee Freeman (@shinmog)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
