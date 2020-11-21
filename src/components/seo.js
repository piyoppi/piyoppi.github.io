import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO(props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  return (
    <Helmet
      title={props.title || site.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: props.description || site.siteMetadata.description,
        }
      ]}
    />
  )
}
