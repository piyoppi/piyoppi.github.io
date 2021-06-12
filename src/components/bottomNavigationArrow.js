import React from "react"
import * as styles from "./bottomNavigationArrow.module.css"
import bottomArrowImage from "../../assets/images/yazirushi.png"

export default props => {
  return (
    <div className={styles.next}>
      <img src={bottomArrowImage} alt="下へ" />
    </div>
  )
}
