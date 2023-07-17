import { 
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
} from "../actions/types";


export function changeCart(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_PRODUCT_TO_CART:
            return [...state, payload];

        case REMOVE_PRODUCT_FROM_CART:
            const itemIdToRemove = payload;
            return state.filter((item) => item.id !== itemIdToRemove)
        default:
        return state;
    }
}
