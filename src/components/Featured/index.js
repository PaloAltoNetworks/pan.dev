import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import clsx from "clsx";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../../theme/Button";
import styles from "./styles.module.css";

const features = [
  {
<<<<<<< HEAD
    title: <>XSOAR</>,
    imageUrl: "/img/Cortex_XSoar_Logo.svg",
    toPage: "https://xsoar.pan.dev",
    color: "cortex",
    description: <></>,
  },
  {
    title: <>Prisma Cloud</>,
=======
    title: <>Threat Intelligence and AI</>,
    imageUrl: "/img/Cortex_Logo.svg",
    toPage: "https://cortex.pan.dev",
    color: "cortex",
    description: (
      <>
        <p className="text text--secondary">
          Get started with developing solutions with Cortex XDR and Cortex Data
          Lake. Find API reference docs, tutorials and more.
        </p>
      </>
    ),
  },
  {
    title: <>Cloud Automation and Security</>,
>>>>>>> upstream/master
    imageUrl: "/img/Prisma_Logo.svg",
    toPage: "https://prisma.pan.dev",
    target: "_self",
    color: "prisma",
<<<<<<< HEAD
    description: <></>,
  },
  {
    title: <>PAN-OS</>,
    imageUrl: "/img/Strata_Logo.svg",
    toPage: "https://strata.pan.dev",
    color: "strata",
    description: <></>,
  },
  {
    title: <>Cortex</>,
    imageUrl: "/img/Cortex_Logo.svg",
    toPage: "https://cortex.pan.dev",
    color: "cortex",
    description: <></>,
=======
    description: (
      <>
        <p className="text text--secondary">
          Discover the APIs, tools and techniques necessary for bringing DevOps
          practices to the cloud.
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
        <p className="text text--secondary">
          Learn how to make the most of the PAN-OS APIs, Expedition, Terraform,
          Ansible, and more.
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
        <p className="text text--secondary">
          Browse reference docs, tutorials, the XSOAR Marketplace and more.
        </p>
      </>
    ),
>>>>>>> upstream/master
  },
];

function Feature({ imageUrl, title, description, toPage, color }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = toPage ? useBaseUrl(toPage) : null;
  const isBreakpoint = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <div
      className={
        isBreakpoint
<<<<<<< HEAD
          ? "col col--6 margin-bottom--md"
          : "col col--3 margin-bottom--md"
=======
          ? "col col--6 margin-bottom--lg"
          : "col col--3 margin-bottom--lg"
>>>>>>> upstream/master
      }
    >
      <Button
        className={clsx(styles.featuredButton, "shadow--md")}
        variant="plain"
        href={toUrl}
        target="_self"
        uppercase={false}
        newTab={false}
        color={color}
      >
        <div className={clsx("card", styles.featured, color)}>
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
        <div className={classnames("row centRow")}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Featured;
