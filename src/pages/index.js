import React from "react";
import PropTypes from "prop-types";
import { HTMLContent } from "../components/Content";
import ContactForm from "../components/ContactForm";
const getSectionBySectionType = (
  {
    node: {
      html,
      orderNumber,
      frontmatter: { sectionType, theme, class: className, alignment }
    }
  },
  edges
) => {
  console.log(edges);
  switch (sectionType) {
    case "contact":
      return (
        <ContactForm
          classNames={`section ${sectionType} angled bg-${theme} text${alignment} ${
            className ? className : ""
          }`}
        />
      );
    case "blog":
      const blogPosts = edges.filter(
        edge => edge.node.frontmatter.templateKey === "blog-post"
      );
      return (
        <HTMLContent
          key={orderNumber}
          className={`section ${sectionType} angled bg-${theme} text${alignment} ${
            className ? className : ""
          }`}
          content={html}
        />
      );
    default:
      return (
        <HTMLContent
          key={orderNumber}
          className={`section ${sectionType} angled bg-${theme} text${alignment} ${
            className ? className : ""
          }`}
          content={html}
        />
      );
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
    allMarkdownRemark(filter: { frontmatter: { theme: { ne: null } } }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
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
