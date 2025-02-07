import React, { useEffect, useState } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import TurndownService from "turndown";
import Tooltip from "../Tooltip";
import Sparkles from "./assets/sparkles.svg";
import "./styles.css";

function CopyButton({ isVisible }) {
  const { metadata } = useDoc();
  const { frontMatter } = metadata;
  const [markdownContent, setMarkdownContent] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const apiDocContent = document.querySelector(
        ".openapi-left-panel__container"
      );
      const nonApiDocContent =
        !frontMatter.api && document.querySelector(".theme-doc-markdown");

      const contentToConvert = apiDocContent || nonApiDocContent;

      if (contentToConvert) {
        const turndownService = new TurndownService();
        const convertedContent = turndownService.turndown(contentToConvert);
        setMarkdownContent(convertedContent);
      } else {
        console.warn("No content found to convert to markdown");
      }
    }
  }, [markdownContent]);

  const handleCopyMarkdown = () => {
    navigator.clipboard
      .writeText(markdownContent)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopied(false);
      });
  };

  return (
    <Tooltip
      isVisible={isVisible}
      text="Copy contents of documentation as Markdown format for AI usage"
    >
      <button
        onClick={handleCopyMarkdown}
        className={`copy-markdown-btn ${copied ? "copied" : ""}`}
        type="button"
      >
        <span className="icon-container">
          <Sparkles className="sparkles" />
          <i className="fa-solid fa-check" style={{ fontSize: "16px" }}></i>
        </span>
        {isVisible && (
          <span className="copy-markdown-btn__text">
            {copied ? "Copied" : "Copy for AI"}
          </span>
        )}
      </button>
    </Tooltip>
  );
}

export default CopyButton;
