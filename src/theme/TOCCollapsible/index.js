import React from "react";
import TOCCollapsible from "@theme-original/TOCCollapsible";
import AuthorsSide from "@theme/AuthorsSide";
import styles from "./styles.module.css";

export default function TOCCollapsibleWrapper(props) {
  return (
    <>
      <TOCCollapsible {...props} />
      <div className={styles.tocAuthorsMobile}>
        <AuthorsSide />
      </div>
    </>
  );
}
