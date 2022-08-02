---
id: panpython_apikey
title: API Key Generation
sidebar_label: API Key Generation
hide_title: false
description: Generating an API key with pan-python
keywords:
  - pan-os
  - panos
  - xml
  - api
  - quickstart
  - pan-python
  - sdk
  - apikey
  - key
  - python
image: /panos/img/panos_apis.svg
---

:::note
Requests made to the PAN-OS® XML API will require authentication, in the form of an API key. The following steps will walk you through the process of generating a key and storing it for future use.
:::

The **panxapi.py** **-k** option performs the `type=keygen` API request
to generate the API key for an administrator account. The **-h** and
**-l** (ell) options specify the hostname or IP address of the firewall
and username and password arguments for the API request.

## Generate API Key

```shell-session
panxapi.py -h 10.30.11.101 -l admin:admin -k
```

Example output:

```console
keygen: success
API key:  "LUFRPT14MW5xOEo1R09KVlBZNnpnemh0VHRBOWl6TGM9bXcwM3JHUGVhRlNiY0dCR0srNERUQT09"
```

For brevity, the labs use the superuser administrator account `admin`;
creating API administrator accounts using a custom admin role with the
least privilege set of XML API types required for your usage, is
recommended.

A [.panrc](https://github.com/kevinsteves/pan-python/blob/master/doc/panrc.rst)
file contains hostname and API key variables optionally referenced by a
_tagname_ using the **panxapi.py** **-t** option. The `.panrc` file is a convenient way to store
API keys for all your firewalls in a file, then reference those keys by
tag when executing API calls. You'll create a .panrc file in `Lab 2` at
the bottom of this page and use it for all following API calls.

When **-t** is combined with **-h**, **-l** and **-k**, **panxapi.py**
writes `.panrc` format lines with the `hostname` and `api_key` variables
to _stdout_.

## Generate `.panrc` without _tagname_

Use a null string for the _tagname_ to create tagless variables; these
are matched when **-t** is not specified.

```shell-session
panxapi.py -t '' -h 10.30.11.101 -l admin:admin -k
```

Example output:

```console
keygen: success
# panxapi.py generated: 2017/04/08 09:05:42
hostname=10.30.11.101
api_key=LUFRPT14MW5xOEo1R09KVlBZNnpnemh0VHRBOWl6TGM9bXcwM3JHUGVhRlNiY0dCR0srNERUQT09
```

## Generate `.panrc` with _tagname_

```shell-session
panxapi.py -t xapilab -h 10.30.11.101 -l admin -k
```

Example output:

```console
Password:
keygen: success
# panxapi.py generated: 2017/04/08 09:08:47
hostname%xapilab=10.30.11.101
api_key%xapilab=LUFRPT14MW5xOEo1R09KVlBZNnpnemh0VHRBOWl6TGM9bXcwM3JHUGVhRlNiY0dCR0srNERUQT09
```

When the password is not specified on the command line the user is
prompted for it. This is useful to avoid leaving the password in the
shell history.

## Create `.panrc` file using shell output redirection

Shell output redirection can be used to create your `.panrc` file.

```shell-session
panxapi.py -t xapilab -h 10.30.11.101 -l admin -k >> ~/.panrc
```

Example output:

```console
Password:
keygen: success
```

Set least privilege permissions:

```shell-session
chmod 600 ~/.panrc
```

The `.panrc` file contains authentication material; it should have
strict file permissions (read/write for the owner, and not accessible by
group or other).

The `.panrc` file entries with your _tagname_ are verified by performing
an operational command API request with **-o** _cmd_.
