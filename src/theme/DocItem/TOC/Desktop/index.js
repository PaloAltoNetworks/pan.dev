import React from "react";
import Desktop from "@theme-original/DocItem/TOC/Desktop";
import AuthorsSide from "@theme/AuthorsSide";

export default function DesktopWrapper(props) {
  return (
    <>
      <AuthorsSide />
      <Desktop {...props} />
    </>
  );
}
