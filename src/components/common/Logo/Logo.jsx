import React from 'react'
import './Logo.scss'
import logo from '../../../assets/images/Transparent_Logo.png'

const Logo = () => {
  return (
    <img className='logo' src={logo} alt='logo'/>
  )
}

export default Logo