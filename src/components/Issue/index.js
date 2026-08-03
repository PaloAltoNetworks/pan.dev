import React from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import "./styles.css";

export function ReportAnIssueIcon() {
  const { metadata } = useDoc();
  const { title } = metadata;
  const issueTitle = `Issue/Help with "${title}"`;
  const issueUrl = `https://github.com/PaloAltoNetworks/pan.dev/issues/new?labels=documentation&title=${issueTitle}&template=documentation_problem.md`;
  return (
    <a
      href={issueUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="issue-button"
    >
      <i className="fa-solid fa-bug"></i>
    </a>
  );
}

export function ReportAnIssue() {
  const { metadata } = useDoc();
  const { title } = metadata;
  const issueTitle = `Issue/Help with "${title}"`;
  const issueUrl = `https://github.com/PaloAltoNetworks/pan.dev/issues/new?labels=documentation&title=${issueTitle}&template=documentation_problem.md`;
  return (
    <a
      href={issueUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="issue-button"
    >
      <span>
        <i className="fa-solid fa-bug"></i> Report an Issue
      </span>
    </a>
  );
}
