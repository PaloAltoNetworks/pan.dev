import React from "react";
import Link from "@theme-original/DocSidebarItem/Link";

// Paints the Preview pill on a Prisma Browser reference nav entry. The marker
// arrives as customProps.pbPreviewFeature, set per operation by
// createPrismaBrowserDocItem in docusaurus.config.ts, because a className set
// on the sidebar item is discarded in favour of the generated page's
// sidebar_class_name. The original component puts item.className on the <li>,
// so handing it an amended item is enough and nothing has to be ejected.
// Every other sidebar item falls straight through.
export default function DocSidebarItemLinkWrapper(props) {
  const { item } = props;

  if (!item?.customProps?.pbPreviewFeature) return <Link {...props} />;

  return (
    <Link
      {...props}
      item={{
        ...item,
        className: [item.className, "pb-preview"].filter(Boolean).join(" "),
      }}
    />
  );
}
