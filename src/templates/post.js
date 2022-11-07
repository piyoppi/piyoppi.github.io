import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { useLocation } from "@reach/router"
import Layout from "../layouts/default"
import * as styles from "./post.module.css"
import "./slug.css"
import TagList from "../components/TagList"
import HeadingNavLinksContainer from "../components/HeadingNavLinksContainer"
import "katex/dist/katex.min.css"

export default function BlogPost({ data, children }) {
  const description = data.mdx.excerpt
  const location = useLocation()

  useEffect(() => {
    import("@piyoppi/counter-button")
  })

  return (
    <Layout title={data.mdx.frontmatter.title} description={description}>
      <HeadingNavLinksContainer>
        <Link to="/weblog">&lt; 一覧へ戻る</Link>
      </HeadingNavLinksContainer>
      <article className="blogArticle">
        <header>
          <h1 className={styles.postTitle}>
            <a href={location.href}>{data.mdx.frontmatter.title}</a>
          </h1>
          <div className={styles.articleSummary}>
            <TagList tags={data.mdx.frontmatter.tags} />
            <time dateTime={data.mdx.frontmatter.date}>
              {data.mdx.frontmatter.date}
            </time>
          </div>
        </header>

        {children}

        <div className={styles.counterSection}>
          <counter-container apiurl={data.site.siteMetadata.counterUrl}>
            <counter-increment-button>
              <span className={styles.likeButton}>
                🌟
                <span className={styles.likeCount}>
                  <counter-display>
                    <span slot="loading">...</span>
                    <span slot="error">0</span>
                  </counter-display>
                </span>
              </span>
            </counter-increment-button>
          </counter-container>
          <div className={styles.counterNote}>
            <p>
              このカウンタは{" "}
              <a href="https://github.com/piyoppi/counter-tools">
                @piyoppi/counter-tools
              </a>{" "}
              を使っています。
            </p>
            <p>クリックすると匿名でいいねできます。</p>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
      excerpt(pruneLength: 100)
    }
    site {
      siteMetadata {
        counterUrl
      }
    }
  }
`
