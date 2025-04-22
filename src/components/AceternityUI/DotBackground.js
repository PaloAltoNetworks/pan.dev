import { cn } from "../../util";
import React from "react";
import FlipWordsHero from "./FlipWords";
import { TabsDemo } from "./AnimatedTabs";

export function DotBackground() {
  return (
    <div>
      <div className="relative flex h-20 mt-80 md:h-[50rem] md:mt-0 w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <FlipWordsHero />
      </div>
    </div>
  );
}
