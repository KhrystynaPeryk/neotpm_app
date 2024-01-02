import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'; 
import './DocumentsRequestForm.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer';
import Spinner from '../common/Spinner/Spinner';

const DocumentsRequestForm = () => {
  const location = useLocation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')
  const [isPhoneValid, setIsPhoneValid] = useState(true)
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [message, setMessage] = useState('');
  const [newFileLink, setNewFileLink] = useState('');
  const [isSpinner, setIsSpinner] = useState(false)

  useEffect( () => {
    if (location.state) {
      setMessage('Service: ' + location.state.service.type + ' ' + location.state.service.details)
    }
  }, [location.state])

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (e.target.value === '') {
      setIsEmailValid(true)
    } else if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value) === false) {
      setIsEmailValid(false)
    } else {
      setIsEmailValid(true)
    }
  }
  
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
    if (e.target.value === '') {
      setIsPhoneValid(true)
    } else if (/^(\+[0-9]+)?[0-9]+$/g.test(e.target.value) === false) {
      setIsPhoneValid(false)
    } else {
      setIsPhoneValid(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSpinner(true)
    try {
      const constructFolderName = location.state ? location.state.service.type + ' ' + location.state.service.details : message
      const response = await axios.post('https://zohoapi-fxfj3ovifq-uc.a.run.app/upload-documents', {
        name: name + ' ' +  email + ' ' + constructFolderName // Pass the name and email variable in the request payload
      });
  
      setNewFileLink(response.data.newFileLink);
      window.open(response.data.newFileLink, '_blank')
      setIsSpinner(false)

      await axios.post('https://zohoapi-fxfj3ovifq-uc.a.run.app/send-emails', {
        content: `
          <div style="margin-bottom: 20px;">Hi ${name},<div>
          <div style="margin-bottom: 20px; margin-top: 20px;">
            <div>Thank you for contacting us.</div>
            <div>Feel free to upload your documents following the link below:</div>
            <div>${response.data.newFileLink}</div>
            <div style="margin-bottom: 20px; margin-top: 20px;">
              Your contact details: <br/>
              <b>Phone: </b>${phone} <br/>
              <b>Email: </b>${email}
            </div>
            <div>One of our representatives will contact you upon reviewing your documents.</div>
          </div>
          <div>
              <div>Best regards,<div>
              <div>Team of transparentpm.ae<div>
          <div>
        `,
        email: email,
        subject: 'Transparent Property Management & Maintenance Notification',
        bcc: 'joshua.jamelo@transparentpm.ae'
      }).catch((error) => console.log(error))
    } catch (error) {
      return;
    }
  };

  const handleResetForm = () => {
    setName('')
    setEmail('')
    setPhone('')
    setNewFileLink('')
  }

  return (
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <Logo />
      </div>
      <form onSubmit={handleSubmit} className='document-form-container'>
        <div className='document-form-header'>Upload Form</div>
        <div className='document-form-caption'>
          Upload your documents and we will get back to you with a custom quote
        </div>
        <div className='form-inputs'>
          <input
            type='text'
            value={name}
            maxLength={100}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Name'
          />
          <input
            type='tel'
            value={phone}
            maxLength={20}
            onChange={handlePhoneChange}
            required
            placeholder='Phone'
          />
          {!isPhoneValid && (<div className='email-error'>Please enter a valid phone</div>) }
          <input
            type='text'
            value={email}
            onChange={handleEmailChange}
            required
            placeholder='Email'
          />
          {!isEmailValid && (<div className='email-error'>Please enter a valid email</div>) }
          <textarea
            className={location.state ? 'disabled' : null}
            value={message}
            maxLength={100}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Service of your interest'
            disabled={location.state ? true : false}
          />
        </div>
        {newFileLink.length !== 0 ? (
          <div className='reset-container'>
            <a href={newFileLink} target="_blank" rel="noopener noreferrer">Link to Upload Files</a>
            <button onClick={handleResetForm}>Reset</button>
          </div>
        ) : (
          <button className='btn-upload-docs' type='submit' disabled={isSpinner || !isEmailValid}>Click to Upload Your Files</button>
        )}
      </form>
      <div className='footer-wrapper'>
        <Footer />
      </div>
      {isSpinner ? ( <Spinner /> ) : null}
    </div>
  )
}

export default DocumentsRequestForm
