import React from 'react'
import './POAQuiz.scss'

const POAQuiz = () => {

    const handleRedirectToQuiz = () => {
        window.location.href = 'https://transparent-poa.involve.me/poa-uae/';
    };
    return (
        <div className='quiz-request-wrapper'>
            <div className='quiz-request-content'>
                <h1>Do you need a Power of Attorney?</h1>
                <p>If you are unsure whether you need a Power of Attorney, take our short quiz to find out!</p>
                <div className='quiz-button-wrapper'>
                    <button type='button' onClick={handleRedirectToQuiz}>START</button>
                </div>
            </div>
        </div>
    )
}

export default POAQuiz