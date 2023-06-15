import React from 'react'
import './PropertyManagement.scss'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import LightHouse from '../../assets/images/light_house.png'
import StandardHouse from '../../assets/images/standard_house.png'
import ExecutiveHouse from '../../assets/images/executive_house.png'

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
                <div className='property-learn-more'>Learn More</div>
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
                <div className='property-learn-more'>Learn More</div>
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
                <div className='property-learn-more'>Learn More</div>
            </section>
        </div>
    </div>
  )
}

export default PropertyManagement