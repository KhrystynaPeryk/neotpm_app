import React from 'react'
import './CartItem.scss'
import { formatPropertyLocation } from '../../../helpers/formatPropertyLocation'

const CartItem = ({product}) => {
    return (
        <div className='cart-item-container'>
            <div className="cart-item-name">
                {product.service.type}. {product.service.type === 'Property Maintenance' ? (
                    'Your property details: ' + (product.service.details?.roomsNumber ? product.service.details.roomsNumber : ' ') + ' ' + (product.service.details.propertyType.charAt(0).toUpperCase() + product.service.details.propertyType.slice(1)) +
                    (product.service.details?.maidRoom === 'yes' ? ' + a maid room' : '') + (product.service.details?.driverRoom === 'yes' ? ' + a driver room' : '') + ' ' +
                    (formatPropertyLocation(product.service.details.propertyLocation)) + ' ' + (product.service.details.propertyLocation === 'SaadiyatYas' && (product.service.details.propertyType === 'villa' || product.service.details.propertyType === 'townhouse') ? product.service.details.villaPackages.charAt(0).toUpperCase() + product.service.details.villaPackages.slice(1) + ' Package' : '' )
                ) : product.service.details}
            </div>
            <div className="cart-item-qty"></div>
            <div className="cart-item-price">AED {product.price}</div>
            <div className="cart-item-remove">Remove</div>
        </div>
    )
}

export default CartItem