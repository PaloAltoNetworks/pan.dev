---
id: twistcli_gs
title: Getting Start with twistcli
sidebar_label: twistcli
---

Prisma Cloud ships a command-line configuration and control tool known as `twistcli`. It is supported on Linux, macOS, and Windows.

## Installing `twistcli`
The `twistcli` tool is delivered with every Prisma Cloud release. It is statically compiled, so it does not have any external dependencies, and it can run on any Linux host. No special installation is required. To run it, simply copy it to a host, and give it executable permissions.

The `twistcli` tool is available from a number of places:

* It can be download `twistcli` from the Console UI. Go to **Manage > System > Downloads.**
* It can downloaded from the API, which is typical use case for automated workflows. For more information, see the `/api/v1/util` endpoint.
The requirements for running `twistcli` are:
* `twistcli` must be able to connect to Console over the network from the host where it runs.
* For image scanning, Docker Engine must be installed on the executing machine.

## Connectivity to Console
Most `twistcli` functions require connectivity to Console. All example commands specify a variable called ``COMPUTE_CONSOLE``, which represents the address for your Console.

## Scan container images with `twistcli`.

The `twistcli` command has several subcommands. Use the `twistcli` images scan subcommand to invoke the scanner.

`twistcli` images scan — Scan an image for vulnerabilities and compliance issues. The image must reside on the system where `twistcli` runs. If not, retrieve the image with docker pull first. `Twistcli` does not pull images for you.

```bash
twistcli images scan [OPTIONS] [IMAGE]
```

# Description
The `twistcli` images scan function collects information about the packages and binaries in the container image, and then sends it to Console for analysis.

Data collected by `twistcli` includes:

* Packages in the image.
* Files installed by each package.
* Hashes for each file in the image.

After Console analyzes the image for vulnerabilities, `twistcli`:

* Outputs a summary report.
* Exits with a pass or fail return value.

Scan results can be retrieved in JSON format from the Console using API calls.
To specify an image to scan, use either the image ID, or repository name and tag. The image should be present on the system, having either been built there or pulled from a registry. If a repository is specified with a tag, `twistcli` looks for an image tagged `latest`.

# Return Value
The exit code is 0 if `twistcli` finds no vulnerabilities or compliance issues. Otherwise, the exit code is 1.

The criteria for passing or failing a scan can be refined with vulnerability and compliance rules configured via the console.

>The twistcli utility returns exit code 1 for two reasons:
> * It fails to run due to an error.
> * The scan fails because the results exceed the thresholds specified in the vulnerability or compliance rules.
> 
>Although the return value is ambiguous — you cannot determine the exact reason for the failure by just examining the return value — this setup supports automation. From an automation process perspective, you expect that the entire flow will work. If you scan an image, with or without a threshold, either it works or it does not work. If it fails, for whatever reason, you want to fail everything because there is a problem.

## Scan results
Scan reports can viewed in Prisma Cloud Console. Log into Console, and then go to **Monitor > Vulnerabilities > Twistcli Scans**. The visual report in Console is the best way for humans to parse the results.
You can also retrieve a JSON representation of the data shown in Console using the Prisma Cloud API. The following example curl command calls the API with Basic authentication to fetch the results of a scan.
For more information on accessing the API, see <a href="/docs/cloud/cwpp/cwpp-gs" target="_self">Accessing the API</a>

``` bash
$ curl \
  -o scan_results.json \
  -H 'Authorization: Basic YXBpOmFwaQ==' \
  'https://<COMPUTE_CONSOLE>/api/v1/scans?search=<IMAGE_NAME>&limit=1&reverse=true&type=twistcli'
```
If you are using assigned collections, then please reference the following example.
``` bash
$ curl \
  -o scan_results.json \
  -H 'Authorization: Basic YXBpOmFwaQ==' \
  'https://<COMPUTE_CONSOLE>/api/v1/scans?collections=<COLLECTION_NAME>&search=<IMAGE_NAME>&limit=1&reverse=true&type=twistcli'
```

