import React from 'react'
import './PopUp.scss'
import Button from '../../common/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const PopUp = ( {className} ) => {
  return (
    <div className={className}>
        <div className='popup-icon'><FontAwesomeIcon icon={faXmark} /></div>
        <div className='popup-text'>
            <h1>Quiz Time:</h1>
            <p>Uncover Your Personalized Power of Attorney Services in Just a Few Clicks!</p>
            <Button />
        </div>
    </div>
  )
}

export default PopUp