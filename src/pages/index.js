import React from "react";
import PropTypes from "prop-types";
import { HTMLContent } from "../components/Content";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: sections } = data.allMarkdownRemark;

    return (
      <div className="container">
        {sections.map(({ node: section }) => (
          <HTMLContent
            className={`angled bg-red ${section.frontmatter.theme}`}
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
            templateKey
          }
        }
      }
    }
  }
`;
