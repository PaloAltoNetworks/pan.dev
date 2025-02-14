import React, { useState, useEffect, useRef, useMemo } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import ApplauseButton from "../Applause";
import EditThisPageButton from "../EditThisPageButton";
import { ReportAnIssueIcon } from "../Issue";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import "./styles.css";

function isInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(true);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

function Divider() {
  return <div className="floating-island-divider" />;
}

function FloatingIsland() {
  const { metadata } = useDoc();
  const { editUrl, frontMatter } = metadata;
  const { hide_applause, hide_issue } = frontMatter;
  const containerRef = useRef(null);
  const isVisible = ExecutionEnvironment.canUseDOM
    ? isInViewport(containerRef)
    : true;

  const canDisplayAllButtons = editUrl && !hide_issue;
  const canDisplayTwoButtons = editUrl && !hide_issue;
  console.log(canDisplayAllButtons, canDisplayTwoButtons);

  return (
    <div ref={containerRef}>
      <div
        className={
          !isVisible && canDisplayAllButtons
            ? "floating-island-container"
            : !isVisible && canDisplayTwoButtons
            ? "floating-island-container-double"
            : !isVisible && !canDisplayAllButtons && !canDisplayTwoButtons
            ? "floating-island-container-single"
            : undefined
        }
      >
        {!isVisible && editUrl && <EditThisPageButton />}
        {!isVisible &&
          editUrl &&
          !hide_issue &&
          (canDisplayAllButtons || canDisplayTwoButtons) && <Divider />}
        {!isVisible && !hide_issue && <ReportAnIssueIcon />}
      </div>
    </div>
  );
}

export default FloatingIsland;
