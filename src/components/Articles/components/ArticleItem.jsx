import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './ArticleItem.scss'
import {articlesHTML} from '../articlesHTML'

const ArticleItem = () => {
  const location = useLocation()
  const [article, setArticle] = useState({});
  
  useEffect(() => {
    if (location.state) {
      const filteredArticles = articlesHTML.filter(article => article.id === location.state.id)
      const [filteredArticle] = filteredArticles

      setArticle(filteredArticle)
      console.log(article)

    }
  }, [location.state, article] );

  return (
    <div>
      {article.id}
    </div>
  )
}

export default ArticleItem