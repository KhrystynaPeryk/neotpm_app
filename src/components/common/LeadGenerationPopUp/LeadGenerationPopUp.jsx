import React, {useState} from 'react'
import './LeadGenerationPopUp.scss'
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

const LeadGenerationPopUp = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState('')

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSpinner, setIsSpinner] = useState(false)

    const [errors, setErrors] = useState({});

    const activateSpinner = () => {
        let timer;
      
        const startSpinner = () => {
          setIsSpinner(true);
          timer = setTimeout(() => {
            setIsSpinner(false);
            onClose();
          }, 6000);
        };
      
        const stopSpinner = () => {
          clearTimeout(timer);
          setIsSpinner(false);
        };
      
        startSpinner();
      
        return stopSpinner;
      };

    const handleNameChange = (e) => {
        setName(e.target.value)
        setErrors((prevErrors) => ({ ...prevErrors, name: undefined }));
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
        setErrors((prevErrors) => ({ ...prevErrors, phone: undefined }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Form validation
        const errors = {};
        if (!name) {
            errors.name = 'Please enter your name.';
        }
        if (!email || /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) === false) {
            errors.email = 'Please enter your valid email';
        }
        if (!phone) {
            errors.phone = 'Please enter your phone';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            // lOGIC TO SEND EMAIL
            activateSpinner()
            try {
                await axios.post('https://zohoapi-fxfj3ovifq-uc.a.run.app/send-emails', {
                  content: `A Free Property Management Guide Request from ${name}, ${email}, ${phone}. Client selected: a '${selectedOption}' option`,
                  email: 'joshua.jamelo@transparentpm.ae',
                  subject: 'FREE Property Management Guide Request'
                });
            } catch (error) {
                return;
            }
        }
    }

    return (
        <div className='lead-popup-container'>
            <div className='select-options-section'>
                {selectedOption.length > 0 ? (
                    <div className='popup-header-2'>
                        <small>We work on the best and updated property solutions like none other</small>
                        <h3><span className='cursive'>Get your</span><br /> <span className='popup-word popup-word-1'>FREE</span> Property Management <span className='popup-word popup-word-2'>GUIDE</span> now</h3>
                    </div>    
                ) : (
                    <h3 className='popup-header-1'>Click the button that <span className='cursive'>most describes</span> you</h3>
                )}
                <div className='select-options-wrapper'>
                    <div className='select-options'>
                        <div className='select-options-items'>
                            {selectedOption.length > 0 ? (
                                <form onSubmit={handleSubmit} className='popup-form-inputs'>
                                    <div className='popup-selected-option'>{selectedOption}</div>
                                    <input
                                    type='text'
                                    value={name}
                                    maxLength={100}
                                    onChange={handleNameChange}
                                    placeholder='Name'
                                    className={errors.name ? 'popup-red-border' : ''}
                                    />
                                    <input
                                    type='text'
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder='Email'
                                    className={errors.email ? 'popup-red-border' : ''}
                                    />
                                    <input
                                    type='tel'
                                    value={phone}
                                    maxLength={30}
                                    onChange={handlePhoneChange}
                                    placeholder='Phone'
                                    className={errors.phone ? 'popup-red-border' : ''}
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
            {isSpinner ? ( <Spinner /> ) : null}
        </div>
    )
}

export default LeadGenerationPopUp