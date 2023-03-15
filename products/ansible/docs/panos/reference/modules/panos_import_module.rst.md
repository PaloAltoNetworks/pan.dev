orphan  

<div id="ansible_collections.paloaltonetworks.panos.panos_import_module">

</div>

# paloaltonetworks.panos.panos_import module -- import file on PAN-OS devices

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
`Requirements <ansible_collections.paloaltonetworks.panos.panos_import_module_requirements>`
for details.

To use it in a playbook, specify: `paloaltonetworks.panos.panos_import`.

</div>

<div className="rst-class">

ansible-version-added

</div>

New in paloaltonetworks.panos 1.0.0

<div className="contents" local="" depth="1">

</div>

## Synopsis

- Import file on PAN-OS device

## Requirements

The below requirements are needed on the host that executes this module.

- pan-python
- requests
- requests_toolbelt

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
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-api_key">
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
<div className="ansibleOptionAnchor" id="parameter-category"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-category">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>category</strong></p>
<a className="ansibleOptionLink" href="#parameter-category" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Category of file to import.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"anti-virus"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"application-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"captive-portal-text"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"certificate"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"configuration"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"content"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"credential-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"credential-coach-text"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"custom-logo"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"data-filter-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"device-state"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"file-block-continue-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"file-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-client"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-clientless-vpn"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-portal-custom-help-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-portal-custom-home-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-portal-custom-login-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"global-protect-portal-custom-welcome-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"high-availability-key"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"idp-metadata"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"keypair"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"license"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"logdb"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"mfa-login-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pandb-url-database"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"plugin"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"safe-search-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"saml-auth-internal-error-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"signed-url-database"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry-default">"software"</code> <span
className="ansible-option-choices-default-mark">← (default)</span></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ssl-cert-status-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"ssl-optout-text"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"url-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"url-coach-text"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"url-database"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"virus-block-page"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"wildfire"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-certificate_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-certificate_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>certificate_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-certificate_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=certificate</em>, this is the name of the
certificate object.</p>
<p>When <em>category=keypair</em>, the key pair will be associated with
this certificate object.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-custom_logo_location"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-custom_logo_location">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>custom_logo_location</strong></p>
<a className="ansibleOptionLink" href="#parameter-custom_logo_location" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=custom-logo</em>, import this logo file here.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"login-screen"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"main-ui"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pdf-report-footer"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pdf-report-header"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-filename"></div>
<div className="ansibleOptionAnchor" id="parameter-file"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-file">
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-filename">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
</div>
<p><strong>filename</strong></p>
<a className="ansibleOptionLink" href="#parameter-filename" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-aliases">aliases: file</span></p>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Location of the file to import into device.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-format"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-format">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>format</strong></p>
<a className="ansibleOptionLink" href="#parameter-format" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Format of the imported certifcate.</p>
<div className="rst-class">
<p>ansible-option-line</p>
</div>
<p><span className="ansible-option-choices">Choices:</span></p>
<ul>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pem"</code></li>
<li><code className="interpreted-text"
role="ansible-option-choices-entry">"pkcs12"</code></li>
</ul>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-ip_address"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-ip_address">
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
<div className="ansibleOptionAnchor" id="parameter-passphrase"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-passphrase">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>passphrase</strong></p>
<a className="ansibleOptionLink" href="#parameter-passphrase" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>Passphrase used to decrypt the certificate and/or private key.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-password"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-password">
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
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-port">
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
<div className="ansibleOptionAnchor" id="parameter-profile_name"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-profile_name">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>profile_name</strong></p>
<a className="ansibleOptionLink" href="#parameter-profile_name" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>When <em>category=idp-metadata</em>, the name of the SAML profile to
create.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-provider"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-provider">
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
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-provider/api_key">
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
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-provider/ip_address">
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
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-provider/password">
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
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-provider/port">
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
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-provider/serial_number">
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
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-provider/username">
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
<div className="ansibleOptionAnchor" id="parameter-template"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-template">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template</strong></p>
<a className="ansibleOptionLink" href="#parameter-template" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>(Panorama only) The template this operation should target. Mutually
exclusive with <em>template_stack</em>.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-template_stack"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-template_stack">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>template_stack</strong></p>
<a className="ansibleOptionLink" href="#parameter-template_stack" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>(Panorama only) The template stack this operation should target.
Mutually exclusive with <em>template</em>.</p>
</div></td>
</tr>
<tr className="odd">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-url"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-url">
<div className="rst-class">
<p>ansible-option-title</p>
</div>
</div>
<p><strong>url</strong></p>
<a className="ansibleOptionLink" href="#parameter-url" title="Permalink to this option"></a>
<div className="rst-class">
<p>ansible-option-type-line</p>
</div>
<p><span className="ansible-option-type">string</span></p>
</div></td>
<td><div className="ansible-option-cell">
<p>URL of the file that will be imported to device.</p>
</div></td>
</tr>
<tr className="even">
<td><div className="ansible-option-cell">
<div className="ansibleOptionAnchor" id="parameter-username"></div>
<div
id="ansible_collections.paloaltonetworks.panos.panos_import_module__parameter-username">
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
</tbody>
</table>

## Notes

<div className="note">

<div className="title">

Note

</div>

\- PAN-OS connectivity should be specified using *provider* or the
classic PAN-OS connectivity params (*ip_address*, *username*,
*password*, *api_key*, and *port*). If both are present, then the
classic params are ignored. - If the PAN-OS to be configured is
Panorama, either *template* or *template_stack* must be specified.

</div>

## Examples

``` yaml+jinja
- name: Import software image into PAN-OS
  panos_import:
    provider: '{{ provider }}'
    category: software
    file: /tmp/PanOS_vm-10.0.1

- name: Import certificate
  panos_import:
    provider: '{{ device }}'
    category: 'certificate'
    certificate_name: 'ISRG Root X1'
    format: 'pem'
    filename: '/tmp/isrgrootx1.pem'

- name: Import content
  panos_import:
    provider: '{{ device }}'
    category: 'content'
    filename: '/tmp/panupv2-all-contents-8322-6317'

- name: Import named configuration snapshot
  panos_import:
    provider: '{{ device }}'
    category: 'configuration'
    filename: '/tmp/config.xml'

- name: Import application block page
  panos_import:
    provider: '{{ device }}'
    category: 'application-block-page'
    filename: '/tmp/application-block-page.html'

- name: Import custom logo
  panos_import:
    provider: '{{ device }}'
    category: 'custom-logo'
    custom_logo_location: 'login-screen'
    filename: '/tmp/logo.jpg'

- name: Import SAML metadata profile
  panos_import:
    provider: '{{ device }}'
    category: 'idp-metadata'
    filename: '/tmp/saml_metadata.xml'
    profile_name: 'saml-profile'

- name: Import SAML metadata profile to template
  panos_import:
    provider: '{{ device }}'
    category: 'idp-metadata'
    filename: '/tmp/saml_metadata.xml'
    profile_name: 'saml-profile'
    template: firewall-template
```

### Authors

- Luigi Mori (@jtschichold)
- Ivan Bojer (@ivanbojer)
- Michael Richardson (@mrichardson03)

### Collection links

<p className="ansible-links">
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible/issues"  target="_blank" rel="noopener external">Issue Tracker</a>
  <a href="https://github.com/PaloAltoNetworks/pan-os-ansible"  target="_blank" rel="noopener external">Repository (Sources)</a>
</p>
