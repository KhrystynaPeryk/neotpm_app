import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'; 
import './DocumentsRequestForm.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'

const DocumentsRequestForm = () => {
  const location = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [newFileLink, setNewFileLink] = useState('');
  const [isSpinner, setIsSpinner] = useState(false)

  useEffect( () => {
    if (location.state) {
      setMessage('Hi, I am interested in ' + location.state.service.type + ' : ' + location.state.service.details)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSpinner(true)
    try {
      const response = await axios.post('http://127.0.0.1:5001/transparentpm-25f07/us-central1/ZohoApi/upload-documents', {
        name: name + ' ' +  email // Pass the name and email variable in the request payload
      });
  
    setNewFileLink(response.data.newFileLink);
    console.log(newFileLink)
    window.open(response.data.newFileLink, '_blank')
    setIsSpinner(false)
  
    } catch (error) {
      console.error('ZohoApi function error', error);
      // Handle error scenario
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
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Name'
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email'
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message'
          />
        </div>
        {newFileLink.length !== 0 ? (
          <div className='reset-container'>
            <a href={newFileLink}>Link to Upload Files</a>
            <a href='' onClick={handleResetForm}>Reset</a>
          </div>
        ) : (
          <button className='btn-upload-docs' type='submit' disabled={isSpinner}>Click to Upload Your Files</button>
        )}
      </form>
      {isSpinner ? (            
        <div className='spinner-container'>
          <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>) : 
        null
      }
    </div>
  )
}

export default DocumentsRequestForm