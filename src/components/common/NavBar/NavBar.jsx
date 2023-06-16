import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NavBar.scss'
import BurgerMenu from '../../../assets/images/burger-menu.png'
import Cart from '../../../assets/images/cart.png'

const NavBar = () => {
    const navigate = useNavigate();

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
        <div className='navbar-container'>
            <div className='navbar-burger'>
                <img src={BurgerMenu} alt='BurgerMenu' />
            </div>
            <div className='navbar-sections'>
                <div className='navbar-section navbar-management' onClick={redirectToPropertyManagement}>Property Management</div>
                <div className='navbar-section navbar-maintenance' onClick={redirectToPropertyMaintenance}>Property Maintenance</div>
                <div className='navbar-section navbar-documents' onClick={redirectToLegalDocumentationSupport}>Legal Document Support</div>
            </div>
            <div className='navbar-cart'>
                <img src={Cart} alt='Cart' />
            </div>
        </div>
    )
}

export default NavBar