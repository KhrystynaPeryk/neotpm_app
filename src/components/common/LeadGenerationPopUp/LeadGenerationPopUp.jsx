import React, {useState} from 'react'
import './LeadGenerationPopUp.scss'

const LeadGenerationPopUp = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState('')

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [isSpinner, setIsSpinner] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value) === false) {
          return setIsEmailValid(false)
        } else {
          return setIsEmailValid(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='lead-popup-container'>
            <div className='select-options-section'>
                {selectedOption.length > 0 ? (
                    <h3>FREE Property Management Guide</h3>
                ) : (
                    <h3>Click the button that most describes you:</h3>
                )}
                <div className='select-options-wrapper'>
                    <div className='select-options'>
                        <div className='select-options-items'>
                            {selectedOption.length > 0 ? (
                                <form onSubmit={handleSubmit} className='popup-form-inputs'>
                                    <input
                                    type='text'
                                    value={name}
                                    maxLength={100}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder='Name'
                                    />
                                    <input
                                    type='text'
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    placeholder='Email'
                                    />
                                    {!isEmailValid && (<div className='email-error'>Please enter a valid email</div>) }
                                    <input
                                    type='tel'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder='Phone'
                                    />
                                    <input
                                    type='text'
                                    value={message}
                                    maxLength={100}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder={selectedOption.toLowerCase()}
                                    disabled={true}
                                    />
                                    <button type='submit'>GET YOURS NOW</button>
                                </form>
                            ) : (
                                <>
                                    <h4>Select Options:</h4>
                                    <button type='button' onClick={() => setSelectedOption('LOOKING TO BUY')}>LOOKING TO BUY</button>
                                    <button type='button' onClick={() => setSelectedOption('SELL YOUR HOME')}>SELL YOUR HOME</button>
                                    <button type='button' onClick={() => setSelectedOption('RENT A PLACE')}>RENT A PLACE</button>
                                    <button type='button' onClick={() => setSelectedOption('PROPERTY MANAGEMENT')}>PROPERTY MANAGEMENT</button>
                                </>
                            )}
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