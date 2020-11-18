import React from "react"
import ToppageFirstScreen from "./../components/toppageFirstScreen"
import ArticleScreen from "./../components/articleScreen"
import SectionBox from "./../components/sectionBox"
import WorksSection from "./../components/worksSection"
import "./index.css"
import styles from './index.module.css'

import AuthorImage from './../../assets/image/author.png'
import DunogeonLogo from './../../assets/image/mindan_logo.png'
import PicopiyoLogo from './../../assets/image/picopiyo_logo.png'

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

        <SectionBox>
          <WorksSection
            title="みんなでつくるダンジョン"
            link="https://dungeon.garakuta-toolbox.com"
            logo={DunogeonLogo}
            technicalElements={['Vue.js', 'Pixi.js', 'Ruby on Rails']}
          >
          </WorksSection>
        </SectionBox>

        <SectionBox>
          <WorksSection
            title="ぴこぴよ"
            link="https://picopiyo.garakuta-toolbox.com"
            logo={PicopiyoLogo}
            technicalElements={['AWS Lambda + API Gateway', 'AWS S3 + CloudFront', 'React']}
          >
            <p>ドット絵を拡大してツイッターに投稿できるサービスです</p>

            <ul>
              <li>原寸大のドット絵を用意することで、ドット絵を拡大して投稿できます</li>
              <li>原寸大のドット絵と拡大したドット絵を並べて投稿できます</li>
            </ul>
          </WorksSection>
        </SectionBox>
      </ArticleScreen>
    </div>
  )
}
