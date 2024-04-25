import React, { useEffect } from 'react'
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

  const addToCart = (serviceType, price) => {
    dispatch(addProduct({
      id: uuidv4(),
      service: {
          type: serviceType,
          details: '',
      },
      price: price
    }));
  }

  const redirectToContactForm = (serviceType) => {
    window.scrollTo(0, 0);
    navigate('/contact-form', {
        state: {
            service: {
                type: serviceType,
                details: 'Assistance',
            },
        }
    });
  }

  useEffect(() => {
    //for old non existing urls like /contacts from the old website
    window.history.replaceState({}, '', '/owner-support');
  }, []);

  return (
    <div className='property-container'>
      <div className='property-before-table'>
        <NavBar />
        <Logo isCPlogoVisible={true}/>
        <div className='property-header-wrapper'>
          <p className='property-header'>Owner Support</p>
        </div>
      </div>
      <div className='tiles-container'>
        <div className='tiles-row'>
          <div className='tiles-img'>
            <div className='flip-card-front poa'>
              <h1>Power of Attorney</h1>
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
              <button type='button' onClick={() => addToCart('Tawtheeq Issuance', 630)}>BUY</button>
            </div>
          </div>
          <div className='tiles-img'>
            <div className='flip-card-front t-issuance'>
              <h1>Tawtheeq Issuance</h1>
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
        <div className='tiles-row'>
          <div className='tiles-img'>
            <div className='flip-card-front t-assistance'>
              <h1>Tawtheeq Assistance</h1>
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
          <div className='tiles-price'>
            <p>AED 1,500.00</p>
            <div className='price-button-wrapper'>
              <button type='button' onClick={() => addToCart('Tawtheeq Assistance', 1500)}>BUY</button>
            </div>
          </div>
        </div>
        <div className='tiles-row'>
          <div className='tiles-price'>
            <p>AED 1,800.00</p>
            <div className='price-button-wrapper compare'>
              <button type='button' onClick={() => redirectToContactForm('Property Handover')}>Send Your Details</button>
              <button type='button' className='download-brochure' onClick={() => downloadFirebaseFile('TPM Property Handover Assistance.pdf')}>DOWNLOAD brochure</button>
            </div>
          </div>
          <div className='tiles-img'>
            <div className='flip-card-front handover'>
              <h1>Property Handover Assistance</h1>
            </div>
            <div className='flip-card-back handover'>
              <div className='flip-card-back-padding'>
                <h1>Transparent Handover Services</h1>
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
        <div className='tiles-row'>
          <div className='tiles-img'>
            <div className='flip-card-front golden-visa'>
              <h1>Golden Visa Services</h1>
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
          <div className='tiles-price'>
            <div className='price-button-wrapper compare'>
              <button type='button' onClick={() => redirectToContactForm('Golden Visa')}>Send Your Details</button>
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