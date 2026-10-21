Puts all containers into learning mode.

For more information, refer to [Learning mode](https://docs.prismacloud.io/en/classic/compute-admin-guide/runtime-defense/runtime-defense-containers#undefined) in Runtime Defense for Containers.

## cURL Request

Refer to the following example cURL command:

```bash
$ curl -k -G \
  -u <USER> \
  -H 'Content-Type: application/json' \
  -X POST \
  https://<CONSOLE>/api/v<VERSION>/profiles/container/learn
```
