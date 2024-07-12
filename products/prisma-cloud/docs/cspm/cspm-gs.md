---
id: cspm-gs
title: Cloud Security
sidebar_label: Getting Started
hide_table_of_contents: true
sidebar_position: 1
---

# **Generate JWT Tokens in Prisma Cloud**

To use the REST APIs methods available in the Prisma Cloud CSPM module pass in the `x-redlock-auth` key/value pair into the header of the method call. The `x-redlock-auth` parameter corresponds to the JSON Web Token (JWT)—JWT, (pronounced jot) is an open standard ([RFC-7519](https://datatracker.ietf.org/doc/html/rfc7519)) for securely transmitting information between parties as a JSON object. This tutorial details two ways for generating JWT tokens in Prisma Cloud. Any of these methods will suffice, but all of them have one thing in common; the JWT token will last for only 10 minutes. Refresh the JWT token every 10-minutes to avoid the dreaded 401-error.

## Outline of the tutorial:

- [Prerequisites](#Prerequisites)
- [A quick summary of the tools used](#quick-summary-of-tools-used-in-this-tutorial)
- [Use cURL to Generate JWT Tokens in Prisma Cloud](#use-curl-to-generate-jwt-tokens-in-prisma-cloud)
- [Use Postman to Generate a JWT Token](#use-postman-to-generate-a-jwt-token)

## Prerequisites

First and foremost, you'll need access to a [Prisma Cloud tenant](https://prisma.pan.dev/api/cloud/api-urls) in order to generate your access keys. If you don’t have one you can test drive Prisma Cloud Enterprise Edition for free for 30-days on the [Palo Alto Networks marketplace](https://marketplace.paloaltonetworks.com/s/product-rdl). You will also need a way to call Prisma Cloud APIs. The two tools used in this tutorial are [Postman](https://www.postman.com/downloads/) and [cURL](https://curl.se/download.html). Postman is more popular due to its easy-to-use GUI interface, plethora of features for working with APIs, and collaboration features such as workspaces—it also comes in a free edition which will more than suffice for this tutorial.

cURL is a command line tool for transferring data with URLS and has been in development since 1998. The operating system used in this tutorial is Windows 10, and even though Windows 10 ships with cURL installed I would instead recommend running cURL commands using [Git Bash](https://git-scm.com/downloads) which comes bundled with Git. The reason is you will most likely have to do some additional tweaking with your cURL commands to make them work on Windows like replacing single quotes with double quotes.

## Quick summary of tools used in this tutorial

- A Prisma Cloud tenant for generating access keys (preferably with system admin access)
- Git bash for running cURL (on Windows)
- Postman

> **Note**—this tutorial was executed on a Windows 10 powered machine, but
> if you’re using a Unix/LInux variant then all of the tools used in
> this tutorial are always available in those environments.

## Use cURL to Generate JWT Tokens in Prisma Cloud

The first step is to generate access keys which are a secure way for enabling programmatic access to the Prisma Cloud REST API. Access keys have two components; Access Key ID and Secret Key which should be copied and saved in a secure location for later reuse as they’re not stored in Prisma Cloud. Refer to the Prisma Cloud documentation for instructions on [how to create an access key](https://docs.prismacloud.io/en/classic/cspm-admin-guide/manage-prisma-cloud-administrators/create-access-keys). If you are upgraded to Darwin, see [how to create an access key](https://docs.prismacloud.io/en/enterprise-edition/content-collections/administration/create-access-keys). You can then use cURL to generate your x-redlock-auth JWT token with the following command:

```
    curl -X POST \

    https://api.prismacloud.io/login \

    -H 'Content-Type: application/json' \

    -d '{"username":"<Access Key ID>","password":"<Secret Key>"}'
```

Replace `https://api.prismacloud.io`, `username`, and `password` with your [api url](https://prisma.pan.dev/api/cloud/api-urls), access key id, and secret key credentials. For example, if your api url is `https://api2.prismacloud.io`, access key id is `q158e014-bc9b-2345-7a46-52b13da28b31`, and your secret key is `xJQI0Bf0DoAIthmK05xBxvx9IbG=`, then the curl command will be configured as follows:

```
    curl -X POST \

    https://api2.prismacloud.io/login \

    -H 'Content-Type: application/json' \

    -d '{"username":"q158e014-bc9b-2345-7a46-52b13da28b31","password":"xJQI0Bf0DoAIthmK05xBxvx9IbG="}'
```

To generate the JWT token open Git Bash by typing "Git Bash" in Windows search and enter the following command: (replace [https://api2.prismacloud.io](https://api2.prismacloud.io) and username/password with your credentials):

```
curl -X POST https://api2.prismacloud.io/login -H 'Content-Type: application/json' -d '{"username":"q158e014-bc9b-2345-7a46-52b13da28b31","password":"xJQI0Bf0DoAIthmK05xBxvx9IbG="}'
```

**The JWT token output:**

```
    {"token":"shashashjhhhhhhhhhhhhhhhhhhhhhhhjjbjhghgVGGGAGHKBksjjlsksknsjsbhsghsgjhsgshghskgshsjhhjsjhsgsgshsghsghjsjs"]}
```

A JWT token is returned which will be valid for 10-minutes. You can then use the JWT token when calling the other Prisma Cloud [REST API methods](https://prisma.pan.dev/api/cloud/).

## Use Postman to Generate a JWT Token

Postman is a popular API testing tool that we can use for making HTTP requests. To generate the JWT token we use the /login REST API method of the CSPM module. According to the [API documentation](https://prisma.pan.dev/api/cloud/cspm/login), the required body schema is password and username which we get when creating access keys. Enter the details into the Postman GUI and make the POST call to generate your JWT token.

**Step one**: Generate your access keys as a Prisma Cloud system administrator.

**Step two**: Enter the login URL and body schema in Postman and click SEND.

The Prisma Cloud REST API method for url is /login which is appended to the end of the cluster in which your Prisma Cloud tenant is deployed. Therefore, if the url of your Prisma Cloud tenant is https://app2.prismacloud.io, then you will use [https://api2.prismacloud.io/login](https://api2.prismacloud.io/login) for making the POST request. To enter your `access key ID` and `secret key` select the **Body** tab, click **Text**, and scroll down and select **JSON**; this enables you to add the username/password key-value pairs as a JSON object in Postman:

```
    {
        "username": "q158e014-bc9b-2345-7a46-52b13da28b31",
        "password": "xJQI0Bf0DoAIthmK05xBxvx9IbG="
    }
```

![](https://lh3.googleusercontent.com/6iUNhSAfndLA4akBFTboSkZtce8PC-LWzjJPU9vFhu_J7uJzPRcl-H8fVFHwOZSNQdX93pRoPsqHlCdQOyM5p2VDWxYtUIfag8aePXpa1ZzpD4d6DMrHkwoGSNvSVxxwMpg4nFm8)

Click **SEND** to generate the JWT token:

```
    {
        "token": "shshjshjlsjjjjjjjjjjjjjjjjjjjjjjjjjss77sssggsstfsfsgssjhbshbsjhsbhsbsbsjhsbjhsbjhsbjhsbhsbhsvsgfdrsdtrcgjdhbjdbjdbjdbjdj",
        "message": "login_successful"
    }
```

**Note**: The JWT token is available for 10-minutes. After this time has elapsed, run this POST command again to generate a fresh JWT token.
**Note**: If your POST call was successful you will get a 200 response status.

## What's next?

Now that you know how to generate a JWT token, explore the various REST API methods in the [Prisma Cloud API Reference](https://prisma.pan.dev/api/cloud/cspm).
