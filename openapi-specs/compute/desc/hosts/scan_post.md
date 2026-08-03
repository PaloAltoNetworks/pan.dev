Re-scan all hosts immediately.

Refer to the following example command that forces Prisma Cloud Compute to re-scan all hosts:

```bash
$ curl \
  -u <USER> \
  -X POST \
  https://<CONSOLE>/api/v<VERSION>/hosts/scan
```
