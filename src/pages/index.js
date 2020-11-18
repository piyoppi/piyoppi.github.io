import React from "react"
import ToppageFirstScreen from "./../components/toppageFirstScreen"
import ArticleScreen from "./../components/articleScreen"
import "./index.css"
import styles from './index.module.css'

import AuthorImage from './../../assets/image/author.png'

export default function Home() {
  return(
    <div>
      <ToppageFirstScreen />

      <div className={styles.wave}></div>
      <ArticleScreen gray>
        <div className={styles.author}>
          <h2>著者近影など</h2>
          <div className={styles.authorImage}>
            <img src={AuthorImage} alt="著者近影" />
          </div>
          <div className={styles.authorName}>ぴよっぴ</div>
          <p>いろいろつくったりします。最近はウェブサービスをつくったりしています。</p>
          <ul className={styles.authorAccounts}>
            <li><a href="https://twitter.com/piyorinpa" target="_blank" rel="noreferrer noopener">Twitter</a></li>
            <li><a href="https://github.com/piyoppi" target="_blank" rel="noreferrer noopener">Github</a></li>
            <li><a href="https://garakuta-toolbox.hatenablog.com" target="_blank" rel="noreferrer noopener">Blog</a></li>
          </ul>
        </div>
      </ArticleScreen>
      <ArticleScreen>
        <h2>つくっているものたち</h2>
      </ArticleScreen>
    </div>
  )
}
