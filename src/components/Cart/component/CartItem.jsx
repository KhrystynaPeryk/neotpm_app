import React from 'react'
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../store/actions/actions'
import './CartItem.scss'
import { formatPropertyLocation } from '../../../helpers/formatPropertyLocation'
import { formatPriceInCart } from '../../../helpers/formatPriceInCart';

const CartItem = ({product}) => {

    const dispatch = useDispatch();

    const removeItemFromCart = () => {
        dispatch(removeProduct(product.id))
    }

    return (
        <div className='cart-item-container'>
            <div className="cart-item-name-service">
                <div className="cart-item-name"><b>{product.service.type} {product.service.type === 'Property Maintenance' ? 'Annual Contract' : ''}</b></div>
                {product.service.type === 'Property Maintenance' ? (
                    'Service details: ' + (product.service.details?.roomsNumber ? product.service.details.roomsNumber : ' ') + ' ' + (product.service.details.propertyType.charAt(0).toUpperCase() + product.service.details.propertyType.slice(1)) +
                    (product.service.details?.maidRoom === 'yes' ? ' + a maid room' : '') + (product.service.details?.driverRoom === 'yes' ? ' + a driver room' : '') + ' ' +
                    (formatPropertyLocation(product.service.details.propertyLocation)) + ' ' + (product.service.details.propertyLocation === 'SaadiyatYas' && (product.service.details.propertyType === 'villa' || product.service.details.propertyType === 'townhouse') ? '- ' + product.service.details.villaPackages.charAt(0).toUpperCase() + product.service.details.villaPackages.slice(1) + ' Package' : '' )
                ) : product.service.details}
            </div>
            <div className="cart-item-price-wrapper">
                <div className="cart-item-price">AED {formatPriceInCart(product.price)}</div>
                <div className="cart-item-remove" onClick={removeItemFromCart}>Remove</div>
            </div>
        </div>
    )
}

export default CartItem