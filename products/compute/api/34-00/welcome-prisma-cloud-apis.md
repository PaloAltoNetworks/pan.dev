---
id: compute-api-reference-home
title: Welcome to the Compute APIs
slug: /compute/api/34-00
keywords:
  - Developer
  - Prisma
  - Prisma Cloud
  - Reference
  - API
---

### About

The Prisma Cloud Workload Protection REST API lets you automate workflows and integrate with external systems.
Use the API to:

- Set up, configure, reconfigure, and deploy Prisma Cloud Compute components to secure your hosts, containers, and serverless functions against vulnerabilities, malware, and compliance violations.
- Extract the security data that Prisma Cloud Compute has collected about your environment and send it to your monitoring, alerting, and reporting systems.

### How to find your version

To find the the version of Prisma Cloud Workload Protection that you're running:

1. Log into your Prisma Cloud Compute console.

2. Click the bell icon in the top right of the page.

   The drop-down shows the currently running version:
   
   ![Console screenshot](/img/compute-version.png)

### cURL Examples

All the cURL examples in these documents specify a `<CONSOLE>` variable, which represents the address for Console.
The Console address will depend on how Console was installed.

The Prisma Cloud Compute API is exposed on port `8083` (HTTPS).
This port is specified at install time in `twistlock.cfg`.

- **(Default) Kubernetes installations:** Console service is exposed by a LoadBalancer.

  The value for `<CONSOLE>` is the LoadBalancer followed by port `8083`:

  ```bash
  $ https://<LOAD_BALANCER>:8083
  ```

- **Onebox installations:** Console installed on a stand-alone host.

  The value for `<CONSOLE>` is the IP address or DNS name of the host followed by port `8083`:

  ```bash
  $ https://<IP_ADDRESS>:8083
  ```

The cURL example for each endpoint is called with a username (`-u <USER>`) only.
The cURL command can be modified to use any of the following:

- **Authentication Token:** Use the `-H` option to pass the authentication token from the [Authenticate](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint into the request header.

For example, replace `<ACCESS_TOKEN>` with the token from the [Authenticate](/prisma-cloud/api/cwpp/post-authenticate/) ![alt text](/icons/api-icon-pan-dev.svg) endpoint.

```bash
$ curl -k \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-X POST \
https://<CONSOLE>/api/vVERSION/<ENDPOINT_PATH>
```

- **Username and Password:** Use the `-u` and `-p` options to include the username and password, eliminating the need to enter a password in a secondary step.

For example, replace `<USER>` with the username string and `<PASSWORD>` with the password string.

```bash
$ curl -k \
-u <USER> \
-p <PASSWORD> \
-X POST \
https://<CONSOLE>/api/vVERSION/<ENDPOINT_PATH>
```

- **Username Only:** This will require the user's password to be entered as a secondary step.

For example, replace `<USER>` with the username string.

```bash
$ curl -k \
-u <USER> \
-X POST \
https://<CONSOLE>/api/vVERSION/<ENDPOINT_PATH>
```

**Note:** This is a more secure method than including the `-p` option since your terminal history won't contain the password.

### Paginated Responses

Paginated API requests are capped to a max of 250 returned objects because very large responses could DoS Console. The default value is 50 objects per page.

If the response contains more than 250 objects, cycle through the collection with the `offset` query parameter to retrieve more objects.

For example:

```bash
$ https://<CONSOLE>/api/v<VERSION>/images?limit=250&offset=X
```

### API Rate Limits

Rate limiting is applied to some endpoints. The documentation for each such endpoint has details of the rate limits enforced on it. For example, [Get Container Scan Results](https://pan.dev/prisma-cloud/api/cwpp/get-containers/).

### View parameter descriptions

The parameter descriptions are available for each endpoint. The body or query (wherever applicable) parameters are listed after the endpoint description.
The response parameters are hidden under the label `Response` 200.

Click `>` to view hidden parameters.

#### View API endpoint parameters

![Expand Body Parameters](/img/expandingbodyparameters.gif)

#### View API endpoint response parameters

![Expand Response Parameters](/img/expandingresponse.gif)
