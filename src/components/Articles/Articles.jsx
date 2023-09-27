import React from 'react'
import './Articles.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'

const Articles = () => {
  return (
    <div className='property-container'>
        <div className='property-before-table'>
            <NavBar />
            <Logo />
        </div>
        <div className='footer-wrapper'>
            <Footer />
        </div>
    </div>
  )
}

export default Articles