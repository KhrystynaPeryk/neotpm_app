import React from 'react'
import './Header.scss'
import Logo from '../../common/Logo/Logo'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <Logo />
        </div>
    </div>
  )
}

export default Header