---
id: tls-protect-importing-private-keys-pkcs12
title: "Importing private keys via API (PKCS12)"
sidebar_label: "Importing private keys via API (PKCS12)"
keywords:
  - Machine Identity Management
  - Certificate Manager SaaS
---

The `imports` endpoint allows you to programmatically import private keys with their corresponding certificates into CyberArk Certificate Manager - SaaS. This feature allows customers to import private keys and certificates that would enable them to use the Push Provisioning feature for non-ASK certificates and would also allow them to use Certificate Manager - SaaS as an enterprise vault for their machine identities. 

> 📘 Note
> Before attempting this import, ensure you have added your corresponding certificate chain into a trusted CA certificate in VaaS. <a target="_blank" href="https://docs.cyberark.com/mis-saas/CSH_trusted_ca_certs">Learn more</a> about Trusted CA Certificates.

<div markdown="1" class="prereqs">

## Before you begin
Having knowledge of Data Encryption Key (DEK) encryption is a prerequisite for this API. To learn more about DEK encryption, see our <a target="_blank" href="https://docs.cyberark.com/mis-saas/CSH_what_is_dek">docs</a>.

Some things to note in the POST request:

- The value for **`pkcs12Keystore`** must be a base64 encoded file.

- The values for **`encryptionKeyId`** & **`edgeInstanceId`** must be provided for the `imports` function to work.

</div>

> 📘 Note
> PKCS #12 (also known as PKCS12 or PFX) is a binary format for storing a certificate chain and private key in a single, encryptable file that usually has the filename extensions of `.p12` or `.pfx`.

To import a list of certificates and their corresponding private keys

1. If you have not already done so, obtain an <a target="_blank" href="https://docs.cyberark.com/mis-saas/CSH_get_api_key">API key</a>.

1. Use the `imports` endpoint to import up to 100 private keys in a single API call. For example:
    ```
    POST https://api.venafi.cloud/outagedetection/v1/certificates/imports
    tppl-api-key: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
    ```

1. In the JSON body, insert the appropriate values. **Note** that `importInformation` is an array, and it can have multiple objects. Each object represents a key and related information. For example:

    > ✅ Tip
    > You can run the `GET /v1/edgeinstances` call to retrieve the `edgeInstanceId` and `encryptionKeyId` values that you will need below. **Note** in the GET `/v1/edgeinstances` response you will use `id` in the `edgeinstances` object for the `edgeInstanceId`. 
    >
    > GET /v1/edgeinstances/ HTTP/1.1 
    > Host: api.venafi.cloud
    > tppl-api-key: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
              

    **Example request**
    ```json
    {
      "edgeInstanceId": "<your edgeInstanceId>",
      "encryptionKeyId": "<your encryptionKeyId>",
      "importInformation": [
        {
          "pkcs12Keystore": "<base64 encoded string>",
          "dekEncryptedPassword": "BNSr0IAm9uFrCPbz78AbB/XeNBwT4h6raWX6EEuEtzuoaKRYtV3QGShQP0islB1Gnrt34XeQa5Is"
        }
      ]
    }
    ```

    **Example response**
    ```json
    HTTP 201 Created
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "creationDate": "2022-11-11T16:34:41.666Z"
    }
    ```

    The response will return the job `id`, which you will use to check the import status below. 
    
    > 📘 Note
    > There is a limit of 100 keys per API call. The API will respond with an error if you input more than 100 keys.


## Check the status of the import and retrieve import details

1. Use the `imports` API to get detailed information for each certificate and private key imported related to the import `id`. For example:
   
    ```
    GET https://api.venafi.cloud/outagedetection/v1/certificates/imports/3fa85f64-5717-4562-b3fc-2c963f66afa6
    tppl-api-key: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   
    ```

    **Example response**
    ```json
    HTTP 200 Created
    {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "status": "PROCESSING",
        "results": [
           {
              "certificateBytes": [
              "string"
              ],
              "serialNumber": "string",
              "status": "IMPORTED_CERTIFICATE_AND_PRIVATE_KEY",
              "reason": "string"
           }
        ]
    }
    ```
