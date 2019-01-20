import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import Layout from "../layouts/index";
import { graphql } from "gatsby";
import LeftArrow from "../img/left.png";
export const BlogPostTemplate = ({
  content,
  title,
  date,
  description,
  slug
}) => {
  const titleContent = (
    <React.Fragment>
      {title}
      <time>{date}</time>
    </React.Fragment>
  );
  return (
    <Layout
      className={"blog"}
      article={true}
      title={title}
      description={description}
      slug={slug}
    >
      <Content
        className={`section angled hero bg-red blog-hero`}
        content={titleContent}
      />
      <HTMLContent
        className={`section angled bg-white textleft blog-post`}
        content={content}
      />
      <div className="blog-footer">
        <div
          onClick={() => {
            window.history.back();
          }}
        >
          <img src={LeftArrow} className="arrow" />
        </div>
      </div>
    </Layout>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      slug={post.fields.slug}
    />
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        active
      }
      fields {
        slug
      }
    }
  }
`;
