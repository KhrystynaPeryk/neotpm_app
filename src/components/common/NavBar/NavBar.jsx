import React, {useState, useEffect, useRef} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.scss'
import BurgerMenu from '../../../assets/images/burger-menu.png'
import Cart from '../../../assets/images/cart.png'

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const isPageActive = (path) => location.pathname === path;

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

    const redirectTo = (page) => {
        window.scrollTo(0, 0);
        navigate(page);
    }

    return (
        <div className='navbar-container-wrapper'>
            <div className='navbar-container'>
                {isNavExpanded ? 
                    <div className='navbar-container-cross' onClick={closeExpandedNavBar}> 
                        &times;
                    </div> :
                    <div className={isBurgerMenuVisible ? 'navbar-burger' : 'hidden' }>
                        <img className='burger-img' src={BurgerMenu} alt='BurgerMenu' onClick={ExpandNavBar}/>
                    </div>
                }
                <div className={isNavExpanded ? 'hidden' : '' }>
                    <div className='navbar-section nav-logo' onClick={() => redirectTo('/')}></div>
                    <div className='navbar-sections' >
                        <div className={isPageActive('/property-management') ? 'navbar-section active' : 'navbar-section'} onClick={() => redirectTo('/property-management')}>Property Management</div>
                        <div className={isPageActive('/property-maintenance') ? 'navbar-section navbar-maintenance active' : 'navbar-section navbar-maintenance'} onClick={() => redirectTo('/property-maintenance')}>Property Maintenance</div>
                        <div className={isPageActive('/owner-support') ? 'navbar-section active' : 'navbar-section'} onClick={() => redirectTo('/owner-support')}>Owner Support</div>
                        <div className={isPageActive('/reviews') ? 'navbar-section active' : 'navbar-section'} onClick={() => redirectTo('/reviews')}>Reviews</div>
                        <div className={isPageActive('/articles') ? 'navbar-section active' : 'navbar-section'} onClick={() => redirectTo('/articles')}>Articles</div>
                        <div className={isPageActive('/about') ? 'navbar-section active' : 'navbar-section'} onClick={() => redirectTo('/about')}>About</div>
                    </div>
                </div>
                <div className='navbar-cart' onClick={() => redirectTo('/cart')}>
                    {stateProducts.length !== 0 && 
                        <div className='navbar-cart-qty-container'>
                            <div className='navbar-cart-qty'>
                                {stateProducts.length}
                            </div> 
                        </div>
                    }
                    <img className='cart-img' src={Cart} alt='Cart' />
                </div>
            </div>
            {isNavExpanded &&
                <div ref={expandedNavbarRef} className={`navbar-container-expanded ${isAnimating ? 'animate' : ''}`}>
                    <div className='navbar-section-expanded' onClick={() => redirectTo('/')}>➔ Home</div>
                    <div className='navbar-section-expanded' onClick={() => redirectTo('/property-management')}>➔ Property Management</div>
                    <div className='navbar-section-expanded' onClick={() => redirectTo('/property-maintenance')}>➔ Property Maintenance</div>
                    <div className='navbar-section-expanded' onClick={() => redirectTo('/owner-support')}>➔ Owner Support</div>
                    <div className='navbar-section-expanded' onClick={() => redirectTo('/reviews')}>➔ Reviews</div>
                    <div className='navbar-section-expanded' onClick={() => redirectTo('/articles')}>➔ Articles</div>
                    <div className='navbar-section-expanded' onClick={() => redirectTo('/about')}>➔ About</div>
                </div>
            }
        </div>

    )
}

export default NavBar