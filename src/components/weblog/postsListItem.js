import React from "react"
import { Link } from "gatsby"
import * as styles from "./postsListItem.module.css"
import TagList from "../../components/TagList"

export default function PostsListItem(props) {
  return (
    <div>
      <Link className={styles.postTitle} to={props.url}>
        {props.title}
      </Link>
      <div className={styles.articleSummary}>
        <time className={styles.postDate} dateTime={props.date}>
          {props.date}
        </time>
        <TagList tags={props.tags} />
      </div>
    </div>
  )
}
