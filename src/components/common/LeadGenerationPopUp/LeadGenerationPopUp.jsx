import React, {useState} from 'react'
import './LeadGenerationPopUp.scss'
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import FlyingEmail from '../../../assets/images/flying-email.png'
import { downloadFirebaseFile } from '../../../firebaseStorage/downloadFirebaseFile';

const LeadGenerationPopUp = ({ onClose }) => {
    const [selectedOption, setSelectedOption] = useState('')
    const [selectedRole, setSelectedRole] = useState('')

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSpinner, setIsSpinner] = useState(false)

    const [errors, setErrors] = useState({});
    const [isPopUpSubmitted, setIsPopUpSubmitted] = useState(false)

    const activateSpinner = () => {
        let timer;
      
        const startSpinner = () => {
          setIsSpinner(true);
          timer = setTimeout(() => {
            setIsSpinner(false);
            // onClose();
            setIsPopUpSubmitted(true)
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
            //download a free guide
            downloadFirebaseFile('FREE Property Management Guide.pdf')

            await axios.post('https://zohoapi-fxfj3ovifq-uc.a.run.app/send-emails', {
                content: `
                    <div style="margin-bottom: 20px;">Hi,<div>
                    <div style="margin-bottom: 20px; margin-top: 20px;">
                        <div>A Free Property Management Guide Request from ${name}</div>
                        <div>Email: ${email}</div>
                        <div>Client is a <b>'${selectedRole}'</b> and selected a <b>'${selectedOption}'</b> option</div>
                        <div>A free guide has been sent to the client</div>
                    </div>
                    <div>
                        <div>Best regards,<div>
                        <div>transparentpm.ae<div>
                    <div>
                `,
                email: 'joshua.jamelo@transparentpm.ae',
                subject: 'FREE Property Management Guide Request',
                bcc: 'khrystyna.peryk@transparentpm.ae'
            }).catch((error) => console.log(error))
        }
    }

    return (
        <div className='lead-popup-container'>
            {isPopUpSubmitted ? (
                <div className='lead-popup-submitted'>
                    <img src={FlyingEmail} alt='email' className='lead-popup-submitted-img' />
                    <h2>THANK YOU!</h2>
                    <p>Cool stuff is on the way!</p>
                </div>) : (
                <div className='select-options-section'>
                {selectedOption.length > 0 ? (
                    <div className='popup-header-2'>
                        <small>We work on the best and updated property solutions like none other</small>
                        <h3>Get your<br />FREE Property Management GUIDE now</h3>
                    </div>    
                ) : (
                    <h3 className='popup-header-1'>Click the button that most describes you</h3>
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
                                    {selectedRole.length > 0 ? (
                                        <>
                                            <button type='button' onClick={() => setSelectedOption('RENT A PLACE')}>RENT A PLACE</button>
                                            <button type='button' onClick={() => setSelectedOption('PROPERTY MANAGEMENT')}>PROPERTY MANAGEMENT</button>
                                            <button type='button' onClick={() => setSelectedOption('PROPERTY MAINTENANCE')}>PROPERTY MAINTENANCE</button>
                                        </>
                                    ) : (
                                        <>
                                            <button type='button' className='selectedRoleWidth' onClick={() => setSelectedRole('Tenant')}>Tenant</button>
                                            <button type='button' className='selectedRoleWidth' onClick={() => setSelectedRole('Landlord')}>Landlord</button>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            )}
            <div className='popup-img-section'></div>
            <div className='close-btn'>
                <div onClick={onClose}>&times;</div>
            </div>
            {isSpinner ? ( <Spinner /> ) : null}
        </div>
    )
}

export default LeadGenerationPopUp