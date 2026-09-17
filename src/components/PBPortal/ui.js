import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

export function PBButton({
  as: Component = "button",
  children,
  className,
  external,
  href,
  to,
  variant = "default",
  ...props
}) {
  const classes = clsx("pb-btn", variant, className);
  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export function PBCard({ children, className, external, to, href, ...rest }) {
  const classes = clsx("pb-card", className);
  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export function PBBadge({ children, tone = "default", className }) {
  return <span className={clsx("pb-badge", tone, className)}>{children}</span>;
}

export function PBCodePanel({ children, copyText }) {
  const [copied, setCopied] = useState(false);
  const text =
    copyText || (typeof children === "string" ? children : String(children));
  return (
    <div className="pb-code-panel">
      <button
        className={clsx("copy-btn", copied && "copied")}
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
          });
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}
