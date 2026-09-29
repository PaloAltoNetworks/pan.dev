import React from "react";
import ApiItem from "@theme-original/ApiItem";
import { usePBSitePath } from "@site/src/components/PBPortal/pbRoute";
import "@site/src/components/PBPortal/pb-portal.scss";

// Scoped wrapper around the OpenAPI reference item. The surface switcher now
// lives in the swizzled Navbar (grouped with the pan.dev navbar), so here we
// only paint the Prisma Browser API-surface background behind the native
// reference UI, and only on /prisma-browser/api pages. All other API pages
// fall straight through to the original component.
export default function ApiItemWrapper(props) {
  const onBrowserMgmt = usePBSitePath().startsWith("/prisma-browser/api");

  if (!onBrowserMgmt) return <ApiItem {...props} />;

  return (
    <>
      <div className="pb-portal" data-surface="api" aria-hidden="true" />
      <ApiItem {...props} />
    </>
  );
}
