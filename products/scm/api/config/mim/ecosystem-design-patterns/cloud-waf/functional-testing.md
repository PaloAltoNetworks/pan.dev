---
id: ecosystem-design-patterns-cloud-waf-testing
title: "Functional Testing"
sidebar_label: "Functional Testing"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

During development of your **Cloud WAF** solution, you should keep the following functional tests in mind for this design pattern. The test cases listed below are directly related to the [requirements and considerations](/scm/api/config/mim/ecosystem-design-patterns/cloud-waf/ecosystem-design-patterns-cloud-waf-requirements) outlined for this use case.

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
| New Certificate | Provision a *new* certificate to the target | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi |
| Existing Certificate (non-renewed)| Provision *the same* certificate to the target (without renewing the cert) | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi |
| Existing Certificate (renewed) | Provision a *renewed* certificate to the target | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi |

## Advanced Functionality Tests

Depending on the exact functionality of the target solution, the following tests may or may not be applicable. If your target solution supports the functionality listed below, please ensure that you've tested the following scenarios.

| <h4>**Test Case**</h4> | <h4>**Description**</h4> | <h4>**Desired Outcome**</h4> |
| --- | --- | --- |
| New Certificate *Association* | Provision a *new* certificate to the target and **create a new** associated configuration object to utilize the certificate (e.g. Security "Profile") | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi and configuration object is created automatically at the target |
| Existing Certificate *Association* | Provision a *renewed* certificate to the target and **update an existing** associated configuration object | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi and existing configuration object is validated (and updated if required) |
| Existing Certificate *Association* (non-renewed) | Provision a *non-renewed* certificate to the target and **update an existing** associated configuration object | Certificate is provisioned with locations(s) and necessary metadata (service/port, profile, etc.) reported back to Venafi and existing configuration object is validated (and updated if required) |