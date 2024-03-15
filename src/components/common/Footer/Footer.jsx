import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.scss'
import Crompton from '../../../assets/images/CP.png'
import Google from '../../../assets/images/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faSquareInstagram, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const redirectToSocialPage = (url) => {
        window.location.href = url;
    }

    const iconStyle = { 
        color: "#CBC82D", 
        backgroundColor: '#1e5258', 
        width: '30px', 
        height: '30px',
        cursor: 'pointer'
    }

    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-content-block'>
                    <h1>VISIT US</h1>
                    <address>
                        Tamouh Tower – 1305
                        <br />
                        Jazeerat Al Reem
                        <br />
                        Marina Square
                        <br />
                        Abu Dhabi
                    </address>
                    <p>
                        Mon – Fri
                        <br />
                        8:30 am til 5:30pm
                    </p>
                </div>
                <div className='footer-content-block'>
                    <h1>CONTACT US</h1>
                    Phone: <a href="tel:+971564420883" className='footer-link'>+971 56 442 0883,</a> <br />
                    <a href="tel:+97126453888" className='footer-link'>+971 (2) 645 3888</a> <br />
                    Email: <a className="footer-link" href="mailto:joshua.jamelo@transparentpm.ae">joshua.jamelo@transparentpm.ae</a>
                    <p>
                        <Link className='privacy-policy' to='/privacy-policy'>Privacy Policy</Link>
                    </p>
                </div>
                <div className='footer-content-block'>
                    <h1>CONNECT WITH US</h1>
                    <div className='footer-socials'>
                        <FontAwesomeIcon icon={faLinkedin} style={iconStyle} onClick={() => redirectToSocialPage('https://www.linkedin.com/company/transparent-property-management-uae/')} />
                        <FontAwesomeIcon icon={faSquareInstagram} style={iconStyle} onClick={() => redirectToSocialPage('https://www.instagram.com/transparentpm_auh/?fbclid=IwAR1aiMtOIfc8ThmLDSNeO8D3sTiKHGky8kmRPUhqZEx5lJDdIMAg1vXcr0w')} />
                        <FontAwesomeIcon icon={faFacebookSquare} style={iconStyle} onClick={() => redirectToSocialPage('https://www.facebook.com/tpmUAE')} />
                        <FontAwesomeIcon icon={faWhatsappSquare} style={iconStyle} onClick={() => redirectToSocialPage('https://api.whatsapp.com/send?phone=971564420883')} />
                    </div>
                </div>
                <div className='footer-content-block'>
                    <div className='crompton-container'>
                        <img src={Crompton} alt='logo' loading="lazy"/>
                    </div>
                </div>
                <div className='footer-content-block'>
                    <div className='google-container'>
                        <img src={Google} alt='google' onClick={() => redirectToSocialPage('https://g.page/r/Cef06Q5ohuvdEBM/review')} loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer