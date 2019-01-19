import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'typeface-rubik'
import 'typeface-josefin-sans'
import '../css/style.scss'

const TemplateWrapper = ({ children, className }) => (
  <div>
    <Helmet title="Atte Gartman - Punainen Tupa Solutions" />
    <div className={className}>{children}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
