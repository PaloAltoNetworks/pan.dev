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
import FloatingIsland from "../../../components/FloatingIsland";
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
  "editUrl" | "lastUpdatedAt" | "lastUpdatedBy" | "formattedLastUpdatedAt" | "hide_applause"
>;
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
  hide_applause
}: EditMetaRowProps) {
  return (
    <>
      <hr></hr>
      <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}>
        <div className={clsx("col", styles.docFooterEditMetaRowItem)}>
          {!hide_applause && <ApplauseButton />}
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
    frontMatter
  } = metadata;
  const {hide_applause} = frontMatter
  
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy || !hide_applause);

  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, "docusaurus-mt-lg")}
    >
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow && <FloatingIsland />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
          hide_applause={hide_applause}
        />
      )}
    </footer>
  );
}
