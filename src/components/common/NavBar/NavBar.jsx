import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import './NavBar.scss'
import BurgerMenu from '../../../assets/images/burger-menu.png'
import Cart from '../../../assets/images/cart.png'

const NavBar = () => {
    const navigate = useNavigate();

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false);

    // store the isBurgerMenuVisible in redux 
    const [isBurgerMenuVisible, setBurgerMenuVisible] = useState(true)

    const expandedNavbarRef = useRef(null);
    const handleClickOutsideNavBar = (event) => {
        if (expandedNavbarRef && !expandedNavbarRef?.current?.contains(event.target)) {
            setIsNavExpanded(false)
        } else {
            setIsNavExpanded(true)
        }
      }

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                setBurgerMenuVisible(true);
            }  else {
                setBurgerMenuVisible(false);
                setIsNavExpanded(false);
            }
        };

        // const handleClickOutside = (event) => {
        //     if (expandedNavbarRef.current && !expandedNavbarRef.current.contains(event.target)) {
        //       setIsNavExpanded(false);
        //     }
        // };
    
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

    const redirectToPropertyManagement = () => {
        navigate('/property-management');
    };

    const redirectToPropertyMaintenance = () => {
        navigate('/property-maintenance');
      };

    const redirectToLegalDocumentationSupport = () => {
        navigate('/legal-documentation-support')
    }

    return (
        <div className='navbar-container-wrapper'>
            <div className='navbar-container'>
                <div className={isBurgerMenuVisible ? 'navbar-burger' : 'hidden' }>
                    <img src={BurgerMenu} alt='BurgerMenu' onClick={ExpandNavBar}/>
                </div>
                <div className={isNavExpanded ? 'hidden' : 'navbar-sections' }>
                    <div className='navbar-section navbar-management' onClick={redirectToPropertyManagement}>Property Management</div>
                    <div className='navbar-section navbar-maintenance' onClick={redirectToPropertyMaintenance}>Property Maintenance</div>
                    <div className='navbar-section navbar-documents' onClick={redirectToLegalDocumentationSupport}>Legal Document Support</div>
                </div>
                <div className='navbar-cart'>
                    <img src={Cart} alt='Cart' />
                </div>
            </div>
            {isNavExpanded &&
                <div ref={expandedNavbarRef} className={`navbar-container-expanded ${isAnimating ? 'animate' : ''}`}>
                    <div className='navbar-section navbar-management' onClick={redirectToPropertyManagement}>➔ Property Management</div>
                    <div className='navbar-section navbar-maintenance' onClick={redirectToPropertyMaintenance}>➔ Property Maintenance</div>
                    <div className='navbar-section navbar-documents' onClick={redirectToLegalDocumentationSupport}>➔ Legal Document Support</div>
                </div>
            }
        </div>

    )
}

export default NavBar