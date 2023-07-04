import React from 'react'
import './Footer.scss'
import WhatsAppIcon from '../../../assets/images/whatsapp-icon.png'
import InstaIcon from '../../../assets/images/instagram-icon.png'
import Crompton from '../../../assets/images/cp.webp'
import Google from '../../../assets/images/google.png'

const Footer = () => {

    const redirectToReviews = () => {
        window.open('https://www.google.com/search?q=Transparent+Property+Management&sxsrf=AB5stBhtxvzW56baISdwiP9fGzUoYMabxQ%3A1688454588514&ei=vMWjZJb-HvOQkdUPhcaZoAQ&ved=0ahUKEwiWzN6_v_T_AhVzSKQEHQVjBkQQ4dUDCA8&uact=5&oq=Transparent+Property+Management&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzINCC4QrwEQxwEQigUQJzIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yGQguEK8BEMcBEIoFEJcFENwEEN4EEOAEGAFKBAhBGABQAFgAYJcHaABwAHgAgAHZAYgB2QGSAQMyLTGYAQCgAQKgAQHAAQHaAQYIARABGBQ&sclient=gws-wiz-serp#lrd=0x3e5e67b3c30d3707:0xddeb86680ee9f4e7,1,,,,', '_blank');
    };

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
                    <div className='footer-socials'>
                        <a href="https://api.whatsapp.com/send?phone=971504420182" target="_blank" rel="noopener noreferrer">
                            <img src={WhatsAppIcon} alt="WhatsApp"/>
                        </a>
                        <a href="https://www.instagram.com/transparentpm_auh/?fbclid=IwAR1aiMtOIfc8ThmLDSNeO8D3sTiKHGky8kmRPUhqZEx5lJDdIMAg1vXcr0w" target="_blank" rel="noopener noreferrer">
                            <img src={InstaIcon} alt="InstagramApp" />
                        </a>
                    </div>
                </div>
                <div className='footer-content-block'>
                    <div className='crompton-container'>
                        <img src={Crompton} alt='logo' />
                    </div>
                </div>
                <div className='footer-content-block'>
                    <div className='google-container'>
                        <img src={Google} alt='google' onClick={redirectToReviews}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer