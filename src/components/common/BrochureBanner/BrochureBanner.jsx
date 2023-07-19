import React from 'react'
import './BrochureBanner.scss'
import { downloadFirebaseFile } from '../../../firebaseStorage/downloadFirebaseFile'

const BrochureBanner = ({firestoreFileName, serviceName}) => {

    const handleDownload = () => {
        downloadFirebaseFile(firestoreFileName)
    }

    return (
        <div className='brochure-banner'>
            <p>Get our {serviceName} brochure</p>
            <button className='brochure-banner-btn' type='button' onClick={() => handleDownload(firestoreFileName)}>DOWNLOAD</button> 
        </div>
    )
}

export default BrochureBanner