import React from "react";
import PropTypes from "prop-types";
import SectionPageFactory from "../components/queries/Queries";

export default class EnIndexPage extends React.Component {
  render() {
    return <SectionPageFactory {...this.props} language="en" />;
  }
}

EnIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};
