import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Articles.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import { articlesHTML } from './articlesHTML'
import SearchInput from './components/SearchInput';
import RecentPosts from './components/RecentPosts';

const Articles = () => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [articles, setArticles] = useState(articlesHTML)
  const navigate = useNavigate()
  const handleShowArticle = (articlePath) => {
    navigate(`/articles/${articlePath}`)
  }

  useEffect(() => {
    //for old non existing urls like /contacts from the old website
    window.history.replaceState({}, '', '/articles');
  }, []);

  const inputSearchHandler = () => {
    if (searchKeyword.length === 0) {
      setArticles(articlesHTML)
    } else {
      const filteredArticles = articlesHTML.filter((article) => article.htmlBody.toLowerCase().includes(searchKeyword.toLowerCase()))
      setArticles(filteredArticles)
    }
  }

  return (
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <Logo isCPlogoVisible={true}/>
        <div className='property-header-wrapper'>
          <p className='property-header'>Articles</p>
        </div>
      </div>
      <SearchInput keyword={searchKeyword} handleOnChange={(e) => setSearchKeyword(e.target.value)} handleOnClick={inputSearchHandler}/>
      <div className='articles-container'>
        {articles.map(article => {
          return (
            <div key={article.id} className='article-card' onClick={() => handleShowArticle(article.path)}>
              <img className='card-img' src={article.headImg} alt={article.title} loading='lazy' />
              <div className='card-title'>{article.title}</div>
              <div className='card-caption'><i>Published on {article.published}</i></div>
            </div>
          )
        })}
      </div>
      <RecentPosts />
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default Articles