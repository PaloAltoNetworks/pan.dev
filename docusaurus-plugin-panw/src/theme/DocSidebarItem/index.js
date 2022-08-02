/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import DocSidebarItemCategory from "@theme/DocSidebarItem/Category";
import DocSidebarItemLink from "@theme/DocSidebarItem/Link";
import DocSidebarItemVersionDropdown from "@theme/DocSidebarItem/VersionDropdown";
import DocSidebarItemHtml from "@theme/DocSidebarItem/Html";
export default function DocSidebarItem({ item, ...props }) {
  switch (item.type) {
    case "category":
      if (item.items.length === 0) {
        return null;
      }

      return <DocSidebarItemCategory item={item} {...props} />;
    case "html":
      return <DocSidebarItemHtml item={item} {...props} />;
    case "link":
      if (item.customProps?.version) {
        return <DocSidebarItemVersionDropdown item={item} {...props} />;
      }
    default:
      return <DocSidebarItemLink item={item} {...props} />;
  }
} // If we navigate to a category and it becomes active, it should automatically expand itself
