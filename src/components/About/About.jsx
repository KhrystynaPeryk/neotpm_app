import React from 'react'
import { useNavigate } from 'react-router-dom';
import './About.scss'
import NavBar from '../common/NavBar/NavBar'
import Sphere from '../../assets/images/about-us/abstract-about.png'
import ServiceMix from '../../assets/images/about-us/service-mix.png'
import UniqueApproach from '../../assets/images/about-us/unique-approach.png'
import Omar from '../../assets/photos/Omar.png'
import Trisha from '../../assets/photos/Trisha.png'
import Maria from '../../assets/photos/Maria.png'
import Angel from '../../assets/photos/Angel.png'
import Jaypee from '../../assets/photos/Jaypee.png'
import TeamMember from './components/TeamMember/TeamMember'
import All from '../../assets/photos/all.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const navigate = useNavigate()

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
                            <div className='img-container'>
                                <img src={UniqueApproach} alt='house' loading="lazy"/>
                            </div>
                            <div className='text-container'>
                                <h2>Unique Approach</h2>
                                <p>Any competent agency can address the immediate needs you present. However, a strategic partner delves deeper to discover the root cause of your challenges.</p>
                                <p>At Transparent Property Management, you'll benefit from our comprehensive approach tailored to the unique dynamics of UAE property market. Our method involves a deep dive into your property management requirements, enabling us to devise the most effective strategies, implement the right tactics for success, and guide you on how to enhance this success further.</p>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <div className='text-container'>
                                <h2>Service Mix</h2>
                                <p>Consistency is the cornerstone of trust — and at Transparent Property Management, we understand that every interaction matters in building that trust. Our comprehensive suite of services ensures a seamless experience for both tenants and landlords.</p>
                                <p>Our aim is to simplify property management, making it a transparent, efficient, and hassle-free process for every client we serve.</p>
                                <button type='button' onClick={() => navigate('/property-management')}>See our Services</button>
                            </div>
                            <div className='img-container'>
                                <img src={ServiceMix} alt='house' loading="lazy"/>
                            </div>
                        </div>
                    </div>
                    <h2>Meet the team</h2>
                    <div className='team-members-container'>
                        <TeamMember image={Omar} name={'Omar'} occupation={'Property Manager'} />
                        <TeamMember image={Trisha} name={'Trisha'} occupation={'Property Manager'} />
                        <TeamMember image={Maria} name={'Maria'} occupation={'Head of Property Manager'} />
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
                                    <FontAwesomeIcon icon={faFacebookSquare} style={iconStyle} onClick={() => redirectToSocialPage('https://www.facebook.com/transparent.auh')} />
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