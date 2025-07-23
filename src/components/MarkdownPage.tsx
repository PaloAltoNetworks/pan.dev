import React, { useEffect, useState } from "react";
import { useLocation } from "@docusaurus/router";
import TurndownService from "turndown";

export default function MarkdownPage() {
  const location = useLocation();
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAndConvert() {
      const htmlPath = location.pathname.replace(/\.md$/, "/index.html");
      try {
        const res = await fetch(htmlPath);
        if (!res.ok) {
          throw new Error(`Failed to fetch source page: ${res.status}`);
        }
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const content =
          doc.querySelector(".openapi-left-panel__container") ||
          doc.querySelector(".theme-doc-markdown");
        if (!content) {
          throw new Error("Unable to locate markdown source");
        }
        const turndownService = new TurndownService();
        turndownService.addRule("details-rule", {
          filter: "details",
          replacement: function (content, node) {
            const summary = node.querySelector("summary");
            const summaryText = summary ? summary.textContent?.trim() : "";
            const detailsContent = content.substring(
              content.indexOf("</summary>") + 1
            );
            let md = `\n${summaryText}\n`;
            const indented = detailsContent
              .split("\n")
              .map((line) => {
                if (line.trim() === "") return line;
                return `    ${line}`;
              })
              .join("\n");
            md += indented;
            return md + "\n";
          },
        });
        setMarkdown(turndownService.turndown(content));
      } catch (e) {
        setError((e as Error).message);
      }
    }
    fetchAndConvert();
  }, [location.pathname]);

  const preStyle: React.CSSProperties = {
    all: "unset",
    whiteSpace: "pre-wrap",
    fontFamily: "monospace",
    display: "block",
    padding: 0,
    margin: 0,
    background: "transparent",
    color: "inherit",
  };

  if (error) {
    return <pre style={preStyle}>{error}</pre>;
  }
  if (markdown === null) {
    return <p>Loading...</p>;
  }
  return <pre style={preStyle}>{markdown}</pre>;
}
