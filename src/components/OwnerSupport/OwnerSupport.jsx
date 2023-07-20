import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import './OwnerSupport.scss'
import { addProduct } from '../../store/actions/actions';
import { v4 as uuidv4 } from 'uuid';
import { downloadFirebaseFile } from '../../firebaseStorage/downloadFirebaseFile';

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

  const redirectToDocumentsFormGoldenVisa = () => {
    navigate('/documents-form', {
        state: {
            service: {
                type: 'Golden Visa',
                details: 'Assistance',
            },
        }
    });
  }

  const redirectToDocumentsFormHandover = () => {
    navigate('/documents-form', {
        state: {
            service: {
                type: 'Property Handover',
                details: 'Assistance',
            },
        }
    });
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
          <div className='tiles-img' onClick={() => flipBack(0)}>
            <div 
              className={`flip-card-inner ${isTileFlipped(0) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front poa'>
                {isTileFlipped(0) ? '' : (
                  <div className='flip-card-front poa'>
                    <h1>Power of Attorney</h1>
                    <div className='document-button-wrapper'>
                      <button type='button' onClick={(event) => { event.stopPropagation(); flipTile(0); }}>Learn More</button>
                    </div>
                  </div>
                )}
              </div>
              <div className='flip-card-back poa'>
                <div className='flip-card-back-padding'>
                  <h1>Planning to leave UAE or have left already?</h1>
                  <p>
                    You will need to appoint a responsible party who can <b>represent you and act on your behalf</b> to address a property concern while residing outside of the country.
                    Without local representation, overseas owners who rent out property in the region face the expensive and time-consuming necessity of flying overseas to get things done in Abu Dhabi. We will help you with:
                  </p>
                  <ul>
                    <li>Issuing a Tawtheeq for your tenant</li>
                    <li>Collecting a title deed to settle a dispute</li>
                    <li>Property handover</li>
                    <li>Buying and renting property in the UAE</li>
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
          <div className='tiles-img' onClick={() => flipBack(1)}>
          <div 
              className={`flip-card-inner ${isTileFlipped(1) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front t-issuance'>
              {isTileFlipped(1) ? '' : (
                <div className='flip-card-front t-issuance'>
                  <h1>Tawtheeq Issuance</h1>
                  <div className='document-button-wrapper'>
                    <button type='button' onClick={(event) => { event.stopPropagation(); flipTile(1); }}>Learn More</button>
                  </div>
                </div>
              )}
              </div>
              <div className='flip-card-back t-issuance'>
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
          <div className='tiles-img' onClick={() => flipBack(2)}>
            <div 
              className={`flip-card-inner ${isTileFlipped(2) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front t-assistance'>
                {isTileFlipped(2) ? '' : (
                  <div className='flip-card-front t-assistance'>
                    <h1>Tawtheeq Assistance</h1>
                    <div className='document-button-wrapper'>
                      <button type='button' onClick={(event) => { event.stopPropagation(); flipTile(2); }}>Learn More</button>
                    </div>
                  </div>  
                )}
              </div>
              <div className='flip-card-back t-assistance'>
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
            <p>AED 1,800.00</p>
            <div className='price-button-wrapper compare'>
              <button type='button' onClick={redirectToDocumentsFormHandover}>Send Your Details</button>
              <button type='button' className='download-brochure' onClick={() => downloadFirebaseFile('TPM Property Handover Assistance.pdf')}>DOWNLOAD brochure</button>
            </div>
          </div>
          <div className='tiles-img' onClick={() => flipBack(3)}>
          <div 
              className={`flip-card-inner ${isTileFlipped(3) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front handover'>
                {isTileFlipped(3) ? '' : (
                  <div className='flip-card-front handover'>
                    <h1>Property Handover Assistance</h1>
                    <div className='document-button-wrapper'>
                      <button type='button' onClick={(event) => { event.stopPropagation(); flipTile(3); }}>Learn More</button>
                    </div>
                  </div>
                )}
              </div>
              <div className='flip-card-back handover'>
                <div className='flip-card-back-padding'>
                  <h1>Transparency Handover Services</h1>
                  <p>
                    The handover of property in Abu Dhabi can be a lengthy and complex undertaking. 
                    We offer a complete suite of services to ensure a smooth, cost-effective transition in the shortest possible time:
                  </p>
                  <ul>
                    <li>Liaison with Developers</li>
                    <li>UAE Pass & SmartHub setup</li>
                    <li>Title Deed Issuance</li>
                    <li>Utility Registration</li>
                    <li>Snagging & De-snagging</li>
                    <li>Key Handover</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='tiles-row'>
          <div className='tiles-img' onClick={() => flipBack(4)}>
            <div 
              className={`flip-card-inner ${isTileFlipped(4) ? 'flipped' : ''}`}
            >
              <div className='flip-card-front golden-visa'>
                  {isTileFlipped(4) ? '' : (
                    <div className='flip-card-front golden-visa'>
                      <h1>Golden Visa Services</h1>
                      <div className='document-button-wrapper'>
                        <button type='button' onClick={(event) => { event.stopPropagation(); flipTile(4); }}>Learn More</button>
                      </div>
                    </div>  
                  )}
              </div>
              <div className='flip-card-back golden-visa'>
                <div className='flip-card-back-padding'>
                  <h1>Are you planning to apply for a UAE Golden Visa?</h1>
                  <p className='flip-card-back-bottom'>Our team is ready to assist you in assessing your qualifications for the UAE Golden Visa and managing the application process, ensuring a smooth and convenient experience as you obtain your UAE Golden Visa. Our package includes:</p>
                  <ul>
                    <li>Evaluation certificate</li>
                    <li>Application fees</li>
                    <li>Medical screening</li>
                    <li>Health insurance</li>
                    <li>Visa and emirates ID processing</li>
                    <li>Documentation</li>
                    <li>Government liaison</li>
                    <li>PRO services</li>
                  </ul> 
                </div>
              </div>
            </div>
          </div>
          <div className='tiles-price'>
            <div className='price-button-wrapper compare'>
              <button type='button' onClick={redirectToDocumentsFormGoldenVisa}>Send Your Details</button>
              <button type='button' className='download-brochure' onClick={() => downloadFirebaseFile('TPM Golden Visa Package.pdf')}>DOWNLOAD brochure</button>
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