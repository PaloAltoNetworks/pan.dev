orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_object_module">

</div>

# paloaltonetworks.panos.panos_object module -- create/read/update/delete object in PAN-OS or Panorama

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_object_module_requirements>`
for details.

To use it in a playbook, specify: `paloaltonetworks.panos.panos_object`.

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
Updated to idempotent modules

Alternative  
Use
`paloaltonetworks.panos.panos\_address\_object <ansible_collections.paloaltonetworks.panos.panos_address_object_module>`,
`paloaltonetworks.panos.panos\_address\_group <ansible_collections.paloaltonetworks.panos.panos_address_group_module>`,
`paloaltonetworks.panos.panos\_service\_object <ansible_collections.paloaltonetworks.panos.panos_service_object_module>`,
`paloaltonetworks.panos.panos\_service\_group <ansible_collections.paloaltonetworks.panos.panos_service_group_module>`,
or
`paloaltonetworks.panos.panos\_tag\_object <ansible_collections.paloaltonetworks.panos.panos_tag_object_module>`
as appropriate.

## Synopsis

- Policy objects form the match criteria for policy rules and many other
  functions in PAN-OS. These may include
- address object, address groups, service objects, service groups, and
  tag.

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
<div class="ansibleOptionAnchor" id="parameter-address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>address</strong></p>
<a class="ansibleOptionLink" href="#parameter-address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The IP address of the host or network in CIDR notation.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-address_type"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-address_type">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>address_type</strong></p>
<a class="ansibleOptionLink" href="#parameter-address_type" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The type of address object definition. Valid types are
<em>ip-netmask</em> and <em>ip-range</em>.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry-default">"ip-netmask"</code> <span
class="ansible-option-choices-default-mark">← (default)</span></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"ip-range"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"fqdn"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-addressgroup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-addressgroup">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>addressgroup</strong></p>
<a class="ansibleOptionLink" href="#parameter-addressgroup" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>A static group of address objects or dynamic address group.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-addressobject"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-addressobject">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>addressobject</strong></p>
<a class="ansibleOptionLink" href="#parameter-addressobject" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The name of the address object.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-api_key">
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
<p>API key that can be used instead of
<em>username</em>/<em>password</em> credentials.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-color"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-color">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>color</strong></p>
<a class="ansibleOptionLink" href="#parameter-color" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<ul>
<li>The color of the tag object. Valid values are <em>red, green, blue,
yellow, copper, orange, purple, gray, light green, cyan, light gray,
blue gray, lime, black, gold, brown, olive, maroon, red-orange,
yellow-orange, forest green, turquoise blue, azure blue, cerulean blue,
midnight blue, medium blue, cobalt blue, violet blue, blue violet,
medium violet, medium rose, lavender, orchid, thistle, peach, salmon,
magenta, reggd violet, mahogany, burnt sienna and chestnut</em>.</li>
</ul>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"red"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"green"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"blue"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"yellow"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"copper"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"orange"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"purple"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"gray"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"light green"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"cyan"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"light gray"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"blue gray"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"lime"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"black"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"gold"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"brown"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"olive"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"maroon"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"red-orange"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"yellow-orange"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"forest green"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"turquoise blue"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"azure blue"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"cerulean blue"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"midnight blue"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"medium blue"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"cobalt blue"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"violet blue"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"blue violet"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"medium violet"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"medium rose"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"lavender"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"orchid"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"thistle"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"peach"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"salmon"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"magenta"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"red violet"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"mahogany"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"burnt sienna"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"chestnut"</code></li>
</ul>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-commit">
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
<div class="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-description">
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
<p>The description of the object.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-destination_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-destination_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>destination_port</strong></p>
<a class="ansibleOptionLink" href="#parameter-destination_port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The destination port to be used in a service object definition.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-devicegroup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-devicegroup">
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
<p>The name of the (preexisting) Panorama device group.</p>
<p>If undefined and ip_address is Panorama, this defaults to shared.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-dynamic_value"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-dynamic_value">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>dynamic_value</strong></p>
<a class="ansibleOptionLink" href="#parameter-dynamic_value" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The filter match criteria to be used in a dynamic addressgroup
definition.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-ip_address">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>ip_address</strong></p>
<a class="ansibleOptionLink" href="#parameter-ip_address" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>IP address (or hostname) of PAN-OS device or Panorama management
console being configured.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-operation"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-operation">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>operation</strong></p>
<a class="ansibleOptionLink" href="#parameter-operation" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span> / <span
class="ansible-option-required">required</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The operation to be performed.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"add"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"update"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"delete"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"find"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-password">
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
<p>Password credentials to use for authentication.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-protocol"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-protocol">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>protocol</strong></p>
<a class="ansibleOptionLink" href="#parameter-protocol" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The IP protocol to be used in a service object definition.</p>
<div class="rst-class">
<p>ansible-option-line</p>
</div>
<p><span class="ansible-option-choices">Choices:</span></p>
<ul>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"tcp"</code></li>
<li><code class="interpreted-text"
role="ansible-option-choices-entry">"udp"</code></li>
</ul>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-servicegroup"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-servicegroup">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>servicegroup</strong></p>
<a class="ansibleOptionLink" href="#parameter-servicegroup" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>A group of service objects.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-serviceobject"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-serviceobject">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>serviceobject</strong></p>
<a class="ansibleOptionLink" href="#parameter-serviceobject" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The name of the service object.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-services"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-services">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>services</strong></p>
<a class="ansibleOptionLink" href="#parameter-services" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The group of service objects used in a servicegroup definition.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-source_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-source_port">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>source_port</strong></p>
<a class="ansibleOptionLink" href="#parameter-source_port" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The source port to be used in a service object definition.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-static_value"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-static_value">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>static_value</strong></p>
<a class="ansibleOptionLink" href="#parameter-static_value" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">list</span> / <span
class="ansible-option-elements">elements=string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>A group of address objects to be used in an addressgroup
definition.</p>
</div></td>
</tr>
<tr class="odd">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-tag_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-tag_name">
<div class="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tag_name</strong></p>
<a class="ansibleOptionLink" href="#parameter-tag_name" title="Permalink to this option"></a>
<div class="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span class="ansible-option-type">string</span></p>
</div></td>
<td><div class="ansible-option-cell">
<p>The name of an object or rule tag.</p>
</div></td>
</tr>
<tr class="even">
<td><div class="ansible-option-cell">
<div class="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-username">
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
<p>Username credentials to use for authentication.</p>
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
id="ansible_collections.paloaltonetworks.panos.panos_object_module__parameter-vsys">
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
<p>The vsys to put the object into.</p>
<p>Firewall only.</p>
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

\- Checkmode is not supported. - Panorama is supported.

</div>

## Examples

``` yaml+jinja
- name: search for shared address object
  panos_object:
    ip_address: '{{ ip_address }}'
    username: '{{ username }}'
    password: '{{ password }}'
    operation: 'find'
    address: 'DevNet'

