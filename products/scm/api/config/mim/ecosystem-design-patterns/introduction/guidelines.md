---
id: ecosystem-design-patterns-guidelines
title: "Guidelines & Best Practices"
sidebar_label: "Guidelines & Best Practices"
keywords:
  - Machine Identity Management
  - Ecosystem Design Patterns
---

The following guidelines apply generically to all solutions integrated with Venafi, regardless of solution type, and should be referenced as the solution is developed & tested, and as new features or enhancements are added.

## Documentation

Provide clear, comprehensive documentation for your solution, including installation instructions, usage guidelines, and any configuration options that may be available. This will help users understand how to set up and use your solution effectively, and can reduce the number of support requests you receive.

> ℹ️ Keep it Close
>
> You can have the best documentation in the world, but if users can't find it, it's not going to help them. Make sure your documentation is easy to find and readily accessible. Once you're ready to publish your solution, you should include a link to your documentation on the [Venafi Marketplace](https://community.cyberark.com/marketplace), so users can access it directly when browsing your solution.

Include information on troubleshooting common issues and any known limitations or caveats related to your solution. Regularly update your documentation to reflect any changes or improvements made to your solution.

## Naming Conventions

A standard naming convention should be adopted to avoid any collisions when objects (applications, certificates, machines, etc.) are created. Collisions can occur when the name you define already exists in Venafi. You can use the same prefix or suffix, and then add something unique to the name.

## Debug Logging

Whenever possible, it's **strongly encouraged** to build in debug logging that can be enabled by end users when troubleshooting issues in their environments.

## Security Considerations

When developing your solution, always consider the security implications of your design choices. Ensure that sensitive information, such as credentials, private keys, API tokens, etc. are stored securely and not exposed in logs or transmitted in plain text, unless in specific debugging/troubleshooting situations.
