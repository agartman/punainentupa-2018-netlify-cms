import React from "react";
import PropTypes from "prop-types";
import MarkDownComponent from "./MarkDownComponent";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const MarkDownContent = ({ markdown, className }) => (
  <div className={className}>
    <MarkDownComponent className={className} markdown={markdown} />
  </div>
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};

MarkDownContent.propTypes = {
  markdown: PropTypes.string,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
