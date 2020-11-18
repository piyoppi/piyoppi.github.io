import React from "react"
import styles from './worksSection.module.css'

export default (props) => {
  return(
    <div>
      <h3 className={styles.caption}> { props.title } </h3>
      <div className={styles.logoBoundary}>
        <a href={props.link} target="_blank">
          <img src={props.logo} alt="logo" />
        </a>
        <p><a href={props.link} target="_blank"> { props.link } </a></p>
      </div>
      <div className={styles.details}>
        { props.children }
      </div>
      <div className={styles.technicalSummary}>
        <h4>つかったものたち</h4>
        <ul>
          { props.technicalElements.map( element => <li key={element}>{element}</li> ) }
        </ul>
      </div>
    </div>
  )
}
