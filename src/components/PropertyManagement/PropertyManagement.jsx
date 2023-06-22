import React, {useRef, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/actions/actions';
import './PropertyManagement.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import BronzeHouse from '../../assets/images/bronze-icon-white.png'
import GoldHouse from '../../assets/images/gold-icon-white.png'
import PlatinumHouse from '../../assets/images/platinum-icon-white.png'
import ArrowRight from '../../assets/images/arrow-right.png'
import { v4 as uuidv4 } from 'uuid';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PropertyManagement = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const handleRedirectToQuiz = () => {
        window.open('https://transparent-poa.involve.me/poa-uae/', '_blank');
    };

    const dispatch = useDispatch();

    //ADD Bronze PACKAGE TO CART
    const addBronzeToCart = () => {
        dispatch(addProduct({
            id: uuidv4(),
            service: {
                type: 'Property Management',
                details: 'Bronze package',
            },
            price: 3500
        }));
    }
    //ADD Gold PACKAGE TO CART
    const addGoldToCart = () => {
        dispatch(addProduct({
            id: uuidv4(),
            service: {
                type: 'Property Management',
                details: 'Gold package',
            },
            price: 5000
        }));
    }

    //ADD Platinum PACKAGE TO CART
    const addPlatinumToCart = () => {
        dispatch(addProduct({
            id: uuidv4(),
            service: {
                type: 'Property Management',
                details: 'Platinum package',
            },
            price: 6500
        }));
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
                    <p className='property-header'>Our Property Management Packages</p>
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
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-price'>From 3500 AED or 3% of the rent</div>
                    <button type='button' onClick={addBronzeToCart}>Buy</button>
                    <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
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
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-item'>╳</div>
                    <div className='table-section-price'>From 5000 AED or 5% of the rent</div>
                    <button type='button' onClick={addGoldToCart}>Buy</button>
                    <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
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
                    <div className='table-section-price'>From 6500 AED or 8% of the rent</div>
                    <button type='button' onClick={addPlatinumToCart}>Buy</button>
                    <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
            </div>
            <div className="home-services-image maintenance-img first" />
            <div className={`property-after-table ${myFirstElementVisible ? 'fade-in' : ''}`}
                ref={myFirstIngRef}
            >
                <div className='property-header-wrapper'>
                    <p className='property-header subheader'>BRONZE</p>
                </div>
                <p className='property-package-caption'>Experience the Convenience of <span>Lease Renewal Assistance</span>.</p>
                <p className='property-package-description'>
                    Discover the ease and efficiency of our <b>Bronze Package</b>, designed to provide you with a delightful taste of our exceptional services. With Transparent's Lease Renewal Assistance, we <span>simplify the process</span>, taking care of all the paperwork and negotiations on your behalf. Sit back and relax, knowing that your lease renewal is in the hands of our expert team. Experience <span>hassle-free property management</span>, even at its lightest level.
                </p>
                <div className='property-button-wrapper'>
                    <button type='button'>Buy</button>
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
                >                        
                    <div className="carousel-item bronze">
                        <p className='carousel-item-header'>Tenant Sourcing</p>
                        <p>Advise market price</p>
                        <p>Professional photography</p>
                        <p>Online marketing</p>
                        <p>Internal/External agents promotion</p>
                        <p>Monitor weekly viewing numbers</p>
                        <p>Strategise on property promotion</p>
                    </div>
                    <div className="carousel-item bronze">
                        <p className='carousel-item-header'>Rental Cheque Management</p>
                        <p>Rent & security deposit collection</p>
                        <p>Cheque deposit service</p>
                        <p>Hold security deposit</p>
                    </div>
                    <div className="carousel-item bronze">
                        <p className='carousel-item-header'>Move-in Services</p>
                        <p>Tawtheeq application</p>
                        <p>ADDC application</p>
                        <p>Gas connection</p>
                        <p>Chilled water connection</p>
                        <p>Move-in Inspection</p>
                        <p>Inventory list</p>
                    </div>
                    <div className="carousel-item bronze">
                        <p className='carousel-item-header'>Tenancy Renewal</p>
                        <p>Renewal reminder to both parties</p>
                        <p>Renewal negotiation</p>
                        <p>Rental cheque collection</p>
                        <p>Tawtheeq application</p>
                    </div>
                    {/* Add more slides as needed */}
                </Carousel>
            </div>
            {/* <div className="home-services-image maintenance-img second" /> */}
            <div className={`property-after-table ${mySecondElementVisible ? 'fade-in' : ''}`}
                ref={mySecondIngRef}
            >
                <div className='property-header-wrapper'>
                    <p className='property-header subheader'>GOLD</p>
                </div>
                <p className='property-package-caption'>Elevate Your Property Management Experience.</p>
                <p className='property-package-description'>
                    Elevate your property management experience with our comprehensive <b>Gold Package</b>. At Transparent, we go above and beyond to ensure your property is <span>impeccably managed</span>. From <span>rent collection</span> and <span>tenant screening</span> to regular <span>property inspections</span> and <span>maintenance coordination</span>, we handle it all. With our unwavering commitment to excellence, your property investment will thrive under our care. Trust in our expertise and let us unlock the full potential of your property.
                </p>
                <div className='property-button-wrapper'>
                    <button type='button'>Buy</button>
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
                >                        
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Tenant Sourcing</p>
                        <p>Advise market price</p>
                        <p>Professional photography</p>
                        <p>Online marketing</p>
                        <p>Internal/External agents promotion</p>
                        <p>Monitor weekly viewing numbers</p>
                        <p>Strategise on property promotion</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Rental Cheque Management</p>
                        <p>Rent & security deposit collection</p>
                        <p>Cheque deposit service</p>
                        <p>Hold security deposit</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Move-in Services</p>
                        <p>Tawtheeq application</p>
                        <p>ADDC application</p>
                        <p>Gas connection</p>
                        <p>Chilled water connection</p>
                        <p>Move-in Inspection</p>
                        <p>Inventory list</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Tenancy Renewal</p>
                        <p>Renewal reminder to both parties</p>
                        <p>Renewal negotiation</p>
                        <p>Rental cheque collection</p>
                        <p>Tawtheeq application</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Move-out Services</p>
                        <p>Move-out application with the developer</p>
                        <p>Move-out documentation and clearances</p>
                        <p>Move-out handover of keys, access cards</p>
                        <p>Pre-move out inspection (upon request)</p>
                        <p>Move-out inspection with detailed inspection report</p>
                        <p>Quotation generation for fix up the property</p>
                        <p>Property fix-up supervision</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Security Deposit Settlement</p>
                        <p>Detailed breakdown report</p>
                        <p>Settle security deposit</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Bill Payment</p>
                        <p>Service charge payment assistance</p>
                        <p>Utility bill payment assistance</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Maintenance Solution Liaison</p>
                        <p>Maintenance Liaison</p>
                        <p>Obtain Quotation</p>
                        <p>Ensure quality of maintenance work</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Handover Assistance from developer</p>
                        <p>Obtain title deed</p>
                        <p>Transfer ADDC's account name</p>
                        <p>Snagging and desnagging</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Governmental Compliance</p>
                        <p>Tawtheeq Account Management</p>
                        <p>Other ad hoc assistance</p>
                    </div>
                    <div className="carousel-item gold">
                        <p className='carousel-item-header'>Ad Hoc Assistance</p>
                        <p>4h credits/annum in assisting to resolve any other issues unspecified (or AED 100/hour)</p>
                    </div>
                </Carousel>
            </div>
            {/* <div className="home-services-image maintenance-img third" /> */}
            <div className={`property-after-table ${myThirdElementVisible ? 'fade-in' : ''}`}
                ref={myThirdIngRef}
            >
                <div className='property-header-wrapper'>
                    <p className='property-header subheader'>PLATINUM</p>
                </div>
                <p className='property-package-caption'>Seamlessly Managed Properties with Added <span>Power of Attorney</span>.</p>
                <p className='property-package-description'>
                    Take your property management to new heights with our exclusive <b>Executive Package</b>. In addition to our <span>comprehensive property management</span> services, this package offers the invaluable benefit of Power of Attorney assistance. Our experienced team will handle all legal matters related to your property, ensuring <span>seamless transactions</span> and <span>efficient representation on your behalf</span>. Experience the peace of mind that comes with entrusting your property to Transparent's expert hands. Maximize your property's potential while enjoying the added convenience of our Executive Package.
                </p>
                <div className='property-button-wrapper'>
                    <button type='button'>Buy</button>
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
                >                        
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Tenant Sourcing</p>
                        <p>Advise market price</p>
                        <p>Professional photography</p>
                        <p>Online marketing</p>
                        <p>Internal/External agents promotion</p>
                        <p>Monitor weekly viewing numbers</p>
                        <p>Strategise on property promotion</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Rental Cheque Management</p>
                        <p>Rent & security deposit collection</p>
                        <p>Cheque deposit service</p>
                        <p>Hold security deposit</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Move-in Services</p>
                        <p>Tawtheeq application</p>
                        <p>ADDC application</p>
                        <p>Gas connection</p>
                        <p>Chilled water connection</p>
                        <p>Move-in Inspection</p>
                        <p>Inventory list</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Tenancy Renewal</p>
                        <p>Renewal reminder to both parties</p>
                        <p>Renewal negotiation</p>
                        <p>Rental cheque collection</p>
                        <p>Tawtheeq application</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Move-out Services</p>
                        <p>Move-out application with the developer</p>
                        <p>Move-out documentation and clearances</p>
                        <p>Move-out handover of keys, access cards</p>
                        <p>Pre-move out inspection (upon request)</p>
                        <p>Move-out inspection with detailed inspection report</p>
                        <p>Quotation generation for fix up the property</p>
                        <p>Property fix-up supervision</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Security Deposit Settlement</p>
                        <p>Detailed breakdown report</p>
                        <p>Settle security deposit</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Bill Payment</p>
                        <p>Service charge payment assistance</p>
                        <p>Utility bill payment assistance</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Maintenance Solution Liaison</p>
                        <p>Maintenance Liaison</p>
                        <p>Obtain Quotation</p>
                        <p>Ensure quality of maintenance work</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Handover Assistance from developer</p>
                        <p>Obtain title deed</p>
                        <p>Transfer ADDC's account name</p>
                        <p>Snagging and desnagging</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Governmental Compliance</p>
                        <p>Tawtheeq Account Management</p>
                        <p>Other ad hoc assistance</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Legal Representation (POA)</p>
                        <p>Bounced cheques collection</p>
                        <p>Attending sales transfer on behalf of the client</p>
                        <p>Sign or collect legal documentation</p>
                        <p>Rental Dispute Settlement</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Handover Assistance from developer</p>
                        <p>Obtain title deed</p>
                        <p>Transfer ADDC's account name</p>
                        <p>Snagging and desnagging</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Sales & Post Sales Assistance</p>
                        <p>Sales viewing arrangement</p>
                        <p>Sales promotion (internal and external agency)</p>
                        <p>Settlement of utility account after the sale transfer</p>
                    </div>
                    <div className="carousel-item platinum">
                        <p className='carousel-item-header'>Ad Hoc Assistance</p>
                        <p>10h credits/annum in assisting to resolve any other issues unspecified (or AED 100/hour)</p>
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