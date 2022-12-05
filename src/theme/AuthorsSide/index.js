import React from "react";
import clsx from "clsx";
import { useDoc } from "@docusaurus/theme-common/internal";
import Link from "@docusaurus/Link";
// Component responsible for the authors layout
import globalAuthors from "../../../authors.json";

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

export default function AuthorsSide({ className }) {
  const { metadata } = useDoc();
  const authors = metadata.frontMatter.authors ?? [];
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  const allAuthors = [];
  authors.forEach((author) => {
    if (globalAuthors[author]) {
      allAuthors.push(globalAuthors[author]);
    }
  });
  if (allAuthors.length === 0) {
    return null;
  }

  return (
    <>
      <div className="row">
        <h4>Authors: </h4>
      </div>
      {allAuthors.map((author, idx) => (
        <div className="row" key={idx}>
          <div className={clsx("avatar margin-bottom--sm", className)}>
            {author.image_url && (
              <MaybeLink href={author.url} className="avatar__photo-link">
                <img
                  className="avatar__photo"
                  src={author.image_url}
                  alt={author.name}
                />
              </MaybeLink>
            )}
            {author.name && (
              <div
                className="avatar__intro"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="avatar__name">
                  <MaybeLink href={author.url} itemProp="url">
                    <span itemProp="name">{author.name}</span>
                  </MaybeLink>
                </div>
                {author.title && (
                  <small className="avatar__subtitle" itemProp="description">
                    {author.title}
                  </small>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
