import * as React from 'react'
import * as styles from './TagList.module.css'
import TagItem from './TagItem'

export default function TagList({ tags }) {
  return (
    <ul className={styles.tagContainer}>
      {tags.map(tag => (<li key={tag}><TagItem tagName={tag} /></li>))}
    </ul>
  )
}
