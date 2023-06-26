import React, {useState, useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/actions/actions';
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import './PropertyMaintenance.scss'
import { maintenanceQuoteCalculator } from '../../helpers/maintenanceQuoteCalculator'
import { v4 as uuidv4 } from 'uuid';

const PropertyMaintenance = () => {
    const dispatch = useDispatch();

    //stating values from the form
    const [propertyType, setPropertyType] = useState();
    const [roomsNumber, setRoomsNumber] = useState();
    const [propertyLocation, setPropertyLocation] = useState();
    const [driverRoom, setDriverRoom] = useState();
    const [maidRoom, setMaidRoom] = useState();
    const [villaPackages, setVillaPackages] = useState();
    // handles a view villa/townhouse packages or maid/driver room
    const [isVillaPackagesVisible, setIsVillaPackagesVisible] = useState(false);
    const [isMaidDriverVisible, setMaidDriverVisible] = useState(true);

    const [quote, setQuote] = useState(0)

    const [errors, setErrors] = useState({});

    //handling change in form values
    const handlePropertyType = (e) => {
        setPropertyType(e.target.value)

        //handles a visibility of villapackages and maid/driver room on change of propertyType
        if (propertyLocation === 'SaadiyatYas' && (e.target.value === 'villa' || e.target.value === 'townhouse') ) {
            setIsVillaPackagesVisible(true)
            setMaidDriverVisible(false)
        } else if (propertyLocation !== 'SaadiyatYas' && (e.target.value === 'villa' || e.target.value === 'townhouse') ) {
            setIsVillaPackagesVisible(false)
            setMaidDriverVisible(false)
        } else {
            setIsVillaPackagesVisible(false)
            setMaidDriverVisible(true)
        }

        setRoomsNumber('')
        setPropertyLocation('')
        setDriverRoom('')
        setMaidRoom('')
        
        setErrors((prevErrors) => ({ ...prevErrors, propertyType: undefined }));
        setQuote(0);
    }

    const handleRoomNumber = (e) => {
        setRoomsNumber(e.target.value)
        setErrors((prevErrors) => ({ ...prevErrors, roomsNumber: undefined }));
    }

    const handlePropertyLocation = (e) => {
        setPropertyLocation(e.target.value)

        //handles a visibility of villapackages and maid/driver room on change of propertyLocation
        if (e.target.value === 'SaadiyatYas' && (propertyType === 'villa' || propertyType === 'townhouse') ) {
            setIsVillaPackagesVisible(true)
            setMaidDriverVisible(false)
        } else if (e.target.value !== 'SaadiyatYas' && (propertyType === 'villa' || propertyType === 'townhouse') ) {
            setIsVillaPackagesVisible(false)
            setMaidDriverVisible(false)
        } else {
            setIsVillaPackagesVisible(false)
            setMaidDriverVisible(true)
        } 

        setErrors((prevErrors) => ({ ...prevErrors, propertyLocation: undefined }));
    }

    const handleDriverRoom = (e) => {
        setDriverRoom(e.target.value)
        setErrors((prevErrors) => ({ ...prevErrors, driverRoom: undefined }));
    }

    const handleMaidRoom = (e) => {
        setMaidRoom(e.target.value)
        setErrors((prevErrors) => ({ ...prevErrors, maidRoom: undefined }));
    }

    const handlevillaPckgs = (e) => {
        setVillaPackages(e.target.value)
        setErrors((prevErrors) => ({ ...prevErrors, villaPackages: undefined }));
    }

    const handleBackToQuote = () => {
        setQuote(0);
        setPropertyType('')
        setRoomsNumber('')
        setPropertyLocation('')
        setDriverRoom('')
        setMaidRoom('')
        setVillaPackages('')
        setIsVillaPackagesVisible(false)
    }

    // logic to calculate the quote
    const calculateQuote = (e) => {
        e.preventDefault();

        // Form validation
        const errors = {};
        if (!propertyType) {
            errors.propertyType = 'Please select a property type.';
        }
        if (!roomsNumber && propertyType !== 'studio') {
            errors.roomsNumber = 'Please select the number of rooms.';
        }
        if (!propertyLocation) {
            errors.propertyLocation = 'Please select a property location.';
        }
        if (!maidRoom && propertyType !== 'villa' && propertyType !== 'townhouse') {
            console.log('maidRoom should not be selected - ', maidRoom)
            errors.maidRoom = 'Please select an option above';
        }
        if (!driverRoom && propertyType !== 'villa' && propertyType !== 'townhouse') {
            errors.driverRoom = 'Please select an option above';
        }
        if (!villaPackages && propertyType === 'villa' && propertyLocation === 'SaadiyatYas') {
            console.log('villaPackages should not be selected - ', villaPackages)
            errors.villaPackages = 'Please select a package';
        }
        if (!villaPackages && propertyType === 'townhouse' && propertyLocation === 'SaadiyatYas' ) {
            console.log('villaPackages should not be selected - ', villaPackages)
            errors.villaPackages = 'Please select a package';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            
            // Proceed with calculating the quote based on
            console.log('propertyType:', propertyType);
            console.log('roomsNumber:', roomsNumber);
            console.log('propertyLocation:', propertyLocation);
            console.log('driverRoom:', driverRoom);
            console.log('maidRoom:', maidRoom);
            console.log('villaPackages', villaPackages)

            // lOGIC TO CALCULATE THE QUOTE
            setQuote(maintenanceQuoteCalculator(propertyType, propertyLocation, roomsNumber, maidRoom, driverRoom, villaPackages))           
        }
    }

    //ADD a product to cart
    const addMaintenanceToCart = () => {
        if (propertyType === 'apartment') {
            dispatch(addProduct({
                id: uuidv4(),
                service: {
                    type: 'Property Maintenance',
                    details: {
                        propertyType,
                        roomsNumber,
                        propertyLocation,
                        maidRoom,
                        driverRoom
                    }
                },
                price: quote
            }));
        } else if (propertyType === 'studio') {
            dispatch(addProduct({
                id: uuidv4(),
                service: {
                    type: 'Property Maintenance',
                    details: {
                        propertyType,
                        propertyLocation,
                        maidRoom,
                        driverRoom
                    }
                },
                price: quote
            }));
        } else if (propertyType === 'villa' || propertyType === 'townhouse') {
            if (propertyLocation === 'SaadiyatYas') {
                dispatch(addProduct({
                    id: uuidv4(),
                    service: {
                        type: 'Property Maintenance',
                        details: {
                            propertyType,
                            roomsNumber,
                            propertyLocation,
                            villaPackages
                        }
                    },
                    price: quote
                }));
            } else {
                dispatch(addProduct({
                    id: uuidv4(),
                    service: {
                        type: 'Property Maintenance',
                        details: {
                            propertyType,
                            roomsNumber,
                            propertyLocation,
                        }
                    },
                    price: quote
                }));
            }
        }
    }

    // unordered list appearing animation
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
                    }, index * 300);
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
            <form className='property-features-wrapper' onSubmit={calculateQuote}>
                <p className='property-features-wrapper-caption'>
                    <span className="title-word title-word-1"> Annual </span> 
                    <span className="title-word title-word-2">Property </span> 
                    <span className="title-word title-word-3">Maintenance </span><br />
                    Quote Calculator
                </p>
                <div className='select-container'>
                    <div className='select-container-item'>
                        <select value={propertyType} name="type-property" id="type-property" onChange={handlePropertyType}>
                            <option value="" defaultValue=''>-- Property Type --</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="studio">Studio</option>
                        </select>
                        {errors.propertyType && <div className="error-message errorOne">{errors.propertyType}</div>}
                    </div>
                    <div className='select-container-item'>
                        <select value={roomsNumber} name="rooms" id="rooms" onChange={handleRoomNumber} disabled={propertyType === 'studio'}>
                            <option value="" defaultValue=''>-- Number of rooms --</option>
                            {propertyType !== 'villa' && propertyType !== 'townhouse' && <option value="1BR">1 room</option>}
                            <option value="2BR">2 rooms</option>
                            <option value="3BR">3 rooms</option>
                            <option value="4BR">4 rooms</option>
                            {propertyType !== 'apartment' && <option value="5BR">5 rooms</option>}
                            {propertyType !== 'apartment' && <option value="6BR">6 rooms</option>}
                        </select>
                        {errors.roomsNumber && <div className="error-message">{errors.roomsNumber}</div>}
                    </div>
                    <div className='select-container-item'>
                        <select value={propertyLocation} name="location" id="location" onChange={handlePropertyLocation}>
                            <option value="" defaultValue=''>-- Property Location --</option>
                            <option value="AbuDhabiCityReem">Abu Dhabi City/Al Reem</option>
                            <option value="SaadiyatYas">Saadiyat/Yas Island</option>
                            <option value="OutOfAbuDhabi">Out of Abu Dhabi</option>
                        </select>
                        {errors.propertyLocation && <div className="error-message">{errors.propertyLocation}</div>}
                    </div>
                    <div className='select-container' style={isVillaPackagesVisible ? {'display' : 'flex'} : {'display' : 'none'} }>
                        <div className='select-container-item'>
                            <select value={villaPackages} name="villaPckgs" id="villaPckgs" onChange={handlevillaPckgs}>
                                <option value="" defaultValue=''>-- Choose a package* --</option>
                                <option value="bronze">Bronze package*</option>
                                <option value="gold">Gold package*</option>
                                <option value="platinum">Platinum package*</option>
                            </select>
                            {errors.villaPackages && <div className="error-message">{errors.villaPackages}</div>}
                        </div>
                        <div className='packages-description'>
                            <div className='packages-description-item'>*<b>BRONZE:</b> 2 PPM a year</div>
                            <div className='packages-description-item'>*<b>GOLD:</b> 2 PPM a year + 2 pest control + 2 external glass cleaning</div>
                            <div className='packages-description-item'>*<b>PLATINUM:</b> 2 PPM a year + 4 pest control + 2 external glass cleaning</div>
                        </div>
                    </div>
                    <div className='select-container' style={isMaidDriverVisible ? {'display' : 'flex'} : {'display' : 'none'} }>
                        <div className='select-container-item'>
                            <select value={maidRoom} name="maid" id="maid" onChange={handleMaidRoom}>
                                <option value="" defaultValue=''>-- Maid Room --</option>
                                <option value="yes">a maid room</option>
                                <option value="no">no maid room</option>
                            </select>
                            {errors.maidRoom && <div className="error-message">{errors.maidRoom}</div>}
                        </div>
                        <div className='select-container-item'>
                            <select value={driverRoom} name="driver" id="driver" onChange={handleDriverRoom}>
                                <option value="" defaultValue=''>-- Driver Room --</option>
                                <option value="yes">a driver room</option>
                                <option value="no">no driver room</option>
                            </select>
                            {errors.driverRoom && <div className="error-message">{errors.driverRoom}</div>}
                        </div>
                    </div>     
                </div>
                <div className='quote-container'>
                    {quote ? 
                        <div className='quote-container-price'>
                            <p>{quote} AED per year</p>
                            <div className='quote-buttons-container'>
                                <button className='quote-buttons-item' type='button' onClick={addMaintenanceToCart}>Buy</button>
                                <button className='quote-buttons-item back-btn' type='button' onClick={handleBackToQuote}>Reset</button>
                            </div>    
                        </div> :
                        <button className='quote-btn' type='submit'>Calculate a quote!</button>
                    }
                </div>
            </form>
            {/* <div className="maintenance-img img-one" /> */}
            <div className='offer-list-wrapper'>
                <h1 className='offer-list-header'>Our Maintenance Service offers:</h1>
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