import React from 'react'
import './About.scss'
import NavBar from '../common/NavBar/NavBar'
import Sphere from '../../assets/images/about-us/abstract-about.png'
import Maria from '../../assets/photos/Maria.png'
import Angel from '../../assets/photos/Angel.png'
import Jaypee from '../../assets/photos/Jaypee.png'
import TeamMember from './components/TeamMember/TeamMember'
import Meara from '../../assets/photos/Meara.png'
import All from '../../assets/photos/all.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import Cards from './components/Cards/Cards';

const About = () => {

    const redirectToSocialPage = (url) => {
        window.location.href = url;
    }

    const iconStyle = { 
        color: "#CBC82D", 
        backgroundColor: '#238DC1', 
        width: '50px', 
        height: '50px',
        cursor: 'pointer'
    }

    return (
        <>
            <div className='property-container'>
                <div className='property-before-table'>
                    <NavBar />
                </div>
                <main className='about-main-container'>
                    <div className='head-container'>
                        <div className='text-container'>
                            <h1>Hi, we're <br></br> Transparent Property</h1>
                            <p>Our team is committed to ensuring transparency and trust in every interaction.</p>
                        </div>
                        <div className='sphere-container'>
                            <img src={Sphere} alt='house' loading="lazy"/>
                        </div>
                    </div>
                    <h1>Why You'll Trust Us</h1>
                    <div className='services-container'>
                        <div className='grid-row'>
                            <div className='text-container'>
                                <h2>Our Unique Approach</h2>
                                <p>At TPM, you'll benefit from our comprehensive approach tailored to your unique property management needs.</p>
                                <p>Our method involves a deep dive into your rental requirements, enabling us to devise the most effective strategies, implement the right tactics for success, and guide you on how to enhance your property management experience.</p>
                                <p>What separates us from other Property Management companies in Abu Dhabi:</p>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <Cards />
                        </div>
                    </div>
                    <h2>Meet the team</h2>
                    <div className='team-members-container'>
                        <TeamMember image={Meara} name={'Meara'} occupation={'Direactor'} />
                        <TeamMember image={Maria} name={'Maria'} occupation={'Head of Property Management'} />
                        <TeamMember image={Jaypee} name={'Jaypee'} occupation={'Property Maintenance Team Lead'} />
                        <TeamMember image={Angel} name={'Angel'} occupation={'Accountant'} />
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=971564420883" target="_blank" rel="noopener noreferrer">
                        <button type='button'>Let's Chat</button>
                    </a>
                    <div className='circle-container'>
                        <div className='circle'>
                            <div className='together-img'>
                                <img src={All} alt='all' loading="lazy"></img>
                            </div>
                            <div className='socials'>
                                <h2>Follow us on Social</h2>
                                <p>Stay informed with the latest industry insights, keep up with our agency's updates, and get an exclusive behind-the-scenes look at Transparent Property Management. Follow us on social media:</p>
                                <div className='social-icons'>
                                    <FontAwesomeIcon icon={faLinkedin} style={iconStyle} onClick={() => redirectToSocialPage('https://www.linkedin.com/company/transparent-property-management-uae/')} />
                                    <FontAwesomeIcon icon={faSquareInstagram} style={iconStyle} onClick={() => redirectToSocialPage('https://www.instagram.com/transparentpm_auh/?fbclid=IwAR1aiMtOIfc8ThmLDSNeO8D3sTiKHGky8kmRPUhqZEx5lJDdIMAg1vXcr0w')} />
                                    <FontAwesomeIcon icon={faFacebookSquare} style={iconStyle} onClick={() => redirectToSocialPage('https://www.facebook.com/tpmUAE')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default About