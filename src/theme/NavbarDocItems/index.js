import React from 'react'
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink'
import './NavbarDocItems.scss'

function NavbarDocItems({ apiDocs, docs, colorclass, productTitle }) {
  if (!apiDocs && !docs) return null; 
  
  const apiDocItems = apiDocs &&
    <div className="navbar-doc-items">
      <span className="navbar-doc-items__title">API Reference</span>
      <div className="navbar-doc-items__links"> 
        {Object.values(apiDocs).map(apiDoc => 
          <li>
            <NavbarNavLink
              className="dropdown__link"
              to={apiDoc.to}
              label={apiDoc.label}
            />
          </li>
        )}
      </div>
    </div>

  const docItems = docs && 
    <div className="navbar-doc-items">
      <span className="navbar-doc-items__title">Docs</span>
      <div className="navbar-doc-items__links"> 
        {Object.values(docs).map(doc =>
          <li>
            <NavbarNavLink
              className="dropdown__link"
              to={doc.to}
              label={doc.label}
            />
          </li>
        )}
      </div>
    </div>

  return (
    <div className="navbar-doc-items-container">
      <h2 className={`navbar-doc-items__product-title ${colorclass}`}>{productTitle}</h2>
      <ul className="navbar-doc-items__list-container">
        {apiDocs && apiDocItems}
        {docs && docItems}
      </ul>
    </div>
  )
}

export default NavbarDocItems