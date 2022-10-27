import React from "react"
import Footer from "./../components/footer"
import AppliactionHeader from "./../components/applicationHeader"
import WebFonts from "./../components/webFonts"
import * as styles from "./default.module.css"
import SEO from "./../components/seo"

export default function DefaultLayout({ title, description, children }) {
  return (
    <>
      <div className={styles.outer}>
        <SEO title={title} description={description} />

        <WebFonts />
        <AppliactionHeader />
        <div className={styles.body}>{children}</div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}
