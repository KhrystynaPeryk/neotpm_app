import React from 'react'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import './LegalDocumentationSupport.scss'

const LegalDocumentationSupport = () => {
  return (
    <div>
        <div className='property-before-table'>
            <NavBar />
            <Logo />
            <div className='property-header-wrapper'>
                <p className='property-header'>Our Legal Documentation Support</p>
            </div>
        </div>
    </div>
  )
}

export default LegalDocumentationSupport