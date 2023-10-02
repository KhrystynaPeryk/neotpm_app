import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Articles.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import Article1Main from '../../assets/images/articles/article1_main.jpg'

const Articles = () => {
  const navigate = useNavigate();
  const redirectTo = (page) => {
    switch (page) {
      case 'articleOne':
        window.location.href = 'https://www.linkedin.com/pulse/10-reasons-why-you-really-need-property%3FtrackingId=KM1NOAct5VweoeFqqbZM1g%253D%253D/?trackingId=KM1NOAct5VweoeFqqbZM1g%3D%3D'
        break     
      default:
        navigate('/');
        break
    }
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
          <img className='card-img' src={Article1Main} alt='articleOne' />
          <div className='card-title'>10 Reasons Why you Really Need a Property Manager in Abu Dhabi</div>
          <div><i>Published on September 27, 2023</i></div>
          <button className='article-btn' type='button' onClick={() => redirectTo('articleOne')}>Read more</button>
        </div>
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default Articles