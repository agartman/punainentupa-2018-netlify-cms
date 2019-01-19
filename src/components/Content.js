import React from "react";
import PropTypes from "prop-types";
import MarkDownComponent from "./MarkDownComponent";

export const HTMLContent = ({ content, className }) => (
  <div className={className}>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export const MarkDownContent = props => (
  <div className={props.className}>
    <MarkDownComponent className={props.className} markdown={props.markdown} />
    {props.children}
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
  children: PropTypes.any,
  markdown: PropTypes.string,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
