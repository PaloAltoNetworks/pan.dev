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

function FloatingIsland() {
  const containerRef = useRef(null);
  const isVisible = ExecutionEnvironment.canUseDOM
    ? isInViewport(containerRef)
    : true;

  return (
    <div ref={containerRef}>
      <div className={!isVisible ? "applause-container" : ""}>
        <ApplauseButton />
        {!isVisible && <EditThisPageButton />}
      </div>
    </div>
  );
}

export default FloatingIsland;
