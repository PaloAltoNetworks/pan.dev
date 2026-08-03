import React from "react";
import Link from "@docusaurus/Link";
import "./styles.scss";

function LinkList({ title, subtitle, links }) {
  return (
    <div className="link-list">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <ul>
        {links.map(({ text, url }) => (
          <Link to={url} key={url}>
            <li>{text}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
