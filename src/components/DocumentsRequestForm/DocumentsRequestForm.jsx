import React, {useState} from 'react'
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
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare form data
        const formData = new FormData();
        // formData.append('name', name);
        // formData.append('email', email);
        // formData.append('message', message);
        selectedFiles.forEach((file) => {
          formData.append('files[]', file.file, file.name);
        });
    
        try {
          // Make HTTP POST request to Zoho WorkDrive API endpoint
          const response = await axios.post('https://www.zohoapis.com/workdrive/api/v1/collections', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              // Add any required authentication headers or tokens for the API
            },
          });
    
          // Handle response from the API
          console.log('Files uploaded successfully:', response.data);
          // Reset the form or navigate to a success page
        } catch (error) {
          console.error('Error uploading files:', error);
          // Handle error scenario
        }
      };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files).slice(0, 5);
        setSelectedFiles(files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files).slice(0, 5);
        setSelectedFiles(files);
    };

    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo />
            </div>
            <div>
                {location.state ? (
                <div>
                    <div>{location.state.service.type}</div>
                    <div>{location.state.service.details}</div>
                </div>
                ) : ''}
            </div>
            <div>
                Upload your documents and we will get back to you with a custom quote
            </div>
            <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <div
          className='drop-area'
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {selectedFiles.length > 0 ? (
            <div>
              <div>Selected files:</div>
              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className='drop-area-text'>Drag and drop up to 5 files here</div>
          )}
          <input
            type='file'
            multiple
            className='file-input'
            onChange={handleFileChange}
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
        </div>
    )
}

export default DocumentsRequestForm