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
            siteName
            siteUrl
            twitter {
              card
              image
            }
            og {
              locale
              image
            }
          }
        }
      }
    `
  )

  const title = props.title ? `${props.title} | ${site.siteMetadata.title}` : site.siteMetadata.title
  const description = props.description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        },
        {
          name: 'twitter:card',
          content: site.siteMetadata.twitter.card
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        },
        {
          name: 'twitter:image',
          content: site.siteMetadata.twitter.image
        },
        {
          name: 'og:locale',
          content: site.siteMetadata.og.locale
        },
        {
          name: 'og:tyle',
          content: 'website'
        },
        {
          name: 'og:title',
          content: title
        },
        {
          name: 'og:description',
          content: description
        },
        {
          name: 'og:url',
          content: site.siteMetadata.siteUrl
        },
        {
          name: 'og:site_name',
          content: site.siteMetadata.siteName
        },
        {
          name: 'og:image',
          content: site.siteMetadata.og.image
        },
      ]}
    />
  )
}
