## Confirm access to PAN-0S

1. Ensure the host machine can reach the NGFW or Panorama. Execute the following command, replacing `HOSTNAME` with the IP address or hostname of your NGFW or Panorama:

```
http-ping https://HOSTNAME -c 1
```

2. You should see an output like this:

```
HTTP-PING https://HOSTNAME GET

       1: 192.168.1.1:443, code=302, size=0 bytes, time=24.7 ms

--- https://HOSTNAME ping statistics ---
1 requests sent, 1 answers received, 0.0% loss
round-trip min/avg/max/stddev = 24.672/24.672/24.672/0.000 ms
```

- An error like this suggests you may have an incorret hostname:

```
   1: Error: Get "https://HOSTNAME": lookup HOSTNAME 192.168.1.254:53: no such host
```

- An error like this suggests you may not have working connectivity to the firewall/Panorama on HTTPS (TCP 443):

```
   1: Error: Get "https://192.168.1.1": context deadline exceeded (Client.Timeout exceeded while awaiting headers)
```

- If `http-ping` is not available on your host machine, you may be able to use other tools like curl to confirm the host machine can reach the NGFW or Panorama using HTTPS. If your machine has a web browser, you can browse to `https://HOSTNAME`
