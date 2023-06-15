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
            <section>
                <div>
                    <img className='property-icon' src={LightHouse} alt='LightHouse' />
                </div>
                <div>LIGHT</div>
                <div>Lease Renewal Assitance</div>
                <div>-</div>
                <div>-</div>
                <div>-</div>
                <div>-</div>
                <div>From 3000 AED</div>
                <button type='button'>Buy</button>
                <div>Learn More</div>
            </section>
            <section>
                <div>
                    <img className='property-icon' src={StandardHouse} alt='StandardHouse' />
                </div>
                <div>STANDARD</div>
                <div>Lease Renewal Assitance</div>
                <div>Tenant Search and Liaison</div>
                <div>Monthly Account Statements</div>
                <div>Utility Transfer and Bill Payments</div>
                <div>-</div>
                <div>From 5000 AED per year</div>
                <button type='button'>Buy</button>
                <div>Learn More</div>
            </section>
            <section>
                <div>
                    <img className='property-icon' src={ExecutiveHouse} alt='ExecutiveHouse' />
                </div>
                <div>EXECUTIVE</div>
                <div>Lease Renewal Assitance</div>
                <div>Tenant Search and Liaison</div>
                <div>Monthly Account Statements</div>
                <div>Utility Transfer and Bill Payments</div>
                <div>Power of Attorney</div>
                <div>From 6500 AED per year</div>
                <button type='button'>Buy</button>
                <div>Learn More</div>
            </section>
        </div>
    </div>
  )
}

export default PropertyManagement