import { graphql } from 'gatsby'
import React from 'react'
import { StaticQuery } from 'gatsby'
import SectionPage from '../SectionPage'
export default class SectionPageFactory extends React.Component {
  render() {
    const { language } = this.props

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark {
              edges {
                node {
                  id
                  html
                  rawMarkdownBody
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    theme
                    orderNumber
                    templateKey
                    sectionType
                    alignment
                    class
                    active
                    language
                    date(formatString: "MMMM DD, YYYY")
                  }
                }
              }
            }
          }
        `}
        render={data => <SectionPage data={data} language={language} />}
      />
    )
  }
}
