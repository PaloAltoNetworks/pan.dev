import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import clsx from "clsx";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../../theme/Button";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Prisma Cloud for Developers</>,
    imageUrl: "/img/prismafavicon.png",
    toPage: "https://prisma.pan.dev",
    target: "_self",
    description: (
      <>
        <a
          target="_self"
          href="https://prisma.pan.dev/docs/cloud/cspm/cspm-gs"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cloud Security Posture Management
        </a>
        <br />
        <a
          target="_self"
          href="https://prisma.pan.dev/docs/cloud/cwpp/cwpp-gs"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cloud Workload Protection
        </a>
        <br />
        <a
          target="_self"
          href="https://prisma.pan.dev/docs/cloud/cspm/rql/aws/aws_ec2"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          RQL Library
        </a>
        <br />
        <a
          target="_self"
          href="https://prisma.pan.dev/api/cloud/"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          API Reference
        </a>
      </>
    ),
  },
  {
    title: <>PAN-OS for Developers</>,
    imageUrl: "/img/Strata-yellow.svg",
    toPage: "https://panos.pan.dev",
    description: (
      <>
        <a
          target="_self"
          href="https://panos.pan.dev/docs/apis"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          APIs and SDKs
        </a>
        <br />
        <a
          target="_self"
          href="https://panos.pan.dev/docs/automation"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Automation
        </a>
        <br />
        <a
          target="_self"
          href="https://panos.pan.dev/docs/cloud"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cloud
        </a>
        <br />
        <a
          target="_self"
          href="https://panos.pan.dev/docs/expedition/expedition_qs"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Expedition
        </a>
      </>
    ),
  },
  {
    title: <>XSOAR for Developers</>,
    imageUrl: "/img/Cortex-XSOAR-product-green.svg",
    toPage: "https://xsoar.pan.dev",
    description: (
      <>
        <a
          target="_self"
          href="https://xsoar.pan.dev/docs/welcome"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Developer Docs
        </a>
        <br />
        <a
          target="_self"
          href="https://xsoar.pan.dev/docs/reference/articles-index"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Articles
        </a>
        <br />
        <a
          target="_self"
          href="https://xsoar.pan.dev/docs/reference/articles-index"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Reference
        </a>
      </>
    ),
  },
  {
    title: <>Cortex for Developers</>,
    imageUrl: "/img/Cortex-green.svg",
    toPage: "https://cortex.pan.dev",
    description: (
      <>
        <a
          target="_self"
          href="https://cortex.pan.dev/docs/learn/about_cdl"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          Cortex Data Lake API
        </a>
        <br />
        <a
          target="_self"
          href="https://cortex.pan.dev/docs/develop/quickstart"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          CDL API Quickstart
        </a>
        <br />
        <a
          target="_self"
          href="https://cortex.pan.dev/docs/learn/apiexplorer_intro"
          rel="noopener noreferrer"
          className={styles.toLink}
        >
          API Explorer
        </a>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description, toPage }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = toPage ? useBaseUrl(toPage) : null;
  const isBreakpoint = useMediaQuery({ query: "(max-width: 1200px)" });

  if (toUrl) {
    return (
      <div
        className={
          isBreakpoint
            ? "col col--6 margin-bottom--md"
            : "col col--5 margin-bottom--md"
        }
      >
        <Button
          className={clsx(styles.featuredButton)}
          variant="plain"
          href={toUrl}
          target="_self"
          uppercase={false}
          newTab={false}
        >
          <div className={clsx("card shadow--lw", styles.featured)}>
            <div className="card__body">
              {imgUrl && <img className={styles.featuredImage} src={imgUrl} />}
              <div className={styles.featuredTitle}>{title}</div>
              <div className={styles.featuredSummary}>{description}</div>
            </div>
          </div>
        </Button>
      </div>
    );
  } else {
    return (
      <div
        className={
          isBreakpoint
            ? "col col--6 margin-bottom--md"
            : "col col--4 margin-bottom--md"
        }
      >
        <div className={styles.featuredLinks}>
          <div className={clsx("card shadow--lw", styles.featured)}>
            <div className="card__body">
              {imgUrl && <img className={styles.featuredImage} src={imgUrl} />}
              <div className={styles.featuredTitle}>{title}</div>
              <div className={styles.featuredSummary}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
