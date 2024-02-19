import React from 'react'
import { useNavigate } from 'react-router-dom';
import './About.scss'
import NavBar from '../common/NavBar/NavBar'
import Sphere from '../../assets/images/about-us/abstract-about.png'
import ServiceMix from '../../assets/images/about-us/service-mix.png'
import UniqueApproach from '../../assets/images/about-us/unique-approach.png'
import Omar from '../../assets/photos/Omar.jpg'
import Trisha from '../../assets/photos/Trisha.jpg'
import Maria from '../../assets/photos/Maria.jpg'
import Angel from '../../assets/photos/Angel.jpg'
import Jaypee from '../../assets/photos/Jaypee.jpg'
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
                            <img src={Sphere} alt='house'/>
                        </div>
                    </div>
                    <div className='services-container'>
                        <div className='grid-row'>
                            <div className='img-container'>
                                <img src={UniqueApproach} alt='house'/>
                            </div>
                            <div className='text-container'>
                                <h2>Unique Approach</h2>
                                <p>Any good agency can deliver on the challenge you bring them. But, a strategic agency works with you to uncover the true reason behind your challenge, the one that is blocking your business's growth.</p>
                                <p>At Major Tom, you’ll benefit from our four-phased approach. This method shows us your whole organization, allowing us to identify the best strategy, the tactics that will bring you success, and how you can improve upon that success.</p>
                            </div>
                        </div>
                        <div className='grid-row'>
                            <div className='text-container'>
                                <h2>Service Mix</h2>
                                <p>Consistency breeds confidence — make every touchpoint your audience experiences the same with our suite of service offerings. From Creative, to Strategy, Development and Marketing, take care of your holistic digital marketing needs in one place.</p>
                                <p>Just looking for one, specific digital service? You can invest in one at a time, obligation-free.</p>
                                <button type='button' onClick={() => navigate('/property-management')}>See our Services</button>
                            </div>
                            <div className='img-container'>
                                <img src={ServiceMix} alt='house'/>
                            </div>
                        </div>
                    </div>
                    <h2>Meet the team</h2>
                    <div className='team-members-container'>
                        <TeamMember image={Omar} name={'Omar'} occupation={'Property Manager'} />
                        <TeamMember image={Trisha} name={'Trisha'} occupation={'Property Manager'} />
                        <TeamMember image={Maria} name={'Maria'} occupation={'Property Manager Team Lead'} />
                        <TeamMember image={Jaypee} name={'Jaypee'} occupation={'Property Maintenance Team Lead'} />
                        <TeamMember image={Angel} name={'Angel'} occupation={'Accountant'} />
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=971564420883" target="_blank" rel="noopener noreferrer">
                        <button type='button'>Let's Chat</button>
                    </a>
                    <div className='circle-container'>
                        <div className='circle'>
                            <div className='together-img'>
                                <img src={All} alt='all'></img>
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