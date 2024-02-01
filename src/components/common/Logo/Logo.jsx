import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Logo.scss'
import logo from '../../../assets/images/Transparent_Logo_resized.png'
import cp from '../../../assets/images/CP.png'

const Logo = ({isCPlogoVisible}) => {
  const navigate = useNavigate();
  console.log("isCPlogoVisible:", isCPlogoVisible)
  const redirectToHome = () => {
    navigate('/');
  }

  return (
    <div className='logo-container'>
      <img className='logo' src={logo} alt='logo' onClick={redirectToHome}/>
        <p style={isCPlogoVisible ? null : {'display' : 'none'}}><b>PART OF</b></p>
        <img className='cp' style={isCPlogoVisible ? null : {'display' : 'none'}} src={cp} alt='cp-logo' />
    </div>
  )
}

export default Logo