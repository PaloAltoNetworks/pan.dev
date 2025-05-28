"use client";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "../../util";
import "./Tabs.scss";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const tabContentRef = useRef(null);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const scrollToElement = () => {
    if (tabContentRef.current) {
      const yOffset = -125;
      const y =
        tabContentRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
              scrollToElement();
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 py-2 rounded-full tab-button",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
              "&:hover": { cursor: "pointer" },
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  `absolute inset-0 bg-gray-200 tabs-background rounded-full`,
                  activeTabClassName
                )}
              />
            )}

            <span className={`relative block text-black tabs-title`}>
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        ref={tabContentRef}
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-16  ", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({ className, tabs, hovering, ref }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div ref={ref} className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
