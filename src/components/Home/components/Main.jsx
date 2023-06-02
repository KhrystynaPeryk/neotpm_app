import React from 'react'
import './Main.scss'

const Main = () => {

  const handleRedirect = () => {
    window.open('https://transparentpm.ae/', '_blank');
  }

  return (

      <div className='main-container'>
        <div className='main-text-box'>
            <p>You can stop looking for the perfect agents. You've found them!</p>
        </div>
        <button className='main-btn' type='button' onClick={handleRedirect}>Discover our services</button>
      </div>

  )
}

export default Main