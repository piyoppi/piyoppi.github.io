import React from "react"
import ArticleScreen from "./articleScreen"
import BottomNavigationArrow from "./bottomNavigationArrow"
import * as styles from "./toppageFirstScreen.module.css"

import piyoppiImage from "../../assets/images/sitting-piyoppi.png"
import lightImage from "../../assets/images/light.png"
import downlightImage from "../../assets/images/downlight.png"
import hiyokoImage from "../../assets/images/hiyoko.png"
import smokeImage from "../../assets/images/smoke.png"
import smoke2Image from "../../assets/images/smoke2.png"
import moonImage from "../../assets/images/moon.png"
import windowImage from "../../assets/images/window.png"
import workingImage from "../../assets/images/working.png"
import displayImage from "../../assets/images/working-display.png"

export default function Home() {
  return(
    <ArticleScreen fullScreen>
      <div className={styles.toppageBoundary}>
        <h1 className={styles.title}>がらくたツールボックス</h1>

        <div className={styles.melody}>♪</div>
        <div className={`${styles.melody} ${styles.melodyBlue}`}>♪</div>
        <div className={`${styles.melody} ${styles.melodyRed}`}>♪</div>
        <div className={`${styles.melody} ${styles.melodyGreen}`}>♪</div>
        <img className={styles.working} src={workingImage} alt="" />
        <div className={styles.displayBoundary}>
          <div className={styles.displayInner}>
            <img src={displayImage} className={styles.displayImage} alt="" />
          </div>
        </div>
        <img className={styles.sittingPiyoppi} src={piyoppiImage} alt="" />
        <img className={styles.light} src={lightImage} alt="" />
        <img className={styles.downlight} src={downlightImage} alt="" />
        <img className={styles.hiyoko} src={hiyokoImage} alt="" />
        <img className={styles.smoke} src={smokeImage} alt="" />
        <img className={styles.smoke2} src={smoke2Image} alt="" />
        <div className={styles.windowBoundary}>
          <img className={styles.moon} src={moonImage} alt="" />
          <div className={styles.cloud}></div>
          <div className={`${styles.cloud} ${styles.cloudTwo}`}></div>
        </div>
        <img className={styles.windowImage} src={windowImage} alt="" />

        <div className={styles.summary}>
          ここは、趣味でつくったいろいろなものをまとめたりするウェブサイトです
        </div>

        <BottomNavigationArrow />
      </div>
    </ArticleScreen>
  )
}
