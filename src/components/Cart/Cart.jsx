import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import CartItem from './component/CartItem';
import NavBar from '../common/NavBar/NavBar'
import Logo from '../common/Logo/Logo'
import Footer from '../common/Footer/Footer'
import './Cart.scss'
import { calculateTotalInCart } from '../../helpers/calculateTotalInCart';
import { formatPriceInCart } from '../../helpers/formatPriceInCart';

const Cart = () => {
    const stateProducts = useSelector((state) => state.products)
    const [checkoutBtnName, setCheckoutBtnName] = useState('Checkout')

    const handleCheckout = () => {
        setCheckoutBtnName('Thank you for your interest in our services!')
    }
    return (
        <div className='property-container'>
            <div className='property-before-table'>
                <NavBar />
                <Logo isCPlogoVisible={true}/>
            </div>
            {stateProducts.length === 0 ?
                <div className='cart-header empty'>Your Cart is empty...😟</div> :
                <div className='cart-products-container'>
                    <div className='cart-header'>Your Cart</div>

                        {stateProducts.map((item) => {
                            return (
                                <div className='cart-products-items-wrapper' key={item.id}>
                                    <CartItem product={item} />
                                </div>    
                            )
                        })}

                    <div className='cart-total-wrapper'>
                        <div><b>Total:</b></div>
                        <div><b>AED {formatPriceInCart(calculateTotalInCart(stateProducts))}</b></div>
                    </div>
                    <div>
                        <button className='checkout-btn' type='button' onClick={handleCheckout}>{checkoutBtnName}</button>
                    </div>     
                </div> 
            }
            <div className="footer-wrapper">
                <Footer />
            </div>
        </div>
    )
}

export default Cart