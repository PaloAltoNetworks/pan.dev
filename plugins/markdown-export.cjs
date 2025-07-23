const fs = require("fs-extra");
const path = require("path");
const fg = require("fast-glob");
const domino = require("@mixmark-io/domino");
const TurndownService = require("turndown");

function markdownExportPlugin() {
  return {
    name: "markdown-export-plugin",
    async postBuild({ outDir }) {
      const turndownService = new TurndownService();
      turndownService.addRule("details-rule", {
        filter: "details",
        replacement: function (content, node) {
          const summary = node.querySelector("summary");
          const summaryText = summary ? summary.textContent.trim() : "";
          const detailsContent = content.substring(
            content.indexOf("</summary>") + 1
          );
          let markdown = `\n${summaryText}\n`;
          const indentedContent = detailsContent
            .split("\n")
            .map((line) => {
              if (line.trim() === "") return line;
              return `    ${line}`;
            })
            .join("\n");
          markdown += indentedContent;
          return markdown + "\n";
        },
      });

      const htmlFiles = await fg("**/index.html", { cwd: outDir });
      await Promise.all(
        htmlFiles.map(async (file) => {
          const filePath = path.join(outDir, file);
          const html = await fs.readFile(filePath, "utf-8");
          const document = domino.createDocument(html);
          const container =
            document.querySelector(".openapi-left-panel__container") ||
            document.querySelector(".theme-doc-markdown");
          if (!container) return;
          const markdown = turndownService.turndown(container);
          const dest = path.join(outDir, file.replace(/\/index\.html$/, ".md"));
          await fs.outputFile(dest, markdown);
        })
      );
    },
  };
}

module.exports = markdownExportPlugin;
