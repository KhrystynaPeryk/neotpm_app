import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.scss'
import Logo from '../common/Logo/Logo'

const NotFound = () => {
  return (
    <div className='property-container'>
        <div className='property-before-table'>
            <Logo isCPlogoVisible={true}/>
        </div>
        <div className='notfound-container'>
            <h1>Sorry, the page you were trying to access was not found...</h1>
            <div className='notfound-link'>
                <Link to='/'>Go back to Home</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound