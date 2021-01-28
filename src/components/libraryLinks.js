import React from "react"
import styles from './libraryLinks.module.css'

export default (props) => {
  return(
    <ul className={styles.links}>
      { props.packageHref && (<li><a className={`${styles.link} ${styles.packageLink}`} href={props.packageHref}>npm</a></li>) }
      { props.sourceCodeHref && (<li><a className={`${styles.link} ${styles.sourceCodeLink}`} href={props.sourceCodeHref}>GitHub</a></li>) }
      { props.sampleHref && (<li><a className={`${styles.link} ${styles.sampleLink}`} href={props.sampleHref}>サンプル</a></li>) }
    </ul>
  )
}
