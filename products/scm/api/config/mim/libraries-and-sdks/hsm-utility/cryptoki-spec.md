---
id: libraries-and-sdks-hsm-utility-cryptoki-spec
title: "PKCS#11 Specification"
sidebar_label: "PKCS#11 Specification"
keywords:
  - Machine Identity Management
  - Libraries and SDKs
---

# HSM Wrapper / Cryptoki Use

The KeyStore API uses our Cryptoki **PKCS#11** wrapper to perform its functionality.
Below is a breakdown of use cases, required **PKCS#11** APIs and expectations.
There are three distinct use cases for hardware encryption, and not every driver may be used for all cases:

1. Encrypt/decrypt at-rest data
2. Generate key pairs with good entropy
3. Use hardware-protected keys

A driver can be configured to support only one or two of the use cases.

## Introduction

Venafi uses `C_InitializeFunction` to initialize **PKCS#11**.
We will provide the mutex functions since we allow multi-threaded use, but we allow the driver to use OS mutex functions as well.
We have the ability to perform special setup for the **PKCS#11** driver if we recognize it.
For example, for nCipher we set certain environment variables to allow key export attributes to be set.

Interaction `C_XXX` driver APIs is monitored for error codes, and if an error code that indicates that connection to the HSM is lost is encountered, we 'pause' all calls going to the driver (from all threads) and enter a reconnect loop that attempts to re-establish connection.
That involves calling `C_Finalize` and trying to complete a successful call to `C_Initialize`.
Once successful, we recreate all sessions and reload any object IDs we might have had in memory before the before the connection was reset.

After `C_Initialize` we use `C_GetMechanismList` and `C_GetMechanismInfo` to learn of all supported mechanisms.
We have special code that tries to detect the appropriate mechanism that can be used for exporting (Wrapping) generated keys (see 2. below).
We look for, in order, `AES_KEY_WRAP_KWP` (0x210B), `AES_KEY_WRAP_PAD` (0x210A) and `AES_CBC_PAD` (0x1085).
The first one found as supported will be used for wrapping.

We find all available keys for protecting data at rest via `C_FindObjectInit` and `C_FindObject` by enumerating objects of type SecretKey with KeyType AES.

We may create one or more sessions via `C_OpenSession`, and we typically don't try to use any objects until after a session is in logged-in state (`C_Login`).
We attempt to clean up after ourselves on shutdown and will call `C_Logout` and `C_CloseSession` accordingly.

