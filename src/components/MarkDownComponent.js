import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import Button from "./Button";

const MarkDownComponent = props => {
  return (
    (props.markdown && (
      <Markdown
        options={{
          overrides: {
            a: {
              component: Button,
              props: { className: "foo" }
            }
          }
        }}
      >
        {props.markdown}
      </Markdown>
    )) || <div />
  );
};

export default MarkDownComponent;
