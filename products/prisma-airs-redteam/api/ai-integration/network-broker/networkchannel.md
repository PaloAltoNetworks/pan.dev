---
id: networkchannel
title: "Network channel Capabilities"
sidebar_label: "Network Channel"
keywords:
  - AIRS
  - Reference
  - Cloud
  - API
---

# Introduction to Network Channel

Network Channels is a secure connection solution that enables AI Red Teaming to safely access and analyze your internal endpoints without requiring firewall rules for specific IP addresses or opening inbound ports. This enterprise-grade solution puts you in complete control of the connection, allowing you to initiate and terminate access at will while maintaining your security perimeter.

Network channels help you achieve the following:

- **Enhanced Security**—No need to expose internal endpoints or modify firewall rules.
- **Complete Control**—Initiate and terminate connections on demand.
- **Easy Setup**—Simple client installation process.
- **Flexible Management**—Create and manage multiple secure channels for different environments.
- **Reusability**—Use the same connection for multiple targets.
- **Enterprise Ready**—Designed for organizations with strict security requirements.

# Key Capabilities of Network Channel APIs

Use the Network Channel APIs to programmatically create, update, and monitor your Network Channels.

- **Channel Management APIs** - This set of endpoints allows for the full lifecycle management of Network Channels. You can list all existing channels, retrieve detailed configuration for a specific channel, create new traffic steering paths, and update parameters. 
- **Channel Statistics APIs** -  This set of endpoint allows you to retrieve channel statistics, such as the number of active or online channels, and provides  essential   deployment metadata including registry URLs, Helm charts, Docker image details, and client versions required for orchestrating the Network Channels within containerized or cloud-native environments.
