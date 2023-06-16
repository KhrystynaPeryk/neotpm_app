import React from 'react'
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import './PropertyMaintenance.scss'

const PropertyMaintenance = () => {
    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo />
                <div className='property-header-wrapper'>
                    <p className='property-header'>Our Property Maintenance Service</p>
                </div>
            </div>
            <div className='property-features-wrapper'>
                <p>In order to provide you with a quote for a maintenance service, please select the below:</p>
                <div className='select-container'>
                    <select name="type-property" id="type-property">
                        <option value="">Property Type</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                    </select>
                    <select name="rooms" id="rooms">
                        <option value="">Number of rooms</option>
                        <option value="1r">1</option>
                        <option value="2r">2</option>
                        <option value="3r">3</option>
                        <option value="4r">4</option>
                        <option value="5r">5</option>
                        <option value="6r">6</option>
                    </select>
                    <select name="location" id="location">
                        <option value="">Property Location</option>
                        <option value="center">Abu Dhabi Center</option>
                        <option value="yas">Yas Island</option>
                        <option value="reem">Al Reem Island</option>
                        <option value="saadiyat">Saadiyat Island</option>
                    </select>
                </div>
                <div>
                    <div>
                        <input type="checkbox" id="driver" name="driver" />
                        <label for="driver">Driver's room/Garage</label>
                    </div>
                    <div>
                        <input type="checkbox" id="maid" name="maid" />
                        <label for="maid">Maid's room</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyMaintenance