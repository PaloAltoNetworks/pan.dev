import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import {
  useDoc,
  type DocContextValue,
} from "@docusaurus/theme-common/internal";
import LastUpdated from "@theme/LastUpdated";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline, {
  type Props as TagsListInlineProps,
} from "@theme/TagsListInline";

import styles from "./styles.module.css";
import ApplauseButton from "../../../components/Applause";

function TagsRow(props: TagsListInlineProps) {
  return (
    <div
      className={clsx(
        ThemeClassNames.docs.docFooterTagsRow,
        "row margin-bottom--sm"
      )}
    >
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}

type EditMetaRowProps = Pick<
  DocContextValue["metadata"],
  "editUrl" | "lastUpdatedAt" | "lastUpdatedBy" | "formattedLastUpdatedAt"
>;
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}: EditMetaRowProps) {
  return (
    <>
      <hr></hr>
      <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}>
        <div className={clsx("col", styles.docFooterEditMetaRowItem)}>
          <ApplauseButton />
        </div>
        <div className={clsx("col", styles.docFooterEditMetaRowItem)}>
          {editUrl && <EditThisPage editUrl={editUrl} />}
        </div>
      </div>
    </>
  );
}

export default function DocItemFooter(): JSX.Element | null {
  const { metadata } = useDoc();
  const {
    editUrl,
    lastUpdatedAt,
    formattedLastUpdatedAt,
    lastUpdatedBy,
    tags,
  } = metadata;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
    >
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {!canDisplayEditMetaRow && <ApplauseButton />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}
    </footer>
  );
}