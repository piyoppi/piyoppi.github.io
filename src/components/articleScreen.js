import React from "react"
import ArticleScreenStyles from './articleScreen.module.css'

export default (props) => {
  let articleClasses = ArticleScreenStyles.articleScreen
  let styles = ''

  if( props.fullScreen ) {
    articleClasses += ` ${ArticleScreenStyles.fullScreen}`
  }

  if( props.gray ) {
    articleClasses += ` ${ArticleScreenStyles.gray}`
  }

  if( props.content ) {
    articleClasses += ` ${ArticleScreenStyles.content}`
  }

  return(
    <article className={articleClasses}>
      { props.children }
    </article>
  )
}