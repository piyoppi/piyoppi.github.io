import * as React from "react"
import * as styles from "./TagItem.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function TagItem({ tagName }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          weblog {
            tagPath
          }
        }
      }
    }
  `)

  return (
    <span className={styles.tagItem}>
      <Link to={data.site.siteMetadata.weblog.tagPath + tagName}>
        {tagName}
      </Link>
    </span>
  )
}
