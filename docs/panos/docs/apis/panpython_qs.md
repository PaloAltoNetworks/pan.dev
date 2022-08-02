---
id: panpython_qs
title: PAN Python SDK Quickstart
sidebar_label: Quickstart
hide_title: false
description: Getting started with pan-python
keywords:
  - pan-os
  - panos
  - xml
  - api
  - quickstart
  - pan-python
  - sdk
  - python
image: /panos/img/panos_apis.svg
---

[![GitHub page](https://img.shields.io/badge/GitHub-Repo-brightgreen?style=for-the-badge&logo=github)](https://github.com/kevinsteves/pan-python) [![GitHub stars](https://img.shields.io/github/stars/kevinsteves/pan-python?style=for-the-badge)](https://github.com/kevinsteves/pan-python)

:::note
The following guide will walk you through installing `pan-python`, a powerful SDK capable of supporting a variety of automation projects and use cases
:::

## Introducing pan-python

`pan-python` is a multi-tool set for Palo Alto Networks **PAN-OS**,
**Panorama**, **WildFire** and **AutoFocus**.

The [panxapi.py](https://github.com/kevinsteves/pan-python/blob/master/doc/panxapi.rst)
command line program (bundled with `pan-python`) will be used to complete the following steps.

## Where to download and install

`pan-python` is available on GitHub at
<https://github.com/kevinsteves/pan-python>, as a [package on
PyPi](https://pypi.python.org/pypi/pan-python/) (Python Package Index),
or can be installed using
[pip](https://pip.pypa.io/en/latest/quickstart/) on Python 2.7 or 3.x.
`pan-python` has no dependencies.

## Documentation

[Documentation](https://github.com/kevinsteves/pan-python/tree/master/doc)
is available on GitHub and as HTML from the package `doc/` directory.

## Install `pan-python` using `pip`

Install `pan-python`:

```shell-session
pip install --user pan-python
```

Example output:

```console
Collecting pan-python
  Downloading pan-python-0.11.0.tar.gz (109kB)
    100% |                                | 112kB 2.0MB/s
Building wheels for collected packages: pan-python
  Running setup.py bdist_wheel for pan-python ... done
  Stored in directory: /home/ubuntu/.cache/pip/wheels/f4/4c/3e/f8d30075fc8084fd786f23f7751e98a9802759539d500b24de
Successfully built pan-python
Installing collected packages: pan-python
Successfully installed pan-python-0.11.0
```

## Show version

Check your `pan-python` version:

```shell-session
panxapi.py --version
```

Example output:

```console
pan-python 0.11.0
```

By default `pip` installs the latest version of the package.

---

Next, we'll dive into generating an API key, which is the basis for moving on to more advanced topics.
