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
            {stateProducts.length === 0 ?
                <div className='cart-header empty'>Your Cart is empty...😟</div> :
                <div className='cart-products-container'>
                    <div className='cart-header'>Your Cart</div>
                    <div className='cart-products-wrapper'>
                        {stateProducts.map((item) => {
                            return (
                                <div className='cart-products-items-wrapper' key={item.id}>
                                    <CartItem product={item} />
                                </div>    
                            )
                        })}
                    </div>
                    <div>
                        <div>Total:</div>
                        <div></div>
                    </div>
                    <div>
                        <button className='checkout-btn' type='button'>Checkout</button>
                    </div>     
                </div> 
            }
            <Footer />
        </div>
    )
}

export default Cart