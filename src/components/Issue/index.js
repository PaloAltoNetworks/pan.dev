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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64l0 4.7C71.6 112.4 32 153 32 204.8l0 12.1c-8.5 5.9-16.6 12.5-24 19.7l-15.1 14.4C-16.4 258.9-2.6 288 22.3 288l59.1 0c9.5 27.3 22.6 52.9 38.5 76.2c-10 5-17.8 13.8-21.7 24.7l-2 5.6c-9.4 26.3 8.2 54.5 36.1 54.5l5.1 0c12.3 0 24.1-5.4 32.1-14.8l2.7-3.1c6.7 5.1 13.7 9.7 21.1 13.7l0 49.8c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40c5.3 .7 10.6 1 16 1s10.7-.3 16-1l0 40c0 17.7 14.3 32 32 32s32-14.3 32-32l0-49.8c7.4-4 14.4-8.6 21.1-13.7l2.7 3.1c8 9.4 19.8 14.8 32.1 14.8l5.1 0c27.9 0 45.5-28.2 36.1-54.5l-2-5.6c-3.9-10.9-11.7-19.7-21.7-24.7c15.9-23.3 29-48.9 38.5-76.2l59.1 0c24.9 0 38.7-29.1 23.4-47.8L457.7 216.5c-7.4-7.2-15.5-13.8-24-19.7l0-12.1c0-51.8-39.6-92.4-80-103.1l0-4.7c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0z" />
      </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64l0 4.7C71.6 112.4 32 153 32 204.8l0 12.1c-8.5 5.9-16.6 12.5-24 19.7l-15.1 14.4C-16.4 258.9-2.6 288 22.3 288l59.1 0c9.5 27.3 22.6 52.9 38.5 76.2c-10 5-17.8 13.8-21.7 24.7l-2 5.6c-9.4 26.3 8.2 54.5 36.1 54.5l5.1 0c12.3 0 24.1-5.4 32.1-14.8l2.7-3.1c6.7 5.1 13.7 9.7 21.1 13.7l0 49.8c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40c5.3 .7 10.6 1 16 1s10.7-.3 16-1l0 40c0 17.7 14.3 32 32 32s32-14.3 32-32l0-49.8c7.4-4 14.4-8.6 21.1-13.7l2.7 3.1c8 9.4 19.8 14.8 32.1 14.8l5.1 0c27.9 0 45.5-28.2 36.1-54.5l-2-5.6c-3.9-10.9-11.7-19.7-21.7-24.7c15.9-23.3 29-48.9 38.5-76.2l59.1 0c24.9 0 38.7-29.1 23.4-47.8L457.7 216.5c-7.4-7.2-15.5-13.8-24-19.7l0-12.1c0-51.8-39.6-92.4-80-103.1l0-4.7c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0z" />
        </svg>{" "}
        Report an Issue
      </span>
    </a>
  );
}
