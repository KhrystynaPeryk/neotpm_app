import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.scss'
import BurgerMenu from '../../../assets/images/burger-menu.png'
import Cart from '../../../assets/images/cart.png'

const NavBar = () => {
    const navigate = useNavigate();
    const stateProducts = useSelector((state) => state.products)

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false);

    const [isBurgerMenuVisible, setBurgerMenuVisible] = useState()

    const expandedNavbarRef = useRef(null);
    const handleClickOutsideNavBar = (event) => {
        if (expandedNavbarRef && !expandedNavbarRef?.current?.contains(event.target)) {
            setIsNavExpanded(false)
        } else {
            setIsNavExpanded(true)
        }
    }

    const handleResize = () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            setBurgerMenuVisible(true);
        }  else {
            setBurgerMenuVisible(false);
            setIsNavExpanded(false);
        }
    };

    useEffect(() => {  
        handleResize(); 
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousedown', handleClickOutsideNavBar);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousedown', handleClickOutsideNavBar);
        };
      }, []);

    const ExpandNavBar = () => {
        setIsNavExpanded(true)
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }

    const closeExpandedNavBar = () => {
        setIsNavExpanded(false)
    }

    const redirectToPropertyManagement = () => {
        navigate('/property-management');
    };

    const redirectToPropertyMaintenance = () => {
        navigate('/property-maintenance');
      };

    const redirectToPropertyAdministrativeSupport = () => {
        navigate('/property-administrative-support')
    }

    const redirectToCart = () => {
        navigate('/cart')
    }

    return (
        <div className='navbar-container-wrapper'>
            <div className='navbar-container'>
                {isNavExpanded ? 
                    <div className='navbar-container-cross' onClick={closeExpandedNavBar}> 
                        &times;
                    </div> :
                    <div className={isBurgerMenuVisible ? 'navbar-burger' : 'hidden' }>
                        <img src={BurgerMenu} alt='BurgerMenu' onClick={ExpandNavBar}/>
                    </div>
                }
                <div className={isNavExpanded ? 'hidden' : 'navbar-sections' }>
                    <div className='navbar-section' onClick={redirectToPropertyManagement}>Property Management</div>
                    <div className='navbar-section navbar-maintenance' onClick={redirectToPropertyMaintenance}>Property Maintenance</div>
                    <div className='navbar-section' onClick={redirectToPropertyAdministrativeSupport}>Property Administrative Support</div>
                </div>
                    <div className='navbar-cart' onClick={redirectToCart}>
                        {stateProducts.length !== 0 && 
                            <div className='navbar-cart-qty-container'>
                                <div className='navbar-cart-qty'>
                                    {stateProducts.length}
                            </div> 
                            </div>
                        }
                        <img src={Cart} alt='Cart' />
                </div>
            </div>
            {isNavExpanded &&
                <div ref={expandedNavbarRef} className={`navbar-container-expanded ${isAnimating ? 'animate' : ''}`}>
                    <div className='navbar-section-expanded' onClick={redirectToPropertyManagement}>➔ Property Management</div>
                    <div className='navbar-section-expanded' onClick={redirectToPropertyMaintenance}>➔ Property Maintenance</div>
                    <div className='navbar-section-expanded' onClick={redirectToPropertyAdministrativeSupport}>➔ Property Administrative Support</div>
                </div>
            }
        </div>

    )
}

export default NavBar