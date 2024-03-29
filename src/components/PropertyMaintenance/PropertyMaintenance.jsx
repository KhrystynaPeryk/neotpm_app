import React, {useState, useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../store/actions/actions';
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import './PropertyMaintenance.scss'
import { maintenanceQuoteCalculator } from '../../helpers/maintenanceQuoteCalculator'
import { v4 as uuidv4 } from 'uuid';
import { formatPriceInCart } from '../../helpers/formatPriceInCart';
import BrochureBanner from '../common/BrochureBanner/BrochureBanner';
import { formatPropertyLocation } from '../../helpers/formatPropertyLocation';

const PropertyMaintenance = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    //stating values from the form
    const [propertyType, setPropertyType] = useState();
    const [roomsNumber, setRoomsNumber] = useState();
    const [propertyLocation, setPropertyLocation] = useState();
    const [driverRoom, setDriverRoom] = useState();
    const [maidRoom, setMaidRoom] = useState();
    const [villaPackages, setVillaPackages] = useState();
    // handles a view villa/townhouse packages
    const [isVillaPackagesVisible, setIsVillaPackagesVisible] = useState(false);

    const [quote, setQuote] = useState(0)

    const [errors, setErrors] = useState({});

    //handling change in form values
    const handlePropertyType = (e) => {
        setPropertyType(e.target.value)

        //handles a visibility of villapackages on change of propertyType
        if ((propertyLocation === 'SaadiyatBeachVillas' || propertyLocation === 'HiddAlSaadiyat' || propertyLocation === 'YasIslandAlRaha' || propertyLocation === 'BloomGardens') && (e.target.value === 'villa') ) {
            setIsVillaPackagesVisible(true)
        } else if ((propertyLocation === 'SaadiyatBeachVillas' || propertyLocation === 'HiddAlSaadiyat' || propertyLocation === 'YasIslandAlRaha') && (e.target.value === 'townhouse') ) {
            setIsVillaPackagesVisible(true)
        } else {
            setIsVillaPackagesVisible(false)
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

        //handles a visibility of villapackages on change of propertyLocation
        if ((e.target.value === 'SaadiyatBeachVillas' || e.target.value === 'HiddAlSaadiyat' || e.target.value === 'YasIslandAlRaha' || e.target.value === 'BloomGardens') && (propertyType === 'villa') ) {
            setIsVillaPackagesVisible(true)
        } else if ((e.target.value === 'SaadiyatBeachVillas' || e.target.value  === 'HiddAlSaadiyat' || e.target.value === 'YasIslandAlRaha') && (propertyType === 'townhouse') ) {
            setIsVillaPackagesVisible(true)
        } else {
            setIsVillaPackagesVisible(false)
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
            errors.maidRoom = 'Please select an option above';
        }
        if (!driverRoom && propertyType !== 'villa' && propertyType !== 'townhouse') {
            errors.driverRoom = 'Please select an option above';
        }
        if (!villaPackages && propertyType === 'villa' && (
            propertyLocation === 'SaadiyatBeachVillas' || 
            propertyLocation === 'HiddAlSaadiyat' || 
            propertyLocation === 'YasIslandAlRaha' || 
            propertyLocation === 'BloomGardens'
            ) ) {
                errors.villaPackages = 'Please select a package';
        }
        if (!villaPackages && propertyType === 'townhouse' && (
            propertyLocation === 'SaadiyatBeachVillas' || 
            propertyLocation === 'HiddAlSaadiyat' || 
            propertyLocation === 'YasIslandAlRaha' 
            ) ) {
                errors.villaPackages = 'Please select a package';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            // lOGIC TO CALCULATE THE QUOTE
            setQuote(maintenanceQuoteCalculator(propertyType, propertyLocation, roomsNumber, maidRoom, driverRoom, villaPackages))        
        }
    }

    //ADD a product to cart and navigate to a form
    const addMaintenanceToCart = () => {
        const dispatchDriverRoom = driverRoom ? driverRoom : ''
        const dispatchMaidRoom = maidRoom ? maidRoom : ''
        const dispatchVillaPackages = villaPackages ? villaPackages : ''

        dispatch(addProduct({
            id: uuidv4(),
            service: {
                type: 'Property Maintenance',
                details: {
                    propertyType,
                    propertyLocation,
                    roomsNumber,
                    driverRoom: dispatchDriverRoom,
                    maidRoom: dispatchMaidRoom,
                    package: dispatchVillaPackages
                }
            },
            price: quote
        }))

        navigate('/contact-form', {
            state: {
                service: {
                    type: 'Property Maintenance',
                    details: `| Property type: ${propertyType}; location: ${formatPropertyLocation(propertyLocation)}; rooms: ${propertyType === 'studio' ? 'n/a': roomsNumber.substring(2)}; diver's room: ${driverRoom ? driverRoom : 'n/a'}; maid's room: ${maidRoom ? maidRoom : 'n/a'}; package: ${!villaPackages ? 'n/a' : villaPackages}.`,
                },
            }
        });
    }

    // unordered list appearing animation
    const myList = useRef();
    const [myListVisible, setMyListVisible] = useState(false);

    useEffect(() => {
        //for old non existing urls like /contacts from the old website
        window.history.replaceState({}, '', '/property-maintenance');
    }, []);

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
                <Logo isCPlogoVisible={true}/>
                <div className='property-header-wrapper'>
                    <p className='property-header'>Property Maintenance</p>
                </div>
                <BrochureBanner firestoreFileName='TPM Property Maintenance Brochure.pdf' serviceName='Property Maintenance Services' />
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
                        <select className='select-container-element' value={propertyType} name="type-property" id="type-property" onChange={handlePropertyType}>
                            <option value="" defaultValue=''>-- Property Type --</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="studio">Studio</option>
                        </select>
                        {errors.propertyType && <div className="error-message errorOne">{errors.propertyType}</div>}
                    </div>
                    <div className='select-container-item'>
                        <select className={propertyType === 'studio' ? 'select-container-element disabled' : 'select-container-element'} value={roomsNumber} name="rooms" id="rooms" onChange={handleRoomNumber} disabled={propertyType === 'studio'}>
                            <option value="" defaultValue=''>-- Number of rooms --</option>
                            {propertyType === 'apartment' && <option value="br1">1 room</option>}
                            {propertyType !== 'townhouse' && propertyLocation !== 'HiddAlSaadiyat' && <option value="br2">2 rooms</option>}
                            <option value="br3">3 rooms</option>
                            <option value="br4">4 rooms</option>
                            {propertyType !== 'apartment' && <option value="br5">5 rooms</option>}
                            {propertyType !== 'apartment' && propertyLocation !== 'HydraVillage' && <option value="br6">6 rooms</option>}
                        </select>
                        {errors.roomsNumber && <div className="error-message">{errors.roomsNumber}</div>}
                    </div>
                    <div className='select-container-item'>
                        <select className='select-container-element' value={propertyLocation} name="location" id="location" onChange={handlePropertyLocation}>
                            <option value="" defaultValue=''>-- Property Location --</option>
                            {propertyType === 'apartment' || propertyType === 'studio' ?
                                <>
                                    <option value="AbuDhabiCityReem">Abu Dhabi City / Al Reem</option>
                                    <option value="SaadiyatYas">Saadiyat / Yas Island / Al Raha / Al Reef</option>
                                    <option value="OutOfAbuDhabi">Out of Abu Dhabi - others</option>
                                </> : null
                            }
                            {propertyType === 'villa' ?
                                <>
                                    <option value="AlReefVillas">Al Reef Villas</option>
                                    <option value="BloomGardens">Bloom Gardens</option>
                                    <option value="AlMuneera">Al Muneera</option>
                                    <option value="SaadiyatBeachVillas">Saadiyat Beach Villas</option>
                                    <option value="HiddAlSaadiyat">Hidd Al Saadiyat / Yas Acres</option>
                                    <option value="YasIslandAlRaha">Al Raha / Yas Island</option>
                                    <option value="HydraVillage">Hydra Village</option>
                                    <option value="OutOfAbuDhabi">Out of Abu Dhabi - others</option>
                                </> : null
                            }
                            {propertyType === 'townhouse' ?
                                <>
                                    <option value="AlReefVillas">Al Reef Villas</option>
                                    <option value="SaadiyatBeachVillas">Saadiyat Beach Villas</option>
                                    <option value="YasIslandAlRaha">Al Raha / Yas Island</option>
                                    <option value="HiddAlSaadiyat">Hidd Al Saadiyat</option>
                                    <option value="HydraVillage">Hydra Village</option>
                                    <option value="OutOfAbuDhabi">Out of Abu Dhabi - others</option>
                                </> : null
                            }
                        </select>
                        {errors.propertyLocation && <div className="error-message">{errors.propertyLocation}</div>}
                    </div>
                    <div className='select-container' style={isVillaPackagesVisible ? {'display' : 'flex'} : {'display' : 'none'} }>
                        <div className='select-container-item'>
                            <select className='select-container-element' value={villaPackages} name="villaPckgs" id="villaPckgs" onChange={handlevillaPckgs}>
                                <option value="" defaultValue=''>-- Choose a package* --</option>
                                {propertyLocation !== 'BloomGardens' && <option value="bronze">Bronze package*</option>}
                                <option value="gold">Gold package*</option>
                                {propertyLocation !== 'YasIslandAlRaha' && <option value="platinum">Platinum package*</option>}
                            </select>
                            {errors.villaPackages && <div className="error-message">{errors.villaPackages}</div>}
                        </div>
                        <div className='packages-description'>
                            {propertyLocation !== 'BloomGardens' && <div className='packages-description-item bronze'>*<b>BRONZE:</b> 2 PPM a year</div>}
                            <div className='packages-description-item gold'>*<b>GOLD:</b> 2 PPM a year + 1 pest control + 1 external glass cleaning</div>
                            {propertyLocation !== 'YasIslandAlRaha' && <div className='packages-description-item platinum'>*<b>PLATINUM:</b> 2 PPM a year + 2 pest control + 2 external glass cleaning + 1 water tank cleaning</div>}
                        </div>
                    </div>
                    {(propertyType === 'apartment' || propertyType === 'studio') && (
                        <div className='select-container'>
                            <div className='select-container-item'>
                                <select className='select-container-element' value={maidRoom} name="maid" id="maid" onChange={handleMaidRoom}>
                                    <option value="" defaultValue=''>-- Maid Room --</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                {errors.maidRoom && <div className="error-message">{errors.maidRoom}</div>}
                            </div>
                            <div className='select-container-item'>
                                <select className='select-container-element' value={driverRoom} name="driver" id="driver" onChange={handleDriverRoom}>
                                    <option value="" defaultValue=''>-- Driver Room --</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                {errors.driverRoom && <div className="error-message">{errors.driverRoom}</div>}
                            </div>
                        </div>  
                    )}
                </div>
                <div className='quote-container'>
                    {quote ? 
                        <div className='quote-container-price'>
                            <p>AED {formatPriceInCart(quote)} per year</p>
                            <div className='quote-buttons-container'>
                                <button className='quote-buttons-item' type='button' onClick={addMaintenanceToCart}>Buy</button>
                                <button className='quote-buttons-item back-btn' type='button' onClick={handleBackToQuote}>Reset</button>
                            </div>    
                        </div> :
                        <button className='quote-btn' type='submit'>Calculate a quote!</button>
                    }
                </div>
            </form>
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
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    )
}

export default PropertyMaintenance