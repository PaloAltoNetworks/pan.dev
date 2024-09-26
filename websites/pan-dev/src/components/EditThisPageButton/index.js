import React from "react";
import IconEdit from "@theme/Icon/Edit";
import { useDoc } from "@docusaurus/theme-common/internal";
import "./styles.css";

export default function EditThisPageButton() {
  const { metadata } = useDoc();
  const { editUrl } = metadata;
  return (
    <a
      href={editUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="edit-button"
    >
      <IconEdit />
    </a>
  );
}
