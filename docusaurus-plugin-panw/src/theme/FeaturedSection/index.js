import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import React from "react";
import { useMediaQuery } from "react-responsive";
import Button from "@theme/Button";
import styles from "./styles.module.css";

function FeaturedSection({ imageUrl, title, description, toPage, color }) {
  const imgUrl = useBaseUrl(imageUrl);
  const toUrl = toPage ? useBaseUrl(toPage) : null;

  return (
    <div className="col col--6 margin-bottom--lg">
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

export default FeaturedSection;
