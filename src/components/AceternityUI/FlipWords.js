import React, { useCallback, useEffect, useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "../../util";
import "./FlipWords.scss";

const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          `current-word-container z-10 inline-block relative text-left text-neutral-900 px-2`,
          className
        )}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.2,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.3,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default function FlipWordsHero() {
  const words = ["API References", "Developer Docs", "Getting Started Guides"];

  return (
    <>
      <motion.div
        style={{ marginTop: "-20rem" }}
        className="h-[20rem] flex-col justify-center justify-items-center items-center px-4 text-center"
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.1,
          ease: "easeInOut",
        }}
      >
        <div
          className={`flipwords-container text-3xl md:text-5xl lg:text-7xl font-extrabold mx-auto text-neutral-900`}
        >
          <FlipWords words={words} />
          <br />
          for{" "}
          <span className="text-[#FA582D] drop-shadow-[0_0_20px_rgba(255,204,153,0.5)]">
            Palo Alto Networks
          </span>
        </div>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-lg font-normal"
        >
          Access comprehensive developer documentation, API references, SDKs,
          and guides across the entire Palo Alto Networks product portfolio.
          Find everything you need to build integrations and automate security
          workflows.
        </motion.p>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:pointer-cursor">
          <a className="explore-dev-docs-btn" href="#developer-docs-section">
            Explore Developer Docs
          </a>
        </button>
      </motion.div>
    </>
  );
}