Additionally, we (like any other PKCS#11 client) use `C_GetSlotList`, `C_GetSlotInfo` and `C_GetToken` during initialization.

## Encrypt/Decrypt Data at Rest

To prevent data theft/leakage of private keys and other secret material we store, we use AES keys to encrypt data stored in Secret Store.
On an API level, we allow specifying named keys to use for protecting each individual secret.
On the product level, we allow configuring a global default key, and specifying global defaults per secret type, as well as overriding those defaults on a policy level.

`C_FindObjectInit/C_FindObject` is used by the UI and by startup code to find the available keys.
The attribute list to find a configured key contains `C KA_LABEL` as the specific marker for the key.
We deal with duplicate labels by storing a cryptogram generated with the key when the key was first selected to be used.
If multiple keys with the same label and type exist, we try to decrypt the stored cryptogram with all of them until we find the right key.

Actual encryption/decryption uses the `C_Encrypt/C_Decrypt` APIs, using `AES_CBC_PAD` (0x1085) as the mechanism, and providing an IV as parameter.

## Generate Key Pairs w/ Good Entropy

Since HSMs typically have better entropy generation and have vetted algorithms to generate keys, we have customers who prefer to use their HSM to generate a key pair, even if the key pair itself must exist outside of the HSM.

On startup of a driver instance not used before, we test if the driver supports key generation and export.
The test follows the same code as the actual export during normal product runtime.
All objects/keys/key pairs are created with `CKA_TOKEN` set to `FALSE`

`C_GenerateKeyPair` (with `CKA_EXTRACTABLE` set to TRUE) to generate the key pair to be exported.

`C_GenerateKey` (with `CKA_EXTRACTABLE` set to TRUE) to create an AES wrapping key

`C_CreateObject` to import an RSA public key (Bit strength will match the strength of the generated key pair in step one)

`C_Wrap` to wrap the generated AES key with the imported RSA key from step 3 (wrapping mechanism RSA_PKCS)

`C_Wrap` to wrap the generated key pair from step 1 with the AES key (wrapping mechanism as determined on startup, see Introduction)

## Use Hardware Protected Keys

The Venafi product supports keys that can't leave the HSM.
For certificates and key pairs that are configured to only exist on the HSM, we use `C_GenerateKeyP` air with `CKA_EXTRACTABLE` set to false, and we use `C_Sign/C_Verify` and `C_Encrypt/C_Decrypt` to perform signing and encryption functionality.

## General HSM Expectations

As of February 2021, Venafi might use an HSM with the following key types, attributes and mechanisms:

|**Key Type**|**Attributes**|**Mechanisms**|
| - | - | - |
|`CKK_AES`|`CKA_TOKEN` (0x0001) <br /> `CKA_PRIVATE` (0x0002) <br /> `CKA_MODIFIABLE` (0x0170) <br /> `CKA_LABEL` (0x0003) <br />  <br /> `CKA_KEYTYPE` (0x0100) <br /> `CKA_ID` (0x0102) <br /> `CKA_STARTDATE` (0x0110) <br /> `CKA_ENDDATE` (0x0111) <br /> `CKA_DERIVE` (0x010C) <br /> `CKA_LOCAL` (0x0163) <br />  <br /> `CKA_ENCRYPT` (0x0104) <br /> `CKA_DECRYPT` (0x0105) <br />  <br /> `CKA_SIGN` (0x0108) <br />  <br /> `CKA_VERIFY` (0x010A) <br />  <br /> `CKA_WRAP` (0x0106) <br /> `CKA_WRAP_WITH_TRUSTED` (0x0210) <br /> `CKA_UNWRAP` (0x0107) <br /> `CKA_EXTRACTABLE` (0x0162) <br /> `CKA_ALWAYS_SENSITIVE` (0x0165) <br /> `CKA_NEVER_EXTRACTABLE` (0x0164) <br />  <br /> `CKA_VALUE_LENGTH` (0x0161) | `CKM_AES_CBC_PAD` (0x1085) <br /> `CKM_AES_CBC` (0x1082)|
|`CKK_RSA`|`CKA_TOKEN` (0x0001) <br /> `CKA_PRIVATE` (0x0002) <br /> `CKA_MODIFIABLE` (0x0170) <br /> `CKA_LABEL` (0x0003) <br />  <br /> `CKA_KEYTYPE` (0x0100) <br /> `CKA_ID` (0x0102) <br /> `CKA_STARTDATE` (0x0110) <br /> `CKA_ENDDATE` (0x0111) <br /> `CKA_DERIVE` (0x010C) <br /> `CKA_LOCAL` (0x0163) <br />  <br /> `CKA_SUBJECT` (0x0101) <br /> `CKA_SENSITIVE` (0x0103) <br /> `CKA_ENCRYPT` (0x0104) <br /> `CKA_DECRYPT` (0x0105) <br />  <br /> `CKA_SIGN` (0x0108) <br /> `CKA_SIGN_RECOVER` (0x0108) <br /> `CKA_VERIFY` (0x010A) <br /> `CKA_VERIFY_RECOVER` (0x010A) <br /> `CKA_WRAP` (0x0106) <br /> `CKA_WRAP_WITH_TRUSTED` (0x0210) <br /> `CKA_UNWRAP` (0x0107) <br /> `CKA_EXTRACTABLE` (0x0162) <br /> `CKA_ALWAYS_SENSITIVE` (0x0165) <br /> `CKA_NEVER_EXTRACTABLE` (0x0164) <br />  <br /> `CKA_MODULUS` (0x0120) `CKA_MODULUS_BITS` (0x0121) <br /> `CKA_PUBLIC_EXPONENT` (0x0122) <br /> `CKA_PRIVATE_EXPONENT` (0x0123) <br /> `CKA_PRIME1` (0x0124) <br /> `CKA_PRIME2` (0x0125) <br /> `CKA_EXPONENT1` (0x0126) <br /> `CKA_EXPONENT2` (0x0127) <br /> `CKA_COEFFICIENT` (0x0128)|`CKM_RSA_PKCS` (0x0001) <br /> `CKM_RSA_9796` (0x0002) <br /> `CKM_RSA_X_509` (0x0003) <br /> `CKM_MD2_RSA_PKCS` (0x0004) *  <br /> `CKM_MD5_RSA_PKCS` (0x0005) *  <br /> `CKM_SHA1_RSA_PKCS` (0x0006) `CKM_SHA224_RSA_PKCS` (0x00046) <br /> `CKM_SHA256_RSA_PKCS` (0x00040) `CKM_SHA384_RSA_PKCS` (0x00041) <br /> `CKM_SHA512_RSA_PKCS` (0x00042) <br /> `CKM_RIPEMD128_RSA_PKCS` (0x0007) *  <br /> `CKM_RIPEMD160_RSA_PKCS` (0x0008) *  <br /> `CKM_RSA_PKCS_OAEP` (0x0009) <br /> `CKM_RSA_PKCS_PSS` (0x000D) <br /> `CKM_SHA1_RSA_PKCS_PSS` (0x000E) <br /> `CKM_SHA224_RSA_PKCS_PSS` (0x0047) <br /> `CKM_SHA256_RSA_PKCS_PSS` (0x0043) <br /> `CKM_SHA384_RSA_PKCS_PSS` (0x0044) <br /> `CKM_SHA512_RSA_PKCS_PSS` (0x0045) <br /> `CKM_RSA_PKCS_TPM_1_1` (0x4001) *  <br /> `CKM_RSA_PKCS_OAEP_TPM_1_1` (0x4002) * |
| `CKK_EC` | `CKA_TOKEN` (0x0001) <br /> `CKA_PRIVATE` (0x0002) <br /> `CKA_MODIFIABLE` (0x0170) <br /> `CKA_LABEL` (0x0003) <br />  <br /> `CKA_KEYTYPE` (0x0100) <br /> `CKA_ID` (0x0102) <br /> `CKA_STARTDATE` (0x0110) <br /> `CKA_ENDDATE` (0x0111) <br /> `CKA_DERIVE` (0x010C) <br /> `CKA_LOCAL` (0x0163) <br /> `CKA_SUBJECT` (0x0101) <br /> `CKA_SENSITIVE` (0x0103) <br /> `CKA_ENCRYPT` (0x0104) <br /> `CKA_DECRYPT` (0x0105) <br /> `CKA_SIGN` (0x0108) <br /> `CKA_SIGN_RECOVER` (0x0108) <br /> `CKA_VERIFY` (0x010A) <br /> `CKA_VERIFY_RECOVER` (0x010A) <br /> `CKA_WRAP` (0x0106) <br /> `CKA_WRAP_WITH_TRUSTED` (0x0210) <br /> `CKA_UNWRAP` (0x0107) <br /> `CKA_EXTRACTABLE` (0x0162) <br /> `CKA_ALWAYS_SENSITIVE` (0x0165) <br /> `CKA_NEVER_EXTRACTABLE` (0x0164) <br /> `CKA_EC_PARAMS` (0x0180) <br /> `CKA_EC_POINT` (0x0181) <br /> `CKA_VALUE` (0x0011) | `EC_KEYPAIRGEN` (0x1040) <br /> `ECDSA` (0x1041) <br /> `ECDSA_SHA1` (0x1042) <br /> `ECDSA_SHA224` (0x1043) <br /> `ECDSA_SHA256` (0x1044) <br /> `ECDSA_SHA384` (0x1045) <br /> `ECDSA_SHA512` (0x1046) <br /> `ECDH1_DERIVE` (0x1050) *  <br /> `ECDH1_COFACTOR_DERIVE` (0x1051) *  <br /> `ECMQV_DERIVE` (0x1052) * |
| `CKK_EC_EDWARDS` | `CKA_TOKEN` (0x0001) <br /> `CKA_PRIVATE` (0x0002) <br /> `CKA_MODIFIABLE` (0x0170) <br /> `CKA_LABEL` (0x0003) <br /> `CKA_KEYTYPE` (0x0100) <br /> `CKA_ID` (0x0102) <br /> `CKA_STARTDATE` (0x0110) <br /> `CKA_ENDDATE` (0x0111) <br /> `CKA_DERIVE` (0x010C) <br /> `CKA_LOCAL` (0x0163) <br /> `CKA_SUBJECT` (0x0101) <br /> `CKA_SENSITIVE` (0x0103) <br /> `CKA_ENCRYPT` (0x0104) <br /> `CKA_DECRYPT` (0x0105) <br /> `CKA_SIGN` (0x0108) <br /> `CKA_SIGN_RECOVER` (0x0108) <br /> `CKA_VERIFY` (0x010A) <br /> `CKA_VERIFY_RECOVER` (0x010A) <br /> `CKA_WRAP` (0x0106) <br /> `CKA_WRAP_WITH_TRUSTED` (0x0210) <br /> `CKA_UNWRAP` (0x0107) <br /> `CKA_EXTRACTABLE` (0x0162) <br /> `CKA_ALWAYS_SENSITIVE` (0x0165) <br /> `CKA_NEVER_EXTRACTABLE` (0x0164) <br /> `CKA_EC_PARAMS` (0x0180) <br /> `CKA_EC_POINT` (0x0181) <br /> `CKA_VALUE` (0x0011) | `CKM_EC_EDWARDS_KEY_PAIR_GEN` (0x1055) <br /> `CKM_EDDSA` (0x1057) |

\* indicates that our interface supports it but the mechanism isn't actively used today.
