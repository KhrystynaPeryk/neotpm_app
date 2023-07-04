import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import ArrowLeft from '../../assets/images/arrow-left.png'
import './OwnerSupport.scss'
import { addProduct } from '../../store/actions/actions';
import { v4 as uuidv4 } from 'uuid';

const OwnerSupport = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  // ADD tawtheeq issuance to cart
  const addTawtheeqIssuanceToCart = () => {
    dispatch(addProduct({
      id: uuidv4(),
      service: {
          type: 'Tawtheeq Issuance',
          details: '',
      },
      price: 630
  }));
  }

    // ADD tawtheeq assistance to cart
    const addTawtheeqAssistanceToCart = () => {
      dispatch(addProduct({
        id: uuidv4(),
        service: {
            type: 'Tawtheeq Assistance',
            details: '',
        },
        price: 1500
    }));
    }

  return (
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <Logo />
        <div className='property-header-wrapper'>
          <p className='property-header'>Owner Support</p>
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
                    Without local representation, overseas owners who rent out property in the region face the expensive and time-consuming necessity of flying overseas to get things done in Abu Dhabi. We will help you with:
                  </p>
                  <ul>
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
            <div className='price-button-wrapper compare'>
              <button type='button' onClick={() => navigate('/owner-support/power-of-attorney')}>Compare Packages</button>
            </div>
          </div>
        </div>
        <div className='tiles-row'>
          <div className='tiles-price'>
            <p>AED 630.00</p>
            <div className='price-button-wrapper'>
              <button type='button' onClick={addTawtheeqIssuanceToCart}>BUY</button>
            </div>
          </div>
          <div className='tiles-img'>
          <div 
              className={`flip-card-inner ${isTileFlipped(1) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front'>
                <h1>Tawtheeq Issuance</h1>
                <div className='document-button-wrapper'>
                  <button type='button' onClick={() => flipTile(1)}>Learn More</button>
                </div>
              </div>
              <div className='flip-card-back'>
                <div className='back-button-wrapper' onClick={flipBack}>
                  <div className='back-button'><img src={ArrowLeft} alt='arrow-left'/></div>
                </div>
                <div className='flip-card-back-padding'>
                  <h1>Do you need an access to SmartHub?</h1>
                  <p className='flip-card-back-bottom'>Tawtheeq Issuance is a service that allows both UAE residents and non-residents to obtain access to the smarthub on behalf of the customer.</p>
                  <p className='flip-card-back-bottom'>They can also choose to transfer their request to Crompton Partners for a seamless and convenient processing experience.</p>
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
                <div className='back-button-wrapper' onClick={flipBack}>
                  <div className='back-button'><img src={ArrowLeft} alt='arrow-left'/></div>
                </div>
                <div className='flip-card-back-padding'>
                  <h1>Tawtheeq Made Easy: Access & Support</h1>
                  <p className='flip-card-back-bottom'>Tawtheeq Assistance, on the other hand, caters to both residents and non-residents of the UAE. </p>
                  <p className='flip-card-back-bottom'>This service enables individuals to link their name in the Tawtheeq system, in accordance with the title deed. Access to the Tawtheeq system is facilitated through the SmartHub, where users can verify their identity using their own UAE pass.</p>
                  <p className='flip-card-back-bottom'>Additionally, Tawtheeq Assistance allows users to activate the Tawtheeq system under the owner's name or transfer the process to Crompton Partners for further assistance.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='tiles-price'>
            <p>AED 1,500.00</p>
            <div className='price-button-wrapper'>
              <button type='button' onClick={addTawtheeqAssistanceToCart}>BUY</button>
            </div>
          </div>
        </div>
        <div className='tiles-row'>
          <div className='tiles-price'>
            <div className='price-button-wrapper compare'>
              <button type='button'>Compare Packages</button>
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
                <div className='flip-card-back-padding'>
                  <h1>Transparency Handover Services</h1>
                  <p>
                    The handover of property in Abu Dhabi can be a lengthy and complex undertaking. 
                    We offer a complete suite of services to ensure a smooth, cost-effective transition in the shortest possible time:
                  </p>
                  <ul>
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
        <div className='tiles-row'>
          <div className='tiles-img'>
            <div 
              className={`flip-card-inner ${isTileFlipped(4) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front'>
                <h1>Golden Visa Services</h1>
                <div className='document-button-wrapper'>
                  <button type='button' onClick={() => flipTile(4)}>Learn More</button>
                </div>
              </div>
              <div className='flip-card-back'>
                <div className='back-button-wrapper' onClick={flipBack}>
                  <div className='back-button'><img src={ArrowLeft} alt='arrow-left'/></div>
                </div>
                <div className='flip-card-back-padding'>
                  <h1>Are you planning to apply for a UAE Golden Visa?</h1>
                  <p className='flip-card-back-bottom'>Would you like to determine if you meet the eligibility criteria for this program?</p>
                  <p className='flip-card-back-bottom'>Our team is ready to assist you in assessing your qualifications for the UAE Golden Visa and managing the application process, ensuring a smooth and convenient experience as you obtain your UAE Golden Visa.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='tiles-price'>
            <div className='price-button-wrapper compare'>
              <button type='button'>Compare Packages</button>
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

export default OwnerSupport