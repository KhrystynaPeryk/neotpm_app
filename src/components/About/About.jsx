import React from 'react'
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


const About = () => {
    return (
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
                            <button type='button'>Our approach in detail</button>
                        </div>
                    </div>
                    <div className='grid-row'>
                        <div className='text-container'>
                            <h2>Service Mix</h2>
                            <p>Consistency breeds confidence — make every touchpoint your audience experiences the same with our suite of service offerings. From Creative, to Strategy, Development and Marketing, take care of your holistic digital marketing needs in one place.</p>
                            <p>Just looking for one, specific digital service? You can invest in one at a time, obligation-free.</p>
                            <button type='button'>See our Services</button>
                        </div>
                        <div className='img-container'>
                            <img src={ServiceMix} alt='house'/>
                        </div>
                    </div>
                </div>
                <h2>Meet the team</h2>
                    <div className='team-members-container'>
                        <div className='member'>
                            <img src={Omar} alt='Omar'></img>
                            <div className='name'>Omar</div>
                            <div className='occupation'>Property Manager</div>
                        </div>
                        <div className='member'>
                            <img src={Trisha} alt='Trisha'></img>
                            <div className='name'>Trisha</div>
                            <div className='occupation'>Property Manager</div>
                        </div>
                        <div className='member'>
                            <img src={Maria} alt='Maria'></img>
                            <div className='name'>Maria</div>
                            <div className='occupation'>Property Manager Team Lead</div>
                        </div>
                        <div className='member'>
                            <img src={Jaypee} alt='Jaypee'></img>
                            <div className='name'>Jaypee</div>
                            <div className='occupation'>Property Maintenance Team Lead</div>
                        </div>
                        <div className='member'>
                            <img src={Angel} alt='Angel'></img>
                            <div className='name'>Angel</div>
                            <div className='occupation'>Accountant</div>
                        </div>
                    </div>
            </main>
        </div>
    )
}

export default About