import React from "react"
import styles from './footer.module.css'

import ToolboxImagte from './../../assets/image/toolbox.png'
import HiyokoImagte from './../../assets/image/hiyoko-normal.png'

export default (props) => {
  return(
    <footer>
      <div className={styles.footerImageBoundary}>
        <img src={ToolboxImagte} alt="" className={styles.footerToolboxImage} />
        <img src={HiyokoImagte} alt="" className={styles.footerHiyokoImage} />
      </div>
      <div className={styles.footerContent}>
        がらくたツールボックス
      </div>
    </footer>
  )
}
