import React from "react"
import PostsList from "../../components/weblog/postsList"
import * as styles from "./index.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "./../../layouts/default"
import ToolboxImage from "./../../../assets/images/toolbox.png"
import { createPostsFromMdx } from "../../lib/posts"

export default function Weblog() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {internal: {contentFilePath: {regex: "/posts/"}}}
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes.map(item => createPostsFromMdx(item))

  return (
    <Layout title="ウェブログ">
      <header className={styles.headerLogo}>
        <img src={ToolboxImage} alt="" className={styles.headerLogoImage} />
        <h1>がらくたツールボックスのウェブログ</h1>
      </header>
      <PostsList posts={posts} />
    </Layout>
  )
}