- name: create an address group in devicegroup using API key
  panos_object:
    ip_address: '{{ ip_address }}'
    api_key: '{{ api_key }}'
    operation: 'add'
    addressgroup: 'Prod_DB_Svrs'
    static_value: ['prod-db1', 'prod-db2', 'prod-db3']
    description: 'Production DMZ database servers'
    tag_name: 'DMZ'
    devicegroup: 'DMZ Firewalls'

- name: create a global service for TCP 3306
  panos_object:
    ip_address: '{{ ip_address }}'
    api_key: '{{ api_key }}'
    operation: 'add'
    serviceobject: 'mysql-3306'
    destination_port: '3306'
    protocol: 'tcp'
    description: 'MySQL on tcp/3306'

- name: create a global tag
  panos_object:
    ip_address: '{{ ip_address }}'
    username: '{{ username }}'
    password: '{{ password }}'
    operation: 'add'
    tag_name: 'ProjectX'
    color: 'yellow'
    description: 'Associated with Project X'

- name: delete an address object from a devicegroup using API key
  panos_object:
    ip_address: '{{ ip_address }}'
    api_key: '{{ api_key }}'
    operation: 'delete'
    addressobject: 'Win2K test'
```

## Status

- This module will be removed in version 3.0.0. *\[deprecated\]*
- For more information see [DEPRECATED](#deprecated).

### Authors

- Bob Hagen (@stealthllama)

### Collection links

<p class="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
