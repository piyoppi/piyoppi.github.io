import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useLocation } from "@reach/router"
import Layout from '../layouts/default'
import * as styles from './post.module.css'
import './slug.css'
import TagList from '../components/TagList'
import HeadingNavLinksContainer from '../components/HeadingNavLinksContainer'

export default function BlogPost({ data }) {
  const description = data.mdx.excerpt
  const location = useLocation()

  useEffect(() => {
    import('@piyoppi/counter-button')
  })

  return (
    <Layout title={data.mdx.frontmatter.title} description={description}>
      <HeadingNavLinksContainer >
        <Link to="/weblog">&lt; 一覧へ戻る</Link>
      </HeadingNavLinksContainer>
      <article className="blogArticle">
        <header>
          <h1 className={styles.postTitle}><a href={location.href}>{ data.mdx.frontmatter.title }</a></h1>
          <div className={styles.articleSummary}>
            <TagList tags={data.mdx.frontmatter.tags} />
            <time dateTime={data.mdx.frontmatter.date}>
              { data.mdx.frontmatter.date }
            </time>
          </div>
        </header>

        <MDXRenderer>
          { data.mdx.body }
        </MDXRenderer>

        <counter-container apiurl={data.site.siteMetadata.counterUrl}>
          <counter-increment-button>
            <span>
              &#x1f31f;
              <counter-display>
                <span slot="loading">...</span>
              </counter-display>
            </span>
          </counter-increment-button>
        </counter-container>
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
        tags
      }
      body
      excerpt(pruneLength: 100, truncate: true)
    }
    site {
      siteMetadata {
        counterUrl
      }
    }
  }`
