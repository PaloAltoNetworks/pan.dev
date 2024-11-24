Returns an array of strings containing image names.

_**Note:**_ The query parameters `issueType` is not supported for this API endpoint.

### cURL Request

Refer to the following example cURL command:

```bash
$ curl -k \
  -X GET \
  -u <USER> \
  -H 'Content-Type: application/json' \
  https://<CONSOLE>/api/v<VERSION>/images/names
```
