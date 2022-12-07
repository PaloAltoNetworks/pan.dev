import React from 'react';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import './Modules.scss';

function Modules() {
  // Side-tab component to display certain modules 
  // 1. Be able to support a list of modules with header, descriptions, logos, links 
  // 2. Be able to tab through the different modules per CSP (Cloud Service Provider) 
  // a. VM-Series Modules for AWS, Azure, GCP, PAN-OS (*-nia-*)
  // b. Consul-Terraform Sync for DAG, SAG

  // TODO: Move into constants and code cleanup

  return (
    <div className="modules-container">
      <section className="container">
        <header className="modules-header">
          <h1>Modules from Palo Alto Networks</h1>
        </header>
        <Tabs className="modules-tabs">
          <TabItem className="modules-tabs__item" value="AWS" label="AWS">
            <h2>Terraform Reusable Modules for VM-Series on AWS</h2>
            <p>
              A set of modules for using Palo Alto Networks VM-Series firewalls to provide control and protection to your applications running in Amazon Web Services (AWS). It deploys VM-Series as virtual machine instances and it configures aspects such as Transit Gateway connectivity, VPCs, IAM access, Panorama virtual machine instances, and more.
            </p>
            <div className="tab-item__logo-container">
              <img className="tab-item__logo" src="/img/product-landing/terraform/panw-logo.svg" />
              <Link to="https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/aws/latest">
                <img className="tab-item__logo" src="/img/product-landing/terraform/terraform-logo.png" />
              </Link>
              <Link>
                <img className="tab-item__logo" src="/img/product-landing/terraform/aws-logo.png" />
              </Link>
            </div>
          </TabItem>
          <TabItem className="modules-tabs__item" value="GCP" label="GCP" default>
            <h2>Terraform Reusable Modules for VM-Series on GCP</h2>
            <p>
              A set of modules for using Palo Alto Networks VM-Series firewalls to provide control and protection to your applications running on Google Cloud Platform (GCP). It deploys VM-Series as virtual machine instances and it configures aspects such as Shared VPC connectivity, IAM access, Service Accounts, Panorama virtual machine instances, and more.
            </p>
            <div className="tab-item__logo-container">
              <img className="tab-item__logo" src="/img/product-landing/terraform/panw-logo.svg" />
              <Link to="https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/google/latest">
                <img className="tab-item__logo" src="/img/product-landing/terraform/terraform-logo.png" />
              </Link>
              <img className="tab-item__logo" src="/img/product-landing/terraform/gcp-logo.svg" />
            </div>
          </TabItem>
          <TabItem className="modules-tabs__item" value="Azure" label="Azure">
            <h2>Terraform Reusable Modules for VM-Series on Azure</h2>
            <p>
              A set of modules for using Palo Alto Networks VM-Series firewalls to provide control and protection to your applications running on Azure Cloud. It deploys VM-Series as virtual machines and it configures aspects such as virtual networks, subnets, network security groups, storage accounts, service principals, Panorama virtual machine instances, and more.
            </p>
            <div className="tab-item__logo-container">
              <img className="tab-item__logo" src="/img/product-landing/terraform/panw-logo.svg" />
              <Link to="https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/azurerm/latest">
                <img className="tab-item__logo" src="/img/product-landing/terraform/terraform-logo.png" />
              </Link>
              <img className="tab-item__logo" src="/img/product-landing/terraform/azure-logo.svg" />
            </div>
          </TabItem>
        </Tabs>
        <Tabs className="modules-tabs">
          <TabItem className="modules-tabs__item" value="Dynamic Address Groups" label="Dynamic Address Groups">
            <h2>Consul-Terraform-Sync Modules for PAN-OS</h2>
            <p>
              This Terraform module allows users to support Dynamic Firewalling by integrating <Link to="https://www.consul.io/">Consul</Link> with Palo Alto Networks PAN-OS based <Link to="https://www.paloaltonetworks.com/network-security/next-generation-firewall">PA-Series and VM-Series NGFW</Link> devices to dynamically manage the Address Objects based on service definition in Consul catalog. In addition, this module also manages dynamic registration/de-registration of Dynamic Address Group (DAG) tags based on services in Consul catalog.
            </p>
            <div className="tab-item__logo-container">
              {/* <Link to="https://www.paloaltonetworks.com/network-security/next-generation-firewall"> */}
              <img className="tab-item__logo" src="/img/product-landing/terraform/panw-logo.svg" />
              {/* </Link> */}
              <Link to="https://registry.terraform.io/modules/PaloAltoNetworks/ag-dag-nia/panos/latest">
                <img className="tab-item__logo" src="/img/product-landing/terraform/terraform-logo.png" />
              </Link>
              <Link>
                <img className="tab-item__logo" src="/img/product-landing/terraform/consul-logo.png" />
              </Link>
            </div>
          </TabItem>
          <TabItem className="modules-tabs__item" value="Static Address Groups" label="Static Address Groups" default>
            <h2>Consul-Terraform-Sync Modules for PAN-OS</h2>
            <p>
              This Terraform module allows users to support Dynamic Firewalling by integrating <Link to="https://www.consul.io/">Consul</Link> with Palo Alto Networks PAN-OS based <Link to="https://www.paloaltonetworks.com/network-security/next-generation-firewall">PA-Series and VM-Series NGFW</Link> devices to dynamically manage dynamic registration/de-registration of Dynamic Address Group (DAG) tags based on services in Consul catalog.
            </p>
            <div className="tab-item__logo-container">
              {/* <Link to="https://www.paloaltonetworks.com/network-security/next-generation-firewall"> */}
              <img className="tab-item__logo" src="/img/product-landing/terraform/panw-logo.svg" />
              {/* </Link> */}
              <Link to="https://registry.terraform.io/modules/PaloAltoNetworks/dag-nia/panos/latest">
                <img className="tab-item__logo" src="/img/product-landing/terraform/terraform-logo.png" />
              </Link>
              <Link to="https://www.consul.io/">
                <img className="tab-item__logo" src="/img/product-landing/terraform/consul-logo.png" />
              </Link>
            </div>
          </TabItem>
        </Tabs>
      </section>
    </div>
  )
}

export default Modules
