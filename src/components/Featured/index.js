import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import Button from "@theme/Button";
import clsx from "clsx";
import "./Featured.scss";

const features = [
  {
    title: <>Cloud Security</>,
    imageUrl: "/img/PrismaCloud.svg",
    toPage: "https://prisma.pan.dev",
    target: "_self",
    color: "prisma",
    description: (
      <p>
        Discover the APIs, tools and techniques necessary for bringing DevOps
        practices to the cloud.
      </p>
    ),
  },
  {
    title: <>Secure Access Service Edge</>,
    imageUrl: "/img/PrismaSASE.svg",
    toPage: "https://pan.dev/sase",
    target: "_self",
    color: "prisma",
    description: (
      <p>
        Discover Prisma SASE APIs, including Prisma Access and Prisma SD-WAN.
      </p>
    ),
  },
  {
    title: <>Automate Anything</>,
    imageUrl: "/img/Cortex_XSoar_Logo.svg",
    toPage: "https://xsoar.pan.dev",
    color: "cortex",
    description: (
      <p>
        Browse reference docs, tutorials, the XSOAR Marketplace and more.
      </p>
    ),
  },
  {
    title: <>Zero Trust Network Security</>,
    imageUrl: "/img/Strata_Logo.svg",
    toPage: "https://strata.pan.dev",
    color: "panos",
    description: (
      <p>
        Learn how to make the most of the PAN-OS APIs, Expedition, Terraform,
        Ansible, and more.
      </p>
    )
  },
];

function Feature({ imageUrl, title, description, toPage, color, offset }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = toPage ? useBaseUrl(toPage) : null;
  return (
    <div className={clsx("featured-card-container", color)}>
      <span></span>
      <div className="featured-card-content">
        <img className="featured-card-image" src={imgUrl}/>
        <h2>{title}</h2>
        {description}
        <Button
          variant="plain"
          href={toUrl}
          target="_self"
          uppercase={false}
          newTab={false}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

function Featured() {
  return (
    <div className="featured-container container">
      {features && features.length && (
        <div className="featured-cards-container">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Featured;