# Output
The `twistcli` tool can output scan results to several places:
* stdout.
* File. Scan results are saved in JSON format.
* Console. Scan results can be viewed under **Monitor > Vulnerabilities > Twistcli Scans.**

You can simultaneously output scan results to a file and to Console by passing the appropriate flags to `twistcli`. By default, `twistcli` writes scan results to stdout and Console. Pass the `--output-file` option to `twistcli` to write the scan results to a file only. Pass both the `--output-file` and `--publish options` to simultaneously write the results to a file and send them to Console.

# List of vulnerabilities

This section discusses the contents of the scan results when retrieved from the API.

Once retrieving the results of a scan via an API call, the list of vulnerabilities in an image can be found under the "cveVulnerabilities" attribute. Each vulnerability has the following name-value pairs:

* CVE identifier
* CVSS (CVE score)
* Description of the vulnerability.
* Link to CVE report
* Name of the package to which this CVE applies
* Version of the package to which this CVE applies
* Severity of this vulnerability
For example, here is a subset of the CVE information:
```json
{
  "cve": "CVE-2015-3238",
  "cvss": 5.8,
  "description": "The _unix_run_helper_ ...",
  "id": 46,
  "link": "https://people.canonical.com/~ubuntu-security/cve/2015/CVE-2015-3238",
  "packageName": "pam",
  "packageVersion": "1.1.8-3.1ubuntu3",
  "severity": "medium",
  "type": "image"
}
```

## List of packages
This section discusses the contents of the scan results when retrieved from the API.
The list of content found in an image is found in the data attribute of the JSON. The API results lists all packages in the image under the `info/data/packages` attribute.

Each package has the following name-value pairs:
* Package name
* Package version
* CVE Count for the package
For example:
```json
{
    "data": {
      "Secrets": [],
      "binaries": [
        {
            "cveCount": 104,
            "layerTime": 0,
            "md5": "5b62133afdcb9e96015f8679888f4434",
            "name": "bash",
            "path": "/bin/bash"
        }, ...
      ],
      "distro": "Ubuntu 18.04.1 LTS",
      "files": [],
      "packages": [
        {
            "pkgs": [
              {
                  "cveCount": 0,
                  "layerTime": 1539910074,
                  "license": "GPL",
                  "name": "ubuntu-keyring",
                  "version": "2018.02.28"
              }, ...
            ],
            "pkgsType": "package"
          }
      ],
      "pkgDistro": "Ubuntu",
      "pkgDistroRelease": "bionic",
      "startupBinaries": [
        {
            "cveCount": 0,
            "layerTime": 0,
            "md5": "518882eba51b05a15463e639892dda37",
            "name": "echo",
            "path": "/bin/echo"
        }, ...
      ]
    }
}
```

## Running scans from inside the container
By default, `twistcli` is run from outside the container image. In some cases, you might need to copy `twistcli` to the container’s file system, and then run the scanner from inside the container. One reason you might want to run the scanner this way is when your build platform doesn’t give you access to the Docker socket. OpenShift Container Platform and CodeFresh are examples of such platforms. For step-by-step guidance on configuring the OpenShift build process, <a href="https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-compute/howto/openshift_build_twistcli_scanning.html" target="_blank">see here.</a>

There are some shortcomings with this scanning from inside a container, so you should only use this approach when no other approach is viable. The shortcomings are:

* Automating the scan in your continuous integration pipeline is more difficult.
* Image metadata, such as registry, repository, and tag aren’t available in the scan report. When `twistcli` is run from outside the container, this information is retrieved from the Docker API.
* The image ID isn’t available in the scan report because it cannot be determined when the scan is run from inside a container.
* The scan report won’t show a layer-by-layer analysis of the image.

## Usage
When running the scanner from inside a container, you need to properly orient it by passing it the `--containerized` flag. There are a couple of ways to run `twistcli` with the `--containerized` flag: build-time and run-time.

For security reasons, Prisma Cloud recommends that you create a user with the `CI User` role for running scans.

