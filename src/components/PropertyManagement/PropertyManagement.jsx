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
        <div>
            <NavBar />
            <div className='header-container'>
                <div className='logo-container'>
                    <Logo />
                </div>
            </div>
            <div className='main-container'>
                <div className='main-text-box property-header-container'>
                    <p className='header'>Our Property Management Packages</p>
                </div>
            </div>
        </div>
        <div className='property-table-wrapper'>
            <section>
                <div>
                    <img className='property-icon' src={LightHouse} alt='LightHouse' />
                </div>
                <div>LIGHT</div>
            </section>
            <section>
                <div>
                    <img className='property-icon' src={StandardHouse} alt='StandardHouse' />
                </div>
                <div>STANDARD</div>
            </section>
            <section>
                <div>
                    <img className='property-icon' src={ExecutiveHouse} alt='ExecutiveHouse' />
                </div>
                <div>EXECUTIVE</div>
            </section>
        </div>
    </div>
  )
}

export default PropertyManagement