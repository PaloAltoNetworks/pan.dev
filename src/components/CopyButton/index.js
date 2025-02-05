import React, { useEffect, useState } from "react";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import TurndownService from "turndown";
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
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopied(false);
      });
  };

  return (
    <button
      onClick={handleCopyMarkdown}
      className="copy-markdown-btn"
      type="button"
    >
      {copied ? (
        <i class="fa-solid fa-check" style={{ fontSize: "16px" }}></i>
      ) : (
        <i class="fa-regular fa-copy" style={{ fontSize: "16px" }}></i>
      )}
      {isVisible && (
        <span className="copy-markdown-btn__text">
          {copied ? "Copied" : "Copy as Markdown"}
        </span>
      )}
    </button>
  );
}

export default CopyButton;
