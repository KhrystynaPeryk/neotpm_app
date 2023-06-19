import React, { useState } from 'react'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import ArrowLeft from '../../assets/images/arrow-left.png'
import './LegalDocumentationSupport.scss'

const LegalDocumentationSupport = () => {

  //handling of tiles flips
  const [flippedTileIndex, setFlippedTileIndex] = useState(null);

  const flipTile = (index) => {
    setFlippedTileIndex(index);
  };

  const flipBack = () => {
    setFlippedTileIndex(null);
  };

  const isTileFlipped = (index) => {
    return flippedTileIndex === index;
  };

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
            <div 
              className={`flip-card-inner ${isTileFlipped(0) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front'>
                <h1>Power of Attorney</h1>
                <div className='document-button-wrapper'>
                  <button type='button' onClick={() => flipTile(0)}>Learn More</button>
                </div>
              </div>
              <div className='flip-card-back'>
                <p>Additional information about Power of Attorney</p>
                <div className='back-button-wrapper'>
                  <div className='back-button' onClick={flipBack}><img src={ArrowLeft} alt='arrow-left'/> Back</div>
                </div>
              </div>
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
          <div 
              className={`flip-card-inner ${isTileFlipped(1) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front'>
                <h1>Golden Visa Assistance</h1>
                <div className='document-button-wrapper'>
                  <button type='button' onClick={() => flipTile(1)}>Learn More</button>
                </div>
              </div>
              <div className='flip-card-back'>
                <p>Additional information about Golden Visa Assistance</p>
                <div className='back-button-wrapper'>
                <div className='back-button' onClick={flipBack}><img src={ArrowLeft} alt='arrow-left'/> Back</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tiles-row'>
          <div className='tiles-img'>
            <div 
              className={`flip-card-inner ${isTileFlipped(2) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front'>
                <h1>Tawtheeq Assistance</h1>
                <div className='document-button-wrapper'>
                  <button type='button' onClick={() => flipTile(2)}>Learn More</button>
                </div>
              </div>
              <div className='flip-card-back'>
                <p>Additional information about Tawtheeq Assistance</p>
                <div className='back-button-wrapper'>
                <div className='back-button' onClick={flipBack}><img src={ArrowLeft} alt='arrow-left'/> Back</div>
                </div>
              </div>
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
          <div 
              className={`flip-card-inner ${isTileFlipped(3) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front'>
                <h1>Property Handover Assistance</h1>
                <div className='document-button-wrapper'>
                  <button type='button' onClick={() => flipTile(3)}>Learn More</button>
                </div>
              </div>
              <div className='flip-card-back'>
                <p>Additional information about Property Handover Assistance</p>
                <div className='back-button-wrapper'>
                <div className='back-button' onClick={flipBack}><img src={ArrowLeft} alt='arrow-left'/> Back</div>
                </div>
              </div>
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