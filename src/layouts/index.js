import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../css/style.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Atte Gartman - Punainen Tupa Solutions" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
