// not used so far
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ArticleItem.scss'
import { articlesHTML } from '../articlesHTML'
import NavBar from '../../common/NavBar/NavBar';
import Footer from '../../common/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const ArticleItem = () => {
  const {path} = useParams()
  const [article, setArticle] = useState({ title: '', metaDescription: '', headImg: '', htmlBody: '' });

  useEffect(() => {
    const filteredArticles = articlesHTML.filter((article) => article.path === path);
    const [filteredArticle] = filteredArticles;
    setArticle(filteredArticle || {});
  }, [path]);

  return (
    <div className='property-container'>
      <Helmet>
        <title>{article.title}</title>
        <meta name='description' content={article.metaDescription} data-rh="true"/>
        <meta property='og:type' content='article' />
        <meta property='og:title' content={article.title} />
        <meta property='og:description' content={article.metaDescription} />
        <meta property='og:image' content={article.headImg} />
        <meta property="og:site_name" content="Transparent Property Management and Maintenance LLC"></meta>
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