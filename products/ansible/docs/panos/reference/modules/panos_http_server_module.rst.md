orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_http_server_module">

</div>

# paloaltonetworks.panos.panos_http_server module -- Manage HTTP servers in a HTTP server profile.

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_http_server_module_requirements>`
for details.

To use it in a playbook, specify:
`paloaltonetworks.panos.panos_http_server`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Manages HTTP servers in a HTTP server profile.

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python
- pandevice \>= 0.11.1
- PAN-OS \>= 8.0

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
<div className="ansibleOptionAnchor" id="parameter-address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-address">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>address</strong></p>
<a className="ansibleOptionLink" href="#parameter-address" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>IP address or FQDN of the HTTP server</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-api_key"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-api_key">
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
<div className="ansibleOptionAnchor" id="parameter-certificate_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-certificate_profile">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>certificate_profile</strong></p>
<a className="ansibleOptionLink" href="#parameter-certificate_profile" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 9.0+</p>
<p>Certificate profile for validating server cert.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-device_group"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-device_group">
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
<div className="ansibleOptionAnchor" id="parameter-gathered_filter"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-gathered_filter">
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
<div className="ansibleOptionAnchor" id="parameter-http_method"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-http_method">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>http_method</strong></p>
<a className="ansibleOptionLink" href="#parameter-http_method" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>HTTP method to use.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">"POST"</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-http_password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-http_password">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>http_password</strong></p>
<a className="ansibleOptionLink" href="#parameter-http_password" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Password for basic HTTP auth.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-http_port"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-http_port">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>http_port</strong></p>
<a className="ansibleOptionLink" href="#parameter-http_port" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">integer</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Port number.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-default-bold">Default:</span> <code
className="interpreted-text" role="ansible-option-default">443</code></p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-http_profile"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-http_profile">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>http_profile</strong></p>
<a className="ansibleOptionLink" href="#parameter-http_profile" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span> / <span
className="ansible-option-required">required</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Name of the http server profile.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-http_username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-http_username">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>http_username</strong></p>
<a className="ansibleOptionLink" href="#parameter-http_username" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Username for basic HTTP auth.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-ip_address">
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
<div className="ansibleOptionAnchor" id="parameter-name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-name">
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
<p>Server name.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-port">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-protocol">
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
<p>The protocol.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"HTTP"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"HTTPS"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
</ul>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-provider/username">
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
<div className="ansibleOptionAnchor" id="parameter-state"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-state">
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
<div className="ansibleOptionAnchor" id="parameter-tls_version"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-tls_version">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>tls_version</strong></p>
<a className="ansibleOptionLink" href="#parameter-tls_version" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>PAN-OS 9.0+</p>
<p>TLS handshake protocol version</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"1.0"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"1.1"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"1.2"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-username">
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
<div className="ansibleOptionAnchor" id="parameter-vsys"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_http_server_module__parameter-vsys">
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
role="ansible-option-default">"shared"</code></p>
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
- name: Create http server
  panos_http_server:
    provider: '{{ provider }}'
    http_profile: 'my-profile'
    name: 'my-http-server'
    address: '192.168.1.5'
    http_method: 'GET'
    http_username: 'jack'
    http_password: 'burton'
```

### Authors

- Garfield Lee Freeman (@shinmog)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
