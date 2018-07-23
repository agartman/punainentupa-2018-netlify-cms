import React from "react";
import PropTypes from "prop-types";
import { HTMLContent } from "../components/Content";
import ContactForm from "../components/ContactForm";

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
          .map(
            ({
              node: {
                html,
                orderNumber,
                frontmatter: { sectionType, theme, class: className, alignment }
              }
            }) => (
              sectionType != 'contact' ? 
              <HTMLContent
                key={orderNumber}
                className={`section ${sectionType} angled bg-${theme} text${alignment} ${
                  className ? className : ""
                }`}
                content={html}
              /> : <ContactForm />
            )
          )}
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
