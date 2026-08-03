Checks if Console is reachable from your network host.

### cURL Request

Refer to the following cURL example command that pings Console and prints the HTTP response code:

```bash
$ curl \
  -s \
  -o /dev/null \
  -w "%{http_code}\n" \
  -X GET \
  https://<CONSOLE>/api/v<VERSION>/_ping
```