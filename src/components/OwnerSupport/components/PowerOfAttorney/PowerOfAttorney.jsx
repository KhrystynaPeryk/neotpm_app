import React, {useEffect, useState} from 'react'
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

    const [isLiteClicked, setIsLiteClicked] = useState(false)
    const [isProperClicked, setIsProperClicked] = useState(false)
    const [isComprehensiveClicked, setIsComprehensiveClicked] = useState(false)

    //ADD Lite PACKAGE TO CART
    const addLiteToCart = () => {
        dispatch(addProduct({
            id: uuidv4(),
            service: {
                type: 'Power of Attorney',
                details: 'Lite package',
            },
            price: 2500
        }));
    }

    //ADD Proper PACKAGE TO CART
    const addProperToCart = () => {
        dispatch(addProduct({
            id: uuidv4(),
            service: {
                type: 'Power of Attorney',
                details: 'Proper package',
            },
            price: 4500
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
                        <div className='table-row-item'>POA Drafting in English</div>
                        <div className='table-row-item'>Unlimited Amendments</div>
                        {isLiteClicked ? (
                            <>
                                <div className='table-row-item'>Apply Online Attestation for Approval (Fees included)</div>
                                <div className='table-row-item'>Assist Online Attestation Appointment Setting (Fees included)</div>
                                <div className='table-row-item'>Translate the POA into Arabic (Fees included)</div>
                            </>
                        ) : null}
                    </div>
                    {isLiteClicked ? (
                        <div className='table-column-footer'>
                            <div className='table-column-price'>AED 2,500.00</div>
                            <button type='button' onClick={addLiteToCart}>BUY</button>
                        </div>
                    ) : null}
                    {isLiteClicked ? (<div className='table-column-nav' onClick={() => setIsLiteClicked(false)}>Show Less </div>) :
                    (<div className='table-column-nav' onClick={() => setIsLiteClicked(true)}>View All</div>)}
                </div>
                <div className='table-column proper'>
                    <div className='ribbon'><span>POPULAR</span></div>
                    <div className='table-column-header'>
                        <img src={Proper} alt='proper'></img>
                        <div className='package-name'>PROPER</div>
                        <div>POA + POA Assistance</div>
                    </div>
                    <div className='table-column-everything'>Everything in Lite, plus:</div>
                    <div className='table-column-body'>
                        <div className='table-row-item'>Be the POA on the POA Document (3 years)</div>
                        <div className='table-row-item'>Sign Documents as the POA</div>
                    </div>
                    {isProperClicked ? (
                        <div className='table-column-footer'>
                            <div className='table-column-price'>AED 4,500.00</div>
                            <button type='button' onClick={addProperToCart}>BUY</button>
                        </div>
                    ) : null}
                    {isProperClicked ? (<div className='table-column-nav' onClick={() => setIsProperClicked(false)}>Show Less </div>) :
                    (<div className='table-column-nav' onClick={() => setIsProperClicked(true)}>View All</div>)}
                </div>
                <div className='table-column'>
                    <div className='ribbon'><span>+PM</span></div>
                    <div className='table-column-header'>
                    <img src={Comprehensive} alt='comprehensive'></img>
                        <div className='package-name'>COMPREHENSIVE</div>
                        <div>PM with POA</div>
                    </div>
                    <div className='table-column-everything'>Everything in Proper, plus:</div>
                    <div className='table-column-body'>
                        <div className='table-row-item'>Fix Issues Relating to the Property (tawtheeq, title deed, leasing etc)</div>
                        <div className='table-row-item'>Fix Any Roadblocks Relating to Getting the POA Approved</div>
                        {isComprehensiveClicked ? (
                            <>
                                <div className='table-row-item'>Tenant Sourcing with a Dedicated PM to Promote</div>
                                <div className='table-row-item'>Lease Management</div>
                                <div className='table-row-item'>Move-in/out Documentation Permission and Clearances, Inspection</div>
                                <div className='table-row-item'>Maintenance Liaison</div>
                                <div className='table-row-item'>Tawtheeq Management</div>
                                <div className='table-row-item'>Lease Renewal Management</div>
                                <div className='table-row-item'>Cheque Deposit Services</div>
                                <div className='table-row-item'>Security Deposit Settlement</div>
                                <div className='table-row-item'>Tenant Management</div>
                                <div className='table-row-item'>Ensure the Property Complies with Governmental Requirement</div>
                            </>
                        ) : null}
                    </div>
                    {isComprehensiveClicked ? (
                        <div className='table-column-footer'>
                            <div className='table-column-price'>6% of the Rent with a Minimum Annual Fee of AED 6,500.00</div>
                            <button type='button' onClick={redirectToDocumentsFormComprehensive}>BUY</button>
                        </div>
                    ) : null}
                    {isComprehensiveClicked ? (<div className='table-column-nav' onClick={() => setIsComprehensiveClicked(false)}>Show Less </div>) :
                    (<div className='table-column-nav' onClick={() => setIsComprehensiveClicked(true)}>View All</div>)}
                </div>
            </div>
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    )
}

export default PowerOfAttorney