import { 
    ADD_PRODUCT_TO_CART,
    INCREMENT_CART_COUNT,
    DECREMENT_CART_COUNT,
    INCREMENT_PRODUCT_QTY,
    DECREMENT_PRODUCT_QTY,
    REMOVE_PRODUCT_FROM_CART,
} from "./types";

export const addAttributes = itemToCart => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: {itemToCart}
    }
}

export const removeProduct = itemToCart => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: {itemToCart}
    }
}

export const incrementCartCount = () => {
    return {
        type: INCREMENT_CART_COUNT
    }
}

export const decrementCartCount = () => {
    return {
        type: DECREMENT_CART_COUNT
    }
}

export const incrementProductQty = itemToCart => {
    return {
        type: INCREMENT_PRODUCT_QTY,
        payload: {itemToCart}
    }
}

export const decrementProductQty = itemToCart => {
    return {
        type: DECREMENT_PRODUCT_QTY,
        payload: {itemToCart}
    }
}