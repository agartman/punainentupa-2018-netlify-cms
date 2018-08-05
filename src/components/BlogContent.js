import React, { Children } from "react";
import Link from "gatsby-link";
import { HTMLContent } from "../components/Content";

export const BlogContent = ({className, blogPosts, html}) => (
  <div className={className}>
    <HTMLContent content={html} />
    <ul>
      {blogPosts.map(
        ({ node: { id, fields: { slug }, frontmatter: { title } } }) => {
          return (
            <li key={id}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        }
      )}
    </ul>
  </div>
);




export default BlogContent;
