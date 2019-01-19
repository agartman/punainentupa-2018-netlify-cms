import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Content, { HTMLContent } from "../components/Content";
import TemplateWrapper from "../layouts/index";
import { graphql } from "gatsby";
import Button from "../components/Button";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  date
}) => {
  const titleContent = (
    <React.Fragment>
      {title}
      <time>{date}</time>
    </React.Fragment>
  );
  return (
    <TemplateWrapper className={"blog"}>
      <Content
        className={`section angled hero bg-red blog-hero`}
        content={titleContent}
      />
      <HTMLContent
        className={`section angled bg-white textleft blog-post`}
        content={content}
      />
      <div className="blog-footer">
        <Button
          className="btn btn-1"
          title={"\u{21A9}"}
          onClick={e => {
            e.preventDefault();
            window.history.back();
          }}
        />
      </div>
    </TemplateWrapper>
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
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
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
    }
  }
`;