## Build-time invocation
After building an image, run it. Mount the host directory that holds the `twistcli` binary, pass the Prisma Cloud Console user credentials to the container with environment variables, then run the scanner inside the container. The `<REPORT_ID>` is a user defined string that uniquely identifies the scan report in the Console UI.
``` bash
$ docker run \
  -v /PATH/TO/TWISTCLIDIR:/tools \
  -e TW_USER=<USER> \
  -e TW_PASS=<PASSWORD> \
  -e TW_CONSOLE=<CONSOLE_ADDR> \
  --entrypoint="" \
  <IMAGE> \
  /tools/twistcli images scan \
    --containerized \
    --details \
    --user=$TW_USER \
    --password=$TW_PASS \
    --address=$TW_CONSOLE \
    <REPORT_ID>
```
Rather than username and password, twistcli can also authenticate to Console with a token. Your API token can be found in Console under **Manage > Authentication > User Certificates > API token.**

``` bash
$ docker run \
  -v /PATH/TO/TWISTCLI_DIR:/tools \
  -e TW_TOKEN=<TOKEN> \
  -e TW_CONSOLE=<CONSOLE_ADDR> \
  --entrypoint="" \
  <IMAGE> \
  /tools/twistcli images scan \
    --containerized \
    --details \
    --token=$TW_TOKEN \
    --address=$TW_CONSOLE \
    <REPORT_ID>
```

## Run-time invocation
If you have access to the orchestrator, you can exec into the running container to run the `twistcli` scanner. Alternatively, you could SSH to the container. Once you have a shell on the running container, invoke the scanner:

``` bash
$ ./twistcli images scan \
  --address=<COMPUTE_CONSOLE> \
  --user=<USER> \
  --password=<PASSWORD> \
  --containerized \
  <REPORT_ID>
```
``` bash
To invoke the scanner with a token:
$ ./twistcli images scan \
  --address=<COMPUTE_CONSOLE> \
  --token=<TOKEN> \
  --containerized \
  <REPORT_ID>
```

## Simple scan
Scan an image with `twistcli` and print the summary report to stdout.
1. Scan an image named ian/app:1.0.
``` bash
$ twistcli images scan \
  -u api \
  -p api \
  --address <COMPUTE_CONSOLE> \
  --vulnerability-threshold high \
  ian/app:1.0
```

Command output:
``` bash
Image          ID           Vulnerabilities                      Compliance
-----          --           ---------------                      ----------
                            Low    Medium    High    Critical    Low     Medium    High
                            ---    ------    ----    --------    ---     ------    ----
ian/app:1.0    45919d...    132    139       10      0           0       0         2
vulnerability threshold check results failed
```
2. Check the exit code from twistcli.
``` bash
$ echo $?
1
```

Because this image has 10 high severity vulnerabilities, and because we told `twistcli` to fail any scan that finds high severity vulnerabilities (with the `--vulnerability-threshold` option), `twistcli` returns the fail code.

## Scan with detailed report
You can have `twistcli` generate a detailed report for each scan. The following procedure shows you how to scan an image with `twistcli`, and then retrieve the results from Console.
Assume that the username and password for Console is api/api.
1. Scan an image named ian/app:1.0.
``` bash
$ twistcli images scan \
  -u api \
  -p api \
  --address <COMPUTE_CONSOLE> \
  --details \
  test/myapp:latest
```
Sample command output (results have been truncated):
``` bash
Vulnerabilities
---------------
Image                ID                  CVE                 Package                       Version                Severity    Status
-----                --                  ---                 -------                       -------                --------    ------
test/myapp:latest    c9821d90e9089ad2    CVE-2018-6485       libc6 (glibc)                 2.27-3ubuntu1          medium      needed
test/myapp:latest    c9821d90e9089ad2    CVE-2018-15686      libsystemd0 (systemd)         237-3ubuntu10.3        medium      needed
test/myapp:latest    c9821d90e9089ad2    CVE-2018-15688      libsystemd0 (systemd)         237-3ubuntu10.3        medium      needed
test/myapp:latest    c9821d90e9089ad2    CVE-2018-6954       libsystemd0 (systemd)         237-3ubuntu10.3        medium      needed

Compliance
----------
Image                ID                  Severity    Description
-----                --                  --------    -----------
test/myapp:latest    c9821d90e9089ad2    high        (CIS_Docker_CE_v1.1.0 - 4.1) Image should be created with a non-root user
```

