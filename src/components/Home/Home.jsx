import React, { useState } from 'react'
import './Home.scss'
import Header from './components/Header'
import Main from './components/Main'
import PopUp from './components/PopUp'

const Home = () => {
    const [isPopupOpen, setPopupOpen] = useState(true);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };
  return (
    <div className='home-container'>
        <Header />
        <Main />
        {!isPopupOpen && (
            <div className='popup-button' onClick={togglePopup}>
                <span className='popup-button-text'>Quiz</span>
            </div>
        )}
        <PopUp className={isPopupOpen ? 'popup-container open' : 'popup-container'} />
    </div>
  )
}

export default Home