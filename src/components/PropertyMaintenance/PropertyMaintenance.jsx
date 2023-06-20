import React, { useEffect, useRef } from 'react'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import './PropertyMaintenance.scss'

const PropertyMaintenance = () => {

    // const imageContainerRef = useRef(null);
    // useEffect(() => {
    //     const handleScroll = () => {
    //       if (imageContainerRef.current) {
    //         const scrollPosition = window.scrollY;
    //         imageContainerRef.current.style.backgroundPositionY = `${scrollPosition}px`;
    //       }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);

      //UL styling
    // const offerListRef = useRef(null);
    // useEffect(() => {
    //     const listItems = offerListRef.current.querySelectorAll('.offer-list li');
    //     for (let i = 0; i < listItems.length; i++) {
    //       listItems[i].style.transitionDelay = `${i * 100}ms`;
    //       listItems[i].classList.add('visible');
    //     }
    //   }, []);

    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo />
                <div className='property-header-wrapper'>
                    <p className='property-header'>Our Property Maintenance Service</p>
                </div>
            </div>
            <div className='property-features-wrapper'>
                <p>In order to provide you with a quote for a maintenance service, please select the below:</p>
                <div className='select-container'>
                    <select name="type-property" id="type-property">
                        <option value="">Property Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                    </select>
                    <select name="rooms" id="rooms">
                        <option value="">Number of rooms</option>
                        <option value="1r">1</option>
                        <option value="2r">2</option>
                        <option value="3r">3</option>
                        <option value="4r">4</option>
                        <option value="5r">5</option>
                        <option value="6r">6</option>
                    </select>
                    <select name="location" id="location">
                        <option value="">Property Location</option>
                        <option value="center">Abu Dhabi Center</option>
                        <option value="yas">Yas Island</option>
                        <option value="reem">Al Reem Island</option>
                        <option value="saadiyat">Saadiyat Island</option>
                    </select>
                </div>
                <div>
                    <div>
                        <input type="checkbox" id="driver" name="driver" />
                        <label for="driver">Driver's room/Garage</label>
                    </div>
                    <div>
                        <input type="checkbox" id="maid" name="maid" />
                        <label for="maid">Maid's room</label>
                    </div>
                </div>
            </div>
            <div className="maintenance-img img-one" />
            <div>
                <h1>Our commitment includes providing the following services</h1>
                <ul className="offer-list" >
                    <li className="offer">Unlimited maintenance assistance calls</li>
                    <li className="offer">24/7 coordination of maintenance work</li>
                    <li className="offer">Collaboration with skilled tradesmen</li>
                    <li className="offer">In-house team for prompt service at competitive prices</li>
                    <li className="offer">Expert coordination with contractors and tenants</li>
                    <li className="offer">Swift response to tenant emergencies</li>
                    <li className="offer">Comprehensive property restoration services</li>
                    <li className="offer">Thorough de-snagging before tenant occupancy</li>
                    <li className="offer">Monthly account statements for cost transparency</li>
                </ul>
            </div>
            <div className="maintenance-img img-two" />
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    )
}

export default PropertyMaintenance