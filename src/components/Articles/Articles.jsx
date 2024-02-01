import React, {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Articles.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import { articlesHTML } from './articlesHTML'

const Articles = () => {
  const [articles, setArticles] = useState(articlesHTML)
  const navigate = useNavigate()
  const handleShowArticle = (articlePath) => {
    navigate(`/articles/${articlePath}`)
  }

  useEffect(() => {
    //for old non existing urls like /contacts from the old website
    window.history.replaceState({}, '', '/articles');
  }, []);

  return (
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <Logo isCPlogoVisible={true}/>
        <div className='property-header-wrapper'>
          <p className='property-header'>Articles</p>
        </div>
      </div>
      <div className='articles-container'>
        {articles.map(article => {
          return (
            <div key={article.id} className='article-card' onClick={() => handleShowArticle(article.path)}>
              <img className='card-img' src={article.headImg} alt={article.title} />
              <div className='card-title'>{article.title}</div>
              <div><i>Published on {article.published}</i></div>
            </div>
          )
        })}
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default Articles