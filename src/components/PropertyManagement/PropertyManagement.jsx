import React from 'react'
import './PropertyManagement.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import LightHouse from '../../assets/images/light_house.png'
import StandardHouse from '../../assets/images/standard_house.png'
import ExecutiveHouse from '../../assets/images/executive_house.png'
import ArrowRight from '../../assets/images/arrow-right.png'

const PropertyManagement = () => {
  return (
    <div className='property-container'>
        <div className='property-before-table'>
            <NavBar />
            <Logo />
            <div className='property-header-wrapper'>
                <p className='property-header'>Our Property Management Packages</p>
            </div>
        </div>
        <div className='property-table-wrapper'>
            <section className='table-column'>
                <div>
                    <img className='property-icon' src={LightHouse} alt='LightHouse' />
                </div>
                <div className='table-section-header'>LIGHT</div>
                <div className='table-section-item'>Lease Renewal Assitance</div>
                <div className='table-section-item'>-</div>
                <div className='table-section-item'>-</div>
                <div className='table-section-item'>-</div>
                <div className='table-section-item'>-</div>
                <div className='table-section-price'>From 3000 AED</div>
                <button type='button'>Buy</button>
                <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
            </section>
            <section className='table-column'>
                <div>
                    <img className='property-icon' src={StandardHouse} alt='StandardHouse' />
                </div>
                <div className='table-section-header'>STANDARD</div>
                <div className='table-section-item'>Lease Renewal Assitance</div>
                <div className='table-section-item'>Tenant Search and Liaison</div>
                <div className='table-section-item'>Monthly Account Statements</div>
                <div className='table-section-item'>Utility Transfer and Bill Payments</div>
                <div className='table-section-item'>-</div>
                <div className='table-section-price'>From 5000 AED per year</div>
                <button type='button'>Buy</button>
                <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
            </section>
            <section className='table-column'>
                <div>
                    <img className='property-icon' src={ExecutiveHouse} alt='ExecutiveHouse' />
                </div>
                <div className='table-section-header'>EXECUTIVE</div>
                <div className='table-section-item'>Lease Renewal Assitance</div>
                <div className='table-section-item'>Tenant Search and Liaison</div>
                <div className='table-section-item'>Monthly Account Statements</div>
                <div className='table-section-item'>Utility Transfer and Bill Payments</div>
                <div className='table-section-item'>Power of Attorney</div>
                <div className='table-section-price'>From 6500 AED per year</div>
                <button type='button'>Buy</button>
                <div className='property-learn-more'>Learn More <img src={ArrowRight} alt='arrow-right'/> </div>
            </section>
        </div>
        <div className="home-services-image maintenance-img first" />
        <div className='property-before-table'>
            <div className='property-header-wrapper'>
                <p className='property-header subheader'>LIGHT Package</p>
            </div>
            <p>Experience the Convenience of Lease Renewal Assistance
                Discover the ease and efficiency of our Light Package, designed to provide you with a delightful taste of our exceptional services. With Transparent's Lease Renewal Assistance, we simplify the process, taking care of all the paperwork and negotiations on your behalf. Sit back and relax, knowing that your lease renewal is in the hands of our expert team. Experience hassle-free property management, even at its lightest level.
            </p>
            <button type='button'>Buy</button>
        </div>
        <div className="home-services-image maintenance-img second" />
        <div className='property-before-table'>
            <div className='property-header-wrapper'>
                <p className='property-header subheader'>STANDARD Package</p>
            </div>
            <p>Elevate Your Property Management Experience
                Elevate your property management experience with our comprehensive Standard Package. At Transparent, we go above and beyond to ensure your property is impeccably managed. From rent collection and tenant screening to regular property inspections and maintenance coordination, we handle it all. With our unwavering commitment to excellence, your property investment will thrive under our care. Trust in our expertise and let us unlock the full potential of your property.
            </p>
            <button type='button'>Buy</button>
        </div>
        <div className="home-services-image maintenance-img third" />
        <div className='property-before-table'>
            <div className='property-header-wrapper'>
                <p className='property-header subheader'>EXECUTIVE Package</p>
            </div>
            <p>Seamlessly Managed Properties with Added Power of Attorney
                Take your property management to new heights with our exclusive Executive Package. In addition to our comprehensive property management services, this package offers the invaluable benefit of Power of Attorney assistance. Our experienced team will handle all legal matters related to your property, ensuring seamless transactions and efficient representation on your behalf. Experience the peace of mind that comes with entrusting your property to Transparent's expert hands. Maximize your property's potential while enjoying the added convenience of our Executive Package.
            </p>
            <button type='button'>Buy</button>
        </div>
        <div className='footer-wrapper'>
            <Footer />
        </div>
    </div>
  )
}

export default PropertyManagement