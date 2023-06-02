import React, { useState } from 'react'
import './Home.scss'
import Header from './components/Header'
import Main from './components/Main'
import WhatsAppIcon from '../../assets/images/whatsapp-icon.png';

const Home = () => {
    const [isPopupOpen, setPopupOpen] = useState(true);

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const handleRedirectToQuiz = () => {
        window.open('https://transparentpm.ae/', '_blank');
    }
    return (
        <div className='home-container'>
            <Header />
            <Main />
            {!isPopupOpen && (
                <div className='popup-button' onClick={togglePopup}>
                    <span className='popup-button-text'>Quiz</span>
                </div>
            )}
            <div className={isPopupOpen ? 'popup-container open' : 'popup-container'}>
                <div className='popup-close-icon' onClick={togglePopup}>&times;</div>
                <div className='popup-text'>
                    <h1>Quiz Time:</h1>
                    <p>Uncover Your Personalized <span>Power of Attorney</span> Services in Just a Few Clicks!</p>
                    <button type='button' onClick={handleRedirectToQuiz}>START</button>
                </div>
            </div>
            <a href='https://api.whatsapp.com/send?phone=971508486964' target='_blank' rel='noopener noreferrer'>
                <div className='whatsapp-icon'>
                    <img src={WhatsAppIcon} alt='WhatsApp' />
                </div>
            </a>
        </div>
    )
}

export default Home