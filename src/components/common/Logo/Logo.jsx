import React from 'react'
import './Logo.scss'
import logo from '../../../assets/images/Transparent_Logo_resized.png'

const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={logo} alt='logo'/>
    </div>
  )
}

export default Logo