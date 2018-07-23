import React from "react";
import PropTypes from "prop-types";
import { HTMLContent } from "../components/Content";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: sections } = data.allMarkdownRemark;

    return (
      <div className="container">
        {sections
          .sort((a, b) => {
            return (
              a.node.frontmatter.orderNumber - b.node.frontmatter.orderNumber
            );
          })
          .map(({ node: section }) => (
            <HTMLContent
              key={section.orderNumber}
              className={`section ${section.frontmatter.sectionType} angled bg-${
                section.frontmatter.theme
              } text${section.frontmatter.alignment}`}
              content={section.html}
            />
          ))}
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
          }
        }
      }
    }
  }
`;
