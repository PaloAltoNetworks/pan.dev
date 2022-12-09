import React, { useState, useEffect, useRef, useMemo } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import ApplauseButton from "../Applause";
import EditThisPageButton from "../EditThisPageButton";
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
  const containerRef = useRef(null);
  const isVisible = ExecutionEnvironment.canUseDOM
    ? isInViewport(containerRef)
    : true;

  return (
    <div ref={containerRef}>
      <div className={!isVisible ? "floating-island-container" : ""}>
        <ApplauseButton />
        {!isVisible && <Divider />}
        {!isVisible && <EditThisPageButton />}
      </div>
    </div>
  );
}

export default FloatingIsland;
