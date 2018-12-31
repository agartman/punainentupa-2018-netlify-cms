import React from "react";
import PropTypes from 'prop-types'

const Button = props => {
  const { disabled, title, className, type, children } = props;
  const buttonText = children && children[0] ? children[0] : title
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        title={buttonText}
        className={"btn btn-1 " + className}
      >
        {buttonText}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.array
};

export default Button;
