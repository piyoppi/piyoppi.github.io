import React from "react"
import * as styles from './anchor.module.css'

export default (props) => {
  return(
    <a className={styles.anchorLink} href={'#' + props.anchorId}>
      link
    </a>
  )
}
