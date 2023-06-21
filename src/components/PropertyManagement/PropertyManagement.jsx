import React, {useRef, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/actions/actions';
import './PropertyManagement.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import BronzeHouse from '../../assets/images/light_house.png'
import GoldHouse from '../../assets/images/standard_house.png'
import PlatinumHouse from '../../assets/images/executive_house.png'
import ArrowRight from '../../assets/images/arrow-right.png'
import { v4 as uuidv4 } from 'uuid';

const PropertyManagement = () => {

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
                    <p className='property-header'>Our Property Management Services</p>
                </div>
            </div>
            <div className='property-table-wrapper'>
                <section className='table-column'>
                    <div>
                        <img className='property-icon' src={BronzeHouse} alt='LightHouse' />
                    </div>
                    <div className='table-section-header'>BRONZE</div>
                    <div className='table-section-item bronze'>Tenant Sourcing</div>
                    <div className='table-section-item bronze'>Rental Cheque Management</div>
                    <div className='table-section-item bronze'>Move-in Services</div>
                    <div className='table-section-item bronze'>Tenancy Renewal</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-price'>From 3500 AED</div>
                    <button type='button' onClick={addBronzeToCart}>Buy</button>
                    <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
                <section className='table-column'>
                    <div>
                        <img className='property-icon' src={GoldHouse} alt='StandardHouse' />
                    </div>
                    <div className='table-section-header'>GOLD</div>
                    <div className='table-section-item bronze'>Tenant Sourcing</div>
                    <div className='table-section-item bronze'>Rental Cheque Management</div>
                    <div className='table-section-item bronze'>Move-in Services</div>
                    <div className='table-section-item bronze'>Tenancy Renewal</div>
                    <div className='table-section-item gold'>Move-out Services</div>
                    <div className='table-section-item gold'>Security Deposit Settlement</div>
                    <div className='table-section-item gold'>Bill Payment</div>
                    <div className='table-section-item gold'>Maintenance Solution Liaison</div>
                    <div className='table-section-item gold'>Handover Assistance from Developer</div>
                    <div className='table-section-item gold'>Governmental Compliance</div>
                    <div className='table-section-item gold'>Ad Hoc Assistance (4h credit/annum)</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-item'>−</div>
                    <div className='table-section-price'>From 5000 AED</div>
                    <button type='button' onClick={addGoldToCart}>Buy</button>
                    <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
                <section className='table-column'>
                    <div className='property-icon-container'>
                        <img className='property-icon' src={PlatinumHouse} alt='ExecutiveHouse' />
                        <div className='ribbon'><span>POA</span></div>
                    </div>
                    <div className='table-section-header'>PLATINUM</div>
                    <div className='table-section-item bronze'>Tenant Sourcing</div>
                    <div className='table-section-item bronze'>Rental Cheque Management</div>
                    <div className='table-section-item bronze'>Move-in Services</div>
                    <div className='table-section-item bronze'>Tenancy Renewal</div>
                    <div className='table-section-item gold'>Move-out Services</div>
                    <div className='table-section-item gold'>Security Deposit Settlement</div>
                    <div className='table-section-item gold'>Bill Payment</div>
                    <div className='table-section-item gold'>Maintenance Solution Liaison</div>
                    <div className='table-section-item gold'>Handover Assistance from Developer</div>
                    <div className='table-section-item gold'>Governmental Compliance</div>
                    <div className='table-section-item gold'>Ad Hoc Assistance (10h credit/annum)</div>
                    <div className='table-section-item platinum'>Legal Representation (POA)</div>
                    <div className='table-section-item platinum'>Sales & Post Sales Assistance</div>
                    <div className='table-section-price'>From 6500 AED</div>
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
            <div className="home-services-image maintenance-img second" />
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
            <div className="home-services-image maintenance-img third" />
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