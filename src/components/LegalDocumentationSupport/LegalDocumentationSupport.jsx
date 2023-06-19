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
                <div className='back-button-wrapper' onClick={flipBack}>
                  <div className='back-button'><img src={ArrowLeft} alt='arrow-left'/></div>
                </div>
                <div className='flip-card-back-padding'>
                  <h1>Planning to leave UAE or have left already?</h1>
                  <p>
                    You will need to appoint a responsible party who can <b>represent you and act on your behalf</b> to address a property concern while residing outside of the country.
                    Without local representation, overseas owners who rent out property in the region face the expensive and time-consuming necessity of flying overseas to get things done in Abu Dhabi.
                  </p>
                  <ul>
                    <p>We will help you with:</p>
                    <li>issuing a Tawtheeq for your tenant</li>
                    <li>collecting a title deed to settle a dispute</li>
                    <li>a property handover</li>
                    <li>buying and renting property in the UAE</li>
                  </ul>     
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
                <div className='back-button-wrapper' onClick={flipBack}>
                  <div className='back-button'><img src={ArrowLeft} alt='arrow-left'/></div>
                </div>
                <h1>Are you planning to apply for a UAE Golden Visa?</h1>
                <p>Would you like to determine if you meet the eligibility criteria for this program?</p>
                <p>Our team is ready to assist you in assessing your qualifications for the UAE Golden Visa and managing the application process, ensuring a smooth and convenient experience as you obtain your UAE Golden Visa.</p>
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
                <div className='back-button-wrapper' onClick={flipBack}>
                  <div className='back-button'><img src={ArrowLeft} alt='arrow-left'/></div>
                </div>
                <h1>Do you wish to rent out property in the UAE?</h1>
                <p className='flip-card-back-bottom'>
                  If so, you will need a Tawtheeq.
                  A Tawtheeq is the government registration of your lease contract designed to formalise agreements and ensure transparency between landlords and tenants to help avoid disputes. 
                </p>
                <ul>
                  <p className='flip-card-back-bottom'>Reasons to get Tawtheeq</p>
                  <li>Landlords cannot create a legal lease without a Tawtheeq, and you will not be able to raise a court case in the event of a dispute.</li>
                  <li>Some community management companies have strict rules and may not allow tenants to move into a property without a Tawtheeq in place.</li>
                  <li>A registered and up-to-date Tawtheeq Abu Dhabi contract is needed to connect your electricity and water with the Abu Dhabi Distribution Company (ADDC).</li>
                  <li>Many types of tenants must have a legal Tawtheeq contract, such as government workers and those that want to sponsor a family member for a residence permit, for instance.</li>
                </ul>
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
                <div className='back-button-wrapper' onClick={flipBack}>
                  <div className='back-button'><img src={ArrowLeft} alt='arrow-left'/></div>
                </div>
                <h1>Transparency Handover Services</h1>
                <p>
                  The handover of property in Abu Dhabi can be a lengthy and complex undertaking. 
                  We offer a complete suite of services to ensure a smooth, cost-effective transition in the shortest possible time.
                </p>
                <ul>
                  <p>The Benefits of Professional Handover Assistance</p>
                  <li>Hassle-free, stress-free handovers</li>
                  <li>Smooth Property Transitions</li>
                  <li>Get your property to market faster</li>
                  <li>Cost-reductions/efficiencies</li>
                  <li>Free up more time and money</li>
                  <li>Ongoing management available</li>
                </ul>
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