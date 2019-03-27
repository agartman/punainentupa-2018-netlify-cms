import React from "react";
import Link from "gatsby-link";
import { HTMLContent } from "../components/Content";
import PropTypes from "prop-types";

export const BlogContent = ({ className, blogPosts, html }) => (
  <div className={className}>
    <HTMLContent content={html} />
    <ul>
      {blogPosts.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { title, active, date }
          }
        }) => {
          return (
            active === true && (
              <li key={id}>
                <Link to={slug}>{title}</Link>
                <time>{date}</time>
              </li>
            )
          );
        }
      )}
    </ul>
  </div>
);

export default BlogContent;

BlogContent.propTypes = {
  className: PropTypes.string,
  blogPosts: PropTypes.array,
  html: PropTypes.string
};
