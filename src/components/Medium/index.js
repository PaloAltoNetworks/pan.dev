import Link from "@docusaurus/Link";
import classnames from "classnames";
import React from "react";
import styles from "./styles.module.css";

const ITEMS_PER_ROW = 3; // Sync up the item col width if this is changed.

const blog_json = require("./blogs.json");

const blogs = blog_json.items.slice(0, 9);

function Medium() {
  return (
    <div className="container">
      <div className="text--center margin-top--lg">
        <h1>Read our latest developer blogs</h1>
      </div>
      <div className="container padding-top--lg">
        {blogs && blogs.length && (
          <div className={classnames("row")}>
            {blogs.map((blog) => (
              <div key={blog.title} className="col col--4 margin-bottom--lg">
                <div className={classnames("card", styles.showcaseBlog)}>
                  <div className="card__image">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className={styles.blogImage}
                    />
                  </div>
                  <div className="card__body">
                    <div className="avatar padding-left--sm">
                      <div className="avatar__intro margin-left--none">
                        <h3 className="avatar__name">{blog.title}</h3>
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <p
                          className={classnames(
                            "text text--secondary",
                            styles.blogAuthor
                          )}
                        >
                          By: {blog.author}
                        </p>
                      </div>
                    </div>
                    <br />
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <div className={styles.content}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: blog.content,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card__footer">
                    <Link
                      className="button button--outline button--primary button--block"
                      variant="plain"
                      href={blog.link}
                      target="_blank"
                      uppercase="false"
                    >
                      {" "}
                      Read More on Medium
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Medium;
