---
id: firefly-supplemental-api-endpoints
title: "Supplemental API endpoints"
sidebar_label: "Supplemental API endpoints"
keywords:
  - Machine Identity Management
  - Workload Identity Manager
---

## Introduction

In addition to the gRPC and REST API servers, *Workload Identity Manager* (formerly known as *Firefly*) allows clients to request certificates, and offers a few other API endpoints that you might find useful. These include: a call to determine whether *Workload Identity Manager* is ready to receive certificate requests; a call to obtain operational and issuance statistics for the *Workload Identity Manager*; and a call to obtain the CA certificates in the trust chain applicable to clients requesting certificates from *Workload Identity Manager* and to both consumers and relying parties of *Workload Identity Manager* issued certificates.

## Readiness Probe

Active *Workload Identity Manager* instances provide the endpoint `/readyz` on port 8080 (use `--readiness-probe-port` to override to a different port). You may be familiar with this endpoint from [Kubernetes](https://kubernetes.io/docs/reference/using-api/health-checks/) where it is used to ascertain the readiness of the Kubernetes API server.  Not surprisingly, *Workload Identity Manager*'s `/readyz` endpoint serves the same purpose except that it indicates the readiness of the *Workload Identity Manager* to issue certificates. Any response other than *HTTP 200 OK* should be interpreted as "not ready".

> ✅ Tip
>
> If you don't want this endpoint to be available outside the container/pod, you can block access by not publishing the port.

**`GET http://localhost:8080/readyz`**

```sh HTTP 200 OK
OK
```

## Health & Activity Metrics

Active *Workload Identity Manager* instances provide the endpoint `/metrics` on port 9402 (use `--metrics-port` to override to a different port). When invoked, this endpoint responds with health and activity data in [Prometheus "exposition format"](https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format) that can be consumed by popular DevOps monitoring tools.

> ✅ Tip
>
> If you don't want this endpoint to be available outside the container/pod, you can block access by not publishing the port.

**``GET http://localhost:9402/metrics``**

```sh HTTP 200 OK
# HELP firefly_rest_requests_total Total number of requests received by the REST server. 'success' is 1 if there is no error, 0 otherwise.
# TYPE firefly_rest_requests_total counter
firefly_rest_requests_total{method="CertificateRequest",success="1"} 2000
# HELP firefly_signer_sign Total number of signer attempts to sign a request. 'success' is 1 if there is no error, 0 otherwise.
# TYPE firefly_signer_sign counter
firefly_signer_sign{success="1",type="long_lived"} 195
firefly_signer_sign{success="1",type="short_lived"} 1681
firefly_signer_sign{success="1",type="ultra_short_lived"} 124
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 6.29
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1.048576e+06
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 17
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 1.232896e+08
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.70025338115e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 1.303773184e+09
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
```

>📘 Note
>
> The response data above is abridged.

## Trust Distribution Point

Active *Workload Identity Manager* instances provide the endpoint `/chain` on port 8008, (use `--public-server-port` to override to a different port). When invoked, this endpoint responds in JSON format with the complete and current set of CA certificates (as known to *Workload Identity Manager*) beginning with the trust anchor (root) certificate and ending with the *Workload Identity Manager*'s own issuing certificate (the one it will use to sign certificates it issues).

This endpoint may simplify things for trust management processes responsible for distributing this root CA to consumers and relying parties before they use or interact with certificates issued by *Workload Identity Manager*.

> ✅ Tip
>
> If you don't want this endpoint to be available outside the container/pod, you can block access by not publishing the port.

**``GET http://localhost:8008/chain``**

```json HTTP 200 OK
{
  "certificates": [
    "-----BEGIN CERTIFICATE-----\nMIIDvTCCAqWgAwIBAgIUTn9nkPYOFy6CET1y4lhTHXh7Mxkw...",
    "-----BEGIN CERTIFICATE-----\nMIIEtzCCA5+gAwIBAgIURXJUERx1CA5d7VYfJXSjmzvSdi8w...",
    "-----BEGIN CERTIFICATE-----\nMIIEKDCCAxCgAwIBAgIUSNQ5WjljtF6fcuRVnB5J0CtxWHMw..."
  ]
}
```
