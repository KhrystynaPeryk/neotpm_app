import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Logo.scss'
import cp from '../../../assets/images/CP.png'

const Logo = ({isCPlogoVisible}) => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate('/');
  }

  const logo = `${process.env.PUBLIC_URL}/Transparent_Logo_resized.png`;

  return (
    <div className='logo-container'>
      <img className='logo' src={logo} alt='logo' onClick={redirectToHome}/>
        <p style={isCPlogoVisible ? null : {'display' : 'none'}}><b>PART OF</b></p>
        <img className='cp' loading='lazy' style={isCPlogoVisible ? null : {'display' : 'none'}} src={cp} alt='cp-logo' />
    </div>
  )
}

export default Logo