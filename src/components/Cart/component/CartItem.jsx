import React from 'react'
import './CartItem.scss'

const CartItem = ({product}) => {
    return (
        <div className='cart-item-container'>
            <div className="cart-item-name">{product.service.type}: {product.service.details}</div>
            <div className="cart-item-qty"></div>
            <div className="cart-item-price">AED {product.price}</div>
            <div className="cart-item-remove">Remove</div>
        </div>
    )
}

export default CartItem