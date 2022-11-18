import React from 'react'
import Link from '@docusaurus/Link'
import './Feeds.scss'

function Feeds() {
  // TODO: Pull in feed from Terraform
  const FEEDS_IMAGE = [
    {
      title: "Run Tasks Are Now Available in the Terraform Registry",
      img: {
        src: "img/product-landing/terraform/feeds/terraform-feed-1.jpeg",
        alt: "Terraform Feed"
      },
      link: "https://www.hashicorp.com/blog/run-tasks-are-now-available-in-the-terraform-registry"
    },
    {
      title: "CDK for Terraform 0.14 Makes it Easier to Use Providers",
      img: {
        src: "img/product-landing/terraform/feeds/terraform-feed-2.jpeg",
        alt: "Terraform Feed"
      },
      link: "https://www.hashicorp.com/blog/cdk-for-terraform-0-14-makes-it-easier-to-use-providers"
    },
  ]

  const FEEDS = [
    {
      title: "HashiCorp at AWS re:Invent: Examining the State of Your Cloud Operating Model",
      link: "https://www.hashicorp.com/blog/hashicorp-at-aws-re-invent-examining-the-state-of-your-cloud-operating-model",
    },
    {
      title: "How Telcos Can Add Mutual TLS to 5G Packet Core with HashiCorp Vault",
      link: "https://www.hashicorp.com/blog/how-telcos-can-add-mutual-tls-to-5g-packet-core-with-hashicorp-vault",
    },
    {
      title: "HashiConf Global 2022: From Zero Trust to No Code",
      link: "https://www.hashicorp.com/blog/hashiconf-global-2022-from-zero-trust-to-no-code",
    },
    {
      title: "Pre-Plan/Pre-Apply Run Tasks Now Available in Terraform Cloud",
      link: "https://www.hashicorp.com/blog/pre-plan-apply-run-tasks-now-available-in-terraform-cloud",
    },
  ]

  return (
    <div className="container">
      <section className="feeds-container">
        <header className="feeds-header">
          <h1>Latest Terraform Feeds</h1>
        </header>
        <div className="feeds-image-list-container">
          <div className="feeds-image-container">
            {FEEDS_IMAGE.map(feed =>
              <Link to={feed.link}>
                <div className="feeds-image-text-wrapper">
                  <img
                    src="/img/product-landing/terraform/feeds/stock-feed.jpg"
                    alt={feed.img.alt}
                  />
                  <h3 className="feeds__title">{feed.title}</h3>
                </div>
              </Link>
            )}
          </div>
          <ul className="feeds-list">
            {FEEDS.map(feed =>
              <li className="feeds-list__item">
                <Link to={feed.link}>{feed.title}</Link>
                <img
                  className="external-icon"
                  src="/img/icons/external-icon.png"
                  alt="External icon"
                />
              </li>
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Feeds