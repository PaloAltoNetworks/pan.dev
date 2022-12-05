import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import Authors from "@theme/Authors";

export default function FooterWrapper(props) {
  return (
    <>
      <Authors />
      <Footer {...props} />
    </>
  );
}
