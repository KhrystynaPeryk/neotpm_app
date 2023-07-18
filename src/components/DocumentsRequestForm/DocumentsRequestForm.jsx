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
    if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value) === false) {
      return setIsEmailValid(false)
    } else {
      return setIsEmailValid(true)
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

      try {
        await axios.post('https://zohoapi-fxfj3ovifq-uc.a.run.app/send-emails', {
          content: 'Hi, here is the link to your documents: ' + response.data.newFileLink, // Pass the name and email variable in the request payload
          email: email,
          subject: "Transparent Property Management & Maintenance Notification"
        });
      } catch (error) {
        console.error('ZohoApi function error - cannot send email', error);
        return;
      }
  
    } catch (error) {
      console.error('ZohoApi function error - cannot create file/link', error);
      return;
    }
  };

  const handleResetForm = () => {
    setName('')
    setEmail('')
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
            type='text'
            value={email}
            onChange={handleEmailChange}
            required
            placeholder='Email'
          />
          {!isEmailValid && (<div className='email-error'>Please enter a valid email</div>) }
          <textarea
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
