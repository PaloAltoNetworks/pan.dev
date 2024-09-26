---
id: view-vulnerabilities-by-package
title: View vulnerabilities by package name
sidebar_position: 5
---

This guide shows how to retrieve a list of packages in a particular image.

First of all, obtain an authorization token by [Authenticating a user](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg)

:::info

- The token is only valid for 30 minutes.

:::
Query the vulnerabilities statistics by package with [Download vulnerabilities](/compute/api/get-stats-vulnerabilities-download/) ![alt text](/icons/api-icon-pan-dev.svg):

```console
curl -sSL --header "authorization: Bearer access_token" \
  -H 'Content-Type: application/json' \
  -X GET \
  -o GET_stats_vulnerabilities_in_package.csv \
  "https://<CONSOLE>/api/v<VERSION>/stats/vulnerabilities/download?package"
```
This will generate a CSV file that lists all vulnerabilities by package name.

Open the downloaded file GET_stats_vulnerabilities_in_package.csv to view the vulnerabilities by package name.