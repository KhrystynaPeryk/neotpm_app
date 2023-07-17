import React, {useState} from 'react'
import './LeadGenerationPopUp.scss'

const LeadGenerationPopUp = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState('')

    return (
        <div className='lead-popup-container'>
            <div className='select-options-section'>
                <h3>Click the button that most describes you:</h3>
                <div className='select-options-wrapper'>
                    <div className='select-options'>
                        <div className='select-options-items'>
                            <h4>Select Options:</h4>
                            <button type='button' onClick={() => setSelectedOption('LOOKING TO BUY')}>LOOKING TO BUY</button>
                            <button type='button' onClick={() => setSelectedOption('SELL YOUR HOME')}>SELL YOUR HOME</button>
                            <button type='button' onClick={() => setSelectedOption('RENT A PLACE')}>RENT A PLACE</button>
                            <button type='button' onClick={() => setSelectedOption('PROPERTY MANAGEMENT')}>PROPERTY MANAGEMENT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='popup-img-section'></div>
            <div className='close-btn'>
                <div onClick={onClose}>&times;</div>
            </div>
        </div>
    )
}

export default LeadGenerationPopUp