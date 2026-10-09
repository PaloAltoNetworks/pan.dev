import React, { useEffect } from "react";
import Navbar from "@theme-original/Navbar";
import { pbSection } from "@site/src/components/PBPortal/pbRoute";
import { useSitePath } from "@site/src/hooks/useSitePath";
import Switcher from "@site/src/components/PBPortal/Switcher";
import "@site/src/components/PBPortal/pb-portal.scss";

// Map the current route to a Prisma Browser surface so the switcher can
// highlight the active tab. Returns null on every non-PB page (the switcher is
// not rendered there and the original navbar is returned untouched).
function surfaceForPath(pathname) {
  const section = pbSection(pathname);
  if (section === null) return null;
  if (section === "api") return "api";
  if (section === "guide") return "guide";
  if (section === "release-notes") return "release-notes";
  return "overview";
}

// Wrap the pan.dev navbar and the Prisma Browser switcher in a single sticky
// container so they scroll as one unit (the switcher can no longer slide behind
// the navbar). Keeps the PB surface tokens in sync with pan.dev's theme toggle.
export default function NavbarWrapper(props) {
  const surface = surfaceForPath(useSitePath());

  useEffect(() => {
    if (!surface) return undefined;
    const root = document.documentElement;
    const sync = () =>
      root.setAttribute(
        "data-pab-theme",
        root.getAttribute("data-theme") === "dark" ? "dark" : "light"
      );
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, [surface]);

  if (!surface) return <Navbar {...props} />;

  return (
    <div className="pb-headergroup">
      <Navbar {...props} />
      <Switcher surface={surface} />
    </div>
  );
}
