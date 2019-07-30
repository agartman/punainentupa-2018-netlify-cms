import React from 'react'
import PropTypes from 'prop-types'
import TemplateWrapper from '../layouts'
import { SectionTunnel } from './SectionTunnel'

export default class SectionPage extends React.Component {
  render() {
    const { data, language } = this.props
    const { edges } = data.allMarkdownRemark

    return (
      <TemplateWrapper>
        <div className="container">
          {edges
            .filter(
              edge =>
                edge.node.frontmatter.templateKey === 'index' &&
                edge.node.frontmatter.language === language
            )
            .sort((a, b) => {
              return (
                a.node.frontmatter.orderNumber - b.node.frontmatter.orderNumber
              )
            })
            .map(sectionNode => SectionTunnel(sectionNode, edges))}
        </div>
      </TemplateWrapper>
    )
  }
}

SectionPage.propTypes = {
  language: PropTypes.any,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
