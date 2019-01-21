import React from "react";
import Markdown from "markdown-to-jsx";
import Link from "gatsby-link";

const MarkDownComponent = props => {
  return (props.markdown && <Markdown>{props.markdown}</Markdown>) || <div />;
};

export default MarkDownComponent;
