import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import Logo from '../common/Logo/Logo';
import Main from './components/Main';
import Footer from '../common/Footer/Footer';
import WhatsAppIcon from '../../assets/images/whatsapp-icon.png';
import NavBar from '../common/NavBar/NavBar';

const Home = () => {
    const navigate = useNavigate();

    const redirectTo = (route) => {
        window.scrollTo(0, 0);
        navigate(route);
    };

    //below const and useEffect for handling of fade-in animation for .home-services-content
    const myFirstIngRef = useRef();
    const mySecondIngRef = useRef();
    const myThirdIngRef = useRef();
    const [myFirstElementVisible, setMyFirstElementVisible] = useState(false);
    const [mySecondElementVisible, setMySecondElementVisible] = useState(false);
    const [myThirdElementVisible, setMyThirdElementVisible] = useState(false);

    useEffect(() => {
        //for old non existing urls like /contacts from the old website
        window.history.replaceState({}, '', '/');
    }, []);

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
    
        // Capture current values of refs
        const firstElement = myFirstIngRef.current;
        const secondElement = mySecondIngRef.current;
        const thirdElement = myThirdIngRef.current;

        if (firstElement) {
            observer.observe(firstElement);
        }

        if (secondElement) {
            observer.observe(secondElement);
        }

        if (thirdElement) {
            observer.observe(thirdElement);
        }

        // Use captured values for cleanup
        return () => {
            if (firstElement) {
                observer.unobserve(firstElement);
            }
            if (secondElement) {
                observer.unobserve(secondElement);
            }
            if (thirdElement) {
                observer.unobserve(thirdElement);
            }
        };
    }, []);

    return (
        <div className="home-container">
            <section className="home-image">
                <NavBar />
                <Logo isCPlogoVisible={false}/>
                <Main />
                <a href="https://api.whatsapp.com/send?phone=971564420883" target="_self" rel="noopener noreferrer">
                <div className="whatsapp-icon">
                    <img src={WhatsAppIcon} alt="WhatsApp" loading="lazy"/>
                </div>
                </a>
            </section>
            <section className="home-services">
                <div
                className={`home-services-content ${myFirstElementVisible ? 'fade-in' : ''}`}
                ref={myFirstIngRef}
                >
                    <h1>Property Management</h1>
                    <p className='home-services-caption'>Your time is precious. Focus on what you do best and leave the rest to us.</p>
                    <div className="btns-container">
                        <button type="button" onClick={() => redirectTo('/property-management')}>Learn More</button>
                    </div>
                </div>
                <div className="home-services-image first-service-img" />
                <div
                className={`home-services-content ${mySecondElementVisible ? 'fade-in' : ''}`}
                ref={mySecondIngRef}
                >
                    <h1>Property Maintenance</h1>
                    <p className='home-services-caption'>Maintain and Enhance Your Property: Expert Property Maintenance Services for Lasting Value</p>
                    <div className="btns-container">
                        <button type="button" onClick={() => redirectTo('/property-maintenance')}>Learn More</button>
                    </div>
                </div>
                <div className="home-services-image second-service-img" />
                <div
                className={`home-services-content ${myThirdElementVisible ? 'fade-in' : ''}`}
                ref={myThirdIngRef}
                >
                    <h1>Owner Support</h1>
                    <p className='home-services-caption'>Simplify Property Processes with Expert Support</p>
                    <div className="btns-container">
                        <button type="button" onClick={() => redirectTo('/owner-support')}>Learn More</button>
                    </div>
                </div>
                <div className="home-services-image third-service-img" />
                <Footer />
            </section>
        </div>
    );
};

export default Home;