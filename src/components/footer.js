import React from "react"
import * as styles from "./footer.module.css"

import Wave from './wave'
import HiyokoImagte from "./../../assets/images/hiyoko-normal.png"

export default props => {
  return (
    <footer>
      <div className={styles.footerImageBoundary}>
        <img src={HiyokoImagte} alt="" className={styles.footerHiyokoImage} />
      </div>
      <div className={styles.wave}>
        <Wave width="100%" amplitude="10" wavelength="100" colorBottom="#1a3b52" color="white"/>
      </div>
      <div className={styles.footerContent}>がらくたツールボックス</div>
    </footer>
  )
}
