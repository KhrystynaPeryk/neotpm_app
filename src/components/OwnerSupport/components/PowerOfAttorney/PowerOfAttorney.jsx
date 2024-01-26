import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../../../store/actions/actions';
import NavBar from '../../../common/NavBar/NavBar'
import Logo from '../../../common/Logo/Logo'
import Footer from '../../../common/Footer/Footer'
import './PowerOfAttorney.scss'
import { v4 as uuidv4 } from 'uuid';
import Proper from '../../../../assets/images/poa_lite.png'
import Lite from '../../../../assets/images/poa_proper.png'
import Comprehensive from '../../../../assets/images/poa_comprehensive.png'

const PowerOfAttorney = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //ADD Lite PACKAGE TO CART
    const addLiteToCart = () => {
        dispatch(addProduct({
            id: uuidv4(),
            service: {
                type: 'Power of Attorney',
                details: 'Lite package',
            },
            price: 3500
        }));
    }

    //ADD Proper PACKAGE TO CART
    const addProperToCart = () => {
        dispatch(addProduct({
            id: uuidv4(),
            service: {
                type: 'Power of Attorney',
                details: 'Premium package',
            },
            price: 5500
        }));
    }

    const redirectToDocumentsFormComprehensive = () => {
        window.scrollTo(0, 0);
        navigate('/documents-form', {
            state: {
                service: {
                    type: 'Power of Attorney',
                    details: 'Comprehensive package',
                },
            }
        });
    }

    useEffect(() => {
        //for old non existing urls like /contacts from the old website
        window.history.replaceState({}, '', '/owner-support/power-of-attorney');
    }, []);

    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo />
                <div className='property-header-wrapper'>
                <p className='property-header'>POA Packages</p>
                </div>
            </div>
            <div className="owner-support-item-container">
                <div className='table-column'>
                    <div className='table-column-header lite'>
                        <img src={Lite} alt='lite'></img>
                        <div className='package-name'>LITE</div>
                        <div>POA Assistance</div>
                    </div>
                    <div className='table-column-body'>
                        <div className='table-row-item'>
                            <p>POA DRAFTING</p>
                            <p>Drafting in English language, Unlimited Amendments, POA Arabic Translation</p>
                        </div>
                        <div className='table-row-item'>
                            <p>ONLINE ATTESTATION</p>
                            <p>Applying for Approval online, Assisting in Online Attestation Appointment setting</p>
                        </div>
                    </div>
                    <div className='table-column-footer'>
                        <div className='table-column-price'>AED 3,500.00</div>
                        <button type='button' onClick={addLiteToCart}>BUY</button>
                    </div>
                </div>
                <div className='table-column proper'>
                    <div className='ribbon'><span>POPULAR</span></div>
                    <div className='table-column-header'>
                        <img src={Proper} alt='proper'></img>
                        <div className='package-name'>PREMIUM</div>
                        <div>POA + POA Documentation</div>
                    </div>
                    <div className='table-column-everything'>Everything in Lite, plus:</div>
                    <div className='table-column-body'>
                        <div className='table-row-item'>
                            <p>POA DOCUMENTATION</p>
                            <p>Be the POA in the POA document, Sign documents as the POA</p>
                        </div>
                    </div>
                    <div className='table-column-footer'>
                        <div className='table-column-price'>AED 5,500.00</div>
                        <button type='button' onClick={addProperToCart}>BUY</button>
                    </div>
                </div>
                <div className='table-column'>
                    <div className='ribbon'><span>+PM</span></div>
                    <div className='table-column-header'>
                    <img src={Comprehensive} alt='comprehensive'></img>
                        <div className='package-name'>COMPREHENSIVE</div>
                        <div>PM with POA</div>
                    </div>
                    <div className='table-column-everything'>Everything in Premium, plus:</div>
                    <div className='table-column-body'>
                        <div className='table-row-item'>
                            <p>TAWTHEEQ, TITLE DEED & LEASING</p>
                            <p>Tawtheeq application, fixing issues relating to the property and to getting the POA approved</p>
                        </div>
                        <div className='table-row-item'>
                            <p>TENANT SOURCING</p>
                            <p>Finding tenants for your properties with a dedicated Property Manager to promote</p>
                        </div>
                        <div className='table-row-item'>
                            <p>MOVE IN/OUT DOCUMENTATION</p>
                            <p>Managing permission, Clearances, Inspection of Property for wear and tear with full report</p>
                        </div>
                        <div className='table-row-item'>
                            <p>MAINTENANCE SOLUTION LIAISON</p>
                            <p>Maintenance liaison, obtain quotation, ensure quality of maintenance work </p>
                        </div>
                        <div className='table-row-item'>
                            <p>SECURITY DEPOSIT SETTLEMENT</p>
                            <p>Managing cheque deposits, billing reports and payment settlements with the bank</p>
                        </div>
                        <div className='table-row-item'>
                            <p>TENANT MANAGEMENT</p>
                            <p>Liaise with tenants & external agents, negotiate prices, rental dispute settlement, communicate to Tenant in behalf of the Owner</p>
                        </div>
                        <div className='table-row-item'>
                            <p>GOVERNMENTAL COMPLIANCE</p>
                            <p>Bounced cheques collection, sign or collect legal documentation, ensuring the Property complies with governmental requirements</p>
                        </div>
                        <div className='table-row-item'>
                            <p>SALES ASSISTANCE</p>
                            <p>Sales viewing arrangement, sales liaison, post-sales settlement, settlement of utility account/s after the sale transfer</p>
                        </div>
                    </div>
                    <div className='table-column-footer'>
                        <div className='table-column-price'>AED 7,500.00 or 8% of annual Rent whichever is higher</div>
                        <button type='button' onClick={redirectToDocumentsFormComprehensive}>BUY</button>
                    </div>
                </div>
            </div>
            <div className='poa-note'>
                <p><b>Note: </b>For additional Principals of more than 1, an additional fee of AED 1,000 per Principal or Signatory will be added on top of the standard fees and for Properties more than 1, please inquire directly to get a custom quote.</p>
            </div>  
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    )
}

export default PowerOfAttorney