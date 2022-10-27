import * as React from "react"
import * as styles from "./HeadingNavLinksContainer.module.css"

export default function HeadingNavLinksContainer({ children }) {
  return <nav className={styles.headingNavLinksContainer}>{children}</nav>
}
