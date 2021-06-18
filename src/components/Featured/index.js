import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import clsx from "clsx";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "../../theme/Button";
import styles from "./styles.module.css";

const features = [
  {
    title: <>XSOAR</>,
    imageUrl: "/img/Cortex_XSoar_Logo.svg",
    toPage: "https://xsoar.pan.dev",
    color: "cortex",
    description: <></>,
  },
  {
    title: <>Prisma Cloud</>,
    imageUrl: "/img/Prisma_Logo.svg",
    toPage: "https://prisma.pan.dev",
    target: "_self",
    color: "prisma",
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
          ? "col col--6 margin-bottom--md"
          : "col col--3 margin-bottom--md"
      }
    >
      <Button
        className={clsx(styles.featuredButton)}
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
