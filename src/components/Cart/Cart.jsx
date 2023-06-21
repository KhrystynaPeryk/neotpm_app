import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './component/CartItem';
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import './Cart.scss'

const Cart = () => {

    const stateProducts = useSelector((state) => state.products)
    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo />
            </div>
            {stateProducts.LENGTH === 0 ?
                <div>Your Cart is empty...</div> :
                <div>
                    <div>Your Cart</div>
                </div> 
            }
            <Footer />
        </div>
    )
}

export default Cart