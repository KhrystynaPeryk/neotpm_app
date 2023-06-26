import { 
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
} from "./types";

export const addProduct = (itemToCart) => (dispatch) => {
    return dispatch(
        {
            type: ADD_PRODUCT_TO_CART,
            payload: itemToCart
        }
    )
}

export const removeProduct = (itemToCart) => (dispatch) => {
    return dispatch(
        {
            type: REMOVE_PRODUCT_FROM_CART,
            payload: itemToCart
        }
    )    
}
