import React from "react"
import styles from './libraryLinks.module.css'

export default (props) => {
  return(
    <ul className={styles.links}>
      <li><a className={`${styles.link} ${styles.packageLink}`} href={props.packageHref}>npm</a></li>
      <li><a className={`${styles.link} ${styles.sourceCodeLink}`} href={props.sourceCodeHref}>GitHub</a></li>
      <li><a className={`${styles.link} ${styles.sampleLink}`} href={props.sampleHref}>サンプル</a></li>
    </ul>
  )
}