---
id: xff_demo
title: XFF to User ID Mapping
sidebar_label: XFF to User ID Mapping
---

## Overview

---

The components shown below are deployed in this

<!-- demo![](assets/xff1.png) -->

## Introduction

---

The demo performs the following actions.

1.  In this demo we use the DVWA <http://www.dvwa.co.uk> to generate
    detectable threats between a browser and the web server. In this
    case we use a SQL Injection attack for demonstration purposes

2.  The firewall will detect the SQL Injection threat and forward the
    log data to the AWS API Gateway via an HTTP log forwarding action.

3.  The AWS API Gateway invokes a lambda function that queries the
    firewall for additional information based on the sessionID of the
    detected threat. The additional information includes the IP address
    in the X-Forwarded-For HTTP header. The additional data is written
    to a DynamoDB database.

4.  A second Lambda function that is triggered from a Cloudwatch timer
    triggered event reads the current entries in the DynamoDB database
    and forwards them to the UserID database in the firewall.

5.  The IP address from the X-Forwarded-For header is added to the "bad
    user" group and is then subject to a blocking policy in the
    firewall.

## Initial Setup

---

### 1. Load The Application Load Balancer Certificate

The application load balancer will require a certificate. Access the
AWS Certificate Manager and select "Load Certificate".

<!-- ![](assets/xff2.png) -->

- Paste in the text for the public and private key.

- Make a note of the arn of the certicate as it is required by the
  Cloud Formation Template

<!-- ![](assets/xff3.png) -->

### 2. Create the Bootstrap Buckets

- More documentation required here but we can import from the existing
  Wordpress Demo.

### 3. Deploy the Cloud Formation Template

<!-- ![](assets/xff4.png) -->

- Check that the template deployment completes and make a note of the
  Wordpress URL which is the DNS name of the Application Load Balancer
  and the firewall management IP

<!-- ![](assets/xff5.png) -->

### 4. Create the API Gateway

- Go to the AWS console and select API gateway

<!-- ![](assets/xff6.png) -->

- Select Actions and create a POST method

<!-- ![](assets/xff7.png) -->

- Add the lambda region and then the function.

- The Lambda function will have the name {Stack
  Name}-GetXFFHeaderLambda-\*

- Next Deploy the gateway to a stage

- After deployment copy the URL from the summary screen

- Select Actions and then Deploy

<!-- ![](assets/xff8.png) -->

<!-- ![](assets/xff9.png) -->

> - Login to the firewall with credentials
> - Password for the firewall is admin/Pal0Alt0

- Extract the DNS name from the URL and modify the HTTP log forwarding
  values

<!-- ![](assets/xff10.png) -->

- Modify the "URI Format" under "Payload Format"

<!-- ![](assets/xff11.png) -->

<!-- ![](assets/xff12.png) -->

- Once configured send a test log message

<!-- ![](assets/xff13.png) -->

## Test the deployment

---

- Open a browser and browse to the URL from the output of the cloud
  formation template

- Setup the DVWA database

<!-- ![](assets/xff14.png) -->

<!-- ![](assets/xff15.png) -->

- Login to the application using admin / password credentials

- Lower the security level of the application to "Low"

<!-- ![](assets/xff16.png) -->

- Next generate Threats using the SQL Injection tab

- Details of SQL injection attacks that can be performed can be found here

<https://www.computersecuritystudent.com/SECURITY_TOOLS/DVWA/DVWAv107/lesson6/index.html>

- For simplicity use %\' or \'0\'=\'0

- The firewall should block the attack and the browser will return a 502
  bad Gateway error.

- Check the firewall for threat logs

<!-- ![](assets/xff17.png) -->

- Check the cloudwatch logs.

- If the threat log has been forwarded and processed logs will appear in
  cloudwatch under the log group corresponding to the lambda function

<!-- ![](assets/xff18.png) -->

- Checking DynamoDB should show the IP address in the database

<!-- ![](assets/xff19.png) -->

- If the notes column indicates uidsent then the username IP has been sent
  to the firewall

<!-- ![](assets/xff20.png) -->

- You should now receive a block page from the original URL

<!-- ![](assets/xff21.png) -->
