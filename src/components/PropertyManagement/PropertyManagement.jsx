import React, {useRef, useEffect, useState} from 'react'
import './PropertyManagement.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import LightHouse from '../../assets/images/light_house.png'
import StandardHouse from '../../assets/images/standard_house.png'
import ExecutiveHouse from '../../assets/images/executive_house.png'
import ArrowRight from '../../assets/images/arrow-right.png'

const PropertyManagement = () => {

    const handleRedirectToQuiz = () => {
        window.open('https://transparent-poa.involve.me/poa-uae/', '_blank');
    };
    
        
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
                        <img className='property-icon' src={LightHouse} alt='LightHouse' />
                    </div>
                    <div className='table-section-header'>LIGHT</div>
                    <div className='table-section-item'>Lease Renewal Assitance</div>
                    <div className='table-section-item'>-</div>
                    <div className='table-section-item'>-</div>
                    <div className='table-section-item'>-</div>
                    <div className='table-section-item'>-</div>
                    <div className='table-section-price'>From 3000 AED</div>
                    <button type='button'>Buy</button>
                    <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
                <section className='table-column'>
                    <div>
                        <img className='property-icon' src={StandardHouse} alt='StandardHouse' />
                    </div>
                    <div className='table-section-header'>STANDARD</div>
                    <div className='table-section-item'>Lease Renewal Assitance</div>
                    <div className='table-section-item'>Tenant Search and Liaison</div>
                    <div className='table-section-item'>Monthly Account Statements</div>
                    <div className='table-section-item'>Utility Transfer and Bill Payments</div>
                    <div className='table-section-item'>-</div>
                    <div className='table-section-price'>From 5000 AED per year</div>
                    <button type='button'>Buy</button>
                    <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
                <section className='table-column'>
                    <div>
                        <img className='property-icon' src={ExecutiveHouse} alt='ExecutiveHouse' />
                    </div>
                    <div className='table-section-header'>EXECUTIVE</div>
                    <div className='table-section-item'>Lease Renewal Assitance</div>
                    <div className='table-section-item'>Tenant Search and Liaison</div>
                    <div className='table-section-item'>Monthly Account Statements</div>
                    <div className='table-section-item'>Utility Transfer and Bill Payments</div>
                    <div className='table-section-item'>Power of Attorney</div>
                    <div className='table-section-price'>From 6500 AED per year</div>
                    <button type='button'>Buy</button>
                    <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
                </section>
            </div>
            <div className="home-services-image maintenance-img first" />
            <div className={`property-after-table ${myFirstElementVisible ? 'fade-in' : ''}`}
                ref={myFirstIngRef}
            >
                <div className='property-header-wrapper'>
                    <p className='property-header subheader'>LIGHT</p>
                </div>
                <p className='property-package-caption'>Experience the Convenience of <span>Lease Renewal Assistance</span>.</p>
                <p className='property-package-description'>
                    Discover the ease and efficiency of our <b>Light Package</b>, designed to provide you with a delightful taste of our exceptional services. With Transparent's Lease Renewal Assistance, we <span>simplify the process</span>, taking care of all the paperwork and negotiations on your behalf. Sit back and relax, knowing that your lease renewal is in the hands of our expert team. Experience <span>hassle-free property management</span>, even at its lightest level.
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
                    <p className='property-header subheader'>STANDARD</p>
                </div>
                <p className='property-package-caption'>Elevate Your Property Management Experience.</p>
                <p className='property-package-description'>
                    Elevate your property management experience with our comprehensive <b>Standard Package</b>. At Transparent, we go above and beyond to ensure your property is <span>impeccably managed</span>. From <span>rent collection</span> and <span>tenant screening</span> to regular <span>property inspections</span> and <span>maintenance coordination</span>, we handle it all. With our unwavering commitment to excellence, your property investment will thrive under our care. Trust in our expertise and let us unlock the full potential of your property.
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
                    <p className='property-header subheader'>EXECUTIVE</p>
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