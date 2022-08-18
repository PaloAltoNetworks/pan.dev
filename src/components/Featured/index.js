import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import clsx from "clsx";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "@theme/Button";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Cloud Security</>,
    imageUrl: "/img/PrismaCloud.svg",
    toPage: "https://prisma.pan.dev",
    target: "_self",
    color: "prisma",
    description: (
      <>
        <p className="text">
          Discover the APIs, tools and techniques necessary for bringing DevOps
          practices to the cloud.
        </p>
      </>
    ),
  },
  {
    title: <>Secure Access Service Edge</>,
    imageUrl: "/img/PrismaSASE.svg",
    toPage: "https://pan.dev/sase",
    target: "_self",
    color: "prisma",
    description: (
      <>
        <p className="text">
          Discover Prisma SASE APIs, including Prisma Access and Prisma SD-WAN.
        </p>
      </>
    ),
  },
  {
    title: <>Automate Anything</>,
    imageUrl: "/img/Cortex_XSoar_Logo.svg",
    toPage: "https://xsoar.pan.dev",
    color: "cortex",
    description: (
      <>
        <p className="text">
          Browse reference docs, tutorials, the XSOAR Marketplace and more.
        </p>
      </>
    ),
  },

  {
    title: <>Zero Trust Network Security</>,
    imageUrl: "/img/Strata_Logo.svg",
    toPage: "https://strata.pan.dev",
    color: "strata",
    description: (
      <>
        <p className="text">
          Learn how to make the most of the PAN-OS APIs, Expedition, Terraform,
          Ansible, and more.
        </p>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description, toPage, color, offset }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = toPage ? useBaseUrl(toPage) : null;
  return (
    <div className="col col--6">
      <Button
        className={clsx(styles.featuredButton)}
        variant="plain"
        href={toUrl}
        target="_self"
        uppercase={false}
        newTab={false}
        color={color}
      >
        <div className={clsx("card shadow--sm", styles.featured, color)}>
          <div className="card__body">
            {imgUrl && <img className={styles.featuredImage} src={imgUrl} />}
            <div className={styles.featuredTitle}>{title}</div>
            <div className={styles.featuredSummary}>{description}</div>
          </div>
        </div>
      </Button>
    </div>
  );
}

function Featured() {
  return (
    <div>
      {features && features.length && (
        <div className={classnames("row")}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Featured;