2. This generates output to stdout with the result of your scan. If you need to retrieve the results of your scan in JSON format, this can be done using the API.
* You will be making API calls. For more information, refer to <a href="/docs/cloud/cwpp/cwpp-gs" target="_self">Accessing the API</a>
* Call the API with authentication (demonstrated here using Basic authentication) to fetch the results of the scan.
``` bash
$ curl \
  -o scan_results.json \
  -H 'Authorization: Basic YXBpOmFwaQ==' \
  'https://<COMPUTE_CONSOLE>/api/v1/scans?search={image name}&limit=1&reverse=true&type=twistcli'
```

* Format the scan results into human-readable format.
``` bash
$ python -m json.tool scan_results.json > scan_results_pp.json
``` 

* Inspect the results.
Open `scan_results_pp.json` to view the results. Vulnerability information can be found in the list `cveVulnerabilities`, while compliance results can be found in the list `complianceVulnerabilities` to find the start of the list of vulnerabilities.
``` json
{
    {
        "_id": "5bd72249a0dd0e12f9b17b22",
        "hostname": "jacob-repro-2",
        "info": {
            "allCompliance": {},
            "complianceDistribution": {
                "critical": 0,
                "high": 1,
                "low": 0,
                "medium": 0,
                "total": 1
            },
            "complianceVulnerabilities": [
                {
                    "cause": "",
                    "cve": "",
                    "cvss": 0,
                    "description": "",
                    "exploit": "",
                    "id": 41,
                    "layerTime": 0,
                    "link": "",
                    "packageName": "",
                    "packageVersion": "",
                    "published": 0,
                    "riskFactors": null,
                    "severity": "high",
                    "status": "",
                    "templates": [],
                    "text": "",
                    "title": "(CIS_Docker_CE_v1.1.0 - 4.1) Image should be created with a non-root user",
                    "twistlock": false,
                    "type": "image",
                    "vecStr": ""
                }, ...
            ],
            "cveVulnerabilities": [
                {
                    "cause": "",
                    "cve": "CVE-2018-6485",
                    "cvss": 9.8,
                    "description": "An integer overflow in the implementation of the posix_memalign in memalign functions in the GNU C Library (aka glibc or libc6) 2.26 and earlier could cause these functions to return a pointer to a heap area that is too small, potentially leading to heap corruption.",
                    "exploit": "",
                    "id": 46,
                    "layerTime": 1539910074,
                    "link": "https://people.canonical.com/~ubuntu-security/cve/2018/CVE-2018-6485",
                    "packageName": "libc6 (glibc)",
                    "packageVersion": "2.27-3ubuntu1",
                    "published": 1517495340,
                    "riskFactors": {
                        "Attack complexity: low": {},
                        "Attack vector: network": {},
                        "Medium severity": {},
                        "Recent vulnerability": {}
                    },
                    "severity": "medium",
                    "status": "needed",
                    "templates": [],
                    "text": "",
                    "title": "",
                    "twistlock": false,
                    "type": "image",
                    "vecStr": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
                }, ...
            ], ...
```
## Scan images built with Jenkins in an OpenShift environment
If you are building and deploying images on OpenShift Container Platform (OCP), and you are utilizing their Jenkins infrastructure, then invoke a scan with `the twistcli hosts scan` command, not the `twistcli images scan` command.
You can scan images generated by Jenkins with the OpenShift plugin by invoking `twistcli` from a <a href="https://docs.openshift.com/container-platform/3.7/dev_guide/builds/build_hooks.html" target="_blank">build hook</a>. Build hooks let you inject custom logic into the build process. They run your commands inside a temporary container instantiated from build output image. Build hooks are called when the last layer of the image has been committed, but before the image is pushed to a registry. An non-zero exit code fails the build. A zero exit code passes the build, and allows it to proceed to the next step.

