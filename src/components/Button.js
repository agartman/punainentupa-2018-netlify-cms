import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { disabled, title, className, type, onClick } = props
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={'btn btn-1 ' + className}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
}

export default Button
