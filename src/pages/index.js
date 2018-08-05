import React from "react";
import PropTypes from "prop-types";
import { HTMLContent } from "../components/Content";
import { BlogContent } from "../components/BlogContent";
import ContactForm from "../components/ContactForm";
const getSectionBySectionType = (
  {
    node: {
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
      return <ContactForm  {...commonProps} />;
    case "blog":
      const blogPosts = edges.filter(
        edge => edge.node.frontmatter.templateKey === "blog-post"
      );
      return (
        <BlogContent {...commonProps} blogPosts={blogPosts} html={html} />
      );
    default:
      return <HTMLContent {...commonProps} content={html} />;
  }
};
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;

    return (
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
          }
        }
      }
    }
  }
`;
