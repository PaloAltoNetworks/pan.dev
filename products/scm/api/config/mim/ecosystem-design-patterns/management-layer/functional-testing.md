---
id: ecosystem-design-patterns-management-layer-testing
title: "Functional Testing"
sidebar_label: "Functional Testing"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

During development of your **Management Layer** solution, you should keep the following functional tests in mind for this design pattern. The test cases listed below are directly related to the [requirements and considerations](/scm/api/config/mim/ecosystem-design-patterns/management-layer/ecosystem-design-patterns-management-layer-requirements) outlined for this use case.

> 📘 What is functional testing?
>
> **To summarize [Wikipedia](https://en.wikipedia.org/wiki/Functional_testing)**
>
> Functional testing is a QA process that sees a "tester" run through all documented functionality of a product or, in this case, an integrated solution. It's a great way to uncover bugs, unexpected behaviors and documentation errors.

The functional tests documented below are provided as examples. Depending on the supported functionality of the target platform/service you're building for and/or the complexity of your solution, some tests listed below may not be necessary. Similarly, it's possible that you've got such a new or unique solution, that we haven't identified recommended functional tests yet.

If you've got suggestions and/or functional tests that helped during your development, [please let us know](mailto:ecosystem@venafi.com?subject=ecosystem.venafi.com+feedback-Cloud+WAF+Functional+Testing)!

> ✅  Reduce Confirmation Bias
>
> It can be extremely helpful, especially when writing documentation that accompanies your solution, to involve others on your team who haven't been involved in the development process. While you might be able to perform all functionality without even referencing the docs, it's possible that a fresh set of eyes will uncover typos or minor omissions that someone directly involved in development might miss.

## Basic Functionality Tests

The following functionality tests should be applicable to every solution targeting this use case.

| <h4>**Test Case**</h4> | <h4>**Description**</h4> | <h4>**Desired Outcome**</h4> |
| --- | --- | --- |
| Error Handling | Perform an operation which you expect to fail (unsupported key size, missing/incomplete data, etc.) | The error will be encountered and a meaningful error message will be presented to the end user and, if applicable, back to Venafi |
| New Certificate | Request a *new* certificate from Venafi | Certificate is issued, retrieved and installed downstream and ALL locations(s) and necessary metadata (service/port, profile, etc.)are reported back to Venafi |
| Existing Certificate (non-renewed)| Request *the same* certificate from Venafi (without renewing the cert) | Certificate is issued, retrieved and installed downstream with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi |
| Existing Certificate (renewed) | Make a *manual* renewal request on an existing certificate | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi |
| Certificate (mulitple targets) | Request a certificate from Venafi for use in multiple downstream locations | Certificate is installed in multiple locations and ALL locations are reported back to Venafi |

## Advanced Functionality Tests

Depending on the exact functionality of the target solution, the following tests may or may not be applicable.

| <h3>**Test Case**</h3> | <h3>**Description**</h3> | <h3>**Desired Outcome**</h3> |
| --- | --- | --- |
| New Certificate *Association* | Request a *new* certificate and **create a new** associated configuration object to utilize the certificate (e.g. Security "Profile") | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi and configuration object is created automatically at the target |
| Existing Certificate *Association* | Make a renewal request and **update an existing** associated configuration object | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi and existing configuration object is validated (and updated if required) |
| Automated Renewals | Request a short-lived certificate from Venafi and let your product automate the renewal | Renewal request is made to Venafi and renewed certificate is automatically attached to the associated configuration object (ideally with no downtime) |
