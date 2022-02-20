import React from "react"
import PostsListItem from './postsListItem'
import * as styles from './postsList.module.css'

export default function PostsList(props) {
  return (
    <ul className={styles.postsList}>
      {props.posts.map(item => (
        <li key={item.url} className={styles.postsItemBoundary}>
          <PostsListItem url={item.url} title={item.title} date={item.date} tags={item.tags} />
        </li>
      ))}
    </ul>
  )
}
