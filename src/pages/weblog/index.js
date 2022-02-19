import React from "react"
import PostsList from '../../components/weblog/postsList'
import * as styles from './index.module.css'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from './../../layouts/default'
import ToolboxImagte from "./../../../assets/image/toolbox.png"

export default function Weblog() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {}, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            title
            date
          }
          slug
        }
      }
    }`)

  const posts = data.allMdx.nodes.map(item => ({
    title: item.frontmatter.title,
    date: item.frontmatter.date,
    url: `/weblog/${item.slug}`
  }))

  return (
    <Layout title="ウェブログ">
      <header className={styles.headerLogo}>
        <img src={ToolboxImagte} alt="" className={styles.headerLogoImage}/>
        <h1>がらくたツールボックスのウェブログ</h1>
      </header>
      <PostsList posts={posts} />
    </Layout >
  )
}
