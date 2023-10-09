import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './ArticleItem.scss'
import { articlesHTML } from '../articlesHTML'
import NavBar from '../../common/NavBar/NavBar';
import Footer from '../../common/Footer/Footer';
import SEO from './SEO';
import { Helmet } from 'react-helmet-async';

const ArticleItem = () => {
  const location = useLocation()
  const [article, setArticle] = useState({ title: '', metaDescription: '', htmlBody: '' });

  useEffect(() => {
    if (location.state) {
      const filteredArticles = articlesHTML.filter(article => article.id === location.state.id)
      const [filteredArticle] = filteredArticles

      setArticle(filteredArticle)
      console.log(article)

    }
  }, [location.state, article]);

  // useEffect(() => {
  //   const metaDescription = document.querySelector('meta[name="description"]');
  //   if (metaDescription) {
  //     metaDescription.setAttribute("content", "Discover the top 10 compelling reasons why hiring a property manager in Abu Dhabi is a game-changer for property owners. From faster rentals to stress reduction and legal expertise, find out how a professional property manager can maximize your investment and peace of mind.");
  //   }
  // }, []);

  return (
    <div className='property-container'>
      <SEO
        title={article.title}
        description={article.metaDescription}
        type='article' />
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