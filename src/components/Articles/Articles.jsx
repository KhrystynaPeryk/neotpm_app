import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Articles.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import Article1 from '../../assets/images/articles/article1_main.jpg'
import Article2 from '../../assets/images/articles/article2.png'
import Article3 from '../../assets/images/articles/article3.png'

const Articles = () => {
  const navigate = useNavigate()
  const handleShowArticle = (articlePath) => {
    // navigate(articlePath, {
    //   state: {id}
    // })
    navigate(articlePath)
  }
  return (
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <Logo />
        <div className='property-header-wrapper'>
          <p className='property-header'>Articles</p>
        </div>
      </div>
      <div className='articles-container'>
        <div className='article-card'>
          <img className='card-img' src={Article1} alt='10 Reasons Why you Really Need a Property Manager in Abu Dhabi' />
          <div className='card-title'>10 Reasons Why you Really Need a Property Manager in Abu Dhabi</div>
          <div><i>Published on September 27, 2023</i></div>
          <button className='article-btn' type='button' onClick={() => handleShowArticle('/articles/10-reasons-why-you-really-need-a-property-manager-in-abu-dhabi')}>Read more</button>
        </div>
        <div className='article-card'>
          <img className='card-img' src={Article2} alt='7 Tips for Effective Maintenance in Abu Dhabi' />
          <div className='card-title'>7 Tips for Effective Maintenance in Abu Dhabi</div>
          <div><i>Published on September 28, 2023</i></div>
          <button className='article-btn' type='button' onClick={() => handleShowArticle('/articles/7-tips-for-effective-maintenance-in-abu-dhabi')}>Read more</button>
        </div>
        <div className='article-card'>
          <img className='card-img' src={Article3} alt='Solving Disputes with Your Tenants in Abu Dhabi: 4 Tips from A Property Manager' />
          <div className='card-title'>Solving Disputes with Your Tenants in Abu Dhabi: 4 Tips from A Property Manager</div>
          <div><i>Published on October 4, 2023</i></div>
          <button className='article-btn' type='button' onClick={() => handleShowArticle('/articles/solving-disputes-with-your-tenants-in-abu-dhabi-4-tips-from-a-property-manager')}>Read more</button>
        </div>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default Articles