import React from "react"
import ArticleScreenStyles from './articleScreen.module.css'

export default (props) => {
  let articleClasses = ArticleScreenStyles.articleScreen

  if( props.fullScreen ) {
    articleClasses += ` ${ArticleScreenStyles.fullScreen}`
  }

  return(
    <article className={articleClasses}>
      { props.children }
    </article>
  )
}
