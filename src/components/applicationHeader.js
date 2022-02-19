import React from "react"
import { Link } from 'gatsby'
import Wave from './wave'
import * as styles from './applicationHeader.module.css'

export default function ApplicationHeader() {
  const links = [
    {
      href: '/',
      caption: 'Home',
      matchRegExp: new RegExp('^\/$')
    },
    {
      href: '/weblog',
      caption: 'Weblog',
      matchRegExp: new RegExp('^\/weblog.*')
    },
  ]

  return (
    <nav className={styles.applicationHeader}>
      <ul>
        {links.map(
          link => (
            <li key={link.href} className={window.location.pathname.match(link.matchRegExp) ? styles.viewingMarker : ''}>
              <Link to={link.href}>{link.caption}</Link>
            </li>
          )
        )}
      </ul>
      <div className={styles.wave}>
        <Wave width="100%" amplitude="10" wavelength="200" color="whitesmoke" colorBottom="white" />
      </div>
    </nav>
  )
}
