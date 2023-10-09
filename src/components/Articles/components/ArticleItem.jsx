import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './ArticleItem.scss'
import { articlesHTML } from '../articlesHTML'
import NavBar from '../../common/NavBar/NavBar';
import Footer from '../../common/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const ArticleItem = () => {
  const location = useLocation()
  const [article, setArticle] = useState({ title: '', metaDescription: '', htmlBody: '' });

  useEffect(() => {
    if (location.state) {
      const filteredArticles = articlesHTML.filter(article => article.id === location.state.id)
      const [filteredArticle] = filteredArticles
      setArticle(filteredArticle)
    }
  }, [location.state, article]);

  // useEffect(() => {
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute('content', article.metaDescription);
  //   }
  // }, []);

  return (
    <div className='property-container'>
      <Helmet>
        <title>{article.title}</title>
        <meta name='description' content={article.metaDescription} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={article.title} />
        <meta property='og:description' content={article.metaDescription} />
      </Helmet>
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