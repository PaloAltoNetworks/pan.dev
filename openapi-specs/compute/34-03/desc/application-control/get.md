Retrieves the host application control rules.

The following example curl command uses basic auth to retrieve the control rules:

```bash
$ curl -k \
  -u <USER> \
  -H 'Content-Type: application/json' \
  -X GET \
  “https://<CONSOLE>/api/v<VERSION>/application-control/host”
```