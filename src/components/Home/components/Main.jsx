import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Main.scss'

const Main = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/property-management');
  }

  return (
      <div className='main-container'>
        <div className='main-text-box'>
            <p className='main-text-box-header'>You can stop looking for the perfect agents. You've found them!</p>
        </div>
        <button className='main-btn' type='button' onClick={handleRedirect}>Discover our services</button>
      </div>
  )
}

export default Main