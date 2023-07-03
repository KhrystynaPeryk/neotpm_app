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
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [error, setError] = useState('');

    useEffect( () => {
      if (location.state) {
        setMessage('Hi, I am interested in ' + location.state.service.type + ' : ' + location.state.service.details)
      }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
            // Validate file upload
        if (selectedFiles.length === 0) {
            setError('Please select at least one file.');
            return;
        }

        try {
        // const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
        //   params: {
        //     refresh_token: '1000.44a682bb6df0fae30a93f2019f069e38.881efdb9f32e2ea3a6096b1f56194e4e',
        //     client_id: '1000.16WZP509CYCQRH1BS65X5QEDRUNE2W',
        //     client_secret: 'f15400ac627c3683169322f8c237434c4cd81d2ee9',
        //     grant_type: 'refresh_token',
        //   },
        // });
        const response = await axios.post('http://localhost:3001/get-token')

        console.log(response.data.access_token)
        } catch (error) {
        console.error('Error obtaining access token:', error);
        // Handle error scenario
        return;
        }

        // // Prepare form data
        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('email', email);
        // formData.append('message', message);
        // selectedFiles.forEach((file) => {
        // formData.append('files[]', file.file, file.name);
        // });

        // try {
        // // Make HTTP POST request to Zoho WorkDrive API endpoint
        // const response = await axios.post('https://workdriveapi.zoho.com/api/v1/files/upload', formData, {
        //     headers: {
        //     'Content-Type': 'multipart/form-data',
        //     Authorization: `Bearer ${accessToken}`,
        //     },
        // });

        // // Handle response from the API
        // console.log('Files uploaded successfully:', response.data);
        // // Reset the form or navigate to a success page
        // } catch (error) {
        // console.error('Error uploading files:', error);
        // // Handle error scenario
        // }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files).slice(0, 5);
        const updatedFiles = files.map((file) => {
          return {
            file,
            name: file.name,
          };
        });
        setSelectedFiles(updatedFiles);
      };
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files).slice(0, 5);
        const updatedFiles = files.map((file) => {
          return {
            file,
            name: file.name,
          };
        });
        setSelectedFiles(updatedFiles);
    };

    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo />
            </div>
            <form onSubmit={handleSubmit} className='document-form-container'>
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
                        <li key={index}>
                          {file.name}
                        </li>
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
                />
              </div>
              {error && <div className='error-message'>{error}</div>}
              <button className='btn-upload-docs' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default DocumentsRequestForm