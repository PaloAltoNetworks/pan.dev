---
id: xmlapi_qs
title: XML API Quickstart
hide_title: false
description: PAN-OS® XML API Quickstart
keywords:
  - pan-os
  - panos
  - xml
  - api
  - quickstart
image: /panos/img/panos_apis.svg
---

:::note
The following guide will walk you through sending API requests to the PAN-OS® XML API using <a href="https://curl.haxx.se/docs/httpscripting.html" target="_blank">cURL</a>, although you may optionally use another API tool such as <a href="https://www.getpostman.com/" target="_blank">Postman</a>, <a href="https://insomnia.rest/" target="_blank">Insomnia</a> or <a href="http://restclient.net/" target="_blank">RESTClient</a>.
:::

## Enable API Access

1. Select an Admin Role profile.

   - Go to Device -> Admin Roles and select or create an admin role.

2. Select features available to the admin role.

   - Select the XML API tab.
   - Enable or disable XML API features from the list, such as Report, Log, and Configuration.
   - Select OK to confirm your change.

3. Assign the admin role to an administrator account.

   _Consult the [official product documentation](https://docs.paloaltonetworks.com/pan-os/9-0/pan-os-panorama-api/get-started-with-the-pan-os-xml-api/enable-api-access.html) for more details._

## Get Your API Key

1. Make a `GET` or `POST` request to the firewall’s hostname or IP address using the administrative credentials and the `type=keygen` URL query argument.

   _Be sure to replace `<firewall>` `<username>` and `<password>` with actual values._

```shell-session
curl -k -X GET 'https://<firewall>/api/?type=keygen&user=<username>&password=<password>'
```

_or_

```shell-session
curl -k -X POST 'https://<firewall>/api/?type=keygen&user=<username>&password=<password>'
```

A successful API call returns `status="success"` along with the API key within the `key` element:

```xml
<response status="success">
  <result>
    <key>gJlQWE56987nBxIqyfa62sZeRtYuIo2BgzEA9UOnlZBhU</key>
  </result>
</response>
```

## Make Your First API Call

The following example illustrates how to perform the `op` command `show system info` using `cURL`:

```shell-session
curl -k 'https://<firewall>//api/?type=op&cmd=<show><system><info></info></system></show>&key=<apikey>'
```

If successful, the response from the API should look similar to the following:

```xml
<response status="success">
  <result>
    <system>
      <hostname>PA-3050-A</hostname>
      <ip-address>10.2.3.4</ip-address>
      <public-ip-address>unknown</public-ip-address>
      <netmask>255.255.252.0</netmask>
      <default-gateway>10.2.3.1</default-gateway>
      <is-dhcp>no</is-dhcp>
      <ipv6-address>unknown</ipv6-address>
      <ipv6-link-local-address>
        c123::21b:ffff:feff:c1234/64
      </ipv6-link-local-address>
      <ipv6-default-gateway></ipv6-default-gateway>
      <mac-address>00:00:00:ff:c7:00</mac-address>
      <time>Tue Jan 8 16:22:56 2019</time>
      <uptime>0 days, 18:28:38</uptime>
      <devicename>PA-3050-A</devicename>
      <family>3000</family>
      <model>PA-3050</model>
      <serial>001701000529</serial>
      <cloud-mode>non-cloud</cloud-mode>
      <sw-version>9.0.0-b36</sw-version>
      <global-protect-client-package-version>
        0.0.0
      </global-protect-client-package-version>
      <app-version>8111-5239</app-version>
      <app-release-date>2019/01/07 15:51:30 PST</app-release-date>
      <av-version>3328-3783</av-version>
      <av-release-date>2019/01/07 11:22:02 PST</av-release-date>
      <threat-version>8111-5239</threat-version>
      <threat-release-date>2019/01/07 15:51:30 PST</threat-release-date>
      <wf-private-version>0</wf-private-version>
      <wf-private-release-date>unknown</wf-private-release-date>
      <url-db>paloaltonetworks</url-db>
      <wildfire-version>0</wildfire-version>
      <wildfire-release-date></wildfire-release-date>
      <url-filtering-version>20190109.20005</url-filtering-version>
      <global-protect-datafile-version>unknown</global-protect-datafile-version>
      <global-protect-datafile-release-date>
        unknown
      </global-protect-datafile-release-date>
      <global-protect-clientless-vpn-version>
        0
      </global-protect-clientless-vpn-version>
      <global-protect-clientless-vpn-release-date></global-protect-clientless-vpn-release-date>
      <logdb-version>9.0.10</logdb-version>
      <platform-family>3000</platform-family>
      <vpn-disable-mode>off</vpn-disable-mode>
      <multi-vsys>on</multi-vsys>
      <operational-mode>normal</operational-mode>
    </system>
  </result>
</response>
```

## Explore the API

Hungry for more? Check out the <a target="_blank" href="https://docs.paloaltonetworks.com/pan-os/9-0/pan-os-panorama-api/get-started-with-the-pan-os-xml-api/explore-the-api.html">official XML API product documentation</a> for a complete reference of available API endpoints and commands.

If you are using Postman, a <a target="_blank" href="https://documenter.getpostman.com/view/2937330/7LgDQwG">documented collection</a> is available.
