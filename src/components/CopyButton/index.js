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
      const convertToMarkdown = () => {
        const apiDocContent = document.querySelector(
          ".openapi-left-panel__container"
        );
        const nonApiDocContent =
          !frontMatter.api && document.querySelector(".theme-doc-markdown");

        const contentToConvert = apiDocContent || nonApiDocContent;

        if (contentToConvert) {
          const turndownService = new TurndownService();

          turndownService.addRule("details-rule", {
            filter: "details",
            replacement: function (content, node) {
              const summary = node.querySelector("summary");
              const summaryText = summary ? summary.textContent.trim() : "";
              const detailsContent = content.substring(
                content.indexOf("</summary>") + 1
              ); // Extract content after summary

              let markdown = `\n${summaryText}\n`;

              // Indent the details content
              const indentedContent = detailsContent
                .split("\n")
                .map((line) => {
                  if (line.trim() === "") return line; // Don't indent empty lines
                  return `    ${line}`; // Use 4 spaces for indentation (common practice)
                })
                .join("\n");

              markdown += indentedContent;

              return markdown + "\n";
            },
          });

          const convertedContent = turndownService.turndown(contentToConvert);
          setMarkdownContent(convertedContent);
        } else {
          console.warn("No content found to convert to markdown");
        }
      };

      if (document.readyState === "loading") {
        // Check if DOM is still loading
        document.addEventListener("DOMContentLoaded", convertToMarkdown);
      } else {
        // DOM is already loaded
        convertToMarkdown();
      }

      return () => {
        document.removeEventListener("DOMContentLoaded", convertToMarkdown); // Clean up
      };
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
      tabIndex="0"
      isVisible={isVisible}
      text="Copy contents of documentation as Markdown format for AI usage"
    >
      <a
        onClick={handleCopyMarkdown}
        className={`copy-markdown-btn${copied ? " copied" : ""}`}
        type="button"
      >
        <span className={`icon-container${!isVisible ? " not-visible" : ""}`}>
          <Sparkles className={`sparkles${isVisible ? " is-visible" : ""}`} />
          <i className="fa-solid fa-check" style={{ fontSize: "16px" }}></i>
        </span>
        {isVisible && (
          <span className="copy-markdown-btn__text">
            {copied ? "Copied" : "Copy for AI"}
          </span>
        )}
      </a>
    </Tooltip>
  );
}

export default CopyButton;
