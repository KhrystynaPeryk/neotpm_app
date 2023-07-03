import React, {useRef, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './PropertyManagement.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import BronzeHouse from '../../assets/images/bronze-icon-white.png'
import GoldHouse from '../../assets/images/gold-icon-white.png'
import PlatinumHouse from '../../assets/images/platinum-icon-white.png'
import ArrowRight from '../../assets/images/arrow-right.png'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PropertyManagement = () => {

    const navigate = useNavigate();

    const [activeSlide, setActiveSlide] = useState(0);
    const handleRedirectToQuiz = () => {
        window.open('https://transparent-poa.involve.me/poa-uae/', '_blank');
    };

    //handling scroll to the section
    const scrollToBronzeSection = () => {
        myFirstIngRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToGoldSection = () => {
        mySecondIngRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPlatinumSection = () => {
        myThirdIngRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const redirectToDocumentsFormBronze = () => {
        navigate('/documents-form', {
            state: {
                service: {
                    type: 'Property Management',
                    details: 'Bronze package',
                },
            }
        });
    }

    const redirectToDocumentsFormGold = () => {
        navigate('/documents-form', {
            state: {
                service: {
                    type: 'Property Management',
                    details: 'Gold package',
                },
            }
        });
    }

    const redirectToDocumentsFormPlatinum = () => {
        navigate('/documents-form', {
            state: {
                service: {
                    type: 'Property Management',
                    details: 'Platinum package',
                },
            }
        });
    }
        
    //below const and useEffect for handling of fade-in animation for .property-after-table
    const myFirstIngRef = useRef();
    const mySecondIngRef = useRef();
    const myThirdIngRef = useRef();
    const [myFirstElementVisible, setMyFirstElementVisible] = useState(false);
    const [mySecondElementVisible, setMySecondElementVisible] = useState(false);
    const [myThirdElementVisible, setMyThirdElementVisible] = useState(false);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === myFirstIngRef.current) {
                        setMyFirstElementVisible(true);
                    } else if (entry.target === mySecondIngRef.current) {
                        setMySecondElementVisible(true);
                    } else if (entry.target === myThirdIngRef.current) {
                        setMyThirdElementVisible(true);
                    }
                }
            });
        };
        
        const options = {
            threshold: 0.2,
        };
        
        const observer = new IntersectionObserver(handleIntersection, options);
        
        if (myFirstIngRef.current) {
            observer.observe(myFirstIngRef.current);
        }
        
        if (mySecondIngRef.current) {
            observer.observe(mySecondIngRef.current);
        }
        
        if (myThirdIngRef.current) {
            observer.observe(myThirdIngRef.current);
        }
        
        return () => {
            if (myFirstIngRef.current) {
                observer.unobserve(myFirstIngRef.current);
            }
            if (mySecondIngRef.current) {
                observer.unobserve(mySecondIngRef.current);
            }
            if (myThirdIngRef.current) {
                observer.unobserve(myThirdIngRef.current);
            }
        };
    }, []);


    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo />
                <div className='property-header-wrapper'>
                    <p className='property-header'>Property Management Packages</p>
                </div>
            </div>
            <div className='property-table-wrapper'>
                <section className='table-column'>
                    <div className='property-icon-container bronze'>
                        <img className='property-icon' src={BronzeHouse} alt='BronzeHouse' />
                        <div className='table-section-header'>BRONZE</div>
                    </div>
                    <div className='table-section-item'>Tenant Sourcing</div>
                    <div className='table-section-item'>Rental Cheque Management</div>
                    <div className='table-section-item'>Move-in Services</div>
                    <div className='table-section-item'>Tenancy Renewal</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-price'>From AED 3,500 or 3% of the rent</div>
                    <button type='button' onClick={redirectToDocumentsFormBronze}>BUY</button>
                    <div className='property-learn-more' onClick={scrollToBronzeSection}>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
                <section className='table-column gold'>
                    <div className='ribbon'><span>HIT</span></div>
                    <div className='property-icon-container gold'>
                        <img className='property-icon' src={GoldHouse} alt='GoldHouse' />
                        <div className='table-section-header'>GOLD</div>
                    </div>
                    <div className='table-section-item'>Tenant Sourcing</div>
                    <div className='table-section-item'>Rental Cheque Management</div>
                    <div className='table-section-item'>Move-in Services</div>
                    <div className='table-section-item'>Tenancy Renewal</div>
                    <div className='table-section-item'>Move-out Services</div>
                    <div className='table-section-item'>Security Deposit Settlement</div>
                    <div className='table-section-item'>Bill Payment</div>
                    <div className='table-section-item'>Maintenance Solution Liaison</div>
                    <div className='table-section-item'>Handover Assistance from Developer</div>
                    <div className='table-section-item'>Ad Hoc Assistance (4h credit/annum)</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-item table-cross'>╳</div>
                    <div className='table-section-price'>From AED 5,000 or 5% of the rent</div>
                    <button type='button' onClick={redirectToDocumentsFormGold}>BUY</button>
                    <div className='property-learn-more' onClick={scrollToGoldSection}>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
                <section className='table-column'>
                    <div className='ribbon'><span>+POA</span></div>
                    <div className='property-icon-container platinum'>
                        <img className='property-icon' src={PlatinumHouse} alt='PlatinumHouse' />
                        <div className='table-section-header'>PLATINUM</div>
                    </div>
                    <div className='table-section-item'>Tenant Sourcing</div>
                    <div className='table-section-item'>Rental Cheque Management</div>
                    <div className='table-section-item'>Move-in Services</div>
                    <div className='table-section-item'>Tenancy Renewal</div>
                    <div className='table-section-item'>Move-out Services</div>
                    <div className='table-section-item'>Security Deposit Settlement</div>
                    <div className='table-section-item'>Bill Payment</div>
                    <div className='table-section-item'>Maintenance Solution Liaison</div>
                    <div className='table-section-item'>Handover Assistance from Developer</div>
                    <div className='table-section-item'>Ad Hoc Assistance (10h credit/annum)</div>
                    <div className='table-section-item'>Legal Representation (POA)</div>
                    <div className='table-section-item'>Sales & Post Sales Assistance</div>
                    <div className='table-section-price'>From AED 6,500 or 8% of the rent</div>
                    <button type='button' onClick={redirectToDocumentsFormPlatinum}>BUY</button>
                    <div className='property-learn-more' onClick={scrollToPlatinumSection}>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
            </div>
            <div className="home-services-image maintenance-img first" />
            <div className={`property-after-table ${myFirstElementVisible ? 'fade-in' : ''}`}
                ref={myFirstIngRef}
            >
                <div className='property-header-wrapper'>
                    <p className='property-header subheader'>BRONZE</p>
                </div>
                <p className='property-package-caption'>Experience the Convenience of <span>Hassle-free</span> Property Management.</p>
                <p className='property-package-description'>
                    <b>The Bronze Package</b> offers <span>essential</span> services to assist you in <span>managing your rental property</span>. It includes features such as advising market prices, professional photography, online marketing, promotion through internal and external agents, monitoring weekly viewing numbers, strategizing property promotion, rental cheque management, move-in services, and tenancy renewal.
                </p>
                <div className='property-button-wrapper'>
                    <button type='button' onClick={redirectToDocumentsFormBronze}>Send Your Details</button>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel
                    selectedItem={activeSlide}
                    onChange={(index) => setActiveSlide(index)}
                    showArrows
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    showThumbs={false}
                >                        
                    <div className="carousel-item bronze">
                        <p className='carousel-item-header'>Bronze Tenant Sourcing</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Advise market price</p>
                            <p className='carousel-item-feature'>Professional photography</p>
                            <p className='carousel-item-feature'>Online marketing</p>
                            <p className='carousel-item-feature'>Internal/External agents promotion</p>
                            <p className='carousel-item-feature'>Monitor weekly viewing numbers</p>
                            <p className='carousel-item-feature'>Strategise on property promotion</p>
                        </div>
                    </div>
                    <div className="carousel-item bronze">
                        <p className='carousel-item-header'>Bronze Rental Cheque Management</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Rent & security deposit collection</p>
                            <p className='carousel-item-feature'>Cheque deposit service</p>
                            <p className='carousel-item-feature'>Hold security deposit</p>
                        </div>    
                    </div>
                    <div className="carousel-item bronze">
                        <p className='carousel-item-header'>Bronze Move-in Services</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Tawtheeq application</p>
                            <p className='carousel-item-feature'>ADDC application</p>
                            <p className='carousel-item-feature'>Gas connection</p>
                            <p className='carousel-item-feature'>Chilled water connection</p>
                            <p className='carousel-item-feature'>Move-in Inspection</p>
                            <p className='carousel-item-feature'>Inventory list</p>
                        </div>
                    </div>
                    <div className="carousel-item bronze">
                        <p className='carousel-item-header'>Bronze Tenancy Renewal</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Renewal reminder to both parties</p>
                            <p className='carousel-item-feature'>Renewal negotiation</p>
                            <p className='carousel-item-feature'>Rental cheque collection</p>
                            <p className='carousel-item-feature'>Tawtheeq application</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            {/* <div className="home-services-image maintenance-img second" /> */}
            <div id="gold-section" className={`property-after-table ${mySecondElementVisible ? 'fade-in' : ''}`}
                ref={mySecondIngRef}
            >
                <div className='property-header-wrapper'>
                    <p className='property-header subheader'>GOLD</p>
                </div>
                <p className='property-package-caption'><span>Elevate</span> Your Property Management Experience.</p>
                <p className='property-package-description'>
                    Upgrade to the <b>Gold Package</b> for <span>comprehensive property management</span> services. In addition to the features provided in the Bronze Package, it offers <span>other benefits</span> like move-out services, security deposit settlement, bill payment assistance, maintenance solution liaison, handover assistance from the developer, governmental compliance support, ad hoc assistance, and more.
                </p>
                <div className='property-button-wrapper'>
                    <button type='button' onClick={redirectToDocumentsFormGold}>Send Your Details</button>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel
                    selectedItem={activeSlide}
                    onChange={(index) => setActiveSlide(index)}
                    showArrows
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    showThumbs={false}
                >                        
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Gold Tenant Sourcing</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Advise market price</p>              
                            <p className='carousel-item-feature'>Professional photography</p>
                            <p className='carousel-item-feature'>Online marketing</p>
                            <p className='carousel-item-feature'>Internal/External agents promotion</p>
                            <p className='carousel-item-feature'>Monitor weekly viewing numbers</p>
                            <p className='carousel-item-feature'>Strategise on property promotion</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Gold Rental Cheque Management</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Rent & security deposit collection</p>
                            <p className='carousel-item-feature'>Cheque deposit service</p>
                            <p className='carousel-item-feature'>Hold security deposit</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">                        
                        <p className='carousel-item-header'>Gold Move-in Services</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Tawtheeq application</p>
                            <p className='carousel-item-feature'>ADDC application</p>
                            <p className='carousel-item-feature'>Gas connection</p>
                            <p className='carousel-item-feature'>Chilled water connection</p>
                            <p className='carousel-item-feature'>Move-in Inspection</p>
                            <p className='carousel-item-feature'>Inventory list</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Gold Tenancy Renewal</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Renewal reminder to both parties</p>
                            <p className='carousel-item-feature'>Renewal negotiation</p>
                            <p className='carousel-item-feature'>Rental cheque collection</p>
                            <p className='carousel-item-feature'>Tawtheeq application</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">             
                        <p className='carousel-item-header'>Gold Move-out Services</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Move-out application with the developer</p>
                            <p className='carousel-item-feature'>Move-out documentation and clearances</p>
                            <p className='carousel-item-feature'>Move-out handover of keys, access cards</p>
                            <p className='carousel-item-feature'>Pre-move out inspection (upon request)</p>
                            <p className='carousel-item-feature'>Move-out inspection with detailed inspection report</p>
                            <p className='carousel-item-feature'>Quotation generation for fix up the property</p>
                            <p className='carousel-item-feature'>Property fix-up supervision</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Gold Security Deposit Settlement</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Detailed breakdown report</p>
                            <p className='carousel-item-feature'>Settle security deposit</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">                
                        <p className='carousel-item-header'>Gold Bill Payment</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Service charge payment assistance</p>
                            <p className='carousel-item-feature'>Utility bill payment assistance</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Gold Maintenance Solution Liaison</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Maintenance Liaison</p>
                            <p className='carousel-item-feature'>Obtain Quotation</p>
                            <p className='carousel-item-feature'>Ensure quality of maintenance work</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Gold Handover Assistance from developer</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Obtain title deed</p>
                            <p className='carousel-item-feature'>Transfer ADDC's account name</p>
                            <p className='carousel-item-feature'>Snagging and desnagging</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Gold Governmental Compliance</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Tawtheeq Account Management</p>
                            <p className='carousel-item-feature'>Other ad hoc assistance</p>
                        </div>
                    </div>
                    <div className="carousel-item gold">                
                        <p className='carousel-item-header'>Gold Ad Hoc Assistance</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>4h credits/annum in assisting to resolve any other issues unspecified (or AED 100/hour)</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            {/* <div className="home-services-image maintenance-img third" /> */}
            <div id="platinum-section" className={`property-after-table ${myThirdElementVisible ? 'fade-in' : ''}`}
                ref={myThirdIngRef}
            >
                <div className='property-header-wrapper'>
                    <p className='property-header subheader'>PLATINUM</p>
                </div>
                <p className='property-package-caption'>Seamlessly Managed Properties with Added <span>Power of Attorney</span>.</p>
                <p className='property-package-description'>
                    Experience the utmost convenience with our <b>Platinum Package</b>. It encompasses all the features of the Gold Package and goes a step further by <span>providing legal representation</span>, including bounced cheques collection and rental dispute settlement. It also offers sales and post-sales assistance, making it an all-inclusive package for property owners seeking hassle-free management.
                </p>
                <div className='property-button-wrapper'>
                    <button type='button' onClick={redirectToDocumentsFormPlatinum}>Send Your Details</button>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel
                    selectedItem={activeSlide}
                    onChange={(index) => setActiveSlide(index)}
                    showArrows
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    showThumbs={false}
                >                        
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Tenant Sourcing</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Advise market price</p>
                            <p className='carousel-item-feature'>Professional photography</p>
                            <p className='carousel-item-feature'>Online marketing</p>
                            <p className='carousel-item-feature'>Internal/External agents promotion</p>
                            <p className='carousel-item-feature'>Monitor weekly viewing numbers</p>
                            <p className='carousel-item-feature'>Strategise on property promotion</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Rental Cheque Management</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Rent & security deposit collection</p>
                            <p className='carousel-item-feature'>Cheque deposit service</p>
                            <p className='carousel-item-feature'>Hold security deposit</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Move-in Services</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Tawtheeq application</p>
                            <p className='carousel-item-feature'>ADDC application</p>
                            <p className='carousel-item-feature'>Gas connection</p>
                            <p className='carousel-item-feature'>Chilled water connection</p>
                            <p className='carousel-item-feature'>Move-in Inspection</p>
                            <p className='carousel-item-feature'>Inventory list</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Tenancy Renewal</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Renewal reminder to both parties</p>
                            <p className='carousel-item-feature'>Renewal negotiation</p>
                            <p className='carousel-item-feature'>Rental cheque collection</p>
                            <p className='carousel-item-feature'>Tawtheeq application</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Move-out Services</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Move-out application with the developer</p>
                            <p className='carousel-item-feature'>Move-out documentation and clearances</p>
                            <p className='carousel-item-feature'>Move-out handover of keys, access cards</p>
                            <p className='carousel-item-feature'>Pre-move out inspection (upon request)</p>
                            <p className='carousel-item-feature'>Move-out inspection with detailed inspection report</p>
                            <p className='carousel-item-feature'>Quotation generation for fix up the property</p>
                            <p className='carousel-item-feature'>Property fix-up supervision</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Security Deposit Settlement</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Detailed breakdown report</p>
                            <p className='carousel-item-feature'>Settle security deposit</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Bill Payment</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Service charge payment assistance</p>
                            <p className='carousel-item-feature'>Utility bill payment assistance</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Maintenance Solution Liaison</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Maintenance Liaison</p>
                            <p className='carousel-item-feature'>Obtain Quotation</p>
                            <p className='carousel-item-feature'>Ensure quality of maintenance work</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Handover Assistance from developer</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Obtain title deed</p>
                            <p className='carousel-item-feature'>Transfer ADDC's account name</p>
                            <p className='carousel-item-feature'>Snagging and desnagging</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Governmental Compliance</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Tawtheeq Account Management</p>
                            <p className='carousel-item-feature'>Other ad hoc assistance</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Legal Representation (POA)</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Bounced cheques collection</p>
                            <p className='carousel-item-feature'>Attending sales transfer on behalf of the client</p>
                            <p className='carousel-item-feature'>Sign or collect legal documentation</p>
                            <p className='carousel-item-feature'>Rental Dispute Settlement</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Handover Assistance from developer</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Obtain title deed</p>
                            <p className='carousel-item-feature'>Transfer ADDC's account name</p>
                            <p className='carousel-item-feature'>Snagging and desnagging</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Sales & Post Sales Assistance</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>Sales viewing arrangement</p>
                            <p className='carousel-item-feature'>Sales promotion (internal and external agency)</p>
                            <p className='carousel-item-feature'>Settlement of utility account after the sale transfer</p>
                        </div>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Platinum Ad Hoc Assistance</p>
                        <div className='carousel-item-feature-wrapper'>
                            <p className='carousel-item-feature'>10h credits/annum in assisting to resolve any other issues unspecified (or AED 100/hour)</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className='quiz-request-wrapper'>
                <div className='quiz-request-content'>
                    <h1>Do you need a Power of Attorney?</h1>
                    <p>If you are unsure whether you need a Power of Attorney, take our short quiz to find out!</p>
                    <div className='quiz-button-wrapper'>
                        <button type='button' onClick={handleRedirectToQuiz}>START</button>
                    </div>
                </div>
            </div>
            <div className="home-services-image maintenance-img fourth" />
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    )
}

export default PropertyManagement