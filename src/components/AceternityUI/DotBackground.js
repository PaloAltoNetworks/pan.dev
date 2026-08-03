import { cn } from "../../util";
import React from "react";
import FlipWordsHero from "./FlipWords";
import "./DotBackground.scss";

export function DotBackground() {
  return (
    <div>
      <div
        className={`dot-background-container relative flex h-20 mt-80 md:h-[50rem] md:mt-0 w-full items-center justify-center bg-white`}
      >
        <div
          className={cn(
            "dot-background-radial-gradient",
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
          )}
        />
        <div
          className={`dot-background-mask-image pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]`}
        ></div>
        <FlipWordsHero />
      </div>
    </div>
  );
}
