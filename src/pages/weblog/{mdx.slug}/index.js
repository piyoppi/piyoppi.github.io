import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useLocation } from "@reach/router"
import Layout from './../../../layouts/default'
import { Helmet } from "react-helmet"
import * as styles from './index.module.css'
import './slug.css'

export default function BlogPost({ data }) {
  const description = data.mdx.rawBody.replace(/\n/g, '').replace(/(--+).*?(--+)/g, '').substr(0, 100) + '...'
  const location = useLocation()

  return (
    <Layout title={data.mdx.frontmatter.title} description={description}>
      <nav className={styles.headingNavigation}>
        <Link to="/weblog">&lt; 一覧へ戻る</Link>
      </nav>
      <article className="blogArticle">
        <header>
          <h1 className={styles.postTitle}><a href={location.href}>{ data.mdx.frontmatter.title }</a></h1>
          <time dateTime={data.mdx.frontmatter.date}>
            { data.mdx.frontmatter.date }
          </time>
        </header>

        <MDXRenderer>
          { data.mdx.body }
        </MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    body
    rawBody
  }
}`