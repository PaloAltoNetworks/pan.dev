import React from "react";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import "./NavbarDocItems.scss";

function NavbarDocItems({ apiDocs, docs, colorClass, productTitle }) {
  if (!apiDocs && !docs) return null;
  const hasApiDocs = apiDocs?.length > 0;
  const hasDocs = docs?.length > 0;

  const apiDocItems = hasApiDocs && (
    <div className="navbar-doc-items">
      <span className="navbar-doc-items__title">API Reference</span>
      <div className="navbar-doc-items__links">
        {Object.values(apiDocs).map((apiDoc, i) => (
          <li key={i}>
            <NavbarNavLink
              className="dropdown__link"
              to={apiDoc.to}
              label={apiDoc.label}
            />
          </li>
        ))}
      </div>
    </div>
  );

  const docItems = hasDocs && (
    <div className="navbar-doc-items">
      <span className="navbar-doc-items__title">Developer Guides</span>
      <div className="navbar-doc-items__links">
        {Object.values(docs).map((doc, i) => (
          <li key={i}>
            <NavbarNavLink
              className="dropdown__link"
              to={doc.to}
              label={doc.label}
            />
          </li>
        ))}
      </div>
    </div>
  );

  return (
    <div className="navbar-doc-items-container">
      <h2 className="navbar-doc-items__product-title">{productTitle}</h2>
      <div className={`navbar-doc-items__section-divider ${colorClass}`} />
      <ul className="navbar-doc-items__list-container">
        {apiDocItems}
        {docItems}
      </ul>
    </div>
  );
}

export default NavbarDocItems;
