import React from "react"
import * as ArticleScreenStyles from './articleScreen.module.css'

export default (props) => {
  let articleClasses = ArticleScreenStyles.articleScreen

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
