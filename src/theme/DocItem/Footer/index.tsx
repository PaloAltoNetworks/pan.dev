import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import EditThisPage from "@theme/EditThisPage";
import TagsListInline, {
  type Props as TagsListInlineProps,
} from "@theme/TagsListInline";

import styles from "./styles.module.css";
import CopyButton from "../../../components/CopyButton";
import FloatingIsland from "../../../components/FloatingIsland";
import { ReportAnIssue } from "../../../components/Issue";

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
  | "editUrl"
  | "lastUpdatedAt"
  | "lastUpdatedBy"
  | "formattedLastUpdatedAt"
  | "hide_applause"
  | "hide_issue"
>;
function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
  hide_applause,
  hide_issue,
}: EditMetaRowProps) {
  return (
    <>
      <hr></hr>
      <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, "row")}>
        <div className={clsx("col", styles.docFooterEditMetaRowItem)}>
        </div>
        <div className={styles.docFooterEditMetaRowItemRight}>
          <CopyButton isVisible={true}/>
          {editUrl && <EditThisPage editUrl={editUrl} />}
          {!hide_issue && <ReportAnIssue />}
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
    frontMatter,
  } = metadata;
  const { hide_applause, hide_issue } = frontMatter;

  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(
    editUrl ||
    lastUpdatedAt ||
    lastUpdatedBy ||
    !hide_applause ||
    !hide_issue
  );

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
          hide_issue={hide_issue}
        />
      )}
    </footer>
  );
}
