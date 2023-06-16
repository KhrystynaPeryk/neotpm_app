import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Logo.scss'
import logo from '../../../assets/images/Transparent_Logo_resized.png'

const Logo = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  }

  return (
    <div className='logo-container'>
      <img className='logo' src={logo} alt='logo' onClick={redirectToHome}/>
    </div>
  )
}

export default Logo