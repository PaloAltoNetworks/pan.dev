Stops the current VM image scan.

Note: It might take a few minutes for the scan to stop completely.

### cURL Request

Refer to the following example cURL command that forces Prisma Cloud to stop scanning all VM images:

```bash
$ curl -k \
  -u <USER> \
  H 'Content-Type: application/json' \
  -X POST \
  "https://<CONSOLE>/api/v<VERSION>/vms/stop"
```
