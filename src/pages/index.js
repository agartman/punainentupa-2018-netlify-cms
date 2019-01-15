import React from "react";
import PropTypes from "prop-types";
import { MarkDownContent } from "../components/Content";
import { BlogContent } from "../components/BlogContent";
import ContactForm from "../components/ContactForm";
import { graphql } from "gatsby";
import TemplateWrapper from "../layouts";
const getSectionBySectionType = (
  {
    node: {
      rawMarkdownBody,
      html,
      frontmatter: { title, sectionType, theme, class: className, alignment }
    }
  },
  edges
) => {
  const commonProps = {
    key: title,
    className: `section ${sectionType} angled bg-${theme} text${alignment} ${
      className ? className : ""
    }`
  };
  switch (sectionType) {
    case "contact":
      return <ContactForm {...commonProps} />;
    case "blog":
      const blogPosts = edges.filter(
        edge => edge.node.frontmatter.templateKey === "blog-post"
      );
      return <BlogContent {...commonProps} blogPosts={blogPosts} html={html} />;
    default:
      return <MarkDownContent {...commonProps} markdown={rawMarkdownBody} />;
  }
};
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
      <TemplateWrapper>
        <div className="container">
          {edges
            .filter(edge => edge.node.frontmatter.templateKey === "index")
            .sort((a, b) => {
              return (
                a.node.frontmatter.orderNumber - b.node.frontmatter.orderNumber
              );
            })
            .map(sectionNode => getSectionBySectionType(sectionNode, edges))}
        </div>
      </TemplateWrapper>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          rawMarkdownBody
          fields {
            slug
          }
          frontmatter {
            title
            theme
            orderNumber
            templateKey
            sectionType
            alignment
            class
            active
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
