---
id: tools-sigscan
title: "Sigscan"
sidebar_label: "Sigscan"
keywords:
  - Machine Identity Management
  - Libraries and SDKs
---

The Sigscan tool discovers and reports on signed container images within a registry. Any OCI-compliant registry is supported for [Sigstore/cosign](https://github.com/sigstore/cosign) signatures.  Registries supporting OCI artifacts are also supported, assuming that the signatures are produced using the Notary v2 [notation](https://github.com/notaryproject/notation) CLI.

You can also use Sigscan to scan the filesystem to discover and report on signed JAR as well as EXE files.  It will extract the signer certificate subject name as well as the countersigner/timestamp (if available) subject name.

- [Sigscan](https://github.com/Venafi/sigscan)

### Installation

#### Homebrew

If you have [Homebrew](https://brew.sh) on macOS or Linux, you can install Sigscan with:

```shell
brew install venafi/tap/sigscan
```

This will also install man pages and shell completion.

#### Binaries

Binaries for common platforms and architectures are provided on the [releases](https://github.com/venafi/sigscan/releases/latest) page.
You can generate shell completion from Sigscan itself with `sigscan completion`.

#### Go Install

If you have [Go](https://go.dev/) installed, you can install Sigscan with:

```shell
go install github.com/venafi/sigscan@latest
```

### Examples

```shell
$ sigscan repo myregistry --output pretty --username myuser --password supersecretpassword
```

```shell
localhost:5010
Path           Digest                                                                   NotaryV2  Sigstore/cosign  
alpine:signed  sha256:a777c9c66ba177ccfea23f2a216ff6721e78a662cd17019488c417135299cd89  ❌         ✅                
alpine:signed  sha256:a777c9c66ba177ccfea23f2a216ff6721e78a662cd17019488c417135299cd89  ❌         ✅                
alpine:signed  sha256:a777c9c66ba177ccfea23f2a216ff6721e78a662cd17019488c417135299cd89  ❌         ✅                
ubuntu:prod    sha256:31cd7bbfd36421dfd338bceb36d803b3663c1bfa87dfe6af7ba764b5bf34de05  ❌         ✅                
Found 4 signatures out of 4 entries
```

Inspecting the filesystem for signed artifacts:
```shell
$ sigscan fs test/tempdir1/ test/tempdir2 --output json | jq
```

```shell
{
  "filesystem": {
    "signatures": [
      {
        "path": "hello-signed.jar",
        "digest": "5aae615b2f60fa7b7b235d698afa2e4e3b9acca26aca157eaa63e1e8458aa4e4",
        "subjectname": "CN=ovf.venafidemo.com,OU=Solution Architects,O=Venafi\\, Inc.,L=San Jose,ST=CA,C=US",
        "countersigner": ""
      },
      {
        "path": "putty.exe",
        "digest": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "subjectname": "CN=Simon Tatham,O=Simon Tatham,ST=Cambridgeshire,C=GB",
        "countersigner": "CN=Sectigo RSA Time Stamping Signer #3,O=Sectigo Limited,ST=Manchester,C=GB"
      }
    ]
  },
  "directories": "test/tempdir1,test/tempdir2"
}
```