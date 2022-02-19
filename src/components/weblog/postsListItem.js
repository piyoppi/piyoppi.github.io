import React from "react"
import { Link } from 'gatsby'
import * as styles from './postsListItem.module.css'

export default function PostsListItem(props) {
  return (
    <div>
      <Link className={styles.postTitle} to={props.url}>
        { props.title }
      </Link>
      <time className={styles.postDate} dateTime={props.date}>
        { props.date }
      </time>
    </div>
  )
}
