import React from 'react'
import NavbarNavLink from '../NavbarItem/NavbarNavLink'

function NavbarDocItems({ apiDocs, docs }) {
  const apiDocItems = apiDocs &&
    <>
      <span className="navbar-section-title">API Reference</span>
      <div className="navbar-doc-items"> 
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
    </>

  const docItems = docs && 
    <>
      <span className="navbar-section-title">Docs</span>
      <div className="navbar-doc-items"> 
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
    </>

  return (
    <div className="navbar-doc-items-container">
      <ul className="navbar-doc-items">
        {apiDocs && apiDocItems}
        {docs && docItems}
      </ul>
    </div>
  )
}

export default NavbarDocItems