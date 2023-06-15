import React from 'react'
import './Footer.scss'
import WhatsAppIcon from '../../../assets/images/whatsapp-icon.png'
import InstaIcon from '../../../assets/images/instagram-icon.png'

const Footer = () => {

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
                Phone: <a href="tel:+97124956738" className='footer-link'>+971 2 495 6738</a> <br />
                Email: <a className="footer-link" href="mailto:meara.he@transparentpm.ae">meara.he@transparentpm.ae</a>
            </div>
            <div className='footer-content-block'>
                <h1>CONNECT WITH US</h1>
                <div>
                    <img src={WhatsAppIcon} alt="WhatsApp" />
                    <img src={InstaIcon} alt="InstagramApp" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer