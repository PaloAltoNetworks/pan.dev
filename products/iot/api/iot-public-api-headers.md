---
id: iot-public-api-headers
title: IoT Public API Authentication [DEPRECATED]
sidebar_position: 1
sidebar_label: DEPRECATED - IoT Public API Authentication
---

To ensure that only valid users can access the IoT Cloud database, all remote API calls must include an `access key` and `key ID`. This provides a safe and convenient way to integrate IoT Cloud data with your own automation.

To create a IoT Cloud API access key:

1. Log in to your IoT Guardian account and then click `username` > `Preferences`.
2. In the `Security` section, click Create and follow the online steps to create an access key.
3. View and download the access key(`X-Key-Id`) and key (`X-Access-Key`), saving them in a secure location. Your code must include both when making calls to the API.
   Note: You can later return to the `Preferences` page to view the key ID. However, for security reasons, it is not possible to view the actual key in the management console.

The following table lists the HTTP(S) headers required for an IoT Public API request.

| HTTP(s) Header | Sample Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-Key-Id`     | 1912458000:432620f12b5298a399bd518fc<br/>79fb33dfcedfc1c3fa4ca4e9f8c4d99c301726e                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `X-Access-Key` | eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1Ni<br/>J9eyJzdWIiOiI1ZjMxYzRjMjA2MDc2ZTAx<br/>MDhlMmI4MWUiLCJlbWFpbCI6InB1Yl9hcG<br/>lAdGVzdGluZy5jb20iLCJqdGkiOiJ3dkZL<br/>SXljdkR3Iiwic2NvcGUiOnsic3RhZ2luZy<br/>1zb2hvLWZ3Ijp7Im93bmVyIjp0cnVlfX0s<br/>ImlzbG9ja2VkIjpmYWxzZSwidGVuYW50aW<br/>QiOiJzdGFnaW5nLXNvaG8tZnciLCJ1cmxQ<br/>YXR0ZXJuIjoiL3B1Yi92NC4wLyIsInR5cG<br/>UiOiJkZXZpY2VfcmV0cmlldmFsX2tleSIs<br/>ImlhdCI6MTU5NzA5ODE4MSwiZXhwIjoxOT<br/>EyNDU4MTgxLCJpc3MiOiJ6aW5nYm94In0A<br/>GB93cZCW6_rB_0XzpnnTtNoG2gOL4Jcw-d<br/>OZGl_pu |
