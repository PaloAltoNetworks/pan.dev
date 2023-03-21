import React from "react";
import TOC from "@theme-original/TOC";
import AuthorsSide from "@theme/AuthorsSide";
import styles from "./styles.module.css";

export default function TOCWrapper(props) {
  return (
    <>
      <div className={styles.tocAuthors}>
        <AuthorsSide />
      </div>
      <TOC {...props} />
    </>
  );
}
