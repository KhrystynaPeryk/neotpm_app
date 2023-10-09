import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './ArticleItem.scss'
import {articlesHTML} from '../articlesHTML'
import NavBar from '../../common/NavBar/NavBar';
import Footer from '../../common/Footer/Footer';

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
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <div className='articleItem-container'>
          <div dangerouslySetInnerHTML={{ __html: article.htmlBody }} />
        </div>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default ArticleItem