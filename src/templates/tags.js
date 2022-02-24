import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from './../layouts/default'
import * as styles from './tags.module.css'
import PostsList from '../components/weblog/postsList'
import { createPostsFromMdx } from '../lib/posts'
import HeadingNavLinksContainer from '../components/HeadingNavLinksContainer'

export default function Tags({pageContext, data}) {
  const posts = data.allMdx.nodes.map(item => createPostsFromMdx(item))

  return (
    <Layout>
      <HeadingNavLinksContainer>
        <Link to="/weblog">&lt; 一覧へ戻る</Link>
      </HeadingNavLinksContainer>
      <header className={styles.header}>
        <h1>&#x1F3F7;&#xFE0F; { pageContext.tagName }</h1>
      </header>
      <article>
        <PostsList posts={posts} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query TagItems($tagName: String) {
    allMdx(filter: {frontmatter: {tags: {eq: $tagName}}}, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date
          tags
        }
        slug
      }
    }
  }`
