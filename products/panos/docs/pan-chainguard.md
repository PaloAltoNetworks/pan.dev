---
id: pan-chainguard
title: Manage Root Store and Intermediate Certificate Chains on PAN-OS with pan-chainguard
sidebar_label: Update Root CA Store
description: pan-chainguard
keywords:
  - pan-os
  - panos
  - firewall
  - configuration
---

[`pan-chainguard`](https://github.com/PaloAltoNetworks/pan-chainguard) is a Python application which uses
[CCADB data](https://www.ccadb.org/resources)
and allows PAN-OS SSL decryption administrators to:

1. Create a custom, up-to-date trusted root store for PAN-OS.
2. Determine intermediate certificate chains for trusted Certificate
   Authorities in PAN-OS so they can be [preloaded](
   https://wiki.mozilla.org/Security/CryptoEngineering/Intermediate_Preloading) as device certificates.

This document walks through the most popular uses of pan-chainguard, but you can visit the [admin guide](https://github.com/PaloAltoNetworks/pan-chainguard/blob/main/doc/admin-guide.rst#install-pan-chainguard) for more details.


## Use Cases

#### The use case prerequisites include:

- Install [pan-chainguard](https://github.com/PaloAltoNetworks/pan-chainguard/blob/main/doc/admin-guide.rst#install-pan-chainguard)
- Set up a [.panrc](https://github.com/PaloAltoNetworks/pan-chainguard/blob/main/doc/admin-guide.rst#pan-chainguard-pan-os-xml-api-usage) file
- Configure [role based admin Role Based Admin](https://github.com/PaloAltoNetworks/pan-chainguard/blob/main/doc/admin-guide.rst#role-based-admin)

### Use Case 1: Update Out-of-date PAN-OS Root Store - All Vendor Sources

A PAN-OS SSL decryption administrator wants to refresh the system root store (Default Trusted Certificate Authorities) on a firewall. They want their updated trusted root store to contain the root certificates from the 4 common vendor stores:

- Mozilla
- Apple
- Chrome
- Microsoft

This is the simplest deployment because it can directly use the certificate archive from `pan-chainguard-content`, which is updated daily.

The steps to implement this use case include:

1. Download `pan-chainguard-content` certificate archive
2. Run `guard.py` to update PAN-OS trusted CAs

#### Download `pan-chainguard-content` certificate archive

`pan-chainguard-content` creates an updated certificate archive daily using a policy of the union of all 4 common vendor root certificate stores, and includes intermediate certificates for the root certificates, which are not used for this use case.

```bash
$ pwd
/home/ksteves/git/pan-chainguard/tmp

$ curl -sLO https://raw.githubusercontent.com/PaloAltoNetworks/pan-chainguard-content/main/latest-certs/certificates-new.tgz

$ ls -lh certificates-new.tgz
-rw-r--r--  1 ksteves  ksteves   2.0M Mar 24 11:19 certificates-new.tgz
```

#### Run `guard.py` to update PAN-OS trusted CAs

```bash
$ pwd
/home/ksteves/git/pan-chainguard

$ bin/guard.py -t pa-460-chainguard --show
0 Device Certificates

$ bin/guard.py -t pa-460-chainguard --admin chainguard --certs tmp/certificates-new.tgz --update --type root --dry-run
update dry-run: 0 to delete, 298 to add

$ bin/guard.py -t pa-460-chainguard --admin chainguard --certs tmp/certificates-new.tgz --update --type root
0 certificates deleted
298 certificates added

$ bin/guard.py -t pa-460-chainguard --show
298 Device Certificates
298 Trusted Root CA Certificates

$ bin/guard.py -t pa-460-chainguard --admin chainguard --commit
commit: success
```

Then repeat the certificate archive download and update periodically to ensure the root store remains up-to-date. These subsequent updates are performed incrementally, resulting in fast update times.

### Use Case 2: Update Out-of-date PAN-OS Root Store - Custom Vendor Sources

A PAN-OS SSL decryption administrator wants to refresh the system root store (Default Trusted Certificate Authorities) on a firewall. They want their updated trusted root store to contain the root certificates from:

- Mozilla
- Chrome

The steps to implement this use case include:

1. Download *CCADB All Certificate Information* CSV file
2. Create `sprocket.py policy.json` file
3. Run `sprocket.py` to create *root CA fingerprints* CSV file
4. Download `pan-chainguard-content` certificate archive
5. Run `link.py` to create new certificate archive
6. Run `guard.py` to update PAN-OS trusted CAs

#### Download *CCADB All Certificate Information* CSV file

```bash
$ pwd
/home/ksteves/git/pan-chainguard/tmp

$ curl --clobber -sOJ  https://ccadb.my.salesforce-sites.com/ccadb/AllCertificateRecordsCSVFormatv2

$ ls -lh AllCertificateRecordsReport.csv
-rw-r--r--  1 ksteves  ksteves   8.0M Mar 24 14:11 AllCertificateRecordsReport.csv
```

#### Create `sprocket.py policy.json` file

```bash
$ pwd
/home/ksteves/git/pan-chainguard/tmp

$ echo '{"sources":["mozilla","chrome"]}' > policy.json
```

#### Run `sprocket.py` to create *root CA fingerprints* CSV file

```bash
$ pwd
/home/ksteves/git/pan-chainguard

$ bin/sprocket.py --verbose -c tmp/AllCertificateRecordsReport.csv --policy tmp/policy.json -f tmp/root-fingerprints.csv
policy: {'sources': ['mozilla', 'chrome'], 'operation': 'union', 'trust_bits': []}
mozilla, chrome: 177 total certificates
```

#### Download `pan-chainguard-content` certificate archive

`pan-chainguard-content` creates an updated certificate archive daily using a policy of the union of all 4 common vendor root certificate stores, and includes intermediate certificates for the root certificates, which are not used for this use case.

```bash
$ pwd
/home/ksteves/git/pan-chainguard/tmp

$ curl -so certificates-old.tgz https://raw.githubusercontent.com/PaloAltoNetworks/pan-chainguard-content/main/latest-certs/certificates-new.tgz

$ ls -lh certificates-old.tgz
-rw-r--r--  1 ksteves  ksteves   2.0M Mar 26 11:56 certificates-old.tgz
```

#### Run `link.py` to create new certificate archive

```bash
$ pwd
/home/ksteves/git/pan-chainguard

$ bin/link.py --verbose -f tmp/root-fingerprints.csv --certs-old tmp/certificates-old.tgz --certs-new tmp/certificates-new.tgz
certs-old: 177
MozillaIntermediateCerts: 0
PublicAllIntermediateCerts: 0
crt.sh: 0
Total certs-new: 177
```

#### Run `guard.py` to update PAN-OS trusted CAs

```bash
$ pwd
/home/ksteves/git/pan-chainguard

$ bin/guard.py -t pa-460-chainguard --show
0 Device Certificates

$ bin/guard.py -t pa-460-chainguard --certs tmp/certificates-new.tgz --update --type root --dry-run

$ bin/guard.py -t pa-460-chainguard --certs tmp/certificates-new.tgz --update --type root

$ bin/guard.py -t pa-460-chainguard --show

$ bin/guard.py -t pa-460-chainguard --admin chainguard --commit
commit: success
```

Then repeat the certificate archive download and update periodically to ensure the root store remains up-to-date. These subsequent updates are performed incrementally, resulting in fast update times.