import React from "react"
import * as styles from './sectionBox.module.css'

export default (props) => {
  return(
    <section className={styles.workingSection}>
      { props.children }
    </section>
  )
}
