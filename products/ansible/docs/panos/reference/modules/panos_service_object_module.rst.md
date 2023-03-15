orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_service_object_module">

</div>

# paloaltonetworks.panos.panos_service_object module -- Manage service objects on PAN-OS devices.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_service_object_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_service_object`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Manage service objects on PAN-OS devices.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python can be obtained from PyPI
  [https://pypi.python.org/pypi/pan-python\\](https://pypi.python.org/pypi/pan-python\)
- pandevice can be obtained from PyPI
  [https://pypi.python.org/pypi/pandevice\\](https://pypi.python.org/pypi/pandevice\)

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
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-api_key">
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
<div className="ansibleOptionAnchor" id="parameter-commit"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-commit">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-description"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-description">
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
<p>Descriptive name for this service object.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-destination_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-destination_port">
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
<p>Destination port of the service object. Required if state is
<em>present</em>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-device_group">
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
<div className="ansibleOptionAnchor" id="parameter-enable_override_timeout"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-enable_override_timeout">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>enable_override_timeout</strong></p>
<a className="ansibleOptionLink" href="#parameter-enable_override_timeout" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 8.1 and above.</p>
<p>Override session timeout value.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"no"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"yes"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-gathered_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-gathered_filter">
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
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-ip_address">
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
<div className="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-name">
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
<p>Name of service object.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-override_half_close_timeout"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-override_half_close_timeout">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>override_half_close_timeout</strong></p>
<a className="ansibleOptionLink" href="#parameter-override_half_close_timeout" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 8.1 and above.</p>
<p>Applicable for <em>protocol=tcp</em> only.</p>
<p>TCP session half-close tieout value (in seconds).</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-override_time_wait_timeout"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-override_time_wait_timeout">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>override_time_wait_timeout</strong></p>
<a className="ansibleOptionLink" href="#parameter-override_time_wait_timeout" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 8.1 and above.</p>
<p>Applicable for <em>protocol=tcp</em> only.</p>
<p>TCP session time-wait timeout value (in seconds).</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-override_timeout"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-override_timeout">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>override_timeout</strong></p>
<a className="ansibleOptionLink" href="#parameter-override_timeout" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 8.1 and above.</p>
<p>The TCP or UDP session timeout value (in seconds).</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-port">
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
<div className="ansibleOptionAnchor" id="parameter-protocol"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-protocol">
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
<p>Protocol of the service.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"tcp"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"udp"</code></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-provider/username">
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
<div className="ansibleOptionAnchor" id="parameter-source_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-source_port">
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
<p>Source port of the service object.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-state">
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
<div className="ansibleOptionAnchor" id="parameter-tag"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-tag">
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
<p>List of tags for this service object.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-username">
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
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-vsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_service_object_module__parameter-vsys">
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

\- Panorama is supported. - Check mode is supported. - PAN-OS
connectivity should be specified using *provider* or the classic PAN-OS
connectivity params (*ip_address*, *username*, *password*, *api_key*,
and *port*). If both are present, then the classic params are ignored.

</div>

## Examples

``` yaml+jinja
- name: Create service object 'ssh-tcp-22'
  panos_service_object:
    provider: '{{ provider }}'
    name: 'ssh-tcp-22'
    destination_port: '22'
    description: 'SSH on tcp/22'
    tag: ['Prod']

- name: Create service object 'mysql-tcp-3306'
  panos_service_object:
    provider: '{{ provider }}'
    name: 'mysql-tcp-3306'
    destination_port: '3306'
    description: 'MySQL on tcp/3306'

- name: Delete service object 'mysql-tcp-3306'
  panos_service_object:
    provider: '{{ provider }}'
    name: 'mysql-tcp-3306'
    state: 'absent'
```

### Authors

- Michael Richardson (@mrichardson03)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