To call `twistcli` from a build hook:

1. Download `twistcli` into your build environment. Depending on your build strategy, one option is to download it as an <a href="https://docs.openshift.com/container-platform/3.7/dev_guide/builds/build_inputs.html#using-external-artifacts" target="_blank">external artifact</a> using a `save-artifactsS2I` <a href="https://docs.openshift.com/container-platform/3.7/creating_images/s2i.html#s2i-scripts" target="_blank">script</a> 

2. In your `BuildConfig`, call `twistcli` as a script from the `postCommit` hook.
``` bash
$ twistcli hosts scan \
  --user <USER> \
  --password <PASSWORD> \
  --address <COMPUTE_CONSOLE> \
  --skip-docker \
  --include-3rd-party
```
Where the `--skip-docker` option skips all Docker compliance checks such as the Docker daemon configuration and the `--include-3rd-party` option scans application-specific files such as Java JARs.
> A detailed procedure for setting up twistcli scanning during the OpenShift build process can be found <a href="https://docs.paloaltonetworks.com/prisma/prisma-cloud/prisma-cloud-admin-compute/howto/openshift_build_twistcli_scanning.html" target="_blank">here</a>.

## Scan images when the Docker socket isn’t in the default location

The `twistcli` scanner uses the Docker API, so it must be able to access the socket where the Docker daemon listens. If your Docker socket isn’t in the default location, use the `--docker-address` option to tell `twistcli` where to find it:
* **`--docker-addressPATH` --**
Path to the Docker socket. By default, `twistcli` looks for the Docker socket in `unix:///var/run/docker.sock.`

``` bash
$ ./twistcli images scan \
  --address=<COMPUTE_CONSOLE> \
  --user=<TW_USER> \
  --password=<TW_PASSWORD> \
  --docker-ad
```




## Options

* **--addressURI --**

    Required. Complete URI for Console, including the protocol and port. Only the HTTPS protocol is supported. By default, Console listens to HTTPS on port 8083, although your administrator can configure Console to listen on a different port.

    Example: --address https://console.example.com:8083

* **-u, --userUSERNAME --**

    Required. Username to access Console.

* **-p, --passwordPASSWORD --**

    Password for the user specified with -u, --user. If not specified on the command-line, you are prompted for the user’s password before the scan runs.

* **--output-fileFILENAME --**

    Send the results of the scan to a file.
    Example: --output-file examplescan

* **--hashALGORITHM --**

    Specifies the hashing algorithm. Supported values are md5, sha1, and sha256. The default value is md5.

* **--compliance-thresholdSEVERITY --**

    Sets the minimum severity compliance issue that returns a fail exit code. Supported values are low, medium, high, and critical To learn more about how Prisma Cloud rates compliance issues, see CIS benchmarks.

* **--vulnerability-thresholdSEVERITY --**

    Sets the minimum severity vulnerability that returns a fail exit code. Supported values are low, medium, high, and critical Minimum vulnerability threshold for failing the build on vulnerability checks

* **--only-fixed --**

    Reports just the vulnerabilities that have fixes available. If you set --vulnerability-threshold to high, and a high severity vulnerability is discovered during the scan, but that vulnerability still has no vendor fix, then the scanner returns a pass in the exit code.

* **--details --**

    Prints an itemized list of each vulnerability found by the scanner.

* **--containerized --**

    Run the scan from inside the container.

* **--docker-tlscacertPATH --**

    Path to Docker client CA certificate.

* **--docker-tlscertPATH --**

    Path to Docker client Client certificate.

* **--docker-tlskeyPATH --**

    Path to Docker client Client private key.

* **--tlscacertPATH --**

    Path to Prisma Cloud CA certificate file. If no CA certificate is specified, the connection to Console is insecure.
