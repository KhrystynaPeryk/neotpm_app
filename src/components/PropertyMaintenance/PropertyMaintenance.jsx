import React, {useState, useEffect, useRef} from 'react'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import './PropertyMaintenance.scss'

const PropertyMaintenance = () => {

    const myList = useRef();
    const [myListVisible, setMyListVisible] = useState(false);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (entry.target === myList.current) {
                  setMyListVisible(true);
                  const listItems = myList.current.querySelectorAll('li');
                  listItems.forEach((item, index) => {
                    setTimeout(() => {
                      item.classList.add('slide-in');
                    }, index * 300); // Delay each item's animation by 200ms
                  });
                }
              }
            });
        };
        const options = {
            threshold: 0.2,
        };
    
        const observer = new IntersectionObserver(handleIntersection, options);
    
        if (myList.current) {
            observer.observe(myList.current);
        }
    
    
        return () => {
            if (myList.current) {
                observer.unobserve(myList.current);
            }
        };
    }, []);

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
                <p className='property-features-wrapper-caption'>
                    To assist you in receiving a tailored quote for our 
                    <span className="title-word title-word-1"> ANNUAL </span> 
                    <span class="title-word title-word-2">PROPERTY </span> 
                    <span class="title-word title-word-3">MAINTENANCE </span>
                    service, kindly make a selection from the options provided below:
                </p>
                <div className='select-container'>
                    <div className='select-container-item'>
                        <select name="type-property" id="type-property">
                            <option value="">-- Property Type --</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                            <option value="townhouse">Townhouse</option>
                        </select>
                    </div>
                    <div className='select-container-item'>
                        <select name="rooms" id="rooms">
                            <option value="">-- Number of rooms --</option>
                            <option value="1r">1</option>
                            <option value="2r">2</option>
                            <option value="3r">3</option>
                            <option value="4r">4</option>
                            <option value="5r">5</option>
                            <option value="6r">6</option>
                        </select>
                    </div>
                    <div className='select-container-item'>
                        <select name="location" id="location">
                            <option value="">-- Property Location --</option>
                            <option value="center">Abu Dhabi Center</option>
                            <option value="yas">Yas Island</option>
                            <option value="reem">Al Reem Island</option>
                            <option value="saadiyat">Saadiyat Island</option>
                        </select>
                    </div>
                </div>
                <div className='checkbox-container'>
                    <div className='checkbox-container-item'>
                        <label for="driver">Driver's room/Garage</label>
                        <input type="checkbox" id="driver" name="driver" />
                    </div>
                    <div className='checkbox-container-item'>
                        <label for="maid">Maid's room</label>
                        <input type="checkbox" id="maid" name="maid" />
                    </div>
                </div>
                <div>
                    <button className='quote-btn' type='submit'>Give me a quote!</button>
                </div>
            </div>
            <div className="maintenance-img img-one" />
            <div className='offer-list-wrapper'>
                <h1 className='offer-list-header'>We Offer</h1>
                <ul 
                    className={`offer-list-start ${myListVisible ? 'offer-list' : ''}`}
                    ref={myList}
                >
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