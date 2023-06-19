import React from 'react'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import './LegalDocumentationSupport.scss'

const LegalDocumentationSupport = () => {
  return (
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <Logo />
        <div className='property-header-wrapper'>
          <p className='property-header'>Our Legal Documentation Support</p>
        </div>
      </div>
      <div className='tiles-container'>
        <div className='tiles-row'>
          <div className='tiles-img'>
            <h1>Power of Attorney</h1>
            <div className='document-button-wrapper'>
              <button type='button'>Learn More</button>
            </div>
          </div>
          <div className='tiles-price'>
            <p>1000 AED</p>
            <div className='price-button-wrapper'>
              <button type='button'>Buy</button>
            </div>
          </div>
        </div>
        <div className='tiles-row'>
          <div className='tiles-price'>
            <p>1000 AED</p>
            <div className='price-button-wrapper'>
              <button type='button'>Buy</button>
            </div>
          </div>
          <div className='tiles-img'>
            <h1>Golden Visa Assistance</h1>
            <div className='document-button-wrapper'>
              <button type='button'>Learn More</button>
            </div>
          </div>
        </div>
        <div className='tiles-row'>
          <div className='tiles-img'>
            <h1>Tawtheeq Assistance</h1>
            <div className='document-button-wrapper'>
              <button type='button'>Learn More</button>
            </div>
          </div>
          <div className='tiles-price'>
            <p>1000 AED</p>
            <div className='price-button-wrapper'>
              <button type='button'>Buy</button>
            </div>
          </div>
        </div>
        <div className='tiles-row'>
          <div className='tiles-price'>
            <p>1000 AED</p>
            <div className='price-button-wrapper'>
              <button type='button'>Buy</button>
            </div>
          </div>
          <div className='tiles-img'>
            <h1>Property Handover Assistance</h1>
            <div className='document-button-wrapper'>
              <button type='button'>Learn More</button>
            </div>
          </div>
        </div> 
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>
    </div>
  )
}

export default LegalDocumentationSupport