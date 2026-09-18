import React from "react";
import Link from "@docusaurus/Link";
import { GUIDE_FLAT } from "./guideNav";

const norm = (p) => (p || "").replace(/\/+$/, "");

export function PBPrevNext({ pathname }) {
  const here = norm(pathname);
  const idx = GUIDE_FLAT.findIndex((i) => norm(i.to) === here);
  if (idx === -1) return null;
  const prev = idx > 0 ? GUIDE_FLAT[idx - 1] : null;
  const next = idx < GUIDE_FLAT.length - 1 ? GUIDE_FLAT[idx + 1] : null;
  if (!prev && !next) return null;
  return (
    <div className="pb-prevnext">
      {prev ? (
        <Link to={prev.to}>
          <div className="lbl">Previous</div>
          <div className="ttl">{prev.label}</div>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link className="nxt" to={next.to}>
          <div className="lbl">Next</div>
          <div className="ttl">{next.label}</div>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
