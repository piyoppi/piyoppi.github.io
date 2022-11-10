import React from "react"
import ToppageFirstScreen from "./../components/toppageFirstScreen"
import ArticleScreen from "./../components/articleScreen"
import SectionBox from "./../components/sectionBox"
import WorksSection from "./../components/worksSection"
import WaveHorizon from "./../components/waveHorizon"
import Anchor from "./../components/anchor"
import SEO from "./../components/seo"
import WebFonts from "./../components/webFonts"
import Footer from "./../components/footer"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./index.css"
import * as styles from "./index.module.css"
import { runSync } from '@mdx-js/mdx'
import {Fragment, jsx, jsxs} from 'react/jsx-runtime'
import {useMDXComponents} from '@mdx-js/react'

import AuthorImage from "./../../assets/images/author.png"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { frontmatter: { page: { eq: "/" } } }
        sort: { order: ASC, fields: frontmatter___rank }
      ) {
        nodes {
          frontmatter {
            title
            sectionKey
            wtag
            link
            logo {
              publicURL
            }
            rank
          }
          internal {
            contentFilePath
          }
          body
          fields {
            compiled
          }
        }
      }
      allTopYaml {
        nodes {
          sections {
            key
            name
          }
        }
      }
    }
  `)

  const sections = data.allTopYaml.nodes[0].sections
  const cards = new Map()

  for(const node of data.allMdx.nodes) {
    if (!cards.has(node.frontmatter.sectionKey)) {
      cards.set(node.frontmatter.sectionKey, [])
    }

    cards.get(node.frontmatter.sectionKey).push(node)
  }

  return (
    <div>
      <WebFonts />
      <SEO />

      <ToppageFirstScreen />

      <div className={styles.wave}></div>

      <ArticleScreen content gray>
        <div className={styles.author}>
          <h2 id="intro">著者近影など</h2>
          <div className={styles.authorImage}>
            <img src={AuthorImage} alt="著者近影" />
          </div>
          <div className={styles.authorName}>ぴよっぴ</div>
          <p>
            いろいろつくったりします。最近はウェブサービスをつくったりしています。
          </p>
          <ul className={styles.authorAccounts}>
            <li>
              <a
                href="https://twitter.com/piyorinpa"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/piyoppi"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://garakuta-toolbox.hatenablog.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Blog(old)
              </a>
            </li>
            <li>
              <Link to="/weblog">Blog</Link>
            </li>
          </ul>
        </div>
      </ArticleScreen>
      <div className={styles.waveBgWhite}></div>

      {sections.map(section => (
        <div key={section.key}>
          <ArticleScreen content>
            <h2 id={section.key}>
              {" "}
              <Anchor anchorId={section.key} /> {section.name}
            </h2>
            {cards.get(section.key).map(card => (
              <SectionBox key={card.frontmatter.title}>
                <WorksSection
                  title={card.frontmatter.title}
                  link={card.frontmatter.link}
                  logo={
                    card.frontmatter.logo
                      ? card.frontmatter.logo.publicURL
                      : null
                  }
                  technicalElements={card.frontmatter.wtag}
                >
                  {runSync(card.fields.compiled, {Fragment, jsx, jsxs, useMDXComponents}).default()}
                </WorksSection>
              </SectionBox>
            ))}
          </ArticleScreen>

          <WaveHorizon />
        </div>
      ))}

      <Footer />
    </div>
  )
}
