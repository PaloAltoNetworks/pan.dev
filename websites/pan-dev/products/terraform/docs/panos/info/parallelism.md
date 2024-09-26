---
id: parallelism
title: Parallelism
sidebar_label: Parallelism
hide_title: true
description: Parallelism
keywords:
  - pan-os
  - panos
  - xml
  - api
  - firewall
  - configuration
  - terraform
---

# Parallelism

Terraform uses goroutines to speed up deployment, but if the number of parallel operations launched exceeds [what is recommended](https://docs.paloaltonetworks.com/pan-os/10-0/pan-os-panorama-api/pan-os-xml-api-request-types/apply-user-id-mapping-and-populate-dynamic-address-groups-api.html):

```
Limit the number of concurrent API calls to five. This limit ensures that there is no performance impact to the firewall web interface as the management plane web server handles requests from both the API and the web interface.
```

In order to accomplish this, make sure you set the [parallelism](https://www.terraform.io/cli/commands/apply#parallelism-n) value at or below this limit to prevent performance impacts.
