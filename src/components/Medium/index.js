import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const ITEMS_PER_ROW = 3; // Sync up the item col width if this is changed.

const blog_json = require("./blogs.json");

const blogs = blog_json.items;

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
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <h2 className="avatar__name">{blog.title}</h2>
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <h6 className="avatar__name">By {blog.author}</h6>
                      </div>
                    </div>
                    <br />
                    <div className="avatar">
                      <div className="avatar__intro margin-left--none">
                        <div className={styles.content}>
                          <div
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card__footer">
                    <Link
                      className={styles.blogFooter}
                      href={blog.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
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
