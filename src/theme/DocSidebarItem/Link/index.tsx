import React, { type ReactNode } from "react";
import Link from "@theme-original/DocSidebarItem/Link";
import type LinkType from "@theme/DocSidebarItem/Link";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof LinkType>;

// Paints the "Preview" label on a Prisma Browser reference nav entry. The
// marker arrives as customProps.pbPreviewFeature, set per operation by
// createPrismaBrowserDocItem (scripts/prisma-browser/reference-generators.mjs).
// The original component puts item.className on the <li>, so handing it an
// amended item is enough and nothing has to be ejected. Every other sidebar
// item falls straight through.
export default function DocSidebarItemLinkWrapper(props: Props): ReactNode {
  const { item } = props;

  if (!item.customProps?.pbPreviewFeature) return <Link {...props} />;

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
