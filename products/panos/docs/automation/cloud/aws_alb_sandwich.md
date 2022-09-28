---
id: aws_alb_sandwich
title: ALB/NLB Load Balancer Sandwich
sidebar_label: ALB/NLB Load Balancer Sandwich
---

# Using VM-Series Firewalls and an ALB Sandwich in AWS

Customers are looking for different ways to ensure inbound high availability and scale for their AWS deployments. Several options exist including traditional two device HA in active passive mode, or Auto Scaling the VM-Series.

<!-- ![alt_text](assets/albsandwichdiagram.png) -->

This ALB sandwich CloudFormation Template deploys a pair of VM-Series Firewalls and 2 Web Servers with an external Application Load Balancer and either an internal Application Load Balancer or Network Load Balancer depending on which CFT is chosen.
The ALB sandwich with the VM-Series is an elegant and simplified way to manually scale VM-Series deployments to address planned or projected traffic increases while also delivering multi-Availability Zone HA.

- Manual scale: the ALB sandwich allows you to add, via script, or manual process, additional VM-Series firewalls can be added to the deployment to address planned/projected inbound traffic increases.
- Multi-availability zone high availability: two VM-Series firewalls deployed in separate Availability Zones with traffic being distributed by the AWS load balancers enables a cloud-centric approach to resiliency and availability.

The ALB sandwich is dependent on PAN-OS 8.1 as it uses the new FQDN object for NAT rules to automatically update the IP addresses.

Instructions

0. Create the Bootstrap bucket place the Bootstrap.xml and init-cfg.txt files into the Config folder.
   - [Creating the Bootstrap Bucket](https://www.paloaltonetworks.com/documentation/71/virtualization/virtualization/bootstrap-the-vm-series-firewall/bootstrap-package)
1. Deploy the CFT
2. Launch a Jumpbox into either NATGateway Subnet.
3. Access the Jumpbox to gain access to the Firewall GUIs.
   - Username/Password - pandemo/demopassword
   - The CFT creates a sgJumpbox Security Group for use allowing ports 22 and 3389.
4. Update the "alb-internal" object with the FQDN of the Internal ALB available on the Outputs of the CFT.
5. Update the "AWS-NAT-UNTRUST" object with the Firewall's Untrust IP address available on the Outputs of the CFT.
6. Test access do the External ALB FQDN.

#API commands to update the necessary objects

    Get API Key

curl -X GET 'https://#Firewall Management IP#/api/?type=keygen&user=pandemo&password=demopassword' -k

    API key for pandemo.  Replace in the following curl commands if different.

LUFRPT1Zd2pYUGpkMUNrVEZlb3hROEQyUm95dXNGRkU9N0d4RGpTN2VZaVZYMVVoS253U0p6dlk3MkM0SDFySEh2UUR4Y3hzK2g3ST0=

Working
Show address objects
curl -kg -X GET 'https://#Firewall Management IP#/api/?type=config&action=get&key=LUFRPT1Zd2pYUGpkMUNrVEZlb3hROEQyUm95dXNGRkU9N0d4RGpTN2VZaVZYMVVoS253U0p6dlk3MkM0SDFySEh2UUR4Y3hzK2g3ST0=&xpath=/config/devices/entry/vsys/entry/address'

    Untrust Interface

curl -kg -X GET 'https://#Firewall Management IP#/api/?key=LUFRPT1Zd2pYUGpkMUNrVEZlb3hROEQyUm95dXNGRkU9N0d4RGpTN2VZaVZYMVVoS253U0p6dlk3MkM0SDFySEh2UUR4Y3hzK2g3ST0=&type=config&action=set&xpath=/config/devices/entry/vsys/entry/address/entry[@name="AWS-NAT-UNTRUST"]&element=<ip-netmask>#Firewall Untrust IP#</ip-netmask>'

    alb-internal IP

curl -kg -X GET 'https://#Firewall Management IP#/api/?key=LUFRPT1Zd2pYUGpkMUNrVEZlb3hROEQyUm95dXNGRkU9N0d4RGpTN2VZaVZYMVVoS253U0p6dlk3MkM0SDFySEh2UUR4Y3hzK2g3ST0=&type=config&action=set&xpath=/config/devices/entry/vsys/entry/address/entry[@name="alb-internal"]&element=<ip-netmask>#Internal ALB IP#</ip-netmask>'

    alb-fqdn

curl -kg -X GET 'https://#Firewall Management IP#/api/?key=LUFRPT1Zd2pYUGpkMUNrVEZlb3hROEQyUm95dXNGRkU9N0d4RGpTN2VZaVZYMVVoS253U0p6dlk3MkM0SDFySEh2UUR4Y3hzK2g3ST0=&type=config&action=set&xpath=/config/devices/entry/vsys/entry/address/entry[@name="alb-fqdn"]&element=<fqdn>#Internal ALB FQDN#</fqdn>'
Commit
curl -kg -X GET 'https://#Firewall Management IP#/api/?type=commit&cmd=<commit></commit>&key=LUFRPT1Zd2pYUGpkMUNrVEZlb3hROEQyUm95dXNGRkU9N0d4RGpTN2VZaVZYMVVoS253U0p6dlk3MkM0SDFySEh2UUR4Y3hzK2g3ST0='

**Documentation**

- Release Notes: Included in this repository.
- About the [VM-Series Firewall for AWS](https://aws.paloaltonetworks.com)
- More cloud templates are available at: http://live.paloaltonetworks.com/cloudtemplate
