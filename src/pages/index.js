import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: sections } = data.allMarkdownRemark;

    return (
      <div className="container">
        {sections.map(({ node: section }) => (
          <div className="content" key={section.id}>
            <p>
              <Link className="has-text-primary" to={section.fields.slug}>
                {section.frontmatter.theme}
              </Link>
            </p>
          </div>
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
