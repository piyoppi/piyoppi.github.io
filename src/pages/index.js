import React from "react"
import ToppageFirstScreen from "./../components/toppageFirstScreen"
import ArticleScreen from "./../components/articleScreen"
import SectionBox from "./../components/sectionBox"
import WorksSection from "./../components/worksSection"
import WaveHorizon from "./../components/waveHorizon"
import LibraryLinks from "./../components/libraryLinks"
import SEO from "./../components/seo"
import WebFonts from "./../components/webFonts"
import Footer from "./../components/footer"
import "./index.css"
import styles from './index.module.css'

import AuthorImage from './../../assets/image/author.png'
import DunogeonLogo from './../../assets/image/mindan_logo.png'
import PicopiyoLogo from './../../assets/image/picopiyo_logo.png'
import IconClubLogo from './../../assets/image/iconclub_logo.png'
import MemorianLogo from './../../assets/image/memorian_logo.png'
import StageDesignerImage from './../../assets/image/stage-designer.png'

import CrossKeyImage from './../../assets/image/crosskey.png'
import ZKeyImage from './../../assets/image/zkey.png'
import XKeyImage from './../../assets/image/xkey.png'

export default function Home() {
  return(
    <div>
      <WebFonts />
      <SEO />

      <ToppageFirstScreen />

      <div className={styles.wave}></div>

      <ArticleScreen content gray>
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

      <div className={styles.waveBgWhite}></div>

      <ArticleScreen content>
        <h2>つくっているものたち</h2>

        <SectionBox>
          <WorksSection
            title="みんなでつくるダンジョン"
            link="https://dungeon.garakuta-toolbox.com"
            logo={DunogeonLogo}
            technicalElements={['Vue.js', 'Pixi.js', 'Ruby on Rails']}
          >
            <iframe src="https://dungeon.garakuta-toolbox.com/player" className={styles.dungeonPlayer}></iframe>
            <div className={styles.controllerKeys}>
              <p>マップの読み込みが完了するまでお待ちください。クリックするとキー操作できます。</p>
              <div className={styles.controllerKey}>
                <img src={CrossKeyImage} className={styles.crossKey} alt="十字キー" /> 移動
              </div>
              <div className={styles.controllerKey}>
                <img src={ZKeyImage} className={styles.charKey} alt="Zキー" /> ジャンプ
              </div>
              <div className={styles.controllerKey}>
                <img src={XKeyImage} className={styles.charKey} alt="Xキー" /> 調べる
              </div>
            </div>
            <p>マップをつくって・つなげて・たんけんできるウェブサービスです</p>
            <ul>
              <li>上記のようなマップをかんたんにブラウザでつくれます</li>
              <li>つくったマップは公開して他の人に遊んでもらうことができます</li>
              <li>じぶんや他の人のマップとつなげることができます</li>
              <li>マップをたんけんして遊ぶことができます</li>
            </ul>
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

      <WaveHorizon />

      <ArticleScreen content>
        <h2> 実験的な開発 / ライブラリ</h2>
        <SectionBox>
          <WorksSection
            title="picopico-pad"
            technicalElements={['JavaScript', 'GamePad API']}
          >
            <p>ブラウザでゲームパッドをお手軽に使うためのライブラリ</p>
            <LibraryLinks
              packageHref="https://www.npmjs.com/package/@piyoppi/picopico-pad"
              sourceCodeHref="https://github.com/piyoppi/picopico-pad"
              sampleHref="https://garakuta-toolbox.com/gamepad_playground"
            />
          </WorksSection>
        </SectionBox>

        <SectionBox>
          <WorksSection
            title="pixelart-element"
            technicalElements={['JavaScript', 'Custom Elements']}
          >
            <p>ドット絵を拡大してもきれいに表示されるカスタム要素</p>
            <p><a href="https://picopiyo.garakuta-toolbox.com" target="_blank" rel="noreferrer noopener">ぴこぴよv2</a> でも使われています</p>
            <LibraryLinks
              packageHref="https://www.npmjs.com/package/@piyoppi/pixelart-element"
              sourceCodeHref="https://github.com/piyoppi/pixelart-element"
              sampleHref="https://garakuta-toolbox.com/pixelart-element"
            />
          </WorksSection>
        </SectionBox>

        <SectionBox>
          <WorksSection
            title="colision-detector"
            technicalElements={['JavaScript']}
          >
            <p>2Dあたり判定ライブラリ</p>
            <p><a href="https://dungeon.garakuta-toolbox.com">みんなでつくるダンジョン</a>のあたり判定にも使われています</p>
            <LibraryLinks
              packageHref="https://www.npmjs.com/package/@piyoppi/colision-detector"
              sourceCodeHref="https://github.com/piyoppi/colision-detector"
              sampleHref="https://garakuta-toolbox.com/colision-detector/sample"
            />
          </WorksSection>
        </SectionBox>

        <SectionBox>
          <WorksSection
            title="map-editor"
            technicalElements={['TypeScript', 'LitElement']}
          >
            <p>ブラウザ上で動く簡易ゲームマップエディタ（開発中）</p>
            <LibraryLinks
              sourceCodeHref="https://github.com/piyoppi/map-editor"
              sampleHref="https://garakuta-toolbox.com/map-editor"
            />
          </WorksSection>
        </SectionBox>
      </ArticleScreen>

      <WaveHorizon />

      <ArticleScreen content>
        <h2>過去の作品たち</h2>
        <SectionBox>
          <WorksSection
            title="あいこんくらぶ"
            link="https://iconclub.jp"
            logo={IconClubLogo}
            technicalElements={['PHP', 'JavaScript']}
          >
            <p>(公開期間: 2015/06 ～ 2020/02)</p>
            <p>ブラウザでドット絵を描いて公開できるサービスです</p>
            <ul>
              <li>お手持ちのドット絵をアップロードして公開できます（おおきさ256px四方まで）</li>
              <li>ドット絵エディタ（PC/スマートフォン対応）で絵が描けます</li>
              <li>ライセンス付きドット絵や、利用規約付きドット絵を配布することができます</li>
            </ul>
          </WorksSection>
        </SectionBox>

        <SectionBox>
          <WorksSection
            title="めもりあん"
            link="http://garakuta-toolbox.moo.jp/memorian"
            logo={MemorianLogo}
            technicalElements={['Chrome Extensions', 'Vue.js']}
          >
            <p>コードの断片をかんたんにメモすることができるChrome拡張機能です。 メモした情報はタグ付けしたり、あとから検索することができます。</p>
          </WorksSection>
        </SectionBox>

        <SectionBox>
          <WorksSection
            title="ステージデザイナー"
            link="http://garakuta-toolbox.moo.jp"
            logo={StageDesignerImage}
            technicalElements={['Visual Basic', 'C++', 'DirectX']}
          >
            <p>アクションゲームを簡単に作れるツールです（現在は開発中止）</p>
            <p>がらくたツールボックスとしてのさいしょのプロジェクトです。</p>
          </WorksSection>
        </SectionBox>
      </ArticleScreen>

      <Footer />
    </div>
  )
}
